"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},842:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(9960);function r(e){let{to:t,children:n}=e;return a.createElement(i.Z,{to:`https://github.com/axa-group/nlp.js/blob/master/${t}`},n)}},185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),r=n(842);const l={},o="The module",s={unversionedId:"special_packages/core/core",id:"special_packages/core/core",title:"The module",description:"Installation",source:"@site/docs/90-special_packages/01-core/01-core.md",sourceDirName:"90-special_packages/01-core",slug:"/special_packages/core/",permalink:"/special_packages/core/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"ArrToObj",permalink:"/special_packages/core/utilities/arr-to-obj"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Container",id:"container",level:2},{value:"Plugins",id:"plugins",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Creating a container",id:"creating-a-container",level:3},{value:"Executing a pipeline",id:"executing-a-pipeline",level:3},{value:"Example of Usage",id:"example-of-usage",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-module"},"The module"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You can install @nlpjs/core:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install @nlpjs/core\n")),(0,i.kt)("h2",{id:"container"},"Container"),(0,i.kt)("p",null,"The Container is an IoC container class. Basically it's able to store instances and classes, marked as being singleton or not.\nWhen a class is registered as a singleton, a new instance is created and everytime that the container is asked for this class the same instance is returned. Same behaviour if we register an instance as singleton, but in this case this instance is returned always.\nWhen an instance is registerd as not singleton, the class of the instance is stored and when asked to the container it returns a new instance of this class."),(0,i.kt)("p",null,"Also in the container can be registered settings with the name of the objects registered, so these settings are provided to the new created instances."),(0,i.kt)("p",null,"And also pipelines can be registered. Pipelines are sequences of commands that are executed based on the classes and instances known by the container."),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"At the plugins folder you will find some different classes with atomics tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"split"),": given an object with a property ",(0,i.kt)("em",{parentName:"li"},"text"),", split this text into an array of characters into the property ",(0,i.kt)("em",{parentName:"li"},"splitted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"reverse"),": given an object with a property ",(0,i.kt)("em",{parentName:"li"},"splitted")," that is an array, reverse this array"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"join"),": given an object with a property ",(0,i.kt)("em",{parentName:"li"},"splitted")," that is an array, join this array into an string into the property ",(0,i.kt)("em",{parentName:"li"},"text")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"lower"),": given an object with a property ",(0,i.kt)("em",{parentName:"li"},"text"),", convert this string to lower case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"upperFirst"),": given an object with a property ",(0,i.kt)("em",{parentName:"li"},"text"),", convert the first character to upper case")),(0,i.kt)("h3",{id:"pipelines"},"Pipelines"),(0,i.kt)("p",null,"If you take a look at the pipelines.md file you'll see this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# Pipelines\n\n## reverse\n\nsplit\nreverse\njoin\n->output.text\n\n## reverse-and-\\*\n\n$reverse\nlower\n->output.text\n\n## reverse-and-capitalize\n\n$super\nupperFirst\noutput.text\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"reverse"),", ",(0,i.kt)("em",{parentName:"p"},"reverse-and-$ast")," and ",(0,i.kt)("em",{parentName:"p"},"reverse-and-capitalize")," are pipelines. Each one contains commands to be executed in sequence. As you can see, the commands are the name of the plugins, except some exceptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"output.text"),": this is telling that at this step take a look at the output object (the one that is returned by the previous step) and from it extract the property text before going to the next step"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"$reverse"),": When you start a name with the $ that means not to execute a plugin but to call another pipeline using as input the current output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"$super"),": This is to call the parent. You can see that ",(0,i.kt)("em",{parentName:"li"},"reverse-and-&ast")," have an asterisk at the end, this is a wildchar, so will be the parent of those pipelines that match this pattern, in this case ",(0,i.kt)("em",{parentName:"li"},"reverse-and-capitalize")," match this name so if a child pipeline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"->output.text"),": when a command starts with the ",(0,i.kt)("em",{parentName:"li"},"->")," that means that this command should be executed only if this pipeline is the one executed directly, but not when this pipeline is invoked from another pipeline. So when calling ",(0,i.kt)("em",{parentName:"li"},"reverse")," the output will be an string, but when calling ",(0,i.kt)("em",{parentName:"li"},"reverse")," from ",(0,i.kt)("em",{parentName:"li"},"reverse-and&ast")," this last command will be not execute so the output of ",(0,i.kt)("em",{parentName:"li"},"reverse")," will be the object and not the string.")),(0,i.kt)("h3",{id:"creating-a-container"},"Creating a container"),(0,i.kt)("p",null,"This is the way of creating a bootstrapped container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const { containerBootstrap } = require("@nlpjs/core");\nconst container = containerBootstrap();\n')),(0,i.kt)("p",null,"This automatically will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"load the .env file if exists as environment variables"),(0,i.kt)("li",{parentName:"ul"},"load the conf.json file if exists as configuration (will be explained in other example)."),(0,i.kt)("li",{parentName:"ul"},"If the conf.json file does not exists or it does not includes a pipelines path, then load the ./pipelines.md by default as pipelines"),(0,i.kt)("li",{parentName:"ul"},"If the conf.json file does not exists or it does not includes a plugin path, then load the content of the folder ./plugins as plugins.")),(0,i.kt)("h3",{id:"executing-a-pipeline"},"Executing a pipeline"),(0,i.kt)("p",null,"Containers have a method ",(0,i.kt)("em",{parentName:"p"},"runPipeline")," where you can pass the name of the pipeline (or the compiled pipeline) and an input to be processed.\nImportant: this input usually travel through each step of the pipeline, so can be modified by the pipeline execution.\nThis is an example of code calling the pipeline ",(0,i.kt)("em",{parentName:"p"},"reverse-and-capitalize"),", that shows how to do inheritance of pipelines, call other pipelines, and have commands that are only executed if the depth of the call is 0 (belongs to the called pipeline)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const { containerBootstrap } = require("@nlpjs/core");\n\nasync function main() {\n  const container = containerBootstrap();\n  const input = "GNIHTEMOS";\n  const result = await container.runPipeline("reverse-and-capitalize", input);\n  console.log(result); // It should log "Something"\n}\n\nmain();\n')),(0,i.kt)("h2",{id:"example-of-usage"},"Example of Usage"),(0,i.kt)("p",null,"You'll find an example of usage at ",(0,i.kt)(r.Z,{to:"examples/01-container/README.md",mdxType:"GithubLink"},"examples/01-container")))}m.isMDXComponent=!0}}]);