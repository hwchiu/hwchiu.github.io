"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[71434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"OpenFlow link capacity ",date:"2014-05-07 06:05",comments:!0,tags:["Openflow","SDN","Floodlight","Java"],description:"\u5728Openflow\u7684\u5354\u5b9a\u4e2d\uff0c\u6709\u6642\u5019\u6703\u60f3\u8981\u77e5\u9053\u6bcf\u689d`link`\u7684`capacity`,\u7136\u5f8c\u5c31\u53ef\u4ee5\u85c9\u7531\u7576\u524d\u7684rate\u4f86\u5224\u65b7\u9019\u500bLink\u662f\u5426\u58c5\u585e\u3002 \u672c\u6587\u5617\u8a66\u4f7f\u7528 `Floodlight` Controller \u4f5c\u70ba\u7bc4\u4f8b\u4f86\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u900f\u904e\u9810\u8a2d\u7684 API \u4f86\u53d6\u5f97\u6bcf\u500b Port \u7684\u8cc7\u8a0a\uff0c\u4e26\u4e14\u5f9e\u4e2d\u8a08\u7b97\u51fa\u7576\u524d\u9019\u689d Link \u662f\u5426\u5c6c\u65bc\u58c5\u585e\u6216\u662f\u9592\u7f6e\u3002 \u9019\u985e\u578b\u7684\u6a5f\u5236\u8207\u8cc7\u8a0a\u5c0d\u65bc\u60f3\u8981\u5b8c\u6210 Traffic Engineering \u7684\u958b\u767c\u8005\u4f86\u8aaa\u975e\u5e38\u91cd\u8981\uff0c\u7562\u7adf\u9019\u662f\u5176\u4e2d\u4e00\u7a2e\u53ef\u4ee5\u5e6b\u6bcf\u689d\u9023\u7dda\u52a0\u4e0a\u6b0a\u91cd\u7684\u4e00\u7a2e\u65b9\u5f0f"},l=void 0,p={unversionedId:"2014/link-capacity",id:"2014/link-capacity",title:"OpenFlow link capacity ",description:"\u5728Openflow\u7684\u5354\u5b9a\u4e2d\uff0c\u6709\u6642\u5019\u6703\u60f3\u8981\u77e5\u9053\u6bcf\u689d`link`\u7684`capacity`,\u7136\u5f8c\u5c31\u53ef\u4ee5\u85c9\u7531\u7576\u524d\u7684rate\u4f86\u5224\u65b7\u9019\u500bLink\u662f\u5426\u58c5\u585e\u3002 \u672c\u6587\u5617\u8a66\u4f7f\u7528 `Floodlight` Controller \u4f5c\u70ba\u7bc4\u4f8b\u4f86\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u900f\u904e\u9810\u8a2d\u7684 API \u4f86\u53d6\u5f97\u6bcf\u500b Port \u7684\u8cc7\u8a0a\uff0c\u4e26\u4e14\u5f9e\u4e2d\u8a08\u7b97\u51fa\u7576\u524d\u9019\u689d Link \u662f\u5426\u5c6c\u65bc\u58c5\u585e\u6216\u662f\u9592\u7f6e\u3002 \u9019\u985e\u578b\u7684\u6a5f\u5236\u8207\u8cc7\u8a0a\u5c0d\u65bc\u60f3\u8981\u5b8c\u6210 Traffic Engineering \u7684\u958b\u767c\u8005\u4f86\u8aaa\u975e\u5e38\u91cd\u8981\uff0c\u7562\u7adf\u9019\u662f\u5176\u4e2d\u4e00\u7a2e\u53ef\u4ee5\u5e6b\u6bcf\u689d\u9023\u7dda\u52a0\u4e0a\u6b0a\u91cd\u7684\u4e00\u7a2e\u65b9\u5f0f",source:"@site/docs/2014/link-capacity.md",sourceDirName:"2014",slug:"/2014/link-capacity",permalink:"/docs/2014/link-capacity",draft:!1,tags:[{label:"Openflow",permalink:"/docs/tags/openflow"},{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Floodlight",permalink:"/docs/tags/floodlight"},{label:"Java",permalink:"/docs/tags/java"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"OpenFlow link capacity ",date:"2014-05-07 06:05",comments:!0,tags:["Openflow","SDN","Floodlight","Java"],description:"\u5728Openflow\u7684\u5354\u5b9a\u4e2d\uff0c\u6709\u6642\u5019\u6703\u60f3\u8981\u77e5\u9053\u6bcf\u689d`link`\u7684`capacity`,\u7136\u5f8c\u5c31\u53ef\u4ee5\u85c9\u7531\u7576\u524d\u7684rate\u4f86\u5224\u65b7\u9019\u500bLink\u662f\u5426\u58c5\u585e\u3002 \u672c\u6587\u5617\u8a66\u4f7f\u7528 `Floodlight` Controller \u4f5c\u70ba\u7bc4\u4f8b\u4f86\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u900f\u904e\u9810\u8a2d\u7684 API \u4f86\u53d6\u5f97\u6bcf\u500b Port \u7684\u8cc7\u8a0a\uff0c\u4e26\u4e14\u5f9e\u4e2d\u8a08\u7b97\u51fa\u7576\u524d\u9019\u689d Link \u662f\u5426\u5c6c\u65bc\u58c5\u585e\u6216\u662f\u9592\u7f6e\u3002 \u9019\u985e\u578b\u7684\u6a5f\u5236\u8207\u8cc7\u8a0a\u5c0d\u65bc\u60f3\u8981\u5b8c\u6210 Traffic Engineering \u7684\u958b\u767c\u8005\u4f86\u8aaa\u975e\u5e38\u91cd\u8981\uff0c\u7562\u7adf\u9019\u662f\u5176\u4e2d\u4e00\u7a2e\u53ef\u4ee5\u5e6b\u6bcf\u689d\u9023\u7dda\u52a0\u4e0a\u6b0a\u91cd\u7684\u4e00\u7a2e\u65b9\u5f0f"},sidebar:"techPost",previous:{title:"Floodlight LLDP problem",permalink:"/docs/2014/floodlight-lldp-problem"},next:{title:"Mininet with different network subnet",permalink:"/docs/2014/mininet-and-network-subnet"}},o={},s=[{value:"\u74b0\u5883\u5efa\u7f6e",id:"\u74b0\u5883\u5efa\u7f6e",level:3},{value:"Expr 1",id:"expr-1",level:4},{value:"Expr 2",id:"expr-2",level:4},{value:"Expr 3",id:"expr-3",level:4},{value:"Mininet",id:"mininet",level:4}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"http://archive.openflow.org/documents/openflow-spec-v1.0.0.pdf"},"Openflow 1.0"),"\u4e2d\uff0c\u5c0d\u65bc\u6bcf\u500bPort\u7684\u5b9a\u7fa9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/* Description of a physical port */\nstruct ofp_phy_port {\n    uint16_t port_no;\n    uint8_t hw_addr[OFP_ETH_ALEN];\n    char name[OFP_MAX_PORT_NAME_LEN]; /* Null-terminated */\n    uint32_t config; /* Bitmap of OFPPC_* flags. */\n    uint32_t state; /* Bitmap of OFPPS_* flags. */\n    /* Bitmaps of OFPPF_* that describe features. All bits zeroed if\n    * unsupported or unavailable. */\n    uint32_t curr; /* Current features. */\n    uint32_t advertised; /* Features being advertised by the port. */\n    uint32_t supported; /* Features supported by the port. */\n    uint32_t peer; /* Features advertised by peer. */\n};\n")),(0,a.kt)("p",null,"\u5f9e\u9019\u500b\u5b9a\u7fa9\u4e4b\u4e2d\uff0c\u53ef\u4ee5\u6ce8\u610f\u5230\u6709\u3127\u500b\u6b04\u4f4d\u53eb\u505a",(0,a.kt)("inlineCode",{parentName:"p"},"curr"),",\u4ed6\u662f\u4e00\u500bbitmaps\u7684\u8868\u9054\u5f0f\uff0c\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"ofp_port_features"),"\u6240\u7d44\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/* Features of physical ports available in a datapath. */\n    enum ofp_port_features {\n    OFPPF_10MB_HD = 1 << 0, /* 10 Mb half-duplex rate support. */\n    OFPPF_10MB_FD = 1 << 1, /* 10 Mb full-duplex rate support. */\n    OFPPF_100MB_HD = 1 << 2, /* 100 Mb half-duplex rate support. */\n    OFPPF_100MB_FD = 1 << 3, /* 100 Mb full-duplex rate support. */\n    OFPPF_1GB_HD = 1 << 4, /* 1 Gb half-duplex rate support. */\n    OFPPF_1GB_FD = 1 << 5, /* 1 Gb full-duplex rate support. */\n    OFPPF_10GB_FD = 1 << 6, /* 10 Gb full-duplex rate support. */\n    OFPPF_COPPER = 1 << 7, /* Copper medium. */\n    OFPPF_FIBER = 1 << 8, /* Fiber medium. */\n    OFPPF_AUTONEG = 1 << 9, /* Auto-negotiation. */\n    OFPPF_PAUSE = 1 << 10, /* Pause. */\n    OFPPF_PAUSE_ASYM = 1 << 11 /* Asymmetric pause. */\n};\n")),(0,a.kt)("p",null,"\u9019\u6a23\u770b\u8d77\u4f86\u6211\u5011\u53ef\u4ee5\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"features request"),"\u7684\u65b9\u5f0f\u4f86\u53d6\u5f97switch\u4e0a\u6bcf\u4e00\u500bport\u7684capacity\uff0c\u56e0\u6b64\u505a\u4e86\u4e0b\u5217\u5be6\u9a57"),(0,a.kt)("h3",{id:"\u74b0\u5883\u5efa\u7f6e"},"\u74b0\u5883\u5efa\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Controller: ",(0,a.kt)("strong",{parentName:"li"},"Floodlight")),(0,a.kt)("li",{parentName:"ul"},"Network environment: ",(0,a.kt)("strong",{parentName:"li"},"mininet")," or ",(0,a.kt)("strong",{parentName:"li"},"OVS on PC"))),(0,a.kt)("h4",{id:"expr-1"},"Expr 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mn --controller=remote,ip=127.0.0.1, --topo tree,1"),(0,a.kt)("li",{parentName:"ul"},"curl ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/wm/core/switch/all/features/json"},"http://127.0.0.1:8080/wm/core/switch/all/features/json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "00:00:00:00:00:00:00:01": {\n    "actions": 4095,\n    "buffers": 256,\n    "capabilities": 199,\n    "datapathId": "00:00:00:00:00:00:00:01",\n    "length": 176,\n    "ports": [\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 192,\n        "hardwareAddress": "32:38:53:8a:27:42",\n        "name": "s1-eth1",\n        "peerFeatures": 0,\n        "portNumber": 1,\n        "state": 0,\n        "supportedFeatures": 0\n      },\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 192,\n        "hardwareAddress": "8a:5d:09:2f:cf:06",\n        "name": "s1-eth2",\n        "peerFeatures": 0,\n        "portNumber": 2,\n        "state": 0,\n        "supportedFeatures": 0\n      },\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 0,\n        "hardwareAddress": "7e:00:4e:66:4d:45",\n        "name": "s1",\n        "peerFeatures": 0,\n        "portNumber": 65534,\n        "state": 0,\n        "supportedFeatures": 0\n      }\n    ],\n    "tables": -2,\n    "type": "FEATURES_REPLY",\n    "version": 1,\n    "xid": 7\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f9e\u56de\u50b3\u7684\u8a0a\u606f\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u9664\u4e86lo\u4ee5\u5916\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"currentFeatures"),"\u90fd\u662f192\uff0c192\u5c31\u662f2^7+2^6,\u6240\u4ee5\u5c0d\u61c9\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"ofp_port_features"),"\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"OFPPF_10GB_FD"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"OFPPF_COPPER"))),(0,a.kt)("h4",{id:"expr-2"},"Expr 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u6b21\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"traffic control link"),"\u53ef\u8abf\u6574\u983b\u5bec\u7684link\u4f86\u4f7f\u7528\uff0c\u770b\u770b\u662f\u5426\u6703\u6709\u6240\u8b8a\u5316"),(0,a.kt)("li",{parentName:"ul"},"mn --controller=remote,ip=140.113.214.95,port=6633 --topo tree,1 --link tc,bw=100.0"),(0,a.kt)("li",{parentName:"ul"},"curl ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/wm/core/switch/all/features/json"},"http://127.0.0.1:8080/wm/core/switch/all/features/json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "00:00:00:00:00:00:00:01": {\n    "actions": 4095,\n    "buffers": 256,\n    "capabilities": 199,\n    "datapathId": "00:00:00:00:00:00:00:01",\n    "length": 176,\n    "ports": [\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 192,\n        "hardwareAddress": "32:38:53:8a:27:42",\n        "name": "s1-eth1",\n        "peerFeatures": 0,\n        "portNumber": 1,\n        "state": 0,\n        "supportedFeatures": 0\n      },\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 192,\n        "hardwareAddress": "8a:5d:09:2f:cf:06",\n        "name": "s1-eth2",\n        "peerFeatures": 0,\n        "portNumber": 2,\n        "state": 0,\n        "supportedFeatures": 0\n      },\n      {\n        "advertisedFeatures": 0,\n        "config": 0,\n        "currentFeatures": 0,\n        "hardwareAddress": "7e:00:4e:66:4d:45",\n        "name": "s1",\n        "peerFeatures": 0,\n        "portNumber": 65534,\n        "state": 0,\n        "supportedFeatures": 0\n      }\n    ],\n    "tables": -2,\n    "type": "FEATURES_REPLY",\n    "version": 1,\n    "xid": 7\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u770b\u5230\u5b8c\u5168\u6c92\u6709\u8b8a\u5316\uff0c\u4e0d\u7ba1\u6709\u6c92\u6709\u8a2d\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"tc link"),",\u9019\u500b",(0,a.kt)("inlineCode",{parentName:"li"},"currentFeatures"),"\u7684\u503c\u4f9d\u7136\u662f\u56fa\u5b9a\u572810G\uff0c\u56e0\u6b64\u5c31\u5f88\u597d\u5947\u6703\u4e0d\u6703\u662f\u9019\u500bfeatureRequest\u672c\u8eab\u4e26\u6c92\u6709\u5be6\u4f5c\u51fa\u4f86\uff0c\u56e0\u6b64\u63db\u4e00\u500b\u7db2\u8def\u74b0\u5883\u518d\u8a66\u8a66\u770b")),(0,a.kt)("h4",{id:"expr-3"},"Expr 3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u6b21\u5c31\u4e0d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"mininet"),"\u800c\u662f\u76f4\u63a5\u7528\u4e00\u53f0\u5be6\u9ad4PC\u914d\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"OVS"),"\u4f86\u8dd1\u8dd1\u770b"),(0,a.kt)("li",{parentName:"ul"},"curl ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/wm/core/switch/all/features/json"},"http://127.0.0.1:8080/wm/core/switch/all/features/json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "00:00:a0:36:9f:00:ed:04": {\n    "actions": 4095,\n    "buffers": 256,\n    "capabilities": 199,\n    "datapathId": "00:00:a0:36:9f:00:ed:04",\n    "length": 272,\n    "ports": [\n      {\n        "advertisedFeatures": 1711,\n        "config": 0,\n        "currentFeatures": 672,\n        "hardwareAddress": "a0:36:9f:00:ed:06",\n        "name": "eth3",\n        "peerFeatures": 0,\n        "portNumber": 3,\n        "state": 0,\n        "supportedFeatures": 1711\n      },\n      {\n        "advertisedFeatures": 1711,\n        "config": 0,\n        "currentFeatures": 640,\n        "hardwareAddress": "a0:36:9f:00:ed:05",\n        "name": "eth2",\n        "peerFeatures": 0,\n        "portNumber": 2,\n        "state": 1,\n        "supportedFeatures": 1711\n      },\n      {\n        "advertisedFeatures": 1711,\n        "config": 0,\n        "currentFeatures": 640,\n        "hardwareAddress": "a0:36:9f:00:ed:07",\n        "name": "eth4",\n        "peerFeatures": 0,\n        "portNumber": 4,\n        "state": 1,\n        "supportedFeatures": 1711\n      },\n      {\n        "advertisedFeatures": 0,\n        "config": 1,\n        "currentFeatures": 0,\n        "hardwareAddress": "a0:36:9f:00:ed:04",\n        "name": "br0",\n        "peerFeatures": 0,\n        "portNumber": 65534,\n        "state": 1,\n        "supportedFeatures": 0\n      },\n      {\n        "advertisedFeatures": 1711,\n        "config": 0,\n        "currentFeatures": 640,\n        "hardwareAddress": "a0:36:9f:00:ed:04",\n        "name": "eth1",\n        "peerFeatures": 0,\n        "portNumber": 1,\n        "state": 1,\n        "supportedFeatures": 1711\n      }\n    ],\n    "tables": -1,\n    "type": "FEATURES_REPLY",\n    "version": 1,\n    "xid": 4\n  }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a1\u7528\u771f\u6b63\u7684\u7db2\u5361\u5f8c\uff0c\u5c31\u6703\u767c\u73fe",(0,a.kt)("inlineCode",{parentName:"li"},"currentFeatures"),"\u7684\u503c\u662f\u6709\u8b8a\u5316\u7684\uff0c\u9019\u4ee3\u8868",(0,a.kt)("inlineCode",{parentName:"li"},"OVS"),"\u7684\u78ba\u6709\u5be6\u4f5c\u9019\u500b\u529f\u80fd\uff0c\u65bc\u662f\u6211\u5c31\u958b\u59cb\u597d\u5947\uff0c\u70ba\u4ec0\u9ebcMininet\u4e2d\u5f97\u5230\u7684\u6578\u503c\u90fd\u662f10G,tc link\u5230\u5e95\u662f\u4ec0\u9ebc")),(0,a.kt)("h4",{id:"mininet"},"Mininet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4ed4\u7d30\u7814\u7a76mininet\u7684source code\u5f8c\uff0c\u5927\u81f4\u77ad\u89e3\u4e86\u6574\u500b\u904b\u4f5c\u6d41\u7a0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7576",(0,a.kt)("inlineCode",{parentName:"p"},"mininet"),"\u8981\u5728\u5169\u500bswitch\u9593\u5275\u9020\u4e00\u689dlink\u7684\u6642\u5019\uff0c\u662f\u900f\u904e\u4e0b\u5217\u624b\u6bb5\u9054\u6210\u7684"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ip link add name s1-eth1 type veth peer name s2-eth1")," \u9019\u7a2e\u7cfb\u7d71\u6307\u4ee4\u5275\u9020\u4e00\u500b\u7279\u6b8a\u7684\u88dd\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"veth"),"\uff0c\u9019\u5169\u500b\u88dd\u7f6e\u7684\u5c01\u5305\u6703\u5f7c\u6b64\u4e92\u901a\uff0c\u56e0\u6b64\u5c31\u9054\u6210\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"link"),"\u7684\u529f\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b64\u6642\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"ethtool  s1-eth1"),"\u53ef\u4ee5\u89c0\u5bdf\u5230\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"}," Speed: 10000Mb/s"),"\u9019\u6a23\u7684\u8a2d\u5b9a\uff0c\u4ed6\u7684\u901f\u5ea6\u5c31\u662f\u8a2d\u5b9a\u621010G")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"OVS"),"\u4e2d\u6703\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"}," struct ethtool_cmd"),"\u9019\u7a2e\u7d50\u69cb\u4f86\u7372\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"port"),"\u7684\u76f8\u95dc\u8cc7\u8a0a\uff0c\u9019\u6642\u5019\u4ed6\u6703\u6839\u64da",(0,a.kt)("inlineCode",{parentName:"p"},"speed"),"\u9019\u500b\u6b04\u4f4d\u4f86\u8a2d\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"currentFeautres"),"\u7684\u6578\u503c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u56e0\u6b64",(0,a.kt)("inlineCode",{parentName:"p"},"mininet"),"\u5275\u9020\u51fa\u4f86\u7684link\u9810\u8a2d\u90fd\u662f10G\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"OVS"),"\u90a3\u908a\u90fd\u6703\u6293\u523010G\u7684\u8cc7\u8a0a")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"traffic control"),"\u7684\u90e8\u5206\u5247\u662f\u900f\u904e\u7cfb\u7d71\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tc"),"\u6307\u4ee4\u4f86\u505a\u5230\u901f\u5ea6\u9650\u5236\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u4e0d\u6703\u52d5\u5230\u6bcf\u500bport\u7684\u8a2d\u5b9a"))))}c.isMDXComponent=!0}}]);