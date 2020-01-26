import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import singlefile from "vite-plugin-singlefile";
// import htmlInline from "rollup-plugin-html-inline";
// import inline from 'vite-plugin-inline';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 40960000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // 内联动态导入
        entryFileNames: 'assets/[name].js', // 指定 JS 文件名
        chunkFileNames: 'assets/[name].js', // 指定代码分割后的 chunk 文件名
        assetFileNames: 'assets/[name].[ext]', // 指定其他资源（如 CSS、图片等）的文件名
      },
    },
  },
  plugins: [
    react(),
    //
    // singlefile(),
    // htmlInline({
    //   // 你可以在这里设置选项
    // }),
    // inline({
    //   // 插件选项配置
    //   // 例如，你可以指定要内联的资源类型
    //   // css: true, // 内联所有 CSS
    //   // js: true,  // 内联所有 JavaScript
    //   // images: true, // 内联所有图片
    //   // 或者更具体的配置
    // }),
  ],
});
