"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[41074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248)",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Redis\u5165\u95e8\u6307\u5357",keywords:["redis"],description:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248) \u9605\u8bfb\u7b14\u8bb0",image:"https://img9.doubanio.com/view/subject/s/public/s28104066.jpg"},l=void 0,d={unversionedId:"redis-getting-started-2nd",id:"redis-getting-started-2nd",title:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248)",description:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248) \u9605\u8bfb\u7b14\u8bb0",source:"@site/src/docs/reading/redis-getting-started-2nd.md",sourceDirName:".",slug:"/redis-getting-started-2nd",permalink:"/docs/reading/redis-getting-started-2nd",draft:!1,tags:[],version:"current",lastUpdatedAt:1648736165,formattedLastUpdatedAt:"Mar 31, 2022",frontMatter:{title:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248)",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Redis\u5165\u95e8\u6307\u5357",keywords:["redis"],description:"Redis\u5165\u95e8\u6307\u5357(\u7b2c\u4e8c\u7248) \u9605\u8bfb\u7b14\u8bb0",image:"https://img9.doubanio.com/view/subject/s/public/s28104066.jpg"},sidebar:"tutorialSidebar",previous:{title:"Vim\u5b9e\u7528\u6280\u5de7",permalink:"/docs/reading/practical-vim"},next:{title:"Spring in Action",permalink:"/docs/reading/spring-in-action"}},s={},o=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"Redis\u53ef\u6267\u884c\u6587\u4ef6\u8bf4\u660e",id:"redis\u53ef\u6267\u884c\u6587\u4ef6\u8bf4\u660e",level:3},{value:"\u542f\u52a8Redis",id:"\u542f\u52a8redis",level:3},{value:"\u505c\u6b62 Redis",id:"\u505c\u6b62-redis",level:3},{value:"\u53d1\u9001\u547d\u4ee4",id:"\u53d1\u9001\u547d\u4ee4",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3}],p={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("h3",{id:"redis\u53ef\u6267\u884c\u6587\u4ef6\u8bf4\u660e"},"Redis\u53ef\u6267\u884c\u6587\u4ef6\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6587\u4ef6\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Redis-server"),(0,a.kt)("td",{parentName:"tr",align:null},"Redis\u670d\u52a1\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redis-cli"),(0,a.kt)("td",{parentName:"tr",align:null},"Redis\u547d\u4ee4\u884c\u5ba2\u6237\u7aef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redis-benchmark"),(0,a.kt)("td",{parentName:"tr",align:null},"Redis\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redis-check-aof"),(0,a.kt)("td",{parentName:"tr",align:null},"AOF\u6587\u4ef6\u4fee\u590d\u5de5\u5177")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redis-check-dump"),(0,a.kt)("td",{parentName:"tr",align:null},"RDB\u6587\u4ef6\u68c0\u67e5\u5de5\u5177")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redis-sentinel"),(0,a.kt)("td",{parentName:"tr",align:null},"Sentinel\u670d\u52a1\u5668\uff08\u4ec5\u57282.8\u7248\u4ee5\u540e\uff09")))),(0,a.kt)("h3",{id:"\u542f\u52a8redis"},"\u542f\u52a8Redis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redis-server # \u76f4\u63a5\u542f\u52a8\nredis-server --port 6380 # \u6307\u5b9a\u7aef\u53e3\u53f7\u542f\u52a8\n")),(0,a.kt)("h3",{id:"\u505c\u6b62-redis"},"\u505c\u6b62 Redis"),(0,a.kt)("p",null,"\u6b63\u786e\u505c\u6b62Redis\u7684\u65b9\u5f0f\u5e94\u8be5\u662f\u5411Redis\u53d1\u9001SHUTDOWN\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redis-cli SHUTDOWN\n")),(0,a.kt)("p",null,"\u5f53Redis\u6536\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"SHUTDOWN"),"\u547d\u4ee4\u540e\uff0c\u4f1a\u5148\u65ad\u5f00\u6240\u6709\u5ba2\u6237\u7aef\u8fde\u63a5\uff0c\u7136\u540e\u6839\u636e\u914d\u7f6e\u6267\u884c\u6301\u4e45\u5316\uff0c\u6700\u540e\u5b8c\u6210\u9000\u51fa\u3002"),(0,a.kt)("p",null,"Redis\u53ef\u4ee5\u59a5\u5584\u5904\u7406SIGTERM\u4fe1\u53f7\uff0c\u6240\u4ee5\u4f7f\u7528kill Redis\u8fdb\u7a0b\u7684PID\u4e5f\u53ef\u4ee5\u6b63\u5e38\u7ed3\u675fRedis\uff0c\u6548\u679c\u4e0e\u53d1\u9001SHUTDOWN\u547d\u4ee4\u4e00\u6837\u3002"),(0,a.kt)("h3",{id:"\u53d1\u9001\u547d\u4ee4"},"\u53d1\u9001\u547d\u4ee4"),(0,a.kt)("p",null,"redis-cli\u5411Redis\u53d1\u9001\u547d\u4ee4\u6709\u4e24\u79cd\u65b9\u5f0f:"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u662f\u5c06\u547d\u4ee4\u4f5c\u4e3aredis-cli\u7684\u53c2\u6570\u6267\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u8fde\u63a5redis\u5e76\u6267\u884c(IP\u4e3a127.0.0.1\uff0c\u7aef\u53e3\u53f7\u4e3a6379)\nredis-cli SHUTDOWN \n# \u6216\u8005\u6307\u5b9a\u5730\u5740\u548c\u7aef\u53e3\u53f7\nredis-cli -h 127.0.0.1 -p 6379 PING\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u4e0d\u9644\u5e26redis\u547d\u4ee4\u8fd0\u884credis-cli\uff0c\u8fd9\u6837\u4f1a\u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\uff0c\u53ef\u4ee5\u81ea\u7531\u8f93\u5165\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ redis-cli -h 127.0.0.1 -p 6379 # \u8fdb\u5165\u4ea4\u4e92\u6a21\u5f0f\nredis 127.0.0.1:6379> PING\nPONG\nredis 127.0.0.1:6379> ECHO hi\n"hi"\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"Redis\u652f\u6301\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e\u8fd9\u4e9b\u9009\u9879(\u6bd4\u5982\u542f\u52a8\u7aef\u53e3\u53f7\u3001\u65e5\u5fd7\u7ea7\u522b\u3001\u6301\u4e45\u5316\u7b49):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redis-server /path/to/redis.conf\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u542f\u52a8\u53c2\u6570\u4f20\u9012\u540c\u540d\u7684\u914d\u7f6e\u9009\u9879\u4f1a\u8986\u76d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u76f8\u5e94\u7684\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"redis-server /path/to/redis.conf --loglevel warning \n")),(0,a.kt)("p",null,"\u5728Redis\u8fd0\u884c\u65f6\u901a\u8fc7CONFIG SET\u547d\u4ee4\u5728\u4e0d\u91cd\u65b0\u542f\u52a8Redis\u7684\u60c5\u51b5\u4e0b\u52a8\u6001\u4fee\u6539\u90e8\u5206Redis\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"redis>CONFIG SET loglevel warning\nOK\n")))}c.isMDXComponent=!0}}]);