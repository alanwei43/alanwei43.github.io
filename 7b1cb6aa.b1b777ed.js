(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{303:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return p})),a.d(n,"default",(function(){return i}));var t=a(3),r=a(7),o=(a(0),a(546)),c={title:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u5e26\u6709\u591a\u4e2a\u5b50\u6a21\u5757\u7684Maven\u9879\u76ee",author:"Alan",author_title:"Maintainer of blog",author_url:"https://github.com/alanwei43",author_image_url:"https://avatars.githubusercontent.com/u/2927578?s=460&u=153132e7aa3be8295a1703af9b759ca22338f557&v=4",tags:["maven"],draft:!1,hide_table_of_contents:!1},l={permalink:"/blog/2021/04/03/how-to-create-maven-multi-module-project",editUrl:"https://github.com/alanwei43/blog/tree/master/src/blog/2021-04-03-how-to-create-maven-multi-module-project.md",source:"@site/src/blog/2021-04-03-how-to-create-maven-multi-module-project.md",description:"In this guide, we learn how to create Maven Multi-Module using Command Line with very easy steps. A multi-module project is defined by a parent POM referencing one or more sub-modules. In this example, we will create a blogger web application with different modules. Let's create a blogger as parent project and it's 3 sub-modules are blogger-core, blogger-common, blogger-web.",date:"2021-04-03T00:00:00.000Z",tags:[{label:"maven",permalink:"/blog/tags/maven"}],title:"\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u5e26\u6709\u591a\u4e2a\u5b50\u6a21\u5757\u7684Maven\u9879\u76ee",readingTime:4.15,truncated:!0,prevItem:{title:"ASP.Net \u5e94\u7528\u914d\u7f6eHTTP\u4ee3\u7406",permalink:"/blog/2021/04/03/asp.net-proxy-configuration"},nextItem:{title:"\u89e3\u51b3 Windows \u73af\u5883\u4e2d git log \u547d\u4ee4\u4e2d\u6587\u7f16\u7801\u95ee\u9898",permalink:"/blog/2021/04/03/powershell-git-chinese-encode"}},p=[{value:"Create a Maven Multi Module using Command Line",id:"create-a-maven-multi-module-using-command-line",children:[{value:"Step 1: Create Parent project - blogger",id:"step-1-create-parent-project---blogger",children:[]},{value:"Step 2: Update pom.xml to Declare It as Parent Project",id:"step-2-update-pomxml-to-declare-it-as-parent-project",children:[]},{value:"Step 3: Create Sub-modules",id:"step-3-create-sub-modules",children:[]},{value:"Step 4: Update Sub-Modules pom.xml to Produce Appropriate Output",id:"step-4-update-sub-modules-pomxml-to-produce-appropriate-output",children:[]}]},{value:"2. Build Multi-Module",id:"2-build-multi-module",children:[]},{value:"3. Conclusion",id:"3-conclusion",children:[]}],m={toc:p};function i(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},m,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide, we learn how to create Maven Multi-Module using Command Line with very easy steps. A multi-module project is defined by a parent POM referencing one or more sub-modules. In this example, we will create a blogger web application with different modules. Let's create a blogger as parent project and it's 3 sub-modules are blogger-core, blogger-common, blogger-web."),Object(o.b)("p",null,"Real-world examples of maven multi-module projects are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RameshMF/junit-developer-guide"},"https://github.com/RameshMF/junit-developer-guide")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-framework"},"https://github.com/spring-projects/spring-framework")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apache/maven"},"https://github.com/apache/maven")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jersey/jersey"},"https://github.com/jersey/jersey"))),Object(o.b)("h2",{id:"create-a-maven-multi-module-using-command-line"},"Create a Maven Multi Module using Command Line"),Object(o.b)("p",null,"Below are the steps to create parent and sub-modules projects."),Object(o.b)("h3",{id:"step-1-create-parent-project---blogger"},"Step 1: Create Parent project - blogger"),Object(o.b)("p",null,"To create the Parent project:"),Object(o.b)("p",null,"mvn archetype:generate -DgroupId=com.companyname.blogger -DartifactId=blogger\nNote that whole command should be a single line. After build success, we will see below output in the command line console."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[INFO] Parameter: package, Value: com.companyname.blogger\n[INFO] Parameter: groupId, Value: com.companyname.blogger\n[INFO] Parameter: artifactId, Value: blogger\n[INFO] Parameter: packageName, Value: com.companyname.blogger\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] project created from Old (1.x) Archetype in dir: C:\\Ramesh_Study\\maven\\guides\\blogger\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 01:09 min\n[INFO] Finished at: 2018-06-20T13:40:40+05:30\n[INFO] ------------------------------------------------------------------------\n")),Object(o.b)("h3",{id:"step-2-update-pomxml-to-declare-it-as-parent-project"},"Step 2: Update pom.xml to Declare It as Parent Project"),Object(o.b)("p",null,"Open pom.xml of above-created parent-project and change the packaging to pom."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<packaging>pom</packaging>\n")),Object(o.b)("p",null,"The complete ",Object(o.b)("em",{parentName:"p"},"pom.xml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>com.companyname.blogger</groupId>\n  <artifactId>blogger</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <packaging>pom</packaging>\n\n  <name>blogger</name>\n  <url>http://maven.apache.org</url>\n\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>3.8.1</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n')),Object(o.b)("p",null,"If you don't change this pom.xml then you will get below build fail error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"[INFO] Parameter: groupId, Value: com.companyname.blogger\n[INFO] Parameter: artifactId, Value: blogger-core\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: com.companyname.blogger\n[INFO] Parameter: packageInPathFormat, Value: com/companyname/blogger\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: com.companyname.blogger\n[INFO] Parameter: groupId, Value: com.companyname.blogger\n[INFO] Parameter: artifactId, Value: blogger-core\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD FAILURE\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 01:49 min\n[INFO] Finished at: 2018-06-20T13:49:18+05:30\n[INFO] ------------------------------------------------------------------------\n[ERROR] Failed to execute goal org.apache.maven.plugins:maven-archetype-plugin:3.0.1:generate (default-cli) validPackaging: **Unable to add module to the current project as it is not of packaging type 'pom'** -> [Help 1]\n")),Object(o.b)("h3",{id:"step-3-create-sub-modules"},"Step 3: Create Sub-modules"),Object(o.b)("p",null,"Change directory via below command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd blogger\n")),Object(o.b)("p",null,"Let's create sub-modules in blogger parent project."),Object(o.b)("p",null,"Create blogger-core module."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DgroupId=com.companyname.blogger  -DartifactId=blogger-core\n")),Object(o.b)("p",null,"Create blogger-common module"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DgroupId=com.companyname.blogger  -DartifactId=blogger-common\n")),Object(o.b)("p",null,"Create blogger-web module and it is web application packaged with war file. The archetype for maven web application is ",Object(o.b)("inlineCode",{parentName:"p"},"-DarchetypeArtifactId=maven-archetype-webapp")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DgroupId=com.companyname.blogger  -DartifactId=blogger-web -DarchetypeArtifactId=maven-archetype-webapp\n")),Object(o.b)("p",null,"Now if you open the blogger parent project ",Object(o.b)("em",{parentName:"p"},"pom.xml"),", you will find all three modules being added in there."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"}," <modules>\n    <module>blogger-core</module>\n    <module>blogger-common</module>\n    <module>blogger-web</module>\n  </modules>\n")),Object(o.b)("p",null,"Also, in each sub-module\u2019s ",Object(o.b)("em",{parentName:"p"},"pom.xml"),", a parent section being added."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"}," <parent>\n    <artifactId>blogger</artifactId>\n    <groupId>com.companyname.blogger</groupId>\n    <version>1.0-SNAPSHOT</version>\n  </parent>\n")),Object(o.b)("h3",{id:"step-4-update-sub-modules-pomxml-to-produce-appropriate-output"},"Step 4: Update Sub-Modules pom.xml to Produce Appropriate Output"),Object(o.b)("p",null,"blogger-core module is package with jar"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<packaging>jar</packaging>\n")),Object(o.b)("p",null,"blogger-common module is a package with a jar."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<packaging>jar</packaging>\n")),Object(o.b)("p",null,"blogger-web module is already packaging with war."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<packaging>war</packaging>\n")),Object(o.b)("p",null,"Let's updated pom.xml files for all the parent and sub-modules."),Object(o.b)("p",null,"blogger parent project ",Object(o.b)("em",{parentName:"p"},"pom.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>com.companyname.blogger</groupId>\n  <artifactId>blogger</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <packaging>pom</packaging>\n\n  <name>blogger</name>\n  <url>http://maven.apache.org</url>\n\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>3.8.1</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n  <modules>\n    <module>blogger-common</module>\n    <module>blogger-web</module>\n    <module>blogger-core</module>\n  </modules>\n</project>\n')),Object(o.b)("p",null,"blogger-core sub-module ",Object(o.b)("em",{parentName:"p"},"pom.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  <parent>\n    <artifactId>blogger</artifactId>\n    <groupId>com.companyname.blogger</groupId>\n    <version>1.0-SNAPSHOT</version>\n  </parent>\n\n  <groupId>com.companyname.blogger</groupId>\n  <artifactId>blogger-core</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <packaging>jar</packaging>\n  <name>blogger-core</name>\n  \x3c!-- FIXME change it to the project\'s website --\x3e\n  <url>http://www.example.com</url>\n\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <maven.compiler.source>1.7</maven.compiler.source>\n    <maven.compiler.target>1.7</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>4.11</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n')),Object(o.b)("p",null,"blogger-common sub-module ",Object(o.b)("em",{parentName:"p"},"pom.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  <parent>\n    <artifactId>blogger</artifactId>\n    <groupId>com.companyname.blogger</groupId>\n    <version>1.0-SNAPSHOT</version>\n  </parent>\n\n  <groupId>com.companyname.blogger</groupId>\n  <artifactId>blogger-common</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <packaging>jar</packaging>\n  <name>blogger-common</name>\n  \x3c!-- FIXME change it to the project\'s website --\x3e\n  <url>http://www.example.com</url>\n\n  <properties>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <maven.compiler.source>1.7</maven.compiler.source>\n    <maven.compiler.target>1.7</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>4.11</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n')),Object(o.b)("p",null,"blogger-web sub-module ",Object(o.b)("em",{parentName:"p"},"pom.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <modelVersion>4.0.0</modelVersion>\n  <parent>\n    <groupId>com.companyname.blogger</groupId>\n    <artifactId>blogger</artifactId>\n    <version>1.0-SNAPSHOT</version>\n  </parent>\n  <groupId>com.companyname.blogger</groupId>\n  <artifactId>blogger-web</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <packaging>war</packaging>\n  <name>blogger-web Maven Webapp</name>\n  <url>http://maven.apache.org</url>\n  <dependencies>\n    <dependency>\n      <groupId>junit</groupId>\n      <artifactId>junit</artifactId>\n      <version>3.8.1</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n  <build>\n    <finalName>blogger-web</finalName>\n  </build>\n</project>\n')),Object(o.b)("h2",{id:"2-build-multi-module"},"2. Build Multi-Module"),Object(o.b)("p",null,"To test all the multi-module project setup is correct then run below maven common on blogger parent project:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-log"},"mvn clean install\nThe output of above command\n\n[INFO] Reactor Summary:\n[INFO]\n[INFO] blogger 1.0-SNAPSHOT ............................... SUCCESS [  0.746 s]\n[INFO] blogger-common ..................................... SUCCESS [  5.727 s]\n[INFO] blogger-core ....................................... SUCCESS [  1.775 s]\n[INFO] blogger-web Maven Webapp 1.0-SNAPSHOT .............. SUCCESS [  0.809 s]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 9.289 s\n[INFO] Finished at: 2018-06-20T14:20:05+05:30\n[INFO] ------------------------------------------------------------------------\n")),Object(o.b)("p",null,"That's it. Now can import this project into Eclipse IDE. In Eclipse , File -> Import -> Maven -> Existing Maven projects"),Object(o.b)("h2",{id:"3-conclusion"},"3. Conclusion"),Object(o.b)("p",null,"In this guide, we have learned how to create maven Multi-Module using Command Line by taking the bloggerproject as an example."),Object(o.b)("p",null,"The source code of this multi-module project is available on GitHub."),Object(o.b)("p",null,"Read my favorite Maven Developers Guide."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://www.javaguides.net/2018/06/how-to-create-maven-multi-module-using-command-line.html"},"\u5f15\u7528"))))}i.isMDXComponent=!0},546:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return s}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),i=function(e){var n=r.a.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=i(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(a),b=t,s=u["".concat(c,".").concat(b)]||u[b]||g[b]||o;return a?r.a.createElement(s,l(l({ref:n},m),{},{components:a})):r.a.createElement(s,l({ref:n},m))}));function s(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var m=2;m<o;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);