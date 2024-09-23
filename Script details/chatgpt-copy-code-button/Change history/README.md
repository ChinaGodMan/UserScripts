# **🛠️ ChatGPT 聊天复制代码按钮 更新日志**

### **📅 2024-09-23 08:58:07- Ver 1.2.0.0**

**修复**: • 新发送内容也会错误添加按钮,改为添加时判断元素是否存在以下子元素`querySelector('div.flex.items-center.text-token-text-secondary')`
**修复**: •导出代码检测代码类型出错的问题`var languageDiv = elem.parentElement.parentElement.querySelector('div.flex.items-center.text-token-text-secondary')` →`var languageDiv = elem.querySelector('div.flex.items-center.text-token-text-secondary')`

---

### **📅 2024-09-22 10:44:07- Ver 1.1.0.0**

**新增**: •增加一个导出代码的按钮,新增的代码来自脚本 →[**ChatGPT Code Export Button**](https://greasyfork.org/zh-CN/scripts/499627)

---

### **📅 2024-09-22 07:06:07- Ver 1.0.0.0**

**新增**: •兼容新版的 ChatGPT 官网

---
