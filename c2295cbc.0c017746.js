(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(383)),i={title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["vsc","visual studio code","editor"],description:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2020/03/20/visual-studio-code-config",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2020-03-20-visual-studio-code-config.md",source:"@site/src/blog/2020-03-20-visual-studio-code-config.md",description:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",date:"2020-03-20T00:00:00.000Z",tags:[{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"},{label:"editor",permalink:"/blog/tags/editor"}],title:"\u6211\u7684 Visual Studio Code \u914d\u7f6e",readingTime:1.27,truncated:!0,prevItem:{title:"\u8bbe\u7f6eJava\u7a0b\u5e8f\u7f51\u7edc\u4ee3\u7406",permalink:"/blog/2021/02/17/java-network-proxy"},nextItem:{title:"\u6211\u7684 Visual Studio Code \u5feb\u6377\u952e\u914d\u7f6e",permalink:"/blog/2020/03/20/visual-studio-code-keyboard"}},s=[],u={toc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e00\u4e0b\u6211\u7684VSC\u914d\u7f6e: "),Object(a.b)("p",null,"\u6700\u65b0\u914d\u7f6e:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n    "extensions.autoUpdate": false, // \u7981\u7528\u6269\u5c55\u81ea\u52a8\u66f4\u65b0\n    "extensions.autoCheckUpdates": false, // \u7981\u7528\u6269\u5c55\u81ea\u52a8\u66f4\u65b0\n    "update.mode": "manual", // VSC\u66f4\u65b0\u6a21\u5f0f\u6539\u4e3a\u624b\u52a8\u68c0\u6d4b\n    "editor.lineNumbers": "relative", // \u4f7f\u7528\u76f8\u5bf9\u884c\u53f7(\u65b9\u4fbfVim\u8df3\u8f6c)\n    // Markdown\u6587\u4ef6\u914d\u7f6e\n    "[markdown]": {\n        "editor.wordWrap": "on",\n        "editor.quickSuggestions": true // markdown\u6587\u4ef6\u667a\u80fd\u63d0\u793a\u9ed8\u8ba4\u5f00\u542f(\u7528\u4e8e\u652f\u6301Snippets)\n    },\n    "window.closeWhenEmpty": true, // \u5982\u679c\u6253\u5f00\u6587\u4ef6\u4e3a\u7a7a\uff0c\u5173\u95edVSC\u7f16\u8f91\u5668\n    "files.eol": "\\n", // \u6587\u4ef6\u6362\u884c\u7b26\n    "files.encoding": "utf8", // \u6587\u4ef6\u7f16\u7801\n    "editor.minimap.enabled": false, // \u662f\u5426\u663e\u793a\u5c0f\u5730\u56fe\n    "explorer.confirmDelete": false, // \u5220\u9664\u6587\u4ef6\u786e\u8ba4\n    "[html]": {\n        "editor.defaultFormatter": "vscode.html-language-features"\n    },\n    "[json]": {\n        "editor.defaultFormatter": "vscode.json-language-features"\n    },\n    "[javascript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "emmet.triggerExpansionOnTab": true,\n    "todohighlight.maxFilesForSearch": 5120,\n    "explorer.autoReveal": "focusNoScroll"\n}\n')),Object(a.b)("p",null,"\u8fc7\u65f6\u914d\u7f6e: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "vim.useCtrlKeys": false,\n    "editor.largeFileOptimizations": true,\n    "breadcrumbs.enabled": true,\n    "editor.renderControlCharacters": true,\n    "editor.lineNumbers": "relative",\n    "window.closeWhenEmpty": true,\n    "window.restoreWindows": "all",\n    "editor.renderWhitespace": "all",\n    "editor.renderIndentGuides": true,\n    "files.eol": "\\n",\n    "files.encoding": "utf8",\n    "vim.normalModeKeyBindings": [\n        {\n            "before": [ "z", "a" ],\n            "after": [ "<Esc>", "0", "f", "(", "l", "y", "t", ";", "0", "f", "(", "a", "`", "`", "<Esc>", "h", "p", "x", "a", ",", "<Esc>" ]\n        }\n    ],\n    "editor.minimap.enabled": false,\n    "explorer.confirmDelete": false,\n    "explorer.openEditors.visible": 0,\n    "editor.cursorBlinking": "phase",\n    "editor.smoothScrolling": true,\n    "editor.tokenColorCustomizations": {\n        "textMateRules": [\n            {\n                "scope": [\n                    "entity.name.function",\n                    "support.function"\n                ],\n                "settings": {\n                    "fontStyle": "italic bold"\n                }\n            }\n        ]\n    },\n    "[html]": {\n        "editor.defaultFormatter": "vscode.html-language-features"\n    },\n    "[json]": {\n        "editor.defaultFormatter": "vscode.json-language-features"\n    },\n    "[javascript]": {\n        "editor.defaultFormatter": "vscode.typescript-language-features"\n    },\n    "terminal.integrated.rendererType": "dom",\n    "terminal.integrated.shell.windows": "C:\\\\Program Files\\\\PowerShell\\\\6\\\\pwsh.exe",\n    "window.zoomLevel": 0,\n    "html.format.wrapLineLength": 0,\n    "editor.fontLigatures": true,\n    "editor.fontFamily": "\'Cascadia Code\', Consolas, \'Courier New\', monospace",\n    "files.watcherExclude": {\n        "**/.git/objects/**": true,\n        "**/.git/subtree-cache/**": true,\n        "**/node_modules/**": true,\n        ".vscode": true,\n        ".gitlab": true\n    },\n    "extensions.autoUpdate": false,\n    "emmet.triggerExpansionOnTab": true,\n    "editor.minimap.showSlider": "mouseover",\n    "editor.minimap.enabled": false,\n    "editor.acceptSuggestionOnCommitCharacter": false,\n    "emmet.triggerExpansionOnTab": true,\n    "todohighlight.isEnable": true,\n    "todohighlight.keywords": [\n        {\n          "text": "NOTE:",\n          "isWholeLine": true,\n          "color": "#0094ff",\n          "backgroundColor": "rgba(100, 100, 100, 0.8)",\n        },\n        {\n          "text": "TODO",\n          "color": "red",\n          "backgroundColor": "rgba(0,0,0,.2)",\n          "isWholeLine": true\n        }\n    ],\n    "todohighlight.maxFilesForSearch": 5120\n}\n')))}c.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);