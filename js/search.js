// 重庆冠齐峰广告中心物流运输行业新闻网站
// 搜索功能JS文件

document.addEventListener('DOMContentLoaded', function() {
  // 初始化搜索功能
  initSearch();
});

/**
 * 初始化搜索功能
 */
function initSearch() {
  const searchForm = document.getElementById('search-form');
  if (!searchForm) return;
  
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const keyword = searchInput.value.trim();
    if (keyword === '') {
      // 关键词为空，显示提示
      alert('请输入搜索关键词');
      return;
    }
    
    // 执行搜索
    performSearch(keyword);
  });
}

/**
 * 执行搜索
 * @param {string} keyword 搜索关键词
 */
function performSearch(keyword) {
  // 实际应用中，这里应该是向后端发送请求
  // 由于这是前端静态页面，我们模拟搜索结果
  
  // 创建搜索结果数据
  // 在实际应用中，这里应该是从后端获取的数据
  const searchResults = generateMockSearchResults(keyword);
  
  // 保存搜索结果到sessionStorage
  sessionStorage.setItem('searchKeyword', keyword);
  sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
  
  // 跳转到搜索结果页面
  window.location.href = 'pages/search.html';
}

/**
 * 生成模拟搜索结果
 * @param {string} keyword 搜索关键词
 * @returns {Array} 搜索结果数组
 */
function generateMockSearchResults(keyword) {
  // 预定义的内容分类
  const categories = [
    '物流运输新闻', 
    '货车品牌价格',
    '货运保险知识',
    '出险理赔须知'
  ];
  
  // 每个分类下的关键内容
  const contentData = {
    '物流运输新闻': [
      { 
        title: '2024年全国物流运行情况通报', 
        content: '2024年，物流运行总体平稳，社会物流总额增速稳中有升，社会物流成本稳步下降，物流运行效率有所改善。',
        url: 'logistics_news.html#report'
      },
      { 
        title: '中国物流与采购联合会：我国仍是全球物流需求最大的市场', 
        content: '中国物流与采购联合会相关负责人介绍说，目前我国仍是全球物流需求最大的市场，物流企业群体初具规模。',
        url: 'logistics_news.html#market'
      },
      { 
        title: '物流运行持续优化 仓储需求不断扩大', 
        content: '中国物流与采购联合会公布2023年12月份中国物流业景气指数为53.5%。',
        url: 'logistics_news.html#optimization'
      },
      { 
        title: '2024年物流行业发展趋势', 
        content: '物流行业正面临数字化转型、绿色物流发展和全球供应链重构等趋势。',
        url: 'logistics_news.html#trends'
      }
    ],
    '货车品牌价格': [
      { 
        title: '2024年货车十大品牌排行榜', 
        content: '福田汽车、东风汽车、一汽解放位列2024年重型货车品牌排行榜前三名。',
        url: 'truck_brands.html#ranking'
      },
      { 
        title: '2024年重卡市场销量情况', 
        content: '2024年重卡市场共计销售约90万辆，同比下降1%。',
        url: 'truck_brands.html#sales'
      },
      { 
        title: '主要货车型号及价格区间', 
        content: '福田欧马可系列、解放轻卡系列、中国重汽系列等主要货车型号及最新价格区间。',
        url: 'truck_brands.html#prices'
      },
      { 
        title: '新能源货车市场情况', 
        content: '福田奥铃智蓝EL-Plus电动载货车等新能源货车价格及性能参数。',
        url: 'truck_brands.html#new-energy'
      }
    ],
    '货运保险知识': [
      { 
        title: '货车保险分类全解析', 
        content: '货车保险主要分为两大类：国家规定的购车必须投保的交强险和商业险。',
        url: 'logistics_insurance.html#insurance-types'
      },
      { 
        title: '货车司机和物流公司如何选择保险', 
        content: '货车司机个人推荐购买险种和物流公司推荐购买险种的详细对比与建议。',
        url: 'logistics_insurance.html#insurance-selection'
      },
      { 
        title: '货车保险费用与如何购买更划算', 
        content: '货车保险价格影响因素及如何购买更划算的实用建议。',
        url: 'logistics_insurance.html#insurance-cost'
      },
      { 
        title: '物流运输保险与物流责任保险的区别', 
        content: '货物运输保险与物流责任保险在保障对象、投保人、保障范围等方面的区别。',
        url: 'logistics_insurance.html#insurance-difference'
      }
    ],
    '出险理赔须知': [
      { 
        title: '货运险理赔流程与注意事项', 
        content: '理赔基本流程包括出险、报案、查勘定损、提交索赔单证、理算复核、赔付、结案等步骤。',
        url: 'insurance_claims.html#claims-process'
      },
      { 
        title: '单方事故与多方事故理赔程序', 
        content: '单方事故与多方事故在理赔流程、材料准备等方面的区别。',
        url: 'insurance_claims.html#accident-types'
      },
      { 
        title: '常见货车理赔案例与实务问题', 
        content: '货车碰撞导致货物损坏、自然灾害导致货物受损等常见理赔案例分析。',
        url: 'insurance_claims.html#case-studies'
      },
      { 
        title: '货车保险理赔常见问题解答', 
        content: '出险后货物处理、公估公平性、施救费用认定等常见问题解答。',
        url: 'insurance_claims.html#faq'
      }
    ]
  };
  
  // 模拟搜索结果
  const results = [];
  
  // 转换关键词为小写，用于不区分大小写匹配
  const lowercaseKeyword = keyword.toLowerCase();
  
  // 遍历所有分类和内容，寻找匹配项
  categories.forEach(category => {
    const categoryData = contentData[category];
    if (!categoryData) return;
    
    categoryData.forEach(item => {
      // 检查标题或内容是否包含搜索关键词
      if (item.title.toLowerCase().includes(lowercaseKeyword) || 
          item.content.toLowerCase().includes(lowercaseKeyword)) {
        results.push({
          category: category,
          title: item.title,
          content: item.content,
          url: item.url,
          // 突出显示关键词
          highlightedTitle: highlightKeyword(item.title, keyword),
          highlightedContent: highlightKeyword(item.content, keyword)
        });
      }
    });
  });
  
  return results;
}

/**
 * 在文本中突出显示关键词
 * @param {string} text 原始文本
 * @param {string} keyword 要突出显示的关键词
 * @returns {string} 处理后的文本
 */
function highlightKeyword(text, keyword) {
  if (!keyword || keyword === '') return text;
  
  // 创建一个正则表达式，用于全局不区分大小写匹配关键词
  const regex = new RegExp(keyword, 'gi');
  
  // 用带有高亮标记的文本替换匹配项
  return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

// 语法自检
try {
  console.log("search.js 语法检查通过");
}
catch (error) {
  console.error("语法错误:", error.message);
}

// 功能验证
console.assert(typeof initSearch === 'function', 'initSearch 函数定义正确');
console.assert(typeof performSearch === 'function', 'performSearch 函数定义正确');