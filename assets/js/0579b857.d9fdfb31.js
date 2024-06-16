"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[69171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=i(n),k=l,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const a={title:"Nginx Reverse Proxy \u7684 DNS Issue",keywords:["Kubernetes","Network","Linux","Ubuntu"],tags:["Kubernetes","DevOps","Linux"],description:"\u8a18\u9304\u4e00\u4e0b\u7576 Nginx \u642d\u914d K8s headless \u6642\u6703\u51fa\u73fe\u7684 \u5b58\u53d6\u554f\u984c",image:"./assets/r1W_Ac5Ya.png"},s=void 0,o={unversionedId:"2024/nginx-dns",id:"2024/nginx-dns",title:"Nginx Reverse Proxy \u7684 DNS Issue",description:"\u8a18\u9304\u4e00\u4e0b\u7576 Nginx \u642d\u914d K8s headless \u6642\u6703\u51fa\u73fe\u7684 \u5b58\u53d6\u554f\u984c",source:"@site/docs/2024/nginx-dns.md",sourceDirName:"2024",slug:"/2024/nginx-dns",permalink:"/docs/2024/nginx-dns",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedBy:"HungWei Chiu",frontMatter:{title:"Nginx Reverse Proxy \u7684 DNS Issue",keywords:["Kubernetes","Network","Linux","Ubuntu"],tags:["Kubernetes","DevOps","Linux"],description:"\u8a18\u9304\u4e00\u4e0b\u7576 Nginx \u642d\u914d K8s headless \u6642\u6703\u51fa\u73fe\u7684 \u5b58\u53d6\u554f\u984c",image:"./assets/r1W_Ac5Ya.png"},sidebar:"techPost",previous:{title:"\u4f7f\u7528 Cluster Capacity \u4f86\u9810\u89bd Pod \u7684\u90e8\u7f72\u60c5\u6cc1",permalink:"/docs/2024/cluster-capacity"},next:{title:"2024 Taiwan SRE Summit Workshop \u7684\u5fc3\u8def\u6b77\u7a0b",permalink:"/docs/2024/sre-2024-workshop"}},p={image:n(39113).Z},i=[{value:"\u89e3\u6cd5\u4e00",id:"\u89e3\u6cd5\u4e00",level:2},{value:"\u89e3\u6cd5\u4e8c",id:"\u89e3\u6cd5\u4e8c",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u8a18\u9304\u4f7f\u7528 Nginx \u4f5c\u70ba Reverse Proxy \u9047\u5230\u7684 DNS \u554f\u984c\uff0c\u8a72\u554f\u984c\u4e3b\u8981\u662f Nginx \u4f7f\u7528 DNS \u4f86\u9023\u63a5\u5f8c\u65b9\u7684\u670d\u52d9\u5668\uff0c\u4f46\u662f\u7576 DNS \u5167\u5bb9\u66f4\u65b0\u6642\nNginx \u4e26\u6c92\u6709\u91cd\u65b0\u53cd\u67e5\u8a72 DNS \u53d6\u5f97\u6700\u65b0\u7684\u7d50\u679c\uff0c\u8a72\u7d50\u679c\u6700\u5f8c\u5c0e\u81f4\u6240\u6709 Client \u7684\u9023\u7dda\u90fd\u6703\u88ab\u9001\u5f80\u820a\u7684 DNS \u7d00\u9304\uff0c\u6700\u5f8c\u7522\u751f Timeout\u3002\n\u6587\u7ae0\u5c07\u5c31\u9019\u500b\u6d41\u7a0b\u5617\u8a66\u6aa2\u8996\u5176\u539f\u56e0\u4e26\u4e14\u63a2\u8a0e\u76ee\u524d\u7684\u89e3\u6cd5"),(0,l.kt)("h1",{id:"\u74b0\u5883\u5efa\u7f6e"},"\u74b0\u5883\u5efa\u7f6e"),(0,l.kt)("p",null,"\u70ba\u4e86\u7c21\u5316\u6574\u500b DNS \u7684\u64cd\u4f5c\u8207\u8a2d\u5b9a\uff0c\u56e0\u6b64\u4f7f\u7528 Kubernetes \u4f86\u642d\u5efa\u6e2c\u8a66\u74b0\u5883\uff0c\u6574\u500b\u74b0\u5883\u5982\u4e0b\u5716"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(36111).Z,width:"896",height:"366"}),"\n\u8a3b: \u9019\u908a\u7684 Nginx \u5c31\u662f\u55ae\u7d14\u7684 Nginx \u670d\u52d9\uff0c\u672c\u8eab\u4e26\u6c92\u6709\u727d\u626f\u5230\u4efb\u4f55 Ingress Controller \u7684\u90e8\u5206"),(0,l.kt)("p",null,"\u8a72\u74b0\u5883\u7e3d\u5171\u6703\u90e8\u7f72\u4e09\u7a2e\u670d\u52d9\uff0c\u5206\u5225\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Backend: \u4e00\u500b\u57fa\u65bc python \u7684\u7db2\u9801\u4f3a\u670d\u5668\uff0c\u4ee3\u8868\u5f8c\u7aef\u7684\u670d\u52d9\uff0c\u672c\u8eab\u6703\u90e8\u7f72\u591a\u500b\u526f\u672c"),(0,l.kt)("li",{parentName:"ol"},"Client: \u5617\u8a66\u900f\u904e Nginx \u5b58\u53d6\u5230\u5f8c\u65b9 Backend \u7684\u5ba2\u6236"),(0,l.kt)("li",{parentName:"ol"},"Nginx: \u6703\u900f\u904e Proxy \u7684\u65b9\u5f0f\u5c07\u5f9e Client \u6536\u5230\u7684\u8acb\u6c42\u90fd\u8f49\u767c\u5230\u5f8c\u65b9 Backend")),(0,l.kt)("p",null,"\u5982\u4e0a\u65b9\u6240\u8ff0\uff0c\u70ba\u4e86\u7c21\u5316 DNS \u7684\u8a2d\u5b9a\uff0c\u9019\u908a\u63a1\u7528 Kubernetes Service \u7684\u65b9\u5f0f\u4f86\u7522\u751f\u4e00\u500b DNS \u7d00\u9304\u4e26\u4e14\u5c0d\u61c9\u5230\u9019\u56db\u500b Pod"),(0,l.kt)("p",null,"\u8a3b: \u672c\u6b21\u7684\u554f\u984c\u5fc5\u9808\u8981\u4f7f\u7528 Headless \u624d\u6703\u89f8\u767c\uff0c\u82e5\u4f7f\u7528 ClusterIP \u5247\u6c92\u6709\u4efb\u4f55\u554f\u984c\uff0c\u4e3b\u8981\u662f ClusterIP \u7684\u6a21\u5f0f\u4e0b\uff0c\u8a72 ClusterIP \u4e26\u4e0d\u6703\u56e0\u70ba Pod \u91cd\u555f\u800c\u6709\u4efb\u4f55\u8b8a\u5316\uff0c\u56e0\u6b64\u5c0d\u65bc Nginx \u89d2\u5ea6\u4f86\u770b\u5247\u6c92\u6709\u4efb\u4f55\u8b8a\u5316"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u6982\u5ff5\u642d\u914d\u5be6\u969b IP/DNS \u5f8c\u5be6\u969b\u72c0\u6cc1\u5982\u4e0b\n",(0,l.kt)("img",{alt:"image",src:n(39113).Z,width:"896",height:"366"})),(0,l.kt)("p",null,"Backend \u7684\u76f8\u95dc\u8cc7\u6e90\n",(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ryNXJiqFT.png",alt:"CleanShot 2024-01-21 at 21.41.24"})),(0,l.kt)("p",null,"Nginx \u7684\u8a2d\u5b9a\n",(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/rJbaRc5FT.png",alt:"CleanShot 2024-01-21 at 21.40.03"})),(0,l.kt)("p",null,"Client \u5617\u8a66\u5b58\u53d6 Nginx \u7684\u7d50\u679c\n",(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ByFkks9Fp.png",alt:"CleanShot 2024-01-21 at 21.40.29"})),(0,l.kt)("h1",{id:"\u554f\u984c\u6a21\u64ec"},"\u554f\u984c\u6a21\u64ec"),(0,l.kt)("p",null,"\u5982\u958b\u982d\u6240\u8ff0\uff0c\u554f\u984c\u662f\u767c\u751f\u65bc DNS \u5167\u5bb9\u6709\u4efb\u4f55\u66f4\u52d5\u6642\uff0c\u76ee\u524d\u67e5\u8a62 ",(0,l.kt)("inlineCode",{parentName:"p"},"python-www")," \u7684\u7d50\u679c\u662f\u53cd\u6620\u7576\u524d\u56db\u500b backend pod \u7684 IP\uff0c\u5167\u5bb9\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash="},"$ nslookup python-www\nServer:         10.96.0.10\nAddress:        10.96.0.10#53\n\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.159\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.162\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.158\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.160\n")),(0,l.kt)("p",null,"\u9019\u6642\u5019\u5617\u8a66\u5c07\u56db\u500b Pod \u90fd\u91cd\u555f\uff0c\u4e26\u4e14\u89c0\u5bdf DNS \u7684\u56de\u61c9\u662f\u5426\u6709\u6539\u8b8a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash="},"ubuntu@hwchiu:~$ kubectl rollout restart deploy python-www\ndeployment.apps/python-www restarted\n\n---\n\n$ nslookup python-www\nServer:         10.96.0.10\nAddress:        10.96.0.10#53\n\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.164\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.166\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.165\nName:   python-www.default.svc.cluster.local\nAddress: 192.168.215.163\n")),(0,l.kt)("p",null,"\u7576 DNS \u6539\u8b8a\u5f8c\uff0c\u9019\u6642\u5019 Client \u518d\u5ea6\u5617\u8a66\u900f\u904e nginx \u5b58\u53d6\u770b\u770b\u5f8c\u7aef\u670d\u52d9"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/rJOqgoqKp.png",alt:"CleanShot 2024-01-21 at 21.47.51"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u9019\u6642\u5f8c curl \u5c31\u6703\u6c92\u6709\u4efb\u4f55\u53cd\u61c9\u76f4\u5230 timeout\u3002"),(0,l.kt)("h1",{id:"\u554f\u984c\u7814\u7a76"},"\u554f\u984c\u7814\u7a76"),(0,l.kt)("p",null,"\u8a72\u554f\u984c\u5f9e Kubernetes \u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u5df2\u7d93\u6709\u6b63\u78ba\u7684\u66f4\u65b0 DNS \u5167\u5bb9\uff0c\u82e5\u4e0d\u900f\u904e Nginx \u90fd\u662f\u53ef\u4ee5\u6b63\u5e38\u5b58\u53d6\u5f8c\u65b9\u9019\u4e9b\u670d\u52d9\u7684\uff0c\u56e0\u6b64\u554f\u984c\u4e3b\u8981\u662f Nginx \u5feb\u53d6\u4e86\u9019\u4e9b DNS \u7684\u7d50\u679c\uff0c\u4e26\u4e14\u7576 DNS \u6709\u8b8a\u52d5\u6642\uff0c\u4e26\u6c92\u6709\u5617\u8a66\u91cd\u65b0\u89e3\u6790\u3002"),(0,l.kt)("p",null,"\u4ee5 Nginx \u4f86\u8aaa\uff0c\u4ee5\u6211\u4f7f\u7528\u7684\u7248\u672c 1.10.3 \u70ba\u4f8b\uff0c\u4e14\u4f7f\u7528\u7684\u662f\u4e0b\u5217\u8a2d\u5b9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        location / {\n                proxy_pass http://python-www:8000;\n        }\n")),(0,l.kt)("p",null,"\u9019\u908a\u900f\u904e tcpdump \u53bb\u89c0\u6e2c\u7576 nginx server \u88ab\u53eb\u8d77\u4f86\u77ac\u9593\u6642\u7684\u7db2\u8def\u6d41\u91cf\uff0c\u900f\u904e port 53 \u53bb\u904e\u6ffe DNS \u5c01\u5305\uff0c\u7d50\u679c\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ryqsWicFa.png",alt:"CleanShot 2024-01-21 at 21.52.00"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\u7576 Nginx \u4f3a\u670d\u5668\u8d77\u4f86\u6642\uff0c\u53ef\u4ee5\u99ac\u4e0a\u89c0\u5bdf\u5230 DNS \u7684\u8acb\u6c42\u53bb\u5617\u8a66\u89e3\u6790 ",(0,l.kt)("inlineCode",{parentName:"p"},"python-www"),' \uff0c\u56e0\u70ba\u8a72\u74b0\u5883\u662f\u8655\u65bc Kubernetes Pod \u4e0a\uff0c\u6240\u4ee5\u6703\u6709\u984d\u5916\u7684 search \u4f86\u52a0\u5165\u5f8c\u9762\u7684 "default.svc.cluster.local."\u3002'),(0,l.kt)("p",null,"\u4fdd\u6301 tcpdump \u4e0d\u95dc\u7684\u60c5\u6cc1\u4e0b\uff0c\u9019\u6642\u5019\u8b93 Client \u5617\u8a66\u53bb\u767c\u9001\u5c01\u5305\uff0c\u6216\u662f\u91cd\u555f\u56db\u500b Pod \u4f86\u6539\u8b8a\u56db\u500b DNS \u7684\u7d50\u679c\uff0c\u6703\u767c\u73fe\u518d\u4e5f\u6c92\u6709\u770b\u5230\u4efb\u4f55\u65b0\u7684 DNS \u5c01\u5305\u3002"),(0,l.kt)("p",null,"\u5f9e\u9019\u908a\u7684\u5c01\u5305\u884c\u70ba\u53ef\u4ee5\u63a8\u8ad6\u51fa\u8a72\u76ee\u524d\u8a2d\u5b9a\u4e0b\u7684 Nginx \u5176\u904b\u4f5c\u884c\u70ba\u662f\uff0c\u7576 Nginx Server \u88ab\u53eb\u8d77\u4f86\u7684\u77ac\u9593\uff0c\u5c31\u6703\u53bb\u89e3\u6790\u8a2d\u5b9a\u6a94\u6848\u4e26\u4e14\u91dd\u5c0d DNS \u7684\u90e8\u5206\u53bb\u89e3\u6790\uff0c\u5f8c\u7e8c\u5247\u4e0d\u6703\u91cd\u65b0\u89e3\u6790\uff0c\u56e0\u6b64\u82e5\u65e5\u5f8c DNS \u6709\u4efb\u4f55\u66f4\u52d5\u7684\u8a71\uff0c Nginx \u90fd\u6703\u5b58\u53d6\u5230\u820a\u7684\u5167\u5bb9\u9020\u6210\u9023\u7dda timeout"),(0,l.kt)("h1",{id:"\u554f\u984c\u89e3\u6cd5"},"\u554f\u984c\u89e3\u6cd5"),(0,l.kt)("h2",{id:"\u89e3\u6cd5\u4e00"},"\u89e3\u6cd5\u4e00"),(0,l.kt)("p",null,"\u5982\u679c Nginx \u662f\u555f\u52d5\u77ac\u9593\u53bb\u89e3\u6790\u7684\uff0c\u90a3\u5c31\u53ef\u4ee5\u900f\u904e reload(nginx -s reload) \u7684\u65b9\u5f0f\u8b93 Nginx \u91cd\u65b0\u89e3\u6790\uff0c\u6e2c\u8a66\u7d50\u679c\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SJkP8jqFp.png",alt:"CleanShot 2024-01-21 at 22.12.13"})),(0,l.kt)("p",null,"\u9019\u6642\u5019 client \u53c8\u53ef\u4ee5\u9806\u5229\u89e3\u6790\u4e86\uff0c\u4f46\u662f\u9019\u7a2e\u65b9\u5f0f\u5be6\u52d9\u4e0a\u4e0d\u592a\u65b9\u4fbf\uff0c\u7562\u7adf\u5c0d nginx \u4f86\u8aaa\u5f88\u96e3\u611f\u77e5\u5230\u4ec0\u9ebc\u6642\u5019\u662f\u9700\u8981 reload\u7684\uff0c\u56e0\u6b64\u5be6\u52d9\u4e0a\u4e26\u4e0d\u662f\u4e00\u500b\u5f88\u65b9\u4fbf\u7684\u89e3\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u89e3\u6cd5\u4e8c"},"\u89e3\u6cd5\u4e8c"),(0,l.kt)("p",null,"\u6b64\u554f\u984c\u7db2\u8def\u4e0a\u5df2\u7d93\u6709\u773e\u591a\u8a0e\u8ad6\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u500b\u6bd4\u8f03\u901a\u4fd7\u7684\u89e3\u6cd5\u5c31\u662f\u900f\u904e\u8b8a\u6578\u7684\u65b9\u5f0f\u5e36\u5165\u5230 proxy_pass \u5167\uff0c\u900f\u904e\u4e00\u4e9b\u4e0d\u540c\u7684\u8a2d\u5b9a\u65b9\u5f0f\u53ef\u4ee5\u8feb\u4f7f Nginx \u6bcf\u6b21\u5efa\u7acb\u65b0\u9023\u7dda\u524d\u90fd\u6703\u900f\u904e DNS \u53bb\u89e3\u6790\u4e00\u6b21\uff0c\u900f\u904e\u9019\u7a2e\u65b9\u5f0f\u5c31\u4e0d\u5fc5\u64d4\u5fc3 DNS \u8b8a\u52d5\u5e36\u4f86\u7684 timeout \u554f\u984c\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7684\u65b9\u5f0f\u9700\u8981\u642d\u914d resolver \u4ee5\u53ca set \u7b49\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n        location / {\n                resolver 10.96.0.10;\n                set $target http://python-www;\n                proxy_pass $target:8000;\n        }          \n")),(0,l.kt)("p",null,"\u7576 nginx \u4ee5\u6b64\u65b9\u5f0f\u914d\u7f6e\u5f8c\uff0c\u900f\u904e tcpdump \u53ef\u89c0\u5bdf\u5230\u6bcf\u6b21\u6709\u65b0\u7684\u9023\u7dda\u6642\u90fd\u6703\u6709\u9023\u7dda\uff0c\u4f46\u662f\u9019\u6642\u5019 client \u537b\u770b\u5230\u6eff\u6eff\u7684 timeout"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ryXLuoqtT.png",alt:"CleanShot 2024-01-21 at 22.20.19"})),(0,l.kt)("p",null,"\u5f9e\u4e0a\u8ff0\u622a\u5716\u53ef\u4ee5\u770b\u5230 DNS \u7684 request \u5167\u5bb9\u4e26\u6c92\u6709\u4e4b\u524d search \u6dfb\u52a0\u7684\u90a3\u4e9b\u6b04\u4f4d\uff0c\u800c\u662f\u4e00\u500b\u57fa\u65bc FQDN \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"python-www."),"\uff0c\u56e0\u6b64\u9019\u7a2e\u60c5\u6cc1\u4e0b Kubernetes \u5167\u5c31\u6c92\u6709\u8fa6\u6cd5\u9806\u5229\u89e3\u6790\u4e26\u4e14\u56de\u61c9"),(0,l.kt)("p",null,"Kubernetes \u5167\u7684\u6b63\u78ba\u4f7f\u7528\u65b9\u5f0f\u9700\u8981\u5c07\u8a72\u8b8a\u6578\u8a2d\u5b9a\u70ba\u5b8c\u6574\u7684 FQDN\uff0c\u7bc4\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        location / {\n                resolver 10.96.0.10;\n                set $target http://python-www.default.svc.cluster.local;\n                proxy_pass $target:8000;\n        }\n")),(0,l.kt)("p",null,"\u6539\u6210\u9019\u7a2e\u60c5\u6cc1\u5f8c Client \u5c31\u53ef\u4ee5\u9806\u5229\u5b58\u53d6\u3002"),(0,l.kt)("h1",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u82e5\u8981\u65bc Nginx \u5167\u4f7f\u7528 proxy_pass \u642d\u914d DNS \u5b58\u53d6\u670d\u52d9\u7684\u8a71\uff0c\u8981\u7279\u5225\u6ce8\u610f\u4f7f\u7528\u65b9\u5f0f\uff0c\u5426\u5247 DNS \u7684\u56de\u61c9\u82e5\u6539\u8b8a\u6642\u5247 Nginx \u6703\u4fdd\u7559\u820a\u7684\u8cc7\u6599\u5c0e\u81f4\u6240\u6709\u65b0\u9023\u7dda\u90fd\u6703\u7121\u6cd5\u5b58\u53d6\u6700\u5f8c timeout"),(0,l.kt)("li",{parentName:"ol"},"Kubernetes \u5167\u53ea\u8981\u4f7f\u7528 nginx + headless \u5c31\u6709\u6a5f\u6703\u8e29\u5230\u6b64\u554f\u984c"),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u900f\u904e\u5b9a\u671f reload \u6216\u662f\u63a1\u7528\u8b8a\u6578\u7684\u65b9\u5f0f\u4f86\u5f37\u8feb nginx \u91dd\u5c0d\u6bcf\u6b21\u9023\u7dda\u90fd\u53bb\u67e5\u8a62 DNS"),(0,l.kt)("li",{parentName:"ol"},'\u63a1\u7528\u8b8a\u6578\u65b9\u5f0f\u7684\u8a71\uff0cnginx \u6703\u5c07\u8b8a\u6578\u6240\u8a2d\u5b9a\u7684\u540d\u7a31\u4ee5 FQDN \u7684\u5f62\u5f0f\u53bb\u67e5\u8a62\uff0c\u9019\u6a23\u5c31\u6c92\u6709\u8fa6\u6cd5\u4f7f\u7528\u5230 Kubernetes Pod \u5167\u7684 search \u6b04\u4f4d\uff0c\u9019\u6703\u5c0e\u81f4 DNS \u67e5\u8a62\u5931\u6557\uff0c\u56e0\u6b64\u8981\u4f7f\u7528\u6642\u5fc5\u9808\u8981\u4f7f\u7528\u5b8c\u6574\u540d\u7a31\uff0c\u52a0\u4e0a\u5982 "svc.cluster.local"(\u5be6\u969b\u5167\u5bb9\u5247\u4f9d\u7167 cluster \u90e8\u7f72\u65b9\u5f0f\u6703\u6709\u4e0d\u540c\u7684\u540d\u7a31)')),(0,l.kt)("h1",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://rajrajhans.com/2022/06/force-dns-resolution-nginx-proxy/"},"https://rajrajhans.com/2022/06/force-dns-resolution-nginx-proxy/"))))}d.isMDXComponent=!0},36111:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/r1TOc9cKp-f0427aa4b098b390fca2a344cd87fbe3.png"},39113:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/r1W_Ac5Ya-f85834661619875e1defbfe8916ac7bc.png"}}]);