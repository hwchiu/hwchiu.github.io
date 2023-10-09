"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[22926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",authors:"hwchiu",tags:["Reading","Linux"],description:"\u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",date:new Date("2022-02-09T00:05:08.000Z")},i=void 0,l={permalink:"/2022/02/09/reading-notes-14",source:"@site/blog/2022-02-09-reading-notes-14.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",description:"\u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",date:"2022-02-09T00:05:08.000Z",formattedDate:"February 9, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Linux",permalink:"/tags/linux"}],readingTime:.845,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",authors:"hwchiu",tags:["Reading","Linux"],description:"\u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d",date:"2022-02-09T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cGitHub \u4e0a\u5e38\u5e38\u770b\u5230\u7684\u5947\u5999 commit \u5230\u5e95\u662f\u4ec0\u9ebc\uff1f\u300d",permalink:"/2022/02/11/reading-notes-15"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u8996\u89ba\u5316\u7cfb\u7d71\u5167 iptables \u898f\u5247\u300d",permalink:"/2022/02/07/reading-notes-13"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://daniel.feldroy.com/posts/autodocumenting-makefiles"},"https://daniel.feldroy.com/posts/autodocumenting-makefiles")),(0,a.kt)("p",null,"\u6a19\u984c: \u300c\u900f\u904e\u4e00\u9ede\u5c0f\u6280\u5de7\u8b93\u4f60\u7684 Makefile \u6709\u4e00\u500b\u66f4\u597d\u7684 Help\u8aaa\u660e\u300d\n\u985e\u5225: tools\n\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://daniel.feldroy.com/posts/autodocumenting-makefiles"},"https://daniel.feldroy.com/posts/autodocumenting-makefiles")),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4f7f\u7528 python \u642d\u914d Makefile \u7684\u5167\u5efa\u8a9e\u6cd5\u4f86\u8f15\u9b06\u5e6b\u4f60\u7684 Makefile \u52a0\u4e0a\u5404\u7a2e Help \u8a0a\u606f\uff0c\u6574\u500b\u6982\u5ff5\u6eff\u7c21\u55ae\u7684"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u500b Target \u5f8c\u9762\u90fd\u88dc\u4e0a\u4e00\u500b\u57fa\u65bc ## \u7684\u8a3b\u89e3\u8aaa\u660e"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 define/endef \u4f86\u5b9a\u7fa9\u4e00\u500b python3 \u7684\u5167\u5bb9\uff0c\u8a72 python3 \u6703\u5f9e stdin \u4e2d\u53bb\u5224\u5225\u8a72 target \u662f\u5426\u542b\u6709 ## \u7684\u5b57\u4e32\uff0c\u6709\u7684\u8a71\u5c31\u7d44\u5408\u8d77\u4f86\uff0c\u4e26\u4e14\u8f38\u51fa"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165\u4e00\u500b help \u7684 target\uff0c\u5c07\u5167\u5efa\u8b8a\u6578 MAKEFILE_LIST \u7d66\u4e1f\u5230\u4e0a\u8ff0\u7684 python3 \u53bb\u57f7\u884c")),(0,a.kt)("p",null,"\u6709\u8208\u8da3\u7684\u53ef\u4ee5\u770b\u770b\uff0c\u6574\u500b\u5beb\u6cd5\u975e\u5e38\u7c21\u55ae\u6709\u8da3\u3002"))}f.isMDXComponent=!0}}]);