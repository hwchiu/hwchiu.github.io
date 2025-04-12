"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[87498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,s=m["".concat(l,".").concat(u)]||m[u]||k[u]||r;return t?a.createElement(s,o(o({ref:n},d),{},{components:t})):a.createElement(s,o({ref:n},d))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"\u6dfa\u8ac7 Container \u5be6\u73fe\u539f\u7406, \u4ee5 Docker \u70ba\u4f8b(II)",sidebar_position:2,date:new Date("2019-09-18T07:17:58.000Z"),tags:["Docker","Container","iThome"],description:"\u672c\u6587\u5ef6\u7e8c\u524d\u7bc7\u6587\u7ae0\u95dc\u65bc Open Container Initiatives \u7684\u8a0e\u8ad6\uff0c\u524d\u7bc7\u6587\u7ae0\u8a0e\u8ad6\u4e86\u95dc\u65bc OCI \u5167\u7684\u5169\u5927\u6a19\u6e96\uff0c\u5206\u5225\u662f Runtime \u4ee5\u53ca Image \u9019\u5169\u9805\u95dc\u65bc Container \u7684\u6a19\u6e96\uff0c\u800c\u672c\u7bc7\u6587\u7ae0\u5247\u662f\u6703\u4ecb\u7d39\u5982\u4e86\u76f8\u95dc\u7684\u6a19\u6e96\u4e4b\u5916\uff0c\u76ee\u524d\u6709\u4ec0\u9ebc\u76f8\u95dc\u7684\u89e3\u6c7a\u65b9\u6848\u8207\u5de5\u5177\u8207\u9019\u5169\u500b\u6a19\u6e96\u606f\u606f\u76f8\u95dc\uff0c\u540c\u6642\u5c0d\u65bc Docker \u672c\u8eab\u6703\u600e\u9ebc\u5229\u7528\u9019\u4e9b\u6a19\u6e96\u4f86\u5b8c\u6210 COntainer \u7684\u904b\u884c"},o="\u524d\u8a00",p={unversionedId:"2019/iThome_Challenge/container-design-ii",id:"2019/iThome_Challenge/container-design-ii",title:"\u6dfa\u8ac7 Container \u5be6\u73fe\u539f\u7406, \u4ee5 Docker \u70ba\u4f8b(II)",description:"\u672c\u6587\u5ef6\u7e8c\u524d\u7bc7\u6587\u7ae0\u95dc\u65bc Open Container Initiatives \u7684\u8a0e\u8ad6\uff0c\u524d\u7bc7\u6587\u7ae0\u8a0e\u8ad6\u4e86\u95dc\u65bc OCI \u5167\u7684\u5169\u5927\u6a19\u6e96\uff0c\u5206\u5225\u662f Runtime \u4ee5\u53ca Image \u9019\u5169\u9805\u95dc\u65bc Container \u7684\u6a19\u6e96\uff0c\u800c\u672c\u7bc7\u6587\u7ae0\u5247\u662f\u6703\u4ecb\u7d39\u5982\u4e86\u76f8\u95dc\u7684\u6a19\u6e96\u4e4b\u5916\uff0c\u76ee\u524d\u6709\u4ec0\u9ebc\u76f8\u95dc\u7684\u89e3\u6c7a\u65b9\u6848\u8207\u5de5\u5177\u8207\u9019\u5169\u500b\u6a19\u6e96\u606f\u606f\u76f8\u95dc\uff0c\u540c\u6642\u5c0d\u65bc Docker \u672c\u8eab\u6703\u600e\u9ebc\u5229\u7528\u9019\u4e9b\u6a19\u6e96\u4f86\u5b8c\u6210 COntainer \u7684\u904b\u884c",source:"@site/docs/2019/iThome_Challenge/container-design-ii.md",sourceDirName:"2019/iThome_Challenge",slug:"/2019/iThome_Challenge/container-design-ii",permalink:"/docs/2019/iThome_Challenge/container-design-ii",draft:!1,tags:[{label:"Docker",permalink:"/docs/tags/docker"},{label:"Container",permalink:"/docs/tags/container"},{label:"iThome",permalink:"/docs/tags/i-thome"}],version:"current",lastUpdatedBy:"HWC",sidebarPosition:2,frontMatter:{title:"\u6dfa\u8ac7 Container \u5be6\u73fe\u539f\u7406, \u4ee5 Docker \u70ba\u4f8b(II)",sidebar_position:2,date:"2019-09-18T07:17:58.000Z",tags:["Docker","Container","iThome"],description:"\u672c\u6587\u5ef6\u7e8c\u524d\u7bc7\u6587\u7ae0\u95dc\u65bc Open Container Initiatives \u7684\u8a0e\u8ad6\uff0c\u524d\u7bc7\u6587\u7ae0\u8a0e\u8ad6\u4e86\u95dc\u65bc OCI \u5167\u7684\u5169\u5927\u6a19\u6e96\uff0c\u5206\u5225\u662f Runtime \u4ee5\u53ca Image \u9019\u5169\u9805\u95dc\u65bc Container \u7684\u6a19\u6e96\uff0c\u800c\u672c\u7bc7\u6587\u7ae0\u5247\u662f\u6703\u4ecb\u7d39\u5982\u4e86\u76f8\u95dc\u7684\u6a19\u6e96\u4e4b\u5916\uff0c\u76ee\u524d\u6709\u4ec0\u9ebc\u76f8\u95dc\u7684\u89e3\u6c7a\u65b9\u6848\u8207\u5de5\u5177\u8207\u9019\u5169\u500b\u6a19\u6e96\u606f\u606f\u76f8\u95dc\uff0c\u540c\u6642\u5c0d\u65bc Docker \u672c\u8eab\u6703\u600e\u9ebc\u5229\u7528\u9019\u4e9b\u6a19\u6e96\u4f86\u5b8c\u6210 COntainer \u7684\u904b\u884c"},sidebar:"techPost",previous:{title:"\u5b8c\u8cfd\u611f\u60f3",permalink:"/docs/2019/iThome_Challenge/summary"},next:{title:"\u6dfa\u8ac7 Container \u5be6\u73fe\u539f\u7406, \u4ee5 Docker \u70ba\u4f8b(III)",permalink:"/docs/2019/iThome_Challenge/container-design-iii"}},l={},c=[{value:"Runtime",id:"runtime",level:2},{value:"Image",id:"image",level:2},{value:"Docker UI/Commands",id:"docker-uicommands",level:2},{value:"Docker Engine",id:"docker-engine",level:2},{value:"Containerd",id:"containerd",level:2},{value:"Containerd-Shim",id:"containerd-shim",level:2},{value:"Summary",id:"summary",level:2}],d={toc:c},m="wrapper";function k(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u524d\u4e00\u5929\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u5011\u63a2\u8a0e\u4e86\u95dc\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Open Container Initiatives(OCI)")," \u7684\u6982\u5ff5\uff0c\u4e26\u4e14\u63a2\u8a0e\u4e86\u95dc\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime Spec")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"Image Spec")," \u7684\u898f\u7bc4\u8207\u898f\u683c\u3002"),(0,i.kt)("p",null,"\u4eca\u5929\u5247\u662f\u8981\u63a2\u8a0e\u5c0d\u65bc\u4e00\u500b\u958b\u767c\u8005\u4f86\u8aaa\uff0c\u5982\u679c\u8981\u958b\u767c\u4e00\u500b\u80fd\u5920\u6eff\u8db3 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u5247\u6709\u4ec0\u9ebc\u76f8\u95dc\u7684\u51fd\u5f0f\u5eab\uff0c\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\u4f86\u6e1b\u5c11\u91cd\u8907\u6253\u9020\u8f2a\u5b50\u7684\u60c5\u6cc1\u3002\n\u4e00\u65e6\u6211\u5011\u53ef\u4ee5\u638c\u63e1\u9019\u65b9\u4fbf\u7684\u6982\u5ff5\uff0c\u4e4b\u5f8c\u518d\u7814\u7a76 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u7b49\u89e3\u6c7a\u65b9\u6848\u6642\u5c31\u6703\u6709\u66f4\u6e05\u6670\u7684\u8f2a\u5ed3\u3002"),(0,i.kt)("h1",{id:"oci---implementation"},"OCI - Implementation"),(0,i.kt)("p",null,"\u5982\u540c\u524d\u8a00\u6240\u8ff0\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u672c\u8eab\u5305\u542b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u5169\u500b\u898f\u7bc4\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," \u5c24\u5176\u91cd\u8981\uff0c\u7562\u7adf\u5176\u898f\u7bc4\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u7684\u751f\u547d\u9031\u671f\u64cd\u4f5c\u4ee5\u53ca\u76f8\u95dc\u7684\u8a2d\u5b9a\u3002"),(0,i.kt)("h2",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u5b98\u65b9\u57fa\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime \u898f\u7bc4")," \u5be6\u73fe\u4e86\u4e00\u500b\u89e3\u6c7a\u65b9\u6848\uff0c\u7a31\u70ba ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/runc"},"RunC"),", \u6839\u64da\u5176\u5b98\u65b9\u6587\u4ef6\u7684\u8aaa\u660e"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"runc is a CLI tool for spawning and running containers according to the OCI specification.")),(0,i.kt)("p",null,"\u9019\u610f\u5473\u8005\u85c9\u7531\u9019\u5957\u5de5\u5177\uff0c\u4e26\u4e14\u642d\u914d\u9069\u5b9c\u7684\u8a2d\u5b9a\uff0c\u5c31\u53ef\u4ee5\u8f15\u9b06\u7684\u5275\u5efa\u51fa\u4e00\u500b\u7b26\u5408",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u904b\u884c\u3002 \u4f46\u662f\u55ae\u7d14\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"CLI")," \u5de5\u5177\u4e26\u4e0d\u4e00\u5b9a\u9069\u5408\u6240\u6709\u7684\u958b\u767c\u8005\uff0c\u90e8\u5206\u7684\u958b\u767c\u8005\u53ef\u80fd\u53ea\u5e0c\u671b\u64c1\u6709\u4e00\u5957\u80fd\u5920\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684\u76f8\u95dc\u51fd\u793a\u5eab\u53ef\u4ee5\u4f7f\u7528\uff0c\u9019\u6642\u5019\u8981\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/runc/tree/master/libcontainer"},"libcontainer"),"\u9019\u5957\u7531\u5b98\u65b9\u7dad\u8b77\u4e26\u4e14\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"golang")," \u64b0\u5beb\u7684\u51fd\u793a\u5eab\uff0c\u6839\u64da\u5176\u8aaa\u660e\u6587\u4ef6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Libcontainer provides a native Go implementation for creating containers with namespaces, cgroups, capabilities, and filesystem access controls. It allows you to manage the lifecycle of the container performing additional operations after the container is created.")),(0,i.kt)("p",null,"\u900f\u904e\u9019\u500b\u51fd\u5f0f\u5eab\uff0c\u958b\u767c\u8005\u53ef\u4ee5\u8f15\u9b06\u7684\u64b0\u5beb\u51fa\u6eff\u8db3\u6574\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u7684\u751f\u547d\u9031\u671f\uff0c\u540c\u6642\u4e5f\u80fd\u5920\u5275\u5efa\u76f8\u95dc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace/cgroups")," \u7b49\u7684\u7a0b\u5f0f\u78bc\uff0c\u4e26\u4e14\u5c07\u5fc3\u529b\u5c08\u6ce8\u5728\u66f4\u4e0a\u5c64\u7684\u670d\u52d9\u63d0\u4f9b\u3002"),(0,i.kt)("p",null,"\u9664\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"runC")," \u9019\u5957\u5be6\u73fe\u65b9\u6848\u4e4b\u5916\uff0c\u5b98\u65b9\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/runtime-spec/blob/master/implementations.md"},"GitHub")," \u53ef\u4ee5\u770b\u5230\u76ee\u524d\u5b98\u65b9\u6536\u9304\u7684\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime Spec")," \u7684\u5be6\u73fe\u65b9\u6848\uff0c\u9019\u4e9b\u65b9\u6848\u6709\u4e9b\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u7d44\u7e54\u672c\u8eab\u7dad\u8b77\uff0c\u6709\u4e9b\u7531\u5176\u4ed6\u7d44\u7e54\u7dad\u8b77\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\u7279\u5225\u6709\u8da3\u7684\u5c31\u662f\u9019\u4e9b\u5be6\u73fe\u65b9\u6848\u76ee\u524d\u5206\u70ba\u5169\u5927\u985e\uff0c\u5206\u5225\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime (Container)")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime (Virtual Machine)"),"."),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u5c31\u662f\u6211\u5011\u4e00\u76f4\u5728\u63a2\u8a0e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u9019\u985e\u578b\u5247\u662f\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u76f8\u95dc\u7684\u6280\u8853\u53bb\u5b8c\u6210\u865b\u64ec\u5316\u7684\u74b0\u5883\uff0c\u4f46\u662f\u540c\u6642\u53c8\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u7684\u6a19\u6e96\u3002 \u9019\u610f\u5473\u8005\u4f7f\u7528\u8005\u53ef\u4ee5\u5275\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Contaienr")," \u4f86\u4f7f\u7528\uff0c\u4f46\u662f\u5176\u5e95\u5c64\u662f\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u7684\u6280\u8853\u5275\u5efa\u51fa\u4f86\u7684\u3002"),(0,i.kt)("p",null,"\u9019\u76f8\u95dc\u7684\u6982\u5ff5\u5176\u5be6\u4e0d\u96e3\u60f3\u50cf\uff0c\u7562\u7adf ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u4e00\u76f4\u4ee5\u4f86\u88ab\u8a8d\u70ba\u4e0d\u5920\u5b89\u5168\uff0c\u7562\u7adf\u5176\u90e8\u5206\u529f\u80fd\u90fd\u662f\u4f9d\u8cf4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," \u4e0a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Kernel")," \u4f86\u5be6\u73fe\uff0c\u5176\u9694\u96e2\u80fd\u529b\u6c92\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Machine")," \u9019\u9ebc\u660e\u78ba\u3002\n\u6240\u4ee5\u5982\u4f55\u6253\u9020\u4e00\u500b\u901f\u5ea6\u53c8\u5feb\uff0c\u5b89\u5168\u5ea6\u53c8\u9ad8\u7684\u865b\u64ec\u5316\u74b0\u5883\u4e00\u76f4\u4ee5\u4f86\u90fd\u662f\u4e00\u500b\u63a2\u8a0e\u7684\u8b70\u984c\u3002"),(0,i.kt)("p",null,"\u8a72\u6e05\u55ae\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"google/gvisor")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"kata-containers")," \u90fd\u7b97\u662f\u6eff\u77e5\u540d\u7684\u5c08\u6848\n\u6709\u8208\u8da3\u7684\u8b80\u8005\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u9019\u4e9b\u6280\u8853\u5e95\u5c64\u4e26\u770b\u770b\u5404\u5927\u5c08\u6848\u662f\u5e0c\u671b\u5982\u4f55\u5be6\u73fe",(0,i.kt)("inlineCode",{parentName:"p"},"\u9ad8\u6548\u80fd,\u9ad8\u5b89\u5168")," \u7684\u865b\u64ec\u5316\u74b0\u5883\u3002"),(0,i.kt)("h2",{id:"image"},"Image"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u7684\u90e8\u5206\u4e5f\u6709\u76f8\u5c0d\u61c9\u7684\u5de5\u5177\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e00\u6a23\u7531",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencontainers/image-tools"},"\u5b98\u65b9 GitHub")," \u9032\u884c\u7dad\u8b77,\u8a72\u6587\u4ef6\u4e2d\u6703\u4ecb\u7d39\u5982\u4f55\u642d\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"skopeo")," \u7b49\u5de5\u5177\u4f86\u5b8c\u6210\u4e00\u500b\u95dc\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u76f8\u95dc\u7684\u6848\u4f8b\u3002\n\u6b64\u5916\uff0c\u4e5f\u6709\u5176\u4ed6\u7684\u5c08\u6848\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containers/buildah"},"buildah")," \u4e5f\u91dd\u5c0d ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI Image")," \u7684\u90e8\u5206\u63d0\u4f9b\u4e00\u4e9b\u89e3\u6c7a\u65b9\u6848"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Buildah - a tool that facilitates building Open Container Initiative (OCI) container images")),(0,i.kt)("h1",{id:"docker"},"Docker"),(0,i.kt)("p",null,"\u5c0d\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Open Container Initiative (OCI)")," \u6709\u57fa\u672c\u6982\u5ff5\u4e4b\u5f8c\uff0c\u63a5\u4e0b\u4f86\u5c31\u8981\u63a2\u8a0e\u4f5c\u70ba ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u91cd\u5927\u8ca2\u737b\u8005\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," (libcontainer, image spec...etc)\uff0c\u662f\u5982\u4f55\u5728\u5176\u67b6\u69cb\u4e2d\u900f\u904e\u4f55\u7a2e\u65b9\u5f0f\u8ddf\u4f86\u5275\u5efa\u57fa\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u4ecb\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,i.kt)("p",null,"\u4e0b\u5716\u662f\u4e00\u500b\u6eff\u68d2\u7684\u67b6\u69cb\u5716\uff0c\u7576\u6709\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u7684\u6982\u5ff5\u5f8c\u518d\u4f86\u770b\u9019\u5f35\u5716\u6703\u89ba\u5f97\u89aa\u5207\u8a31\u591a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/WL7hKSD.png",alt:null}),"\n(\u5716\u7247\u64f7\u53d6\u81ea\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://blog.docker.com/2016/04/docker-engine-1-11-runc/"},"blod.docker.com - docker-engine-1-11-runc"),")"),(0,i.kt)("p",null,"\u9019\u5f35\u5716\u7247\u7684\u53f3\u534a\u90e8\u5206\u6a19\u51fa\u4e86\u56db\u500b\u4e0d\u540c\u5c64\u7d1a\u7684\u6982\u5ff5\uff0c\u5206\u5225\u662f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker UI/Commands"),(0,i.kt)("li",{parentName:"ul"},"Docker Engine"),(0,i.kt)("li",{parentName:"ul"},"Containerd"),(0,i.kt)("li",{parentName:"ul"},"Runc")),(0,i.kt)("h2",{id:"docker-uicommands"},"Docker UI/Commands"),(0,i.kt)("p",null,"\u5927\u5bb6\u6700\u70ba\u719f\u6089\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," \u6307\u4ee4\u5176\u5be6\u5728\u6574\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," \u7684\u67b6\u69cb\u4e2d\u626e\u6f14\u4e86\u6240\u8b02\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," \u7684\u89d2\u8272\uff0c\u8ca0\u8cac\u5c07\u4f7f\u7528\u8005\u7684\u9700\u6c42(\u6307\u4ee4)\u6253\u5305\uff0c\u4e26\u4e14\u8207\u5f8c\u65b9\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," \u6e9d\u901a"),(0,i.kt)("p",null,"\u9019\u908a\u9664\u4e86\u5e38\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run/build/image/exec/attach...etc")," \u7b49\u76f4\u63a5\u4f7f\u7528\u7684 CLI \u5de5\u5177\u5916\uff0c\u4e5f\u662f\u6709\u76f8\u95dc\u7684\u51fd\u5f0f\u5eab\u53ef\u4ee5\u4f9b\u958b\u767c\u8005\u4f7f\u7528\uff0c\u5c07\u81ea\u5df1\u7684\u61c9\u7528\u7a0b\u5f0f\u76f4\u63a5\u8207 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker Server")," \u9023\u52d5\u4f86\u6e9d\u901a\u3002"),(0,i.kt)("p",null,"\u5728\u9810\u8a2d\u7684\u60c5\u6cc1\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," \u6307\u4ee4\u90fd\u6703\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"unix socket")," \u8207\u672c\u5730\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker engine")," \u6e9d\u901a\uff0c\u9019\u500b\u90e8\u5206\u53ef\u4ee5\u900f\u904e\u74b0\u5883\u8b8a\u6578\u4f86\u63cf\u8ff0\uff0c\u8b6c\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export DOCKER_HOST=tcp://192.168.0.123:2376\ndocker run\n")),(0,i.kt)("h2",{id:"docker-engine"},"Docker Engine"),(0,i.kt)("p",null,"\u7576\u7cfb\u7d71\u5167\u5b89\u88dd ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," \u5f8c\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u7cfb\u7d71\u6307\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," \u89c0\u5bdf\u5230\u7cfb\u7d71\u4e0a\u6703\u6709\u4e00\u500b\u540d\u70ba ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerd")," \u7684\u7a0b\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"root      2487  0.6  2.2 694888 90000 ?        Ssl  22:26   0:11 dockerd -G docker --exec-root=/var/snap/docker/384/run/docker --data-root=/var/snap/docker/common/var-lib-docker --pidfile=/var/snap/docker/384/run/docker.pid --config-file=/var/snap/docker/384/config/daemon.json --debug\n")),(0,i.kt)("p",null,"\u9019\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," \u5c31\u662f\u6240\u8b02\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker engine"),", \u6240\u6709\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker client")," \u90fd\u6703\u5c07\u6307\u4ee4\u9001\u5230\u9019\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," \u9032\u884c\u76f8\u95dc\u6574\u7406\u3002\u9019\u4e00\u5c64\u7d1a\u76f8\u5c0d\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u7684\u5c64\u7d1a\u9084\u662f\u7b97\u9ad8\uff0c\u504f\u5411\u4e0a\u5c64\u7684\u61c9\u7528\uff0c\u6240\u4ee5\u7279\u8272\u9084\u662f\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," \u81ea\u5df1\u7684\u7279\u8272\u70ba\u4e3b\u3002"),(0,i.kt)("h2",{id:"containerd"},"Containerd"),(0,i.kt)("p",null,"\u7576 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker Engine")," \u6536\u5230\u6307\u4ee4\u5f8c\u5c31\u6703\u5c07\u6307\u4ee4\u5f80\u5f8c\u50b3\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," \u9032\u884c\u8655\u7406\u3002"),(0,i.kt)("p",null,"\u76f8\u5c0d\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker Engine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," \u5247\u66f4\u9762\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\uff0c\u5411\u4e0a\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC")," \u63a5\u53e3\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker  Engine")," \u4f7f\u7528\uff0c\u5411\u4e0b\u5247\u662f\u6839\u64da\u9700\u6c42\u5275\u5efa\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,i.kt)("p",null,"\u5c31\u5982\u540c\u6628\u5929\u6240\u8ff0\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime spec")," \u76ee\u524d\u6709\u773e\u591a\u7684\u5be6\u73fe\u65b9\u6848\u53ef\u4ee5\u9078\u64c7\uff0c\u800c\u6700\u77e5\u540d\u4e14\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u7d44\u7e54\u7dad\u8b77\u7684\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"runc"),"."),(0,i.kt)("p",null,"\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Containerd")," \u672c\u8eab\u4e5f\u6703\u900f\u904e\u9019\u4e9b\u73fe\u6709\u7684\u89e3\u6c7a\u65b9\u6848\u4f86\u5275\u5efa\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"root      2571  0.6  0.8 558432 35808 ?        Ssl  Sep12   0:39 docker-containerd --config /var/snap/docker/384/run/docker/containerd/containerd.toml\n")),(0,i.kt)("h2",{id:"containerd-shim"},"Containerd-Shim"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u70ba\u4e86\u6eff\u8db3\u4e00\u4e9b\u8edf\u9ad4\u8a2d\u8a08\u4e0a\u7684\u9700\u6c42\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," \u4e26\u6c92\u6709\u76f4\u63a5\u547c\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"runc"),"\uff0c\u53cd\u800c\u662f\u4e2d\u9593\u6703\u5728\u586b\u88dc\u4e00\u5c64\u6240\u8b02\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," \u6703\u5275\u5efa\u4e00\u500b\u7368\u7acb\u7684 process ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim")," \u4e26\u7531\u5176\u547c\u53eb ",(0,i.kt)("inlineCode",{parentName:"p"},"runc")," \u4f86\u771f\u6b63\u5275\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"container"),"."),(0,i.kt)("p",null,"\u6839\u64da\u4e0b\u5217 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/crosbymichael/dockercon-2016/blob/master/Creating%20Containerd.pdf"},"dockercon-2016")," \u76f8\u95dc\u7684\u6f14\u8b1b\uff0c\u6211\u5011\u53ef\u4ee5\u6b78\u7d0d\u51fa\u4e0b\u5217\u70ba\u4ec0\u9ebc\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim")," \u7684\u7406\u7531"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"daemonless"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c07 ",(0,i.kt)("inlineCode",{parentName:"li"},"container")," \u904b\u884c\u8207 ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," \u5206\u958b\uff0c\u9019\u610f\u5473\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," \u5347\u7d1a\u7684\u904e\u7a0b\u4e2d\u9019\u4e9b\u904b\u884c\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"container")," \u4e26\u4e0d\u6703\u88ab\u5f71\u97ff\uff0c\u53ef\u4ee5\u7e7c\u7e8c\u4f7f\u7528\u3002 \u56e0\u70ba ",(0,i.kt)("inlineCode",{parentName:"li"},"docker engine/containerd")," \u76ee\u524d\u90fd\u662f\u5c6c\u65bc ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," \u5957\u4ef6\u7684\u7a0b\u5f0f\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"re-parenting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7576 ",(0,i.kt)("inlineCode",{parentName:"li"},"runc")," \u5275\u5efa\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"container")," \u5f8c\u53ef\u4ee5\u76f4\u63a5\u8b93 ",(0,i.kt)("inlineCode",{parentName:"li"},"runc")," \u96e2\u958b\uff0c\u4e26\u4e14\u628a\u5176\u7a0b\u5e8f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"process")," \u4ea4\u7531\u66f4\u4e0a\u5c64\u7684\u7956\u7236\u53bb\u7ba1\u7406\uff0c\u9019\u500b\u60c5\u6cc1\u4e2d\u6211\u5011\u5c31\u53ef\u4ee5\u8b93 ",(0,i.kt)("inlineCode",{parentName:"li"},"containerd-shim")," \u53bb\u7ba1\u7406\u3002\u6b64\u5916\u5047\u8a2d\u7576 ",(0,i.kt)("inlineCode",{parentName:"li"},"containerd")," \u610f\u5916\u91cd\u555f\u5f8c\uff0c\u5247\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"containerd-shim")," \u53ef\u4ee5\u4ea4\u7531 ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," \u53bb\u7ba1\u7406\uff0c\u85c9\u6b64\u505a\u5230\u7cfb\u7d71\u66f4\u65b0\u800c\u4e0d\u5f71\u97ff\u73fe\u5b58\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"container")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tty/stdin \u70ba\u4e86\u8655\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," \u672c\u8eab\u7684\u8f38\u5165\u554f\u984c\uff0c\u5247\u6703\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"FIFO")," \u9019\u7a2e ",(0,i.kt)("inlineCode",{parentName:"p"},"IPC"),"\u7684\u65b9\u5f0f\u518d ",(0,i.kt)("inlineCode",{parentName:"p"},"parent & child process")," \u4e2d\u6e9d\u901a\u3002\u6240\u4ee5\u6211\u5011\u5c07 ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," \u7684\u91cd\u8cac\u5927\u4efb\u5c31\u4ea4\u7d66\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim")," \u4e0a"))),(0,i.kt)("p",null,"\u95dc\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"re-parenting")," \u7684\u6f14\u8b8a\u53ef\u4ee5\u76f4\u63a5\u53c3\u95b1\u8a72\u4efd\u6295\u5f71\u7247\uff0c\u5982\u4e0b\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/yYRFdUK.png",alt:null}),"\n(\u5716\u7247\u64f7\u53d6\u81ea\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/crosbymichael/dockercon-2016/blob/master/Creating%20Containerd.pdf"},"dockercon-2016"),")\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Nxzr0Tn.png",alt:null}),"\n(\u5716\u7247\u64f7\u53d6\u81ea\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/crosbymichael/dockercon-2016/blob/master/Creating%20Containerd.pdf"},"dockercon-2016"),")"),(0,i.kt)("p",null,"\u7531\u4e0a\u9762\u7684\u6982\u5ff5\u53ef\u4ee5\u77e5\u9053\uff0c\u6bcf\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim")," \u90fd\u6703\u5c0d\u61c9\u5230\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"container"),", \u56e0\u6b64\u7576\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," \u7684\u65b9\u5f0f\u4f86\u904b\u884c\u5bb9\u5668\u5f8c\uff0c\u7cfb\u7d71\u5c31\u6703\u7522\u6536\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"container-shim")," \u76f8\u95dc\u7684\u61c9\u7528\u7a0b\u5f0f. \u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7bc4\u4f8b\u5275\u5efa\u591a\u500b\u5bb9\u5668\uff0c\u7136\u5f8c\u89c0\u5bdf\u76f8\u95dc\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-shim")," \u7684\u72c0\u614b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"sudo docker run -d hwchiu/netutils\nsudo docker run -d hwchiu/netutils\nsudo docker run -d hwchiu/netutils\nsudo docker run -d hwchiu/netutils\nps auxw | grep docker-containerd-shim | wc -l\nps auxw | grep docker-containerd-shim\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"root     11732  0.0  0.1   7380  4420 ?        Sl   18:17   0:00 docker-containerd-shim -namespace moby -workdir /var/snap/docker/common/var-lib-docker/containerd/daemon/io.containerd.runtime.v1.linux/moby/a12e5594d0d666759c51b2420db0e361649a39b43aa6b5e928382c69381be0a0 -address /var/snap/docker/384/run/docker/containerd/docker-containerd.sock -containerd-binary /snap/docker/384/bin/docker-containerd -runtime-root /var/snap/docker/384/run/docker/runtime-runc -debug\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u4e0a\u8ff0\u6240\u6709\u7684\u5143\u4ef6\u5728\u6700\u5f8c\u65bc ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," \u7684\u74b0\u5883\u4e2d\u90fd\u6709\u91cd\u65b0\u547d\u540d\uff0c\u5305\u542b\u4e86"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"containerd -> docker-containerd"),(0,i.kt)("li",{parentName:"ol"},"containerd-shim -> docker-containerd-shim")),(0,i.kt)("p",null,"\u7528\u4e0b\u5217\u67b6\u69cb\u5716\u4f86\u91cd\u65b0\u8aaa\u660e\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," \u5167\u90e8\u7684\u69cb\u9020\u4ee5\u53ca\u662f\u5982\u4f55\u5275\u5efa\u51fa\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"OCI")," \u6a19\u6e96\u7684\u5bb9\u5668\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/wDbs54G.png",alt:null})),(0,i.kt)("h1",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.docker.com/2017/08/what-is-containerd-runtime/"},"https://blog.docker.com/2017/08/what-is-containerd-runtime/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://alexander.holbreich.org/docker-components-explained/"},"http://alexander.holbreich.org/docker-components-explained/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/crosbymichael/dockercon-2016/blob/master/Creating%20Containerd.pdf"},"https://github.com/crosbymichael/dockercon-2016/blob/master/Creating%20Containerd.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ops.tips/blog/run-docker-with-forked-runc/#forking-runc"},"https://ops.tips/blog/run-docker-with-forked-runc/#forking-runc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/tiffanyfay/docker-1-11-et-plus-engine-is-now-built-on-runc-and-containerd-a6d06d7e80ef"},"https://medium.com/tiffanyfay/docker-1-11-et-plus-engine-is-now-built-on-runc-and-containerd-a6d06d7e80ef"))))}k.isMDXComponent=!0}}]);