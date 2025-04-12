"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[21363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,d=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return n?i.createElement(d,r(r({ref:t},m),{},{components:n})):i.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const l={title:"[DevOps] Travis CI - Step/Job/Stage",date:new Date("2018-09-01T09:09:13.000Z"),tags:["TravisCI","DevOps","Linux"],description:"\u9019\u6b21\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u4e00\u4e9b\u95dc\u65bc TravisCI \u7684\u4f7f\u7528\u5fc3\u5f97\uff0c\u76f8\u4fe1\u6709\u5728 Github \u4e0a\u9762\u7dad\u8b77\u5c08\u6848\u7684\u4eba\u61c9\u8a72\u90fd\u5c0d\u5404\u5f0f\u5404\u6a23\u7684 CI \u7cfb\u7d71\u4e0d\u964c\u751f\uff0c\u4e0d\u8ad6\u662f \u516c\u6709\u670d\u52d9\u7684 TravisCI \u6216\u662f CircleCI \u6216\u662f\u81ea\u5df1\u900f\u904e Jenkins \u4f86\u8655\u7406\u3002\u672c\u7bc7\u60f3\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u91cd\u9ede\u662f\u5728 TravisCI \u4e0a\u95dc\u65bc Build Stage \u7684\u6982\u5ff5\uff0c\u900f\u904e Build Stage\uff0c\u6211\u5011\u53ef\u4ee5\u66f4\u6709\u67b6\u69cb\u7684\u53bb\u8a2d\u8a08\u8a72\u5c08\u6848\u7684 CI/CD \u6d41\u7a0b\u3002"},r="Preface",p={unversionedId:"2018/travisci-step-job-stage",id:"2018/travisci-step-job-stage",title:"[DevOps] Travis CI - Step/Job/Stage",description:"\u9019\u6b21\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u4e00\u4e9b\u95dc\u65bc TravisCI \u7684\u4f7f\u7528\u5fc3\u5f97\uff0c\u76f8\u4fe1\u6709\u5728 Github \u4e0a\u9762\u7dad\u8b77\u5c08\u6848\u7684\u4eba\u61c9\u8a72\u90fd\u5c0d\u5404\u5f0f\u5404\u6a23\u7684 CI \u7cfb\u7d71\u4e0d\u964c\u751f\uff0c\u4e0d\u8ad6\u662f \u516c\u6709\u670d\u52d9\u7684 TravisCI \u6216\u662f CircleCI \u6216\u662f\u81ea\u5df1\u900f\u904e Jenkins \u4f86\u8655\u7406\u3002\u672c\u7bc7\u60f3\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u91cd\u9ede\u662f\u5728 TravisCI \u4e0a\u95dc\u65bc Build Stage \u7684\u6982\u5ff5\uff0c\u900f\u904e Build Stage\uff0c\u6211\u5011\u53ef\u4ee5\u66f4\u6709\u67b6\u69cb\u7684\u53bb\u8a2d\u8a08\u8a72\u5c08\u6848\u7684 CI/CD \u6d41\u7a0b\u3002",source:"@site/docs/2018/travisci-step-job-stage.md",sourceDirName:"2018",slug:"/2018/travisci-step-job-stage",permalink:"/docs/2018/travisci-step-job-stage",draft:!1,tags:[{label:"TravisCI",permalink:"/docs/tags/travis-ci"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"[DevOps] Travis CI - Step/Job/Stage",date:"2018-09-01T09:09:13.000Z",tags:["TravisCI","DevOps","Linux"],description:"\u9019\u6b21\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u4e00\u4e9b\u95dc\u65bc TravisCI \u7684\u4f7f\u7528\u5fc3\u5f97\uff0c\u76f8\u4fe1\u6709\u5728 Github \u4e0a\u9762\u7dad\u8b77\u5c08\u6848\u7684\u4eba\u61c9\u8a72\u90fd\u5c0d\u5404\u5f0f\u5404\u6a23\u7684 CI \u7cfb\u7d71\u4e0d\u964c\u751f\uff0c\u4e0d\u8ad6\u662f \u516c\u6709\u670d\u52d9\u7684 TravisCI \u6216\u662f CircleCI \u6216\u662f\u81ea\u5df1\u900f\u904e Jenkins \u4f86\u8655\u7406\u3002\u672c\u7bc7\u60f3\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u91cd\u9ede\u662f\u5728 TravisCI \u4e0a\u95dc\u65bc Build Stage \u7684\u6982\u5ff5\uff0c\u900f\u904e Build Stage\uff0c\u6211\u5011\u53ef\u4ee5\u66f4\u6709\u67b6\u69cb\u7684\u53bb\u8a2d\u8a08\u8a72\u5c08\u6848\u7684 CI/CD \u6d41\u7a0b\u3002"},sidebar:"techPost",previous:{title:"\u4f7f\u7528 Travis CI \u70ba\u4f60\u7684 Kubernetes \u61c9\u7528\u7a0b\u5f0f\u6253\u9020\u81ea\u52d5\u5316\u6e2c\u8a66",permalink:"/docs/2018/travisci-k8s"},next:{title:"2017",permalink:"/docs/category/2017"}},o={},s=[{value:"install/script",id:"installscript",level:2},{value:"Example",id:"example",level:2},{value:"Solution",id:"solution",level:2},{value:"Definition",id:"definition",level:2},{value:"Multiple Job",id:"multiple-job",level:2},{value:"Custom Job",id:"custom-job",level:2},{value:"Example",id:"example-1",level:2},{value:"Reference",id:"reference",level:2}],m={toc:s},k="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preface"},"Preface"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u5047\u8a2d\u6211\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Github")," \u5c08\u6848\u6703\u5e0c\u671b\u6bcf\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"Release"),"\u6642\u6703\u6709\u4e0b\u5217\u7684\u884c\u70ba"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9032\u884c \u55ae\u5143\u6e2c\u8a66/\u6574\u5408\u6e2c\u8a66 \u7b49\u5404\u7a2e\u78ba\u4fdd\u7a0b\u5f0f\u78bc\u6b63\u5e38\u904b\u4f5c\u7684\u6e2c\u8a66"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," \u76f8\u95dc\u6620\u50cf\u6a94\u4e26\u4e14\u66f4\u65b0\u5230\u76f8\u95dc\u7684\u5bb9\u5668\u5009\u5eab"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u6700\u65b0\u7684\u7a0b\u5f0f\u78bc\u90e8\u5c6c\u5230\u76f8\u95dc\u7684\u74b0\u5883\u4e0a")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6703\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u4e0b\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u8a2d\u5b9a\u4e2d\uff0c\u6211\u5011\u6709\u4ec0\u9ebc\u8fa6\u6cd5\u53ef\u4ee5\u6eff\u8db3\u4e0a\u8ff0\u7684\u9700\u6c42"),(0,a.kt)("p",null,"\u672c\u6587\u6700\u5f8c\u7528\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"travisCI")," \u8a2d\u5b9a\u6a94\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchiu/Travis-MultisStage/blob/master/.travis.yml"},"TravisCI Example")," \u627e\u5230"),(0,a.kt)("h1",{id:"build-steps"},"Build Steps"),(0,a.kt)("p",null,"\u6240\u8b02\u7684\u300c\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668\u300d\uff0c\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u4f86\u89e3\u6c7a\u6211\u5011\u7684\u554f\u984c\u4e4b\u524d\uff0c\u6211\u5011\u5fc5\u9808\u8981\u5148\u77ad\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u57fa\u672c\u6982\u5ff5\uff0c\u7136\u5f8c\u601d\u8003\u5982\u4f55\u7528\u9019\u4e9b\u57fa\u672c\u6982\u5ff5\u4f86\u5b8c\u6210\u6211\u5011\u7684\u9700\u6c42\u3002"),(0,a.kt)("h2",{id:"installscript"},"install/script"),(0,a.kt)("p",null,"\u6574\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u751f\u547d\u9031\u671f\u662f\u7531\u5169\u500b\u4e3b\u8981\u6b65\u9a5f\u4f86\u69cb\u6210"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"install: \u7528\u4f86\u5b89\u88dd\u4efb\u4f55\u76f8\u4f9d\u6027\u5957\u4ef6\u7684\u968e\u6bb5"),(0,a.kt)("li",{parentName:"ol"},"script: \u771f\u6b63\u7528\u4f86\u9032\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"CI")," \u76f8\u95dc\u6e2c\u8a66\u7684\u968e\u6bb5")),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u9019\u5169\u500b\u6b65\u9a5f\u5916\uff0c\u4e5f\u6709\u6240\u8b02\u985e\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"Environment")," \u9019\u7a2e",(0,a.kt)("inlineCode",{parentName:"p"},"\u975e\u5fc5\u8981"),"\u9078\u9805\u53ef\u4ee5\u8b93\u6574\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"TrasivCI"),"\u8a2d\u5b9a\u66f4\u7c21\u6f54\n\u8b6c\u5982\u53ef\u4ee5\u8b93 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u5e6b\u4f60\u6e96\u5099\u76f8\u95dc\u7684\u74b0\u5883\u7a0b\u5f0f\u8a9e\u8a00\u74b0\u5883\u8207\u7279\u5b9a\u7248\u672c\uff0c\u8b6c\u5982\u8aaa ",(0,a.kt)("inlineCode",{parentName:"p"},"golang 1.8, 1.9")),(0,a.kt)("p",null,"\u5c0d\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"install/script")," \u9019\u5169\u500b\u57f7\u884c\u6b65\u9a5f\u4f86\u8aaa\uff0c\u672c\u8eab\u70ba\u4e86\u8b93\u904b\u4f5c\u908f\u8f2f\u66f4\u52a0\u7d30\u81a9\uff0c\u6240\u4ee5\u53c8\u884d\u751f\u51fa\u4e86\u524d\u5f8c\u6b65\u9a5f\u7684\u6982\u5ff5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"before_install: \u8a72\u6b65\u9a5f\u6703\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"install")," \u524d\u904b\u884c\uff0c\u4e3b\u8981\u662f\u7528\u4f86\u6e96\u5099\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"install")," \u6b65\u9a5f\u6240\u9700\u8981\u7684\u8cc7\u6e90\uff0c\u8b6c\u5982\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"apt-get update")," \u7b49\u66f4\u65b0\u5957\u4ef6\u5009\u5eab\u3002"),(0,a.kt)("li",{parentName:"ol"},"before_script: \u8a72\u6b65\u9a5f\u6703\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"script")," \u524d\u904b\u884c\uff0c\u5982\u540c ",(0,a.kt)("inlineCode",{parentName:"li"},"before_install")," \u4e00\u6a23\uff0c\u70ba\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"script")," \u9032\u884c\u8cc7\u6e90\u6e96\u5099\u4f86\u6eff\u8db3\u771f\u6b63\u6e2c\u8a66\u6240\u9700\uff0c\u8b6c\u5982\u8cc7\u6599\u5eab\u7684\u5efa\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"after_script: \u7576 ",(0,a.kt)("inlineCode",{parentName:"li"},"script")," \u904b\u884c\u5b8c\u7562\u5f8c\u6703\u57f7\u884c\u7684\u6b65\u9a5f\uff0c\u5be6\u969b\u4e0a\u9084\u6709\u6240\u8b02\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"after_success")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"li"},"after_failure")," \u66f4\u7d30\u90e8\u7684\u91dd\u5c0d\u6e2c\u8a66\u7684\u7d50\u679c\u4f86\u5340\u5206\u7684\u6b65\u9a5f\u3002")),(0,a.kt)("p",null,"\u6839\u64da\u76f8\u95dc\u4eba\u54e1\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Github Issue")," \u7684\u56de\u7b54\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"before_install")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"before_script")," \u7684\u4f7f\u7528\u6642\u6a5f\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"before_install")," runs before the install step, which is meant to install any required packages or dependencies. You can prepare things before you run this step, or you can e.g. run sudo apt-get update to refresh the apt indexes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"before_script")," runs before the actual test/build script runs. It's commonly used to run any preparation steps required to get the build running, for instance copy database configurations, set up any additional environment configuration, and so on."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u7bc4\u4e00\u500b\u975e\u5e38\u7c21\u55ae\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u8a2d\u5b9a\u6a94\u6848\uff0c\u5728\u6b64\u74b0\u5883\u4e2d\uff0c\u6211\u5011\u8981\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u6e96\u5099\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"golang 1.8")," \u7248\u672c\u7684\u74b0\u5883\uff0c\u540c\u6642\u5c0d\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \u9019\u5169\u500b\u968e\u6bb5\u6211\u5011\u90fd\u57f7\u884c\u975e\u5e38\u7c21\u55ae\u7684\u6307\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml="},'language: go\n\ngo:\n  - "1.8"\n\nbefore_install:\n  - echo "before_install"\n\ninstall:\n  - echo "install"\n  -\nbefore_script:\n  - echo "before_script"\n\nscript:\n  - echo "script"\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u904b\u884c\u7d50\u679c\u5982\u4e0b\u5716\uff0c\u8a72\u5716\u793a\u6211\u5011\u53ef\u4ee5\u89c0\u5bdf\u5230"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"golang \u7248\u672c 1.8"),(0,a.kt)("li",{parentName:"ol"},"\u56db\u500b\u6b65\u9a5f\u7684\u7d50\u679c\u4f9d\u5e8f\u8f38\u51fa")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/14TXbFV.png",alt:"Imgur"})),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"\u6709\u4e86\u95dc\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u5efa\u7f6e\u9031\u671f\u7684\u6982\u5ff5\u5f8c\uff0c\u56de\u904e\u982d\u4f86\u63a2\u8a0e\u4e00\u4e9b\u4e0b\u6700\u521d\u7684\u9700\u6c42"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9032\u884c \u55ae\u5143\u6e2c\u8a66/\u6574\u5408\u6e2c\u8a66 \u7b49\u5404\u7a2e\u78ba\u4fdd\u7a0b\u5f0f\u78bc\u6b63\u5e38\u904b\u4f5c\u7684\u6e2c\u8a66"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," \u76f8\u95dc\u6620\u50cf\u6a94\u4e26\u4e14\u66f4\u65b0\u5230\u76f8\u95dc\u7684\u5bb9\u5668\u5009\u5eab"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u6700\u65b0\u7684\u7a0b\u5f0f\u78bc\u90e8\u5c6c\u5230\u76f8\u95dc\u7684\u74b0\u5883\u4e0a")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9019\u4e09\u500b\u8981\u6c42\u662f\u6709\u4f9d\u8cf4\u6027\u7684\uff0c\u524d\u9762\u7684\u5931\u6557\uff0c\u5f8c\u9762\u7684\u5c31\u4e0d\u9700\u8981\u904b\u884c\u3002\n\u9019\u908a\u6c92\u6709\u4e00\u500b\u6a19\u6e96\u7b54\u6848\uff0c\u6709\u975e\u5e38\u591a\u7684\u5be6\u73fe\u65b9\u5f0f\uff0c\u8b6c\u5982\u8aaa"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c07\u6240\u6709\u7684\u6b65\u9a5f\u90fd\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"script")," \u9019\u500b\u6b65\u9a5f\u53bb\u4f9d\u5e8f\u57f7\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"script"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"after_script")," \u751a\u81f3\u662f\u5176\u4ed6 ",(0,a.kt)("inlineCode",{parentName:"li"},"deploy")," \u7b49\u4e0d\u540c\u7684\u6b65\u9a5f\u4f86\u4f9d\u5e8f\u5b8c\u6210\u9019\u4e9b\u4e8b\u60c5")),(0,a.kt)("p",null,"\u8b6c\u5982\u4e0b\u9762\u7bc4\u4f8b (\u55ae\u7d14\u8209\u4f8b)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml="},'language: go\ngo:\n  - "1.8"\nbefore_install:\n  - echo "before_install"\ninstall:\n  - echo "install"\nbefore_script:\n  - echo "before_script"\nscript:\n  - go test -v ./...\nafter_script:\n  - sudo docker build -t ....\n  - sudo docker push ....\ndeploy:\n  - ./deploy.sh\n\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u5230\u5b98\u65b9\u7db2\u9801\u9019\u908a\u5b78\u5230\u66f4\u591a\u4e0d\u540c\u7684\u5efa\u7f6e\u6b65\u9a5f\u4ee5\u53ca\u5f7c\u6b64\u4e4b\u9593\u7684\u5148\u5f8c\u95dc\u4fc2\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/customizing-the-build/"},"https://docs.travis-ci.com/user/customizing-the-build/")),(0,a.kt)("p",null,"\u7528\u4e0b\u5217\u9019\u5f35\u5716\u4f86\u5e6b\u9019\u500b\u7ae0\u7bc0\u505a\u4e00\u500b\u7e3d\u7d50"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Mrb22oE.png",alt:"Imgur"})),(0,a.kt)("h1",{id:"job"},"Job"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"\u77ad\u89e3\u4e86\u57fa\u672c\u7684\u7528\u6cd5\u5f8c\uff0c\u6211\u5011\u8981\u4f86\u770b\u770b\u4e00\u4e9b\u95dc\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u9032\u968e\u7528\u6cd5\uff0c\u770b\u770b\u900f\u904e\u9019\u4e9b\u9032\u968e\u7528\u6cd5\u6211\u5011\u80fd\u5920\u5b8c\u6210\u4ec0\u9ebc\u6a23\u66f4\u8c50\u5bcc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," \u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u5148\u5b9a\u7fa9\u4ec0\u9ebc\u53eb\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u5c31\u662f\u4e00\u500b\u6b77\u7d93 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u751f\u547d\u9031\u671f\u6240\u6709\u6b65\u9a5f\u7684\u57fa\u672c\u55ae\u4f4d\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u4e00\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u7c21\u55ae\u4f86\u8aaa\u6703\u7d93\u6b77\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"Environment"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"before_install"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"before_script"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"after_script")," \u6240\u6709\u6b65\u9a5f"),(0,a.kt)("p",null,"\u9019\u908a\u5217\u8209\u7684\u6b65\u9a5f\u4e26\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI"),"\u7684\u6240\u6709\u6b65\u9a5f\uff0c\u53ea\u662f\u8209\u51fa\u5e7e\u500b\u5e38\u898b\u7684\u6b65\u9a5f"),(0,a.kt)("h2",{id:"multiple-job"},"Multiple Job"),(0,a.kt)("p",null,"\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u7684\u57fa\u672c\u6982\u5ff5\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5f80\u4e0b\u601d\u8003\u4e00\u4e9b\u66f4\u9032\u968e\u7684\u7528\u6cd5\u3002"),(0,a.kt)("p",null,"\u5047\u8a2d\u5c08\u6848\u672c\u8eab\u662f\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"golang")," \u7a0b\u5f0f\u8a9e\u8a00\u64b0\u5beb\u800c\u6210\u7684\uff0c\u6211\u5011\u73fe\u5728\u5e0c\u671b\u6e2c\u8a66\u8a72\u5c08\u6848\u5728\u4e0d\u540c ",(0,a.kt)("inlineCode",{parentName:"p"},"golang")," \u7248\u672c\u4e0b\u662f\u5426\u90fd\u80fd\u5920\u6b63\u5e38\u904b\u884c\u3002\n\u8209\u4f8b\u4f86\u8aaa\uff0c\u6211\u5e0c\u671b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"golang 1.8")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"golang 1.9")," \u9019\u5169\u500b\u7248\u672c\u4f86\u9032\u884c\u5c08\u6848\u7684\u6e2c\u8a66\u3002"),(0,a.kt)("p",null,"\u554f\u984c\u4f86\u4e86\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u8981\u5982\u4f55\u900f\u904e",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI"),"\u4f86\u5b8c\u6210\u5462?\n\u6700\u76f4\u89ba\u7684\u5c31\u662f\u6211\u5011\u4ec0\u9ebc\u90fd\u786c\u5e79\uff0c\u81ea\u5df1\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u5167\u53bb\u5b89\u88dd\u5404\u5f0f\u5404\u6a23\u7684\u74b0\u5883\uff0c\u7136\u5f8c\u64b0\u5beb\u8173\u672c\u53bb\u5206\u958b\u5404\u5f0f\u5404\u6a23\u7684\u6e2c\u8a66\uff0c\u5c07\u6240\u6709\u7684\u9700\u6c42\u90fd\u5728",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u500bJob")," \u5167\u5b8c\u6210\u3002\n\u7576\u7136\u9019\u7a2e\u60c5\u6cc1\u4e0b\u6574\u500b\u74b0\u5883\u6e96\u5099/\u6e2c\u8a66\u7b49\u76f8\u95dc\u7684\u908f\u8f2f\u5c31\u6703\u8907\u96dc\u4e14\u4e0d\u597d\u7dad\u8b77"),(0,a.kt)("p",null,"\u70ba\u4e86\u8b93\u6574\u500b\u6e2c\u8a66\u7684\u67b6\u69cb\u4e7e\u6de8\u8207\u660e\u77ad\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"Travis")," \u5e73\u884c\u7684\u904b\u884c\u591a\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u4f86\u6eff\u8db3\u6211\u5011\u7684\u9700\u6c42\u3002\n\u5728\u6b64\u67b6\u69cb\u4e0b\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Travis")," \u6703\u4f75\u884c\u7684\u53bb\u904b\u884c\u9019\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", \u4e14\u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u90fd\u6709\u81ea\u5df1\u7684\u5efa\u7f6e\u9031\u671f\uff0c\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u90fd\u8981\u90fd\u8981\u6210\u529f\u8a72\u6b21\u6e2c\u8a66\u624d\u7b97\u6210\u529f\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u5217\u5716\u793a\u518d\u6b21\u8aaa\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"Multiple Job")," \u7684\u6982\u5ff5\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/1knugMM.png",alt:"Imgur"})),(0,a.kt)("p",null,"\u4e0a\u65b9\u63cf\u8ff0\u7684\u662f\u4e00\u500b\u7c21\u55ae\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobs")," \u6982\u5ff5\uff0c\u6db5\u84cb\u4e86\u672c\u6587\u63d0\u53ca\u7684\u57fa\u672c\u5efa\u7f6e\u9031\u671f\u3002\n\u4e0b\u9762\u5247\u662f\u70ba\u4e86\u6eff\u8db3\u7279\u5225\u9700\u6c42\uff0c\u5e0c\u671b\u591a\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"golang")," \u7248\u672c\u540c\u6642\u6e2c\u8a66\uff0c\u6b64\u6642\u6211\u5011\u5c31\u53ef\u4ee5\u4e00\u6b21\u904b\u884c\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", \u5176\u4e2d\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Environemnt")," \u7684\u90e8\u4efd\u662f\u5b8c\u5168\u7368\u7acb\uff0c\u5176\u9918\u5247\u662f\u90fd\u6703\u63a1\u7528\u76f8\u540c\u7684\u8a2d\u5b9a\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u8a2d\u5b9a\u6a94\u6848 ",(0,a.kt)("strong",{parentName:"p"},".travis.yml")," \u88e1\u9762\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u4e0b\u5217\u7684\u65b9\u5f0f\u5b8c\u6210\u9019\u500b\u9700\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml="},'language: go\n\ngo:\n  - "1.8"\n  - "1.9"\nbefore_install:\n  - echo "before_install"\ninstall:\n  - echo "install"\nbefore_script:\n  - echo "before_script"\nscript:\n  - echo "script"\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u904b\u884c\u7684\u7d50\u679c\u5982\u4e0b, \u53ef\u4ee5\u770b\u5230\u8a72\u6b21\u7684\u6e2c\u8a66\u540c\u6642\u904b\u884c\u4e86\u5169\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", \u9019\u5169\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u5206\u5225\u662f\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Golang")," \u7248\u672c\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/sr2xvlX.png",alt:"Imgur"})),(0,a.kt)("h2",{id:"custom-job"},"Custom Job"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6211\u5011\u5229\u7528\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," \u9019\u500b\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u6240\u5b9a\u7fa9\u7684\u8a9e\u6cd5\u4f86\u5b8c\u6210\u7522\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"MultipleJob")," \u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u9019\u6642\u5019\u8166\u7b4b\u4e00\u8f49\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"install"),",",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \u9019\u4e9b\u5efa\u7f6e\u6b65\u9a5f\u662f\u5426\u4e5f\u90fd\u53ef\u4ee5\u6709\u985e\u4f3c\u7684\u6982\u5ff5\u5462?"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u6211\u5e0c\u671b\u5c0d\u6211\u7684\u5c08\u6848\u9032\u884c\u4e0d\u540c\u7684\u6e2c\u8a66\uff0c\u8b6c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Unit Test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Integration test"),"\u3002\n\u800c\u9019\u4e9b\u6e2c\u8a66\u9664\u4e86\u6e2c\u8a66\u7684\u65b9\u5f0f\u4e0d\u540c\u4e4b\u5916\uff0c\u74b0\u5883\u7684\u6e96\u5099\u4e5f\u4e0d\u540c\n\u6b64\u5916\uff0c\u540c\u6642\u904b\u884c\u9019\u4e9b\u6e2c\u8a66\u4e5f\u80fd\u5920\u6e1b\u5c11\u6e2c\u8a66\u7684\u6642\u9593\uff0c\u4e26\u4e14\u5c07\u6e2c\u8a66\u7d50\u679c\u66f4\u6e05\u695a\u7684\u6a19\u793a\u51fa\u662f\u54ea\u7a2e\u6e2c\u8a66\u51fa\u554f\u984c\u3002"),(0,a.kt)("p",null,"\u5c07\u4e0a\u8ff0\u7684\u9700\u6c42\u8f49\u63db\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u6982\u5ff5\u7684\u8a71\n\u5c31\u662f\u9700\u8981\u540c\u6642\u904b\u884c\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", \u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u88e1\u9762\u5c0d\u65bc\u6bcf\u500b\u5efa\u7f6e\u6b65\u9a5f\u90fd\u6709\u81ea\u5df1\u5ba2\u88fd\u5316\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u9019\u500b\u9700\u6c42\u6211\u5011\u900f\u904e\u4e0b\u5716\u8996\u89ba\u5316\u7684\u65b9\u5f0f\u4f86\u91cd\u65b0\u6aa2\u8996\u4e00\u6b21"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Kr9KDi3.png",alt:"Imgur"})),(0,a.kt)("p",null,"\u6211\u5011\u7684\u9700\u6c42\u5f88\u7c21\u55ae\uff0c\u5e0c\u671b\u540c\u6642\u904b\u884c\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u4e14\u9019\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u91dd\u5c0d\u4e0d\u540c\u7684\u904b\u884c\u968e\u6bb5\u80fd\u5920\u9078\u64c7\u662f\u5426\u8981\u4f7f\u7528\u9810\u8a2d\u7684\u898f\u5247\u6216\u662f\u5ba2\u88fd\u5316\u81ea\u8eab\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u5c31\u6709\u63d0\u4f9b\u4e86\u9019\u6a23\u7684\u529f\u80fd\u4f9b\u5404\u4f4d\u53bb\u4f7f\u7528\uff0c\u5728\u5176 ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u9019\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"yml")," \u7684\u6a94\u6848\u4e2d\uff0c\u6211\u5011\u8981\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"jobs:include")," \u7684\u6982\u5ff5\u53bb\u64b0\u5beb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml="},'language: go\n\ngo:\n  - "1.8"\n\nbefore_install:\n  - echo "before_install"\ninstall:\n  - echo "install"\nbefore_script:\n  - echo "before_script"\nscript:\n  - echo "script"\n\njobs:\n  include:\n    - stage: Custom Testing\n      name: Unit-Testing\n      go: "1.8"\n      script: echo "unit script"\n    - name: Integration-Testing\n      before_install: "Integration-Testing_before_install"\n      go: "1.9"\n      script: "Integration-Testing_script"\n')),(0,a.kt)("p",null,"\u5176\u904b\u884c\u7d50\u679c\u5982\u4e0b\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/PhjZheD.png",alt:"Imgur"})),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u89c0\u5bdf\u5230\u6211\u5011\u7684\u78ba\u904b\u884c\u4e86\u5169\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),"  \u800c\u9019\u5169\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u90fd\u6709\u660e\u78ba\u7684\u540d\u7a31\uff0c\u9019\u908a\u5c31\u6c92\u6709\u9ede\u9032\u53bb\u770b\u5404\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u7684\u904b\u884c\u7d50\u679c\uff0c\u6709\u8208\u8da3\u7684\u4eba\u53ef\u4ee5\u81ea\u884c\u5617\u8a66\u770b\u770b\u3002"),(0,a.kt)("p",null,"\u9019\u908a\u5148\u4e0d\u8a0e\u8ad6\u8a9e\u6cd5\uff0c\u7b49\u5230\u6240\u6709\u7684\u6982\u5ff5\u90fd\u8b1b\u8ff0\u5b8c\u7562\u5f8c\uff0c\u518d\u4f86\u8a0e\u8ad6\u8a9e\u6cd5\u7684\u64b0\u5beb\u3002"),(0,a.kt)("h1",{id:"build-stage"},"Build Stage"),(0,a.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Multiple Job")," \u7684\u6982\u5ff5\u5f8c\uff0c\u6211\u5011\u91cd\u65b0\u5be9\u8996\u4e00\u4e0b\u6700\u521d\u7684\u9700\u6c42"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9032\u884c \u55ae\u5143\u6e2c\u8a66/\u6574\u5408\u6e2c\u8a66 \u7b49\u5404\u7a2e\u78ba\u4fdd\u7a0b\u5f0f\u78bc\u6b63\u5e38\u904b\u4f5c\u7684\u6e2c\u8a66"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," \u76f8\u95dc\u6620\u50cf\u6a94\u4e26\u4e14\u66f4\u65b0\u5230\u76f8\u95dc\u7684\u5bb9\u5668\u5009\u5eab"),(0,a.kt)("li",{parentName:"ol"},"\u5c07\u6700\u65b0\u7684\u7a0b\u5f0f\u78bc\u90e8\u5c6c\u5230\u76f8\u95dc\u7684\u74b0\u5883\u4e0a")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4e0d\u540c\u7684\u6e2c\u8a66\u672c\u8eab\u53ef\u4ee5\u900f\u904e\u540c\u6642\u904b\u884c\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u4f86\u6eff\u8db3\uff0c\u9019\u908a\u597d\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u90a3\u5efa\u7f6e/\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Image")," \u9019\u4ef6\u4e8b\u60c5\uff0c\u6211\u5011\u8981\u8b93\u8ab0\u4f86\u8655\u7406?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u8ff0\u7684\u6e2c\u8a66\u9078\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"Job"),",  \u5ba2\u88fd\u5316\u5176\u67d0\u4e9b\u5efa\u7f6e\u6b65\u9a5f\u4f86\u8655\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u984d\u5916\u7522\u751f\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"Job")," \u4f86\u5c08\u9580\u8655\u7406\u9019\u985e\u7684\u9700\u6c42")),(0,a.kt)("p",null,"\u53ea\u662f\u63a1\u7528\u7b2c\u4e00\u7a2e\u65b9\u5f0f\u53ef\u80fd\u6703\u6709\u4e00\u500b\u554f\u984c\n\u5047\u8a2d\u6211\u5011\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6240\u6709")," \u6e2c\u8a66\u90fd\u901a\u904e\u624d\u80fd\u9032\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," \u76f8\u95dc\u7684\u8655\u7406\uff0c\u90a3\u6211\u5011\u5c31\u6c92\u6709\u8fa6\u6cd5\u5728\u4efb\u610f\u4e00\u500b\u6e2c\u8a66 ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u5167\u53bb\u8655\u7406\u9019\u500b\u908f\u8f2f\u3002"),(0,a.kt)("p",null,"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u9664\u4e86\u5c07\u6240\u6709\u7684\u5de5\u4f5c\u91cd\u65b0\u96c6\u4e2d\u56de\u4e00\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),"\u8655\u7406\u5916\uff0c\u5c31\u53ea\u80fd\u5728\u958b\u555f\u7b2c\u4e09\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u4f86\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u9019\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u672c\u8eab\u6709\u76f8\u4f9d\u6027\u7684\u554f\u984c\uff0c\u5b83\u5fc5\u9808\u8981\u78ba\u8a8d\u524d\u8ff0\u76f8\u95dc\u6e2c\u8a66\u7684\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u90fd\u5b8c\u6210\u624d\u80fd\u5920\u7e7c\u7e8c\u5f80\u4e0b\u904b\u884c\u3002\n\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u8981\u5728\u9019\u908a\u4ecb\u7d39 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u9019\u500b\u6982\u5ff5\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u7684\u7279\u8272\u4ee5\u53ca\u6982\u5ff5\u5982\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7531\u4e00\u7fa4 ",(0,a.kt)("inlineCode",{parentName:"li"},"Job")," \u7d44\u6210"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u8981\u6709\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"Job")," \u5931\u6557\uff0c\u8a72 ",(0,a.kt)("inlineCode",{parentName:"li"},"Stage")," \u5c31\u6703\u88ab\u8996\u70ba\u5931\u6557"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u7576\u8a72\u524d Stage \u662f\u6210\u529f\u7684\u72c0\u614b\uff0c\u624d\u6703\u57f7\u884c\u4e0b\u4e00\u500b Stage")),(0,a.kt)("p",null,"\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u7684\u6982\u5ff5\uff0c\u6211\u5011\u53ef\u4ee5\u628a\u4e0a\u8ff0\u7684\u9700\u6c42\u91cd\u65b0\u6574\u7406\u6b78\u7d0d\u6210\u4e09\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Stage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Unit Testing Job"),(0,a.kt)("li",{parentName:"ul"},"Integration Testing Job"))),(0,a.kt)("li",{parentName:"ul"},"Docker Build Stage"),(0,a.kt)("li",{parentName:"ul"},"Deploy Stage")),(0,a.kt)("p",null,"\u5c07\u9019\u500b\u6982\u5ff5\u7528\u4e0b\u5716\u518d\u6b21\u6aa2\u8996\u4e00\u6b21"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/YkGmTQN.png",alt:"Imgur"})),(0,a.kt)("h2",{id:"example-1"},"Example"),(0,a.kt)("p",null,"\u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u4e4b\u9593\u5f7c\u6b64\u6709\u4f9d\u8cf4\u6027\uff0c\u53ea\u8981\u7576\u5176\u4e2d\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u5931\u6557\uff0c\u5c31\u4e0d\u6703\u5f80\u4e0b\u57f7\u884c"),(0,a.kt)("p",null,"\u4e0b\u5716\u662f\u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u90fd\u9806\u5229\u57f7\u884c\u7684\u6210\u679c\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nm3COBH.png",alt:"Imgur"})),(0,a.kt)("p",null,"\u4e0b\u5716\u5247\u662f\u7576\u7b2c\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Testing Stage")," \u6709\u4efb\u4f55\u5931\u6557\u7684\u7d50\u679c\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/pyyloCh.png",alt:"Imgur"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go=",metastring:".travis.yml https://github.com/hwchiu/Travis-MultisStage/blob/master/.travis.yml .travis.yml",".travis.yml":!0,"https://github.com/hwchiu/Travis-MultisStage/blob/master/.travis.yml":!0},'\nlanguage: go\n\ngo:\n  - "1.8"\n\nbefore_install:\n  - echo "before_install"\ninstall:\n  - echo "install"\n\nbefore_script:\n  - echo "before_script"\nscript:\n  - echo "script"\n\njobs:\n  include:\n    - stage: Custom Testing\n      name: Unit-Testing\n      script: echo "unit script"\n    - name: Integration-Testing\n      before_install: echo "Integration-Testing_before_install"\n    - stage: Build Docker Image\n      script: echo "docker build"\n    - stage: Deploy\n      script: echo "release"\n')),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u8981\u5148\u5b9a\u7fa9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage"),", \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u88e1\u9762\u53ef\u4ee5\u5b9a\u7fa9\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),", \u800c\u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," \u5167\u53c8\u53ef\u4ee5\u81ea\u5b9a\u7fa9\u6bcf\u500b\u5efa\u7f6e\u968e\u6bb5\uff0c\u82e5\u6c92\u6709\u7279\u5225\u8a2d\u5b9a\u7684\uff0c\u90fd\u6703\u63a1\u7528\u6700\u4e0a\u5c64\u7684\u5168\u57df\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u5b9a\u7fa9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")," \u5247\u63a1\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"stage")," \u9019\u500b\u95dc\u9375\u5b57\u4f86\u5e6b\u5efa\u7acb\uff0c\u4e26\u4e14\u547d\u540d\uff0c\u91dd\u5c0d\u6bcf\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," \u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u7684\u65b9\u5f0f\u628a\u5c0d\u61c9\u7684\u540d\u7a31\u66ff\u63db\u6389\u8b93\u6574\u500b\u6e2c\u8a66\u5831\u544a\u66f4\u6709\u95b1\u8b80\u6027\uff0c\u7136\u5f8c\u63a5\u4e0b\u4f86\u5c31\u53ef\u4ee5\u53bb\u63cf\u8ff0\u6bcf\u500b\u5efa\u7f6e\u6b65\u9a5f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," \u7b49\u5404\u5f0f\u5404\u6a23\u7684\u5efa\u7f6e\u9031\u671f\u6b65\u9a5f\u3002"),(0,a.kt)("p",null,"\u66f4\u8a73\u7d30\u7684\u8a2d\u5b9a\u53ef\u4ee5\u76f4\u63a5\u53c3\u8003",(0,a.kt)("a",{parentName:"p",href:"https://docs.travis-ci.com/user/build-stages#how-do-build-stages-work"},"\u5b98\u7db2\u7684\u8aaa\u660e")),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,"\u672c\u6587\u8ddf\u5927\u5bb6\u5206\u4eab\u4e86\u95dc\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"TravisCI")," \u7684\u4f7f\u7528\u5fc3\u5f97\uff0c\u5f9e\u57fa\u672c\u7684\u4f7f\u7528\u65b9\u6cd5\u5230\u9032\u968e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Multiple Job")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage")),(0,a.kt)("p",null,"\u900f\u904e\u9019\u4e9b\u6982\u5ff5\u7684\u7d44\u5408\uff0c\u6211\u5011\u80fd\u5920\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"CI/CD")," \u7684\u6d41\u7a0b\u62c6\u7684\u66f4\u7d30\u7dfb\uff0c\u8b93\u6574\u500b\u67b6\u69cb\u8207\u6d41\u7a0b\u66f4\u52a0\u6e05\u695a\uff0c\u540c\u6642\u900f\u904e\u5e73\u884c\u904b\u884c\u7684\u65b9\u5f0f\u52a0\u5feb\u6574\u9ad4\u6d41\u7a0b\u7684\u901f\u5ea6 ",(0,a.kt)("strong",{parentName:"p"},"(\u9019\u90e8\u4efd\u4e0d\u4e00\u5b9a\uff0c\u5b8c\u5168\u662f\u770b\u6bcf\u500b\u5c08\u6848\u7684\u6d41\u7a0b)"),"."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/travis-ci/travis-ci/issues/1392"},"https://github.com/travis-ci/travis-ci/issues/1392")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/customizing-the-build/"},"https://docs.travis-ci.com/user/customizing-the-build/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/build-stages"},"https://docs.travis-ci.com/user/build-stages"))))}u.isMDXComponent=!0}}]);