# 网站访问者追踪设置指南

## 概述

您的网站现在已经集成了完整的访问者追踪系统，包括：

- ✅ Google Analytics 4 集成
- ✅ 多级别隐私追踪系统
- ✅ 页面停留时间分析
- ✅ 访问者行为分析
- ✅ 隐私合规功能
- ✅ 实时数据仪表板
- ✅ 隐私设置管理页面

## 隐私级别说明

系统提供四种隐私级别，您可以根据需要选择：

### 1. 🟢 最小化追踪（默认，无需同意）
- 只收集基本页面访问数据
- 不收集个人行为信息
- 数据自动过期（7天）
- **符合大多数隐私法规要求**

### 2. 🟡 匿名追踪（无需同意）
- 收集匿名使用数据
- 不收集用户身份信息
- 包含页面停留时间、滚动深度
- **符合隐私法规要求**

### 3. 🔴 完整追踪（需要用户同意）
- 收集详细使用数据
- 包含点击事件、导航路径
- 需要用户明确同意
- **符合 GDPR、CCPA 等法规**

### 4. ⚫ 无追踪
- 完全不收集任何数据
- 完全隐私保护
- 无法分析网站使用情况

## 设置步骤

### 1. 配置 Google Analytics 4

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新的 GA4 属性
3. 获取您的测量 ID（格式：G-XXXXXXXXXX）
4. 在 `src/components/Analytics.astro` 文件中替换 `YOUR_GA4_MEASUREMENT_ID`：

```javascript
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // 替换为您的实际 GA4 ID
```

### 2. 数据存储

系统现在完全基于客户端存储：
- 所有追踪数据保存在用户的浏览器本地存储中
- 不需要后端服务器或 API 端点
- 数据在 `/analytics` 页面中实时显示
- 支持数据导出和清除功能

### 3. 配置隐私级别

访问 `/privacy-settings` 页面可以：
- 选择不同的隐私级别
- 查看当前设置状态
- 管理追踪数据
- 导出或清除数据

### 4. 测试追踪功能

1. 访问您的网站
2. 浏览几个页面
3. 访问 `/analytics` 页面查看数据
4. 访问 `/test-tracking` 页面测试功能
5. 检查 Google Analytics 实时报告

## 功能说明

### 追踪的数据类型

- **页面访问**：访问的页面、停留时间、滚动深度
- **用户行为**：点击事件、页面导航
- **技术信息**：浏览器、设备、屏幕分辨率
- **来源信息**：访问来源网站

### 隐私保护

- 所有数据都经过匿名化处理
- 用户可以选择拒绝追踪
- 符合 GDPR 和 CCPA 要求
- 数据主要存储在用户本地

### 访问分析页面

访问 `/analytics` 页面可以查看：
- 实时访问者统计
- 热门页面排行
- 访问来源分析
- 平均停留时间

## 自定义配置

### 修改追踪间隔

在 `Analytics.astro` 中修改：

```javascript
const TRACKING_CONFIG = {
  trackingInterval: 5, // 秒
  sessionTimeout: 30   // 分钟
};
```

### 添加自定义事件

```javascript
// 追踪自定义事件
sendTrackingData('custom_event', {
  eventName: 'button_click',
  elementId: 'special-button',
  timestamp: Date.now()
});
```

### 禁用追踪

设置环境变量或修改配置：

```javascript
const TRACKING_CONFIG = {
  enabled: false // 禁用追踪
};
```

## 数据导出

在分析页面可以：
- 导出 JSON 格式的数据
- 清除本地存储的数据
- 刷新实时数据

## 故障排除

### 常见问题

1. **Google Analytics 不显示数据**
   - 检查测量 ID 是否正确
   - 确认网站已部署
   - 等待 24-48 小时

2. **自定义追踪不工作**
   - 检查浏览器控制台错误
   - 确认 API 端点可访问
   - 检查网络连接

3. **隐私提示不显示**
   - 清除浏览器本地存储
   - 检查 JavaScript 是否启用

### 调试模式

在浏览器控制台运行：

```javascript
// 查看当前追踪状态
console.log(window.visitorAnalytics?.data);

// 手动发送测试事件
sendTrackingData('test_event', { test: true });
```

## 法律合规

### 隐私政策

- 已创建 `/privacy` 页面
- 包含完整的数据收集说明
- 提供用户权利说明

### Cookie 政策

- 使用必要的 cookie
- 提供用户选择权
- 符合国际法规要求

## 性能优化

追踪系统已优化：
- 异步加载，不影响页面性能
- 本地存储减少网络请求
- 批量发送数据
- 使用 sendBeacon 确保数据发送

## 下一步

1. 设置 Google Analytics 4
2. 测试所有功能
3. 自定义追踪配置
4. 监控数据质量
5. 定期查看分析报告

如有问题，请检查浏览器控制台或联系技术支持。
