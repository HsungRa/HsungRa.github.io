import {createApp} from 'vue'
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
// ===========================Markdown end ===========================
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


VMdPreview.use(vuepressTheme, {
    Prism,
}).use(createEmojiPlugin()).use(createMermaidPlugin()).use(createLineNumbertPlugin()).use(createCopyCodePlugin());


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
)).use(VMdPreview).use(Antd).mount('#app')
