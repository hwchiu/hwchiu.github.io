"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[10314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),y=l,f=s["".concat(i,".").concat(y)]||s[y]||m[y]||a;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:l,p[1]=o;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"Python -- split()",date:"2013-04-22 00:47",comments:!0,tags:["Python"]},p=void 0,o={unversionedId:"2013/split",id:"2013/split",title:"Python -- split()",description:"\u5728python\u4e2d\u4e5f\u53ef\u4ee5\u5229\u7528split\u7684\u65b9\u5f0f\u628a\u5b57\u4e32\u6309\u7167\u7279\u5b9a\u7684\u5b57\u5143\u5207\u958b",source:"@site/docs/2013/split.md",sourceDirName:"2013",slug:"/2013/split",permalink:"/docs/2013/split",draft:!1,tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"Python -- split()",date:"2013-04-22 00:47",comments:!0,tags:["Python"]},sidebar:"techPost",previous:{title:"SA - Shell Script(2)",permalink:"/docs/2013/sa-homework2"},next:{title:"Strategy Pattern",permalink:"/docs/2013/strategy-pattern"}},i={},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728python\u4e2d\u4e5f\u53ef\u4ee5\u5229\u7528split\u7684\u65b9\u5f0f\u628a\u5b57\u4e32\u6309\u7167\u7279\u5b9a\u7684\u5b57\u5143\u5207\u958b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"str.split([sep[, maxsplit]])\n")),(0,l.kt)("p",null,"sep\u4ee3\u8868\u7528\u4f86\u5207\u5272\u7684\u7b26\u865f\uff0c\u800cmaxsplit\u4ee3\u8868\u6700\u591a\u5207\u591a\u5c11\u500b\u5b57\u4e32\u3002"),(0,l.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0csep\u53ef\u4ee5\u5403\u591a\u500b\u5b57\u5143\uff0c\u4f46\u662f\u5fc5\u9808\u662f\u9023\u7e8c\u5b57\u5143\uff0c\u5982\u4e0b\u8209\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    a = 'a,b,!c,!d e f :g'\n    a.split(',')\n    a.split(',!')\n    a.split(',! :')\n\n")),(0,l.kt)("p",null,"\u8f38\u51fa\n","['a', 'b', '!c', '!d e f :g']['a,b', 'c', 'd e f :g']","\n","['a,b,!c,!d e f :g']"),(0,l.kt)("p",null,"\u7b2c\u4e00\u7d44\u4ee5','\u4f5c\u70ba\u5206\u5272\u7b26\u865f\uff0c\u7d50\u679c\u5f88\u660e\u986f"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u7d44\u4ee5',!'\u4f5c\u70ba\u9023\u7e8c\u5206\u5272\u7b26\u865f\uff0c\u6240\u4ee5a,b\u5c31\u5207\u51fa\u4f86\uff0cc\u518d\u5207\u51fa\u4f86"),(0,l.kt)("p",null,"\u7b2c\u4e09\u7d44\u4ee5',! :'\u4f5c\u70ba\u9023\u7e8c\u5206\u5272\u7b26\u865f\uff0c\u4f46\u662f\u56e0\u70ba\u5b57\u4e32\u4e2d\u6c92\u6709\u7b26\u5408\u7684\uff0c\u6240\u4ee5\u5c31\u6839\u672c\u6c92\u6709\u5207\u5230"),(0,l.kt)("p",null,"\u4f46\u662f\u9019\u6a23\u7684\u529f\u80fd\uff0c\u5c0d\u65bc\u6211\u4e0a\u5217\u7684\u5b57\u4e32\uff0c\u5047\u5982\u6211\u60f3\u8981\u4ee5',! :'\u9019\u56db\u500b\u4f5c\u70ba\u5206\u5272\u7b26\u865f\uff0c\u5e0c\u671b\u53ef\u4ee5\u5207\u5272\u6210"),(0,l.kt)("p",null,"'a','b','c','d','e','f','g'"),(0,l.kt)("p",null,"\u9019\u7a2e\u683c\u5f0f\uff0c\u90a3\u8981\u5982\u4f55\u8fa6\u5230?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u628a\u6240\u6709\u7684\u7b26\u865f\u90fd\u66ff\u63db\u6210\u55ae\u4e00\u7b26\u865f\na.replace('!',',').replace(' ',',').replace(':',',')"),(0,l.kt)("li",{parentName:"ul"},"\u7528re\u63d0\u4f9b\u7684split\u4f86\u9054\u6210\nimport re\nre.split(',|!| |:',a)")),(0,l.kt)("p",null,"\u9019\u5169\u7a2e\u65b9\u6cd5\u90fd\u53ef\u4ee5\u9054\u6210\u4e00\u6a23\u7684\u6548\u679c\uff0c\u500b\u4eba\u89ba\u5f97\u7b2c\u4e8c\u7a2e\u6bd4\u8f03\u76f4\u89ba\uff0c\u4e5f\u6bd4\u8f03\u5bb9\u6613\u4e00\u773c\u5c31\u61c2"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u8ff0\u7bc4\u4f8b\u4f86\u770b\uff0c\u4f7f\u7528\u9019\u5169\u7a2e\u65b9\u6cd5\u5f8c\uff0c\u6703\u5f97\u5230\u5982\u4e0b"),(0,l.kt)("p",null,"['a', 'b', '', 'c', '', 'd', 'e', 'f', '', 'g']","\n\u5047\u8a2d\u8a72\u5b57\u4e32\u5b58\u5728\u8b8a\u6578needRemoveEmpty\u4e2d"),(0,l.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe\u6703\u6709empty\u7684\u503c\u5b58\u5728\uff0c\u9019\u6642\u5019\u5982\u679c\u8981\u53bb\u9664\u9019\u4e9b\u503c\u53ef\u4ee5\u63a1\u7528\u9019\u4e9b\u505a\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a1\u7528remove\u7684\u65b9\u5f0f\uff0c\u9010\u4e00\u628aempty\u7d66\u6e05\u9664")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    while True:\n      try:\n        needRemoveEmpty.remove("")\n      except ValueError:\n        break\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a1\u7528\u91cd\u65b0\u5275\u7acb\u7684\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"     for entry in needRemoveEmpty:\n        if entry:\n            newList.append(str(entry))\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a1\u7528filter\u7684\u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"    newList=filter(lambda x: len(x)>0, needRemoveEmpty)\n")))}m.isMDXComponent=!0}}]);