// ==UserScript==
// @name Greasy Fork API
// @namespace -
// @version 2.0.1
// @description Get information from Greasy Fork and do actions in it.
// @author NotYou
// @license LGPL-3.0
// @connect greasyfork.org
// @grant GM_xmlhttpRequest
// @grant GM.xmlHttpRequest
// @grant GM_openInTab
// @grant GM.openInTab
// ==/UserScript==

class GreasyFork {
	constructor() {
		if(location.hostname === 'greasyfork.org' || location.hostname === 'sleazyfork.org') {
			this.host = location.host
			return
		}

		throw new Error('Invalid instance initialization location, host is not valid.')
	}

	static get __xmlHttpRequest() {
		return GM_xmlhttpRequest || GM.xmlHttpRequest
	}

	static get __openInTab() {
		return GM_openInTab || GM.openInTab
	}

	static get INVALID_ARGUMENT_ERROR() {
		return 'Argument "{0}" is not valid'
	}

	static get PARSING_ERROR() {
		return 'Unexpected parsing error, "{0}"'
	}

	static get INVALID_PAGE_ERROR() {
		return 'Current page is not valid'
	}

	static __format(str, ...args) {
		let result = str

		for (let i = 0; i < args.length; i++) {
			const arg = args[i]

			result = result.replace(new RegExp(`\\{${i}\\}`, 'g'), arg)
		}

		return result
	}

	static __isId(id) {
		return typeof id === 'string' && /^\d+$/.test(id)
	}

	static get languages() {
		return [
			'ar', 'bg', 'cs', 'da', 'de', 'el', 'en', 'eo', 'es', 'fi', 'fr', 'fr-CA', 'he', 'hu', 'id', 'it', 'ja', 'ka', 'ko', 'nb', 'nl', 'pl', 'pt-BR', 'ro', 'ru', 'sk', 'sr', 'sv', 'th', 'tr', 'uk', 'ug', 'vi', 'zh-CN', 'zh-TW'
		]
	}

	static get version() {
		return '2.0.1'
	}

	static parseScriptNode(node) {
		if (!(node instanceof HTMLElement) || !node.dataset.scriptId) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'node'))
		}

		const {
			scriptId,
			scriptName,
			scriptAuthors,
			scriptDailyInstalls,
			scriptTotalInstalls,
			scriptRatingScore,
			scriptCreatedDate,
			scriptUpdatedDate,
			scriptType,
			scriptVersion,
			sensitive,
			scriptLanguage,
			cssAvailableAsJs
		} = node.dataset

		const ratingsNode = node.querySelector('dd.script-list-ratings')
		let ratings = {}

		if(ratingsNode) {
			const ratingsGood = Number(ratingsNode.querySelector('.good-rating-count').textContent)
			const ratingsOk = Number(ratingsNode.querySelector('.ok-rating-count').textContent)
			const ratingsBad = Number(ratingsNode.querySelector('.bad-rating-count').textContent)

			ratings = {
				ratingsGood,
				ratingsOk,
				ratingsBad
			}
		}

		return Object.assign({
			scriptId,
			scriptName,
			scriptAuthors: JSON.parse(scriptAuthors),
			scriptDailyInstalls: Number(scriptDailyInstalls),
			scriptTotalInstalls: Number(scriptTotalInstalls),
			scriptRatingScore: Number(scriptRatingScore),
			scriptCreatedDate,
			scriptUpdatedDate,
			scriptType,
			scriptVersion,
			sensitive: sensitive === 'true',
			scriptLanguage,
			cssAvailableAsJs: cssAvailableAsJs === 'true',
			node
		}, ratings)
	}

	static parseScriptMetadata(code) {
		if (typeof code !== 'string') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'code'))
		}

		const reScriptMetadata = /\/\/ ==UserScript==\n(.*?[\s\S]+)\n\/\/ ==\/UserScript==/
		const matched = code.match(reScriptMetadata)

		if (!Boolean(matched)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'code'))
		}

		const metadataResponse = {}
		const metadata = matched[1]

		const metadataChunks = metadata.split('\n')

		for (let i = 0; i < metadataChunks.length; i++) {
			const metadataChunk = metadataChunks[i]

			try {
				const { metaKey, metaValue } = metadataChunk.match(/\/\/ @(?<metaKey>[a-zA-Z\-\d\:]+)\s+(?<metaValue>.+)/).groups

				metadataResponse[metaKey] = metaValue
			} catch(error) {
				throw new Error(GreasyFork.__format(GreasyFork.PARSING_ERROR, error))
			}
		}

		return metadataResponse
	}

	static getScriptData(id) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/scripts/${id}.json`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static getScriptCode(id, isLibrary = false) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		const url = `https://greasyfork.org/scripts/${id}/code/userscript` + (isLibrary ? '.js' : '.user.js')

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url,
				onload: response => {
					const code = response.responseText

					return res(code)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static getScriptHistory(id) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/scripts/${id}/versions.json`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static getScriptStats(id) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/scripts/${id}/stats.json`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static getScriptSet(id, page = 1) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		if (typeof page !== 'number') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'page'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/scripts.json?set=${id}&page=${page}&filter_locale=0`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static getUserData(id) {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/users/${id}.json`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					return rej(err)
				}
			})
		})
	}

	static searchScripts(query, page = 1) {
		if (typeof query !== 'string') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'query'))
		}

		if (typeof page !== 'number') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'page'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/scripts.json?q=${query}&page=${page}`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					console.error(err)
					return rej([])
				}
			})
		})
	}

	static searchUsers(query, page = 1) {
		if (typeof query !== 'string') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'query'))
		}

		if (typeof page !== 'number') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'page'))
		}

		return new Promise((res, rej) => {
			GreasyFork.__xmlHttpRequest({
				url: `https://greasyfork.org/users.json?q=${query}&page=${page}`,
				onload: response => {
					const data = JSON.parse(response.responseText)

					return res(data)
				},
				onerror: err => {
					console.error(err)
					return rej([])
				}
			})
		})
	}

	static installScript(id, type = 'js') {
		if (!GreasyFork.__isId(id)) {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'id'))
		}

		if (type !== 'js' && type !== 'css') {
			throw new Error(GreasyFork.__format(GreasyFork.INVALID_ARGUMENT_ERROR, 'type'))
		}

		const URL = `https://greasyfork.org/scripts/${id}/code/userscript.user.${type}`

		GreasyFork.__openInTab(URL)
	}

	listScripts() {
		const scriptList = document.querySelector('.script-list')

		if (scriptList === null) {
			throw new Error(GreasyFork.INVALID_PAGE_ERROR)
		}

		const userScripts = scriptList.querySelectorAll('[data-script-id]')
		const result = []
		const typeMap = {
			'browse-script-list': 'browse',
			'user-script-list': 'user'
		}
		const type = typeMap[scriptList.id] || 'unknown'

		for (let i = 0; i < userScripts.length; i++) {
			const userScript = userScripts[i]

			result.push(
				GreasyFork.parseScriptNode(userScript)
			)
		}

		return {
			type,
			list: result
		}
	}

	signOut() {
		GreasyFork.__xmlHttpRequest({
			url: `https://${this.host}/users/sign_out`
		})
	}
}
