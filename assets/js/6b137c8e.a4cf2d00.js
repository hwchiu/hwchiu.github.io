"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[32060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"istio \u64cd\u4f5c\u8a18\u9304",author:"hwchiu",tags:["ServiceMesh","Network"]},a=void 0,l={permalink:"/2023/07/21/istio",source:"@site/blog/2023/07-21-istio.md",title:"istio \u64cd\u4f5c\u8a18\u9304",description:"\u9810\u8a2d\u7684 istio-proxy \u90fd\u6703\u5403\u6389\u4e00\u4e9b CPU/Memory\uff0c\u7576\u53e2\u96c6\u5167\u7684 Pod \u6578\u91cf\u904e\u591a\u6642\uff0c\u9019\u4e9b sidecar \u5403\u6389\u7684\u6578\u91cf\u975e\u5e38\u53ef\u89c0",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"ServiceMesh",permalink:"/tags/service-mesh"},{label:"Network",permalink:"/tags/network"}],readingTime:1.685,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"istio \u64cd\u4f5c\u8a18\u9304",author:"hwchiu",tags:["ServiceMesh","Network"]},prevItem:{title:"GCS \u64cd\u4f5c\u4e0a\u6ce8\u610f\u4e8b\u9805",permalink:"/2023/07/21/gcs"},nextItem:{title:"terraform",permalink:"/2023/06/21/terraform"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9810\u8a2d\u7684 istio-proxy \u90fd\u6703\u5403\u6389\u4e00\u4e9b CPU/Memory\uff0c\u7576\u53e2\u96c6\u5167\u7684 Pod \u6578\u91cf\u904e\u591a\u6642\uff0c\u9019\u4e9b sidecar \u5403\u6389\u7684\u6578\u91cf\u975e\u5e38\u53ef\u89c0\n\u5982\u679c\u662f\u63a1\u7528 istiooperator \u7684\u65b9\u5f0f\u5b89\u88dd\uff0c\u53ef\u4ee5\u63a1\u7528\u4e0b\u5217\u65b9\u5f0f\u4fee\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n  spec:\n    values:\n      global:\n        proxy:\n          privileged: false\n          readinessFailureThreshold: 30\n          readinessInitialDelaySeconds: 1\n          readinessPeriodSeconds: 2\n          resources:\n            limits:\n              cpu: 2000m\n              memory: 1024Mi\n            requests:\n              cpu: 100m\n              memory: 128Mi\n")),(0,o.kt)("p",null,"\u9019\u500b\u8a2d\u5b9a\u662f global \u7684\u8a2d\u5b9a\uff0c\u5982\u679c\u662f\u55ae\u4e00\u7684 Pod \u8981\u81ea\u884c\u8abf\u6574\uff0c\u53ef\u4ee5\u65bc Pod annotations \u4e2d\u52a0\u5165\u5217\u4e0b\u8cc7\u8a0a\u8abf\u6574"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"annotations:\n  sidecar.istio.io/proxyCPU: 50m\n  sidecar.istio.io/proxyMemory: 128Mi\n")),(0,o.kt)("p",null,"\u5982\u679c\u8981\u66f4\u65b0 istio\uff0c\u5efa\u8b70\u53c3\u8003\u5b98\u65b9 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/upgrade/canary/"},"Canary Approach")," \u7684\u6b65\u9a5f\uff0c\u4f7f\u7528\u91d1\u7d72\u96c0\u90e8\u7f72\u7684\u65b9\u5f0f\u9010\u6b65\u8abf\u6574\n\u5176\u539f\u7406\u5f88\u7c21\u55ae"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u540c\u6642\u90e8\u7f72\u5169\u500b\u7248\u672c\u7684 istiod"),(0,o.kt)("li",{parentName:"ol"},"\u9010\u6b65\u91cd\u555f Pod \u4f86\u5957\u7528\u65b0\u7248\u672c\u7684 istio\uff0c\u76f4\u5230\u6240\u6709 pod \u90fd\u8f49\u79fb\u5230\u65b0\u7248\u672c\u7684 istiod"),(0,o.kt)("li",{parentName:"ol"},"\u79fb\u9664\u820a\u7684")),(0,o.kt)("p",null,'\u57fa\u672c\u4e0a\u5b89\u88dd\u904e\u7a0b\u8981\u900f\u904e "--revision=1-14-2" \u7684\u65b9\u5f0f\u53bb\u6253\u7248\u672c\uff0c\u5b89\u88dd\u5b8c\u7562\u5f8c\u5c31\u662f\u55ae\u7d14\u53ea\u6709 control plane'),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c31\u53d6\u6c7a\u7576\u521d\u5982\u4f55\u8a2d\u5b9a sidecare \u7684\uff0c\u5982\u679c\u662f namespace \u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u6539 namespace \u88e1\u9762\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istio.io/rev=1-14-2\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c31\u9010\u6b65\u91cd\u555f Pod \u5c31\u53ef\u4ee5\u5207\u63db\u5230\u65b0\u7684 istio \u7248\u672c\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u53ef\u4ee5\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"istioctl proxy-status")," \u89c0\u5bdf\u6bcf\u500b Pod \u76ee\u524d\u642d\u914d\u7684\u7248\u672c\uff0c\u900f\u904e\u6b64\u6307\u4ee4\u89c0\u5bdf\u5347\u7d1a\u9032\u5ea6"),(0,o.kt)("p",null,"\u4e00\u65e6\u5168\u90e8\u5347\u7d1a\u5b8c\u7562\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"istioctl uninstall --revision 1-13-1 -y")," \u4f86\u79fb\u9664\u820a\u7248\u672c"))}m.isMDXComponent=!0}}]);