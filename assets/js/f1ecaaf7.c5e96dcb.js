"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[63073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),w=o,d=s["".concat(i,".").concat(w)]||s[w]||m[w]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=w;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},83362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"C++ \u8a9e\u8a00\u4e2d\u7684 new",date:"2013-06-30 16:32",comments:!0,tags:["C"]},p=void 0,l={unversionedId:"2013/c-new",id:"2013/c-new",title:"C++ \u8a9e\u8a00\u4e2d\u7684 new",description:"\u9019\u6b21\u60f3\u8981\u7814\u7a76\u4e00\u4e0bC++\u4e2dnew\u9019\u500b\u95dc\u9375\u5b57\uff0c\u5728c++\u4e2dnew\u7e3d\u5171\u626e\u6f14\u4e86\u4e09\u7a2e\u89d2\u8272",source:"@site/docs/2013/c-new.md",sourceDirName:"2013",slug:"/2013/c-new",permalink:"/docs/2013/c-new",draft:!1,tags:[{label:"C",permalink:"/docs/tags/c"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"C++ \u8a9e\u8a00\u4e2d\u7684 new",date:"2013-06-30 16:32",comments:!0,tags:["C"]},sidebar:"techPost",previous:{title:"Build own octopress",permalink:"/docs/2013/bulid-octopress"},next:{title:"\u6dfa\u8ac7auto_ptr",permalink:"/docs/2013/cpp-auto-ptr"}},i={},c=[{value:"new operator",id:"new-operator",level:2},{value:"operator new",id:"operator-new",level:2},{value:"placement new",id:"placement-new",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9019\u6b21\u60f3\u8981\u7814\u7a76\u4e00\u4e0bC++\u4e2dnew\u9019\u500b\u95dc\u9375\u5b57\uff0c\u5728c++\u4e2dnew\u7e3d\u5171\u626e\u6f14\u4e86\u4e09\u7a2e\u89d2\u8272"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new operator"),(0,o.kt)("li",{parentName:"ul"},"operator new"),(0,o.kt)("li",{parentName:"ul"},"placement new")),(0,o.kt)("h2",{id:"new-operator"},"new operator"),(0,o.kt)("p",null,"\u5e73\u5e38\u6700\u719f\u6089\u7684new \u5c31\u662f\u5c6c\u65bc\u9019\u7a2e\u89d2\u8272"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'string* myStr = new string("haha");\nint* myInt = new int(123);\n')),(0,o.kt)("p",null,"\u9019\u7a2enew\u5c31\u662f\u6240\u8b02\u7684new operator,\u662fC++\u8a9e\u8a00\u5167\u5efa\u7684\uff0c\u985e\u4f3csizeof\n\u6c92\u6709\u8fa6\u6cd5overriding\u6216\u662f\u6539\u8b8a\u5176\u884c\u70ba\u3002\n\u6bcf\u6b21\u547c\u53ebnew operator\u5be6\u969b\u4e0a\u6703\u6709\u4e09\u4ef6\u4e8b\u60c5\u5728\u80cc\u5f8c\u904b\u4f5c\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allocate Memory for Object"),(0,o.kt)("li",{parentName:"ol"},"Call Constructor to init that memory"),(0,o.kt)("li",{parentName:"ol"},"return a pointer which point to this Object")),(0,o.kt)("p",null,"\u6240\u4ee5\u4eca\u5929\u547c\u53eb",(0,o.kt)("inlineCode",{parentName:"p"},'string* myStr = new string("aa155495");'),"\u6703\u505a\u4e0b\u5217\u4e8b\u60c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. void* memory = operator new (sizeof(string));\n2. call string::string() on memory;\n3. string* ptr = static_cast<string*>(memory);\n4. return ptr\n")),(0,o.kt)("p",null,"\u7b2c\u4e00\u6b65\u5c31\u662f\u8981\u5148\u53bbmemory\u4e2d\u8981\u7a7a\u9593\uff0c\u9019\u90e8\u5206\u5c31\u662f\u900f\u904e ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"operator new"))," \u4f86\u5b8c\u6210\u3002\n\u7b2c\u4e8c\u90e8\u5c31\u662f\u5728\u8981\u5230\u7684\u7a7a\u9593\u4e0a\uff0c\u547c\u53eb\u5c0d\u61c9\u7269\u4ef6\u7684\u5efa\u69cb\u5f0f\uff0c\u9019\u90e8\u5206\u5c31\u662f\u900f\u904e ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"placement new"))," \u4f86\u5b8c\u6210\u3002\n\u63a5\u8005\u5c31\u662f\u53d6\u5f97\u4e00\u500b\u8a72\u578b\u614b\u7684\u6307\u6a19\uff0c\u4e26\u4e14\u56de\u50b3\u3002"),(0,o.kt)("h2",{id:"operator-new"},"operator new"),(0,o.kt)("p",null,"\u4e0d\u540c\u65bc ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"new operator"))," ,operator new \u662f\u4e00\u500b\u904b\u7b97\u7b26\u865f\uff0c\u5c31\u985e\u4f3c",(0,o.kt)("inlineCode",{parentName:"p"},"+-*/[]<>"),"\u9019\u7a2e\uff0c\u6240\u4ee5\u53ef\u4ee5overridding."),(0,o.kt)("p",null,"\u7576\u547c\u53eboperator new\u6642\uff0c\u6703\u5617\u8a66\u5f9eheap\u4e2d\u53bb\u53d6\u5f97\u5c0d\u61c9\u5927\u5c0f\u7684\u7a7a\u9593\uff0c\u5982\u679c\u6210\u529f\u5247\u8fd4\u56de\uff0c\u5426\u5247\u6703\u53bb\u547c\u53ebnew_handler\u4f86\u8655\u7406\n\u4e26\u4e14\u7e7c\u7e8c\u91cd\u8986\u8a72\u4e8b\u60c5\u76f4\u5230\u5f97\u5230exception\u70ba\u6b62\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u6709operator new \u547c\u53eb\u5b8c\u7562\u53ea\u6703\u6709\u5169\u7a2e\u60c5\u6cc1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7533\u8acb\u7a7a\u9593\u6210\u529f"),(0,o.kt)("li",{parentName:"ul"},"\u622a\u53d6\u5230bad_alloc exception")),(0,o.kt)("p",null,"\u5982\u679c\u8981overridding \u7684\u8a71\uff0c\u53ef\u4ee5\u63a1\u4e0b\u5217\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'class A\n{\n    A();\n    ~A();\n  void* operator new(size_t size){\n    cout<<"hello";\n    return ::operator new(size);\n  }\n};\n')),(0,o.kt)("p",null,"\u9019\u908a\u6211\u5011\u91cd\u8f09operator new\uff0c\u8b93\u4ed6\u6703\u5148\u8f38\u51fahello\uff0c\u4e4b\u5f8c\u5c31\u547c\u53eb\u6700\u539f\u672c\u7684operator new\u4f86\u5e6b\u5fd9\u64cd\u4f5c\u3002\n\u6b64\u5916\uff0c\u4e5f\u6709\u5c0d\u61c9\u7684",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"operator delete")),"\u8207\u4e4b\u547c\u61c9\u3002"),(0,o.kt)("h2",{id:"placement-new"},"placement new"),(0,o.kt)("p",null,"\u7b2c\u4e09\u500bnew\u662f\u7528\u4f86\u5b9a\u4f4d\u7528\u7684\uff0c\u5728\u7279\u5b9a\u7684\u4f4d\u7f6e\u4e0a\u53bb\u547c\u53eb\u7279\u5b9a\u7269\u4ef6\u7684\u5efa\u69cb\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"int main()\n{\n    void* S = operator new(sizeof(A));\n    A* p = (A*)s;\n    A* ptr = new(p) A(1234);\n)\n")),(0,o.kt)("p",null,"\u9019\u908a\u5148\u900f\u904eoperator new\u4f86\u53d6\u5f97\u4e00\u584a\u7a7a\u5730\uff0c\u7136\u5f8c\u53d6\u5f97\u4e00\u500b\u8a72\u623f\u5b50\u7684\u63a7\u5236\u6b0a(\u6307\u6a19)\n\u7136\u5f8c\u8981\u5728\u9019\u584a\u7a7a\u5730\u4e0a\u84cb\u623f\u5c4b\uff0c\u56e0\u6b64\u5c31\u5728new(p) \u9019\u500b\u7a7a\u5730\u4e0a\uff0c\u84cb\u4e0a\u4e86 A\u9019\u500b\u623f\u5c4b\uff0c\u7136\u5f8c\u4ee51234\u53bb\u547c\u53eb\u5efa\u69cb\u5f0f\u3002\n\u84cb\u5b8c\u623f\u5b50\u5f8c\u6703\u5728\u56de\u50b3\u4e00\u500b\u6307\u6a19\u6307\u5411\u8a72\u5730\u5340\u3002"))}m.isMDXComponent=!0}}]);