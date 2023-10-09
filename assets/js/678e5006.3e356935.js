"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[6650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=l,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"\u95b1\u8b80\u7b46\u8a18: \u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",authors:"hwchiu",tags:["Reading","ePBF","Security"],description:"\u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",date:new Date("2022-05-23T00:05:08.000Z")},o=void 0,i={permalink:"/2022/05/23/reading-notes-52",source:"@site/blog/2022-05-23-reading-notes-52.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",description:"\u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",date:"2022-05-23T00:05:08.000Z",formattedDate:"May 23, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"ePBF",permalink:"/tags/e-pbf"},{label:"Security",permalink:"/tags/security"}],readingTime:5.64,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",authors:"hwchiu",tags:["Reading","ePBF","Security"],description:"\u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d",date:"2022-05-23T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cMizu, \u4e00\u5957\u7528\u4f86\u6aa2\u8996 Kubernetes Traffic \u7684\u8996\u89ba\u5316\u5de5\u5177\u300d",permalink:"/2022/05/25/reading-notes-53"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDatree, Kubernetes Configuration \u6aa2\u67e5\u5de5\u5177\u300d",permalink:"/2022/05/20/reading-notes-51"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6a19\u984c: \u300cTetragon, \u57fa\u65bc eBPF \u7684 Kubernetes \u8cc7\u5b89\u7ba1\u7406\u5de5\u5177\u300d\n\u985e\u5225: others\n\u9023\u7d50: ",(0,l.kt)("a",{parentName:"p",href:"https://isovalent.com/blog/post/2022-05-16-tetragon"},"https://isovalent.com/blog/post/2022-05-16-tetragon")),(0,l.kt)("p",null,"Cillium \u7684\u958b\u767c\u5718\u968a isovalent \u6700\u8fd1\u516c\u5e03\u5176\u5167\u90e8\u4e00\u76f4\u4f7f\u7528\u7684\u8cc7\u5b89\u76f8\u95dc\u5c08\u6848\uff0c Teragon (\u53ef\u611b\u7684\u871c\u8702\u6230\u58eb)\u3002"),(0,l.kt)("p",null,"Teragon \u5e95\u5c64\u662f\u57fa\u65bc eBPF \u7684\u6280\u8853\uff0c\u5176\u76ee\u7684\u5c31\u662f\u8b93\u4f60\u7684 Kubernetes \u65bc\u8cc7\u5b89\u65b9\u9762\u53ef\u4ee5\u7372\u5f97\u8d85\u7d1a\u5f37\u5927\u7684\u80fd\u529b\uff0c\u5305\u542b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a73\u7d30\u7684\u8996\u89ba\u5316\u529f\u80fd\uff0c\u8b93\u4f60\u53ef\u4ee5\u4e00\u76ee\u77ad\u7136\u5230\u5e95\u7cfb\u7d71\u4e2d\u5404\u9805\u8cc7\u6e90\u7684\u767c\u751f\u904e\u7a0b"),(0,l.kt)("li",{parentName:"ol"},"\u52d5\u614b\u5f37\u5316\uff0c\u53ef\u4ee5\u8b93\u4f60\u900f\u904e Kubernetes CRD, OPA, Json \u7b49\u5404\u7a2e\u683c\u5f0f\u4f86\u63cf\u8ff0\u76f8\u95dc\u898f\u7bc4\uff0c\u7136\u5f8c\u52d5\u614b\u7121\u7e2b\u7684\u5957\u5165\u5230\u4f60\u7684 Kubernetes \u53e2\u96c6\u4e2d")),(0,l.kt)("p",null,"\u63a2\u8a0e Teragon \u524d\uff0c\u8981\u5148\u7406\u89e3\u4ee5\u524d\u76ee\u524d\u5df2\u77e5\u7684\u76f8\u95dc\u89e3\u6c7a\u65b9\u6848\u6709\u54ea\u4e9b\uff0c\u800c\u9019\u4e9b\u89e3\u6c7a\u65b9\u6848\u53c8\u6709\u4ec0\u9ebc\u6a23\u7684\u512a\u7f3a\u9ede\uff0c\u5305\u542b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"App Instrumentation"),(0,l.kt)("li",{parentName:"ol"},"LD_PRELOAD"),(0,l.kt)("li",{parentName:"ol"},"ptrace"),(0,l.kt)("li",{parentName:"ol"},"seccomp"),(0,l.kt)("li",{parentName:"ol"},"SELinux/LSM"),(0,l.kt)("li",{parentName:"ol"},"Kernel Module")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u516d\u500b\u65b9\u5f0f\u90fd\u6709\u5404\u81ea\u7684\u7279\u9ede\uff0c\u9019\u908a\u7c21\u55ae\u6558\u8ff0"),(0,l.kt)("p",null,"App Instrumentation\nO \u6548\u7387\u9ad8\uff0c\u53ef\u4ee5\u770b\u5230\u975e\u5e38\u7d30\u90e8\u7684\u8cc7\u8a0a\nX \u7a0b\u5f0f\u78bc\u9700\u8981\u4fee\u6539\uff0c\u4e0d\u5920\u900f\u660e\nX \u55ae\u7d14\u7684\u8996\u89ba\u5316\uff0c\u4e0d\u80fd\u5957\u5165\u8cc7\u5b89\u898f\u5247\u4f86\u9632\u8b77\u61c9\u7528\u7a0b\u5f0f\nX \u61c9\u7528\u7a0b\u5f0f\u70ba\u4e3b\uff0c\u4e0d\u80fd\u7406\u89e3\u6574\u500b\u7cfb\u7d71\u7684\u72c0\u6cc1"),(0,l.kt)("p",null,"LD_PRELOAD (\u52d5\u614b\u5207\u63db\u8f09\u5165\u7684 Library )\nO \u6548\u7387\u9ad8\nO \u61c9\u7528\u7a0b\u5f0f\u4e0d\u9700\u8981\u4fee\u6539\nX \u5982\u679c\u662f Static Llinking \u7684\u61c9\u7528\u7a0b\u5f0f\u90a3\u5c31\u6c92\u6709\u7528\u4e86\nX \u5e7e\u4e4e\u6c92\u6709\u4ec0\u9ebc\u89c0\u5bdf\u6027\u53ef\u8a00"),(0,l.kt)("p",null,"ptrace (\u900f\u904e kernel \u63d0\u4f9b\u7684\u529f\u80fd\u4f86\u6aa2\u8996\u4f7f\u7528\u7684 syscall)\nO \u900f\u660e\uff0c\u61c9\u7528\u7a0b\u5f0f\u4e0d\u7528\u4fee\u6539\nX \u6548\u80fd\u8ca0\u64d4\u6bd4\u8f03\u9ad8\nX \u61c9\u7528\u7a0b\u5f0f\u6709\u8fa6\u6cd5\u5075\u6e2c\u5230\u81ea\u5df1\u76ee\u524d\u88ab ptrace \u7d66\u76e3\u63a7\nX \u6574\u9ad4\u7bc4\u570d\u53ea\u80fd\u91dd\u5c0d syscall(\u7cfb\u7d71\u547c\u53eb)"),(0,l.kt)("p",null,"seccomp (\u53ef\u4ee5\u904e\u6ffe\u61c9\u7528\u7a0b\u5f0f\u547c\u53eb\u7684 syscall)\nO \u6709\u6548\u7387\uff0c\u61c9\u7528\u7a0b\u5f0f\u4e0d\u9700\u8981\u4fee\u6539\nX \u898f\u5247\u53ea\u80fd\u91dd\u5c0d syscall \u53bb\u963b\u64cb\nX \u6c92\u6709\u5f88\u597d\u7684\u8996\u89ba\u5316\u65b9\u5f0f"),(0,l.kt)("p",null,"SELinux/LSM (Kernel \u5167\u5efa\u7684 security \u6846\u67b6\uff0c\u53ef\u4ee5\u91dd\u5c0d\u5b58\u53d6\u53bb\u63a7\u5236)\nO \u6709\u6548\u7387\uff0c\u61c9\u7528\u7a0b\u5f0f\u4e0d\u9700\u8981\u4fee\u6539\nO \u53ef\u9632 TOCTTOU \u653b\u64ca\nX \u91dd\u5c0d Contaienr/Kubernetes \u7684\u6574\u5408\u5f88\u6709\u9650\nX \u4e0d\u5bb9\u6613\u64f4\u5145\nX \u8981\u91dd\u5c0d\u653b\u64ca\u985e\u578b\u53bb\u8a2d\u5b9a"),(0,l.kt)("p",null,"Kernel Module\nO \u6709\u6548\u7387\uff0c\u61c9\u7528\u7a0b\u5f0f\u4e0d\u9700\u8981\u4fee\u6539\nO \u4e0d\u7528\u4fee\u6539 Kernel \u5c31\u53ef\u4ee5\u64f4\u5145\u529f\u80fd\nX \u4e0d\u662f\u6bcf\u500b\u74b0\u5883\u90fd\u5141\u8a31\u4f7f\u7528\u8005\u53bb\u8f09\u5165 kenrel Module\nX Module \u6709\u554f\u984c\u6703\u6253\u7206\u4f60\u7684 Kernel\nX \u6c92\u8fa6\u6cd5\u7121\u7e2b\u5347\u7d1a\uff0c\u610f\u5473\u4f60\u5347\u7d1a\u529f\u80fd\u7684\u904e\u7a0b\u4e2d\u5fc5\u9808\u8981\u5c07kernel module\u7d66 uninstall \uff0c\u7136\u5f8c\u91cd\u65b0\u5b89\u88dd"),(0,l.kt)("p",null,"\u4e0a\u5217\u516d\u500b\u89e3\u6c7a\u65b9\u6848\u6709\u7684\u53ea\u80fd\u6aa2\u8996\u76f8\u95dc\u6d41\u7a0b\uff0c\u6709\u7684\u53ea\u80fd\u8a2d\u5b9a\u898f\u5247\u53bb\u9632\u8b77\uff0c\u4f46\u662f\u5c31\u662f\u6c92\u6709\u4e00\u500b\u5de5\u5177\u53ef\u4ee5\u5168\u9762\u8655\u7406\uff0c\u800c\u57fa\u65bc eBPF \u5be6\u4f5c\u7684 Tetragon \u5247\u662f\u4e00\u500b\n\u80fd\u5920\u63d0\u4f9b\u5169\u9805\u529f\u80fd\u7684\u5168\u65b0\u89e3\u6c7a\u65b9\u6848\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u8cc7\u5b89\u9632\u8b77\u65b9\u9762\uff0c Tetragon \u63a1\u53d6\u7684\u662f\u66f4\u5e95\u5c64\u7684\u6982\u5ff5\uff0c\u4e0d\u53bb\u63a2\u8a0e\u7279\u5b9a\u7684 CVE \u64cd\u4f5c\u624b\u6cd5\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5f9e\u5e7e\u500b\u5e38\u898b\u7684\u653b\u64ca\u65b9\u5f0f\u4f86\u9632\u79a6\u3002\n\u5047\u5982\u6709\u4efb\u4f55\u61c9\u7528\u7a0b\u5f0f\u6709\u4e0d\u9810\u671f\u7684\u4e0b\u5217\u884c\u70ba\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5c07\u8a72 Process \u79fb\u9664"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5230\u4e0d\u8a72\u4f7f\u7528\u7684 capability"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5230\u4e0d\u8a72\u4f7f\u7528\u7684 linux namespace"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5230\u4e0d\u8a72\u4f7f\u7528\u7684 binary"),(0,l.kt)("li",{parentName:"ol"},"\u770b\u5230\u4e0d\u8a72\u51fa\u73fe\u7684 Pid "),(0,l.kt)("li",{parentName:"ol"},"...")),(0,l.kt)("p",null,"\u9019\u4e9b\u898f\u5247\u90fd\u53ef\u4ee5\u900f\u904e Kubernetes CRD \u4f86\u63cf\u8ff0\uff0c\u7576\u9019\u4e9b\u898f\u5247\u88ab\u9001\u5230 Kubernetes \u5f8c\uff0c\u76f8\u95dc\u7684 Controller \u5c31\u6703\u5c07\u898f\u5247\u7d66\u8f49\u63db\u5f8c\u7e8c\u8b93 eBPF \u4f86\u8655\u7406\n\u6b64\u5916\u56e0\u70ba eBPF \u4ee5\u53ca kprobe \u7684\u67b6\u69cb\uff0cTetragon \u80fd\u5920\u770b\u5230\u975e\u5e38\u591a kernel \u7684\u8cc7\u6e90\u5b58\u53d6\u8207\u64cd\u4f5c\uff0c\u8b6c\u5982"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"syscall(\u7cfb\u7d71\u547c\u53eb)"),(0,l.kt)("li",{parentName:"ol"},"Virtual FS"),(0,l.kt)("li",{parentName:"ol"},"TCP/IP"),(0,l.kt)("li",{parentName:"ol"},"namespace"),(0,l.kt)("li",{parentName:"ol"},"Storage"),(0,l.kt)("li",{parentName:"ol"},"Network")),(0,l.kt)("p",null,"Tetragon \u6536\u96c6\u4e0a\u5217\u4e0d\u540c\u8cc7\u8a0a\u7684\u8cc7\u6599\u5f8c\u9032\u884c\u4e8c\u6b21\u8655\u7406\uff0c\u900f\u904e\u7cbe\u7f8e\u7684\u7db2\u9801\u4f86\u986f\u793a\u7cfb\u7d71\u4e2d\u7684\u5404\u7a2e\u8cc7\u8a0a\uff0c\u9019\u4e9b\u8cc7\u8a0a\u53ef\u4ee5\u63d0\u4f9b\u5305\u542b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u54ea\u4e9b Pod \u4e00\u76f4\u5b58\u53d6 /etc/passwd, \u63a1\u7528\u4f55\u7a2e\u65b9\u5f0f\u5b58\u53d6 /etc/passwd"),(0,l.kt)("li",{parentName:"ol"},"\u7279\u5b9a Pod \u4e2d\u5c0d\u5916\u7684\u7db2\u8def\u6d41\u91cf\u8cc7\u8a0a\uff0c\u5f9e\u5c01\u5305\u5167\u5bb9\u5230\u7528\u4ec0\u9ebc\u6307\u4ee4\u53bb\u5b58\u53d6\u90fd\u53ef\u4ee5\u770b\u5149\u5149"),(0,l.kt)("li",{parentName:"ol"},"...")),(0,l.kt)("p",null,"eBPF \u7684\u61c9\u7528\u6108\u4f86\u6108\u591a\uff0c\u800c\u76ee\u524d\u770b\u8d77\u4f86 isovalent \u66f4\u662f Kubernetes \u751f\u614b\u7cfb\u4e2d\u7684\u9818\u982d\u7f8a\uff0c\u96d6\u7136\u4e0d\u78ba\u5b9a\u672a\u4f86\u662f\u5426\u80fd\u5920\u88ab\u5ee3\u6cdb\u63a1\u7528\uff0c\u4f46\u662f\u81f3\u5c11\u9019\u65b9\u9762\u9084\u6c92\u6709\u770b\u5230\u5176\u4ed6\u89e3\u6c7a\u65b9\u6848\u6709\u9019\u9ebc\u7a4d\u6975\u7684\u57fa\u65bc eBPF \u4f86\u958b\u767c\n\u6709\u9918\u529b\u7684\u8a71\u82b1\u9ede\u6642\u9593\u5b78\u7fd2\u4e00\u4e0b eBPF \u7684\u6982\u5ff5\u53ef\u4ee5\u52a0\u5f37\u81ea\u5df1\u5c0d\u65bc\u9019\u985e\u578b\u6587\u7ae0\u7684\u901f\u5ea6\u8207\u7406\u89e3\u5ea6"))}m.isMDXComponent=!0}}]);