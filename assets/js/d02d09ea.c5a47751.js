"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[30040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],description:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",draft:!1,hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/2020/03/20/visual-studio-code-config",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2020/03-20-visual-studio-code-config.md",source:"@site/src/blog/2020/03-20-visual-studio-code-config.md",title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",description:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",date:"2020-03-20T00:00:00.000Z",formattedDate:"March 20, 2020",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"},{label:"editor",permalink:"/blog/tags/editor"}],readingTime:1.205,hasTruncateMarker:!0,authors:[{name:"Alan",title:"Maintainer of blog",url:"https://github.com/alanwei43",imageURL:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4"}],frontMatter:{title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],description:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",draft:!1,hide_table_of_contents:!1},prevItem:{title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"},nextItem:{title:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",permalink:"/blog/2020/03/20/visual-studio-code-keyboard"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VSCode \u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n  "[html]": {\n    "editor.defaultFormatter": "vscode.html-language-features"\n  },\n  "[javascript]": {\n    "editor.defaultFormatter": "vscode.typescript-language-features"\n  },\n  "[javascriptreact]": {\n    "editor.defaultFormatter": "vscode.typescript-language-features"\n  },\n  "[json]": {\n    "editor.defaultFormatter": "vscode.json-language-features"\n  },\n  "[jsonc]": {\n    "editor.defaultFormatter": "vscode.json-language-features"\n  },\n  "[markdown]": {\n    "editor.quickSuggestions": {\n      "comments": "on",\n      "other": "on",\n      "strings": "on"\n    },\n    "editor.wordWrap": "on"\n  },\n  "[typescript]": {\n    "editor.defaultFormatter": "vscode.typescript-language-features"\n  },\n  "[typescriptreact]": {\n    "editor.defaultFormatter": "vscode.typescript-language-features"\n  },\n  "[vue]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "editor.stickyScroll.enabled": true,\n  "editor.formatOnSave": false,\n  "editor.inlineSuggest.enabled": true,\n  "editor.inlineSuggest.showToolbar": "always",\n  "editor.lineNumbers": "relative",\n  "editor.minimap.autohide": true,\n  "editor.smoothScrolling": true,\n  "editor.suggestSelection": "first",\n  "editor.tabSize": 2,\n  "editor.unicodeHighlight.ambiguousCharacters": false,\n  "editor.unicodeHighlight.invisibleCharacters": false,\n  "emmet.triggerExpansionOnTab": true,\n  "explorer.autoReveal": "focusNoScroll",\n  "explorer.confirmDelete": false,\n  "extensions.autoCheckUpdates": false,\n  "extensions.autoUpdate": false,\n  "extensions.ignoreRecommendations": true,\n  "files.associations": {\n    "*.mdx": "markdown",\n    "*.wxml": "vue-html"\n  },\n  "files.encoding": "utf8",\n  "files.eol": "\\n",\n  "git.openRepositoryInParentFolders": "always",\n  "json.maxItemsComputed": 500,\n  "todohighlight.maxFilesForSearch": 5120,\n  "update.mode": "manual",\n  "vim.autoSwitchInputMethod.defaultIM": "xkb:us::eng",\n  "vim.autoSwitchInputMethod.enable": true,\n  "vim.autoSwitchInputMethod.obtainIMCmd": "/usr/bin/ibus engine",\n  "vim.autoSwitchInputMethod.switchIMCmd": "/usr/bin/ibus engine {im}",\n  "vim.leader": " ",\n  "vim.normalModeKeyBindingsNonRecursive": [\n    {\n      "before": [\n        "<Leader>",\n        "p"\n      ],\n      "commands": [\n        "workbench.action.showCommands"\n      ]\n    },\n    {\n      "before": [\n        "<Leader>",\n        "k"\n      ],\n      "commands": [\n        "editor.action.showHover"\n      ]\n    },\n    {\n      "before": [\n        "<Leader>",\n        "m"\n      ],\n      "commands": [\n        "workbench.action.toggleZenMode"\n      ]\n    },\n    {\n      "before": [\n        "n"\n      ],\n      "commands": [\n        "workbench.action.compareEditor.nextChange"\n      ]\n    },\n    {\n      "before": [\n        "N"\n      ],\n      "commands": [\n        "workbench.action.compareEditor.previousChange"\n      ]\n    }\n  ],\n  "vim.smartRelativeLine": true,\n  "vim.useCtrlKeys": false,\n  "vim.useSystemClipboard": false,\n  "vim.visualModeKeyBindings": [\n    {\n      "before": [\n        "J"\n      ],\n      "commands": [\n        "editor.action.moveLinesDownAction"\n      ]\n    },\n    {\n      "before": [\n        "K"\n      ],\n      "commands": [\n        "editor.action.moveLinesUpAction"\n      ]\n    }\n  ],\n  "window.closeWhenEmpty": true,\n  "window.restoreWindows": "none",\n  "window.titleBarStyle": "custom",\n  "window.zoomLevel": 1,\n  "workbench.activityBar.location": "top",\n  "workbench.list.smoothScrolling": true,\n  "workbench.startupEditor": "welcomePage",\n  "zenMode.centerLayout": false,\n  "zenMode.showTabs": "multiple",\n  "zenMode.fullScreen": true,\n  "zenMode.hideLineNumbers": false,\n  "zenMode.hideStatusBar": false,\n  "remote.autoForwardPorts": false\n}\n')))}d.isMDXComponent=!0}}]);