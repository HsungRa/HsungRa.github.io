import {reactive, watch} from "vue";



const globalConfig = reactive({
    color: "#f7f8fa", // 默认背景色

});

// 同步到 CSS 变量
watch(() => globalConfig.color,(newColor) => {
        document.documentElement.style.setProperty("--global-bg-color", newColor);
    },
    {immediate: true}
);

export default globalConfig;

