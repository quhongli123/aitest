import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    // 打包分析
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@context': resolve(__dirname, 'src/context'),
      '@routes': resolve(__dirname, 'src/routes'),
    },
  },
  // 构建配置
  build: {
    // 指定输出路径
    outDir: 'dist',
    // 静态资源分类打包
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        // 静态资源分类打包
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // 手动拆包
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
    // chunk 大小警告的限制
    chunkSizeWarningLimit: 1000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },
  // 开发服务器配置
  server: {
    // 指定服务器主机名
    host: '0.0.0.0',
    // 指定服务器端口
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 启用热更新
    hmr: true,
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 环境变量配置
  envPrefix: 'VITE_',
  // CSS 配置
  css: {
    // 配置 CSS 预处理器
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
    // 启用 CSS modules
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // 优化配置
  optimizeDeps: {
    // 预构建的依赖项
    include: ['react', 'react-dom', 'react-router-dom'],
    // 强制预构建
    force: true,
  },
});