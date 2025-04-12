"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[12160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,g=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"ONOS Trellis Testing",tags:["SDN","Network","Ubuntu","Mininet"],date:new Date("2017-12-11T14:14:56.000Z"),description:"\u63a2\u8a0e\u5982\u4f55\u904b\u884c ONOS Trellis"},o="CORD-Trellis Example",i={unversionedId:"2017/onos-trllis-testing",id:"2017/onos-trllis-testing",title:"ONOS Trellis Testing",description:"\u63a2\u8a0e\u5982\u4f55\u904b\u884c ONOS Trellis",source:"@site/docs/2017/onos-trllis-testing.md",sourceDirName:"2017",slug:"/2017/onos-trllis-testing",permalink:"/docs/2017/onos-trllis-testing",draft:!1,tags:[{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Network",permalink:"/docs/tags/network"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"},{label:"Mininet",permalink:"/docs/tags/mininet"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"ONOS Trellis Testing",tags:["SDN","Network","Ubuntu","Mininet"],date:"2017-12-11T14:14:56.000Z",description:"\u63a2\u8a0e\u5982\u4f55\u904b\u884c ONOS Trellis"},sidebar:"techPost",previous:{title:"NAT Lookback Introduction",permalink:"/docs/2017/nat-loopback"},next:{title:"OVS + DPDK + Docker \u5171\u540c\u73a9\u800d(\u4e8c)",permalink:"/docs/2017/ovs-dpdk-docker-2"}},p={},s=[{value:"VM1 (ONOS)",id:"vm1-onos",level:4},{value:"VM2 (Mininet)",id:"vm2-mininet",level:4}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cord-trellis-example"},"CORD-Trellis Example"),(0,a.kt)("p",null,"Trellis \u662f ONF \u65bc 2017 \u5e74\u63a8\u51fa\u7684 Network Architecture Solution\uff0c\u6574\u500b\u67b6\u69cb\u5c31\u65bc ONOS SDN Controller \u4ee5\u53ca Openflow-Enable switch."),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u662f\u5728\u65bc\u5982\u4f55\u900f\u904e ONF \u63d0\u4f9b\u500b\u74b0\u5883\u5feb\u901f\u642d\u5efa\u4e00\u500b Trellis \u7684\u6e2c\u8a66\u74b0\u5883\u3002"),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"\u95dc\u65bc ",(0,a.kt)("strong",{parentName:"p"},"Trellis")," \u76f8\u95dc script \u7684\u5c08\u6848\u771f\u6b63\u7684\u4f4d\u7f6e\u662f\u653e\u5728 ONF \u5167\u90e8\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://gerrit.onosproject.org/#/q/project:routing"},"Project"),"\uff0c\u4e0d\u904e\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opennetworkinglab/routing/blob/master/trellis/README.md"},"Github"),"\u770b\u5230 Mirror \u7684\u7248\u672c\u3002\n\u5728\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"README")," \u6709\u63d0\u5230\u8a72\u5982\u4f55\u67b6\u8a2d\u4e00\u500b\u6e2c\u8a66\u74b0\u5883\uff0c\u56e0\u6b64\u672c\u7bc7\u6587\u7ae0\u7684\u5167\u5bb9\u5c31\u6703\u57fa\u65bc\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"README")," \u53bb\u67b6\u8a2d\u4e00\u500b\u6e2c\u8a66\u74b0\u5883\u3002"),(0,a.kt)("h1",{id:"environment"},"Environment"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\u8a72\u6e2c\u8a66\u74b0\u5883\u662f\u57fa\u65bc ",(0,a.kt)("strong",{parentName:"p"},"mininet")," \u8207 ",(0,a.kt)("strong",{parentName:"p"},"ONOS")," \u4f86\u90e8\u7f72\u7684\uff0c\u6240\u4ee5\u5728\u6a5f\u5668\u7684\u6578\u91cf\u4e0a\u9762\uff0c\u6700\u5c11\u9700\u8981\u4e00\u53f0\u6a5f\u5668\uff0c\u6700\u591a\u6c92\u6709\u9650\u5236,\u56e0\u70ba ",(0,a.kt)("strong",{parentName:"p"},"ONOS")," \u672c\u8eab\u53ef\u4ee5\u662f\u53ef\u4ee5\u540c\u6642\u8dd1\u8d77\u591a\u53f0\u7684 ",(0,a.kt)("strong",{parentName:"p"},"SDN Controller"),"\uff0c\u53ef\u4ee5\u67b6\u8a2d\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"Cluster")," \u7684\u74b0\u5883\u7136\u5f8c\u8207 ",(0,a.kt)("strong",{parentName:"p"},"Mininet")," \u4e92\u9023\u3002\n\u4e0d\u904e\u70ba\u4e86\u65b9\u4fbf\u6e2c\u8a66\uff0c\u4e26\u6c92\u6709\u9700\u8981\u67b6\u8a2d\u5230\u9019\u9ebc\u591a\u7684 ",(0,a.kt)("strong",{parentName:"p"},"ONOS SDN Controller"),"\u3002\n\u56e0\u6b64\u5728\u672c\u74b0\u5883\u4e2d\uff0c\u6c7a\u5b9a\u63a1\u7528\u5169\u53f0\u6a5f\u5668\u5373\u53ef\u3002\n\u6240\u9700\u74b0\u5883"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Two Ubuntu Machine",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"One for ONOS Controller (VM1)"),(0,a.kt)("li",{parentName:"ul"},"One for Mininet emulator (VM2)"))),(0,a.kt)("li",{parentName:"ol"},"\u65bc VM1 \u4e0a\u9762\u8acb\u5148\u5b89\u88dd\u597d ONOS Controller, \u8a73\u7d30\u7684\u5b89\u88dd\u6b65\u9a5f\u53ef\u4ee5\u53c3\u8003 ONF \u672c\u8eab\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.onosproject.org/display/ONOS/Administrator+Guide"},"wiki"),", \u9019\u908a\u53ef\u4ee5\u5206\u6210\u4f7f\u7528\u8005\u8ddf\u958b\u767c\u8005\u5169\u7a2e\u904b\u884c\u65b9\u6cd5\uff0c\u82e5\u662f\u958b\u767c\u8005\u672c\u8eab\u6703\u8981\u4f60\u6293\u53d6 ONOS \u7684 source code\uff0c\u4e26\u4e14\u900f\u904e ",(0,a.kt)("strong",{parentName:"li"},"buck")," \u4f86\u9032\u884c\u5efa\u7f6e\u8207\u904b\u884c\u3002\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"ONOS")," ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.onosproject.org/display/ONOS/Running+the+published+Docker+ONOS+images"},"docker image")," \u4f86\u904b\u884c ",(0,a.kt)("strong",{parentName:"li"},"ONOS"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u65bc VM2 \u4e0a\u9762\u5b89\u88dd Ubuntu 16.04 \u7684\u74b0\u5883\uff0c\u63a5\u4e0b\u4f86\u5c31\u53ef\u4ee5\u53c3\u8003 ",(0,a.kt)("strong",{parentName:"li"},"README")," \u7684\u6b65\u9a5f\u4f86\u8a2d\u7f6e\u3002")),(0,a.kt)("h1",{id:"steps"},"Steps"),(0,a.kt)("h4",{id:"vm1-onos"},"VM1 (ONOS)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70ba\u4e86\u66f4\u653e\u4fbf\u63a7\u5236\u65bc ONOS \u4e0a\u9762\u904b\u884c\u7684 application\uff0c\u53ef\u4ee5\u900f\u904e\u74b0\u5883\u8b8a\u6578 ",(0,a.kt)("inlineCode",{parentName:"li"},"ONOS_APPS")," \u76f4\u63a5\u8a2d\u5b9a\u8981\u904b\u884c\u7684 apps\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u63a7\u5236\u8981\u904b\u884c\u7684 app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export ONOS_APPS=drivers,openflow,segmentrouting,fpm,dhcprelay,netcfghostprovider,routeradvertisement\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u904b\u884c\u8d77 ONOS Controller"),(0,a.kt)("li",{parentName:"ul"},"\u53e6\u5916\u958b\u8996\u7a97\uff0c\u904b\u884c ONOS Cli \u5de5\u5177\uff0c\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"apps -a -s")," \u6aa2\u67e5\u904b\u884c\u7684 apps \u662f\u5426\u8207\u4e0a\u8ff0\u543b\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f09 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/opennetworkinglab/routing/blob/master/trellis/trellis.json"},"trellis")," \u76f8\u95dc\u8a2d\u5b9a\u6a94\u6848\uff0c\u4e26\u4e14\u900f\u904e\u4e0b\u5217\u5de5\u5177\u5c07\u8a72\u8a2d\u5b9a\u6a94\u5beb\u5165\u5230 ONOS \u4e2d\uff0c\u5176\u4e2d ",(0,a.kt)("strong",{parentName:"li"},"onos-ip")," \u5247\u662f\u672c\u6a5f\u7aef\u7684 IP address (\u6b64 IP \u8981\u8b93 VM2 \u80fd\u5920\u5b58\u53d6\u5f97\u5230)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"onos-netcfg <onos-ip> routing/trellis/trellis.json\n")),(0,a.kt)("h4",{id:"vm2-mininet"},"VM2 (Mininet)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u76f8\u95dc\u8edf\u9ad4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install -y gawk texinfo python-pip build-essential iptables automake autoconf libtool\nsudo pip install -U pip\nsudo pip install ipaddress\nsudo apt-get install isc-dhcp-server\nsudo apt-get install mininet\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u5b8c\u7562\u5f8c\uff0c\u9b77\u9b5a ",(0,a.kt)("strong",{parentName:"li"},"Trellis")," \u67b6\u69cb\u5167\u652f\u63f4\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"Quagga")," \u4f86\u7576\u5916\u90e8 BPG \u6e9d\u901a\u7684\u6a4b\u6a11\uff0c\u56e0\u6b64\u6211\u5011\u9700\u8981\u5728\u672c\u6a5f\u4e0a\u5b89\u88dd ",(0,a.kt)("strong",{parentName:"li"},"Quagga"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9019\u908a\u8981\u7279\u5225\u6ce8\u610f\uff0c\u5728\u9810\u8a2d\u60c5\u6cc1\u4e0b, ",(0,a.kt)("strong",{parentName:"li"},"quagga")," \u672c\u8eab\u6703\u671f\u671b\u904b\u884c\u7684\u4f7f\u7528\u8005\u540d\u7a31\u70ba ",(0,a.kt)("strong",{parentName:"li"},"quagga"),"\uff0c\u540c\u6642\u4f60\u4e5f\u8981\u5e6b",(0,a.kt)("inlineCode",{parentName:"li"},"--sysconfdir"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"li"},"--localstatedir")," \u9019\u5169\u500b\u4f4d\u7f6e\u7684\u8cc7\u6599\u593e\u8a2d\u5b9a\u5168\u7e23\uff0c\u8b93 ",(0,a.kt)("strong",{parentName:"li"},"quagga")," \u6b64\u4f7f\u7528\u8005\u6709\u6b0a\u9650\u53ef\u4ee5\u5beb\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f\u55ae\u7d14\u6e2c\u8a66\u7684\u8a71\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"li"},"configure")," \u7684\u6642\u5019\u52a0\u5165\u5169\u500b\u9078\u9805 ",(0,a.kt)("strong",{parentName:"li"},"--enable-user=root --enable-group=root"),", \u9019\u6a23 ",(0,a.kt)("strong",{parentName:"li"},"Quagga")," \u76f8\u95dc\u61c9\u7528\u7a0b\u5f0f\u5c31\u6703\u63a1\u7528 ",(0,a.kt)("strong",{parentName:"li"},"root")," \u7684\u8eab\u4efd\u53bb\u904b\u884c\u4e86\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b onos-1.11 https://gerrit.opencord.org/quagga\ncd quagga\n./bootstrap.sh\n./configure --enable-fpm --sbindir=/usr/lib/quagga\nmake\nsudo make install\ncd ..\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u8981\u4fee\u6539\u672c\u5730\u7aef\u7684\u6a94\u6848\uff0c\u8b93\u6211\u5011\u7684 mininet/Zebra \u76f8\u95dc\u7684\u61c9\u7528\u7a0b\u5f0f\u80fd\u5920\u8ddf ONOS \u9023\u63a5\u5f97\u5230\uff0c\u6240\u4ee5\u8acb\u4fee\u6539\u4e0b\u5217\u5169\u500b\u6a94\u6848",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"routing/trellis/trellis.py"),(0,a.kt)("li",{parentName:"ul"},"routing/trellis/zebradbgp1.conf"))),(0,a.kt)("li",{parentName:"ul"},"\u65bc ",(0,a.kt)("strong",{parentName:"li"},"routing/trellis/trellis.py"),"\uff0c\u8acb\u5c07\u4e0b\u5217\u4e09\u884c\u6307\u4ee4\u4e2d\u7684\u5f8c\u9762\u5169\u884c\uff0c\u4e26\u4e14\u5c07\u7b2c\u4e00\u884c\u6307\u4ee4\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"li"},"IP")," \u63db\u6210 VM1 \u7684 ",(0,a.kt)("strong",{parentName:"li"},"IP"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"net.addController(RemoteController('c0', ip='<onos-ip>'))\n#net.addController(RemoteController('c1', ip='192.168.56.12'))\n#net.addController(RemoteController('c2', ip='192.168.56.13'))\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65bc ",(0,a.kt)("strong",{parentName:"li"},"routing/trellis/zebradbgp1.conf")," \u88e1\u9762\u5c07 ",(0,a.kt)("strong",{parentName:"li"},"IP")," \u7684\u90e8\u5206\u4e5f\u63db\u6210 VM1 \u7684 ",(0,a.kt)("strong",{parentName:"li"},"IP"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"fpm connection ip <onos-ip> port 2620\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u8981\u5c07\u7cfb\u7d71\u4e0a kernel \u7684\u4fdd\u8b77\u6a5f\u5236 ",(0,a.kt)("strong",{parentName:"li"},"app armor")," \u7d66\u95dc\u9589\uff0c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/apparmor.d/usr.sbin.dhcpd /etc/apparmor.d/disable/\napparmor_parser -R /etc/apparmor.d/usr.sbin.dhcpd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u8981\u904b\u884c\u6642\uff0c\u5207\u63db\u5230 ",(0,a.kt)("strong",{parentName:"li"},"trellis")," \u8cc7\u6599\u593e\uff0c\u57f7\u884c ",(0,a.kt)("strong",{parentName:"li"},"sudo ./trellis.py")," \u5373\u53ef\u4ee5\u904b\u884c\u8d77 ",(0,a.kt)("strong",{parentName:"li"},"mininet")," \u8173\u672c\uff0c\u4e26\u4e14\u900f\u904e ",(0,a.kt)("strong",{parentName:"li"},"ONOS")," GUI \u53ef\u4ee5\u89c0\u5bdf\u5230\u5927\u91cf\u7684 ",(0,a.kt)("strong",{parentName:"li"},"Switch/Host")," \u5b58\u5728\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u4e09\u500b\u6307\u4ee4\u90fd\u53ef\u4ee5\u6210\u529f\u904b\u884c\u4e26\u4e14\u6709\u56de\u61c9 (\u9808\u7b49\u5f85 dhcp \u62ff\u5230 IP)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mininet$: h1 ping h4\nmininet$: h1 ping 10.0.99.2\nmininet$: h1v6 ping6 2000::9902\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u7d50\u675f\u6574\u500b\u6a21\u64ec\u74b0\u5883\uff0c\u53ef\u4ee5\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u5c07\u6240\u6709\u76f8\u95dc\u7684 Process/Daemon \u7d66\u79fb\u9664")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo killall -9 dhclient dhcpd zebra bgpd\nsudo mn -c\n")))}c.isMDXComponent=!0}}]);