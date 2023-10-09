"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[77633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),b=l,m=p["".concat(u,".").concat(b)]||p[b]||k[b]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={title:"\u6dfa\u8ac7\u672c\u5730\u90e8\u7f72 Kubernetes \u7684\u5404\u985e\u9078\u64c7",sidebar_position:5,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2020-11-04T19:39:26.000Z")},i="\u672c\u6587",a={unversionedId:"techPost/2020/iThome_Challenge/cicd-5",id:"techPost/2020/iThome_Challenge/cicd-5",title:"\u6dfa\u8ac7\u672c\u5730\u90e8\u7f72 Kubernetes \u7684\u5404\u985e\u9078\u64c7",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2020/iThome_Challenge/cicd-5.md",sourceDirName:"techPost/2020/iThome_Challenge",slug:"/techPost/2020/iThome_Challenge/cicd-5",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-5",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u6dfa\u8ac7\u672c\u5730\u90e8\u7f72 Kubernetes \u7684\u5404\u985e\u9078\u64c7",sidebar_position:5,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2020-11-04T19:39:26.000Z"},sidebar:"techPost",previous:{title:"Helm \u64cd\u4f5c\u7bc4\u4f8b",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-4"},next:{title:"K3D \u8207KIND \u7684\u90e8\u7f72\u793a\u7bc4",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-6"}},u={},s=[{value:"Kubeadm",id:"kubeadm",level:2},{value:"Minikube",id:"minikube",level:2},{value:"KIND",id:"kind",level:2},{value:"K3D",id:"k3d",level:2}],c={toc:s},p="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u672c\u6587"},"\u672c\u6587"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u5e7e\u5929\u6211\u5011\u5c07\u958b\u59cb\u63a2\u8a0e\u5c0d\u65bc\u4e00\u500b\u672c\u5730\u958b\u767c\u8005\u4f86\u8aaa\uff0c\u8981\u600e\u9ebc\u642d\u5efa\u4e00\u500b Kubernetes \u4f86\u4f7f\u7528"),(0,l.kt)("p",null,"\u63a2\u8a0e\u9019\u500b\u8b70\u984c\u4e4b\u524d\uff0c\u6211\u5011\u8981\u5148\u4f86\u554f\u4e00\u500b\u554f\u984c\u662f"),(0,l.kt)("p",null,"\u6211\u5011\u672c\u5730\u958b\u767c\u8005\uff0c\u771f\u7684\u9700\u8981\u4e00\u500b Kuberntees \u55ce? \u9019\u500b\u662f\u5fc5\u8981\u7684\u55ce\uff1f"),(0,l.kt)("p",null,"\u6211\u8a8d\u70ba\u9019\u500b\u7b54\u6848\u662f\u975e\u5fc5\u8981\uff0c\u4e26\u4e0d\u662f\u6240\u6709\u7684\u672c\u5730\u958b\u767c\u8005\u90fd\u9700\u8981\u6709\u4e00\u500b\u7368\u7acb\u7684 Kubernetes \u53e2\u96c6\u4f86\u4f7f\u7528\uff0c\u4f46\u662f\u5982\u679c\u6709\u7b26\u5408\u4e0b\u5217\u9700\u6c42\u4e4b\u4e00\uff0c\u5c31\u6703\u9700\u8981\u5275\u5efa\u4e00\u500b\u672c\u5730\u7684 Kubernetes \u53e2\u96c6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u958b\u767c\u7684\u61c9\u7528\u7a0b\u5f0f\u8207 Kubernetes \u606f\u606f\u76f8\u95dc\uff0c\u8b6c\u5982\u8a72\u61c9\u7528\u7a0b\u5f0f\u6703\u7528\u5230 Kubernetes API\uff0c\u9019\u985e\u578b\u61c9\u7528\u7a0b\u5f0f\u9700\u8981\u90e8\u7f72\u5230 Kubernetes \u5167\u624d\u53ef\u4ee5\u767c\u63ee\u5176\u529f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u958b\u767c\u7684\u61c9\u7528\u7a0b\u5f0f\u9700\u8981\u7528\u5230\u4e00\u4e9b Kubernetes \u7684\u8cc7\u6e90\u624d\u80fd\u5920\u770b\u51fa\u5dee\u7570\uff0c\u8b6c\u5982\u60f3\u78ba\u8a8d Kubernetes HPA \u767c\u751f\u6642\u61c9\u7528\u7a0b\u5f0f\u662f\u5426\u80fd\u5920\u5982\u9810\u671f\u904b\u4f5c\u3002\u9019\u985e\u578b\u7684\u61c9\u7528\u7a0b\u5f0f\u4e5f\u6703\u9700\u8981\u6709\u500b\u672c\u5730\u7684 Kubernetes \u53e2\u96c6\u624d\u6e2c\u8a66"),(0,l.kt)("li",{parentName:"ol"},"\u958b\u767c\u4eba\u54e1\u672c\u8eab\u662f\u516c\u53f8\u7684\u57fa\u790e\u8a2d\u65bd\u7dad\u904b\u4eba\u54e1\uff0c\u8b6c\u5982\u8981\u8a2d\u8a08 Jenkins \u8207 Kubernetes \u7684\u9023\u52d5\u6e2c\u8a66\uff0c\u53ef\u80fd\u6703\u9700\u8981\u5728\u672c\u5730\u5148\u9032\u884c\u76f8\u95dc\u6e2c\u8a66\u4e4b\u5f8c\u624d\u6703\u6b63\u5f0f\u4e0a\u5230\u516c\u53f8\u74b0\u5883\u3002\u597d\u8655\u53ef\u80fd\u662f\u53ef\u4ee5\u5148\u4e0d\u7528\u958b\u96f2\u7aef\u6a5f\u5668\uff0c\u53ef\u4ee5\u5148\u7701\u9322\uff0c\u90fd\u7528VM\u4f86\u6e2c\u8a66\u76f8\u95dc\u529f\u80fd"),(0,l.kt)("li",{parentName:"ol"},"\u958b\u767c\u7684\u61c9\u7528\u7a0b\u5f0f\u6709\u5f88\u591a\u4f9d\u8cf4\u6027\uff0c\u8b6c\u5982\u9700\u8981 redis, kafaka, memcached \u7b49\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e5f\u8a31")," \u6709\u500b\u672c\u5730\u7684 Kuberentes \u6703\u6bd4\u8f03\u65b9\u4fbf")),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u7406\u7531\u4e4b\u5916(\u4e00\u5b9a\u9084\u6709\u5176\u4ed6\u60c5\u5883\uff0c\u6211\u6c92\u6709\u8fa6\u6cd5\u5217\u8209\u5168\u90e8\uff09\uff0c\u6211\u8a8d\u70ba\u5269\u4e0b\u7684\u60c5\u5883\u61c9\u8a72\u90fd\u53ef\u4ee5\u900f\u904e docker/docker-compose \u4f86\u5b8c\u6210\u5efa\u7f6e\u76f8\u95dc\u74b0\u5883\u4f9b\u958b\u767c\u8005\u6e2c\u8a66\u3002 (4) \u7684\u689d\u4ef6\u6211\u8a8d\u70ba\u6bd4\u8f03\u5f48\u6027\uff0c\u5047\u5982\u4f9d\u8cf4\u7684\u670d\u52d9\u90fd\u53ef\u4ee5\u7528 docker-compose \u76f4\u63a5\u5efa\u7acb\uff0c\u90a3\u5176\u5be6\u4e5f\u4e0d\u9700\u8981\u6709\u500b Kuberentes\uff0c\u4f46\u662f\u5982\u679c\u9019\u4e9b\u670d\u52d9\u672c\u8eab\u6709\u4e00\u4e9b\u8a2d\u5b9a\u800c\u4e14 Kubernetes Yaml/Helm \u90fd\u5df2\u7d93\u6e96\u5099\u597d, \u6574\u9ad4\u90e8\u7f72\u8207\u8a2d\u5b9a\u6240\u82b1\u8cbb\u7684\u6642\u9593\u6bd4\u91cd\u65b0\u7814\u7a76\u5982\u4f55\u8f49\u79fb\u5230 Docker-compose \u4e0a\u9084\u4f86\u5f97\u8f15\u91cf\u8207\u5feb\u901f\uff0c\u90a3\u5176\u5be6\u4e5f\u53ef\u4ee5\u8003\u616e\u5c31\u76f4\u63a5\u4e0a Kubernetes\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4eca\u5929\u6df1\u601d\u719f\u616e\u5f8c\uff0c\u78ba\u8a8d\u771f\u7684\u6709\u9700\u8981\u65bc\u672c\u5730\u6e2c\u8a66 Kuberntes \u7684\u9700\u6c42\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u4f86\u601d\u8003\uff0c\u5c0d\u65bc\u4e00\u500b\u958b\u767c\u8005\uff0c\u6211\u5e0c\u671b\u53ef\u4ee5\u600e\u9ebc\u4f7f\u7528\u9019\u500b\u672c\u5730\u7684 Kubernetes\u3002"),(0,l.kt)("p",null,"\u5c0d\u6211\u500b\u4eba\u4f86\u8aaa\uff0c\u6211\u5e0c\u671b\u9019\u5957\u89e3\u6c7a\u65b9\u6848\u80fd\u5920\u6709\u4e0b\u5217\u7279\u6027"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bb9\u6613\u8a2d\u5b9a\u8207\u67b6\u8a2d\uff0c\u6700\u597d\u5e7e\u500b\u6309\u9215\u5c31\u597d"),(0,l.kt)("li",{parentName:"ol"},"\u80fd\u5920\u90fd\u7528\u6307\u4ee4\u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u6709\u4efb\u4f55 UI \u4ecb\u5165"),(0,l.kt)("li",{parentName:"ol"},"\u80fd\u5920\u6a21\u64ec\u591a\u7bc0\u9ede\u6700\u597d"),(0,l.kt)("li",{parentName:"ol"},"\u6700\u597d\u80fd\u5920\u628a\u4e0a\u8ff0\u7684\u4e00\u5207\u90fd\u5305\u6210\u4e00\u500b\u8173\u672c\uff0c\u4e00\u500b\u547d\u4ee4\u5efa\u7f6e\u5b8c\u7562")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4f86\u770b\u4e00\u4e0b\u56db\u5957\u4e0d\u540c\u7684\u958b\u6e90\u8edf\u9ad4\uff0c Kubeadm, Minikube, KIND, K3D \u9019\u56db\u5957\u7684\u57fa\u672c\u4ecb\u7d39\uff0c\u4e0b\u4e00\u7ae0\u7bc0\u6211\u5011\u5247\u6703\u5f9e\u4e2d\u6311\u9078\u4e00\u4e9b\u4f86\u9032\u884c\u5b89\u88dd\u793a\u7bc4"),(0,l.kt)("h2",{id:"kubeadm"},"Kubeadm"),(0,l.kt)("p",null,"Kubeadm \u662f\u7531\u5b98\u65b9\u7dad\u8b77\u7684\u958b\u6e90\u5c08\u6848\uff0c\u6211\u8a8d\u70ba\u662f\u975e\u5e38\u7c21\u55ae\u7684\u4e00\u500b\u6e2c\u8a66\u65b9\u5f0f\uff0c\u5176\u672c\u8eab\u6703\u900f\u904e systemd \u7684\u65b9\u5f0f\u7dad\u8b77 Kubelet \u4e4b\u5f8c\u518d\u900f\u904e container \u7684\u65b9\u5f0f\u53eb\u8d77 controller/scheduler/kube-proxy \u7b49 Kubernetes \u6838\u5fc3\u5143\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u9762 Kubeadm \u672c\u8eab\u4e0d\u7b97\u56f0\u96e3\u4f7f\u7528\uff0c\u53ef\u4ee5\u900f\u904e\u6307\u4ee4\u5217\u7684\u65b9\u5f0f\u4f86\u5275\u5efa\u4e00\u5207\u6240\u9700\u8cc7\u6e90\uff0c\u552f\u4e00\u8981\u6ce8\u610f\u7684\u662f\u5b89\u88dd\u5b8c\u7562\u4e4b\u5f8c\u9084\u9700\u8981\u4eba\u70ba\u624b\u52d5\u5b89\u88dd CNI \u7684\u89e3\u6c7a\u65b9\u6848\u6574\u500b Kubernetes \u624d\u7b97\u662f\u5b89\u88dd\u5b8c\u7562\u3002"),(0,l.kt)("p",null,"Kubeadm \u672c\u8eab\u4e5f\u652f\u63f4\u67b6\u8a2d\u591a\u7bc0\u9ede\u7684\u53e2\u96c6\uff0c\u53ea\u662f\u5728\u4f7f\u7528\u4e0a\u6c92\u6709\u9019\u9ebc\u65b9\u4fbf\uff0c\u9700\u8981\u5148\u5275\u5efa Master \u7bc0\u9ede\uff0c\u4e26\u4e14\u7522\u751f\u76f8\u5c0d\u61c9\u7684 token/key\uff0c\u63a5\u4e0b\u4f86\u5176\u4ed6\u7bc0\u9ede\u4f7f\u7528 kubeadm \u7684\u6307\u4ee4\u52a0\u5165\u5230\u5df2\u7d93\u5275\u5efa\u7684\u53e2\u96c6\u4e2d\u3002"),(0,l.kt)("p",null,"\u7e3d\u9ad4\u4f86\u8aaa\uff0c Kubeadm \u80fd\u5920\u6eff\u8db3\u4e0a\u8ff0\u8981\u6c42\uff0c\u4f46\u662f\u5be6\u4f5c\u4e0a\u6703\u7a0d\u5acc\u9ebb\u7169\uff0c\u7279\u5225\u662f\u591a\u7bc0\u9ede\u7684\u60c5\u6cc1\u4e0b\u9084\u8981\u8655\u7406 Token/key \u7684\u8cc7\u8a0a\uff0c\u6b64\u5916 CNI \u7684\u5b89\u88dd\u4e5f\u9700\u8981\u81ea\u5df1\u8655\u7406\uff0c\u4f46\u662f\u4f5c\u70ba\u4e00\u500b\u55ae\u7bc0\u9ede\u7684\u6e2c\u8a66\u74b0\u5883\u4e5f\u7b97\u662f\u5bb9\u6613\u4e0a\u624b\u4e14\u582a\u7528"),(0,l.kt)("h2",{id:"minikube"},"Minikube"),(0,l.kt)("p",null,"Minikube \u4e5f\u662f\u7531\u5b98\u65b9\u7dad\u8b77\u7684\u5c08\u6848\uff0c\u5176\u672c\u8eab\u7684\u67b6\u69cb\u4e00\u958b\u59cb\u662f\u4f9d\u8cf4\u65bc VM (\u865b\u64ec\u6a5f\u5668) \u4f86\u5e6b\u4f7f\u7528\u8005\u5275\u5efa\u4e00\u500b\u5168\u65b0\u6e2c\u8a66\u7684 Kubernetes \u53e2\u96c6\uff0c\u4efb\u4f55\u5e73\u53f0\u7684\u958b\u767c\u8005\u90fd\u53ef\u4ee5\u8f15\u9b06\u53ea\u7528\uff0c\u56e0\u70ba\u80cc\u5f8c\u90fd\u6703\u5e6b\u4f60\u8d77\u4e00\u500b\u5168\u65b0\u7684 VM \u3002\u7576 VM \u8d77\u4f86\u4e4b\u5f8c\uff0c\u5176\u6703\u900f\u904e kubeadm \u7684\u65b9\u5f0f\u5e6b\u5fd9\u5efa\u7acb\u8207\u8a2d\u5b9a Kubernetes \u53e2\u96c6\uff0c\u4e26\u4e14\u5e6b\u4f60\u628a CNI \u7b49\u6307\u4ee4\u90fd\u5b89\u88dd\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u4f9d\u8cf4 VM \u4e4b\u5916\uff0c\u5176\u4e5f\u6709\u63d0\u4f9b\u4e0d\u540c\u5e95\u5c64\u5be6\u4f5c\uff0c\u8b6c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," \u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u8a72\u6a5f\u5668\u4e0a\u900f\u904e kubeadm \u4f86\u5efa\u7acb\uff0c\u57fa\u672c\u4e0a\u6574\u500b\u67b6\u69cb\u6703\u8b8a\u5f97\u8ddf kubeadm \u975e\u5e38\u985e\u4f3c\uff0c\u6bd4\u8f03\u5927\u7684\u5dee\u7570\u662f CNI \u4e5f\u6703\u4e00\u4f75\u5e6b\u4f60\u5b89\u88dd\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u6b64\u5916 Mnikube \u672c\u8eab\u4e5f\u6709\u4e00\u4e9b\u5c6c\u65bc\u81ea\u5df1\u7684\u5957\u4ef6\uff0c\u53ef\u4ee5\u628a\u4e00\u4e9b\u529f\u80fd\u6574\u5305\u88dd\u9032\u53bb\uff0c\u5c0d\u65bc\u9019\u500b\u529f\u80fd\u6211\u7684\u60f3\u6cd5\u662f\u4e0d\u597d\u4e5f\u4e0d\u58de\uff0c\u4e0d\u58de\u7684\u5730\u65b9\u5728\u65bc\u63d0\u4f9b\u4e00\u500b\u74b0\u5883\u8b93\u4f7f\u7528\u8005\u53bb\u6e2c\u8a66\u529f\u80fd\uff0c\u8457\u5be6\u65b9\u4fbf\uff0c\u4e0d\u597d\u7684\u5730\u65b9\u5728\u65bc\u53ef\u80fd\u6703\u8b93\u4f7f\u7528\u8005\u4ee5\u70ba\u9019\u4e9b\u529f\u80fd\u90fd\u662f Kubernetes \u672c\u4f86\u5c31\u6709\u7684\uff0c\u53cd\u800c\u6703\u6709\u6240\u8aa4\u89e3\uff0c\u751a\u81f3\u5c0d\u65bc\u5176\u80cc\u5f8c\u4f7f\u7528\u539f\u7406\u90fd\u4e0d\u592a\u6e05\u695a\u5c31\u8349\u8349\u5b78\u7fd2\u5b8c\u7562\u3002"),(0,l.kt)("p",null,"\u7e3d\u9ad4\u4f86\u8aaa\uff0c Minikube \u4e5f\u53ef\u4ee5\u6eff\u8db3\u4e0a\u8ff0\u7684\u90e8\u5206\u8981\u6c42\uff0c\u591a\u7bc0\u9ede\u7684\u90e8\u5206\u53ef\u80fd\u5c31\u6703\u8dd1\u8d77\u4f86\u591a\u500b VM \u4f86\u5efa\u7acb\uff0c\u6d88\u8017\u7684\u8cc7\u6e90\u6703\u76f8\u5c0d\u591a\u4e00\u9ede\u3002"),(0,l.kt)("h2",{id:"kind"},"KIND"),(0,l.kt)("p",null,"KIND \u7684\u5168\u540d\u662f Kubernetes In Docker\uff0c\u9867\u540d\u601d\u7fa9\u5c31\u662f\u628a Kubernetes \u7684\u7bc0\u9ede\u90fd\u7528 Docker \u7684\u65b9\u5f0f\u53eb\u8d77\u4f86\u904b\u884c\uff0c\u6bcf\u4e00\u500b Docker Container \u5c31\u662f\u4e00\u500b Kubernetes \u7bc0\u9ede\uff0c\u53ef\u4ee5\u5145\u7576 Worker \u4e5f\u53ef\u4ee5\u5145\u7576 Master."),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u9762\u975e\u5e38\u7c21\u55ae\uff0c\u4f7f\u7528 KIND \u7684\u6307\u4ee4\u642d\u914d\u4e00\u500b\u8a2d\u5b9a\u6a94\u6848\u5c31\u53ef\u4ee5\u8f15\u9b06\u5730\u5efa\u7acb\u8d77 Kubernetes \u53e2\u96c6\uff0c\u7531\u65bc\u5168\u90e8\u7684\u64cd\u4f5c\u90fd\u662f\u7531 KIND \u5b8c\u6210\uff0c\u6240\u4ee5\u8981\u5efa\u7acb\u591a\u7bc0\u9ede\u7684\u65b9\u5f0f\u4e5f\u975e\u5e38\u7c21\u55ae\uff0c\u53ea\u8981\u8a2d\u5b9a\u6a94\u6848\u4e2d\u63cf\u8ff0\u9700\u8981\u591a\u5c11\u7bc0\u9ede\u4ee5\u53ca\u5404\u81ea\u4ec0\u9ebc\u8eab\u4efd\uff0c\u63a5\u4e0b\u4f86\u5c31\u4e00\u500b\u6307\u4ee4\u641e\u5b9a\u5168\u90e8\uff0c\u9023 CNI \u65b9\u9762\u90fd\u4e0d\u9700\u8981\u8655\u7406\uff0c KIND \u6703\u81ea\u884c\u641e\u5b9a"),(0,l.kt)("p",null,"\u7e3d\u9ad4\u4f86\u8aaa\uff0c KIND \u53ef\u4ee5\u6eff\u8db3\u4e0a\u8ff0\u6240\u6709\u9700\u6c42\uff0c\u591a\u7bc0\u9ede\u7684\u90e8\u5206\u5247\u662f\u7528 Docker \u4f86\u7ba1\u7406\uff0c\u56e0\u6b64\u5728\u8cc7\u6e90\u8207\u555f\u52d5\u901f\u5ea6\u65b9\u9762\u90fd\u6709\u826f\u597d\u7684\u6548\u679c\uff0c\u642d\u914d Vagrant \u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u8f15\u9b06\u6253\u5305\u4e00\u500b\u591a\u7bc0\u9ede\u7684 VM \u74b0\u5883\u4f9b\u6e2c\u8a66\u8005\u958b\u767c\uff0c\u8457\u5be6\u65b9\u4fbf\u3002"),(0,l.kt)("h2",{id:"k3d"},"K3D"),(0,l.kt)("p",null,"K3D \u662f\u7531 Rancher \u6240\u958b\u767c K3S \u7684 Docker \u7248\u672c\uff0c K3S \u662f\u4e00\u500b\u8f15\u91cf\u7d1a\u7684 Kubernetes \u5e73\u53f0\uff0c\u672c\u8eab\u9069\u5408\u7528\u5728\u4e00\u4e9b\u4f4e\u904b\u7b97\u8cc7\u6e90\u7cfb\u7d71\u4e0a"),(0,l.kt)("p",null,"\u800c K3D \u76f4\u63a5\u5c07 K3S \u7d66\u79fb\u690d\u5230 Docker \u4e4b\u4e2d\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5275\u5efa\u4e00\u500b K3S \u53e2\u96c6\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u65b9\u4fbf\u4e5f\u662f\u5f88\u7c21\u55ae\uff0c\u6574\u500b\u4e3b\u8981\u67b6\u69cb\u90fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"k3d")," \u9019\u500b\u57f7\u884c\u6a94\u6848\u4e0a\u9762\uff0c\u4f7f\u7528\u8a72\u6307\u4ee4\u642d\u914d\u4e0d\u540c\u7684\u53c3\u6578\u5c31\u53ef\u4ee5\u5feb\u901f\u5730\u5efa\u7acb\u8d77\u591a\u7bc0\u9ede\u7684 Kubernetes Cluster\uff0c\u6b64\u5916\u4e5f\u53ef\u4ee5\u900f\u904e\u6307\u4ee4\u52d5\u614b\u589e\u52a0\u7bc0\u9ede\uff0c\u4f7f\u7528\u4e0a\u4e5f\u662f\u975e\u5e38\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,"\u8207KIND\u4e00\u6a23\uff0c CNI \u7684\u90e8\u5206\u4e5f\u6703\u4e00\u4f75\u88ab\u8655\u7406\uff0c\u6240\u4ee5\u4f7f\u7528\u8005\u771f\u7684\u53ea\u9700\u8981\u4e00\u500b\u6307\u4ee4\u5c31\u53ef\u4ee5\u8655\u7406\u597d\u6240\u6709\u7684\u4e8b\u60c5\uff0c\u7e3d\u9ad4\u4f86\u8aaa\uff0c K3D \u53ef\u4ee5\u6eff\u8db3\u4e0a\u8ff0\u6240\u6709\u8981\u6c42\uff0c\u512a\u9ede\u57fa\u672c\u4e0a\u8ddf KIND \u5b8c\u5168\u985e\u4f3c\uff0c\u642d\u914d\u4e0a Vagrant \u771f\u7684\u53ef\u4ee5\u8f15\u9b06\u5730\u5efa\u7acb\u8d77\u591a\u7bc0\u9ede\u7684\u6a21\u64ec\u74b0\u5883\u3002"))}k.isMDXComponent=!0}}]);