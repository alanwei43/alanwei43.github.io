"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[47668],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?o.createElement(k,i(i({ref:n},p),{},{components:t})):o.createElement(k,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const a={},i="Thrid-party Cookie",l={permalink:"/blog/2024/01/06/third-party-cookie",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2024/01/06-third-party-cookie.md",source:"@site/src/blog/2024/01/06-third-party-cookie.md",title:"Thrid-party Cookie",description:"\u5173\u4e8e\u6d4f\u89c8\u5668\u7981\u7528\u7b2c\u4e09\u65b9Cookie\u6d4b\u8bd5\u9875\u9762:",date:"2024-01-06T00:00:00.000Z",formattedDate:"January 6, 2024",tags:[],readingTime:2.28,hasTruncateMarker:!0,authors:[],frontMatter:{},nextItem:{title:"Ubuntu \u9000\u51fa\u767b\u5f55",permalink:"/blog/2023/12/27/ubuntu-logout"}},c={authorsImageUrls:[]},s=[{value:"\u52a0\u8f7diframe",id:"\u52a0\u8f7diframe",level:2},{value:"\u8bbe\u7f6eCookie",id:"\u8bbe\u7f6ecookie",level:2},{value:"References",id:"references",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5173\u4e8e\u6d4f\u89c8\u5668\u7981\u7528\u7b2c\u4e09\u65b9Cookie\u6d4b\u8bd5\u9875\u9762: "),(0,r.kt)("h2",{id:"\u52a0\u8f7diframe"},"\u52a0\u8f7diframe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction render(){\n    const [loadIframe, setLoadIframe] = useState(false);\n    const domain = new URLSearchParams(location.search).get("domain") || "fe.alanwei.com";\n    const url = `https://${domain}/PrintHeaders`;\n\n    return (<div>\n        <h3>\u662f\u5426\u52a0\u8f7d iframe <input type="checkbox" onChange={e => setLoadIframe(e.target.checked)} checked={loadIframe} /> </h3>\n        { loadIframe && <iframe src={url} width="100%" height="500px" frameBorder="0" scrolling="auto"></iframe> }\n    </div>);\n}\n')),(0,r.kt)("h2",{id:"\u8bbe\u7f6ecookie"},"\u8bbe\u7f6eCookie"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function render(){\n    const domain = new URLSearchParams(location.search).get("domain") || "fe.alanwei.com";\n    const [api, setApi] = useState(`https://${domain}/api/cookie`);\n    const [httpMethod, setHttpMethod] = useState("GET");\n    const [httpResult, setHttpResult] = useState("");\n    const [sendCookies, setSendCookies] = useState("");\n\n    const [cookieInfo, setCookieInfo] = useState({\n        name: "hello",\n        value: "world",\n        Domain: domain,\n        HttpOnly: false,\n        Expires: new Date(Date.now() + (300 * 1000)).toUTCString(), // 300s \u540e\u8fc7\u671f\n        // "Max-Age": 600,\n        Path: "/",\n        SameSite: "Lax",\n        Secure: false\n    });\n\n    useEffect(() => {\n        console.log("cookieInfo: ", JSON.stringify(cookieInfo));\n        const cookies = Object.keys(cookieInfo)\n            .map(key => ({\n                key: key,\n                value: cookieInfo[key]\n            }))\n            .reduce((p, n) => {\n                if(!n.value){\n                    return p;\n                }\n\n                if(httpMethod === "GET"){\n                    p += `${n.key}=${encodeURIComponent(n.value)}&`;\n                } else {\n                    p[n.key] = n.value;\n                }\n                return p;\n            }, httpMethod === "GET" ? "" : {});\n        setSendCookies(typeof cookies === "string" ? cookies : JSON.stringify(cookies));\n    }, [cookieInfo]);\n\n    const list = Object.keys(cookieInfo)\n        .map(key => ({\n            key: key,\n            value: cookieInfo[key],\n        }))\n        .map(kv => ({\n            ...kv,\n            render: () => {\n                const t = typeof kv.value;\n                if(t === "boolean") {\n                    return <input type="checkbox" \n                                checked={kv.value} \n                                onChange={e => setCookieInfo({ ...cookieInfo, [kv.key]: e.target.checked })} />\n                }\n                return <input type={t === "number" ? "number" : "text"} \n                            value={kv.value} \n                            onChange={e => setCookieInfo({ ...cookieInfo, [kv.key]: e.target.value })}  />\n            }\n        }));\n\n    const send = async () => {\n        if(httpMethod !== "GET" && httpMethod !== "POST") {\n            setHttpResult(`\u8bf7\u6c42\u65b9\u6cd5\u5fc5\u987b\u662f GET \u6216\u8005 POST (\u533a\u5206\u5927\u5c0f\u5199).`);\n            return;\n        }\n        const origin = "origin=" + encodeURIComponent(location.origin);\n        const query = httpMethod === "GET" \n            ? sendCookies + "&" + origin\n            : origin;\n\n        const response = await fetch([api, query].join("?"), { \n            method: httpMethod,\n            headers: {\n                "Content-Type": "application/json",\n            },\n            credentials: "include",\n            body: httpMethod === "POST" ? sendCookies : undefined\n        });\n        const json = await response.json();\n        setHttpResult(JSON.stringify(json, null, "  "));\n    };\n\n    return (<div>\n    <h3>Cookie\u4fe1\u606f: </h3>\n    { list.map(item => (<div key={item.key}> \n        <label>{item.key}: { item.render() } </label> \n    </div>)) } \n    <hr />\n    <h3>\u8bf7\u6c42\u4fe1\u606f</h3>\n    <div> <label>\u63a5\u53e3\u5730\u5740: <input type="text" value={api} onChange={e => setApi(e.target.value)} /> </label> </div>\n    <div> <label>\u8bf7\u6c42\u65b9\u6cd5: <input type="text" value={httpMethod} onChange={e => setHttpMethod(e.target.value)} /> </label> </div>\n    <div>\n        <div>\u5f85\u4f20\u9012Cookie\u503c:</div>\n        <div>{sendCookies}</div>\n    </div>\n    <div> <button onClick={send}>\u53d1\u8d77\u8bf7\u6c42</button> </div>\n    <hr />\n    <div> \u8fd4\u56de\u7ed3\u679c: <br /> <pre>{httpResult}</pre> </div>\n</div>);\n}\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"MDN Set-Cookie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/131256002"},"\u5f53\u6d4f\u89c8\u5668\u5168\u9762\u7981\u7528\u4e09\u65b9 Cookie"))))}u.isMDXComponent=!0}}]);