(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{271:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(313)),c=t(314),i={title:"\u5e38\u7528 Docker \u6536\u85cf\u96c6\u5408",sidebar_label:"Docker",keywords:["docker","wiz","wireguard","ipsec"],description:"Docker\u642d\u5efa\u4e3a\u77e5\u7b14\u8bb0 Wrireguard\u670d\u52a1"},l={unversionedId:"archives/docker",id:"archives/docker",isDocsHomePage:!1,title:"\u5e38\u7528 Docker \u6536\u85cf\u96c6\u5408",description:"Docker\u642d\u5efa\u4e3a\u77e5\u7b14\u8bb0 Wrireguard\u670d\u52a1",source:"@site/src/docs/archives/docker.md",slug:"/archives/docker",permalink:"/docs/archives/docker",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/archives/docker.md",version:"current",sidebar_label:"Docker",sidebar:"docs",previous:{title:"\u4e66\u7b7e\u96c6\u5408",permalink:"/docs/archives/bookmarks"},next:{title:"\u7f16\u8f91\u5668\u914d\u7f6e",permalink:"/docs/archives/editor"}},u=[{value:"\u4e3a\u77e5\u7b14\u8bb0",id:"\u4e3a\u77e5\u7b14\u8bb0",children:[]}],s={toc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)(c.a,{href:"2021-03-06-ipsec-server",mdxType:"Anchor"},"IPSec \u670d\u52a1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)(c.a,{href:"2021-03-06-wireguard-server",mdxType:"Anchor"},"Wireguard \u670d\u52a1"))),Object(o.b)("h2",{id:"\u4e3a\u77e5\u7b14\u8bb0"},"\u4e3a\u77e5\u7b14\u8bb0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name wiz \\\n  --restart=always \\\n  -it \\\n  -d \\\n  -v $(PWD):/wiz/storage \\\n  -p 3014:80 \\\n  wiznote/wizserver\n")))}p.isMDXComponent=!0},313:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?a.a.createElement(m,i(i({ref:r},u),{},{components:t})):a.a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},314:function(e,r,t){"use strict";t.d(r,"b",(function(){return c})),t.d(r,"a",(function(){return l}));var n=t(4),a=t(0),o=t.n(a),c=function(e){function r(r){return e.call(this,r)||this}return Object(n.a)(r,e),r.prototype.render=function(){var e=this.props.link?o.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):o.a.createElement("i",null,this.props.author);return o.a.createElement("section",null,o.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",e,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",e," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",o.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),o.a.createElement("hr",null))},r}(o.a.Component),i=t(315);o.a.Component;function l(e){if("string"!=typeof e.href)return o.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var r=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(e.href);if(!r)return o.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",e.href);if(e.href.endsWith(".md")||e.href.endsWith(".mdx"))return o.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",e.href);var t="/blog/"+r[1]+"/"+r[2]+"/"+r[3]+"/"+r[4];return o.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}}}]);