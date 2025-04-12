"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[71764],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>f});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=r.createContext({}),p=function(t){var n=r.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},c=function(t){var n=p(t.components);return r.createElement(l.Provider,{value:n},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(e),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return e?r.createElement(f,a(a({ref:n},c),{},{components:e})):r.createElement(f,a({ref:n},c))}));function f(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[u]="string"==typeof t?t:o,a[1]=s;for(var p=2;p<i;p++)a[p]=e[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},70338:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=e(87462),o=(e(67294),e(3905));const i={title:"Mininet with different network subnet (v2)",date:"2014-09-19 13:00",comments:!0,tags:["SDN","Openflow","Mininet","Network"]},a=void 0,s={unversionedId:"2014/mininet-with-different-network-subnet-v2",id:"2014/mininet-with-different-network-subnet-v2",title:"Mininet with different network subnet (v2)",description:"\u4e0a\u4e00\u7bc7mininet-and-network-subnet\u4e2d\u63d0\u5230\u5982\u4f55\u5728mininet\u4e2d\u5275\u9020\u4e0d\u540csubnet\u7684\u7db2\u8def\uff0c\u4e26\u4e14\u900f\u904e\u624b\u52d5\u4e0bflow\u7684\u65b9\u5f0f\u8b93\u4e0d\u540csubnet\u7684hosts\u53ef\u4ee5\u4e92\u76f8\u6e9d\u901a\u3002",source:"@site/docs/2014/mininet-with-different-network-subnet-v2.md",sourceDirName:"2014",slug:"/2014/mininet-with-different-network-subnet-v2",permalink:"/docs/2014/mininet-with-different-network-subnet-v2",draft:!1,tags:[{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Openflow",permalink:"/docs/tags/openflow"},{label:"Mininet",permalink:"/docs/tags/mininet"},{label:"Network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"Mininet with different network subnet (v2)",date:"2014-09-19 13:00",comments:!0,tags:["SDN","Openflow","Mininet","Network"]},sidebar:"techPost",previous:{title:"Mininet \u904b\u4f5c\u539f\u7406",permalink:"/docs/2014/mininet-parsing"},next:{title:"MongoDB",permalink:"/docs/2014/mongodb"}},l={},p=[{value:"Solution",id:"solution",level:2}],c={toc:p},u="wrapper";function d(t){let{components:n,...e}=t;return(0,o.kt)(u,(0,r.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u7bc7",(0,o.kt)("a",{parentName:"p",href:"http://logdown.com/account/posts/203260-mininet-and-network-subnet/edit"},"mininet-and-network-subnet"),"\u4e2d\u63d0\u5230\u5982\u4f55\u5728mininet\u4e2d\u5275\u9020\u4e0d\u540csubnet\u7684\u7db2\u8def\uff0c\u4e26\u4e14\u900f\u904e\u624b\u52d5\u4e0bflow\u7684\u65b9\u5f0f\u8b93\u4e0d\u540csubnet\u7684hosts\u53ef\u4ee5\u4e92\u76f8\u6e9d\u901a\u3002\n\u800c\u672c\u7bc7\u7684\u91cd\u9ede\u5728\u65bc\u63d0\u4f9b\u53e6\u5916\u4e00\u7a2e\u65b9\u5f0f\u4f86\u5275\u9020\u4e0d\u540csubnet\u7684\u7db2\u8def\uff0c\u8b93\u7814\u7a76\u8005\u4e0d\u9700\u8981\u518d\u624b\u52d5\u4e00\u76f4\u8f38\u5165",(0,o.kt)("strong",{parentName:"p"},"ifconfig"),",",(0,o.kt)("strong",{parentName:"p"},"route add ..."),"\u7b49\u6307\u4ee4\uff0c\u80fd\u5920\u66f4\u7c21\u6f54\u7684\u53bb\u5275\u9020\u4e0d\u540csubtnet\u7684\u7db2\u8def\u3002"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"\u5728\u672c\u7bc7\u4e2d\uff0c\u6211\u5011\u76f4\u63a5\u64b0\u5beb",(0,o.kt)("strong",{parentName:"p"},"mininet"),"\u7684python script\u4f86\u6a21\u64ec\u7db2\u8def\uff0c\u57fa\u672c\u7684\u64b0\u5beb\u6559\u5b78\u8acb\u53c3\u8003mininet\u5b98\u65b9\u6587\u4ef6\u5c31\u6709\u4e86\u3002\u672c\u7bc7\u4e3b\u8981\u662f\u91dd\u5c0d\u4e0d\u540csubnet\u7684host\u8981\u5982\u4f55\u5275\u5efa\u3002\n\u9996\u5148\uff0c\u5728\u6211\u5011\u5275\u9020hosts\u7684\u6642\u5019\uff0c\u53ef\u4ee5\u900f\u904e",(0,o.kt)("strong",{parentName:"p"},"ip"),"\u9019\u500b\u53c3\u6578\u4f86\u63a7\u5236\u6b64host\u7684\u9810\u8a2dip\u4f4d\u7f6e\uff0c\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u8a2d\u5b9a",(0,o.kt)("strong",{parentName:"p"},"10.0.0.0/24"),"\u6216\u662f",(0,o.kt)("strong",{parentName:"p"},"20.0.0.0/24"),"\u7b49ip\u7d66\u4e88\u6b32\u5275\u5efa\u7684host\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u7701\u6389\u4e4b\u524d\u7684",(0,o.kt)("strong",{parentName:"p"},"ifconfig"),"\u7684\u6b65\u9a5f\u3002\n\u63a5\u4e0b\u4f86\uff0c\u6211\u5011\u8981\u8655\u7406Default gateway\u7684\u554f\u984c\uff0c\u9019\u908a\u4e5f\u6709",(0,o.kt)("strong",{parentName:"p"},"defaultRoute"),"\u7684\u53c3\u6578\u53ef\u4ee5\u4f7f\u7528\uff0c\u9019\u908a\u6211\u5011\u5c31\u53ef\u4ee5\u8f38\u5165",(0,o.kt)("strong",{parentName:"p"},"defaultRoute='h1-eth0'"),"\u4f86\u8655\u7406\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u7701\u6389\u4e4b\u524d\u6240\u8f38\u5165\u7684",(0,o.kt)("strong",{parentName:"p"},"route add default gw"),"\u7684\u6b65\u9a5f\u3002\n\u9019\u5169\u500b\u53c3\u6578\u90fd\u6b63\u78ba\u586b\u5beb\u5b8c\u7562\u5f8c\uff0c\u6211\u5011\u5c31\u5275\u7acb\u597d\u4e86\u4e0d\u540csubnet\u7684\u7db2\u8def\uff0c\u4e26\u4e14\u57fa\u672c\u7684\u8a2d\u5b9a\u5df2\u7d93\u5b8c\u6210\u4e86\uff0c\u63a5\u4e0b\u4f86\u5c31\u6309\u7167\u4e0a\u4e00\u7bc7\u7684\u8aaa\u660e\u4f86\u5c07flow entry\u7d66\u5beb\u5165switch\u5373\u53ef\u3002"),(0,o.kt)("p",null,"###\u5b8c\u6574\u7684mininet python script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/python\n\nfrom mininet.net import Mininet\nfrom mininet.node import Controller, RemoteController, OVSController\nfrom mininet.node import CPULimitedHost, Host, Node\nfrom mininet.node import OVSKernelSwitch, UserSwitch\nfrom mininet.node import IVSSwitch\nfrom mininet.cli import CLI\nfrom mininet.log import setLogLevel, info\nfrom mininet.link import TCLink, Intf\n\ndef myNetwork():\n\n    net = Mininet( topo=None,\n                   build=False,\n                   ipBase='10.0.0.0/8')\n\n    info( '*** Adding controller\\n' )\n    c0=net.addController(name='c0',\n                      controller=RemoteController,\n                      ip='127.0.0.1')\n    info( '*** Add switches\\n')\n    s1 = net.addSwitch('s1', cls=OVSKernelSwitch)\n    info( '*** Add hosts\\n')\n\n    h1 = net.addHost('h1', cls=Host, mac='00:00:00:00:00:01', ip='10.0.0.1/24', defaultRoute='h1-eth0')\n    h2 = net.addHost('h2', cls=Host, mac='00:00:00:00:00:02', ip='20.0.0.1/24', defaultRoute='h2-eth0')\n    h3 = net.addHost('h3', cls=Host, mac='00:00:00:00:00:03', ip='30.0.0.1/24', defaultRoute='h3-eth0')\n\n    info( '*** Add links\\n')\n    linkBW = {'bw':100}\n    net.addLink(h1, s1, cls=TCLink , **linkBW)\n    net.addLink(h2, s1, cls=TCLink , **linkBW)\n    net.addLink(h3, s1, cls=TCLink , **linkBW)\n    info( '*** Starting network\\n')\n    net.build()\n    info( '*** Starting controllers\\n')\n    for controller in net.controllers:\n        controller.start()\n    info( '*** Starting switches\\n')\n    net.get('s1').start([c0])\n    info( '*** Configuring switches\\n')\n\n    CLI(net)\n    net.stop()\n\nif __name__ == '__main__':\n    setLogLevel( 'info' )\n    myNetwork()\n")),(0,o.kt)("p",null,"###\u6e2c\u8a66\u7528\u7684flow entries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Those two flow will handle the arp-request for the gateway, it will send the arp-request to s1\ntable=0,priority=65535,arp,arp_tpa=10.0.0.254 actions=LOCAL\ntable=0,priority=65535,arp,arp_tpa=20.0.0.254 actions=LOCAL\ntable=0,priority=65535,arp,arp_tpa=30.0.0.254 actions=LOCAL\ntable=0,priority=1,arp,nw_dst=10.0.0.1,actions=output:1\ntable=0,priority=1,arp,nw_dst=20.0.0.1,actions=output:2\ntable=0,priority=1,arp,nw_dst=30.0.0.1,actions=output:3\ntable=0,priority=0,actions=resubmit(,1)\n\n#table1  - forward/route\ntable=1,icmp,nw_dst=10.0.0.1,actions=mod_dl_dst=00:00:00:00:00:01,output:1\ntable=1,icmp,nw_dst=20.0.0.1,actions=mod_dl_dst=00:00:00:00:00:02,output:2\ntable=1,icmp,nw_dst=30.0.0.1,actions=mod_dl_dst=00:00:00:00:00:03,output:3\n")))}d.isMDXComponent=!0}}]);