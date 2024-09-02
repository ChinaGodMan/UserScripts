// ==UserScript==
// @name        scroll By  to top/bottom
// @name:zh-CN        上下滚动按钮
// @description:zh-CN 在页面右侧生成两个按钮用于滚动页面
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version 1.0.0.14
// @author      人民的勤务员 <toniaiwanowskiskr47@gmail.com>  & d3ward
// @description Script to scrollBy  to top/bottom
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// @icon  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuElEQVR4nO2Y609adxzGD2LrolYsYL3bKc5enFM06+XV/oHt3bam+xPq0qxL2rSvzKJV7NY5V0WprtZ1a5w11Ch2bZ1SuRwEEUEPiOGignfhmK1vxG5+l3OyJpqVnhvCG57kk5zwPb/n9zxwuB0EiSuuuLgLIEHqCJ6vdOA3pHZcWenYwiodOC514K8IyGP71gwxq3Lg1ysdgXPEGiTWKrMF8ipmcJkUw/1SDAcmVGC4TzqDN5RPBXKjHrzK/Je4whZor7AFQhXTQeCELRAqnw7IP3T8KYpK+DLbxsXyqc1guTUAEWVqM/iBNXjhwIJXmeFQmWVTUWbZhINlo+0jNSRGOPxycqlpXfX+xAZEBdP6ILFnhMLDoVLj2lCpcR2iyWnjmioir8QpdFVxyrAGseCkYbWdU/gS7ernJ/WrEEtOoGtfsAp/GvUJSzQrgRPaFWBLyQsfCScPzUqwRL0sZv7sv1hqLxlbAra893QOPlE74ePRWfKYk9eYX84ofLHanydR+0PFaj+wQfLECV+Oe+DV7i78vbsLX5u85GPFoz52fqP+naLh5QLaBSQjPplkxAdsKFLNQjXqJsO/FlnC6CVnkj8WWflKRnwyeulrIKHw+YK/aHgRmFI44IBq1LUv/N4SVwwe8pyi5wuMvYuGF5aJbJT5j/8+f77w2QIw5d1+O1Tr3xx+fwk3eW7h03nmezzznqUuMDR/4/iTeWBCgRKDS9q3h3+tf3YBrujd5JrjQ15m+wx5r1EWyFd5lAUqL9Alv28GLmnohd9b4iudm1xbMOihv9egt4+yQN6AB8sf8AAd8h5hcFnrIi8NpiLWXNa6SA+6++UPuG2UBXIeu/DcfjdQ8tgF2T9PwNLLbWAr/8tt0oPworVnvztAWSBb6drJUbqADtk9GGR1myDr/h7uoWEDE7N953abSA/a+yldIeoCfXM72X1zwJbMe+NhCxAzLt5Zj5zblAUye514Vq8T2HKs0xC2ADHj4p35m5P6EsromcWO9cwCW8R3w19CxIyLd0aPg/pNLP7Vrsx46AC2iNr1YQsQMy7e4od26o9R0QPsuvgXO7BFKNeFLUDMuHiLHtivUhYQdjnOCbsxYEt6izZsAWLGxVt4HztDWQAB4B3tml442jUDbBDc0YQtQMzY+qZ3TfuIbNQFEAQRdNoa0n+aBjakNY+FLUDM2PoKOm0NtMKTl1HbVK7grjUk6LABU9KatYD6t/4XXu/HyRkbT0GHdVvUOZmDMNERxZT8iMIKjGmzQGqTBlJvq/fTpCFnrDwV1haEqdI6MGGK3LKZSgSKISnyyWCqwsz8Tz2h1BbLpymtkxBTWiwXES5K/tHclnzHDLFhohXhrN5eflLzhPKd5gmIKj+YVEiNOkI3eRXm5KQmkyqpyQRR4XvTILEnElHVqBMPf2tsP/ydEQ6W8dbIPfNvUEKj4UJi43gw8dY4RBZDgH/L+BkSFdUbRXwZKufL0BBfZgBONBi2+TK0BbmNCpGoqw7N5d1EZQn1el9CPQqMuIku8urRBqRRx+wb9kBE3DH7RnMWqdVd49Xq+3i1OhuvThfk1ep2eHW60H/HNmKG1OmuInXoGdo/zOKKKy7kbfoXB/L+M6aLQpIAAAAASUVORK5CYII=

// ==/UserScript==
//Variable to set how much to scroll
var sH = (window.innerHeight) - 50

//top button
var topBtn = document.createElement('span')
topBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.8 444.8" fill="#adadad"><path d="M434 278.7L248.4 92.8c-7.4-7-16.1-10.6-26-10.6 -10.1 0-18.7 3.5-25.7 10.6L10.8 278.7C3.6 285.9 0 294.5 0 304.6c0 10.3 3.6 18.8 10.8 25.7l21.4 21.4c6.9 7.2 15.4 10.9 25.7 10.9 10.3 0 18.8-3.6 25.7-10.9L222.4 213.3 361.2 351.7c6.8 7.2 15.4 10.9 25.7 10.9 10.1 0 18.7-3.6 26-10.9l21.4-21.4c7-7 10.6-15.6 10.6-25.7C444.8 294.5 441.2 285.9 434 278.7z"/></svg>'
topBtn.style.cssText = 'text-align:center;background:#191919;border-radius:8px;color:#000000;cursor:pointer;position:fixed;bottom:50%;width:36px;height:36px;right:10px;z-index:9999'
topBtn.addEventListener('click', function () { window.scrollBy({ top: -sH, behavior: 'smooth' }) }, false)
document.body.appendChild(topBtn)

//bottom button
var bottomBtn = document.createElement('span')
bottomBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.8 444.8" fill="#adadad"><path d="M434.3 114.2l-21.4-21.4c-7.4-7-16.1-10.6-26-10.6 -10.1 0-18.7 3.5-25.7 10.6L222.4 231.5 83.7 92.8c-7-7-15.6-10.6-25.7-10.6 -9.9 0-18.6 3.5-26 10.6l-21.1 21.4C3.6 121.4 0 130.1 0 140.2c0 10.3 3.6 18.8 10.8 25.7l185.9 185.9c6.9 7.2 15.4 10.8 25.7 10.8 10.1 0 18.8-3.6 26-10.8l185.9-185.9c7-7 10.6-15.6 10.6-25.7C444.8 130.3 441.3 121.6 434.3 114.2z"/></svg>'
bottomBtn.style.cssText = 'text-align:center;background:#191919;border-radius:8px;color:#000000;cursor:pointer;position:fixed;bottom:45%;width:36px;height:36px;right:10px;z-index:9999'//top:52%;
bottomBtn.addEventListener('click', function () { window.scrollBy({ top: sH, behavior: 'smooth' }) }, false)
document.body.appendChild(bottomBtn)
