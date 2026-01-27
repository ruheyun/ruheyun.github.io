document.addEventListener('DOMContentLoaded', function() {
    // 创建按钮容器
    const btnContainer = document.createElement('div');
    btnContainer.id = 'scrollButtons';
    btnContainer.style.cssText = `
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        pointer-events: none;
    `;

    // 创建「到顶部」按钮
    const topBtn = document.createElement('button');
    topBtn.id = 'scrollToTop';
    topBtn.title = '回到顶部';
    topBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    `;
    topBtn.style.cssText = `
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--card-background);
        color: var(--card-font-color);
        border: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        pointer-events: auto;
    `;
    topBtn.onmouseover = () => {
        topBtn.style.transform = 'translateY(-2px)';
        topBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        topBtn.style.background = 'var(--theme-color)';
        topBtn.style.color = 'white';
    };
    topBtn.onmouseout = () => {
        topBtn.style.transform = 'translateY(0)';
        topBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        topBtn.style.background = 'var(--card-background)';
        topBtn.style.color = 'var(--card-font-color)';
    };
    topBtn.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 创建「到底部」按钮
    const bottomBtn = document.createElement('button');
    bottomBtn.id = 'scrollToBottom';
    bottomBtn.title = '滚动到底部';
    bottomBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
    `;
    bottomBtn.style.cssText = `
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--card-background);
        color: var(--card-font-color);
        border: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        pointer-events: auto;
    `;
    bottomBtn.onmouseover = () => {
        bottomBtn.style.transform = 'translateY(2px)';
        bottomBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        bottomBtn.style.background = 'var(--theme-color)';
        bottomBtn.style.color = 'white';
    };
    bottomBtn.onmouseout = () => {
        bottomBtn.style.transform = 'translateY(0)';
        bottomBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        bottomBtn.style.background = 'var(--card-background)';
        bottomBtn.style.color = 'var(--card-font-color)';
    };
    bottomBtn.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    // 组装
    btnContainer.appendChild(topBtn);
    btnContainer.appendChild(bottomBtn);
    document.body.appendChild(btnContainer);

    // 滚动时动态显示/隐藏（滚动 > 300px 显示）
    window.addEventListener('scroll', () => {
        const show = window.pageYOffset > 300;
        topBtn.style.opacity = show ? '1' : '0';
        topBtn.style.visibility = show ? 'visible' : 'hidden';
        bottomBtn.style.opacity = show ? '1' : '0';
        bottomBtn.style.visibility = show ? 'visible' : 'hidden';
    });

    // 接近底部时隐藏「到底部」按钮
    window.addEventListener('scroll', () => {
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
        bottomBtn.style.opacity = nearBottom ? '0' : '1';
        bottomBtn.style.visibility = nearBottom ? 'hidden' : 'visible';
    });
});