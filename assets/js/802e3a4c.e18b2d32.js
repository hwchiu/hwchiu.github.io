"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[65828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,g=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"GCS \u64cd\u4f5c\u4e0a\u6ce8\u610f\u4e8b\u9805",author:"hwchiu",tags:["GCS","GCP"]},l=void 0,i={permalink:"/2023/07/21/gcs",source:"@site/blog/2023/07-21-gcs.md",title:"GCS \u64cd\u4f5c\u4e0a\u6ce8\u610f\u4e8b\u9805",description:"GCS \u672c\u8eab\u5c0d\u65bc\u5b58\u653e\u7684\u8cc7\u6599\u6709\u4e0d\u540c\u5206\u985e\uff0c\u5305\u542b",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"GCS",permalink:"/tags/gcs"},{label:"GCP",permalink:"/tags/gcp"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"GCS \u64cd\u4f5c\u4e0a\u6ce8\u610f\u4e8b\u9805",author:"hwchiu",tags:["GCS","GCP"]},prevItem:{title:"Helm Chart \u4e2d\u5982\u4f55\u6839\u64da\u689d\u4ef6\u4f86\u52d5\u614b\u5b89\u88dd Template \u5167\u7684\u7269\u4ef6",permalink:"/2023/09/01/helm"},nextItem:{title:"istio \u64cd\u4f5c\u8a18\u9304",permalink:"/2023/07/21/istio"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GCS \u672c\u8eab\u5c0d\u65bc\u5b58\u653e\u7684\u8cc7\u6599\u6709\u4e0d\u540c\u5206\u985e\uff0c\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"STANDARD"),(0,a.kt)("li",{parentName:"ol"},"NEARLINE"),(0,a.kt)("li",{parentName:"ol"},"COLDLINE"),(0,a.kt)("li",{parentName:"ol"},"ARCHIVE")),(0,a.kt)("p",null,"\u5206\u985e\u7684\u8a2d\u5b9a\u53ef\u4ee5\u5f9e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9810\u8a2d\u503c Storage class"),(0,a.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a Lifecycle Rule\uff0c\u91dd\u5c0d\u8d85\u904e\u4e00\u5b9a\u5929\u6578\u7684\u6a94\u6848\u81ea\u52d5\u8abf\u6574\u4e0d\u540c\u7684\u5206\u985e")),(0,a.kt)("p",null,"\u9019\u5e7e\u500b\u5206\u985e\u5c0d\u6d88\u8cbb\u8005\u4f86\u8aaa\u6700\u5927\u7684\u5f71\u97ff\u53ef\u80fd\u5c31\u662f\u5b58\u53d6\u8207\u7dad\u8b77\u6210\u672c\n\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/pricing"},"Cloud Storage pricing"),"\u4f86\u8aaa"),(0,a.kt)("p",null,"\u5b58\u653e\u672c\u8eab\u7684\u50f9\u683c\u5c31\u662f\nSTANDARD > NEARLINE > COLDLINE > ARCHIVE"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4eca\u5929\u60f3\u8981\u5b58\u53d6\u8cc7\u6599(Retrieval fees)\u4f86\u8aaa\u5247\u8981\u7279\u5225\u6ce8\u610f\nSTANDARD \u672c\u8eab\u514d\u8cbb\uff0c\u5f8c\u9762\u4e09\u8005\u50f9\u683c\u4f9d\u5e8f\u63d0\u9ad8\uff0c\u5176\u4e2d\u4ee5 COLDLINE \u4f86\u8aaa\u662f $0.02 GB"),(0,a.kt)("p",null,"\u56e0\u6b64\u82e5\u9700\u8981\u5b58\u53d6 GCS \u7684\u8a71\uff0c\u5247\u7279\u5225\u8981\u6ce8\u610f\u76ee\u524d\u6a94\u6848\u7684\u5c6c\u6027\u4ee5\u53ca\u5b58\u53d6\u91cf\uff0c\u7136\u5f8c\u8a55\u4f30\u4e00\u4e0b\u53ef\u80fd\u7684\u82b1\u8cbb\n\u82e5\u6709\u9700\u8981\u5927\u91cf\u9577\u671f\u5b58\u53d6\u7684\uff0c\u8a18\u5f97\u8981\u5207\u63db\u6210 STANDARD \u6a21\u5f0f\uff0c\u82e5\u5e7e\u4e4e\u4e0d\u5b58\u53d6\u7684\u5c31\u76f4\u63a5\u5f80\u5f8c\u642c\u79fb\u6e1b\u5c11\u5132\u5b58\u82b1\u8cbb\u3002"))}m.isMDXComponent=!0}}]);