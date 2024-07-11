function Toast(msg, duration = 3000, backgroundColor = 'rgba(0, 0, 0, 0.7)', textColor = 'rgb(255, 255, 255)', position = 'bottom-right') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = msg;
    toast.style.cssText = `
        max-width: 80%;
        min-width: 150px;
        padding: 0 14px;
        height: auto;
        color: ${textColor};
        line-height: 1.5;
        text-align: center;
        border-radius: 12px;
        position: fixed;
        z-index: 2147483647;
        background: ${backgroundColor};
        font-size: 16px;
        transition: opacity 0.5s ease-in, transform 0.5s ease-in;
        word-wrap: break-word;
    `;

    // 使用位置参数设置位置样式
    const positions = {
        'top': 'top: 50%; left: 50%; transform: translate(-50%, 0);',
        'bottom': 'bottom: 10%; left: 50%; transform: translate(-50%, 0);',
        'left': 'top: 50%; left: 10%; transform: translate(0, -50%);',
        'right': 'top: 50%; right: 10%; transform: translate(0, -50%);',
        'top-left': 'top: 10%; left: 10%; transform: translate(0, 0);',
        'top-right': 'top: 10%; right: 10%; transform: translate(0, 0);',
        'bottom-left': 'bottom: 10%; left: 10%; transform: translate(0, 0);',
        'bottom-right': 'bottom: 10%; right: 10%; transform: translate(0, 0);',
        'center': 'top: 50%; left: 50%; transform: translate(-50%, -50%);',
    };

    toast.style.cssText += positions[position] || positions['bottom-right'];

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 500);
    }, duration);

    // 增加媒体查询来优化移动设备上的样式
    const mediaQuery = `
        @media only screen and (max-width: 600px) {
            .toast {
                font-size: 14px;
                padding: 10px;
                max-width: 90%;
                min-width: 0;
            }
        }
    `;
    const style = document.createElement('style');
    style.textContent = mediaQuery;
    document.head.appendChild(style);
}