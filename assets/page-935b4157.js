import{d as V,u as A,a as L,g as O,h as x,i as B,c as m,w as E,T as N,o as l,j as p,r as b,k as f,v as d,l as u,b as c,t as S,F as P,m as $,e as k,n as j,p as i}from"./index-588f61cb.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-c8836bd9.js";import{_ as M}from"./Card.vue_vue_type_script_setup_true_lang-72bb8a37.js";const q=(v,e)=>{const n=v[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((g,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+e)))})},G={class:"w-full"},H={class:"mb-5"},U={class:"text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"},z={class:"w-full flex justify-center"},W=V({__name:"page",setup(v){const e=A(),n=L(),g=O(),_=e.state.pages,w=s=>j(()=>q(Object.assign({"../components/Button.vue":()=>i(()=>import("./Button-cf2bc324.js"),["assets/Button-cf2bc324.js","assets/Button.vue_vue_type_script_setup_true_lang-c8836bd9.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/Card.vue":()=>i(()=>import("./Card-37a98127.js"),["assets/Card-37a98127.js","assets/Card.vue_vue_type_script_setup_true_lang-72bb8a37.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/Footer.vue":()=>i(()=>import("./Footer-3da3e8e3.js"),["assets/Footer-3da3e8e3.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/FormCheck.vue":()=>i(()=>import("./FormCheck-d5a3eca9.js"),["assets/FormCheck-d5a3eca9.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/FormControl.vue":()=>i(()=>import("./FormControl-593a71bd.js"),["assets/FormControl-593a71bd.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/FormFivestar.vue":()=>i(()=>import("./FormFivestar-002f40a1.js"),["assets/FormFivestar-002f40a1.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/FormInfo.vue":()=>i(()=>import("./FormInfo-6b7cb680.js"),["assets/FormInfo-6b7cb680.js","assets/index-588f61cb.js","assets/index-b15469ea.css"]),"../components/FormSelect.vue":()=>i(()=>import("./FormSelect-7e96cefe.js"),["assets/FormSelect-7e96cefe.js","assets/index-588f61cb.js","assets/index-b15469ea.css","assets/FormSelect-8f89c724.css"])}),`../components/${s}.vue`));let h=!1;const R=(s,t,a,r)=>{},C=(s,t)=>{s.length<=0||_[t].blocks.forEach(a=>{s.forEach(r=>{a.id===r.id&&a.hide!=r.hide&&(a.hide=r.hide)})})};x(()=>{h=!0;let s=n.currentRoute.value.params.id;e.state.pageNum=parseInt(s.toString())}),B(()=>g.path,s=>{if(!n.currentRoute.value.params.id)return;let t=n.currentRoute.value.params.id;e.state.pageNum=parseInt(t.toString())});function I(){e.commit("pushPage",{router:n,num:1,force:!0})}const D=()=>{let s=e.state.pages.map(o=>o.blocks),t=[].concat.apply([],s),a=t.filter(o=>o.hide===!1).length,r=t.filter(o=>o.hide===!1&&o.completed===!0).length;e.state.progress=(r/a*100).toFixed(1)};return(s,t)=>(l(),m(N,{tag:"Card",class:"w-full flex justify-center"},{default:E(()=>[(l(!0),p(P,null,b(u(_),(a,r)=>f((l(),m(M,{key:r},{default:E(()=>[c("form",G,[c("div",H,[c("h2",U,S(a.title),1),(l(!0),p(P,null,b(a.blocks,(o,T)=>(l(),p("div",{class:"my-4 question",ref_for:!0,ref:F=>R(F,r,o.id,""),key:T},[(l(),m($(w(o.component)),{block:o,index:r,onToggleChildren:C,onCountProgress:D},null,40,["block","index"]))]))),128))]),c("div",z,[f(k(y,{msg:"下一頁",class:"",onClick:t[0]||(t[0]=o=>u(e).commit("pushPage",{router:u(n),num:1}))},null,512),[[d,u(e).state.pageNum<u(e).state.pages.length]]),f(k(y,{msg:"送出",class:"w-60",onClick:t[1]||(t[1]=o=>I())},null,512),[[d,u(e).state.pageNum>=u(e).state.pages.length]])])])]),_:2},1024)),[[d,u(e).state.pageNum==r+1]])),128))]),_:1}))}});export{W as default};