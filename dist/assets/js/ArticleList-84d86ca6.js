import{l as u,A as p,m,c as r,a,F as v,r as h,x as g,u as b,o as l,t as n}from"./index-1a73ca63.js";import{a as d}from"./ArticleService-733927ff.js";const y={class:"va-table-responsive"},f={class:"va-table va-table--clickable",style:{width:"100%"}},k=["onClick"],L={__name:"ArticleList",setup(C){const s=b(),i=u(s.currentRoute.value.params.categoryCode);let o=u([]);p(()=>s.currentRoute.value.params,t=>{d(t.categoryCode).then(c=>{o.value=c.data})}),m(()=>{d(i.value).then(t=>{o.value=t.data})});const _=t=>{s.push({path:`/blog/${t}`})};return(t,c)=>(l(),r("div",y,[a("table",f,[a("tbody",null,[(l(!0),r(v,null,h(g(o),e=>(l(),r("tr",{key:e.code,onClick:A=>_(e.code)},[a("td",null,n(e.title),1),a("td",null,n(e.tags),1),a("td",null,n(e.time),1)],8,k))),128))])])]))}};export{L as default};