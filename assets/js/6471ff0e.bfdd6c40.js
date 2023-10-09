"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[63638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={title:"X Window  & X WM on FreeBSD 9.1R",date:"2013-10-05 09:04",comments:!0,tags:["System","FreeBSD"],description:"\u672c\u6587\u4ecb\u7d39\u5728 Unix \u76f8\u95dc\u4f5c\u696d\u7cfb\u7d71\u4e2d\u5e38\u5e38\u4f7f\u7528\u7684\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\uff0c X Window \u7684\u67b6\u69cb\u4ee5\u53ca\u7c21\u55ae\u8a2d\u5b9a\uff0c\u9019\u7a2e Clinet/Server \u7684\u67b6\u69cb\u4e0b\uff0c\u8981\u5982\u4f55\u8a2d\u5b9a\u4e26\u4e14\u6b63\u78ba\u4f7f\u7528\u3002\u540c\u6642\u4e5f\u6703\u4ecb\u7d39\u4e00\u4e0b X Window Manager \u7684\u6982\u5ff5\u3002"},i="X Window",o={unversionedId:"techPost/2013/xwindow-on-freebsd-91r",id:"techPost/2013/xwindow-on-freebsd-91r",title:"X Window  & X WM on FreeBSD 9.1R",description:"\u672c\u6587\u4ecb\u7d39\u5728 Unix \u76f8\u95dc\u4f5c\u696d\u7cfb\u7d71\u4e2d\u5e38\u5e38\u4f7f\u7528\u7684\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\uff0c X Window \u7684\u67b6\u69cb\u4ee5\u53ca\u7c21\u55ae\u8a2d\u5b9a\uff0c\u9019\u7a2e Clinet/Server \u7684\u67b6\u69cb\u4e0b\uff0c\u8981\u5982\u4f55\u8a2d\u5b9a\u4e26\u4e14\u6b63\u78ba\u4f7f\u7528\u3002\u540c\u6642\u4e5f\u6703\u4ecb\u7d39\u4e00\u4e0b X Window Manager \u7684\u6982\u5ff5\u3002",source:"@site/docs/techPost/2013/xwindow-on-freebsd-91r.md",sourceDirName:"techPost/2013",slug:"/techPost/2013/xwindow-on-freebsd-91r",permalink:"/docs/techPost/2013/xwindow-on-freebsd-91r",draft:!1,tags:[{label:"System",permalink:"/docs/tags/system"},{label:"FreeBSD",permalink:"/docs/tags/free-bsd"}],version:"current",frontMatter:{title:"X Window  & X WM on FreeBSD 9.1R",date:"2013-10-05 09:04",comments:!0,tags:["System","FreeBSD"],description:"\u672c\u6587\u4ecb\u7d39\u5728 Unix \u76f8\u95dc\u4f5c\u696d\u7cfb\u7d71\u4e2d\u5e38\u5e38\u4f7f\u7528\u7684\u684c\u9762\u61c9\u7528\u7a0b\u5f0f\uff0c X Window \u7684\u67b6\u69cb\u4ee5\u53ca\u7c21\u55ae\u8a2d\u5b9a\uff0c\u9019\u7a2e Clinet/Server \u7684\u67b6\u69cb\u4e0b\uff0c\u8981\u5982\u4f55\u8a2d\u5b9a\u4e26\u4e14\u6b63\u78ba\u4f7f\u7528\u3002\u540c\u6642\u4e5f\u6703\u4ecb\u7d39\u4e00\u4e0b X Window Manager \u7684\u6982\u5ff5\u3002"},sidebar:"techPost",previous:{title:"Wireshark with Openflow-Plugin in Fedora 14",permalink:"/docs/techPost/2013/wireshark-with-openflow-plugin-in-fedora-14"},next:{title:"C#\u4e2d\u4ee5ZedGraph\u756b\u7d71\u8a08\u5716",permalink:"/docs/techPost/2013/zedgraph"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Config",id:"config",level:2},{value:"Run",id:"run",level:2},{value:"Install",id:"install-1",level:2},{value:"Config",id:"config-1",level:2},{value:"Run",id:"run-1",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"x-window"},"X Window"),(0,l.kt)("p",null,"X window \u662f\u4e00\u500b\u518dUnix-base system\u7684GUI Desktop.\n\u6700\u521d\u8a2d\u8a08\u7684\u76ee\u7684\u5c31\u662f\u5e0c\u671b\u662f\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\uff0c\u6240\u4ee5\u8981\u76e1\u91cf\u7684\u8ddf\u786c\u9ad4\u6c92\u6709\u95dc\u4fc2\n\u67b6\u69cb\u4e2d\u5206\u6210",(0,l.kt)("strong",{parentName:"p"},"client"),"\u8ddf",(0,l.kt)("strong",{parentName:"p"},"server"),". \u5f7c\u6b64\u900f\u904e\u7db2\u8def\u50b3\u9001\u8cc7\u6599\uff0c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u500bserver\u53ef\u4ee5\u8ddf\u5f88\u591a\u500bclient\u9023\u63a5"),(0,l.kt)("li",{parentName:"ol"},"server\u7aef\u8981\u63a5\u87a2\u5e55\u3001\u9375\u76e4\u3001\u6ed1\u9f20\u3002\u4f7f\u7528\u8005\u4f7f\u7528 server\u4f86\u64cd\u63a7"),(0,l.kt)("li",{parentName:"ol"},"server\u6703\u628a\u4e00\u4e9bin/out\u7684event\u901a\u77e5\u6bcf\u500bclient\uff0c\u6bcf\u500bclient\u5404\u81ea\u904b\u7b97\u5b8c\u7562\u5f8c\uff0c\u518d\u544a\u8a34server\u8981\u5982\u4f55\u628a\u756b\u9762\u7d66\u6e32\u67d3\u51fa\u4f86"),(0,l.kt)("li",{parentName:"ol"},"\u6574\u500b\u904b\u7b97\u4e3b\u8981\u96c6\u4e2d\u5728client\u8eab\u4e0a\uff0cclient\u662f\u500b\u61c9\u7528\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u662f\u500b\u700f\u89bd\u5668\uff0c\u53ef\u4ee5\u662f\u500b\u64ad\u653e\u5668...\u7b49")),(0,l.kt)("p",null,"\u6700\u7c21\u55ae\u7684\u67b6\u69cb\u4e0b\uff0cclient\u8ddfserver\u653e\u5728\u540c\u4e00\u53f0\u96fb\u8166\u4e2d\uff0c\u7136\u5f8c\u76f4\u63a5\u5f88\u591a\u500bclient\uff0c\u6240\u6709\u7684client\u7d44\u5408\u800c\u6210\u4e00\u500bGUI"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"portmaster  x11/xorg"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88dd \u6ed1\u9f20\u8ddf\u9375\u76e4\u7684\u9a45\u52d5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sysutils/hal"),(0,l.kt)("li",{parentName:"ul"},"devel/dbus"),(0,l.kt)("li",{parentName:"ul"},'hald_enable="YES" >> /etc/rc.conf'),(0,l.kt)("li",{parentName:"ul"},'dbus_enable="YES" >> /etc/rc.conf')))),(0,l.kt)("h2",{id:"config"},"Config"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Xorg -configure  (\u7522\u751f X11\u9810\u8a2d\u8a2d\u5b9a\u6a94)"),(0,l.kt)("li",{parentName:"ul"},"\u6e2c\u8a66\u8a2d\u5b9a\u6a94OK\u8207\u5426",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Xorg -config /root/xorg.conf.new"))),(0,l.kt)("li",{parentName:"ul"},"cp /root/xorg.conf.new /etc/X11/xorg.conf\n\u5982\u679c\u6709\u8981\u91dd\u5c0d\u4e00\u4e9b\u786c\u9ad4\u3001\u986f\u793a\u3001\u6ed1\u9f20\u53bb\u4f5c\u8abf\u6574\uff0c\u5c31\u91dd\u5c0d\u9019\u500bxorg.conf\u53bb\u7de8\u8f2f\u5373\u53ef")),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"startx",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9019\u6642\u5019\u6703\u770b\u5230\u4e09\u500b\u8996\u7a97\uff0c\u5c31\u4ee3\u8868X11\u5b89\u88dd\u6210\u529f\u4e86")))),(0,l.kt)("h1",{id:"x-window-manager"},"X Window Manager"),(0,l.kt)("p",null,"Window Manager(WM) \u53ef\u4ee5\u770b\u4f5c\u4e00\u500b\u7279\u5225\u7684X client, \u63d0\u4f9b\u4e86\u985e\u4f3cwindows\u7684\u4ecb\u9762\u7d66\u4f7f\u7528\u8005\u4f7f\u7528\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- \u80cc\u666f\u3001\u4e3b\u984c\u3001\u684c\u5e03\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u865b\u64ec\u684c\u9762"),(0,l.kt)("li",{parentName:"ul"},"\u8996\u7a97\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u79fb\u52d5\u3001\u653e\u5927\u3001\u7e2e\u5c0f...")))),(0,l.kt)("p",null,"\u518dX server\u8ddfX client\u4e4b\u9593\u7684\u6e9d\u901a\u90fd\u6703\u88ab\u5c0e\u5230WM\u4f86\u8655\u7406\u3002"),(0,l.kt)("p",null,"\u6bd4\u8f03\u4e4b\u540d\u7684\u6709"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gnome"),(0,l.kt)("li",{parentName:"ul"},"KDE"),(0,l.kt)("li",{parentName:"ul"},"XFCE"),(0,l.kt)("li",{parentName:"ul"},"....\u7b49")),(0,l.kt)("h2",{id:"install-1"},"Install"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Xfce",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x11-wm/xfce"))),(0,l.kt)("li",{parentName:"ul"},"KDE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"x11/kde4")))),(0,l.kt)("h2",{id:"config-1"},"Config"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u8981\u7de8\u8f2fxinitrc\u6a94\u6848\uff0c\u8b93\u6211\u5011\u57f7\u884cXorg\u7684\u6642\u5019\u6703\u53bb\u57f7\u884cWM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u7684\u6a94\u6848\u4f4d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/lib/X11/xinit/xinitrc")),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5e33\u865f\u7684\u4f4d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.xinitrc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'echo "/usr/local/bin/startkde4" > ~/.xinitrc'),"\n\u5982\u6b64\u4e00\u4f86\uff0c\u7576\u57f7\u884cstartx\u7684\u6642\u5019\uff0c\u6703\u5148\u8b80\u53d6\u5bb6\u76ee\u9304\u5e95\u4e0b\u7684.xinitrc,\u7136\u5f8c\u5c31\u53bb\u57f7\u884c\u5c0d\u61c9\u7684WM")),(0,l.kt)("h2",{id:"run-1"},"Run"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"startx")))}d.isMDXComponent=!0}}]);