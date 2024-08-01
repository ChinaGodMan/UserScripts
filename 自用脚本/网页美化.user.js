// ==UserScript==
// @name        网页页面样式美化
// @namespace   网页页面样式小美化
// @description 指向文字加粗, 指向图片发光, 指向图片放大动画, 输入框美化, 去除下划线, 选择文字高亮颜色, 链接更改颜色, 图片圆角, 指向链接增加边框
// @version     0.41
// @match       *://*/*
// @run-at       document-start
// ==/UserScript==

(function () {

    // 选择文字背景色, 输入框颜色
    //var textarea = '#D96396'
    var textarea = '#87CEFF'
    // 链接颜色
    var Urlcolor = '#87CEFF'

    // 已访问链接颜色
    var visited = '#90EE90'

    /* 指向链接高亮颜色//SECTION - 更改颜色
        var Urlhovercolor = '#FA8072' */
    var Urlhovercolor = '#87CEFF'
    // 指向链接边框颜色
    var bordercolor = '#D96396'

    // 指向链接边框圆角
    var borderradius = '5px'

    /* 虚线下划线 */
    // underline dotted
    /* 普通下划线 */
    // underline
    /* 双下划线 */
    // underline double
    /* 波浪线下划线 */
    // underline wavy
    // 下划线样式 none为去掉
    var decoration = 'none'

    // 输入框, 图片圆角
    var imgborder = '8px'

    // 图片放大
    var imgtransform = '1.02'

    // 图片放大动画速度
    var imgtransition = '0.2s'

    let css = `
    /* 已访问链接颜色 //STUB - 取消
    a:visited {
      color: ${visited} !important;
    }
       */

    /* 图片 */
    img {
      /* 放大图片动画 */
      transition: transform ${imgtransition} ease !important;
      /* 添加圆角 */
      border-radius: ${imgborder} !important;
      /* 添加阴影效果 */
      box-shadow: 2px 2px rgba(0, 0, 0, 0.2) !important;
      -webkit-transition-property: box-shadow;
    }
    /* 指向图片 */
    img:hover {
      /* 放大图片 */
      transform: scale(${imgtransform});
      /* 粉色边框 */
      box-shadow: 0px 0px 4px 4px rgba(217, 99, 150, 0.6) !important;
      -webkit-transition-property: box-shadow;
    }

    /* 输入框 */
    textarea:focus,
    input[type="text"]:focus,
    input[type="password"]:focus,
    input[type="checkbox"]:focus,
    input[type="submit"]:focus,
    input[type="reset"]:focus,
    input[type="radio"]:focus { 
      /* 颜色 */
      outline: 2px solid ${textarea} !important; 
      -webkit-box-shadow:0px 0px 0px #D96396 !important;
      /* 圆角度数 */
      border-radius: ${imgborder} !important;
    }

    /* 选择文字自定义高亮颜色 */
    ::selection {
      /* 背景颜色 */
      background-color: ${textarea} !important;
      /* 文本颜色 */
      color: #fff !important;
    }

    a * {
      /* 下划线 */
      text-decoration: ${decoration} !important;
      -webkit-transition-property: color;
      -webkit-transition-duration: 0.2s;
   }

    /* 链接 */
    a, strong, span.highlight-style, .mobile-subcategories-item.flex-row-center {
      /* 下划线 */
      text-decoration: ${decoration} !important;
      -webkit-transition-property: color;
      -webkit-transition-duration: 0.2s;
      /* 链接更改颜色 //STUB - 取消
       color: ${Urlcolor} !important;  
        */
    }

    /* 指向链接 */
    a:hover {
      /* 下划线 */
      text-decoration: ${decoration} !important;
      -webkit-transition-property: color;
      -webkit-transition-duration: 0.2s;
      /* 指向链接颜色 */
      color: ${Urlhovercolor} !important;
      /* 指向文字加粗 */
      text-shadow: 0em 0em 0.1em !important;
      font-weight: bold !important;
      /* 增加边框 */
      /* border: 1px solid ${bordercolor}; */
      /* 边框圆角 */
      border-radius: ${borderradius};
   }
`

    function addStyle(cssstyle) {
        let styleNode = document.createElement("style")
        styleNode.appendChild(document.createTextNode(cssstyle));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode)
    }

    addStyle(css)

})()