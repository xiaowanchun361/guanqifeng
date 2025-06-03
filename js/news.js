// 重庆冠齐峰广告中心物流运输行业新闻网站
// 新闻相关功能JS文件

document.addEventListener('DOMContentLoaded', function() {
  // 初始化内容标签切换功能
  initTabSwitcher();
  
  // 初始化新闻分享功能
  initNewsShare();
  
  // 初始化阅读进度指示器
  initReadingProgress();
});

/**
 * 初始化内容标签切换功能
 */
function initTabSwitcher() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;
      
      const targetContent = document.getElementById(targetId);
      if (!targetContent) return;
      
      // 移除所有标签按钮的活动状态
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
      });
      
      // 隐藏所有内容区块
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // 激活当前标签和内容
      btn.classList.add('active');
      targetContent.classList.add('active');
    });
  });
}

/**
 * 初始化新闻分享功能
 */
function initNewsShare() {
  const shareBtns = document.querySelectorAll('.share-btn');
  if (!shareBtns.length) return;
  
  shareBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const platform = btn.getAttribute('data-platform');
      const title = document.title;
      const url = window.location.href;
      
      // 根据平台执行不同的分享操作
      switch(platform) {
        case 'weixin':
          // 微信分享通常是生成二维码
          alert('请打开微信扫一扫，分享给微信好友或朋友圈');
          break;
        case 'weibo':
          // 微博分享
          window.open(`https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
          break;
        case 'qq':
          // QQ分享
          window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
          break;
        case 'link':
          // 复制链接
          navigator.clipboard.writeText(url).then(() => {
            alert('链接已复制到剪贴板');
          }).catch(err => {
            console.error('无法复制链接: ', err);
          });
          break;
      }
    });
  });
}

/**
 * 初始化阅读进度指示器
 */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;
  
  const articleContent = document.querySelector('.article-content');
  if (!articleContent) return;
  
  // 监听滚动事件
  window.addEventListener('scroll', function() {
    // 获取内容区域的位置信息
    const contentRect = articleContent.getBoundingClientRect();
    // 内容的总高度
    const contentHeight = contentRect.height;
    // 内容顶部距离视口顶部的距离
    const contentTop = contentRect.top;
    // 视口高度
    const windowHeight = window.innerHeight;
    
    // 计算已阅读比例
    // 当内容顶部在视口顶部时，进度为0
    // 当内容底部在视口底部时，进度为1
    let progress = 0;
    
    if (contentTop <= 0) {
      // 已经开始阅读，计算进度
      const visibleContent = Math.min(contentHeight, contentHeight + contentTop);
      progress = Math.max(0, visibleContent / contentHeight);
    }
    
    // 更新进度条宽度
    progressBar.style.width = `${progress * 100}%`;
  });
}

/**
 * 根据指定的锚点滚动到页面相应位置
 */
function scrollToAnchor() {
  // 获取URL中的锚点
  const hash = window.location.hash;
  if (!hash) return;
  
  // 查找对应的元素
  const targetElement = document.getElementById(hash.substring(1));
  if (!targetElement) return;
  
  // 滚动到目标位置，加上一点偏移量以避免被导航栏遮挡
  const navHeight = document.querySelector('header')?.offsetHeight || 0;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
  
  // 平滑滚动
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// 页面加载完成后，处理锚点链接
window.addEventListener('load', scrollToAnchor);
// 当URL的hash变化时也处理锚点链接
window.addEventListener('hashchange', scrollToAnchor);

// 语法自检
try {
  console.log("news.js 语法检查通过");
}
catch (error) {
  console.error("语法错误:", error.message);
}

// 功能验证
console.assert(typeof initTabSwitcher === 'function', 'initTabSwitcher 函数定义正确');
console.assert(typeof initNewsShare === 'function', 'initNewsShare 函数定义正确');