// ==UserScript==
// @name        屏蔽谷歌搜索站点
// @namespace   https://github.com/ChinaGodMan/UserScripts
// @version     0.0.1.51
// @description 在google搜索屏蔽指定站点
// @description:zh-CN 在google搜索屏蔽指定站点
// @name:zh-CN        屏蔽谷歌搜索站点
// @license     MIT
// @author      人民的勤务员 <china.qinwuyuan@gmail.com>
// @include     /^https?://(www|cse)\.google(\.\w+)+/search\?.*$/
// @run-at      document-start
// @grant       GM_registerMenuCommand
// @compatible  chrome >= 49
// @compatible  firefox >= 29
// @compatible  opera >= 46
// @compatible  safari >= 10.1
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJuklEQVR4nO2de1QU1x3H7wzrjklsYpMT002jROMzPhEUgu6qKCCyPDTHyBofKKBSgaAgsCxmxAciVF4CsRofNbUxKO4uu7OoaHY3nsa2mkYliWk8ic1pNaZqWz1tVB7765lt16PRRXZnZmdmmc8533P2wB97f9/fnfv43TuAkISEhISEhISEhISEhICA/F6jIRfXQTpuhGT8AmiwG5CA3YEZqAMikQOUCGAqAufnWKwdErE7kIRdhxT8PGTgh2ENXgg6NJDvOEQDlKDnYDVWAsl4K8Rjd5wGM5UKAczBfoAU/FPIxYqBRH34jlNQAIlksBrPhYXYNxDx/17NpaKQA5biFyAXzwYS4ainAgXoOViJHwQ11s656e5ED1nZAe/2qKfCOcyk4xREoU7ejP+xYrAOyMAPAol6I38GsrBS52TJt+FKN0rA7kI+XoT8DSBlYaDBvufdYGU3tQC/DKR8OPIHIBOrgBk+mFyVLGsm1gl5OInECpDoaUjBW3k3UslwCZuGnwYSyZGYgAJiMLyB3eLdQCVL0mB/h0KkQGIAcmWTIA67y7tpSpZFb+aEngQgAyIEvcpRMlA6bkVCBt6SvQaz/NV8TODmF8mHQLwfDjtKBLBC6D2fXu3404SrfMB8GxI6kCrypaZSpD2fBlZhFT4xIxJ1ggb7GyzHmyAH10JmQBxkoVGwDD1D12/omj+sCZjmrP/T5wCL8G+dGym/7vnFstB7hyJcKAI5IBn/DHLxZEAI87h9JMIhT7YcUvGzHu3ExWA+DSzAr3LW2zPxRtCiF1hrayFSQCauh+jHVGBFY/4qbDPrxk9BAEvxM7Ac/ZyzdutQf1iG/9FZYhCt+ZWoL8SxvN6PxdqgAJ/nsxjyeqWBGmsTnfk0sLNXGURh7Jn/BvY9ZKEBPo+DnrjnY9fEZb4V9Qab/AqY5ACLcObmp+Cf81lppM+jkZgAG/ELsBPglJUAKJX971qIN+YvxC4C6sGH4p4CgHCwyb+5lwCX9vaix3DPzNdg38FiPz9/ZRuwEdMeMt+lYwRdLez+hFvI3UrHbwG7fLfbBLhUJaM3UO7Np5d/GXgK37GIDvgYPQF24l+PTQCtA3KA2W6GpFT8D3zHIkrALk/olvkuHScA8gIeNH866oSV6EW+YxElYCeqPUqAS3W9AGbc6/3NfMchWsBOnPcqAbQa5fQ9mzap93sJ/O6pfmAjHF4ngJZNXuPt9/d4wE5EMzLfuWmThXBlpCLvPAhJIW8fa3NJt12XyThAsMmzGPb+KwCe1/O7C9+Gd6WMms0fIKaAXV7H8AnYjzhEIQCj3WlRee1ZxgGCXd7C8AnIQhyiEIDR7hRb8ptrjAMEO9HK8AmIQhyiEIDR7jSpuOk24wDBLr/EKAEniUGIQxQCMNqdgt8+1s44QLARNxgl4GP0LOIQhQCMdqcRupOdjAMEG3GXUQI+4/bARSEAo90psOAMMA5QSsB5rxMwIP8TVhIgDUF53iVguO6kg/9J+ATxCuIQhQCGGncau/YEC5OwtAwFbxMQVkyxsgyVNmJ53iUgdtP+60IoRfwWcYhCAEONO80v297KfzHOLr/aU4txqVVVesYB0qUEhk8AgE02AXGEQgBGu9Pqbet1jAOEj/o8z+RA5uKJflBBhZxCImNe2Y6vmJj/Yv45KNm2eigrjQEbcc4b80+0DIQ5hjhI1Mc7yEOTOa0JsUnpjuyRLxecZtT7Q8hjd1hrENiJKk+Mv2t7EmosIaDWJ97TenPYESQSllVW2JgOP69v2c18AnYBNnl8d82//OGzkNE0/QHzaWkMMZ3bDEGCv5ZSsnPVYLqIxjQB2dUbN/j8Ytbvj/eHeYbYh8x3SdukYn5CxDFJZTsuslGEy6kn+7HaMLDLd7kzvsPeG/Y2j4E4N8a7RP++zBSajgRKUb02h548mSZgVsn+S6w3DqzE1EeZf8P6NOSbpnRp/P1KNka31R0Z2R8JDHJHwVD6AIWN5efKyi35XF1P//p+81tP/AwWGWO6bb5LGU0R13P2RT6FBELlnrf6Rmw4dIsN80evtbVPIUluXvwAK5FOG++wE2A8OgwSDfEem+/SGrPqa5IkeX9BY25DQ8Ds0t1/YcN8Wku2bmvk9BWlWx/2+W6DOdxr4++XzjTpz1sbwp5APFFdnfn0nNLdl9gyf7D2VGfKpirWXq99JLVUcAMb5t8/HFU2j30Z+Ziqd7KGzNh48CZb5tNa8Mv6o5w3vKVl0DMpxqg2NpOQTE/MVPAi5COqqOCMjPc1P4wusrFm/kjdRx2Z1Zue90kA26igdWwmQO1coiZAETW5tdYcFMhVu3eZRw/SNim/cC2XNQ1JMHmDkZUEJG+t8e0FZK1JdZntJKj1iZBkmNVZRk1sKm2c+BJbbTWbRwSWUaFmjTGm88ff9/rhOZBQvpOR+api4z8QCb5dUDQeHz4+SR/r4CIJan0izNbHObQm5Rf1zcGppHWKx8s6q3WK7FfNwanrzeEXutqd04o/nAjza7Z4ZX5gwWlHRkV5BOKDesvYksftftnQXL3asapp6pUSKsy8wzSucM+RMTP3twwZ1HRG8eQea2DvfUeHDqR/Vtc8TltuCTVoTapvNYZZD/X2xylt1yoYUPAnjxKQsrWyFvHJBtNrn3KdALUPtfS9NBhaeKpb5seV7PsS8U1Dw6t9ckyqf/JtnJpFLTzwJgSTx7o0P2yd5d/p9Zt/ioTAe5bBLy03Rt7m2zg1i5p7aC5Eb97/SPNHrbW1pVaWjUNC4l0qKGSJMbqdb+PULCqxcQ7Mrax+wPwRhSc7s6q2TEdC5MCRkdMWG2f6VRLiDs+Gxe+QzjPeUUX2jtzajQlIyOw8Oj44zRjlV8ORWp8I2XuX3cyvJScjMUAvEbObpt7k2zQ1S9KaVNf1R14R3BlGl9BVznXmSaf5Nk/NQPQeZ7Ml9PQla6B4/7ROFRVclmSYxdmOWc2RFhpiHLssYzYhf+CAZeSEXJPqKt+mqrupQpPyrxQ1bDTyN+osQeuXGKNZLWWrWVSqMbKtjgpah/wZvTWwb7llgv5NY0yHgIabjhoq+IOzR18QzDk15+zRj+1bRk18n+3DHU+0wjjjbm3z+N0N1ld7zj9yewhAWAU1YUW+SfklXfXk2vQkQ6yj2Bz+1U5qTA6X1+ZF+1TUNgcVk+bws6ksbebi9QmQbpr+n2Iq/JN6atxag2HYT/iOUzT8umXM0O2Wsfml5tDDOpPy81yT6nqaIeq2xhjTMU8f66DX6fTVGPpzsmFm+zJj5O1cs+raelP4uXJqYkO9JShf3zzM5wf+EhISEhISEhISEhISqAv+C1SzADoeEosIAAAAAElFTkSuQmCC
// @iconbak     https://github.com/ChinaGodMan/UserScripts/raw/main/docs/icon/Scripts%20Icons/icons8-google-96.png
// @supportURL  https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL https://github.com/ChinaGodMan/UserScripts
// ==/UserScript==

(function () {
    'use strict'

    // 初始化默认屏蔽站点
    const DEFAULT_BLOCKED_SITES = 'csdn'

    // 获取存储的屏蔽站点列表
    function getBlockedSites() {
        return localStorage.getItem('blockedSites') || DEFAULT_BLOCKED_SITES
    }

    // 设置屏蔽站点列表
    function setBlockedSites(sites) {
        localStorage.setItem('blockedSites', sites)
    }

    // 注册油猴菜单命令
    GM_registerMenuCommand('❌编辑屏蔽站点', function () {
        showEditDialog(getBlockedSites())
    })

    // 显示编辑对话框
    function showEditDialog(currentSites) {
        const overlay = document.createElement('div')
        overlay.id = 'overlay'
        overlay.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9998;'

        const dialog = document.createElement('div')
        dialog.id = 'editDialog'
        dialog.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 3px 3px 5px rgba(0,0,0,0.3); z-index: 9999; width: 60%; max-width: 600px; resize: both; overflow: auto;'
        dialog.innerHTML = `
            <h3 style="cursor: move;">编辑屏蔽站点</h3>
            <p>请输入用英文逗号分隔的站点：</p>
            <textarea id="sitesInput" style="width: 100%; height: 100px; resize: vertical;">${currentSites}</textarea>
            <div style="text-align: right; margin-top: 10px;">
                <button id="saveBtn">保存</button>
                <button id="cancelBtn">取消</button>
            </div>
        `

        document.body.appendChild(overlay)
        document.body.appendChild(dialog)

        document.getElementById('saveBtn').addEventListener('click', function () {
            const newSites = document.getElementById('sitesInput').value
            setBlockedSites(newSites)
            alert('屏蔽站点已更新，刷新页面以生效。')
            closeEditDialog()
        })

        document.getElementById('cancelBtn').addEventListener('click', function () {
            closeEditDialog()
        })

        overlay.addEventListener('click', function () {
            closeEditDialog()
        })

        function closeEditDialog() {
            document.body.removeChild(dialog)
            document.body.removeChild(overlay)
        }
    }

    // 获取搜索参数
    var params = new URLSearchParams(location.search),
        q = params.get('q')

    // 获取当前屏蔽站点列表并格式化
    const blockedSites = getBlockedSites().split(',').map(site => `-${site.trim()}`).join(' ')

    // 如果查询参数中没有屏蔽站点，则添加
    if (q && !blockedSites.split(' ').some(site => q.includes(site))) {
        params.set('q', q + ' ' + blockedSites)
        location.search = '?' + params.toString()
    }

})()
