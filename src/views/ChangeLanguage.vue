<!-- https://github.com/wangeditor-team/wangEditor-v5/issues/247 -->
<!-- 使用React组件时如何切换语言 -->
<template>
  <div class="home">
    <h1>i18n</h1>
    <div>
      <!-- 工具栏 -->
      <div id="toolbar-container"  style="border-bottom: 1px solid #ccc"></div>
      <!-- 编辑器 -->
      <div id="editor-container" style="height: 500px;border-bottom: 1px solid #ccc "></div>
    </div>
  </div>
</template>

<script>

import {
  createEditor,
  createToolbar,
  i18nChangeLanguage,
} from "@wangeditor/editor";
export default {
  name: 'ChangeLanguage',
  mounted() {
    const editorConfig = {};
    editorConfig.placeholder = "请输入内容";
    editorConfig.onChange = (editor) => {
      // 当编辑器选区、内容变化时，即触发
      console.log("content", editor.children);
      console.log("html", editor.getHtml());
    };

    // 切换语言 - 'en' 或者 'zh-CN'
    i18nChangeLanguage("en");

    // 创建编辑器
    const editor = createEditor({
      selector: "#editor-container",
      config: editorConfig,
      content: [], // 默认内容，下文有解释
      mode: "default", // 或者 'simple' ，下文有解释
    });

    // 创建工具栏
    createToolbar({
      editor,
      selector: "#toolbar-container",
      mode: "default", // 或者 'simple' ，下文有解释
    });
  },
}
</script>
