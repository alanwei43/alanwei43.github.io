"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[86198],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],s={title:"State & \u751f\u547d\u5468\u671f",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"State & \u751f\u547d\u5468\u671f",keywords:["react","javascript"]},i=void 0,l={unversionedId:"reading/react-official-docs/core-5-state-and-lifecycle",id:"reading/react-official-docs/core-5-state-and-lifecycle",title:"State & \u751f\u547d\u5468\u671f",description:"\u6b63\u786e\u4f7f\u7528 State",source:"@site/src/docs/reading/react-official-docs/core-5-state-and-lifecycle.md",sourceDirName:"reading/react-official-docs",slug:"/reading/react-official-docs/core-5-state-and-lifecycle",permalink:"/docs/reading/react-official-docs/core-5-state-and-lifecycle",draft:!1,editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/react-official-docs/core-5-state-and-lifecycle.md",tags:[],version:"current",frontMatter:{title:"State & \u751f\u547d\u5468\u671f",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"State & \u751f\u547d\u5468\u671f",keywords:["react","javascript"]},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6 & Props",permalink:"/docs/reading/react-official-docs/core-4-components-and-props"},next:{title:"\u4e8b\u4ef6\u5904\u7406",permalink:"/docs/reading/react-official-docs/core-6-handling-events"}},p={},u=[{value:"\u6b63\u786e\u4f7f\u7528 State",id:"\u6b63\u786e\u4f7f\u7528-state",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6b63\u786e\u4f7f\u7528-state"},"\u6b63\u786e\u4f7f\u7528 State"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u76f4\u63a5\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"strong"},"this.state"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u9519\u8bef\u793a\u4f8b\nthis.state.comment = 'Hello';\n\n// \u6b63\u786e\u793a\u4f8b\nthis.setState({\n  comment: \"Hello\"\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5229\u7528\u89e3\u6784\u8bed\u6cd5\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"strong"},"state"),"\u5d4c\u5957\u5bf9\u8c61\u91cc\u7684\u5b50\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { user } = this.state;\nuser.name.first = "Alan";\nthis.setState({\n  user: user\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"state\u7684\u66f4\u65b0\u53ef\u80fd\u662f\u5f02\u6b65\u7684")),(0,o.kt)("p",null,"\u51fa\u4e8e\u6027\u80fd\u8003\u8651, \u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u8c03\u7528\u53ef\u80fd\u5408\u5e76\u6210\u4e00\u6b21\u8c03\u7528, \u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u7684\u7b2c\u4e8c\u4e2a\u5165\u53c2\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u76d1\u542c\u72b6\u6001\u66f4\u65b0\u6210\u529f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component } from "react";\n\nexport type CounterProps = {\n  increment: number\n}\ntype CounterState = {\n  counter: number\n}\n\nexport class Counter extends Component<CounterProps, CounterState> {\n\n  constructor(props: CounterProps) {\n    super(props);\n    this.state = {\n      counter: 0\n    }\n  }\n\n\n  doIncr = () => {\n    /**\n     * \u5047\u8bbe this.props.increment \u503c\u4e3a 2\n     * \u5f53\u70b9\u51fb\u6309\u94ae\u65f6, \u8f93\u51fa\u4ee5\u4e0b\u65e5\u5fd7:\n     * \n     * before:  0\n     * after:  0\n     * callback:  2\n     * \n     * before:  2\n     * after:  2\n     * callback:  4\n     * ....\n     * \n     * before \u548c after \u8f93\u51fa\u7684 this.state.counter \u90fd\u662f\u66f4\u65b0\u524d\u7684\u503c, \n     * \u800c callback \u7684\u65e5\u5fd7\u8f93\u51fa\u7684\u662f\u6700\u65b0\u7684\u503c\n     */\n    console.log("before: ", this.state.counter); \n    this.setState({\n      counter: this.state.counter + this.props.increment \n    }, () => {\n      // \u8fd9\u91cc\u8bfb\u53d6\u5230\u7684 this.state.counter \u662f\u66f4\u65b0\u540e\u7684\u503c\n      console.log("callback: ", this.state.counter);\n    });\n    console.log("after: ", this.state.counter); // \u8fd9\u91cc\u8bfb\u53d6\u5230\u7684 this.state.counter \u503c\u4e0d\u662f\u66f4\u65b0\u540e\u7684\n  }\n\n  render() {\n    return ( <b onClick={this.doIncr}>Count: {this.state.counter}</b> );\n  }\n}\n')),(0,o.kt)("p",null,"\u56e0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u8c03\u7528\u53ef\u80fd\u88ab\u5408\u5e76\u6267\u884c, \u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"this.props"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"this.state"),"\u53ef\u80fd\u4f1a\u5f02\u6b65\u66f4\u65b0, \u6240\u4ee5\u4e0d\u8981\u4f9d\u8d56\u4ed6\u4eec\u7684\u503c\u6765\u66f4\u65b0\u4e0b\u4e00\u4e2a\u72b6\u6001, \u6bd4\u5982\u4e0a\u9762\u793a\u4f8b\u7684\u8fd9\u6bb5\u4ee3\u7801\u53ef\u80fd\u4f1a\u65e0\u6cd5\u66f4\u65b0\u8ba1\u6570\u5668:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Component } from "react";\n\nexport type CounterProps = {\n  increment: number\n}\ntype CounterState = {\n  counter: number\n}\n\nexport class Counter extends Component<CounterProps, CounterState> {\n\n  constructor(props: CounterProps) {\n    super(props);\n    this.state = {\n      counter: 0\n    }\n  }\n  componentDidMount() {\n    for (let i = 0; i < 100; i++) {\n      /**\n       * \u9519\u8bef\u793a\u4f8b\n       * \u5047\u8bbe this.props.increment \u4e3a1, \u6700\u7ec8\u7ec4\u4ef6\u663e\u793a\u7684 Count \u8fdc\u8fdc\u5c0f\u4e8e100\n       */ \n      this.setState({\n        counter: this.state.counter + this.props.increment\n      });\n    }\n  }\n\n  render() {\n    return (<b>Count: {this.state.counter}</b>);\n  }\n}\n')),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898, \u53ef\u4ee5\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," \u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u800c\u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61. \u8fd9\u4e2a\u51fd\u6570\u7528\u4e0a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570, \u5c06\u6b64\u6b21\u66f4\u65b0\u88ab\u5e94\u7528\u65f6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u505a\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6b63\u786e\u793a\u4f8b\nthis.setState((state, props) => ({\n  counter: state.counter + props.increment\n}));\n")))}f.isMDXComponent=!0}}]);