"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[4767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={layout:"post",title:"Linux\u4e0b pipe\u4ecb\u7d39",date:"2013-03-29 15:05",authors:"hwchiu",tags:["C","System"]},o=void 0,i={permalink:"/2013/03/29/c-pipe",source:"@site/blog/2013/03-29-c-pipe.md",title:"Linux\u4e0b pipe\u4ecb\u7d39",description:"\u4e0d\u8ad6\u662fbash,tcsh,\u53c8\u6216\u8005\u662fwindows\u7684cmd\uff0c\u90fd\u6709\u4e00\u7a2e\u53eb\u505aPIPE\u7684\u529f\u80fd",date:"2013-03-29T15:05:00.000Z",formattedDate:"March 29, 2013",tags:[{label:"C",permalink:"/tags/c"},{label:"System",permalink:"/tags/system"}],readingTime:3.55,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{layout:"post",title:"Linux\u4e0b pipe\u4ecb\u7d39",date:"2013-03-29 15:05",authors:"hwchiu",tags:["C","System"]},prevItem:{title:"MSN LOG\u89e3\u6790\u4ee5C#",permalink:"/2013/04/21/msnlogparse"},nextItem:{title:"Matlab \u7c21\u55ae\u7df4\u7fd2",permalink:"/2013/03/29/matlab-1"}},p={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#","[User]"),(0,a.kt)("p",null,"\u4e0d\u8ad6\u662fbash,tcsh,\u53c8\u6216\u8005\u662fwindows\u7684cmd\uff0c\u90fd\u6709\u4e00\u7a2e\u53eb\u505aPIPE\u7684\u529f\u80fd"),(0,a.kt)("p",null,"\u80fd\u5920\u5c07\u5169\u500b\u7368\u7acb\u7684\u7a0b\u5f0f\u7d66\u4e32\u63a5\u8d77\u4f86\uff0c\u628a\u524d\u9762\u7a0b\u5f0f\u7684\u8f38\u51fa\u7576\u4f5c\u4e0b\u4e00\u500b\u7a0b\u5f0f\u7684\u8f38\u5165"),(0,a.kt)("p",null,"\u64c1\u6709\u9019\u500b\u6307\u4ee4\uff0c\u5c31\u80fd\u5c07\u672c\u4f86\u7576\u4e00\u529f\u80fd\u7684\u7a0b\u5f0f\u7d66\u7d44\u5408\u8d77\u4f86\u8b8a\u6210\u8907\u96dc\u7684\u5de5\u5177\u4e86"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u6211\u60f3\u8981\u77e5\u9053\u6211\u7576\u524d\u76ee\u9304\u4e0b\u6709\u591a\u5c11\u500b\u6a94\u6848"),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u4f7f\u7528ls\u8ddfwc\u5169\u500b\u6307\u4ee4\u5408\u4f5c\u5b8c\u6210\uff0c"),(0,a.kt)("p",null,"\u4f7f\u7528 ls | wc  \u5c31\u6703\u5c07ls\u7684\u7d50\u679c(\u6a94\u6848\u5217\u8868)\u7576\u4f5c\u8f38\u5165\u50b3\u7d66wc\u9019\u96bb\u7a0b\u5f0f\uff0c\u7136\u5f8c\u5c31\u53ef\u4ee5\u8f15\u9b06\u5730\u7b97\u51fa\u7576\u524d\u76ee\u9304\u7684\u6a94\u6848\u6578\u91cf"),(0,a.kt)("p",null,"\u6216\u8005\u662f\u6709\u6642\u5019\u60f3\u8981\u641c\u5c0b\u67d0\u4e9b\u7279\u5b9a\u7684\u5b57\u4e32\uff0c\u90fd\u6703\u4f7f\u7528grep\u9019\u500b\u6307\u4ee4\uff0c\u8b6c\u5982\u60f3\u8981\u641c\u5c0b\u67d0\u500b\u7279\u5b9a\u4f7f\u7528\u8005\u6b63\u5728\u57f7\u884c\u7684\u6240\u6709\u7a0b\u5e8f"),(0,a.kt)("p",null,"ps auxww | grep username"),(0,a.kt)("p",null,"\u6240\u4ee5pipe\u5c0d\u65bc\u7cfb\u7d71\u7ba1\u7406\u4f86\u8aaa\uff0c\u662f\u500b\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u80fd\u5920\u5c07\u6bcf\u500b\u7368\u7acb\u7d30\u5c0f\u7684\u7a0b\u5f0f\u7d66\u4e32\u63a5\u8d77\u4f86\u5b8c\u6210\u8907\u96dc\u7684\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"#","[\u7a0b\u5f0f\u8a2d\u8a08]"),(0,a.kt)("p",null,"\u5728FreeBSD(linux)\u4e0a\uff0cshell\u80fd\u5920\u8fa6\u5f97\u5230\u9019\u6a23\u7684\u529f\u80fd\uff0c\u5be6\u969b\u4e0a\u662f\u5229\u7528\u4e86kernel\u4e2dpipe\u7684\u529f\u80fd\uff0c\u9019\u908a\u5c31\u5df2linux kernel 3.5.4\u70ba\u67b6\u69cb\u3002"),(0,a.kt)("p",null,"\u5728\u7a0b\u5f0f\u4e2d\uff0cpipe\u7684\u6982\u5ff5\u5c31\u662f\u4e00\u500b\u6c34\u7ba1\uff0c\u9019\u500b\u6c34\u7ba1\u6709\u5169\u500b\u7aef\u53e3\uff0c\u4e00\u7aef\u8ca0\u8cac\u5beb\u8cc7\u6599\u5230pipe\uff0c\u4e00\u7aef\u8ca0\u8cac\u5c07\u8cc7\u6599\u5f9epipe\u4e2d\u8b80\u51fa\u4f86\uff0c\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u505a\u500b\u7c21\u55ae\u7684\u6e2c\u8a66\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'int main(){\n    int rand1,rand2;\n    int fd[2];// declare a two-d array, store file_descriptor of the pipe (two side)\n              // fd[0] mease read side, fd[1] means write side\n    pid_t pid;//child process\u7684pid\n    pipe(fd); //call system call (pipe) to create a pipe\n    //use fork to create a child process\n    //child process will wrtie data to pipe, and parent will read data from pipe\n    //child process\n    if((pid=fork())==0){\n        srand(getpid());\n        close(fd[READ_END]);//child won\'t use read size, so close it\n        rand1=rand()%RANGE; //create random number\n        write(fd[WRITE_END],&rand1,sizeof(rand1)); //write to pipe\n        close(fd[WRITE_END]);//close write side when write over\n        printf("%d has been created In Child Process \\n",rand1);\n        exit(1);\n    }\n    else if(pid>0){\n        srand(getpid());\n        close(fd[WRITE_END]);//parent won\'t use write size, so close it\u3002\n        rand2=rand()%RANGE;//create random number\n        read(fd[READ_END],&rand1,sizeof(rand1));//read the data from pipe\n        printf("%d has been created In Parent Process \\n",rand2);\n        wait();\n        printf("Parent Process calulate sum is :%d \\n",rand1+rand2);\n        close(fd[READ_END]);//close read side\n        exit(1);\n    }\nreturn 0;\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u57f7\u884c\u7d50\u679c:\n8 has been created In Child Process")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"5 has been created In Parent Process")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parent Process calulate sum is :13")),(0,a.kt)("blockquote",null,(0,a.kt)("hr",{parentName:"blockquote"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3 has been created In Child Process")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"3 has been created In Parent Process")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parent Process calulate sum is :6")),(0,a.kt)("p",null,"\u5be6\u969b\u4e0a\uff0c\u5982\u679c\u60f3\u8981\u5c0d\u540c\u500b\u7aef\u53e3\u53bb\u9032\u884c\u5beb\u8ddf\u8b80\u7684\u52d5\u4f5c\uff0c\u662f\u884c\u4e0d\u901a\u7684\uff0c\u4e4d\u770b\u4e4b\u4e0b\u6703\u89ba\u5f97PIPE\u53ea\u662f\u4e00\u500b"),(0,a.kt)("p",null,"buffer\uff0c\u653e\u7f6e\u8cc7\u6599\u800c\u5df2\uff0c\u5be6\u969b\u4e0a\u5728kernel\u4e2d\uff0cpipe\u88ab\u8996\u70ba\u662f\u4e00\u500bfile\uff0c\u7576\u6211\u5011\u547c\u53ebpipe\u6642\uff0c\u771f\u6b63\u6700\u5f8c\u6703"),(0,a.kt)("p",null,"\u547c\u53eb\u5230do_pipe\u9019\u500bfunction\uff0c\u5728\u9019\u500bfunction\u4e2d\uff0c\u6703\u91dd\u5c0dpipe\u7684\u5169\u500b\u7aef\u53e3\u5206\u5225\u53bb\u8a2d\u5b9a"),(0,a.kt)("p",null,"O_RDONLY;O_WRONLY\u7684\u6a19\u7c64\uff0c\u9019\u6a23\u7684\u8a2d\u5b9a\u4f7f\u5f97pipe\u7684\u7aef\u53e3\u5c31\u771f\u7684\u4e00\u908a\u53ea\u80fd\u8b80\uff0c\u4e00\u908a\u53ea\u80fd\u5beb\u3002"),(0,a.kt)("p",null,"\u6709\u7a7a\u5728\u4f86\u8b1b\u8ff0\u4e00\u4e0bfile_descriptor file file_operation\u4e09\u8005\u7684\u95dc\u4fc2\uff0c\u4ee5\u53ca\u5230\u5e95 file,socket,pipe...\u7b49\u9019\u4e9bdevice\u5230\u5e95\u5728kernel\u4e2d\u5982\u4f55\u904b\u4f5c\u3002"))}d.isMDXComponent=!0}}]);