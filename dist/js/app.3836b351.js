(()=>{"use strict";var e={9942:(e,r,t)=>{t(7280),t(5363),t(71);var n=t(8880),o=t(2277),a=t(3673);function s(e,r,t,n,o,s){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}const i=(0,a.aZ)({name:"App"});i.render=s;const c=i;var l=t(6878),d=t(7083),u=t(9582);const p=[{path:"/",component:()=>Promise.all([t.e(736),t.e(400)]).then(t.bind(t,400)),children:[{path:"",name:"index",component:()=>Promise.all([t.e(736),t.e(826)]).then(t.bind(t,8410))},{path:"/generation-details/:id/:generation",name:"detailsList",component:()=>Promise.all([t.e(736),t.e(423)]).then(t.bind(t,5531))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}],g=p,f=(0,d.BC)((function(){const e=u.PO,r=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,linkActiveClass:"active-link",history:e("/")});return r}));async function h(e,r){const n="function"===typeof l.default?await(0,l.default)({}):l.default,{storeKey:a}=await Promise.resolve().then(t.bind(t,6878)),s="function"===typeof f?await f({store:n}):f;n.$router=s;const i=e(c);return i.use(o.Z,r),{app:i,store:n,storeKey:a,router:s}}const m={config:{}},v="/";async function b({app:e,router:r,store:t,storeKey:n},o){let a=!1;const s=e=>{a=!0;const t=Object(e)===e?r.resolve(e).fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===a&&l<o.length;l++)try{await o[l]({app:e,router:r,store:t,ssrContext:null,redirect:s,urlPath:i,publicPath:v})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(r),e.use(t,n),e.mount("#q-app"))}h(n.ri,m).then((e=>Promise.all([Promise.resolve().then(t.bind(t,5474))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));b(e,t)}))))},5474:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i,api:()=>s});var n=t(7083),o=t(52),a=t.n(o);const s=a().create({baseURL:"https://api.example.com"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=s}))},6878:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var n=t(7083),o=t(7874);const a={generations:{dados:{},carregando:!1,sucesso:!1,erro:!1},generation:{dados:{},carregando:!1,sucesso:!1,erro:!1}},s={},i={carregandoGenerations(e){e.generations.carregando=!0},sucessoGenerations(e,r){e.generations.carregando=!1,e.generations.dados=r,e.generations.sucesso=!0,e.generations.erro=!1},erroGenerations(e,r){e.generations.carregando=!1,e.generations.dados={},e.generations.sucesso=!1,e.generations.erro=r},resetarGenerations(e){e.generations.sucesso=!1},carregandoGeneration(e){e.generation.carregando=!0},sucessoGeneration(e,r){e.generation.carregando=!1,e.generation.dados=r,e.generation.sucesso=!0,e.generation.erro=!1},erroGeneration(e,r){e.generation.carregando=!1,e.generation.dados={},e.generation.sucesso=!1,e.generation.erro=r},resetarGeneration(e){e.generation.sucesso=!1}};var c=t(52),l=t.n(c);const d=l().create({baseURL:"https://pokeapi.co/api/v2/",headers:{Accept:"application/json"}}),u=d,p={async getGenerationsList({commit:e}){e("carregandoGenerations");try{const r=await u.get("generation/");return e("sucessoGenerations",r.data),e("resetarGenerations"),!0}catch(r){return e("erroGenerations",r.response.data),!1}},async getGenerationDetails({commit:e},r){e("carregandoGeneration");try{const t=await u.get("generation/".concat(r));return e("sucessoGeneration",t.data),e("resetarGeneration"),!0}catch(t){return e("erroGeneration",t.response.data),!1}}},g={namespaced:!0,getters:s,mutations:i,actions:p,state:a},f=(0,n.h)((function(){const e=(0,o.MT)({modules:{wiki:g},strict:!1});return e}))}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,n,o,a)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+({423:"detailslist",826:"index"}[e]||e)+"."+{193:"3e06c2fc",400:"ee79b793",423:"24c0a45d",826:"1dbd5345"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{423:"detailslist",736:"vendor",826:"index"}[e]+"."+{423:"728ab87a",736:"68cda035",826:"db6af56e"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="pokemon-list:";t.l=(n,o,a,s)=>{if(e[n])e[n].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+a){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",r+a),i.src=n),e[n]=[o];var p=(r,t)=>{i.onerror=i.onload=null,clearTimeout(g);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{var e=(e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=r,document.head.appendChild(o),o},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===r))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===e||a===r)return o}},n=n=>new Promise(((o,a)=>{var s=t.miniCssF(n),i=t.p+s;if(r(s,i))return o();e(n,i,o,a)})),o={143:0};t.f.miniCss=(e,r)=>{var t={423:1,826:1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=n(e).then((()=>{o[e]=0}),(r=>{throw delete o[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var s=t.p+t.u(r),i=new Error,c=n=>{if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};t.l(s,c,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[s,i,c]=n,l=0;for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var d=c(t);for(r&&r(n);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[s[l]]=0;return t.O(d)},n=self["webpackChunkpokemon_list"]=self["webpackChunkpokemon_list"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(9942)));n=t.O(n)})();