(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(373)),i={title:"\u4f60\u4e0d\u77e5\u9053\u7684JS(\u4e0a)"},c={unversionedId:"reading/you-dont-konw-js-1",id:"reading/you-dont-konw-js-1",isDocsHomePage:!1,title:"\u4f60\u4e0d\u77e5\u9053\u7684JS(\u4e0a)",description:"2.2 \u6b3a\u9a97\u8bcd\u6cd5",source:"@site/src/docs/reading/you-dont-konw-js-1.md",slug:"/reading/you-dont-konw-js-1",permalink:"/docs/reading/you-dont-konw-js-1",editUrl:"https://github.com/alanwei43/blog/tree/master/src/docs/reading/you-dont-konw-js-1.md",version:"current",sidebar:"docs",previous:{title:"\u4f60\u4e0d\u77e5\u9053\u7684JS(\u4e2d)",permalink:"/docs/reading/you-dont-know-js-2"},next:{title:"\u73b0\u4ee3 JavaScript \u6559\u7a0b",permalink:"/docs/reading/zh.javascript.info"}},l=[{value:"2.2 \u6b3a\u9a97\u8bcd\u6cd5",id:"22-\u6b3a\u9a97\u8bcd\u6cd5",children:[{value:"2.2.1 eval",id:"221-eval",children:[]}]},{value:"5.4 \u5faa\u73af\u548c\u95ed\u5305",id:"54-\u5faa\u73af\u548c\u95ed\u5305",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"22-\u6b3a\u9a97\u8bcd\u6cd5"},"2.2 \u6b3a\u9a97\u8bcd\u6cd5"),Object(o.b)("h3",{id:"221-eval"},"2.2.1 eval"),Object(o.b)("p",null,"JavaScript \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"eval(..)")," \u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e3a\u53c2\u6570\uff0c\u5e76\u5c06\u5176\u4e2d\u7684\u5185\u5bb9\u89c6\u4e3a\u597d\u50cf\u5728\u4e66\u5199\u65f6\u5c31\u5b58\u5728\u4e8e\u7a0b\u5e8f\u4e2d\u8fd9\u4e2a\u4f4d\u7f6e\u7684\u4ee3\u7801\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u53ef\u4ee5\u5728\u4f60\u5199\u7684\u4ee3\u7801\u4e2d\u7528\u7a0b\u5e8f\u751f\u6210\u4ee3\u7801\u5e76\u8fd0\u884c\uff0c\u5c31\u597d\u50cf\u4ee3\u7801\u662f\u5199\u5728\u90a3\u4e2a\u4f4d\u7f6e\u7684\u4e00\u6837: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'\nfunction foo(str, a) { \n  eval( str ); \n}\nvar b = 2;\nfoo( "var b = 3;", 1 ); // 1, 3\n')),Object(o.b)("p",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u7684\u7a0b\u5e8f\u4e2d\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"eval(..)")," \u5728\u8fd0\u884c\u65f6\u6709\u5176\u81ea\u5df1\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u610f\u5473\u7740\u5176\u4e2d\u7684\u58f0\u660e\u65e0\u6cd5\u4fee\u6539\u6240\u5728\u7684\u4f5c\u7528\u57df: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'function foo(str) { \n  "use strict"; \n  eval( str ); \n  console.log( a ); // ReferenceError: a is not defined \n}\nfoo( "var a = 2" );\n')),Object(o.b)("p",null,"JavaScript\u4e2d\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u529f\u80fd\u6548\u679c\u548c",Object(o.b)("inlineCode",{parentName:"p"},"eval(..)"),"\u5f88 \u76f8 \u4f3c\u3002",Object(o.b)("inlineCode",{parentName:"p"},"setTimeout(..)"),"\u548c ",Object(o.b)("inlineCode",{parentName:"p"},"setInterval(..)")," \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\uff0c\u5b57\u7b26\u4e32\u7684\u5185\u5bb9\u53ef\u4ee5\u88ab\u89e3\u91ca\u4e3a\u4e00\u6bb5\u52a8\u6001\u751f\u6210\u7684\u51fd\u6570\u4ee3\u7801\u3002\u8fd9\u4e9b\u529f\u80fd\u5df2\u7ecf\u8fc7\u65f6\u4e14\u5e76\u4e0d\u88ab\u63d0\u5021\u3002\u4e0d\u8981\u4f7f\u7528\u5b83\u4eec!"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"new Function(..)")," \u51fd\u6570\u7684\u884c\u4e3a\u4e5f\u5f88\u7c7b\u4f3c\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u63a5\u53d7\u4ee3\u7801\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u8f6c\u5316\u4e3a\u52a8\u6001\u751f\u6210\u7684\u51fd\u6570(\u524d\u9762\u7684\u53c2\u6570\u662f\u8fd9\u4e2a\u65b0\u751f\u6210\u7684\u51fd\u6570\u7684\u5f62\u53c2)\u3002\u8fd9\u79cd\u6784\u5efa\u51fd\u6570\u7684\u8bed\u6cd5\u6bd4 ",Object(o.b)("inlineCode",{parentName:"p"},"eval(..)")," \u7565\u5fae\u5b89\u5168\u4e00\u4e9b\uff0c\u4f46\u4e5f\u8981\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u3002"),Object(o.b)("h1",{id:"\u51fd\u6570\u4f5c\u7528\u57df\u548c\u5757\u4f5c\u7528\u57df"},"\u51fd\u6570\u4f5c\u7528\u57df\u548c\u5757\u4f5c\u7528\u57df"),Object(o.b)("p",null,"\u51fd\u6570\u4f5c\u7528\u57df\u7684\u542b\u4e49\u662f\u6307\uff0c\u5c5e\u4e8e\u8fd9\u4e2a\u51fd\u6570\u7684\u5168\u90e8\u53d8\u91cf\u90fd\u53ef\u4ee5\u5728\u6574\u4e2a\u51fd\u6570\u7684\u8303\u56f4\u5185\u4f7f\u7528\u53ca\u590d \u7528(\u4e8b\u5b9e\u4e0a\u5728\u5d4c\u5957\u7684\u4f5c\u7528\u57df\u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528)\u3002"),Object(o.b)("p",null,"\u533f\u540d\u51fd\u6570\u8868\u8fbe\u5f0f\u5982\u679c\u6ca1\u6709\u51fd\u6570\u540d\uff0c\u5f53\u51fd\u6570\u9700\u8981\u5f15\u7528\u81ea\u8eab\u65f6\u53ea\u80fd\u4f7f\u7528\u5df2\u7ecf\u8fc7\u671f\u7684",Object(o.b)("inlineCode",{parentName:"p"},"arguments.callee"),"\u5f15\u7528\uff0c \u6bd4\u5982\u5728\u9012\u5f52\u4e2d\u3002\u53e6\u4e00\u4e2a\u51fd\u6570\u9700\u8981\u5f15\u7528\u81ea\u8eab\u7684\u4f8b\u5b50\uff0c\u662f\u5728\u4e8b\u4ef6\u89e6\u53d1\u540e\u4e8b\u4ef6\u76d1\u542c\u5668\u9700\u8981\u89e3\u7ed1\u81ea\u8eab:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div id="button">button</div>\n<script>\n  document.querySelector("#button").addEventListener("click", function listener(e) {\n    var remove = !!e.target.getAttribute("has-clicked");\n    if (remove) {\n      console.log("remove listen");\n      document.querySelector("#button").removeEventListener("click", listener);\n    } else {\n      console.log("onclick");\n      e.target.setAttribute("has-clicked", true);\n    }\n  })\n<\/script>\n')),Object(o.b)("p",null,"\u7531\u4e8e\u51fd\u6570\u88ab\u5305\u542b\u5728\u4e00\u5bf9 ",Object(o.b)("inlineCode",{parentName:"p"},"( )")," \u62ec\u53f7\u5185\u90e8\uff0c\u56e0\u6b64\u6210\u4e3a\u4e86\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f\uff0c\u901a\u8fc7\u5728\u672b\u5c3e\u52a0\u4e0a\u53e6\u5916\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"( )")," \u53ef\u4ee5\u7acb\u5373\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\uff0c\u6bd4\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"(function foo(){ .. })()"),"\u3002\u7b2c\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"( )")," \u5c06\u51fd\u6570\u53d8\u6210\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"( )")," \u6267\u884c\u4e86\u8fd9\u4e2a\u51fd\u6570\u3002"),Object(o.b)("p",null,"IIFE\u6a21\u5f0f\u7684\u53e6\u5916\u4e00\u4e2a\u5e94\u7528\u573a\u666f\u662f\u89e3\u51b3 ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," \u6807\u8bc6\u7b26\u7684\u9ed8\u8ba4\u503c\u88ab\u9519\u8bef\u8986\u76d6\u5bfc\u81f4\u7684\u5f02\u5e38 (\u867d\u7136\u4e0d\u5e38\u89c1)\u3002\u5c06\u4e00\u4e2a\u53c2\u6570\u547d\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u4f46\u662f\u5728\u5bf9\u5e94\u7684\u4f4d\u7f6e\u4e0d\u4f20\u5165\u4efb\u4f55\u503c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5728\u4ee3\u7801\u5757\u4e2d ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," \u6807\u8bc6\u7b26\u7684\u503c\u771f\u7684\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'undefined = true; // \u7ed9\u5176\u4ed6\u4ee3\u7801\u6316\u4e86\u4e00\u4e2a\u5927\u5751!\u7edd\u5bf9\u4e0d\u8981\u8fd9\u6837\u505a! \n(function IIFE( undefined ) { \n  var a; \n  if (a === undefined) { \n    console.log( "Undefined is safe here!" ); \n    }\n})();\n')),Object(o.b)("p",null,"IIFE \u8fd8\u6709\u4e00\u79cd\u53d8\u5316\u7684\u7528\u9014\u662f\u5012\u7f6e\u4ee3\u7801\u7684\u8fd0\u884c\u987a\u5e8f\uff0c\u5c06\u9700\u8981\u8fd0\u884c\u7684\u51fd\u6570\u653e\u5728\u7b2c\u4e8c\u4f4d\uff0c\u5728 IIFE \u6267\u884c\u4e4b\u540e\u5f53\u4f5c\u53c2\u6570\u4f20\u9012\u8fdb\u53bb\u3002\u8fd9\u79cd\u6a21\u5f0f\u5728 ",Object(o.b)("strong",{parentName:"p"},"UMD(Universal Module Definition)")," \u9879\u76ee\u4e2d\u88ab\u5e7f \u6cdb\u4f7f\u7528\u3002\u5c3d\u7ba1\u8fd9\u79cd\u6a21\u5f0f\u7565\u663e\u5197\u957f\uff0c\u4f46\u6709\u4e9b\u4eba\u8ba4\u4e3a\u5b83\u66f4\u6613\u7406\u89e3:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"var a = 2;\n(function IIFE( def ) { \n  def( window );\n})(function def( global ) { \n  var a = 3; \n  console.log( a ); // 3 \n  console.log( global.a ); // 2\n});\n")),Object(o.b)("p",null,"\u51fd\u6570\u8868\u8fbe\u5f0f ",Object(o.b)("inlineCode",{parentName:"p"},"def")," \u5b9a\u4e49\u5728\u7247\u6bb5\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u7136\u540e\u5f53\u4f5c\u53c2\u6570(\u8fd9\u4e2a\u53c2\u6570\u4e5f\u53eb\u4f5c ",Object(o.b)("inlineCode",{parentName:"p"},"def"),")\u88ab\u4f20\u9012\u8fdb IIFE \u51fd\u6570\u5b9a\u4e49\u7684\u7b2c\u4e00\u90e8\u5206\u4e2d\u3002\u6700\u540e\uff0c\u53c2\u6570 ",Object(o.b)("inlineCode",{parentName:"p"},"def"),"(\u4e5f\u5c31\u662f\u4f20\u9012\u8fdb\u53bb\u7684\u51fd\u6570)\u88ab\u8c03\u7528\uff0c\u5e76\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"window")," \u4f20\u5165\u5f53\u4f5c ",Object(o.b)("inlineCode",{parentName:"p"},"global")," \u53c2\u6570\u7684\u503c\u3002"),Object(o.b)("p",null,"JavaScript \u7684 ES3 \u89c4\u8303\u4e2d\u89c4\u5b9a try/catch \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"catch")," \u5206\u53e5\u4f1a\u521b\u5efa\u4e00\u4e2a\u5757\u4f5c\u7528\u57df\uff0c\u5176\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u4ec5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"catch")," \u5185\u90e8\u6709\u6548: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"try { \n  undefined(); // \u6267\u884c\u4e00\u4e2a\u975e\u6cd5\u64cd\u4f5c\u6765\u5f3a\u5236\u5236\u9020\u4e00\u4e2a\u5f02\u5e38\n} catch (err) { \n  console.log( err ); // \u80fd\u591f\u6b63\u5e38\u6267\u884c! \n} \nconsole.log( err ); // ReferenceError: err not found\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"let")," \u5173\u952e\u5b57\u53ef\u4ee5\u5c06\u53d8\u91cf\u7ed1\u5b9a\u5230\u6240\u5728\u7684\u4efb\u610f\u4f5c\u7528\u57df\u4e2d(\u901a\u5e38\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"{")," \u4e3a\u5176\u58f0\u660e\u7684\u53d8\u91cf\u9690\u5f0f\u5730\u52ab\u6301\u4e86\u6240\u5728\u7684\u5757\u4f5c\u7528\u57df\u3002"),Object(o.b)("h1",{id:"5-\u4f5c\u7528\u57df\u95ed\u5305"},"5 \u4f5c\u7528\u57df\u95ed\u5305"),Object(o.b)("p",null,"\u5f53\u51fd\u6570\u53ef\u4ee5\u8bb0\u4f4f\u5e76\u8bbf\u95ee\u6240\u5728\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u65f6\uff0c\u5c31\u4ea7\u751f\u4e86\u95ed\u5305\uff0c\u5373\u4f7f\u51fd\u6570\u662f\u5728\u5f53\u524d\u8bcd\u6cd5\u4f5c\u7528\u57df\u4e4b\u5916\u6267\u884c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function foo() { \n  var a = 2; \n  function bar() { \n    console.log( a ); \n  } \n  return bar;\n}\nvar baz = foo();\n\nbaz(); // 2 \u8fd9\u5c31\u662f\u95ed\u5305\u7684\u6548\u679c\n")),Object(o.b)("p",null,"\u62dc ",Object(o.b)("inlineCode",{parentName:"p"},"bar()")," \u6240\u58f0\u660e\u7684\u4f4d\u7f6e\u6240\u8d50\uff0c\u5b83\u62e5\u6709\u6db5\u76d6 ",Object(o.b)("inlineCode",{parentName:"p"},"foo()")," \u5185\u90e8\u4f5c\u7528\u57df\u7684\u95ed\u5305\uff0c\u4f7f\u5f97\u8be5\u4f5c\u7528\u57df\u80fd\u591f\u4e00 \u76f4\u5b58\u6d3b\uff0c\u4ee5\u4f9b ",Object(o.b)("inlineCode",{parentName:"p"},"bar()")," \u5728\u4e4b\u540e\u4efb\u4f55\u65f6\u95f4\u8fdb\u884c\u5f15\u7528\u3002\n",Object(o.b)("inlineCode",{parentName:"p"},"bar()")," \u4f9d\u7136\u6301\u6709\u5bf9\u8be5\u4f5c\u7528\u57df\u7684\u5f15\u7528\uff0c\u800c\u8fd9\u4e2a\u5f15\u7528\u5c31\u53eb\u4f5c\u95ed\u5305\u3002"),Object(o.b)("p",null,"\u5982\u679c\u5c06(\u8bbf\u95ee\u5b83\u4eec\u5404\u81ea\u8bcd\u6cd5\u4f5c\u7528\u57df\u7684)\u51fd\u6570\u5f53\u4f5c\u7b2c\u4e00 \u7ea7\u7684\u503c\u7c7b\u578b\u5e76\u5230\u5904\u4f20\u9012\uff0c\u4f60\u5c31\u4f1a\u770b\u5230\u95ed\u5305\u5728\u8fd9\u4e9b\u51fd\u6570\u4e2d\u7684\u5e94\u7528\u3002\u5728\u5b9a\u65f6\u5668\u3001\u4e8b\u4ef6\u76d1\u542c\u5668\u3001 Ajax \u8bf7\u6c42\u3001\u8de8\u7a97\u53e3\u901a\u4fe1\u3001Web Workers \u6216\u8005\u4efb\u4f55\u5176\u4ed6\u7684\u5f02\u6b65(\u6216\u8005\u540c\u6b65)\u4efb\u52a1\u4e2d\uff0c\u53ea\u8981\u4f7f \u7528\u4e86\u56de\u8c03\u51fd\u6570\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u5728\u4f7f\u7528\u95ed\u5305!"),Object(o.b)("h2",{id:"54-\u5faa\u73af\u548c\u95ed\u5305"},"5.4 \u5faa\u73af\u548c\u95ed\u5305"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"for (var i=1; i<=5; i++) { \n  setTimeout( function timer() { \n    console.log( i ); \n  }, i*1000 );\n}\n")),Object(o.b)("p",null,"\u6211\u4eec\u8bd5\u56fe\u5047\u8bbe\u5faa\u73af\u4e2d\u7684\u6bcf\u4e2a\u8fed\u4ee3\u5728\u8fd0\u884c\u65f6\u90fd\u4f1a\u7ed9\u81ea\u5df1\u201c\u6355\u83b7\u201d\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"i")," \u7684\u526f\u672c\u3002\u4f46\u662f\u6839\u636e\u4f5c\u7528\u57df\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u5b9e\u9645\u60c5\u51b5\u662f\u5c3d\u7ba1\u5faa\u73af\u4e2d\u7684\u4e94\u4e2a\u51fd\u6570\u662f\u5728\u5404\u4e2a\u8fed\u4ee3\u4e2d\u5206\u522b\u5b9a\u4e49\u7684\uff0c\u4f46\u662f\u5b83\u4eec\u90fd\u88ab\u5c01\u95ed\u5728\u4e00\u4e2a\u5171\u4eab\u7684\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\uff0c\u56e0\u6b64\u5b9e\u9645\u4e0a\u53ea\u6709\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"i"),", \u6240\u6709\u51fd\u6570\u5171\u4eab\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"i")," \u7684\u5f15\u7528, \u7136\u540e\u6700\u7ec8\u8f93\u51fa\u4e94\u4e2a6. \u89e3\u51b3\u529e\u6cd5\u5c31\u662f\u8ba9\u6bcf\u4e2atimer\u6355\u83b7\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"i"),"\u53d8\u91cf,\u800c\u4e0d\u662f\u5171\u4eab\u4e00\u4e2a",Object(o.b)("inlineCode",{parentName:"p"},"i"),"\u53d8\u91cf. \u4e00\u79cd\u65b9\u6848\u662f\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"let"),"\u4ee3\u66ff",Object(o.b)("inlineCode",{parentName:"p"},"var"),". \u6216\u8005\u4f7f\u7528IIFE: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"for (var i=1; i<=5; i++) { \n  (function() { \n    var j = i;  // \u8fd9\u91cc\u5fc5\u987b\u91cd\u65b0\u5c06i\u8d4b\u503c\u5230\u4e00\u4e2a\u5f53\u524d\u51fd\u6570\u4f5c\u7528\u57df\u7684\u4e00\u4e2a\u53d8\u91cf\u4e0a, \u5982\u679c\u4f5c\u7528\u57df\u662f\u7a7a\u7684\uff0c\u90a3\u4e48\u4ec5\u4ec5\u5c06\u5b83\u4eec\u8fdb\u884c\u5c01\u95ed\u662f\u4e0d\u591f\u7684\n    setTimeout( function timer() { \n      console.log( j ); \n    }, j*1000 ); \n  })(); \n}\n")),Object(o.b)("p",null,"\u6216\u8005\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"for (var i=1; i<=5; i++) { \n  (function(j) { \n    setTimeout( function timer() { \n      console.log( j ); \n    }, j*1000 ); \n  })(i); \n}\n")),Object(o.b)("p",null,"\u5728\u8fed\u4ee3\u5185\u4f7f\u7528 IIFE \u4f1a\u4e3a\u6bcf\u4e2a\u8fed\u4ee3\u90fd\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u4f5c\u7528\u57df\uff0c\u4f7f\u5f97\u5ef6\u8fdf\u51fd\u6570\u7684\u56de\u8c03\u53ef\u4ee5\u5c06\u65b0\u7684\u4f5c\u7528\u57df\u5c01\u95ed\u5728\u6bcf\u4e2a\u8fed\u4ee3\u5185\u90e8\uff0c\u6bcf\u4e2a\u8fed\u4ee3\u4e2d\u90fd\u4f1a\u542b\u6709\u4e00\u4e2a\u5177\u6709\u6b63\u786e\u503c\u7684\u53d8\u91cf\u4f9b\u6211\u4eec\u8bbf\u95ee\u3002"))}p.isMDXComponent=!0},373:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,j=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return t?a.a.createElement(j,c(c({ref:n},b),{},{components:t})):a.a.createElement(j,c({ref:n},b))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);