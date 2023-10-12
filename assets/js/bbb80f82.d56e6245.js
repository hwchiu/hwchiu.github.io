"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[73776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"gcloud ssh \u5230 GCP VM",author:"hwchiu",tags:["GCP"]},c=void 0,i={permalink:"/2023/05/12/gcp_ssh",source:"@site/blog/2023/05-12-gcp_ssh.md",title:"gcloud ssh \u5230 GCP VM",description:"GCP \u63d0\u4f9b OS login \u7b49\u65b9\u5f0f\u53ef\u4ee5\u8b93\u4f7f\u7528\u8005\u900f\u904e gcloud compute ssh \u7b49\u65b9\u5f0f\u767b\u5165\u5230\u6c92\u6709 public IP \u7684\u6a5f\u5668\u4e0a\uff0c\u4f46\u662f\u6bcf\u6b21\u8a2d\u5b9a\u4e0a\u7e3d\u662f\u5361\u5404\u7a2e\u6b0a\u9650",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"GCP",permalink:"/tags/gcp"}],readingTime:.845,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"gcloud ssh \u5230 GCP VM",author:"hwchiu",tags:["GCP"]},prevItem:{title:"GCP NAT \u76f8\u95dc\u7b46\u8a18",permalink:"/2023/06/04/gcp_nat"},nextItem:{title:"CloudSQL \u6536\u8cbb\u6ce8\u610f\u4e8b\u9805",permalink:"/2023/05/06/gcp_cloudsql"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GCP \u63d0\u4f9b OS login \u7b49\u65b9\u5f0f\u53ef\u4ee5\u8b93\u4f7f\u7528\u8005\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud compute ssh")," \u7b49\u65b9\u5f0f\u767b\u5165\u5230\u6c92\u6709 public IP \u7684\u6a5f\u5668\u4e0a\uff0c\u4f46\u662f\u6bcf\u6b21\u8a2d\u5b9a\u4e0a\u7e3d\u662f\u5361\u5404\u7a2e\u6b0a\u9650\n\u800c\u9810\u8a2d\u7684 IAM Roles \u88e1\u9762\u53c8\u6c92\u6709\u76f8\u95dc\u7684\u8eab\u4efd\u53ef\u4ee5\u4e00\u6b21\u641e\u5b9a\uff0c\u5e38\u5e38\u8981\u5230\u8655\u627e\u5230\u5e95\u7f3a\u54ea\u500b\u89d2\u8272\n\u7d93\u904e\u4e00\u756a\u52aa\u529b\u8ddf\u5617\u8a66\u5f8c\uff0c\u78ba\u8a8d\u53ea\u8981\u7d66\u4e88\u4e0b\u5217\u6b0a\u9650\u5c31\u53ef\u4ee5\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud compute ssh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compute.instances.osLogin\ncompute.instances.setMetadata\ncompute.instances.use\niam.serviceAccounts.actAs\niap.tunnelInstances.accessViaIAP\nnetworkmanagement.connectivitytests.create\nserviceusage.services.enable\n")),(0,o.kt)("p",null,"\u56e0\u6b64\u5275\u7acb\u4e00\u500b\u65b0\u89d2\u8272\u7d66\u4e88\u4e0a\u9762\u7684\u6b0a\u9650\uff0c\u7136\u5f8c\u518d\u628a\u8a72\u89d2\u8272\u7d81\u5b9a\u5230\u76ee\u6a19\u4f7f\u7528\u8005\u6216\u7fa4\u7d44\uff0c\u61c9\u8a72\u5c31\u53ef\u4ee5\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud compute ssh")," \u5230\u9060\u65b9\u6a5f\u5668\u4e86\u3002"))}m.isMDXComponent=!0}}]);