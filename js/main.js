// 重庆冠齐峰广告中心物流运输行业新闻网站
// 主要功能JS文件

document.addEventListener('DOMContentLoaded', function() {
  // 轮播图功能
  initCarousel();
  
  // 广告图片定期切换
  initAdRotation();
});

/**
 * 初始化轮播图功能
 */
function initCarousel() {
  const carousel = document.getElementById('home-carousel');
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  const prevButton = carousel.querySelector('.prev-button');
  const nextButton = carousel.querySelector('.next-button');
  
  let currentIndex = 0;
  let intervalId = null;
  
  // 显示指定索引的幻灯片
  function showSlide(index) {
    // 处理索引越界
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    
    // 更新当前索引
    currentIndex = index;
    
    // 更新幻灯片状态
    items.forEach((item, i) => {
      if (i === currentIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // 更新指示器状态
    indicators.forEach((indicator, i) => {
      if (i === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  // 显示下一张幻灯片
  function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
  // 显示上一张幻灯片
  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  
  // 自动轮播
  function startAutoSlide() {
    stopAutoSlide();
    intervalId = setInterval(nextSlide, 5000); // 5秒切换一次
  }
  
  // 停止自动轮播
  function stopAutoSlide() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  
  // 绑定事件处理器
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      prevSlide();
      startAutoSlide(); // 点击后重新开始计时
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      nextSlide();
      startAutoSlide(); // 点击后重新开始计时
    });
  }
  
  // 为指示器添加点击事件
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      showSlide(index);
      startAutoSlide(); // 点击后重新开始计时
    });
  });
  
  // 鼠标悬停在轮播图上时暂停自动轮播
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
  
  // 开始自动轮播
  startAutoSlide();
}

/**
 * 初始化广告图片定期切换
 */
function initAdRotation() {
  // 广告图片数组
  const adImages = [
    'images/banner1.jpg',
    'images/banner3.jpg',
    'images/banner4.jpg'
  ];
  
  const leftAdImage = document.getElementById('left-ad-image');
  const rightAdImage = document.getElementById('right-ad-image');
  
  if (!leftAdImage || !rightAdImage) return;
  
  let currentLeftIndex = 0;
  let currentRightIndex = 1; // 从不同的图片开始
  
  // 每隔一定时间切换左侧广告图片
  setInterval(() => {
    currentLeftIndex = (currentLeftIndex + 1) % adImages.length;
    leftAdImage.style.opacity = '0';
    setTimeout(() => {
      leftAdImage.src = adImages[currentLeftIndex];
      leftAdImage.style.opacity = '1';
    }, 500);
  }, 7000); // 7秒切换一次
  
  // 每隔一定时间切换右侧广告图片
  setInterval(() => {
    currentRightIndex = (currentRightIndex + 1) % adImages.length;
    rightAdImage.style.opacity = '0';
    setTimeout(() => {
      rightAdImage.src = adImages[currentRightIndex];
      rightAdImage.style.opacity = '1';
    }, 500);
  }, 9000); // 9秒切换一次，与左侧错开
}

// 语法自检
try {
  console.log("main.js 语法检查通过");
}
catch (error) {
  console.error("语法错误:", error.message);
}

// 功能验证
console.assert(typeof initCarousel === 'function', 'initCarousel 函数定义正确');
console.assert(typeof initAdRotation === 'function', 'initAdRotation 函数定义正确');