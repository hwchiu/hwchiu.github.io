"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[66751],{3905:(e,r,t)=>{t.d(r,{Zo:()=>h,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},h=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||c;return t?n.createElement(d,l(l({ref:r},h),{},{components:t})):n.createElement(d,l({ref:r},h))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41667:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const c={title:"Rancher \u67b6\u69cb\u8207\u5b89\u88dd\u65b9\u5f0f\u4ecb\u7d39",sidebar_position:3,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},l="\u524d\u8a00",o={unversionedId:"2021/iThome_Challenge/day3",id:"2021/iThome_Challenge/day3",title:"Rancher \u67b6\u69cb\u8207\u5b89\u88dd\u65b9\u5f0f\u4ecb\u7d39",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/2021/iThome_Challenge/day3.md",sourceDirName:"2021/iThome_Challenge",slug:"/2021/iThome_Challenge/day3",permalink:"/docs/2021/iThome_Challenge/day3",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",lastUpdatedBy:"HWC",sidebarPosition:3,frontMatter:{title:"Rancher \u67b6\u69cb\u8207\u5b89\u88dd\u65b9\u5f0f\u4ecb\u7d39",sidebar_position:3,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"Day 2 - \u4f55\u8b02 Rancher",permalink:"/docs/2021/iThome_Challenge/day2"},next:{title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0a)",permalink:"/docs/2021/iThome_Challenge/day4"}},i={},s=[],h={toc:s},u="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u524d\u7bc7\u6587\u7ae0\u63a2\u8a0e\u4e86 Rancher \u7684\u57fa\u672c\u6982\u5ff5\u8207 Rancher \u5e36\u4f86\u7684\u597d\u8655\uff0c\u672c\u7ae0\u7bc0\u5247\u8981\u63a2\u8a0e Rancher \u7684\u67b6\u69cb\n\u5c0d\u5176\u67b6\u69cb\u77ad\u89e3\u6108\u6df1\uff0c\u672a\u4f86\u4f7f\u7528\u6642\u8981\u9664\u932f\u5c31\u6703\u66f4\u77e5\u9053\u8981\u5f9e\u4ec0\u9ebc\u89d2\u5ea6\u53bb\u5075\u932f\u540c\u6642\u90e8\u7f72\u6642\u4e5f\u6bd4\u8f03\u6703\u6709\u4e9b\u57fa\u672c\u6982\u5ff5\u70ba\u4ec0\u9ebc\u5b98\u65b9\u6703\u6709\u4e0d\u540c\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u7531\u65bc Rancher \u672c\u8eab\u662f\u4e00\u500b\u7ba1\u7406 Kubernetes \u7684\u5e73\u53f0\uff0c\u540c\u6642\u53c8\u8981\u63d0\u4f9b UI \u4ecb\u9762\u7d66\u4f7f\u7528\u8005\u7ba1\u7406\uff0c\u56e0\u6b64\u5176\u672c\u8eab\u5c31\u662f\u7531\u591a\u500b\u5167\u90e8\u5143\u4ef6\u7d44\u6210\u7684\uff0c\u5982\u4e0b\u5716(\u8a72\u5716\u7bc0\u9304\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/overview/architecture/#rancher-server-architecture"},"\u5b98\u65b9\u7db2\u7ad9"),")"),(0,a.kt)("p",null,"\u8a3b: \u6b64\u70ba v2.5 \u7684\u67b6\u69cb"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://rancher.com/docs/img/rancher/rancher-architecture-rancher-api-server.svg",alt:null})),(0,a.kt)("p",null,"\u5f9e\u5b98\u65b9\u7684\u67b6\u69cb\u5716\u4e2d\u53ef\u4ee5\u89c0\u5bdf\u5230\uff0c Rancher \u672c\u8eab\u9664\u4e86 API Server \u4f5c\u70ba\u6574\u9ad4\u908f\u8f2f\u8655\u7406\u4e4b\u5916\uff0c\u9084\u6709\u984d\u5916\u7684\u5143\u4ef6\u8b6c\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cluster Controller"),(0,a.kt)("li",{parentName:"ol"},"Authentication Proxy"),(0,a.kt)("li",{parentName:"ol"},"etcd")),(0,a.kt)("p",null,"\u5176\u4e2d Cluster Controller \u53ef\u4ee5\u7528\u4f86\u63a7\u5236\u4e0d\u540c\u985e\u578b\u7684 Kubernetes Cluster\uff0c\u4e0d\u8ad6\u662f\u900f\u904e Rancher \u6240\u67b6\u8a2d\u7684 RKE \u6216\u662f\u5176\u4ed6\u5982 EKS/AKS \u7b49\u3002\n\u9019\u908a\u8981\u7279\u5225\u6ce8\u610f\u7684\uff0c\u4efb\u4f55\u8981\u7d66 Rancher \u7d66\u63a7\u7ba1\u7684 Kubernetes Cluster \u90fd\u6703\u5fc5\u9808\u8981\u65bc\u5176\u53e2\u96c6\u4e2d\u5b89\u88dd\u4e00\u500b Cluster Agent\u3002 Rancher \u8981\u900f\u904e Agent \u7684\u5e6b\u5fd9\u624d\u53ef\u4ee5\u9054\u5230\u7d71\u4e00\u63a7\u7ba1\u7684\u6548\u7528\u3002"),(0,a.kt)("p",null,"API Server \u65b9\u9762\u672c\u8eab\u9762\u5c0d\u7684 Client \u5f88\u591a\uff0c\u6709\u4f7f\u7528 UI \u700f\u89bd\u7684\uff0c\u6709\u4f7f\u7528 CLI \u64cd\u4f5c\uff0c\u751a\u81f3\u9023 Kubernetes API \u4e5f\u90fd\u662f\u7531 API \u8655\u7406\u7684\u3002\n\u9019\u908a\u89e3\u91cb\u4e00\u4e0b\u70ba\u4ec0\u9ebc Kubernetes API \u9700\u8981\u8d70 Rancher API Server\uff0c\u8a66\u60f3\u4e00\u500b\u7d14\u5730\u7aef\u7684\u7db2\u8def\u74b0\u5883\uff0c\u5982\u679c\u4f7f\u7528\u8005\u60f3\u8981\u900f\u904e kubectl/helm \u7b49\u6307\u4ee4\u53bb\u5b58\u53d6\u8a72 Kubernetes\uff0c\u9019\u610f\u5473\u8005\u8a72\u5730\u7aef\u74b0\u5883\u9700\u8981\u5c07 API Server \u7684 6443 port \u7d66\u653e\u51fa\u4f86\uff0c\u540c\u6642\u9084\u8981\u6e96\u5099\u597d\u76f8\u95dc\u6191\u8b49\u7b49\u3002\u5982\u679c\u8a72 Kubernetes Cluster \u662f\u7531 Rancher \u6240\u5275\u7acb\u7684\uff0c\u90a3 Rancher \u53ef\u4ee5\u900f\u904e\u8207 Agent \u7684\u6e9d\u901a\u904e\u7a0b\u4f86\u4ea4\u63db\u9019\u4e9b Kubernetes API \u7684\u64cd\u4f5c\uff0c\u9019\u610f\u5473\u8005\u4f7f\u7528\u8005\u53ea\u8981\u5c0d Rancher API Server \u767c\u9001 Kubernetes API \u7b49\u76f8\u95dc\u7684\u6307\u4ee4\uff0c\u9019\u4e9b\u6700\u5f8c\u90fd\u6703\u88ab Rancher API Server \u7d66\u8f49\u767c\u5230\u5e95\u4e0b Kubernetes Cluster \u7684 API Server\u3002\u9019\u6a23\u5730\u7aef\u74b0\u5883\u4e5f\u4e0d\u9700\u8981\u958b\u555f 6443 port\uff0c\u53ea\u8981\u672c\u8eab\u53e2\u96c6\u5167\u7684 Agent \u6709\u8ddf Rancher API Server \u6709\u4fdd\u6301\u9023\u7dda\u5373\u53ef\u3002\u4f7f\u7528\u4e0a\u5927\u5e45\u5ea6\u7c21\u5316\u6574\u500b\u64cd\u4f5c\u6d41\u7a0b\u3002\n\u6700\u5f8c\u63d0\u9192\u7684\u662f\u6b64\u529f\u80fd\u4e26\u975e\u4e00\u5b9a\u8981\u4f7f\u7528\uff0c\u91dd\u5c0d RKE \u53e2\u96c6\u4e5f\u662f\u6709\u8fa6\u6cd5\u4e0d\u7d93\u7531 Rancher \u800c\u76f4\u63a5\u5b58\u53d6 Kubernetes \u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u67b6\u69cb\u5716\u4e5f\u6e05\u695a\u7684\u544a\u8a34\u4f7f\u7528\u8005\uff0c\u8981\u67b6\u8a2d\u4e00\u500b Rancher \u670d\u52d9\u8981\u6e96\u5099\u4e0a\u8ff0\u9019\u4e9b\u5143\u4ef6\uff0c\u800c\u5b98\u65b9\u7db2\u7ad9\u672c\u8eab\u5247\u63d0\u4f9b\u7684\u6578\u7a2e\u4e0d\u540c\u7684\u5b89\u88dd\u65b9\u5f0f\uff0c\u800c\u9019\u4e9b\u65b9\u5f0f\u53c8\u6703\u5206\u6210\u5169\u5927\u985e\uff0c\u55ae\u4e00\u7bc0\u9ede\u6216\u662f\u591a\u7bc0\u9ede\u3002\n\u55ae\u4e00\u7bc0\u9ede\u7684\u5b89\u88dd\u65b9\u5f0f\u9069\u5408\u6e2c\u8a66\u4f7f\u7528\uff0c\u800c\u751f\u7522\u74b0\u5883\u4e0b\u6703\u5efa\u8b70\u63a1\u7528\u591a\u7bc0\u9ede\u7684\u65b9\u5f0f\u53bb\u90e8\u7f72 Rancher Server\uff0c\u7562\u7adf Rancher \u672c\u8eab\u662f\u7ba1\u7406\u591a\u5957 Kubernetes \u53e2\u96c6\u7684\u670d\u52d9\uff0c\u56e0\u6b64\u672c\u8eab\u6700\u597d\u8981\u6709 HA \u7684\u6a5f\u5236\u53bb\u78ba\u4fdd\u4e0d\u6703\u56e0\u70ba\u55ae\u4e00\u7bc0\u9ede\u640d\u6bc0\u800c\u5c0e\u81f4\u5f8c\u9762\u4e00\u9023\u4e32\u7684\u932f\u8aa4\u3002"),(0,a.kt)("p",null,"\u4e0b\u5716\u7bc0\u9304\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/overview/architecture-recommendations/"},"\u5b98\u65b9\u7db2\u7ad9")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://rancher.com/docs/img/rancher/rancher-architecture-separation-of-rancher-server.svg",alt:null})),(0,a.kt)("p",null,"\u8a72\u67b6\u69cb\u5716\u5448\u73fe\u4e86\u5169\u7a2e\u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u67b6\u69cb\uff0c\u6700\u5927\u7684\u5dee\u5225\u5c31\u53ea\u662f Rancher Server \u672c\u8eab\u5230\u5e95\u5982\u4f55\u88ab\u5916\u754c\u5b58\u53d6\u4ee5\u53ca Rancher Server \u6709\u7121 HA \u7b49\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u55ae\u4e00\u7bc0\u9ede\u7684\u5b89\u88dd\u975e\u5e38\u7c21\u55ae\uff0c\u53ea\u8981\u4f7f\u7528 docker \u6307\u4ee4\u5c31\u53ef\u4ee5\u5f88\u8f15\u9b06\u7684\u8d77\u4e00\u500b Rancher Server\uff0c\u4e0d\u904e\u8981\u7279\u5225\u6ce8\u610f\u7684\u662f\u900f\u904e\u9019\u7a2e\u65b9\u6cd5\u90e8\u7f72\u7684 Rancher \u4e0d\u5efa\u8b70\u7576\u4f5c\u751f\u7522\u74b0\u5883\uff0c\u6700\u597d\u53ea\u662f\u62ff\u4f86\u6e2c\u8a66\u5373\u53ef\u3002\n\u5176\u539f\u7406\u5176\u5be6\u662f\u900f\u904e\u4e00\u500b docker container \u8d77 Rancher \u670d\u52d9\uff0c\u670d\u52d9\u5167\u6703\u7528 RKE \u5275\u5efa\u4e00\u500b\u55ae\u4e00\u7bc0\u9ede\u7684 Kubernetes \u7bc0\u9ede\uff0c\u8a72\u7bc0\u9ede\u5167\u6703\u628a Rancher \u7684\u670d\u52d9\u90fd\u90e8\u7f72\u5230\u8a72 Kubernetes \u5167\u3002"),(0,a.kt)("p",null,"\u591a\u7bc0\u9ede\u5b89\u88dd\u7684\u5b89\u88dd\u6982\u5ff5\u5f88\u7c21\u55ae\uff0c\u5c31\u662f\u628a Rancher \u7684\u670d\u52d9\u5b89\u88dd\u5230\u4e00\u500b Kubernetes \u53e2\u96c6\u5167\u5373\u53ef\uff0c Rancher \u672c\u8eab\u63d0\u4f9b Helm \u7684\u5b89\u88dd\u65b9\u5f0f\uff0c\u6240\u4ee5\u719f\u6089 Helm \u6307\u4ee4\u5c31\u53ef\u4ee5\u8f15\u9b06\u7684\u5b89\u88dd\u4e00\u5957 Rancher \u5230 Kubernetes \u53e2\u96c6\u5167\u3002\n\u5b98\u65b9\u6587\u4ef6\u63d0\u4f9b\u4e86\u4e0d\u540c\u7a2e Kubernetes \u53e2\u96c6\u7684\u5b89\u88dd\u65b9\u5f0f\uff0c\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"RKE (\u4f7f\u7528 RKE \u6307\u4ee4\u5148\u884c\u5275\u5efa\u4e00\u500b K8S \u53e2\u96c6\uff0c\u518d\u7528 Helm \u628a Rancher \u5b89\u88dd\u9032\u53bb)"),(0,a.kt)("li",{parentName:"ol"},"EKS"),(0,a.kt)("li",{parentName:"ol"},"GKE"),(0,a.kt)("li",{parentName:"ol"},"K3s (\u8f15\u91cf\u7d1a RKE\uff0c\u91dd\u5c0d IoT \u7b49\u74b0\u5883\u8a2d\u8a08\u7684 Kubernetes \u7248\u672c)"),(0,a.kt)("li",{parentName:"ol"},"RKE2 (\u91dd\u5c0d\u7f8e\u570b\u5b89\u5168\u76f8\u95dc\u90e8\u9580\u6240\u958b\u767c\u66f4\u70ba\u5b89\u5168\u6027\u7684 RKE \u7248\u672c)")),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u6240\u63cf\u8ff0\u7684\u4e00\u4e9b\u5b89\u88dd\u65b9\u5f0f\u5916\uff0c Rancher \u4e5f\u8ddf AWS \u6709\u76f8\u95dc\u6574\u5408\uff0c\u80fd\u5920\u900f\u904e CloudFormation \u7684\u65b9\u5f0f\u900f\u904e EKS \u90e8\u7f72 Rancher \u670d\u52d9\uff0c\u8a73\u7d30\u7684\u53ef\u4ee5\u53c3\u95b1",(0,a.kt)("a",{parentName:"p",href:"https://aws-quickstart.github.io/quickstart-eks-rancher/"},"Rancher on the AWS Cloud\nQuick Start Reference Deployment")),(0,a.kt)("p",null,"\u6700\u5f8c\u70ba\u4e86\u8b93\u6574\u9ad4\u7684\u5b89\u88dd\u66f4\u52a0\u7c21\u5316\uff0cRancher \u65bc v2.5.4 \u5f8c\u91cb\u51fa\u4e86\u4e00\u500b\u5be6\u9a57\u7684\u65b0\u5b89\u88dd\u65b9\u5f0f\uff0c\u7a31\u70ba RancherD\n\u8a72\u670d\u52d9\u6703\u5148\u5275\u5efa\u4e00\u500b RKE2 \u7684\u53e2\u96c6\uff0c\u4e26\u4e14\u4f7f\u7528 Helm \u5c07\u76f8\u95dc\u670d\u52d9\u90fd\u5b89\u88dd\u5230\u8a72 RKE2 \u53e2\u96c6\u4e2d\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u8ad6\u662f\u54ea\u7a2e\u5b89\u88dd\u65b9\u5f0f\uff0c\u90fd\u9700\u8981\u91dd\u5c0d SSL \u6191\u8b49\u53bb\u9032\u884c\u8655\u7406\uff0c\u9019\u90e8\u5206\u53ef\u4ee5\u7528 Rancher \u81ea\u884c\u7c3d\u7f72\uff0c\u81ea\u884c\u6e96\u5099\u6216\u662f\u900f\u904e Let's Encrypt \u4f86\u53d6\u5f97\u90fd\u53ef\u4ee5\uff0c\u6240\u4ee5\u5b89\u88dd\u6642\u4e5f\u9700\u8981\u5c0d SSL \u6709\u9ede\u6982\u5ff5\u6703\u6bd4\u8f03\u597d\uff0c\u80fd\u7684\u8a71\u6700\u597d\u6709\u4e00\u500b\u5c6c\u65bc\u81ea\u5df2\u7684\u57df\u540d\u4f86\u65b9\u4fbf\u6e2c\u8a66\u3002\n\u55ae\u4e00\u7bc0\u9ede\u7684 Docker Container \u90e8\u7f72\u65b9\u5f0f\u6709\u53ef\u80fd\u6703\u9047\u5230 RKE \u5167\u90e8 k8s \u670d\u52d9\u6191\u8b49\u904e\u671f\u7684\u554f\u984c\uff0c\u5982\u679c\u9047\u5230\u53ef\u4ee5\u53c3\u95b1\u4e0b\u5217\u89e3\u6c7a\u65b9\u5f0f\u8655\u7406 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/26984#issuecomment-712233261"},"Rancher container restarting every 12 seconds, expired certificates")),(0,a.kt)("p",null,"\u4e0b\u4e00\u7bc7\u6587\u7ae0\u4fbf\u6703\u5617\u8a66\u900f\u904e RKE + Helm \u7684\u65b9\u5f0f\u4f86\u770b\u770b\u5982\u4f55\u67b6\u8a2d Rancher"))}p.isMDXComponent=!0}}]);