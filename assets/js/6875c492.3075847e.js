"use strict";(self.webpackChunkalan_blog=self.webpackChunkalan_blog||[]).push([[48610],{78665:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(63366),r=a(67294),l=a(86010),i=a(55884),s=a(39960),m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,n.Z)(e,v),o=t&&t.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},36299:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(95999),l=a(71750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(67294),r=a(39960),l=a(78665),i=a(21759),s=a(95999),m=a(63725),o=a(36299);function c(e){var t,a=e.metadata,c=e.items,u=e.sidebar,g=e.listMetadata,d=a.allTagsPath,p=a.name,h=a.count,v=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(h),tagName:p});return n.createElement(l.Z,{title:E,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:u},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,E),n.createElement(r.Z,{href:d},n.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})),n.createElement(o.Z,{metadata:g}))}},71750:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(39960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(39960),i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";function o(e){var t,a=e.permalink,o=e.name,c=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&n.createElement("span",null,c))}},20062:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l=a(95999),i=a(7774),s="tags_XVD_",m="tag_JSN8";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:m},n.createElement(i.Z,{name:t,permalink:a}))}))))}},21759:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(86010),l=a(3905),i=a(95999),s=a(39960),m=a(44996),o=a(63725),c=a(18780),u=a(54689),g="blogPostTitle_uMeh",d="blogPostData_Vfxe",p="blogPostDetailsFull_enUA",h=a(20062),v="image_o0gy";function E(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,s=t.email,m=l||s&&"mailto:"+s||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(E,{href:m},n.createElement("img",{className:v,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var b="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?N:b),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var k=a(94578),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).containerId="gitalk-container",a.hasInit=!1,a}(0,k.Z)(t,e);var a=t.prototype;return a.initDep=function(){return window.Gitalk?Promise.resolve():new Promise((function(e){var t=document.createElement("script");t.src="/scripts/gitalk.min.js",t.defer=!0,t.async=!0,t.addEventListener("load",(function(){e()}));var a=document.createElement("link");a.rel="stylesheet",a.href="/styles/gitalk.css",document.head.appendChild(t),document.head.appendChild(a)}))},a.initComment=function(){var e=this;this.hasInit||(this.hasInit=!0,this.initDep().then((function(){new window.Gitalk({clientID:"23c4db407bb2651297c5",clientSecret:"fc3130cc8193193e948f4230a1ee5ebdf17ae55f",repo:"alanwei43.github.io",owner:"alanwei43",admin:["alanwei43"],id:location.pathname,distractionFreeMode:!1}).render(e.containerId)})))},a.componentDidMount=function(){this.initComment()},a.render=function(){return n.createElement("div",{id:this.containerId})},t}(n.Component);function w(e){var t,a,v,E=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,m.C)().withBaseUrl,b=e.children,_=e.frontMatter,N=e.assets,k=e.metadata,w=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,I=k.date,C=k.formattedDate,L=k.permalink,M=k.tags,A=k.readingTime,D=k.title,F=(k.editUrl,k.authors),R=null!=(t=N.image)?t:_.image,U=!y&&w,x=M.length>0,B=y?"h1":"h2";return n.createElement(n.Fragment,null,n.createElement("article",{className:y?void 0:"margin-bottom--lg",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(B,{className:g,itemProp:"headline"},y?D:n.createElement(s.Z,{itemProp:"url",to:L},D)),n.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},n.createElement("time",{dateTime:I,itemProp:"datePublished"},C),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),y&&n.createElement(Z,{authors:F,assets:N})),R&&n.createElement("meta",{itemProp:"image",content:f(R,{absolute:!0})}),y&&n.createElement(n.Fragment,null,n.createElement("div",{id:c.blogPostContainerID,className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:u.Z},b))),n.createElement("footer",{className:(0,r.Z)("row",(a={},a[p]=y,a["docusaurus-mt-lg"]=y,a))},n.createElement("div",{className:(0,r.Z)("col",{"col--9":U})},!y&&F&&F.length&&n.createElement(n.Fragment,null,n.createElement("b",null,"Author:")," ",F.filter((function(e){return e.name})).map((function(e){return n.createElement("a",{key:e.name,href:e.url},e.name)}))," /\xa0"),x&&n.createElement(h.Z,{tags:M}))),y&&n.createElement(P,null)))}}}]);