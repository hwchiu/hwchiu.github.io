"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[48999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"[Switchdev] How Kernel Implement SwitchDev(i)",date:"2016-04-04 07:01",tags:["Linux","System","Kernel","Switchdev","Network"],description:"\u63a2\u8a0e Kernel \u5982\u4f55\u5be6\u4f5c SwitchDev (I)"},l=void 0,o={unversionedId:"2016/switchdev-ii",id:"2016/switchdev-ii",title:"[Switchdev] How Kernel Implement SwitchDev(i)",description:"\u63a2\u8a0e Kernel \u5982\u4f55\u5be6\u4f5c SwitchDev (I)",source:"@site/docs/2016/switchdev-ii.md",sourceDirName:"2016",slug:"/2016/switchdev-ii",permalink:"/docs/2016/switchdev-ii",draft:!1,tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"System",permalink:"/docs/tags/system"},{label:"Kernel",permalink:"/docs/tags/kernel"},{label:"Switchdev",permalink:"/docs/tags/switchdev"},{label:"Network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"[Switchdev] How Kernel Implement SwitchDev(i)",date:"2016-04-04 07:01",tags:["Linux","System","Kernel","Switchdev","Network"],description:"\u63a2\u8a0e Kernel \u5982\u4f55\u5be6\u4f5c SwitchDev (I)"},sidebar:"techPost",previous:{title:"[Switchdev] Introduuction To Switchdev",permalink:"/docs/2016/switchdev-i"},next:{title:"[Switchdev] How Kernel Implement SwitchDev(ii)",permalink:"/docs/2016/switchdev-iii"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Header",id:"header",level:2},{value:"Linux Netowrk Function Integration",id:"linux-netowrk-function-integration",level:3},{value:"SwtichDev Implemnetation####",id:"swtichdev-implemnetation",level:3},{value:"implementation",id:"implementation",level:2},{value:"Linux Netowrk Function Integration",id:"linux-netowrk-function-integration-1",level:3},{value:"SwtichDev Implementation",id:"swtichdev-implementation",level:3},{value:"Switch Driver Implementation",id:"switch-driver-implementation",level:3}],u={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"  \u6b64\u7bc7\u6587\u7ae0\u7528\u4f86\u8aaa\u660e\u5728\u7576\u524d kernel \u4e2d, switchdev \u76f8\u95dc\u7684\u6a94\u6848\u6709\u54ea\u4e9b\uff0c\u54ea\u4e9b\u662f switchdev \u7684\u6838\u5fc3\uff0c\u54ea\u4e9b\u662f\u8207\u539f\u5148\u7684 linux kernel \u6574\u5408\uff0c\u540c\u6642\u7c21\u8ff0\u4e00\u4e0b\u5404\u6574\u5408\u7684\u7528\u9014\u70ba\u4f55\u3002"),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"  switchdev \u5728 kernel \u4e2d\u7684\u6a94\u6848\u67b6\u69cb\u5982\u4e0b"),(0,r.kt)("h2",{id:"header"},"Header"),(0,r.kt)("h3",{id:"linux-netowrk-function-integration"},"Linux Netowrk Function Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"include/net/dsa.h"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9019\u500b\u662f ",(0,r.kt)("strong",{parentName:"p"},"Distributed Switch Architecture"),", \u65bc 2015 \u5e74\u6b64 commit(b73adef) \u5c07 switchdev \u7d66\u6574\u5408\u9032\u4f86")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6839\u64da 2008 \u7684\u7b2c\u4e00\u7b46 commit log \u4f86\u770b, DSA\u662f\u7528\u4f86\u63a7\u5236 hardware switch chips \u7684\u5354\u5b9a\uff0c\u4e0d\u904e\u5927\u90e8\u5206\u7684\u529f\u80fd\u90fd\u662f\u5728 2014 \u5e74\u5f8c\u624d\u6162\u6162\u5be6\u4f5c\uff0c\u76ee\u524d\u9084\u7121\u6cd5\u78ba\u8a8d\u6b64\u5354\u5b9a\u80fd\u5920\u505a\u4ec0\u9ebc"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Distributed Switch Architecture is a protocol for managing hardware\nswitch chips.  It consists of a set of MII management registers and\ncommands to configure the switch, and an ethernet header format to\nsignal which of the ports of the switch a packet was received from\nor is intended to be sent to."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"include/inux/netdevice.h"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"net_device \u7528\u4f86\u4ee3\u8868\u6574\u500b kernel \u4e2d\u6240\u6709\u7684\u7db2\u8def\u88dd\u7f6e\uff0c\u5305\u542b\u4e86\u5e38\u898b\u7684 network interface."),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u91dd\u5c0d net_device \u9019\u500b\u7d50\u69cb\u9032\u884c\u64f4\u5145\uff0c\u52a0\u4e0a\u8207 swticdev \u7684\u6574\u5408\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u52a0\u4e0a switchdev_ops \u4f86\u63d0\u4f9b\u76f8\u95dc\u7684 operation"),(0,r.kt)("li",{parentName:"ol"},"\u52a0\u4e0a offload_fwd_mark \u4f86\u907f\u514d\u5df2\u7d93\u88ab offload \u7684 packet \u518d\u6b21\u88ab forward.")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c="},"const struct switchdev_ops *switchdev_ops;\nu32                     offload_fwd_mark;\n")),(0,r.kt)("h3",{id:"swtichdev-implemnetation"},"SwtichDev Implemnetation####"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"include/net/switchdev.h",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"switchdev.h \u5305\u542b\u4e86\u6240\u6709\u7684 struct, function, \u8981\u77ad\u89e3 switchdev \u7684\u6838\u5fc3\u5c31\u5fc5\u9808\u8981\u770b\u6b64\u6a94\u6848")))),(0,r.kt)("h2",{id:"implementation"},"implementation"),(0,r.kt)("h3",{id:"linux-netowrk-function-integration-1"},"Linux Netowrk Function Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"net/8021q/vlan_dev.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u82e5\u5e95\u4e0b\u7684 bridge port \u662f\u500b vlan interface \u7684\u8a71\uff0c\u70ba\u4e86\u8981\u80fd\u5920\u53d6\u5f97\u5176 static FDB \u4ee5\u53ca port \u76f8\u95dc\u7684\u72c0\u614b\uff0c\u5728 net_device_ops \u4e2d\u628a\u76f8\u95dc\u7684 operation handler \u90fd\u8a2d\u5b9a\u70ba switchdev \u7684 function."))),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_fdb.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_if.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_mdb.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_stp.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_stp_if.c"),(0,r.kt)("li",{parentName:"ul"},"net/bridge/br_vlan.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u6240\u6709 bridge \u76f8\u95dc\u7684\u6539\u52d5\u90fd\u662f\u8981\u5c07 hardware switch \u7684 l2 offload \u8207 linux kernel \u7d66\u6574\u5408\uff0c\u5305\u542b\u4e86 STP/FDB/vlan/MDB \u7684\u8b8a\u52d5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7576\u5e95\u4e0b hardware switch \u6709\u4efb\u4f55\u8b8a\u52d5\u6642\uff0c\u90fd\u5fc5\u9808\u8981\u4e3b\u52d5\u901a\u77e5 kernel \u5167\u7684 bridge function \u4f86\u8655\u7406\u3002"))),(0,r.kt)("li",{parentName:"ul"},"net/core/net-sysfs.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"export \u4e00\u500b\u65b0\u7684 interface /sys/class/net/$iface/phys_switch_id",(0,r.kt)("strong",{parentName:"li"},", \u53ef\u7528\u4f86\u77e5\u9053 "),"iface** \u6b64 port \u6240\u5c6c\u7684 hardware switch ID"))),(0,r.kt)("li",{parentName:"ul"},"net/core/rtnetlink.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u7a2e rtnl type ",(0,r.kt)("strong",{parentName:"li"},"IFLA_PHYS_SWITCH_ID"),", \u53ef\u7528\u4f86\u7372\u5f97\u7279\u5b9a netdevice \u6240\u5c6c\u7684 switch id\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("strong",{parentName:"li"},"iproute2")," \u4e5f\u52a0\u5165\u4e86\u6b64 type \u7684\u652f\u63f4\uff0c\u610f\u5473\u8005 user space \u7684 tool \u4e5f\u4e00\u4f75\u652f\u63f4\u6b64\u529f\u80fd\u4e86\u3002"))),(0,r.kt)("li",{parentName:"ul"},"net/dsa/slave.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For DSA \u4f7f\u7528\uff0c\u4e0d\u719f\u6240\u4ee5\u5ffd\u7565"))),(0,r.kt)("li",{parentName:"ul"},"net/ipv4/fib_trie.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07 ipv4 \u7684 FIB forwarding \u8207 hardware switch \u6574\u5408\uff0c\u7576 kernel \u5167\u95dc\u65bc FIB \u6709\u4efb\u4f55\u66f4\u52d5\u6642(ADD/DEL/MOD)\u6642\uff0c\u8981\u4e3b\u52d5\u901a\u77e5 hardware switch\uff0c\u5c07\u8a72 flow \u52a0\u5165\u5230 ipv4 offload rules \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e26\u975e\u6240\u6709\u7684 FIB \u90fd\u6703\u901a\u77e5\u5e95\u4e0b\uff0c\u76ee\u524d\u7684\u898f\u7bc4\u662f")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/* Don't offload route if using custom ip rules or if\n* IPv4 FIB offloading has been disabled completely.\n*/\n")),(0,r.kt)("h3",{id:"swtichdev-implementation"},"SwtichDev Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"net/switchdev/switchdev.c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"switchdev \u7684\u5be6\u4f5c\u90fd\u5728\u9019\u908a\uff0c\u5305\u542b\u4e86\u8207 hardware switch \u4ee5\u53ca kernel \u5167\u76f8\u95dc function \u7684\u4e92\u52d5\u3002")))),(0,r.kt)("h3",{id:"switch-driver-implementation"},"Switch Driver Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"drivers/net/ethernet/rocker/"),(0,r.kt)("li",{parentName:"ul"},"drivers/net/ethernet/mellanox/mlxsw/")),(0,r.kt)("p",null,"\u76ee\u524d kernel \u53ea\u6709\u5169\u500b\u771f\u6b63\u7684\u5be6\u4f5c\u800c\u5df2\uff0c\u800c rocker \u7b97\u662f\u4f5c\u8005\u958b\u767c switchdev \u4e2d\u7684\u5171\u540c\u7522\u7269\uff0c\u6240\u4ee5 mellanox \u61c9\u8a72\u7b97\u662f\u7b2c\u4e00\u500b\u9032\u5165\u7684\u5ee0\u5546\u3002"))}s.isMDXComponent=!0}}]);