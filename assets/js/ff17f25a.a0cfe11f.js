"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[8856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),h=o,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="ObjToArr",s={unversionedId:"special_packages/core/utilities/obj-to-arr",id:"special_packages/core/utilities/obj-to-arr",title:"ObjToArr",description:"This is a plugin to transform an hashmap object to an array of strings where each string is a key of the hashmap.",source:"@site/docs/90-special_packages/01-core/02-utilities/obj-to-arr.md",sourceDirName:"90-special_packages/01-core/02-utilities",slug:"/special_packages/core/utilities/obj-to-arr",permalink:"/special_packages/core/utilities/obj-to-arr",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Normalizer",permalink:"/special_packages/core/utilities/normalizer"},next:{title:"Stopwords",permalink:"/special_packages/core/utilities/stopwords"}},c={},p=[{value:"Use without container",id:"use-without-container",level:2},{value:"Use with container",id:"use-with-container",level:2},{value:"Use with bootstrapped container",id:"use-with-bootstrapped-container",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"objtoarr"},"ObjToArr"),(0,o.kt)("p",null,"This is a plugin to transform an hashmap object to an array of strings where each string is a key of the hashmap."),(0,o.kt)("h2",{id:"use-without-container"},"Use without container"),(0,o.kt)("p",null,"You can use it directly without container system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ObjToArr } = require('@nlpjs/core');\n\nconst obj = { the: 1, water: 1, pot: 1 }\nconst arr = ObjToArr.objToArr(obj);\nconsole.log(tokens); // ['the', 'water', 'pot']\n")),(0,o.kt)("h2",{id:"use-with-container"},"Use with container"),(0,o.kt)("p",null,"Used with a container, the plugin is defined as input.tokens: string[] -> input.tokens: object. "),(0,o.kt)("p",null,"Example of use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ObjToArr, Container } = require('@nlpjs/core');\n\nconst input = {\n  tokens: { the: 1, water: 1, pot: 1 } \n} \nconst container = new Container();\ncontainer.use(ObjToArr);\nconst obj = container.get('objToArr').run(input);\nconsole.log(obj); // { tokens: ['the', 'water', 'pot'] }\n")),(0,o.kt)("h2",{id:"use-with-bootstrapped-container"},"Use with bootstrapped container"),(0,o.kt)("p",null,"The container bootstrap already includes this plugin, so you don't need to require the plugin nor register it into the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { containerBootstrap } = require('@nlpjs/core');\n\nconst input = {\n  tokens: { the: 1, water: 1, pot: 1 } \n} \nconst container = containerBootstrap();\nconst obj = container.get('objToArr').run(input);\nconsole.log(obj); // { tokens: ['the', 'water', 'pot'] }\n")))}u.isMDXComponent=!0}}]);