"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[74562],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),b=u(n),f=a,d=b["".concat(p,".").concat(f)]||b[f]||s[f]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83223:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Windows \u4e0a\u7684TCP\u4ee3\u7406\u8bbe\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["windows","tcp","powershell"],draft:!1,hide_table_of_contents:!1},p=void 0,u={permalink:"/blog/2021/04/11/tcp-proxy-in-windows",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-tcp-proxy-in-windows.md",source:"@site/src/blog/2021-04-11-tcp-proxy-in-windows.md",title:"Windows \u4e0a\u7684TCP\u4ee3\u7406\u8bbe\u7f6e",description:"\u76ee\u524d\u6211\u4eec\u51fa\u73b0\u4e00\u4e2a\u9700\u6c42\u662f\u5c06\u5916\u7f51\u6765\u7684TCP\u8bf7\u6c42\u4ee3\u7406\u5230\u5185\u7f51\u7684\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a, \u6bd4\u5982\u6211\u4eec\u7684 Windows \u4e0a\u9700\u8981\u90e8\u7f72\u4e00\u4e2a RabbitMQ \u63a8\u9001\u670d\u52a1, \u4f46\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528 Windows \u7248\u672c\u7684 RabbitMQ, \u60f3\u5c06 RabbitMQ \u90e8\u7f72\u5728Linux\u670d\u52a1\u5668\u4e0a, \u786e\u5b9e\u6709\u5f88\u591a\u5176\u4ed6\u65b9\u5f0f\u6765\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42, \u6bd4\u5982\u518d\u52a0\u4e00\u4e2a\u670d\u52a1\u5668, \u7136\u540e\u5206\u914d\u4e00\u4e2a\u516c\u7f51IP, \u6700\u540e\u6211\u4eec\u9009\u62e9\u5728 Windows \u670d\u52a1\u5668\u4e0a\u5b89\u88c5 VMware \u7136\u540e\u865a\u62df\u4e00\u4e2aUbuntu\u7cfb\u7edf. \u73b0\u5728\u9700\u8981\u5c06\u5916\u7f51\u7684 RabbitMQ \u8bf7\u6c42\u6620\u5c04\u5230 Ubuntu \u4e0a, \u5927\u6982\u8bf7\u6c42\u9014\u5f84\u5982\u4e0b:",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"windows",permalink:"/blog/tags/windows"},{label:"tcp",permalink:"/blog/tags/tcp"},{label:"powershell",permalink:"/blog/tags/powershell"}],readingTime:3.355,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Windows \u4e0a\u7684TCP\u4ee3\u7406\u8bbe\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["windows","tcp","powershell"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"Spring Boot Maven \u63d2\u4ef6\u4f7f\u7528",permalink:"/blog/2021/04/11/spring-boot-maven-plugin"},nextItem:{title:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",permalink:"/blog/2021/04/11/ubuntu-install-root-ca-certificate"}},c={authorsImageUrls:[void 0]},s=[],b={toc:s};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u51fa\u73b0\u4e00\u4e2a\u9700\u6c42\u662f\u5c06\u5916\u7f51\u6765\u7684TCP\u8bf7\u6c42\u4ee3\u7406\u5230\u5185\u7f51\u7684\u67d0\u4e2a\u670d\u52a1\u5668\u4e0a, \u6bd4\u5982\u6211\u4eec\u7684 Windows \u4e0a\u9700\u8981\u90e8\u7f72\u4e00\u4e2a RabbitMQ \u63a8\u9001\u670d\u52a1, \u4f46\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528 Windows \u7248\u672c\u7684 RabbitMQ, \u60f3\u5c06 RabbitMQ \u90e8\u7f72\u5728Linux\u670d\u52a1\u5668\u4e0a, \u786e\u5b9e\u6709\u5f88\u591a\u5176\u4ed6\u65b9\u5f0f\u6765\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42, \u6bd4\u5982\u518d\u52a0\u4e00\u4e2a\u670d\u52a1\u5668, \u7136\u540e\u5206\u914d\u4e00\u4e2a\u516c\u7f51IP, \u6700\u540e\u6211\u4eec\u9009\u62e9\u5728 Windows \u670d\u52a1\u5668\u4e0a\u5b89\u88c5 VMware \u7136\u540e\u865a\u62df\u4e00\u4e2aUbuntu\u7cfb\u7edf. \u73b0\u5728\u9700\u8981\u5c06\u5916\u7f51\u7684 RabbitMQ \u8bf7\u6c42\u6620\u5c04\u5230 Ubuntu \u4e0a, \u5927\u6982\u8bf7\u6c42\u9014\u5f84\u5982\u4e0b:"),(0,o.kt)("p",null,"Client(120.80.123.226) -> Windows(Public IP: 204.79.197.200, VMWare NAT IP: 192.168.60.1) -> Ubuntu(VMware NAT IP: 192.168.60.128)"),(0,o.kt)("p",null,"(RabbitMQ\u9ed8\u8ba4\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u662f5672)"),(0,o.kt)("p",null,"\u73b0\u5728\u5f53 Client \u8bf7\u6c42 204.79.197.200:5672 \u8ba2\u9605\u6d88\u606f\u65f6, Windows \u670d\u52a1\u5668\u9700\u8981\u5c06 120.80.123.226:xxxxx \u8bf7\u6c42\u6620\u5c04\u5230 Ubuntu \u7684 192.168.60.128:5672 \u4e0a, \u5bf9\u4e8e\u8fd9\u4e2a\u9700\u6c42\u53ef\u4ee5\u4f7f\u7528 powershell \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"netsh interface portproxy")," \u547d\u4ee4\u6765\u5b8c\u6210 TCP Proxy."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://serverfault.com/questions/17990/easy-tcp-proxy-on-windows"},"\u53ea\u9700\u8bbe\u7f6e\u5982\u4e0b")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"netsh interface portproxy add v4tov4 listenport=5672 listenaddress=201.79.167.200 connectaddress=192.168.60.128 connectport=5672 protocol=tcp\n")),(0,o.kt)("p",null,"\u5177\u4f53\u53c2\u6570\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://technet.microsoft.com/en-us/library/cc776297(v=ws.10).aspx"},"MSDN"),", \u5927\u610f\u662f\u76d1\u542c\u5bf9\u4e8e tcp://204.79.197.200:5672 \u7684TCP\u8bf7\u6c42, \u7136\u540e\u4ee3\u7406\u5230 tcp://192.168.60.128:5672 \u4e0a.\nRabbitMQ\u8fd8\u7528\u5230\u4e86\u5176\u4ed6\u7aef\u53e3\u53f7, \u9700\u8981\u4f9d\u6b21\u6dfb\u52a0."),(0,o.kt)("p",null,"\u6211\u7b2c\u4e00\u6b21\u5728\u6d4b\u8bd5\u670d\u52a1\u5668\u4e0a\u6d4b\u8bd5\u901a\u8fc7\u4e86, \u540e\u6765\u90e8\u7f72\u5230\u6b63\u5f0f\u73af\u5883\u600e\u4e48\u6d4b\u8bd5\u90fd\u4e0d\u901a\u8fc7. \u5468\u4e94\u6298\u817e\u4e86\u4e00\u5929, \u628a\u8d5b\u95e8\u94c1\u514b\u90fd\u5378\u8f7d\u4e86, \u7a81\u7136\u5468\u4e00\u4e0a\u73ed\u660e\u767d\u4e86."),(0,o.kt)("p",null,"\u6d4b\u8bd5\u670d\u52a1\u5668\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\u5668, \u53ea\u7ed1\u5b9a\u4e86\u4e00\u4e2a\u516c\u7f51IP\u5730\u5740, \u6ca1\u6709\u5c40\u57df\u7f51IP\u5730\u5740, \u6240\u4ee5\u4e0a\u8ff0\u8bbe\u7f6e\u662f\u751f\u6548\u7684. \u800c\u6b63\u5f0f\u670d\u52a1\u5668\u88ab\u90e8\u7f72\u5728\u4e00\u4e2a\u5c40\u57df\u7f51\u4e2d\u4e86, \u4e0d\u4ec5\u914d\u7f6e\u4e86\u516c\u7f51IP\u8fd8\u6709\u4e00\u4e2a\u5c40\u57df\u7f51IP(\u5047\u8bbeIP\u662f192.168.1.50, \u7f51\u5173\u65f6192.168.1.1), \u8fd9\u5c31\u5bfc\u81f4\u4e0a\u8ff0\u7684\u914d\u7f6e\u65e0\u6cd5\u751f\u6548, \u56e0\u4e3a192.168.1.50\u90a3\u53f0Windows\u670d\u52a1\u5668\u538b\u6839\u5c31\u76d1\u542c\u4e0d\u5230\u516c\u7f51IP(204...), \u6b63\u5f0f\u73af\u5883\u7684TCP\u8bf7\u6c42\u5927\u6982\u5982\u4e0b:"),(0,o.kt)("p",null,"Client(120.80.123.226) -> Gateway(Public IP: 204.79.179.200, Private IP: 192.168.1.1) -> Windows(Public IP: 204.79.197.200, Private IP: 192.168.1.50, VMWare NAT IP: 192.168.60.1) -> Ubuntu(VMware NAT IP: 192.168.60.128)"),(0,o.kt)("p",null,"\u867d\u7136\u5f53\u65f6\u6b63\u5f0f\u670d\u52a1\u5668\u7684Gateway\u5c06 204.79.179.200 \u7684\u8bf7\u6c42\u90fd\u4f20\u9012\u7ed9\u4e86 192.168.1.50, \u53ef\u662f 192.168.1.50 \u63a5\u6536\u5230\u6570\u636e\u5305\u4e0a\u7684\u8bf7\u6c42IP\u5730\u5740\u662f 192.168.1.1 , \u5e76\u4e0d\u662f 204.79.179.200, \u6240\u4ee5\u6b63\u5f0f\u7684Windows\u670d\u52a1\u5668\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u8bbe\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"netsh interface portproxy add v4tov4 listenport=5672 listenaddress=192.168.1.50 connectaddress=192.168.60.128 connectport=5672 protocol=tcp\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u5f53\u65f6\u7684\u6b63\u5f0f\u73af\u5883\u7684\u7f51\u7edc\u8bbe\u7f6e\u60c5\u51b5. \u4f60\u9700\u8981\u641e\u6e05\u695a\u670d\u52a1\u5668\u7684\u7f51\u7edc\u4f4d\u7f6e\u548c\u60c5\u51b5, \u7136\u540e\u624d\u80fd\u8bbe\u7f6e\u6b63\u786e\u7684 listenaddress(TCP\u8bf7\u6c42\u7684IP\u5730\u5740) \u548c listenport(TCP\u8bf7\u6c42\u7684\u7aef\u53e3\u53f7)."),(0,o.kt)("p",null,"\u53e6\u5916 ",(0,o.kt)("inlineCode",{parentName:"p"},"netsh interface protproxy")," \u76ee\u524d\u53ea\u652f\u6301tcp\u534f\u8bae, \u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"protocol=tcp"),"\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u7701\u7565."))}f.isMDXComponent=!0}}]);