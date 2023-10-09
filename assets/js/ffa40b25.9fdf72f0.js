"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[17709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,h=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={title:"Rancher \u7cfb\u7d71\u7ba1\u7406\u6307\u5357 - \u4f7f\u7528\u8005\u767b\u5165\u7ba1\u7406",sidebar_position:6,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},o="\u524d\u8a00",i={unversionedId:"techPost/2021/iThome_Challenge/day6",id:"techPost/2021/iThome_Challenge/day6",title:"Rancher \u7cfb\u7d71\u7ba1\u7406\u6307\u5357 - \u4f7f\u7528\u8005\u767b\u5165\u7ba1\u7406",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day6.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day6",permalink:"/docs/techPost/2021/iThome_Challenge/day6",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:6,frontMatter:{title:"Rancher \u7cfb\u7d71\u7ba1\u7406\u6307\u5357 - \u4f7f\u7528\u8005\u767b\u5165\u7ba1\u7406",sidebar_position:6,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0b)",permalink:"/docs/techPost/2021/iThome_Challenge/day5"},next:{title:"Rancher \u7cfb\u7d71\u7ba1\u7406\u6307\u5357 - RKE Template",permalink:"/docs/techPost/2021/iThome_Challenge/day7"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u524d\u7bc7\u6587\u7ae0\u900f\u904e rke / helm \u6210\u529f\u7684\u642d\u5efa\u4e86\u4e00\u500b Rancher \u670d\u52d9\uff0c\u4e26\u4e14\u65bc\u7b2c\u4e00\u6b21\u767b\u5165\u6642\u6309\u7167\u7cfb\u7d71\u8981\u6c42\u5275\u5efa\u4e86\u4e00\u7d44\u7d66 admin \u4f7f\u7528\u7684\u5bc6\u78bc\uff0c\u4e26\u4e14\u4f7f\u7528\u8a72 admin \u7684\u5e33\u865f\u89c0\u5bdf\u5230\u4e86\u7b2c\u4e00\u7d44\u5275\u5efa\u88ab Rancher \u7ba1\u7406\u7684 Kubernetes \u53e2\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8907\u7fd2: \u8a72 K8s \u53e2\u96c6\u4e26\u4e0d\u662f Rancher \u5275\u9020\u7684\uff0c\u800c\u662f\u6211\u5011\u4e8b\u5148\u900f\u904e rke \u5275\u9020\u7528\u4f86\u90e8\u7f72 Rancher \u670d\u52d9\u7684 k8s \u53e2\u96c6\u3002\n")),(0,l.kt)("p",null,"\u5c0d\u65bc IT \u7ba1\u7406\u4eba\u54e1\u4f86\u8aaa\uff0c\u770b\u5230\u4e00\u500b\u65b0\u7684\u670d\u52d9\u901a\u5e38\u8166\u4e2d\u6703\u9583\u904e\u7684\u5c31\u662f\u8a72\u670d\u52d9\u7684\u4f7f\u7528\u8005\u7ba1\u7406\u6b0a\u9650\u8a72\u600e\u9ebc\u8655\u7406? \u6700\u76f4\u89c0\u4e5f\u7c21\u55ae\u7684\u65b9\u5f0f\u5c31\u662f\u900f\u904e\u8a72\u670d\u52d9\u5275\u5efa\u773e\u591a\u7684\u672c\u5730\u4f7f\u7528\u8005\uff0c\u6bcf\u500b\u4f7f\u7528\u8005\u7d66\u4e88\u4e0d\u540c\u7684\u6b0a\u9650\u8207\u5e33\u865f\u5bc6\u78bc\u3002\u4f46\u662f\u9019\u7a2e\u4f7f\u7528\u65b9\u5f0f\u5be6\u52d9\u4e0a\u6703\u6709\u592a\u591a\u554f\u984c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5718\u968a\u5167\u54e1\u5de5\u901a\u5e38\u4e0d\u559c\u6b61\u6bcf\u4e00\u500b\u670d\u52d9\u90fd\u6709\u7368\u7acb\u7684\u5bc6\u78bc\uff0c\u6700\u597d\u80fd\u5920\u7528\u4e00\u5957\u5bc6\u78bc\u53bb\u5b58\u53d6\u516c\u53f8\u5167\u6240\u6709\u670d\u52d9"),(0,l.kt)("li",{parentName:"ol"},"\u54e1\u5de5\u6578\u91cf\u904e\u591a\u6642\uff0c\u901a\u5e38\u5718\u968a\u4e5f\u5f88\u61f6\u5f97\u5e6b\u6bcf\u500b\u54e1\u5de5\u90fd\u7368\u7acb\u5275\u9020\u4e00\u4efd\u5e33\u865f\u5bc6\u78bc\uff0c\u66f4\u5e38\u767c\u751f\u7684\u4e8b\u60c5\u662f\u4e00\u5957\u5e33\u865f\u5bc6\u78bc\u591a\u4eba\u5171\u540c\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u4eba\u5171\u540c\u4f7f\u7528\u7684\u554f\u984c\u5c31\u662f\u6703\u55aa\u5931\u4e86\u7a3d\u6838\u6027\uff0c\u6c92\u6709\u8fa6\u6cd5\u77e5\u9053\u662f\u8ab0\u65bc\u4ec0\u9ebc\u6642\u9593\u9ede\u9032\u884c\u4ec0\u9ebc\u64cd\u4f5c\uff0c\u672a\u4f86\u8981\u9664\u932f\u8207\u627e\u554f\u984c\u6642\u975e\u5e38\u56f0\u96e3"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b0a\u9650\u9084\u60f3\u8981\u7528\u7fa4\u7d44\u4f86\u7ba1\u7406\u6642\uff0c\u6574\u500b\u8981\u8655\u7406\u7684\u4e8b\u60c5\u5c31\u8b8a\u5f97\u53c8\u591a\u53c8\u8907\u96dc"),(0,l.kt)("li",{parentName:"ol"},"\u7531\u65bc\u5e33\u865f\u5bc6\u78bc\u90fd\u662f\u670d\u52d9\u672c\u5730\u7ba1\u7406\uff0c\u9019\u610f\u5473\u5718\u968a\u5167\u7684\u5e33\u865f\u5bc6\u78bc\u662f\u5206\u6563\u5f0f\u7684\u67b6\u69cb\uff0c\u56e0\u6b64\u6709\u4eba\u60f3\u8981\u6539\u5bc6\u78bc\u5c31\u9700\u8981\u5230\u6240\u6709\u7cfb\u7d71\u53bb\u6539\u5bc6\u78bc\uff0c\u9019\u90e8\u5206\u4e5f\u662f\u975e\u5e38\u4e0d\u4eba\u6027\u5316\uff0c\u7279\u5225\u5982\u679c\u54e1\u5de5\u96e2\u8077\u6642\uff0c\u8981\u662f\u6709\u670d\u52d9\u5fd8\u4e86\u522a\u9664\u53ef\u80fd\u6703\u9020\u6210\u96e2\u8077\u54e1\u5de5\u9084\u6709\u80fd\u529b\u53bb\u5b58\u53d6\u516c\u53f8\u670d\u52d9\u3002")),(0,l.kt)("p",null,"\u56e0\u6b64\u5927\u90e8\u5206\u7684 IT \u90fd\u4e0d\u559c\u6b61\u4f7f\u7528\u672c\u5730\u5e33\u865f\uff0c\u66f4\u559c\u6b61\u4f7f\u7528\u6df7\u5408\u6a21\u5f0f\u4f86\u9054\u5230\u9748\u6d3b\u7684\u6b0a\u9650\u7ba1\u7406\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u670d\u52d9\u60f3\u8fa6\u6cd5\u6574\u5408\u5916\u90e8\u7684\u5e33\u865f\u5bc6\u78bc\u7cfb\u7d71\uff0c\u5e38\u898b\u7684\u5982 Windows AD, LDAP, GSuite, SMAL, OpenID, Crowd \u7b49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u500b\u670d\u52d9\u90fd\u7dad\u6301\u4e00\u500b\u672c\u5730\u4f7f\u7528\u8005\uff0c\u8a72\u4f7f\u7528\u8005\u662f\u7ba1\u7406\u54e1\u7684\u8eab\u4efd\uff0c\u4f5c\u70ba\u4e00\u500b\u7dca\u6025\u5099\u6848\uff0c\u7576\u5916\u90e8\u5e33\u865f\u5bc6\u78bc\u7cfb\u7d71\u51fa\u554f\u984c\u5c0e\u81f4\u4e0d\u80fd\u4f7f\u7528\u6642\uff0c\u5c31\u5fc5\u9808\u8981\u7528\u672c\u5730\u4f7f\u7528\u8005\u4f86\u5b58\u53d6\u3002")),(0,l.kt)("p",null,"\u6df7\u5408\u6a21\u5f0f\u7684\u67b6\u69cb\u4e0b\uff0c\u6240\u6709\u54e1\u5de5\u7684\u5e33\u865f\u8207\u5bc6\u78bc\u90fd\u63a1\u7528\u96c6\u4e2d\u5f0f\u7ba1\u7406\uff0c\u4efb\u4f55\u7b2c\u4e09\u65b9\u670d\u52d9\u90fd\u8981\u8207\u8a72\u5e33\u865f\u7cfb\u7d71\u6574\u5408\uff0c\u56e0\u6b64"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u54e1\u5de5\u53ea\u9700\u8981\u7dad\u8b77\u4e00\u5957\u5e33\u865f\u5bc6\u78bc\u5373\u53ef\u767b\u5165\u5718\u968a\u5167\u6240\u6709\u670d\u52d9\uff0c\u5982\u679c\u54e1\u5de5\u9700\u8981\u6539\u5bc6\u78bc\uff0c\u4e5f\u53ea\u9700\u8981\u6539\u4e00\u500b\u5730\u65b9\u5373\u53ef"),(0,l.kt)("li",{parentName:"ol"},"IT \u4eba\u54e1\u53ef\u4ee5\u7d71\u4e00\u7ba1\u7406\u7fa4\u7d44\uff0c\u6bcf\u500b\u7b2c\u4e09\u65b9\u670d\u52d9\u91dd\u5c0d\u7fa4\u7d44\u53bb\u9032\u884c\u6b0a\u9650\u63a7\u7ba1\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9019\u7a2e\u67b6\u69cb\u4e0b\u4e0d\u6703\u6709\u5171\u4eab\u5e33\u865f\u5bc6\u78bc\u7684\u554f\u984c\uff0c\u6bcf\u500b\u4f7f\u7528\u8005\u767b\u5165\u4efb\u4f55\u7cfb\u7d71\u90fd\u6703\u6709\u76f8\u95dc\u7684\u65e5\u8a8c\uff0c\u672a\u4f86\u9664\u932f\u4e5f\u65b9\u4fbf")),(0,l.kt)("p",null,"\u56e0\u6b64\u672c\u7bc7\u6587\u7ae0\u5c31\u4f86\u63a2\u8a0e Rancher \u63d0\u4f9b\u4f55\u7a2e\u4f7f\u7528\u8005\u767b\u5165\u8207\u6b0a\u9650\u63a7\u7ba1\uff0c\u7cfb\u7d71\u7ba1\u7406\u54e1\u67b6\u8a2d\u7dad\u8b77\u6642\u53ef\u4ee5\u5982\u4f55\u53cb\u5584\u7684\u53bb\u8a2d\u5b9a Rancher"),(0,l.kt)("h1",{id:"authorization-\u6388\u6b0a"},"Authorization \u6388\u6b0a"),(0,l.kt)("p",null,"Rancher \u7684\u4e16\u754c\u4e2d\u5c07\u6b0a\u9650\u5206\u6210\u4e09\u5927\u584a\uff0c\u7531\u5927\u5230\u5c0f\u5206\u5225\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Global Permission"),(0,l.kt)("li",{parentName:"ol"},"Cluster Role"),(0,l.kt)("li",{parentName:"ol"},"Project Role")),(0,l.kt)("p",null,"\u5176\u4e2d Cluster/Project \u9019\u500b\u6982\u5ff5\u8981\u5230\u5f8c\u9762\u7ae0\u7bc0\u63a2\u8a0e\u5982\u4f55\u7528 Rancher \u53bb\u67b6\u8a2d\u8207\u7ba1\u7406 Kubernetes \u53e2\u96c6\u6642\u624d\u6703\u63d0\u5230\uff0c\u56e0\u6b64\u9019\u908a\u5148\u5c08\u6ce8\u65bc\u7b2c\u4e00\u9805\uff0c\u4e5f\u5c31\u662f Global Permission\u3002"),(0,l.kt)("p",null,"Global Permission \u4ee3\u8868\u7684\u662f Rancher \u670d\u52d9\u672c\u8eab\u7684\u6b0a\u9650\uff0c\u672c\u8eab\u8ddf\u4efb\u4f55 Kubernetes \u53e2\u96c6\u5247\u662f\u6c92\u6709\u95dc\u4fc2\u3002\nRancher \u672c\u8eab\u63a1\u7528 RBAC (Role-Based Access Control) \u7684\u6982\u5ff5\u4f86\u63a7\u5236\u4f7f\u7528\u8005\u7684\u6b0a\u9650\uff0c\u6bcf\u500b\u4f7f\u7528\u8005\u6703\u4f9d\u64da\u5176\u4f7f\u7528\u8005\u540d\u7a31\u6216\u662f\u6240\u5c6c\u7684\u7fa4\u7d44\u88ab\u5c0d\u61c9\u5230\u4e0d\u540cRole\u3002"),(0,l.kt)("p",null,"Global Permission \u9810\u8a2d\u63d0\u4f9b\u591a\u7a2e\u8eab\u4efd\uff0c\u6bcf\u500b\u8eab\u4efd\u90fd\u6709\u4e0d\u540c\u7684\u6b0a\u9650\uff0c\u4ee5\u4e0b\u5716\u4f86\u770b(Security->Roles)\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/iyafxS0.png",alt:null})),(0,l.kt)("p",null,'\u5716\u4e2d\u662f\u9810\u8a2d\u7684\u4e0d\u540c Role\uff0c\u6bcf\u500b Role \u90fd\u6709\u5404\u81ea\u7684\u6b0a\u9650\uff0c\u540c\u6642\u9084\u53ef\u4ee5\u53bb\u8a2d\u5b9a\u8aaa\u7576\u4e00\u500b\u65b0\u7684\u5916\u90e8\u4f7f\u7528\u8005\u767b\u5165\u6642\uff0c\u61c9\u8a72\u8981\u8ce6\u4e88\u4f55\u7a2e Role\n\u6b0a\u9650\u90e8\u5206\u662f\u63a1\u53d6\u758a\u52a0\u72c0\u614b\u7684\uff0c\u56e0\u6b64\u8a2d\u8a08 Role \u7684\u6642\u5019\u90fd\u662f\u4ee5 "\u8a72 Role \u53ef\u4ee5\u91dd\u5c0d\u4ec0\u9ebc API \u57f7\u884c\u4ec0\u9ebc\u6307\u4ee4"\uff0c\u6c92\u6709\u63cf\u8ff0\u5230\u7684\u5c31\u9810\u8a2d\u7576\u4f5c\u4e0d\u5141\u8a31\u3002\n\u56e0\u6b64 Role \u662f\u53ef\u4ee5\u4e92\u76f8\u758a\u52a0\u4f86\u9054\u5230\u66f4\u70ba\u5f48\u6027\u7684\u72c0\u614b\uff0c\u7576\u7136\u9810\u8a2d Role \u4e5f\u53ef\u4ee5\u6709\u591a\u500b\u3002'),(0,l.kt)("p",null,"\u8a3b: \u672c\u5716\u7247\u4e26\u4e0d\u662f\u6700\u539f\u59cb\u7684 Rancher \u8a2d\u5b9a\uff0c\u9810\u8a2d\u72c0\u614b\u6709\u88ab\u6211\u4fee\u6539\u904e\uff0c\u8acb\u4ee5\u81ea\u5df1\u7684\u74b0\u5883\u70ba\u4e3b\u3002"),(0,l.kt)("p",null,"Role \u9019\u9ebc\u591a\u7a2e\u5c0d\u65bc\u521d\u6b21\u63a5\u89f8 Kubernetes \u8207 Rancher \u7684\u7ba1\u7406\u54e1\u4f86\u8aaa\u5be6\u5728\u592a\u8907\u96dc\u8207\u592a\u56f0\u96e3\uff0c\u56e0\u6b64 Rancher \u53c8\u91dd\u5c0d\u9019\u4e9b Role \u63d0\u4f9b\u4e86\u56db\u7a2e\u597d\u8a18\u7684\u540d\u7a31\uff0c\u4efb\u4f55\u4f7f\u7528\u8005\u8207\u7fa4\u7d44\u90fd\u53ef\u4ee5\u57fa\u65bc\u9019\u56db\u7a2e Role \u70ba\u57fa\u790e\u53bb\u6dfb\u52a0\u4e0d\u540c\u7684 Role \u4f86\u9054\u5230\u9748\u6d3b\u6b0a\u9650\u3002"),(0,l.kt)("p",null,"\u9019\u56db\u7a2e\u597d\u8a18\u7684 Role \u5206\u5225\u70ba"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Administration\n\u8d85\u7d1a\u7ba1\u7406\u54e1\uff0c\u57fa\u672c\u4e0a\u4ec0\u9ebc\u90fd\u53ef\u4ee5\u64cd\u4f5c\uff0c\u7b2c\u4e00\u6b21\u767b\u5165\u6642\u6240\u4f7f\u7528\u7684 admin \u5e33\u865f\u5c31\u5c6c\u65bc\u9019\u500b\u6b0a\u9650")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Restricted Admin\n\u80fd\u529b\u8fd1\u4e4e\u65bc\u8d85\u7d1a\u7ba1\u7406\u54e1\uff0c\u552f\u4e00\u4e0d\u80fd\u7ba1\u7406\u7684\u5c31\u662f Rancher \u672c\u8eab\u6240\u5728\u7684 kubernetes \u53e2\u96c6\uff0c\u4e5f\u5c31\u662f\u524d\u7bc7\u6587\u7ae0\u770b\u5230\u7684 local \u53e2\u96c6\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Standard User: \u53ef\u4ee5\u900f\u904e Rancher \u5275\u5efa Kubernetes \u53e2\u96c6 \u4e26\u4e14\u4f7f\u7528\u7684\u4f7f\u7528\u8005\uff0c\u5927\u90e8\u5206\u60c5\u6cc1\u4e0b\u53ef\u4ee5\u8b93\u975e\u7ba1\u7406\u54e1\u89d2\u8272\u7372\u5f97\u9019\u500b\u6b0a\u9650\uff0c\u4e0d\u904e\u56e0\u70ba\u5275\u5efa\u904e\u591a\u7684 Kubernetes \u53e2\u96c6\u6709\u53ef\u80fd\u6703\u9020\u6210\u6210\u672c\u63d0\u9ad8\uff0c\u6240\u4ee5\u8ce6\u4e88\u6b0a\u9650\u6642\u4e5f\u8981\u6ce8\u610f\u5230\u5e95\u4ec0\u9ebc\u6a23\u7684\u4eba\u53ef\u4ee5\u64c1\u6709\u5275\u9020 kubernetes \u53e2\u96c6\u7684\u6b0a\u9650\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"User-Base: \u57fa\u672c\u4e0a\u5c31\u662f\u4e00\u500b read-only \u7684\u4f7f\u7528\u8005\uff0c\u540c\u6642\u56e0\u70ba\u672c\u8eab\u6b0a\u9650\u5f88\u4f4e\uff0c\u80fd\u5920\u770b\u5230\u7684\u8cc7\u8a0a\u975e\u5e38\u5c11\uff0c\u66f4\u7cbe\u6e96\u7684\u4f86\u8aaa\u5c31\u662f\u4e00\u500b\u53ea\u80fd\u767b\u5165\u7684\u4f7f\u7528\u8005\u3002"))),(0,l.kt)("h1",{id:"authentication-\u8a8d\u8b49"},"Authentication \u8a8d\u8b49"),(0,l.kt)("p",null,"\u524d\u8ff0\u63a2\u8a0e\u5982\u4f55\u5206\u914d\u6b0a\u9650\uff0c\u63a5\u4e0b\u4f86\u8981\u63a2\u8a0e\u7684\u5c31\u662f\u8981\u5982\u4f55\u5e6b\u4f7f\u7528\u8005\u9032\u884c\u5e33\u865f\u5bc6\u78bc\u7684\u9a57\u8b49\uff0c\u9019\u90e8\u5206 Rancher \u9664\u4e86\u672c\u5730\u4f7f\u7528\u8005\u4e4b\u5916\u4e5f\u652f\u63f4\u4e86\u5404\u5f0f\u5404\u6a23\u7684\u7b2c\u4e09\u65b9\u670d\u52d9\uff0c\u8b6c\u5982"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Microsoft Active Directory"),(0,l.kt)("li",{parentName:"ol"},"GitHub"),(0,l.kt)("li",{parentName:"ol"},"Microsoft Azure AD"),(0,l.kt)("li",{parentName:"ol"},"FreeIPA"),(0,l.kt)("li",{parentName:"ol"},"OpenLDAP"),(0,l.kt)("li",{parentName:"ol"},"Microsoft AD FS"),(0,l.kt)("li",{parentName:"ol"},"PingIdentity"),(0,l.kt)("li",{parentName:"ol"},"Keycloak"),(0,l.kt)("li",{parentName:"ol"},"Okta"),(0,l.kt)("li",{parentName:"ol"},"Google OAuth"),(0,l.kt)("li",{parentName:"ol"},"Shibboleth")),(0,l.kt)("p",null,"Rancher v2.6 \u7684\u5176\u4e2d\u4e00\u500b\u76ee\u6a19\u5c31\u662f\u652f\u63f4\u57fa\u65bc OIDC \u7684 Keycloak \uff0c\u56e0\u6b64\u5982\u679c\u5718\u968a\u4f7f\u7528\u7684\u662f\u57fa\u65bc OIDC \u7684 Keycloak \u670d\u52d9\uff0c\u8b80\u8005\u4e0d\u4eff\u53ef\u4ee5\u671f\u5f85\u4e00\u4e0b v2.6 \u7684\u65b0\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u8005\u53ef\u4ee5\u65bc security->authentication \u9801\u9762\u770b\u5230\u5982\u4e0b\u7684\u8a2d\u5b9a\u9801\u9762\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/VCEGFwD.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/admin-settings/authentication/"},"\u5b98\u65b9\u7db2\u7ad9\u4e2d"),"\u6709\u91dd\u5c0d\u4e0a\u8ff0\u6bcf\u500b\u985e\u5225\u90fd\u63d0\u4f9b\u4e00\u4efd\u8a73\u7d30\u7684\u6559\u5b78\u6587\u4ef6\uff0c\u8981\u6ce8\u610f\u7684\u662f\u56e0\u70ba Rancher \u7248\u672c\u904e\u591a\uff0c\u6240\u4ee5\u7db2\u9801\u672c\u8eab\u7684\u5167\u5bb9\u6709\u53ef\u80fd\u4f60\u6703\u627e\u5230\u7684\u662f\u820a\u7684\u7248\u672c\uff0c\u56e0\u6b64\u95b1\u8b80\u7db2\u9801\u6642\u8acb\u78ba\u4fdd\u4f60\u7576\u524d\u770b\u5230\u7684\u7248\u672c\u8a2d\u5b9a\u65b9\u5f0f\u8207\u4f60\u4f7f\u7528\u7684\u7248\u672c\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u7ba1\u7406\u8005\u53ea\u80fd\u91dd\u5c0d\u4e00\u500b\u5916\u90e8\u7684\u670d\u52d9\u9032\u884c\u8a8d\u8b49\u8f49\u79fb\uff0c\u4e0d\u904e\u9019\u53ea\u662f\u56e0\u70ba UI \u672c\u8eab\u7684\u8a2d\u5b9a\u8207\u64cd\u4f5c\u9650\u5236\uff0c\u5982\u679c\u4eca\u5929\u60f3\u8981\u5c0e\u5165\u591a\u5957\u6a5f\u5236\u7684\u8a71\u662f\u53ef\u4ee5\u5f9e Rancher API \u65b9\u9762\u53bb\u9032\u884c\u8a2d\u5b9a\uff0c\u5c0d\u65bc\u9019\u529f\u80fd\u6709\u9700\u6c42\u7684\u53ef\u4ee5\u53c3\u8003\u9019\u500b Github Issue ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/24323"},"Feature Request - enabling multiple authentication methods simultaneously #24323\n")),(0,l.kt)("h1",{id:"\u5be6\u6230\u6f14\u7df4"},"\u5be6\u6230\u6f14\u7df4"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u63a2\u8a0e\u5b8c\u4e86\u95dc\u65bc Rancher \u57fa\u672c\u7684\u6b0a\u9650\u7ba1\u7406\u6a5f\u5236\u5f8c\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u4f86\u5be6\u969b\u8a66\u8a66\u770b\u5230\u5e95\u7528\u8d77\u4f86\u7684\u611f\u89ba\u5982\u4f55\u3002\n\u7531\u65bc\u6574\u500b\u6a5f\u5668\u90fd\u662f\u4f7f\u7528 Azure \u4f86\u67b6\u8a2d\u7684\uff0c\u56e0\u6b64\u7b2c\u4e09\u65b9\u670d\u52d9\u6211\u5c31\u9078\u64c7\u4e86 Azure AD \u4f5c\u70ba\u80cc\u5f8c\u7684\u4f7f\u7528\u8005\u6b0a\u9650\uff0c\u4e4b\u5f8c\u7684\u7cfb\u5217\u6587\u7ae0\u4e5f\u90fd\u6703\u57fa\u65bc\u9019\u500b\u8a2d\u5b9a\u53bb\u63a7\u5236\u4e0d\u540c\u7684\u4f7f\u7528\u8005\u6b0a\u9650\u3002"),(0,l.kt)("p",null,"\u4e0b\u5716\u662f\u4e00\u500b\u60f3\u8981\u9054\u5230\u7684\u8a2d\u5b9a\u72c0\u6cc1\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/V4ltM3u.png",alt:null})),(0,l.kt)("p",null,"Rancher \u672c\u8eab\u64c1\u6709\u4e00\u958b\u59cb\u8a2d\u5b9a\u7684\u672c\u5730\u4f7f\u7528\u8005\u4e4b\u5916\uff0c\u9084\u8981\u53ef\u4ee5\u8ddf Azure AD \u929c\u63a5\n\u800c Azure AD \u4e2d\u6240\u6709\u4f7f\u7528\u8005\u90fd\u6703\u5206\u70ba\u4e09\u500b\u7fa4\u7d44\uff0c\u5206\u5225\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"IT"),(0,l.kt)("li",{parentName:"ol"},"QA"),(0,l.kt)("li",{parentName:"ol"},"DEV")),(0,l.kt)("p",null,"\u6211\u5e0c\u671b IT \u7fa4\u7d44\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u7372\u5f97 Admin \u7684\u6b0a\u9650\uff0c\u4e5f\u5c31\u662f\u6240\u8b02\u6574\u500b Rancher \u7684\u7ba1\u7406\u54e1\u3002\n\u800c QA/DEV \u76ee\u524d\u90fd\u5148\u66ab\u6642\u7d66\u4e88\u4e00\u500b User-Base \u7684\u6b0a\u9650\uff0c\u4e5f\u5c31\u662f\u53ea\u80fd\u55ae\u7d14\u767b\u5165\u7136\u5f8c\u5be6\u969b\u4e0a\u4ec0\u9ebc\u90fd\u4e0d\u80fd\u505a\u3002\n\u9019\u5169\u500b\u7fa4\u7d44\u5fc5\u9808\u8981\u7b49\u5230\u5f8c\u9762\u63a2\u8a0e\u5982\u4f55\u8b93 Rancher \u5275\u5efa\u53e2\u96c6\u6642\u624d\u6703\u518d\u5ea6\u7d66\u4e88\u4e0d\u540c\u7684\u6b0a\u9650\uff0c\u56e0\u6b64\u672c\u7bc7\u6587\u7ae0\u5148\u5c08\u6ce8\u65bc Rancher \u8207 AD \u7684\u6574\u5408\u3002"),(0,l.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4e0d\u6703\u63a2\u8a0e Azure AD \u7684\u4f7f\u7528\u65b9\u5f0f\u8207\u6982\u5ff5\uff0c\u56e0\u6b64\u6211\u5df2\u7d93\u65bc\u6211\u7684\u74b0\u5883\u4e2d\u5275\u5efa\u4e86\u76f8\u95dc\u7684\u4f7f\u7528\u8005\u4ee5\u53ca\u76f8\u95dc\u7684\u7fa4\u7d44\u3002"),(0,l.kt)("p",null,"\u6574\u5408\u65b9\u9762\u5206\u6210\u5169\u5927\u90e8\u5206\u8655\u7406"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Azure AD \u8207 Rancher \u7684\u6574\u5408"),(0,l.kt)("li",{parentName:"ol"},"Rancher \u5167\u7684 Roles \u8a2d\u5b9a")),(0,l.kt)("p",null,"Azure AD \u7684\u90e8\u5206\u53ef\u4ee5\u53c3\u8003",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/admin-settings/authentication/azure-ad/"},"\u5b98\u65b9\u6559\u5b78"),"\uff0c\u88e1\u9762\u6709\u975e\u5e38\u8a73\u7d30\u7684\u6b65\u9a5f\u544a\u77e5\u8981\u5982\u4f55\u53bb Azure \u5167\u8a2d\u5b9a\uff0c\u9019\u908a\u8981\u7279\u5225\u6ce8\u610f\u5c31\u662f\u5343\u842c\u4e0d\u8981\u770b\u932f\u7248\u672c\uff0c\u4ee5\u53ca\u6700\u5f8c\u586b\u5beb Azure Endpoints \u8cc7\u8a0a\u6642\u7248\u672c\u4e0d\u8981\u5beb\u932f\u3002"),(0,l.kt)("p",null,"\u4e0b\u5716\u662f Rancher \u5167\u7684\u8a2d\u5b9a\uff0c\u5176\u4e2d Endpoints \u90e8\u5206\u8981\u7279\u5225\u5c0f\u5fc3\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ax64iqp.png",alt:null})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Graph \u8981\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://graph.windows.net/"},"https://graph.windows.net/")," \u800c\u4e0d\u662f\u4f7f\u7528 Azure UI \u5167\u986f\u793a\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://graph.microsoft.com"},"https://graph.microsoft.com")),(0,l.kt)("li",{parentName:"ol"},"Token/Authorization \u9019\u5169\u500b\u8981\u6ce8\u610f\u4f7f\u7528\u7684\u662f OAUTH 2.0 (V1) \u800c\u4e0d\u662f V2")),(0,l.kt)("p",null,"\u4e0b\u5716\u662f Azure \u65b9\u9762\u7684\u8a2d\u5b9a\uff0c\u6240\u4ee5\u4f7f\u7528\u6642\u8981\u4f7f\u7528 V1 \u7684\u7bc0\u9ede\u800c\u4e0d\u662f V2\uff0c\u5426\u5247\u6574\u5408\u6642\u5019\u6703\u9047\u5230\u5404\u7a2e invalid version \u7684 internal error.\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/IuUKY2c.png",alt:null})),(0,l.kt)("p",null,"\u7576\u9019\u4e00\u5207\u6574\u5408\u5b8c\u7562\u5f8c\u91cd\u65b0\u767b\u5165\u5230 Rancher \u7684\u756b\u9762\uff0c\u61c9\u8a72\u8981\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u5716\u7684\u756b\u9762\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/D2e966r.png",alt:null})),(0,l.kt)("p",null,"\u756b\u9762\u4e2d\u544a\u77e5 Rancher \u7684\u767b\u5165\u9019\u6642\u5019\u5206\u6210\u5169\u7a2e\u65b9\u5f0f\uff0c\u5206\u5225\u662f\u900f\u904e Azure AD \u4ee5\u53ca\u4f7f\u7528\u672c\u5730\u4f7f\u7528\u8005\u767b\u5165\u3002"),(0,l.kt)("h1",{id:"\u6b0a\u9650\u63a7\u5236"},"\u6b0a\u9650\u63a7\u5236"),(0,l.kt)("p",null,"\u7576\u8207 Azure AD \u6574\u5408\u5b8c\u7562\u5f8c\uff0c\u9996\u5148\u8981\u5148\u900f\u904e\u672c\u5730\u4f7f\u7528\u8005\u9032\u884c\u6b0a\u9650\u8a2d\u5b9a\uff0c\u56e0\u70ba\u672c\u5730\u4f7f\u7528\u8005\u672c\u8eab\u4e5f\u662f Admin \u7684\u95dc\u4fc2\uff0c\u56e0\u6b64\u53ef\u4ee5\u8f15\u9b06\u5730\u53bb\u4fee\u6539 Rancher\u3002"),(0,l.kt)("p",null,"\u5982\u540c\u524d\u9762\u6240\u63d0\uff0c\u5e0c\u671b\u6574\u9ad4\u6b0a\u9650\u53ef\u4ee5\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"IT \u7fa4\u7d44\u7684\u4eba\u70ba\u8d85\u7d1a\u4f7f\u7528\u8005"),(0,l.kt)("li",{parentName:"ol"},"DEV/QA \u7fa4\u7d44\u7684\u4eba\u70ba\u53ea\u80fd\u767b\u5165\u7684\u4f7f\u7528\u8005 (User-Base)\u3002")),(0,l.kt)("p",null,"\u540c\u6642\u9019\u908a\u4e5f\u8981\u6ce8\u610f\uff0c\u56e0\u70ba Rancher \u7684\u4f7f\u7528\u8005\u8207\u7fa4\u7d44\u5169\u500b\u6b0a\u9650\u662f\u53ef\u4ee5\u5206\u5225\u8a2d\u5b9a\u4e14\u758a\u52a0\u7684\uff0c\u56e0\u6b64\u8a2d\u5b9a\u7684\u6642\u5019\u5fc5\u9808\u8981\u9019\u6a23\u57f7\u884c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c07\u6240\u6709\u7b2c\u4e00\u6b21\u767b\u5165\u7684\u5916\u90e8\u4f7f\u7528\u8005\u7684\u9810\u8a2d\u4f7f\u7528\u8005\u90fd\u6539\u70ba (User-Base)"),(0,l.kt)("li",{parentName:"ol"},"\u64b0\u5beb\u7fa4\u7d44\u7684\u76f8\u95dc\u898f\u5247\uff0c\u91dd\u5c0d IT/DEV/QA \u9032\u884c\u8655\u7406\u3002")),(0,l.kt)("p",null,"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c Rancher \u6703\u8b93\u6240\u6709\u7b2c\u4e00\u6b21\u767b\u5165\u7684\u4f7f\u7528\u8005\u90fd\u7d66\u4e88 Standard-User \u7684\u6b0a\u9650\uff0c\u4e5f\u5c31\u662f\u80fd\u5920\u5275\u5efa k8s \u53e2\u96c6\uff0c\u9019\u90e8\u5206\u8207\u6211\u5011\u7684\u9700\u6c42\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u7b2c\u4e00\u6b65\u9a5f\uff0c\u79fb\u52d5\u5230 security->roles \u88e1\u9762\u53bb\u4fee\u6539\u9810\u8a2d\u4f7f\u7528\u8005\u8eab\u4efd\uff0c\u53d6\u6d88 User \u4e26\u4e14\u589e\u52a0 User-Base\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/iyafxS0.png",alt:null})),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\u9a5f\u5247\u662f\u79fb\u52d5\u5230 security-groups \u5167\u53bb\u91dd\u5c0d\u4e0d\u540c Group \u9032\u884c\u8a2d\u5b9a"),(0,l.kt)("p",null,"\u91dd\u5c0d IT \u7fa4\u7d44\uff0c\u7d66\u4e88 Administrator \u7684\u6b0a\u9650\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/0eGU3wk.png",alt:null})),(0,l.kt)("p",null,"\u91dd\u5c0d Dev \u7fa4\u7d44\u7d66\u4e88 User-Base \u7684\u6b0a\u9650\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/mS7KGRR.png",alt:null})),(0,l.kt)("p",null,"\u6700\u5f8c\u770b\u8d77\u4f86\u6703\u5982\u4e0b\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/FuOr5fU.png",alt:null})),(0,l.kt)("p",null,"\u5230\u9019\u908a\u70ba\u6b62\uff0c\u6211\u5011\u505a\u4e86\u5169\u4ef6\u4e8b\u60c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6240\u6709\u65b0\u767b\u5165\u7684\u4f7f\u7528\u8005\u90fd\u6703\u88ab\u8ce6\u4e88 User-Base \u7684\u6b0a\u9650"),(0,l.kt)("li",{parentName:"ol"},"\u7576\u4f7f\u7528\u8005\u767b\u5165\u6642\uff0c\u6703\u91dd\u5c0d\u5176\u7fa4\u7d44\u6dfb\u52a0\u4e0d\u540c\u6b0a\u9650\n\u5982\u679c\u662f IT\uff0c\u5247\u6703\u6dfb\u52a0 Administrator \u7684\u6b0a\u9650\uff0c\u56e0\u6b64 IT \u7fa4\u7d44\u5167\u7684\u4eba\u5c31\u6703\u64c1\u6709 User-Base + Administrator \u7684\u6b0a\u9650\n\u5982\u679c\u662f DEV/QA \u7684\u7fa4\u7d44\uff0c\u5247\u6703\u6dfb\u52a0 Base-User \u7684\u6b0a\u9650\uff0c\u56e0\u6b64\u8a72\u7fa4\u7d44\u5167\u7684\u4eba\u5c31\u6703\u64c1\u6709 User-Base + User-Base \u7684\u6b0a\u9650\uff0c\u57fa\u672c\u4e0a\u9084\u662f User-Base\u3002")),(0,l.kt)("p",null,"\u8a2d\u5b9a\u5b8c\u7562\u5f8c\u5c31\u53ef\u4ee5\u5230\u767b\u5165\u9801\u9762\u4f7f\u7528\u4e8b\u5148\u5275\u7acb\u597d\u7684\u4f7f\u7528\u8005\u4f86\u767b\u5165\u3002"),(0,l.kt)("p",null,"\u7576\u4f7f\u7528 Dev \u7fa4\u7d44\u7684\u4f7f\u7528\u8005\u767b\u5165\u6642\uff0c\u6c92\u6709\u8fa6\u6cd5\u770b\u5230\u4efb\u4f55 Cluster\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Tnje1fo.png",alt:null})),(0,l.kt)("p",null,"\u76f8\u53cd\u7684\u5982\u679c\u4f7f\u7528 IT \u7fa4\u7d44\u7684\u4f7f\u7528\u8005\u767b\u5165\u6642\uff0c\u5247\u56e0\u70ba\u5c6c\u65bc Administrator \u7684\u6b0a\u9650\uff0c\u56e0\u6b64\u53ef\u4ee5\u770b\u5230\u7cfb\u7d71\u4e0a\u7684 RKE \u53e2\u96c6\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/lHegkUC.png",alt:null})),(0,l.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u63a2\u8a0e\u4e86\u57fa\u672c\u6b0a\u9650\u63a7\u7ba1\u7684\u6982\u5ff5\u4e26\u4e14\u5c55\u793a\u4e86\u4f7f\u7528 Azure AD \u5f8c\u7684\u4f7f\u7528\u7bc4\u4f8b\uff0c\u4e00\u65e6\u77ad\u89e3\u57fa\u790e\u77e5\u8b58\u5f8c\uff0c\u63a5\u4e0b\u4f86\u5c31\u662f\u597d\u597d\u7814\u7a76 Rancher \u5167\u6709\u54ea\u4e9b\u529f\u80fd\u6703\u4f7f\u7528\u5230\uff0c\u54ea\u4e9b\u4e0d\u6703\uff0c\u91dd\u5c0d\u9019\u90e8\u5206\u6b0a\u9650\u53bb\u9032\u884c\u8a2d\u5b9a\uff0c\u5982\u679c\u7cfb\u7d71\u9810\u8a2d\u7684 Role \u89ba\u5f97\u4e0d\u5920\u597d\u7528\u6642\uff0c\u53ef\u4ee5\u81ea\u884c\u5275\u7acb\u4e0d\u540c\u7684 Roles \u4f86\u7b26\u5408\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u4e26\u4e14\u4f7f\u7528\u4f7f\u7528\u8005\u8207\u7fa4\u7d44\u7684\u6982\u5ff5\u4f86\u9054\u5230\u9748\u6d3b\u7684\u8a2d\u5b9a\u3002"),(0,l.kt)("p",null,"\u4e0b\u7bc7\u6587\u7ae0\u5c07\u6703\u4f7f\u7528 IT \u7684\u89d2\u8272\u4f86\u770b\u770b\u5230\u5e95 Rancher \u4e0a\u9084\u6709\u4ec0\u9ebc\u8a2d\u5b9a\u662f\u6a6b\u8de8\u6240\u6709 Kubernetes \u53e2\u96c6\uff0c\u4ee5\u53ca\u9019\u4e9b\u8a2d\u5b9a\u53c8\u80fd\u5920\u5c0d\u6574\u500b\u7cfb\u7d71\u5e36\u4f86\u4ec0\u9ebc\u6a23\u7684\u597d\u8655\u3002"))}m.isMDXComponent=!0}}]);