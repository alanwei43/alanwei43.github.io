"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[22626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u7ec4\u4ef6 & Props",sidebar_label:"\u7ec4\u4ef6 & Props",hide_title:!1,hide_table_of_contents:!1,keywords:["react","javascript"]},i=void 0,c={unversionedId:"reading/react-official-docs/core-4-components-and-props",id:"reading/react-official-docs/core-4-components-and-props",title:"\u7ec4\u4ef6 & Props",description:"\u51fd\u6570\u7ec4\u4ef6\u4e0e class \u7ec4\u4ef6",source:"@site/src/docs/reading/react-official-docs/core-4-components-and-props.md",sourceDirName:"reading/react-official-docs",slug:"/reading/react-official-docs/core-4-components-and-props",permalink:"/docs/reading/react-official-docs/core-4-components-and-props",draft:!1,editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/react-official-docs/core-4-components-and-props.md",tags:[],version:"current",frontMatter:{title:"\u7ec4\u4ef6 & Props",sidebar_label:"\u7ec4\u4ef6 & Props",hide_title:!1,hide_table_of_contents:!1,keywords:["react","javascript"]},sidebar:"tutorialSidebar",previous:{title:"React\u54f2\u5b66",permalink:"/docs/reading/react-official-docs/core-12-ReactZheXue"},next:{title:"State & \u751f\u547d\u5468\u671f",permalink:"/docs/reading/react-official-docs/core-5-state-and-lifecycle"}},l={},s=[{value:"\u51fd\u6570\u7ec4\u4ef6\u4e0e class \u7ec4\u4ef6",id:"\u51fd\u6570\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6",level:2},{value:"\u51fd\u6570\u7ec4\u4ef6",id:"\u51fd\u6570\u7ec4\u4ef6",level:3},{value:"class\u7ec4\u4ef6",id:"class\u7ec4\u4ef6",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u51fd\u6570\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6"},"\u51fd\u6570\u7ec4\u4ef6\u4e0e class \u7ec4\u4ef6"),(0,o.kt)("h3",{id:"\u51fd\u6570\u7ec4\u4ef6"},"\u51fd\u6570\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,o.kt)("h3",{id:"class\u7ec4\u4ef6"},"class\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ES6\u8bed\u6cd5"',title:'"ES6\u8bed\u6cd5"'},"class Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TypeScript\u8bed\u6cd5"',title:'"TypeScript\u8bed\u6cd5"'},'import { Component } from "react"\n\ntype HelpProp = {}\ntype HelpState = {\n  time: Date\n}\nexport class Help extends Component<HelpProp, HelpState> {\n  timer: number\n\n  constructor(prop: HelpProp) {\n    super(prop);\n    this.state = {\n      time: new Date()\n    };\n  }\n\n  interval() {\n    this.timer = window.setInterval(() => {\n      this.setState({\n        time: new Date()\n      });\n    }, 1000);\n  }\n  \n  componentDidMount() {\n    this.interval();\n  }\n\n  render() {\n    const { time } = this.state;\n    return (\n      <div>{time.toLocaleString()}</div>\n    );\n  }\n\n  componentWillUnmount() {\n    if (this.timer) {\n      clearInterval(this.timer);\n    }\n  }\n}\n')),(0,o.kt)("p",null,"\u6e32\u67d3\u7ec4\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nconst element = <Welcome name=\"Sara\" />;\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"React \u4f1a\u5c06\u4ee5\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u7ec4\u4ef6\u89c6\u4e3a\u539f\u751f DOM \u6807\u7b7e\u3002\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"<div />")," \u4ee3\u8868 HTML \u7684 div \u6807\u7b7e\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"li"},"<Welcome />")," \u5219\u4ee3\u8868\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5e76\u4e14\u9700\u5728\u4f5c\u7528\u57df\u5185\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"Welcome"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u4e0d\u5e94\u8be5\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"li"},"props")))))}d.isMDXComponent=!0}}]);