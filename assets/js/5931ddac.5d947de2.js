"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[5673],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return t?a.createElement(g,s(s({ref:n},m),{},{components:t})):a.createElement(g,s({ref:n},m))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},s="@nlpjs/lang-id",i={unversionedId:"language_support/modules/lang-id",id:"language_support/modules/lang-id",title:"@nlpjs/lang-id",description:"Installation",source:"@site/docs/03-language_support/02-modules/lang-id.md",sourceDirName:"03-language_support/02-modules",slug:"/language_support/modules/lang-id",permalink:"/language_support/modules/lang-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@nlpjs/lang-fr",permalink:"/language_support/modules/lang-fr"},next:{title:"@nlpjs/lang-it",permalink:"/language_support/modules/lang-it"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Normalization",id:"normalization",level:2},{value:"Tokenization",id:"tokenization",level:2},{value:"Identify if a word is an indonesian stopword",id:"identify-if-a-word-is-an-indonesian-stopword",level:2},{value:"Remove stopwords from an array of words",id:"remove-stopwords-from-an-array-of-words",level:2},{value:"Change the stopwords dictionary",id:"change-the-stopwords-dictionary",level:2},{value:"Stemming word by word",id:"stemming-word-by-word",level:2},{value:"Stemming an array of words",id:"stemming-an-array-of-words",level:2},{value:"Normalizing, Tokenizing and Stemming a sentence",id:"normalizing-tokenizing-and-stemming-a-sentence",level:2},{value:"Remove stopwords when stemming a sentence",id:"remove-stopwords-when-stemming-a-sentence",level:2},{value:"Sentiment Analysis",id:"sentiment-analysis",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nlpjslang-id"},"@nlpjs/lang-id"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You can install @nlpjs/lang-id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install @nlpjs/lang-id\n")),(0,o.kt)("h2",{id:"normalization"},"Normalization"),(0,o.kt)("p",null,"Normalization of a text converts it to lowercase and remove decorations of characters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { NormalizerId } = require("@nlpjs/lang-id");\n\nconst normalizer = new NormalizerId();\nconst input = "apa yang dikembangkan per\xfasahaan Anda";\nconst result = normalizer.normalize(input);\nconsole.log(result);\n// output: apa yang dikembangkan perusahaan anda\n')),(0,o.kt)("h2",{id:"tokenization"},"Tokenization"),(0,o.kt)("p",null,"Tokenization splits a sentence into words."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { TokenizerId } = require(\"@nlpjs/lang-id\");\n\nconst tokenizer = new TokenizerId();\nconst input = \"apa yang dikembangkan perusahaan Anda\";\nconst result = tokenizer.tokenize(input);\nconsole.log(result);\n// output: [ 'apa', 'yang', 'dikembangkan', 'perusahaan', 'Anda' ]\n")),(0,o.kt)("p",null,"Tokenizer can also normalize the sentence before tokenizing, to do that provide a ",(0,o.kt)("em",{parentName:"p"},"true")," as second argument to the method ",(0,o.kt)("em",{parentName:"p"},"tokenize")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { TokenizerId } = require(\"@nlpjs/lang-id\");\n\nconst tokenizer = new TokenizerId();\nconst input = \"apa yang dikembangkan perusahaan Anda\";\nconst result = tokenizer.tokenize(input, true);\nconsole.log(result);\n// output: [ 'apa', 'yang', 'dikembangkan', 'perusahaan', 'anda' ]\n")),(0,o.kt)("h2",{id:"identify-if-a-word-is-an-indonesian-stopword"},"Identify if a word is an indonesian stopword"),(0,o.kt)("p",null,"Using the class ",(0,o.kt)("em",{parentName:"p"},"StopwordsId")," you can identify if a word is an stopword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsId } = require("@nlpjs/lang-id");\n\nconst stopwords = new StopwordsId();\nconsole.log(stopwords.isStopword("apa"));\n// output: true\nconsole.log(stopwords.isStopword("perusahaan"));\n// output: false\n')),(0,o.kt)("h2",{id:"remove-stopwords-from-an-array-of-words"},"Remove stopwords from an array of words"),(0,o.kt)("p",null,"Using the class ",(0,o.kt)("em",{parentName:"p"},"StopwordsId")," you can remove stopwords form an array of words:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsId } = require("@nlpjs/lang-id");\n\nconst stopwords = new StopwordsId();\nconsole.log(\n  stopwords.removeStopwords([\n    "apa",\n    "yang",\n    "dikembangkan",\n    "perusahaan",\n    "anda",\n  ])\n);\n// output: [ \'dikembangkan\', \'perusahaan\' ]\n')),(0,o.kt)("h2",{id:"change-the-stopwords-dictionary"},"Change the stopwords dictionary"),(0,o.kt)("p",null,"Using the class ",(0,o.kt)("em",{parentName:"p"},"StopwordsId")," you can restart it dictionary and build it from another set of words:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StopwordsId } = require("@nlpjs/lang-id");\n\nconst stopwords = new StopwordsId();\nstopwords.dictionary = {};\nstopwords.build(["apa", "anda"]);\nconsole.log(\n  stopwords.removeStopwords([\n    "apa",\n    "yang",\n    "dikembangkan",\n    "perusahaan",\n    "anda",\n  ])\n);\n// output: [ \'yang\', \'dikembangkan\', \'perusahaan\' ]\n')),(0,o.kt)("h2",{id:"stemming-word-by-word"},"Stemming word by word"),(0,o.kt)("p",null,"An stemmer is an algorithm to calculate the ",(0,o.kt)("em",{parentName:"p"},"stem")," (root) of a word, removing affixes."),(0,o.kt)("p",null,"You can stem one word using method ",(0,o.kt)("em",{parentName:"p"},"stemWord"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StemmerId } = require("@nlpjs/lang-id");\n\nconst stemmer = new StemmerId();\nconst input = "dikembangkan";\nconsole.log(stemmer.stemWord(input));\n// output: kembang\n')),(0,o.kt)("h2",{id:"stemming-an-array-of-words"},"Stemming an array of words"),(0,o.kt)("p",null,"You can stem an array of words using method ",(0,o.kt)("em",{parentName:"p"},"stem"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { StemmerId } = require("@nlpjs/lang-id");\n\nconst stemmer = new StemmerId();\nconst input = ["apa", "yang", "dikembangkan", "perusahaan", "Anda"];\nconsole.log(stemmer.stem(input));\n// outuput: [ \'apa\', \'yang\', \'kembang\', \'usaha\', \'Anda\' ]\n')),(0,o.kt)("h2",{id:"normalizing-tokenizing-and-stemming-a-sentence"},"Normalizing, Tokenizing and Stemming a sentence"),(0,o.kt)("p",null,"As you can see, stemmer does not do internal normalization, so words with uppercases will remain uppercased.\nAlso, stemmer works with lowercased affixes, so ",(0,o.kt)("em",{parentName:"p"},"perusahaan")," will be stemmed as ",(0,o.kt)("em",{parentName:"p"},"usaha")," but ",(0,o.kt)("em",{parentName:"p"},"PERUSAHAAN")," will not be changed."),(0,o.kt)("p",null,"You can tokenize and stem a sentence, including normalization, with the method ",(0,o.kt)("em",{parentName:"p"},"tokenizeAndStem"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { StemmerId } = require(\"@nlpjs/lang-id\");\n\nconst stemmer = new StemmerId();\nconst input = \"apa yang dikembangkan PERUSAHAAN Anda\";\nconsole.log(stemmer.tokenizeAndStem(input));\n// output: [ 'apa', 'yang', 'kembang', 'usaha', 'anda' ]\n")),(0,o.kt)("h2",{id:"remove-stopwords-when-stemming-a-sentence"},"Remove stopwords when stemming a sentence"),(0,o.kt)("p",null,"When calling ",(0,o.kt)("em",{parentName:"p"},"tokenizeAndStem")," method from the class ",(0,o.kt)("em",{parentName:"p"},"StemmerId"),", the second parameter is a boolean to set if the stemmer must keep the stopwords (true) or remove them (false). Before using it, the stopwords instance must be set into the stemmer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { StemmerId, StopwordsId } = require(\"@nlpjs/lang-id\");\n\nconst stemmer = new StemmerId();\nstemmer.stopwords = new StopwordsId();\nconst input = \"apa yang dikembangkan perusahaan Anda\";\nconsole.log(stemmer.tokenizeAndStem(input, false));\n// output: [ 'kembang', 'usaha' ]\n")),(0,o.kt)("h2",{id:"sentiment-analysis"},"Sentiment Analysis"),(0,o.kt)("p",null,"To use sentiment analysis you'll need to create a new ",(0,o.kt)("em",{parentName:"p"},"Container")," and use the plugin ",(0,o.kt)("em",{parentName:"p"},"LangId"),", because internally the ",(0,o.kt)("em",{parentName:"p"},"SentimentAnalyzer")," class try to retrieve the normalizer, tokenizer, stemmmer and sentiment dictionaries from the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Container } = require("@nlpjs/core");\nconst { SentimentAnalyzer } = require("@nlpjs/sentiment");\nconst { LangId } = require("@nlpjs/lang-id");\n\n(async () => {\n  const container = new Container();\n  container.use(LangId);\n  const sentiment = new SentimentAnalyzer({ container });\n  const result = await sentiment.process({\n    locale: "id",\n    text: "kucing itu mengagumkan",\n  });\n  console.log(result.sentiment);\n})();\n// output:\n// {\n//   score: 4,\n//   numWords: 3,\n//   numHits: 1,\n//   average: 1.3333333333333333,\n//   type: \'afinn\',\n//   locale: \'id\',\n//   vote: \'positive\'\n// }\n')),(0,o.kt)("p",null,"The output of the sentiment analysis includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"score"),": final score of the sentence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"numWords"),": total words of the sentence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"numHits"),": total words of the sentence identified as having a sentiment score."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"average"),": score divided by numWords"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"type"),": type of dictionary used, values can be afinn, senticon or pattern."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"locale"),": locale of the sentence"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"vote"),": positive if score greater than 0, negative if score lower than 0, neutral if score equals 0.")))}d.isMDXComponent=!0}}]);