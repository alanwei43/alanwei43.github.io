"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[59186],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=o,f=g["".concat(s,".").concat(h)]||g[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"\u53d6\u6d88 git reset \u64cd\u4f5c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["git"],draft:!1,hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/2022/04/12/git-undo-reset",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-04-12-git-undo-reset.md",source:"@site/src/blog/2022-04-12-git-undo-reset.md",title:"\u53d6\u6d88 git reset \u64cd\u4f5c",description:"\u53d6\u6d88\u7c7b\u4f3c git reset --soft HEAD~1 \u64cd\u4f5c:",date:"2022-04-12T00:00:00.000Z",formattedDate:"April 12, 2022",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:1.295,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://github.com/alanwei43.png"}],frontMatter:{title:"\u53d6\u6d88 git reset \u64cd\u4f5c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://github.com/alanwei43.png",tags:["git"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"undici \u7b80\u4ecb - Node.js",permalink:"/blog/2022/04/22/nodejs-undici-intro"},nextItem:{title:"JavaScript\u6570\u7ec4\u4e71\u5e8f",permalink:"/blog/2022/04/9/javascript-array-shuffle"}},c={authorsImageUrls:[void 0]},p=[{value:"Short answer",id:"short-answer",level:2},{value:"Long answer",id:"long-answer",level:2}],g={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53d6\u6d88\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset --soft HEAD~1")," \u64cd\u4f5c:"),(0,a.kt)("h2",{id:"short-answer"},"Short answer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bahs"},"git reset 'HEAD@{1}'\n")),(0,a.kt)("h2",{id:"long-answer"},"Long answer"),(0,a.kt)("p",null,"Git keeps a log of all ref updates (e.g., checkout, reset, commit, merge). You can view it by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git reflog\n")),(0,a.kt)("p",null,"Somewhere in this list is the commit that you lost. Let's say you just typed git reset HEAD~ and want to undo it. My reflog looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git reflog\n3f6db14 HEAD@{0}: HEAD~: updating HEAD\nd27924e HEAD@{1}: checkout: moving from d27924e0fe16776f0d0f1ee2933a0334a4787b4c\n[...]\n")),(0,a.kt)("p",null,"The first line says that HEAD 0 positions ago (in other words, the current position) is 3f6db14; it was obtained by resetting to HEAD~. The second line says that HEAD 1 position ago (in other words, the state before the reset) is d27924e. It was obtained by checking out a particular commit (though that's not important right now). So, to undo the reset, run ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset HEAD@{1}")," (or git reset d27924e)."),(0,a.kt)("p",null,"If, on the other hand, you've run some other commands since then that update HEAD, the commit you want won't be at the top of the list, and you'll need to search through the reflog."),(0,a.kt)("p",null,"One final note: It may be easier to look at the reflog for the specific branch you want to un-reset, say master, rather than HEAD:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bahs"},"$ git reflog show master\nc24138b master@{0}: merge origin/master: Fast-forward\n90a2bf9 master@{1}: merge origin/master: Fast-forward\n[...]\n")),(0,a.kt)("p",null,"This should have less noise it in than the general HEAD reflog."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6765\u6e90",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/2510276/how-to-undo-git-reset"},"How to undo 'git reset'?"))))}h.isMDXComponent=!0}}]);