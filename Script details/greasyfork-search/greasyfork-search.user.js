// ==UserScript==
// @name         GreasyFork Search
// @name:zh-CN         GreasyFork Search
// @namespace     https://greasyfork.org/zh-CN/users/1169082
// @version 0.6.5.10
// @description  To search scripts using Google Search
// @description:zh-CN   使用谷歌搜索GreasyFork和SleazyFork上的脚本
// @author       CY Fung , 人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://greasyfork.org/*
// @match        https://sleazyfork.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @require      https://fastly.jsdelivr.net/npm/jstat@1.9.6/dist/jstat.min.js
// @grant        none
// @license MIT

// ==/UserScript==



(() => {



    function jacobi(a) {
        var n = a.length
        var trial = n * n * 2
        var e = jStat.identity(n, n)
        var ev = []
        var i, j, p, q, maxim, s
        let vaildResult = false
        outer: while (trial-- > 0) {
            maxim = a[0][1]
            p = 0
            q = 1
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    if (i != j) {
                        let t = Math.abs(a[i][j])
                        if (maxim < t) {
                            maxim = t
                            p = i
                            q = j
                        }
                    }
                }
            }

            s = jStat.identity(n, n)

            let tanValue = 2 * a[p][q] / (a[p][p] - a[q][q])

            let cosTwoTheta = Math.sqrt(1 / (1 + tanValue * tanValue))
            let cosTheta = Math.sqrt(.5 * (1 + cosTwoTheta))
            let sinTheta = Math.sqrt(.5 * (1 - cosTwoTheta))

            s[p][p] = cosTheta
            s[p][q] = -sinTheta
            s[q][p] = sinTheta
            s[q][q] = cosTheta

            e = jStat.multiply(e, s)
            a = jStat.multiply(jStat.multiply(jStat.transpose(s), a), s)

            for (i = 0; i < n; i++) {
                for (j = i + 1; j < n; j++) {
                    if (Math.abs(a[i][j]) > .0004) {
                        continue outer
                    }
                }
            }

            vaildResult = true
            break
        }
        if (!vaildResult) {
            console.warn("The matrix is not symmetric.")
            return null
        }
        for (i = 0; i < n; i++) ev.push(a[i][i])
        //returns both the eigenvalue and eigenmatrix
        return [e, ev]
    }



    function getVN(A) {
        // normalized the matrix values such that det(A) will be a finite value close to 1.0
        // vn = sqrt( ( column_vector_1 ^2 + column_vector_2 ^2 + ... + column_vector_n ^2 ) / n )
        let vn = 0
        const AT = jStat.transpose(A)
        let N = AT.length
        for (let i = 0; i < N; i++) {
            vn += jStat.dot(AT[i], AT[i])
        }
        vn = Math.sqrt(vn / N)
        return vn
    }

    function subtractLambdaFromDiagonal(matrix, lambda) {
        // A - lambda I
        return matrix.map((row, rowIndex) => row.map((val, colIndex) => rowIndex === colIndex ? val - lambda : val))
    }


    function eigenvalueNewton(A, lambda0) {
        const N = A.length
        const epsilon = 1e-5 // epsilon is applied on the normalized scale of lambda
        const maxTrial = 8

        function f(lambda) {
            return jStat.det(subtractLambdaFromDiagonal(A, lambda))
        }

        function fPrime(lambda) {
            return (f(lambda + epsilon) - f(lambda)) / epsilon
        }

        let x_k = lambda0
        let positiveSign = 0
        let negativeSign = 0
        for (let i = 0; i < maxTrial; i++) {
            const fx = f(x_k)
            const fxPrime = fPrime(x_k)
            const diff = fx / fxPrime
            if (isNaN(diff)) return x_k // ignore f/f'
            const x_k1 = x_k - diff
            if ((diff > 0 ? diff : -diff) < epsilon) {
                return x_k1
            }
            x_k = x_k1
            if (fx > 0) positiveSign = 1
            else if (fx < 0) negativeSign = 1
        }
        return positiveSign && negativeSign ? x_k : lambda0 // avoid diverging iterations
    }

    function vectorNorm(v) {
        // Math.sqrt(v dot v), same as jStat.norm(jStat.transpose(v))
        let s = 0
        for (const k of v) s += k[0] * k[0]
        return Math.sqrt(s)
    }

    function isUnitVector(v, tol = 0.01) {
        // Check if it is likely a unit vector
        let s = 0
        for (const k of v) {
            s += k[0] * k[0]
            if (s > 1 + tol) return false
        }
        return s > 1 - tol
    }

    jStat.jacobiOri = jStat.jacobi
    // https://www.statskingdom.com/pca-calculator.html
    jStat.jacobi = function (C) {

        const vn = getVN(C)
        C = jStat.multiply(C, 1 / vn)
        let r1 = jacobi(C)
        // let r0 = JSON.parse(JSON.stringify(r1))
        // r0[1] = r0[1].map(v => vn * v);
        let A = C
        let eigenvectors = r1[0]
        let eigenvalues = r1[1]
        const iterationCount = 4

        for (let i = 0; i < eigenvalues.length; i++) {
            let q, m
            q = jStat.transpose(eigenvectors[i])
            if (!isUnitVector(q)) break
            eigenvalues[i] = eigenvalueNewton(A, eigenvalues[i]) // refine eigenvalues obtained in jacobiOri

            // inverse power method (A-lambda I) y_k = b_{k-1}
            // b_k = y_k / norm(y_k)
            let M = subtractLambdaFromDiagonal(A, eigenvalues[i])
            for (let j = 0; j < iterationCount; j++) {
                m = jStat.transpose(jStat.gauss_elimination(M, q))
                m = jStat.multiply(m, 1 / vectorNorm(m))
                if (!isUnitVector(m)) break // avoid Inf / NaN error
                q = m
            }
            eigenvectors[i] = jStat.transpose(q)

        }
        r1[1] = r1[1].map(v => vn * v)
        return r1
    }



})()


jStat.PCA = function PCA(X) {
    var m = X.length
    var n = X[0].length
    var i = 0
    var j, temp1
    var u = []
    var D = []
    var result = []
    var temp2 = []
    var Y = []
    var Bt = []
    var B = []
    var C = []
    var V = []
    var Vt = []
    for (i = 0; i < m; i++) {
        u[i] = jStat.sum(X[i]) / n
    }
    for (i = 0; i < n; i++) {
        B[i] = []
        for (j = 0; j < m; j++) {
            B[i][j] = X[j][i] - u[j]
        }
    }
    B = jStat.transpose(B)
    for (i = 0; i < m; i++) {
        C[i] = []
        for (j = 0; j < m; j++) {
            C[i][j] = (jStat.dot([B[i]], [B[j]])) / (n - 1)
        }
    }
    result = jStat.jacobi(C)
    V = result[0]
    D = result[1]

    Vt = jStat.transpose(V)


    let vd = []
    for (i = 0; i < D.length; i++) {
        vd[i] = {
            Vt: Vt[i],
            D: D[i],
            k: D[i] * D[i]
        }
    }

    vd.sort((a, b) => {
        return b.k - a.k
    })

    Vt = vd.map(e => e.Vt)
    D = vd.map(e => e.D)



    V = null


    Bt = jStat.transpose(B)

    let pcs_11 = []
    let pt_11 = [1, 1]
    for (i = 0; i < m; i++) {


        pcs_11[i] = jStat.dot([Vt[i]], [pt_11])
        if (pcs_11[i] < 0) Vt[i] = jStat.multiply(Vt[i], -1)
        pcs_11[i] = jStat.dot([Vt[i]], [pt_11])
    }





    for (i = 0; i < m; i++) {
        Y[i] = []
        for (j = 0; j < Bt.length; j++) {
            Y[i][j] = jStat.dot([Vt[i]], [Bt[j]])
        }
    }
    return [X, D, Vt, Y]
};

(function () {
    'use strict'

    let input = document.querySelector('form input[name="q"]')
    if (!(input instanceof HTMLInputElement)) return
    let form = input.closest('form')
    if (!(form instanceof HTMLFormElement)) return


    let locales = [...document.querySelectorAll('select#language-selector-locale > option')].map(x => x.value)

    document.head.appendChild(document.createElement('style')).textContent = `


    @keyframes rs1tmAnimation {
        0% {
            background-position-x: 3px;
        }
        100% {
            background-position-x: 4px;
        }
    }

    form.rs1tm{
        position: fixed;
        top:-300px;
        left:-300px;
        width: 1px;
        height: 1px;
        contain: strict;
        display: flex;
        overflow: hidden;
        animation: rs1tmAnimation 1ms linear 1ms 1 normal forwards;
    }

    `
    document.addEventListener('animationstart', (evt) => {

        if (evt.animationName === 'rs1tmAnimation') {
            const target = evt.target
            target && target.parentNode && target.remove()
        }

    }, true)

    window.callback947 = function (rainijpolynomialRegressionJs) {
        if (!rainijpolynomialRegressionJs) return
        const { PolynomialFeatures, PolynomialRegressor, RegressionError } = rainijpolynomialRegressionJs
        if (!PolynomialFeatures || !PolynomialRegressor || !RegressionError) return

        console.log(rainijpolynomialRegressionJs)
    }

    form.addEventListener('submit', function (evt) {

        try {


            let form = evt.target
            if (!(form instanceof HTMLFormElement)) return
            let input = form.querySelector('input[name="q"]')
            if (!(input instanceof HTMLInputElement)) return

            if (form.classList.contains('rs1tm')) return

            let value = input.value
            const lang = document.documentElement.lang || ''

            let useLang = false


            let u = 0
            let isGoogleSearch = false

            let sites = []

            const split = value.split(/\s+/)
            let forceLang = 'all'
            let reformedSplit = []
            for (const s of split) {

                if (!isGoogleSearch && /^[a-z][a-z0-9_-]{2,}(\.[a-z][a-z0-9_-]{2,})*(\.[a-z-]{2,4})+$/.test(s)) {
                    if (/\.(js|css|html|htm|xml|img|svg|txt|php|cgi|xhtml|ini|vue|xhr|ajax)$/.test(s)) {
                        reformedSplit.push(s)
                    } else {
                        sites.push(s)
                    }
                } else if (s === 'js') {
                    forceLang = 'js'; reformedSplit.push(s)
                } else if (s === 'css') {
                    forceLang = 'css'; reformedSplit.push(s)
                } else if (s === 'user.js') {
                    forceLang = 'js'
                } else if (s === 'user.css') {
                    forceLang = 'css'
                } else if (s === '"js"') {
                    reformedSplit.push('js')
                } else if (s === '"css"') {
                    reformedSplit.push('css')
                } else if (u === 0 && s === 'g') {
                    isGoogleSearch = true
                } else if (locales.indexOf(s) >= 0 || s === lang) {
                    useLang = s
                } else {
                    reformedSplit.push(s)
                }
                u++
            }
            console.log(sites)

            value = reformedSplit.join(' ')

            let onlySite = ''

            if (sites.length === 1 && sites[0]) {
                onlySite = sites[0]
            }

            /*
              if (!isGoogleSearch && onlySite && /\.\w+\.\w+/.test(onlySite)) {
                  alert('Greasy Fork only lists eTLD+1.');
                      evt.preventDefault();
                  evt.stopImmediatePropagation();
                  evt.stopPropagation();
                  return;
              }
              */


            if (isGoogleSearch && value) {
                let q = value.replace('g ', '')

                let m = "-inurl%3A%22%2Fusers%2F%22+-inurl%3A%22%2Fdiscussions%22-inurl%3A%22%2Fstats%22+-inurl%3A%22%2Ffeedback%22+-inurl%3A%22%2Fcode%22+-inurl%3A%22q%3D%22+-inurl%3A%22%2Fby-site%2F%22+inurl%3A%22%2Fscripts%2F%22+site%3A"
                var currentUrl = window.location.origin
                var index1 = currentUrl.indexOf("sleazyfork")
                var index2 = currentUrl.indexOf("greasyfork")//搜索
                if (index2 !== -1) {
                    m = m + "greasyfork.org"
                }
                if (index1 !== -1) {
                    m = m + "sleazyfork.org"
                }
                let lr = useLang ? `&lr=lang_${useLang}` : ''
                evt.preventDefault()
                evt.stopImmediatePropagation()
                evt.stopPropagation()

                location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}+${m}${lr}`

            } else if (!isGoogleSearch && (value || onlySite)) {


                let newForm = document.createElement('form')
                newForm.className = 'rs1tm'
                const copyAttr = (x) => {
                    let t = form.getAttribute(x)
                    if (typeof t === 'string') newForm.setAttribute(x, t)
                }
                copyAttr('action')
                copyAttr('accept-charset')
                copyAttr('method')
                newForm.innerHTML = `<input name="q" type="hidden" value="" /><input name="site" type="hidden" /><input name="language" type="hidden" value="all" /><input name="sort" type="hidden" />`


                const nq = newForm.querySelector('input[name="q"]')
                const language = newForm.querySelector('input[name="language"]')
                const site = newForm.querySelector('input[name="site"]')
                const sort = newForm.querySelector('input[name="sort"]')

                value = value.replace(/\s+/g, ' ')
                site.value = onlySite

                if (form.getAttribute('action') === `/${lang}/scripts` && useLang && useLang !== lang) {
                    form.setAttribute('action', `/${useLang}/scripts`)
                }


                if (site.value === '') site.remove()

                nq.value = value

                language.value = forceLang

                if (language.value === '') language.remove()


                sort.value = 'updated'

                let sorting = document.querySelector('#script-list-sort')
                if (sorting) {
                    let sorts1 = {
                        nil: 0,
                        daily_installs: 0,
                        total_installs: 0,
                        ratings: 0,
                        created: 0,
                        updated: 0,
                        name: 0
                    }
                    let sorts2 = {
                        daily_installs: 0,
                        total_installs: 0,
                        ratings: 0,
                        created: 0,
                        updated: 0,
                        name: 0
                    }
                    const allOptions = sorting.querySelectorAll('.list-option')
                    const sorts = allOptions.length === 6 ? (sorts2) : (sorts1)
                    const keys = Object.keys(sorts)

                    if (allOptions.length === keys.length) {


                        for (const key of keys) {
                            let e = `.list-option:not(.list-current) a[href$="sort=${key}"]`
                            if (key === 'nil') {
                                e = `.list-option:not(.list-current) a[href]:not([href*="sort="])`
                                e = sorting.querySelector(e)
                            } else {
                                e = sorting.querySelector(e)
                            }

                            if (e) {
                                sorts[key] = 1
                            }

                        }



                        let p = Object.entries(sorts).filter(r => !r[1])
                        if (p.length === 1) {
                            sort.value = p[0][0]
                        }

                    }

                }




                if (sort.value === '') sort.remove()

                evt.preventDefault()
                evt.stopImmediatePropagation()
                evt.stopPropagation()

                form.parentNode.insertBefore(newForm, form)
                newForm.submit()
                Promise.resolve().then(() => {
                    newForm.remove()
                })


            } else {
                evt.preventDefault()
                evt.stopImmediatePropagation()
                evt.stopPropagation()
            }

        } catch (e) {
            console.log(e)

            evt.preventDefault()
            evt.stopImmediatePropagation()
            evt.stopPropagation()
        }

    })

    // Your code here...
})();

(() => {

    function prettyMatrix(A) {
        let w = ''
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[i].length; j++) {
                w += A[i][j].toFixed(4) + '\t'
            }
            w += '\n\t'
        }
        return '[\n\t' + w.trim() + '\n]'
    }


    requestAnimationFrame(() => {

        setTimeout(() => {

            if ((location.search.includes('sort=updated') || location.search.includes('sort=created')) && location.pathname.endsWith('/scripts')) { } else return
            let items = document.querySelectorAll('[data-script-id][data-script-daily-installs][data-script-total-installs]')

            let data = [...items].map(e => ({
                id: parseInt(e.getAttribute('data-script-id')),
                daily: parseInt(e.getAttribute('data-script-daily-installs')),
                total: parseInt(e.getAttribute('data-script-total-installs'))
            })).filter(e => e.id && !isNaN(e.daily) && !isNaN(e.total))

            const daily = data.map(d => d.daily)
            const total = data.map(d => d.total)
            dailyMean = jStat.mean(daily)
            dailySD = jStat.stdev(daily, true)
            totalMean = jStat.mean(total)
            totalSD = jStat.stdev(total, true)

            const uDaily = jStat.multiply(jStat.subtract(daily, dailyMean), 1 / dailySD)
            const uTotal = jStat.multiply(jStat.subtract(total, totalMean), 1 / totalSD)

            let dataA = data.map((d, i) => [uDaily[i], uTotal[i]])

            // dataA = dataA.slice(0, 4)
            // console.log(dataA)

            let matrixA = jStat.transpose(dataA)


            const result = jStat.PCA(matrixA)
            const [X, D, Vt, Y] = result



            let q = null
            let qSet = null
            if (location.search.includes('q=')) {
                q = new URLSearchParams(location.search)
                q = q.get('q')

            }

            function makeQA(q) {
                let qSet = new Set()
                q.replace(/_-/g, ' ').replace(/\b\S+\b/g, (_) => {
                    qSet.add(_.toLowerCase())
                })
                return qSet
            }

            if (q) {
                qSet = makeQA(q)
            }

            let mr = new Map()
            let u = 0
            for (const d of data) {
                d.pcaScore = Y[0][u++]
                let elm = document.querySelector(`[data-script-id="${d.id}"]`)
                if (elm) {

                    let order = 0
                    order -= Math.floor(d.pcaScore * 1000)

                    let u1 = 0, u2 = 0

                    if (qSet) {

                        const pSet = qSet

                        let elp = elm.querySelector('.script-link')
                        if (elp) {
                            let t = elp.textContent

                            t.replace(/_-/g, ' ').replace(/\b\S+\b/g, (_) => {
                                if (pSet.has(_.toLowerCase())) u1++
                            })


                        }



                        let elq = elm.querySelector('.script-description')

                        if (elq) {
                            let t = elq.textContent

                            t.replace(/_-/g, ' ').replace(/\b\S+\b/g, (_) => {
                                if (pSet.has(_.toLowerCase())) u2++
                            })


                        }


                    }


                    if (u1 && u2) order -= 30000
                    else if (u1) order -= 20000
                    else if (u2) order -= 10000


                    mr.set(d.id, order)
                    // elm.style.order = order;
                    // elm.parentNode.style.display = 'flex';


                    // elm.parentNode.style.flexDirection = 'column';


                }
            }

            /*
                        let lists = [...new Set([...document.querySelectorAll(`[data-script-id]`)].map(p => p.parentNode))];
                        for (const list of lists) {
            
                            let m = [...list.childNodes].map(e => ({
                                element: e,
                                order: mr.get(e instanceof HTMLElement ? (+e.getAttribute('data-script-id') || '') : '') || 0
                            }));
            
                            m.sort((a, b) => {
                                return Math.round(a.order - b.order)
                            });
                            let newNodes = m.map(e => e.element);
            
                            list.replaceChildren(...newNodes);
                        }
            */

            // console.log(prettyMatrix(X))

            // console.log(prettyMatrix(Y))





        }, 300)

    })



})()