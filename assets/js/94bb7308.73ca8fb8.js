"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[3890],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(t),u=r,g=l["".concat(d,".").concat(u)]||l[u]||c[u]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const i={},o="NER Manager",s={unversionedId:"ner-manager",id:"version-v3/ner-manager",title:"NER Manager",description:"The Named Entity Recognition manager is able to store an structure of entities and options of the entity for each language.",source:"@site/versioned_docs/version-v3/ner-manager.md",sourceDirName:".",slug:"/ner-manager",permalink:"/v3/ner-manager",draft:!1,tags:[],version:"v3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microsoft Bot Framwork",permalink:"/v3/microsoft-bot-framework"},next:{title:"NLP Manager",permalink:"/v3/nlp-manager"}},d={},m=[{value:"Enum Named Entities",id:"enum-named-entities",level:2},{value:"Regular Expression Named Entities",id:"regular-expression-named-entities",level:2},{value:"Trim Named Entities",id:"trim-named-entities",level:2},{value:"Utterances with duplicated Entities",id:"utterances-with-duplicated-entities",level:2}],p={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ner-manager"},"NER Manager"),(0,r.kt)("p",null,"The Named Entity Recognition manager is able to store an structure of entities and options of the entity for each language.\nThen, given an utterance and the language, is able to search the options of the entity inside the utterance, and return a list\nof the bests substrings. This is done using a threshold for the accuracy, by default the accuracy is 0.8 but you can provide it in the options when creating the instance."),(0,r.kt)("h2",{id:"enum-named-entities"},"Enum Named Entities"),(0,r.kt)("p",null,"It support Enum Named Entities: Named entities where you define options, and the possible text for each option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NerManager } = require('node-nlp');\n\nconst manager = new NerManager({ threshold: 0.8 });\nmanager.addNamedEntityText(\n  'hero',\n  'spiderman',\n  ['en'],\n  ['Spiderman', 'Spider-man'],\n);\nmanager.addNamedEntityText(\n  'hero',\n  'iron man',\n  ['en'],\n  ['iron man', 'iron-man'],\n);\nmanager.addNamedEntityText('hero', 'thor', ['en'], ['Thor']);\nmanager.addNamedEntityText(\n  'food',\n  'burguer',\n  ['en'],\n  ['Burguer', 'Hamburguer'],\n);\nmanager.addNamedEntityText('food', 'pizza', ['en'], ['pizza']);\nmanager.addNamedEntityText('food', 'pasta', ['en'], ['Pasta', 'spaghetti']);\nmanager.findEntities(\n  'I saw spederman eating speghetti in the city',\n  'en',\n).then(entities => {\n  // ...\n})\n// value is [ { start: 6, end: 15, levenshtein: 1, accuracy: 0.8888888888888888, option: 'spiderman',\n//  sourceText: 'Spiderman', entity: 'hero', utteranceText: 'spederman' },\n//  { start: 23, end: 32, levenshtein: 1, accuracy: 0.8888888888888888, option: 'pasta',\n//  sourceText: 'spaghetti', entity: 'food', utteranceText: 'speghetti' } ]\n")),(0,r.kt)("h2",{id:"regular-expression-named-entities"},"Regular Expression Named Entities"),(0,r.kt)("p",null,"It also support Regular Expression entities"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NerManager } = require('node-nlp');\n\nconst manager = new NerManager({ threshold: 0.8 });\nmanager.addNamedEntityText(\n  'hero',\n  'spiderman',\n  ['en'],\n  ['Spiderman', 'Spider-man'],\n);\nmanager.addNamedEntityText(\n  'hero',\n  'iron man',\n  ['en'],\n  ['iron man', 'iron-man'],\n);\nmanager.addNamedEntityText('hero', 'thor', ['en'], ['Thor']);\nmanager.addNamedEntityText(\n  'food',\n  'burguer',\n  ['en'],\n  ['Burguer', 'Hamburguer'],\n);\nmanager.addNamedEntityText('food', 'pizza', ['en'], ['pizza']);\nmanager.addNamedEntityText('food', 'pasta', ['en'], ['Pasta', 'spaghetti']);\nconst entity = manager.addNamedEntity('email', 'regex');\nentity.addRegex('en', /\\b(\\w[-._\\w]*\\w@\\w[-._\\w]*\\w\\.\\w{2,3})\\b/gi);\nmanager.findEntities(\n  'I saw spiderman eating speghetti in the city and his mail is spiderman@gmial.com',\n  'en',\n).then(entities => console.log(entities));\n// [ { start: 6,\n//     end: 15,\n//     levenshtein: 0,\n//     accuracy: 1,\n//     option: 'spiderman',\n//     sourceText: 'Spiderman',\n//     entity: 'hero',\n//     utteranceText: 'spiderman' },\n//   { start: 23,\n//     end: 32,\n//     levenshtein: 1,\n//     accuracy: 0.8888888888888888,\n//     option: 'pasta',\n//     sourceText: 'spaghetti',\n//     entity: 'food',\n//     utteranceText: 'speghetti' },\n//   { start: 61,\n//     end: 80,\n//     accuracy: 1,\n//     sourceText: 'spiderman@gmial.com',\n//     utteranceText: 'spiderman@gmial.com',\n//     entity: 'email' } ]\n")),(0,r.kt)("h2",{id:"trim-named-entities"},"Trim Named Entities"),(0,r.kt)("p",null,"It supports entities that works trimming text conditions, like text between two words.\nIt supports 7 different conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Between"),(0,r.kt)("li",{parentName:"ul"},"After"),(0,r.kt)("li",{parentName:"ul"},"After First"),(0,r.kt)("li",{parentName:"ul"},"After Last"),(0,r.kt)("li",{parentName:"ul"},"Before"),(0,r.kt)("li",{parentName:"ul"},"Before First"),(0,r.kt)("li",{parentName:"ul"},"Before Last")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NerManager } = require('node-nlp');\n\nconst manager = new NerManager({ threshold: 0.8 });\nconst fromEntity = manager.addNamedEntity('fromEntity', 'trim');\nfromEntity.addBetweenCondition('en', 'from', 'to');\nfromEntity.addAfterLastCondition('en', 'to');\nconst toEntity = manager.addNamedEntity('toEntity', 'trim');\nfromEntity.addBetweenCondition('en', 'to', 'from');\nfromEntity.addAfterLastCondition('en', 'from');\nmanager.findEntities(\n  'I want to travel from Barcelona to Madrid',\n  'en',\n).then(entities => console.log(entities));\n// [ { type: 'between',\n//     start: 22,\n//     end: 31,\n//     accuracy: 1,\n//     sourceText: 'Barcelona',\n//     utteranceText: 'Barcelona',\n//     entity: 'fromEntity' },\n//   { type: 'afterLast',\n//     start: 35,\n//     end: 41,\n//     accuracy: 0.99,\n//     sourceText: 'Madrid',\n//     utteranceText: 'Madrid',\n//     entity: 'fromEntity' },\n//   { type: 'between',\n//     start: 10,\n//     end: 16,\n//     accuracy: 1,\n//     sourceText: 'travel',\n//     utteranceText: 'travel',\n//     entity: 'fromEntity' } ]\n")),(0,r.kt)("h2",{id:"utterances-with-duplicated-entities"},"Utterances with duplicated Entities"),(0,r.kt)("p",null,'Utterances with more than one entity with the same name are supported, providing an "allow list" with numbered entity names.'),(0,r.kt)("p",null,'The "numbered entity" format must be in the form ',(0,r.kt)("inlineCode",{parentName:"p"},"${entityName}_${integer}"),'. E.g. "hero',"_",'1", "food',"_",'2", etc.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { NerManager } = require('node-nlp');\n\nconst manager = new NerManager();\n\nmanager.addNamedEntityText('hero', 'spiderman', ['en'], ['Spider-man']);\nmanager.addNamedEntityText('hero', 'iron man', ['en'], ['ironman']);\nmanager.addNamedEntityText('food', 'pizza', ['en'], ['pizza']);\nmanager.addNamedEntityText('food', 'pasta', ['en'], ['spaghetti']);\n\nconst entities = manager.findEntities(\n  'I saw spiderman eating spaghetti and ironman eating pizza',\n  'en',\n  ['hero_1', 'hero_2', 'food_1', 'food_2'],\n);\n\n// entities = [\n//   {\n//     entity: \"hero_1\",\n//     option: \"spiderman\",\n//     utteranceText: \"spiderman\",\n//     ...\n//   },\n//   {\n//     entity: \"food_1\",\n//     option: \"pasta\",\n//     utteranceText: \"spaghetti\",\n//     ...\n//   },\n//   {\n//     entity: \"hero_2\",\n//     option: \"iron man\",\n//     utteranceText: \"ironman\",\n//     ...\n//   },\n//   {\n//     entity: \"food_2\",\n//     option: \"pizza\",\n//     utteranceText: \"pizza\",\n//     ...\n//   }\n// ]\n")))}c.isMDXComponent=!0}}]);