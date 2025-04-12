"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[93200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>C});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,C=c["".concat(a,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(C,o(o({ref:t},s),{},{components:n})):r.createElement(C,o({ref:t},s))}));function C(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const i={title:"CD \u8207 Kubernetes \u7684\u6574\u5408",sidebar_position:14,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2020-12-11T20:50:32.000Z")},o=void 0,p={unversionedId:"2020/iThome_Challenge/cicd-14",id:"2020/iThome_Challenge/cicd-14",title:"CD \u8207 Kubernetes \u7684\u6574\u5408",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/2020/iThome_Challenge/cicd-14.md",sourceDirName:"2020/iThome_Challenge",slug:"/2020/iThome_Challenge/cicd-14",permalink:"/docs/2020/iThome_Challenge/cicd-14",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",lastUpdatedBy:"HWC",sidebarPosition:14,frontMatter:{title:"CD \u8207 Kubernetes \u7684\u6574\u5408",sidebar_position:14,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2020-12-11T20:50:32.000Z"},sidebar:"techPost",previous:{title:"CD \u7cfb\u7d71\u7684\u9078\u64c7\u8b70\u984c",permalink:"/docs/2020/iThome_Challenge/cicd-13"},next:{title:"CD \u4e4b Pull Mode \u4ecb\u7d39: Keel",permalink:"/docs/2020/iThome_Challenge/cicd-15"}},a={},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0a\u7bc7\u6587\u7ae0\u4e2d\u6211\u5011\u63a2\u8a0e\u4e86 CD \u904e\u7a0b\u7684\u5404\u7a2e\u8b70\u984c\uff0c\u800c\u672c\u7bc7\u6587\u7ae0\u5247\u6703\u958b\u59cb\u63a2\u8a0e CD \u8207 Kubernetes \u7684\u90e8\u7f72\u6574\u5408"),(0,l.kt)("p",null,"\u9019\u908a\u8981\u7279\u5225\u5f37\u8abf\u7684\u662f CI \u8ddf CD \u5169\u4ef6\u4e8b\u60c5\u672c\u4f86\u5c31\u4e0d\u9700\u8981\u4e00\u5b9a\u5728\u4e00\u8d77\uff0c\u6700\u7c21\u55ae\u7684\u60c5\u6cc1\u4e0b\u5c31\u662f\u5c07 CI \u8207 CD \u5169\u500b\u6b65\u9a5f\u6574\u5408\u5230\u540c\u4e00\u500b pipeline \u7cfb\u7d71"),(0,l.kt)("p",null,"\u4e0a\u3002\u4f46\u662f\u6709\u6642\u5019\u6703\u5e0c\u671b\u900f\u904e\u624b\u52d5\u90e8\u7f72\uff0c\u4f46\u662f\u90e8\u7f72\u4e2d\u9593\u7684\u904e\u7a0b\u5e0c\u671b\u81ea\u52d5\u5316\uff0c\u6240\u4ee5\u6703\u900f\u904e\u624b\u52d5\u89f8\u767c CD \u7684\u6d41\u7a0b\u4f86\u9054\u6210\u81ea\u52d5\u90e8\u7f72\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c CI \u8207 CD \u4f7f\u7528\u7684\u6d41\u6c34\u7dda\u7cfb\u7d71\u4e5f\u4e0d\u4e00\u5b9a\u8981\u7528\u540c\u4e00\u5957\u7cfb\u7d71\uff0c\u5c31\u5982\u540c\u524d\u4e00\u7bc7\u6587\u7ae0\u63d0\u5230\u5c08\u9580\u91dd\u5c0d CD \u9019\u500b\u6b65\u9a5f\u53bb\u5217\u51fa\u76f8\u95dc\u7684\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5c07\u6703\u5217\u51fa\u56db\u7a2e\u7528\u6cd5\uff0c\u9019\u56db\u7a2e\u7528\u6cd5\u53ef\u4ee5\u5206\u6210\u5169\u5927\u985e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Push Mode"),(0,l.kt)("li",{parentName:"ol"},"Pull Mode")),(0,l.kt)("p",null,"\u5176\u4e2d Push Mode \u7684\u6982\u5ff5\u662f\u7531\u6211\u5011\u7684 CD Pipeline \u4e3b\u52d5\u5c07\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u63a8\u5230\u9060\u65b9\u7684 Kubernetes Cluster \u5167"),(0,l.kt)("p",null,"\u7136\u800c Pull Mode \u7684\u6982\u5ff5\u662f\u7531 Kuberentes \u4e3b\u52d5\u53bb\u66f4\u65b0\uff0c\u85c9\u7531\u76e3\u807d\u9060\u65b9\u76ee\u6a19\u7684\u8b8a\u5316\u4f86\u78ba\u4fdd\u662f\u5426\u8981\u81ea\u52d5\u66f4\u65b0\u7248\u672c"),(0,l.kt)("h1",{id:"cicd-pipeline-push"},"CI/CD pipeline (Push)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qup5mjg.jpg",alt:null})),(0,l.kt)("p",null,"\u7b2c\u4e00\u500b\u662f\u6211\u8a8d\u70ba\u6700\u76f4\u63a5\u4e14\u76f4\u89c0\uff0c\u6211\u5011\u628a CI/CD \u5169\u500b\u6d41\u7a0b\u90fd\u653e\u5230\u540c\u4e00\u500b Pipeline \u7cfb\u7d71\u5167\uff0c\u5176\u8a2d\u8a08\u4e0a\u4e5f\u76f8\u5c0d\u7c21\u55ae"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7576 CI \u6d41\u7a0b\u7d50\u675f\u5f8c\uff0c\u63a5\u4e0b\u4f86\u5c31\u8dd1\u4e0b\u500b\u6b65\u9a5f\uff0c\u9019\u500b\u6b65\u9a5f\u5305\u542b\na. \u6e96\u5099\u76f8\u95dc\u57f7\u884c\u6a94\u6848\nb. \u900f\u904e\u76f8\u95dc\u5de5\u5177\u90e8\u7f72\u5230\u9060\u65b9\u7684 Kubernetes"),(0,l.kt)("li",{parentName:"ol"},"\u9019\u7a2e\u67b6\u69cb\u4e0b\uff0c\u56e0\u70ba\u8981\u5b58\u53d6\u9060\u65b9\u7684 kubernetes\uff0c\u4e5f\u662f\u6703\u9700\u8981\u5c07 KUBECONFIG \u9019\u500b\u6a94\u6848\u653e\u5230 Pipeline \u7cfb\u7d71\u4e2d\uff0c\u6240\u4ee5\u4f7f\u7528\u4e0a\u8981\u7279\u5225\u6ce8\u610f\n\u5b89\u5168\u6027\u7684\u554f\u984c\uff0c\u907f\u514d\u5225\u4eba\u5b58\u53d6\u5230\u9019\u500b KUBECONFIG\uff0c\u5426\u5247\u653b\u64ca\u8005\u53ef\u4ee5\u63a7\u5236\u4f60\u7684 Kubernetes \u53e2\u96c6")),(0,l.kt)("h1",{id:"\u4eba\u54e1\u89f8\u767c-push"},"\u4eba\u54e1\u89f8\u767c (Push)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/GMzaUxw.jpg",alt:null})),(0,l.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u4e0b\uff0c\u6211\u5011\u5c07 CI pipeline \u8207 CD pipeline \u7d66\u5206\u958b\u57f7\u884c\uff0c\u9019\u5169\u5957 pipeline \u8981\u4e0d\u8981\u4f7f\u7528\u540c\u4e00\u5957\u7cfb\u7d71\u7121\u6240\u8b02\uff0c\u81f3\u5c11 Job \u662f\u5206\u958b\u7684\u3002"),(0,l.kt)("p",null,"\u53e2\u96c6\u7ba1\u7406\u54e1\u6216\u662f\u5176\u4ed6\u6709\u6b0a\u9650\u7684\u4eba\u53ef\u4ee5\u900f\u904e\u76f4\u63a5\u57f7\u884c\u7576\u524d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"CD pipeline")," \u4f86\u89f8\u767c\u81ea\u52d5\u5316\u90e8\u5c6c\u3002\u9019\u7a2e\u7684\u597d\u8655\u5728\u65bc\uff0c\u5c0d\u65bc\u4e00\u4e9b\u6b63\u5f0f\u7684\u751f\u7522\u74b0\u5883"),(0,l.kt)("p",null,"\u4e0b\uff0c\u592a\u904e\u65bc\u81ea\u52d5\u7684\u90e8\u7f72\u4e0d\u4e00\u5b9a\u662f\u5b8c\u5168\u597d\u7684\uff0c\u6709\u6642\u5019\u6703\u9700\u8981\u4e00\u4e9b\u4eba\u70ba\u4ecb\u5165\u7684\u78ba\u8a8d\uff0c\u78ba\u8a8d\u4e00\u5207\u90fd\u6c92\u6709\u554f\u984c\u5f8c\u624d\u6703\u7e7c\u7e8c\u57f7\u884c\u81ea\u52d5\u90e8\u7f72\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\u9019\u500b\u67b6\u69cb\u4e0b\u53ef\u80fd\u7684\u4e00\u500b\u6d41\u7a0b\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u900f\u904e CI pipeline \u901a\u904e\u6e2c\u8a66\u4ee5\u53ca\u7522\u751f\u51fa\u6700\u5f8c\u8981\u4f7f\u7528\u7684 Image \u6a94\u6848"),(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u5718\u968a\u8207 PM \u7b49\u7d93\u904e\u78ba\u8a8d\uff0c\u516c\u544a\u66f4\u65b0\u6642\u9593\u5f8c\u5728\u624b\u52d5\u89f8\u767c\u81ea\u52d5\u90e8\u7f72\u7684\u5de5\u4f5c\u4f86\u5b8c\u6210\u90e8\u7f72"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u540c\u524d\u9762\u90e8\u7f72\uff0c\u9019\u908a\u4e5f\u6703\u9700\u8981\u5c07 Kubernetes \u5b58\u53d6\u6240\u9700\u8981\u7684 KUBECONFIG \u653e\u5230 CD pipeline \u5167\uff0c\u6240\u4ee5\u4e5f\u662f\u6709\u5b89\u5168\u6027\u7684\u554f\u984c\u9700\u8981\u6ce8\u610f")),(0,l.kt)("h1",{id:"container-image-\u89f8\u767c-push"},"Container Image \u89f8\u767c (Push)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/BTyDW7b.jpg",alt:null})),(0,l.kt)("p",null,"\u9019\u662f\u53e6\u5916\u4e00\u7a2e\u4e0d\u540c\u7684\u67b6\u69cb\uff0c\u6211\u5011\u5c07\u4eba\u70ba\u89f8\u767c\u7684\u90e8\u5206\u63d0\u4f9b\u4e86\u4e00\u500b\u65b0\u7684\u9078\u64c7\uff0c\u7576 Container Registry \u672c\u8eab\u767c\u73fe\u6709\u65b0\u7248\u672c\u7684 Container Image \u66f4\u65b0\u6642\uff0c\u6703\u900f\u904e\u4e0d\u540c\u7684\u65b9\u5f0f\u901a\u77e5\u9060\u65b9\u7684 CD pipeline \u53bb\u89f8\u767c\u81ea\u52d5\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u9019\u500b\u4f7f\u7528\u65b9\u6cd5\u6703\u4f9d\u8cf4\u4f60\u4f7f\u7528\u7684 Container Registry \u662f\u5426\u6709\u652f\u63f4\u9019\u7a2e\u7684\u67b6\u69cb\uff0c\u8b6c\u5982 Harbor \u9019\u500b\u958b\u6e90\u5c08\u6848\u5c31\u6709\u652f\u63f4\uff0c\u7576 image \u66f4\u65b0\u5f8c\u53ef\u4ee5\u900f\u904e webhook \u7684\u65b9\u5f0f\u5c07\u8a0a\u606f\u6253\u5230\u9060\u65b9\u3002\u800c\u9060\u65b9\u7684 CD pipeline \u5982\u679c\u4e5f\u6709\u9019\u7a2e\u6a5f\u5236\u53ef\u4ee5\u900f\u904e webhook \u4f86\u89f8\u767c\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u5be6\u4f5c\u4e0a\u9762\u7684\u6a5f\u5236\u3002"),(0,l.kt)("p",null,"\u7531\u65bc\u662f\u900f\u904e container registry \u6240\u89f8\u767c\u7684\u5de5\u4f5c\uff0c\u6240\u4ee5\u9019\u7a2e\u67b6\u69cb\u53ef\u4ee5\u652f\u63f4\u66f4\u591a\u7684\u89f8\u767c\u65b9\u5f0f\uff0c\u8b6c\u5982\u7ba1\u7406\u54e1\u4eca\u5929\u7dca\u6025\u9700\u6c42\uff0c\u624b\u52d5\u63a8\u52d5\u65b0\u7248\u7684 Container Image \u5230\u9060\u65b9 Registry\uff0c\u9019\u6a23\u4e5f\u80fd\u5920\u89f8\u767c"),(0,l.kt)("p",null,"\u56e0\u70ba\u8ddf\u524d\u8ff0\u67b6\u69cb\u5b8c\u5168\u985e\u4f3c\uff0c\u6240\u4ee5 KUBECONFIG \u4e5f\u662f\u6703\u653e\u5230\u74b0\u5883\u4e4b\u4e2d\uff0c\u5fc5\u9808\u8981\u6709\u5b89\u5168\u6027\u7684\u8003\u91cf\u3002"),(0,l.kt)("h1",{id:"pull-mode"},"Pull Mode"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/b5l63Om.jpg",alt:null})),(0,l.kt)("p",null,"\u6700\u5f8c\u6211\u5011\u4f86\u770b\u53e6\u5916\u4e00\u7a2e\u4e0d\u540c\u7684\u67b6\u69cb\uff0c\u9019\u7a2e\u67b6\u69cb\u4e0b\u6211\u5011\u5c31\u4e0d\u6703\u5f9e Pipeline \u7cfb\u7d71\u4e2d\u4e3b\u52d5\u5730\u5c07\u65b0\u7248\u61c9\u7528\u7a0b\u5f0f\u63a8\u5230 Kubernetes \u4e2d\uff0c\u76f8\u53cd\u7684\u662f\u6211\u5011\u7684 Kubernetes \u5167\u6703\u6709\u4e00\u500b Controller\uff0c\u9019\u500b Controller \u6703\u81ea\u5df1\u53bb\u5224\u65b7\u662f\u5426\u8981\u66f4\u65b0\u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\uff0c\u8b6c\u5982\u8aaa\u7576\u9060\u65b9\u7684 Contaienr Image \u6709\u65b0\u7248\u66f4\u65b0\u6642\uff0c\u5c31\u6703\u81ea\u52d5\u6293\u53d6\u65b0\u7684 Image \u4e26\u4e14\u66f4\u65b0\u5230\u7cfb\u7d71\u4e4b\u4e2d\u3002"),(0,l.kt)("p",null,"\u9019\u7a2e\u67b6\u69cb\u4e0b\uff0c\u6211\u5011\u4e0d\u9700\u8981\u4e00\u500b CD Piepline \u4f86\u7dad\u8b77\u9019\u4e9b\u4e8b\u60c5\uff0c\u6b64\u5916\uff0c\u56e0\u70ba\u6c92\u6709\u4e3b\u52d5\u8207 Kubernetes \u6e9d\u901a\u7684\u9700\u6c42\uff0c\u6240\u4ee5\u4e5f\u4e0d\u9700\u8981\u628a KUBECONFIG \u7d66\u653e\u5230\u5916\u90e8\u7cfb\u7d71 (CD Pipeline) \u4e2d\uff0c\u7b97\u662f\u6e1b\u5c11\u4e86\u4e00\u500b\u53ef\u80fd\u7684\u5b89\u5168\u6027\u96b1\u6182\u3002"),(0,l.kt)("p",null,"\u7576\u7136\u9019\u7a2e\u67b6\u69cb\u4e0b\uff0c\u6574\u500b\u90e8\u7f72\u7684\u6d41\u7a0b\u90fd\u5fc5\u9808\u4f9d\u8cf4 Controller \u7684\u908f\u8f2f\u4f86\u8655\u7406\uff0c\u5982\u679c\u4eca\u5929\u6709\u4efb\u4f55\u5ba2\u88fd\u5316\u7684\u9700\u6c42\u5c31\u8b8a\u6210\u5168\u90e8\u90fd\u8b93 Controller \u4f86\u8655\u7406\uff0c\u53ef\u80fd\u8981\u81ea\u884c\u4fee\u6539\u958b\u6e90\u8edf\u9ad4\uff0c\u6216\u662f\u4f9d\u8cf4\u5c0d\u65b9\u66f4\u65b0\uff0c\u76f8\u8f03\u65bc\u5b8c\u5168\u4f7f\u7528 CD Pipeline \u8655\u7406\u4f86\u8aaa\uff0c\u5f48\u6027\u6703\u6bd4\u8f03\u4f4e\uff0c\u64f4\u5145\u6027\u4e5f\u6bd4\u8f03\u4f4e\uff0c\u540c\u6642\u6574\u500b\u67b6\u69cb\u7684\u6975\u9650\u90fd\u6703\u88ab\u4fb7\u9650\u5728 Controller \u672c\u8eab\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u6700\u5f8c\u8981\u8aaa\u7684\u662f\uff0c\u4ee5\u4e0a\u4ecb\u7d39\u7684\u67b6\u69cb\u6c92\u6709\u4e00\u500b\u662f\u5b8c\u7f8e\u7684\uff0c\u90fd\u53ea\u662f\u4e00\u500b\u53c3\u8003\u67b6\u69cb\uff0c\u771f\u6b63\u9069\u5408\u7684\u67b6\u69cb\u9084\u662f\u53d6\u6c7a\u65bc\u4f7f\u7528\u8005\u5718\u968a\uff0c\u900f\u904e\u7406\u89e3\u4e0d\u540c\u90e8\u7f72\u65b9"),(0,l.kt)("p",null,"\u5f0f\u6240\u5e36\u4f86\u7684\u512a\u7f3a\u9ede\uff0c\u8a55\u4f30\u54ea\u4e9b\u512a\u52e2\u6211\u5718\u968a\u9700\u8981\uff0c\u54ea\u4e9b\u7f3a\u9ede\u662f\u5718\u968a\u53ef\u4ee5\u63a5\u53d7\uff0c\u4e0d\u53ef\u4ee5\u63a5\u53d7\uff0c\u6700\u5f8c\u7d9c\u5408\u8a55\u91cf\u5f8c\u53d6\u6368\u51fa\u4e00\u5957\u9069\u5408\u5718\u968a\u5de5\u4f5c\u7684\u65b9\u5f0f\u3002"))}m.isMDXComponent=!0}}]);