"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[4631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,k=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={permalink:"/2023/06/21/terraform",source:"@site/blog/2023/06-21-terraform.md",title:"terraform",description:"--",date:"2023-06-21T00:00:00.000Z",formattedDate:"June 21, 2023",tags:[],readingTime:2.875,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"istio \u64cd\u4f5c\u8a18\u9304",permalink:"/2023/07/21/istio"},nextItem:{title:"Kubernetes GKE \u7dad\u904b\u4e0a\u5c0f\u7b46\u8a18",permalink:"/2023/06/11/k8s"}},c={authorsImageUrls:[]},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"--\ntitle: terraform \u5c0f\u7b46\u8a18\nauthor: hwchiu\ntags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h2",{parentName:"li",id:"terraform"},"terraform"))),(0,a.kt)("p",null,"\u7576\u4f7f\u7528\u652f\u63f4 Lock \u7684\u9060\u7aef Backend \u6642\uff0c\u6bcf\u6b21\u57f7\u884c Terraform \u64cd\u4f5c\u90fd\u6703\u5617\u8a66\u53bb Lock\uff0c\u4e26\u4e14\u6307\u4ee4\u7d50\u675f\u5f8c\u53bb\u91cb\u653e Lock\n\u82e5\u57f7\u884c\u5230\u4e00\u534a\u5c31\u900f\u904e CTRL+C \u5f37\u5236\u96e2\u958b\u53ef\u80fd\u6703\u5c0e\u81f4 Lock \u6c92\u6709\u8fa6\u6cd5\u9806\u5229\u7d50\u675f\uff0c\u9019\u6642\u5019\u4e0b\u6b21\u57f7\u884c\u5c31\u6703\u9047\u5230\u4e0b\u5217\u7684\u554f\u984c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ terraform apply\nAcquiring state lock. This may take a few moments...\n\u2577\n\u2502 Error: Error acquiring the state lock\n\u2502\n\u2502 Error message: writing "gs://xxxxx/xxxxxxx/default.tflock" failed: googleapi: Error 412: At least one of the pre-conditions you specified did not hold., conditionNotMet\n\u2502 Lock Info:\n\u2502   ID:        1696991555387294\n\u2502   Path:      gs://xxxxx/xxxxxxx/default.tflock\n\u2502   Operation: OperationTypeApply\n\u2502   Who:       your_name@hostname.local\n\u2502   Version:   1.5.6\n\u2502   Created:   2022-10-11 02:32:35.12734 +0000 UTC\n\u2502   Info:\n\u2502\n\u2502 Terraform acquires a state lock to protect the state from being written\n\u2502 by multiple users at the same time. Please resolve the issue above and try\n\u2502 again. For most commands, you can disable locking with the "-lock=false"\n\u2502 flag, but this is not recommended.\n')),(0,a.kt)("p",null,"\u7576\u7136\u4e0a\u8ff0\u539f\u56e0\u4e5f\u6709\u53ef\u80fd\u662f\u540c\u6642\u9593\u771f\u7684\u6709\u4eba\u5176\u4ed6\u4eba\u6b63\u5728\u904b\u884c\u6307\u4ee4\uff0c\u628a lock \u6436\u8d70\uff0c\u6240\u4ee5\u8981\u5148\u91d0\u6e05 lock \u5361\u4f4f\u7684\u60c5\u6cc1\u662f\u5426\u5982\u9810\u671f\n\u5982\u679c\u662f\u4e0d\u9810\u671f\u7684\uff0c\u5c31\u9700\u8981\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\u624b\u52d5\u79fb\u9664 lock"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u9762\u8f38\u51fa\u7684 ID \u7576\u4f5c\u5167\u5bb9\uff0c\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform force-unlock")," \u4f86\u89e3\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform force-unlock 1696991555387294\nDo you really want to force-unlock?\n  Terraform will remove the lock on the remote state.\n  This will allow local Terraform commands to modify this state, even though it\n  may still be in use. Only 'yes' will be accepted to confirm.\n\n  Enter a value: yes\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u8abf\u6574 Terraform State \u7684\u5167\u5bb9\u7684\u8a71\uff0c\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"terraform state list"),(0,a.kt)("li",{parentName:"ol"},"terraform state rm xxxx")),(0,a.kt)("p",null,"\u624b\u52d5\u5c07\u4e0d\u9700\u8981\u7684\u5167\u5bb9\u5f9e state \u4e2d\u79fb\u9664"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4eca\u5929\u6709\u66f4\u5f37\u786c\u7684\u8981\u6c42\u9700\u8981\u624b\u52d5\u53bb\u4fee\u6539\u5167\u5bb9\u7684\u8a71\uff0c\u5247\u9700\u8981"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"terraform state pull > old_state"),(0,a.kt)("li",{parentName:"ol"},"vim a "),(0,a.kt)("li",{parentName:"ol"},"terraform state push old_state")),(0,a.kt)("p",null,"\u9019\u62db\u5f88\u5371\u96aa\uff0c\u8981 100% \u6e05\u695a\u81ea\u5df1\u505a\u4ec0\u9ebc\u540c\u6642\u4e5f\u8981\u6709\u5099\u4efd\u7684 state \u6a94\u6848\uff0c\u5927\u610f\u5c31\u662f\u628a state \u6a94\u6848\u6293\u4e0b\u4f86\u4e26\u4e14\u76f4\u63a5\u4fee\u6539\uff0c\u7136\u5f8c\u5f37\u884c\u5beb\u5165\u56de\u53bb\uff0c\u5b8c\u5168\u4e0d\u9700\u8981\u984d\u5916 terraform plan/apply \u7684\u4ecb\u5165\u3002\n\u901a\u5e38\u662f migration \u904e\u7a0b\u5e0c\u671b\u53ef\u4ee5\u9806\u5229\u8f49\u79fb\uff0c\u540c\u6642\u53c8\u4e0d\u5e0c\u671b\u9060\u65b9\u8cc7\u6e90\u88ab\u5f71\u97ff\uff0c\u5c31\u53ef\u80fd\u6703\u63a1\u7528\u9019\u7a2e\u6a5f\u5236\u4f86\u76f4\u63a5\u4fee\u6539 state."),(0,a.kt)("p",null,"\u6b64\u5916\u8f49\u79fb\u904e\u7a0b\u4e2d\u5982\u679c\u6709 provider \u8981\u8655\u7406\uff0c\u4e5f\u53ef\u4ee5\u900f\u904e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform state replace-provider")," \u7684\u65b9\u5f0f\u4f86\u8f49\u79fb\uff0c\u5982\u4e0b\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'terraform state replace-provider "registry.terraform.io/-/aws" "hashicorp/aws"\n')))}u.isMDXComponent=!0}}]);