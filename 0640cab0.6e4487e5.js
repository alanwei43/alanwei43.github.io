(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{545:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||c;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r(0),a=r.n(n),c=r(547);function o(e){if("string"!=typeof e.href)return a.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var t=Object(c.a)(e.href);return a.a.createElement("a",{href:t,target:e.target,"data-component":"BlogLink"},e.children)}function i(e){var t="https://gitee.com/alanway/resources/raw/master/"+(e.src||e.href);return e.src?a.a.createElement("img",{alt:e.src,src:t}):a.a.createElement("a",{title:e.href,href:t,target:"_blank"},e.children)}},547:function(e,t,r){"use strict";function n(e){var t=/\/?(\d{4})\-(\d{2})\-(\d{2})\-([^\/]+)?$/g.exec(e);if(!t||5!==t.length)return console.warn(e+" \u5339\u914d\u5931\u8d25"),null;var r=t[1],n=t[2],a=t[3],c=t[4];return c.endsWith(".md")&&(c=c.substr(0,c.length-3)),c.endsWith(".mdx")&&(c=c.substr(0,c.length-4)),"/blog/"+r+"/"+n+"/"+a+"/"+c}r.d(t,"a",(function(){return n}))},548:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i.a})),r.d(t,"c",(function(){return i.b}));var n=r(4),a=r(0),c=r.n(a),o=function(e){function t(t){return e.call(this,t)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",r=this.props.link?c.a.createElement("a",{href:e,target:"_blank"},this.props.author):c.a.createElement("i",null,this.props.author);return c.a.createElement("section",null,c.a.createElement("ul",{style:{marginLeft:"-1em"}},c.a.createElement("li",null,"\u4f5c\u8005: ",r),c.a.createElement("li",null,"\u6765\u6e90: ",c.a.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),c.a.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",r," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",c.a.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",c.a.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")))},t}(c.a.Component),i=r(546)},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(545)),o=r(548),i={title:"\u7f16\u7a0b\u8bed\u8a00\u6587\u7ae0\u5217\u8868",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u7f16\u7a0b\u8bed\u8a00",custom_edit_url:null,keywords:["java","javascript","c#","css","html"],description:"\u5173\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u535a\u6587\u5217\u8868"},l={unversionedId:"archives/program",id:"archives/program",isDocsHomePage:!1,title:"\u7f16\u7a0b\u8bed\u8a00\u6587\u7ae0\u5217\u8868",description:"\u5173\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u535a\u6587\u5217\u8868",source:"@site/src/docs/archives/program.md",slug:"/archives/program",permalink:"/docs/archives/program",editUrl:null,version:"current",sidebar_label:"\u7f16\u7a0b\u8bed\u8a00",sidebar:"docs",previous:{title:"\u535a\u5ba2\u6587\u7ae0\u5206\u7c7b",permalink:"/docs/archives/"},next:{title:"\u6587\u7ae0\u8f6c\u6458",permalink:"/docs/archives/literature"}},u=[{value:"JavaScript",id:"javascript",children:[]}],s={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"javascript"},"JavaScript"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)(o.a,{href:"2021-03-13-back-forward-cache",mdxType:"Blog"},"\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\u540e\u9000\u7f13\u5b58\u673a\u5236"))))}p.isMDXComponent=!0}}]);