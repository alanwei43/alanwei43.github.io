"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[13085],{14247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(86010),r=n(10833),c=n(35281),i=n(44957),s=n(45042),o=n(39407);const m="mdxPageWrapper_j9I6";function u(e){const{content:t}=e,{metadata:{title:n,description:u,frontMatter:d}}=t,{wrapperClassName:f,hide_table_of_contents:v}=d;return l.createElement(r.FG,{className:(0,a.Z)(f??c.k.wrapper.mdxPages,c.k.page.mdxPage)},l.createElement(r.d,{title:n,description:u}),l.createElement(i.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,a.Z)("row",m)},l.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},l.createElement("article",null,l.createElement(s.Z,null,l.createElement(t,null)))),!v&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(o.Z,{toc:t.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},39407:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(87462),a=n(67294),r=n(86010),c=n(93743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},a.createElement(c.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(87462),a=n(67294),r=n(86668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>s(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),s=o(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const f=a.memo(d);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d,...v}=e;const g=(0,r.L)(),h=m??g.tableOfContents.minHeadingLevel,p=d??g.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return u((0,a.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:p}}),[s,o,h,p])),a.createElement(f,(0,l.Z)({toc:E,className:n,linkClassName:s},v))}},97942:(e,t,n)=>{n.d(t,{Og:()=>r,qv:()=>a,zt:()=>c});var l=n(67294);class a extends l.Component{constructor(e){super(e)}render(){const e=this.props.link,t="mailto:me@alanwei.com?subject=\u5220\u9664\u4fb5\u6743\u6587\u7ae0",n=this.props.link?l.createElement("a",{href:e,target:"_blank"},this.props.author):l.createElement("i",null,this.props.author);return l.createElement("section",{style:{marginTop:"1em"}},l.createElement("hr",null),l.createElement("ul",{style:{marginLeft:"-1em"}},l.createElement("li",null,"\u4f5c\u8005: ",n),l.createElement("li",null,"\u6765\u6e90: ",l.createElement("a",{href:e||t,target:"_blank"},this.props.link||"\u6682\u65e0")),l.createElement("li",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863, \u6587\u7ae0\u6240\u6709\u6743\u5f52\u4f5c\u8005 ",n," \u6240\u6709, \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 ",l.createElement("a",{href:t,target:"_top"},"me#alanwei.com(",l.createElement("i",null,"#\u6362\u6210@"),")")," \u5220\u9664\u6b64\u6587.")),l.createElement("hr",null))}}class r extends l.Component{constructor(e){super(e)}render(){const e=`https://gitee.com/alanway/resources/raw/master/${this.props.src}`;return l.createElement("img",{src:e,alt:e,referrerPolicy:"no-referrer"})}}function c(e){const t=`https://gitee.com/alanway/resources/raw/master/${e.href}`;return l.createElement("a",{title:`\u70b9\u51fb\u8bbf\u95ee ${t}`,href:t,target:"_blank"},"[\u70b9\u6b64\u4e0b\u8f7d] ",e.children)}},34817:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(52195),a=n(97942);const r={...l.Z,ResourceLink:a.zt,GiteeImage:a.Og}}}]);