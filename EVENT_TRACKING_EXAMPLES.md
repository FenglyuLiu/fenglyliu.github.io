# Google Analytics 4 事件追踪使用指南

## 🎯 可用的追踪函数

您的网站现在已经集成了以下事件追踪功能：

### 1. **自定义事件追踪**
```javascript
// 追踪任何自定义事件
trackCustomEvent('event_name', {
  category: 'engagement',  // 事件类别
  label: 'button_text',    // 事件标签
  value: 1,               // 事件值
  custom_param: 'value'   // 自定义参数
});
```

### 2. **按钮点击追踪**
```javascript
// 追踪按钮点击
trackButtonClick('Download Resume', 'header');
trackButtonClick('Contact Me', 'footer');
```

### 3. **链接点击追踪**
```javascript
// 追踪链接点击
trackLinkClick('GitHub Profile', 'https://github.com/username', 'sidebar');
trackLinkClick('Project Link', '/projects/project-name', 'project-card');
```

### 4. **表单提交追踪**
```javascript
// 追踪表单提交
trackFormSubmit('Contact Form', 'contact-page');
trackFormSubmit('Newsletter Signup', 'footer');
```

### 5. **文件下载追踪**
```javascript
// 追踪文件下载
trackFileDownload('Resume.pdf', 'pdf', 'header');
trackFileDownload('Project-Presentation.pptx', 'pptx', 'project-page');
```

### 6. **视频播放追踪**
```javascript
// 追踪视频播放
trackVideoPlay('Project Demo Video', 'project-page');
trackVideoPlay('About Me Video', 'about-page');
```

## 🔧 如何在您的网站中使用

### 方法 1：直接在 HTML 中添加事件监听器

```html
<!-- 按钮点击追踪 -->
<button onclick="trackButtonClick('Download Resume', 'header')">
  Download Resume
</button>

<!-- 链接点击追踪 -->
<a href="/projects" onclick="trackLinkClick('View Projects', '/projects', 'navigation')">
  Projects
</a>

<!-- 文件下载追踪 -->
<a href="/resume.pdf" onclick="trackFileDownload('Resume.pdf', 'pdf', 'header')">
  Download Resume
</a>
```

### 方法 2：使用 JavaScript 事件监听器

```javascript
// 页面加载完成后添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
  // 追踪所有外部链接点击
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
      trackLinkClick(this.textContent, this.href, 'external-link');
    });
  });

  // 追踪所有按钮点击
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      trackButtonClick(this.textContent, this.closest('section')?.className || 'unknown');
    });
  });

  // 追踪 PDF 下载
  document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
    link.addEventListener('click', function() {
      const fileName = this.href.split('/').pop();
      trackFileDownload(fileName, 'pdf', 'download-link');
    });
  });
});
```

### 方法 3：在 Astro 组件中使用

```astro
---
// 在 .astro 文件的 <script> 部分
---

<script>
  // 追踪特定页面的交互
  document.addEventListener('DOMContentLoaded', function() {
    // 追踪项目卡片点击
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function() {
        const projectName = this.querySelector('h3').textContent;
        trackCustomEvent('project_view', {
          category: 'engagement',
          label: projectName,
          project_location: 'projects-page'
        });
      });
    });

    // 追踪图片点击
    document.querySelectorAll('.gallery-image').forEach(img => {
      img.addEventListener('click', function() {
        trackCustomEvent('image_view', {
          category: 'engagement',
          label: this.alt || 'gallery-image',
          image_location: 'photography-page'
        });
      });
    });
  });
</script>
```

## 📊 在 Google Analytics 中查看事件

1. **实时事件**：
   - 访问 Google Analytics
   - 进入 "实时" → "事件"
   - 查看实时事件数据

2. **历史事件**：
   - 进入 "报告" → "参与度" → "事件"
   - 查看所有追踪的事件

3. **自定义报告**：
   - 进入 "探索" → "自由格式"
   - 创建自定义事件分析报告

## 🎨 实际应用示例

### 在您的作品集网站中：

```javascript
// 追踪项目查看
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
    const projectName = this.querySelector('h2').textContent;
    trackCustomEvent('project_view', {
      category: 'engagement',
      label: projectName,
      project_type: this.dataset.type || 'unknown'
    });
  });
});

// 追踪简历下载
document.getElementById('download-resume').addEventListener('click', function() {
  trackFileDownload('Felicity-Liu-Resume.pdf', 'pdf', 'header');
});

// 追踪联系表单提交
document.getElementById('contact-form').addEventListener('submit', function() {
  trackFormSubmit('Contact Form', 'contact-page');
});

// 追踪社交媒体链接点击
document.querySelectorAll('a[href*="linkedin"], a[href*="github"]').forEach(link => {
  link.addEventListener('click', function() {
    const platform = this.href.includes('linkedin') ? 'LinkedIn' : 'GitHub';
    trackLinkClick(platform, this.href, 'social-links');
  });
});
```

## 🚀 下一步

1. **选择要追踪的事件**：决定您想追踪哪些用户交互
2. **添加追踪代码**：在相应的 HTML 元素上添加事件监听器
3. **测试追踪**：访问您的网站并测试事件是否被正确追踪
4. **查看数据**：在 Google Analytics 中查看事件数据

现在您可以开始追踪用户与您网站的交互了！🎯
