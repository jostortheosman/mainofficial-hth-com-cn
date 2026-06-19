// public/site-helper.js

(function() {
  'use strict';

  const siteConfig = {
    officialUrl: "https://mainofficial-hth.com.cn",
    coreKeyword: "华体会",
    helpCardTitle: "平台使用引导",
    helpCardContent: [
      "本页面提供基础导航与关键词提示。",
      "核心关键词：华体会 — 代表平台识别标识。",
      "官方入口：https://mainofficial-hth.com.cn",
      "如遇到问题，请刷新页面或检查网络连接。"
    ]
  };

  // 关键词徽章数据
  const badgeList = [
    { label: "华体会", color: "#e67e22", bg: "#fff3e0" },
    { label: "官方", color: "#2c3e50", bg: "#ecf0f1" },
    { label: "引导", color: "#2980b9", bg: "#d6eaf8" },
    { label: "安全", color: "#27ae60", bg: "#d5f5e3" }
  ];

  // 创建页面提示卡片
  function createHelpCard() {
    const card = document.createElement('div');
    card.id = 'site-helper-card';
    card.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
      padding: 18px 16px;
      z-index: 9999;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
      transition: opacity 0.3s ease;
    `;

    const header = document.createElement('div');
    header.style.cssText = `
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
      color: #2c3e50;
      border-bottom: 1px solid #eee;
      padding-bottom: 6px;
    `;
    header.textContent = siteConfig.helpCardTitle;
    card.appendChild(header);

    const content = document.createElement('div');
    siteConfig.helpCardContent.forEach(text => {
      const p = document.createElement('p');
      p.style.margin = '4px 0';
      p.textContent = text;
      content.appendChild(p);
    });
    card.appendChild(content);

    // 关闭按钮
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 12px;
      cursor: pointer;
      font-size: 18px;
      color: #aaa;
      user-select: none;
    `;
    closeBtn.addEventListener('click', () => {
      card.style.opacity = '0';
      setTimeout(() => card.remove(), 300);
    });
    card.appendChild(closeBtn);

    document.body.appendChild(card);
  }

  // 创建关键词徽章
  function createBadges() {
    const container = document.createElement('div');
    container.id = 'site-helper-badges';
    container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin: 20px auto;
      max-width: 600px;
    `;

    badgeList.forEach(item => {
      const badge = document.createElement('span');
      badge.textContent = item.label;
      badge.style.cssText = `
        display: inline-block;
        padding: 4px 14px;
        border-radius: 20px;
        background: ${item.bg};
        color: ${item.color};
        font-size: 13px;
        font-weight: 500;
        border: 1px solid ${item.color}22;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      `;
      container.appendChild(badge);
    });

    // 插入到页面主体
    const target = document.querySelector('main') || document.querySelector('body');
    if (target) {
      target.insertBefore(container, target.firstChild);
    }
  }

  // 访问说明提示（轻提示条）
  function createAccessNotice() {
    const notice = document.createElement('div');
    notice.id = 'site-helper-notice';
    notice.style.cssText = `
      background: #fef9e7;
      border-left: 4px solid #f1c40f;
      padding: 10px 18px;
      margin: 12px auto;
      max-width: 700px;
      border-radius: 6px;
      font-size: 13px;
      color: #7d6608;
      font-family: system-ui, sans-serif;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    `;
    notice.innerHTML = `
      <strong>访问说明：</strong> 本页辅助功能已加载。
      官方地址：${siteConfig.officialUrl} ｜ 核心标识：${siteConfig.coreKeyword}
    `;
    const target = document.querySelector('header') || document.querySelector('body');
    if (target) {
      target.insertBefore(notice, target.firstChild);
    }
  }

  // 初始化
  function init() {
    // 防止重复执行
    if (document.getElementById('site-helper-card')) return;

    createHelpCard();
    createBadges();
    createAccessNotice();
  }

  // 等待 DOM 加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();