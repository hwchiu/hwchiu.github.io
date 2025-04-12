"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[24936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Ports information in Floodlight",date:"2014-07-26 09:29",tags:["SDN","Openflow","Floodlight","Network","Java","SourceCode"]},l=void 0,i={unversionedId:"2014/port-s-information-in-floodlight",id:"2014/port-s-information-in-floodlight",title:"Ports information in Floodlight",description:"Question",source:"@site/docs/2014/port-s-information-in-floodlight.md",sourceDirName:"2014",slug:"/2014/port-s-information-in-floodlight",permalink:"/docs/2014/port-s-information-in-floodlight",draft:!1,tags:[{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Openflow",permalink:"/docs/tags/openflow"},{label:"Floodlight",permalink:"/docs/tags/floodlight"},{label:"Network",permalink:"/docs/tags/network"},{label:"Java",permalink:"/docs/tags/java"},{label:"SourceCode",permalink:"/docs/tags/source-code"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"Ports information in Floodlight",date:"2014-07-26 09:29",tags:["SDN","Openflow","Floodlight","Network","Java","SourceCode"]},sidebar:"techPost",previous:{title:"N-Queen problem",permalink:"/docs/2014/n-queen-problem"},next:{title:"REST API services in Floodlight (Topology)",permalink:"/docs/2014/rest-api-services-in-floodlight-topology"}},u={},p=[{value:"Question",id:"question",level:2},{value:"Solution",id:"solution",level:2},{value:"Example",id:"example",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"How can we get the port's information in Floodlight?"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Floodlight use a ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutablePort")," class to represent a switch port and a ",(0,o.kt)("inlineCode",{parentName:"p"},"IOFSwitch")," class has a Portmanager which will manager all ImmutablePort.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The content of ImmutablePort is the same as what it described in Openflow specification 1.0."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ImmutablePort {\n    private final short portNumber;\n    private final byte[] hardwareAddress;\n    private final String name;\n    private final EnumSet<OFPortConfig> config;\n    private final boolean portStateLinkDown;\n    private final OFPortState stpState;\n    private final EnumSet<OFPortFeatures> currentFeatures;\n    private final EnumSet<OFPortFeatures> advertisedFeatures;\n    private final EnumSet<OFPortFeatures> supportedFeatures;\n    private final EnumSet<OFPortFeatures> peerFeatures;\n    ....\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Portmanger provide some API to allow other object to fetch the ImmutablePort.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public ImmutablePort getPort(String name) {\n    if (name == null) {\n        throw new NullPointerException("Port name must not be null");\n    }\n    lock.readLock().lock();\n    try {\n        return portsByName.get(name.toLowerCase());\n    } finally {\n        lock.readLock().unlock();\n    }\n}\n\npublic ImmutablePort getPort(Short portNumber) {\n    lock.readLock().lock();\n    try {\n        return portsByNumber.get(portNumber);\n    } finally {\n        lock.readLock().unlock();\n    }\n}\n\npublic List<ImmutablePort> getPorts() {\n    lock.readLock().lock();\n    try {\n        return portList;\n    } finally {\n        lock.readLock().unlock();\n    }\n}\n\npublic List<ImmutablePort> getEnabledPorts() {\n    lock.readLock().lock();\n    try {\n        return enabledPortList;\n    } finally {\n        lock.readLock().unlock();\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since the Portmanager is a private member of IOFSwitch, you can't directly use it. You must use the API provied by IOFSwitch to interact with Portmanager.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @JsonIgnore\n    public Collection<ImmutablePort> getEnabledPorts() {\n        return portManager.getEnabledPorts();\n    }\n\n    @Override\n    @JsonIgnore\n    public Collection<Short> getEnabledPortNumbers() {\n        return portManager.getEnabledPortNumbers();\n    }\n\n    @Override\n    public ImmutablePort getPort(short portNumber) {\n        return portManager.getPort(portNumber);\n    }\n\n    @Override\n    public ImmutablePort getPort(String portName) {\n        return portManager.getPort(portName);\n    }\n\n    @Override\n    @JsonProperty("ports")\n    public Collection<ImmutablePort> getPorts() {\n        return portManager.getPorts();\n    }\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Assume the type of sw is IOFSwitch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Collection<ImmutablePort> swPorts = sw.getPorts();\nIterator<ImmutablePort> it = swPorts.iterator();\nwhile(it.hasNext()){\n    ImmutablePort port = it.next();\n    //do something\n}\n")))}m.isMDXComponent=!0}}]);