<div align="right">
    <h6>
        <picture>
            <source type="image/svg+xml" media="(prefers-color-scheme: dark)"
                srcset="https://assets.aiwebextensions.com/images/icons/earth/white/icon32.svg">
            <img height=14
                src="https://assets.aiwebextensions.com/images/icons/earth/black/icon32.svg">
        </picture>
        <a href="../README.md">简体中文</a> |
        <a href="../zh-TW/README.md">繁體中文</a>|
        <a href="../en/README.md">English</a> |
        <a href="../ja/README.md">日本語</a>|
        <a href="../vi/README.md">Tiếng Việt</a>|
        <a href="../ko/README.md">대한민국</a>
    </h6>
</div>

# []() Cách cài đặt Grease Monkey Script？

### [](#) 1. Cài đặt trình quản lý userscript

ở đây với “**nút cuộn**” Ví dụ，Đầu tiên cài đặt trình quản lý tập lệnh Tampermonkey，Biểu tượng trông như thế này：

**nền tảng khác nhau，các trình duyệt khác nhau Tampermonkey Địa chỉ cài đặt như sau：**

Windows

| #   | Trình duyệt               | Tampermonkey Địa chỉ tải xuống                                                                                                                                                                                                                                       | Phương pháp cài đặt                                                                                     |
| --- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     | Chrome Trình duyệt        | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#chromeTrình duyệt)         |
|     | Edge Trình duyệt          | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（gợi ý）hoặc [~Edge bổ trợ~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（rất chậm）                         | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#edgeTrình duyệt)           |
|     | Firefox                   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Firefox)                   |
|     | trình duyệt Waterfox      | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#trình duyệt Waterfox)      |
|     | Trình duyệt 100%          | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Trình duyệt 100%)          |
|     | 360 Trình duyệt cực nhanh | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360Trình duyệt cực nhanh) |
|     | 360 trình duyệt an toàn   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#_360trình duyệt an toàn)   |
|     | QQ Trình duyệt            | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#qqTrình duyệt)             |
|     | Trình duyệt Sogou         | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Trình duyệt Sogou)         |
|     | Trình duyệt Maxthon       | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Trình duyệt Maxthon)       |
|     | Trình duyệt mong ước sao  | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Trình duyệt mong ước sao)  |
|     | Vivaldi Trình duyệt       | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#vivaldiTrình duyệt)        |
|     | Yandex Trình duyệt        | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#yandexTrình duyệt)         |
|     | Opera Trình duyệt         | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#operaTrình duyệt)          |
|     | Trình duyệt Cheetah       | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147196#Trình duyệt Cheetah)       |

Mac

| #   | Trình duyệt               | Tampermonkey Địa chỉ tải xuống                                                                                                                                                                                                                                       | Phương pháp cài đặt                                                                                     |
| --- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     | Chrome Trình duyệt        | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#chromeTrình duyệt)         |
|     | Edge Trình duyệt          | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（gợi ý）hoặc [~Edge bổ trợ~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（rất chậm）                         | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#edgeTrình duyệt)           |
|     | Firefox                   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#Firefox)                   |
|     | trình duyệt Waterfox      | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#trình duyệt Waterfox)      |
|     | 360 Trình duyệt cực nhanh | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360Trình duyệt cực nhanh) |
|     | 360 trình duyệt an toàn   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#_360trình duyệt an toàn)   |
|     | Trình duyệt Maxthon       | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#Trình duyệt Maxthon)       |
|     | Trình duyệt mong ước sao  | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#Trình duyệt mong ước sao)  |
|     | Vivaldi Trình duyệt       | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#vivaldiTrình duyệt)        |
|     | Yandex Trình duyệt        | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#yandexTrình duyệt)         |
|     | Opera Trình duyệt         | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147197#operaTrình duyệt)          |

Linux

| #   | Trình duyệt          | Tampermonkey Địa chỉ tải xuống                                                                                                                                                                                                                                       | Phương pháp cài đặt                                                                                |
| --- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|     | Chrome Trình duyệt   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#chromeTrình duyệt)    |
|     | Edge Trình duyệt     | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/addon/detail/iikmkjmpaadaobahmlepeloendndfphd)（gợi ý）hoặc [~Edge bổ trợ~](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)（rất chậm）                         | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#edgeTrình duyệt)      |
|     | Firefox              | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#Firefox)              |
|     | trình duyệt Waterfox | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/firefox/detail/tampermonkey)（gợi ý）                                                                                                                                                                            | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#trình duyệt Waterfox) |
|     | Vivaldi Trình duyệt  | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#vivaldiTrình duyệt)   |
|     | Yandex Trình duyệt   | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#yandexTrình duyệt)    |
|     | Opera Trình duyệt    | [Crx Cửa hàng mở rộng Soso](https://www.crxsoso.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)（gợi ý）hoặc [~Chrome kho ứng dụng trực tuyến~](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)（có tường bao quanh） | [Bấm vào để xem](https://www.youxiaohou.com/zh-cn/crx.html?spm=1725839147198#operaTrình duyệt)     |

Sau khi cài đặt thành công sẽ xuất hiện biểu tượng sau trên thanh tiện ích của trình duyệt：

![](https://pic.rmb.bdstatic.com/bjh/1f8c55cc8c410979414290118979c4659140.png)

▲ TampermonkeyĐã cài đặt

### [#](#\_2-Chọn trợ lý để cài đặt) 2. Chọn trợ lý để cài đặt

Tiếp theo, bạn chỉ cần mở trang cài đặt của trợ lý tương ứng.：

<table>
    <thead>
        <tr>
            <th>Tên tập lệnh</th>
            <th>Mô tả kịch bản</th>
            <th>GitHub</th>
            <th>Greasyfork</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">Thời gian phát hành</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">Thời gian cập nhật</th>
            <th><img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">phiên bản mới nhất</th>
            <th><img src="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/docs/icon/icons8-project-management-48.png" width="16" height="16">Được tạo lần đầu tiên</th>
        </tr>
    </thead>
    <tbody>
<tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505209" target="_blank">ChatGPTKích thước phông chữ mã giảm</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-code-styling.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-code-styling" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>cho phép ChatGPT Kích thước phông chữ mã trở nên nhỏ hơn wsucixjv</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-code-styling.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-code-styling.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505209.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505209?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 11:42:17</sub></td>
            <td><sub>2024-09-08 08:45:08</sub></td>
             <td><sub>0.1.0.19</sub></td>
              <td><sub>2024-07-27 20:58:35</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506166" target="_blank">ChatGPT bộ đếm ký tự</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-counter.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-counter" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>添加一nhân vật计数器到输入框，giới hạn ở 32732 nhân vật。（ChatGPT Giới hạn là 32732 个字符。）</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-counter.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-counter.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506166.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506166?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-01 09:51:01</sub></td>
            <td><sub>2024-09-08 08:45:08</sub></td>
             <td><sub>1.3.1.10</sub></td>
              <td><sub>2024-09-01 09:45:50</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504901" target="_blank">ChatGPT Thu gọn tin nhắn tự và chiều rộng tối đa</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/chatgpt-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/chatgpt-plus" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Tự động thu gọn các tin nhắn dài do bạn gửi，Tiết kiệm không gian màn hình。Cho phép bạn đặt độ rộng tối đa của cửa sổ trò chuyện，Giữ tin nhắn dài không vượt quá phạm vi được chỉ định。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/chatgpt-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/chatgpt-plus.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504901.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504901?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-24 11:33:58</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>0.1.0.21</sub></td>
              <td><sub>2024-08-24 11:09:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497403" target="_blank">Trình quản lý ủy quyền phiên bản clip viết trang web</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/clipboard-manager.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/clipboard-manager" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Cấm các trang web ị trên các phiên bản đã chỉnh sửa，màu xanh lá cây để phát hành，lệnh cấm màu đỏ，hướng dẫn tạm thời màu cam</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/clipboard-manager.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/clipboard-manager.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497403.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497403?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-09 10:17:55</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.2.2.69</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505207" target="_blank">Thang máyCSDNHạn chế sao chép đăng nhập</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/csdn-blocker.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/csdn-blocker" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>chết tiệt bạn CSDN Đăng nhậpSao chép，Sao chép nội dung hộp mã mà không cần đăng nhập</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/csdn-blocker.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/csdn-blocker.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505207.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505207?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 11:37:22</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.0.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/507036" target="_blank">Làm đẹp các biểu mẫu web với độ dốc tuyệt đẹp</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/colorful-table.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/colorful-table" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Tự động áp dụng làm đẹp độ dốc màu cho tất cả các cột của bảng trên trang web.</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/colorful-table.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/colorful-table.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/507036.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/507036?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-06 06:08:08</sub></td>
            <td><sub>2024-09-08 08:45:09</sub></td>
             <td><sub>1.0.0.5</sub></td>
              <td><sub>2024-09-06 05:02:49</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505830" target="_blank">GitHubGửi hiển thị thông tinHTML</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-commit-viewer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-commit-viewer" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Kịch bản này sẽ GitHub Thông tin nộp hồ sơ trên HTML xem，để xem chi tiết gửi rõ ràng hơn。Nó sẽ tự động gửi danh sách thông tin、Tiêu đề cam kết và thông tin cam kết mới nhất được chuyển đổi thành HTML Định dạng，Cung cấp hiệu ứng hình ảnh và trải nghiệm người dùng tốt hơn。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-commit-viewer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-commit-viewer.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505830.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505830?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-30 10:13:44</sub></td>
            <td><sub>2024-09-08 08:45:10</sub></td>
             <td><sub>1.0.0.15</sub></td>
              <td><sub>2024-08-30 03:21:51</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505496" target="_blank">GitHubTải xuống thư mục</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-folder-downloader.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-folder-downloader" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Thêm nút tải xuống，Cho phép dễ dàng tải xuống cụ thể GitHub thư mục。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-folder-downloader.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-folder-downloader.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505496.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505496?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-28 04:27:35</sub></td>
            <td><sub>2024-09-08 08:45:10</sub></td>
             <td><sub>0.7.0.19</sub></td>
              <td><sub>2024-08-29 06:11:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505501" target="_blank">GitHubTải xuống các tập tin đơn lẻ và sao chép các tập tinURL</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-raw-file-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-raw-file-plus" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Nút thêm vào cuối mỗi dòng file，để sao chép tập tin gốc URL và tải về các tập tin</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-raw-file-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-raw-file-plus.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505501.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505501?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-28 05:20:14</sub></td>
            <td><sub>2024-09-09 06:21:05</sub></td>
             <td><sub>2.2.0.18</sub></td>
              <td><sub>2024-08-29 06:11:33</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/502291" target="_blank">githubHiển thị kích thước kho</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-repo-size-view.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-repo-size-view" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>hiện hữuGithubHiển thị kích thước kho khi xem và tìm kiếm kho</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-repo-size-view.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-repo-size-view.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502291.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502291?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-01 03:43:19</sub></td>
            <td><sub>2024-09-08 08:45:11</sub></td>
             <td><sub>0.1.2.52</sub></td>
              <td><sub>2024-08-01 00:53:59</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505218" target="_blank">GitHub Sort by Date</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/github-sort-by-date.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/github-sort-by-date" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Thay đổi cách sắp xếp file danh sách kho theo thứ tự ngày giảm dần，Thuận tiện xem các tập tin cập nhật mới nhất。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/github-sort-by-date.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/github-sort-by-date.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505218.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505218?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 12:30:53</sub></td>
            <td><sub>2024-09-08 08:45:11</sub></td>
             <td><sub>1.1.0.19</sub></td>
              <td><sub>2024-08-06 01:28:58</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/502652" target="_blank">Google Tìm kiếm nâng cao</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-advanced-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-advanced-search" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Đây là một cho Google Thêm tập lệnh người dùng cho biểu mẫu tìm kiếm nâng cao。Nó thêm một biểu mẫu tìm kiếm nâng cao có thể ẩn ở đầu trang，Giúp bạn tìm kiếm thông tin chính xác hơn。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-advanced-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-advanced-search.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/502652.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/502652?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-05 10:28:20</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>0.1.9.41</sub></td>
              <td><sub>2024-08-06 00:32:20</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/500262" target="_blank">Google Tìm kiếm và chặn các trang web cụ thể</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/google-block-search-sites.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/google-block-search-sites" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Chặn các trang web cụ thể khỏi kết quả của công cụ tìm kiếm，Giúp người dùng lọc ra các kết quả tìm kiếm không mong muốn。 Trang web chặn đầu vào tùy chỉnh。Định dạng-zhihu -baidu Được sử dụng để chặn nội dung tìm kiếm của Google</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/google-block-search-sites.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/google-block-search-sites.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500262.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500262?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-07-11 14:21:02</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>0.0.1.47</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497317" target="_blank">GreasyForkthích hợp để nâng cao</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-link.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-link" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Trang chi tiết tập lệnh được thêm vào. Nó phù hợp để thêm các liên kết. Nhấp để mở trang web.，Sao chép trang web,tìm kiếm lốp xe</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-link.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-link.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497317.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497317?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-08 05:36:47</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>0.9.3.62</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506717" target="_blank">GreaysFork Nâng cao WebHookĐồng bộ hóa cài đặt</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-webhook-sync-enhanced.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-webhook-sync-enhanced" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Tập lệnh này có thể giúp bạn nhập nhanh thông tin đồng bộ hóa tập lệnh，Và thêm mã ngôn ngữ cho nhiều quốc gia theo đợt，Thay vì nhấp vào từng hộp lựa chọn và đi đến URL tương ứng。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-webhook-sync-enhanced.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-webhook-sync-enhanced.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506717.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506717?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-04 12:12:18</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.1.0.6</sub></td>
              <td><sub>2024-09-04 12:08:47</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505164" target="_blank">GreasyFork Markdown toobar</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-markdown-toolbar.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-markdown-toolbar" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Được sử dụng theo mặc định trong diễn đàn Markdown Định dạng，Thêm liên kết trợ giúp định dạng và Markdown Giới thiệu thanh công cụ</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-markdown-toolbar.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-markdown-toolbar.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505164.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505164?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 02:12:29</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>2.0.4.20</sub></td>
              <td><sub>2024-08-06 00:32:53</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/501119" target="_blank">GreasyFork Hiển thị xếp hạng kịch bản</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-ranks.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-ranks" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Thêm điểm đánh giá vào danh sách tập lệnh</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-ranks.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-ranks.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501119.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501119?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-07-19 09:44:01</sub></td>
            <td><sub>2024-09-08 08:45:13</sub></td>
             <td><sub>1.3.3.59</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505215" target="_blank">GreasyFork Tìm kiếm nâng cao</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-search.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-search" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Tìm kiếm bằng Google GreasyFork Và SleazyFork chữ viết trên </td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-search.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-search.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505215.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505215?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 12:08:49</sub></td>
            <td><sub>2024-09-09 06:20:39</sub></td>
             <td><sub>0.6.5.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/501880" target="_blank">GreasyFork Cải tiến thanh điều hướng</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-user-control-panel-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-user-control-panel-button" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Nâng caogreasyforkThanh điều hướng,Thêm danh sách người dùng,Bảng điều khiển người dùng, v.v.</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-user-control-panel-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-user-control-panel-button.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/501880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/501880?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-07-27 09:34:43</sub></td>
            <td><sub>2024-09-08 08:45:14</sub></td>
             <td><sub>0.3.1.53</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497346" target="_blank">GreasyforkThợ làm keo</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-utility-toolkit.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-utility-toolkit" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Nâng caogreasyfork,Sao chép mã，Tải xuống tập lệnh，Thời gian chính xác đến từng giây，Dọn dẹp trang chủ，Thảo luận về báo cáo bằng một cú nhấp chuột，Đã thêm mã nhảy danh sách tập lệnh tải xuống Làm đẹp mã xem và hiển thị các tệp tham chiếu mã，hiển thị biểu tượng tập lệnh，Chuyển đến tập lệnh dành cho người lớn và các thao tác khác</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-utility-toolkit.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-utility-toolkit.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497346.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497346?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-08 17:06:26</sub></td>
            <td><sub>2024-09-08 08:45:15</sub></td>
             <td><sub>2.2.0.87</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506345" target="_blank">Greasyfork Trợ lý thông báo</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/greasyfork-discussion-watcher.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/greasyfork-discussion-watcher" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Khi có câu trả lời mới cho tập lệnh của bạn hoặc cho cuộc thảo luận mà bạn đang tham gia，Kịch bản sẽ hiển thị nội dung thảo luận mới nhất trong một cửa sổ phương thức trên trang web。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/greasyfork-discussion-watcher.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/greasyfork-discussion-watcher.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506345.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506345?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-02 12:36:00</sub></td>
            <td><sub>2024-09-08 08:45:12</sub></td>
             <td><sub>1.3.0.1</sub></td>
              <td><sub>2024-09-02 12:34:55</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498906" target="_blank">Đánh dấu từ khóa trên các trang web+(gợi ý)</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Đánh dấu văn bản trên các trang web</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498906.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498906?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-26 07:05:05</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.1.2.68</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498905" target="_blank">Làm nổi bật văn bản web_phiên bản nhỏ</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/highlight-keywords-mini.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/highlight-keywords-mini" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Làm nổi bật từ khóa tùy chỉnh trên các trang web bao gồm nội dung được tải động khi cuộn</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/highlight-keywords-mini.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/highlight-keywords-mini.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498905.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498905?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-26 06:53:12</sub></td>
            <td><sub>2024-09-08 08:45:16</sub></td>
             <td><sub>1.0.5.22</sub></td>
              <td><sub>2024-08-24 06:02:07</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505325" target="_blank">MiSSAVĐăng nhập tự động</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-auto-login-helper" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Phát hiện MisssAV tình trạng，và tự động đăng nhập khi chưa đăng nhập</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-auto-login-helper.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505325.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505325?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-27 04:15:17</sub></td>
            <td><sub>2024-09-08 08:45:17</sub></td>
             <td><sub>1.0.1.3</sub></td>
              <td><sub>2024-08-27 02:45:07</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497682" target="_blank">MissAVNgười quản lý bộ sưu tập</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/missav-explorer.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/missav-explorer" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>missSao lưu danh sách phát，Hỗ trợ tải hình ảnh và lưu thông tin video.Xuất trang web địa phương Hỗ trợ xuất khẩu sangwebdav</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/missav-explorer.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/missav-explorer.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497682.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497682?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-12 10:58:39</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>1.2.3.69</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506528" target="_blank">TissAVĐăng nhập tự động</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/thisav-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/thisav-auto-login-helper" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Phát hiện TissAV tình trạng，và tự động đăng nhập khi chưa đăng nhập</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/thisav-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/thisav-auto-login-helper.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506528.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506528?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-03 08:50:59</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.0.1.4</sub></td>
              <td><sub>2024-09-03 08:52:46</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/506730" target="_blank">JableTVĐăng nhập tự động</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/jable-auto-login-helper.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/jable-auto-login-helper" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Phát hiện JableTV tình trạng，và tự động đăng nhập khi chưa đăng nhập</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/jable-auto-login-helper.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/jable-auto-login-helper.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/506730.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/506730?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-09-04 13:43:00</sub></td>
            <td><sub>2024-09-08 08:45:17</sub></td>
             <td><sub>1.0.0.6</sub></td>
              <td><sub>2024-09-04 13:44:42</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504890" target="_blank">đầu cuối ngoại ngữ</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/no-zh-terminator.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/no-zh-terminator" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Nhận biết các ký tự không phải tiếng Trung，Nếu chiều dài lớn hơn 5 Và văn bản dịch không chứa tiếng Trung Quốc，sau đó thay thế bằng tiếng Trung,Cần có thể truy cập đượcgooglemạng</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/no-zh-terminator.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/no-zh-terminator.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504890.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504890?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-24 10:37:08</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>1.3.98.21</sub></td>
              <td><sub>2024-07-27 20:58:35</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/504880" target="_blank">Xem trước cửa sổ nhỏ</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/popup-window.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/popup-window" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Mở liên kết trong cửa sổ bật lên khi kéo liên kết，và cung cấp bản xem trước trước khi mở，sử dụng Edge công nghệ đọc trước。Đồng thời, thêm hiệu ứng acrylic phía sau cửa sổ nhỏ khi nó được mở.。</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/popup-window.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/popup-window.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/504880.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/504880?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-24 06:51:35</sub></td>
            <td><sub>2024-09-08 08:45:18</sub></td>
             <td><sub>2.4.0.28</sub></td>
              <td><sub>2024-08-23 07:20:13</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498625" target="_blank">Xóa gạch chân liên kết</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/remove-link-underlines.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/remove-link-underlines" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Xóa gạch chân khỏi liên kết web</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/remove-link-underlines.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/remove-link-underlines.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498625.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498625?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-23 11:35:07</sub></td>
            <td><sub>2024-09-08 08:45:19</sub></td>
             <td><sub>1.2.0.59</sub></td>
              <td><sub>2024-07-27 20:54:00</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/498904" target="_blank">Script FinderCông cụ tìm tập lệnh Grease Monkey</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/script-finder-plus.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/script-finder-plus" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Script Finder là một tập lệnh người dùng（userscript），Nó giúp bạn tìm và quản lý mô tả người dùng trên bất kỳ trang web nào</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/script-finder-plus.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/script-finder-plus.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/498904.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/498904?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-26 06:43:47</sub></td>
            <td><sub>2024-09-08 08:45:19</sub></td>
             <td><sub>0.1.6.75</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/497251" target="_blank">Nút cuộn nhỏ lên xuống</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-button" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Thêm nút cuộn lên xuống ở bên phải trang</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-button.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/497251.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/497251?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-06-07 08:33:17</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.0.0.22</sub></td>
              <td><sub>2024-08-24 06:05:19</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/500255" target="_blank">Nút trên và dưới một chạm</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/scroll-to-top-button.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/scroll-to-top-button" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Đã sửa đổi từGreasyforktập lệnh người dùng Thêm nút trên và dưới vào trang web，Tạo điều kiện di chuyển nhanh lên đầu hoặc cuối trang dài。 Đã thêm thay đổi màu nút khi cuộn xuống，3Tự động dừng nếu không cuộn trong vài giây</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/scroll-to-top-button.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/scroll-to-top-button.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/500255.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/500255?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-07-11 13:57:29</sub></td>
            <td><sub>2024-09-08 08:45:20</sub></td>
             <td><sub>1.2.0.68</sub></td>
              <td><sub>2024-07-27 20:54:01</sub></td>
        </tr>
    <tr>
            <td>
                <img src="https://greasyfork.org/vite/assets/blacklogo96-CxYTSM_T.png" width="16" height="16">
                <a href="https://greasyfork.org/zh-CN/scripts/505208" target="_blank">dịch trang web——Tự động dịch sang tiếng Trung</a><br>
                <img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16">
                <a href="https://github.com/ChinaGodMan/UserScripts/blob/main/translate-only-chinese.user.js" target="_blank">GitHub</a>
                <a href="https://github.com/ChinaGodMan/UserScripts/tree/main/Script details/translate-only-chinese" target="_blank">
                    <mark>chi tiết</mark>
                </a>
            </td>
            <td>Cung cấp góc dưới bên phải của mỗi trang web không phải tiếng Trung Quốc（Có thể điều chỉnh ở góc dưới bên trái）thêm một google Biểu tượng dịch，Phiên bản này là phiên bản dịch tiếng Trung，Chỉ dịch tiếng nước ngoài sang tiếng Trung，Thêm bản dịch tự động</td>
            <td>
                <a href="https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/translate-only-chinese.user.js">
                    <img src="https://img.shields.io/github/size/ChinaGodMan/UserScripts/translate-only-chinese.user.js?style=social" alt="size">
                    <br>Cài đặt
                </a>
            </td>
            <td>
                <a href="https://update.greasyfork.org/scripts/505208.user.js">
                    <img src="https://img.shields.io/greasyfork/dt/505208?color=%23990000&label=Installs">
                    <br>Cài đặt
                </a>
            </td>
            <td><sub>2024-08-26 11:37:23</sub></td>
            <td><sub>2024-09-08 08:45:21</sub></td>
             <td><sub>0.31.0.19</sub></td>
              <td><sub>2024-07-27 20:58:34</sub></td>
        </tr>
    </tbody>
</table>
Bấm vào nút xanh ở hình bên dưới

![Snipaste_2024-09-09_07-54-33.png](https://s2.loli.net/2024/09/09/nUdqo2KifQwYzpC.png)

Tiếp tục nhấp vào Cài đặt trong cửa sổ bật lên，Cửa sổ tự động đóng sau khi thành công

Lúc này, việc làm mới trang hiệu quả sẽ đến，tận hưởng nó!!!!

![1111.png](https://s2.loli.net/2024/09/09/b8sGXUgz3Q2v7ph.png)
