"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[8693],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),o=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(a),f=r,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return a?t.createElement(d,l(l({ref:n},c),{},{components:a})):t.createElement(d,l({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2073:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=a(7462),r=(a(7294),a(3905));const i={},l="Bayes NLU",s={unversionedId:"nlu/bayes-nlu",id:"nlu/bayes-nlu",title:"Bayes NLU",description:"You can train a Bayes NLU classifier (indicating language) with utterances and their intents.",source:"@site/docs/07-nlu/03-bayes-nlu.md",sourceDirName:"07-nlu",slug:"/nlu/bayes-nlu",permalink:"/nlu/bayes-nlu",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Brain NLU",permalink:"/nlu/brain-nlu"},next:{title:"Binary Relevance NLU",permalink:"/nlu/binary-relevance-nlu"}},u={},o=[],c={toc:o};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bayes-nlu"},"Bayes NLU"),(0,r.kt)("p",null,"You can train a Bayes NLU classifier (indicating language) with utterances and their intents.\nThen you can give a different utterance, and get the classifications for each intent, sorted descending by the score value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { BayesNLU } = require('node-nlp');\n\nasync function main() {\n  const classifier = new BayesNLU({ language: 'fr' });\n  classifier.add('Bonjour', 'greet');\n  classifier.add('bonne nuit', 'greet');\n  classifier.add('Bonsoir', 'greet');\n  classifier.add(\"J'ai perdu mes cl\xe9s\", 'keys');\n  classifier.add('Je ne trouve pas mes cl\xe9s', 'keys');\n  classifier.add('Je ne me souviens pas o\xf9 sont mes cl\xe9s', 'keys');\n  await classifier.train();\n  const classifications = classifier.getClassifications('o\xf9 sont mes cl\xe9s');\n  console.log(classifications);\n  // [ { label: 'keys', value: 0.9878048780487805 },\n  // { label: 'greet', value: 0.01219512195121951 } ]\n}\nmain();\n")),(0,r.kt)("p",null,"Or you can get only the best classification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { BayesNLU } = require('node-nlp');\n\nasync function main() {\n  const classifier = new BayesNLU({ language: 'fr' });\n  classifier.add('Bonjour', 'greet');\n  classifier.add('bonne nuit', 'greet');\n  classifier.add('Bonsoir', 'greet');\n  classifier.add(\"J'ai perdu mes cl\xe9s\", 'keys');\n  classifier.add('Je ne trouve pas mes cl\xe9s', 'keys');\n  classifier.add('Je ne me souviens pas o\xf9 sont mes cl\xe9s', 'keys');\n  await classifier.train();\n  const classifications = classifier.getBestClassification('o\xf9 sont mes cl\xe9s');\n  console.log(classifications);\n  // { label: 'keys', value: 0.9878048780487805 }\n}\nmain();\n")),(0,r.kt)("p",null,"Currently 40 languages are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arabic (ar)"),(0,r.kt)("li",{parentName:"ul"},"Armenian (hy)"),(0,r.kt)("li",{parentName:"ul"},"Basque (eu)"),(0,r.kt)("li",{parentName:"ul"},"Bengali (bn)"),(0,r.kt)("li",{parentName:"ul"},"Catala (ca)"),(0,r.kt)("li",{parentName:"ul"},"Chinese (zh)"),(0,r.kt)("li",{parentName:"ul"},"Czech (cs)"),(0,r.kt)("li",{parentName:"ul"},"Danish (da)"),(0,r.kt)("li",{parentName:"ul"},"Dutch (nl)"),(0,r.kt)("li",{parentName:"ul"},"English (en)"),(0,r.kt)("li",{parentName:"ul"},"Farsi (fa)"),(0,r.kt)("li",{parentName:"ul"},"Finnish (fi)"),(0,r.kt)("li",{parentName:"ul"},"French (fr)"),(0,r.kt)("li",{parentName:"ul"},"Galician (gl)"),(0,r.kt)("li",{parentName:"ul"},"German (de)"),(0,r.kt)("li",{parentName:"ul"},"Greek (el)"),(0,r.kt)("li",{parentName:"ul"},"Hindi (hi)"),(0,r.kt)("li",{parentName:"ul"},"Hungarian (hu)"),(0,r.kt)("li",{parentName:"ul"},"Indonesian (id)"),(0,r.kt)("li",{parentName:"ul"},"Irish (ga)"),(0,r.kt)("li",{parentName:"ul"},"Italian (it)"),(0,r.kt)("li",{parentName:"ul"},"Japanese (ja)"),(0,r.kt)("li",{parentName:"ul"},"Korean (ko)"),(0,r.kt)("li",{parentName:"ul"},"Lithuanian (lt)"),(0,r.kt)("li",{parentName:"ul"},"Malay (ms)"),(0,r.kt)("li",{parentName:"ul"},"Nepali (ne)"),(0,r.kt)("li",{parentName:"ul"},"Norwegian (no)"),(0,r.kt)("li",{parentName:"ul"},"Polish (pl)"),(0,r.kt)("li",{parentName:"ul"},"Portuguese (pt)"),(0,r.kt)("li",{parentName:"ul"},"Romanian (ro)"),(0,r.kt)("li",{parentName:"ul"},"Russian (ru)"),(0,r.kt)("li",{parentName:"ul"},"Serbian (sr)"),(0,r.kt)("li",{parentName:"ul"},"Slovene (sl)"),(0,r.kt)("li",{parentName:"ul"},"Spanish (es)"),(0,r.kt)("li",{parentName:"ul"},"Swedish (sv)"),(0,r.kt)("li",{parentName:"ul"},"Tagalog (tl)"),(0,r.kt)("li",{parentName:"ul"},"Tamil (ta)"),(0,r.kt)("li",{parentName:"ul"},"Thai (th)"),(0,r.kt)("li",{parentName:"ul"},"Turkish (tr)"),(0,r.kt)("li",{parentName:"ul"},"Ukrainian (uk)")))}p.isMDXComponent=!0}}]);