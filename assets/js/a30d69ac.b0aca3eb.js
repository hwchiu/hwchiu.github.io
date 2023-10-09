"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[31934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),v=a,m=c["".concat(o,".").concat(v)]||c[v]||f[v]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=v;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},68207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u95b1\u8b80\u7b46\u8a18: \u300cDevOps is a failure\u300d",authors:"hwchiu",tags:["Reading","DevOps"],description:"\u300cDevOps is a failure\u300d",date:new Date("2022-06-29T00:05:08.000Z")},i=void 0,p={permalink:"/2022/06/29/reading-notes-64",source:"@site/blog/2022-06-29-reading-notes-64.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300cDevOps is a failure\u300d",description:"\u300cDevOps is a failure\u300d",date:"2022-06-29T00:05:08.000Z",formattedDate:"June 29, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"DevOps",permalink:"/tags/dev-ops"}],readingTime:5.055,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDevOps is a failure\u300d",authors:"hwchiu",tags:["Reading","DevOps"],description:"\u300cDevOps is a failure\u300d",date:"2022-06-29T00:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cSRE \u7684\u5de5\u4f5c\u4ecb\u7ecd\u300d",permalink:"/2022/07/11/reading-notes-65"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",permalink:"/2022/06/27/reading-notes-63"}},o={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a19\u984c: \u300cDevOps is a failure\u300d\n\u985e\u5225: others\n\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://leebriggs.co.uk/blog/2022/06/21/devops-is-a-failure"},"https://leebriggs.co.uk/blog/2022/06/21/devops-is-a-failure")),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4f5c\u8005\u5f9e\u4e0d\u540c\u7684\u89d2\u5ea6\u4f86\u804a\u804a DevOps \u9019\u500b\u8a5e\u6240\u4ee3\u8868\u7684\u542b\u7fa9\u8207\u5be6\u4f5c\u610f\u7fa9"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6bb5\u4f5c\u8005\u5148\u9592\u804a\u4e00\u4e0b\u81ea\u5df1\u8207 DevOps \u8a5e\u7684\u6b77\u53f2\uff0c\u63a5\u8005\u76f4\u63a5\u62cb\u51fa\u4e00\u500b\u4f5c\u8005\u9577\u671f\u597d\u5947\u7684\u89c0\u9ede\n\u300c\u6bcf\u500b\u4eba\u90fd\u4e00\u5b9a\u807d\u904e DevOps \u662f\u4e00\u500b\u9700\u8981 Dev + Ops \u5171\u540c\u53c3\u8207\u7684\u6587\u5316\uff0c\u4f46\u662f\u4f5c\u8005\u81ea\u5df1\u53c3\u8207\u7684 DevOps \u76f8\u95dc\u6703\u8b70\u8207\u8a0e\u8ad6\uff0c\u8207\u6703\u8005\u5927\u90e8\u5206\u90fd\u662f Ops \u4eba\u54e1\uff0c\u800c\u4e0d\u662f\u90a3\u4e9b\u771f\u6b63\u53c3\u8207\u958b\u767c\u7684 Dev \u4eba\u300d"),(0,a.kt)("h1",{id:"\u56f0\u60d1\u6642\u671f"},"\u56f0\u60d1\u6642\u671f"),(0,a.kt)("p",null,"\u63a5\u8005\u4f5c\u8005\u804a\u804a\u81ea\u8eab\u591a\u5e74\u524d\u7684\u7d93\u9a57\uff0c\u7576\u6642\u7684\u958b\u767c\u5718\u968a\u5ba3\u7a31\u8a72\u5718\u968a\u662f\u300ctrue devops\u300d\uff0c\u540c\u6642\u4e0d\u8ddf\u4f5c\u8005\u7684\u7dad\u904b\u5718\u968a\u8a0e\u8ad6\u5404\u7a2e\u7dad\u904b\u9700\u6c42\uff0c\u9019\u904e\u7a0b\u8b93\u4f5c\u8005\u975e\u5e38\u56f0\u60d1\uff0c\u70ba\u4ec0\u9ebc\u5c0d\u65b9\u6703\u8aaa\u81ea\u5df1\u662f true devops \u800c\u53c8\u4e0d\u627e\u81ea\u5df1\u63a2\u8a0e\u7dad\u904b\u9700\u6c42"),(0,a.kt)("p",null,"\u4f5c\u8005\u5f8c\u4f86\u8207\u8a72\u958b\u767c\u5718\u968a\u6df1\u804a\u5f8c\u7d42\u65bc\u7406\u89e3\u5c0d\u65b9\u7684\u610f\u601d\uff0c\u539f\u4f86\u8a72\u958b\u767c\u5718\u968a\u8eab\u517c\u958b\u767c\u8207\u7dad\u904b\uff0c\u8a72\u5718\u968a\u4f7f\u7528 boto3 \u52a0\u4e0a\u4e00\u4e9b\u8173\u672c\u4f86\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\u7684\u751f\u547d\u9031\u671f\uff0c\u540c\u6642\u8a72\u5718\u968a\u62db\u52df\u7684 \u300cfull stack engineer\u300d\u9664\u4e86\u57fa\u672c\u7684\u5f8c\u7aef\u6280\u8853\u5916\uff0c\u4e5f\u8981\u5c0d AWS \u6709\u4e0d\u5c11\u7684\u719f\u6089\u8207\u7d93\u9a57\u3002"),(0,a.kt)("p",null,"\u5c0d\u65b9\u7684\u8209\u52d5\u66f4\u52a0\u56f0\u60d1\u4e86\u4f5c\u8005\uff0c\u7562\u7adf\u516c\u53f8\u7576\u6642\u63a1\u53d6\u985e\u4f3c Netflix \u7684\u65b9\u5f0f\u4f86\u6253\u9020\u4e00\u500b\u5e73\u53f0\u4f86\u8b93\u6240\u6709\u958b\u767c\u8005\u53ef\u4ee5\u66f4\u8f15\u9b06\u7684\u53bb\u7ba1\u7406\u9019\u4e9b\u6771\u897f\uff0c\u800c\u8a72\u958b\u767c\u5718\u968a\u7684\u8209\u52d5\u5b8c\u5168\u662f\u53cd\u5176\u9053\u800c\u884c\uff0c\u5230\u5e95\u70ba\u4ec0\u9ebc\u8981\u9019\u9ebc\u505a\uff1f\uff1f"),(0,a.kt)("h1",{id:"pulumi-\u6642\u671f"},"Pulumi \u6642\u671f"),(0,a.kt)("p",null,"\u7576\u4f5c\u8005\u52a0\u5165 Pulumi \u6642\u671f\u6642\uff0c\u4f5c\u8005\u958b\u59cb\u4f7f\u7528\u4e00\u4e9b\u77e5\u540d\u5de5\u5177\u5982 GitLab, Terraform, Kubernetes \u7b49\u5de5\u5177\u4f86\u6253\u9020\u4e00\u500b\u9069\u5408\u958b\u767c\u8005\u7684\u597d\u7528\u5e73\u53f0\uff0c\u7136\u800c\u6bcf\u6b21\u60f3\u8981\u5c07\u8a72\u5e73\u53f0\u7d66\u63a8\u5ee3\u7d66\u958b\u767c\u8005\u6642\u7e3d\u662f\u5c62\u5c62\u78b0\u58c1\uff0c\u7e3d\u662f\u6703\u807d\u5230\u5982\u300c\u4f60\u5011\u7684\u6771\u897f\u6211\u4e0d\u719f\u6089\uff0c\u6211\u5011\u9084\u662f\u7fd2\u6163\u81ea\u5df1\u6253\u9020\u7684\u5de5\u5177\u300d\u7b49\u985e\u4f3c\u8aaa\u8a5e\u7d66\u6253\u767c\u6389\u3002"),(0,a.kt)("p",null,"\u4f5c\u8005\u63a5\u4e0b\u4f86\u4e0d\u65b7\u5617\u8a66\u8aaa\u670d\u958b\u767c\u5718\u968a\u4f86\u4f7f\u7528\u81ea\u5df1\u6253\u9020\u7684\u8d85\u7d1a\u5e73\u53f0\uff0c\u9f13\u52f5\u4ed6\u5011\u53c3\u52a0 DevOps \u76f8\u95dc\u6d3b\u52d5\u7b49\u5404\u7a2e\u65b9\u5f0f\uff0c\u6700\u7d42\u5f97\u5230\u7684\u9084\u662f\u985e\u4f3c\u300c\u6211\u5011\u6703\u6309\u7167\u6211\u5011\u81ea\u5df1\u7684\u65b9\u5f0f\u53bb\u5617\u8a66\uff5e\u8b1d\u56c9\u300d\u4e4b\u985e\u7684\u56de\u8986"),(0,a.kt)("h1",{id:"\u56de\u9867"},"\u56de\u9867"),(0,a.kt)("p",null,'\u56de\u9867\u904e\u5f80\uff0c\u4f5c\u8005\u767c\u73fe\u932f\u7684\u662f\u81ea\u5df1\uff0c\u4e00\u76f4\u4ee5\u4f86\u76f8\u4fe1\u7684 DevOps \u9858\u666f\u300c\u8b93 Ops \u505c\u6b62\u8aaa No, \u8b93 Dev \u505c\u6b62\u8aaa"yo~ \u4eca\u5929\u90e8\u7f72\u5427"\u300d \u5176\u5be6\u4e26\u4e0d\u771f\u5be6\uff0c\u4f5c\u8005\u8a8d\u70ba 2022 \u7684\u4eca\u5929\uff0c DevOps \u771f\u6b63\u7684\u542b\u7fa9\u662f\n\u300c\u7dad\u904b\u7aef\u7684\u4eba\u52aa\u529b\u8aaa\u670d\u958b\u767c\u4eba\u54e1\u6309\u7167\u7dad\u904b\u4eba\u54e1\u7684\u60f3\u6cd5\u53bb\u505a\u4e8b\u60c5\u300d'),(0,a.kt)("p",null,"\u7d9c\u89c0\u6240\u6709\u865f\u7a31\u8ddf DevOps \u6709\u95dc\u7684\u5de5\u5177\uff0c\u4f60\u6703\u767c\u73fe\u5e7e\u4e4e\u90fd\u8ddf\u7dad\u904b\u6709\u95dc\uff0c\u6bcf\u500b\u8ddf DevOps \u6709\u95dc\u7684\u8077\u7f3a\u5217\u8209\u7684\u6280\u80fd\u4e5f\u662f\u6eff\u6eff\u7684\u8ddf\u7dad\u904b\u6709\u95dc\uff0c\u5c0d\u4f5c\u8005\u4f86\u8aaa\uff0c DevOps \u5de5\u7a0b\u5e2b\u8ddf\u904e\u5f80\u7684 System Admin \u6839\u672c\u6c92\u6709\u592a\u5927\u5206\u5225\uff0c\u5dee\u7570\u53ea\u6709\u628a\u300c\u5be6\u9ad4\u6a5f\u623f\u5efa\u7f6e\uff0c\u4e0a\u67b6\u6a5f\u5668\u300d v.s \u300c\u96f2\u7aef\u6a5f\u5668\u5efa\u7f6e\uff0c\u5275\u7acbVM\u300d\u800c\u5df2\u3002"),(0,a.kt)("p",null,"\u6587\u7ae0\u5167\u5f8c\u534a\u90e8\u5206\u9084\u6709\u4e00\u4e9b\u4f5c\u8005\u7684\u60f3\u6cd5\uff0c\u6709\u8208\u8da3\u7684\u53ef\u4ee5\u95b1\u8b80\u5b8c\u7562"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u7684\u60f3\u6cd5\u6eff\u6709\u8da3\u7684\uff0c\u8b6c\u5982\u4f5c\u8005\u63d0\u5230\u60f3\u8981\u5e6b\u958b\u767c\u5718\u968a\u5efa\u7acb\u4e00\u500b\u7dad\u904b\u5e73\u53f0\u537b\u5c62\u5c62\u78b0\u58c1\u3002"),(0,a.kt)("p",null,"Ops \u53ef\u80fd\u6703\u89ba\u5f97 Dev \u4e00\u76f4\u4e0d\u505c\u91cd\u8907\u6253\u9020\u5de5\u5177\u6c92\u6709\u6548\u7387\uff0c\u4e0d\u5982\u4f7f\u7528\u81ea\u5df1\u6253\u9020\u7684\u597d\u5e73\u53f0\nDev \u53ef\u80fd\u6703\u89ba\u5f97 Ops \u4e0d\u61c2\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u4e0d\u5982\u81ea\u5df1\u6839\u64da\u9700\u6c42\u6253\u9020"),(0,a.kt)("p",null,"\u540c\u6a23\u7684\u6558\u8ff0\u653e\u5230\u4e0d\u540c\u7684\u898f\u6a21\uff0c\u8b6c\u5982"),(0,a.kt)("p",null,"dev -> 5 \u4eba\u7684\u5c08\u8077\u958b\u767c\u5718\u968a\ndev -> 50 \u4eba\u7684\u5c08\u8077\u7522\u54c1\u5718\u968a"),(0,a.kt)("p",null,"\u5f8c\u8005\u7684\u89d2\u5ea6\u4e5f\u8a31\u6703\u89ba\u5f97\u5718\u968a\u4eba\u6578\u5920\u591a\uff0c\u53ef\u4ee5\u81ea\u5df1\u8655\u7406\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u4e0d\u9700\u8981\u4ef0\u8cf4\u516c\u53f8\u63d0\u4f9b\u4e00\u500b\u842c\u80fd\u5e73\u53f0\u4f86\u8655\u7406\u4e00\u5207\uff0c\u540c\u6642\u8de8 team \u5408\u4f5c\u53ef\u80fd\u9084\u6703\u4f7f\u5f97\u5f88\u591a\u4e8b\u60c5\u6548\u7387\u4f4e\u843d\uff0c\u6e9d\u901a\u6210\u672c\u904e\u5927\u3002"),(0,a.kt)("p",null,"\u6b61\u8fce\u7559\u8a00\u63a2\u8a0e\u4f60\u7684\u60f3\u6cd5"))}f.isMDXComponent=!0}}]);