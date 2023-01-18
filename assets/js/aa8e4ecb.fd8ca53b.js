"use strict";(self.webpackChunknlp_docs=self.webpackChunknlp_docs||[]).push([[1896],{310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=a(7462),o=a(7294),i=a(3905),l=a(814);function r(e){let{description:t,parameters:a,syntax:n,examples:i}=e;return o.createElement("div",{class:"commandDetails"},t,o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,"Syntax"),o.createElement("td",{cols:!0},n)),a&&a.length>0&&o.createElement("tr",null,o.createElement("td",null,"Parameters"),o.createElement("td",null,a&&(e=>o.createElement("table",{class:"dlg-parameterTable"},o.createElement("thead",null,o.createElement("th",null,"Position"),o.createElement("th",null,"Optional"),o.createElement("th",null,"Description")),o.createElement("tbody",null,e.map(((e,t)=>o.createElement("tr",null,o.createElement("td",null,t+1),o.createElement("td",null,`${e.opt}`),o.createElement("td",null,o.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}))))))))(a)||o.createElement("td",null,"None"))))),i&&i.length>0&&o.createElement("div",null,o.createElement("h3",null,"Usage examples"),o.createElement("table",null,i.map((e=>o.createElement("tr",null,o.createElement("td",null,o.createElement(l.Z,null,o.createElement("div",{dangerouslySetInnerHTML:{__html:e.example}}))," "),o.createElement("td",null,o.createElement("div",{dangerouslySetInnerHTML:{__html:e.text}}))))))))}const s={},d="DLG commands reference",m={unversionedId:"bot-orchestration/dlg_commands_reference",id:"bot-orchestration/dlg_commands_reference",title:"DLG commands reference",description:"DLG is a declarative language used to define conversation flows. Following you'll",source:"@site/docs/13-bot-orchestration/01-dlg_commands_reference.mdx",sourceDirName:"13-bot-orchestration",slug:"/bot-orchestration/dlg_commands_reference",permalink:"/bot-orchestration/dlg_commands_reference",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/bot-orchestration/introduction"},next:{title:"Custom actions",permalink:"/bot-orchestration/custom_actions"}},c={},u=[{value:"User interaction",id:"user-interaction",level:2},{value:"say",id:"say",level:3},{value:"ask",id:"ask",level:3},{value:"nlp",id:"nlp",level:3},{value:"card",id:"card",level:3},{value:"suggest",id:"suggest",level:3},{value:"Flow management",id:"flow-management",level:2},{value:"dialog",id:"dialog",level:3},{value:"run",id:"run",level:3},{value:"restart",id:"restart",level:3},{value:"conditional execution",id:"conditional-execution",level:3},{value:"Flow customization",id:"flow-customization",level:2},{value:"call",id:"call",level:3},{value:"set",id:"set",level:3},{value:"inc",id:"inc",level:3},{value:"dec",id:"dec",level:3}],p={toc:u};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dlg-commands-reference"},"DLG commands reference"),(0,i.kt)("p",null,"DLG is a declarative language used to define conversation flows. Following you'll\nfind a summary of the available commands."),(0,i.kt)("h2",{id:"user-interaction"},"User interaction"),(0,i.kt)("h3",{id:"say"},"say"),(0,i.kt)("p",null,"Command used to send output to the user. Any context variable in the text to say will be replace by its value (see examples below)."),(0,i.kt)(r,{parameters:[{desc:"Text or translation key matching the text to send to the user",opt:!1}],syntax:"say <text or key>",examples:[{example:"say Hello world!",text:"to just send the 'Hello world!' text to the user"},{example:"say greeting",text:"where greeting is a key defined in the your language file"},{example:"say Hi {{userName}}",text:"will replace <i>{{userName}}</i> by the value of evaluating the expression <i>userName</i> using the variables available in the context, if any, and send the resulting text to the user"},{example:"say Hi {{user.name}}",text:"will replace <i>{{user.name}}</i> by the value of evaluating the expression <i>user.name</i> using the variables available in the context."}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"ask"},"ask"),(0,i.kt)("p",null,"Used to gather input from the user. When used, conversation flow will stop processing until some input is received from the user."),(0,i.kt)(r,{parameters:[{desc:"Name of the variable where user input will be stored",opt:!0}],syntax:"ask <variable name>",examples:[{example:"ask",text:"just get the input and let following commands in the flow use it"},{example:"ask type_of_food",text:"get the input from the user and store it in the variable <i>type_of_food</i>"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"nlp"},"nlp"),(0,i.kt)("p",null,"Sends de current user input to the NLP for evaluation. If an intent is matched, it's ",(0,i.kt)("em",{parentName:"p"},"answer")," will be evaluated following these rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if the ",(0,i.kt)("em",{parentName:"li"},"answer")," starts with '/', the bot will look for an existing ",(0,i.kt)("em",{parentName:"li"},"dialog")," with the same name and execute it"),(0,i.kt)("li",{parentName:"ul"},"otherwise, the ",(0,i.kt)("em",{parentName:"li"},"answer")," will be send to the user the same way as it we had a ",(0,i.kt)("em",{parentName:"li"},"say ","<","answer>"))),(0,i.kt)("p",null,"By default, any intent in the corpus can be matched, however, the ",(0,i.kt)("em",{parentName:"p"},"nlp")," command allows you to narrow the list of intents available in a\nuser interaction. This way, if the user input matches a ",(0,i.kt)("em",{parentName:"p"},"not allowed")," intent, it will be handled as if there is no matched intent."),(0,i.kt)("admonition",{title:"multilanguage bots",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When the user input is evaluated by the NLP, in case there is more than one language available, the NLU manager will try to guess\nthe language of the input before the NLP evaluates it.")),(0,i.kt)(r,{parameters:[{desc:"Space-separated list of allowed intents. Leave blank to allow any intent of the corpus to be matched",opt:!0}],syntax:"nlp <allowed intents list>",examples:[{example:"nlp",text:"evaluate the user input using the NLP and behave according to the <i>answer</i> in the matching intent"},{example:"nlp intent1 intent2",text:"as the previous example, but only intents <i>intent1</i> and <i>intent2</i> can be matched"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"card"},"card"),(0,i.kt)("p",null,"Sends an ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/adaptive-cards/"},"adaptive card")," to the user."),(0,i.kt)(r,{parameters:[{desc:"Name of the card to send",opt:!1}],syntax:"card <card name>",examples:[{example:"card initialChoose",text:"sends the card with name <i>initialChoose</i> to the user"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"suggest"},"suggest"),(0,i.kt)("p",null,"Suggestions, also known as ",(0,i.kt)("em",{parentName:"p"},"suggested actions"),', can be thought as "not so good looking cards", they are\neasier to build, though. As expected, ',(0,i.kt)("em",{parentName:"p"},"suggestions")," are meant to suggest one or more possible responses\nor choices to the user, and are defined using a pipe-separate list.\nWhen placing a suggestion, it will be attached to the next message send to the user, and he\nwill receive as many buttons as suggestions placed."),(0,i.kt)(r,{parameters:[{desc:"pipe-separated list of suggestions",opt:!1}],syntax:"suggest <suggestion 1>|<suggestion 2>...",examples:[{example:"suggest Option 1|Option 2",text:'Next message send to the user will include two buttons "Option 1" and "Option 2". When one of them\n      is clicked, the buttons text will be sent to the bot as the user input'}],mdxType:"CommandDetails"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/connectors/directline-connector"},"Directline connector")," and ",(0,i.kt)("a",{parentName:"p",href:"/connectors/msbf-connector"},"Microsoft Bot Framework"),"\nconnectors both support suggestions.\nYou can check ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-suggested-actions?view=azure-bot-service-4.0"},"Microsoft Bot Framework documentation"),"\nto get more info about suggested actions")),(0,i.kt)("h2",{id:"flow-management"},"Flow management"),(0,i.kt)("h3",{id:"dialog"},"dialog"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"dialog")," is a group of commands defined in a the flow of the conversation. The goal of having dialogs is to be\nable to execute sets of commands without the need of copy/pasting the command sequence everywhere where is needed.\nWe can think of them as if tey where ",(0,i.kt)("em",{parentName:"p"},"functions")),(0,i.kt)(r,{parameters:[{desc:"name of the dialog to execute",opt:!1}],syntax:"run <dialog_name>",examples:[{example:"dialog place_order",text:"defines the start of the <i>place_order</i> dialog definition. All commands below will be part of the <i>place_order</i> dialog \n      until another <i>dialog</i> command is found, or the end the file is reached"}],mdxType:"CommandDetails"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In general, ",(0,i.kt)("em",{parentName:"p"},"dialogs")," are used to track conversation paths. So, if you are integrating your bot with the AXA Bots application, or plan\nto get some analytics like which paths of your conversation are more used, or where the users tend to stop using the bot, try also to organize\nthem in a smart way by making them meaningful from a business point of view.")),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"run")," command will start executing another ",(0,i.kt)("em",{parentName:"p"},"dialog"),", ",(0,i.kt)("strong",{parentName:"p"},"once that ",(0,i.kt)("em",{parentName:"strong"},"dialog")," is finished, the bot will continue where it left")),(0,i.kt)(r,{parameters:[{desc:"name of the dialog to execute",opt:!1}],syntax:"run <dialog_name>",examples:[{example:"run placeOrder",text:"would run the <i>placeOrder</i> dialog"},{example:"run placeOrder<br/>say Do you want to place another order?",text:"would run the <i>placeOrder</i> dialog, and, <b>once that dialog has finished its execution</b>, would \n            ask the user if he wants to place another order"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"restart"},"restart"),(0,i.kt)("p",null,"Restarts the conversation and clean up the dialog stack"),(0,i.kt)("h3",{id:"conditional-execution"},"conditional execution"),(0,i.kt)("p",null,"It is possible to define commands, in the conversation flow, to be executed only under certain conditions. In order to\ndo that we can use the following syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[<condition>] <command>\n")),(0,i.kt)("p",null,"The condition to be evaluated will take into account any variable available in the context.\nFor instance, if we've requested the user to tell the bot his age, we could do something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[age >= 18] say You can drive\n[age <18] say You still have to wait {{ 18 - age }} years to drive!\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Unfortunately, in the current version multiline conditions are not supported, so, if you need a\npiece of the conversation to be conditionally executed, you may create a dialog and do something like"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"[<condition>] run <dialog_name>\n"))),(0,i.kt)("h2",{id:"flow-customization"},"Flow customization"),(0,i.kt)("h3",{id:"call"},"call"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("em",{parentName:"p"},"call")," command to execute a ",(0,i.kt)("a",{parentName:"p",href:"/bot-orchestration/custom_actions"},(0,i.kt)("em",{parentName:"a"},"custom action"))," at any point of a conversation"),(0,i.kt)(r,{parameters:[{desc:"name of the <i>custom action</i> to execute",opt:!1}],syntax:"call <custom action name>",examples:[{example:"call createCase",text:"executes the <i>createCase</i> custom action"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"set"},"set"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"set")," command allows you to define a variable within the context.\nRemember that ",(0,i.kt)("em",{parentName:"p"},"context")," variables are available all over the flow, and can be referenced in many places\n",(0,i.kt)("a",{parentName:"p",href:"#conditional-execution"},"conditions"),", ",(0,i.kt)("a",{parentName:"p",href:"#say"},(0,i.kt)("em",{parentName:"a"},"say"))," commands, ",(0,i.kt)("a",{parentName:"p",href:"/bot-orchestration/custom_actions"},"custom actions"),",\n",(0,i.kt)("a",{parentName:"p",href:"/bot-orchestration/custom_validators"},"custom validators"),", etc."),(0,i.kt)(r,{parameters:[{desc:"name of the variable to set",opt:!1},{desc:"value to set",opt:!1}],syntax:"set <var name> <value>",examples:[{example:"set count 5",text:"set <i>count</i> variable to 5"},{example:"set user {name: 'John', surname: 'Doe'}<br>say {{user.name}}",text:"set <i>user</i> variable to have the JSON value {name: 'John', surname: 'Doe'} and says 'John'"},{example:"set numbers []<br>say numbers: {{ numbers.length }}",text:"set <i>numbers</i> variable with an empty array and says 'numbers length: 0'"},{example:"set numbers [1,2,3]<br>say numbers: {{ numbers.length }}",text:"set <i>numbers</i> variable to have an array with values and says 'numbers length: 3'"}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"inc"},"inc"),(0,i.kt)("p",null,"Given a context  "," variable, it will be increased by the specified amount.\nIf no amount is specified, it will be increased by 1.\nIf ",(0,i.kt)("em",{parentName:"p"},"var")," does not exist, it will be created and set to 1."),(0,i.kt)(r,{parameters:[{desc:"name of the variable to increment",opt:!1},{desc:"amount to increment (defaults to 1)",opt:!0}],syntax:"inc <var name>",examples:[{example:"inc myVar",text:"\n      <table>\n        <thead>\n          <th><i>myVar</i> value before the command</th>\n          <th><i>myVar</i> value after the command</th>\n        </thead>\n        <tbody>\n          <tr><td>12</td><td>13</td></tr>\n          <tr><td>'hello'</td><td>'hello1'</td></tr>\n          <tr><td>undefined</td><td>1</td></tr>\n        </tbody>\n      </table>\n      "},{example:"inc myVar 5",text:"\n      <table>\n        <thead>\n          <th><i>myVar</i> value before the command</th>\n          <th><i>myVar</i> value after the command</th>\n        </thead>\n        <tbody>\n          <tr><td>12</td><td>17</td></tr>\n          <tr><td>'hello'</td><td>'hello5'</td></tr>\n          <tr><td>undefined</td><td>5</td></tr>\n        </tbody>\n      </table>\n      "}],mdxType:"CommandDetails"}),(0,i.kt)("h3",{id:"dec"},"dec"),(0,i.kt)("p",null,"Given a context variable, it will be decreased by the specified amount.\nIf no amount is specified, it will be decreased by 1.\nIf ",(0,i.kt)("em",{parentName:"p"},"var")," does not exist, it will be created and set to -1."),(0,i.kt)(r,{parameters:[{desc:"name of the variable to decrease",opt:!1},{desc:"amount to decrease (defaults to -1)",opt:!0}],syntax:"dec <var name>",examples:[{example:"dec myVar",text:"\n      <table>\n        <thead>\n          <th><i>myVar</i> value before the command</th>\n          <th><i>myVar</i> value after the command</th>\n        </thead>\n        <tbody>\n          <tr><td>12</td><td>11</td></tr>\n          <tr><td>'hello'</td><td>NaN</td></tr>\n          <tr><td>undefined</td><td>-1</td></tr>\n        </tbody>\n      </table>\n      "},{example:"dec myVar 5",text:"\n      <table>\n        <thead>\n          <th><i>myVar</i> value before the command</th>\n          <th><i>myVar</i> value after the command</th>\n        </thead>\n        <tbody>\n          <tr><td>12</td><td>7</td></tr>\n          <tr><td>'hello'</td><td>NaN</td></tr>\n          <tr><td>undefined</td><td>-5</td></tr>\n        </tbody>\n      </table>\n      "}],mdxType:"CommandDetails"}),"```")}h.isMDXComponent=!0}}]);