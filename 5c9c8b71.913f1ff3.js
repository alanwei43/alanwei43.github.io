(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),l=(t(0),t(308)),o={title:"frp\u8fde\u63a5 EOF \u5931\u8d25\u95ee\u9898",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["frp"],draft:!1},c={permalink:"/blog/2021/03/21/frp-eof",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-21-frp-eof.md",source:"@site/src/blog/2021-03-21-frp-eof.md",description:"\u6765\u6e90: \u8bb0\u4e00\u6b21frp\u7684\u88ab\u963b\u65ad\u7684\u95ee\u9898",date:"2021-03-21T00:00:00.000Z",tags:[{label:"frp",permalink:"/blog/tags/frp"}],title:"frp\u8fde\u63a5 EOF \u5931\u8d25\u95ee\u9898",readingTime:1.355,truncated:!0,prevItem:{title:"Docusaurus \u914d\u7f6e GitHub Action \u81ea\u52a8\u53d1\u5e03",permalink:"/blog/2021/03/21/docusaurus-github-deploy"},nextItem:{title:"linux\u4e0b\u67e5\u770b\u6307\u5b9a\u8fdb\u7a0b\u7684\u6240\u6709\u8fde\u63a5\u4fe1\u606f",permalink:"/blog/2021/03/21/linux-all-ps-connection"}},p=[{value:"\u672c\u5730\u6293\u5305",id:"\u672c\u5730\u6293\u5305",children:[]},{value:"\u670d\u52a1\u7aef\u6293\u5305",id:"\u670d\u52a1\u7aef\u6293\u5305",children:[]},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",children:[]},{value:"\u53e6\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5",id:"\u53e6\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5",children:[]}],i={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6765\u6e90: ",Object(l.b)("a",{parentName:"p",href:"https://blog.phpgao.com/frp_tcp_reset.html"},"\u8bb0\u4e00\u6b21frp\u7684\u88ab\u963b\u65ad\u7684\u95ee\u9898")),Object(l.b)("p",null,"\u4e3a\u4e86\u5728\u5bb6\u8c03\u8bd5\u65b9\u4fbf\uff0c\u8001\u9ad8\u4f7f\u7528frp\u5c06\u81ea\u5df1\u653e\u5728\u516c\u53f8\u7684\u5f00\u53d1\u673a\u5668\u7684ssh\u7aef\u53e3\u5f00\u653e\u51fa\u6765\u4e86\uff0c\u4f46\u662f\u914d\u7f6efrp\u5ba2\u6237\u7aef\u7684\u8fc7\u7a0b\u4e2d\u603b\u662f\u51fa\u73b0\u4e0b\u9762\u7684\u4e00\u53e5\u8bdd\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"2019/08/30 23:42:47 [W] [service.go:82] login to server failed: EOF\nEOF\n")),Object(l.b)("p",null,"\u5f00\u59cb\u6000\u7591\u662ffrp\u7684\u7248\u672c\u95ee\u9898\uff0c\u4e8e\u662f\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u6362\u4e0a\u4e86\u6700\u65b0\u7684\u7248\u672c\uff0c\u7ed3\u679c\u8fd8\u662f\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\uff0c\u7ee7\u7eed\u5c1d\u8bd5\u66f4\u6362\u7aef\u53e3\uff0c\u95ee\u9898\u4f9d\u65e7\u3002"),Object(l.b)("p",null,"\u7f51\u4e0a\u641c\u7d22\u4e00\u5708\uff0c\u53d1\u73b0\u9047\u5230",Object(l.b)("inlineCode",{parentName:"p"},"login to server failed: EOF"),"\u95ee\u9898\u7684\u4eba\u8fd8\u771f\u4e0d\u5c11\uff0c\u4e0b\u9762\u770b\u770b\u8001\u9ad8\u662f\u5982\u4f55\u89e3\u51b3\u7684\u5427\uff01"),Object(l.b)("h3",{id:"\u672c\u5730\u6293\u5305"},"\u672c\u5730\u6293\u5305"),Object(l.b)("p",null,"\u5f00\u542fWireshark\uff0c\u9009\u62e9\u7f51\u5361\uff0c\u8f93\u5165\u8fc7\u6ee4\u89c4\u5219\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"tcp and ip.addr==xxx.xxx.220.109\n")),Object(l.b)("p",null,"wireshark \u6293\u5305"),Object(l.b)("p",null,"\u540e\u9762\u7684\u90a3\u4e09\u4e2aRST\u5305\u5f88\u53ef\u7591\uff0c\u5176\u4e2d\u8fd8\u6709\u4e09\u4e2aIRC\u534f\u8bae\u7684\u5305\uff0c\u6253\u5f00\u770b\u4e00\u4e0b\uff0c\u53d1\u73b0\u539f\u6765\u662f\u8ba4\u8bc1\u6570\u636e\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{"version":"0.28.2","hostname":"","os":"darwin","arch":"amd64","user":"","privilege_key":"144fa23b09635f403ccd18","timestamp":1567119104,"run_id":"","pool_count":1}\n')),Object(l.b)("h3",{id:"\u670d\u52a1\u7aef\u6293\u5305"},"\u670d\u52a1\u7aef\u6293\u5305"),Object(l.b)("p",null,"\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165\u547d\u4ee4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# xxxx \u4e3afrp\u76d1\u542c\u7aef\u53e3\ntcpdump -i eth0  port xxxx -n\n\n23:57:54.041136 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [S], seq 2454088299, win 65535, options [mss 1460,nop,wscale 6,nop,nop,TS val 1598952560 ecr 0,sackOK,eol], length 0\n23:57:54.041203 IP xx.xx.xx.xx.PPPP > 180.167.229.162.64674: Flags [S.], seq 2502814427, ack 2454088300, win 65160, options [mss 1460,sackOK,TS val 3508779989 ecr 1598952560,nop,wscale 6], length 0\n23:57:54.171283 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [.], ack 1, win 2058, options [nop,nop,TS val 1598952691 ecr 3508779989], length 0\n23:57:54.171670 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [P.], seq 1:13, ack 1, win 2058, options [nop,nop,TS val 1598952692 ecr 3508779989], length 12\n23:57:54.171694 IP xx.xx.xx.xx.PPPP > 180.167.229.162.64674: Flags [.], ack 13, win 1018, options [nop,nop,TS val 3508780120 ecr 1598952692], length 0\n23:57:54.171896 IP xx.xx.xx.xx.PPPP > 180.167.229.162.64674: Flags [P.], seq 1:13, ack 13, win 1018, options [nop,nop,TS val 3508780120 ecr 1598952692], length 12\n23:57:54.172366 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [P.], seq 13:25, ack 1, win 2058, options [nop,nop,TS val 1598952692 ecr 3508779989], length 12\n23:57:54.172391 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [R.], seq 25, ack 1, win 8224, length 0\n23:57:54.301735 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [R.], seq 13, ack 1, win 8224, length 0\n23:57:54.302089 IP 180.167.229.162.64674 > xx.xx.xx.xx.PPPP: Flags [R.], seq 13, ack 13, win 8224, length 0\n")),Object(l.b)("p",null,"\u597d\u561b\uff0c\u6ce8\u610f\u6700\u540e\u4e09\u4e2a\u5305\uff0c\u4e5f\u662fRST\uff0c\u800c\u4e14\u65b9\u5411\u521a\u597d\u548c\u6211\u5728\u672c\u5730\u6293\u5305\u76f8\u53cd\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u53d7\u5230\u4e86\u66ff\u8eab\u653b\u51fb\uff01\ud83d\ude04"),Object(l.b)("h3",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),Object(l.b)("p",null,"\u770b\u6765\u516c\u53f8\u7684\u9632\u706b\u5899\u5e94\u8be5\u662f\u63a2\u6d4b\u5230\u4e86\u67d0\u4e9b\u7279\u5f81\u6d41\u91cf\u800c\u89e6\u53d1\u4e86\u89c4\u5219\uff0c\u5bfc\u81f4frp\u8ba4\u8bc1\u7684\u5305\u88ab\u91cd\u7f6e\uff0c\u4e8e\u662f\u670d\u52a1\u7aeffrp\u5173\u95ed\u4e86\u94fe\u63a5\uff0c\u800c\u7ffb\u5f00\u6e90\u7801\uff0c\u6211\u4eec\u80fd\u770b\u5230\u518d\u53d1\u9001\u5b8c\u8ba4\u8bc1\u4fe1\u606f\u540e\u6267\u884c\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"ReadMsgInto")," \u65b9\u6cd5\uff0c\u56e0\u4e3a\u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u5f97\u5230\u4e86EOF\u9519\u8bef\uff01"),Object(l.b)("p",null,"\u56de\u5934\u518d\u770bwireshark\u7684RST\u5305\u4e4b\u524d\u7684\u4e09\u4e2aIRC\u5305\uff0c\u7b49\u7b49\uff0cIRC\u662f\u4ec0\u4e48\u9b3c\uff1f\u5728FRP\u6e90\u4ee3\u7801\u4e2d\u6839\u672c\u641c\u4e0d\u5230\u8fd9\u4e2a\u5173\u952e\u5b57\u554a\uff01\u4ece\u6e90\u4ee3\u7801\u7684\u767b\u5f55\u903b\u8f91\u6765\u770b\uff0c\u57fa\u672c\u90fd\u662fTCP\u7684\u64cd\u4f5c\u3002\u4e8e\u662f\u518d\u8bd5\u7740\u6293\u4e00\u6b21\u5305\uff0cIRC\u53c8\u53d8\u56de\u4e86TCP\uff0c\u770b\u6765wireshark\u4e5f\u6709\u8bef\u62a5\u7684\u60c5\u51b5\u53d1\u751f\u3002"),Object(l.b)("p",null,"\u7a76\u5176\u539f\u56e0\uff0c\u5f88\u6709\u53ef\u80fd\u662f\u8fd9\u4e00\u6bb5\u660e\u6587\u6570\u636e\u66b4\u9732\u4e86frp\uff0c\u7136\u540e\u5bfc\u81f4\u88ab\u9632\u706b\u5899\u5c01\u6740\u3002"),Object(l.b)("p",null,"\u90a3\u4e48\u5982\u4f55\u89e3\u51b3",Object(l.b)("inlineCode",{parentName:"p"},"login to server failed: EOF"),"\u7684\u95ee\u9898\u5462\uff1f"),Object(l.b)("p",null,"\u5176\u5b9e\u770b\u4e86\u6e90\u4ee3\u7801\u5c31\u77e5\u9053\u4e86\uff0c\u539f\u6765frp\u5728v0.25.0\u7248\u672c\u540e\u589e\u52a0\u4e86\u4e00\u4e2a\u5ba2\u6237\u7aef\u9009\u9879\uff0c\u652f\u6301\u4e86tls\u4f20\u8f93\uff0c\u4e5f\u5c31\u662f\u4f20\u8bf4\u4e2d\u7684\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u539f\u6765\u5728frps\u521d\u59cb\u5316\u670d\u52a1\u65f6\uff0c\u5728\u5185\u5b58\u4e2d\u5df2\u7ecf\u4e3a\u6211\u4eec\u751f\u6210\u4e86\u4e00\u4e2a\u7b80\u6613\u7684TLS\u670d\u52a1\uff0c\u7b80\u76f4\u5b8c\u7f8e\uff01"),Object(l.b)("p",null,"\u5f00\u542f\u7684\u529e\u6cd5\u5f88\u7b80\u5355\uff0c\u5728\u5ba2\u6237\u7aef\u539f\u6765\u7684",Object(l.b)("inlineCode",{parentName:"p"},"[common]"),"\u914d\u7f6e\u4e2d\u52a0\u5165",Object(l.b)("inlineCode",{parentName:"p"},"tls_enable = true"),"\u5373\u53ef!"),Object(l.b)("h3",{id:"\u53e6\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5"},"\u53e6\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5"),Object(l.b)("p",null,"\u5176\u5b9e\u561b\uff0c\u8fd8\u6709\u4e00\u79cd\u89e3\u51b3\u529e\u6cd5\uff0c\u4f46\u662f\u4e0d\u4e00\u5b9a\u80fd\u884c\uff0c\u800c\u4e14\u53ef\u80fd\u4f1a\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\uff01"),Object(l.b)("p",null,"\u4ec0\u4e48\u65b9\u6cd5\u5462\uff1f\u65e2\u7136\u9632\u706b\u5899\u68c0\u6d4b\u4e86\u6211\u7684tcp\uff0c\u90a3\u6211\u6362\u6210udp\u884c\u4e0d\u884c\uff1f"),Object(l.b)("p",null,"frp\u652f\u6301\u4f7f\u7528kcp\u4f5c\u4e3a\u5e95\u5c42\u7684\u901a\u8baf\u534f\u8bae\uff0c\u800ckcp\u9ed8\u8ba4\u5c31\u662f\u57fa\u4e8eudp\u534f\u8bae\uff0c\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u8d76\u7d27\u8bd5\u4e00\u8bd5\uff01"),Object(l.b)("p",null,"\u6b65\u9aa4(\u5047\u8bbekcp\u7684\u7aef\u53e3\u4e3a7000)\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u7aef\u539f\u6765\u7684",Object(l.b)("inlineCode",{parentName:"li"},"[common]"),"\u914d\u7f6e\u4e2d\u52a0\u5165",Object(l.b)("inlineCode",{parentName:"li"},"kcp_bind_port = 7000"),"\uff0c\u4f7f\u5176\u652f\u6301udp"),Object(l.b)("li",{parentName:"ol"},"\u5728\u5ba2\u6237\u7aef\u539f\u6765\u7684",Object(l.b)("inlineCode",{parentName:"li"},"[common]"),"\u5904\u52a0\u5165",Object(l.b)("inlineCode",{parentName:"li"},"protocol = kcp"),"\u5373\u53ef\uff0c\u6ce8\u610f\u7aef\u53e3\u4e00\u5b9a\u8981\u5bf9\u4e0a\uff01")))}b.isMDXComponent=!0},308:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),b=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},x=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=b(t),x=r,f=u["".concat(o,".").concat(x)]||u[x]||s[x]||l;return t?a.a.createElement(f,c(c({ref:n},i),{},{components:t})):a.a.createElement(f,c({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=x;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}x.displayName="MDXCreateElement"}}]);