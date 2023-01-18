"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[9817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(t),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},s="Quick Start",i={unversionedId:"Quickstart/quickstart",id:"Quickstart/quickstart",title:"Quick Start",description:"Install the library",source:"@site/docs/02-Quickstart/01-quickstart.md",sourceDirName:"02-Quickstart",slug:"/Quickstart/quickstart",permalink:"/Quickstart/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NLP.js",permalink:"/"},next:{title:"Benchmarking",permalink:"/Quickstart/benchmarking"}},l={},p=[{value:"Install the library",id:"install-the-library",level:2},{value:"Create the code",id:"create-the-code",level:2},{value:"Extracting the corpus into a file",id:"extracting-the-corpus-into-a-file",level:2},{value:"Extracting the configuration into a file",id:"extracting-the-configuration-into-a-file",level:2},{value:"Creating your first pipeline",id:"creating-your-first-pipeline",level:2},{value:"Adding your first connector",id:"adding-your-first-connector",level:2},{value:"Extending your bot with the pipeline",id:"extending-your-bot-with-the-pipeline",level:2},{value:"Adding Multilanguage",id:"adding-multilanguage",level:2},{value:"Adding API and WebChat",id:"adding-api-and-webchat",level:2},{value:"Using Microsoft Bot Framework",id:"using-microsoft-bot-framework",level:2},{value:"Recognizing the bot name and the channel",id:"recognizing-the-bot-name-and-the-channel",level:2},{value:"One bot per connector",id:"one-bot-per-connector",level:2},{value:"Different port for Microsoft Bot Framework and Webchat",id:"different-port-for-microsoft-bot-framework-and-webchat",level:2},{value:"Adding logic to an intent",id:"adding-logic-to-an-intent",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("h2",{id:"install-the-library"},"Install the library"),(0,o.kt)("p",null,"At the folder where is your node project, install the basic library, that will install the core and basic plugins for working in backend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nlpjs/basic\n")),(0,o.kt)("h2",{id:"create-the-code"},"Create the code"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/01.basic"},"here"),".\nYou can create a file called index.js with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart({ use: ["Basic"] });\n  const nlp = dock.get("nlp");\n  nlp.addLanguage("en");\n  // Adds the utterances and intents for the NLP\n  nlp.addDocument("en", "goodbye for now", "greetings.bye");\n  nlp.addDocument("en", "bye bye take care", "greetings.bye");\n  nlp.addDocument("en", "okay see you later", "greetings.bye");\n  nlp.addDocument("en", "bye for now", "greetings.bye");\n  nlp.addDocument("en", "i must go", "greetings.bye");\n  nlp.addDocument("en", "hello", "greetings.hello");\n  nlp.addDocument("en", "hi", "greetings.hello");\n  nlp.addDocument("en", "howdy", "greetings.hello");\n\n  // Train also the NLG\n  nlp.addAnswer("en", "greetings.bye", "Till next time");\n  nlp.addAnswer("en", "greetings.bye", "see you soon!");\n  nlp.addAnswer("en", "greetings.hello", "Hey there!");\n  nlp.addAnswer("en", "greetings.hello", "Greetings!");\n  await nlp.train();\n  const response = await nlp.process("en", "I should go now");\n  console.log(response);\n})();\n')),(0,o.kt)("h2",{id:"extracting-the-corpus-into-a-file"},"Extracting the corpus into a file"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/02.filecorpus"},"here"),"\nYou can create the corpus as json files. The format of the json is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Name of the corpus",\n  "locale": "en-US",\n  "data": [\n    {\n      "intent": "agent.birthday",\n      "utterances": [\n        "when is your birthday",\n        "when do you celebrate your birthday",\n        "when were you born",\n        "when do you have birthday",\n        "date of your birthday"\n      ],\n      "answers": [\n        "Wait, are you planning a party for me? It\'s today! My birthday is today!",\n        "I\'m young. I\'m not sure of my birth date",\n        "I don\'t know my birth date. Most virtual agents are young, though, like me."\n      ]\n    },\n    ...\n  ]\n}\n')),(0,o.kt)("p",null,"So the new code will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart({ use: ["Basic"] });\n  const nlp = dock.get("nlp");\n  await nlp.addCorpus("./corpus-en.json");\n  await nlp.train();\n  const response = await nlp.process("en", "Who are you");\n  console.log(response);\n})();\n')),(0,o.kt)("h2",{id:"extracting-the-configuration-into-a-file"},"Extracting the configuration into a file"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/03.config"},"here"),"\nNow we can remove things that are configuration into a file."),(0,o.kt)("p",null,"Add a ",(0,o.kt)("em",{parentName:"p"},"conf.json")," file with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json"]\n    }\n  },\n  "use": ["Basic"]\n}\n')),(0,o.kt)("p",null,"And the new code will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart();\n  const nlp = dock.get("nlp");\n  await nlp.train();\n  const response = await nlp.process("en", "Who are you");\n  console.log(response);\n})();\n')),(0,o.kt)("p",null,"As you can see now we don't need to provide the plugins to dockStart, nor do we need to add the corpus manually."),(0,o.kt)("h2",{id:"creating-your-first-pipeline"},"Creating your first pipeline"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/04.firstpipeline"},"here")),(0,o.kt)("p",null,"Now create a ",(0,o.kt)("em",{parentName:"p"},"pipelines.md")," file with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# default\n\n## main\n\nnlp.train\n")),(0,o.kt)("p",null,"And remove the nlp.train() from the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  const dock = await dockStart();\n  const nlp = dock.get("nlp");\n  const response = await nlp.process("en", "Who are you");\n  console.log(response);\n})();\n')),(0,o.kt)("p",null,"We are defining a pipeline called ",(0,o.kt)("em",{parentName:"p"},"main")," and it will be executed after loading the configuration and mounting the plugins, so the train process will be executed automatically in the dockStart process."),(0,o.kt)("h2",{id:"adding-your-first-connector"},"Adding your first connector"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/05.consoleconnector"},"here"),"\nNow modify the ",(0,o.kt)("em",{parentName:"p"},"conf.json")," to also use the plugin called ",(0,o.kt)("em",{parentName:"p"},"ConsoleConnector"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json"]\n    }\n  },\n  "use": ["Basic", "ConsoleConnector"]\n}\n')),(0,o.kt)("p",null,"And in the ",(0,o.kt)("em",{parentName:"p"},"index.js")," you will only need the dockStart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  await dockStart();\n})();\n')),(0,o.kt)("p",null,"Now when you execute you can talk with your bot in the terminal, read the corpus to know what you can ask your bot."),(0,o.kt)("h2",{id:"extending-your-bot-with-the-pipeline"},"Extending your bot with the pipeline"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/06.javascriptpipelines"},"here"),'\nNow we will do two modifications:\nThe first if for our chatbot to write "Say something!" in the console when it starts.\nTo do that, we can change the pipeline ',(0,o.kt)("em",{parentName:"p"},"main")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'# default\n\n## main\n\nnlp.train\nconsole.say "Say something!"\n')),(0,o.kt)("p",null,'Also, we want the console to quit the chat process when we type "quit".\nTo end the process, the console plugin has a method called ',(0,o.kt)("em",{parentName:"p"},"exit"),".\nAnd we want to write the code in the pipeline in javascript, so this is what we add to the ",(0,o.kt)("em",{parentName:"p"},"pipelines.md")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"## console.hear\n\n// compiler=javascript\nif (message === 'quit') {\nreturn console.exit();\n}\nnlp.process();\nthis.say();\n")),(0,o.kt)("p",null,"To explain the pipeline better:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the pipeline is ",(0,o.kt)("em",{parentName:"li"},"console.hear")," because it's the name of the event that the console connector will raise when it hears something. If this event does not exists in the pipeline, then it will do the default action. The code inside the pipeline will be executed with the input that this method receives."),(0,o.kt)("li",{parentName:"ul"},'The line "// compiler=javascript" is specifying which compiler to use for the pipeline. The default compiler is very simple, but you can also write your pipelines in javascript or python (adding the corresponding plugin).'),(0,o.kt)("li",{parentName:"ul"},'"nlp.process()" is calling the ',(0,o.kt)("em",{parentName:"li"},"process")," method of the plugin ",(0,o.kt)("em",{parentName:"li"},"nlp"),". Notable here: this method returns a promise but you don't need to put the await in the pipelines, the await is automatically done. Also, no arguments are being provided: when the pipeline javascript compiler finds a method where we do not pass any argument, by default it adds the current input of the pipeline."),(0,o.kt)("li",{parentName:"ul"},'"this.say()" as the ',(0,o.kt)("em",{parentName:"li"},"console.hear")," is executed by the ",(0,o.kt)("em",{parentName:"li"},"console")," plugin, ",(0,o.kt)("em",{parentName:"li"},"this"),' refers to this plugin. As in the "nlp.process" we are not providing arguments, so the input is automatically provided.')),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"index.js")," file will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { dockStart } = require("@nlpjs/basic");\n\n(async () => {\n  await dockStart();\n})();\n')),(0,o.kt)("h2",{id:"adding-multilanguage"},"Adding Multilanguage"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/07.multilanguage"},"here"),"\nNow we want to add a corpus in spanish. First at all we must install the spanish language plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nlpjs/lang-es\n")),(0,o.kt)("p",null,"Then add the ",(0,o.kt)("em",{parentName:"p"},"LangEs")," plugin in the configuration, and of course the corpus to the corpora:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json", "./corpus-es.json"]\n    }\n  },\n  "use": ["Basic", "LangEs", "ConsoleConnector"]\n}\n')),(0,o.kt)("p",null,"And add an Spanish corpus. In the example, the Spanish corpus does not have answers, and the default behaviour of ConsoleConnector is to do an echo. To show the intent and the score in the console, we can add the property debug to the console settings, and set the value to true, modifying the configuration as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json", "./corpus-es.json"]\n    },\n    "console": {\n      "debug": true\n    }\n  },\n  "use": ["Basic", "LangEs", "ConsoleConnector"]\n}\n')),(0,o.kt)("p",null,"Now when you talk with the chatbot you can ask questions from the English corpus or from the Spanish corpus. The NLP process will automatically identify the language and send the utterance to the correct trained model."),(0,o.kt)("h2",{id:"adding-api-and-webchat"},"Adding API and WebChat"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/08.webchat"},"here"),"\nFirst you will need an Api Server to serve the web. For this you can install the plugin ",(0,o.kt)("em",{parentName:"p"},"ExpressApiServer")," and that will create an api server using Express."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nlpjs/express-api-server\n")),(0,o.kt)("p",null,'The internal name of the plugin is "api-server".\nAlso you will have to configure the plugin to provide the port, and to set that it will serve a bot using webchat (Microsoft Webchat CDN).\nHere is the ',(0,o.kt)("em",{parentName:"p"},"conf.json")," content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["../corpora/corpus50en.json", "../corpora/corpus50es.json"]\n    },\n    "api-server": { "port": 3000, "serveBot": true }\n  },\n  "use": [\n    "Basic",\n    "LangEs",\n    "ConsoleConnector",\n    "ExpressApiServer",\n    "DirectlineConnector"\n  ]\n}\n')),(0,o.kt)("p",null,'Now if you start the application, and in your browser navigate to http://localhost:3000, you will see an empty chat saying "impossible to connect".'),(0,o.kt)("p",null,"So lets add the Directline Connector, that will create an API like the Microsoft Directline, but exposed at your localhost with your API server. To do this install the DirectlineConnector plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nlpjs/directline-connector\n")),(0,o.kt)("p",null,"Restart your application and navigate once more to http://localhost:3000 and you'll be able to chat with your bot."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://github.com/axa-group/nlp.js/raw/master/screenshots/webchat.png",width:"auto",height:"auto"})),(0,o.kt)("h2",{id:"using-microsoft-bot-framework"},"Using Microsoft Bot Framework"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/09.microsoftbot"},"here"),"\nThere is a Microsoft Bot Framework Connector. First install the library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @nlpjs/msbf-connector\n")),(0,o.kt)("p",null,"Then use the plugin by adding it to your ",(0,o.kt)("em",{parentName:"p"},"conf.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json", "./corpus-es.json"]\n    },\n    "console": {\n      "debug": true\n    },\n    "api-server": {\n      "port": 3000,\n      "serveBot": true\n    }\n  },\n  "use": [\n    "Basic",\n    "LangEs",\n    "ConsoleConnector",\n    "ExpressApiServer",\n    "DirectlineConnector",\n    "MsbfConnector"\n  ]\n}\n')),(0,o.kt)("p",null,"Now start your app and use Microsoft Bot Framework Emulator ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/botemulator"},"https://aka.ms/botemulator"),"\nThe endpoint will be http://localhost:3000/default/api/messages"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://github.com/axa-group/nlp.js/raw/master/screenshots/microsoftemulator.png",width:"auto",height:"auto"})),(0,o.kt)("p",null,"Why is /default added to the api path?\nBecause it's the name of the container: NLP.js is built so you can have different containers with different names running at the same time in the application, allowing you to build a chatbot exposed to the same channel in different ways, i.e., you can have a chatbot sharing corpus, models, etc. but with different behaviour by channel or by country or any other setting."),(0,o.kt)("p",null,"If you want the api to be exposed in /api/messages you can set the settings of msfb in the ","_","conf.json:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "nlp": {\n      "corpora": ["./corpus-en.json", "./corpus-es.json"]\n    },\n    "console": {\n      "debug": true\n    },\n    "api-server": {\n      "port": 3000,\n      "serveBot": true\n    },\n    "msbf": {\n      "apiPath": "",\n      "messagesPath": "/api/messages"\n    }\n  },\n  "use": [\n    "Basic",\n    "LangEs",\n    "ConsoleConnector",\n    "ExpressApiServer",\n    "DirectlineConnector",\n    "MsbfConnector"\n  ]\n}\n')),(0,o.kt)("p",null,"How to add the Microsoft Application ID and the Microsoft Bot Password?\nYou have 3 different ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Providing it in the settings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "msbf": {\n      "apiPath": "",\n      "messagesPath": "/api/messages",\n      "appId": "<YOUR MICROSOFT BOT APP ID>",\n      "appPassword": "<YOUR MICROSOFT BOT PASSWORD>"\n    }\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Define the environment variables MSBF",(0,o.kt)("em",{parentName:"li"},"BOT_APP_ID and MSBF_BOT_APP_PASSWORD and these will be loaded if there are no ","_","appId")," or ",(0,o.kt)("em",{parentName:"li"},"appPassword")," in the plugin settings."),(0,o.kt)("li",{parentName:"ol"},"You can define those environment variables in a ",(0,o.kt)("em",{parentName:"li"},".env")," file, the ",(0,o.kt)("em",{parentName:"li"},".env")," file is automatically loaded at the dockStart process if it exists without installing dotenv.")),(0,o.kt)("h2",{id:"recognizing-the-bot-name-and-the-channel"},"Recognizing the bot name and the channel"),(0,o.kt)("p",null,'With the last code, try this sentence in console, web and Microsoft emulator: "where am I".\nYou\'ll notice that the answer is something like: "you\'re talking from console, app is default channel is console"\nThis happens because the answers to this intents are written like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'      "answers": [\n        { "answer": "you\'re talking from console, app is {{ app }} channel is {{ channel }}", "opts": "channel===\'console\'" },\n        { "answer": "you\'re talking from directline, app is {{ app }} channel is {{ channel }}", "opts": "channel===\'directline\'" },\n        { "answer": "you\'re talking from microsoft emulator, app is {{ app }} channel is {{ channel }}", "opts": "channel===\'msbf-emulator\'" }\n      ]\n')),(0,o.kt)("p",null,"Here we are mixing two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The context variables: ",(0,o.kt)("em",{parentName:"li"},"{{ app }}")," and ",(0,o.kt)("em",{parentName:"li"},"{{ channel }}")," will be replaced by the context variables app (bot name) and channel (channel name)."),(0,o.kt)("li",{parentName:"ol"},"Opts: the opts for an answer are the conditions to return this answer, and can be any condition in javascript format.")),(0,o.kt)("h2",{id:"one-bot-per-connector"},"One bot per connector"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/10.threebots"},"here")),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"conf.json")," what you have defined so far is the configuration of the default container. But containers can have child containers, with their own configuration and plugins, and they can access the plugins and resources of their parent containers.\nPut this in your ",(0,o.kt)("em",{parentName:"p"},"conf.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "settings": {\n    "nlp": {\n      "corpora": [\n        "./corpus-en.json",\n        "./corpus-es.json"\n      ]\n    },\n    "api-server": {\n      "port": 3000,\n      "serveBot": true\n    }\n  },\n  "childs": {\n    "bot1": {\n      "settings": {\n        "console": {\n          "debug": true\n        },\n        "use": ["ConsoleConnector"]\n      }\n    },\n    "bot2": {\n      "use": ["DirectlineConnector"]\n    },\n    "bot3": {\n      "settings": {\n        "msbf": {\n          "apiPath": "",\n          "messagesPath": "/api/messages"\n        }\n      },\n      "use": ["MsbfConnector"]\n    }\n  },\n  "use": ["Basic", "LangEs", "ExpressApiServer"]\n}\n')),(0,o.kt)("p",null,"This will create 3 childrens (childs) containers where each container represents a bot: bot1 in Console, bot2 in Webchat and Directline and bot3 with the Microsoft Bot Framework Connector.\nAs the ExpressApiServer plugin and configuration are in the default container, bot2 and bot3 will use this express configuration."),(0,o.kt)("p",null,"The problem now is that when you execute the app it will crash because the pipelines we're trying to use in the console plugin come from the default container, but this plugin is in bot1.\nSo replace the ",(0,o.kt)("em",{parentName:"p"},"pipelines.md")," with this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# default\n\n## main\n\nnlp.train\n\n# bot1\n\n# main\n\nconsole.say \"Say something!\"\n\n## console.hear\n\n// compiler=javascript\nif (message === 'quit') {\nreturn console.exit();\n}\nnlp.process();\nthis.say();\n")),(0,o.kt)("p",null,'As you can see the "# main" title of the pipelines is the name of the container, that way if you use the same plugin in two different containers, they can behave diferently.'),(0,o.kt)("p",null,'Now you can repeat the "where am I" utterance, and you will notice something different: app is no longer default and is replaced with bot1, bot2 or bot3.'),(0,o.kt)("h2",{id:"different-port-for-microsoft-bot-framework-and-webchat"},"Different port for Microsoft Bot Framework and Webchat"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/11.differentports"},"here")),(0,o.kt)("p",null,"In the last example the ExpressApiServer plugin was in the default container, but we can move it into bot2 and bot3 with a different configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "settings": {\n    "nlp": {\n      "corpora": [\n        "./corpus-en.json",\n        "./corpus-es.json"\n      ]\n    }\n  },\n  "childs": {\n    "bot1": {\n      "settings": {\n        "console": {\n          "debug": true\n        },\n        "use": ["ConsoleConnector"]\n      }\n    },\n    "bot2": {\n      "settings": {\n        "api-server": {\n          "port": 3000,\n          "serveBot": true\n        }\n      },\n      "use": ["ExpressApiServer", "DirectlineConnector"]\n    },\n    "bot3": {\n      "settings": {\n        "msbf": {\n          "apiPath": "",\n          "messagesPath": "/api/messages"\n        },\n        "api-server": {\n          "port": 4000,\n          "serveBot": false\n        }\n      },\n      "use": ["ExpressApiServer", "MsbfConnector"]\n    }\n  },\n  "use": ["Basic", "LangEs"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important!")," The plugins are loaded in order. Because both DirectlineConnector and MsbfConnector need an api-server, the ExpressApiServer should be added before each of these."),(0,o.kt)("h2",{id:"adding-logic-to-an-intent"},"Adding logic to an intent"),(0,o.kt)("p",null,"The code for this example is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jesus-seijas-sp/nlpjs-examples/tree/master/01.quickstart/12.onintent"},"here")),(0,o.kt)("p",null,"Suppose that you want to have an intent for telling jokes about Chuck Norris, and you know that a service that returns random Chuck Norris jokes exists: ",(0,o.kt)("a",{parentName:"p",href:"http://api.icndb.com/jokes/random"},"http://api.icndb.com/jokes/random")),(0,o.kt)("p",null,"First you need to add the intent to the corpus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "intent": "joke.chucknorris",\n      "utterances": [\n        "tell me a chuck norris fact",\n        "tell me a joke about chuck norris",\n        "say a chuck norris joke",\n        "some chuck norris fact"\n      ]\n    },\n')),(0,o.kt)("p",null,"Then add this to the ",(0,o.kt)("em",{parentName:"p"},"pipelines.md")," in the default section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"## onIntent(joke.chucknorris)\n\n// compiler=javascript\nconst something = request.get('http://api.icndb.com/jokes/random');\nif (something && something.value && something.value.joke) {\ninput.answer = something.value.joke;\n}\n")),(0,o.kt)("p",null,"Explanation: the ",(0,o.kt)("em",{parentName:"p"},"onIntent(","<","intentname>)")," is called when an intent is recognized, so you can react to doing things and modifying the input as you want, from classifications, entities and of course the answer.\nWe set the compiler to JavaScript.\nWe have a plugin ",(0,o.kt)("em",{parentName:"p"},"request")," that is for handling requests, then we call the API to retrieve an answer, and set it in the input."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://github.com/axa-group/nlp.js/raw/master/screenshots/chucknorris.png",width:"auto",height:"auto"})))}u.isMDXComponent=!0}}]);