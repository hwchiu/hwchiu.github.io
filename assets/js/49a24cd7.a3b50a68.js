"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[68902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,f=s["".concat(l,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u900f\u904e GCP IAP Gateway \u4f86\u4fdd\u8b77 GKE \u5167\u7684\u7db2\u7ad9",authors:"hwchiu",tags:["GCP"]},c=void 0,i={permalink:"/2023/01/05/gcp_gke_iap",source:"@site/blog/2023/01-05-gcp_gke_iap.md",title:"\u900f\u904e GCP IAP Gateway \u4f86\u4fdd\u8b77 GKE \u5167\u7684\u7db2\u7ad9",description:"\u900f\u904e\u57fa\u672c\u7684 GKE + Serviec + Ingress \u90e8\u7f72\u7db2\u7ad9\u5f8c\u901a\u5e38\u90fd\u6c92\u6709\u592a\u591a\u5b58\u53d6\u554f\u984c\uff0c\u4f46\u662f\u5c0d\u65bc\u516c\u958b\u670d\u52d9\u9019\u4ef6\u4e8b\u60c5\u5c31\u9700\u8981\u8003\u91cf\u8cc7\u5b89\uff0c\u6240\u6709\u7db2\u7ad9\u662f\u5426\u90fd\u9700\u8981\u7d93\u904e\u8a8d\u8b49\u8207\u6388\u6b0a\u624d\u53ef\u4ee5\u8b93\u5916\u90e8\u5b58\u53d6\uff1f",date:"2023-01-05T00:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"GCP",permalink:"/tags/gcp"}],readingTime:1.58,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u900f\u904e GCP IAP Gateway \u4f86\u4fdd\u8b77 GKE \u5167\u7684\u7db2\u7ad9",authors:"hwchiu",tags:["GCP"]},prevItem:{title:"CircleCI Context \u7684\u4f7f\u7528",permalink:"/2023/01/26/circleci"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cSRE \u7684\u5de5\u4f5c\u4ecb\u7ecd\u300d",permalink:"/2022/07/11/reading-notes-65"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u900f\u904e\u57fa\u672c\u7684 GKE + Serviec + Ingress \u90e8\u7f72\u7db2\u7ad9\u5f8c\u901a\u5e38\u90fd\u6c92\u6709\u592a\u591a\u5b58\u53d6\u554f\u984c\uff0c\u4f46\u662f\u5c0d\u65bc\u516c\u958b\u670d\u52d9\u9019\u4ef6\u4e8b\u60c5\u5c31\u9700\u8981\u8003\u91cf\u8cc7\u5b89\uff0c\u6240\u6709\u7db2\u7ad9\u662f\u5426\u90fd\u9700\u8981\u7d93\u904e\u8a8d\u8b49\u8207\u6388\u6b0a\u624d\u53ef\u4ee5\u8b93\u5916\u90e8\u5b58\u53d6\uff1f\n\u6709\u4e9b\u7b2c\u4e09\u65b9\u670d\u52d9\u958b\u6e90\u7248\u672c\u53ef\u80fd\u4e0d\u65b9\u4fbf\u929c\u63a5\u6216\u662f\u6c92\u6709\u5be6\u4f5c\u9019\u4e00\u584a\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u900f\u904e GCP \u7684  Identity-Aware Proxy(IAP) Gateway \u5feb\u901f\u642d\u5efa\u4e00\u500b\u6a5f\u5236\uff0c\u6240\u6709\u5b58\u53d6\u8a72\u7db2\u7ad9\u7684\u4eba\u90fd\u6703\u88ab\u5c0e\u5411 Google \u767b\u5165\uff0c\u4e14\u53ea\u6709\u7b26\u5408\u8a2d\u5b9a domain \u7684\u4eba\u767b\u5165\u5f8c\u624d\u53ef\u4ee5\u5b58\u53d6\u7db2\u7ad9\u5167\u5bb9\u3002"),(0,a.kt)("p",null,"\u6d41\u7a0b\u9700\u8981"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5230 OAuth 2.0 Consent \u9801\u9762\u90a3\u908a\u53bb\u5275\u7acb\u4e00\u500b\u7269\u4ef6\uff0c\u4e26\u4e14\u53d6\u5f97 client_id \u4ee5\u53ca client_secret."),(0,a.kt)("li",{parentName:"ol"},"\u7522\u751f\u4e00\u500b Secret \u7269\u4ef6\u5305\u542b\u5c0d\u61c9\u7684 client_id \u8207 client_secret"),(0,a.kt)("li",{parentName:"ol"},"\u7522\u751f\u4e00\u500b BackendConfig \u7684\u7269\u4ef6\uff0c\u5c07\u4e0a\u8ff0\u7684 secret \u7d81\u5b9a\u5230\u8a72 Backend \u7269\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5c07 BackendConfig \u8207 Service \u7269\u4ef6\u7d81\u5b9a")),(0,a.kt)("p",null,"\u524d\u4e09\u500b\u6b65\u9a5f\u53ef\u4ee5\u53c3\u8003",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iap/docs/enabling-kubernetes-howto"},"\u5b98\u7db2\u8a2d\u5b9a Enabling IAP for GKE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    cloud.google.com/backend-config: \'{"default": "my-backend"}\'\n  name: dev-service\n  namespace: dev\nspec:\n  ports:\n    - name: http2\n      port: 80\n      protocol: TCP\n      targetPort: 8080\n    - name: https\n      port: 443\n      protocol: TCP\n      targetPort: 8443\n  selector:\n    app: service\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,a.kt)("p",null,"\u4e00\u5207\u8a2d\u5b9a\u5b8c\u7562\u5f8c\uff0c\u63a5\u4e0b\u4f86\u9084\u8981\u5230 GKE \u90a3\u908a\u958b\u555f IAP \u7684\u8a2d\u5b9a\uff0c\u53c3\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iap/docs/enabling-kubernetes-howto"},"Setting up IAP access")))}m.isMDXComponent=!0}}]);