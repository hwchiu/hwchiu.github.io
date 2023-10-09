"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[98431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=l,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",authors:"hwchiu",tags:["Reading"],description:"\u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",date:new Date("2022-06-23T00:05:08.000Z")},a=void 0,i={permalink:"/2022/06/23/reading-notes-62",source:"@site/blog/2022-06-23-reading-notes-62.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",description:"\u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",date:"2022-06-23T00:05:08.000Z",formattedDate:"June 23, 2022",tags:[{label:"Reading",permalink:"/tags/reading"}],readingTime:4.28,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",authors:"hwchiu",tags:["Reading"],description:"\u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",date:"2022-06-23T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",permalink:"/2022/06/27/reading-notes-63"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u555f\u52d5 container \u76f4\u63a5 kernel panic \u7684 bug\u300d",permalink:"/2022/06/15/reading-notes-61"}},u={authorsImageUrls:[void 0]},c=[{value:"Process",id:"process",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Automaiton",id:"automaiton",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6a19\u984c: \u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d\n\u985e\u5225: networks\n\u9023\u7d50: ",(0,l.kt)("a",{parentName:"p",href:"https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022/"},"https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022/")),(0,l.kt)("p",null,"Cloudflare \u5b98\u65b9\u6587\u7ae0\u8a73\u7d30\u89e3\u91cb 06/21/2022 \u7576\u5929\u5230\u5e95\u767c\u751f\u4ec0\u9ebc\u4e8b\u60c5\u5c0e\u81f4\u7528\u6236\u53d7\u5230\u5f71\u97ff\uff0c"),(0,l.kt)("p",null,"\u9019\u6b21\u7684\u554f\u984c\u5f71\u97ff\u7bc4\u570d\u6982\u62ec\u4e86 Cloudflare \u5e95\u4e0b\u7684 19 \u500b\u8cc7\u6599\u4e2d\u5fc3\uff0c\u800c\u5f88\u4e0d\u5e78\u7684\u9019 19 \u500b\u8cc7\u6599\u4e2d\u5fc3\u525b\u597d\u90fd\u662f\u8ca0\u8cac\u8655\u7406\u7e41\u5fd9\u7684\u5168\u7403\u6d41\u91cf\uff0c\u6240\u4ee5\u53d7\u5230\u5f71\u97ff\u7684\u7528\u6236\u6578\u91cf\u624d\u6703\u5982\u6b64\u7684\u591a\u3002\n\u554f\u984c\u4e3b\u56e0\u662f\u7db2\u8def\u8a2d\u5b9a\u7684\u8abf\u6574(\u6709\u554f\u984c\u5148\u731cBGP\uff0c\u4e0d\u884c\u518d\u731cDNS...)\uff0c\u6574\u9ad4\u7684\u767c\u751f\u6642\u9593\u6c92\u6709\u975e\u5e38\u9577"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"06:27 UTC \u554f\u984c\u767c\u751f"),(0,l.kt)("li",{parentName:"ol"},"06:58 UTC \u7b2c\u4e00\u500b\u8cc7\u6599\u4e2d\u5fc3\u4fee\u5fa9\u4e26\u4e14\u4e0a\u7dda"),(0,l.kt)("li",{parentName:"ol"},"07:42 UTC \u6240\u6709\u8cc7\u6599\u4e2d\u5fc3\u4fee\u5fa9\u4e26\u4e14\u4e0a\u7dda ")),(0,l.kt)("h1",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u904e\u53bb 18 \u500b\u6708\u4ee5\u4f86\uff0c Cloudflare \u81f4\u529b\u65bc\u5c07\u5176\u5e95\u4e0b\u7e41\u5fd9\u7684\u8cc7\u6599\u4e2d\u5fc3\u9032\u884c\u67b6\u69cb\u6539\u9020\u4f86\u9054\u6210\u66f4\u70ba\u5805\u97cc\u8207\u5f48\u6027\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u5167\u90e8\u7a31\u8a72\u67b6\u69cb\u70ba Multi-Colo POP(MCP)\uff0c\u5f71\u97ff\u7684 19 \u500b\u8cc7\u6599\u4e2d\u5fc3\u5305\u542b Tokyo, Singapore ... \u7b49"),(0,l.kt)("p",null,"\u65b0\u67b6\u69cb\u6700\u91cd\u8981\u7684\u90e8\u5206\u5c31\u662f\u5176\u7db2\u8def\u7684\u90e8\u5206\u662f\u57fa\u65bc Clos network \u7684\u67b6\u69cb\u8a2d\u8a08\uff0c\u900f\u904e\u591a\u5c64\u6b21\u7684\u8a2d\u8a08\u9054\u6210\u985e\u4f3c mesh network \u822c\u7684\u7db2\u8def\u9023\u7d50\uff0c\u8a72\u67b6\u69cb\u4f7f\u5f97\u672a\u4f86\u8981\u7dad\u8b77\u8207\u8abf\u6574\u6642\u80fd\u5920\u66f4\u8f15\u9b06\u91dd\u5c0d\u90e8\u5206\u7db2\u8def\u8a2d\u5099\u53bb\u8655\u7406\u800c\u4e0d\u6703\u5f71\u97ff\u5230\u6574\u9ad4\u7db2\u8def(\u6587\u7ae0\u6709\u67b6\u69cb\u5716\u7247)\u3002"),(0,l.kt)("h1",{id:"\u554f\u984c"},"\u554f\u984c"),(0,l.kt)("p",null,"\u9019\u6b21\u7684\u554f\u984c\u4e3b\u8981\u8ddf BGP \u6709\u95dc\uff0cCloudflare \u66f4\u65b0 BGP \u7684\u904e\u7a0b\u4e2d\u6709\u90e8\u5206\u7684 subnet \u6c92\u6709\u9806\u5229\u7684\u88ab\u50b3\u905e\u51fa\u53bb\uff0c\u6700\u7d42\u4f7f\u5f97\u90e8\u5206 subnet \u7684\u6d41\u91cf\u7121\u6cd5\u88ab\u9806\u5229\u8f49\u767c\uff0c\u9032\u800c\u5c0e\u81f4\u6574\u500b\u7db2\u8def\u554f\u984c\u3002"),(0,l.kt)("p",null,"\u6587\u7ae0\u5167\u90e8\u6709\u91dd\u5c0d BGP \u554f\u984c\u66f4\u8a73\u7d30\u7684\u4ecb\u7d39\uff0c\u719f\u6089 BGP \u7684\u670b\u53cb\u53ef\u4ee5\u82b1\u9ede\u6642\u9593\u770b\u4e00\u4e0b"),(0,l.kt)("h1",{id:"\u53cd\u601d"},"\u53cd\u601d"),(0,l.kt)("p",null,"\u9019\u6b21\u7684\u554f\u984c\u5f71\u97ff\u7bc4\u570d\u5f88\u5ee3\uff0cCloudflare \u91dd\u5c0d\u4e0b\u5217\u4e09\u9762\u5411\u53cd\u601d\u4e86\u4e00\u4e0b\u554f\u984c\u7684\u767c\u751f\u539f\u56e0"),(0,l.kt)("h2",{id:"process"},"Process"),(0,l.kt)("p",null,"\u96d6\u7136\u5d84\u65b0\u7684 MCP \u67b6\u69cb\u5176\u76ee\u7684\u5c31\u662f\u8981\u63d0\u4f9b\u66f4\u597d\u66f4\u5f37\u7684\u53ef\u7528\u6027\uff0c\u4f46\u662f\u5c07\u820a\u67b6\u69cb\u7d66\u5347\u7d1a\u5230\u65b0\u67b6\u69cb\u7684\u904e\u7a0b\u4e2d\u9084\u662f\u4e0d\u5920\u5b8c\u5584\u3002\u6574\u9ad4\u7684\u66f4\u65b0\u6d41\u7a0b\u76f4\u5230\u6700\u5f8c\u4e00\u6b65\u9a5f\u624d\u7b97\u662f\u771f\u6b63\u7684\u63a5\u89f8\u5230\u5168\u65b0 MCP \u67b6\u69cb\uff0c\u9019\u4f7f\u5f97\u5982\u679c\u4e2d\u9593\u66f4\u65b0\u6d41\u7a0b\u6709\u932f\u5fc5\u9808\u8981\u5230\u6700\u5f8c\u624d\u6703\u89c0\u5bdf\u5230 MCP \u8cc7\u6599\u4e2d\u5fc3\u7684\u7db2\u8def\u70b8\u4e86\u3002\n\u6539\u5584\u7684\u65b9\u5f0f\u5247\u662f\u672a\u4f86\u7684\u9019\u4e9b\u6d41\u7a0b\u8207\u81ea\u52d5\u5316\u5fc5\u9808\u8981\u52a0\u5165\u66f4\u591a\u95dc\u65bc MCP \u67b6\u69cb\u7684\u6e2c\u8a66\u4f86\u78ba\u4fdd\u6574\u9ad4\u90e8\u7f72\u4e0d\u6703\u9047\u5230\u9810\u671f\u5916\u7684\u7d50\u679c\u3002"),(0,l.kt)("h2",{id:"architecture"},"Architecture"),(0,l.kt)("p",null,"\u8def\u7531\u5668\u7684\u932f\u8aa4\u8a2d\u5b9a\u4f7f\u5f97\u6b63\u78ba\u7684\u8def\u7531\u898f\u5247\u6c92\u6709\u8fa6\u6cd5\u9806\u5229\u7684\u88ab\u50b3\u9054\u4e0b\u53bb\uff0c\u6700\u7d42\u4f7f\u5f97\u7db2\u8def\u5c01\u5305\u7121\u6cd5\u5982\u9810\u671f\u822c\u5730\u5230\u9054\u9019\u4e9b\u8cc7\u6599\u4e2d\u5fc3\u3002\n\u6240\u4ee5\u4fee\u5fa9\u904e\u7a0b\u4e2d\u5c31\u662f\u8981\u627e\u51fa\u9019\u4e9b\u932f\u8aa4\u7684\u8a2d\u5b9a\u4e26\u4e14\u4fee\u6b63\uff0c\u6700\u7d42\u4f7f\u5f97\u9019\u4e9b BGP \u80fd\u5920\u5c07\u6b63\u78ba\u7684\u8def\u7531\u653f\u7b56\u7d66\u8f49\u767c\u4e0b\u53bb\u3002"),(0,l.kt)("h2",{id:"automaiton"},"Automaiton"),(0,l.kt)("p",null,"\u7576\u524d\u7684\u81ea\u52d5\u5316\u6d41\u7a0b\u4e2d\u6709\u975e\u5e38\u591a\u7684\u90e8\u5206\u53ef\u4ee5\u6539\u9032\uff0c\u9019\u4e9b\u6539\u9032\u6709\u6a5f\u6703\u5b8c\u5168\u6216\u662f\u90e8\u5206\u7684\u53bb\u6e1b\u7de9\u554f\u984c\u767c\u751f\u6642\u7684\u5f71\u97ff\u7a0b\u5ea6\u3002\n\u6709\u5169\u500b\u76ee\u6a19\u662f\u60f3\u8981\u900f\u904e\u6539\u5584\u81ea\u52d5\u5316\u6a5f\u5236\u9054\u6210\u7684"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6e1b\u5c11\u554f\u984c\u767c\u751f\u6642\u7684\u5f71\u97ff\u7bc4\u570d"),(0,l.kt)("li",{parentName:"ol"},"\u6e1b\u5c11\u554f\u984c\u767c\u751f\u6642\u7684\u4fee\u5fa9\u6642\u9593")),(0,l.kt)("h1",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("p",null,"CDN \u4e0d\u901a\u5148\u4e0a\u793e\u7fa4\u770b\u540c\u696d\u6709\u6c92\u6709\u54c0\u568e\uff0c\u5927\u6982\u5c31\u53ef\u4ee5\u77e5\u9053\u662f\u4e0d\u662f\u81ea\u5df1\u7684\u554f\u984c\u4e86?"))}d.isMDXComponent=!0}}]);