"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[64260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(t),c=o,m=k["".concat(d,".").concat(c)]||k[c]||u[c]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[k]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={title:"[Kubernetes] DNS Setting with Dockerd(\u539f\u59cb\u78bc\u5206\u6790\u4e0a)",date:new Date("2018-08-12T16:02:59.000Z"),tags:["Kubernetes","Linux","DNS","SourceCode","Docker"],description:"\u5728\u524d\u7bc7\u6587\u7ae0\u6709\u8ddf\u5927\u5bb6\u5206\u4eab\u904e\u5be6\u969b\u90e8\u5c6c\u4e0a\u9047\u5230\u7684 DNS \u554f\u984c\uff0c\u4e26\u4e14\u900f\u904e\u5be6\u9a57\u4f50\u8b49\u53bb\u89c0\u5bdf\u7d50\u679c, \u672c\u7bc7\u6587\u7ae0\u5247\u662f\u900f\u904e\u53e6\u5916\u4e00\u7a2e\u89c0\u9ede\u4f86\u89c0\u5bdf\u7d50\u679c,\u900f\u904e\u95b1\u8b80\u539f\u59cb\u78bc\u7684\u65b9\u5f0f\u4f86\u89c0\u5bdf\u5230\u5e95 kubernetes \u518d\u5275\u5efa\u76f8\u95dc\u7684 Pod \u6642\u6703\u5982\u4f55\u53bb\u8655\u7406 DNS \u76f8\u95dc\u7684\u8a2d\u5b9a\uff0c\u7531\u65bc\u6574\u500b\u904e\u7a0b\u727d\u626f\u5230 kubernetes \u4ee5\u53ca CRI(Container Runtime Interface)\u7684\u64cd\u4f5c\uff0c\u800c\u6211\u5011\u9810\u8a2d\u4f7f\u7528\u7684\u5247\u662f Docker \u4f5c\u70ba\u5e95\u5c64\u5bb9\u5668\u7684\u64cd\u4f5c. \u7531\u65bc\u7bc7\u5e45\u904e\u9577\uff0c\u6240\u4ee5\u672c\u6587\u6703\u8457\u91cd\u65bc kubernetes \u539f\u59cb\u78bc\u7684\u90e8\u5206\uff0c\u800c Docker \u76f8\u95dc\u7684\u90e8\u5206\u5247\u6703\u9918\u4e0b\u7bc7\u6587\u7ae0\u4f86\u7814\u7a76."},a="Preface",l={unversionedId:"2018/kubernetes-dns-iii",id:"2018/kubernetes-dns-iii",title:"[Kubernetes] DNS Setting with Dockerd(\u539f\u59cb\u78bc\u5206\u6790\u4e0a)",description:"\u5728\u524d\u7bc7\u6587\u7ae0\u6709\u8ddf\u5927\u5bb6\u5206\u4eab\u904e\u5be6\u969b\u90e8\u5c6c\u4e0a\u9047\u5230\u7684 DNS \u554f\u984c\uff0c\u4e26\u4e14\u900f\u904e\u5be6\u9a57\u4f50\u8b49\u53bb\u89c0\u5bdf\u7d50\u679c, \u672c\u7bc7\u6587\u7ae0\u5247\u662f\u900f\u904e\u53e6\u5916\u4e00\u7a2e\u89c0\u9ede\u4f86\u89c0\u5bdf\u7d50\u679c,\u900f\u904e\u95b1\u8b80\u539f\u59cb\u78bc\u7684\u65b9\u5f0f\u4f86\u89c0\u5bdf\u5230\u5e95 kubernetes \u518d\u5275\u5efa\u76f8\u95dc\u7684 Pod \u6642\u6703\u5982\u4f55\u53bb\u8655\u7406 DNS \u76f8\u95dc\u7684\u8a2d\u5b9a\uff0c\u7531\u65bc\u6574\u500b\u904e\u7a0b\u727d\u626f\u5230 kubernetes \u4ee5\u53ca CRI(Container Runtime Interface)\u7684\u64cd\u4f5c\uff0c\u800c\u6211\u5011\u9810\u8a2d\u4f7f\u7528\u7684\u5247\u662f Docker \u4f5c\u70ba\u5e95\u5c64\u5bb9\u5668\u7684\u64cd\u4f5c. \u7531\u65bc\u7bc7\u5e45\u904e\u9577\uff0c\u6240\u4ee5\u672c\u6587\u6703\u8457\u91cd\u65bc kubernetes \u539f\u59cb\u78bc\u7684\u90e8\u5206\uff0c\u800c Docker \u76f8\u95dc\u7684\u90e8\u5206\u5247\u6703\u9918\u4e0b\u7bc7\u6587\u7ae0\u4f86\u7814\u7a76.",source:"@site/docs/2018/kubernetes-dns-iii.md",sourceDirName:"2018",slug:"/2018/kubernetes-dns-iii",permalink:"/docs/2018/kubernetes-dns-iii",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"DNS",permalink:"/docs/tags/dns"},{label:"SourceCode",permalink:"/docs/tags/source-code"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedBy:"HungWei Chiu",frontMatter:{title:"[Kubernetes] DNS Setting with Dockerd(\u539f\u59cb\u78bc\u5206\u6790\u4e0a)",date:"2018-08-12T16:02:59.000Z",tags:["Kubernetes","Linux","DNS","SourceCode","Docker"],description:"\u5728\u524d\u7bc7\u6587\u7ae0\u6709\u8ddf\u5927\u5bb6\u5206\u4eab\u904e\u5be6\u969b\u90e8\u5c6c\u4e0a\u9047\u5230\u7684 DNS \u554f\u984c\uff0c\u4e26\u4e14\u900f\u904e\u5be6\u9a57\u4f50\u8b49\u53bb\u89c0\u5bdf\u7d50\u679c, \u672c\u7bc7\u6587\u7ae0\u5247\u662f\u900f\u904e\u53e6\u5916\u4e00\u7a2e\u89c0\u9ede\u4f86\u89c0\u5bdf\u7d50\u679c,\u900f\u904e\u95b1\u8b80\u539f\u59cb\u78bc\u7684\u65b9\u5f0f\u4f86\u89c0\u5bdf\u5230\u5e95 kubernetes \u518d\u5275\u5efa\u76f8\u95dc\u7684 Pod \u6642\u6703\u5982\u4f55\u53bb\u8655\u7406 DNS \u76f8\u95dc\u7684\u8a2d\u5b9a\uff0c\u7531\u65bc\u6574\u500b\u904e\u7a0b\u727d\u626f\u5230 kubernetes \u4ee5\u53ca CRI(Container Runtime Interface)\u7684\u64cd\u4f5c\uff0c\u800c\u6211\u5011\u9810\u8a2d\u4f7f\u7528\u7684\u5247\u662f Docker \u4f5c\u70ba\u5e95\u5c64\u5bb9\u5668\u7684\u64cd\u4f5c. \u7531\u65bc\u7bc7\u5e45\u904e\u9577\uff0c\u6240\u4ee5\u672c\u6587\u6703\u8457\u91cd\u65bc kubernetes \u539f\u59cb\u78bc\u7684\u90e8\u5206\uff0c\u800c Docker \u76f8\u95dc\u7684\u90e8\u5206\u5247\u6703\u9918\u4e0b\u7bc7\u6587\u7ae0\u4f86\u7814\u7a76."},sidebar:"techPost",previous:{title:"[Kubernetes] DNS Setting When DnsPolicy Is Default",permalink:"/docs/2018/kubernetes-dns-ii"},next:{title:"[Kubernetes] DNS Setting with Dockerd(\u539f\u59cb\u78bc\u5206\u6790\u4e0b)",permalink:"/docs/2018/kubernetes-dns-iiii"}},d={},p=[{value:"kube runtime",id:"kube-runtime",level:2},{value:"createPodSandbox",id:"createpodsandbox",level:3},{value:"generatePodSandboxConfig",id:"generatepodsandboxconfig",level:3},{value:"GetPodDNS",id:"getpoddns",level:3},{value:"DocekrShim",id:"docekrshim",level:2},{value:"RunPodSandbox",id:"runpodsandbox",level:3},{value:"rewriteResolvFile",id:"rewriteresolvfile",level:3}],s={toc:p},k="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(k,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preface"},"Preface"),(0,o.kt)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f Kubernetes Pod-DNS \u7cfb\u5217\u6587\u7ae0\u7b2c\u4e09\u7bc7\n\u6b64\u7cfb\u5217\u6587\u6703\u5f9e\u4f7f\u7528\u8005\u7684\u7528\u6cd5\u5230\u4e00\u4e9b\u554f\u984c\u7684\u767c\u6398\uff0c\u6700\u5f8c\u900f\u904e\u95b1\u8b80\u7a0b\u5f0f\u78bc\u7684\u65b9\u5f0f\u53bb\u5206\u6790\u9019\u4e9b\u554f\u984c"),(0,o.kt)("p",null,"\u76f8\u95dc\u7684\u6587\u7ae0\u9023\u7d50\u5982\u4e0b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2018/kubernetes-dns"},"[Kubernetes] DNS setting in your Pod")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2018/kubernetes-dns-ii"},"[Kubernetes] DNS Setting with Dockerd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2018/kubernetes-dns-iiii"},"[Kubernetes] DNS Setting with Dockerd(\u539f\u59cb\u78bc\u5206\u6790\u4e0b)"))),(0,o.kt)("h1",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("p",null,"\u5728\u524d\u7bc7\u6587\u7ae0\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/kubernetes-dns-ii"},"[Kubernetes] DNS Setting with Dockerd")," \u4e2d\u5df2\u7d93\u8a73\u7d30\u4ecb\u7d39\u4e86\u6574\u500b\u554f\u984c\u7684\u6d41\u7a0b\u4ee5\u53ca\u89c0\u5bdf\u7d50\u679c\u3002"),(0,o.kt)("p",null,"\u518d\u6b21\u91cd\u7533\u4e00\u6b21\u7d50\u8ad6\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u6703\u5148\u5617\u8a66\u4f7f\u7528\u7bc0\u9ede\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u7684\u8cc7\u6599\uff0c\u4f46\u662f\u82e5\u767c\u73fe ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u662f\u7a7a\u7684\uff0c\u9019\u6642\u5019\u5c31\u6703\u53bb\u4f9d\u8cf4 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerd")," \u5e6b\u5fd9\u7522\u751f\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")),(0,o.kt)("p",null,"\u672c\u7bc7\u6703\u76f4\u63a5\u5f9e ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," \u7684\u539f\u59cb\u78bc\u4f86\u7814\u7a76\u9019\u500b\u554f\u984c\uff0c\u4e26\u4e14\u4f50\u8b49\u4e0a\u7bc7\u6587\u7ae0\u7684\u89c0\u5bdf\u7d50\u679c\u3002"),(0,o.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"\u5728\u89c0\u5bdf\u9019\u500b\u73fe\u8c61\u524d\uff0c\u6211\u5011\u5fc5\u9808\u8981\u5148\u601d\u8003\u65b9\u5411\uff0c\u8a72\u600e\u9ebc\u53bb\u8ffd\u9019\u6bb5\u7a0b\u5f0f\u78bc?\n\u5230\u5e95\u7a0b\u5f0f\u78bc\u7684\u958b\u982d\u61c9\u8a72\u5f9e\u54ea\u908a\u958b\u59cb\u8ffd\u8d77?"),(0,o.kt)("p",null,"\u8981\u8b1b\u8d77\u9019\u500b\u554f\u984c\u5be6\u5728\u4e0d\u662f\u4e00\u8a00\u5169\u8a9e\u53ef\u4ee5\u89e3\u6c7a\u7684\uff0c\u9019\u90e8\u4efd\u9664\u975e\u672c\u8eab\u5df2\u7d93\u5c0d ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes"),"\u539f\u59cb\u78bc\u5f88\u77ad\u89e3\uff0c\u5426\u5247\u5c31\u662f\u8981\u501a\u8cf4\u95dc\u9375\u5b57\u52a0\u4e0a\u672c\u8eab\u5c0d\u7a0b\u5f0f\u8a9e\u8a00\u7684\u7d93\u9a57\u4f86\u5224\u65b7\uff0c\u8d95\u7dca\u627e\u5230\u4e00\u500b\u6b63\u78ba\u7684\u9032\u5165\u9ede\u3002"),(0,o.kt)("p",null,"\u9019\u908a\u76f4\u63a5\u5148\u4f7f\u7528\u4e00\u500b\u7c21\u55ae\u7684\u6d41\u7a0b\u5716\uff0c\u4f86\u63cf\u8ff0\u6574\u500b\u904b\u4f5c\u7684\u908f\u8f2f\uff0c\u7136\u5f8c\u63a5\u4e0b\u4f86\u6703\u91dd\u5c0d\u9019\u6bb5\u6d41\u7a0b\u9032\u884c\u66f4\u9032\u4e00\u6b65\u7684\u5206\u6790\u4f86\u89e3\u6c7a\u6211\u5011\u7684\u7591\u554f"),(0,o.kt)("h1",{id:"cri-\u6d41\u7a0b\u5716"},"CRI \u6d41\u7a0b\u5716"),(0,o.kt)("p",null,"\u9019\u908a\u6211\u5011\u5148\u7c21\u55ae\u7684\u77e5\u9053\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u672c\u8eab\u6709\u975e\u5e38\u591a\u7684\u63d2\u4ef6\uff0c\u5305\u542b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Network"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Device")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),"\u3002\n\u9019\u5c31\u662f\u4f60\u6703\u5e38\u5e38\u807d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"CNI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CRI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CSI")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"Device Plugin")," \u7b49\u9019\u4e9b\u540d\u8a5e\u51fa\u73fe\u7684\u7406\u7531"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," \u85c9\u7531\u9019\u4e9b\u63d2\u4ef6\u628a\u90e8\u5206\u529f\u80fd\u90fd\u7d66\u6a21\u7d44\u5316\uff0c\u8b93\u4efb\u4f55\u7b26\u5408\u8a72\u6a19\u6e96\u7684\u7b2c\u4e09\u65b9\u5957\u4ef6\u90fd\u80fd\u5920\u8207 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u7dca\u5bc6\u5408\u4f5c\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672a\u4f86\u5c07\u6703\u64b0\u5beb\u4e00\u7cfb\u5217\u7684\u6587\u7ae0\u4f86\u4ecb\u7d39 CNI\uff0c\u5f9e CNI \u6982\u5ff5\u5230\u81ea\u5df1\u64b0\u5beb\u4e00\u500b CNI\uff0c\u656c\u8acb\u671f\u5f85")),(0,o.kt)("p",null,"\u56e0\u70ba\u4eca\u5929\u7684\u554f\u984c\u4e3b\u8981\u662f\u904b\u884c\u5bb9\u5668\u5167\u7684\u8a2d\u5b9a\u554f\u984c\uff0c\u9019\u90e8\u4efd\u5247\u662f\u6703\u8ddf ",(0,o.kt)("inlineCode",{parentName:"p"},"CRI(Contaienr Runtime Interface)")," \u6709\u95dc\u9023, \u56e0\u6b64\u6211\u900f\u904e\u4e0b\u5716\u7a0d\u5fae\u8aaa\u660e\u4e00\u4e0b\u6574\u500b\u6d41\u7a0b\u3002"),(0,o.kt)("p",null,"\u5728\u6bcf\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u7684\u7bc0\u9ede\u4e0a\u90fd\u6703\u904b\u884c\u4e00\u96bb\u5b88\u8b77\u7a0b\u5e8f ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet"),"\uff0c\u8a72 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," \u5167\u90e8\u6709\u4e00\u500b\u7a31\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-runtime")," \u7684\u5957\u4ef6\u6703\u7528\u4f86\u7ba1\u7406\u5728\u8a72\u7bc0\u9ede\u4e0a\u6240\u6709\u8ddf\u5bb9\u5668\u6709\u95dc\u7684\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kube-runtime")," \u672c\u8eab\u6703\u9075\u5b88 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRI")," \u7684\u898f\u7bc4\u4f86\u7ba1\u7406\u5bb9\u5668\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"CRI")," \u5247\u662f\u5efa\u7acb\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," Client/Server \u7684\u67b6\u69cb\u4e0b\u904b\u884c\u7684\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"kube runtime")," \u672c\u8eab\u6703\u626e\u6f14\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," client \u7684\u89d2\u8272\uff0c\u5c0d gRPC server ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u767c\u9001\u7ba1\u7406\u5bb9\u5668\u7684\u8acb\u6c42\u3002"),(0,o.kt)("p",null,"\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u5247\u662f\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u5167\u90e8\u81ea\u884c\u8a2d\u8a08\u5be6\u4f5c\u7684\u4e00\u500b\u57fa\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container")," \u4e14\u76f8\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"p"},"CRI")," \u7684 gRPC server."),(0,o.kt)("p",null,"\u7576 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u6536\u5230\u8acb\u6c42\u5f8c\uff0c\u5c31\u6703\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Container")," \u672c\u8eab\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," \u9032\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker Container")," \u76f8\u95dc\u7684\u8cc7\u6e90\u8655\u7406\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/t5jQGmd.png",alt:"Imgur"})),(0,o.kt)("h1",{id:"\u7a0b\u5f0f\u78bc\u8ffd\u8e64"},"\u7a0b\u5f0f\u78bc\u8ffd\u8e64"),(0,o.kt)("p",null,"\u85c9\u7531\u4e0a\u8ff0\u6d41\u7a0b\u5716\u7684\u5e6b\u5fd9\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u6709\u66f4\u9032\u4e00\u6b65\u7684\u65b9\u5411\u53bb\u601d\u8003\u7a0b\u5f0f\u7684\u9032\u5165\u9ede\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u5011\u77e5\u9053\u900f\u904e\u5c0d ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," \u8a2d\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsPolicy:default")," \u624d\u6703\u6709\u9019\u500b\u554f\u984c\uff0c\u540c\u6642\u4e5f\u89c0\u5bdf\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerd")," \u672c\u8eab\u7684\u8a2d\u5b9a\u4e5f\u6703\u5f71\u97ff\u6574\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolve.conf")," \u7684\u7d50\u679c\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"kube runtime")," \u9019\u908a\u662f\u4e00\u500b\u53ef\u80fd\u7dda\u7d22\uff0c\u5982\u4f55\u89e3\u6790 ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," \u672c\u8eab\u7684\u53c3\u6578\u4e26\u8655\u7406\u662f\u4e00\u500b\u65b9\u5411\n\u540c\u6642 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u9019\u908a\u5982\u4f55\u91dd\u5c0d ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container")," \u5247\u6703\u662f\u53e6\u5916\u4e00\u500b\u7dda\u7d22\u4f86\u8ffd\u5c0b\u3002"),(0,o.kt)("p",null,"\u91dd\u5c0d\u9019\u5169\u500b\u65b9\u5411\uff0c\u7d93\u904e\u4ed4\u7d30\u7684\u8ffd\u5c0b\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u5f97\u5230\u985e\u4f3c\u4e0b\u5716\u7684\u6d41\u7a0b\n\u5716\u4e2d\u85cd\u8272\u5340\u57df\u90fd\u662f\u771f\u5be6\u7684\u51fd\u5f0f\u540d\u7a31"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6xsRAD1.png",alt:"Imgur"})),(0,o.kt)("p",null,"\u7576 ",(0,o.kt)("strong",{parentName:"p"},"1")," \u865f\u767c\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pod"),"\u7684\u8acb\u6c42\u51fa\u4f86\u5f8c\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," \u88e1\u9762\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"kube runtime")," \u6a21\u7d44\u5167\u5247\u6703\u547c\u53eb\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"createPodSandbox")," \u7684\u51fd\u5f0f\u3002\n\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"createPodSandbox")," \u5247\u6703\u9032\u884c\u4e0b\u5217\u4e8b\u60c5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"li"},"generatePodSandboxConfig")),(0,o.kt)("li",{parentName:"ol"},"\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"li"},"CRI")," \u8981\u6c42\u9060\u65b9\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"RunPodSandbox"))),(0,o.kt)("h2",{id:"kube-runtime"},"kube runtime"),(0,o.kt)("h3",{id:"createpodsandbox"},"createPodSandbox"),(0,o.kt)("p",null,"\u6574\u500b\u51fd\u5f0f\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"createPodSandbox https://github.com/kubernetes/kubernetes/blob/f634f7dae4a49bb513ae8f5c53e5d115308231d3/pkg/kubelet/kuberuntime/kuberuntime_sandbox.go#L37 kuberuntime_sandbox.go",createPodSandbox:!0,"https://github.com/kubernetes/kubernetes/blob/f634f7dae4a49bb513ae8f5c53e5d115308231d3/pkg/kubelet/kuberuntime/kuberuntime_sandbox.go#L37":!0,"kuberuntime_sandbox.go":!0},'// createPodSandbox creates a pod sandbox and returns (podSandBoxID, message, error).\nfunc (m *kubeGenericRuntimeManager) createPodSandbox(pod *v1.Pod, attempt uint32) (string, string, error) {\n    podSandboxConfig, err := m.generatePodSandboxConfig(pod, attempt)\n    if err != nil {\n        message := fmt.Sprintf("GeneratePodSandboxConfig for pod %q failed: %v", format.Pod(pod), err)\n        glog.Error(message)\n        return "", message, err\n    }\n\n    // Create pod logs directory\n    err = m.osInterface.MkdirAll(podSandboxConfig.LogDirectory, 0755)\n    if err != nil {\n        message := fmt.Sprintf("Create pod log directory for pod %q failed: %v", format.Pod(pod), err)\n        glog.Errorf(message)\n        return "", message, err\n    }\n\n    podSandBoxID, err := m.runtimeService.RunPodSandbox(podSandboxConfig)\n    if err != nil {\n        message := fmt.Sprintf("CreatePodSandbox for pod %q failed: %v", format.Pod(pod), err)\n        glog.Error(message)\n        return "", message, err\n    }\n\n    return podSandBoxID, "", nil\n}\n')),(0,o.kt)("h3",{id:"generatepodsandboxconfig"},"generatePodSandboxConfig"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"generatePodSandboxConfig")," \u9019\u500b\u51fd\u5f0f\u5f88\u7c21\u55ae\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u5f9e ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod")," \u672c\u8eab ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," \u6a94\u6848\u88e1\u9762\u53bb\u8b80\u53d6\u8a2d\u5b9a\uff0c\u6839\u64da\u9019\u4e9b\u8a2d\u5b9a\u4f86\u8655\u7406\u76f8\u95dc\u7684\u8cc7\u8a0a\u3002\n\u6211\u5011\u5728\u610f\u7684\u90e8\u4efd\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS")," \u76f8\u95dc\uff0c\u6240\u4ee5\u4ee5\u4e0b\u5c31\u64f7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS")," \u76f8\u95dc\u7684\u51fd\u5f0f\u5167\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"generatePodSandboxConfig https://github.com/kubernetes/kubernetes/blob/f634f7dae4a49bb513ae8f5c53e5d115308231d3/pkg/kubelet/kuberuntime/kuberuntime_sandbox.go#L64 kuberuntime_sandbox.go",generatePodSandboxConfig:!0,"https://github.com/kubernetes/kubernetes/blob/f634f7dae4a49bb513ae8f5c53e5d115308231d3/pkg/kubelet/kuberuntime/kuberuntime_sandbox.go#L64":!0,"kuberuntime_sandbox.go":!0},"// createPodSandbox creates a pod sandbox and returns (podSandBoxID, message, error).\nfunc (m *kubeGenericRuntimeManager) generatePodSandboxConfig(pod *v1.Pod, attempt uint32) (*runtimeapi.PodSandboxConfig, error) {\n....\n    dnsConfig, err := m.runtimeHelper.GetPodDNS(pod)\n    if err != nil {\n        return nil, err\n    }\n    podSandboxConfig.DnsConfig = dnsConfig\n.....\n")),(0,o.kt)("p",null,"\u9019\u908a\u53ef\u4ee5\u770b\u5230\u547c\u53eb\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"GetPodDNS")," \u4f86\u53d6\u5f97\u5c0d\u61c9\u7684\u8a2d\u5b9a\uff0c\u7136\u5f8c\u6211\u5011\u5c31\u4e00\u8def\u5f80\u4e0b\u8ffd"),(0,o.kt)("h3",{id:"getpoddns"},"GetPodDNS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"GetPodDNS https://github.com/kubernetes/kubernetes/blob/1ca851baec6a245bbb2bd3aea284e6cb4f364348/pkg/kubelet/network/dns/dns.go#L325 dns.go",GetPodDNS:!0,"https://github.com/kubernetes/kubernetes/blob/1ca851baec6a245bbb2bd3aea284e6cb4f364348/pkg/kubelet/network/dns/dns.go#L325":!0,"dns.go":!0},'func (c *Configurer) GetPodDNS(pod *v1.Pod) (*runtimeapi.DNSConfig, error) {\n    dnsConfig, err := c.getHostDNSConfig(pod)\n    if err != nil {\n        return nil, err\n    }\n\n    dnsType, err := getPodDNSType(pod)\n    if err != nil {\n        glog.Errorf("Failed to get DNS type for pod %q: %v. Falling back to DNSClusterFirst policy.", format.Pod(pod), err)\n        dnsType = podDNSCluster\n    }\n    switch dnsType {\n    case podDNSNone:\n        // DNSNone should use empty DNS settings as the base.\n        dnsConfig = &runtimeapi.DNSConfig{}\n    case podDNSCluster:\n        ...\n    case podDNSHost:\n        // When the kubelet --resolv-conf flag is set to the empty string, use\n        // DNS settings that override the docker default (which is to use\n        // /etc/resolv.conf) and effectively disable DNS lookups. According to\n        // the bind documentation, the behavior of the DNS client library when\n        // "nameservers" are not specified is to "use the nameserver on the\n        // local machine". A nameserver setting of localhost is equivalent to\n        // this documented behavior.\n        if c.ResolverConfig == "" {\n            switch {\n            case c.nodeIP == nil || c.nodeIP.To4() != nil:\n                dnsConfig.Servers = []string{"127.0.0.1"}\n            case c.nodeIP.To16() != nil:\n                dnsConfig.Servers = []string{"::1"}\n            }\n            dnsConfig.Searches = []string{"."}\n        }\n    }\n...\n    return c.formDNSConfigFitsLimits(dnsConfig, pod), nil\n}\n')),(0,o.kt)("p",null,"\u9019\u908a\u7684\u908f\u8f2f\u975e\u5e38\u7c21\u55ae"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5148\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"li"},"getHostDNSConfig")," \u53d6\u5f97\u7576\u524d ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," \u7684\u5167\u5bb9\uff0c\u4e26\u4e14\u5b58\u65bc\u8b8a\u6578 ",(0,o.kt)("strong",{parentName:"li"},"dnsCOnfig")),(0,o.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u4f86\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"li"},"getPodDNSType")," \u8a72\u51fd\u5f0f\u5f9e ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod Yaml")," \u5167\u8b80\u53d6\u5c0d\u61c9\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsPolicy")," \u8cc7\u8a0a\uff0c\u4f86\u6c7a\u5b9a\u7576\u524d ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsType")),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u6b65\u9a5f\u5c31\u662f\u6700\u91cd\u8981\u7684\uff0c\u6839\u64da\u7576\u524d ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsType")," \u4f86\u6c7a\u5b9a\u8981\u5982\u4f55\u8655\u7406 ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsConfig"),".\n\u7531\u65bc ",(0,o.kt)("inlineCode",{parentName:"li"},"podDNSCluster")," \u7684\u7a0b\u5f0f\u78bc\u592a\u591a\u4e86\uff0c\u6211\u9019\u908a\u5c31\u5148\u5ffd\u7565\u6389\uff0c\u6211\u5011\u53ea\u8981\u5c08\u6ce8\u770b ",(0,o.kt)("inlineCode",{parentName:"li"},"DNSHost")," \u7684\u6848\u4f8b\u3002\n\u88e1\u9762\u975e\u5e38\u7c21\u55ae\uff0c\u5982\u679c\u4f60\u7576\u521d\u904b\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kubelet")," \u7684\u6642\u5019\u6709\u7279\u5225\u8a2d\u5b9a\u4e0d\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," \u7684\u8a71\uff0c\u5c31\u6703\u628a ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsConfig")," \u88dc\u4e0a\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," \u7684\u8cc7\u8a0a\uff0c\u4e0d\u904e\u9019\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"Case")," \u6211\u66ab\u6642\u9084\u6c92\u60f3\u5230\uff0c\u53ef\u80fd\u5c31\u662f\u6a5f\u5668\u672c\u8eab\u5c31\u662f\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"li"},"DNSServer")," \u7684\u60c5\u6cc1\u5427\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c07 ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsConfig")," \u56de\u50b3\u51fa\u53bb\n\u6240\u4ee5\u5728\u6b63\u5e38\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"dnsConfig")," \u7406\u8ad6\u4e0a\u5c31\u6703\u662f\u7bc0\u9ede\u4e0a ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," \u5167\u7684\u8cc7\u6599\u3002")),(0,o.kt)("p",null,"\u5230\u9019\u908a\u70ba\u6b62\uff0c\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-runtime"),"  \u81ea\u884c\u8655\u7406\u7684\u90e8\u4efd\uff0c\u4e26\u4e14\u5c07\u5f97\u5230\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsConfig")," \u653e\u7f6e\u5230\u8b8a\u6578 ",(0,o.kt)("inlineCode",{parentName:"p"},"podSandboxConfig.DnsConfig")," \u4e4b\u4e2d\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4f86\u770b\u4e00\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u88e1\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"RunPodSandbox")," \u6703\u600e\u9ebc\u8655\u7406\u9019\u4e9b ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS")," \u7684\u8cc7\u8a0a\u3002"),(0,o.kt)("h2",{id:"docekrshim"},"DocekrShim"),(0,o.kt)("h3",{id:"runpodsandbox"},"RunPodSandbox"),(0,o.kt)("p",null,"\u7531\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"RunPodSandbox")," \u7684\u51fd\u5f0f\u975e\u5e38\u9577\uff0c\u9019\u908a\u5c31\u64f7\u53d6\u8ddf ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS")," \u76f8\u95dc\u7684\u90e8\u4efd\u4f86\u89c0\u5bdf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"RunPodSandbox https://github.com/kubernetes/kubernetes/blob/67ebbc675aac2b58abc95b186749a81236242625/pkg/kubelet/dockershim/docker_sandbox.go#L81 docker_sandbox.go",RunPodSandbox:!0,"https://github.com/kubernetes/kubernetes/blob/67ebbc675aac2b58abc95b186749a81236242625/pkg/kubelet/dockershim/docker_sandbox.go#L81":!0,"docker_sandbox.go":!0},'func (ds *dockerService) RunPodSandbox(ctx context.Context, r *runtimeapi.RunPodSandboxRequest) (*runtimeapi.RunPodSandboxResponse, error) {\n    config := r.GetConfig()\n....\n    // Rewrite resolv.conf file generated by docker.\n    // NOTE: cluster dns settings aren\'t passed anymore to docker api in all cases,\n    // not only for pods with host network: the resolver conf will be overwritten\n    // after sandbox creation to override docker\'s behaviour. This resolv.conf\n    // file is shared by all containers of the same pod, and needs to be modified\n    // only once per pod.\n    if dnsConfig := config.GetDnsConfig(); dnsConfig != nil {\n        containerInfo, err := ds.client.InspectContainer(createResp.ID)\n        if err != nil {\n            return nil, fmt.Errorf("failed to inspect sandbox container for pod %q: %v", config.Metadata.Name, err)\n        }\n\n        if err := rewriteResolvFile(containerInfo.ResolvConfPath, dnsConfig.Servers, dnsConfig.Searches, dnsConfig.Options); err != nil {\n            return nil, fmt.Errorf("rewrite resolv.conf failed for pod %q: %v", config.Metadata.Name, err)\n        }\n    }\n....\n    return resp, nil\n}\n')),(0,o.kt)("p",null,"\u5176\u5be6\u9019\u908a\u7684\u7a0b\u5f0f\u78bc\u5df2\u7d93\u6709\u4e86\u6eff\u4e0d\u932f\u7684\u8a3b\u89e3\u4f86\u89e3\u91cb\u76f8\u95dc\u7684\u884c\u70ba\u3002\n1.\u4e4b\u524d\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"kube run-time")," \u5f97\u5230\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," \u8a2d\u5b9a\u90fd\u53ea\u662f\u4e00\u500b\u5b58\u5728\u65bc\u8a18\u61b6\u9ad4\u5167\u7684\u4e00\u5806\u8cc7\u6599\u800c\u5df2\uff0c\u5176\u5be6\u90fd\u9084\u6c92\u6709\u8ddf\u771f\u6b63\u7684\u5bb9\u5668\u6709\u4efb\u4f55\u95dc\u4fc2\u3002\n2.\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"dockershim")," \u7684\u64cd\u4f5c\uff0c\u9019\u6642\u5019\u5176\u5be6\u5df2\u7d93\u5c07\u5c0d\u61c9\u7684\u5bb9\u5668\u5275\u898b\u5b8c\u7562\uff0c\u800c\u4e14\u8a72\u5bb9\u5668\u5167",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),"\u7684\u5167\u5bb9\u662f\u5b8c\u5168\u4f9d\u8cf4 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container")," \u6c7a\u5b9a\n3.",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u9019\u908a\u7684\u908f\u8f2f\u975e\u5e38\u7c21\u55ae\uff0c\u5982\u679c\u6211\u4e4b\u524d\u6709\u7522\u751f\u904e\u4efb\u4f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," \u7684\u8a2d\u5b9a\uff0c\u5c31\u76f4\u63a5\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"  \u7522\u751f\u51fa\u4f86\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u7d66\u76f4\u63a5\u8986\u84cb\u6389\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u770b\u4e00\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"rewriteResolvFile")," \u9019\u500b\u51fd\u5f0f"),(0,o.kt)("h3",{id:"rewriteresolvfile"},"rewriteResolvFile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"RunPodSandbox https://github.com/kubernetes/kubernetes/blob/67ebbc675aac2b58abc95b186749a81236242625/pkg/kubelet/dockershim/docker_sandbox.go#L666 docker_sandbox.go",RunPodSandbox:!0,"https://github.com/kubernetes/kubernetes/blob/67ebbc675aac2b58abc95b186749a81236242625/pkg/kubelet/dockershim/docker_sandbox.go#L666":!0,"docker_sandbox.go":!0},'// rewriteResolvFile rewrites resolv.conf file generated by docker.\nfunc rewriteResolvFile(resolvFilePath string, dns []string, dnsSearch []string, dnsOptions []string) error {\n...\n    var resolvFileContent []string\n    for _, srv := range dns {\n        resolvFileContent = append(resolvFileContent, "nameserver "+srv)\n    }\n\n    if len(dnsSearch) > 0 {\n        resolvFileContent = append(resolvFileContent, "search "+strings.Join(dnsSearch, " "))\n    }\n\n    if len(dnsOptions) > 0 {\n        resolvFileContent = append(resolvFileContent, "options "+strings.Join(dnsOptions, " "))\n    }\n\n    if len(resolvFileContent) > 0 {\n        resolvFileContentStr := strings.Join(resolvFileContent, "\\n")\n        resolvFileContentStr += "\\n"\n\n        glog.V(4).Infof("Will attempt to re-write config file %s with: \\n%s", resolvFilePath, resolvFileContent)\n        if err := rewriteFile(resolvFilePath, resolvFileContentStr); err != nil {\n            glog.Errorf("resolv.conf could not be updated: %v", err)\n            return err\n        }\n    }\n\n    return nil\n}\n')),(0,o.kt)("p",null,"\u9019\u908a\u4e5f\u4e0d\u80fd\u7406\u89e3\uff0c\u5c31\u662f\u6839\u64da\u4e4b\u524d\u5b58\u653e\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"podSandboxConfig.DnsConfig")," \u5167\u5404\u5f0f\u5404\u6a23\u95dc\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS")," \u7684\u8a2d\u5b9a\u7d44\u5408\u8d77\u4f86\uff0c\u7136\u5f8c\u76f4\u63a5\u8986\u84cb\u6389\u672c\u4f86\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),"."),(0,o.kt)("h1",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,o.kt)("p",null,"\u5230\u9019\u908a\uff0c\u6211\u5011\u5df2\u7d93\u628a\u6574\u500b\u554f\u984c\u7d66\u91d0\u6e05\u4e00\u534a\u4e86"),(0,o.kt)("p",null,"\u91cd\u65b0\u770b\u4e00\u6b21\u4e4b\u524d\u7684\u7d50\u8ad6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u6703\u5148\u5617\u8a66\u4f7f\u7528\u7bc0\u9ede\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u7684\u8cc7\u6599\uff0c\u4f46\u662f\u82e5\u767c\u73fe ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u662f\u7a7a\u7684\uff0c\u9019\u6642\u5019\u5c31\u6703\u53bb\u4f9d\u8cf4 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerd")," \u5e6b\u5fd9\u7522\u751f\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")),(0,o.kt)("p",null,"\u6211\u5011\u7684\u63a8\u8ad6\u8ddf\u6211\u5011\u7a0b\u5f0f\u78bc\u89c0\u5bdf\u7684\u7d50\u679c\u662f\u5b8c\u5168\u543b\u5408\u7684\uff0c\u518d ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsPolicy=default")," \u7684\u524d\u63d0\u4e0b\uff0c\u53ea\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," \u53ea\u8981\u80fd\u5920\u7372\u5f97\u5408\u6cd5\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u5c31\u6703\u4f7f\u7528\uff0c\u5426\u5247\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docekr container")," \u6240\u5275\u9020\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),"."),(0,o.kt)("p",null,"\u4f46\u662f\u9019\u908a\u9084\u6709\u7559\u4e0b\u4e00\u500b\u8b0e\u9ede\uff0c\u5230\u5e95 ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerd")," \u7684\u8a2d\u5b9a\u662f\u5982\u4f55\u5f71\u97ff ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"8.8.8.8/8.8.4.4")," \u662f\u5982\u4f55\u51fa\u73fe\u7684?"),(0,o.kt)("p",null,"\u7531\u65bc\u518d\u5beb\u4e0b\u53bb\u672c\u7bc7\u6587\u7ae0\u6703\u6108\u4f86\u6108\u9577\uff0c\u6240\u4ee5\u6c7a\u5b9a\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker container")," \u76f8\u95dc\u7684\u7a0b\u5f0f\u78bc\u5206\u6790\u518d\u5beb\u4e00\u7bc7\u6587\u7ae0\u4f86\u8655\u7406\u3002"))}u.isMDXComponent=!0}}]);