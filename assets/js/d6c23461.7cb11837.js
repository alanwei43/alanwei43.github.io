"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[94037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(r),h=a,m=g["".concat(s,".").concat(h)]||g[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},30773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u53d6\u6d88 git reset \u64cd\u4f5c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["git"],draft:!1,hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/2022/04/12/git-undo-reset",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022/04/12-git-undo-reset.md",source:"@site/src/blog/2022/04/12-git-undo-reset.md",title:"\u53d6\u6d88 git reset \u64cd\u4f5c",description:"\u53d6\u6d88\u7c7b\u4f3c git reset --soft HEAD~1 \u64cd\u4f5c:",date:"2022-04-12T00:00:00.000Z",formattedDate:"April 12, 2022",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"\u53d6\u6d88 git reset \u64cd\u4f5c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["git"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"undici \u7b80\u4ecb - Node.js",permalink:"/blog/2022/04/22/nodejs-undici-intro"},nextItem:{title:"JavaScript\u6570\u7ec4\u4e71\u5e8f",permalink:"/blog/2022/04/09/javascript-array-shuffle"}},s={authorsImageUrls:[void 0]},u=[{value:"Short answer",id:"short-answer",level:2},{value:"Long answer",id:"long-answer",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d6\u6d88\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset --soft HEAD~1")," \u64cd\u4f5c:"),(0,a.kt)("h2",{id:"short-answer"},"Short answer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bahs"},"git reset 'HEAD@{1}'\n")),(0,a.kt)("h2",{id:"long-answer"},"Long answer"),(0,a.kt)("p",null,"Git keeps a log of all ref updates (e.g., checkout, reset, commit, merge). You can view it by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git reflog\n")),(0,a.kt)("p",null,"Somewhere in this list is the commit that you lost. Let's say you just typed git reset HEAD~ and want to undo it. My reflog looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git reflog\n3f6db14 HEAD@{0}: HEAD~: updating HEAD\nd27924e HEAD@{1}: checkout: moving from d27924e0fe16776f0d0f1ee2933a0334a4787b4c\n[...]\n")),(0,a.kt)("p",null,"The first line says that HEAD 0 positions ago (in other words, the current position) is 3f6db14; it was obtained by resetting to HEAD~. The second line says that HEAD 1 position ago (in other words, the state before the reset) is d27924e. It was obtained by checking out a particular commit (though that's not important right now). So, to undo the reset, run ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset HEAD@{1}")," (or git reset d27924e)."),(0,a.kt)("p",null,"If, on the other hand, you've run some other commands since then that update HEAD, the commit you want won't be at the top of the list, and you'll need to search through the reflog."),(0,a.kt)("p",null,"One final note: It may be easier to look at the reflog for the specific branch you want to un-reset, say master, rather than HEAD:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bahs"},"$ git reflog show master\nc24138b master@{0}: merge origin/master: Fast-forward\n90a2bf9 master@{1}: merge origin/master: Fast-forward\n[...]\n")),(0,a.kt)("p",null,"This should have less noise it in than the general HEAD reflog."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6765\u6e90",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/2510276/how-to-undo-git-reset"},"How to undo 'git reset'?"))))}p.isMDXComponent=!0}}]);