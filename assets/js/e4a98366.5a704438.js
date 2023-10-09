"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[5825],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>N});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},k=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=u(l),c=r,N=s["".concat(i,".").concat(c)]||s[c]||m[c]||a;return l?n.createElement(N,o(o({ref:t},k),{},{components:l})):n.createElement(N,o({ref:t},k))}));function N(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},81627:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=l(87462),r=(l(67294),l(3905));const a={slug:"k8s-network-debug",title:"Kubernetes \u7db2\u8def\u9664\u932f\u4e4b\u65c5",keywords:["Kubernetes","Network"],tags:["Kubernetes","Network","DevOps"],description:"\u6dfa\u8ac7\u5982\u4f55\u9664\u932f Kubernetes \u4e2d\u7684\u5404\u7a2e\u7db2\u8def\u554f\u984c",authors:"hwchiu",date:new Date("2023-03-05T15:35:57.000Z")},o="\u524d\u8a00",p={unversionedId:"techPost/2023/k8s-network-debug",id:"techPost/2023/k8s-network-debug",title:"Kubernetes \u7db2\u8def\u9664\u932f\u4e4b\u65c5",description:"\u6dfa\u8ac7\u5982\u4f55\u9664\u932f Kubernetes \u4e2d\u7684\u5404\u7a2e\u7db2\u8def\u554f\u984c",source:"@site/docs/techPost/2023/k8s-network-debug.md",sourceDirName:"techPost/2023",slug:"/techPost/2023/k8s-network-debug",permalink:"/docs/techPost/2023/k8s-network-debug",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Network",permalink:"/docs/tags/network"},{label:"DevOps",permalink:"/docs/tags/dev-ops"}],version:"current",frontMatter:{slug:"k8s-network-debug",title:"Kubernetes \u7db2\u8def\u9664\u932f\u4e4b\u65c5",keywords:["Kubernetes","Network"],tags:["Kubernetes","Network","DevOps"],description:"\u6dfa\u8ac7\u5982\u4f55\u9664\u932f Kubernetes \u4e2d\u7684\u5404\u7a2e\u7db2\u8def\u554f\u984c",authors:"hwchiu",date:"2023-03-05T15:35:57.000Z"},sidebar:"techPost",previous:{title:"\u8b93\u4f60\u7684 Container Image \u9003\u812b Kubelet Image GC \u7684\u9b54\u638c",permalink:"/docs/techPost/2023/k8s-gc"},next:{title:"\u5f9e KIND \u74b0\u5883\u4e2d\u5b78\u5230\u7684 DNS \u5c0f\u8da3\u805e",permalink:"/docs/techPost/2023/kind-fun-facts"}},i={},u=[{value:"\u5357\u5317\u5411",id:"\u5357\u5317\u5411",level:2},{value:"\u6771\u897f\u5411",id:"\u6771\u897f\u5411",level:2},{value:"\u5e95\u5c64\u57fa\u790e\u5efa\u8a2d",id:"\u5e95\u5c64\u57fa\u790e\u5efa\u8a2d",level:2},{value:"Kubernetes \u5167\u5efa\u7db2\u8def\u529f\u80fd",id:"kubernetes-\u5167\u5efa\u7db2\u8def\u529f\u80fd",level:2},{value:"CNI",id:"cni",level:2},{value:"\u7b2c\u4e09\u65b9\u89e3\u6c7a\u65b9\u6848\u6574\u5408",id:"\u7b2c\u4e09\u65b9\u89e3\u6c7a\u65b9\u6848\u6574\u5408",level:2}],k={toc:u},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Kubernetes \u591a\u7bc0\u9ede\u67b6\u69cb\u7684\u8a2d\u8a08\u8207\u4f7f\u7528\u8005\u4ecb\u9762\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u8f15\u9b06\u7684\u90e8\u5c6c\u61c9\u7528\u7a0b\u5f0f\u5230\u6240\u8b02\u7684\u591a\u7bc0\u9ede\u74b0\u5883\uff0c\u7279\u5225\u662f\u7db2\u8def\u90e8\u5206\u5247\u662f\u900f\u904e\u7c21\u6613\u7684\u62bd\u8c61\u5c64\u4f86\u7c21\u5316\u6240\u6709\u5e95\u5c64\u5c01\u5305\u6d41\u5411\u8207\u64cd\u4f5c\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u66f4\u7c21\u6613\u5feb\u901f\u7684\u53bb\u5b58\u53d6\u90e8\u7f72\u7684 Kubernetes \u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u6703\u5148\u5feb\u901f\u7684\u7c21\u7565\u4e00\u4e0b Kubernetes \u5167\u7684\u7db2\u8def\u6d41\u91cf\uff0c\u4e26\u4e14\u63a2\u8a0e\u7576\u9047\u5230\u7db2\u8def\u554f\u984c\u6642\u61c9\u8a72\u4fdd\u6709\u4f55\u7a2e\u601d\u8def\u4f86\u9762\u5c0d\u554f\u984c\uff0c\u4e26\u4e14\u9010\u4e00\u64ca\u7834\u627e\u5230\u554f\u984c\u9ede"),(0,r.kt)("h1",{id:"kubernetes-\u7db2\u8def"},"Kubernetes \u7db2\u8def"),(0,r.kt)("p",null,"Kubernetes \u662f\u4e00\u500b\u591a\u7bc0\u9ede\u7684\u53e2\u96c6\u7cfb\u7d71\uff0c\u4ee5\u53e2\u96c6\u70ba\u57fa\u6e96\u53bb\u89c0\u770b\u5c01\u5305\u6d41\u5411\uff0c\u5927\u62b5\u4e0a\u53ef\u4ee5\u5206\u6210\u6771\u897f\u5411\u8207\u5357\u5317\u5411\u3002"),(0,r.kt)("h2",{id:"\u5357\u5317\u5411"},"\u5357\u5317\u5411"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5357\u5317\u5411")," \u4ee3\u8868\u7684\u662f\u6d41\u91cf\u6709\u9032\u51fa\u53e2\u96c6\uff0c\u5c01\u5305\u7684\u4f86\u6e90\u6216\u662f\u76ee\u7684\u6709\u4e00\u7aef\u662f\u4e0d\u5c6c\u65bc\u53e2\u96c6\u7684\u4e00\u90e8\u4efd\u3002"),(0,r.kt)("p",null,"\u5927\u62b5\u4e0a\u53ef\u80fd\u6703\u6709\u5e7e\u7a2e\u6d41\u91cf\u65b9\u5f0f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5916\u90e8\u670d\u52d9 \u5982\u548c\u5b58\u53d6 \u53e2\u96c6\u5167\u670d\u52d9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ingress"),(0,r.kt)("li",{parentName:"ul"},"API-Gateway"),(0,r.kt)("li",{parentName:"ul"},"Load-Balancer"),(0,r.kt)("li",{parentName:"ul"},"...\u7b49"))),(0,r.kt)("li",{parentName:"ol"},"\u53e2\u96c6\u5167\u670d\u52d9 \u5982\u4f55\u5b58\u53d6 \u5916\u90e8\u7db2\u8def ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NAT (Network Address Translation)"),(0,r.kt)("li",{parentName:"ul"},"Internet Gateway")))),(0,r.kt)("p",null,"\u4e0b\u5716\u662f\u4e00\u500b\u7528\u4f86\u63cf\u8ff0\u5357\u5317\u5411\u6d41\u91cf\u7684\u7c21\u6613\u756b\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0U11QvC.png",alt:null})),(0,r.kt)("p",null,"\u9019\u7a2e\u5716\u53ea\u80fd\u55ae\u7d14\u63cf\u8ff0\u5c01\u5305\u7684\u6d41\u91cf\u4ee5\u53ca\u8b93\u5927\u5bb6\u5c0d\u65bc\u6574\u500b\u53e2\u96c6\u5c01\u5305\u6d41\u5411\u6709\u4e00\u9ede\u57fa\u672c\u7684\u6982\u5ff5\uff0c\u5c0d\u65bc\u9664\u932f\u6574\u9ad4\u662f\u4e0d\u5920\u7684\uff0c\u56e0\u6b64\u82e5\u8981\u91dd\u5c0d\u7db2\u8def\u554f\u984c\u9664\u932f\u5fc5\u9808\u8981\u80fd\u5920\u66f4\u7d30\u90e8\u7684\u53bb\u63cf\u8ff0\u6574\u500b\u53c3\u8207\u5230\u7684\u5143\u4ef6\uff0c\u8b6c\u5982\u4e0b\u5716"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/MPkqvsx.jpg",alt:null})),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u8a72 Kubernetes \u53e2\u96c6\u5916\u90e8\u914d\u7f6e\u4e00\u500b Load-Balancer\uff0c\u800c\u8a72 Load-Balancer \u5c07\u5c01\u5305\u6253\u5230\u7bc0\u9ede\u4e0a\u4e26\u4e14\u900f\u904e Service(Node-Port) \u7684\u65b9\u5f0f\u628a\u5c01\u5305\u6253\u5230\u76ee\u6a19 Pod.\n\u800c\u76ee\u6a19 Pod \u5247\u662f\u4f9d\u8cf4 Routing Table \u5c07\u5c01\u5305\u90fd\u8f49\u767c\u5230 NAT Gateway \u8b93 NAT GW \u4f86\u8655\u7406 SNAT \u4e26\u5c07\u5c01\u5305\u7d66\u8f49\u767c\u5230\u5916\u90e8\u7db2\u8def"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u4e0b\u5716\u4e5f\u662f\u53e6\u5916\u4e00\u7a2e\u4e0d\u540c\u7684\u5e95\u5c64\u5be6\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4nydb8X.png",alt:null})),(0,r.kt)("p",null,"Load-Balancer \u8207 Kubernetes Pod \u5929\u751f\u5c31\u64c1\u6709\u5171\u901a\u7684\u80fd\u529b(AWS CNI, Azure CNI)\n\uff0c\u9019\u7a2e\u60c5\u6846\u4e0b Load-Balancer \u5c31\u80fd\u5920\u76f4\u901a Pod \u800c\u4e0d\u9700\u8981\u7d93\u904e\u4efb\u4f55 Service(LB/NodePort) \u4f86\u8655\u7406\u3002\n\u6bcf\u500b\u7bc0\u9ede\u90fd\u4f9d\u8cf4\u5404\u81ea\u7684 NAT \u670d\u52d9\u4f86\u76f4\u63a5\u9032\u884c SNAT \u7684\u8655\u7406\u4e26\u4e14\u76f4\u63a5\u5c07\u7db2\u8def\u9001\u5230\u5916\u90e8\u7db2\u8def\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e09\u7a2e\u7bc4\u4f8b\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HctxXRo.png",alt:null})),(0,r.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u4e0b\u53ef\u80fd\u7684\u60c5\u6cc1\u5c31\u662f\u5916\u90e8\u4f7f\u7528 L4 LoadBalancer \u5c07\u6d41\u91cf\u5168\u90e8\u5c0e\u5411 Kubernetes \u5167\u7684 Ingress Controller\uff0c\u8b93 Ingress \u4f86\u8655\u7406 L7 \u5c64\u7d1a\u7684\u8655\u7406\u8207\u8f49\u767c\u3002\n\u540c\u6642\u74b0\u5883\u67b6\u69cb\u4e2d\u5305\u542b\u4e86 Internal/Public \u5169\u7a2e\u7db2\u8def\uff0c\u7bc0\u9ede\u6703\u6839\u64da\u5c01\u5305\u76ee\u7684\u5730\u642d\u914d Routing Table \u4f86\u6c7a\u5b9a\u5c01\u5305\u7684\u8d70\u5411\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e09\u7a2e\u7bc4\u4f8b\u90fd\u53ef\u4ee5\u9054\u5230\u6700\u521d\u7c21\u6613\u5716\u793a\u7684\u6548\u679c\uff0c\u4f46\u662f\u5176\u5e95\u5c64\u7684\u5be6\u4f5c\u537b\u662f\u622a\u7136\u4e0d\u540c\uff0c\u56e0\u6b64\u82e5\u8981\u91dd\u5c0d\u7db2\u8def\u9664\u932f\u5247\u7b2c\u4e00\u6b65\u9a5f\u5c31\u662f\u8981\u6709\u80fd\u529b\u4e14\u7cfb\u7d71\u5316\u7684\u53bb\u95e1\u8ff0\u7db2\u8def\u5c01\u5305\u4e2d\u7d93\u904e\u7684\u5143\u4ef6\uff0c\u5148\u7406\u89e3\u6d41\u7a0b\u8207\u76f8\u95dc\u5143\u4ef6\u624d\u6709\u8fa6\u6cd5\u9032\u884c\u5f8c\u7e8c\u7684\u9664\u932f"),(0,r.kt)("h2",{id:"\u6771\u897f\u5411"},"\u6771\u897f\u5411"),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6771\u897f\u5411")," \u4ee3\u8868\u5c01\u5305\u65bc\u7bc0\u9ede\u4e2d\u7a7f\u68ad\uff0c\u5c01\u5305\u7684\u4f86\u6e90\u8207\u76ee\u7684\u5169\u7aef\u90fd\u662f\u5c6c\u65bc\u53e2\u96c6\u5167\u7684\u4e00\u90e8\u5206\uff0c\u8b6c\u5982\u5c6c\u65bc\u4e0d\u540c\u7684 Pod \u6216\u662f\u7bc0\u9ede\u672c\u8eab\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b58\u53d6\u65b9\u5411",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pod <--\x3e Service"),(0,r.kt)("li",{parentName:"ul"},"Pod <--\x3e Pod"),(0,r.kt)("li",{parentName:"ul"},"Pod <--\x3e Node"))),(0,r.kt)("li",{parentName:"ol"},"\u5b58\u53d6\u7bc4\u570d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5169\u8005\u5c6c\u65bc\u540c\u7bc0\u9ede"),(0,r.kt)("li",{parentName:"ul"},"\u5169\u8005\u8de8\u7bc0\u9ede")))),(0,r.kt)("p",null,"\u6771\u897f\u5411\u4f86\u8aaa\uff0c\u6700\u7c21\u55ae\u7684\u5c31\u662f Pod to Pod \u4e4b\u9593\u7684\u5b58\u53d6"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/6Sqxou4.png",alt:null})),(0,r.kt)("p",null,"\u7136\u800c\u5927\u90e8\u5206\u7684\u61c9\u7528\u7a0b\u5f0f\u70ba\u4e86\u642d\u914d Deployment \u5c0d Pod \u751f\u547d\u9031\u671f\u7684\u7ba1\u7406\uff0c\u901a\u5e38\u6703\u4f7f\u7528 Service \u4f86\u8655\u7406 Pod \u7684 IP \u8207\u5b58\u53d6\uff0c\u5982\u4e0b\u5716"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/TH8cbFw.png",alt:null})),(0,r.kt)("p",null,"\u57fa\u65bc K8s Service \u7684\u6982\u5ff5\uff0c\u6240\u6709\u9001\u5230 Service \u7684\u5c01\u5305\u6703\u4f9d\u8cf4 Kube-proxy \u7684\u8a2d\u5b9a\u4f86\u8655\u7406\u8ca0\u8f09\u5e73\u8861\u7684\u6289\u64c7(iptables, ipvs)."),(0,r.kt)("p",null,"\u5f9e\u4ee5\u4e0a\u7684\u63a2\u8a0e\u53ef\u4ee5\u57fa\u672c\u77e5\u9053\u7db2\u8def\u4e16\u754c\u6c92\u6709\u4e00\u500b\u842c\u7528\u67b6\u69cb\u5716\uff0c\u4e0d\u540c\u7684\u74b0\u5883\u8207\u60c5\u5883\u90fd\u6703\u6709\u4e0d\u540c\u7684\u7db2\u8def\u6d41\u5411\uff0c\u56e0\u6b64\u63a2\u8a0e\u7db2\u8def\u554f\u984c\u7684\u57fa\u672c\u539f\u5247\u5c31\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u91d0\u6e05\u8ab0\u662f\u9001\u7aef\uff0c\u8ab0\u662f\u6536\u7aef"),(0,r.kt)("li",{parentName:"ol"},"\u91d0\u6e05\u9001\u7aef\u8207\u6536\u7aef\u8207 Kubernetes \u7684\u5b9a\u4f4d"),(0,r.kt)("li",{parentName:"ol"},"\u91d0\u6e05\u5c01\u5305\u6d41\u5411\u4e2d\u7d93\u904e\u7684\u6240\u6709\u5143\u4ef6\u70ba\u4f55")),(0,r.kt)("h1",{id:"kubernetes-\u7684\u7db2\u8def\u5143\u4ef6"},"Kubernetes \u7684\u7db2\u8def\u5143\u4ef6"),(0,r.kt)("p",null,"K8s \u7db2\u8def\u67b6\u69cb\u57fa\u672c\u4e0a\u6211\u8a8d\u70ba\u53ef\u4ee5\u5206\u6210\u56db\u500b\u9762\u5411\u53bb\u63a2\u8a0e\uff0c\u9019\u56db\u500b\u9762\u5411\u4e92\u76f8\u6574\u5408\u4f7f\u5f97 K8s \u63d0\u4f9b\u5b8c\u5584\u7684\u7db2\u8def\u529f\u80fd\uff0c\u4f46\u662f\u53ea\u8981\u5176\u4e2d\u6709\u4efb\u4f55\u4e00\u500b\u5730\u65b9\u51fa\u932f\u5c31\u6703\u4f7f\u5f97\u6574\u500b\u7db2\u8def\u4e0d\u901a\u4e0d\u5982\u9810\u671f\uff0c\u9019\u500b\u9762\u5411\u5206\u5225\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5e95\u5c64\u57fa\u790e\u5efa\u8a2d"),(0,r.kt)("li",{parentName:"ol"},"Kubernetes \u5167\u5efa\u7db2\u8def\u529f\u80fd"),(0,r.kt)("li",{parentName:"ol"},"CNI"),(0,r.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u89e3\u6c7a\u65b9\u6848\u6574\u5408")),(0,r.kt)("h2",{id:"\u5e95\u5c64\u57fa\u790e\u5efa\u8a2d"},"\u5e95\u5c64\u57fa\u790e\u5efa\u8a2d"),(0,r.kt)("p",null,"\u5c0d\u65bc\u96f2\u7aef\u4f7f\u7528\u8005\u4f86\u8aaa\uff0c\u9019\u90e8\u5206\u7684\u8a2d\u5b9a\u5c31\u662f\u4ef0\u8cf4\u96f2\u7aef\u696d\u8005\u53bb\u5b8c\u6210\uff0c\u4f7f\u7528\u8005\u5247\u662f\u82b1\u9322\u5efa\u8a2d\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"VPC"),(0,r.kt)("li",{parentName:"ol"},"Subnet"),(0,r.kt)("li",{parentName:"ol"},"Firewall"),(0,r.kt)("li",{parentName:"ol"},"Routing"),(0,r.kt)("li",{parentName:"ol"},"NAT/Internet GW")),(0,r.kt)("p",null,"\u4f46\u662f\u5c0d\u65bc\u5730\u7aef\u4eba\u54e1\u4f86\u8aaa\uff0c\u9019\u4e9b\u6771\u897f\u5c31\u4e0d\u662f\u7528\u6ed1\u9f20\u6216\u662f Terraform \u5beb\u5beb\u5c31\u6703\u7522\u751f\u7684\u8cc7\u6e90\uff0c\u800c\u662f\u9700\u8981\u5be6\u969b\u4e0a\u67b6\u6a5f\u5668\u4f48\u7dda\u8207\u6a5f\u623f\u7ba1\u7406\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7bc0\u9ede\u8207\u7bc0\u9ede\u4e4b\u9593\u7684\u7db2\u8def\u9023\u7dda\uff0c\u900f\u904e L2 Switch, VLAN... \u7b49\u4e32\u63a5"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u672c\u7684\u7bc0\u9ede IP \u767c\u653e\uff0c\u662f\u975c\u614b IP \u9084\u662f\u52d5\u614b IP \u53d6\u5f97"),(0,r.kt)("li",{parentName:"ol"},"DNS Server \u7684\u5efa\u7f6e\u8207\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u8de8\u6a5f\u6ac3\u7684 Switch/Router \u7b49")),(0,r.kt)("p",null,"\u53ef\u80fd\u67b6\u69cb\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/munPePk.png",alt:null})),(0,r.kt)("h2",{id:"kubernetes-\u5167\u5efa\u7db2\u8def\u529f\u80fd"},"Kubernetes \u5167\u5efa\u7db2\u8def\u529f\u80fd"),(0,r.kt)("p",null,"Kubernetes \u5167\u5efa\u591a\u7a2e\u7db2\u8def\u76f8\u95dc\u8cc7\u6e90\uff0c\u5305\u542b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kubernetes Service\n\u9019\u90e8\u5206\u4e3b\u8981\u662f\u53d6\u6c7a\u65bc kube-proxy \u7684\u5be6\u4f5c\uff0c\u9810\u8a2d\u7684 iptables \u6216\u662f\u4fee\u6539\u70ba ipvs\uff0c\u9664\u4e86\u57fa\u672c\u898f\u5247\u5339\u914d\u65b9\u5f0f\u5916\u9084\u6709\u8ca0\u8f09\u5e73\u8861\u6f14\u7b97\u6cd5\u7684\u5be6\u4f5c\u4e0d\u540c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kubernetes Ingress\nKubernetes \u53ea\u63d0\u4f9b\u55ae\u7d14\u7684\u4ecb\u9762\uff0c\u5be6\u4f5c\u5247\u662f\u6839\u64da\u5b89\u88dd\u54ea\u5957 Ingress Controller\uff0c\u4e0d\u540c\u5957\u7684\u5be6\u4f5c\u7d30\u7bc0\u5247\u4e0d\u540c\uff0c\u8b6c\u5982 Nginx, Kong, Tarefik...\u7b49")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CoreDNS\n\u7528\u4f86\u8655\u7406\u57fa\u672c\u7684 DNS \u8acb\u6c42\uff0c\u6240\u6709\u5167\u90e8 k8s service \u7684 DNS \u90fd\u6703\u7531 CoreDNS \u4f86\u89e3\u6790\u8655\u7406\uff0c\u7279\u5225\u662f\u6709\u4e9b\u7db2\u8def\u74b0\u5883\u9084\u60f3\u8981\u8207\u5916\u90e8 External DNS \u9032\u884c\u6574\u5408\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Network Policy\n\u91dd\u5c0d Pod \u9032\u884c\u4e9b\u8a31\u7684\u9632\u706b\u7246\u898f\u5247\uff0c\u9019\u90e8\u5206\u4e5f\u662f\u55ae\u7d14\u7684\u4ecb\u9762\uff0c\u5be6\u4f5c\u90fd\u662f\u7531\u5e95\u5c64\u7684 CNI \u53bb\u5b8c\u6210\u3002"))),(0,r.kt)("p",null,"\u5c07\u4e0a\u8ff0\u7684\u6982\u5ff5\u7d66\u6574\u5408\u5230\u524d\u8ff0\u5716\u7247\u5f8c\uff0c\u53ef\u80fd\u7684\u67b6\u69cb\u5982\u4e0b\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/88hCder.jpg",alt:null})),(0,r.kt)("h2",{id:"cni"},"CNI"),(0,r.kt)("p",null,"Contaienr Network Interface(CNI) \u4e3b\u8981\u7528\u4f86\u5e6b\u5fd9\u8655\u7406"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pod \u7684 IP \u5206\u914d (IPAM)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7bc0\u9ede\u4e0a\u5206\u914d\u79c1\u6709 IP"),(0,r.kt)("li",{parentName:"ul"},'\u7bc0\u9ede\u4e0a\u5206\u914d\u4e00\u500b "\u57fa\u790e\u5e95\u5c64\u67b6\u69cb" \u53ef\u4ee5\u76f4\u63a5\u5b58\u53d6\u7684 IP\uff0c\u8b6c\u5982 EKS/AKS \u4e0a\u7684 IP \u5c31\u4f86\u81ea VPC \u5167\u7684\u53ef\u7528 IP'))),(0,r.kt)("li",{parentName:"ol"},"\u8de8\u7bc0\u9ede\u4e4b\u9593 Pod \u7684\u5c01\u5305\u8655\u7406")),(0,r.kt)("p",null,"\u4e00\u500b\u7c21\u6613\u7684\u6982\u5ff5\u5c31\u662f\uff0c\u6bcf\u500b\u7bc0\u9ede\u4e0a\u7684\u79c1\u6709IP (Pod) \u8981\u5982\u4f55\u8207\u5176\u4ed6\u7bc0\u9ede\u4e0a\u7684\u79c1\u6709 IP (Pod) \u9032\u884c\u8655\u7406\uff1f\n\u4e0d\u540c CNI \u90fd\u63a1\u53d6\u4e0d\u540c\u7684\u7db2\u8def\u6280\u8853\u8655\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Calico (BGP/IPIP)\n- Flannel (VXLAN)\n- Cilium (eBPF)\n- OVS (OpenFlow)\n- Cloud-Provider specified (AWS/Azure)\n")),(0,r.kt)("p",null,"\u4e00\u5207\u5806\u758a\u8d77\u4f86\u5f8c\u7684\u67b6\u69cb\u5716\u5927\u81f4\u4e0a\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/JRlBmpi.jpg",alt:null})),(0,r.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u89e3\u6c7a\u65b9\u6848\u6574\u5408"},"\u7b2c\u4e09\u65b9\u89e3\u6c7a\u65b9\u6848\u6574\u5408"),(0,r.kt)("p",null,"\u5269\u4e0b\u7684\u984d\u5916\u529f\u80fd\u6211\u90fd\u6b78\u985e\u65bc\u7b2c\u4e09\u65b9\u529f\u80fd\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Service Mesh"),(0,r.kt)("li",{parentName:"ol"},"Cluster Federation"),(0,r.kt)("li",{parentName:"ol"},"... \u7b49")),(0,r.kt)("p",null,'\u9019\u4e9b\u529f\u80fd\u90fd\u8981\u5efa\u7acb\u65bc\u4e00\u500b "\u53ef\u6b63\u5e38\u904b\u4f5c" \u7684 Kubernetes \u4e0a\uff0c\u540c\u6642\u758a\u52a0\u66f4\u591a\u529f\u80fd\u4f86\u63d0\u4f9b\u66f4\u9032\u968e\u7684\u7db2\u8def\u8655\u7406\uff0c\u7136\u800c\u4e00\u9ad4\u5169\u9762\uff0c\u9032\u968e\u7684\u7db2\u8def\u529f\u80fd\u4e5f\u610f\u5473\u8457\u6574\u500b\u67b6\u69cb\u66f4\u70ba\u8907\u96dc\uff0c\u5982\u679c\u6c92\u6709\u8fa6\u6cd5\u638c\u63e1\u9019\u4e9b\u6982\u5ff5\u8207\u539f\u7406\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u4e00\u500b\u6309\u7167 README.MD \u4f86\u64cd\u4f5c\u7684 YAML \u5de5\u7a0b\u5e2b\u3002\nYAML \u5de5\u7a0b\u5e2b\u53ef\u7528\uff0c\u74b0\u5883\u53ef\u901a\uff0c\u529f\u80fd\u53ef\u884c\uff0c\u56f0\u64fe\u5c31\u5728\u65bc\u5982\u4f55\u5ba2\u88fd\u5316\uff0c\u5982\u4f55\u9664\u932f\uff0c\u5982\u4f55\u6839\u64da\u9700\u6c42\u8abf\u6574\u67b6\u69cb'),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u5047\u8a2d Cluster Federation \u5efa\u7acb\u5f8c\uff0c\u6709\u53ef\u80fd\u6703\u8b8a\u6210\u5982\u4e0b\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/PpgV90m.jpg",alt:null})),(0,r.kt)("h1",{id:"kubernetes-\u7684\u9664\u932f\u601d\u8def"},"Kubernetes \u7684\u9664\u932f\u601d\u8def"),(0,r.kt)("p",null,"\u7528\u4e0a\u8ff0\u7684\u57fa\u672c\u6982\u5ff5\u6558\u8ff0\u53ef\u5f97\u77e5\uff0c\u7db2\u8def\u7528\u8d77\u4f86\u975e\u5e38\u7c21\u55ae\u4f46\u662f\u5be6\u969b\u4e0a\u80cc\u5f8c\u727d\u626f\u7684\u5143\u4ef6\u975e\u5e38\u591a\uff0c\u7279\u5225\u662f\u7576\u74b0\u5883\u5b89\u88dd\u6108\u4f86\u6108\u591a\u7684\u7db2\u8def\u529f\u80fd\u6642\uff0c\u6108\u4f86\u6108\u591a\u7684\u5143\u4ef6\u727d\u626f\u5176\u4e2d\uff0c\u56e0\u6b64\u9047\u5230\u7db2\u8def\u554f\u984c\u7684\u601d\u8def\u6211\u63a8\u85a6\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u91d0\u6e05\u65b9\u5411\u6027\uff0c\u5230\u5e95\u554f\u984c\u662f\u5357\u5317\u5411\u9084\u662f\u6771\u897f\u5411?"),(0,r.kt)("li",{parentName:"ol"},"\u554f\u984c\u767c\u751f\u9ede\uff0c\u5230\u5e95\u554f\u984c\u662f\u5c6c\u65bc\u54ea\u500b\u5c64\u7d1a\uff1f\n\u662f\u57fa\u790e\u5efa\u8a2d\u51fa\u554f\u984c? K8s \u5167\u5efa\u529f\u80fd\u6c92\u8a2d\u5b9a\u597d\uff1f CNI \u51fa\u554f\u984c\u9084\u662f\u7b2c\u4e09\u65b9\u6574\u5408\u7684\u670d\u52d9\u6709 Bug?")),(0,r.kt)("p",null,"\u7279\u5225\u7279\u5225\u91cd\u8981\u7684\u4e8b\u60c5\u662f\uff0c\u7db2\u8def\u554f\u984c\u5343\u842c\u5343\u842c\u4e0d\u8981\u7528\u5634\u9664\u932f\uff0c\u6bcf\u500b\u4eba\u5c0d\u7db2\u8def\u7684\u6982\u5ff5\u8207\u80cc\u666f\u77e5\u8b58\u4e0d\u540c\uff0c\u55ae\u7d14\u9760\u5634\u5df4\u7528\u8ac7\u6709\u6642\u5019\u5f88\u96e3\u6709\u4e00\u500b\u76f8\u540c\u7684\u7406\u89e3\u8207\u5171\u8b58\uff0c\u6700\u597d\u7684\u505a\u6cd5\u5c31\u662f\u756b\u5716\uff0c\u5c07\u5716\u756b\u51fa\u4f86\u9010\u4e00\u91d0\u6e05\u7e2e\u5c0f\u554f\u984c\u767c\u751f\u9ede\u3002"),(0,r.kt)("p",null,"\u70ba\u4e86\u6709\u6548\u7684\u5be6\u4f5c\u4e0a\u8ff0\u601d\u8def\uff0c\u53ef\u4ee5\u63a1\u7528\u4e00\u7a2e\u65b9\u5f0f\u4f86\u8655\u7406"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u756b\u51fa\u6574\u500b\u7cfb\u7d71\u67b6\u69cb\u5716"),(0,r.kt)("li",{parentName:"ol"},"\u6a19\u793a\u51fa\u4f60\u7684\u7db2\u8def\u60c5\u5883\uff0c\u8ab0\u662f\u767c\u9001\u7aef\uff0c\u8ab0\u662f\u6536\u7aef\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u81ea\u5df1\u60f3\u50cf\u6210\u4e00\u500b\u5c01\u5305\uff0c\u65bc\u6574\u500b\u67b6\u69cb\u5716\u4e0a\u9010\u4e00\u89e3\u91cb\u9019\u500b\u5c01\u5305\u6703\u600e\u9ebc\u6d41\u52d5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u4e00\u500b\u90e8\u5206\u6c92\u6709\u8fa6\u6cd5\u89e3\u91cb\uff0c\u5c31\u4ee3\u8868\u4f60\u5c0d\u9019\u500b\u7db2\u8def\u67b6\u69cb\u9084\u662f\u4e0d\u5920\u719f\u6089\uff0c\u7e7c\u7e8c\u5ff5\u66f8\u5b78\u7fd2"))),(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u4e0a\u8ff0\u904e\u7a0b\u70ba\u57fa\u790e\u958b\u59cb\u9664\u932f\uff0c\u7e2e\u5c0f\u554f\u984c\u7684\u53ef\u80fd\u7bc4\u570d\uff0c\u91dd\u5c0d\u7bc4\u570d\u5167\u53ef\u80fd\u662f\u554f\u984c\u7684\u5143\u4ef6\u9032\u884c\u9664\u932f\uff0c\u4e0d\u505c\u5faa\u74b0\u6574\u500b\u6d41\u7a0b\u6700\u5f8c\u5b9a\u4f4d\u6574\u500b\u554f\u984c\u767c\u751f\u9ede")),(0,r.kt)("p",null,'\u4ee5\u4e0b\u662f\u4e00\u500b "\u6211\u7684 Pod \u900f\u904e Service \u6c92\u6709\u8fa6\u6cd5\u5b58\u53d6\u76ee\u6a19 Pod" \u7684\u7bc4\u4f8b'),(0,r.kt)("p",null,"\u7c21\u55ae\u67b6\u69cb\u5716\u756b\u8d77\u4f86\u5c31\u6703\u662f\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4unDnS4.png",alt:null})),(0,r.kt)("p",null,"\u4f46\u662f\u9019\u5f35\u5716\u53ea\u80fd\u57fa\u672c\u63cf\u8ff0\u5c01\u5305\u6d41\u5411\uff0c\u5c0d\u65bc\u9664\u932f\u9084\u662f\u6709\u4e9b\u8a31\u7684\u5730\u65b9\u4e0d\u5920\u6e05\u695a\uff0c\u9019\u6642\u5019\u5982\u679c\u53ef\u4ee5\u5c07\u9019\u5f35\u5716\u7528\u66f4\u70ba\u6280\u8853\u7684\u7d30\u7bc0\u53bb\u5c55\u958b\uff0c\u53ef\u4ee5\u5f97\u5230\u4e0b\u5217\u9019\u5f35\u5716"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ldaPp7j.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pod \u6b32\u900f\u904e Service DNS \u5b58\u53d6\u670d\u52d9"),(0,r.kt)("li",{parentName:"ol"},"Pod \u5167\u6aa2\u5bdf\u7cfb\u7d71\u7684 /etc/resolve \u627e\u5230 DNS \u7684 IP"),(0,r.kt)("li",{parentName:"ol"},"\u8a72 DNS \u5be6\u969b\u4e0a\u6703\u662f CoreDNS \u7684 Cluster SerivceIP"),(0,r.kt)("li",{parentName:"ol"},"DNS \u8acb\u6c42\u6253\u5230 CoreDNS \u53bb\u89e3\u6790\u5230\u5f8c\u9762\u7684 Service ClusterIP"),(0,r.kt)("li",{parentName:"ol"},"Pod \u5c07\u8acb\u6c42\u9001\u5230 ClusterIP \u4e26\u8b93 k8s \u5c07\u5176\u8f49\u767c\u5230\u5f8c\u7e8c\u7684 Pod")),(0,r.kt)("p",null,"\u7136\u800c\u4e0a\u8ff0\u7684\u5716\u7247\u4e5f\u4e0d\u662f 100% \u7cbe\u6e96\uff0c\u6709\u66f4\u591a\u4e9b\u8a31\u7684\u7db2\u8def\u7d30\u7bc0\u88ab\u907a\u6f0f\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"CoreDNS \u672c\u8eab\u662f\u57fa\u65bc Hostnetwork \u7684\u65b9\u5f0f\u4f86\u90e8\u7f72\uff0c\u56e0\u6b64 Pod -> CoreDNS \u7684\u90e8\u5206\u6703\u8b8a\u6210 Pod -> Node \u7684\u5b58\u53d6\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ol"},"Pod -> Service ClusterIP \u9019\u4e2d\u9593\u727d\u626f\u5230 iptables/ipvs \u7684\u8f49\u767c\uff0c\u6240\u4ee5\u771f\u6b63\u7684\u6d41\u91cf\u4e26\u4e0d\u6703\u6709\u4e00\u689d Pod -> Service \u7684\u8d70\u5411\uff0c\u800c\u662f\u7bc0\u9ede\u672c\u8eab\u9032\u884c DNAT \u627e\u5230\u4e00\u500b\u5408\u9069\u7684 Pod IP \u5f8c\u5c31\u76f4\u63a5\u6253\u5230\u76ee\u6a19 Pod")),(0,r.kt)("p",null,"\u5149\u662f\u4e00\u500b\u7c21\u7c21\u55ae\u55ae\u7684 Pod->Service \u5c31\u6709\u975e\u5e38\u7684\u591a\u7684\u7d30\u7bc0\u727d\u626f\u5176\u4e2d\uff0c\u5927\u90e8\u5206\u60c5\u6cc1\u4e0b\u9019\u4e9b\u6771\u897f\u90fd\u904b\u4f5c\u5f97\u597d\u597d\u7684\uff0c\u5927\u5bb6\u7684\u7db2\u8def\u90fd\u6c92\u6709\u554f\u63d0\uff0c\u7136\u800c\u53ea\u8981\u6709\u4e00\u500b\u5c0f\u5143\u4ef6\u51fa\u932f\u6574\u500b\u7db2\u8def\u5c31\u4e0d\u901a\u4e86\u3002"),(0,r.kt)("p",null,"\u7576\u7406\u89e3\u4e0a\u8ff0\u7684\u6280\u8853\u7d30\u7bc0\u5f8c\uff0c\u9019\u500b Pod->Service \u7684\u554f\u984c\u53ef\u4ee5\u6709\u9019\u6a23\u53bb\u770b\u5f85"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8ddf DNS \u89e3\u6790\u6709\u95dc\uff1f \u76f4\u63a5\u4f7f\u7528 ClusterIP \u6253\u770b\u770b?"),(0,r.kt)("li",{parentName:"ol"},"\u8ddf Service \u8f49\u63db\u662f\u5426\u6709\u95dc? \u76f4\u63a5\u6253 PodIP \u8a66\u8a66\u770b?"),(0,r.kt)("li",{parentName:"ol"},"\u8ddf\u7bc0\u9ede\u662f\u5426\u6709\u95dc\uff0c \u76f4\u63a5\u6253\u770b\u770b\u540c\u7bc0\u9ede\u4e0a\u7684 Pod \u770b\u770b\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u8ddf\u51fa\u767c\u8005\u662f\u8ab0\u6709\u95dc\uff1f \u5617\u8a66\u5f9e\u7bc0\u9ede\u7684\u770b\u770b\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u662f\u5426\u6709 Network Policy \u64cb\u4f4f\uff1f")),(0,r.kt)("p",null,"\u4e00\u5207\u90fd\u5617\u8a66\u5f8c\u9084\u662f\u6c92\u6709\u8fa6\u6cd5\u7e2e\u5c0f\u554f\u984c\uff0c\u53ef\u4ee5\u5617\u8a66\u5f9e\u4e0d\u540c\u767c\u751f\u9ede\u9304\u88fd\u5c01\u5305\u4f86\u5206\u6790"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Server \u6c92\u6536\u5230\u5c01\u5305"),(0,r.kt)("li",{parentName:"ol"},"Server \u6709\u6536\u5230\u5c01\u5305\uff0c\u4f46\u662f\u6c92\u6709\u56de"),(0,r.kt)("li",{parentName:"ol"},"Server \u6709\u6536\u5230\u5c01\u5305\uff0c\u4e5f\u6709\u56de\u8986\uff0c\u4f46\u662f Client \u6c92\u6709\u6536\u5230")),(0,r.kt)("p",null,"\u6b64\u5916\u4e5f\u8981\u8003\u616e\u5230\u5c01\u5305\u662f\u4e0d\u662f\u53ef\u80fd\u88ab\u5c01\u5305\u7d66 Kernel \u7d66\u4e1f\u68c4\u5c0e\u81f4\u6c92\u6709\u9304\u88fd\u5230\u5c01\u5305?\n\u5982\u679c\u5c01\u5305\u90fd\u9304\u88fd\u4e0d\u5230\u6709\u6c92\u6709\u53ef\u80fd\u662f\u5e95\u5c64\u7db2\u8def\u51fa\u554f\u984c\uff1f\u8b6c\u5982\u7db2\u8def\u7dda\u58de\u4e86\uff1f"),(0,r.kt)("p",null,"\u4e00\u500b\u4e00\u500b\u5217\u51fa\u4f86\u4f86\u6392\u9664\u8207\u78ba\u8a8d\u6bcf\u500b\u5143\u4ef6\u7684\u904b\u4f5c\u72c0\u6cc1\u3002"),(0,r.kt)("h1",{id:"\u9304\u88fd\u5c01\u5305\u7684\u9ebb\u7169"},"\u9304\u88fd\u5c01\u5305\u7684\u9ebb\u7169"),(0,r.kt)("p",null,"\u7576\u73fe\u5b58\u5de5\u5177\u90fd\u6c92\u6709\u8fa6\u6cd5\u91d0\u6e05\u70ba\u4ec0\u9ebc\u7db2\u8def\u4e0d\u901a\u6642\uff0c\u5c31\u53ef\u4ee5\u501f\u52a9\u6293\u53d6\u5c01\u5305\u7684\u65b9\u5f0f\u4f86\u5224\u7aef\n\u4f46\u662f\u9304\u88fd\u5c01\u5305\u7684\u4e00\u500b\u524d\u63d0\u662f\u554f\u984c\u6709\u8fa6\u6cd5\u91cd\u88fd\uff0c\u5426\u5247\u4e8b\u60c5\u5df2\u7d93\u767c\u751f\u932f\u8aa4\u7684\u5c01\u5305\u5df2\u7d93\u6d88\u5931\uff0c\u9019\u6642\u5019\u9304\u88fd\u5c01\u5305\u901a\u5e38\u6c92\u6709\u8fa6\u6cd5\u5f97\u5230\u4ec0\u9ebc\u6709\u7528\u7684\u60c5\u5831\u3002"),(0,r.kt)("p",null,"\u7576\u6c7a\u5b9a\u8981\u9304\u88fd\u5c01\u5305\u6642\uff0c\u6709\u5169\u500b\u554f\u984c\u8981\u78ba\u8a8d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u4ec0\u9ebc\u5de5\u5177\u64f7\u53d6\u5206\u6790"),(0,r.kt)("li",{parentName:"ol"},"\u8981\u5982\u4f55\u5f9e\u832b\u832b\u5927\u6d77\u6d41\u91cf\u4e2d\u5b9a\u4f4d\u5230\u76ee\u6a19\u5c01\u5305")),(0,r.kt)("p",null,"\u5e38\u898b\u7684\u5de5\u5177\u5982 wireshark/tcpdump/tshark.. \u7b49\u90fd\u53ef\u4ee5\u7528\u4f86\u9304\u88fd\u5c01\u5305\uff0c\u4f46\u662f\u6709\u4e9b\u74b0\u5883\u4e0d\u4e00\u5b9a\u6709 GUI \u53ef\u4ee5\u904b\u884c wireshark\uff0c\u6240\u4ee5\u719f\u6089\u4e9b CLI \u7684\u5de5\u5177\u662f\u4e0d\u53ef\u7372\u6216\u7f3a\u7684\u6280\u80fd"),(0,r.kt)("p",null,"\u7576\u6709\u4e86\u5de5\u5177\u5f8c\u5c31\u8981\u6c7a\u5b9a\u8981\u8ab0\u53bb\u904b\u884c\u9019\u4e9b\u5de5\u5177\uff1f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pod \u672c\u8eab\nPod \u672c\u8eab\u662f\u5426\u80fd\u5920\u904b\u884c tcpdump \u53d6\u6c7a\u65bc\u5bb9\u5668\u7576\u521d\u7684 image\uff0c\u5f88\u591a\u6642\u5019\u4e0d\u4e00\u5b9a\u6709 tcpdump \u53ef\u4ee5\u7528\uff0c\u751a\u81f3\u4e00\u4e9b image \u9023\u57fa\u672c\u7684 sh/ash/busybox \u90fd\u6c92\u6709\uff0c\u5c31\u7b97\u4ef0\u8cf4 ksniff \u4f86\u52d5\u614b\u5b89\u88dd tcpdump \u4e5f\u6709\u53ef\u80fd\u9047\u5230\u57f7\u884c\u554f\u984c"),(0,r.kt)("li",{parentName:"ol"},"\u7bc0\u9ede\n\u56e0\u70ba\u6240\u6709\u5bb9\u5668\u90fd\u904b\u884c\u5230\u7bc0\u9ede\u4e0a\uff0c\u6240\u4ee5\u5f9e\u7bc0\u9ede\u4e0a\u53bb\u9304\u88fd\u5c01\u5305\u53ef\u4ee5\u770b\u5230 95% \u7684\u5bb9\u5668\u5c01\u5305(\u5c11\u90e8\u5206\u7279\u6b8a\u5982 SR-IOV, DPDK...etc\u7b49\u7121\u6cd5)\uff0c\u6b64\u5916\u7bc0\u9ede\u901a\u5e38\u6bd4\u8f03\u65b9\u4fbf\u53bb\u5b89\u88dd\u5404\u5f0f\u5404\u6a23\u7684\u5de5\u5177\u4f86\u9032\u884c\u9664\u932f\u3002\n\u4e0d\u904e\u4e5f\u8981\u6ce8\u610f\u7684\u662f\u5982\u679c\u9019\u4e9b\u7bc0\u9ede\u662f\u52d5\u614b\u5b89\u88dd\uff0c\u8b6c\u5982\u900f\u904e auto-scaling group \u7684\u6982\u5ff5\u662f\u5426\u5c31\u6703\u5c0e\u81f4\u6bcf\u6b21\u9664\u932f\u90fd\u8981\u4e00\u76f4\u5b89\u88dd\u5de5\u5177\uff1f")),(0,r.kt)("p",null,"\u7576\u53ef\u4ee5\u9304\u88fd\u5c01\u5305\u7684\u6642\u5019\uff0c\u9019\u6642\u5019\u53c8\u5fc5\u9808\u8981\u5c07 CNI \u8207\u57fa\u672c\u67b6\u69cb\u7d66\u6574\u5408\u9032\u4f86\uff0c\u4ee5 Calico \u70ba\u7bc4\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4vCOL5P.png",alt:null})),(0,r.kt)("p",null,"\u7bc0\u9ede\u4e4b\u9593\u900f\u904e IP-IP \u7684 Tunneling \u5354\u5b9a\u9032\u884c\u5c01\u5305\u8655\u7406\uff0c\u56e0\u6b64\u9019\u6642\u5019\u4f60\u5982\u679c\u9304\u88fd\u5c01\u5305\u4f60\u770b\u5230\u7684\u4e0d\u6703\u662f\u55ae\u7d14\u7684 IP \u5354\u5b9a\uff0c\u800c\u662f IP-IP \u5354\u5b9a\uff0c\u56e0\u6b64\u82e5\u6c92\u6709\u9019\u4e9b\u7db2\u8def\u77e5\u8b58\u8207\u7406\u89e3\uff0c\u4f60\u9304\u88fd\u5c01\u5305\u4e5f\u6c92\u6709\u8fa6\u6cd5\u627e\u5230\u4f60\u8981\u7684\u8cc7\u8a0a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5f9e\u7bc0\u9ede\u4e0a\u53bb\u9304\u88fd\u5c01\u5305\u4e14 CNI \u662f\u900f\u904e veth \u7684\u65b9\u5f0f\u5c07\u5c01\u5305\u7d66\u8f49\u767c\u5230\u5bb9\u5668\u5167\uff0c\u5982\u679c\u4f60\u6709\u80fd\u529b\u627e\u5230\u6bcf\u689d veth \u8207 Pod \u7684\u5c0d\u61c9\u95dc\u4fc2\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u91dd\u5c0d veth \u53bb\u9304\u88fd\u5c01\u5305\u627e\u5230\u6700\u76f4\u63a5\u5f80\u8fd4 Pod \u7684\u5c01\u5305\uff0c\u9664\u932f\u7684\u6548\u7387\u4e5f\u662f\u6700\u4f73\u7684\u3002"),(0,r.kt)("h1",{id:"\u5176\u9918\u5de5\u5177"},"\u5176\u9918\u5de5\u5177"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u8ddf Kubernetes \u6709\u95dc\u7684\u7bc4\u7587\u5916\uff0c Linux \u672c\u8eab\u7684\u7db2\u8def\u5de5\u5177\u4e5f\u751a\u70ba\u91cd\u8981\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ip/tcpdump"),(0,r.kt)("li",{parentName:"ol"},"conntrack"),(0,r.kt)("li",{parentName:"ol"},"iptables/ipvs"),(0,r.kt)("li",{parentName:"ol"},"ethtool"),(0,r.kt)("li",{parentName:"ol"},"routing,NAT,rp_filter"),(0,r.kt)("li",{parentName:"ol"},"...etc")),(0,r.kt)("p",null,"\u9019\u4e9b\u5de5\u5177\u90fd\u6709\u53ef\u80fd\u6703\u5f71\u97ff\u7bc0\u9ede\u5c64\u7d1a\u7684\u5c01\u5305\u8f49\u767c\uff0c\u5f04\u5f97\u4e0d\u597d\u5c31\u6703\u4f7f\u5f97\u5c01\u5305\u4e0d\u901a\u3002"),(0,r.kt)("h1",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,r.kt)("p",null,"\u7db2\u8def\u90e8\u5206\u727d\u626f\u5143\u4ef6\u773e\u591a\uff0c\u55ae\u9760\u5634\u5df4\u60f3\u8981\u9664\u932f\u5e7e\u4e4e\u4e0d\u53ef\u884c\uff0c\u800c\u8eab\u70ba\u4e00\u500b\u8cc7\u6df1\u7684\u958b\u767c\u4eba\u54e1/\u7dad\u904b\u4eba\u54e1\uff0c\u9047\u5230\u7db2\u8def\u554f\u984c\u6642\u5343\u842c\u4e0d\u8981\u55ae\u7d14\u53ea\u7528\u4e00\u53e5 \u201c\u6211\u7db2\u8def\u4e0d\u901a\u201d \u7c21\u55ae\u63cf\u8ff0\u554f\u984c\uff0c\u80fd\u7684\u8a71\u5247\u662f\u8981\u8a73\u7d30\u63cf\u8ff0\u5be6\u969b\u4e0a\u9047\u5230\u4ec0\u9ebc\u554f\u984c\uff0c\u9032\u884c\u904e\u4ec0\u9ebc\u6e2c\u8a66\uff0c\u6392\u9664\u904e\u4ec0\u9ebc\u56f0\u96e3\uff0c\u76ee\u524d\u8a8d\u70ba\u7684\u53ef\u80fd\u554f\u984c\u70ba\u4f55\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u80fd\u5920\u8b93\u5f7c\u6b64\u66f4\u52a0\u6e05\u695a\u7576\u524d\u554f\u984c\uff0c\u53cd\u8986\u591a\u6b21\u7684\u4f86\u56de\u8a13\u7df4\u5176\u5be6\u4e5f\u90fd\u662f\u6dfa\u79fb\u9ed8\u5316\u7684\u52a0\u5f37\u5c0d\u5e95\u5c64\u7db2\u8def\u80fd\u529b\u7684\u7406\u89e3\uff0c\u4e45\u800c\u4e45\u4e4b\u53ea\u6703\u6108\u4f86\u6108\u719f\u6089\uff0c\u672a\u4f86\u9762\u5c0d\u5404\u7a2e\u554f\u984c\u7684\u6642\u5019\u6703\u6709\u5404\u7a2e\u4e0d\u540c\u7684\u60f3\u6cd5\u8207\u7406\u89e3\u3002"))}m.isMDXComponent=!0}}]);