"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[16087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=o,g=s["".concat(c,".").concat(k)]||s[k]||m[k]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Multus \u4e0b\u5982\u4f55\u900f\u904e network policy \u8a2d\u5b9a",authors:"hwchiu",tags:["Linux","Kubernetes"]},a=void 0,l={permalink:"/2023/12/24/multus-network-policy",source:"@site/blog/2023/12-24-multus-network-policy.md",title:"Multus \u4e0b\u5982\u4f55\u900f\u904e network policy \u8a2d\u5b9a",description:"\u7531\u65bc Multus \u4e0b\u6703\u900f\u904e\u591a\u7d44 CNI \u8b93 Pod \u5167\u53bb\u547c\u53eb\u591a\u500b CNI \u6700\u5f8c\u7522\u751f\u591a\u500b\u7db2\u5361\uff0c\u800c NetworkPolicy \u9019\u7a2e\u60c5\u6cc1\u4e0b\u5176\u5be6\u6709\u9ede\u5371\u96aa",date:"2023-12-24T00:00:00.000Z",formattedDate:"December 24, 2023",tags:[{label:"Linux",permalink:"/tags/linux"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:2.66,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"Multus \u4e0b\u5982\u4f55\u900f\u904e network policy \u8a2d\u5b9a",authors:"hwchiu",tags:["Linux","Kubernetes"]},prevItem:{title:"Nginx Proxy_Pass \u4e0d\u6703\u91cd\u65b0\u67e5\u8a62 DNS",permalink:"/2024/01/18/nginx-proxy"},nextItem:{title:"Linux Bridge MTU",permalink:"/2023/10/31/linux-brideg"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7531\u65bc Multus \u4e0b\u6703\u900f\u904e\u591a\u7d44 CNI \u8b93 Pod \u5167\u53bb\u547c\u53eb\u591a\u500b CNI \u6700\u5f8c\u7522\u751f\u591a\u500b\u7db2\u5361\uff0c\u800c NetworkPolicy \u9019\u7a2e\u60c5\u6cc1\u4e0b\u5176\u5be6\u6709\u9ede\u5371\u96aa\n\u7576\u5b89\u88dd\u7684 CNI \u6578\u91cf\u5920\u591a\u4e14\u6bcf\u500b\u90fd\u652f\u63f4\u6642\u4e5f\u6709\u53ef\u80fd\u8b93\u9019\u4e9b controller \u592a\u5fd9\n\u53e6\u5916\u5927\u90e8\u5206\u7684 Multus \u90fd\u662f\u4f7f\u7528 SRIOV, Bridge, Macvlan \u7b49\u672c\u4f86\u5c31\u6c92\u6709\u5be6\u4f5c Network Policy \u7684 CNI\uff0c\u82e5\u6709\u9700\u6c42\u6642\u5c31\u6709\u9ede\u9ebb\u7169"),(0,o.kt)("p",null,"Multus \u90a3\u6709\u76f8\u95dc\u7684\u5c08\u6848\u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u4ee5\u4e0b\u5c08\u6848\u63d0\u4f9b\u4ecb\u9762\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multi-networkpolicy"},"https://github.com/k8snetworkplumbingwg/multi-networkpolicy")),(0,o.kt)("p",null,"\u8a72\u5c08\u6848\u88ab\u7528\u65bc openshift \u74b0\u5883\u5167\uff0c\u5be6\u4f5c\u7684\u5c08\u6848(iptables)\u5982\u4e0b\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openshift/multus-networkpolicy"},"https://github.com/openshift/multus-networkpolicy")),(0,o.kt)("p",null,"\u5176\u6703\u52d5\u614b\u7684\u9032\u5165\u5230\u76ee\u6a19 Pod \u5167\u53bb\u4e0b iptables \u7684\u898f\u5247\u4f86\u63a7\u7ba1\u5c01\u5305\u7684\u9032\u51fa"),(0,o.kt)("p",null,"\u5c08\u6848\u5167\u7684 deploy.yaml \u53ef\u4ee5\u76f4\u63a5\u5b89\u88dd\uff0c\u4e0d\u904e\u4e0b\u5217\u53c3\u6578\u9700\u8981\u4fee\u6539"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539\u53c3\u6578\nargs:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'- "--host-prefix=/host"\n# uncomment this if runtime is docker\n# - "--container-runtime=docker"\n- "--network-plugins=bridge"\n- "--v=9"\n- "--container-runtime-endpoint=/run/containerd/containerd.sock"\n'))),(0,o.kt)("li",{parentName:"ol"},"\u82e5\u4e0d\u9700\u8981\u53ef\u4ee5\u79fb\u9664 custom iptavles \u76f8\u95dc\u7684 volume")),(0,o.kt)("p",null,"(1) \u7684\u90e8\u5206\u8981\u7279\u5225\u6ce8\u610f --networks-plugins=bridge \u4ee5\u53ca --container-runtime-endpoint\n\u524d\u8005\u8981\u8ddf multus \u4e32\u9023\u7684 multus \u4e00\u81f4\uff0c\u9019\u6a23\u624d\u6703\u904b\u4f5c"),(0,o.kt)("p",null,"\u63a5\u8005\u5c31\u8981\u90e8\u7f72\u5c08\u5c6c\u7684 MultiNetworkPolicy \u7684\u7269\u4ef6\uff0c\u7528\u6cd5\u8207\u50b3\u7d71\u7684 Network Policy \u4e00\u6a23"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml="},"apiVersion: k8s.cni.cncf.io/v1beta1\nkind: MultiNetworkPolicy\nmetadata:\n  name: test-network-policy\n  namespace: default\n  annotations:\n    k8s.v1.cni.cncf.io/policy-for: bridge-network\nspec:\n  podSelector:\n    matchLabels:\n      app: debug\n  policyTypes:\n  - Ingress\n  - Egress\n  ingress:\n  - from:\n    - ipBlock:\n        cidr: 10.10.0.5/24\n  egress:\n  - to:\n    - ipBlock:\n        cidr: 10.10.0.7/32\n")),(0,o.kt)("p",null,"\u8a2d\u5b9a\u5b8c\u6210\u5f8c\u5c31\u6709\u6a5f\u6703\u65bc\u7b26\u5408\u898f\u5247\u7684 container \u5167\u770b\u5230\u4e0b\u5217\u898f\u5247"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash="},'[142:11928] -A INPUT -i net1 -j MULTI-INGRESS\n[478:40152] -A OUTPUT -o net1 -j MULTI-EGRESS\n[0:0] -A MULTI-0-EGRESS -j MARK --set-xmark 0x0/0x30000\n[0:0] -A MULTI-0-EGRESS -j MULTI-0-EGRESS-0-PORTS\n[0:0] -A MULTI-0-EGRESS -j MULTI-0-EGRESS-0-TO\n[0:0] -A MULTI-0-EGRESS -m mark --mark 0x30000/0x30000 -j RETURN\n[0:0] -A MULTI-0-EGRESS -j DROP\n[0:0] -A MULTI-0-EGRESS-0-PORTS -m comment --comment "no egress ports, skipped" -j MARK --set-xmark 0x10000/0x10000\n[0:0] -A MULTI-0-EGRESS-0-TO -d 10.10.0.7/32 -o net1 -j MARK --set-xmark 0x20000/0x20000\n[0:0] -A MULTI-0-INGRESS -j MARK --set-xmark 0x0/0x30000\n[0:0] -A MULTI-0-INGRESS -j MULTI-0-INGRESS-0-PORTS\n[0:0] -A MULTI-0-INGRESS -j MULTI-0-INGRESS-0-FROM\n[0:0] -A MULTI-0-INGRESS -m mark --mark 0x30000/0x30000 -j RETURN\n[0:0] -A MULTI-0-INGRESS -j DROP\n[0:0] -A MULTI-0-INGRESS-0-FROM -s 10.10.0.0/24 -i net1 -j MARK --set-xmark 0x20000/0x20000\n[0:0] -A MULTI-0-INGRESS-0-PORTS -m comment --comment "no ingress ports, skipped" -j MARK --set-xmark 0x10000/0x10000\n[0:0] -A MULTI-EGRESS -o net1 -m comment --comment "policy:test-network-policy net-attach-def:default/bridge-network" -j MULTI-0-EGRESS\n[0:0] -A MULTI-INGRESS -i net1 -m comment --comment "policy:test-network-policy net-attach-def:default/bridge-network" -j MULTI-0-INGRESS\nCOMMIT\n')),(0,o.kt)("p",null,"\u5176\u900f\u904e mark \u7684\u65b9\u5f0f\u4f86\u6a19\u793a\u5c01\u5305\u662f\u5426\u9700\u8981\u88ab DROP\uff0c\u540c\u6642\u4e5f\u652f\u63f4\u91dd\u5c0d ip & port \u7684\u65b9\u5f0f\u53bb\u5224\u65b7"))}m.isMDXComponent=!0}}]);