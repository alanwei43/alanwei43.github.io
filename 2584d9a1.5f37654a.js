(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(546)),p={title:"\u89e3\u51b3 NPM \u5b89\u88c5\u5e94\u7528\u51fa\u73b0 ERESOLVE \u9519\u8bef",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["npm","node"],description:"npm install ERESOLVE issues error npm \u5b89\u88c5\u62a5\u9519",draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2021/03/30/npm-install-eresulve-error",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-03-30-npm-install-eresulve-error.md",source:"@site/src/blog/2021-03-30-npm-install-eresulve-error.md",description:"npm install ERESOLVE issues error npm \u5b89\u88c5\u62a5\u9519",date:"2021-03-30T00:00:00.000Z",tags:[{label:"npm",permalink:"/blog/tags/npm"},{label:"node",permalink:"/blog/tags/node"}],title:"\u89e3\u51b3 NPM \u5b89\u88c5\u5e94\u7528\u51fa\u73b0 ERESOLVE \u9519\u8bef",readingTime:1.05,truncated:!0,prevItem:{title:"Docker\u65f6\u533a\u8bbe\u7f6e",permalink:"/blog/2021/04/02/docker-timezone"},nextItem:{title:"Git Tags \u4f7f\u7528\u7b80\u4ecb",permalink:"/blog/2021/03/28/git-tags"}},c=[],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4eca\u5929\u5728\u9879\u76ee\u91cc\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"npm i")," \u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'npm ERR! code ERESOLVE\nnpm ERR! ERESOLVE unable to resolve dependency tree\nnpm ERR! \nnpm ERR! While resolving: project-name@0.0.1\nnpm ERR! Found: typescript@3.6.3\nnpm ERR! node_modules/typescript\nnpm ERR!   dev typescript@"3.6.3" from the root project\nnpm ERR! \nnpm ERR! Could not resolve dependency:\nnpm ERR! peer typescript@"^3.6.4" from @nestjs/cli@6.12.9\nnpm ERR! node_modules/@nestjs/cli\nnpm ERR!   dev @nestjs/cli@"6.12.9" from the root project\nnpm ERR! \nnpm ERR! Fix the upstream dependency conflict, or retry\nnpm ERR! this command with --force, or --legacy-peer-deps\nnpm ERR! to accept an incorrect (and potentially broken) dependency resolution.\nnpm ERR! \nnpm ERR! See /root/.npm/eresolve-report.txt for a full report.\n\nnpm ERR! A complete log of this run can be found in:\nnpm ERR!     /root/.npm/_logs/2021-03-30T14_18_07_395Z-debug.log\n')),Object(a.b)("p",null,"\u7f51\u4e0a\u641c\u4e86\u4e00\u4e0b\uff0c\u662f\u56e0\u4e3aNPM\u4ece\u7248\u672c7\u5f00\u59cb\u5728\u67d0\u4e9b\u65b9\u9762\u6bd4\u4e4b\u524d\u7248\u672c\u66f4\u52a0\u4e25\u683c\uff0c\u6539\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"npm i --legacy-peer-deps")," \u540e\u89e3\u51b3\u3002"),Object(a.b)("p",null,"\u4ee5\u4e0b\u662f",Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/65567953/npm-i-resulting-in-many-eresolve-issues"},"\u539f\u6587"),": "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ERESOLVE")," issues with ",Object(a.b)("inlineCode",{parentName:"p"},"npm@7")," are common because npm 7.x is more strict about certain things than npm 6.x. Often, the easiest resolution is to pass the ",Object(a.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," flag to npm (e.g., ",Object(a.b)("inlineCode",{parentName:"p"},"npm i --legacy-peer-deps"),") or else use ",Object(a.b)("inlineCode",{parentName:"p"},"npm@6"),"."),Object(a.b)("p",null,"If that doesn't work immediately, perhaps try removing ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," and ",Object(a.b)("inlineCode",{parentName:"p"},"package-lock.json")," first. They will be recreated."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You don't need to uninstall ",Object(a.b)("inlineCode",{parentName:"p"},"npm@7")," to use ",Object(a.b)("inlineCode",{parentName:"p"},"npm@6"),". Use npx to specify the version of npm instead. For example: ",Object(a.b)("inlineCode",{parentName:"p"},"npx -p npm@6 npm i --legacy-peer-deps"),"."))))}s.isMDXComponent=!0},546:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,d=m["".concat(p,".").concat(u)]||m[u]||b[u]||a;return t?o.a.createElement(d,i(i({ref:n},l),{},{components:t})):o.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);