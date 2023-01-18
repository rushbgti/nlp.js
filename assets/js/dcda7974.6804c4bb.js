"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},l="node-nlp-rn",i={unversionedId:"browser/node-nlp-rn",id:"browser/node-nlp-rn",title:"node-nlp-rn",description:"There is a version of NLP.js that works in React Native, so you can build chatbots that can be trained and executed on the mobile even without the internet. You can install it via NPM:",source:"@site/docs/05-browser/02-node-nlp-rn.md",sourceDirName:"05-browser",slug:"/browser/node-nlp-rn",permalink:"/browser/node-nlp-rn",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web and React Native",permalink:"/browser/webandreact"},next:{title:"@nlpjs/builtin-compromise",permalink:"/browser/builtin-compromise"}},s={},c=[{value:"Example of use",id:"example-of-use",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-nlp-rn"},"node-nlp-rn"),(0,a.kt)("p",null,"There is a version of NLP.js that works in React Native, so you can build chatbots that can be trained and executed on the mobile even without the internet. You can install it via NPM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install node-nlp-rn\n")),(0,a.kt)("p",null,"Some limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No Chinese"),(0,a.kt)("li",{parentName:"ul"},"The Japanese stemmer is not the complete one"),(0,a.kt)("li",{parentName:"ul"},"No Excel import"),(0,a.kt)("li",{parentName:"ul"},"No loading from a file, or saving to a file, but it can still import from JSON and export to JSON.")),(0,a.kt)("h2",{id:"example-of-use"},"Example of use"),(0,a.kt)("p",null,"You can see a great example of use in the folder ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axa-group/nlp.js/tree/master/examples/02-qna-classic"},(0,a.kt)("inlineCode",{parentName:"a"},"/examples/02-qna-classic")),". This example is able to train the bot and save the model to a file, so when the bot is started again, the model is loaded instead of being trained again."),(0,a.kt)("p",null,"You can start to build your NLP from scratch with a few lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nconst manager = new NlpManager({ languages: ["en"], forceNER: true });\n// Adds the utterances and intents for the NLP\nmanager.addDocument("en", "goodbye for now", "greetings.bye");\nmanager.addDocument("en", "bye bye take care", "greetings.bye");\nmanager.addDocument("en", "okay see you later", "greetings.bye");\nmanager.addDocument("en", "bye for now", "greetings.bye");\nmanager.addDocument("en", "i must go", "greetings.bye");\nmanager.addDocument("en", "hello", "greetings.hello");\nmanager.addDocument("en", "hi", "greetings.hello");\nmanager.addDocument("en", "howdy", "greetings.hello");\n\n// Train also the NLG\nmanager.addAnswer("en", "greetings.bye", "Till next time");\nmanager.addAnswer("en", "greetings.bye", "see you soon!");\nmanager.addAnswer("en", "greetings.hello", "Hey there!");\nmanager.addAnswer("en", "greetings.hello", "Greetings!");\n\n// Train and save the model.\n(async () => {\n  await manager.train();\n  manager.save();\n  const response = await manager.process("en", "I should go now");\n  console.log(response);\n})();\n')),(0,a.kt)("p",null,"This produces the following result in a console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{ utterance: 'I should go now',\n  locale: 'en',\n  languageGuessed: false,\n  localeIso2: 'en',\n  language: 'English',\n  domain: 'default',\n  classifications:\n   [ { label: 'greetings.bye', value: 0.698219120207268 },\n     { label: 'None', value: 0.30178087979273216 },\n     { label: 'greetings.hello', value: 0 } ],\n  intent: 'greetings.bye',\n  score: 0.698219120207268,\n  entities:\n   [ { start: 12,\n       end: 14,\n       len: 3,\n       accuracy: 0.95,\n       sourceText: 'now',\n       utteranceText: 'now',\n       entity: 'datetime',\n       resolution: [Object] } ],\n  sentiment:\n   { score: 1,\n     comparative: 0.25,\n     vote: 'positive',\n     numWords: 4,\n     numHits: 2,\n     type: 'senticon',\n     language: 'en' },\n  actions: [],\n  srcAnswer: 'Till next time',\n  answer: 'Till next time' }\n")))}p.isMDXComponent=!0}}]);