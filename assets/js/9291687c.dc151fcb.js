"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[87468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u4e8b\u4ef6\u5904\u7406",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e8b\u4ef6\u5904\u7406",keywords:["react","javascript"]},i=void 0,o={unversionedId:"reading/react-official-docs/core-6-handling-events",id:"reading/react-official-docs/core-6-handling-events",title:"\u4e8b\u4ef6\u5904\u7406",description:"\u4e8b\u4ef6\u7ed1\u5b9a",source:"@site/src/docs/reading/react-official-docs/core-6-handling-events.md",sourceDirName:"reading/react-official-docs",slug:"/reading/react-official-docs/core-6-handling-events",permalink:"/docs/reading/react-official-docs/core-6-handling-events",draft:!1,editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/react-official-docs/core-6-handling-events.md",tags:[],version:"current",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e8b\u4ef6\u5904\u7406",keywords:["react","javascript"]},sidebar:"tutorialSidebar",previous:{title:"State & \u751f\u547d\u5468\u671f",permalink:"/docs/reading/react-official-docs/core-5-state-and-lifecycle"},next:{title:"\u8868\u5355",permalink:"/docs/reading/react-official-docs/core-9-forms"}},c={},s=[{value:"\u4e8b\u4ef6\u7ed1\u5b9a",id:"\u4e8b\u4ef6\u7ed1\u5b9a",level:2},{value:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",level:2},{value:"this\u7ed1\u5b9a",id:"this\u7ed1\u5b9a",level:2},{value:"public class fields\u8bed\u6cd5",id:"public-class-fields\u8bed\u6cd5",level:3},{value:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind",id:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind",level:3},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:3},{value:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u7ed1\u5b9a"},"\u4e8b\u4ef6\u7ed1\u5b9a"),(0,r.kt)("p",null,"React \u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u548c DOM \u5143\u7d20\u7684\u5f88\u76f8\u4f3c,\u4f46\u662f\u6709\u4e00\u70b9\u8bed\u6cd5\u4e0a\u7684\u4e0d\u540c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u4e8b\u4ef6\u7684\u547d\u540d\u91c7\u7528\u5c0f\u9a7c\u5cf0\u5f0f(",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase"),"), \u800c\u4e0d\u662f\u7eaf\u5c0f\u5199."),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JSX \u8bed\u6cd5\u65f6\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u4f20\u7edfHTML"',title:'"\u4f20\u7edfHTML"'},'<button onclick="activateLasers()"> Activate Lasers </button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React JSX"',title:'"React','JSX"':!0},"<button onClick={activateLasers}>  Activate Lasers </button>\n")),(0,r.kt)("h2",{id:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"),(0,r.kt)("p",null,"React\u4e2d\u7684\u4e8b\u4ef6\u51fd\u6570\u4e0d\u80fd\u901a\u8fc7\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u7684\u65b9\u5f0f\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a. \u4f60\u5fc5\u987b\u663e\u5f0f\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"preventDefault"),":"),(0,r.kt)("p",null,"\u4f8b\u5982\u963b\u6b62\u8868\u5355\u7684\u9ed8\u8ba4\u63d0\u4ea4\u884c\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u4f20\u7edfHTML"',title:'"\u4f20\u7edfHTML"'},'<form onsubmit="console.log(\'You clicked submit.\'); return false">\n  <button type="submit">Submit</button>\n</form>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React JSX"',title:'"React','JSX"':!0},"function Form() {\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('You clicked submit.');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4e8b\u4ef6\u51fd\u6570\u63a5\u6536\u7684\u4e8b\u4ef6\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"e"),"\u662fReact\u63d0\u4f9b\u7684\u5408\u6210\u4e8b\u4ef6, \u4e0e\u539f\u751f\u4e8b\u4ef6\u4e0d\u5b8c\u5168\u76f8\u540c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO \u4e86\u89e3\u4e8b\u4ef6\u5192\u6ce1\u4e0d\u540c(e.stopPropagation)")),(0,r.kt)("h2",{id:"this\u7ed1\u5b9a"},"this\u7ed1\u5b9a"),(0,r.kt)("p",null,"\u6709\u4e09\u79cd\u65b9\u5f0f\u7ed1\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u4e0a\u4e0b\u6587"),(0,r.kt)("h3",{id:"public-class-fields\u8bed\u6cd5"},"public class fields\u8bed\u6cd5"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f: \u8fd9\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/transform-class-properties/"},"\u5b9e\u9a8c\u6027")," \u8bed\u6cd5, create-react-app \u9ed8\u8ba4\u5f00\u542f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  // \u6b64\u8bed\u6cd5\u786e\u4fdd `handleClick` \u5185\u7684 `this` \u5df2\u88ab\u7ed1\u5b9a\u3002  \n  handleClick = () => {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind"},"\u6784\u9020\u51fd\u6570\u63d0\u524dbind"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { };\n    // \u4e3a\u4e86\u5728\u56de\u8c03\u4e2d\u4f7f\u7528 `this`\uff0c\u8fd9\u4e2a\u7ed1\u5b9a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684    \n    this.handleClick = this.handleClick.bind(this);  \n  }\n  handleClick() {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  handleClick() {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={e => this.handleClick(e)}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,r.kt)("h2",{id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"},"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"),(0,r.kt)("p",null,"\u5728\u5faa\u73af\u4e2d\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4f20\u9012\u989d\u5916\u7684\u53c2\u6570:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4e24\u79cd\u65b9\u5f0f\u662f\u7b49\u4ef7\u7684"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed1\u5b9a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u662f\u7bad\u5934\u51fd\u6570, \u6216\u8005\u76f4\u63a5\u4f7f\u7528bind\u65f6\u53ef\u80fd\u6709\u6027\u80fd\u95ee\u9898, ",(0,r.kt)("a",{parentName:"p",href:"/blog/2021/10/10/react-loop-bind-event"},"\u53c2\u8003\u535a\u6587"),";")))}p.isMDXComponent=!0}}]);