"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[14510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"C#\u4e2d\u4ee5ZedGraph\u756b\u7d71\u8a08\u5716",date:"2013-04-14 17:01",comments:!0,tags:["C#"],description:"\u5728C#\u4e2d\u7e6a\u88fd\u7d71\u8a08\u5716\u8868\uff0c\u5982\u6298\u7dda\u5716\u3001\u5713\u9905\u5716\u3001\u9577\u689d\u5716 ,\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528\u5167\u5efa\u7684Graphics\u7269\u4ef6\u5916\uff0c\u9084\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u5957\u4ef6\u4f86\u756b\u5716,\u9019\u908a\u5c31\u4ecb\u7d39\u7b2c\u4e09\u65b9\u5957\u4ef6 ZedGraph\uff0c\u4e0b\u6b21\u518d\u4ecb\u7d39\u4ee5\u5167\u5efa\u7684\u65b9\u6cd5\u4f86\u7e6a\u5716"},i="INSTALL",p={unversionedId:"2013/zedgraph",id:"2013/zedgraph",title:"C#\u4e2d\u4ee5ZedGraph\u756b\u7d71\u8a08\u5716",description:"\u5728C#\u4e2d\u7e6a\u88fd\u7d71\u8a08\u5716\u8868\uff0c\u5982\u6298\u7dda\u5716\u3001\u5713\u9905\u5716\u3001\u9577\u689d\u5716 ,\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528\u5167\u5efa\u7684Graphics\u7269\u4ef6\u5916\uff0c\u9084\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u5957\u4ef6\u4f86\u756b\u5716,\u9019\u908a\u5c31\u4ecb\u7d39\u7b2c\u4e09\u65b9\u5957\u4ef6 ZedGraph\uff0c\u4e0b\u6b21\u518d\u4ecb\u7d39\u4ee5\u5167\u5efa\u7684\u65b9\u6cd5\u4f86\u7e6a\u5716",source:"@site/docs/2013/zedgraph.md",sourceDirName:"2013",slug:"/2013/zedgraph",permalink:"/docs/2013/zedgraph",draft:!1,tags:[{label:"C#",permalink:"/docs/tags/c"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"C#\u4e2d\u4ee5ZedGraph\u756b\u7d71\u8a08\u5716",date:"2013-04-14 17:01",comments:!0,tags:["C#"],description:"\u5728C#\u4e2d\u7e6a\u88fd\u7d71\u8a08\u5716\u8868\uff0c\u5982\u6298\u7dda\u5716\u3001\u5713\u9905\u5716\u3001\u9577\u689d\u5716 ,\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528\u5167\u5efa\u7684Graphics\u7269\u4ef6\u5916\uff0c\u9084\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u5957\u4ef6\u4f86\u756b\u5716,\u9019\u908a\u5c31\u4ecb\u7d39\u7b2c\u4e09\u65b9\u5957\u4ef6 ZedGraph\uff0c\u4e0b\u6b21\u518d\u4ecb\u7d39\u4ee5\u5167\u5efa\u7684\u65b9\u6cd5\u4f86\u7e6a\u5716"},sidebar:"techPost",previous:{title:"X Window  & X WM on FreeBSD 9.1R",permalink:"/docs/2013/xwindow-on-freebsd-91r"}},l={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install"},"INSTALL"),(0,a.kt)("p",null,"\u76ee\u524d\u6700\u65b0\u7684\u7248\u672c\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://nuget.org/packages/ZedGraph"},"5.16"),"\n\u5b89\u88dd\u65b9\u6cd5\u8acb\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"http://docs.nuget.org/docs/start-here/using-the-package-manager-console"},"Package Manager Console"),"\u4f86\u5b89\u88dd\uff0c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"PM> Install-Package ZedGraph")),(0,a.kt)("p",null,"\u4e4b\u5f8c\u5c31\u6703\u5e6b\u4f60\u5b89\u88dd\u5b8c\u6210\uff0c\u6b64\u6642\u4f60\u7684\u8cc7\u6599\u593e\u5e95\u4e0b\u6703\u6709\u500bpackages\u7684\u8cc7\u6599\u593e\uff0c\u88e1\u9762\u5c31\u653e\u6709\u6b64\u5957\u4ef6\u7684dll\u3002"),(0,a.kt)("h1",{id:"usage"},"USAGE"),(0,a.kt)("p",null,"ZedGraph\u672c\u8eab\u6709\u63d0\u4f9b\u81ea\u5b9a\u7fa9\u7684\u4f7f\u7528\u8005\u5143\u4ef6\uff0c\u6240\u6709\u7684\u7e6a\u5716\u90fd\u662f\u5728\u8a72\u5143\u4ef6\u4e0a\u904b\u4f5c\uff0c\u6240\u4ee5\u5fc5\u9808\u8981\u5148\u52a0\u8f09\u8a72\u5143\u4ef6\n\u5143\u4ef6=>\u9078\u64c7\u9805\u76ee=>\u700f\u89bd=>pkakage/zedgraph.dll"),(0,a.kt)("p",null,"\u9806\u5229\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u5de5\u5177\u7bb1\u4e2d\u62d6\u66f3\u8a72\u5143\u4ef6\u56c9"),(0,a.kt)("p",null,"\u4f7f\u7528\u7684\u65b9\u6cd5\uff0c",(0,a.kt)("a",{parentName:"p",href:"http://www.codeproject.com/Articles/5431/A-flexible-charting-library-for-NET"},"\u5b98\u65b9\u7db2\u7ad9"),"(\u6709\u9ede\u820a)\u4e0a\u9762\u6709\u8a31\u591a\u7684\u6559\u5b78\u8ddf\u7bc4\u4f8b\n\u4ed4\u7d30\u7814\u8b80\u5f8c\u5c31\u5927\u6982\u6703\u7528\u4e86"),(0,a.kt)("p",null,"\u4ee5\u5b98\u65b9\u7bc4\u4f8b\u756b\u4e00\u5f35\u66f2\u7dda\u5716\u4f86\u8aaa\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},'\n    private void CreateGraph( ZedGraphControl zgc )\n    {\n       // get a reference to the GraphPane\n       GraphPane myPane = zgc.GraphPane;\n\n       // Set the Titles\n       myPane.Title.Text = "My Test Graph\\n(For CodeProject Sample)";\n       myPane.XAxis.Title.Text = "My X Axis";\n       myPane.YAxis.Title.Text = "My Y Axis";\n\n       // Make up some data arrays based on the Sine function\n       double x, y1, y2;\n       PointPairList list1 = new PointPairList();\n       PointPairList list2 = new PointPairList();\n       for ( int i = 0; i < 36; i++ )\n       {\n          x = (double)i + 5;\n          y1 = 1.5 + Math.Sin( (double)i * 0.2 );\n          y2 = 3.0 * ( 1.5 + Math.Sin( (double)i * 0.2 ) );\n          list1.Add( x, y1 );\n          list2.Add( x, y2 );\n       }\n\n       // Generate a red curve with diamond\n       // symbols, and "Porsche" in the legend\n       LineItem myCurve = myPane.AddCurve( "Porsche",\n             list1, Color.Red, SymbolType.Diamond );\n\n       // Generate a blue curve with circle\n       // symbols, and "Piper" in the legend\n       LineItem myCurve2 = myPane.AddCurve( "Piper",\n             list2, Color.Blue, SymbolType.Circle );\n\n       // Tell ZedGraph to refigure the\n       // axes since the data have changed\n       zgc.AxisChange();\n    }\n')),(0,a.kt)("p",null,"\u8a72\u7b2c\u4e09\u65b9\u5957\u4ef6\u63d0\u4f9b\u7684\u81ea\u5b9a\u7fa9\u5143\u4ef6\u53eb\u505a",(0,a.kt)("strong",{parentName:"p"},"ZedGraphControl"),"\n\u800c\u6211\u5011\u8981\u756b\u5716\u5247\u662f\u5728",(0,a.kt)("strong",{parentName:"p"},"GraphPane"),"\u4e0a\u53bb\u64cd\u4f5c"),(0,a.kt)("p",null,"\u6240\u4ee5\u9996\u5148\u8981\u5148\u5f9e\u53d6\u5f97GraphPane"),(0,a.kt)("p",null,"\u63a5\u8005\u5148\u5b9a\u7fa9\u8a72\u5716\u8868\u7684"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6a19\u984c"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6a6b\u8ef8\u6a19\u984c"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u7e31\u8ef8\u6a19\u984c")),(0,a.kt)("p",null,"\u63a5\u8005\u6211\u5011\u8981\u52a0\u5165\u8cc7\u6599\u5230\u8a72\u5716\u8868\u4e2d\uff0c\u5c0d\u65bc\u4e00\u5f352D\u7684\u5716\u8868\u4f86\u8aaa"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"PointPairList"),"\u9019\u500b\u7269\u4ef6\u4f86\u5b58\u653eXY\u7684\u5ea7\u6a19\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u6700\u5f8c\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"LineItem"),"\u4f86\u628a\u76f8\u95dc\u7684\u9ede\u7d66\u9023\u8d77\u4f86"),(0,a.kt)("p",null,"\u7531\u65bc\u8cc7\u6599\u52a0\u5165\u5716\u8868\u4e2d\uff0c\u6211\u5011\u7684\u5ea7\u6a19\u8ef8\u8981\u6839\u64da\u8cc7\u6599\u7522\u751f\u8b8a\u5316\uff0c\u6b64\u6642\u5c31\u547c\u53eb\nAxisChange()\u4f86\u6539\u8b8a\u3002"))}d.isMDXComponent=!0}}]);