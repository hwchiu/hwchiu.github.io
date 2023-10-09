"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[47732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,y=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},54693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",authors:"hwchiu",tags:["Reading","eBPF","ServiceMesh"],description:"\u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",date:new Date("2022-05-11T00:05:08.000Z")},i=void 0,l={permalink:"/2022/05/11/reading-notes-50",source:"@site/blog/2022-05-11-reading-notes-50.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",description:"\u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",date:"2022-05-11T00:05:08.000Z",formattedDate:"May 11, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"eBPF",permalink:"/tags/e-bpf"},{label:"ServiceMesh",permalink:"/tags/service-mesh"}],readingTime:6.205,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",authors:"hwchiu",tags:["Reading","eBPF","ServiceMesh"],description:"\u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d",date:"2022-05-11T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDatree, Kubernetes Configuration \u6aa2\u67e5\u5de5\u5177\u300d",permalink:"/2022/05/20/reading-notes-51"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u63d0\u5347 DevOps \u6280\u8853\u7684\u514d\u8cbb\u66f8\u7c4d\u300d",permalink:"/2022/05/09/reading-notes-49"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6a19\u984c: \u300c\u57fa\u65bc eBPF \u7684 ServiceMesh\u300d\n\u985e\u5225: networking\n\u9023\u7d50: ",(0,o.kt)("a",{parentName:"p",href:"https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh"},"https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh")),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u662f 2021\u672b \u7531 Cilium \u80cc\u5f8c\u7684 isovalent \u516c\u53f8\u5718\u968a\u6240\u767c\u8868\u7684\u6587\u7ae0\uff0c\u4e3b\u8981\u63a2\u8a0e\u4e00\u500b\u5168\u65b0\u7684 Service Mesh \u7684\u67b6\u69cb\u53ef\u80fd\u5e36\u4f86\u7684\u597d\u8655\uff0c\u6574\u7bc7\u6587\u7ae0\u4ee5 Cillium + eBPF \u70ba\u80cc\u666f\u53bb\u63a2\u8a0e\n\u6211\u8a8d\u70ba\u5982\u679c\u5c0d\u65bc eBPF \u6c92\u6709\u5168\u9762\u7406\u89e3\u7684\u60c5\u6cc1\u4e0b\uff0c\u5176\u5be6\u53ea\u80fd\u8b80\u61c2\u9019\u7bc7\u6587\u7ae0\u60f3\u8981\u5e36\u4f86\u7684\u679c\uff0c\u6c92\u6709\u8fa6\u6cd5\u53bb\u7406\u89e3\u5230\u5e95\u6574\u9ad4\u5be6\u4f5c\u8207\u904b\u4f5c\u539f\u7406\uff0c\u540c\u6642\u56e0\u70ba eBPF \u672c\u8eab\u7684\u7528\u9014\u9664\u4e86\u7db2\u8def(Cilium)\u4e4b\u5916\u6709\u6108\u4f86\u6108\u591a\u7684\u5e95\u5c64\u9664\u932f\u5de5\u5177\u90fd\u662f\u900f\u904e eBPF \u7684\u6982\u5ff5\u4f86\u5be6\u4f5c\u7684\uff0c\u56e0\u6b64\u5b78\u7fd2 eBPF \u7684\u6982\u5ff5\u5176\u5be6\u5e36\u4f86\u7684\u597d\u8655\u5f88\u591a\uff0c\u6709\u7a7a\u7684\u90fd\u63a8\u85a6\u5927\u5bb6\u82b1\u9ede\u6642\u9593\u53bb\u5b78\u7fd2\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u5206\u6210\u5e7e\u500b\u90e8\u5206"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u662f Service Mesh \u4ee5\u53ca\u76ee\u524d\u7684\u4e3b\u6d41\u505a\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u804a\u4e00\u4e0b Linux \u7db2\u8def\u50b3\u8f38\u7684\u6b77\u53f2\u767c\u5c55"),(0,o.kt)("li",{parentName:"ol"},"\u57fa\u65bc eBPF \u7684 Service Mesh \u67b6\u69cb"),(0,o.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u67b6\u69cb\u4e0b\u7684\u5dee\u7570\u4ee5\u53ca\u53ef\u80fd\u7684\u96b1\u6027\u6210\u672c")),(0,o.kt)("p",null,"\u96a8\u8005\u5206\u6563\u5f0f\u61c9\u7528\u7a0b\u5f0f\u67b6\u69cb\u7684\u8208\u8d77\uff0c\u5982\u4f55\u91dd\u5c0d\u9019\u4e9b\u6563\u843d\u5404\u5730\u7684\u61c9\u7528\u7a0b\u5f0f\u63d0\u4f9b\u95dc\u65bc\u7db2\u8def\u9023\u7dda\u65b9\u9762\u7684\u8cc7\u8a0a\u4e00\u76f4\u4ee5\u4f86\u90fd\u662f\u7dad\u904b\u4e0a\u7684\u554f\u984c\uff0c\u904e\u5f80\u6700\u7c21\u55ae\u7684\u65b9\u5f0f\u5c31\u662f\u91dd\u5c0d\u5404\u7a2e\u958b\u767c\u74b0\u5883\u5c0e\u5165\u76f8\u95dc\u6846\u67b6\n\u6bcf\u500b\u61c9\u7528\u7a0b\u5f0f\u90fd\u9700\u8981\u4fee\u6539\u4f86\u6574\u5408\u9019\u4e9b\u6846\u67b6\uff0c\u4f46\u662f\u96a8\u8005\u6574\u500b\u67b6\u69cb\u767c\u5c55\u8207\u8981\u6c42\u6108\u4f86\u6108\u591a\uff0c\u8b6c\u5982\u958b\u767c\u74b0\u5883\u6709\u4e0d\u540c\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u751a\u81f3\u6709\u4e0d\u53ef\u4fee\u6539\u7684\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5f0f\uff0c\u9664\u4e86\u7db2\u8def\u76e3\u63a7\u5916\u9084\u60f3\u8981\u5c0e\u5165\u8a8d\u8b49\u6388\u6b0a\uff0c\u8ca0\u8f09\u5e73\u8861\u7b49\u5404\u7a2e\u529f\u80fd\n\u8981\u6c42\u6bcf\u500b\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u8005\u5f15\u7528\u9019\u4e9b\u6846\u67b6\u5df2\u7d93\u6c92\u6709\u8fa6\u6cd5\u6f02\u4eae\u7684\u6eff\u8db3\u6240\u6709\u9700\u6c42\uff0c\u56e0\u6b64\u4e00\u500b\u80fd\u5920\u7121\u8996\u61c9\u7528\u7a0b\u5f0f\u672c\u9ad4\u7684\u900f\u660e\u6027\u6846\u67b6\u67b6\u69cb\u5c31\u8b8a\u6210\u773e\u4eba\u8ffd\u6367\u8207\u6e34\u671b\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u73fe\u4eca\u5927\u90e8\u5206\u7684 Service Mesh \u5c31\u662f\u63a1\u53d6\u9019\u7a2e\u900f\u660e\u6027\u7684\u67b6\u69cb\uff0c\u900f\u904e\u984d\u5916 Proxy \u4f86\u6514\u622a\u61c9\u7528\u7a0b\u5f0f\u7684\u5c01\u5305\u9032\u884c\u5f8c\u7e8c\u7ba1\u7406\u8207\u76e3\u63a7\uff0c\u4f7f\u5f97"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u8005\u5c08\u6ce8\u81ea\u5df1\u7684\u5546\u696d\u908f\u8f2f\u958b\u767c"),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u4e0d\u53ef\u4fee\u6539\u61c9\u7528\u7a0b\u5f0f\u4e5f\u53ef\u4ee5\u5c0e\u5165\u9019\u4e9b\u9032\u968e\u7db2\u8def\u529f\u80fd")),(0,o.kt)("p",null,"\u4ee5 kubernetes \u4f86\u8aaa\uff0c\u76ee\u524d\u4e3b\u6d41\u90fd\u662f\u900f\u904e sidecar \u7684\u6982\u5ff5\uff0c\u8b93\u6bcf\u500b\u61c9\u7528\u7a0b\u5f0f\u65c1\u908a\u90fd\u653e\u4e00\u500b Proxy \u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u540c\u6642\u57fa\u65bc Pod \u5167 Containers \u53ef\u4ee5\u4f7f\u7528 localhost \u4e92\u901a\u7684\u65b9\u5f0f\u4f86\u8655\u7406\u9023\u7dda\u3002\n\u61c9\u7528\u7a0b\u5f0f\u672c\u8eab\u90fd\u900f\u904e localhost \u6253\u5230 Proxy\uff0c\u800c\u6240\u6709\u5c0d\u5916\u9023\u7dda\u90fd\u8b93 Proxy \u5e6b\u5fd9\u8655\u7406\uff0c\u56e0\u6b64\u6240\u6709\u7684\u9032\u968e\u529f\u80fd\u90fd\u5be6\u4f5c\u65bc\u8a72 Proxy \u4e0a\u3002"),(0,o.kt)("p",null,"Isovalent \u8a8d\u70ba\u9019\u7a2e\u65b9\u5f0f\u529f\u80fd\u9762\u4e0a\u53ef\u884c\uff0c\u4f46\u662f\u8a8d\u70ba\u5982\u679c\u5c0e\u5165 Sidecar \u5176\u5be6\u6709\u5f88\u591a\u96b1\u6027\u6210\u672c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6839\u64da\u6e2c\u8a66\u4e0d\u7ba1\u54ea\u7a2e Service Mesh/Proxy \u7684\u89e3\u6c7a\u65b9\u6848\u90fd\u6703\u4f7f\u5f97\u771f\u6b63\u9023\u7dda\u7684 Latency \u63d0\u9ad8 3~4 \u500d\uff0c\u9019\u4e3b\u56e0\u662f Linux Kernel \u7684\u67b6\u69cb\u5c0e\u81f4\uff0c\u6240\u6709\u7684\u7db2\u8def\u5c01\u5305\n\u90fd\u5fc5\u9808\u8981\u65bc Linux Kernel Network Stack \u4f86\u56de\u7e5e\u884c\u5f88\u591a\u6b21\uff0c\u5c01\u5305\u9019\u7a2e\u6771\u897f\u4f86\u56de\u672c\u8eab\u53c8\u6703\u727d\u626f\u5230 Context Switch, Memory Copy \u7b49\u5404\u7a2e\u6210\u672c\uff0c\u6240\u4ee5\u6574\u9ad4 Latency \u7684\u63d0\u5347\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7cfb\u7d71\u7684\u984d\u5916\u8cc7\u6e90\u9700\u6c42\uff0c\u6bcf\u500b Pod \u90fd\u9700\u8981\u4e00\u500b\u984d\u5916\u7684 Proxy \u4f86\u8655\u7406\uff0c\u4ee5\u4e00\u500b 500 \u7bc0\u9ede\uff0c\u540c\u6642\u6bcf\u500b\u7bc0\u9ede\u90fd\u6709 30 Pod \u4f86\u8aaa\uff0c\u6574\u500b\u74b0\u5883\u5c31\u8981\u984d\u5916\u90e8\u7f72 15,000 \u7684 Proxy \u7684 Container\uff0c\u6bcf\u500b Container \u6d88\u8017 50MB \u5c31\u81f3\u5c11\u8981\u984d\u5916 750G \u7684\u8a18\u61b6\u9ad4\uff0c\n\u540c\u6642\u4e5f\u8981\u6ce8\u610f\u96a8\u8005 Pod/Node \u7b49\u6578\u91cf\u589e\u52a0\uff0c\u6bcf\u500b Proxy \u53ef\u80fd\u5c31\u9700\u8981\u66f4\u591a\u7684\u8a18\u61b6\u9ad4\u4f86\u7dad\u8b77\u9019\u4e9b Mesh(\u7db2\u683c) \u4e4b\u9593\u7684\u8cc7\u8a0a\uff0c\u56e0\u6b64\u4f7f\u7528\u7684 Memory \u91cf\u53ea\u6703\u6108\u4f86\u6108\u591a\u3002")),(0,o.kt)("p",null,"\u6240\u4ee5 Cillium/Isovalent \u60f3\u8981\u5f15\u5165\u57fa\u65bc eBPF \u7684\u67b6\u69cb\u4f86\u6253\u9020\u4e00\u500b\u4e0d\u540c\u67b6\u69cb\u7684 Service Mesh\u3002\u900f\u904e eBPF \u7684\u67b6\u69cb\u4f7f\u5f97\u6574\u500b Service Mesh \u7684\u767c\u751f\u9ede\u662f\u767c\u751f\u65bc Kernel \u968e\u6bb5\uff0c\u800c\u975e\u4e00\u500b\u7368\u7acb\u7684 Uses Proxy\u3002\n\u9019\u908a\u5e36\u4f86\u7684\u6539\u8b8a\u6709"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u65bc eBPF \u7684\u7279\u6027\uff0c\u5176\u672c\u8eab\u5c31\u6709\u8fa6\u6cd5\u91dd\u5c0d\u7cfb\u7d71\u4e0a\u6240\u6709 Socket \u53bb\u57f7\u884c\u7279\u5b9a\u7684\u51fd\u5f0f\uff0c\u6240\u4ee5 Cillium \u5c31\u53ef\u4ee5\u5077\u5077\u53bb\u4fee\u6539\u61c9\u7528\u7a0b\u5f0f\u7684\u7db2\u8def\u6d41\u91cf\uff0c\u4e0d\u8ad6\u662f\u4fee\u6539\u5c01\u5305\u5167\u5bb9\uff0c\u5075\u932f\u8207\u76e3\u63a7\u7b49\u90fd\u53ef\u4ee5\u9054\u5230"),(0,o.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u5982\u540c\u4e4b\u524d\u4e00\u6a23\u6bcf\u500b Pod \u90fd\u90e8\u7f72\u4e00\u500b\u7368\u7acb\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u64b0\u5beb\u901a\u7528\u7684 eBPF \u7a0b\u5f0f\u4f86\u63d0\u4f9b\u5404\u7a2e\u529f\u80fd"),(0,o.kt)("li",{parentName:"ol"},"\u7531\u65bc\u6240\u6709\u7684\u4e8b\u60c5\u90fd\u767c\u751f\u65bc Kernel\uff0c\u751a\u81f3\u53ef\u4ee5\u9054\u5230\u57fa\u65bc Socket-level \u7684\u5c01\u5305\u8655\u7406\uff0c\u6240\u4ee5\u5c01\u5305\u4e0d\u9700\u8981\u7e5e\u4f86\u7e5e\u53bb\uff0c\u6574\u500b\u8655\u7406\u7684\u8def\u5f91\u975e\u5e38\u7684\u77ed\uff0c\u56e0\u6b64\u7522\u751f\u7684 Latency \u975e\u5e38\u7684\u5c0f")),(0,o.kt)("p",null,"\u975e\u5e38\u5c0d\u65bc\u9019\u7cfb\u5217\u6230\u722d\u6709\u8208\u8da3\u7684\u4eba\u82b1\u9ede\u6642\u9593\u53bb\u628a eBPF \u7684\u6982\u5ff5\u88dc\u9f4a\uff0c\u63a5\u4e0b\u4f86\u91dd\u5c0d\u9019\u7cfb\u5217\u7684\u5927\u6230\u8207\u8a0e\u8ad6\u5c31\u80fd\u5920\u6709\u66f4\u591a\u7684\u80cc\u666f\u53bb\u7406\u89e3"))}m.isMDXComponent=!0}}]);