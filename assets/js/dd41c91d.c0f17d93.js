"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[66019],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=m(t),s=r,c=g["".concat(p,".").concat(s)]||g[s]||k[s]||l;return t?a.createElement(c,i(i({ref:n},d),{},{components:t})):a.createElement(c,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},86539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const l={title:"[Golang] aggregate in mongo",date:new Date("2018-08-31T14:09:05.000Z"),tags:["Golang","Mongo"],description:"\u672c\u7bc7\u6587\u7ae0\u9996\u5148\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u500b\u5e38\u898b\u7684 Schema \u8a2d\u8a08\uff0c\u5728\u6b64\u60c5\u5883\u4e0b\uff0c\u70ba\u4e86\u8b80\u53d6\u4e00\u9023\u4e32\u7684\u8cc7\u6599\uff0c\u6211\u5011\u6709\u4e0d\u540c\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u8fa6\u5230\u3002\u5176\u4e2d\u4e00\u7a2e\u5c31\u662f\u672c\u6587\u7684\u4e3b\u89d2, Aggregate \u7684\u6982\u5ff5\u3002\u70ba\u4e86\u89e3\u91cb Aggregate \u5982\u4f55\u904b\u4f5c\u4ee5\u53ca\u5982\u4f55\u5be6\u73fe\uff0c\u672c\u6587\u63a1\u7528 Golang \u4f5c\u70ba\u57fa\u672c\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u4e26\u4e14\u4f7f\u7528 mgo \u4f5c\u70ba\u8207 mongo \u9032\u884c\u8655\u7406\u7684\u7b2c\u4e09\u65b9\u51fd\u5f0f\u5eab\u3002\u6b64\u5916\u4e5f\u63a1\u7528\u4e86\u6700\u539f\u59cb\u7684\u8b80\u53d6\u65b9\u5f0f\uff0c\u4e26\u4e14\u5c07\u6b64\u65b9\u5f0f\u5f9e\u64b0\u5beb\u65b9\u5f0f\u4ee5\u53ca\u6548\u80fd\u5169\u65b9\u9762\u76f4\u63a5\u8207 Aggregate \u9032\u884c\u6bd4\u8f03\u3002"},i=void 0,o={unversionedId:"techPost/2018/mgo-aggregate",id:"techPost/2018/mgo-aggregate",title:"[Golang] aggregate in mongo",description:"\u672c\u7bc7\u6587\u7ae0\u9996\u5148\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u500b\u5e38\u898b\u7684 Schema \u8a2d\u8a08\uff0c\u5728\u6b64\u60c5\u5883\u4e0b\uff0c\u70ba\u4e86\u8b80\u53d6\u4e00\u9023\u4e32\u7684\u8cc7\u6599\uff0c\u6211\u5011\u6709\u4e0d\u540c\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u8fa6\u5230\u3002\u5176\u4e2d\u4e00\u7a2e\u5c31\u662f\u672c\u6587\u7684\u4e3b\u89d2, Aggregate \u7684\u6982\u5ff5\u3002\u70ba\u4e86\u89e3\u91cb Aggregate \u5982\u4f55\u904b\u4f5c\u4ee5\u53ca\u5982\u4f55\u5be6\u73fe\uff0c\u672c\u6587\u63a1\u7528 Golang \u4f5c\u70ba\u57fa\u672c\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u4e26\u4e14\u4f7f\u7528 mgo \u4f5c\u70ba\u8207 mongo \u9032\u884c\u8655\u7406\u7684\u7b2c\u4e09\u65b9\u51fd\u5f0f\u5eab\u3002\u6b64\u5916\u4e5f\u63a1\u7528\u4e86\u6700\u539f\u59cb\u7684\u8b80\u53d6\u65b9\u5f0f\uff0c\u4e26\u4e14\u5c07\u6b64\u65b9\u5f0f\u5f9e\u64b0\u5beb\u65b9\u5f0f\u4ee5\u53ca\u6548\u80fd\u5169\u65b9\u9762\u76f4\u63a5\u8207 Aggregate \u9032\u884c\u6bd4\u8f03\u3002",source:"@site/docs/techPost/2018/mgo-aggregate.md",sourceDirName:"techPost/2018",slug:"/techPost/2018/mgo-aggregate",permalink:"/docs/techPost/2018/mgo-aggregate",draft:!1,tags:[{label:"Golang",permalink:"/docs/tags/golang"},{label:"Mongo",permalink:"/docs/tags/mongo"}],version:"current",frontMatter:{title:"[Golang] aggregate in mongo",date:"2018-08-31T14:09:05.000Z",tags:["Golang","Mongo"],description:"\u672c\u7bc7\u6587\u7ae0\u9996\u5148\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u500b\u5e38\u898b\u7684 Schema \u8a2d\u8a08\uff0c\u5728\u6b64\u60c5\u5883\u4e0b\uff0c\u70ba\u4e86\u8b80\u53d6\u4e00\u9023\u4e32\u7684\u8cc7\u6599\uff0c\u6211\u5011\u6709\u4e0d\u540c\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u8fa6\u5230\u3002\u5176\u4e2d\u4e00\u7a2e\u5c31\u662f\u672c\u6587\u7684\u4e3b\u89d2, Aggregate \u7684\u6982\u5ff5\u3002\u70ba\u4e86\u89e3\u91cb Aggregate \u5982\u4f55\u904b\u4f5c\u4ee5\u53ca\u5982\u4f55\u5be6\u73fe\uff0c\u672c\u6587\u63a1\u7528 Golang \u4f5c\u70ba\u57fa\u672c\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u4e26\u4e14\u4f7f\u7528 mgo \u4f5c\u70ba\u8207 mongo \u9032\u884c\u8655\u7406\u7684\u7b2c\u4e09\u65b9\u51fd\u5f0f\u5eab\u3002\u6b64\u5916\u4e5f\u63a1\u7528\u4e86\u6700\u539f\u59cb\u7684\u8b80\u53d6\u65b9\u5f0f\uff0c\u4e26\u4e14\u5c07\u6b64\u65b9\u5f0f\u5f9e\u64b0\u5beb\u65b9\u5f0f\u4ee5\u53ca\u6548\u80fd\u5169\u65b9\u9762\u76f4\u63a5\u8207 Aggregate \u9032\u884c\u6bd4\u8f03\u3002"},sidebar:"techPost",previous:{title:"NFS \u65bc Kubernetes \u5167\u7684\u5404\u7a2e\u61c9\u7528",permalink:"/docs/techPost/2018/kubernetes-storage-ii"},next:{title:"[netfilter] Introduction to ebtables",permalink:"/docs/techPost/2018/netfilter-eiptables-i"}},p={},m=[{value:"Structure",id:"structure",level:2},{value:"Find",id:"find",level:2},{value:"Aggregate",id:"aggregate",level:2},{value:"Performance",id:"performance",level:2},{value:"Summary",id:"summary",level:2},{value:"Reference",id:"reference",level:2}],d={toc:m},g="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u63a2\u8a0e\u6574\u500b\u4e3b\u984c\u4e4b\u524d\uff0c\u6211\u5011\u5148\u8a2d\u8a08\u4e00\u500b\u7c21\u55ae\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u4f86\u7b26\u5408\u9019\u6b21\n\u5047\u8a2d\u4eca\u5929\u5728\u8cc7\u6599\u5eab\u5167\u6709\u4e3b\u8981\u7d50\u69cb\uff0c\u5206\u5225\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u975e\u5e38\u7c21\u55ae\uff0c\u5c31\u662f\u63cf\u8ff0\u4e00\u500b\u4f7f\u7528\u8005\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," \u9019\u908a\u4e0d\u7528\u5728\u610f\u4ed6\u662f\u4ec0\u9ebc\u6771\u897f\uff0c\u4ed6\u662f\u4e00\u500b\u8cc7\u6e90\uff0c\u7136\u5f8c\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5275\u7acb\u7684\uff0c\u6240\u4ee5\u6bcf\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," \u88e1\u9762\u90fd\u6703\u6709\u4e00\u500b\u6b04\u4f4d\u53bb\u8a18\u9304\u662f\u54ea\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u5275\u7acb\u7684\u3002"),(0,r.kt)("p",null,"\u6709\u4e86\u524d\u8ff0\u7684\u5047\u8a2d\u4e4b\u5f8c\uff0c\u63a5\u4e0b\u4f86\u60f3\u50cf\u4e00\u500b\u5be6\u969b\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"UserA")," \u5275\u9020\u4e86\u6578\u767e\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod")," \u8cc7\u6e90\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u60f3\u8981 Query \u8a72 ",(0,r.kt)("inlineCode",{parentName:"li"},"UserA")," \u4e26\u4e14\u5217\u51fa\u8a72",(0,r.kt)("inlineCode",{parentName:"li"},"User"),"\u5275\u9020\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"Pod"),"\u8cc7\u6e90\u7684\u7d30\u90e8\u8cc7\u6599")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/rFmSBdw.png",alt:"Imgur"})),(0,r.kt)("p",null,"\u5728\u4ee5\u524d SQL \u7684\u6642\u5019\uff0c\u6211\u5011\u53ef\u80fd\u6703\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," \u7684\u65b9\u5f0f\u4f86\u5b58\u53d6\uff0c\u90a3\u4eca\u5929\u5047\u5982\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoDB")," \u7684\u74b0\u5883\u4e0b\uff0c\u6211\u5011\u53ef\u4ee5\u600e\u9ebc\u8655\u7406?"),(0,r.kt)("p",null,"\u672c\u6587\u7ae0\u7684\u6240\u6709\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\u90fd\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hwchiu/GolangPratice/blob/master/mgoAggregate/main.go"},"mgo Aggregate Example"),"\u627e\u5230"),(0,r.kt)("p",null,"\u5fc5\u9808\u8981\u6ce8\u610f\uff0c mongodb \u7684\u7248\u672c\u81f3\u5c11\u8981 > 3.0 \u4e4b\u5f8c\u624d\u652f\u63f4\u672c\u6587\u63cf\u8ff0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Aggregate")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"\u9019\u908a\u5c31\u63a1\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"golang")," \u7c21\u55ae\u7684\u63cf\u8ff0\u4e00\u4e0b\u6211\u5011\u7684\u7d50\u69cb\uff0c\u9019\u4e9b\u7d50\u69cb\u6703\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb")," \u88e1\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go="},'type User struct {\n    ID   bson.ObjectId `bson:"_id"`\n    Name string        `bson:"name"`\n    Pods []Pod         `bson:"pods"`\n}\n\ntype Pod struct {\n    ID        bson.ObjectId `bson:"_id"`\n    CreatedBy bson.ObjectId `bson:"createdBy"`\n    Name      string        `bson:"name"`\n}\n')),(0,r.kt)("h2",{id:"find"},"Find"),(0,r.kt)("p",null,"\u7b2c\u4e00\u7a2e\u65b9\u6cd5\u5176\u5be6\u975e\u5e38\u76f4\u89ba"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c31\u662f\u5148\u53d6\u5f97\u8a72 ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," \u7684\u5be6\u4f8b"),(0,r.kt)("li",{parentName:"ol"},"\u53bb ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Collection")," \u5167\u9032\u884c\u641c\u5c0b\uff0c\u627e\u51fa\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod")," \u5176\u8a18\u9304\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"User"),"\u662f",(0,r.kt)("inlineCode",{parentName:"li"}," UserA"),".")),(0,r.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u5df2\u7d93\u6709\u8a72 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u7684\u7269\u4ef6\u4e86\uff0c\u63a5\u4e0b\u4f86\u5f88\u7c21\u55ae\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," \u7684\u65b9\u5f0f\u627e\u51fa\u6240\u6709\u7531\u8a72 ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," \u6240\u5275\u9020\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),".\n\u4e26\u4e14\u628a\u627e\u5230\u7684\u7d50\u679c\u90fd\u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"  \u7269\u4ef6\u88e1\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pods")," \u8b8a\u6578"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go="},'c := db.C("pods")\nc.Find(bson.M{"createdBy": user.ID}).All(&user.Pods)\n')),(0,r.kt)("h2",{id:"aggregate"},"Aggregate"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mgo"),"\u88e1\u9762\uff0c\u5982\u679c\u60f3\u8981\u505a\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Aaggregate")," \u985e\u4f3c\u9019\u7a2e ",(0,r.kt)("inlineCode",{parentName:"p"},"Join")," \u7684\u65b9\u5f0f\uff0c\u5176\u5be6\u53ef\u4ee5\u900f\u904e\u4e00\u500b\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," \u7684\u51fd\u5f0f\u4f86\u5b8c\u6210"),(0,r.kt)("p",null,"\u70ba\u4e86\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," \u7684\uff0c\u6211\u5011\u5fc5\u9808\u8981\u5148\u63cf\u8ff0\u6211\u5011\u60f3\u8981\u5982\u4f55\u53bb\u5c0b\u627e\u9019\u4e9b\u8cc7\u6599\uff0c\u9019\u4e9b\u8cc7\u6599\u662f\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"bson.M{}")," \u9663\u5217\u7d44\u6210\u7684\u3002\n\u8a72\u9663\u5217\u5167\uff0c\u81f3\u5c11\u8981\u63d0\u4f9b\u5169\u7a2e\u4e0d\u540c\u7684\u67e5\u8a62\u65b9\u5f0f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"$match: \u9019\u908a\u7528\u4f86\u63cf\u8ff0\u6211\u5011\u8981\u5982\u4f55\u67e5\u8a62 ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," \u7269\u4ef6\uff0c\u5728\u6b64\u7bc4\u4f8b\u4e2d\u6211\u5011\u4f7f\u7528\u7279\u5b9a\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"User.ID"),"\u4f86\u63cf\u8ff0\u8a72 ",(0,r.kt)("inlineCode",{parentName:"li"},"User")),(0,r.kt)("li",{parentName:"ol"},"$lookup: \u7528\u4f86\u63cf\u8ff0\u8981\u5982\u4f55 ",(0,r.kt)("inlineCode",{parentName:"li"},"Aggregate"),", \u5176\u4e2d\u6709\u56db\u500b\u6b04\u4f4d\u8981\u586b\u5beb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"from: \u7528\u4f86\u9032\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"Aggregate")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"collection"),"  \u540d\u7a31\uff0c\u6b64\u7bc4\u4f8b\u4e2d\u6211\u5011\u8a2d\u5b9a\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"pods")," \u9019\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"collection"),"."),(0,r.kt)("li",{parentName:"ul"},"localField: \u5728\u8a72 ",(0,r.kt)("inlineCode",{parentName:"li"},"pipeline")," \u8981\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"collection")," \u5167\u8981\u4f7f\u7528\u7684\u6b04\u4f4d\uff0c\u9019\u908a\u6211\u5011\u6703\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," \u88e1\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"_id"),"."),(0,r.kt)("li",{parentName:"ul"},"foreignField: \u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"from")," \u9019\u500b ",(0,r.kt)("inlineCode",{parentName:"li"},"collection")," \u88e1\u9762\u8981\u4f7f\u7528\u7684\u6b04\u4f4d\uff0c\u6b64\u7bc4\u4f8b\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"Pods")," \u88e1\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"createdBy"),"."),(0,r.kt)("li",{parentName:"ul"},"as: \u9019\u500b\u662f\u7528\u4f86\u5b58\u653e\u67e5\u8a62\u5f8c\u7684\u8cc7\u6599\uff0c\u9996\u5148\u5176\u672c\u8eab\u5fc5\u9808\u662f\u500b",(0,r.kt)("inlineCode",{parentName:"li"},"Array"),"\uff0c\u540c\u6642\u8a72\u6b04\u4f4d\u5fc5\u9808\u5b9a\u7fa9\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," \u7d50\u69cb\u88e1\u9762\u3002")))),(0,r.kt)("p",null,"\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff0c\u8a72\u7a0b\u5f0f\u78bc\u7684\u610f\u601d\u5f88\u7c21\u55ae\uff0c\u6211\u5011\u5c0d ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," \u9019\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," \u88e1\u9762\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"$match")," \u53bb\u5c0b\u627e\u7279\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\uff0c\u540c\u6642\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"$lookup")," \u7684\u65b9\u5f0f\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," \u8a72 ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," \u88e1\u9762\u53bb\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"User.ID == Pods.CreatedBy")," \u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," \u90fd\u627e\u51fa\u4f86\uff0c\u6700\u5f8c\u653e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"user.pods")," \u88e1\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go="},'c := db.C("users")\npipeline := []bson.M{\n    {"$lookup": bson.M{"from": "pods", "localField": "_id", "foreignField": "createdBy", "as": "pods"}},\n    {"$match": bson.M{"_id": user.ID}},\n}\n\nvar resp User\nerr := c.Pipe(pipeline).One(&resp)\nif err != nil {\n    fmt.Println(err)\n}\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"\u56e0\u70ba\u9019\u6b21\u7684\u7bc4\u4f8b\u975e\u5e38\u7c21\u55ae\uff0c\u6240\u4ee5\u4e26\u4e0d\u80fd\u7528\u4f86\u4ee3\u8868\u5728\u6240\u6709\u7684\u4f7f\u7528\u60c5\u5883\u4e0b\u7684\u7d50\u679c\uff0c\u53ea\u80fd\u7528\u4f86\u8868\u793a\u5982\u672c\u6587\u7684\u60c5\u5883\u4e0b\u7684\u6548\u7387\u554f\u984c\u3002"),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u7bc4\u4f8b\u5c08\u6848\u5167\uff0c\u4e00\u958b\u59cb\u6703\u5148\u96a8\u6a5f\u7522\u751f\u4e00\u500b\u4f7f\u7528\u8005\uff0c\u4e26\u4e14\u96a8\u6a5f\u7522\u751f",(0,r.kt)("inlineCode",{parentName:"p"},"30000")," \u7b46 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," \u8cc7\u6599\uff0c\u4e26\u4e14\u5617\u8a66\u6bd4\u8f03\u4e0d\u540c\u6578\u91cf\u7684\u60c5\u6cc1\u4e0b\uff0c\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"Find")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"Aggregate")," \u5be6\u969b\u4e0a\u7684\u6548\u80fd\u554f\u984c\u3002"),(0,r.kt)("p",null,"\u4e0b\u5217\u7684\u6642\u9593\u90fd\u662f ",(0,r.kt)("strong",{parentName:"p"},"(ms)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Methond\\Numbers"),(0,r.kt)("th",{parentName:"tr",align:null},"1000"),(0,r.kt)("th",{parentName:"tr",align:null},"5000"),(0,r.kt)("th",{parentName:"tr",align:null},"10000"),(0,r.kt)("th",{parentName:"tr",align:null},"30000"),(0,r.kt)("th",{parentName:"tr",align:null},"50000"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Find"),(0,r.kt)("td",{parentName:"tr",align:null},"5.7"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"111"),(0,r.kt)("td",{parentName:"tr",align:null},"250")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aggregate"),(0,r.kt)("td",{parentName:"tr",align:null},"7.4"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"77"),(0,r.kt)("td",{parentName:"tr",align:null},"180"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN")))),(0,r.kt)("p",null,"\u9019\u908a\u8981\u7279\u5225\u6ce8\u610f\u7684\u662f\uff0c\u7576 ",(0,r.kt)("inlineCode",{parentName:"p"},"Pods")," \u7684\u6578\u91cf\u904e\u9ad8\u7684\u6642\u5019\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," \u4f86\u8655\u7406\u5c31\u6703\u5f97\u5230\u4e0b\u5217\u7684\u932f\u8aa4\u8a0a\u606f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Total size of documents in pods matching { $match: { $and: [ { createdBy: { $eq: ObjectId('5b86dac74807c532d70bea52') } }, {} ] } } exceeds maximum document size\n")),(0,r.kt)("p",null,"\u6839\u64da\u5b98\u7db2\u63cf\u8ff0\uff0c\u9810\u8a2d\u7684\u60c5\u6cc1\u4e0b\uff0c\u53ea\u80fd\u5b58\u653e ",(0,r.kt)("inlineCode",{parentName:"p"},"16MB")," \u7684\u8cc7\u6599\u3002\n\u9019\u610f\u5473\u8005\u8cc7\u6599\u904e\u591a\u7684\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528\u8005\u8981\u6ce8\u610f\u9019\u500b\u73fe\u8c61\uff0c\u907f\u514d\u8cc7\u6599\u5b58\u53d6\u5931\u6557\u3002"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"\u672c\u6587\u5047\u8a2d\u7684\u60c5\u5883\u975e\u5e38\u7c21\u55ae\uff0c\u57fa\u672c\u4e0a\u5169\u7a2e\u65b9\u6cd5\u90fd\u53ef\u4ee5\u5b8c\u6210\uff0c\u4f46\u662f\u5728\u8cc7\u6599\u591a\u5be1\u7684\u60c5\u6cc1\u4e0b\uff0c\u82b1\u8cbb\u7684\u6642\u9593\u5c31\u6709\u6240\u5340\u5225\u3002\n\u82e5\u662f\u6709\u66f4\u8907\u96dc\u7684\u9700\u6c42\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," \u88e1\u9762\u9084\u53ef\u4ee5\u8a2d\u5b9a\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"$lookup")," \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"$match")," \u4ee5\u5916\u7684\u7528\u6cd5\uff0c\u900f\u904e\u4e00\u6b21\u7684\u547c\u53eb\u5c31\u628a\u8cc7\u6599\u7d66\u67e5\u8a62\u5b8c\u7562\u3002\n\u81f3\u5c11\u5982\u679c\u53ea\u662f\u672c\u6587\u9019\u7a2e\u5f88\u7c21\u55ae\u7684\u60c5\u5883\uff0c\u5176\u5be6\u81ea\u5df1\u984d\u5916\u67e5\u8a62\u5373\u53ef\uff0c\u4e0d\u8ad6\u5728\u7c21\u6f54\u6027\u8ddf\u6548\u7387\u4e0a\u6211\u8a8d\u70ba\u90fd\u66f4\u9ad8\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u9084\u662f\u4e00\u6a23\uff0c\u4e0d\u540c\u60c5\u5883\u4e0b\uff0c\u6bcf\u500b\u529f\u80fd\u90fd\u6703\u6709\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u6cd5\u8ddf\u8003\u91cf\u9ede\u3002\n\u9019\u908a\u5c31\u8b93\u5404\u4f4d\u81ea\u5df1\u53bb\u8a55\u4f30\u56c9"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/aggregation/"},"https://docs.mongodb.com/manual/aggregation/"))))}k.isMDXComponent=!0}}]);