"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[87468],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"\u4e8b\u4ef6\u5904\u7406",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e8b\u4ef6\u5904\u7406",keywords:["react","javascript"]},c=void 0,s={unversionedId:"reading/react-official-docs/core-6-handling-events",id:"reading/react-official-docs/core-6-handling-events",title:"\u4e8b\u4ef6\u5904\u7406",description:"\u4e8b\u4ef6\u7ed1\u5b9a",source:"@site/src/docs/reading/react-official-docs/core-6-handling-events.md",sourceDirName:"reading/react-official-docs",slug:"/reading/react-official-docs/core-6-handling-events",permalink:"/docs/reading/react-official-docs/core-6-handling-events",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/react-official-docs/core-6-handling-events.md",tags:[],version:"current",frontMatter:{title:"\u4e8b\u4ef6\u5904\u7406",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"\u4e8b\u4ef6\u5904\u7406",keywords:["react","javascript"]},sidebar:"tutorialSidebar",previous:{title:"State & \u751f\u547d\u5468\u671f",permalink:"/docs/reading/react-official-docs/core-5-state-and-lifecycle"},next:{title:"\u8868\u5355",permalink:"/docs/reading/react-official-docs/core-9-forms"}},d={},u=[{value:"\u4e8b\u4ef6\u7ed1\u5b9a",id:"\u4e8b\u4ef6\u7ed1\u5b9a",level:2},{value:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a",level:2},{value:"this\u7ed1\u5b9a",id:"this\u7ed1\u5b9a",level:2},{value:"public class fields\u8bed\u6cd5",id:"public-class-fields\u8bed\u6cd5",level:3},{value:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind",id:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind",level:3},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:3},{value:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u7ed1\u5b9a"},"\u4e8b\u4ef6\u7ed1\u5b9a"),(0,i.kt)("p",null,"React \u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u548c DOM \u5143\u7d20\u7684\u5f88\u76f8\u4f3c,\u4f46\u662f\u6709\u4e00\u70b9\u8bed\u6cd5\u4e0a\u7684\u4e0d\u540c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React \u4e8b\u4ef6\u7684\u547d\u540d\u91c7\u7528\u5c0f\u9a7c\u5cf0\u5f0f(",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase"),"), \u800c\u4e0d\u662f\u7eaf\u5c0f\u5199."),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JSX \u8bed\u6cd5\u65f6\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u4f20\u7edfHTML"',title:'"\u4f20\u7edfHTML"'},'<button onclick="activateLasers()"> Activate Lasers </button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React JSX"',title:'"React','JSX"':!0},"<button onClick={activateLasers}>  Activate Lasers </button>\n")),(0,i.kt)("h2",{id:"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a"),(0,i.kt)("p",null,"React\u4e2d\u7684\u4e8b\u4ef6\u51fd\u6570\u4e0d\u80fd\u901a\u8fc7\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u7684\u65b9\u5f0f\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a. \u4f60\u5fc5\u987b\u663e\u5f0f\u7684\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"preventDefault"),":"),(0,i.kt)("p",null,"\u4f8b\u5982\u963b\u6b62\u8868\u5355\u7684\u9ed8\u8ba4\u63d0\u4ea4\u884c\u4e3a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u4f20\u7edfHTML"',title:'"\u4f20\u7edfHTML"'},'<form onsubmit="console.log(\'You clicked submit.\'); return false">\n  <button type="submit">Submit</button>\n</form>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React JSX"',title:'"React','JSX"':!0},"function Form() {\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('You clicked submit.');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u4e8b\u4ef6\u51fd\u6570\u63a5\u6536\u7684\u4e8b\u4ef6\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"\u662fReact\u63d0\u4f9b\u7684\u5408\u6210\u4e8b\u4ef6, \u4e0e\u539f\u751f\u4e8b\u4ef6\u4e0d\u5b8c\u5168\u76f8\u540c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TODO \u4e86\u89e3\u4e8b\u4ef6\u5192\u6ce1\u4e0d\u540c(e.stopPropagation)")),(0,i.kt)("h2",{id:"this\u7ed1\u5b9a"},"this\u7ed1\u5b9a"),(0,i.kt)("p",null,"\u6709\u4e09\u79cd\u65b9\u5f0f\u7ed1\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"\u4e0a\u4e0b\u6587"),(0,i.kt)("h3",{id:"public-class-fields\u8bed\u6cd5"},"public class fields\u8bed\u6cd5"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f: \u8fd9\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/transform-class-properties/"},"\u5b9e\u9a8c\u6027")," \u8bed\u6cd5, create-react-app \u9ed8\u8ba4\u5f00\u542f"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  // \u6b64\u8bed\u6cd5\u786e\u4fdd `handleClick` \u5185\u7684 `this` \u5df2\u88ab\u7ed1\u5b9a\u3002  \n  handleClick = () => {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,i.kt)("h3",{id:"\u6784\u9020\u51fd\u6570\u63d0\u524dbind"},"\u6784\u9020\u51fd\u6570\u63d0\u524dbind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { };\n    // \u4e3a\u4e86\u5728\u56de\u8c03\u4e2d\u4f7f\u7528 `this`\uff0c\u8fd9\u4e2a\u7ed1\u5b9a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684    \n    this.handleClick = this.handleClick.bind(this);  \n  }\n  handleClick() {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,i.kt)("h3",{id:"\u7bad\u5934\u51fd\u6570"},"\u7bad\u5934\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class LoggingButton extends React.Component {\n  handleClick() {    \n    console.log('this is:', this);  \n  }\n  render() {\n    return (\n      <button onClick={e => this.handleClick(e)}>\n        Click me\n      </button>\n    );\n  }\n}\n")),(0,i.kt)("h2",{id:"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"},"\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570"),(0,i.kt)("p",null,"\u5728\u5faa\u73af\u4e2d\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4f20\u9012\u989d\u5916\u7684\u53c2\u6570:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u4e24\u79cd\u65b9\u5f0f\u662f\u7b49\u4ef7\u7684"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed1\u5b9a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u662f\u7bad\u5934\u51fd\u6570, \u6216\u8005\u76f4\u63a5\u4f7f\u7528bind\u65f6\u53ef\u80fd\u6709\u6027\u80fd\u95ee\u9898, ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/10/10/react-loop-bind-event"},"\u53c2\u8003\u535a\u6587"),";"))))}m.isMDXComponent=!0}}]);