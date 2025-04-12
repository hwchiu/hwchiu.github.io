"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[43696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),k=o,g=u["".concat(l,".").concat(k)]||u[k]||m[k]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},54426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"Container Registry \u7684\u65b9\u6848\u4ecb\u7d39",sidebar_position:20,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2020-12-29T10:46:46.000Z")},i=void 0,s={unversionedId:"2020/iThome_Challenge/cicd-20",id:"2020/iThome_Challenge/cicd-20",title:"Container Registry \u7684\u65b9\u6848\u4ecb\u7d39",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/2020/iThome_Challenge/cicd-20.md",sourceDirName:"2020/iThome_Challenge",slug:"/2020/iThome_Challenge/cicd-20",permalink:"/docs/2020/iThome_Challenge/cicd-20",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",lastUpdatedBy:"HWC",sidebarPosition:20,frontMatter:{title:"Container Registry \u7684\u65b9\u6848\u4ecb\u7d39",sidebar_position:20,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2020-12-29T10:46:46.000Z"},sidebar:"techPost",previous:{title:"Container Registry \u7684\u4ecb\u7d39\u53ca\u9700\u6c42",permalink:"/docs/2020/iThome_Challenge/cicd-19"},next:{title:"\u81ea\u67b6 Registry - Harbor",permalink:"/docs/2020/iThome_Challenge/cicd-21"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u8981\u4f86\u8ddf\u5927\u5bb6\u5206\u4eab\u5176\u4ed6 Contaienr Registry \u7684\u9078\u64c7\u53ca\u76f8\u95dc\u8b70\u984c\uff0c\u9019\u4e9b\u8b70\u984c\u5305\u542b(\u5305\u542b\u4f46\u4e0d\u9650\u65bc)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u767b\u5165\u6b0a\u9650\u63a7\u7ba1\u8207\u6574\u5408")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786c\u789f\u7a7a\u9593\u8655\u7406\u6a5f\u5236"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Registry \u7684\u7a7a\u9593\u8655\u7406\u554f\u984c\u975e\u5e38\u91cd\u8981\uff0c\u8655\u7406\u4e0d\u597d\u5f88\u5bb9\u6613\u9020\u6210\u4f7f\u7528\u8005\u6c92\u6709\u8fa6\u6cd5\u7e7c\u7e8c\u63a8\u9001 Image"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"UI \u4ecb\u9762\u7684\u64cd\u4f5c")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6f5b\u5728\u6f0f\u6d1e\u8207\u5b89\u5168\u6027\u6aa2\u67e5")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SSL \u6191\u8b49\u7684\u652f\u63f4\u6027"))),(0,o.kt)("p",null,"\u6b64\u5916\u9019\u908a\u8981\u7279\u5225\u6ce8\u610f\uff0c\u81ea\u67b6 Container Registry \u4e0d\u4e00\u5b9a\u662f\u514d\u8cbb\u7684\uff0c\u6709\u6642\u5019\u81ea\u67b6\u7684\u6703\u9700\u8981\u6709\u76f8\u95dc\u6388\u6b0a\u7b49\u82b1\u8cbb\u3002 SaaS \u4e0d\u4e00\u5b9a\u8981\u9322\uff0c\u53ea\u662f\u514d\u8cbb\u7684\u901a\u5e38\u90fd\u6703\u6709\u4e00\u4e9b\u9650\u5b9a"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u4f86\u770b\u4e00\u4e0b\u65b9\u6848\u4ecb\u7d39\u8207\u6bd4\u8f03"),(0,o.kt)("h1",{id:"docker-registry-20"},"Docker Registry 2.0"),(0,o.kt)("p",null,"Docker Registry 2.0 \u662f\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u6240\u7dad\u8b77\u7684\u958b\u6e90\u5c08\u6848\uff0c\u63d0\u4f9b\u958b\u767c\u8005\u4e00\u500b\u81ea\u67b6 Docker Registry \u7684\u9078\u9805\uff0c\u4f7f\u7528\u4e0a\u975e\u5e38\u7c21\u55ae\uff0c\u900f\u904e Docker Container \u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u8f15\u9b06\u5275\u5efa\u51fa\u4e00\u500b docker registry 2.0 \u7684\u670d\u52d9\u5668\u3002"),(0,o.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4e0b\u5217\u6307\u4ee4\u5c31\u53ef\u4ee5\u5275\u5efa\u5b8c\u7562"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -d -p 5000:5000 --restart always --name registry registry:2\n")),(0,o.kt)("p",null,"\u4e0d\u904e\u6211\u500b\u4eba\u5c0d\u65bc docker registry \u6c92\u6709\u5f88\u611b\uff0c\u4e3b\u8981\u662f\u5176\u9810\u8a2d\u60c5\u6cc1\u4e0b\u4e26\u6c92\u6709\u63d0\u4f9b\u4efb\u4f55 UI \u7684\u652f\u63f4\uff0c\u4e00\u5207\u7684\u64cd\u63a7\u90fd\u53ea\u80fd\u900f\u904e docker \u6307\u4ee4\u6216\u662f curl \u7b49\u6307\u4ee4\u4f86\u8655\u7406\uff0c\u5c0d\u65bc\u591a\u4eba\u63a7\u7ba1\u4ee5\u53ca\u64cd\u4f5c\u4e0a\u975e\u5e38\u4e0d\u4fbf\u5229\u3002"),(0,o.kt)("p",null,"\u7db2\u8def\u4e0a\u4e5f\u6709\u76f8\u95dc\u7684\u5c08\u6848\uff0c\u8b6c\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Joxit/docker-registry-ui"},"docker-registry-ui")," \u9019\u4e9b\u7b2c\u4e09\u65b9\u5c08\u6848\u5728\u5e6b\u5fd9\u5be6\u4f5c UI\uff0c\u8b93\u4f7f\u7528\u8005\u6709\u4e00\u500b\u6bd4\u8f03\u597d\u7684\u65b9\u5f0f\u53ef\u4ee5\u7ba1\u7406\uff0c\u4f46\u662f\u9019\u7a2e\u60c5\u6cc1\u4e0b\u6703\u8b8a\u6210 UI \u8207 Server \u5169\u500b\u7a0b\u5f0f\u662f\u7531\u4e0d\u540c\u7684\u7dad\u8b77\u5718\u968a\u5728\u7dad\u8b77\uff0c\u529f\u80fd\u4e0a\u7684\u6574\u5408\uff0c Issue \u7684\u554f\u984c\u7b49\u90fd\u4e0d\u4e00\u5b9a\u5920\u9806\u66a2\uff0c\u6240\u4ee5\u5982\u679c\u4e0d\u662f\u70ba\u4e86\u672c\u5730\u7c21\u55ae\u6e2c\u8a66\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u901a\u5e38\u4e0d\u6703\u63a1\u7528 Docker Registry \u4f5c\u70ba\u4e00\u500b\u9577\u671f\u7684\u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u5132\u5b58\u65b9\u9762\uff0c ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#support-for-lets-encrypt"},"Customize the storage location")," \u4ee5\u53ca ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#customize-the-storage-back-end"},"Customize the stoage back-end")," \u7b49\u4f86\u81ea\u5b98\u65b9\u7684\u6587\u7ae0\u518d\u4ecb\u7d39\u76f8\u95dc\u7684\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u5c0d\u65bc\u5916\u90e8\u5b58\u53d6\u7684\u8a71\uff0c\u5176\u4e5f\u6709\u652f\u63f4 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/configuration/#letsencrypt"},"Let's Encrypt")," \u7b49\u6a5f\u5236\uff0c\u8b93\u5176\u81ea\u52d5\u5e6b\u4f60 renew \u5feb\u904e\u671f\u7684\u6191\u8b49\uff0c\u4f7f\u7528\u4e0a\u76f8\u5c0d\u65b9\u4fbf\u3002"),(0,o.kt)("p",null," \u6b0a\u9650\u8a8d\u8b49\u65b9\u9762\u6211\u8a8d\u70ba\u529f\u80fd\u6bd4\u8f03\u5c11\uff0c\u6eff\u591a\u7684\u8a8d\u8b49\u65b9\u5f0f\u90fd\u9700\u8981\u81ea\u884c\u900f\u904e\u984d\u5916\u7684\u4f3a\u670d\u5668\u5e6b\u5fd9\u8655\u7406\uff0c\u53ef\u4ee5\u53c3\u8003  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#restricting-access"},"restricting-access")," \u6216\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@two.oes/reverse-proxy-ssl-ldap-for-docker-registry-805539daaa94"},"reverse proxy + SSL + LDAP for Docker Registry")),(0,o.kt)("h1",{id:"harbor"},"Harbor"),(0,o.kt)("p",null,"Harbor \u662f\u7531 VMWare \u6240\u958b\u6e90\u7684 Container Registry \u5c08\u6848\uff0c\u6211\u8a8d\u70ba Harbor \u4e00\u500b\u5f88\u503c\u5f97\u63a8\u85a6\u7684\u539f\u56e0\u662f\u8a72\u5c08\u6848\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/projects/"},"CNCF \u7562\u696d\u5c08\u6848"),"\uff0c\u8981\u6210\u70ba CNCF \u7562\u696d\u5c08\u6848\u5fc5\u9808\u8981\u6eff\u8db3\u4e00\u4e9b\u689d\u4ef6\uff0c\u96d6\u7136\u6c92\u6709\u4e00\u500b\u5c08\u6848\u53ef\u4ee5\u5b8c\u7f8e\u7684\u9069\u5408\u6240\u6709\u60c5\u5f62\uff0c\u4f46\u662f\u5c31\u793e\u7fa4\u4f7f\u7528\u7a0b\u5ea6\u8207\u793e\u7fa4\u8ca2\u737b\u7a0b\u5ea6\u4f86\u770b\uff0c Harbor \u7b97\u662f\u6eff\u512a\u826f\u7684\uff0c\u9019\u90e8\u5206\u81f3\u5c11\u53ef\u4ee5\u8b49\u660e\u5176\u672c\u8eab\u662f\u4e0d\u5c11\u4f7f\u7528\u8005\u5728\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u4e00\u500b\u4e4f\u4eba\u554f\u6d25\u7684\u5c08\u6848\u3002"),(0,o.kt)("p",null,"Harbor \u7684\u76ee\u6a19\u5f88\u7c21\u55ae\uff0c\u6e90\u81ea\u671f",(0,o.kt)("a",{parentName:"p",href:"https://goharbor.io/"},"\u5b98\u7db2"),"\u7684\u4ecb\u7d39"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Our mission is to be the trusted cloud native repository for Kubernetes")),(0,o.kt)("p",null,"Harbor \u672c\u8eab\u4f7f\u7528\u4e0a\u4e0d\u6703\u592a\u56f0\u96e3\uff0c\u53ef\u4ee5\u900f\u66f4 docker-compose \u7684\u65b9\u5f0f\u53bb\u5b89\u88dd\uff0c\u540c\u6642\u672c\u8eab\u4e5f\u6709\u63d0\u4f9b\u7c21\u55ae\u7684 UI \u4f9b\u4f7f\u7528\u64cd\u4f5c\uff0c"),(0,o.kt)("p",null,"\u8a73\u7d30\u7684\u67b6\u69cb\u53ef\u4ee5\u53c3\u8003\u9019\u500b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/goharbor/harbor/wiki/Architecture-Overview-of-Harbor"},"Architecture Overview of Harbor"),", \u5927\u6982\u689d\u5217\u4e00\u4e0b\u5e7e\u500b\u91cd\u9ede\u529f\u80fd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u767b\u5165\u6388\u6b0a\u65b9\u5f0f\u652f\u63f4 LDAP/AD \u4ee5\u53ca OIDC(OpenID Connect)\uff0c\u57fa\u672c\u4e0a\u929c\u63a5\u5230 OIDC \u5c31\u53ef\u4ee5\u652f\u63f4\u8d85\u591a\u7a2e\u767b\u5165\uff0c\u8b6c\u5982 google, microsoft, saml, github, gitlab \u7b49\u773e\u591a\u65b9\u5f0f\u90fd\u6709\u6a5f\u6703\u6574\u5408\u9032\u4f86"),(0,o.kt)("li",{parentName:"ol"},"Harbor v2.0 \u67b6\u69cb\u5927\u6539\uff0c\u6210\u70ba\u4e00\u500b OCI (Open Container Initiative) \u76f8\u5bb9\u7684 Artifacct Registry, \u9019\u610f\u5473\u8005 Harbor \u4e0d\u55ae\u7d14\u53ea\u662f\u4e00\u500b Container Image Registry\uff0c\u800c\u662f\u53ea\u8981\u7b26\u5408 OCI \u6a94\u6848\u683c\u5f0f\u7684\u7522\u7269\u90fd\u53ef\u4ee5\u5b58\u653e\uff0c\u5f71\u97ff\u6700\u5927\u7684\u5c31\u662f Helm3 \u7684\u6253\u5305\u5167\u5bb9\u3002 \u672a\u4f86\u662f\u6709\u6a5f\u6703\u900f\u904e\u4e00\u500b Harbor \u4f86\u540c\u6642\u7dad\u8b77 Container Image \u4ee5\u53ca Helm Charts"),(0,o.kt)("li",{parentName:"ol"},"\u652f\u63f4\u4e0d\u540c\u7684\u6f5b\u5728\u5b89\u5168\u6027\u6383\u63cf\u5f15\u64ce"),(0,o.kt)("li",{parentName:"ol"},"\u672c\u8eab\u53ef\u8ddf\u5176\u4ed6\u77e5\u540d\u7684 Container Registry \u9032\u884c\u9023\u52d5\uff0c\u8b6c\u5982\u8907\u88fd\uff0c\u6216\u662f\u4e2d\u7e7c\u8f49\u767c\u90fd\u53ef\u4ee5"),(0,o.kt)("li",{parentName:"ol"},"\u9664\u6b64\u4e4b\u5916\u9084\u6709\u5f88\u591a\u7279\u6027\uff0c\u6709\u8208\u8da3\u7684\u9ede\u9078\u4e0a\u65b9\u9023\u7d50\u77ad\u89e3\u66f4\u591a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/goharbor/harbor/raw/release-2.0.0/docs/img/architecture/architecture.png",alt:"arch"})),(0,o.kt)("h1",{id:"cloud-provider-registry"},"Cloud Provider Registry"),(0,o.kt)("p",null,"\u4e09\u5927\u516c\u6709\u96f2 Azure, AWS, GCP \u90fd\u6709\u91dd\u5c0d\u81ea\u5df1\u7684\u5e73\u53f0\u63d0\u4f9b\u57fa\u65bc\u96f2\u7aef\u7684 Container Registry\uff0c\u4f7f\u7528\u9019\u4e9b Registry \u7684\u597d\u8655\u5c31\u662f\u4ed6\u5011\u8207\u81ea\u5bb6\u7684\u904b\u7b97\u5e73\u53f0\u90fd\u6703\u6709\u826f\u597d\u7684\u6574\u5408\uff0c\u540c\u6642\u670d\u52d9\u65b9\u9762\u4e5f\u6703\u6709\u6bd4\u8f03\u597d\u7684\u652f\u63f4\u3002"),(0,o.kt)("p",null,"\u7576\u7136\u9019\u4e9b SaaS \u670d\u52d9\u672c\u8eab\u90fd\u6703\u6709\u514d\u8cbb\u8207\u6536\u8cbb\u7248\u672c\uff0c\u5c31\u62ff ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ecr/pricing/"},"AWS(ECR)")," \u70ba\u7bc4\u4f8b\uff0c\u4e00\u958b\u59cb\u6703\u6709\u4e00\u500b\u5690\u9bae\u65b9\u6848\uff0c\u5927\u6982\u662f\u6bcf\u500b\u6708\u6709 500GB \u7684\u5bb9\u91cf\u4f7f\u7528\uff0c\u4f46\u662f\u63a5\u4e0b\u4f86\u66f4\u591a\u7684\u5bb9\u91cf\u5c31\u6703\u958b\u59cb\u8a08\u8cbb\uff0c\u8a08\u8cbb\u7684\u65b9\u5f0f\u5247\u662f\u7528(1)\u5bb9\u91cf\u8a08\u8cbb\uff0c\u6bcf\u591a\u5c11 GB \u591a\u5c11\u9322\uff0c(2)\u6d41\u91cf\u8a08\u8cbb\uff0c\u6d41\u91cf\u7684\u50f9\u9322\u662f\u4e00\u500b\u5340\u9593\u50f9\u683c\uff0c\u4f7f\u7528\u6108\u9ad8\u5f8c\u7684\u55ae\u4f4d\u5e73\u5747\u50f9\u683c\u6108\u4f4e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BcaLHvk.png",alt:null})),(0,o.kt)("p",null,"\u5c31\u5982\u540c\u4e4b\u524d\u63d0\u904e\uff0c\u4f7f\u7528 SaaS \u670d\u52d9\u6709\u5f88\u591a\u7684\u512a\u9ede\uff0c\u5305\u542b\u4e0d\u9700\u8981\u81ea\u884c\u7dad\u8b77\u4f3a\u670d\u5668\uff0c\u5f9e\u8edf\u9ad4\u5230\u786c\u9ad4\u90fd\u53ef\u4ee5\u5168\u90e8\u4ea4\u7531\u670d\u52d9\u4f9b\u61c9\u5546\u53bb\u8655\u7406\uff0c\u81ea\u5df1\u53ea\u8981\u5c08\u5fc3\u8655\u7406\u61c9\u7528\u7684\u908f\u8f2f\u5373\u53ef\uff0c\u4f46\u662f\u6210\u672c\u8003\u91cf\u5c31\u662f\u4e00\u500b\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9805\u3002"),(0,o.kt)("h1",{id:"others"},"Others"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u9084\u6709\u4e0d\u5c11\u5c08\u6848\u6709\u63d0\u4f9b Self-Hosted \u7684\u670d\u52d9\uff0c\u8b6c\u5982\u7531 SUSE \u6240\u7dad\u8b77\u7684\u958b\u6e90\u5c08\u6848 ",(0,o.kt)("a",{parentName:"p",href:"http://port.us.org/"},"Portus")," \uff0c\u5176\u5c08\u6ce8\u6574\u5408 Docker Registry \u4e26\u63d0\u4f9b\u53cb\u5584\u7684\u4ecb\u9762\u8207\u66f4\u591a\u9032\u968e\u7684\u529f\u80fd\uff0c\u8b6c\u5982 LDAP \u63a7\u7ba1\uff0c\u66f4\u9032\u968e\u7684\u641c\u5c0b\u7b49\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"portus-is-an-open-source-authorization-service-and-user-interface-for-the-next-generation-docker-registry"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/SUSE/Portus"},"Portus")," is an open source authorization service and user interface for the next generation Docker Registry.")),(0,o.kt)("p",null,"\u4e0d\u904e\u89c0\u5bdf\u8a72\u5c08\u6848\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SUSE/Portus"},"Github")," \u986f\u793a\u5df2\u7d93\u6578\u500b\u6708\u6c92\u6709\u66f4\u65b0\uff0c\u751a\u81f3\u5176\u6700\u65b0\u7684 Issue \u90fd\u5728\u63a2\u8a0e\u662f\u5426\u8a72\u5c08\u6848\u5df2\u7d93\u88ab\u653e\u68c4\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SUSE/Portus/issues/2313"},"Is Portus no longer being worked on"),"\uff0c \u6709\u5176\u4ed6\u7db2\u53cb\u767c\u73fe SUSE \u5f8c\u4f86\u958b\u4e86\u4e00\u500b\u65b0\u7684\u5c08\u6848 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SUSE/registry/tree/master/harbor-helm"},"harbor-helm"),"\uff0c\u5927\u81bd\u731c\u6e2c\u53ef\u80fd SUSE \u4e5f\u5728\u7814\u7a76\u63a1\u7528 Harbor \u4f5c\u70ba\u5176\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u800c\u653e\u68c4\u81ea\u4e3b\u7814\u767c\u7684 Portus\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u672c\u8eab\u5df2\u7d93\u662f\u4f7f\u7528 Gitlab \u7684\u5718\u968a\uff0c\u53ef\u4ee5\u8003\u616e\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry"},"GItlab Container Registry"),"\uff0c\u5176\u76f4\u63a5\u6574\u5408 Gitlab \u8207 Docker Registry \u63d0\u4f9b\u4e86\u826f\u597d\u7684\u4ecb\u9762\u8b93\u4f60\u63a7\u7ba1 Container Registry\uff0c\u597d\u8655\u662f\u53ef\u4ee5\u5c07\u7a0b\u5f0f\u78bc\u7684\u7ba1\u7406\u8207 Image \u7684\u7ba1\u7406\u90fd\u540c\u6642\u900f\u904e Gitlab \u4f86\u6574\u5408\u3002"))}m.isMDXComponent=!0}}]);