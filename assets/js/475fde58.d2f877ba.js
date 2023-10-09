"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[12143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",authors:"hwchiu",tags:["Reading","Kubectl"],description:"\u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",date:new Date("2022-04-06T00:05:08.000Z")},a=void 0,i={permalink:"/2022/04/06/reading-notes-36",source:"@site/blog/2022-04-06-reading-notes-36.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",description:"\u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",date:"2022-04-06T00:05:08.000Z",formattedDate:"April 6, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubectl",permalink:"/tags/kubectl"}],readingTime:3.34,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",authors:"hwchiu",tags:["Reading","Kubectl"],description:"\u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d",date:"2022-04-06T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u5347\u7d1a Kubernetes 1.22 \u7684\u6ce8\u610f\u4e8b\u9805\u300d",permalink:"/2022/04/11/reading-notes-37"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDockerfile \u4e2d\u900f\u904e COPY --chomd \u6bd4\u900f\u904e RUN chomd \u53ef\u4ee5\u7701\u4e0b\u66f4\u591a\u7a7a\u9593\u300d",permalink:"/2022/04/04/reading-notes-35"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u},d="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6a19\u984c: \u300ckubectl delete \u7684\u884c\u70ba\u8ddf docker delete \u5b8c\u5168\u4e0d\u540c\u300d\n\u985e\u5225: kubernetes\n\u9023\u7d50: ",(0,l.kt)("a",{parentName:"p",href:"https://www.acritelli.com/blog/kubectl-delete-sigkill/"},"https://www.acritelli.com/blog/kubectl-delete-sigkill/")),(0,l.kt)("p",null,"\u719f\u6089 Linux \u7cfb\u7d71\u7684\u4eba\u60f3\u5fc5\u90fd\u4e86\u89e3 Signal \u7684\u6982\u5ff5\uff0c\u7279\u5225\u662f\u5e7e\u500b\u5e38\u898b\u7684\u5982 SIGTERM, SIGKILL \u7b49\uff0c"),(0,l.kt)("p",null,"\u4f5c\u8005\u7684\u5718\u968a\u5617\u8a66\u900f\u904e SIGKILL \u7684\u884c\u70ba\u4f86\u9a57\u8b49\u8207\u6e2c\u8a66\u5718\u968a\u5167\u90e8\u7f72\u7684 Kubernetes Pod\uff0c\u7279\u5225\u662f\u7576\u9047\u5230 ungraceful shutdown \u7684\u60c5\u5883\u6642\u9019\u4e9b Pod \u6703\u5982\u4f55\u904b\u4f5c\u3002\n\u5718\u968a\u5617\u8a66\u900f\u904e kubectl delete \u7684\u65b9\u5f0f\u4f86\u522a\u9664\u9019\u4e9b Pod\uff0c\u4f46\u662f\u5be6\u9a57\u904e\u7a0b\u4e2d\u767c\u73fe --grace-period \u9019\u500b\u53c3\u6578\u7684\u904b\u4f5c\u884c\u70ba\u8207\u5718\u968a\u7684\u9810\u671f\u884c\u70ba\u4e0d\u540c\u3002\nkubectl delete \u5f97\u8aaa\u660e\u6587\u4ef6\u4e2d\u7279\u5225\u6307\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      --grace-period=-1: Period of time in seconds given to the resource to terminate gracefully.\nIgnored if negative. Set to 1 for immediate shutdown. Can only be set to 0 when --force is true\n(force deletion).\n")),(0,l.kt)("p",null,"\u4f5c\u8005\u770b\u6587\u9019\u6bb5\u6587\u5b57\u8aaa\u660e\u5f8c\u6eff\u8166\u554f\u865f\uff0c\u63d0\u51fa\u5169\u500b\u554f\u984c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"grace-period \u8a2d\u5b9a\u70ba 1 \u7684 immediate shutdown \u662f\u76f4\u63a5\u9001\u51fa SIGKILL \u55ce\uff1f \u9084\u662f\u8aaa\u6703\u6709\u4e00\u79d2\u7684\u9593\u9694\u6642\u9593\u624d\u767c\u9001 SIGKILL?"),(0,l.kt)("li",{parentName:"ol"},"grace-period \u8a2d\u5b9a\u70ba 0 \u662f\u4ee3\u8868\u6c92\u6709\u9593\u9694\uff0c\u6240\u4ee5\u4e5f\u662f\u99ac\u4e0a\u9001\u51fa SIGKILL \u55ce? \u9084\u662f\u8aaa\u5176\u53ea\u662f\u55ae\u7d14\u5c07\u8cc7\u6e90\u5f9e k8s API \u4e2d\u79fb\u9664\u800c\u6c92\u6709\u7b49\u5f85\u800c\u5df2\uff1f")),(0,l.kt)("p",null,"\u4f5c\u8005\u8a8d\u70ba\u6587\u4ef6\u6c92\u6709\u8fa6\u6cd5\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\uff0c\u6240\u4ee5\u8a2d\u8a08\u4e86\u4e00\u4e9b\u5be6\u9a57\u4f86\u6e2c\u8a66"),(0,l.kt)("p",null,"--grace-period=1 \u7684\u5be6\u9a57\u7d50\u679c\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9001\u51fa SIGTERM"),(0,l.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u4e00\u79d2"),(0,l.kt)("li",{parentName:"ol"},"\u9001\u51fa SIGKILL")),(0,l.kt)("p",null,'\u4f5c\u8005\u5c0d\u65bc\u9019\u500b\u884c\u70ba\u611f\u5230\u4e0d\u89e3\uff0c\u8a8d\u70ba "immediate shutdown" \u61c9\u8a72\u5c31\u662f\u8981\u99ac\u4e0a\u95dc\u9589\u5440\uff0c\u600e\u9ebc\u53ef\u4ee5\u9001 SIGTERM \u7d66 Pod \u8b93 Pod \u6709\u6a5f\u6703\u53ef\u4ee5\u512a\u96c5\u7684\u7d50\u675f\u4e00\u5207\uff1f\n\u56e0\u70ba\u5c0d\u65bc\u9019\u884c\u70ba\u7684\u8a8d\u77e5\u4e0d\u540c\u5c0e\u81f4\u4f5c\u8005\u5718\u968a\u7684\u6e2c\u8a66\u884c\u70ba\u6c92\u6709\u8fa6\u6cd5\u9806\u5229\u5b8c\u6210\u3002'),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6e2c\u8a66 --grace-period=0 & --force=true "),(0,l.kt)("p",null,"\u6587\u4ef6\u4e2d\u8aaa\u660e\u9019\u6a23\u8a2d\u5b9a\u6703\u7acb\u523b\u5c07\u8a72\u8cc7\u6e90\u5f9e API Server \u5167\u7d66\u522a\u9664\u4e26\u4e14\u907f\u958b graceful \u7684\u968e\u6bb5\u3002\n\u6700\u5f8c\u6e2c\u8a66\u7684\u7d50\u679c\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u767c\u9001 SIGTERM"),(0,l.kt)("li",{parentName:"ol"},"\u7b49\u5f85 30 \u79d2"),(0,l.kt)("li",{parentName:"ol"},"\u767c\u9001 SIGKILL")),(0,l.kt)("p",null,"\u4f5c\u8005\u8868\u793a\u53c8\u7cca\u5857\u4e86\uff0c\u6c92\u60f3\u5230\u8a2d\u5b9a grace-period=0 \u7adf\u7136\u4e2d\u9593\u9084\u6709 30 \u79d2\u7684\u6642\u9593\uff0c\u9019\u5b8c\u5168\u8207\u9810\u6599\u7684\u4e0d\u540c\uff0c\u66f4\u9ebb\u7169\u7684\u662f\u6587\u4ef6\u4e5f\u6c92\u6709\u8b1b\u5f97\u975e\u5e38\u6e05\u695a\u5230\u5e95\u4ec0\u9ebc\u662f\u6b63\u78ba\u7684\u884c\u70ba\uff0c\n\u6b64\u5916\u9084\u63d0\u5230 Docker \u5c31\u652f\u63f4\u771f\u6b63\u7684 immediate shutdown\uff0c\u76f4\u63a5\u9001 SIGKILL\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u4f5c\u8005\u767c\u73fe K8s GitHub \u4e2d\u7684\u4e5f\u6709\u4eba\u63d0\u51fa\u985e\u4f3c\u7684 issue\uff0c\u5c0d\u65bc\u9019\u4e9b graceful \u7684\u884c\u70ba\u611f\u5230\u4e0d\u89e3\u540c\u6642\u6587\u4ef6\u8aaa\u660e\u4e0d\u5920\u7cbe\u6e96\u3002"),(0,l.kt)("p",null,"\u9019\u4ef6\u4e8b\u60c5\u5f88\u96e3\u8aaa\u8ab0\u6b63\u78ba\u8ab0\u4e0d\u6b63\u78ba\uff0c\u7562\u7adf\u4e0d\u540c\u7684\u7cfb\u7d71\u67b6\u69cb\u4e0b\u7684\u8a2d\u8a08\u65b9\u5f0f\u8207\u689d\u4ef6\u90fd\u4e0d\u540c\uff0c\u4e0d\u904e\u7684\u78ba K8s \u7684\u6307\u4ee4\u6587\u4ef6\u6709\u6642\u5019\u662f\u771f\u7684\u4e0d\u662f\u7cbe\u6e96\uff0c\u9700\u8981\u4ed4\u7d30\u6e2c\u8a66\u624d\u53ef\u4ee5\u7406\u89e3\u5230\u5e95\u904b\u4f5c\u884c\u70ba\u70ba\u4f55"))}s.isMDXComponent=!0}}]);