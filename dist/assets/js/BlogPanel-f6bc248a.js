import{c as n,w as t,u as m,r as l,o as s,a as h,b as g,e as a,t as _,g as f,F as B}from"./index-40db60fe.js";import{C}from"./CategoryUtil-0100eb1c.js";const k={class:"card-header"},v=["onClick"],x={class:"text item"},E={__name:"BlogPanel",setup(y){const o=m(),r=o.currentRoute.value.params.category,p=C[r].blogs,i=c=>{o.push({path:`/blog/${r}/${c}`})};return(c,w)=>{const d=l("el-card"),u=l("el-space");return s(),n(u,{wrap:""},{default:t(()=>[(s(!0),h(B,null,g(f(p),e=>(s(),n(d,{key:e,class:"box-card",style:{width:"250px"},shadow:"hover"},{header:t(()=>[a("div",k,[a("span",{onClick:F=>i(e.title)},_(e.title),9,v)])]),default:t(()=>[a("div",x,_(e.description),1)]),_:2},1024))),128))]),_:1})}}};export{E as default};