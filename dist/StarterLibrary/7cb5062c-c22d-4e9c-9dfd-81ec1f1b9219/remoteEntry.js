var StarterLibrary;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,d,f,c,p,h,v,m,g,b,y={219:(e,r,t)=>{var n={"./widgets":()=>Promise.all([t.e(872),t.e(306),t.e(895)]).then((()=>()=>t(640)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},w={};function S(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={exports:{}};return y[e](t,t.exports,S),t.exports}S.m=y,S.c=w,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{409:"a95600bd6675ed4e4010",790:"cf84f4f11d48c95e5249",872:"34ccc9620b1621d8f367",895:"72caf6e571258eda0176"}[e]+".js",S.miniCssF=e=>"css/"+e+".6aa5b1baab3ada37ebe6.css",S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="website-components-template:",S.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var a=S.S[t],i="website-components-template",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];if("default"===t)l("react-dom","18.3.1",(()=>Promise.all([S.e(409),S.e(306)]).then((()=>()=>S(409))))),l("react","18.3.1",(()=>S.e(790).then((()=>()=>S(790)))));return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),S.p="http://localhost/StarterLibrary/7cb5062c-c22d-4e9c-9dfd-81ec1f1b9219",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>e&&S.o(e,r),l=e=>(e.loaded=1,e.get()),u=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),s=(e,r,t)=>{var o=t?u(e[r]):e[r];return Object.keys(o).reduce(((e,r)=>!e||!o[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",f=e=>{throw new Error(e)},c=e=>{"undefined"!=typeof console&&console.warn},p=(e,r,t)=>t?t():((e,r)=>f("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),h=(e=>function(r,t,n,o,a){var i=S.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,S.S[r],t,!1,o,a)):e(r,S.S[r],t,n,o,a)})(((e,r,t,n,o,u)=>{if(!i(r,t))return p(e,t,u);var f=s(r,t,n);return a(o,f)||c(d(r,t,f,o)),l(r[t][f])})),v={},m={306:()=>h("default","react",!1,[1,18,2,0],(()=>S.e(790).then((()=>()=>S(790))))),324:()=>h("default","react-dom",!1,[1,18,2,0],(()=>S.e(409).then((()=>()=>S(409)))))},g={306:[306],895:[324]},b={},S.f.consumes=(e,r)=>{S.o(g,e)&&g[e].forEach((e=>{if(S.o(v,e))return r.push(v[e]);if(!b[e]){var t=r=>{v[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}};b[e]=!0;var n=r=>{delete v[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=m[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((r,t)=>{var n=S.miniCssF(e),o=S.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",S.nc&&(a.nonce=S.nc),a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var i=t&&t.type,l=t&&t.target&&t.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+l+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),o(u)}},a.href=r,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a)})(e,o,null,r,t)})),r={445:0};S.f.miniCss=(t,n)=>{r[t]?n.push(r[t]):0!==r[t]&&{895:1}[t]&&n.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{var e={445:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(306!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=S.p+S.u(r),i=new Error;S.l(a,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);if(l)l(S)}for(r&&r(t);u<a.length;u++)o=a[u],S.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkwebsite_components_template=self.webpackChunkwebsite_components_template||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var k=S(219);StarterLibrary=k})();