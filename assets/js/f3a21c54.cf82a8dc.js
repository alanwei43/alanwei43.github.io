"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[8762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u8fde\u63a5",hide_title:!1,hide_table_of_contents:!1,keywords:["okhttp","java"],description:"OkHttp \u8fde\u63a5"},s=void 0,i={unversionedId:"okhttp-guide/connections",id:"okhttp-guide/connections",title:"\u8fde\u63a5",description:"OkHttp \u8fde\u63a5",source:"@site/src/docs/articles/okhttp-guide/4-connections.md",sourceDirName:"okhttp-guide",slug:"/okhttp-guide/connections",permalink:"/docs/articles/okhttp-guide/connections",draft:!1,editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/okhttp-guide/4-connections.md",tags:[],version:"current",lastUpdatedAt:1618146770,formattedLastUpdatedAt:"Apr 11, 2021",sidebarPosition:4,frontMatter:{title:"\u8fde\u63a5",hide_title:!1,hide_table_of_contents:!1,keywords:["okhttp","java"],description:"OkHttp \u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58",permalink:"/docs/articles/okhttp-guide/caching"},next:{title:"\u4e8b\u4ef6",permalink:"/docs/articles/okhttp-guide/events"}},c={},l=[{value:"URLs",id:"urls",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Routes",id:"routes",level:2},{value:"Connections",id:"connections",level:2}],p={toc:l};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although you provide only the URL, OkHttp plans its connection to your webserver using three types: URL, Address, and Route."),(0,o.kt)("h2",{id:"urls"},"URLs"),(0,o.kt)("p",null,"URLs (like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/square/okhttp"},"https://github.com/square/okhttp"),") are fundamental to HTTP and the Internet. In addition to being a universal, decentralized naming scheme for everything on the web, they also specify how to access web resources."),(0,o.kt)("p",null,"URLs are abstract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They specify that the call may be plaintext (http) or encrypted (https), but not which cryptographic algorithms should be used. Nor do they specify how to verify the peer\u2019s certificates (the ",(0,o.kt)("a",{parentName:"li",href:"http://developer.android.com/reference/javax/net/ssl/HostnameVerifier.html"},"HostnameVerifier"),") or which certificates can be trusted (the ",(0,o.kt)("a",{parentName:"li",href:"http://developer.android.com/reference/org/apache/http/conn/ssl/SSLSocketFactory.html"},"SSLSocketFactory"),")."),(0,o.kt)("li",{parentName:"ul"},"They don\u2019t specify whether a specific proxy server should be used or how to authenticate with that proxy server.")),(0,o.kt)("p",null,"They\u2019re also concrete: each URL identifies a specific path (like /square/okhttp) and query (like ?q=sharks&lang=en). Each webserver hosts many URLs."),(0,o.kt)("h2",{id:"addresses"},"Addresses"),(0,o.kt)("p",null,"Addresses specify a webserver (like github.com) and all of the static configuration necessary to connect to that server: the port number, HTTPS settings, and preferred network protocols (like HTTP/2 or SPDY)."),(0,o.kt)("p",null,"URLs that share the same address may also share the same underlying TCP socket connection. Sharing a connection has substantial performance benefits: lower latency, higher throughput (due to ",(0,o.kt)("a",{parentName:"p",href:"http://www.igvita.com/2011/10/20/faster-web-vs-tcp-slow-start/"},"TCP slow start"),") and conserved battery. OkHttp uses a ",(0,o.kt)("a",{parentName:"p",href:"http://square.github.io/okhttp/4.x/okhttp/okhttp3/-connection-pool/"},"ConnectionPool")," that automatically reuses HTTP/1.x connections and multiplexes HTTP/2 and SPDY connections."),(0,o.kt)("p",null,"In OkHttp some fields of the address come from the URL (scheme, hostname, port) and the rest come from the ",(0,o.kt)("a",{parentName:"p",href:"http://square.github.io/okhttp/4.x/okhttp/okhttp3/-ok-http-client/"},"OkHttpClient"),"."),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("p",null,"Routes supply the dynamic information necessary to actually connect to a webserver. This is the specific IP address to attempt (as discovered by a DNS query), the exact proxy server to use (if a ",(0,o.kt)("a",{parentName:"p",href:"http://developer.android.com/reference/java/net/ProxySelector.html"},"ProxySelector")," is in use), and which version of TLS to negotiate (for HTTPS connections)."),(0,o.kt)("p",null,"There may be many routes for a single address. For example, a webserver that is hosted in multiple datacenters may yield multiple IP addresses in its DNS response."),(0,o.kt)("h2",{id:"connections"},"Connections"),(0,o.kt)("p",null,"When you request a URL with OkHttp, here\u2019s what it does:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It uses the URL and configured OkHttpClient to create an ",(0,o.kt)("strong",{parentName:"li"},"address"),". This address specifies how we\u2019ll connect to the webserver."),(0,o.kt)("li",{parentName:"ol"},"It attempts to retrieve a connection with that address from the ",(0,o.kt)("strong",{parentName:"li"},"connection pool"),"."),(0,o.kt)("li",{parentName:"ol"},"If it doesn\u2019t find a connection in the pool, it selects a ",(0,o.kt)("strong",{parentName:"li"},"route")," to attempt. This usually means making a DNS request to get the server\u2019s IP addresses. It then selects a TLS version and proxy server if necessary."),(0,o.kt)("li",{parentName:"ol"},"If it\u2019s a new route, it connects by building either a direct socket connection, a TLS tunnel (for HTTPS over an HTTP proxy), or a direct TLS connection. It does TLS handshakes as necessary."),(0,o.kt)("li",{parentName:"ol"},"It sends the HTTP request and reads the response.")),(0,o.kt)("p",null,"If there\u2019s a problem with the connection, OkHttp will select another route and try again. This allows OkHttp to recover when a subset of a server\u2019s addresses are unreachable. It\u2019s also useful when a pooled connection is stale or if the attempted TLS version is unsupported."),(0,o.kt)("p",null,"Once the response has been received, the connection will be returned to the pool so it can be reused for a future request. Connections are evicted from the pool after a period of inactivity."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://square.github.io/okhttp/caching/"},"\u539f\u6587 - Connections"))))}h.isMDXComponent=!0}}]);