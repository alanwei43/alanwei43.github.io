"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[46045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,b=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Mac\u5b89\u88c5Wireguard",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["mac","wireguard"]},l=void 0,i={permalink:"/blog/2021/03/04/mac-install-wireguard",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-04-mac-install-wireguard.md",source:"@site/src/blog/2021-03-04-mac-install-wireguard.md",title:"Mac\u5b89\u88c5Wireguard",description:"1. \u5b89\u88c5 WireGuard \u5ba2\u6237\u7aef",date:"2021-03-04T00:00:00.000Z",formattedDate:"March 4, 2021",tags:[{label:"mac",permalink:"/blog/tags/mac"},{label:"wireguard",permalink:"/blog/tags/wireguard"}],readingTime:.475,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"Mac\u5b89\u88c5Wireguard",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["mac","wireguard"]},prevItem:{title:"Markdown \u667a\u80fd\u611f\u77e5\u63d2\u5165\u4ee3\u7801\u7247\u6bb5",permalink:"/blog/2021/03/05/vsc-markdown-snippets"},nextItem:{title:"Sublime\u5f00\u542fVim\u6a21\u5f0f",permalink:"/blog/2021/03/04/sublime-vim-mode"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5 WireGuard \u5ba2\u6237\u7aef")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wireguard-tools\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e WireGuard \u5ba2\u6237\u7aef")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /usr/local/etc/wiregurad \nsudo touch /usr/local/etc/wiregurad/wg0.conf\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"wg0.conf")," \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[Interface]\nAddress = 10.200.200.2/32\nPrivateKey = <client_private_key>\nMTU = 1420\n\n[Peer]\nPublicKey = <server_public_key>\nEndpoint = <SERVER_IP:SERVER_PORT>\nAllowedIPs = 10.200.0.0/16\nPersistentKeepalive = 25\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8 WireGuard")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wg-quick up wg0-client\nsudo wg show\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7ecf ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/117503445"},"117503445"),(0,n.kt)("a",{parentName:"p",href:"https://github.com/alanwei43/alanwei43.github.io/issues/1"},"\u63d0\u9192"),", \u542f\u52a8WireGuard\u7684\u547d\u4ee4\u5e94\u8be5\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo wg-quick up wg0"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://blog.kelu.org/tech/2020/03/13/mac-install-wireguard.html"},"\u539f\u6587"))))}s.isMDXComponent=!0}}]);