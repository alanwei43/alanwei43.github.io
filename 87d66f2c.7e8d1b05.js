(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(546)),c={title:"\u5bb9\u5668\u5185\u8bbf\u95ee\u7269\u7406\u7f51\u7edc",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["docker"],draft:!1,hide_table_of_contents:!1},i={permalink:"/blog/2022/02/12/docker-connect-host",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-02-12-docker-connect-host.md",source:"@site/src/blog/2022-02-12-docker-connect-host.md",description:"\u6982\u8ff0",date:"2022-02-12T00:00:00.000Z",tags:[{label:"docker",permalink:"/blog/tags/docker"}],title:"\u5bb9\u5668\u5185\u8bbf\u95ee\u7269\u7406\u7f51\u7edc",readingTime:.75,truncated:!0,prevItem:{title:"\u84b2\u516c\u82f1 X1 \u7b80\u4ecb",permalink:"/blog/2022/02/14/oray-box-intro"},nextItem:{title:"\u5b89\u88c5\u6216\u5378\u8f7d Docker",permalink:"/blog/2022/02/12/install-docker"}},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"How to access host port from docker container",id:"how-to-access-host-port-from-docker-container",children:[{value:"Linux",id:"linux",children:[]},{value:"macOS \u548c Windows",id:"macos-\u548c-windows",children:[]}]},{value:"I want to connect from a container to a service on the host",id:"i-want-to-connect-from-a-container-to-a-service-on-the-host",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(a.b)("p",null,"\u5982\u679c\u5b89\u88c5\u7684\u662f\u6700\u65b0\u7248\u7684 Docker, \u5728\u5bb9\u5668\u5185\u90e8\u76f4\u63a5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"host.docker.internal")," \u5373\u53ef\u8bbf\u95ee\u4e3b\u673a\u7f51\u7edc, \u6bd4\u5982\u5728\u5bb9\u5668\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"curl http://host.docker.internal:8080")," \u5373\u53ef\u8bbf\u95ee\u4e3b\u673a\u7684",Object(a.b)("em",{parentName:"p"},"8080"),"\u7aef\u53e3. (\u5bf9\u4e8eLinux\u73af\u5883, \u521b\u5efa\u5bb9\u5668\u65f6\u9700\u8981\u589e\u52a0",Object(a.b)("inlineCode",{parentName:"p"},"--add-host=host.docker.internal:host-gateway"),"\u53c2\u6570)"),Object(a.b)("h2",{id:"how-to-access-host-port-from-docker-container"},"How to access host port from docker container"),Object(a.b)("p",null,"\u53c2\u8003: ",Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/31324981/how-to-access-host-port-from-docker-container"},"How to access host port from docker container")),Object(a.b)("h3",{id:"linux"},"Linux"),Object(a.b)("p",null,"Docker v20.10\u53ca\u4ee5\u4e0a\u7248\u672c"),Object(a.b)("p",null,"\u5728Linux\u73af\u5883\uff0c\u6267\u884cdocker\u547d\u4ee4\u65f6\uff0c\u589e\u52a0",Object(a.b)("inlineCode",{parentName:"p"},"--add-host=host.docker.internal:host-gateway"),"\u53c2\u6570\u5f00\u542f\u6b64\u7279\u6027(Docker Compose \u914d\u7f6e\u5982\u4e0b)\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u5bb9\u5668\u5185\u90e8\u4f7f ",Object(a.b)("inlineCode",{parentName:"p"},"host.docker.internal")," \u8bbf\u95ee\u4e3b\u673a\u7f51\u7edc(\u53ef\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"cat /etc/hosts")," \u67e5\u770b\u6b64\u53c2\u6570\u589e\u52a0\u7684DNS\u89e3\u6790\u8bb0\u5f55)\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yml",metastring:'title="\u7b49\u4ef7\u7684Docker Compose\u914d\u7f6e"',title:'"\u7b49\u4ef7\u7684Docker','Compose\u914d\u7f6e"':!0},'extra_hosts:\n- "host.docker.internal:host-gateway"\n')),Object(a.b)("h3",{id:"macos-\u548c-windows"},"macOS \u548c Windows"),Object(a.b)("p",null,"Docker v18.03\u53ca\u4ee5\u4e0a\u7248\u672c"),Object(a.b)("p",null,"\u76f4\u63a5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"host.docker.internal")," \u5373\u53ef\u8bbf\u95ee\u4e3b\u673a\u7f51\u7edc\u3002(\u8be5DNS Name\uff0cLinux\u9ed8\u8ba4\u5c1a\u4e0d\u652f\u6301\uff0c\u8fdb\u5ea6\u53c2\u8003 ",Object(a.b)("a",{parentName:"p",href:"https://github.com/docker/for-linux/issues/264"},"https://github.com/docker/for-linux/issues/264")," )"),Object(a.b)("p",null,"macOS\u4f4e\u7248\u672c\u5c1d\u8bd5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal")," \u6216\u8005 ",Object(a.b)("inlineCode",{parentName:"p"},"docker.for.mac.localhost"),"."),Object(a.b)("h2",{id:"i-want-to-connect-from-a-container-to-a-service-on-the-host"},"I want to connect from a container to a service on the host"),Object(a.b)("p",null,"\u7ffb\u8bd1\u81ea ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/networking/"},"I want to connect from a container to a service on the host")),Object(a.b)("p",null,"\u4e3b\u673a(host)\u7684IP\u662f\u52a8\u6001\u7684(\u6216\u8005\u6ca1\u6709\u7f51\u7edc\u8bbf\u95ee). \u6211\u4eec\u5efa\u8bae\u4f60(\u5bb9\u5668\u5185)\u8bbf\u95ee\u7279\u5b9a\u7684DNS\u540d\u79f0: ",Object(a.b)("inlineCode",{parentName:"p"},"host.docker.internal"),", \u8fd9\u4e2aDNS\u540d\u4f1a\u88ab\u89e3\u6790\u6210\u4e3b\u673a(host)IP\u5730\u5740. \u8fd9\u662f\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1, \u6240\u4ee5\u5728\u975eMac\u7248Docker\u7684\u751f\u4ea7\u73af\u5883\u4e0d\u53ef\u7528."),Object(a.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u5bb9\u5668\u5185\u90e8\u4f7f\u7528DNS\u540d",Object(a.b)("inlineCode",{parentName:"p"},"gateway.docker.internal"),"\u8bbf\u95ee\u7f51\u5173(gateway)"),Object(a.b)("p",null,"\u5047\u5982\u4f60\u7684\u7269\u7406\u673a\u5668\u5b89\u88c5\u4e86python, \u4f7f\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u4f5c\u4e3a\u4f8b\u5b50, \u5728\u5bb9\u5668\u91cc\u8bbf\u95ee\u4e3b\u673a(host)\u670d\u52a1."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u5728\u4e3b\u673a(host)\u4e0a\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"li"},"python -m http.server 8000"),"\u521b\u5efa\u4e00\u4e2a\u76d1\u542c",Object(a.b)("em",{parentName:"li"},"8000"),"\u7aef\u53e3\u7684web\u670d\u52a1"),Object(a.b)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u5bb9\u5668, \u5e76\u501f\u52a9",Object(a.b)("inlineCode",{parentName:"li"},"curl"),"\u547d\u4ee4\u8bbf\u95ee\u7b2c\u4e00\u6b65\u5728\u4e3b\u673a\u521b\u5efa\u7684web\u670d\u52a1:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it alpine sh\napk add curl\ncurl http://host.docker.internal:8000\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\u5982\u679c\u5bb9\u5668\u5185\u90e8\u65e0\u6cd5\u8bbf\u95ee ",Object(a.b)("inlineCode",{parentName:"p"},"curl http://host.docker.internal:8000"),", \u6709\u53ef\u80fd\u662f\u9632\u706b\u5899\u9650\u5236\u4e868000\u7aef\u53e3\u7684\u8bbf\u95ee, \u5bf9\u4e8e\u652f\u6301",Object(a.b)("inlineCode",{parentName:"p"},"ufw"),"\u547d\u4ee4\u7684Linux\u7cfb\u7edf, \u53ef\u4ee5\u5728\u4e3b\u673a(host machine)\u4f7f\u7528\u547d\u4ee4 ",Object(a.b)("inlineCode",{parentName:"p"},"ufw allow 8000")," \u5f00\u653e ",Object(a.b)("em",{parentName:"p"},"8000")," \u7aef\u53e3\u7684\u8bbf\u95ee, ",Object(a.b)("inlineCode",{parentName:"p"},"ufw"),"\u547d\u4ee4\u53c2\u8003",Object(a.b)("a",{parentName:"p",href:"https://bobcares.com/blog/ufw-allow-port-range/"},"UFW allow port range \u2013 How we do it?"),"."))))}b.isMDXComponent=!0},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=o,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);