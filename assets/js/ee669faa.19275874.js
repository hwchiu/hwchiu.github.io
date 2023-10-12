"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[93834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,f=u["".concat(c,".").concat(h)]||u[h]||m[h]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},81853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Helm Chart \u4e2d\u5982\u4f55\u6839\u64da\u689d\u4ef6\u4f86\u52d5\u614b\u5b89\u88dd Template \u5167\u7684\u7269\u4ef6",authors:"hwchiu",tags:["Helm"]},o=void 0,i={permalink:"/2023/09/01/helm",source:"@site/blog/2023/09-01-helm.md",title:"Helm Chart \u4e2d\u5982\u4f55\u6839\u64da\u689d\u4ef6\u4f86\u52d5\u614b\u5b89\u88dd Template \u5167\u7684\u7269\u4ef6",description:"Helm Chart \u4e2d\u53ef\u4ee5\u900f\u904e\u5404\u7a2e if/else \u7684\u8a9e\u6cd5\u5c07\u7269\u4ef6\u7d66\u5305\u88f9\u8d77\u4f86\uff0c\u9019\u500b\u64cd\u4f5c\u6703\u5f71\u97ff\u6700\u5f8c\u5b89\u88dd\u904e\u7a0b\u4e2d",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"Helm",permalink:"/tags/helm"}],readingTime:1.78,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"Helm Chart \u4e2d\u5982\u4f55\u6839\u64da\u689d\u4ef6\u4f86\u52d5\u614b\u5b89\u88dd Template \u5167\u7684\u7269\u4ef6",authors:"hwchiu",tags:["Helm"]},prevItem:{title:"k8s \u5167\u5b89\u88dd redis-cluster",permalink:"/2023/09/11/redis-cluster"},nextItem:{title:"GCS \u64cd\u4f5c\u4e0a\u6ce8\u610f\u4e8b\u9805",permalink:"/2023/07/21/gcs"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Helm Chart \u4e2d\u53ef\u4ee5\u900f\u904e\u5404\u7a2e if/else \u7684\u8a9e\u6cd5\u5c07\u7269\u4ef6\u7d66\u5305\u88f9\u8d77\u4f86\uff0c\u9019\u500b\u64cd\u4f5c\u6703\u5f71\u97ff\u6700\u5f8c\u5b89\u88dd\u904e\u7a0b\u4e2d\n\u8a72\u7269\u4ef6\u6703\u4e0d\u6703\u88ab\u7522\u51fa\u4e26\u4e14\u5b89\u88dd\u5230\u76ee\u6a19\u53e2\u96c6\u4e2d\uff0c\u56e0\u6b64\u5927\u90e8\u5206\u90fd\u662f\u90fd\u904e Values \u88e1\u9762\u7684 enable/disable \u7b49\u53c3\u6578\u4f86\u8abf\u6574\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4eca\u5929\u8a72\u7269\u4ef6\u7684\u5b89\u88dd\u689d\u4ef6\u5247\u662f\u6839\u64da K8s \u7248\u672c\u800c\u5b9a\uff0c\u7279\u5225\u662f\u7576\u67d0\u4e9b API \u65bc\u65b0\u7248\u88ab\u79fb\u9664\u6642\uff0c\u9019\u6642\u5019\u8981\u5982\u4f55\u64b0\u5beb\u4e00\u500b\u517c\u5bb9\u5169\u500b\u7248\u672c\u7684 Helm Chart\u3002\n\u8209\u4f8b\u4f86\u8aaa\uff0c\u4ee5\u6700\u8fd1\u88ab\u79fb\u9664\u7684 PSP(PodSecurityPolicy) \u7269\u4ef6\u70ba\u7bc4\u4f8b\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u500b\u505a\u6cd5\u5c31\u662f\u7dad\u8b77\u5169\u500b\u7248\u672c\u7684 Helm Chart\uff0c\u91dd\u5c0d\u65b0\u7248\u7684 Kubernetes \u63a8\u9032\u65b0\u7248\u672c\uff0c\u79fb\u9664 PSP \u7269\u4ef6\u4e26\u4e14\u91dd\u5c0d k8s \u7248\u672c\u9650\u5236\u6700\u4f4e\u7248\u672c\uff0c\u820a k8s \u53e2\u96c6\u4e0d\u652f\u63f4"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Helm \u5167\u5efa\u8a9e\u6cd5 ",(0,a.kt)("inlineCode",{parentName:"li"},".Capabilities.APIVersions.Has")," \u53bb\u5224\u65b7\u76ee\u6a19 K8s API Resource \u662f\u5426\u6709\u5305\u542b\u76ee\u6a19\u7248\u672c")),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/templates/prometheus/psp-clusterrole.yaml"},"kube-prometheus-stack")," \u70ba\u7bc4\u4f8b\n\u5176 psp-clusterorle.yaml \u4e2d\u7684\u958b\u982d\u4f7f\u7528\u4e86\u4e0b\u5217\u8a9e\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{{- if and .Values.prometheus.enabled .Values.global.rbac.create .Values.global.rbac.pspEnabled }}\n{{- if .Capabilities.APIVersions.Has "policy/v1beta1/PodSecurityPolicy" }}\nkind: ClusterRole\n...\n{{- end }}\n{{- end }}\n')),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},".Capabilities.APIVersions.Has")," \u8a9e\u6cd5\u53bb\u5224\u65b7\u8a72\u7269\u4ef6\u662f\u5426\u652f\u63f4\uff0c\u82e5\u652f\u63f4\u5247\u5b89\u88dd\u5426\u5247\u8df3\u6389\uff0c\u9019\u6a5f\u5236\u5e36\u4f86\u7684\u597d\u8655\u5c31\u662f\u53ef\u4ee5\u6253\u9020\u51fa\u4e00\u500b\u517c\u5bb9\u66f4\u591a\u7248\u672c K8s \u53e2\u96c6\u7684 Helm Chart\uff0c\u4f46\u662f\u5be6\u52d9\u4e0a\u771f\u7684\u9700\u8981\u9019\u6a23\u63a7\u7ba1\uff1f\u9084\u662f\u61c9\u8a72\u8981\u7528\u4e0d\u540c\u7248\u672c\u7684\u4f86\u7ba1\u7406\u6703\u66f4\u597d\u61c9\u8a72\u5c31\u898b\u4ec1\u898b\u667a\u3002"))}m.isMDXComponent=!0}}]);