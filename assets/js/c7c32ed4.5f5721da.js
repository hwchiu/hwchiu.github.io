"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[8451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=k;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},70936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const o={title:"Skaffold \u672c\u5730\u958b\u767c\u8207\u6e2c\u8a66",sidebar_position:8,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2020-11-15T09:39:19.000Z")},i=void 0,r={unversionedId:"techPost/2020/iThome_Challenge/cicd-8",id:"techPost/2020/iThome_Challenge/cicd-8",title:"Skaffold \u672c\u5730\u958b\u767c\u8207\u6e2c\u8a66",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2020/iThome_Challenge/cicd-8.md",sourceDirName:"techPost/2020/iThome_Challenge",slug:"/techPost/2020/iThome_Challenge/cicd-8",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-8",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:8,frontMatter:{title:"Skaffold \u672c\u5730\u958b\u767c\u8207\u6e2c\u8a66",sidebar_position:8,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2020-11-15T09:39:19.000Z"},sidebar:"techPost",previous:{title:"\u672c\u5730\u958b\u767c Kubernetes \u61c9\u7528\u7a0b\u5f0f\u6d41\u7a0b",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-7"},next:{title:"Pipeline System \u4ecb\u7d39",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-9"}},d={},s=[{value:"Detecting Source Code",id:"detecting-source-code",level:2},{value:"Bulding Artifacts",id:"bulding-artifacts",level:2},{value:"Test Artifacts",id:"test-artifacts",level:2},{value:"Tagging Artifacts",id:"tagging-artifacts",level:2},{value:"Pushing Artifac",id:"pushing-artifac",level:2},{value:"Deploying Artifacts",id:"deploying-artifacts",level:2},{value:"\u4fee\u6539\u7a0b\u5f0f\u78bc",id:"\u4fee\u6539\u7a0b\u5f0f\u78bc",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0a\u7bc7\u6587\u7ae0\u4e2d\u6211\u5011\u63a2\u8a0e\u4e86\u672c\u5730\u958b\u767c\u61c9\u7528\u7a0b\u5f0f\u8207 Kubernetes \u6574\u5408\u7684\u6e2c\u8a66\u6d41\u7a0b\uff0c\u900f\u904e\u4e0d\u540c\u7684 Kubernetes \u90e8\u7f72\u5de5\u5177\u6703\u6709\u4e0d\u540c\u7684\u7d50\u679c\uff0c\u5982\u679c\u63a1\u7528"),(0,l.kt)("p",null,"\u7684\u662f KIND \u9019\u7a2e\u5de5\u5177\uff0c\u672c\u8eab\u5c31\u6709\u63d0\u4f9b\u984d\u5916\u7684\u6307\u4ee4\u5e6b\u52a9\u958b\u767c\u8005\u5c07\u672c\u5730\u6e2c\u8a66\u7684 Contianer Image \u7d66\u8f09\u5165\u5230 KIND \u53e2\u96c6\u4e2d\uff0c\u53ef\u4ee5\u63d0\u5347\u6574\u9ad4\u958b\u767c\u6548"),(0,l.kt)("p",null,"\u7387\uff0c\u4f46\u662f\u5982\u679c\u63a1\u7528\u7684\u4e0d\u662f KIND \u7684\u8a71\uff0c\u90a3\u8a72\u600e\u9ebc\u8fa6\uff1f"),(0,l.kt)("p",null,"\u56e0\u6b64\u672c\u7bc7\u5c31\u8981\u4f86\u4ecb\u7d39\u53e6\u5916\u4e00\u500b\u958b\u6e90\u5de5\u5177 ",(0,l.kt)("inlineCode",{parentName:"p"},"Skaffold"),"\uff0c\u770b\u770b\u6211\u5011\u53ef\u4ee5\u5982\u4f55\u4f7f\u7528\u9019\u5957\u5de5\u5177\u4f86\u63d0\u5347\u672c\u5730\u958b\u767c Kubernetes \u61c9\u7528\u7684\u6548\u7387 (\u524d\u63d0\u662f\u4f60\u6709\u9700\u8981\u4e00\u500b Kubernetes \u4f86\u6e2c\u8a66)"),(0,l.kt)("h1",{id:"skaffold-\u4ecb\u7d39"},"Skaffold \u4ecb\u7d39"),(0,l.kt)("p",null,"Skaffold \u5b98\u65b9\u662f\u9019\u6a23\u4ecb\u7d39\u81ea\u5df1\u5de5\u5177\u7684"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster.")),(0,l.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa Skaffold \u662f\u4e00\u500b\u5e6b\u52a9\u958b\u767c Kubernetes-natvie \u61c9\u7528\u7a0b\u5f0f\u7684\u5de5\u5177\uff0c\u5176\u6703\u5e6b\u4f60\u5efa\u7f6e\u4f60\u7684 Container Image, \u63a8\u9001 Container Image \u5230 \u90e8\u7f72\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u5230 Kubernetes \u53e2\u96c6\uff0c\u5c07\u9019\u4e9b\u52d5\u4f5c\u4e00\u6b21\u6574\u5408\uff0c\u8b93\u958b\u767c\u8005\u80fd\u5920\u5c08\u5fc3\u65bc\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\uff0c\u800c\u61c9\u7528\u7a0b\u5f0f\u6700\u5f8c\u5982\u4f55\u8dd1\u5230 Kubernetes \u4e0a\u5247\u5168\u90e8\u4ea4\u7d66 Skaffold \u4f86\u8655\u7406\u3002"),(0,l.kt)("p",null,"\u8207\u4e4b\u524d\u7684\u8b70\u984c\u76f8\u6bd4\u4e4b\u4e0b\uff0c Skaffold \u9664\u4e86\u652f\u63f4\u672c\u5730\u7684 Kubernetes \u5916\uff0c\u4e5f\u652f\u63f4\u9060\u65b9\u7684 Kuberentes \u53e2\u96c6\uff0c\u6211\u5011\u4f86\u770b\u4e00\u4e0b\u5176\u652f\u63f4\u54ea\u4e9b\u985e\u578b\u7684 Kuberentes \u5427"),(0,l.kt)("p",null,"\u4e0b\u8868\u7bc0\u9304\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/environment/local-cluster/"},"\u5b98\u65b9\u6587\u4ef6"),", \u53ef\u4ee5\u770b\u5230\u5c0d\u65bc\u672c\u5730\u7684 Kubernetes \u53e2\u96c6\u652f\u63f4\u4e0d\u5c11\uff0c\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"minikube"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," ",(0,l.kt)("inlineCode",{parentName:"p"},"k3d")," \u4e4b\u524d\u63d0\u904e\u7684\u90fd\u6709\u652f\u63f4\uff0c\u6b64\u5916 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-desktop")," \u9019\u985e\u578b\u4e5f\u6709\u652f\u63f4\u3002"),(0,l.kt)("p",null,"Remote \u7684\u8a71\u5247\u662f\u4ee5 Google \u70ba\u4e3b\uff0c\u7531\u65bc\u672c\u7ae0\u7bc0\u63a2\u8a0e\u7684\u90fd\u662f\u672c\u5730\u7684\u90e8\u7f72\uff0c\u6240\u4ee5\u63a5\u4e0b\u4f86\u9084\u662f\u6703\u4ee5\u672c\u5730\u7684 Kuberentes \u53e2\u96c6\u70ba\u7bc4\u4f8b\u53bb\u4ecb\u7d39\u8207\u4f7f\u7528"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes context"),(0,l.kt)("th",{parentName:"tr",align:null},"Local cluster type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker-desktop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},(0,l.kt)("inlineCode",{parentName:"a"},"Docker Desktop"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker-for-desktop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},(0,l.kt)("inlineCode",{parentName:"a"},"Docker Desktop"))),(0,l.kt)("td",{parentName:"tr",align:null},"This context name is deprecated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minikube"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/minikube/"},(0,l.kt)("inlineCode",{parentName:"a"},"minikube"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-(.*)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/kind"},(0,l.kt)("inlineCode",{parentName:"a"},"kind"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern is used by kind >= v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(.*)@kind"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/kind"},(0,l.kt)("inlineCode",{parentName:"a"},"kind"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern was used by kind < v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k3d-(.*)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/k3d"},(0,l.kt)("inlineCode",{parentName:"a"},"k3d"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern is used by k3d >= v3.0.0")))),(0,l.kt)("h1",{id:"\u67b6\u69cb"},"\u67b6\u69cb"),(0,l.kt)("p",null,"\u4e0b\u5716\u7bc0\u9304\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/design/"},"\u5b98\u65b9\u6587\u4ef6")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://skaffold.dev/images/architecture.png",alt:"architecture"})),(0,l.kt)("p",null,"\u5716\u7247\u4e2d\u85cd\u8272\u57fa\u5e95\u5c31\u662f Skaffold \u4e2d\u6700\u5e38\u4f7f\u7528\u5230\u7684\u529f\u80fd\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u4e00\u500b\u4e00\u500b\u4ecb\u7d39\u6bcf\u500b\u5340\u584a\u5728\u505a\u4ec0\u9ebc\u4e8b\u60c5"),(0,l.kt)("h2",{id:"detecting-source-code"},"Detecting Source Code"),(0,l.kt)("p",null,"\u5982\u540c\u524d\u8a00\u6240\u8ff0\uff0c Skaffold \u5e0c\u671b\u958b\u767c\u8005\u53ef\u4ee5\u5c08\u6ce8\u65bc\u7a0b\u5f0f\u78bc\u7684\u958b\u767c\uff0c\u800c\u5f8c\u7e8c\u7684\u6d41\u7a0b\u90fd\u8b93\u5176\u4f86\u5e6b\u5fd9\u641e\u5b9a\uff0c\u56e0\u6b64\u5176\u5167\u5efa\u4e00\u500b\u5075\u6e2c\u7cfb\u7d71\uff0c\u7576\u76ee\u6a19\u76ee\u9304\u5167\u7684\u7a0b\u5f0f\u78bc\u6709\u6240\u66f4\u52d5\u6642\uff0c\u5c31\u6703\u81ea\u52d5\u5730\u57f7\u884c\u76f8\u95dc\u5de5\u4f5c\u6d41\u7a0b\uff0c\u9019\u6a23\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\uff0c\u53ea\u9700\u8981\u5b58\u64cb\uff0c\u7b49\u5f85\u4e00\u9ede\u6642\u9593\u5c31\u53ef\u4ee5\u65bc Kubernetes \u53e2\u96c6\u4e2d\u770b\u5230\u6700\u65b0\u7684\u7a0b\u5f0f\u78bc"),(0,l.kt)("h2",{id:"bulding-artifacts"},"Bulding Artifacts"),(0,l.kt)("p",null,"\u7576\u7a0b\u5f0f\u78bc\u88ab\u5075\u6e2c\u5230\u66f4\u52d5\u5f8c\uff0c Skaffold \u5c31\u6703\u958b\u59cb\u5efa\u7f6e\u76f8\u95dc\u7522\u7269\uff0c\u9019\u908a\u652f\u63f4\u591a\u7a2e\u985e\u578b\uff0c\u8b6c\u5982 Dockerfile, Bazel, Jib Maven \u751a\u81f3\u662f\u5176\u4ed6\u81ea\u5b9a\u7fa9\u7684\u8173\u672c\u3002\u9664\u4e86\u672c\u5730\u7684\u7522\u7269\u7522\u751f\u4e4b\u5916\uff0c Skaffold \u4e5f\u6709\u8ddf Google Cloud Build \u6709\u6240\u6574\u5408\uff0c\u9019\u90e8\u5206\u6211\u8a8d\u70ba\u8ddf Skaffold \u662f Google \u958b\u6e90\u6709\u5f88\u5927\u7684\u95dc\u4fc2\uff0c\u6240\u4ee5\u76ee\u524d\u53ea\u6709 Google \u5bb6\u7684\u670d\u52d9\u6709\u652f\u63f4\u3002"),(0,l.kt)("h2",{id:"test-artifacts"},"Test Artifacts"),(0,l.kt)("p",null,"\u7576\u7522\u7269\u7522\u751f\u5f8c\uff0c\u6703\u5c0d\u9019\u500b\u7522\u7269\u9032\u884c\u6e2c\u8a66\uff0c\u9019\u500b\u968e\u6bb5\u80fd\u505a\u7684\u9078\u64c7\u6bd4\u8f03\u5c11\uff0c\u76ee\u524d\u662f\u57fa\u65bc ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/container-structure-test"},"Container-structure-test")," \u9019\u5957\u958b\u6e90\u8edf\u9ad4\u4f86\u9032\u884c\u6e2c\u8a66\uff0c\u6709\u8208\u8da3\u77ad\u89e3\u9019\u500b\u5c08\u6848\u505a\u4ec0\u9ebc\u7684\u53ef\u4ee5\u9ede\u9078\u524d\u8ff0\u9023\u7d50\u6216\u662f\u5230",(0,l.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/pipeline-stages/testers/"},"\u5b98\u65b9\u9801\u9762"),"\u77ad\u89e3\u66f4\u591a"),(0,l.kt)("h2",{id:"tagging-artifacts"},"Tagging Artifacts"),(0,l.kt)("p",null,"\u7576\u7522\u7269\u7522\u751f\u4e5f\u6e2c\u8a66\u5b8c\u7562\u4e4b\u5f8c\uff0c\u63a5\u4e0b\u4f86\u6703\u5c0d\u7522\u7269\u9032\u884c Tag \u7684\u52d5\u4f5c\uff0c\u8a72 Tag \u6703\u6253\u5230 Container Image \u4e0a\uff0c\u76ee\u524d\u6709\u652f\u63f4\u56db\u7a2e\u9078\u9805\uff0c\u5305\u542b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Git Commit IDs"),(0,l.kt)("li",{parentName:"ol"},"Sha256 Hash"),(0,l.kt)("li",{parentName:"ol"},"Go Tempate with Environment Variable Support"),(0,l.kt)("li",{parentName:"ol"},"Date & Time")),(0,l.kt)("p",null,"\u56db\u8005\u8a73\u7d30\u7684\u5dee\u7570\u53ef\u4ee5\u89c0\u770b",(0,l.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/pipeline-stages/taggers/"},"\u5b98\u65b9\u9801\u9762")," \u4f86\u77ad\u89e3\u66f4\u591a\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u8b93\u4f60\u9078\u64c7\u4e0d\u540c\u7684 image tag"),(0,l.kt)("h2",{id:"pushing-artifac"},"Pushing Artifac"),(0,l.kt)("p",null,"\u9019\u500b\u6b65\u9a5f\u5c31\u662f\u60f3\u8fa6\u6cd5\u5c07\u4e0a\u8ff0\u7684\u7522\u7269\u7d66\u9001\u5230 Kubernetes \u88e1\u9762\uff0c\u9019\u90e8\u5206\u5982\u679c Kubernetes \u662f\u672c\u5730\u6a5f\u5668\uff0c\u53ef\u4ee5\u5ffd\u7565\u9019\u500b\u6b65\u9a5f\u76f4\u63a5\u4f7f\u7528\uff0c\u5c31\u5982\u540c\u524d\u8ff0\u7684 Kubeadm \u7684\u74b0\u5883\u4e00\u6a23\u3002 \u5982\u679c\u662f\u9060\u65b9\u7684\u74b0\u5883\u7684\u8a71\uff0c\u9019\u908a\u5c31\u6703\u6839\u64da\u9060\u65b9 Kubernetes Cluster \u4e0d\u540c\u7a2e\u985e\u800c\u63a1\u7528\u7684\u65b9\u5f0f\u4f86\u8655\u7406\uff0c\u5176\u5224\u65b7\u6e96\u5247\u5247\u662f\u4f9d\u64da KUBECONFIG  CURRENT-CONTEXT \u7684\u540d\u7a31\uff0c\u5c31\u4ee5\u6700\u4e0a\u9762\u7684\u652f\u63f4\u74b0\u5883\u4f86\u8aaa"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes context"),(0,l.kt)("th",{parentName:"tr",align:null},"Local cluster type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker-desktop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},(0,l.kt)("inlineCode",{parentName:"a"},"Docker Desktop"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker-for-desktop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},(0,l.kt)("inlineCode",{parentName:"a"},"Docker Desktop"))),(0,l.kt)("td",{parentName:"tr",align:null},"This context name is deprecated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minikube"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/minikube/"},(0,l.kt)("inlineCode",{parentName:"a"},"minikube"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-(.*)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/kind"},(0,l.kt)("inlineCode",{parentName:"a"},"kind"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern is used by kind >= v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(.*)@kind"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/kind"},(0,l.kt)("inlineCode",{parentName:"a"},"kind"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern was used by kind < v0.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k3d-(.*)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/k3d"},(0,l.kt)("inlineCode",{parentName:"a"},"k3d"))),(0,l.kt)("td",{parentName:"tr",align:null},"This pattern is used by k3d >= v3.0.0")))),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u4e0d\u540c\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"KIND")," \u7522\u751f\u7684 kubernetes context \u540d\u7a31\u4e0d\u540c\uff0c\u4f46\u662f\u53ea\u8981\u6709\u7b26\u5408\u9019\u5169\u500b\u898f\u5247\uff0c Skaffold \u90fd\u6703\u8996\u70ba\u662f KIND \u4e26\u4e14\u7528 KIND \u7684\u65b9\u5f0f\u5e6b\u4f60\u63a8\u4e0a KIND \u53e2\u96c6"),(0,l.kt)("h2",{id:"deploying-artifacts"},"Deploying Artifacts"),(0,l.kt)("p",null,"\u6700\u5f8c\u5247\u662f\u5c07\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72\u5230 Kuberentes \u88e1\u9762\uff0c\u9019\u908a\u652f\u63f4\u4e09\u7a2e\u5de5\u5177\u4f86\u90e8\u7f72\uff0c\u5206\u5225\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"kubectl"),(0,l.kt)("li",{parentName:"ol"},"helm"),(0,l.kt)("li",{parentName:"ol"},"kustomize")),(0,l.kt)("p",null,"\u6211\u8a8d\u70ba\u9019\u4e09\u7a2e\u57fa\u672c\u4e0a\u5df2\u7d93\u6db5\u84cb\u4e86\u5927\u90e8\u5206\u4eba\u7684\u4f7f\u7528\u60c5\u5883\uff0c Skaffold \u6703\u5c07\u6a94\u6848\u5167\u7684 ImageTag \u63db\u6210\u524d\u9762\u6b65\u9a5f\u7522\u751f\u7684 Tag \u4e26\u4e14\u5c07\u5167\u5bb9\u63a8\u5230 Kubernetes \u5167\u90e8\u53bb\u66f4\u65b0"),(0,l.kt)("p",null,"\u60f3\u8981\u77ad\u89e3\u66f4\u591a\u95dc\u65bc Skaffold \u7684\u4ecb\u7d39\u53ef\u4ee5\u53c3\u95b1",(0,l.kt)("a",{parentName:"p",href:"https://skaffold.dev/"},"\u5b98\u7db2")),(0,l.kt)("h1",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,l.kt)("p",null,"\u5b89\u88dd\u6307\u4ee4\u4e5f\u975e\u5e38\u7c21\u55ae\uff0c\u6574\u500b Skaffold \u7684\u904b\u4f5c\u6838\u5fc3\u90fd\u5728\u5176 Binary\uff0c\u6240\u4ee5\u4e5f\u53ea\u6709\u4e00\u500b\u8edf\u9ad4\u9700\u8981\u4e0b\u8f09\u8207\u5b89\u88dd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \\\nsudo install skaffold /usr/local/bin/\n")),(0,l.kt)("p",null,"\u5b89\u88dd\u5b8c\u7562\u5f8c\u53ef\u4ee5\u770b\u5230\u8a72\u6307\u4ee4\u6709\u975e\u5e38\u591a\u7684\u7528\u6cd5\u53ef\u4ee5\u4f7f\u7528\uff0c\u63a5\u4e0b\u4f86\u5c07\u6703\u4ecb\u7d39\u672c\u5730\u958b\u767c\u6642\u53ef\u80fd\u6703\u4f7f\u7528\u7684\u6307\u4ee4\u53ca\u76f8\u95dc\u7528\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ skaffold\nA tool that facilitates continuous development for Kubernetes applications.\n\n  Find more information at: https://skaffold.dev/docs/getting-started/\n\nEnd-to-end pipelines:\n  run               Run a pipeline\n  dev               Run a pipeline in development mode\n  debug             [beta] Run a pipeline in debug mode\n\nPipeline building blocks for CI/CD:\n  build             Build the artifacts\n  deploy            Deploy pre-built artifacts\n  delete            Delete the deployed application\n  render            [alpha] Perform all image builds, and output rendered Kubernetes manifests\n\nGetting started with a new project:\n  init              [alpha] Generate configuration for deploying an application\n  fix               Update old configuration to a newer schema version\n\nOther Commands:\n  completion        Output shell completion for the given shell (bash or zsh)\n  config            Interact with the Skaffold configuration\n  credits           Export third party notices to given path (./skaffold-credits by default)\n  diagnose          Run a diagnostic on Skaffold\n  schema            List and print json schemas used to validate skaffold.yaml configuration\n  survey            Opens a web browser to fill out the Skaffold survey\n  version           Print the version information\n\nUsage:\n  skaffold [flags] [options]\n\nUse "skaffold <command> --help" for more information about a given command.\nUse "skaffold options" for a list of global command-line options (applies to all commands).\n')),(0,l.kt)("h1",{id:"demo"},"Demo"),(0,l.kt)("p",null,"\u9019\u908a\u6211\u5011\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u7684\u7bc4\u4f8b Repo \u4f86\u6e2c\u8a66"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/GoogleContainerTools/skaffold\ncd skaffold/examples/getting-started\n")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u7684\u7cfb\u7d71\u4e2d\u76ee\u524d\u6709\u4e4b\u524d\u7531 KIND \u6240\u5efa\u7acb\u7684 Kuberentes \u53e2\u96c6"),(0,l.kt)("p",null,"\u524d\u8ff0\u8b1b\u5230\u6574\u500b Skaffold \u7684\u67b6\u69cb\uff0c\u88e1\u9762\u6709\u4e9b\u968e\u6bb5\u90fd\u6703\u6709\u4e9b\u4e0d\u540c\u7684\u9078\u64c7\uff0c\u5be6\u969b\u4e0a\u9019\u4e9b\u9078\u64c7\u90fd\u662f\u4f9d\u8cf4\u4e00\u500b yaml \u7684\u8a2d\u5b9a\u6a94\u6848\u4f86\u8655\u7406\uff0c\u8a72\u8cc7\u6599\u593e\u5167\u5c31\u6709\u4e00\u500b\u9019\u6a23\u7684\u6a94\u6848"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat skaffold.yaml\napiVersion: skaffold/v2beta7\nkind: Config\nbuild:\n  artifacts:\n  - image: skaffold-example\ndeploy:\n  kubectl:\n    manifests:\n      - k8s-*\n")),(0,l.kt)("p",null,"\u9019\u88e1\u9762\u8a2d\u5b9a\u5e7e\u500b\u90e8\u5206"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7522\u7269\u7684\u90e8\u5206\uff0c\u6703\u628a image \u53eb\u505a skafoold-example"),(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u7684\u90e8\u5206\u6703\u628a\u6240\u6709\u7b26\u5408 ",(0,l.kt)("inlineCode",{parentName:"li"},"k8s-*")," \u5b57\u773c\u7684\u6a94\u6848\u90fd\u7528 kubectl \u7d66\u90e8\u7f72\u9032\u53bb")),(0,l.kt)("p",null,"\u9810\u8a2d\u7684\u60c5\u6cc1\u4e0b\u90fd\u6703\u4f7f\u7528 Dockerfile \u4f86\u5efa\u7f6e\u7522\u7269"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat Dockerfile\nFROM golang:1.12.9-alpine3.10 as builder\nCOPY main.go .\nRUN go build -o /app main.go\n\nFROM alpine:3.10\n# Define GOTRACEBACK to mark this container as using the Go language runtime\n# for `skaffold debug` (https://skaffold.dev/docs/workflows/debug/).\nENV GOTRACEBACK=single\nCMD ["./app"]\nCOPY --from=builder /app .\n')),(0,l.kt)("p",null,"\u4e0b\u65b9\u5247\u662f\u76f8\u95dc\u7684 Kubernetes yaml, \u975e\u5e38\u4e7e\u6de8\u8207\u55ae\u7d14"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat k8s-pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: getting-started\nspec:\n  containers:\n  - name: getting-started\n    image: skaffold-example\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u53ef\u4ee5\u547c\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"skaffold")," \u9019\u500b\u6307\u4ee4\u4f86\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e00\u6b21\u5b8c\u6574\u7684 workflow"),", \u5305\u542b\u5efa\u7f6e image, push image \u4ee5\u53ca deploy \u5230 kubernetes \u88e1\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ skaffold dev\nListing files to watch...\n - skaffold-example\nGenerating tags...\n - skaffold-example -> skaffold-example:v1.14.0-7-g677d665c3\nChecking cache...\n - skaffold-example: Not found. Building\nFound [kind-kind] context, using local docker daemon.\nBuilding [skaffold-example]...\nSending build context to Docker daemon  3.072kB\nStep 1/7 : FROM golang:1.12.9-alpine3.10 as builder\n1.12.9-alpine3.10: Pulling from library/golang\n9d48c3bd43c5: Pull complete\n7f94eaf8af20: Pull complete\n9fe9984849c1: Pull complete\ncf0db633a67d: Pull complete\n0f7136d71739: Pull complete\nDigest: sha256:e0660b4f1e68e0d408420acb874b396fc6dd25e7c1d03ad36e7d6d1155a4dff6\nStatus: Downloaded newer image for golang:1.12.9-alpine3.10\n ---\x3e e0d646523991\nStep 2/7 : COPY main.go .\n ---\x3e afab364bca27\nStep 3/7 : RUN go build -o /app main.go\n ---\x3e Running in 7ac080c720c1\n ---\x3e cbcc0f655527\n Step 4/7 : FROM alpine:3.10\n3.10: Pulling from library/alpine\n21c83c524219: Already exists\nDigest: sha256:f0e9534a598e501320957059cb2a23774b4d4072e37c7b2cf7e95b241f019e35\nStatus: Downloaded newer image for alpine:3.10\n ---\x3e be4e4bea2c2e\nStep 5/7 : ENV GOTRACEBACK=single\n ---\x3e Running in 3336c2434250\n ---\x3e f7da9bb5a8f4\nStep 6/7 : CMD ["./app"]\n ---\x3e Running in ad83b9fb99e8\n ---\x3e c18d1a41c91d\nStep 7/7 : COPY --from=builder /app .\n ---\x3e 4dec7885d19b\nSuccessfully built 4dec7885d19b\nSuccessfully tagged skaffold-example:v1.14.0-7-g677d665c3\nTags used in deployment:\n - skaffold-example -> skaffold-example:4dec7885d19bcf6a6fef2bc62c609390787a73be61501ad0bdaffd3b229fd9a5\nLoading images into kind cluster nodes...\n - skaffold-example:4dec7885d19bcf6a6fef2bc62c609390787a73be61501ad0bdaffd3b229fd9a5 -> Loaded\nImages loaded in 1.629866454s\nStarting deploy...\n - pod/getting-started created\nWaiting for deployments to stabilize...\nDeployments stabilized in 13.655262ms\nPress Ctrl+C to exit\nWatching for changes...\n[getting-started] Hello world!\n[getting-started] Hello world!\n[getting-started] Hello world!\n[getting-started] Hello world!\n[getting-started] Hello world!\n[getting-started] Hello world\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u7684\u7bc4\u4f8b\u53ef\u4ee5\u89c0\u5bdf\u5230"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Push \u7684\u898f\u5247, \u5075\u6e2c\u5230\u4f7f\u7528\u7684\u662f KIND\uff0c\u6240\u4ee5\u5c31\u547c\u53eb KIND \u7684\u65b9\u5f0f\u628a Image \u9001\u9032\u53bb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Loading images into kind cluster nodes...\n - skaffold-example:4dec7885d19bcf6a6fef2bc62c609390787a73be61501ad0bdaffd3b229fd9a5 -> Loaded\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Deploy \u7684\u90e8\u5206\u5247\u662f\u7528 Kubectl \u7684\u65b9\u5f0f\u5c07 Yaml \u9001\u9032\u53bb\uff0c\u7136\u5f8c\u81ea\u52d5\u8f38\u51fa\u76f8\u95dc\u7684 Log.")),(0,l.kt)("h2",{id:"\u4fee\u6539\u7a0b\u5f0f\u78bc"},"\u4fee\u6539\u7a0b\u5f0f\u78bc"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u958b\u5169\u500b\u8996\u7a97\uff0c\u4e00\u500b\u8996\u7a97\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"skaffold dev")," \u4f86\u5075\u6e2c\u4e26\u8655\u7406\u6574\u500b\u6d41\u7a0b\uff0c\u53e6\u4e00\u500b\u8996\u7a97\u5247\u662f\u7528\u4f86\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.go")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.go")," \u6539\u6210\u4e0b\u5217\u5167\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n        "fmt"\n        "time"\n)\n\nfunc main() {\n        for {\n                fmt.Println("Hello world!-hwchiu-ithome")\n\n                time.Sleep(time.Second * 1)\n        }\n}\n')),(0,l.kt)("p",null,"\u7576\u6a94\u6848\u5b58\u4e0b\u53bb\u4e4b\u5f8c\uff0c\u99ac\u4e0a\u89c0\u5bdf\u53e6\u5916\u4e00\u500b\u8996\u7a97\uff0c\u6703\u767c\u73fe\u5f88\u5feb\u5c31\u5075\u6e2c\u5230\u7a0b\u5f0f\u78bc\u7684\u66f4\u52d5\uff0c\u4e26\u4e14\u99ac\u4e0a\u5c07\u4fee\u6539\u7684\u5167\u5bb9\u76f4\u63a5\u9001\u5230 Kubernetes \u88e1\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[getting-started] Hello world!-hwchiu\n[getting-started] Hello world!-hwchiu\n[getting-started] Hello world!-hwchiu\n[getting-started] Hello world!-hwchiu\n\nGenerating tags...\n - skaffold-example -> skaffold-example:v1.14.0-7-g677d665c3-dirty\nChecking cache...\n - skaffold-example: Not found. Building\nFound [kind-kind] context, using local docker daemon.\nBuilding [skaffold-example]...\nSending build context to Docker daemon  3.072kB\nStep 1/7 : FROM golang:1.12.9-alpine3.10 as builder\n ---\x3e e0d646523991\nStep 2/7 : COPY main.go .\n ---\x3e 5a9d1bded1b1\nStep 3/7 : RUN go build -o /app main.go\n ---\x3e Running in 0b71f1abe4e7\n\n ---\x3e bcc350de6d46\nStep 4/7 : FROM alpine:3.10\n ---\x3e be4e4bea2c2e\nStep 5/7 : ENV GOTRACEBACK=single\n ---\x3e Using cache\n ---\x3e f7da9bb5a8f4\nStep 6/7 : CMD ["./app"]\n ---\x3e Using cache\n ---\x3e c18d1a41c91d\nStep 7/7 : COPY --from=builder /app .\n ---\x3e a73f3a1b761b\nSuccessfully built a73f3a1b761b\nSuccessfully tagged skaffold-example:v1.14.0-7-g677d665c3-dirty\nTags used in deployment:\n - skaffold-example -> skaffold-example:a73f3a1b761b040dfab47ba89b145da88c517ec7d031c32e5d61cb5e3bf205d3\nLoading images into kind cluster nodes...\n - skaffold-example:a73f3a1b761b040dfab47ba89b145da88c517ec7d031c32e5d61cb5e3bf205d3 -> Loaded\nImages loaded in 1.327803742s\nStarting deploy...\n - pod/getting-started configured\n Waiting for deployments to stabilize...\nDeployments stabilized in 2.156854ms\nWatching for changes...\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n[getting-started] Hello world!-hwchiu-ithome\n')),(0,l.kt)("p",null,"\u9019\u6642\u5019\u7528 kubectl \u53bb\u89c0\u5bdf\u7cfb\u7d71\u4e0a\u7684\u8cc7\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods\nNAME              READY   STATUS    RESTARTS   AGE\ngetting-started   1/1     Running   1          111s\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe\u9019\u500b Pod \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Restart")," \u6b21\u6578\u6709\u589e\u52a0\uff0c\u9019\u662f\u56e0\u70ba Container Image \u66f4\u65b0\u5f8c\uff0cPod \u91cd\u555f\uff0c\u8f09\u5165\u65b0\u7684 Image \u6700\u5f8c\u986f\u793a\u51fa\u65b0\u7684 log \u8cc7\u8a0a ",(0,l.kt)("em",{parentName:"p"},"Hello world!-hwchiu-ithome")),(0,l.kt)("p",null,"\u5230\u9019\u908a\u6211\u5011\u5c31\u57fa\u672c\u4ecb\u7d39\u4e86 Skaffold \u7684\u64cd\u4f5c\u6d41\u7a0b\u8ddf\u4e00\u500b\u7c21\u55ae Demo, \u5982\u679c\u5c0d\u65bc\u9019\u500b\u5de5\u5177\u6709\u8208\u8da3\u7684\u8a71\u53ef\u4ee5\u5617\u8a66\u73a9\u73a9\u770b\uff0c\u5c07\u5176\u6574\u5408\u5230 Helm \u6216\u662f Kustomize \u7b49\u4e0d\u540c\u90e8\u7f72\u65b9\u5f0f\uff0c\u770b\u770b\u662f\u5426\u771f\u7684\u80fd\u5920\u63d0\u5347\u81ea\u5df1\u7684\u958b\u767c\u6548\u7387\u3002"))}u.isMDXComponent=!0}}]);