import{x as T,y as v,r as P,b as y,o as $,a as D,w as d,c as h,h as m}from"./index-9a18eddf.js";import{a as b,_ as C,b as L,c as F,d as M,e as R,f as j}from"./callBound-44245335.js";import{h as k}from"./HttpUtil-71fa38d1.js";const w=g=>({Authorization:`Bearer ${g}`});class f{static readMarkdownFile(s,a,n,t="main"){const l=`https://api.github.com/repos/${s}/${a}/contents/${n}?ref=${t}`;return new Promise((c,o)=>{k(l,null,w(b.user.accessToken),"").then(e=>{const r=T.Buffer.from(e.content,"base64").toString("utf-8");c(r)})})}static readLocalMarkdownFile(s){return new Promise((a,n)=>{fetch(`/${s}`).then(t=>{t.ok?a(t.text()):n(`fetch error! status: ${t.status}`)})})}static getDirectoryTree(s,a,n="",t="main"){const l=`https://api.github.com/repos/${s}/${a}/contents/${n}?ref=${t}`;return new Promise((c,o)=>{k(l,null,w(b.user.accessToken),"").then(e=>{const r={name:n||"root",posts:[],children:[]};for(const i of e)if(i.type==="file")r.posts.push(i.name);else if(i.type==="dir"){const u=n?`${n}/${i.name}`:i.name;this.getDirectoryTree(s,a,u,t).then(p=>{r.children.push(p)})}c(r)}).catch(e=>{o(new Error(e||"Unknown error occurred."))})})}static getLocalDirectoryTree1(s){return new Promise((a,n)=>{fetch(`/api/directory-tree?path=${encodeURIComponent(s)}`).then(t=>{t.ok?a(t.json()):n(`fetch error! status: ${t.status}`)})})}static getLocalDirectoryTree(){return new Promise((s,a)=>{const n=Object.assign({"/public/posts/demo.md":C,"/public/posts/machine learning/about training.md":L,"/public/posts/machine learning/key_worlds.md":F,"/public/posts/machine learning/learning_resource_link.md":M,"/public/posts/machine learning/popularity_libraries.md":R,"/public/posts/machine learning/todo.md":j}),t={name:"posts",filePath:"posts",posts:[],children:{}};for(const c in n){const e=c.replace("/public/posts/","").split("/");if(e.length===1)t.posts.push(e[0]);else{let r=t.children,i="posts";for(let u=0;u<e.length-1;u++){const p=e[u];i=`${i}/${p}`,r[p]||(r[p]={name:p,filePath:i,posts:[],children:{}}),u===e.length-2?r[p].posts.push(e[e.length-1]):r=r[p].children}}}const l=c=>Object.values(c.children).map(o=>({...o,children:l(o)}));s({...t,children:l(t)})})}static filterTree(s,a){const n={name:s.name,posts:s.posts.filter(t=>a.some(l=>t.toLowerCase().endsWith(l.toLowerCase()))),children:s.children.map(t=>this.filterTree(t,a))};return n.children=n.children.filter(t=>t.posts.length>0||t.children.length>0),n}}const H=v({__name:"DemoPage",setup(g){const s=P(null),a=()=>{f.readMarkdownFile("HsungRa","HsungRa.github.io","public/posts/demo.md","gh-pages").then(o=>{console.log(">>>>>>>>>>>>>>>>>>>>>readMarkdownFile",o)})},n=()=>{f.readLocalMarkdownFile("posts/demo.md").then(o=>{console.log(">>>>>>>>>>>>>>>>>>>>>readMarkdownFile",o)})},t=()=>{f.getDirectoryTree("HsungRa","HsungRa.github.io","public/posts","gh-pages").then(o=>{console.log(">>>>>>>>>>>>>>>>>>>>>getDirectoryTree",o)})},l=()=>{f.getLocalDirectoryTree("posts").then(o=>{console.log(">>>>>>>>>>>>>>>>>>>>>getDirectoryTree",o),s.value=o;const e=c("posts/java/spring");console.log(">>>>>>>>>>>>>>>>>>>>>getPosts posts/java/spring",e);const r=c("posts/machine learning");console.log(">>>>>>>>>>>>>>>>>>>>>getPosts posts/machine learning",r)})},c=o=>{try{if(!s.value)return;const e=(i,u)=>{if(i.filePath===u)return i;for(const p of i.children){const _=e(p,u);if(_)return _}return null},r=e(s.value,o);return r?r.posts:[]}catch(e){throw console.error("获取文件列表失败:",e),new Error(`无法获取目录 ${o} 下的文件`)}};return(o,e)=>{const r=y("a-button"),i=y("a-space");return $(),D(i,null,{default:d(()=>[h(r,{type:"primary",onClick:a},{default:d(()=>e[0]||(e[0]=[m("testReadMarkdownFile")])),_:1}),h(r,{type:"primary",onClick:n},{default:d(()=>e[1]||(e[1]=[m("testReadLocalMarkdownFile")])),_:1}),h(r,{type:"primary",onClick:t},{default:d(()=>e[2]||(e[2]=[m("testGetDirectoryTree")])),_:1}),h(r,{type:"primary",onClick:l},{default:d(()=>e[3]||(e[3]=[m("testGetLocalDirectoryTree")])),_:1})]),_:1})}}});export{H as default};