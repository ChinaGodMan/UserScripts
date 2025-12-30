<a id="top"></a>

<!--NAVIGATION-->
<!--NAVIGATION-END-->
<!--SHIELDS-->
<!--SHIELDS-END-->
<!--HISTORY-->
<!--HISTORY-END-->
<!--TEXT-->
# 🎧 YouTube Pro Audio Enhancer

一个为 **YouTube 播放器**打造的高级音频增强脚本，基于 **Web Audio API**，可一键提升视频的低频力度、人声清晰度与整体响度，让普通视频也能拥有更专业的听感。

---

## ✨ 功能特性

- 🔊 **低频增强（Sub Bass）**  
  使用 Low Shelf 滤波器增强约 60Hz 的低频，让音乐更有下潜感。

- 🧹 **浑浊频段削减（Mud Cut）**  
  在 250Hz 附近进行削减，减少闷感，让声音更干净。

- 🎤 **人声清晰度提升（Presence）**  
  提升 2.5kHz 左右的存在感，使人声更突出、更清晰。

- ✨ **高频亮度增强（Brilliance）**  
  增强 8kHz 以上的高频，让整体听感更通透。

- 📈 **动态压缩（Compressor）**  
  平衡音量动态，减少忽大忽小的问题，听感更稳定。

- 🔉 **整体增益提升（Gain）**  
  在不明显失真的前提下，适度提高整体音量。

---

## 🖱 使用方式

- 在 YouTube 播放器左下角会新增一个 **🎵 音频增强按钮**
- 点击按钮即可 **开启 / 关闭音频增强**
- 按钮变为蓝色表示当前视频已启用增强效果

---

## 💾 状态记忆

- 脚本会自动记录你的开关状态（`localStorage`）
- 刷新页面或切换视频后，将自动恢复上一次的开启状态

---

## 🔧 技术实现

- 使用 `AudioContext` 创建音频处理环境  
- 通过 `createMediaElementSource()` 接管 `<video>` 音频流  
- 使用多个 `BiquadFilterNode` + `DynamicsCompressorNode` 构建音频处理链  
- 借助 `MutationObserver` 与 `yt-navigate-finish` 事件，适配 YouTube 的 SPA 页面切换

---

## ⚠ 注意事项

- 首次启用可能需要 **播放视频后** 才能激活音频上下文（浏览器限制）
- 不同设备 / 耳机 / 音箱效果会有差异
- 该脚本仅在本地生效，不会修改或上传任何音频数据

---

## 🚀 适用场景

- 🎶 音乐 MV / 现场演出
- 🎧 播客 / 访谈 / 教程
- 📺 音量偏小或音质一般的 YouTube 视频
- 💻 外放音质较弱的笔记本电脑

---

## 📜 License

MIT License  
仅供学习与个人使用，请合理使用。


<!--AUTHORS-->
<!--AUTHORS-END-->
<!--SCREENSHOT-->
---
## 预览截图:

![2025.12.30](https://s2.loli.net/2025/12/30/IXiw9Mgkt4djWa2.png)
<!--SCREENSHOT-END-->
<!--TEXT-END-->

<!--RELATED-->
<!--RELATED-END-->
<!--HELP-->
<!--HELP-END-->
<!--FOOTER-->

<img height="6px" width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">
<center><div align="center"><p><a href="https://github.com/ChinaGodMan/UserScripts#readme"><strong>更多用户脚本</strong></a> /<a href="#top">回到顶部↑</a></p></div></center>

<!--FOOTER--END-->
