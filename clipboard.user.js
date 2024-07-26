// ==UserScript==
// @name          复制剪贴板保护 修改版 
// @namespace    https://github.com/10086100886
// @author       人民的勤务员 <toniaiwanowskiskr47@gmail.com> Sky,仰望星空
// @description     管理网页剪贴板的写入行为&禁用音视频内容预载及自动播放。
// @version 1.2.2.14
// @include         *
// @run-at          document-start
// @license MIT
// ==/UserScript==
//在其他地方下载的脚本，作者不知道是谁很不错，防范牛皮癣 。用Chatgpt修改了下，让脚本在PC端浏览时可以使用快捷键复制
!function () {
  // 定义唯一键，用于防止重复执行
  const key = encodeURIComponent('剪贴板保护&禁用预载:执行判断');

  // 如果已经执行过，直接返回
  if (window[key]) { return; }

  try {
    // 标记已经执行过
    window[key] = true;

    // 初始化变量
    let red = true;
    let green = false;
    let orange = false;

    // 获取页面中的所有视频元素
    var videoTags = document.getElementsByTagName("video");

    // 创建开关按钮元素
    const sw = document.createElement("div");
    // 设置按钮样式
    sw.style = 'position:fixed!important;bottom:30%;right:10px;z-index:2147483647;width:18px;height:18px;opacity:0.4;border-radius:9px;background:red;visibility:hidden';
    // 将按钮添加到页面中
    document.body.appendChild(sw);

    // 对所有视频元素进行处理，禁用预加载和自动播放
    for (var i = 0; i < videoTags.length; i++) {
      videoTags[i].setAttribute("preload", "metadata");
      videoTags[i].removeAttribute("autoplay");
    };

    // 获取页面中的所有音频元素
    var audioTags = document.getElementsByTagName("audio");

    // 对所有音频元素进行处理，禁用预加载和自动播放
    for (var i = 0; i < audioTags.length; i++) {
      audioTags[i].setAttribute("preload", "metadata");
      audioTags[i].removeAttribute("autoplay");
    };

    // 显示提示消息的函数
    function Toast(msg, duration, backgroundColor, textColor) {
    duration = isNaN(duration) ? 3000 : duration;
    backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.7)';
    textColor = textColor || 'rgb(255, 255, 255)';

    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: " + textColor + ";line-height: 40px;text-align: center;border-radius: 12px;position: fixed;top: 95%;left: 50%;transform: translate(-50%, -50%);z-index: 2147483647;background: " + backgroundColor + ";font-size: 16px;";
    document.body.appendChild(m);

    setTimeout(function () {
        var d = 0.5;
        m.style.transition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}


// 处理复制事件的函数
function pc(e) {
    if (red) {
    const selection = window.getSelection().toString(); 
  var confirmed = window.confirm('允许网页复制以下内容吗？\n' + selection);
if (confirmed) {
    // 用户点击了确认按钮
    // 执行复制操作
    Toast('已允许网页写入剪贴板', 500, 'rgba(0, 255, 0, 0.7)', 'rgb(255, 255, 255)');
} else {
    // 用户点击了取消按钮
    // 执行阻止写入剪贴板的操作
    e.preventDefault();
    e.stopPropagation();
    sw.style.visibility = "visible";
    Toast('已阻止网页写入剪贴板', 500, 'rgba(255, 0, 0, 0.7)', 'rgb(255, 255, 255)');
}

    }
    setTimeout(function() {
        sw.style.visibility = "hidden";
    }, 4000);
}





    // 添加复制事件监听器
    document.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true });

    // 遍历所有iframe元素，为其内容添加复制事件监听器
    Array.from(document.getElementsByTagName('iframe')).forEach((i) => i.contentDocument.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true }));

    // 点击开关按钮的事件处理
    sw.addEventListener('click', function (e) {
      if (!orange) {
        sw.style.background = red ? 'green' : 'red';
        red = !red;
        green = !green;
      } else {
        sw.style.background = 'red';
        red = !red;
        orange = !orange;
      }
    }, { 'passive': true });

    // 右键菜单事件处理
    document.addEventListener('contextmenu', function (e) {
      if (!green) {
        sw.style.visibility = "visible"
        sw.style.background = 'orange';
        red = false;
        orange = true;
        setTimeout(function () { sw.style.visibility = "hidden"; }, 4000);
      }
    }, { 'passive': true });

    // 复制完成后的事件处理
    document.addEventListener('copy', function (e) {
      if (orange) {
        sw.style.background = 'red';
        red = true;
        orange = false;
        sw.style.visibility = "hidden"
      }
    }, { 'passive': true });

    // 添加键盘事件监听器，支持快捷键复制
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.key === 'c') {
        sw.style.visibility = "visible"
        sw.style.background = 'orange';
        red = false;
        orange = true;
      }
    }, { 'passive': true });

    // 鼠标按下事件处理
    document.addEventListener('mousedown', function (e) {
      if (orange) {
        sw.style.background = 'red';
        red = true;
        orange = false;
      }
    }, { 'passive': true });

  } catch (err) {
    console.log('剪贴板保护&禁用预载：', err);
  }

}();
