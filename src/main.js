import {createApp, toRaw} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createVuestic, createIconsConfig} from "vuestic-ui";
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";
// ===========================Markdown start===========================
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
// mermaid
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
// 显示代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// 数学公式
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
// todo-list
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
// 内容定位
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';
// ===========================Markdown end ===========================
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// ===========================pinia ===========================
import { createPinia, } from 'pinia'
// =========================Google Analytics============================================
import VueGtag from 'vue-gtag-next'


const pinia = createPinia()
// 数据存储本地
const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
// 获取本地数据
const getStorage = (key) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : {};
}

const piniaPlugin = (context) => {
    const { store } = context;
    // $subscribe state值发生变化时会执行传入的回调
    store.$subscribe(() => {
        // 每次修改值的时候更新localStorage数据
        setStorage(`pinia-${store.$id}`, toRaw(store.$state))
    })
    // 每次构建项目的时候从本地存储取值 并将取的值赋给state
    const data = getStorage(`pinia-${store.$id}`)
    return {
        ...data
    }
}

pinia.use(piniaPlugin)

VMdPreview
    .use(vuepressTheme, {Prism,})
    .use(createEmojiPlugin())
    .use(createMermaidPlugin())
    .use(createLineNumbertPlugin())
    .use(createCopyCodePlugin())
    .use(createKatexPlugin())
    .use(createTodoListPlugin())
    .use(createAlignPlugin());

const fonts = [
    {
        name: 'fa-{code}',
        resolve: ({code}) => ({class: `fas fa-${code}`,}),
    }
]

const app = createApp(App)
app.use(router).use(ElementPlus).use(createVuestic(
    {
        config: {
            colors: {
                variables: {
                    // Default colors
                    primary: "#23e066",
                    secondary: "#002c85",
                    success: "#40e583",
                    info: "#2c82e0",
                    danger: "#e34b4a",
                    warning: "#ffc200",
                    gray: "#babfc2",
                    dark: "#34495e",
                    // Custom colors
                    yourCustomColor: "#d0f55d",
                },
            },
            icons: createIconsConfig({fonts}),

        },
    }
)).use(VMdPreview).use(Antd).use(pinia).use(VueGtag, {
    property: {
        id: 'G-PQ4ZMJM56D' // 替换成你的 GA4 测量 ID
    },
    enabled: true, // 是否启用
    router // 自动跟踪路由变化
}).mount('#app')
