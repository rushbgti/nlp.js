"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[3314],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return t?o.createElement(g,s(s({ref:n},m),{},{components:t})):o.createElement(g,s({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={},s="@nlpjs/lang-es",l={unversionedId:"language_support/modules/lang-es",id:"language_support/modules/lang-es",title:"@nlpjs/lang-es",description:"Installation",source:"@site/docs/03-language_support/02-modules/lang-es.md",sourceDirName:"03-language_support/02-modules",slug:"/language_support/modules/lang-es",permalink:"/language_support/modules/lang-es",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@nlpjs/lang-en",permalink:"/language_support/modules/lang-en"},next:{title:"@nlpjs/lang-fr",permalink:"/language_support/modules/lang-fr"}},i={},p=[{value:"Installation",id:"installation",level:2},{value:"Normalization",id:"normalization",level:2},{value:"Tokenization",id:"tokenization",level:2},{value:"Identify if a word is a spanish stopword",id:"identify-if-a-word-is-a-spanish-stopword",level:2},{value:"Remove stopwords from an array of words",id:"remove-stopwords-from-an-array-of-words",level:2},{value:"Change the stopwords dictionary",id:"change-the-stopwords-dictionary",level:2},{value:"Stemming word by word",id:"stemming-word-by-word",level:2},{value:"Stemming an array of words",id:"stemming-an-array-of-words",level:2},{value:"Normalizing, Tokenizing and Stemming a sentence",id:"normalizing-tokenizing-and-stemming-a-sentence",level:2},{value:"Remove stopwords when stemming a sentence",id:"remove-stopwords-when-stemming-a-sentence",level:2},{value:"Sentiment Analysis",id:"sentiment-analysis",level:2},{value:"Example of usage on a classifier",id:"example-of-usage-on-a-classifier",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nlpjslang-es"},"@nlpjs/lang-es"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can install @nlpjs/lang-es:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install @nlpjs/lang-es\n")),(0,a.kt)("h2",{id:"normalization"},"Normalization"),(0,a.kt)("p",null,"Normalization of a text converts it to lowercase and remove decorations of characters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NormalizerEs } = require("@nlpjs/lang-es");\n\nconst normalizer = new NormalizerEs();\nconst input = "Esto deber\xeda ser normalizado";\nconst result = normalizer.normalize(input);\nconsole.log(result);\n// output: esto deberia ser normalizado\n')),(0,a.kt)("h2",{id:"tokenization"},"Tokenization"),(0,a.kt)("p",null,"Tokenization splits a sentence into words."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { TokenizerEs } = require(\"@nlpjs/lang-es\");\n\nconst tokenizer = new TokenizerEs();\nconst input = \"Esto deber\xeda ser tokenizado\";\nconst result = tokenizer.tokenize(input);\nconsole.log(result);\n// output: [ 'Esto', 'deber\xeda', 'ser', 'tokenizado' ]\n")),(0,a.kt)("p",null,"Tokenizer can also normalize the sentence before tokenizing, to do that provide a ",(0,a.kt)("em",{parentName:"p"},"true")," as second argument to the method ",(0,a.kt)("em",{parentName:"p"},"tokenize")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { TokenizerEs } = require(\"@nlpjs/lang-es\");\n\nconst tokenizer = new TokenizerEs();\nconst input = \"Esto deber\xeda ser tokenizado\";\nconst result = tokenizer.tokenize(input, true);\nconsole.log(result);\n// output: [ 'esto', 'deberia', 'ser', 'tokenizado' ]\n")),(0,a.kt)("h2",{id:"identify-if-a-word-is-a-spanish-stopword"},"Identify if a word is a spanish stopword"),(0,a.kt)("p",null,"Using the class ",(0,a.kt)("em",{parentName:"p"},"StopwordsEs")," you can identify if a word is an stopword:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsEs } = require("@nlpjs/lang-es");\n\nconst stopwords = new StopwordsEs();\nconsole.log(stopwords.isStopword("un"));\n// output: true\nconsole.log(stopwords.isStopword("desarrollador"));\n// output: false\n')),(0,a.kt)("h2",{id:"remove-stopwords-from-an-array-of-words"},"Remove stopwords from an array of words"),(0,a.kt)("p",null,"Using the class ",(0,a.kt)("em",{parentName:"p"},"StopwordsEs")," you can remove stopwords form an array of words:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsEs } = require("@nlpjs/lang-es");\n\nconst stopwords = new StopwordsEs();\nconsole.log(\n  stopwords.removeStopwords(["he", "visto", "a", "un", "programador"])\n);\n// output: [\'he\', \'visto\', \'programador\']\n')),(0,a.kt)("h2",{id:"change-the-stopwords-dictionary"},"Change the stopwords dictionary"),(0,a.kt)("p",null,"Using the class ",(0,a.kt)("em",{parentName:"p"},"StopwordsEs")," you can restart it dictionary and build it from another set of words:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsEs } = require("@nlpjs/lang-es");\n\nconst stopwords = new StopwordsEs();\nstopwords.dictionary = {};\nstopwords.build(["he", "visto"]);\nconsole.log(\n  stopwords.removeStopwords(["he", "visto", "a", "un", "programador"])\n);\n// output: [\'a\', \'un\', \'programador\']\n')),(0,a.kt)("h2",{id:"stemming-word-by-word"},"Stemming word by word"),(0,a.kt)("p",null,"An stemmer is an algorithm to calculate the ",(0,a.kt)("em",{parentName:"p"},"stem")," (root) of a word, removing affixes."),(0,a.kt)("p",null,"You can stem one word using method ",(0,a.kt)("em",{parentName:"p"},"stemWord"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StemmerEs } = require("@nlpjs/lang-es");\n\nconst stemmer = new StemmerEs();\nconst input = "programador";\nconsole.log(stemmer.stemWord(input));\n// output: program\n')),(0,a.kt)("h2",{id:"stemming-an-array-of-words"},"Stemming an array of words"),(0,a.kt)("p",null,"You can stem an array of words using method ",(0,a.kt)("em",{parentName:"p"},"stem"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StemmerEs } = require("@nlpjs/lang-es");\n\nconst stemmer = new StemmerEs();\nconst input = ["he", "visto", "a", "un", "programador"];\nconsole.log(stemmer.stem(input));\n// outuput: [ \'hab\', \'vist\', \'a\', \'un\', \'program\' ]\n')),(0,a.kt)("h2",{id:"normalizing-tokenizing-and-stemming-a-sentence"},"Normalizing, Tokenizing and Stemming a sentence"),(0,a.kt)("p",null,"As you can see, stemmer does not do internal normalization, so words with uppercases will remain uppercased.\nAlso, stemmer works with lowercased affixes, so ",(0,a.kt)("em",{parentName:"p"},"programador")," will be stemmed as ",(0,a.kt)("em",{parentName:"p"},"program")," but ",(0,a.kt)("em",{parentName:"p"},"PROGRAMADOR")," will not be changed."),(0,a.kt)("p",null,"You can tokenize and stem a sentence, including normalization, with the method ",(0,a.kt)("em",{parentName:"p"},"tokenizeAndStem"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { StemmerEs } = require(\"@nlpjs/lang-es\");\n\nconst stemmer = new StemmerEs();\nconst input = \"He visto a un PROGRAMADOR\";\nconsole.log(stemmer.tokenizeAndStem(input));\n// output: [ 'hab', 'vist', 'a', 'un', 'program' ]\n")),(0,a.kt)("h2",{id:"remove-stopwords-when-stemming-a-sentence"},"Remove stopwords when stemming a sentence"),(0,a.kt)("p",null,"When calling ",(0,a.kt)("em",{parentName:"p"},"tokenizeAndStem")," method from the class ",(0,a.kt)("em",{parentName:"p"},"StemmerES"),", the second parameter is a boolean to set if the stemmer must keep the stopwords (true) or remove them (false). Before using it, the stopwords instance must be set into the stemmer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { StemmerEs, StopwordsEs } = require(\"@nlpjs/lang-es\");\n\nconst stemmer = new StemmerEs();\nstemmer.stopwords = new StopwordsEs();\nconst input = \"he visto a un programador\";\nconsole.log(stemmer.tokenizeAndStem(input, false));\n// output: ['hab', 'vist', 'program']\n")),(0,a.kt)("h2",{id:"sentiment-analysis"},"Sentiment Analysis"),(0,a.kt)("p",null,"To use sentiment analysis you'll need to create a new ",(0,a.kt)("em",{parentName:"p"},"Container")," and use the plugin ",(0,a.kt)("em",{parentName:"p"},"LangES"),", because internally the ",(0,a.kt)("em",{parentName:"p"},"SentimentAnalyzer")," class try to retrieve the normalizer, tokenizer, stemmmer and sentiment dictionaries from the container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Container } = require("@nlpjs/core");\nconst { SentimentAnalyzer } = require("@nlpjs/sentiment");\nconst { LangEs } = require("@nlpjs/lang-es");\n\n(async () => {\n  const container = new Container();\n  container.use(LangEs);\n  const sentiment = new SentimentAnalyzer({ container });\n  const result = await sentiment.process({\n    locale: "es",\n    text: "me gustan los gatos",\n  });\n  console.log(result.sentiment);\n})();\n// output:\n// {\n//   score: 0.266,\n//   numWords: 4,\n//   numHits: 1,\n//   average: 0.0665,\n//   type: \'senticon\',\n//   locale: \'es\',\n//   vote: \'positive\'\n// }\n')),(0,a.kt)("p",null,"The output of the sentiment analysis includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"score"),": final score of the sentence."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"numWords"),": total words of the sentence."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"numHits"),": total words of the sentence identified as having a sentiment score."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"average"),": score divided by numWords"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"type"),": type of dictionary used, values can be afinn, senticon or pattern."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"locale"),": locale of the sentence"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"vote"),": positive if score greater than 0, negative if score lower than 0, neutral if score equals 0.")),(0,a.kt)("h2",{id:"example-of-usage-on-a-classifier"},"Example of usage on a classifier"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { containerBootstrap } = require("@nlpjs/core");\nconst { Nlp } = require("@nlpjs/nlp");\nconst { LangEs } = require("@nlpjs/lang-es");\n\n(async () => {\n  const container = await containerBootstrap();\n  container.use(Nlp);\n  container.use(LangEs);\n  const nlp = container.get("nlp");\n  nlp.settings.autoSave = false;\n  nlp.addLanguage("es");\n  // Adds the utterances and intents for the NLP\n  nlp.addDocument("es", "adios por ahora", "greetings.bye");\n  nlp.addDocument("es", "adios y ten cuidado", "greetings.bye");\n  nlp.addDocument("es", "muy bien nos vemos luego", "greetings.bye");\n  nlp.addDocument("es", "debo irme", "greetings.bye");\n  nlp.addDocument("es", "hola", "greetings.hello");\n\n  // Train also the NLG\n  nlp.addAnswer("es", "greetings.bye", "hasta la proxima");\n  nlp.addAnswer("es", "greetings.bye", "\xa1te veo pronto!");\n  nlp.addAnswer("es", "greetings.hello", "\xa1hola que tal!");\n  nlp.addAnswer("es", "greetings.hello", "\xa1salludos!");\n  await nlp.train();\n  const response = await nlp.process("es", "debo irme");\n  console.log(response);\n})();\n')))}u.isMDXComponent=!0}}]);