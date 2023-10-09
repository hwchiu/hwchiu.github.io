"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[26012],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const l={title:"Management AWS Profiles",date:new Date("2019-06-08T02:49:03.000Z"),tags:["AWS","Linux"],description:"\u672c\u6587\u5206\u4eab\u5982\u4f55\u900f\u904e\u4e00\u4e9b\u5e38\u898b\u7684\u65b9\u6cd5\u6216\u662f\u5225\u4eba\u64b0\u5beb\u597d\u7684\u5de5\u5177\u4f86\u63d0\u4f9b\u4e00\u500b\u65b9\u4fbf\u7684\u7ba1\u7406\u5de5\u5177\uff0c\u8b93\u64cd\u4f5c\u8005\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u518d\u591a\u500b AWS \u5e33\u865f\u4e2d\u9032\u884c\u5207\u63db"},r="Preface",o={unversionedId:"techPost/2019/aws-profile",id:"techPost/2019/aws-profile",title:"Management AWS Profiles",description:"\u672c\u6587\u5206\u4eab\u5982\u4f55\u900f\u904e\u4e00\u4e9b\u5e38\u898b\u7684\u65b9\u6cd5\u6216\u662f\u5225\u4eba\u64b0\u5beb\u597d\u7684\u5de5\u5177\u4f86\u63d0\u4f9b\u4e00\u500b\u65b9\u4fbf\u7684\u7ba1\u7406\u5de5\u5177\uff0c\u8b93\u64cd\u4f5c\u8005\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u518d\u591a\u500b AWS \u5e33\u865f\u4e2d\u9032\u884c\u5207\u63db",source:"@site/docs/techPost/2019/aws-profile.md",sourceDirName:"techPost/2019",slug:"/techPost/2019/aws-profile",permalink:"/docs/techPost/2019/aws-profile",draft:!1,tags:[{label:"AWS",permalink:"/docs/tags/aws"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",frontMatter:{title:"Management AWS Profiles",date:"2019-06-08T02:49:03.000Z",tags:["AWS","Linux"],description:"\u672c\u6587\u5206\u4eab\u5982\u4f55\u900f\u904e\u4e00\u4e9b\u5e38\u898b\u7684\u65b9\u6cd5\u6216\u662f\u5225\u4eba\u64b0\u5beb\u597d\u7684\u5de5\u5177\u4f86\u63d0\u4f9b\u4e00\u500b\u65b9\u4fbf\u7684\u7ba1\u7406\u5de5\u5177\uff0c\u8b93\u64cd\u4f5c\u8005\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u518d\u591a\u500b AWS \u5e33\u865f\u4e2d\u9032\u884c\u5207\u63db"},sidebar:"techPost",previous:{title:"Azure Kubernetes Service (AKS) - CNI (I)",permalink:"/docs/techPost/2019/aks-cni-i"},next:{title:"[\u95b1\u8b80\u7b46\u8a18] B4 and After: Managing Hierarchy, partitioning, and Asymmetry for Availability and Scale in Google's Software-Defined WAN",permalink:"/docs/techPost/2019/b4-after"}},p={},s=[{value:"Usage",id:"usage-1",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preface"},"Preface"),(0,i.kt)("p",null,"\u5982\u679c\u6709\u60f3\u8981\u900f\u904e Command Line Interface \u4f86\u7ba1\u7406 AWS \u5e33\u865f\u7684\u4eba\uff0c\u61c9\u8a72\u90fd\u6703\u6709\u53c3\u8003\u9019\u7bc7\u5b98\u65b9\u7684",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"},"Configuring the AWS CLI")," \u4f86\u8a2d\u5b9a\u76f8\u95dc\u7684\u5de5\u5177\u8207\u74b0\u5883\u3002"),(0,i.kt)("p",null,"\u9019\u908a\u7c21\u55ae\u505a\u500b\u5feb\u901f\u7684\u6982\u62ec\uff0c\u60f3\u8981\u5728 Shell \u4e0a\u9762\u64cd\u4f5c AWS \u5e33\u6236\u7684\u8a71\uff0c\u8981\u57f7\u884c\u4e0b\u5217\u7684\u52d5\u4f5c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f09\u4e26\u4e14\u5b89\u88dd awscli (\u53ef\u4ee5\u900f\u904e pip \u5b89\u88dd)"),(0,i.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a AWS Profile")),(0,i.kt)("p",null,"\u5c0d\u65bc\u4e00\u822c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS")," \u901a\u5e38\u5230\u9019\u4e00\u500b\u6b65\u9a5f\u5c31\u5dee\u4e0d\u591a\u5b8c\u6210\u4e86\uff0c\u80fd\u5920\u5c07\u5e33\u6236\u7d66\u8a2d\u5b9a\u5b8c\u6210\u4e26\u4e14\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," \u76f8\u95dc\u7684\u6307\u4ee4\u4f86\u5b58\u53d6\u516c\u6709\u96f2\u4e0a\u7684\u8cc7\u6e90\u3002"),(0,i.kt)("p",null,"\u7136\u800c\u5c0d\u65bc\u90e8\u5206\u4f01\u696d\u6216\u662f\u4f7f\u7528\u8005\u4f86\u8aaa\uff0c\u57fa\u65bc\u5546\u696d/\u5b89\u5168/\u5176\u4ed6\u8003\u91cf\uff0c\u53ef\u80fd\u6703\u6709\u591a\u7d44 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS")," \u7684\u5e33\u865f\uff0c\u8981\u5982\u4f55\u5728 Shell \u4e2d\u65b9\u4fbf\u4e14\u5feb\u901f\u5730\u5207\u63db\u4e0d\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS")," \u5e33\u865f\u5247\u662f\u4e00\u500b\u6709\u8da3\u7684\u554f\u984c\u3002\n\u63a5\u4e0b\u4f86\u6703\u8ddf\u5927\u5bb6\u5206\u4eab\u6211\u81ea\u5df1\u662f\u5982\u4f55\u7ba1\u7406\u591a\u7d44 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS")," \u5e33\u865f\u7684"),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u518d\u958b\u59cb\u63a2\u8a0e\u5982\u4f55\u5207\u63db\u591a\u7d44 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS")," \u5e33\u865f\u524d\uff0c\u6211\u5011\u8981\u5148\u77ad\u89e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws cli")," \u672c\u8eab\u662f\u600e\u9ebc\u904b\u4f5c\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aws cli")," \u672c\u8eab\u6709\u5169\u500b\u6a94\u6848\u7528\u4f86\u8655\u7406\u5e33\u865f\u7684\u57fa\u672c\u8a2d\u5b9a\u4ee5\u53ca\u76f8\u95dc\u7684\u8a8d\u8b49\u8cc7\u8a0a, \u5206\u5225\u662f\n",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.aws/config")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.aws/credential")),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.aws/config"),"  \u88e1\u9762\u7684\u683c\u5f0f\u5927\u6982\u662f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"[default]\nregion = us-west-1\noutput = json\n\n[profile Account1]\nregion = us-west-1\noutput = json\n\n[profile Account2]\nregion = us-west-1\noutput = json\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"[default]\naws_access_key_id = xxxxxxxxxxxxxxxx\naws_secret_access_key = xxxxxxxxxxxxxxxxxxxx\n\n[Account1]\naws_access_key_id = xxxxxxxxxxxxxxxx\naws_secret_access_key = xxxxxxxxxxxxxxxxxxxx\n\n\n[Account2]\naws_access_key_id = xxxxxxxxxxxxxxxx\naws_secret_access_key = xxxxxxxxxxxxxxxxxxxx\n")),(0,i.kt)("p",null,"\u7576\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," \u6307\u4ee4\u6642\uff0c\u82e5\u6c92\u6709\u7279\u5225\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"PROFILE")," \u7684\u540d\u7a31\uff0c\u5247\u6703\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"\n\u9019\u4e00\u7d44\u7684\u8cc7\u8a0a\u4f86\u5b58\u53d6\uff0c\u5426\u5247\u5c31\u6703\u6839\u64da\u5176\u540d\u7a31\u4f86\u5c0b\u627e\u7279\u5b9a\u7684\u6578\u503c"),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7684\u6982\u5ff5\u5f8c\uff0c\u63a5\u4e0b\u4f86\u4f86\u770b\u4e00\u4e0b\u8981\u5982\u4f55\u8a2d\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"aws cli"),"\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u57f7\u884c\u6642\u5e36\u5165\u53c3\u6578 ",(0,i.kt)("inlineCode",{parentName:"li"},"--profile")," \u4f86\u6307\u5b9a\u8981\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"PROFILE")),(0,i.kt)("li",{parentName:"ol"},"\u900f\u904e\u74b0\u5883\u8b8a\u6578 ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_PROFILE")," \u4f86\u6307\u5b9a\u8981\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"PROFILE"))),(0,i.kt)("h1",{id:"solution"},"Solution"),(0,i.kt)("p",null,"\u4ee5(1)\u70ba\u7bc4\u4f8b\u7684\u8a71\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u6240\u6709\u7684\u6307\u4ee4\u90fd\u8981\u88dc\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"--profile")," \u4f86\u4f7f\u7528\uff0c\u4f46\u662f\u9019\u7a2e\u65b9\u5f0f\u4f7f\u7528\u4e0a\u6703\u8b8a\u6210\u4f60\u6240\u6709\u6307\u4ee4\u90fd\u8981\u78ba\u4fdd\u6709\u52a0\u4e0a\u8a72\u53c3\u6578\uff0c\u5be6\u52d9\u4e0a\u6211\u500b\u4eba\u662f\u6c92\u6709\u5f88\u559c\u6b61\uff0c\u89ba\u5f97\u7ba1\u7406\u4e0a\u6bd4\u8f03\u9ebb\u7169\u3002\n\u8b6c\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"aws iam list-roles --profile Account1\naws iam list-roles --profile Account2\naws iam list-roles --profile Account3\n")),(0,i.kt)("p",null,"\u5982\u679c\u4eca\u5929\u6709\u4e00\u4e9b\u5ba2\u88fd\u5316\u7684\u8173\u672c\uff0c\u8b8a\u6210\u8173\u672c\u4e2d\u6240\u6709\u7684\u6307\u4ee4\u90fd\u8981\u6ce8\u610f\u6709\u4f7f\u7528\u5230\u9019\u500b\u53c3\u6578\uff0c\u5c0d\u65bc\u4e00\u500b\u591a\u4eba\u7dad\u8b77\u7684\u8173\u672c\u4f86\u8aaa\uff0c\u6211\u89ba\u5f97\u88ab\u5ffd\u7565\u7684\u53ef\u80fd\u6027\u975e\u5e38\u9ad8"),(0,i.kt)("p",null,"\u4ee5(2)\u70ba\u7bc4\u4f8b\u7684\u8a71\uff0c\u5c31\u662f\u6bcf\u6b21\u4f7f\u7528\u524d\u8981\u78ba\u4fdd\u7576\u524d\u7684\u74b0\u5883\u8b8a\u6578\u662f\u4ec0\u9ebc\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b\u6bcf\u500b\u6307\u4ee4\u7684\u4f7f\u7528\u5c31\u53ef\u4ee5\u76e1\u91cf\u7c21\u55ae\uff0c\u8b93\u547c\u53eb\u8005\u81ea\u5df1\u53bb\u78ba\u4fdd\u8a72\u6307\u4ee4\u7684\u9762\u5c0d\u5c0d\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"export AWS_PROFILE=account1\naws iam list-roles\nAWS_PROFILE=account2 aws iam list-roles\n")),(0,i.kt)("p",null,"\u5957\u5165\u74b0\u5883\u8b8a\u6578\u7684\u65b9\u6cd5\u6eff\u591a\u7a2e\u7684\uff0c\u4e0a\u8ff0\u7684\u65b9\u5f0f\u90fd\u53ef\u4ee5\u5c07\u8a72\u74b0\u5883\u8b8a\u6578\u50b3\u905e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," \u7684\u6307\u4ee4\u5217\u4e2d"),(0,i.kt)("p",null,"\u4f46\u662f\u4f7f\u7528\u9019\u500b\u65b9\u6cd5\u7684\u56f0\u96e3\u8655\u5c31\u5728\u65bc\u9810\u8a2d\u7684\u60c5\u6cc1\u4e0b\uff0c\u4f60\u6709\u6642\u5019\u6703\u4e0d\u77e5\u9053\u81ea\u5df1\u5230\u5e95\u7576\u524d\u662f\u4ec0\u9ebc\u6a23\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Profile"),", \u9019\u6642\u5019\u5c31\u53ef\u4ee5\u642d\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"shell prompt")," \u53bb\u5ba2\u88fd\u5316\u986f\u793a\u7576\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_PROFILE")," \u662f\u4ec0\u9ebc\u3002"),(0,i.kt)("p",null,"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5176\u5be6\u53ef\u4ee5\u4fee\u6539\u81ea\u5df1\u7fd2\u6163\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," \u8a2d\u5b9a\u6a94\uff0c\u642d\u914d\u4e00\u4e9b\u81ea\u884c\u64b0\u5beb\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"shell function")," \u4f86\u52d5\u614b\u8abf\u6574\u7576\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_PROFILE")," \u74b0\u5883\u8b8a\u6578\uff0c\u4e26\u4e14\u5c07\u7576\u524d\u7684\u6578\u503c\u986f\u793a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," \u7684\u63d0\u793a\u547d\u4ee4\u5217\u4e0a\u3002"),(0,i.kt)("p",null,"\u5c31\u5728\u6211\u5b8c\u6210\u8a72\u529f\u80fd\u6c92\u591a\u4e45\u5f8c\uff0c\u5c31\u767c\u73fe\u5176\u5be6 ",(0,i.kt)("inlineCode",{parentName:"p"},"oh-myzsh")," \u5167\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," \u6709\u4e00\u500b\u5e7e\u4e4e\u5b8c\u5168\u4e00\u6a23\u7684\u5be6\u73fe\u529f\u80fd\uff0c\u9019\u610f\u5473\u5176\u5be6\u6211\u6839\u672c\u4e0d\u9700\u8981\u81ea\u5df1\u5beb\uff0c\u76f4\u63a5\u555f\u52d5\u8a72 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," \u5373\u53ef"),(0,i.kt)("h1",{id:"oh-my-zsh-aws"},"oh-my-zsh aws"),(0,i.kt)("h2",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,"\u6253\u958b\u8a72 aws \u5957\u4ef6\u5f8c\uff0c\u4f7f\u7528\u4e0a\u5927\u6982\u6703\u662f\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"<aws:Account1>\u256d\u2500hwchiu@hwchius-MBP ~\n\u2570\u2500$\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u6307\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"asp")," \u642d\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," \u53ef\u4ee5\u5217\u51fa\u76ee\u524d\u6240\u6709\u8a2d\u5b9a\u904e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws profile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"<aws:LFCORD>\u256d\u2500hwchiu@hwchius-MBP ~\n\u2570\u2500$ asp\nAccount1 Account2 Account3 Account4\n")),(0,i.kt)("p",null,"\u540c\u6642\u8a72 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws plugin")," \u4e5f\u6703\u5e6b\u5fd9\u8a2d\u5b9a\u5b89\u88dd ",(0,i.kt)("inlineCode",{parentName:"p"},"aws aws_zsh_completer"),", \u610f\u5473\u4f60\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"tab")," \u7684\u65b9\u5f0f\u4f86\u66f4\u65b9\u4fbf\u7684\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws cli")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"\u57fa\u672c\u4e0a\u53c3\u8003 ",(0,i.kt)("inlineCode",{parentName:"p"},"on-my-zsh")," \u7684\u8a2d\u5b9a\u65b9\u5f0f\uff0c\u5148\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"$HONE/.zshrc")," \u4e2d\u5c07 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," \u7684\u9078\u9805\u52a0\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," \u5373\u53ef\uff0c\u8b6c\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},"...\n# Which plugins would you like to load?\n# Standard plugins can be found in ~/.oh-my-zsh/plugins/*\n# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/\n# Example format: plugins=(rails git textmate ruby lighthouse)\n# Add wisely, as too many plugins slow down shell startup.\nplugins=(git aws)\n\nsource $ZSH/oh-my-zsh.sh\n...\n")),(0,i.kt)("p",null,"\u9019\u908a\u6709\u4e00\u500b\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9810\u8a2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws plugin")," \u4f7f\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"RPROMPT")," \u800c\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"PROMPT"),", \u9019\u610f\u5473\u4ed6\u7684\u986f\u793a\u6703\u662f\u5728\u756b\u9762\u6700\u53f3\u908a\uff0c\u800c\u975e\u5de6\u908a\u3002\n\u6b64\u5916\u4e5f\u8981\u6ce8\u610f\u59b3\u9078\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," \u6703\u4e0d\u6703\u5e6b\u4f60\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"PROMPT")," \u7d66\u84cb\u6389\uff0c\u5c0e\u81f4\u529f\u80fd\u5931\u6548\u3002\n\u8b6c\u5982\u6211\u9078\u64c7\u7684\u4e3b\u984c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"bira"),"\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"PROMPT")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"RPROMPT")," \u90fd\u6703\u88ab\u8986\u84cb\u6389\u5c0e\u81f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws plugin")," \u4e0d\u6703\u6210\u529f\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\u6211\u6700\u5f8c\u9084\u662f\u81ea\u5df1\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.zsrhc")," \u4f86\u8655\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash="},'...\n# alias zshconfig="mate ~/.zshrc"\n# alias ohmyzsh="mate ~/.oh-my-zsh"\nPROMPT=\'$(aws_prompt_info)\'"$PROMPT"\n')),(0,i.kt)("p",null,"\u8a73\u7d30\u7684\u66f4\u591a\u5be6\u4f5c\u53ef\u4ee5\u76f4\u63a5\u53c3\u95b1 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/aws"},"$HOME/.on-my-zsh/plugin/aws")," \u88e1\u9762\u7684\u4ecb\u7d39"),(0,i.kt)("p",null,"\u85c9\u7531\u9019\u500b\u5957\u4ef6\u7684\u5e6b\u52a9\uff0c\u6211\u5e73\u5e38\u5c31\u6703\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"asp")," \u4f86\u5207\u63db\u4e0d\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS Account"),", \u540c\u6642\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"shell PROMPT")," \u4f86\u77e5\u9053\u7576\u524d\u4f7f\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"PROFILE"),"\uff0c\u907f\u514d\u5728\u4e0d\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," \u57f7\u884c\u932f\u8aa4\u7684\u52d5\u4f5c"))}m.isMDXComponent=!0}}]);