(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{234:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(446)),o={title:"CentOS\u5b89\u88c5Nginx",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["centos","linux","nginx"],description:"CentOS\u5b89\u88c5Nginx",draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/04/11/centos-install-nginx",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-centos-install-nginx.md",source:"@site/src/blog/2021-04-11-centos-install-nginx.md",description:"CentOS\u5b89\u88c5Nginx",date:"2021-04-11T00:00:00.000Z",tags:[{label:"centos",permalink:"/blog/tags/centos"},{label:"linux",permalink:"/blog/tags/linux"},{label:"nginx",permalink:"/blog/tags/nginx"}],title:"CentOS\u5b89\u88c5Nginx",readingTime:.4,truncated:!0,prevItem:{title:"Nginx 301\u91cd\u5b9a\u5411\u57df\u540d",permalink:"/blog/2021/04/15/nginx-rewrite"},nextItem:{title:"\u521b\u5efaWindows\u670d\u52a1",permalink:"/blog/2021/04/11/create-windows-service"}},c=[],u={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4ee5\u4e0b\u662f\u5b89\u88c5\u811a\u672c: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# install dependency\nyum install -y gcc  # GNU compiler\nyum install -y pcre pcre-devel  # PCRE(Perl Compatible Regular Expression)\n# ubuntu system\n# apt-get install libpcre3 libpcre3-dev \nyum install -y zlib zlib-devel  # gzip compression library\n#ubuntu system\n# apt-get install zliblg zliblg-dev\nyum install -y openssl openssl-devel\n\n# download nginx \ncd ~/downloads\nwget https://launchpad.net/nginx/0.7/0.7.66/+download/nginx-0.7.66.tar.gz\ntar xzvf nginx-0.7.66.tar.gz\ncd nginx-0.7.66 # change extracted directory \n\n# compile\n./configure --prefix=/usr/local/nginx-0.7.66 --with-cc-opt=-Wno-error\nmake\nmake install \ncd /usr/local/nginx-0.7.66/sbin\n./nginx\n")))}s.isMDXComponent=!0},446:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||g[b]||i;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);