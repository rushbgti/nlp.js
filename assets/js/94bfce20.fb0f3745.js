"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[5968],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return a?t.createElement(u,o(o({ref:n},m),{},{components:a})):t.createElement(u,o({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},493:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={},o="NLP Manager",s={unversionedId:"nlp/nlp-manager",id:"nlp/nlp-manager",title:"NLP Manager",description:"The NlpManager is able to manage several languages. It manages the named entities, and trains the NLP classifier for each language. Once trained, NlpManager is ready to process utterances. It will try to guess the language, if one isn't provided when processing an utterance. During processing, the NlpManager will:",source:"@site/docs/11-nlp/01-nlp-manager.md",sourceDirName:"11-nlp",slug:"/nlp/nlp-manager",permalink:"/nlp/nlp-manager",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Database class",permalink:"/persistence/database"},next:{title:"Log Training Progress",permalink:"/nlp/log-training-process"}},l={},p=[{value:"Saving and Loading Models",id:"saving-and-loading-models",level:2},{value:"Save/Load Using Files",id:"saveload-using-files",level:3},{value:"Import/Export Using JSON",id:"importexport-using-json",level:3},{value:"Context",id:"context",level:2},{value:"Transformers",id:"transformers",level:2}],m={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nlp-manager"},"NLP Manager"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager")," is able to manage several languages. It manages the named entities, and trains the NLP classifier for each language. Once trained, ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager")," is ready to process utterances. It will try to guess the language, if one isn't provided when processing an utterance. During processing, the ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager")," will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identify the language"),(0,r.kt)("li",{parentName:"ul"},"Classify the utterance, using Machine Learning (ML)"),(0,r.kt)("li",{parentName:"ul"},"Find named, and/or default entities in the utterance"),(0,r.kt)("li",{parentName:"ul"},"Limit entities to those described with variables in the highest scoring intent, ",(0,r.kt)("em",{parentName:"li"},"if present")," (variable syntax for intents uses wildcard operators ",(0,r.kt)("inlineCode",{parentName:"li"},"%entity_name%"),")"),(0,r.kt)("li",{parentName:"ul"},"Replace variables in the best answer with matched entities (variable syntax for answers uses handlebars: ",(0,r.kt)("inlineCode",{parentName:"li"},"{{entity_name}}"),")"),(0,r.kt)("li",{parentName:"ul"},"Analyze sentiment"),(0,r.kt)("li",{parentName:"ul"},"Return the intent, entities, classifications, associated score(s), answer, and sentiment")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that periods are not supported in the entity names when using them as variables. Don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{entity.name}}"),". Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{{entity_name}}")," instead. The intent variable names must match the answer variable names.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nconst manager = new NlpManager({ languages: ["en"] });\nmanager.addNamedEntityText(\n  "hero",\n  "spiderman",\n  ["en"],\n  ["Spiderman", "Spider-man"]\n);\nmanager.addNamedEntityText(\n  "hero",\n  "iron man",\n  ["en"],\n  ["iron man", "iron-man"]\n);\nmanager.addNamedEntityText("hero", "thor", ["en"], ["Thor"]);\nmanager.addNamedEntityText(\n  "food",\n  "burguer",\n  ["en"],\n  ["Burguer", "Hamburguer"]\n);\nmanager.addNamedEntityText("food", "pizza", ["en"], ["pizza"]);\nmanager.addNamedEntityText("food", "pasta", ["en"], ["Pasta", "spaghetti"]);\nmanager.addDocument("en", "I saw %hero% eating %food%", "sawhero");\nmanager.addDocument(\n  "en",\n  "I have seen %hero%, he was eating %food%",\n  "sawhero"\n);\nmanager.addDocument("en", "I want to eat %food%", "wanteat");\nawait manager.train();\nmanager\n  .process("I saw spiderman eating spaghetti today in the city!")\n  .then((result) => console.log(result));\n// { locale: \'en\',\n//   localeIso2: \'en\',\n//   language: \'English\',\n//   utterance: \'I saw spiderman eating spaghetti today in the city!\',\n//   classification:\n//    [ { label: \'sawhero\', value: 0.9920519933583061 },\n//      { label: \'wanteat\', value: 0.00794800664169383 } ],\n//   intent: \'sawhero\',\n//   score: 0.9920519933583061,\n//   entities:\n//    [ { start: 6,\n//        end: 15,\n//        levenshtein: 0,\n//        accuracy: 1,\n//        option: \'spiderman\',\n//        sourceText: \'Spiderman\',\n//        entity: \'hero\',\n//        utteranceText: \'spiderman\' },\n//      { start: 23,\n//        end: 32,\n//        levenshtein: 0,\n//        accuracy: 1,\n//        option: \'pasta\',\n//        sourceText: \'spaghetti\',\n//        entity: \'food\',\n//        utteranceText: \'spaghetti\' } ],\n//   sentiment:\n//    { score: 0.708,\n//      comparative: 0.07866666666666666,\n//      vote: \'positive\',\n//      numWords: 9,\n//      numHits: 2,\n//      type: \'senticon\',\n//      language: \'en\' } }\n')),(0,r.kt)("h2",{id:"saving-and-loading-models"},"Saving and Loading Models"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager")," has support for saving, and loading the models of trained managers. These models include the thetas that are produced by the ML algorithms, so they can be loaded into instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager")," without having to train them again."),(0,r.kt)("p",null,"In addition to reducing startup time, this can be useful when a system doesn't have write permissions to local disk, or in cases where we benefit from deterministic results, such as A/B testing (or testing in general)."),(0,r.kt)("p",null,"There are two approaches to saving and loading models: ",(0,r.kt)("a",{parentName:"p",href:"#saveload-using-files"},"using files"),", and ",(0,r.kt)("a",{parentName:"p",href:"#importexport-using-json"},"using JSON"),"."),(0,r.kt)("h3",{id:"saveload-using-files"},"Save/Load Using Files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager.save")," writes a model file to disk, and ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager.load")," reads a model file from disk."),(0,r.kt)("p",null,"By default, models are saved into ",(0,r.kt)("inlineCode",{parentName:"p"},"modelFileName")," after training:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nconst manager = new NlpManager({ languages: ["en"], modelFileName: filename });\nawait manager.train();\n')),(0,r.kt)("p",null,"Saving can also be done manually with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.save()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nconst manager = new NlpManager({ languages: ["en"], autoSave: false });\nawait manager.train();\nmanager.save(filename);\n')),(0,r.kt)("p",null,"Loading a model file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nmanager = new NlpManager();\nmanager.load(filename);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if no filename is provided, './model.nlp' will be used by default.")),(0,r.kt)("h3",{id:"importexport-using-json"},"Import/Export Using JSON"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager.export")," returns a model in JSON format, and ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManager.import")," reads a model in JSON format. When exporting a model, you can choose whether or not to minify it."),(0,r.kt)("p",null,"Exporting a model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager } = require("node-nlp");\n\nconst minified = true;\nconst manager = new NlpManager();\n// ...\nawait manager.train();\nconst data = manager.export(minified);\n')),(0,r.kt)("p",null,"Importing a model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const fs = require("fs");\nconst { NlpManager } = require("node-nlp");\n\nconst data = fs.readFileSync("model.nlp", "utf8");\nconst manager = new NlpManager();\nmanager.import(data);\n// ...\n')),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"You can also provide a context to ",(0,r.kt)("inlineCode",{parentName:"p"},"NlpManger.process")," so the NLG changes its behaviour based on the context."),(0,r.kt)("p",null,'In this example, the manager chooses, "Till next time, {{name}}!" as the answer, and is able to use the ',(0,r.kt)("inlineCode",{parentName:"p"},"%name%"),' in the answer because context from the greeting is provided. The final result is, "Till next time, John!".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NlpManager, ConversationContext } = require("node-nlp");\n\nconst manager = new NlpManager({ languages: ["en"] });\nconst context = new ConversationContext();\n\nmanager.addDocument("en", "Hello my name is %name%", "greeting.hello");\nmanager.addDocument("en", "I have to go", "greeting.bye");\nmanager.addAnswer("en", "greeting.hello", "Hey there!");\nmanager.addAnswer("en", "greeting.bye", "Till next time, {{name}}!");\n\nmanager\n  .train()\n  .then((result) => manager.process("en", "Hello my name is John", context))\n  .then((result) => manager.process("en", "I have to go", context))\n  .then((result) => console.log(result.answer));\n')),(0,r.kt)("h2",{id:"transformers"},"Transformers"),(0,r.kt)("p",null,"The NLPManager constructor accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"processTransformer")," function, which can be used to intercept, and modify the output of the manager's ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," function. When present, it will run after ",(0,r.kt)("inlineCode",{parentName:"p"},"process")," completes, and the result of this function is what will be returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"process"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const manager = new NlpManager({\n  processTransformer: async (originalProcessOutput) => {\n    return {\n      ...originalProcessOutput,\n      ...{\n        anything: "you want",\n      },\n    };\n  },\n});\n')),(0,r.kt)("p",null,"or with Promises:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const manager = new NlpManager({\n  processTransformer: (originalProcessOutput) =>\n    new Promise((resolve, reject) => {\n      originalProcessOutput.context = "modify or add properties";\n      resolve(originalProcessOutput);\n    }),\n});\n')),(0,r.kt)("p",null,"it can be synchronous, too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const manager = new NlpManager({\n  processTransformer: function (originalProcessOutput) {\n    return Object.assign(originalProcessOutput, { anything: "you want" });\n  },\n});\n')))}c.isMDXComponent=!0}}]);