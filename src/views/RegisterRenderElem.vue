<!-- https://github.com/wangeditor-team/wangEditor-v5/issues/227 -->
<!-- registerRenderElem报错：TypeError: Cannot add property data, object is not extensible #227 -->
<template>
  <div class="home">
    <h1>registerRenderElem</h1>
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
  Boot,
  createEditor,
  createToolbar,
} from "@wangeditor/editor";
import { h } from 'snabbdom'
export default {
  name: 'RegisterRenderElem',
  mounted() {
    const editorConfig = {};
    editorConfig.placeholder = "请输入内容";
    editorConfig.onChange = (editor) => {
      // 当编辑器选区、内容变化时，即触发
      console.log("content", editor.children);
      console.log("html", editor.getHtml());
    };

    Boot.registerRenderElem({
      type: "paragraph",
      renderElem: function (elem, children) {
        // return h('a', {props: { href: 'http://www.baidu.com'}}, 'baidu');
        const vnode = h('div', {}, children)
        return vnode
      },
    })

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
