"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[2925],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,s=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=c(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return t?a.createElement(d,i(i({ref:e},u),{},{components:t})):a.createElement(d,i({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2589:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},i="Integration with Duckling",o={unversionedId:"ner/builtin-duckling",id:"ner/builtin-duckling",title:"Integration with Duckling",description:"Instead of using the existing builtin entity extraction, you can integrate with duckling.",source:"@site/docs/08-ner/03-builtin-duckling.md",sourceDirName:"08-ner",slug:"/ner/builtin-duckling",permalink:"/ner/builtin-duckling",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Builtin Entity Extraction",permalink:"/ner/builtin-entity-extraction"},next:{title:"The Database class",permalink:"/persistence/database"}},s={},c=[{value:"Language support",id:"language-support",level:2},{value:"How to integrate with duckling",id:"how-to-integrate-with-duckling",level:2},{value:"Email Extraction",id:"email-extraction",level:2},{value:"Phone Number Extraction",id:"phone-number-extraction",level:2},{value:"URL Extraction",id:"url-extraction",level:2},{value:"Number Extraction",id:"number-extraction",level:2},{value:"Ordinal Extraction",id:"ordinal-extraction",level:2},{value:"Dimension Extraction",id:"dimension-extraction",level:2},{value:"Quantity Extraction",id:"quantity-extraction",level:2},{value:"Amount of Money Extraction",id:"amount-of-money-extraction",level:2},{value:"Date Extraction",id:"date-extraction",level:2}],u={toc:c};function g(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-with-duckling"},"Integration with Duckling"),(0,r.kt)("p",null,"Instead of using the existing builtin entity extraction, you can integrate with duckling."),(0,r.kt)("h2",{id:"language-support"},"Language support"),(0,r.kt)("p",null,"Those are the languages supported using Duckling or not using it:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Language"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Locale"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Without Duckling"),(0,r.kt)("th",{parentName:"tr",align:"center"},"With Duckling"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Arabic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ar"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Armenian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"hy"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Basque"),(0,r.kt)("td",{parentName:"tr",align:"center"},"eu"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bengali"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bn"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Catalan"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ca"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chinese"),(0,r.kt)("td",{parentName:"tr",align:"center"},"zh"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Czech"),(0,r.kt)("td",{parentName:"tr",align:"center"},"cs"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Danish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"da"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Dutch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"nl"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"English"),(0,r.kt)("td",{parentName:"tr",align:"center"},"en"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Farsi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"fa"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Finnish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"fi"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"French"),(0,r.kt)("td",{parentName:"tr",align:"center"},"fr"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Galician"),(0,r.kt)("td",{parentName:"tr",align:"center"},"gl"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"German"),(0,r.kt)("td",{parentName:"tr",align:"center"},"de"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Greek"),(0,r.kt)("td",{parentName:"tr",align:"center"},"el"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hindi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"hi"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hungarian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"hu"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Indonesian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Italian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"it"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Irish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ga"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Japanese"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ja"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Korean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ko"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Lithuanian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"lt"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Malay"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ms"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Nepali"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ne"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Norwegian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Polish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"pl"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Portuguese"),(0,r.kt)("td",{parentName:"tr",align:"center"},"pt"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Romanian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ro"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Russian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ru"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Serbian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sr"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Spanish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"es"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X"),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Swedish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sv"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tamil"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ta"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Thai"),(0,r.kt)("td",{parentName:"tr",align:"center"},"th"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"*","1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Tagalog"),(0,r.kt)("td",{parentName:"tr",align:"center"},"tl"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Turkish"),(0,r.kt)("td",{parentName:"tr",align:"center"},"tr"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ukrainian"),(0,r.kt)("td",{parentName:"tr",align:"center"},"uk"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,r.kt)("p",null,"*","1: Thai is not supported by duckling, but there exists a repo in github with an implementation of the thai rules of duckling: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pantuwong/thai_duckling"},"https://github.com/pantuwong/thai_duckling")),(0,r.kt)("h2",{id:"how-to-integrate-with-duckling"},"How to integrate with duckling"),(0,r.kt)("p",null,"For this you'll need to have an instance of duckling up and running, and the integration is through the REST API.\nYou can go to the official Duckling page for instructions on how to run it: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/duckling"},"https://github.com/facebook/duckling")),(0,r.kt)("p",null,"You can use duckling by setting the property ducklingUrl parameter of the NER settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    ner: { ducklingUrl: "https://ducklinghost/parse" },\n  });\n  manager.addLanguage(["en"]);\n  const result = await manager.process("twenty five euros");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"Also you can set the environment variable DUCKLING_URL with the URL and set the property useDuckling of the NER to true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({ forceNER: true, ner: { useDuckling: true } });\n  manager.addLanguage(["en"]);\n  const result = await manager.process("twenty five euros");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,'The answer will include a property "sourceEntities" with the original response from duckling, and a property "entities" with the processed entities.'),(0,r.kt)("h2",{id:"email-extraction"},"Email Extraction"),(0,r.kt)("p",null,"It can identify and extract valid emails accounts, this works for any language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process(\n    "My email is something@somehost.com please write me"\n  );\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "My email is something@somehost.com please write me",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 12,\n      "end": 33,\n      "len": 22,\n      "accuracy": 0.95,\n      "sourceText": "something@somehost.com",\n      "utteranceText": "something@somehost.com",\n      "entity": "email",\n      "resolution": {\n        "value": "something@somehost.com"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "something@somehost.com",\n      "start": 12,\n      "value": {\n        "value": "something@somehost.com"\n      },\n      "end": 34,\n      "dim": "email",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0.75,\n    "comparative": 0.08333333333333333,\n    "vote": "positive",\n    "numWords": 9,\n    "numHits": 2,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"phone-number-extraction"},"Phone Number Extraction"),(0,r.kt)("p",null,"It can identify and extract phone numbers from the utterances, this works for any language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process(\n    "So here is my number +1 541-754-3010 callme maybe"\n  );\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "So here is my number +1 541-754-3010 callme maybe",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 21,\n      "end": 35,\n      "len": 15,\n      "accuracy": 0.95,\n      "sourceText": "+1 541-754-3010",\n      "utteranceText": "+1 541-754-3010",\n      "entity": "phonenumber",\n      "resolution": {\n        "value": "(+1) 5417543010"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "+1 541-754-3010",\n      "start": 21,\n      "value": {\n        "value": "(+1) 5417543010"\n      },\n      "end": 36,\n      "dim": "phone-number",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0.125,\n    "comparative": 0.011363636363636364,\n    "vote": "positive",\n    "numWords": 11,\n    "numHits": 3,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"url-extraction"},"URL Extraction"),(0,r.kt)("p",null,"It can identify and extract URLs from the utterances, this works for any language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("The url is https://something.com");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "The url is https://something.com",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 11,\n      "end": 31,\n      "len": 21,\n      "accuracy": 0.95,\n      "sourceText": "https://something.com",\n      "utteranceText": "https://something.com",\n      "entity": "url",\n      "resolution": {\n        "value": "https://something.com",\n        "domain": "something.com"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "https://something.com",\n      "start": 11,\n      "value": {\n        "domain": "something.com",\n        "value": "https://something.com"\n      },\n      "end": 32,\n      "dim": "url",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 6,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"number-extraction"},"Number Extraction"),(0,r.kt)("p",null,"It can identify and extract numbers. This works for any language, and the numbers can be integer or floats."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("This is 12");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "This is 12",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 8,\n      "end": 9,\n      "len": 2,\n      "accuracy": 0.95,\n      "sourceText": "12",\n      "utteranceText": "12",\n      "entity": "number",\n      "resolution": {\n        "strValue": "12",\n        "value": 12,\n        "subtype": "integer"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "12",\n      "start": 8,\n      "value": {\n        "value": 12,\n        "type": "value"\n      },\n      "end": 10,\n      "dim": "number",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 3,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("p",null,"The numbers can be also be text written, but this only works for the supported languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("This is twelve");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "This is twelve",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 8,\n      "end": 13,\n      "len": 6,\n      "accuracy": 0.95,\n      "sourceText": "twelve",\n      "utteranceText": "twelve",\n      "entity": "number",\n      "resolution": {\n        "strValue": "12",\n        "value": 12,\n        "subtype": "integer"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "twelve",\n      "start": 8,\n      "value": {\n        "value": 12,\n        "type": "value"\n      },\n      "end": 14,\n      "dim": "number",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 3,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"ordinal-extraction"},"Ordinal Extraction"),(0,r.kt)("p",null,"It can identify and extract ordinal numbers. This works only for the supported languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("He was 2nd");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "He was 2nd",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 7,\n      "end": 9,\n      "len": 3,\n      "accuracy": 0.95,\n      "sourceText": "2nd",\n      "utteranceText": "2nd",\n      "entity": "ordinal",\n      "resolution": {\n        "strValue": "2",\n        "value": 2,\n        "subtype": "integer"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "2nd",\n      "start": 7,\n      "value": {\n        "value": 2,\n        "type": "value"\n      },\n      "end": 10,\n      "dim": "ordinal",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 3,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"dimension-extraction"},"Dimension Extraction"),(0,r.kt)("p",null,"It can identify and extract different dimensions, like distance or temperature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("120km");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "120km",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 0,\n      "end": 4,\n      "len": 5,\n      "accuracy": 0.95,\n      "sourceText": "120km",\n      "utteranceText": "120km",\n      "entity": "dimension",\n      "resolution": {\n        "strValue": "120",\n        "value": 120,\n        "unit": "kilometre",\n        "subtype": "distance"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "120km",\n      "start": 0,\n      "value": {\n        "value": 120,\n        "type": "value",\n        "unit": "kilometre"\n      },\n      "end": 5,\n      "dim": "distance",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 1,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"quantity-extraction"},"Quantity Extraction"),(0,r.kt)("p",null,'It can identify and extract quantities of producs, example "three cups of sugar". It identifies the amount (3), the unit (cup) and the product (sugar).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("three cups of sugar");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "three cups of sugar",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 0,\n      "end": 18,\n      "len": 19,\n      "accuracy": 0.95,\n      "sourceText": "three cups of sugar",\n      "utteranceText": "three cups of sugar",\n      "entity": "quantity",\n      "resolution": {\n        "strValue": "3",\n        "value": 3,\n        "unit": "cup",\n        "product": "sugar"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "three cups of sugar",\n      "start": 0,\n      "value": {\n        "value": 3,\n        "type": "value",\n        "product": "sugar",\n        "unit": "cup"\n      },\n      "end": 19,\n      "dim": "quantity",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0.25,\n    "comparative": 0.0625,\n    "vote": "positive",\n    "numWords": 4,\n    "numHits": 1,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"amount-of-money-extraction"},"Amount of Money Extraction"),(0,r.kt)("p",null,"It can extract amounts of money with the currenty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("It was 42.5\u20ac");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "It was 42.5\u20ac",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 7,\n      "end": 11,\n      "len": 5,\n      "accuracy": 0.95,\n      "sourceText": "42.5\u20ac",\n      "utteranceText": "42.5\u20ac",\n      "entity": "currency",\n      "resolution": {\n        "strValue": "42.5",\n        "value": 42.5,\n        "unit": "EUR"\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "42.5\u20ac",\n      "start": 7,\n      "value": {\n        "value": 42.5,\n        "type": "value",\n        "unit": "EUR"\n      },\n      "end": 12,\n      "dim": "amount-of-money",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 4,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')),(0,r.kt)("h2",{id:"date-extraction"},"Date Extraction"),(0,r.kt)("p",null,"It can identify and extract dates and times."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\n(async () => {\n  let manager = new NlpManager({\n    languages: ["en"],\n    forceNER: true,\n    ner: { useDuckling: true },\n  });\n  const result = await manager.process("12/12/2019 at 9am");\n  console.log(JSON.stringify(result, null, 2));\n})();\n')),(0,r.kt)("p",null,"The answer will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "utterance": "12/12/2019 at 9am",\n  "locale": "en",\n  "languageGuessed": false,\n  "localeIso2": "en",\n  "language": "English",\n  "classifications": [\n    {\n      "label": "None",\n      "value": 1\n    }\n  ],\n  "intent": "None",\n  "score": 1,\n  "entities": [\n    {\n      "start": 0,\n      "end": 16,\n      "len": 17,\n      "accuracy": 0.95,\n      "sourceText": "12/12/2019 at 9am",\n      "utteranceText": "12/12/2019 at 9am",\n      "entity": "date",\n      "resolution": {\n        "value": "2019-12-12T09:00:00.000+00:00",\n        "grain": "hour",\n        "values": [\n          {\n            "value": "2019-12-12T09:00:00.000+00:00",\n            "grain": "hour",\n            "type": "value"\n          }\n        ]\n      }\n    }\n  ],\n  "sourceEntities": [\n    {\n      "body": "12/12/2019 at 9am",\n      "start": 0,\n      "value": {\n        "values": [\n          {\n            "value": "2019-12-12T09:00:00.000+00:00",\n            "grain": "hour",\n            "type": "value"\n          }\n        ],\n        "value": "2019-12-12T09:00:00.000+00:00",\n        "grain": "hour",\n        "type": "value"\n      },\n      "end": 17,\n      "dim": "time",\n      "latent": false\n    }\n  ],\n  "sentiment": {\n    "score": 0,\n    "comparative": 0,\n    "vote": "neutral",\n    "numWords": 5,\n    "numHits": 0,\n    "type": "senticon",\n    "language": "en"\n  },\n  "actions": []\n}\n')))}g.isMDXComponent=!0}}]);