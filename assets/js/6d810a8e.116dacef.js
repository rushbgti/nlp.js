"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[5672],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=t.createContext({}),i=function(e){var n=t.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(g,".").concat(d)]||u[d]||p[d]||a;return r?t.createElement(f,l(l({ref:n},c),{},{components:r})):t.createElement(f,l({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var g in n)hasOwnProperty.call(n,g)&&(s[g]=n[g]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9829:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var t=r(7462),o=(r(7294),r(3905));const a={title:"Logging"},l="@nlpjs/logger",s={unversionedId:"extras/logger",id:"extras/logger",title:"Logging",description:"Installation",source:"@site/docs/100-extras/04-logger.md",sourceDirName:"100-extras",slug:"/extras/logger",permalink:"/extras/logger",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Logging"},sidebar:"tutorialSidebar",previous:{title:"QnA",permalink:"/extras/qna"}},g={},i=[{value:"Installation",id:"installation",level:2},{value:"Example of Usage",id:"example-of-usage",level:2},{value:"Default logger in @nlpjs/core",id:"default-logger-in-nlpjscore",level:2},{value:"Default logger in @nlpjs/basic",id:"default-logger-in-nlpjsbasic",level:2},{value:"Adding your own logger to the container",id:"adding-your-own-logger-to-the-container",level:2}],c={toc:i};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nlpjslogger"},"@nlpjs/logger"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install @nlpjs/logger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @nlpjs/logger\n")),(0,o.kt)("h2",{id:"example-of-usage"},"Example of Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Logger } = require("@nlpjs/logger");\n\nconst logger = new Logger();\n\nlogger.info("Hello world!!!");\n')),(0,o.kt)("h2",{id:"default-logger-in-nlpjscore"},"Default logger in @nlpjs/core"),(0,o.kt)("p",null,"By default, a logger based on console is added to the NLP.js container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { defaultContainer } = require("@nlpjs/core");\n\nconst logger = defaultContainer.get("logger");\nlogger.info("This is an info message");\n// This is an info message\n')),(0,o.kt)("h2",{id:"default-logger-in-nlpjsbasic"},"Default logger in @nlpjs/basic"),(0,o.kt)("p",null,"When using the basic package of NLP.js, a logger based on pino is added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart({ use: ["Basic"] });\n  const logger = dock.get("logger");\n  logger.info("This is an info message");\n  logger.log("This is a log message");\n  logger.warn("This is a warn message");\n  logger.error("This is an error message");\n})();\n')),(0,o.kt)("h2",{id:"adding-your-own-logger-to-the-container"},"Adding your own logger to the container"),(0,o.kt)("p",null,"You can register your own logger to the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart({ use: ["Basic"] });\n  const container = dock.getContainer();\n  const loggerInstance = {\n    trace: (msg) => console.trace(`[TRACE] ${msg}`),\n    debug: (msg) => console.debug(`[DEBUG] ${msg}`),\n    info: (msg) => console.info(`[INFO] ${msg}`),\n    log: (msg) => console.log(`[LOG] ${msg}`),\n    warn: (msg) => console.warn(`[WARN] ${msg}`),\n    error: (msg) => console.error(`[ERROR] ${msg}`),\n    fatal: (msg) => console.error(`[FATAL] ${msg}`),\n  };\n  container.register("logger", loggerInstance);\n  const logger = dock.get("logger");\n  logger.info("This is an info message");\n})();\n')))}p.isMDXComponent=!0}}]);