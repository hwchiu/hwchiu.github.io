"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[82464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=i,c=s["".concat(l,".").concat(u)]||s[u]||k[u]||a;return n?r.createElement(c,o(o({ref:t},d),{},{components:n})):r.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const a={title:"[Kubernetes] How to Implement Kubernetes Service - NodePort",date:new Date("2018-08-25T01:17:08.000Z"),tags:["Kubernetes","Linux","iptables","Network"],description:"\u5728\u524d\u8ff0\u4e2d\u6211\u5011\u5df2\u7d93\u5b78\u904e\u4e86\u4ec0\u9ebc\u662f kubernetes service \u4ee5\u53ca\u5982\u4f55\u5be6\u73fe ClusterIP \u9019\u7a2e\u985e\u578b\u7684 service. \u900f\u904e\u5c0d iptables \u7684\u63a2\u8a0e\u8207\u7814\u7a76, \u6211\u5011\u53ef\u4ee5\u7406\u89e3\u5230 ClusterIP \u672c\u8eab\u6703\u63d0\u4f9b\u4e00\u500b\u865b\u64ec\u7684 IP \u5730\u5740,\u63a5\u4e0b\u4f86\u53ea\u8981\u8ddf\u9019\u500b\u5730\u5740\u6709\u95dc\u7684\u5c01\u5305,\u90fd\u6703\u900f\u904e DNAT \u7684\u65b9\u5f0f\u9032\u884c\u8f49\u63db\u627e\u5230\u6700\u5f8c\u7684 Endpoint IP. \u81f3\u65bc\u5982\u4f55\u9078\u64c7\u7684\u90e8\u5206,\u5247\u662f\u900f\u904e\u6a5f\u7387\u7684\u65b9\u5f0f\u53bb\u5c0b\u627e. \u63a5\u4e0b\u4f86\u6211\u5011\u8981\u4f86\u63a2\u8a0e\u53e6\u5916\u4e00\u500b\u4e5f\u662f\u5f88\u5e38\u4f7f\u7528\u7684 kubernetes service \u985e\u578b, \u4e5f\u5c31\u662f NodePort. NodePort \u672c\u8eab\u5305\u542b\u4e86 ClusterIP \u7684\u6240\u6709\u529f\u80fd, \u6b64\u5916\u4e5f\u984d\u5916\u958b\u555f\u4e86\u4e00\u500b\u65b0\u7684\u5b58\u53d6\u65b9\u5f0f. \u900f\u904e\u76f4\u63a5\u5b58\u53d6\u7bc0\u9ede\u7684 IP \u5730\u5740\u914d\u4e0a\u4e00\u500b\u8a2d\u5b9a\u597d\u7684 Port, \u4e5f\u53ef\u4ee5\u5c07\u8a72\u5c01\u5305\u76f4\u63a5\u9001\u5230\u6700\u5f8c\u9762\u7684\u5bb9\u5668\u61c9\u7528\u7a0b\u5f0f. \u56e0\u6b64\u672c\u6587\u4e5f\u8981\u5ef6\u7e8c\u4e0a\u4e00\u7bc7\u7684\u601d\u8def,\u7e7c\u7e8c\u7814\u7a76 iptables \u7684\u898f\u5247\u4f86\u63a2\u8a0e NodePort \u5230\u5e95\u662f\u5982\u4f55\u5be6\u73fe\u7684"},o="Preface",p={unversionedId:"2018/kubernetes-service-iii",id:"2018/kubernetes-service-iii",title:"[Kubernetes] How to Implement Kubernetes Service - NodePort",description:"\u5728\u524d\u8ff0\u4e2d\u6211\u5011\u5df2\u7d93\u5b78\u904e\u4e86\u4ec0\u9ebc\u662f kubernetes service \u4ee5\u53ca\u5982\u4f55\u5be6\u73fe ClusterIP \u9019\u7a2e\u985e\u578b\u7684 service. \u900f\u904e\u5c0d iptables \u7684\u63a2\u8a0e\u8207\u7814\u7a76, \u6211\u5011\u53ef\u4ee5\u7406\u89e3\u5230 ClusterIP \u672c\u8eab\u6703\u63d0\u4f9b\u4e00\u500b\u865b\u64ec\u7684 IP \u5730\u5740,\u63a5\u4e0b\u4f86\u53ea\u8981\u8ddf\u9019\u500b\u5730\u5740\u6709\u95dc\u7684\u5c01\u5305,\u90fd\u6703\u900f\u904e DNAT \u7684\u65b9\u5f0f\u9032\u884c\u8f49\u63db\u627e\u5230\u6700\u5f8c\u7684 Endpoint IP. \u81f3\u65bc\u5982\u4f55\u9078\u64c7\u7684\u90e8\u5206,\u5247\u662f\u900f\u904e\u6a5f\u7387\u7684\u65b9\u5f0f\u53bb\u5c0b\u627e. \u63a5\u4e0b\u4f86\u6211\u5011\u8981\u4f86\u63a2\u8a0e\u53e6\u5916\u4e00\u500b\u4e5f\u662f\u5f88\u5e38\u4f7f\u7528\u7684 kubernetes service \u985e\u578b, \u4e5f\u5c31\u662f NodePort. NodePort \u672c\u8eab\u5305\u542b\u4e86 ClusterIP \u7684\u6240\u6709\u529f\u80fd, \u6b64\u5916\u4e5f\u984d\u5916\u958b\u555f\u4e86\u4e00\u500b\u65b0\u7684\u5b58\u53d6\u65b9\u5f0f. \u900f\u904e\u76f4\u63a5\u5b58\u53d6\u7bc0\u9ede\u7684 IP \u5730\u5740\u914d\u4e0a\u4e00\u500b\u8a2d\u5b9a\u597d\u7684 Port, \u4e5f\u53ef\u4ee5\u5c07\u8a72\u5c01\u5305\u76f4\u63a5\u9001\u5230\u6700\u5f8c\u9762\u7684\u5bb9\u5668\u61c9\u7528\u7a0b\u5f0f. \u56e0\u6b64\u672c\u6587\u4e5f\u8981\u5ef6\u7e8c\u4e0a\u4e00\u7bc7\u7684\u601d\u8def,\u7e7c\u7e8c\u7814\u7a76 iptables \u7684\u898f\u5247\u4f86\u63a2\u8a0e NodePort \u5230\u5e95\u662f\u5982\u4f55\u5be6\u73fe\u7684",source:"@site/docs/2018/kubernetes-service-iii.md",sourceDirName:"2018",slug:"/2018/kubernetes-service-iii",permalink:"/docs/2018/kubernetes-service-iii",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"iptables",permalink:"/docs/tags/iptables"},{label:"Network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"[Kubernetes] How to Implement Kubernetes Service - NodePort",date:"2018-08-25T01:17:08.000Z",tags:["Kubernetes","Linux","iptables","Network"],description:"\u5728\u524d\u8ff0\u4e2d\u6211\u5011\u5df2\u7d93\u5b78\u904e\u4e86\u4ec0\u9ebc\u662f kubernetes service \u4ee5\u53ca\u5982\u4f55\u5be6\u73fe ClusterIP \u9019\u7a2e\u985e\u578b\u7684 service. \u900f\u904e\u5c0d iptables \u7684\u63a2\u8a0e\u8207\u7814\u7a76, \u6211\u5011\u53ef\u4ee5\u7406\u89e3\u5230 ClusterIP \u672c\u8eab\u6703\u63d0\u4f9b\u4e00\u500b\u865b\u64ec\u7684 IP \u5730\u5740,\u63a5\u4e0b\u4f86\u53ea\u8981\u8ddf\u9019\u500b\u5730\u5740\u6709\u95dc\u7684\u5c01\u5305,\u90fd\u6703\u900f\u904e DNAT \u7684\u65b9\u5f0f\u9032\u884c\u8f49\u63db\u627e\u5230\u6700\u5f8c\u7684 Endpoint IP. \u81f3\u65bc\u5982\u4f55\u9078\u64c7\u7684\u90e8\u5206,\u5247\u662f\u900f\u904e\u6a5f\u7387\u7684\u65b9\u5f0f\u53bb\u5c0b\u627e. \u63a5\u4e0b\u4f86\u6211\u5011\u8981\u4f86\u63a2\u8a0e\u53e6\u5916\u4e00\u500b\u4e5f\u662f\u5f88\u5e38\u4f7f\u7528\u7684 kubernetes service \u985e\u578b, \u4e5f\u5c31\u662f NodePort. NodePort \u672c\u8eab\u5305\u542b\u4e86 ClusterIP \u7684\u6240\u6709\u529f\u80fd, \u6b64\u5916\u4e5f\u984d\u5916\u958b\u555f\u4e86\u4e00\u500b\u65b0\u7684\u5b58\u53d6\u65b9\u5f0f. \u900f\u904e\u76f4\u63a5\u5b58\u53d6\u7bc0\u9ede\u7684 IP \u5730\u5740\u914d\u4e0a\u4e00\u500b\u8a2d\u5b9a\u597d\u7684 Port, \u4e5f\u53ef\u4ee5\u5c07\u8a72\u5c01\u5305\u76f4\u63a5\u9001\u5230\u6700\u5f8c\u9762\u7684\u5bb9\u5668\u61c9\u7528\u7a0b\u5f0f. \u56e0\u6b64\u672c\u6587\u4e5f\u8981\u5ef6\u7e8c\u4e0a\u4e00\u7bc7\u7684\u601d\u8def,\u7e7c\u7e8c\u7814\u7a76 iptables \u7684\u898f\u5247\u4f86\u63a2\u8a0e NodePort \u5230\u5e95\u662f\u5982\u4f55\u5be6\u73fe\u7684"},sidebar:"techPost",previous:{title:"[Kubernetes] How to Implement Kubernetes Service - ClusterIP",permalink:"/docs/2018/kubernetes-service-ii"},next:{title:"[Kubernetes] How to Implement Kubernetes Service - SessionAffinity",permalink:"/docs/2018/kubernetes-service-iiii"}},l={},m=[],d={toc:m},s="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preface"},"Preface"),(0,i.kt)("p",null,"\u672c\u6587\u7ae0\u662f\u5c6c\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes")," service \u7cfb\u5217\u6587\u4e4b\u4e00\uff0c\u8a72\u7cfb\u5217\u6587\u5e0c\u671b\u80fd\u5920\u8207\u5927\u5bb6\u8a0e\u8ad6\u4e0b\u5217\u5169\u500b\u89c0\u5ff5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"Kubernetes Service"),", \u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981\u5b83\uff1f \u5b83\u80fd\u5920\u5e6b\u5fd9\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Kubernetes Service")," \u662f\u600e\u9ebc\u5be6\u73fe\u7684?\uff0c \u8b93\u6211\u5011\u7528 iptables \u4f86\u5fb9\u5fb9\u5e95\u5e95\u7684\u7406\u89e3\u4ed6")),(0,i.kt)("p",null,"\u76f8\u95dc\u6587\u7ae0:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/kubernetes-service-i"},"[Kubernetes] What is Service"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/kubernetes-service-ii"},"[Kubernetes] How To Implement Kubernetes Service - ClusterIP"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/kubernetes-service-iiii"},"[Kubernetes] How To Implement Kubernetes Service - SessionAffinity")),(0,i.kt)("p",null,"\u672c\u6587\u929c\u63a5\u4e0a\u7bc7\u6587\u7ae0\uff0c\u7e7c\u7e8c\u900f\u904e\u5c0d ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," \u7684\u5206\u6790\u4f86\u7814\u7a76 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes service")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u7684\u5be6\u4f5c\u539f\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u7684\u529f\u80fd\u5c31\u5982\u540c\u5b57\u9762\u4e0a\u7684\u610f\u601d\u4e00\u6a23,",(0,i.kt)("inlineCode",{parentName:"p"},"Node Port"),", \u63d0\u4f9b\u4e86\u4e00\u7a2e\u900f\u904e\u5b58\u53d6\u53e2\u96c6\u7bc0\u9ede\u4e0a\u4e8b\u5148\u5b9a\u7fa9\u597d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Port Number")," \u5c31\u53ef\u4ee5\u8f3e\u8f49\u5b58\u53d6\u5230\u5f8c\u7aef\u7684\u771f\u6b63\u670d\u52d9\u3002"),(0,i.kt)("p",null,"\u4f5c\u70ba\u4e00\u500b\u9760\u8166\u529b\u751f\u5b58\u7684\u4eba\uff0c\u6bcf\u6b21\u9047\u5230\u5168\u65b0\u6982\u5ff5\u7684\u6642\u5019\uff0c\u90fd\u8981\u554f\u554f\u81ea\u5df1\u5e7e\u500b\u554f\u984c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9019\u500b\u6982\u5ff5\u662f\u60f3\u8981\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c?"),(0,i.kt)("li",{parentName:"ol"},"\u4ec0\u9ebc\u6642\u5019\u6703\u7528\u5230?"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u662f\u6211\uff0c\u6211\u6703\u600e\u9ebc\u5be6\u4f5c?")),(0,i.kt)("h1",{id:"why-we-need-nortport"},"Why We Need NortPort"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u672c\u8eab\u662f\u5c6c\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes service"),"\u7684\u4e00\u74b0\uff0c\u81ea\u7136\u5c31\u662f\u8981\u63d0\u4f9b\u4e00\u500b\u65b9\u5f0f\u53ef\u4ee5\u8b93\u5916\u90e8\u4f86\u5b58\u53d6\u96c6\u7fa4\u5167\u7684\u670d\u52d9\uff0c\u800c\u4e14\u53ef\u4ee5\u4e0d\u7528\u53bb\u7406\u6703\u5f8c\u9762\u9019\u4e9b\u5bb9\u5668\u5011\u7684\u771f\u5be6",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u5730\u5740\u3002"),(0,i.kt)("p",null,"\u65e2\u7136\u5df2\u7d93\u6709\u524d\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u63d0\u4f9b\u4e86\u4e00\u7a2e\u53e2\u96c6\u5167\u5b58\u53d6\u7684\u65b9\u5f0f\uff0c\u4ec0\u9ebc\u60c5\u6cc1\u4e0b\u6211\u5011\u6703\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u9019\u7a2e\u900f\u904e\u5b58\u53d6\u7bc0\u9ede\u7684\u65b9\u5f0f?"),(0,i.kt)("p",null,"\u9019\u908a\u4f7f\u7528\u4e00\u500b\u4e0b\u5217\u7684\u7bc4\u4f8b\u4f86\u89e3\u91cb\u53ef\u80fd\u7684\u60c5\u6cc1"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u53ea\u662f\u4e00\u7a2e\u7bc4\u4f8b\uff0c\u4f46\u662f\u672a\u5fc5\u662f\u6700\u4f73\u89e3"),(0,i.kt)("p",null,"\u5047\u8a2d\u4eca\u5929\u6709\u4e00\u500b\u8a66\u9a57\u74b0\u5883\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Cloud Provider(Google/Azure/AWS...etc)"),"\u4e2d\u67b6\u8a2d\u4e86\u4e00\u500b",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u53e2\u96c6\uff0c\u88e1\u9762\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u7684\u65b9\u5f0f\u90e8\u5c6c\u4e86\u4e00\u500b\u7db2\u9801\u4f3a\u670d\u5668\u3002\n\u8207\u6b64\u540c\u6642\uff0c\u6211\u5e0c\u671b\u8a72\u53e2\u96c6\u80fd\u5920\u63d0\u4f9b\u4e0b\u5217\u7684\u7279\u6027\u4f9b\u6211\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u5e0c\u671b\u7ba1\u7406\u4eba\u54e1\u53ef\u4ee5\u4e0d\u9700\u8981\u53bb\u64d4\u5fc3\u8a72 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx")," \u7684\u72c0\u614b\uff0c\u5176\u7db2\u9801\u670d\u52d9\u80fd\u5920\u4e00\u76f4\u6b63\u5e38\u904b\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u76f4\u63a5\u9023\u63a5\u5230\u8a72 ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx")," \u63d0\u4f9b\u7684\u7db2\u9801\u4f3a\u670d\u5668\u670d\u52d9")),(0,i.kt)("p",null,"\u70ba\u4e86\u6eff\u8db3\u7b2c\u4e00\u500b\u689d\u4ef6\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes deployment")," \u7684\u65b9\u5f0f\u53bb\u78ba\u4fdd ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u7684\u5bb9\u5668\u8655\u65bc\u4e00\u7a2e\u904b\u884c\u7684\u72c0\u614b\u3002\n\u70ba\u4e86\u6eff\u8db3\u7b2c\u4e8c\u500b\u689d\u4ef6\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes service")," \u7684\u65b9\u5f0f\u53bb\u9023\u63a5\u4e0a\u8ff0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u5bb9\u5668\u5011\u4e26\u4e14\u63d0\u4f9b\u4e00\u7a2e\u63a5\u53e3\u8b93\u5916\u90e8\u5b58\u53d6\n\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u53ea\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u53e2\u96c6\u5167\u7684\u7bc0\u9ede\u64c1\u6709\u4e00\u500b\u56fa\u5b9a\u7684\u5c0d\u5916",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u5730\u5740\uff0c\u540c\u6642 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes server")," \u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePorts")," \u7684\u65b9\u5f0f\u63d0\u4f9b\u8a72",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),"\u5f80\u5916\u5b58\u53d6\u7684\u80fd\u529b\u3002\n\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\uff0c\u900f\u904e\u76f4\u63a5\u5b58\u53d6\u8a72\u7bc0\u9ede\u7684\u5c0d\u5916",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u5730\u5740\uff0c\u7136\u5f8c\u9593\u63a5\u900f\u904e",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort"),"\u7684\u529f\u80fd\u5b58\u53d6\u5230\u96c6\u7fa4\u5167\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),"\u670d\u52d9\u3002"),(0,i.kt)("h1",{id:"how-it-works"},"How It Works"),(0,i.kt)("p",null,"\u5df2\u7d93\u6709\u4e86\u524d\u8ff0\u95dc\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u904b\u4f5c\u7684\u6982\u5ff5\u5f8c\uff0c\u5176\u5be6\u8981\u63a2\u8a0e ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u662f\u5982\u4f55\u5be6\u73fe\u7684\u5c31\u975e\u5e38\u7c21\u55ae\u4e86\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u5148\u5feb\u901f\u8907\u7fd2\u4e00\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u7684\u904b\u4f5c\u6d41\u7a0b\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/xoPvipq.png",alt:"Imgur"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c01\u5305\u82e5\u4f86\u81ea\u53e2\u96c6\u4e0a\u7684\u61c9\u7528\u7a0b\u5f0f/\u7bc0\u9ede\uff0c\u5247\u8df3\u5230 `KUBE-SVC"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u5c01\u5305\u7684\u76ee\u6a19",(0,i.kt)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterIP")," \u6240\u63d0\u4f9b\u7684\u865b\u64ec",(0,i.kt)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740, \u5247\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-SVC-XXXX")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-SVC-XXX")," \u88e1\u9762\u6839\u64da\u6a5f\u7387\u7684\u65b9\u5f0f\uff0c\u9078\u5230\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"li"},"Endpoints"),"\uff0c\u6700\u5f8c\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-SEP-XXX")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-SEP-XXX")," \u88e1\u9762\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"DNAT"),", \u5c07\u5c01\u5305\u7684\u76ee\u6a19\u5730\u5740\u6539\u6210\u771f\u6b63\u7684\u5bb9\u5668\u5730\u5740\uff0c\u7136\u5f8c\u8f49\u767c")),(0,i.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7684\u6982\u5ff5\uff0c\u6211\u5011\u5982\u679c\u8981\u652f\u63f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u9019\u7a2e\u80fd\u5920\u900f\u904e",(0,i.kt)("inlineCode",{parentName:"p"},"\u7bc0\u9edeIP"),"\u7684\u65b9\u5f0f\u5b58\u53d6\u7684\u8a71\u3002\n\u60f3\u4e86\u4e00\u4e0b\uff0c\u5176\u5be6\u5c31\u662f\u628a\u4e0a\u8ff0\u7684(1)/(2)\u6539\u6389\u5c31\u597d\uff0c\u80fd\u5920\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-SVC-XXX"),"\u7684\u8a71\uff0c\u5f8c\u7e8c\u5c31\u5b8c\u5168\u4e00\u81f4\u4e86\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u4f86\uff0c\u6211\u5011\u7e7c\u7e8c\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hwchiu/kubeDemo"},"kubeDemo"),"\u4f86\u9032\u884c\u76f8\u95dc\u7684\u670d\u52d9\u90e8\u5c6c\u4ee5\u53ca",(0,i.kt)("inlineCode",{parentName:"p"},"iptables"),"\u898f\u5247\u7814\u7a76\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u5148\u5728\u74b0\u5883\u5167\u90e8\u7f72\u76f8\u95dc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes service(NodePort)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"vortex-dev:06:36:12 [~/go/src/github.com/hwchiu/kubeDemo/services](master)vagrant\n$kubectl apply -f deployment/nginx.yml\ndeployment.apps/k8s-nginx created\n\nvortex-dev:06:36:18 [~/go/src/github.com/hwchiu/kubeDemo/services](master)vagrant\n$kubectl apply -f service/nginx-node.yml\nservice/k8s-nginx-node created\n")),(0,i.kt)("p",null,"\u9019\u908a\u5c31\u4e0d\u518d\u6558\u8ff0\u592a\u591a\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"service/endpoints")," \u76f8\u95dc\u7684\u8cc7\u8a0a\u8207\u4f4d\u7f6e\uff0c\u76f4\u63a5\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," \u7684\u89d2\u5ea6\u51fa\u767c\u3002"),(0,i.kt)("p",null,"\u6211\u500b\u4eba\u975e\u5e38\u559c\u6b61 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u7684\u4e00\u9ede\u5c31\u662f\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," \u7684\u898f\u5247\u90fd\u6703\u4e0b\u8a3b\u89e3\uff0c\u6240\u4ee5\u5176\u5be6\u53ef\u4ee5\u5f88\u8f15\u6613\u7684\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"grep")," \u7684\u65b9\u5f0f\u627e\u5230\u76f8\u95dc\u7684\u898f\u5247\u3002\n\u4ee5\u4e0a\u8ff0\u7684\u7bc4\u4f8b\u4f86\u8aaa\uff0c\u6211\u5011\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace \u4e2d\u90e8\u5c6c\u4e86\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-nginx-node")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes service"),".\n\u6240\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"grep default/k8s-nginx-node")," \u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u904e\u6ffe\u51fa\u6240\u6709\u8ddf\u9019\u500b",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"\u6709\u95dc\u7684\u6240\u6709\u898f\u5247\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},'vortex-dev:03:17:35 [~]vagrant\n$sudo iptables-save  | grep default/k8s-nginx-node\n-A KUBE-NODEPORTS -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp --dport 30136 -j KUBE-MARK-MASQ\n-A KUBE-NODEPORTS -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp --dport 30136 -j KUBE-SVC-RD5DSC6PXE26GCYZ\n-A KUBE-SEP-VRKO3GZ2XUCPVWY5 -s 10.244.0.115/32 -m comment --comment "default/k8s-nginx-node:" -j KUBE-MARK-MASQ\n-A KUBE-SEP-VRKO3GZ2XUCPVWY5 -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp -j DNAT --to-destination 10.244.0.115:80\n-A KUBE-SEP-YNJKNN6SS5424R7C -s 10.244.0.113/32 -m comment --comment "default/k8s-nginx-node:" -j KUBE-MARK-MASQ\n-A KUBE-SEP-YNJKNN6SS5424R7C -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp -j DNAT --to-destination 10.244.0.113:80\n-A KUBE-SEP-ZGMDZ7UNNV74OV5B -s 10.244.0.114/32 -m comment --comment "default/k8s-nginx-node:" -j KUBE-MARK-MASQ\n-A KUBE-SEP-ZGMDZ7UNNV74OV5B -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp -j DNAT --to-destination 10.244.0.114:80\n-A KUBE-SERVICES ! -s 10.244.0.0/16 -d 10.98.128.179/32 -p tcp -m comment --comment "default/k8s-nginx-node: cluster IP" -m tcp --dport 80 -j KUBE-MARK-MASQ\n-A KUBE-SERVICES -d 10.98.128.179/32 -p tcp -m comment --comment "default/k8s-nginx-node: cluster IP" -m tcp --dport 80 -j KUBE-SVC-RD5DSC6PXE26GCYZ\n-A KUBE-SVC-RD5DSC6PXE26GCYZ -m comment --comment "default/k8s-nginx-node:" -m statistic --mode random --probability 0.33332999982 -j KUBE-SEP-YNJKNN6SS5424R7C\n-A KUBE-SVC-RD5DSC6PXE26GCYZ -m comment --comment "default/k8s-nginx-node:" -m statistic --mode random --probability 0.50000000000 -j KUBE-SEP-ZGMDZ7UNNV74OV5B\n-A KUBE-SVC-RD5DSC6PXE26GCYZ -m comment --comment "default/k8s-nginx-node:" -j KUBE-SEP-VRKO3GZ2XUCPVWY5\n')),(0,i.kt)("p",null,"\u6211\u5011\u5feb\u901f\u7684\u6383\u904e\u6240\u6709\u7684\u898f\u5247\uff0c\u6839\u64da ",(0,i.kt)("inlineCode",{parentName:"p"},"custom chain")," \u4f86\u770b\uff0c\u5206\u6210\u56db\u500b\u90e8\u5206"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"KUBE-NODEPORTS"),(0,i.kt)("li",{parentName:"ol"},"KUBE-SEP-XXXX"),(0,i.kt)("li",{parentName:"ol"},"KUBE-SERVICES"),(0,i.kt)("li",{parentName:"ol"},"KUBE-SVC-XXXX")),(0,i.kt)("p",null,"\u9019\u908a\u76ee\u524d\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORTS")," \u9084\u6c92\u6709\u770b\u904e\uff0c\u5269\u4e0b\u7684\u90fd\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u662f\u4e00\u6a23\u7684\u529f\u80fd\u7684\u3002"),(0,i.kt)("p",null,"NodePort \u7684\u529f\u80fd\u57fa\u65bc ClusterIP \u4e4b\u4e0a\u518d\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u6240\u4ee5\u672c\u4f86 Cluster \u8a72\u6709\u7684\u898f\u5247\u5c0d\u65bc NodePort \u4f86\u8aaa\u90fd\u4e0d\u6703\u5c11"),(0,i.kt)("h1",{id:"kube-nodeports"},"KUBE-NODEPORTS"),(0,i.kt)("p",null,"\u6211\u5011\u4ed4\u7d30\u89c0\u5bdf ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORTS")," \u76f8\u95dc\u7684\u5169\u689d\u898f\u5247"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},'-A KUBE-NODEPORTS -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp --dport 30136 -j KUBE-MARK-MASQ\n-A KUBE-NODEPORTS -p tcp -m comment --comment "default/k8s-nginx-node:" -m tcp --dport 30136 -j KUBE-SVC-RD5DSC6PXE26GCYZ\n')),(0,i.kt)("p",null,"\u7b2c\u4e00\u689d\u898f\u5247\u7684\u76ee\u6a19\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"-j KUBE-MARK-MASQ"),", \u9019\u90e8\u4efd\u662f\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"SNAT")," \u6709\u95dc\u7684\uff0c\u9019\u500b\u4e4b\u5f8c\u6709\u6a5f\u6703\u518d\u5beb\u984d\u5916\u7684\u6587\u7ae0\u4f86\u4ecb\u7d39 ",(0,i.kt)("inlineCode",{parentName:"p"},"SNAT")," \u76f8\u95dc\u7684\u529f\u80fd\u4ee5\u53ca\u8655\u7406\u65b9\u5f0f\u3002\n\u9019\u908a\u53ea\u8981\u77e5\u9053\u9019\u662f\u4fee\u6539\u5c01\u5305\u7684\u4f86\u6e90",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u4f4d\u5740\u5373\u53ef\n\u7b2c\u4e8c\u689d\u898f\u5247\u6bd4\u8f03\u91cd\u8981\uff0c\u6211\u5011\u53ef\u4ee5\u89c0\u5bdf\u5230"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5176\u6bd4\u5c0d\u689d\u4ef6\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"-m tcp --dport 30136"),"."),(0,i.kt)("li",{parentName:"ol"},"\u7b26\u5408\u689d\u4ef6\u5f8c\u57f7\u884c\u7684\u884c\u70ba\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"-j KUBE-SVC-RD5DSC6PXE26GCYZ"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"vortex-dev:03:34:14 [~]vagrant\n$kubectl get svc\nNAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nk8s-nginx-node   NodePort    10.98.128.179   <none>        80:30136/TCP   1d\n")),(0,i.kt)("p",null,"\u6839\u64da\u67e5\u8a62 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes svc")," \u7684\u7d50\u679c\uff0c\u6211\u5011\u53ef\u4ee5\u89c0\u5bdf\u5230\u900f\u904e\u5b58\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"30136/TCP")," \u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u5b58\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePOrt"),".\n\u800c\u9019\u500b\u8cc7\u8a0a\u8207\u6211\u5011\u524d\u9762\u770b\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORTS")," \u9019\u908a\u7684\u898f\u5247\u5b8c\u5168\u4e00\u6a23\n\u6700\u5f8c\u53ef\u4ee5\u767c\u73fe\u7576\u898f\u5247\u4e00\u81f4\u6642\uff0c\u5c31\u6703\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-SVC-XXX")," \u53bb\u9032\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," \u7684\u6311\u9078\u4ee5\u53ca\u76f8\u95dc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DNAT")," \u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u54ea\u63a5\u4e0b\u4f86\u7684\u554f\u984c\u53ea\u5269\u4e0b\u4e00\u500b\n\u5230\u5e95\u5c01\u5305\u4ec0\u9ebc\u6642\u5019\u6703\u9032\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORTS")," ? \u53ea\u8981\u91d0\u6e05\u9019\u500b\u554f\u984c\uff0c\u5269\u4e0b\u7684\u8655\u7406\u65b9\u5f0f\u5c31\u90fd\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u5b8c\u5168\u4e00\u6a23\u4e86\u3002\n\u9019\u6642\u5019\u6211\u5011\u5c31\u8981\u4e00\u689d\u4e00\u689d ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," \u7684\u898f\u5247\u4f86\u6162\u6162\u67e5\u8a62"),(0,i.kt)("p",null,"\u6211\u5077\u61f6\u76f4\u63a5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"-j KUBE-NODEPORTS")," \u7684\u65b9\u5f0f\u4f86\u67e5\u8a62\uff0c\u5230\u5e95\u8ab0\u6703\u8df3\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORT")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},'vortex-dev:03:43:42 [~]vagrant\n$sudo iptables-save  | grep "\\-j KUBE-NODEPORTS"\n-A KUBE-SERVICES -m comment --comment "kubernetes service nodeports; NOTE: this must be the last rule in this chain" -m addrtype --dst-type LOCAL -j KUBE-NODEPORTS\n')),(0,i.kt)("p",null,"\u9019\u500b\u898f\u5247\u975e\u5e38\u6709\u8da3\uff0c\u9996\u5148\u6211\u5011\u53ef\u4ee5\u89c0\u5bdf\u5230\uff0c\u4ed6\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-SERVICES")," \u9019\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"custom chain")," \u88e1\u9762\u3002 \u63a5\u4e0b\u4f86\u53ef\u4ee5\u89c0\u5bdf\u4ed6\u7684\u8a3b\u89e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubernetes service nodeports; NOTE: this must be the last rule in this chain\n")),(0,i.kt)("p",null,"\u7136\u5f8c\u770b\u4e00\u4e0b\u6bd4\u5c0d\u689d\u4ef6\u4ee5\u53ca\u57f7\u884c\u76ee\u6a19"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"-m addrtype --dst-type LOCAL"),(0,i.kt)("li",{parentName:"ol"},"-j KUBE-NODEPORTS")),(0,i.kt)("p",null,"\u7b2c\u4e00\u500b\u6bd4\u5c0d\u689d\u4ef6\u6211\u5011\u5f9e\u6587\u5b57\u4e0a\u4f86\u89e3\u8b80\uff0c\u53ea\u8981\u5c01\u5305\u7684\u76ee\u6a19",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u5730\u5740\u662f\u5c6c\u65bc\u672c\u7bc0\u9ede\u4e0a\u7684\u4efb\u4f55\u7db2\u5361",(0,i.kt)("inlineCode",{parentName:"p"},"IP"),"\u3002\n\u53ea\u8981\u7b26\u5408\u4e0a\u8ff0\u898f\u5247\uff0c\u5c31\u6703\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBE-NODEPORT")," \u88e1\u9762\u9032\u884c\u6bd4\u5c0d\uff0c\u7136\u5f8c\u5c31\u6309\u7167\u524d\u8ff0\u7684\u53bb\u8655\u7406\u4e86\u3002"),(0,i.kt)("p",null,"\u5c0d\u65bc --dst-type LOCAL \u6709\u8208\u8da3\u7684\u4eba\u53ef\u4ee5\u5617\u8a66\u95b1\u8b80\u4e0b\u5217\u9019\u500b\u6a94\u6848\n",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v4.7.8/source/net/netfilter/xt_addrtype.c#L119"},"https://elixir.bootlin.com/linux/v4.7.8/source/net/netfilter/xt_addrtype.c#L119"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v4.7.8/source/include/uapi/linux/rtnetlink.h#L203"},"https://elixir.bootlin.com/linux/v4.7.8/source/include/uapi/linux/rtnetlink.h#L203"),"\n\u770b\u770b kernel \u5167\u5927\u81f4\u4e0a\u662f\u600e\u9ebc\u8655\u7406\u9019\u7cfb\u5217\u64cd\u4f5c\u7684"),(0,i.kt)("p",null,"\u5230\u9019\u908a\u6211\u5011\u6574\u7406\u4e00\u4e0b\u6240\u6709\u7684\u601d\u8def\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"NodePort \u4e5f\u662f\u501a\u8cf4 ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-SERVICES"),"\uff0c\u7576\u5c01\u5305\u76ee\u6a19\u662f\u672c\u5730\u7aef\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"IP")," \u4f4d\u7f6e\u7684\u6642\u5019\uff0c\u5c31\u6703\u8df3\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-NODEPORT")," \u88e1\u9762\u53bb\u6bd4\u5c0d ",(0,i.kt)("inlineCode",{parentName:"li"},"protocol/port")," \u4f86\u9032\u884c\u5f8c\u7e8c\u8ddf ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterIP")," \u76f8\u540c\u7684\u8655\u7406"),(0,i.kt)("li",{parentName:"ol"},"\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"kubernetes NodePort service")," \u90fd\u6703\u5171\u7528\u540c\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBE-NODEPORT"),", \u56e0\u6b64\u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"NodePort")," \u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Port")," \u90fd\u4e0d\u80fd\u4e00\u6a23")),(0,i.kt)("p",null,"\u6211\u5011\u7528\u4e0b\u5217\u9019\u5f35\u5716\u4f86\u7e3d\u7d50 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u7684\u904b\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/9amwybH.png",alt:"Imgur"})),(0,i.kt)("h1",{id:"portbinding"},"PortBinding"),(0,i.kt)("p",null,"\u7531\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u6703\u4f7f\u7528\u5230\u7bc0\u9ede\u4e0a\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," \u4f86\u63d0\u4f9b\u670d\u52d9\n\u4f46\u5f9e ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," \u7684\u898f\u5247\u89c0\u5bdf\u4e0b\uff0c\u5176\u5be6 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u6240\u7528\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," \u5c31\u662f\u4e00\u500b\u865b\u64ec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Port"),"\uff0c\u8b6c\u5982\u4e0a\u8ff0\u7bc4\u4f8b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"30136"),"\u3002\n\u70ba\u4e86\u907f\u514d\u6709\u4efb\u4f55\u61c9\u7528\u7a0b\u5f0f\u4e4b\u5f8c\u5c07 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u8981\u7528\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," \u7d66\u62ff\u53bb\u4f7f\u7528\uff0c\u5c0e\u81f4\u6574\u500b\u6709\u4efb\u4f55\u975e\u9810\u671f\u7684\u884c\u70ba\u51fa\u73fe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8b6c\u5982\u67d0\u670d\u52d9\u60f3\u8981\u7528 30136 port, \u4f46\u662f\u6240\u6709\u7684\u5c01\u5305\u90fd\u88ab iptables \u5c0e\u8d70\u4e86\uff0c\u5c0e\u81f4\u8a72\u670d\u52d9\u4e00\u76f4\u6c92\u6709\u8fa6\u6cd5\u63a5\u6536\u5230\u771f\u6b63\u7684\u9023\u7dda")),(0,i.kt)("p",null,"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u5c31\u662f\u4e0d\u8981\u8b93\u4efb\u4f55\u61c9\u7528\u7a0b\u5f0f\u6709\u6a5f\u6703\u4f7f\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"30136")," \u7684\u9023\u63a5\u57e0\uff0c\u56e0\u6b64\u6bcf\u500b\u7bc0\u9ede\u4e0a\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-proxy")," \u5c31\u6703\u5e6b\u5fd9\u505a\u9019\u4ef6\u4e8b\u60c5\u3002"),(0,i.kt)("p",null,"\u4e00\u65e6 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u6210\u529f\u5efa\u7acb\u5f8c\uff0c\u5c31\u6703\u5c07\u8a72 ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," \u7d66\u4f7f\u7528\u8d70\uff0c\u8b93\u5176\u4ed6\u7684\u61c9\u7528\u7a0b\u5f0f\u6c92\u6709\u6a5f\u6703\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u9019\u90e8\u4efd\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"netstat")," \u7684\u6307\u4ee4\u4f86\u89c0\u5bdf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"vortex-dev:04:08:18 [~]vagrant\n$sudo netstat -ltpn | grep 30136\ntcp6       0      0 :::30136                :::*                    LISTEN      10181/kube-proxy\n")),(0,i.kt)("p",null,"\u9019\u9ede\u8ddf ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," \u7684\u60f3\u6cd5\u662f\u5f88\u985e\u4f3c\u7684\uff0c\u4e0d\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," \u6240\u555f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-proxy")," \u5176\u5be6\u4e5f\u6703\u5e6b\u5fd9 ",(0,i.kt)("inlineCode",{parentName:"p"},"forward")," \u9019\u4e9b\u5c01\u5305\uff0c\u800c\u4e0d\u662f\u55ae\u7d14\u7684\u6436\u5360\u907f\u514d\u670d\u52d9\u5931\u6548\u800c\u5df2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"vortex-dev:01:08:39 [~/go/src/github.com/linkernetworks/vortex/vendor](hwchiu/VX-62)vagrant\n$sudo docker run -d -p 5566:80 nginx\nf4b6b72ad82c170a92cd6ea272fc8d665b69835b8508d20e1ac2b220b2ba5b31\nvortex-dev:01:08:43 [~/go/src/github.com/linkernetworks/vortex/vendor](hwchiu/VX-62)vagrant\n$ps axuw  | grep docker-p\nroot     21499  0.0  0.0  59068  2852 ?        Sl   01:08   0:00 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 5566 -container-ip 172.18.0.2 -container-port 80\n")),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"\u672c\u7ae0\u7bc0\u6211\u5011\u4ed4\u7d30\u7684\u8a0e\u8ad6\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u5404\u7a2e\u9762\u5411\u7684\u6982\u5ff5\uff0c\u6700\u5f8c\u767c\u73fe\u5176\u5be6 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u7684\u898f\u5247\u975e\u5e38\u7c21\u55ae\uff0c\u5efa\u7acb\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u4e4b\u4e0a\u3002\n\u53ea\u8981\u80fd\u5920\u638c\u63e1 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," \u662f\u5982\u4f55\u904b\u4f5c\u7684\uff0c\u56de\u904e\u982d\u4f86\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," \u5c31\u4e0d\u96e3\u7406\u89e3\u9019\u6574\u500b\u904e\u7a0b\u3002"),(0,i.kt)("p",null,"\u6700\u5f8c\u7e7c\u7e8c\u4f7f\u7528\u9019\u5f35\u5716\u4f5c\u70ba\u7e3d\u7d50\uff0c\u5e0c\u671b\u5927\u5bb6\u9019\u6642\u5019\u90fd\u80fd\u5920\u9806\u5229\u7684\u770b\u61c2\u9019\u5f35\u5716\u8981\u8868\u9054\u7684\u4e00\u5207\u6982\u5ff5\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/9amwybH.png",alt:"Imgur"})))}k.isMDXComponent=!0}}]);