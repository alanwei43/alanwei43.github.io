(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(545)),a={title:"Dart Visual Studio Code \u63a8\u8350\u8bbe\u7f6e",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["dart","vsc","visual studio code"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2022/02/19/dart-visual-studio-code-settings",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2022-02-19-dart-visual-studio-code-settings.md",source:"@site/src/blog/2022-02-19-dart-visual-studio-code-settings.md",description:"Dart Visual Studio Code \u63a8\u8350\u8bbe\u7f6e",date:"2022-02-19T00:00:00.000Z",tags:[{label:"dart",permalink:"/blog/tags/dart"},{label:"vsc",permalink:"/blog/tags/vsc"},{label:"visual studio code",permalink:"/blog/tags/visual-studio-code"}],title:"Dart Visual Studio Code \u63a8\u8350\u8bbe\u7f6e",readingTime:1.405,truncated:!0,prevItem:{title:"Flutter\u8fdc\u7a0b\u8c03\u8bd5Android\u8bbe\u5907",permalink:"/blog/2022/02/20/flutter-remote-debug-android-device"},nextItem:{title:"GitHub QA",permalink:"/blog/2022/02/18/github-qa"}},s=[],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://dartcode.org/docs/recommended-settings/"},"Dart Visual Studio Code \u63a8\u8350\u8bbe\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    // Causes the debug view to automatically appear when a breakpoint is hit. This\n    // setting is global and not configurable per-language.\n    "debug.openDebug": "openOnDebugBreak",\n\n    "[dart]": {\n        // Automatically format code on save and during typing of certain characters\n        // (like `;` and `}`).\n        "editor.formatOnSave": true,\n        "editor.formatOnType": true,\n\n        // Draw a guide line at 80 characters, where Dart\'s formatting will wrap code.\n        "editor.rulers": [80],\n\n        // Disables built-in highlighting of words that match your selection. Without\n        // this, all instances of the selected text will be highlighted, interfering\n        // with Dart\'s ability to highlight only exact references to the selected variable.\n        "editor.selectionHighlight": false,\n\n        // By default, VS Code prevents code completion from popping open when in\n        // "snippet mode" (editing placeholders in inserted code). Setting this option\n        // to `false` stops that and allows completion to open as normal, as if you\n        // weren\'t in a snippet placeholder.\n        "editor.suggest.snippetsPreventQuickSuggestions": false,\n\n        // By default, VS Code will pre-select the most recently used item from code\n        // completion. This is usually not the most relevant item.\n        //\n        // "first" will always select top item\n        // "recentlyUsedByPrefix" will filter the recently used items based on the\n        //     text immediately preceding where completion was invoked.\n        "editor.suggestSelection": "first",\n\n        // Allows pressing <TAB> to complete snippets such as `for` even when the\n        // completion list is not visible.\n        "editor.tabCompletion": "onlySnippets",\n\n        // By default, VS Code will populate code completion with words found in the\n        // current file when a language service does not provide its own completions.\n        // This results in code completion suggesting words when editing comments and\n        // strings. This setting will prevent that.\n        "editor.wordBasedSuggestions": false,\n    }\n}\n')))}u.isMDXComponent=!0},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,f=d["".concat(a,".").concat(g)]||d[g]||p[g]||i;return n?o.a.createElement(f,l(l({ref:t},c),{},{components:n})):o.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);