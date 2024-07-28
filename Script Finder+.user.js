// ==UserScript==
// @name                    Script Finder+
// @name:zh-CN              Script Finder 油猴脚本查找
// @namespace               https://greasyfork.org/zh-CN/users/1169082
// @version 0.1.6.20
// @description             Script Finder allows you to find userscripts from greasyfork on any website.
// @description:zh-CN       Script Finder 在任何网站上找到适用于该网站的greasyfork油猴脚本
// @author                  shiquda   &  人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @namespace               https://github.com/shiquda/shiquda_UserScript
// @supportURL              https://github.com/shiquda/shiquda_UserScript/issues
// @match                   *://*/*
// @connect                 greasyfork.org
// @icon                    data:image/jpeg;base64,/9j/7gAhQWRvYmUAZIAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8IAEQgAgACAAwEiAAIRAQMRAf/EANkAAAIDAQEBAQAAAAAAAAAAAAAGBAUHAQIDCAEBAAMBAQEAAAAAAAAAAAAAAAQFBgMCARAAAAYCAQMDAwUBAAAAAAAAAAIDBAUGAQcXECAWETE2EhQ1MEAyMxU3EQABAgMDAwsPCAkFAAAAAAACAQMAEgQREwUikzUQITGRMkJS0iPTBlFicoKSorIzQ2NzFDTUNiBhcVODo7MVMEBBgbHR4yRkoXTE5BYSAAIABAQCCAUFAAAAAAAAAAECABEhEiAxIgMQQTBRYTJSgrLScYGSojOhQmJyE//aAAwDAQECEQMRAAAA1UABbUp8LUTL27l0YhdIsliF0GIXQYhdBiIksKyzWe/FNA0+c9Ns28oLxWGkgTVYaQVhpDHGpXsiPo2euYwU9xz34ygsK/U5uc2UD7nr7Po2lESTmppQZq33YZlpqswkgpPRcq7RmU+F5jBfUvZDSzUF3mBp5BmZhfOMM+yDU2PxXJrzL8e0DQJL978iW6EjhmlvYfLtyto8eFCl2vano3ZXpn5rNCalSw8eoNfexL6mladl+oceoBVWS38vt8RpEqrNJM20UTpsJ1DnfBlfA12X0O1Q3zOX+Z99T4kmh40hSF2FIXYUkVlrxzlY40/flIBrcvI1Chvs/eFLdEGavDCC8MILwwgvDCC9IueGUDYaOhbAM5ff/9oACAECAAEFAA3jFVSvGeW2e1oTB3AkXSa5u1JTKahD4OR+hhFftjUEljlLguJNYqi/T1BlPTOPX0buVEDKyThQvXJc5EfGpJkmP59uPcPUVkz9uPcSDlNc3bj3/wBFp0//2gAIAQMAAQUAC8gmmZq6w4x2uj5IgGLY6Je1QmDkOTJDMlsqo9sguokUxsmzHpGTR6lTznGfQLtyLFSj0E89cZxgP5BRQ8V/Htz0aKpKE7c+wYt1ES9uR9g56f/aAAgBAQABBQD9lP2rDM7l+9d5ZPnDRXkOljkOljkOljkOljkOljkOljkOljkOljGwqXnMdKxkoj0sMiaPi85znISIU6vGFGHGFGHGFGHGFGHGFGHGFGHGFGF/rteZyUPqGrtGtpprmlGr8yjOQovPr9n0Z1GLRQ77Y0mX21PEdthzSdqOm9GrzyuV8WpkZ3D9Dxl4sK1RibBFspKobGcSHhOzh4Vs4eE7OHhWzhU4udjI1T/t3ZnGM4no7EdJioOzIS/eemKmvrmRj2mFbtUUssrjV37oO7oZs6kpBeRdgkoeIPzBKjmCVHMEqOYJUU++vbHIOnbZm3lds4XcybHYDxqaDJLvZqqtoFPXus8RhhL/AJbpToc6CfZLyzKHjmbGe2dISlwrtRTj6HLTjmz2yNqzPX9CUYH6StTlVHklDSUXH0qJj5SLfWWvRrjzaojzaogt0qRze42C+zYrW6n5i2qV+qQFOY2DYbqTXhoVKLWYqKKSfXYvwrWHwaY19Vpp/wAT0gcT0gF1RSMGeum8bHHfYfSkTN3ZwyQ1jYZteRbRjBcRv5HrsX4VrD4N2bclPsalTKbDw8SDG+kpzGOYRVfj2TbrsX4VrD4NZoPYjyX8Z28C1nbv1IFVKjeKnLWOd6K/1dGNmm1XomL5ds2vyLcQmHu2JiMg3e1oOL8j3CPI9wjyPcI8j3CPI9wiSu+0YprDSGJOIV/q6Rv5EbBg5eKnY7cNUcN+V6QOV6QOV6QOV6QOV6QOV6QOV6QJ+/UGdh6FsxGBaye3q2RDohTYxBbo8pdUercf0wcf0wcf0wcf0wcf0wcf0wcf0wcf0wcf0wNKlWY0365i/UXwMeB9f//aAAgBAgIGPwCA7EbanKYub6YUFrw85Ut7uLbVsi1fLq4J/nPRcJnnPw4lcZqQ0K65MLh84IHdbWvm5YnG4twABFSPTAVRIASAiS1CCyf8ufGUWrqaKwWSVRI3CLZhAc7BL9cEshA3HUNuPq1VtHLzRtf1PQA7zh2ebUJb1YhwQ7c9IIMxLH+T7X9vD//aAAgBAwIGPwCCqg7jDOVF+qGIW0rKdbs8W4y5gU+fBr5a7TTs8WJkOTAiGRs1MjAJ7y6G8uJDttaSSDQH1QWYzJqTGqhc3y7MFx0r1xSArzpUWxdIuR4zPB1mCiMVRaaf3H2xufEdARtKUCSFQB6cR4OHlqIlIzx/j+5Pdw//2gAIAQEBBj8A/UipKCw3x1nHV1xBeCKb84Val83bf2ES2fuDcjAm08bIoSKcpKiWb6YU3UaVZ2j4kaVZ2j4kaVZ2j4kaVZ2j4kaVZ2j4kaVZ2j4kaVZ2j4kaVZ2j4kWfmzPfcSFew6qaq201iJo0Oxeocu47bVcdbWx07G2l6hFvu0GY4tXXVdldQAJLRIkQk+ZVjRiZ5/no0Ymef56NGJnn+ejRiZ5/no0Ymef56NGJnn+ejRiZ5/nooOjfRzDRHFa5RI3VcdKQCJQaDlHHAGchNx0/JNN+cgRxIDxCqUeUcIzbBC/bctsk3KPpCcgOlHRR9xtqnJEqqYynRAJUH7amIsh1pz0no6TFWUlGqbQiC22U0yHmpt9duiYalN1Lxbfpl1QR8FdqEsUnZiTK2ckRWSX9AtNgtSlLiCsjcPkSigojCm7lALhDM3ebyNPN5933eHKapxtl1h4VB1snnFQhLWIS/t4awysdB54TM1Vq2QZ1mkEjQCLuNRxQS06dUeRPmG1D+7ItUqvCse9TZbEGypVIwkURQZuRAry+lvbz7PycPNY7iP5k8bkzRa6yDZZLeOIJlNFQ/S9I0bp3HCJluZwJQVbQC7bAgGQcnJj4mTOvc3HxMmde5uPiZM69zcfEyZ17m4JjHMQ/MqknFIHNdZQVBRG7w0E3MpCPKhr0P/FP5KoqWousqLDrAeKXLa+YS3va7nUFq3IqRUFT50ScF739AHStKlLkWpFp5cqe7Wl3e5u5CvItq6lmnTquuCHhkMWHi9J2rol4ClAUdHiTD1Q6tjbaFrkuzKMyJlaj9N6ohqy4baHeWWykoIUt2XU4UFVP2IRWIgpsCKbkR1ExJthao6ZZhYFVRTVciW0Rc4XAj4cdzp+6x8OO50/dY+HHc6fusfDjudP3WHKKowZ6hEG1cSoUlMLUVEkOdpiWabIg6mrdBhhpJnHXFQRROuIoXD+idA5ilUusLpCUnZNsBy7gdncQtd0pxxvAKBfJIcpdgFPRZT5eaN+9hKXoyFZijqLy9W8Itiq8OWY7hvr6mogaWuq0qsbelu6CkScW5lSVal8t0Z+Tp2W/tIZxrG0txAbDpqXesrvXHuHUdZuGfS+Kit/3DvhlqliL4ym6MrIrsoG+Pt978l7Eq87unpxmJdlVXYBsB3zjhZAQtfiJnQdHKc1RhgF3SprStW5Lr311UY8n4trgR+RdD6MKvEiWRbpFMUc3PLuja9W1HmgPt/JwmL9OapwzXXboBKxUFdeRwg5Olb8xT8p6OEwXAWWxriyWqVkclpS8q+KeNqC3jZ8oflY/9Bj6K/jNQquADmUrM2vOf+Uf3OrUVLCA8DzhOCKFKVhkpSreSDkzcOKjEa5m6pqYZ3FQgJbFVAsEQIuFFNjjqE4L6mrTBoiIkhmza5YpT+LmhaWuxGnpnxRFVpxwRJEXc2jbkxpekzo/zjS9JnR/nCCOL0iqS2Jyoprr++LUin6Mo/6vheGp6xib6rYIZN486RbnkKcrpn/Ifu4Ho10KYXD8EphRp6qW0Eu0yOUc3TLJ/Uj/AHNR5TyjcFVEYX4j/cYnUWAvXA1MvIN+bDlXOvgsL6KCSqtqOYgaS2DviZEvEh553lPqm4SsUyexBbSWpLZEl3RNW7g/PeOilJwlMr5vKJVVd0PV+Rivoh8NuMM+h78d6DxGvpSOqdQUcMHDCaVJBVRA5dwMsexuZ53jx7G5nnePCL6ka2LbYrzti9/D9W5k09G0ThImtYDYzSj2ow7WYkbihVuk7VXNiGUxXpCE+RutxPuIbw/ohgA4Zh47h1wZlVV8qdVV3LDrnCO6gKrphi5vCOulMySkqdahmIMMfYsnBYdhLA09HTLJk65OGmS4884WW6e8y9Sl9M34Q/IxX0Q+G3GGfQ9+O98k6cFscxB0GEs2ZU5d1furv7SKJ0qJtcTNkDqKgxncRwkQzECcmu5CyOTk1FLqIq7UKZLaRKqqvzrqNTsg7UIiEbpihKh7ORN4uXey/IxX0SeG3GGfQ9+O9Dj+B4uzS4eQijTBKoEKoiI5NKw9PM5Mc88aeY7svdIS3HmES3XWcl/09UhsXiRx0RRHDRJUIkTLJB3sxRgqggLhNIalVzFYSWkBO5G/vGmrtvVPsV/hq07TlTaDjoCSSNpaikglsN6lbgOB0NO+tIqyNkKkagiAt6RXzIZV5GhWO4/7UVGGVeDNIxUjI4rYohWWoWSRVJ8HgwxhVHgrZU9MhICuDaeUROlMQ1IDunODGhGO4X3uNCMdwvvcaEY7hfe40Ix3C+9xoRjuF97gq3EcJpqemBUQnCbJURSWUbZKot1FFiNiCtWw28oitqCpiJkFvWEssH2K/wANWl9M34Q6lP03wEL1xiVK1pEUlyUur0gHKNh2n5Col8V4z0YnWq9Qv2ZbRATiIvWOMoU49kDce2HmHebj2w8w7zce2HmHebj2w8w7zce2HmHebj2w8w7zce2HmHebiqwqorjAKoJUcuHVkNFQ2nZZMq7dEDj8mxcTeoWiL1apaS0gRVUiAmykI2ZssPKN/h3eGi7W1LuQAqCtgKlrTOm5KWbDVbeB19SaJDFFILLRWbX5LVJ+pwunN01tI0CVVXqldyTRoljvuNGiWO+40aJY77jRoljvuNGiWO+40aJY77jRoljvuNGiWNouNGiWNouNBVFFhtOy8KLK4gIpJ2BnMQfqCjsWoqbce3fdf1o9u+6/rav/2Q==
// @grant                   GM_xmlhttpRequest
// @grant                   GM_addStyle
// @license                 AGPL-3.0

// @downloadURL https://update.greasyfork.org/scripts/498904/Script%20Finder%2B.user.js
// @updateURL https://update.greasyfork.org/scripts/498904/Script%20Finder%2B.meta.js
// ==/UserScript==

(function () {
    const domainParts = window.location.hostname.split('.').slice(-2)
    const domain = domainParts.join('.')
    const errorMessage = "Failed to retrieve script information or there are no available scripts for this domain."
    let neverLoadedScripts = true
    let collapsed = true
    let loadedPages = 0

    function getScriptsInfo(domain, page = 1) {
        var url = `https://greasyfork.org/scripts/by-site/${domain}?filter_locale=0&sort=updated&page=${page}`
        
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            onload: (response) => {
                // 解析结果
                const parser = new DOMParser()
                const doc = parser.parseFromString(response.responseText, "text/html")
                const scripts = doc.querySelector("#browse-script-list")?.querySelectorAll('[data-script-id]')
                let scriptsInfo = []

                if (!scripts) {
                    scriptsInfo = errorMessage
                } else {
                    for (var i = 0; i < scripts.length; i++) {
                        scriptsInfo.push(parseScriptInfo(scripts[i]))
                    }
                }

                // 处理对象
                const loadMoreButton = document.querySelector('.load-more')
                console.log(doc.querySelector('.next_page'))
                if (doc.querySelector('.next_page') == null || doc.querySelector('.next_page')?.getAttribute('aria-disabled') === 'true') {
                    loadedPages = 'max'
                    loadMoreButton.disabled = true
                    loadMoreButton.textContent = 'All scripts loaded'
                } else {
                    loadMoreButton.disabled = false
                    loadMoreButton.textContent = 'Load more'
                }
                // console.log(scriptsInfo);
                document.querySelector('.wait-loading').style.display = 'none'
                loadMoreButton.style.display = 'block'
                appendScriptsInfo(scriptsInfo)
                updateMatches()

                typeof (loadedPages) === 'number' ? loadedPages += 1 : loadedPages = loadedPages
                // console.log(loadedPages)
            },
            onerror: () => {
                console.log("Some error occurred!")
                if (loadedPages === 0) {
                    appendScriptsInfo(scriptsInfo)
                }
                const scriptsInfo = errorMessage
                document.querySelector('.wait-loading').style.display = 'none'
            }
        })
    }

    // 解析脚本信息
    function parseScriptInfo(script) {
        return {
            id: script.getAttribute('data-script-id'),
            name: script.getAttribute('data-script-name'),
            author: script.querySelector("dd.script-list-author").textContent,
            description: script.querySelector(".script-description").textContent,
            version: script.getAttribute('data-script-version'),
            url: 'https://greasyfork.org/scripts/' + script.getAttribute('data-script-id'),
            createDate: script.getAttribute('data-script-created-date'),
            updateDate: script.getAttribute('data-script-updated-date'),
            installs: script.getAttribute('data-script-total-installs'),
            dailyInstalls: script.getAttribute('data-script-daily-installs'),
            ratingScore: script.getAttribute('data-script-rating-score')
        }
    }

    // 插入脚本
    function appendScriptsInfo(scriptsInfo) {
        const infoList = document.querySelector('.info-list')
        if (scriptsInfo === errorMessage) {
            //  infoList.innerHTML = errorMessage;
            const loadMoreButton = document.querySelector('.load-more')
            loadMoreButton.disabled = true
            loadMoreButton.textContent = 'All scripts loaded'
            loadMoreButton.innerHTML = errorMessage
        } else {
            for (var i = 0; i < scriptsInfo.length; i++) {
                var script = scriptsInfo[i]
                var listItem = document.createElement('li')
                listItem.className = 'info-item'

                var scriptContainer = document.createElement('div')
                scriptContainer.className = 'script-container'

                var nameElement = document.createElement('a')
                nameElement.className = 'mscript-link'
                nameElement.innerText = script.name
                nameElement.href = script.url
                nameElement.target = '_blank'

                var descriptionElement = document.createElement('p')
                descriptionElement.className = 'script-description'
                descriptionElement.innerHTML = script.description

                var detailsContainer = document.createElement('div')
                detailsContainer.className = 'details-container'

                // 创建一键安装按钮
                var installButton = document.createElement('a')
                installButton.className = 'install-button'
                installButton.innerText = `Install ${script.version}`
                installButton.href = `https://greasyfork.org/scripts/${script.id}/code/script.user.js`

                const details = [
                    { key: 'Author', value: script.author },
                    { key: 'Installs', value: script.installs },
                    { key: 'Daily Installs', value: script.dailyInstalls },
                    { key: 'Created', value: script.createDate },
                    { key: 'Updated', value: script.updateDate },
                    { key: 'Rating', value: script.ratingScore }
                ]

                for (let i = 0; i < details.length; i++) {
                    const spanElement = document.createElement('span')
                    spanElement.className = 'script-details'
                    spanElement.innerText = `${details[i].key}:\n${details[i].value}`
                    detailsContainer.appendChild(spanElement)
                }

                scriptContainer.appendChild(nameElement)
                scriptContainer.appendChild(descriptionElement)
                scriptContainer.appendChild(detailsContainer)
                scriptContainer.appendChild(installButton)

                listItem.appendChild(scriptContainer)
                listItem.scriptId = script.id
                infoList.appendChild(listItem)
            }
        }
    }

    function setupUI() {
        GM_addStyle(`
    button.script-button {
        position: fixed;
        bottom: 20%;
        right: -50px;
        transform: translateY(50%);
        padding: 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
        transition: right 0.3s;
        z-index: 9999999999999999;
    }
    div.info-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 650px;
    padding: 12px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 9999;
    max-height: 80vh;
    overflow-y: auto;
}
    ul.info-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li.info-item {
        margin-bottom: 15px;
        padding: 12px;
        padding-bottom: 22px;
        display: flex;
        flex-direction: column;
        border: 1px solid #1e90ff;
        border-radius: 5px;
    }
    .div.script-container {
        display: flex;
        flex-direction: column;
    }
   a.mscript-link {
        font-size: 18px !important;
        font-weight: bold !important;
        margin-bottom: 5px !important;
        color: #1e90ff !important;
    }
    p.script-description {
        color: black !important;
        margin-top: 2px;
        margin-bottom: 5px;
        font-size: 16px;
    }
    div.details-container {
        font-size: 15px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    span.script-details {
        font: !important;
        color: black !important;
        flex-grow: 1 !important;
        text-align: center !important;
        border: 1px solid #1e90ff !important;
        border-radius: 5px !important;
        margin: 4px !important;
    }
    div.table-header {
        color: #1e90ff !important;
        font-size: 25px;
        font-weight: bold;
    }
    input.script-search-input {
        width: 96% !important;
        padding: 10px !important;
        font-size: 18px !important;
        border: 1px solid #1e90ff !important;
        border-radius: 4px !important;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) !important;
        margin-bottom: 15px !important;
        margin-top: 20px !important;
    }
    a.install-button {
        font-size: 20px;
        background-color: green;
        color: white;
        padding: 12px;
    }
    button.to-greasyfork {
        position: absolute;
        top: 12px;
        right: 12px;
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
        border: none;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
    }
    span.match-count {
        background-color: #1e90ff;
        font-size: 25px;
        font-weight: bold;
        color: white;
        padding: 6px;
        position: absolute;
        right: 50%;
        border-radius: 12px;
        top: 10px;
    }
    div.wait-loading {
        font-size: 20px;
        font-weight: bold;
        color: #1e90ff;
        animation: blink 1s infinite;
    }
    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    button.load-more {
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
        border: none;
        background-color: #1e90ff;
        color: #ffffff;
        cursor: pointer;
        position: relative;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
    }
    button.load-more:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    /* Mobile styles */
    @media (max-width: 600px) {
        button.script-button {
            right: -30px;
            padding: 8px;
            font-size: 14px;
        }
        span.script-details {
        font-size: 10px !important;
        margin: 2px !important;
        padding: 2px !important;
    }
     span.match-count {
        font-size: 20px;
        padding: 4px;
    }

    button.to-greasyfork {
        padding: 6px;
        font-size: 14px;
    }

     a.install-button {
        font-size: 12px;
        padding: 8px;
    }
      div.table-header {
        font-size: 20px;
    }
     div.script-container {
        padding: 10px;
    }
div.info-container {
        top: 10%;
        left: 5%;
        right: 5%;
        transform: none;
        width: calc(90% - 10px); /* 自适应宽度，保持左右边距 */
        max-width: 100%; /* 确保不超出屏幕宽度 */
    }
        a.script-link {
            font-size: 16px !important;
        }
        p.script-description {
            font-size: 14px;
        }
       {

        input.script-search-input {
            width: 92% !important;
            padding: 8px !important;
            font-size: 16px !important;
        }
        span.match-count {
            font-size: 20px;
            padding: 4px;
        }
        button.load-more {
            font-size: 14px;
            padding: 6px;
        }
    }
`)



        // 创建打开列表按钮
        var button = document.createElement('button')
        button.className = 'script-button'
        button.innerText = 'Scripts'

        // 创建脚本容器
        var infoContainer = document.createElement('div')
        infoContainer.className = 'info-container'

        // 创建搜索框
        var searchInput = document.createElement('input')
        searchInput.type = 'text'
        searchInput.placeholder = 'Search scripts...'
        searchInput.className = 'script-search-input'

        // 创建指向greasyfork的链接
        var toGreasyfork = document.createElement('button')
        toGreasyfork.className = 'to-greasyfork'
        toGreasyfork.innerText = 'View on Greasyfork'

        // 创建计数器
        var matchCount = document.createElement('span')
        matchCount.className = 'match-count'

        // 创建表头
        var tableHeader = document.createElement('div')
        tableHeader.className = 'table-header'
        tableHeader.appendChild(document.createTextNode('Script Finder'))
        tableHeader.appendChild(matchCount)
        tableHeader.appendChild(searchInput)
        tableHeader.appendChild(toGreasyfork)

        // 创建脚本列表
        var infoList = document.createElement('ul')
        infoList.className = 'info-list'

        // 创建等待加载
        var waitLoading = document.createElement('div')
        waitLoading.className = 'wait-loading'
        waitLoading.innerText = 'Loading scripts...'

        // 创建加载更多
        var loadMore = document.createElement('button')
        loadMore.className = 'load-more'
        loadMore.innerText = 'Load more'
        loadMore.style.display = 'none'

        infoList.appendChild(waitLoading)
        infoList.appendChild(loadMore)

        infoContainer.appendChild(tableHeader)
        infoContainer.appendChild(infoList)

        var timeout
        button.addEventListener('mouseenter', function () {
            clearTimeout(timeout)
            button.style.right = '10px'
        })

        button.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                button.style.right = '-50px'
            }, 500)
        })

        button.addEventListener('click', function (event) {
            event.stopPropagation()
            if (collapsed) {
                infoContainer.style.display = "block"
                infoContainer.style.opacity = 1
                collapsed = false
            }
            else {
                infoContainer.style.display = "none"
                infoContainer.style.opacity = 0
                collapsed = true
            }

            if (neverLoadedScripts) {
                getScriptsInfo(domain, 1)
                neverLoadedScripts = false
            }

        })

        infoContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

        searchInput.addEventListener('input', () => {
            searchScript()
            updateMatches()
        })

        toGreasyfork.addEventListener('click', function () {
            window.open(`https://greasyfork.org/scripts/by-site/${domain}?q=${searchInput.value}&filter_locale=0&sort=updated`)
        })

        loadMore.addEventListener('click', () => {
            if (loadedPages === 'max') {
                return
            }
            const loadMoreButton = document.querySelector('.load-more')
            loadMoreButton.disabled = true
            loadMoreButton.textContent = 'Loading...'
            document.querySelector('.wait-loading').style.display = 'block'
            getScriptsInfo(domain, loadedPages + 1)
        })

        document.body.addEventListener('click', function () {
            clearTimeout(timeout)
            collapsed = true
            button.style.right = '-50px'
            infoContainer.style.opacity = 0
            infoContainer.style.display = "none"
        })

        document.body.appendChild(button)

        document.body.appendChild(infoContainer)

        infoContainer.addEventListener('change', () => {
            updateMatches()
        })
        updateMatches()
    }

    function searchScript() {
        const searchWord = document.querySelector('.script-search-input').value.toLowerCase() // 将要匹配的文本转换为小写
        const scriptList = document.querySelectorAll('.info-item')
        for (let i = 0; i < scriptList.length; i++) {
            const scriptText = scriptList[i].innerText.toLowerCase() // 将检索的文本转换为小写
            if (scriptText.includes(searchWord)) {
                scriptList[i].style.display = 'block'
            } else {
                scriptList[i].style.display = 'none'
            }
        }
    }

    function updateMatches() {
        const matchCount = document.querySelectorAll('.info-item:not([style*="display: none"])').length
        const allCount = document.querySelectorAll('.info-item').length
        document.querySelector('.match-count').innerText = matchCount === allCount ? matchCount : `${matchCount}/${allCount}`
    }

    function main() {
        if (window.self !== window.top) {
            // 在iframe中执行时，直接退出
            return
        }
        setupUI()
    }

    main()


})()
