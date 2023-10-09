"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[97992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d",authors:"hwchiu",tags:["Reading","Network","Linux"],description:"\u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d"},i=void 0,l={permalink:"/2021/12/08/reading-note-20",source:"@site/blog/2021-12-08-reading-note-20.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d",description:"\u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d",date:"2021-12-08T00:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Network",permalink:"/tags/network"},{label:"Linux",permalink:"/tags/linux"}],readingTime:1.92,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d",authors:"hwchiu",tags:["Reading","Network","Linux"],description:"\u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57\u300d",permalink:"/2021/12/10/reading-note-21"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cKubernetes Resource Limit/Request \u8aa4\u7528\u9020\u6210\u7684\u932f\u8aa4\u300d",permalink:"/2021/12/06/reading-note-19"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/racy-conntrack-and-dns-lookup-timeouts"},"https://www.weave.works/blog/racy-conntrack-and-dns-lookup-timeouts")),(0,a.kt)("p",null,"\u4eca\u5929\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u500b UDP \u65bc Linux Kernel \u5167\u7684 Race Condition \u554f\u984c\u3002\u9019\u554f\u984c\u6211\u4ee5\u524d\u65bc Linux Kernel 3.14 \u4e5f\u6709\u63a1\u904e\u4e00\u6a23\u7684\u96f7\uff0c\u4f46\u662f\u5230\u4eca\u65e5\u90fd\u9084\u6c92\u6709\u4e00\u500b\u5f88\u6f02\u4eae\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u9019\u908a\u5c31\u5feb\u901f\u7684\u8ddf\u5927\u5bb6\u4ecb\u7d39\u4e00\u4e0b\u9019\u500b\u554f\u984c>\n\u662f\u4ec0\u9ebc\uff0c\u4ee5\u53ca\u8ddf k8s \u6709\u4ec0\u9ebc\u95dc\u4fc2"),(0,a.kt)("h1",{id:"\u767c\u751f\u524d\u63d0"},"\u767c\u751f\u524d\u63d0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 UDP \u9019\u7a2e\u6c92\u6709\u91cd\u9001\u6a5f\u5236\u7684\u5354\u5b9a"),(0,a.kt)("li",{parentName:"ol"},"Kernel \u6709\u958b\u555f conntrack \u6b64\u529f\u80fd")),(0,a.kt)("h1",{id:"\u767c\u751f\u689d\u4ef6"},"\u767c\u751f\u689d\u4ef6"),(0,a.kt)("p",null,"\u76f8\u540c\u7684 Client \u77ed\u6642\u9593\u5167\u900f\u904e UDP (\u4e5f\u8a31\u662f\u4e0d\u540c thread) \u9001\u51fa\u5169\u500b UDP \u5c01\u5305\u5230\u5916\u9762\uff0c\u5c0d\u65bc Linux Kernel \u4f86\u8aaa\uff0c\u6703\u5e0c\u671b\u900f\u904e conntrack \u4f86\u8ffd\u8e64\u6bcf\u4e00\u689d\u9023\u7dda\uff0c\u4f46\u662f\u5e95\u5c64\u5efa\u7acb\u7684\u6642\u5019\u6703\u6709\u4e00\u4e9b\u6703\u6709\u4e00\u4e9b\u6a5f\u5236\uff0c\u56e0\u6b64\u7576\u5169\u500b\u5c01\n\u5305\u540c\u6642\u9032\u5165\u7684\u6642\u5019\uff0c\u6709\u53ef\u80fd\u5c31\u6703\u56e0\u70ba\u5148\u5f8c\u9806\u5e8f\u5c0e\u81f4\u7b2c\u4e8c\u500b\u5c01\u5305\u88ab\u4e1f\u68c4"),(0,a.kt)("h1",{id:"\u53ef\u80fd\u767c\u751f\u554f\u984c"},"\u53ef\u80fd\u767c\u751f\u554f\u984c"),(0,a.kt)("p",null,"DNS \u7684\u8acb\u6c42\u5c01\u5305\u9810\u8a2d\u60c5\u6cc1\u4e0b\u6703\u540c\u6642\u900f\u904e UDP \u9001\u51fa A & AAAA \u5169\u500b\u5c01\u5305\uff0c\u800c\u9019\u5169\u500b\u5c01\u5305\u5982\u679c\u5f88\u5de7\u7684\u63a1\u5230\u9019\u500b\u60c5\u6cc1\uff0c\u7136\u5f8c\u4f60\u7684 A \u5c01\u5305\u5c31\u6c92\u6709\u8fa6\u6cd5\u9806\u5229\u89e3\u51fa DNS\uff0c\u6700\u5f8c\u5c31\u8981\u7b49\u4e94\u79d2\u7684 timeout \u4f86\u91cd\u65b0\u767c\u9001\n\u4e0b\u504f\u9019\u7bc7\u6587\u7ae0\u5c31\u662f weave works \u9047\u5230 DNS 5\u79d2 timeout \u7684\u554f\u984c\uff0c\u7136\u5f8c\u4ed4\u7d30\u7684\u5c07\u6211\u4e0a\u9762\u6240\u5beb\u7684\u7e3d\u7d50\u7d66\u89e3\u91cb\u6e05\u695a\uff0c\u6bcf\u4e00\u500b\u6b65\u9a5f\u767c\u751f\u4ec0\u9ebc\u4e8b\u60c5\uff0c\u4ec0\u9ebc\u662f conntrack \u4ee5\u53ca\u66ab\u6642\u7684 workaround \u662f\u4ec0\u9ebc\n\u4e4b\u5f8c\u6703\u5728\u8ddf\u5927\u5bb6\u5206\u4eab\u76ee\u524d\u4e00\u4e9b\u89e3\u6c7a\u65b9\u6cd5\u600e\u9ebc\u505a"))}m.isMDXComponent=!0}}]);