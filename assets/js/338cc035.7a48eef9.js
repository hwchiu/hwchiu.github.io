"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[84293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"Install Sphinx on Ubuntu 12.04 LTS",date:"2013-10-05 09:01",author:"hwchiu",tags:["System","Ubuntu","Tool"],description:"Sphinx\u662f\u4e00\u5957\u5efa\u7f6e\u8aaa\u660e\u6587\u5efa\u7684\u8edf\u9ad4\uff0c\u672c\u8eab\u662f\u7528python\u5beb\u6210\u7684,\u76ee\u524d\u4f7f\u7528Sphinx\u9019\u5957\u8edf\u9ad4\u4f86\u7576\u4f5c\u6703\u8b70\u7d00\u9304"},i=void 0,o={permalink:"/2013/10/05/sphinx",source:"@site/blog/2013-10-05-sphinx.md",title:"Install Sphinx on Ubuntu 12.04 LTS",description:"Sphinx\u662f\u4e00\u5957\u5efa\u7f6e\u8aaa\u660e\u6587\u5efa\u7684\u8edf\u9ad4\uff0c\u672c\u8eab\u662f\u7528python\u5beb\u6210\u7684,\u76ee\u524d\u4f7f\u7528Sphinx\u9019\u5957\u8edf\u9ad4\u4f86\u7576\u4f5c\u6703\u8b70\u7d00\u9304",date:"2013-10-05T09:01:00.000Z",formattedDate:"October 5, 2013",tags:[{label:"System",permalink:"/tags/system"},{label:"Ubuntu",permalink:"/tags/ubuntu"},{label:"Tool",permalink:"/tags/tool"}],readingTime:2,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"Install Sphinx on Ubuntu 12.04 LTS",date:"2013-10-05 09:01",author:"hwchiu",tags:["System","Ubuntu","Tool"],description:"Sphinx\u662f\u4e00\u5957\u5efa\u7f6e\u8aaa\u660e\u6587\u5efa\u7684\u8edf\u9ad4\uff0c\u672c\u8eab\u662f\u7528python\u5beb\u6210\u7684,\u76ee\u524d\u4f7f\u7528Sphinx\u9019\u5957\u8edf\u9ad4\u4f86\u7576\u4f5c\u6703\u8b70\u7d00\u9304"},prevItem:{title:"Install News server on FreeBSD 9.1R",permalink:"/2013/10/05/news-server"},nextItem:{title:"Execution Floodlight",permalink:"/2013/08/21/floodlight-env"}},p={authorsImageUrls:[void 0]},u=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"index.rsta",id:"indexrsta",level:2},{value:"Write",id:"write",level:2},{value:"Build",id:"build",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"\u76f4\u63a5\u900f\u904eatp-get \u5b89\u88dd\u5373\u53ef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt-get install sphinx")),(0,l.kt)("h2",{id:"config"},"Config"),(0,l.kt)("p",null,"\u5b89\u88dd\u5b8c\u7562\u5f8c\uff0c\u57f7\u884c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sphinx-quickstart"),"\u5c31\u53ef\u4ee5\u57fa\u672c\u8a2d\u5b9a\u4e86"),(0,l.kt)("p",null,"\u6bcf\u500b\u9078\u9805\u90fd\u6709\u8aaa\u660e\uff0c\u57fa\u672c\u4e0a\u90fd\u63a1\u7528\u9810\u8a2d\u503c\u5373\u53ef"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8a2d\u5b9a\u6a94: conf.py"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5916\u639b\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u593e\u7d50\u69cb\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u901a\u7528\u53c3\u6578\uff0c\u5982\u4f5c\u8005\u540d\u7a31\uff0c\u7248\u672c...\u7b49"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3b\u8981\u7684\u6a94\u6848: index.rst\n-. \u6a94\u6848\u7684\u7d50\u69cb\n-. toctree"))),(0,l.kt)("h2",{id:"indexrsta"},"index.rsta"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Lab Meetgins\n=============\n.. toctree::\n   :maxdepth: 4\n   :titlesonly:\n\n   20130924.rst\n   20131001.rst\n\n\u570b\u79d1\u6703 meetings\n===============\n.. toctree::\n   :maxdepth: 4\n   :titlesonly:\n\n   20130925.rst\n")),(0,l.kt)("p",null,"\u9019\u908a\u6211\u5b9a\u7fa9\u5169\u500btoctree\uff0c\u6bcf\u500btoctree\u5e95\u4e0b\u53c8\u6703\u6709\u5176\u4ed6\u7684rst\uff0c\u7d50\u69cb\u5927\u6982\u662f\u9019\u6a23"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lab Meetings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20130924.rst"),(0,l.kt)("li",{parentName:"ul"},"20131001.rst"))),(0,l.kt)("li",{parentName:"ul"},"\u570b\u79d1\u6703 meetings",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20130925.rst")))),(0,l.kt)("p",null,"\u7e3d\u5171\u5169\u500b\u5206\u985e\uff0c\u6bcf\u500b\u5206\u985e\u5e95\u4e0b\u7684\u6587\u7ae0\u90fd\u662f\u4e00\u500b\u984d\u5916\u7684rst\u6a94\u6848"),(0,l.kt)("p",null,"\u5728toctree\u5e95\u4e0b\u7684\u90fd\u662f\u4e00\u4e9b\u8a2d\u5b9a\u53c3\u6578"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"maxdepth : \u6700\u5927\u6df1\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"titlesonly : \u5728\u9996\u9801\u9762\u53ea\u986f\u793a\u5b50\u985e\u7684\u6a19\u984c")),(0,l.kt)("h2",{id:"write"},"Write"),(0,l.kt)("p",null,"Sphinx\u63a1\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"reStructuredText"),"\n\u683c\u5f0f\u8ddfmarkdown\u5f88\u985e\u4f3c\uff0c\u4f46\u662f\u8907\u96dc\u4e86\u4e00\u4e9b\n\u5b98\u65b9\u7db2\u7ad9\u6709\u6eff\u8a73\u7d30\u7684\u4ecb\u7d39\uff0c\u6709\u9700\u8981\u6642\u518d\u53bb\u53c3\u8003\u5373\u53ef"),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u8981\u8f49\u6210html\u7db2\u9801\uff0c\u6709\u5169\u7a2e\u65b9\u6cd5\u53ef\u4ee5\u57f7\u884c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"sphinx-build -b html .  NSLMeeting\n\u610f\u601d\u662f\u5efa\u7f6ehtml\u7684\u7db2\u9801\uff0c \u7136\u5f8c\u4ee5\u7576\u524d\u76ee\u9304\u70basource \u4f86\u6e90\uff0c\u7136\u5f8c\u628a\u6a94\u6848build\u5230NSLMetting\u53bb\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"make html\n\u5728Makefile\u4e2d\u5b9a\u7fa9\u4e86\u76f8\u95dc\u5f97\u52d5\u4f5c\uff0c\u7576\u57f7\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"make html"),"\u7684\u6642\u5019\uff0c\u5176\u5be6\u5c31\u662f\u57f7\u884c\n",(0,l.kt)("inlineCode",{parentName:"p"},"sphinx-build -b html . _build/html")))),(0,l.kt)("p",null,"\u9019\u908a\u56e0\u70ba\u6211\u60f3\u8981\u76f4\u63a5\u5f04\u5230\u5225\u7684\u8cc7\u6599\u593e\uff0c\u6240\u4ee5\u6211\u76f4\u63a5\u8a2d\u5b9aaliase\u53bb\u57f7\u884c\u65b9\u6cd51"),(0,l.kt)("p",null,"\u76ee\u524d\u5c0d\u65bc\u9019\u5957\u8edf\u9ad4\u9084\u5728\u5b78\u7fd2\u968e\u6bb5\uff0c\u6709\u4efb\u4f55\u5b78\u7fd2\u6703\u7e7c\u7e8c\u7d00\u9304\u3002"))}m.isMDXComponent=!0}}]);