/*! For license information please see 3236.64bade01.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3236],{2645:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(5773),o=n(808),i=(n(1473),n(649)),a=n(2951),u=n(1976),c=n(7591),s=n(9616),l=n(7373),f=document.createElement("template");f.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';var p=function(t){(0,c.Z)(n,t);var e=(0,s.Z)(n);function n(){var t;return(0,a.Z)(this,n),(t=e.call(this)).right="0",t.shadow=t.attachShadow({mode:"open"}),t.shadow.appendChild(t.ownerDocument.importNode(f.content,!0)),t.update(),t}return(0,u.Z)(n,[{key:"setAttr",value:function(t,e){var n=this.shadow.querySelector("svg");/(href)/.test(t.toLocaleLowerCase())?n.lastElementChild.setAttribute("xlink:href",e):/(color|fill)/.test(t.toLocaleLowerCase())?n.firstElementChild.style[t]=e:/(z-index|position|top|left|right|bottom|transform)/.test(t.toLocaleLowerCase())?n.style[t]=e:n.setAttribute(t,e)}},{key:"update",value:function(){var t=this;[].concat((0,i.Z)(this.getAttributeNames()),["right"]).forEach((function(e){var n=t.getAttribute(e)||t[e]||"";t.setAttr(e,n)}))}},{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&this.setAttr(t,n)}}],[{key:"observedAttributes",get:function(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}}]),n}((0,l.Z)(HTMLElement));customElements.define("github-corners",p);var h=n(9286),d=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function v(t){var e=t.size,n=void 0===e?80:e,i=t.fixed,a=void 0!==i&&i,u=t.bottom,c=t.zIndex,s=t.style,l=t.bgColor,f=void 0===l?"#151513":l,p=t.color,v=void 0===p?"#fff":p,m=t.position,b=void 0===m?"right":m,y=(0,o.Z)(t,d),g="left"===b?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return u?(g.bottom=0,g.top="initial",g.transform="left"===b?"scale(-1, -1)":"scale(1, -1)"):(g.bottom="initial",g.top=0),(0,h.jsx)("github-corners",(0,r.Z)({target:"__blank",width:n,height:n,href:t.href,position:a?"fixed":"absolute","z-index":c,style:s,fill:f,color:v},g,y))}},3040:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5773),o=n(808),i=n(1473),a=n(9286),u=["prefixCls","className","size","loading","tip","vertical","color","bgColor","children","indicator","fullscreen"],c=function(t){void 0===t&&(t={});var e=t,n=e.prefixCls,c=void 0===n?"w-loader":n,s=e.className,l=e.size,f=void 0===l?"default":l,p=e.loading,h=void 0===p||p,d=e.tip,v=e.vertical,m=e.color,b=e.bgColor,y=e.children,g=e.indicator,x=e.fullscreen,w=void 0!==x&&x,O=(0,o.Z)(t,u),_=[c,s,f?c+"-"+f:null].filter(Boolean).join(" ").trim(),j=(0,i.useMemo)((function(){return(0,a.jsx)("svg",{viewBox:"25 25 50 50",children:(0,a.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"5",strokeMiterlimit:"10"})})}),[]),C=(0,i.useMemo)((function(){return(0,a.jsx)("div",{className:[c+"-tips",w?c+"-fullscreen":null].filter(Boolean).join(" ").trim(),style:{color:m,backgroundColor:b},children:(0,a.jsxs)("div",{className:c+"-tips-nested",children:[g||j,d&&(0,a.jsx)("div",{className:[c+"-text",v?c+"-vertical":null].filter(Boolean).join(" ").trim(),children:d})]})})}),[w,b,c,v,d]);return(0,a.jsxs)("div",(0,r.Z)({className:_},O,{children:[(h||w)&&C,y&&i.cloneElement(y,Object.assign({},y.props,{className:[c+"-warp",h?c+"-blur":null].filter(Boolean).join(" ").trim()}))]}))}},6991:function(t,e,n){var r=n(8983).default,o=n(2081).default,i=n(7266).default,a=n(8724).default,u=n(670).default,c=n(9952).default,s=n(3231).default,l=document,f="_dark_mode_theme_",p="permanent",h="colorschemechange",d="light",v="dark",m=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;Object.defineProperty(t,n,{enumerable:!0,get:function(){var t=this.getAttribute(e);return null===t?"":t},set:function(t){this.setAttribute(e,t)}})},b=function(t){"use strict";a(n,t);var e=u(n);function n(){var t;return r(this,n),t=e.call(this),s(i(t),"LOCAL_NANE",f),t.t(),t}return o(n,[{key:"connectedCallback",value:function(){var t=this;m(this,"mode"),m(this,v),m(this,d),function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;Object.defineProperty(t,n,{enumerable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t?this.setAttribute(e,""):this.removeAttribute(e)}})}(this,p);var e=localStorage.getItem(f);e&&[d,v].includes(e)&&(this.mode=e,this.permanent=!0),this.permanent&&!e&&localStorage.setItem(f,this.mode);var n=[d,v].includes(e);this.permanent&&e?this.o():(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.mode=v,this.o()),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(this.mode=d,this.o())),this.permanent||n||(window.matchMedia("(prefers-color-scheme: light)").onchange=function(e){t.mode=e.matches?d:v,t.o()},window.matchMedia("(prefers-color-scheme: dark)").onchange=function(e){t.mode=e.matches?v:d,t.o()}),new MutationObserver((function(e,r){t.mode=l.documentElement.dataset.colorMode,t.permanent&&n&&(localStorage.setItem(f,t.mode),t.i("permanentcolorscheme",{permanent:t.permanent})),t.h(),t.i(h,{colorScheme:t.mode})})).observe(l.documentElement,{attributes:!0}),this.i(h,{colorScheme:this.mode}),this.h()}},{key:"attributeChangedCallback",value:function(t,e,n){if("mode"===t&&e!==n&&[d,v].includes(n)){var r=localStorage.getItem(f);this.mode===r?(this.mode=n,this.h(),this.o()):this.mode&&this.mode!==r&&(this.h(),this.o())}else t!==d&&t!==v||e===n||this.h();"permanent"===t&&"boolean"===typeof this.permanent&&(this.permanent?localStorage.setItem(f,this.mode):localStorage.removeItem(f))}},{key:"o",value:function(){l.documentElement.setAttribute("data-color-mode",this.mode)}},{key:"h",value:function(){this.icon.textContent=this.mode===d?"\ud83c\udf12":"\ud83c\udf1e",this.text.textContent=this.mode===d?this.getAttribute(v):this.getAttribute(d)}},{key:"t",value:function(){var t=this,e=this.attachShadow({mode:"open"});this.label=l.createElement("span"),this.label.setAttribute("class","wrapper"),this.label.onclick=function(){t.mode=t.mode===d?v:d,t.permanent&&localStorage.setItem(f,t.mode),t.o(),t.h()},e.appendChild(this.label),this.icon=l.createElement("span"),this.label.appendChild(this.icon),this.text=l.createElement("span"),this.label.appendChild(this.text);var n="_dark_mode_style_";if(!l.getElementById(n)){var r=l.createElement("style");r.id=n,r.textContent="\n[data-color-mode*='dark'], [data-color-mode*='dark'] body {\n  color-scheme: dark;\n  --color-theme-bg: #0d1117;\n  --color-theme-text: #c9d1d9;\n  background-color: var(--color-theme-bg);\n  color: var(--color-theme-text);\n}\n\n[data-color-mode*='light'], [data-color-mode*='light'] body {\n  color-scheme: light;\n  --color-theme-bg: #fff;\n  --color-theme-text: #24292f;\n  background-color: var(--color-theme-bg);\n  color: var(--color-theme-text);\n}",l.head.appendChild(r)}var o=l.createElement("style");o.textContent="\n    .wrapper { cursor: pointer; user-select: none; position: relative; }\n    .wrapper > span + span { margin-left: .4rem; }\n    ",e.appendChild(o)}},{key:"i",value:function(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}}],[{key:"observedAttributes",get:function(){return["mode",d,v,p]}}]),n}(c(HTMLElement));customElements.define("dark-mode",b)},334:function(t,e,n){"use strict";n.d(e,{Ep:function(){return p},aU:function(){return r},cP:function(){return h},q_:function(){return c}});var r,o=n(5773);!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(r||(r={}));var i=function(t){return t};var a="beforeunload",u="popstate";function c(t){void 0===t&&(t={});var e=t.window,n=void 0===e?document.defaultView:e,c=n.history;function d(){var t=h(n.location.hash.substr(1)),e=t.pathname,r=void 0===e?"/":e,o=t.search,a=void 0===o?"":o,u=t.hash,s=void 0===u?"":u,l=c.state||{};return[l.idx,i({pathname:r,search:a,hash:s,state:l.usr||null,key:l.key||"default"})]}var v=null;function m(){if(v)O.call(v),v=null;else{var t=r.Pop,e=d(),n=e[0],o=e[1];if(O.length){if(null!=n){var i=g-n;i&&(v={action:t,location:o,retry:function(){E(-1*i)}},E(i))}}else P(t)}}n.addEventListener(u,m),n.addEventListener("hashchange",(function(){p(d()[1])!==p(x)&&m()}));var b=r.Pop,y=d(),g=y[0],x=y[1],w=l(),O=l();function _(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var r=n.location.href,o=r.indexOf("#");e=-1===o?r:r.slice(0,o)}return e}()+"#"+("string"===typeof t?t:p(t))}function j(t,e){return void 0===e&&(e=null),i((0,o.Z)({pathname:x.pathname,hash:"",search:""},"string"===typeof t?h(t):t,{state:e,key:f()}))}function C(t,e){return[{usr:t.state,key:t.key,idx:e},_(t)]}function k(t,e,n){return!O.length||(O.call({action:t,location:e,retry:n}),!1)}function P(t){b=t;var e=d();g=e[0],x=e[1],w.call({action:b,location:x})}function E(t){c.go(t)}null==g&&(g=0,c.replaceState((0,o.Z)({},c.state,{idx:g}),""));var S={get action(){return b},get location(){return x},createHref:_,push:function t(e,o){var i=r.Push,a=j(e,o);if(k(i,a,(function(){t(e,o)}))){var u=C(a,g+1),s=u[0],l=u[1];try{c.pushState(s,"",l)}catch(f){n.location.assign(l)}P(i)}},replace:function t(e,n){var o=r.Replace,i=j(e,n);if(k(o,i,(function(){t(e,n)}))){var a=C(i,g),u=a[0],s=a[1];c.replaceState(u,"",s),P(o)}},go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(t){return w.push(t)},block:function(t){var e=O.push(t);return 1===O.length&&n.addEventListener(a,s),function(){e(),O.length||n.removeEventListener(a,s)}}};return S}function s(t){t.preventDefault(),t.returnValue=""}function l(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function f(){return Math.random().toString(36).substr(2,8)}function p(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,o=void 0===r?"":r,i=t.hash,a=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),a&&"#"!==a&&(n+="#"===a.charAt(0)?a:"#"+a),n}function h(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}},1620:function(t){"use strict";var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,i){for(var a,u,c=o(t),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))n.call(a,l)&&(c[l]=a[l]);if(e){u=e(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(c[u[f]]=a[u[f]])}}return c}},4310:function(t,e,n){"use strict";n.d(e,{OL:function(){return h},UT:function(){return f}});var r=n(1026),o=n(1473),i=n(334),a=n(7261);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var s=["onClick","reloadDocument","replace","state","target","to"],l=["aria-current","caseSensitive","className","end","style","to","children"];function f(t){var e=t.basename,n=t.children,u=t.window,c=(0,o.useRef)();null==c.current&&(c.current=(0,i.q_)({window:u}));var s=c.current,l=(0,o.useState)({action:s.action,location:s.location}),f=(0,r.Z)(l,2),p=f[0],h=f[1];return(0,o.useLayoutEffect)((function(){return s.listen(h)}),[s]),(0,o.createElement)(a.F0,{basename:e,children:n,location:p.location,navigationType:p.action,navigator:s})}var p=(0,o.forwardRef)((function(t,e){var n=t.onClick,r=t.reloadDocument,l=t.replace,f=void 0!==l&&l,p=t.state,h=t.target,d=t.to,v=c(t,s),m=(0,a.oQ)(d),b=function(t,e){var n=void 0===e?{}:e,r=n.target,u=n.replace,c=n.state,s=(0,a.s0)(),l=(0,a.TH)(),f=(0,a.WU)(t);return(0,o.useCallback)((function(e){if(0===e.button&&(!r||"_self"===r)&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();var n=!!u||(0,i.Ep)(l)===(0,i.Ep)(f);s(t,{replace:n,state:c})}}),[l,s,f,u,c,r,t])}(d,{replace:f,state:p,target:h});return(0,o.createElement)("a",u({},v,{href:m,onClick:function(t){n&&n(t),t.defaultPrevented||r||b(t)},ref:e,target:h}))}));var h=(0,o.forwardRef)((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,i=t.caseSensitive,s=void 0!==i&&i,f=t.className,h=void 0===f?"":f,d=t.end,v=void 0!==d&&d,m=t.style,b=t.to,y=t.children,g=c(t,l),x=(0,a.TH)(),w=(0,a.WU)(b),O=x.pathname,_=w.pathname;s||(O=O.toLowerCase(),_=_.toLowerCase());var j,C=O===_||!v&&O.startsWith(_)&&"/"===O.charAt(_.length),k=C?r:void 0;j="function"===typeof h?h({isActive:C}):[h,C?"active":null].filter(Boolean).join(" ");var P="function"===typeof m?m({isActive:C}):m;return(0,o.createElement)(p,u({},g,{"aria-current":k,className:j,ref:e,style:P,to:b}),"function"===typeof y?y({isActive:C}):y)}))},7261:function(t,e,n){"use strict";n.d(e,{AW:function(){return l},F0:function(){return f},TH:function(){return v},WU:function(){return b},Z5:function(){return p},oQ:function(){return h},s0:function(){return m}});var r=n(1026),o=n(1473),i=n(334);function a(t,e){if(!t)throw new Error(e)}var u=(0,o.createContext)(null);var c=(0,o.createContext)(null);var s=(0,o.createContext)({outlet:null,matches:[]});function l(t){a(!1)}function f(t){var e=t.basename,n=void 0===e?"/":e,r=t.children,s=void 0===r?null:r,l=t.location,f=t.navigationType,p=void 0===f?i.aU.Pop:f,h=t.navigator,v=t.static,m=void 0!==v&&v;d()&&a(!1);var b=S(n),y=(0,o.useMemo)((function(){return{basename:b,navigator:h,static:m}}),[b,h,m]);"string"===typeof l&&(l=(0,i.cP)(l));var g=l,x=g.pathname,w=void 0===x?"/":x,O=g.search,_=void 0===O?"":O,j=g.hash,C=void 0===j?"":j,k=g.state,E=void 0===k?null:k,Z=g.key,M=void 0===Z?"default":Z,A=(0,o.useMemo)((function(){var t=P(w,b);return null==t?null:{pathname:t,search:_,hash:C,state:E,key:M}}),[b,w,_,C,E,M]);return null==A?null:(0,o.createElement)(u.Provider,{value:y},(0,o.createElement)(c.Provider,{children:s,value:{location:A,navigationType:p}}))}function p(t){var e=t.children,n=t.location;return function(t,e){d()||a(!1);var n=(0,o.useContext)(s).matches,r=n[n.length-1],u=r?r.params:{},c=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;0;var l,f=v();if(e){var p,h="string"===typeof e?(0,i.cP)(e):e;"/"===c||(null==(p=h.pathname)?void 0:p.startsWith(c))||a(!1),l=h}else l=f;var m=l.pathname||"/",b="/"===c?m:m.slice(c.length)||"/",y=function(t,e,n){void 0===n&&(n="/");var r=P(("string"===typeof e?(0,i.cP)(e):e).pathname||"/",n);if(null==r)return null;var o=g(t);!function(t){t.sort((function(t,e){return t.score!==e.score?e.score-t.score:function(t,e){var n=t.length===e.length&&t.slice(0,-1).every((function(t,n){return t===e[n]}));return n?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((function(t){return t.childrenIndex})),e.routesMeta.map((function(t){return t.childrenIndex})))}))}(o);for(var a=null,u=0;null==a&&u<o.length;++u)a=_(o[u],r);return a}(t,{pathname:b});0;return j(y&&y.map((function(t){return Object.assign({},t,{params:Object.assign({},u,t.params),pathname:E([c,t.pathname]),pathnameBase:"/"===t.pathnameBase?c:E([c,t.pathnameBase])})})),n)}(y(e),n)}function h(t){d()||a(!1);var e=(0,o.useContext)(u),n=e.basename,r=e.navigator,c=b(t),s=c.hash,l=c.pathname,f=c.search,p=l;if("/"!==n){var h=function(t){return""===t||""===t.pathname?"/":"string"===typeof t?(0,i.cP)(t).pathname:t.pathname}(t),v=null!=h&&h.endsWith("/");p="/"===l?n+(v?"/":""):E([n,l])}return r.createHref({pathname:p,search:f,hash:s})}function d(){return null!=(0,o.useContext)(c)}function v(){return d()||a(!1),(0,o.useContext)(c).location}function m(){d()||a(!1);var t=(0,o.useContext)(u),e=t.basename,n=t.navigator,r=(0,o.useContext)(s).matches,i=v().pathname,c=JSON.stringify(r.map((function(t){return t.pathnameBase}))),l=(0,o.useRef)(!1);return(0,o.useEffect)((function(){l.current=!0})),(0,o.useCallback)((function(t,r){if(void 0===r&&(r={}),l.current)if("number"!==typeof t){var o=k(t,JSON.parse(c),i);"/"!==e&&(o.pathname=E([e,o.pathname])),(r.replace?n.replace:n.push)(o,r.state)}else n.go(t)}),[e,n,c,i])}function b(t){var e=(0,o.useContext)(s).matches,n=v().pathname,r=JSON.stringify(e.map((function(t){return t.pathnameBase})));return(0,o.useMemo)((function(){return k(t,JSON.parse(r),n)}),[t,r,n])}function y(t){var e=[];return o.Children.forEach(t,(function(t){if((0,o.isValidElement)(t))if(t.type!==o.Fragment){t.type!==l&&a(!1);var n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=y(t.props.children)),e.push(n)}else e.push.apply(e,y(t.props.children))})),e}function g(t,e,n,r){return void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r=""),t.forEach((function(t,o){var i={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(r)||a(!1),i.relativePath=i.relativePath.slice(r.length));var u=E([r,i.relativePath]),c=n.concat(i);t.children&&t.children.length>0&&(!0===t.index&&a(!1),g(t.children,e,c,u)),(null!=t.path||t.index)&&e.push({path:u,score:O(u,t.index),routesMeta:c})})),e}var x=/^:\w+$/,w=function(t){return"*"===t};function O(t,e){var n=t.split("/"),r=n.length;return n.some(w)&&(r+=-2),e&&(r+=2),n.filter((function(t){return!w(t)})).reduce((function(t,e){return t+(x.test(e)?3:""===e?1:10)}),r)}function _(t,e){for(var n=t.routesMeta,r={},o="/",i=[],a=0;a<n.length;++a){var u=n[a],c=a===n.length-1,s="/"===o?e:e.slice(o.length)||"/",l=C({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},s);if(!l)return null;Object.assign(r,l.params);var f=u.route;i.push({params:r,pathname:E([o,l.pathname]),pathnameBase:S(E([o,l.pathnameBase])),route:f}),"/"!==l.pathnameBase&&(o=E([o,l.pathnameBase]))}return i}function j(t,e){return void 0===e&&(e=[]),null==t?null:t.reduceRight((function(n,r,i){return(0,o.createElement)(s.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}})}),null)}function C(t,e){"string"===typeof t&&(t={path:t,caseSensitive:!1,end:!0});var n=function(t,e,n){void 0===e&&(e=!1);void 0===n&&(n=!0);var r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(t,e){return r.push(e),"([^\\/]+)"}));t.endsWith("*")?(r.push("*"),o+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(o,e?void 0:"i"),r]}(t.path,t.caseSensitive,t.end),o=(0,r.Z)(n,2),i=o[0],a=o[1],u=e.match(i);if(!u)return null;var c=u[0],s=c.replace(/(.)\/+$/,"$1"),l=u.slice(1);return{params:a.reduce((function(t,e,n){if("*"===e){var r=l[n]||"";s=c.slice(0,c.length-r.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(n){return t}}(l[n]||""),t}),{}),pathname:c,pathnameBase:s,pattern:t}}function k(t,e,n){var r,o="string"===typeof t?(0,i.cP)(t):t,a=""===t||""===o.pathname?"/":o.pathname;if(null==a)r=n;else{var u=e.length-1;if(a.startsWith("..")){for(var c=a.split("/");".."===c[0];)c.shift(),u-=1;o.pathname=c.join("/")}r=u>=0?e[u]:"/"}var s=function(t,e){void 0===e&&(e="/");var n="string"===typeof t?(0,i.cP)(t):t,r=n.pathname,o=n.search,a=void 0===o?"":o,u=n.hash,c=void 0===u?"":u,s=r?r.startsWith("/")?r:function(t,e){var n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((function(t){".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(r,e):e;return{pathname:s,search:Z(a),hash:M(c)}}(o,r);return a&&"/"!==a&&a.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function P(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;var n=t.charAt(e.length);return n&&"/"!==n?null:t.slice(e.length)||"/"}var E=function(t){return t.join("/").replace(/\/\/+/g,"/")},S=function(t){return t.replace(/\/+$/,"").replace(/^\/*/,"/")},Z=function(t){return t&&"?"!==t?t.startsWith("?")?t:"?"+t:""},M=function(t){return t&&"#"!==t?t.startsWith("#")?t:"#"+t:""}},2560:function(t,e){"use strict";var n,r,o,i;if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,l=null,f=function t(){if(null!==s)try{var n=e.unstable_now();s(!0,n),s=null}catch(r){throw setTimeout(t,0),r}};n=function(t){null!==s?setTimeout(n,0,t):(s=t,setTimeout(f,0))},r=function(t,e){l=setTimeout(t,e)},o=function(){clearTimeout(l)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!==typeof console){var d=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof d&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,m=null,b=-1,y=5,g=0;e.unstable_shouldYield=function(){return e.unstable_now()>=g},i=function(){},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<t?Math.floor(1e3/t):5};var x=new MessageChannel,w=x.port2;x.port1.onmessage=function(){if(null!==m){var t=e.unstable_now();g=t+y;try{m(!0,t)?w.postMessage(null):(v=!1,m=null)}catch(n){throw w.postMessage(null),n}}else v=!1},n=function(t){m=t,v||(v=!0,w.postMessage(null))},r=function(t,n){b=p((function(){t(e.unstable_now())}),n)},o=function(){h(b),b=-1}}function O(t,e){var n=t.length;t.push(e);t:for(;;){var r=n-1>>>1,o=t[r];if(!(void 0!==o&&0<C(o,e)))break t;t[r]=e,t[n]=o,n=r}}function _(t){return void 0===(t=t[0])?null:t}function j(t){var e=t[0];if(void 0!==e){var n=t.pop();if(n!==e){t[0]=n;t:for(var r=0,o=t.length;r<o;){var i=2*(r+1)-1,a=t[i],u=i+1,c=t[u];if(void 0!==a&&0>C(a,n))void 0!==c&&0>C(c,a)?(t[r]=c,t[u]=n,r=u):(t[r]=a,t[i]=n,r=i);else{if(!(void 0!==c&&0>C(c,n)))break t;t[r]=c,t[u]=n,r=u}}}return e}return null}function C(t,e){var n=t.sortIndex-e.sortIndex;return 0!==n?n:t.id-e.id}var k=[],P=[],E=1,S=null,Z=3,M=!1,A=!1,T=!1;function L(t){for(var e=_(P);null!==e;){if(null===e.callback)j(P);else{if(!(e.startTime<=t))break;j(P),e.sortIndex=e.expirationTime,O(k,e)}e=_(P)}}function I(t){if(T=!1,L(t),!A)if(null!==_(k))A=!0,n(R);else{var e=_(P);null!==e&&r(I,e.startTime-t)}}function R(t,n){A=!1,T&&(T=!1,o()),M=!0;var i=Z;try{for(L(n),S=_(k);null!==S&&(!(S.expirationTime>n)||t&&!e.unstable_shouldYield());){var a=S.callback;if("function"===typeof a){S.callback=null,Z=S.priorityLevel;var u=a(S.expirationTime<=n);n=e.unstable_now(),"function"===typeof u?S.callback=u:S===_(k)&&j(k),L(n)}else j(k);S=_(k)}if(null!==S)var c=!0;else{var s=_(P);null!==s&&r(I,s.startTime-n),c=!1}return c}finally{S=null,Z=i,M=!1}}var B=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_continueExecution=function(){A||M||(A=!0,n(R))},e.unstable_getCurrentPriorityLevel=function(){return Z},e.unstable_getFirstCallbackNode=function(){return _(k)},e.unstable_next=function(t){switch(Z){case 1:case 2:case 3:var e=3;break;default:e=Z}var n=Z;Z=e;try{return t()}finally{Z=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=B,e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Z;Z=t;try{return e()}finally{Z=n}},e.unstable_scheduleCallback=function(t,i,a){var u=e.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?u+a:u:a=u,t){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return t={id:E++,callback:i,priorityLevel:t,startTime:a,expirationTime:c=a+c,sortIndex:-1},a>u?(t.sortIndex=a,O(P,t),null===_(k)&&t===_(P)&&(T?o():T=!0,r(I,a-u))):(t.sortIndex=c,O(k,t),A||M||(A=!0,n(R))),t},e.unstable_wrapCallback=function(t){var e=Z;return function(){var n=Z;Z=e;try{return t.apply(this,arguments)}finally{Z=n}}}},1067:function(t,e,n){"use strict";t.exports=n(2560)},7251:function(){},7266:function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},8983:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},6824:function(t,e,n){var r=n(6196),o=n(4161);function i(e,n,a){return o()?(t.exports=i=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},t.exports.__esModule=!0,t.exports.default=t.exports),i.apply(null,arguments)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},2081:function(t){function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},670:function(t,e,n){var r=n(4910),o=n(4161),i=n(1173);t.exports=function(t){var e=o();return function(){var n,o=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}},t.exports.__esModule=!0,t.exports.default=t.exports},3231:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},4910:function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},8724:function(t,e,n){var r=n(6196);t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},4346:function(t){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},t.exports.__esModule=!0,t.exports.default=t.exports},4161:function(t){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},1173:function(t,e,n){var r=n(7501).default,o=n(7266);t.exports=function(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},6196:function(t){function e(n,r){return t.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n,r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7501:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},9952:function(t,e,n){var r=n(4910),o=n(6196),i=n(4346),a=n(6824);function u(e){var n="function"===typeof Map?new Map:void 0;return t.exports=u=function(t){if(null===t||!i(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,u(e)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},1793:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},6470:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,{Z:function(){return r}})},7169:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},2951:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},1976:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})},9616:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7597),o=n(8119),i=n(3940),a=n(7169);function u(t,e){if(e&&("object"===(0,i.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(t)}function c(t){var e=(0,o.Z)();return function(){var n,o=(0,r.Z)(t);if(e){var i=(0,r.Z)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return u(this,n)}}},4649:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},5773:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{Z:function(){return r}})},7597:function(t,e,n){"use strict";function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},7591:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(6983);function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},8119:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})},5181:function(t,e,n){"use strict";function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n.d(e,{Z:function(){return r}})},3764:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,{Z:function(){return r}})},189:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(4649);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},3782:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(808);function o(t,e){if(null==t)return{};var n,o,i=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},808:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},6983:function(t,e,n){"use strict";function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{Z:function(){return r}})},1026:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(6470);var o=n(4013),i=n(3764);function a(t,e){return(0,r.Z)(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||(0,o.Z)(t,e)||(0,i.Z)()}},649:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(1793);var o=n(5181),i=n(4013);function a(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,o.Z)(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3940:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:function(){return r}})},4013:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(1793);function o(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}},7373:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(7597),o=n(6983);var i=n(8119);function a(t,e,n){return a=(0,i.Z)()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&(0,o.Z)(i,n.prototype),i},a.apply(null,arguments)}function u(t){var e="function"===typeof Map?new Map:void 0;return u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,(0,r.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(i,t)},u(t)}}}]);
//# sourceMappingURL=3236.64bade01.js.map