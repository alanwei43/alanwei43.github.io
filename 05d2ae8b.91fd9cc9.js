(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{308:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var b=r.a.createContext({}),u=function(t){var e=r.a.useContext(b),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=u(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return a?r.a.createElement(m,c(c({ref:e},b),{},{components:a})):r.a.createElement(m,c({ref:e},b))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},309:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return o}));var n=a(4),r=a(0),i=a.n(r),l=function(t){function e(e){return t.call(this,e)||this}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props.link?i.a.createElement("a",{href:this.props.link||"javascript:void(0)",target:"_blank"},this.props.author):i.a.createElement("i",null,this.props.author);return i.a.createElement("section",null,i.a.createElement("b",null,"\u672c\u6587\u4ec5\u7528\u4e8e\u672c\u4eba\u5b66\u4e60\u548c\u5b58\u6863\uff0c\u539f\u4f5c\u8005\u4e3a ",t,", \u6587\u7ae0\u6240\u6709\u6743\u5f52 ",t," \u6240\u6709. \u5982\u6709\u4fb5\u6743\u8bf7\u53d1\u9001\u90ae\u4ef6\u81f3 alan.wei#live.com(",i.a.createElement("i",null,"#\u6362\u6210@"),") \u5220\u9664\u6b64\u6587."),i.a.createElement("hr",null))},e}(i.a.Component),c=a(310);i.a.Component;function o(t){if("string"!=typeof t.href)return i.a.createElement("b",null,"[BlogLink] file \u5c5e\u6027\u5fc5\u987b\u662f\u5b57\u7b26");var e=/^(\d{4})\-(\d{2})\-(\d{2})\-(.+)?$/g.exec(t.href);if(!e)return i.a.createElement("b",null,"[BlogLink] \u535a\u5ba2\u6587\u4ef6\u540d\u89e3\u6790\u9519\u8bef: ",t.href);if(t.href.endsWith(".md")||t.href.endsWith(".mdx"))return i.a.createElement("b",null,"[BlogLink] \u6587\u4ef6\u540d\u9700\u8981\u53bb\u6389\u6269\u5c55\u540d .md \u6216 .mdx: ",t.href);var a="/blog/"+e[1]+"/"+e[2]+"/"+e[3]+"/"+e[4];return i.a.createElement("a",{href:a,target:t.target,"data-component":"BlogLink"},t.children)}},315:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a(4),r=a(0),i=a.n(r),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){return i.a.createElement("div",null,"\u672c\u6587\u4e3a ",i.a.createElement("a",{href:"https://www.zhihu.com/people/jeffz",target:"_blank"},"\u8d75\u52bc")," \u53d1\u8868\u5728 ",i.a.createElement("a",{href:"http://blog.zhaojie.me",target:"_blank"},"\u4e2a\u4eba\u535a\u5ba2")," \u7684\u7cfb\u5217\u6587\u7ae0\u4e4b\u4e00\u3002")},e}(i.a.Component)},77:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return u})),a.d(e,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(308)),l=a(309),c=a(315),o={title:"Why Java Sucks and C# Rocks\uff083\uff09\uff1aAttribute\u4e0eAnnotation",sidebar_label:"Attribute\u4e0eAnnotation",keywords:["java","c#","csharp"],description:"Why Java Sucks and C# Rocks"},b={unversionedId:"articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation",id:"articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation",isDocsHomePage:!1,title:"Why Java Sucks and C# Rocks\uff083\uff09\uff1aAttribute\u4e0eAnnotation",description:"Why Java Sucks and C# Rocks",source:"@site/src/docs/articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation.md",slug:"/articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/articles/why-java-sucks-and-csharp-rocks/3-attribute-and-annotation.md",version:"current",sidebar_label:"Attribute\u4e0eAnnotation",sidebar:"docs",previous:{title:"Why Java Sucks and C# Rocks\uff082\uff09\uff1a\u57fa\u7840\u7c7b\u578b\u4e0e\u9762\u5411\u5bf9\u8c61",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/2-basic-type-and-oop"},next:{title:"Why Java Sucks and C# Rocks\uff08\u88651\uff09\uff1aReddit\uff0c\u517c\u8c08C#\u5c5e\u6027",permalink:"/docs/articles/why-java-sucks-and-csharp-rocks/4-1-reddit-and-property"}},u=[{value:"\u81ea\u5b9a\u4e49\u7279\u6027\u4e0e\u8bbe\u8ba1",id:"\u81ea\u5b9a\u4e49\u7279\u6027\u4e0e\u8bbe\u8ba1",children:[]},{value:"\u7f3a\u70b91\uff1a\u5931\u8840\u6a21\u578b",id:"\u7f3a\u70b91\uff1a\u5931\u8840\u6a21\u578b",children:[]},{value:"\u7f3a\u70b92\uff1a\u53e4\u602a\u7684\u7ea6\u5b9a",id:"\u7f3a\u70b92\uff1a\u53e4\u602a\u7684\u7ea6\u5b9a",children:[]},{value:"Java 5.0\u5b66\u4e60C#",id:"java-50\u5b66\u4e60c",children:[]}],p={toc:u};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)(l.b,{author:"\u8001\u8d75\u70b9\u6ef4",link:"http://blog.zhaojie.me/",mdxType:"NetworkCopyRight"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://blog.zhaojie.me/2010/04/why-java-sucks-and-csharp-rocks-3-attribute-and-annotation.html"},"\u539f\u6587 -  Why Java Sucks and C# Rocks\uff083\uff09\uff1aAttribute\u4e0eAnnotation")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/articles/why-java-sucks-and-csharp-rocks/2-basic-type-and-oop"},"\u4e0a\u4e00\u7bc7\u6587\u7ae0\u91cc"),"\u91cc\u6211\u8c08\u4e86Java\u548cC#\u8bed\u8a00\u4e2d\u5bf9\u4e8e\u57fa\u7840\u7c7b\u578b\u7684\u4e0d\u540c\u6001\u5ea6\uff0c\u6211\u8ba4\u4e3aC#\u628a\u57fa\u7840\u7c7b\u578b\u89c6\u505a\u5bf9\u8c61\u7684\u505a\u6cd5\u6bd4Java\u66f4\u6709\u201c\u4e07\u7269\u7686\u5bf9\u8c61\u201d\u7684\u7406\u5ff5\uff0c\u4f7f\u7528\u8d77\u6765\u4e5f\u66f4\u4e3a\u65b9\u4fbf\u3002\u6b64\u5916\uff0cC#\u62e5\u6709\u4e00\u4e2aJava 1.4\u6240\u4e0d\u5b58\u5728\u7684\u7279\u6027\uff0c\u5373Attribute\uff08\u81ea\u5b9a\u4e49\u7279\u6027\uff09\uff0c\u800c\u5728\u4e4b\u540e\u7684Java 5.0\u4e2d\u4e5f\u589e\u52a0\u4e86\u7c7b\u4f3c\u7684\u529f\u80fd\uff0c\u8fd9\u4fbf\u662fAnnotation\uff08\u6807\u6ce8\uff09\u3002\u90a3\u4e48\uff0cAttribute\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff0cJava\u4e2d\u7684Annotation\u548cC#\u4e2d\u7684Attribute\u53c8\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff0cJava 5.0\u4e2d\u53c8\u4eceC# 1.0\u4e2d\u5438\u6536\u4e86\u54ea\u4e9b\u4f18\u70b9\uff1f\u6211\u4eec\u73b0\u5728\u5c31\u6765\u5173\u6ce8\u8fd9\u65b9\u9762\u7684\u95ee\u9898\u3002"),Object(i.b)("h2",{id:"\u81ea\u5b9a\u4e49\u7279\u6027\u4e0e\u8bbe\u8ba1"},"\u81ea\u5b9a\u4e49\u7279\u6027\u4e0e\u8bbe\u8ba1"),Object(i.b)("p",null,"Attribute\u662fC# 1.0\u4e2d\u7684\u91cd\u8981\u529f\u80fd\uff0c\u5b83\u7684\u4f5c\u7528\u4fbf\u662f\u4e3a\u67d0\u4e2a\u6210\u5458\uff0c\u4f8b\u5982\u7c7b\u3001\u65b9\u6cd5\u6216\u53c2\u6570\u9644\u52a0\u4e0a\u4e00\u4e9b\u5143\u6570\u636e\uff0c\u800c\u5728\u7a0b\u5e8f\u4e2d\u5219\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u64cd\u4f5c\u83b7\u53d6\u5230\u8fd9\u4e9b\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5728.NET\u6846\u67b6\u4e2d\uff0c\u6bcf\u4e2a\u7c7b\u578b\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u65e0\u6cd5\u88ab\u5e8f\u5217\u5316\u7684\uff0c\u9664\u975e\u6211\u4eec\u4e3a\u7c7b\u578b\u6dfb\u52a0Serializable\u6807\u8bb0\u3002\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class Product { ... }\n")),Object(i.b)("p",null,"Product\u7c7b\u5728\u6807\u8bb0\u4e86Serializable\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u88abBinarySerializer\u6216DataContractSerializer\u7b49\u5de5\u5177\u7c7b\u5e8f\u5217\u5316\u6216\u53cd\u5e8f\u5217\u5316\u3002C#\u6709\u4e2a\u7ea6\u5b9a\uff1a\u6240\u6709\u7684Attribute\u90fd\uff08\u76f4\u63a5\u6216\u95f4\u63a5\uff09\u7ee7\u627fSystem.Attribute\u7c7b\uff0c\u5e76\u4e14\u7c7b\u540d\u4ee5Attribute\u7ed3\u5c3e\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u65f6\u53ef\u4ee5\u7701\u7565\u3002\u56e0\u6b64\uff0c\u4e8b\u5b9e\u4e0aSerializable\u6807\u8bb0\u5176\u5b9e\u662fSerializableAttribute\u7c7b\uff0c\u5b83\u662fSystem.Attribute\u7684\u5b50\u7c7b\u3002"),Object(i.b)("p",null,"C#\u4e2d\u7684Attribute\u5bf9\u4e8e\u8f6f\u4ef6\u8bbe\u8ba1\u6709\u975e\u5e38\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u4f8b\u5982Kent Beck\u8bc4\u4ef7\u5230\uff1a"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NUnit 2.0 is an excellent example of idiomatic design. Most folks who port xUnit just transliterate the Smalltalk or Java version. That's what we did with NUnit at first, too. This new version is NUnit as it would have been done had it been done in C# to begin with.")),Object(i.b)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u5927\u90e8\u5206xUnit\u6846\u67b6\u90fd\u662f\u7b80\u5355\u5730\u79fb\u690dJUnit\u7684\u4ee3\u7801\uff0c\u4f46\u662fNUnit\u5374\u5229\u7528\u4e86C#\u7684Attribute\u63d0\u4f9b\u4e86\u66f4\u4f18\u96c5\u7684\u8bbe\u8ba1\uff0c\u7c7b\u4f3c\u7684\u89c2\u70b9\u5728Martin Fowler\u6240\u7f16\u7684\u6742\u5fd7\u4e2d\u4e5f\u6709\u8fc7\u66f4\u4e3a\u5177\u4f53\u7684\u8bba\u8ff0\u3002\u56e0\u6b64\uff0cC#\u5728\u8fd9\u65b9\u9762\u53ef\u8c13\u5927\u5927\u9886\u5148\u4e8eJava 1.4\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5728C#\u53d1\u5e03\u4e24\u5e74\u540eJava\u8bed\u8a00\u4e5f\u63a8\u51fa\u4e865.0\u7248\u672c\uff0c\u589e\u52a0\u4e86Annotation\u529f\u80fd\uff0c\u8fd9\u65e0\u7591\u7f29\u5c0f\u4e86\u4e0eC#\u4e4b\u95f4\u7684\u5dee\u8ddd\u3002"),Object(i.b)("p",null,"\u53ea\u53ef\u60dc\uff0cJava\u8bed\u8a00\u4e2d\u7684Annotation\u529f\u80fd\uff0c\u6211\u8ba4\u4e3a\u76f8\u5bf9\u4e8eC#\u8bed\u8a00\u7684Attribute\u529f\u80fd\u81f3\u5c11\u6709\u4e24\u4e2a\u7f3a\u70b9\u3002"),Object(i.b)("h2",{id:"\u7f3a\u70b91\uff1a\u5931\u8840\u6a21\u578b"},"\u7f3a\u70b91\uff1a\u5931\u8840\u6a21\u578b"),Object(i.b)("p",null,"\u8bf4\u8d77C#\u7684Attribute\u4e0eJava\u7684Annotation\uff0c\u4e24\u8005\u6700\u5927\u7684\u533a\u522b\u4fbf\u662f\uff1aC#\u4e2d\u7684Attribute\u662f\u7c7b\uff0c\u800cJava\u4e2d\u7684Annotation\u662f\u63a5\u53e3\u3002"),Object(i.b)("p",null,"\u7531\u4e8eC#\u7684Attribute\u5176\u5b9e\u4e5f\u662f.NET\u4e2d\u6807\u51c6\u7684\u201c\u7c7b\u201d\uff0c\u56e0\u6b64\u4e0e\u7c7b\u6709\u5173\u7684\u8bbe\u8ba1\u65b9\u5f0f\u90fd\u53ef\u4ee5\u8fd0\u7528\u5176\u4e2d\uff0c\u4f8b\u5982\u62bd\u8c61\u7c7b\uff0c\u62bd\u8c61\u65b9\u6cd5\uff0c\u91cd\u8f7d\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u63a5\u53e3\u7b49\u7b49\u3002\u8fd9\u7c7b\u7279\u6027\u9020\u5c31\u4e86\u4e00\u4e9b\u975e\u5e38\u5e38\u7528\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u4f8b\u5982\u53ef\u80fd\u5bf9\u4e8e\u5927\u90e8\u5206.NET\u7a0b\u5e8f\u5458\u90fd\u975e\u5e38\u719f\u6089\u7684\u201c\u9a8c\u8bc1\u6807\u8bb0\u201d\u3002"),Object(i.b)("p",null,"\u7b80\u5355\u5730\u8bf4\uff0c\u8fd9\u662f\u4e00\u79cd\u901a\u8fc7\u6807\u8bb0\u6765\u8868\u793a\u201c\u9a8c\u8bc1\u903b\u8f91\u201d\u7684\u505a\u6cd5\uff0c\u4f8b\u5982\u6211\u4eec\u53ef\u4ee5\u5148\u5b9a\u4e49\u4e00\u4e2a\u57fa\u7c7b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class ValidationResult { ... }\n\n[AttributeUsage(AttributeTargets.Property, AllowMultiple = true)]\npublic abstract class ValidationAttribute : Attribute\n{\n    public abstract ValidationResult Validate(object value);\n}\n")),Object(i.b)("p",null,"ValidationAttribute\u7c7b\u7ee7\u627f\u4e86System.Attribute\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u53ef\u4ee5\u4f5c\u4e3a\u5176\u4ed6Attribute\u7684\u57fa\u7c7b\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u8fd9\u6837\u4e00\u4e9b\u901a\u7528\u7684\u9a8c\u8bc1\u7c7b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class RangeAttribute : ValidationAttribute\n{\n    public int Min { get; set; }\n\n    public int Max { get; set; }\n\n    public override ValidationResult Validate(object value) { ... }\n}\n\npublic class RegexAttribute : ValidationAttribute\n{\n    public string Pattern { get; set; }\n\n    public override ValidationResult Validate(object value) { ... }\n}\n")),Object(i.b)("p",null,"\u4e8e\u662f\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5728\u4e00\u4e2a\u7c7b\u7684\u5c5e\u6027\u4e0a\u8fdb\u884c\u6807\u8bb0\uff0c\u8868\u793a\u5bf9\u67d0\u4e2a\u5c5e\u6027\u7684\u9a8c\u8bc1\u8981\u6c42\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'public class Person\n{\n    [Range(Min = 10, Max = 60)]\n    public int Age { get; set; }\n\n    [Range(Min = 30, Max = 50)]\n    public int Size { get; set; }\n\n    [Regex(Pattern = @"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]\n    public string Email { get; set; }\n}\n')),Object(i.b)("p",null,"\u8fd9\u6837\u7684\u6807\u8bb0\u4fbf\u8868\u793aAge\u7684\u5408\u6cd5\u8303\u56f4\u662f10\u523060\uff0cSize\u7684\u5408\u6cd5\u8303\u56f4\u662f30\u523050\uff0c\u800cEmail\u9700\u8981\u6ee1\u8db3\u7279\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u6807\u8bb0\u4e4b\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u4f7f\u7528\u7edf\u4e00\u7684\u4ee3\u7801\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4f8b\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public static void Validate(object o)\n{\n    var type = o.GetType();\n    foreach (var property in type.GetProperties())\n    {\n        var validateAttrs = \n            (ValidationAttribute[])property.GetCustomAttributes(\n                typeof(ValidationAttribute), true);\n\n        var propValue = property.GetValue(o, null);\n        foreach (var attr in validateAttrs)\n        {\n            var result = attr.Validate(propValue);\n            // do more things\n        }\n    }\n}\n")),Object(i.b)("p",null,"\u5982\u6b64\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u8f7b\u6613\u5730\u83b7\u53d6\u6bcf\u4e2a\u5c5e\u6027\u4e0a\u7684\u9a8c\u8bc1\u6761\u4ef6\uff0c\u5e76\u8c03\u7528Validate\u65b9\u6cd5\u8fdb\u884c\u9a8c\u8bc1\u3002\u6211\u4eec\u6709\u80fd\u529b\u8fd9\u4e48\u505a\u7684\u539f\u56e0\uff0c\u662f\u56e0\u4e3aC#\u4e2d\u7684Attribute\u662f\u7c7b\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u62bd\u8c61\u7c7bValidationAttribute\u8fdb\u884c\u7edf\u4e00\u63a7\u5236\u3002\u5982\u679c\u8fd9\u6bb5\u9a8c\u8bc1\u903b\u8f91\u662f\u7531\u7c7b\u5e93\u63d0\u4f9b\u7684\uff0c\u800c\u5f00\u53d1\u4eba\u5458\u60f3\u8981\u589e\u52a0\u989d\u5916\u7684\u9a8c\u8bc1\u6761\u4ef6\uff0c\u4e5f\u53ea\u9700\u8981\u81ea\u5df1\u5b9a\u4e49\u65b0\u7684\u7c7b\u6765\u7ee7\u627fValidationAttribute\uff0c\u5e76\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684Validate\u65b9\u6cd5\u903b\u8f91\u5373\u53ef\u3002\u8fd9\u79cd\u65b9\u5f0f\u5927\u91cf\u51fa\u73b0\u5728\u5404\u7c7b.NET\u7684\u7c7b\u5e93\u53ca\u6846\u67b6\u4e2d\uff0c\u7ed9.NET\u7a0b\u5e8f\u5458\u5e26\u6765\u8bb8\u591a\u4fbf\u5229\u3002"),Object(i.b)("p",null,"\u800c\u5728Java 5.0\u4e2d\uff0c\u4f3c\u4e4eAnnotation\u548cC#\u7684Attribute\u5728\u8868\u73b0\u5f62\u5f0f\u4e0a\u5dee\u4e0d\u591a\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u201c\u9a8c\u8bc1\u6807\u8bb0\u201d\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public @interface RangeValidation {\n    int min();\n    int max();\n}\n\npublic @interface RegexValidation {\n    String pattern();\n}\n")),Object(i.b)("p",null,"\u4f7f\u7528\u65f6\u4f3c\u4e4e\u4e5f\u5dee\u4e0d\u591a\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class Person {\n    @RangeValidation(min = 10, max = 60)\n    public int age;\n\n    @RegexValidation(pattern = "^\\\\w+@[a-zA-Z_]+?\\\\.[a-zA-Z]{2,3}$")\n    public String email;\n}\n')),Object(i.b)("p",null,"\u4e0eC#\u4e0d\u540c\uff0cJava\u7684Annotation\u5176\u5b9e\u662f\u63a5\u53e3\uff0c\u5b83\u9ed8\u8ba4\u5b9e\u73b0\u7c7b\u5e93\u4e2d\u5b9a\u4e49\u7684",Object(i.b)("inlineCode",{parentName:"p"},"java.lang.annotation.Annotation"),"\u63a5\u53e3\uff0c\u5e76\u4e14\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e9b\u65e0\u53c2\u6570\u7684\u65b9\u6cd5\uff08\u4e0d\u8fc7\u53ef\u4ee5\u6307\u5b9a\u9ed8\u8ba4\u503c\uff09\u2014\u2014\u56e0\u4e3a\u8fd9\u4e9b\u65b9\u6cd5\u7684\u4f5c\u7528\u5176\u5b9e\u53ea\u662f\u7c7b\u4f3c\u4e8e\u4e00\u4e9b\u201c\u5b57\u6bb5\u201d\uff0c\u53ea\u662f\u7528\u4e8e\u4fdd\u5b58\u6570\u636e\uff0c\u4ee5\u4fbf\u5728\u7a0b\u5e8f\u4e2d\u8fd4\u56de\u3002\u8fd9\u6837\u770b\u6765\uff0c\u4f3c\u4e4e\u548cC#\u4e2d\u6ca1\u6709\u533a\u522b\uff0c\u53ea\u662f\u4e00\u4e2a\u4f7f\u7528\u4e86\u201c\u5c5e\u6027\u201d\uff0c\u4e00\u4e2a\u5229\u7528\u4e86\u201c\u65b9\u6cd5\u201d\u800c\u5df2\uff0c\u4e0d\u662f\u5417\uff1f"),Object(i.b)("p",null,"\u81ea\u7136\u4e0d\u662f\uff0c\u533a\u522b\u5f88\u5927\u3002\u8bd5\u60f3\uff0c\u73b0\u5728\u5982\u679c\u60a8\u8981\u7f16\u5199\u4e00\u6bb5\u4ee3\u7801\u6765\u8fdb\u884c\u7edf\u4e00\u7684\u9a8c\u8bc1\uff0c\u90a3\u4e48\u8be5\u600e\u4e48\u505a\uff1f\u4f3c\u4e4e\u6ca1\u6cd5\u505a\uff0c\u56e0\u4e3a\u5728C#\u4e2d\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7edf\u4e00\u7684\u57fa\u7c7b\u6765\u83b7\u53d6\u6240\u6709\u8868\u793a\u9a8c\u8bc1\u7684Attribute\uff0c\u7136\u540e\u8c03\u7528\u5b9a\u4e49\u5728\u57fa\u7c7b\u4e2d\u7684Validate\u65b9\u6cd5\u3002\u5728Java\u8bed\u8a00\u4e2d\u6211\u4eec\u65e0\u6cd5\u505a\u5230\u8fd9\u70b9\uff0c\u56e0\u6b64\u5982\u679c\u8981\u8bc6\u522bRangeValidation\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u5fc5\u987b\u72ec\u7acb\u51c6\u5907\u4e00\u6bb5\u903b\u8f91\uff0c\u800c\u8981\u8bc6\u522bRegexValidation\u5219\u53c8\u662f\u53e6\u4e00\u6bb5\u4e0d\u540c\u7684\u65b9\u6cd5\u3002\u56e0\u4e3a\u4e24\u8005\u7684\u201c\u8bc6\u522b\u201d\u65b9\u5f0f\u5b8c\u5168\u4e0d\u540c\uff0c\u56e0\u6b64\u6211\u4eec\u65e0\u6cd5\u4f7f\u7528\u76f8\u540c\u7684\u4ee3\u7801\u8fdb\u884c\u9a8c\u8bc1\u5de5\u4f5c\u3002"),Object(i.b)("p",null,"\u66f4\u5173\u952e\u7684\u662f\uff0c\u5982\u679c\u9a8c\u8bc1\u903b\u8f91\u662f\u7531\u7c7b\u5e93\u63d0\u4f9b\u7684\uff0c\u800c\u5f00\u53d1\u4eba\u5458\u60f3\u8981\u8865\u5145\u989d\u5916\u7684\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u90a3\u4e48\u8be5\u600e\u4e48\u505a\uff1f\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684Annotation\uff0c\u8fd9\u5f88\u5bb9\u6613\uff0c\u90a3\u4e48\u8bc6\u522b\u8fd9\u4e2aAnnotation\u7684\u903b\u8f91\u8be5\u5982\u4f55\u4ea4\u7ed9\u7c7b\u5e93\u5462\uff1f\u8fd9\u4e2a\u81ea\u7136\u4e5f\u6709\u529e\u6cd5\u89e3\u51b3\uff0c\u4f46\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u5e26\u6765\u8f83\u591a\u7684\u4ee3\u7801\u91cf\uff0c\u4e14\u505a\u4e0d\u5230C#\u822c\u4f18\u96c5\uff0c\u81ea\u7136\u3002"),Object(i.b)("p",null,"\u56e0\u6b64\uff0cJava\u7684Annotation\u843d\u540e\u4e8eC#\u7684Attribute\u7684\u5173\u952e\u4e4b\u5904\uff0c\u5728\u4e8eJava\u7684Annotation\u53ea\u80fd\u5b9a\u4e49\u4e3a\u5931\u8840\u7684\u5bf9\u8c61\uff0c\u800cC#\u7684Attribute\u53ef\u4ee5\u5728\u9700\u8981\u7684\u65f6\u5019\u5305\u542b\u4e00\u5b9a\u7684\u903b\u8f91\uff0c\u8fd9\u6837\u4fbf\u53ef\u4ee5\u8ba9C#\u7a0b\u5e8f\u5458\u83b7\u5f97\u66f4\u597d\u7684\u7075\u6d3b\u6027\uff0c\u4f7f\u7528\u66f4\u4e30\u5bcc\u7684\u5f00\u53d1\u6a21\u5f0f\u3002\u4e0e\u6b64\u76f8\u6bd4\uff0c\u201c\u7c7b\u201d\u548c\u201c\u63a5\u53e3\u201d\u7684\u533a\u522b\uff0c\u5176\u5b9e\u5012\u771f\u53ea\u662f\u8868\u8c61\u7f62\u4e86\u3002"),Object(i.b)("h2",{id:"\u7f3a\u70b92\uff1a\u53e4\u602a\u7684\u7ea6\u5b9a"},"\u7f3a\u70b92\uff1a\u53e4\u602a\u7684\u7ea6\u5b9a"),Object(i.b)("p",null,"\u76f8\u6bd4\u4e8e\u4e0a\u4e00\u4e2a\u7f3a\u70b9\u6765\u8bf4\uff0c\u7b2c\u4e8c\u4e2a\u7f3a\u70b9\u4f3c\u4e4e\u5e76\u4e0d\u90a3\u4e48\u4e25\u91cd\uff0c\u4e0d\u8fc7\u6211\u8ba4\u4e3a\u8fd9\u7684\u786e\u4e5f\u662fJava\u8bed\u8a00\u7684Annotation\u8bbe\u8ba1\u4e2d\u65e0\u6cd5\u4ee4\u4eba\u6ee1\u610f\u7684\u5730\u65b9\u3002"),Object(i.b)("p",null,"\u5728\u524d\u9762\u7684\u4ee3\u7801\u4e2d\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u53d1\u73b0\uff0c\u5176\u5b9eC#\u7684Attribute\u53caJava\u7684Annotation\u5728\u4f7f\u7528\u4e0a\u975e\u5e38\u76f8\u4f3c\uff0c\u4e3a\u6b64\u6211\u4eec\u518d\u6765\u4ed4\u7ec6\u5bf9\u6bd4\u4e00\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Range(Min = 10, Max = 60)] // C#\n\n@RangeValidation(min = 10, max = 60) // Java\n")),Object(i.b)("p",null,"\u8fd9\u6837\u770b\u6765\uff0cC#\u548cJava\u5728\u4f7f\u7528\u65f6\u7684\u5f62\u5f0f\u57fa\u672c\u5b8c\u5168\u4e00\u81f4\uff0c\u90fd\u662f\u4f7f\u7528\u540d\u79f0+\u5c5e\u6027\u540d\u7684\u65b9\u5f0f\u8fdb\u884c\u6807\u8bb0\u3002\u4e0d\u8fc7\u5176\u5b9eC#\u548cJava\u90fd\u6709\u989d\u5916\u7684\u8bed\u6cd5\uff0c\u4f8b\u5982\u5728C#\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49RangeAttribute\u7c7b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class RangeAttribute : ValidationAttribute\n{\n    public RangeAttribute() { }\n\n    public RangeAttribute(int min, int max)\n    {\n        this.Min = min;\n        this.Max = max;\n    }\n\n    public int Min { get; set; }\n\n    public int Max { get; set; }\n\n    ...\n}\n")),Object(i.b)("p",null,"\u4e0e\u4e4b\u524d\u7684RangeAttribute\u76f8\u6bd4\uff0c\u65b0\u7684\u5b9a\u4e49\u589e\u52a0\u4e86\u4e24\u4e2a\u6784\u9020\u51fd\u6570\u5b9a\u4e49\uff0c\u4e00\u4e2a\u662f\u65e0\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff08\u5176\u5b9e\u539f\u6765\u7684\u5b9a\u4e49\u4e5f\u6709\uff0c\u53ea\u4e0d\u8fc7\u7531\u7f16\u8bd1\u5668\u81ea\u52a8\u6dfb\u52a0\uff09\uff0c\u8fd8\u6709\u4e00\u4e2a\u6784\u9020\u51fd\u6570\u5219\u76f4\u63a5\u63a5\u6536min\u548cmax\u53c2\u6570\uff0c\u8fd9\u6837\u6211\u4eec\u4fbf\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6765\u6807\u8bb0Attribute\u4e86\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"[Range(10, 60)]\n")),Object(i.b)("p",null,"\u5f53\u7136\uff0c\u6709\u4eba\u8bf4\u8fd9\u79cd\u505a\u6cd5\u4e0d\u5982\u663e\u5f0f\u6307\u5b9aMin\u548cMax\u6765\u7684\u6e05\u6670\u2014\u2014\u53ef\u80fd\u662f\u8fd9\u6837\u5427\uff0c\u4f46\u662f\u5728\u5f88\u591a\u65f6\u5019\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4f20\u53c2\u4e5f\u6709\u4f18\u52bf\uff0c\u4f8b\u5982\u6211\u4eec\u53ef\u4ee5\u91cd\u65b0\u5b9a\u4e49\u4e4b\u524d\u7684RegexAttribute\u4e3a\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"public class RegexAttribute : ValidationAttribute\n{\n    public RegexAttribute(string pattern)\n    {\n        this.Pattern = pattern;\n    }\n\n    public string Pattern { get; private set; }\n\n    ...\n}\n")),Object(i.b)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u4e3aRegexAttribute\u63d0\u4f9b\u4e86\u4e00\u4e2a\u63a5\u6536pattern\u7684\u6784\u9020\u51fd\u6570\uff0c\u5e76\u5c06Pattern\u5c5e\u6027\u7684set\u65b9\u6cd5\u8bbe\u4e3aprivate\u3002\u4e8e\u662f\u6211\u4eec\u4fbf\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528RegexAttribute\u4e86\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},'[Regex(@"^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]\n')),Object(i.b)("p",null,"\u8fd9\u4e48\u505a\u6709\u4e24\u4e2a\u597d\u5904\uff1a\u9996\u5148\uff0c\u5916\u90e8\u65e0\u6cd5\u8bbe\u7f6ePattern\u5c5e\u6027\u7684\u503c\uff0c\u8fd9\u70b9\u52a0\u5f3a\u4e86\u5bf9\u8c61\u7684\u5c01\u88c5\u6027\u3002\u5176\u6b21\uff0c\u8fd9\u91cc\u76f8\u5f53\u4e8e\u5f3a\u5236RegexAttribute\u5728\u4f7f\u7528\u65f6\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2apattern\u53c2\u6570\uff08\u867d\u7136\u65e0\u6cd5\u8fdb\u884c\u9a8c\u8bc1\uff09\u3002\u8fd9\u6837\uff0c\u4ee3\u7801\u5728\u4f7f\u7528\u65f6\u65e2\u663e\u5f97\u4f18\u96c5\uff0c\u53ef\u8bfb\u6027\u4e5f\u975e\u5e38\u826f\u597d\u3002\u4f46\u5176\u5b9e\uff0c\u6211\u8ba4\u4e3a\u66f4\u5173\u952e\u7684\u662f\uff0c\u8fd9\u79cd\u4f7f\u7528\u6a21\u5f0f\u548c\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e3a\u5176\u5c5e\u6027\u8fdb\u884c\u8d4b\u503c\u4e00\u6837\uff1a\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u7684\u6784\u9020\u51fd\u6570\u521b\u5efa\u5bf9\u8c61\uff0c\u518d\u201c\u6709\u9009\u62e9\u5730\u201d\u8fdb\u884c\u5c5e\u6027\u8d4b\u503c\u3002\u4f8b\u5982\u4e0a\u6587AttributeUsage\u7684\u4f7f\u7528\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Property, AllowMultiple = true)]\n")),Object(i.b)("p",null,"\u8fd9\u91cc\u7684\u542b\u4e49\u662f\uff0c\u521b\u5efa\u4e00\u4e2aAttributeUsageAttribute\u7c7b\uff0c\u63d0\u4f9bAttributeTargets.Property\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\uff0c\u5e76\u540c\u65f6\u5c06AllowMultiple\u5c5e\u6027\u8bbe\u4e3atrue\u3002\u53ef\u89c1\uff0c\u8fd9\u79cd\u505a\u6cd5\u7ed9\u4e86\u6211\u4eec\u76f8\u5f53\u81ea\u7531\u6027\u2014\u2014\u800c\u4e14\u975e\u5e38\u81ea\u7136\uff0c\u6ca1\u6709\u5947\u602a\u7ea6\u5b9a\u3002\u5728\u8bbe\u8ba1\u4e00\u4e2aAttribute\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e00\u822c\u53ef\u4ee5\u63d0\u4f9b\u51e0\u4e2a\u5e38\u7528\u7684\u6784\u9020\u51fd\u6570\uff0c\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u6784\u9020\u51fd\u6570\u4e5f\u5df2\u7ecf\u8db3\u591f\u4e86\u3002\u9664\u6b64\u4e4b\u5916\uff0cAttribute\u5bf9\u8c61\u7684\u5c5e\u6027\u5305\u542b\u4e86\u9ed8\u8ba4\u503c\uff0c\u5728\u5fc5\u8981\u7684\u65f6\u5019\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539\u3002"),Object(i.b)("p",null,"\u5728Java\u8bed\u8a00\u4e2d\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u4e5f\u53ef\u4ee5\u4fee\u6539RegexValidation\u7c7b\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6765\u4f7f\u7528\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@RegexValidation("^\\\\w+@[a-zA-Z_]+?\\\\.[a-zA-Z]{2,3}$")\n')),Object(i.b)("p",null,"\u53ea\u8981\u6211\u4eec\u53ef\u4ee5\u628aRegexValidation\u6539\u6210\u8fd9\u6837\u5373\u53ef\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"public @interface RegexValidation {\n    String value();\n}\n")),Object(i.b)("p",null,"\u5728Java\u8bed\u8a00\u4e2d\uff0c\u5047\u5982Attribute\u7684\u4e00\u4e2a\u6210\u5458\u540d\u4e3avalue\uff0c\u4e14\u6ca1\u6709\u5176\u4ed6\u6210\u5458\uff08\u6216\u662f\u5176\u4ed6\u6210\u5458\u90fd\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u503c\uff09\uff0c\u90a3\u4e48\u4fbf\u53ef\u4ee5\u5982C#\u4e2d\u6784\u9020\u51fd\u6570\u822c\u4f7f\u7528\u3002\u90a3\u4e48\u2026\u2026"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u5982\u679c\u6211\u60f3\u4f7f\u7528\u201c\u6784\u9020\u51fd\u6570\u201d\u7684\u65b9\u5f0f\u4f20\u9012\u6570\u636e\uff0c\u4f46\u6210\u5458\u540d\u8fd8\u662f\u60f3\u7528pattern\uff0c\u53ef\u4ee5\u5417\uff1f\n\u5982\u679c\u6211\u60f3\u4f7f\u7528\u201c\u6784\u9020\u51fd\u6570\u201d\u7684\u65b9\u5f0f\u4f20\u9012\u591a\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u5417\uff1f")),Object(i.b)("p",null,"\u4e0d\u53ef\u4ee5\u3002\u6211\u4e5f\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u79cd\u7279\u522b\u7684\u7ea6\u5b9a\u89c4\u5219\u5462\uff1f\u53ef\u80fd\u548cAnnotation\u662f\u63a5\u53e3\u6709\u5173\u5427\u3002\u63a5\u53e3\u6ca1\u6709\u6784\u9020\u51fd\u6570\uff0c\u56e0\u6b64\u6ca1\u6709\u4e00\u4e2a\u5408\u9002\u7684\u65b9\u5f0f\u4ee5\u7701\u53bb\u6210\u5458\u540d\u7684\u65b9\u5f0f\u4f20\u9012\u53c2\u6570\uff0c\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u7279\u522b\u7684\u540d\u79f0\u4e86\u2014\u2014\u4f46\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u51ed\u4ec0\u4e48\u6211\u7684Regex\u503c\u4e00\u5b9a\u8981\u53ebvalue\u800c\u4e0d\u80fd\u53ebpattern\u5462\uff1f"),Object(i.b)("h2",{id:"java-50\u5b66\u4e60c"},"Java 5.0\u5b66\u4e60C#"),Object(i.b)("p",null,"\u6211\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u6709\u4e86C#\u7684\u4f18\u79c0\u699c\u6837\uff0cJava 5.0\u5374\u8fd8\u662f\u4e0d\u613f\u610f\u505a\u7684\u66f4\u597d\u3002\u5176\u5b9eC#\u4e2d\u7684Attribute\u4e5f\u6709\u7f3a\u70b9\uff0c\u4f8b\u5982\u65e0\u6cd5\u4f7f\u7528\u6cdb\u578b\uff0c\u6240\u4ee5Java\u5b8c\u5168\u6709\u80dc\u8fc7C#\u7684\u673a\u4f1a\u3002\u5176\u5b9e\u5728\u4ee5\u540e\u7684\u6587\u7ae0\u4e2d\u60a8\u4e5f\u53ef\u4ee5\u53d1\u73b0\u8fd9\u6837\u4e00\u4e2a\u73b0\u8c61\uff1aC#\u7684\u699c\u6837\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u4f46Java\u7684\u8fdb\u5316\u66f4\u4e3a\u7cdf\u7cd5\u3002\u5bf9\u6b64\uff0c\u6211\u4eec\u9664\u4e86\u4e00\u58f0\u957f\u53f9\u53c8\u80fd\u600e\u4e48\u529e\u5462\uff1f"),Object(i.b)("p",null,"\u9664\u4e86Annotation\u4e4b\u5916\uff0cJava 5.0\u8fd8\u4eceC#\u5904\u5b66\u4e60\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528enum\u5173\u952e\u5b57\u5b9a\u4e49\u5f3a\u7c7b\u578b\u7684\u5e38\u91cf\u2014\u2014C# 1.0\u4e2d\u4e5f\u6709\u7c7b\u4f3c\u529f\u80fd\uff08\u597d\u5427\uff0c\u6211\u627f\u8ba4\uff0c\u5176\u5b9eJava\u7684enum\u529f\u80fd\u6bd4C#\u4e2d\u8981\u4e30\u5bcc\u4e00\u4e9b\uff09\u3002"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u53d8\u53c2\u6570\uff0c\u5373\u53ef\u4ee5\u4f7f\u7528\u201c\u4e00\u4e00\u5217\u4e3e\u201d\u5f62\u5f0f\uff0c\u63d0\u4f9b\u67d0\u4e2a\u65b9\u6cd5\u6700\u540e\u4e00\u4e2a\u6570\u7ec4\u53c2\u6570\u7684\u5185\u5bb9\u2014\u2014\u5176\u5b9e\u5c31\u662fC# 1.0\u4e2d\u7684params\u3002"),Object(i.b)("li",{parentName:"ul"},"\u589e\u5f3a\u4e86for\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u4f7f\u7528\u679a\u4e3e\u5668\uff08Iterator\uff09\u2014\u2014\u8fd9\u5176\u5b9e\u5c31\u662fC# 1.0\u4e2d\u7684foreach\u3002")),Object(i.b)("p",null,"\u90a3\u4e48\uff0c\u5230\u5e95\u662f\u8c01\u662f\u6240\u8c13\u7684\u201ccopy cat\u201d\u5462\uff1f\u5c31\u50cf\u6211\u5728\u7b2c\u4e00\u7bc7\u6587\u7ae0\u4e2d\u5199\u7684\u90a3\u6837\uff0c\u201c\u81ea\u4eceC# 1.0\u8bde\u751f\u4e4b\u65e5\u8d77\uff0c\u5c31\u53ea\u51fa\u73b0Java\u501f\u9274C#\u7279\u6027\u7684\u60c5\u51b5\uff0c\u81f3\u4eca\u5df2\u5c06\u8fd110\u5e74\u201d\uff0c\u4ee5\u540e\u6211\u4eec\u8fd8\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u4f8b\u5b50\u3002\u6211\u5e76\u4e0d\u60f3\u8bf4\u6240\u8c13\u7684\u201c\u6284\u88ad\u201d\uff0c\u6211\u53ea\u60f3\u8bf4\u201c\u5b66\u4e60\u201d\u6216\u662f\u201c\u501f\u9274\u201d\u3002\u6211\u8ba4\u4e3a\uff0c\u53ea\u8981\u662f\u4f18\u70b9\uff0c\u51fa\u73b0\u96f7\u540c\u8fd9\u90fd\u662f\u5b8c\u5168\u6b63\u5e38\u4e14\u503c\u5f97\u9f13\u52b1\u7684\u3002\u6211\u73b0\u5728\u63d0\u5230\u8fd9\u4e9b\uff0c\u4e3b\u8981\u7684\u76ee\u7684\u662f\u60f3\u544a\u8bc9\u90a3\u4e9b\u56fa\u6267\u5730\u8ba4\u4e3a\u201cC#\u53ea\u662fJava\u7684\u5c71\u5be8\u590d\u5236\u54c1\u201d\u7684\u540c\u5b66\u4eec\u4e00\u4e2a\u4e8b\u5b9e\u3002"),Object(i.b)(c.a,{mdxType:"BottomCopyRight"}))}s.isMDXComponent=!0}}]);