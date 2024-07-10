// ==UserScript==
// @name         高亮隐藏
// @namespace    https://www.gitlink.org.cn/sonichy
// @version      1.2
// @description  高亮含有关键字的链接，隐藏含有关键字的链接，并动态监测页面变化。
// @author
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @license      MIT
// @downloadURL  https://update.greasyfork.org/scripts/498001/%E9%AB%98%E4%BA%AE%E9%9A%90%E8%97%8F.user.js
// @updateURL    https://update.greasyfork.org/scripts/498001/%E9%AB%98%E4%BA%AE%E9%9A%90%E8%97%8F.meta.js
// ==/UserScript==

(function(){
    'use strict';

    // 定义函数来应用高亮和隐藏逻辑
function applyHighlightsAndHides() {
    var s, sl, a, i, j;

    // 获取保存的关键字并处理高亮链接
    s = GM_getValue('keyword_light', '');
    if (s != '') {
        sl = s.split('\n').map(function(keyword) {
            return keyword.trim(); // 去除每个关键字前后的空白符
        }).filter(function(keyword) {
            return keyword !== ''; // 过滤掉空白关键字
        });

        a = document.getElementsByTagName('a');
        for (i = 0; i < a.length; i++) {
            if (!a[i].classList.contains('highlighted')) { // 检查是否已经高亮
                for (j = 0; j < sl.length; j++) {
                    if (a[i].textContent.indexOf(sl[j]) != -1) {
                        a[i].classList.add('highlighted');
                        var regex = new RegExp('(' + sl[j] + ')', 'gi');
                        a[i].innerHTML = a[i].innerHTML.replace(regex, '<span style="color:white;background-color:#DA3434;">$1</span>');
                        break; // 找到一个匹配关键字就跳出循环
                    }
                }
            }
        }
    }

    // 处理隐藏链接
    s = GM_getValue('keyword_hide', '');
    if (s != '') {
        sl = s.split('\n').map(function(keyword) {
            return keyword.trim(); // 去除每个关键字前后的空白符
        }).filter(function(keyword) {
            return keyword !== ''; // 过滤掉空白关键字
        });

        a = document.getElementsByTagName('a');
        for (i = 0; i < a.length; i++) {
            if (!a[i].classList.contains('hidden')) { // 检查是否已经隐藏
                for (j = 0; j < sl.length; j++) {
                    if (a[i].textContent.indexOf(sl[j]) != -1) {
                        a[i].classList.add('hidden');
                        a[i].style.display = 'none';
                        break; // 找到一个匹配关键字就跳出循环
                    }
                }
            }
        }
    }
}


    // 注册菜单命令打开设置
    GM_registerMenuCommand('打开设置', function() {
        var dialog = document.createElement('dialog');
        var div = document.createElement('div');
        div.style.textAlign = 'right';
        var button = document.createElement('button');
        button.textContent = 'X';
           button.onclick = function(){
        // 在关闭对话框时自动保存关键字
        GM_setValue('keyword_light', textarea_light.value);
        GM_setValue('keyword_hide', textarea_hide.value);
        dialog.close();
    }
        div.appendChild(button);
        dialog.appendChild(div);
        var h3 = document.createElement('h3');
        h3.textContent = '设置';
        h3.style.textAlign = 'center';
        h3.style.margin = '0';
        dialog.appendChild(h3);
        var p = document.createElement('p');
        p.style.whiteSpace = 'nowrap';
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = GM_getValue('is_light', true);
        checkbox.style.verticalAlign = 'top';
        checkbox.onchange = function(){
            GM_setValue('is_light', checkbox.checked);
            if (checkbox.checked) {
                msg.textContent = '开启高亮关键字';
            } else {
                msg.textContent = '关闭高亮关键字';
            }
        }
        p.appendChild(checkbox);
        var span = document.createElement('span');
        span.textContent = '高亮关键字';
        span.style.verticalAlign = 'top';
        p.appendChild(span);
        var textarea_light = document.createElement('textarea');
        textarea_light.rows = '5';
       var savedKeywordsLight = GM_getValue('keyword_light', '').split('\n').map(function(keyword) {
        return keyword.trim(); // 去除每个关键字前后的空白符
    }).filter(function(keyword) {
        return keyword !== ''; // 过滤掉空白关键字
    }).join('\n'); // 将过滤后的关键字重新连接成一个字符串

    textarea_light.value = savedKeywordsLight; // 设置文本框的值
        textarea_light.style.margin = '0 5px';
        p.appendChild(textarea_light);
        var button_save_light = document.createElement('button');
        button_save_light.textContent = '保存';
        button_save_light.style.verticalAlign = 'top';
        p.appendChild(button_save_light);
        dialog.appendChild(p);

        p = document.createElement('p');
        p.style.whiteSpace = 'nowrap';
        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = GM_getValue('is_hide', true);
        checkbox.style.verticalAlign = 'top';
        checkbox.onchange = function(){
            GM_setValue('is_hide', checkbox.checked);
            if (checkbox.checked) {
                msg.textContent = '开启隐藏关键字';
            } else {
                msg.textContent = '关闭隐藏关键字';
            }
        }
        p.appendChild(checkbox);
        span = document.createElement('span');
        span.textContent = '隐藏关键字';
        span.style.verticalAlign = 'top';
        p.appendChild(span);
        var textarea_hide = document.createElement('textarea');
        textarea_hide.rows = '5';
          var savedKeywordsHide = GM_getValue('keyword_hide', '').split('\n').map(function(keyword) {
        return keyword.trim(); // 去除每个关键字前后的空白符
    }).filter(function(keyword) {
        return keyword !== ''; // 过滤掉空白关键字
    }).join('\n'); // 将过滤后的关键字重新连接成一个字符串

    textarea_hide.value = savedKeywordsHide; // 设置文本框的值
        textarea_hide.style.margin = '0 5px';
        p.appendChild(textarea_hide);
        var button_save_hide = document.createElement('button');
        button_save_hide.textContent = '保存';
        button_save_hide.style.verticalAlign = 'top';
        p.appendChild(button_save_hide);
        dialog.appendChild(p);

        var msg = document.createElement('p');
        msg.textContent = '关键字一行一个';
        dialog.appendChild(msg);
        button_save_light.onclick = function(){
            GM_setValue('keyword_light', textarea_light.value);
            msg.textContent = '已经保存：高亮关键字';
        }
        button_save_hide.onclick = function(){
            GM_setValue('keyword_hide', textarea_hide.value);
            msg.textContent = '已经保存：隐藏关键字';
        }
        document.body.appendChild(dialog);
        dialog.showModal();
    });

    // 初始化时应用一次高亮和隐藏逻辑
    applyHighlightsAndHides();

    // 使用MutationObserver监测页面变化并重新应用高亮和隐藏逻辑
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            applyHighlightsAndHides();
        });
    });

    // 配置和启动MutationObserver
    var observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
})();
