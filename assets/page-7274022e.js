import{d as V,u as A,a as L,g as O,h as x,i as B,c,w as E,T as N,o as l,j as p,r as b,k as f,v as d,l as u,b as m,t as S,F as P,m as $,e as k,n as M,p as i}from"./index-c9624ec1.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-a478b8c2.js";import{_ as j}from"./Card.vue_vue_type_script_setup_true_lang-f6825635.js";const q=(v,e)=>{const n=v[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((g,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+e)))})},G={class:"mb-5"},H={class:"text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"},U={class:"w-full flex justify-center"},Q=V({__name:"page",setup(v){const e=A(),n=L(),g=O(),_=e.state.pages,R=s=>M(()=>q(Object.assign({"../components/Button.vue":()=>i(()=>import("./Button-65dff421.js"),["assets/Button-65dff421.js","assets/Button.vue_vue_type_script_setup_true_lang-a478b8c2.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/Card.vue":()=>i(()=>import("./Card-a4665c79.js"),["assets/Card-a4665c79.js","assets/Card.vue_vue_type_script_setup_true_lang-f6825635.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/Footer.vue":()=>i(()=>import("./Footer-cd236f1f.js"),["assets/Footer-cd236f1f.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/FormCheck.vue":()=>i(()=>import("./FormCheck-5fa09983.js"),["assets/FormCheck-5fa09983.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/FormControl.vue":()=>i(()=>import("./FormControl-44d77941.js"),["assets/FormControl-44d77941.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/FormFivestar.vue":()=>i(()=>import("./FormFivestar-5cf5dd53.js"),["assets/FormFivestar-5cf5dd53.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/FormInfo.vue":()=>i(()=>import("./FormInfo-f931ed28.js"),["assets/FormInfo-f931ed28.js","assets/index-c9624ec1.js","assets/index-b15469ea.css"]),"../components/FormSelect.vue":()=>i(()=>import("./FormSelect-8b256320.js"),["assets/FormSelect-8b256320.js","assets/index-c9624ec1.js","assets/index-b15469ea.css","assets/FormSelect-8f89c724.css"])}),`../components/${s}.vue`));let h=!1;const C=(s,t,a,r)=>{},w=(s,t)=>{s.length<=0||_[t].blocks.forEach(a=>{s.forEach(r=>{a.id===r.id&&a.hide!=r.hide&&(a.hide=r.hide)})})};x(()=>{h=!0;let s=n.currentRoute.value.params.id;e.state.pageNum=parseInt(s.toString())}),B(()=>g.path,s=>{if(!n.currentRoute.value.params.id)return;let t=n.currentRoute.value.params.id;e.state.pageNum=parseInt(t.toString())});function I(){e.commit("pushPage",{router:n,num:1,force:!0})}const D=()=>{let s=e.state.pages.map(o=>o.blocks),t=[].concat.apply([],s),a=t.filter(o=>o.hide===!1).length,r=t.filter(o=>o.hide===!1&&o.completed===!0).length;e.state.progress=(r/a*100).toFixed(1)};return(s,t)=>(l(),c(N,{tag:"Card"},{default:E(()=>[(l(!0),p(P,null,b(u(_),(a,r)=>f((l(),c(j,{key:r},{default:E(()=>[m("form",null,[m("div",G,[m("h2",H,S(a.title),1),(l(!0),p(P,null,b(a.blocks,(o,T)=>(l(),p("div",{class:"my-4 question",ref_for:!0,ref:F=>C(F,r,o.id,""),key:T},[(l(),c($(R(o.component)),{block:o,index:r,onToggleChildren:w,onCountProgress:D},null,40,["block","index"]))]))),128))]),m("div",U,[f(k(y,{msg:"下一頁",class:"",onClick:t[0]||(t[0]=o=>u(e).commit("pushPage",{router:u(n),num:1}))},null,512),[[d,u(e).state.pageNum<u(e).state.pages.length]]),f(k(y,{msg:"送出",class:"w-60",onClick:t[1]||(t[1]=o=>I())},null,512),[[d,u(e).state.pageNum>=u(e).state.pages.length]])])])]),_:2},1024)),[[d,u(e).state.pageNum==r+1]])),128))]),_:1}))}});export{Q as default};