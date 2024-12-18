import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import prismjs from 'vite-plugin-prismjs';
import Markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/], // 支持 .md 文件作为 Vue 组件
        }),
        Markdown(),
        nodePolyfills(),
        prismjs({
            // languages: ['json'],
            languages: 'all',
        }),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
        },
    },
    server:{
        port: '3000',
        proxy: {
            '/api': {
                target: 'http://localhost:8000/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis'
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true
                })
            ]
        }
    },
    build: {
        outDir: 'dist',
        // esbuild 打包更快，但是不能去除 console.log
        minify: 'esbuild',
        rollupOptions: {
            output: {
                // Static resource classification and packaging
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
            }
        }
    },
    assetsInclude: ['**/*.md'],
})
