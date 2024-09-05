
<img height=6px width="100%" src="https://media.chatgptautorefresh.com/images/separators/gradient-aqua.png?latest">


# 绚丽渐变美化网页表格脚本

该脚本会自动为网页中的所有表格应用颜色渐变，无需用户手动点击或操作，基于表格列中的数值大小生成不同的背景色，从而增强表格的视觉效果。

#### 功能特点
1. **自动应用渐变色**：脚本会自动扫描页面中的表格，为每一列中的数据应用渐变色，无需用户手动触发。
2. **数据驱动的渐变色**：根据每一列中数值的最小值和最大值，生成颜色渐变效果，数值越大或越小，背景颜色变化越明显。
3. **持续检测**：脚本每秒检查一次页面，如果有新表格加载，自动为其应用颜色渐变。
4. **渐变色配置**：渐变颜色基于HSL色彩模型，脚本中可调整色调范围（`HUE_RANGE`）、饱和度（`SATURATION`）、亮度（`LIGHTNESS`）等参数。

#### 主要参数
- **HUE_RANGE**: 设置渐变色的色调范围，默认值为120度，表示绿色到红色的渐变。
- **SATURATION**: 控制颜色的饱和度，默认为80%，提供了明亮的颜色效果。
- **LIGHTNESS**: 控制颜色的亮度，默认值为88%，使渐变色柔和且不刺眼。

#### 核心逻辑
1. **extractFirstFloat**: 从单元格文本中提取第一个浮点数，忽略非数字内容，确保只使用数值部分生成颜色渐变。
2. **applyGradient**: 为每个表格列自动计算最大和最小值，然后根据单元列的数值，生成相应的渐变背景色。
3. **initializeTables**: 定期检查页面中的表格，并自动为未初始化的表格应用渐变色。

#### 使用场景
该脚本适用于任何包含网页表格场景，能够自动为网页表格应用颜色渐变，帮助用户快速识别数据的差异，提升表格的可视化效果。

## 项目与反馈
- **原脚本：** [yearly](https://greasyfork.org/zh-CN/users/1312063)创建的[彩色表格 | 表格数据可视化](https://greasyfork.org/zh-CN/scripts/502933)
- **项目页面：** [GitHub 仓库](https://github.com/ChinaGodMan/UserScripts)
- **支持与问题反馈：** [报告问题](https://github.com/ChinaGodMan/UserScripts/issues)

![colorful-table-2.png](https://s2.loli.net/2024/09/06/CjBMp6ERigxsYAV.png)
![colorful-table.png](https://s2.loli.net/2024/09/06/IA7pxwj1ZC4c56a.png)


## 使用帮助
<p><a href="https://github.com/ChinaGodMan/UserScripts"><strong>更多用户脚本</strong></a> /
<a href="#top">回到顶部↑</a></p>