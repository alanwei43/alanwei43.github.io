(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{201:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(545)),i={title:"\u6211\u7684Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ubuntu"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/04/11/ubuntu-starter-scripts",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-ubuntu-starter-scripts.md",source:"@site/src/blog/2021-04-11-ubuntu-starter-scripts.md",description:"\u6bcf\u6b21\u5b89\u88c5Ubuntu\u7cfb\u7edf\u90fd\u8981\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u5de5\u4f5c(\u6bd4\u5982\u5b89\u88c5\u4e00\u4e9b\u5de5\u5177\u8f6f\u4ef6), \u73b0\u5c06\u6211\u7684\u8bb0\u5f55\u5982\u4e0b, \u65b9\u4fbf\u4e0b\u6b21\u4f7f\u7528:",date:"2021-04-11T00:00:00.000Z",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"}],title:"\u6211\u7684Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",readingTime:1.385,truncated:!0,prevItem:{title:"\u4e3a\u4ec0\u4e48 Math.Round(2.5) \u8fd4\u56de 2",permalink:"/blog/2021/04/11/why-math-round-return-2-instead-3"},nextItem:{title:"\u5236\u4f5cWindows\u542f\u52a8\u76d8",permalink:"/blog/2021/04/11/windows-bootable-device"}},c=[{value:"Dock \u56fe\u6807\u5c45\u4e2d",id:"dock-\u56fe\u6807\u5c45\u4e2d",children:[]}],s={toc:c};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6bcf\u6b21\u5b89\u88c5Ubuntu\u7cfb\u7edf\u90fd\u8981\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u5de5\u4f5c(\u6bd4\u5982\u5b89\u88c5\u4e00\u4e9b\u5de5\u5177\u8f6f\u4ef6), \u73b0\u5c06\u6211\u7684\u8bb0\u5f55\u5982\u4e0b, \u65b9\u4fbf\u4e0b\u6b21\u4f7f\u7528:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'apt update \napt install git -y\n# cd /etc/apt\n# git init\n# chown -R alan .git/\n\napt-get install build-essential -y # dev tools\napt install gcc -y\napt install net-tools -y # ifconfig \u5de5\u5177\napt install flameshot -y # \u622a\u56fe\u5de5\u5177\napt install vim -y \napt install wget -y\napt install ffmpeg -y # \u89c6\u9891\u5904\u7406\u7c7b\u5e93\napt-get install scrot -y # \u547d\u4ee4\u884c\u622a\u56fe\u5de5\u5177\napt-get install simplescreenrecorder -y # \u5f55\u5c4f\u5de5\u5177\napt install network-manager-l2tp-gnome -y # VPN\u5de5\u5177\napt-get install vlc -y # \u5a92\u4f53\u64ad\u653e\u5de5\u5177\n\n# config git\ngit config --global core.editor "vim"\ngit config --global credential.helper "cache --timeout 360000"\n\n# install remmina\napt-add-repository ppa:remmina-ppa-team/remmina-next\napt update\napt install remmina remmina-plugin-rdp remmina-plugin-secret remmina-plugin-spice\nkillall remmina\n\n# install official docker\napt-get update\napt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - \nadd-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io -y\ndocker --version\n\n# install docker by aliyun mirror\napt-get update\napt-get -y install apt-transport-https ca-certificates curl software-properties-common\n# step 2: \u5b89\u88c5GPG\u8bc1\u4e66\ncurl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n# Step 3: \u5199\u5165\u8f6f\u4ef6\u6e90\u4fe1\u606f\nadd-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"\n# Step 4: \u66f4\u65b0\u5e76\u5b89\u88c5Docker-CE\napt-get -y update\napt-get -y install docker-ce\n\nsnap install chromium\n\n')),Object(o.b)("h2",{id:"dock-\u56fe\u6807\u5c45\u4e2d"},"Dock \u56fe\u6807\u5c45\u4e2d"),Object(o.b)("p",null,"\u539f\u6587 ",Object(o.b)("a",{parentName:"p",href:"https://linuxconfig.org/how-to-customize-dock-panel-on-ubuntu-20-04-focal-fossa-linux"},"How to customize dock panel on Ubuntu 20.04 Focal Fossa Linux")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt install dconf-editor -y\n")),Object(o.b)("p",null,"\u6253\u5f00 ",Object(o.b)("strong",{parentName:"p"},"dconf-Editor"),", \u5b9a\u4f4d\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"org > gnome > shell > extensions > dash-to-dock"),", \u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://linuxconfig.org/wp-content/uploads/2020/03/04-how-to-customize-dock-panel-on-Ubuntu-2004-Focal-Fossa-Linux.png"},"04")),Object(o.b)("p",null,"\u6216\u8005\u4f7f\u7528\u547d\u4ee4\u884c\u4fee\u6539\u914d\u7f6e:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.shell.extensions.dash-to-dock extend-height false # \u6211\u5728 Ubuntu 20.04 \u4e0a\u6d4b\u8bd5, \u53ea\u4fee\u6539\u8fd9\u4e00\u4e2a\u914d\u7f6e\u5373\u53ef, \u8fd9\u4e2a\u503c\u9ed8\u8ba4\u662f true\ngsettings set org.gnome.shell.extensions.dash-to-dock dock-position BOTTOM\ngsettings set org.gnome.shell.extensions.dash-to-dock transparency-mode FIXED\ngsettings set org.gnome.shell.extensions.dash-to-dock dash-max-icon-size 64\ngsettings set org.gnome.shell.extensions.dash-to-dock unity-backlit-items true\n")))}u.isMDXComponent=!0},545:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=r.a.createContext({}),u=function(t){var e=r.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),b=a,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(g,l(l({ref:e},s),{},{components:n})):r.a.createElement(g,l({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);