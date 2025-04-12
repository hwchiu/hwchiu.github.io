"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[6557],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,l(l({ref:e},c),{},{components:t})):r.createElement(f,l({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o[m]="string"==typeof n?n:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86647:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"USACO 1.2",date:"2014-08-13 09:10",tags:["coding"]},l=void 0,o={unversionedId:"2014/usaco-12",id:"2014/usaco-12",title:"USACO 1.2",description:"Brief",source:"@site/docs/2014/usaco-12.md",sourceDirName:"2014",slug:"/2014/usaco-12",permalink:"/docs/2014/usaco-12",draft:!1,tags:[{label:"coding",permalink:"/docs/tags/coding"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"USACO 1.2",date:"2014-08-13 09:10",tags:["coding"]},sidebar:"techPost",previous:{title:"USACO 1.1",permalink:"/docs/2014/usaco-11"},next:{title:"ZNC IRC bouncer",permalink:"/docs/2014/znc-irc-bouncer"}},u={},s=[{value:"Brief",id:"brief",level:2},{value:"Milking Cows",id:"milking-cows",level:2},{value:"Transformations",id:"transformations",level:2},{value:"Name That Number",id:"name-that-number",level:2},{value:"Palindromic Squares",id:"palindromic-squares",level:2},{value:"Dual Palindromes",id:"dual-palindromes",level:2}],c={toc:s},m="wrapper";function p(n){let{components:e,...t}=n;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"\u672c\u7ae0\u7bc0\u7684\u984c\u76ee\u4e5f\u662f\u6c92\u6709\u4ec0\u9ebc\u7279\u5b9a\u6f14\u7b97\u6cd5\uff0c\u6709\u4e9b\u53ef\u4ee5\u4f7f\u7528DP\u4f86\u8655\u7406\uff0c\u6709\u4e9b\u5247\u662f\u6839\u64da\u984c\u76ee\u6558\u8ff0\u4f86\u89e3\u5373\u53ef"),(0,a.kt)("h2",{id:"milking-cows"},(0,a.kt)("a",{parentName:"h2",href:"http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=milk2"},"Milking Cows")),(0,a.kt)("p",null,"\u6b64\u63d0\u4f7f\u7528DP\u4f86\u89e3\uff0c\u601d\u8003\u904e\u7a0b\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u6240\u6709farmers\u7684\u5de5\u4f5c\u6642\u9593\u4f9d\u64da\u5176\u8d77\u9ede\u7531\u65e9\u5230\u665a\u6392\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"      for(int i=0;i<n;i++){\n          farmers* f = new farmers();\n          fin >> f->low >> f->high;\n          data.push_back(f);\n      }\n      sort(data.begin(),data.end(),compare);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6383\u904e\u6240\u6709farmers\u7684\u5de5\u4f5c\u6642\u9593\uff0c\u5224\u65b7\u7576\u524d\u7684farmers\u662f\u5426\u6709\u8ddf\u4e0a\u4e00\u500bfarmers\u7684\u6642\u9593\u6709\u91cd\u758a\uff0c\u5982\u679c\u6709\u91cd\u758a\uff0c\u5c31\u66f4\u65b0\u7576\u524d\u7d00\u9304\u7684\u5de5\u4f5c\u6642\u9593\uff0c\u5982\u679c\u6c92\u6709\u91cd\u758a\uff0c\u5c31\u4ee3\u8868\u6b64\u6642\u9700\u8981\u9592\u7f6e\uff0c\u56e0\u6b64\u5c31\u8981\u66f4\u65b0\u7576\u524d\u9592\u7f6e\u6642\u9593\uff0c\u6bcf\u6b21\u66f4\u65b0\u7684\u540c\u6642\uff0c\u4e5f\u9806\u4fbf\u7d00\u9304\u6700\u5927\u503c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"      currLow = data[0]->low;\n      currHigh= data[0]->high;\n      maxMilked = currHigh - currLow;\n      maxNotMilked = 0;\n      for(int i=1;i<data.size();++i){\n          if(data[i]->low > currHigh){ //\u6c92\u6709\u91cd\u758a\n              maxNotMilked = max(maxNotMilked,data[i]->low - currHigh);\n              currLow = data[i]->low;\n              currHigh = data[i]->high;\n              maxMilked = max(maxMilked,currHigh-currLow);\n          }\n          else if (data[i]->high > currHigh){ //\u6709\u91cd\u758a\n              currHigh = data[i]->high;\n              maxMilked = max(maxMilked,(currHigh - currLow));\n          }\n      }\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5168\u90e8\u6383\u904e\u4e00\u904d\u53ca\u53ef\u627e\u5230\u7b54\u6848")),(0,a.kt)("h2",{id:"transformations"},(0,a.kt)("a",{parentName:"h2",href:"http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=transform"},"Transformations")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b64\u984c\u4e0d\u96e3\uff0c\u53ea\u8981\u60f3\u597d\u5982\u4f55\u5c07\u4e00\u500b\u77e9\u9663\u7d66\u9806\u6642\u91dd\u65cb\u8f4990\u5373\u53ef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void turn90(char* data,int n){\n    char *tmp = new char[n*n];\n    for(int i=0;i<n;i++){\n        for(int j=0;j<n;j++){\n            tmp[j*n+(n-i-1)] =  data[i*n + j];\n        }\n    }\n    memcpy(data,tmp,n*n);\n    delete tmp;\n    return ;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6839\u64da\u984c\u76ee\u6240\u898f\u5b9a\u7684\u9806\u5e8f\uff0c\u6bcf\u7a2e\u90fd\u53bb\u5617\u8a66\uff0c\u82e5\u7b26\u5408\u5c31\u5370\u51fa\u7b54\u6848\uff0c\u4e0d\u5408\u5c31\u7e7c\u7e8c\u5617\u8a66\u4e0b\u4e00\u7a2e\u5373\u53ef\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    //#1\n    turn90(src,n);\n    if( 0 == memcmp(src,dst,n*n)){\n        fout <<"1"<<endl;\n        return 0;\n    }\n    //#2\n    turn90(src,n);\n    if( 0 == memcmp(src,dst,n*n)){\n        fout <<"2"<<endl;\n        return 0;\n    }\n    //#3\n    turn90(src,n);\n    if( 0 == memcmp(src,dst,n*n)){\n        fout <<"3"<<endl;\n        return 0;\n    }\n    //#4\n    turn90(src,n);\n    reflect(src,n);\n    if( 0 == memcmp(src,dst,n*n)){\n        fout <<"4"<<endl;\n        return 0;\n    }\n    //#5\n    for(int i=0;i<3;i++){\n        turn90(src,n);\n        if( 0 == memcmp(src,dst,n*n)){\n            fout <<5<<endl;\n            return 0;\n        }\n    }\n    //#6\n    turn90(src,n);\n    reflect(src,n);\n    if( 0 == memcmp(src,dst,n*n)){\n        fout <<"6"<<endl;\n        return 0;\n    }\n    //#7\n    fout<<"7"<<endl;\n\n')),(0,a.kt)("h2",{id:"name-that-number"},(0,a.kt)("a",{parentName:"h2",href:"http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=namenum"},"Name That Number")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u958b\u59cb\u5148\u8b80\u53d6",(0,a.kt)("inlineCode",{parentName:"li"},"dict.txt"),"\uff0c\u53ea\u5c07\u9577\u5ea6\u7b26\u5408\u984c\u76ee\u8981\u6c42\u7684\u55ae\u5b57\u7d66\u5b58\u8d77\u4f86")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"while(din >> tmp){\n  if(tmp.size() == input.size())\n  data.push_back(tmp);\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u4f86\u4f9d\u64da\u4f4d\u6578\u4f86\u4e00\u500b\u4e00\u500b\u6aa2\u67e5\u3002\u5148\u91dd\u5c0d\u55ae\u5b57\u5167\u6240\u6709\u7684\u7b2c\u4e00\u4f4d\u9032\u884c\u6aa2\u67e5\u662f\u5426\u7b26\u5408\u898f\u5247\uff0c\u82e5\u4e0d\u5408\u5c31\u5c07\u5176\u5f9e\u5b57\u5178\u5167\u522a\u9664\uff0c\u4ee5\u6b64\u5f80\u4e0b\u5373\u53ef\u627e\u5230\u6240\u6709\u7b26\u5408\u7684\u7b54\u6848")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"    for(int i=0;i<input.size();++i){\n          for(list<string>::iterator itr = data.begin(); itr != data.end() ; ){\n              if(check(input[i]-'0',(*itr)[i])){\n                  ++itr;\n              }\n              else{\n                  itr = data.erase(itr);\n              }\n\n          }\n      }\n")),(0,a.kt)("h2",{id:"palindromic-squares"},(0,a.kt)("a",{parentName:"h2",href:"http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=palsquare"},"Palindromic Squares")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c0d\u65bc1~300\u4e4b\u9593\u7684\u6bcf\u500b\u6578\u5b57\u90fd\u53bb\u9032\u884c\u9a57\u8b49"),(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c07\u5148\u8a72\u6578\u5b57\u7d66\u5e73\u65b9\uff0c\u63a5\u8005\u53bb\u5224\u65b7\u662f\u5426\u8ff4\u6587\uff0c\u82e5\u662f\u5c31\u5370\u51fa\u7b54\u6848\u5373\u53ef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},' void PalindromesSquare(int n,int base){\n      string baseString;\n      string squareString;\n      int tmp = n;\n      n = n *n;\n      while(n){ //\u8a08\u7b97\u5e73\u65b9\u5f8c\u7684\u5b57\u4e32\n          squareString.push_back(getBaseChar(n%base));\n          n/=base;\n      }\n      while(tmp){ //\u8a08\u7b97\u7576\u524d\u7684\u5b57\u4e32\n          baseString.push_back(getBaseChar(tmp%base));\n          tmp/=base;\n      }\n      if ( checkPalin(squareString) ){\n          n = baseString.size();\n          for(int i=0;i<baseString.size();++i)\n              fout<<baseString[n-i-1];\n          fout<<" "<<squareString<<endl;\n      }\n\n  }\n\n')),(0,a.kt)("h2",{id:"dual-palindromes"},(0,a.kt)("a",{parentName:"h2",href:"http://cerberus.delos.com:790/usacoprob2?a=Gss1EzStiBH&S=dualpal"},"Dual Palindromes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9019\u984c\u8ddf ",(0,a.kt)("em",{parentName:"li"},"Dual Palindromes"),"\u975e\u5e38\u985e\u4f3c\uff0c\u5148\u6839\u64da\u984c\u76ee\u7684\u9700\u6c42\u5c0d\u6bcf\u500b\u6578\u5b57\u53bb\u505a\u8655\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u8655\u7406\u90fd\u4ee52~10\u9032\u4f4d\u53bb\u8a66\u8a66\u770b\u6709\u6c92\u6709\u8ff4\u6587\uff0c\u82e5\u80fd\u5920\u7522\u751f\u8ff4\u6587\u7684base\u6578\u91cf\u8d85\u904e\u5169\u500b\u5c31\u76f4\u63a5\u5370\u51fa\u7d50\u679c\uff0c\u76f4\u63a5\u6e2c\u662f\u4e0b\u4e00\u500b\u6578\u5b57\u5373\u53ef")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'  int main() {\n      ifstream fin ("dualpal.in");\n      int limit;\n      int start;\n      int count;\n      fin >> limit >> start;\n      while(limit){\n          ++start;\n          count =0;\n          for(int i=2;i<=10;++i){\n              if( PalindromesSquare(start,i)){\n                  ++count;\n                  if( 2 == count){\n                      fout<<start<<endl;\n                      --limit;\n                      break;\n                  }\n              }\n          }\n      }\n      return 0;\n  }\n\n')))}p.isMDXComponent=!0}}]);