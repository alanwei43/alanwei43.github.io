"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[4572],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=u(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||o;return n?a.createElement(d,l(l({ref:e},c),{},{components:n})):a.createElement(d,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56167:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"\u6211\u7684Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ubuntu"],draft:!1,hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/2021/04/11/ubuntu-starter-scripts",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-11-ubuntu-starter-scripts.md",source:"@site/src/blog/2021-04-11-ubuntu-starter-scripts.md",title:"\u6211\u7684Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",description:"\u6bcf\u6b21\u5b89\u88c5Ubuntu\u7cfb\u7edf\u90fd\u8981\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u5de5\u4f5c(\u6bd4\u5982\u5b89\u88c5\u4e00\u4e9b\u5de5\u5177\u8f6f\u4ef6), \u73b0\u5c06\u6211\u7684\u8bb0\u5f55\u5982\u4e0b, \u65b9\u4fbf\u4e0b\u6b21\u4f7f\u7528:",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"}],readingTime:1.965,truncated:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u6211\u7684Ubuntu\u65b0\u7cfb\u7edf\u5b89\u88c5\u811a\u672c",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["ubuntu"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"Ubuntu \u7cfb\u7edf\u5b89\u88c5\u6839\u8bc1\u4e66",permalink:"/blog/2021/04/11/ubuntu-install-root-ca-certificate"},nextItem:{title:"\u4e3a\u4ec0\u4e48 Math.Round(2.5) \u8fd4\u56de 2",permalink:"/blog/2021/04/11/why-math-round-return-2-instead-3"}},c={authorsImageUrls:[void 0]},p=[{value:"Dock \u56fe\u6807\u5c45\u4e2d",id:"dock-\u56fe\u6807\u5c45\u4e2d",level:2}],g={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6bcf\u6b21\u5b89\u88c5Ubuntu\u7cfb\u7edf\u90fd\u8981\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u5de5\u4f5c(\u6bd4\u5982\u5b89\u88c5\u4e00\u4e9b\u5de5\u5177\u8f6f\u4ef6), \u73b0\u5c06\u6211\u7684\u8bb0\u5f55\u5982\u4e0b, \u65b9\u4fbf\u4e0b\u6b21\u4f7f\u7528:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'apt update \napt install git -y\n# cd /etc/apt\n# git init\n# chown -R alan .git/\n\napt-get install build-essential -y # dev tools\napt install gcc -y\napt install net-tools -y # ifconfig \u5de5\u5177\napt install flameshot -y # \u622a\u56fe\u5de5\u5177\napt install vim -y \napt install wget -y\napt install ffmpeg -y # \u89c6\u9891\u5904\u7406\u7c7b\u5e93\napt-get install scrot -y # \u547d\u4ee4\u884c\u622a\u56fe\u5de5\u5177\napt-get install simplescreenrecorder -y # \u5f55\u5c4f\u5de5\u5177\napt install network-manager-l2tp-gnome -y # VPN\u5de5\u5177\napt-get install vlc -y # \u5a92\u4f53\u64ad\u653e\u5de5\u5177\n\n# config git\ngit config --global core.editor "vim"\ngit config --global credential.helper "cache --timeout 360000"\n\n# install remmina\napt-add-repository ppa:remmina-ppa-team/remmina-next\napt update\napt install remmina remmina-plugin-rdp remmina-plugin-secret remmina-plugin-spice\nkillall remmina\n\n# install official docker\napt-get update\napt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - \nadd-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\napt-get update\napt-get install docker-ce docker-ce-cli containerd.io -y\ndocker --version\n\n# install docker by aliyun mirror\napt-get update\napt-get -y install apt-transport-https ca-certificates curl software-properties-common\n# step 2: \u5b89\u88c5GPG\u8bc1\u4e66\ncurl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n# Step 3: \u5199\u5165\u8f6f\u4ef6\u6e90\u4fe1\u606f\nadd-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"\n# Step 4: \u66f4\u65b0\u5e76\u5b89\u88c5Docker-CE\napt-get -y update\napt-get -y install docker-ce\n\nsnap install chromium\n\n')),(0,o.kt)("h2",{id:"dock-\u56fe\u6807\u5c45\u4e2d"},"Dock \u56fe\u6807\u5c45\u4e2d"),(0,o.kt)("p",null,"\u539f\u6587 ",(0,o.kt)("a",{parentName:"p",href:"https://linuxconfig.org/how-to-customize-dock-panel-on-ubuntu-20-04-focal-fossa-linux"},"How to customize dock panel on Ubuntu 20.04 Focal Fossa Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install dconf-editor -y\n")),(0,o.kt)("p",null,"\u6253\u5f00 ",(0,o.kt)("strong",{parentName:"p"},"dconf-Editor"),", \u5b9a\u4f4d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"org > gnome > shell > extensions > dash-to-dock"),", \u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://linuxconfig.org/wp-content/uploads/2020/03/04-how-to-customize-dock-panel-on-Ubuntu-2004-Focal-Fossa-Linux.png"},"04")),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u547d\u4ee4\u884c\u4fee\u6539\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gsettings set org.gnome.shell.extensions.dash-to-dock extend-height false # \u6211\u5728 Ubuntu 20.04 \u4e0a\u6d4b\u8bd5, \u53ea\u4fee\u6539\u8fd9\u4e00\u4e2a\u914d\u7f6e\u5373\u53ef, \u8fd9\u4e2a\u503c\u9ed8\u8ba4\u662f true\ngsettings set org.gnome.shell.extensions.dash-to-dock dock-position BOTTOM\ngsettings set org.gnome.shell.extensions.dash-to-dock transparency-mode FIXED\ngsettings set org.gnome.shell.extensions.dash-to-dock dash-max-icon-size 64\ngsettings set org.gnome.shell.extensions.dash-to-dock unity-backlit-items true\n")))}m.isMDXComponent=!0}}]);