"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[63238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(r),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Sending data between Worker Threads",tags:["typescript","node.js"]},s=void 0,i={unversionedId:"nodejs-typescript/sending-data-worker-threads",id:"nodejs-typescript/sending-data-worker-threads",title:"Sending data between Worker Threads",description:"\u672c\u6587\u8f6c\u8f7d\u81ea Node.js TypeScript #13. Sending data between Worker Threads",source:"@site/src/docs/articles/nodejs-typescript/13-sending-data-worker-threads.md",sourceDirName:"nodejs-typescript",slug:"/nodejs-typescript/sending-data-worker-threads",permalink:"/docs/articles/nodejs-typescript/sending-data-worker-threads",draft:!1,editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/nodejs-typescript/13-sending-data-worker-threads.md",tags:[{label:"typescript",permalink:"/docs/articles/tags/typescript"},{label:"node.js",permalink:"/docs/articles/tags/node-js"}],version:"current",lastUpdatedAt:1662779172,formattedLastUpdatedAt:"Sep 10, 2022",sidebarPosition:13,frontMatter:{title:"Sending data between Worker Threads",tags:["typescript","node.js"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to Worker Threads with TypeScript",permalink:"/docs/articles/nodejs-typescript/worker-threads"},next:{title:"Vim Tricks",permalink:"/docs/articles/vim-tricks/"}},l={},p=[{value:"Communicating using the MessageChannel",id:"communicating-using-the-messagechannel",level:2},{value:"Creating a new MessageChannel",id:"creating-a-new-messagechannel",level:3},{value:"Sending MessagePort through a transferList",id:"sending-messageport-through-a-transferlist",level:3},{value:"Different ways of sending the data",id:"different-ways-of-sending-the-data",level:2},{value:"Sending MessagePort through transferList",id:"sending-messageport-through-transferlist",level:3},{value:"Sending ArrayBuffers",id:"sending-arraybuffers",level:3},{value:"Sharing the data using SharedArrayBuffer",id:"sharing-the-data-using-sharedarraybuffer",level:3},{value:"Summary",id:"summary",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u8f6c\u8f7d\u81ea ",(0,a.kt)("a",{parentName:"p",href:"https://wanago.io/2019/05/13/node-js-typescript-13-sending-data-worker-threads/"},"Node.js TypeScript #13. Sending data between Worker Threads"))),(0,a.kt)("p",null,"The Worker Threads give us quite exciting features when compared to, for example, child processes. In this article, we create our instances of the MessageChannel to communicate with the Worker Threads. Aside from that, we also share the data between them: it\u2019s something that is not possible with child processes."),(0,a.kt)("h2",{id:"communicating-using-the-messagechannel"},"Communicating using the MessageChannel"),(0,a.kt)("p",null,"There are a few ways to communicate with Node.js Worker Threads. In the previous part of this series, aside from passing the data through ",(0,a.kt)("inlineCode",{parentName:"p"},"workerData"),", we\u2019ve used the ",(0,a.kt)("inlineCode",{parentName:"p"},"parentPort")," to send the data from the worker thread to the parent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="worker.ts"',title:'"worker.ts"'},"import { parentPort, workerData } from 'worker_threads';\n \nfunction factorial(n: number): number {\n  if(n === 1 || n === 0){\n    return 1;\n  }\n  return factorial(n - 1) * n;\n}\n \nparentPort.postMessage(\n  factorial(workerData.value)\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import { Worker } from 'worker_threads';\n \nconst worker = new Worker('./worker.js', {\n  workerData: {\n    value: 15,\n    path: './worker.ts'\n  }\n});\n \nworker.on('message', (result) => {\n  console.log(result);\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the example above we pass two different paths, both to ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"worker.ts"),". This is connected to the fact that we can\u2019t as of now create worker threads purely from TypeScript files. For more information check out the previous part of this series.")),(0,a.kt)("p",null,"While this is a perfectly fine solution, there is more to it. We can create our ports if we find ourselves in a situation requiring a more complex solution."),(0,a.kt)("h3",{id:"creating-a-new-messagechannel"},"Creating a new MessageChannel"),(0,a.kt)("p",null,"A surprising fact is that the MessageChannel does not have any methods on its own. The only two properties it has are ",(0,a.kt)("inlineCode",{parentName:"p"},"port1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"port2"),", both instances of MessagePort."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MessageChannel } from 'worker_threads';\n \nconst { port1, port2 } = new MessageChannel();\n")),(0,a.kt)("p",null,"Each one of the ports represents one end of the communication channel. Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"parentPort")," is also an instance of the MessagePort, we can guess that our new ports also have the ",(0,a.kt)("inlineCode",{parentName:"p"},"postMessage")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MessageChannel } from 'worker_threads';\n \nconst { port1, port2 } = new MessageChannel();\n \nport1.postMessage('Hello world!');\n \nport2.on('message', (message) => {\n  console.log(message);\n});\n")),(0,a.kt)("p",null,"The MessageChannel is capable of working without involving any Worker Threads, as in the example above. To fully understand their purpose, let\u2019s use them with a worker."),(0,a.kt)("h3",{id:"sending-messageport-through-a-transferlist"},"Sending MessagePort through a transferList"),(0,a.kt)("p",null,"To set up such communication, we need to send one of the ports to the other thread, while listening to messages on the other end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import { Worker, MessageChannel } from 'worker_threads';\nconst { port1, port2 } = new MessageChannel();\n \nconst worker = new Worker('./worker.js', {\n  workerData: {\n    path: './worker.ts'\n  }\n});\n \nport1.on('message', (result) => {\n  console.log(result);\n});\n \nworker.postMessage({ port: port2, value: 15 });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="worker.ts"',title:'"worker.ts"'},"import { parentPort } from 'worker_threads';\nimport Data from './Data';\n \nfunction factorial(n: number): number {\n  if(n === 1 || n === 0){\n    return 1;\n  }\n  return factorial(n - 1) * n;\n}\n \nparentPort.on('message', (data: Data) => {\n  const { port } = data;\n  port.postMessage(factorial(data.value));\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Data.ts"',title:'"Data.ts"'},"import { MessagePort } from 'worker_threads';\n \nexport default interface Data {\n  port: MessagePort;\n  value: number;\n}\n")),(0,a.kt)("p",null,"Well, almost there! Running the above code results in an error:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MessagePort was found in message but not listed in transferList")),(0,a.kt)("h2",{id:"different-ways-of-sending-the-data"},"Different ways of sending the data"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transferList")," that the error mentions is an additional argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"postMessage")," function. The above is connected to how the ",(0,a.kt)("inlineCode",{parentName:"p"},"postMessage")," function works. By default, it creates a clone of the data that we send, but we can change that behavior with the ",(0,a.kt)("inlineCode",{parentName:"p"},"transferList"),". This is enforced if we use MessagePort. Let\u2019s improve the example from above:"),(0,a.kt)("h3",{id:"sending-messageport-through-transferlist"},"Sending MessagePort through transferList"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import { Worker, MessageChannel } from 'worker_threads';\nconst { port1, port2 } = new MessageChannel();\n \nconst worker = new Worker('./worker.js', {\n  workerData: {\n    path: './worker.ts'\n  }\n});\n \nport1.on('message', (result) => {\n  console.log(result);\n});\n \nworker.postMessage({ port: port2, value: 15 }, [port2]);\n")),(0,a.kt)("p",null,"Now we explicitly state that we don\u2019t want a clone of the  ",(0,a.kt)("inlineCode",{parentName:"p"},"port2"),". Thanks to that, we pass an original object to the worker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"worker.postMessage({ port: port2, value: 15 }, [port2]);\n")),(0,a.kt)("p",null,"The MessageChannel might prove to be useful with more complex algorithms where we create multiple threads and would like to message the main thread from one of our nested Worker Threads."),(0,a.kt)("h3",{id:"sending-arraybuffers"},"Sending ArrayBuffers"),(0,a.kt)("p",null,"In the previous examples, we send elementary data like a number. Nothing restraints us from sending more complex data structures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [ 11, 12, 13, 14, 15 ];\n \nworker.postMessage({ port: port2, value: numbers }, [port2]);\n")),(0,a.kt)("p",null,"It works without issues, but in the example above the ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers"),", array is cloned. The more complex the data structure, the more computing power it takes to clone it."),(0,a.kt)("p",null,"We can prevent that from happening. To do that, we need to use the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," that differs a bit from the Buffer that we cover in the ",(0,a.kt)("a",{parentName:"p",href:"https://wanago.io/2019/02/25/node-js-typescript-3-the-buffer/"},"third part of this series"),". One of the easiest ways to create it is to use an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"},"Uint8Array")," that represents an array of 8-bit unsigned integers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const array = new Uint8Array([ 11, 12, 13, 14, 15 ]);\n \nworker.postMessage({ port: port2, value: array }, [port2, array.buffer]);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="worker.ts"',title:'"worker.ts"'},"parentPort.on('message', (data: Data) => {\n  const { port, value } = data;\n  value.forEach((number => {\n    port.postMessage(factorial(number));\n  }))\n});\n")),(0,a.kt)("p",null,"As you can see, the ArrayBuffer buffer that we need is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"array.buffer")," property. Since we operate on bytes here, we need to be aware of the restraints. Let\u2019s look at how the number 256 is represented in binary:\n",(0,a.kt)("img",{parentName:"p",src:"https://wanago.io/wp-content/uploads/2019/05/binary.png",alt:"binary.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2\u2078  = 256")),(0,a.kt)("p",null,"When we look at the example above we can figure out that the number 256 does not fit into eight bit.Uint8Array ignores excess data and due to that, 256 equals 0. You can use Uint16Array instead, but keep in mind that every element of that array uses more memory."),(0,a.kt)("p",null,"A crucial thing is that when we transfer the buffer and append it to the transferList, it is no longer available to the sender."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const array = new Uint8Array([ 11, 12, 13, 14, 15 ]);\n \nworker.postMessage({ port: port2, value: array }, [port2, array.buffer]);\n \nconsole.log(array.buffer);\n\n//> TypeError: Cannot perform Construct on a neutered ArrayBuffer\n")),(0,a.kt)("p",null,"The above is a mechanism implemented to guarantee no race conditions between 2 different threads trying to access the same chunk of memory. It is a fundamental issue with multithreading that is tackled in multiple ways in the multithreading world \u2013 for example with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lock_(computer_science)"},"locks"),"."),(0,a.kt)("h3",{id:"sharing-the-data-using-sharedarraybuffer"},"Sharing the data using SharedArrayBuffer"),(0,a.kt)("p",null,"The above restraint, while preventing us from destroying our data, has a workaround. When using Worker Threads, we can designate a piece of memory accessible for more than one thread. To do that, we need to create Uint8Array using a special type of a buffer called ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedArrayBuffer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const sharedArrayBuffer = new SharedArrayBuffer(2);\nconst array = new Uint8Array(sharedArrayBuffer);\narray[0] = 11;\narray[1] = 12;\n \nworker.postMessage({ port: port2, value: array }, [port2]);\n")),(0,a.kt)("p",null,"This way the array is neither cloned, nor it is unavailable to the sender. We need to be especially careful though we stripped ourselves from the built-in mechanism that keeps the integrity of the data. You risk changing a value in one thread and expecting it to be something else in another thread."),(0,a.kt)("p",null,"Sharing arrays can come in handy, but in TypeScript, we use lots of objects. Currently, ECMA Script does not contain shared objects, but we can ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/51053222/nodejs-worker-threads-shared-object-store"},"imitate similar behavior using DataView"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this article, we dived deeper into Node.js Worker Threads, focusing on how can we communicate between Worker Threads and send data. We used MessageChannel to create a two-way communication channel between Node.js Worker Threads. Aside from that, we implemented different approaches to sending data between threads. It included cloning, sharing the data between multiple threads and restricting the access to just one thread through the ",(0,a.kt)("inlineCode",{parentName:"p"},"transferList"),"."))}c.isMDXComponent=!0}}]);