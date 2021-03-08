(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(205)),c={title:"IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ipsec","ikev2"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/06/ipsec-clients-ikev2",editUrl:"https://github.com/alanwei43/blog/tree/master/blog/2021-03-06-ipsec-clients-ikev2.md",source:"@site/blog/2021-03-06-ipsec-clients-ikev2.md",description:"\u539f\u6587 - IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",date:"2021-03-06T00:00:00.000Z",tags:[{label:"ipsec",permalink:"/blog/tags/ipsec"},{label:"ikev2",permalink:"/blog/tags/ikev-2"}],title:"IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357",readingTime:11.08,truncated:!0,prevItem:{title:"\u5982\u4f55\u4f7f\u7528Maven\u521b\u5efa\u53ef\u6267\u884c\u7684JAR\u6587\u4ef6",permalink:"/blog/2021/03/06/how-can-i-create-an-executable-jar-with-dependencies-using-maven"},nextItem:{title:"\u914d\u7f6e IPsec/L2TP \u5ba2\u6237\u7aef",permalink:"/blog/2021/03/06/ipsec-clients-l2tp"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/ikev2-howto-zh.md"},"\u539f\u6587 - IKEv2 \u914d\u7f6e\u548c\u4f7f\u7528\u6307\u5357")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u6ce8\uff1a")," \u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-l2tp"},"IPsec/L2TP")," \u6216\u8005 ",Object(o.b)("a",{parentName:"p",href:"/blog/2021/03/06/ipsec-clients-xauth"},"IPsec/XAuth")," \u6a21\u5f0f\u8fde\u63a5\u3002"))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);