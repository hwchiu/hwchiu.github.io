"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[16154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=l,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||a;return r?n.createElement(k,p(p({ref:t},d),{},{components:r})):n.createElement(k,p({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},34100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={title:"Install the FTP server on FreeBSD",date:"2013-10-12 09:03",comments:!0,tags:["System","FTP","FreeBSD"],description:"\u9019\u908a\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u81ea\u67b6 FTP Server \u7684\u4e00\u4e9b\u8a2d\u5b9a\u8207\u5fc3\u5f97\uff0c\u4ee5\u5f80\u5728 Windows \u6642\u53ef\u4ee5\u5f88\u5feb\u901f\u7684\u4f7f\u7528 FilwZilla \u4f86\u67b6\u8a2d FTP Server, \u7136\u800c\u5728 FreeBSD \u7684\u7cfb\u7d71\u4e2d\uff0c\u6211\u5011\u6709\u54ea\u4e9b\u76f8\u95dc\u7684\u9078\u64c7\u53ef\u4ee5\u4f7f\u7528? \u672c\u7bc7\u6587\u7ae0\u6703\u63a1\u7528 Pure-Ftpd \u4f5c\u70ba\u4e00\u500b FTP Server \u4e26\u4e14\u8a18\u9304 FTP \u5e38\u898b\u7684\u76f8\u95dc\u7528\u6cd5\u8981\u5982\u4f55\u900f\u904e Pure-Ftpd \u4f86\u8a2d\u5b9a"},p=void 0,i={unversionedId:"2013/pure-ftpd",id:"2013/pure-ftpd",title:"Install the FTP server on FreeBSD",description:"\u9019\u908a\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u81ea\u67b6 FTP Server \u7684\u4e00\u4e9b\u8a2d\u5b9a\u8207\u5fc3\u5f97\uff0c\u4ee5\u5f80\u5728 Windows \u6642\u53ef\u4ee5\u5f88\u5feb\u901f\u7684\u4f7f\u7528 FilwZilla \u4f86\u67b6\u8a2d FTP Server, \u7136\u800c\u5728 FreeBSD \u7684\u7cfb\u7d71\u4e2d\uff0c\u6211\u5011\u6709\u54ea\u4e9b\u76f8\u95dc\u7684\u9078\u64c7\u53ef\u4ee5\u4f7f\u7528? \u672c\u7bc7\u6587\u7ae0\u6703\u63a1\u7528 Pure-Ftpd \u4f5c\u70ba\u4e00\u500b FTP Server \u4e26\u4e14\u8a18\u9304 FTP \u5e38\u898b\u7684\u76f8\u95dc\u7528\u6cd5\u8981\u5982\u4f55\u900f\u904e Pure-Ftpd \u4f86\u8a2d\u5b9a",source:"@site/docs/2013/pure-ftpd.md",sourceDirName:"2013",slug:"/2013/pure-ftpd",permalink:"/docs/2013/pure-ftpd",draft:!1,tags:[{label:"System",permalink:"/docs/tags/system"},{label:"FTP",permalink:"/docs/tags/ftp"},{label:"FreeBSD",permalink:"/docs/tags/free-bsd"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"Install the FTP server on FreeBSD",date:"2013-10-12 09:03",comments:!0,tags:["System","FTP","FreeBSD"],description:"\u9019\u908a\u8981\u8ddf\u5927\u5bb6\u5206\u4eab\u7684\u662f\u81ea\u67b6 FTP Server \u7684\u4e00\u4e9b\u8a2d\u5b9a\u8207\u5fc3\u5f97\uff0c\u4ee5\u5f80\u5728 Windows \u6642\u53ef\u4ee5\u5f88\u5feb\u901f\u7684\u4f7f\u7528 FilwZilla \u4f86\u67b6\u8a2d FTP Server, \u7136\u800c\u5728 FreeBSD \u7684\u7cfb\u7d71\u4e2d\uff0c\u6211\u5011\u6709\u54ea\u4e9b\u76f8\u95dc\u7684\u9078\u64c7\u53ef\u4ee5\u4f7f\u7528? \u672c\u7bc7\u6587\u7ae0\u6703\u63a1\u7528 Pure-Ftpd \u4f5c\u70ba\u4e00\u500b FTP Server \u4e26\u4e14\u8a18\u9304 FTP \u5e38\u898b\u7684\u76f8\u95dc\u7528\u6cd5\u8981\u5982\u4f55\u900f\u904e Pure-Ftpd \u4f86\u8a2d\u5b9a"},sidebar:"techPost",previous:{title:"OpenvSwitch source code(3)",permalink:"/docs/2013/openvswitch-source-code3"},next:{title:"SA - Shell Script(2)",permalink:"/docs/2013/sa-homework2"}},o={},u=[{value:"public",id:"public",level:2},{value:"upload",id:"upload",level:2},{value:"hidden",id:"hidden",level:2}],d={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Windows"),"\u4e0a\u5b89\u88ddFtp-server\u6642\uff0c\u901a\u5e38\u90fd\u662f\u9078\u64c7",(0,l.kt)("a",{parentName:"p",href:"https://filezilla-project.org/"},"Filezilla"),"\u9019\u5957\u8edf\u9ad4\u4f86\u4f7f\u7528\u3002\n\u900f\u904e\uff35\uff29\u754c\u9762\u7684\u5f15\u5c0e\uff0c\u5728\u5b89\u88dd\u4ee5\u53ca\u8a2d\u5b9a\u4e0a\u90fd\u975e\u5e38\u5bb9\u6613\uff0c\u4f46\u662f\u6709\u6642\u5019\u4e00\u4e9b\u6bd4\u8f03\u7279\u6b8a\u7684\u8981\u6c42\uff0c\u672a\u5fc5\u80fd\u5920\u5f88\u597d\u5730\u9054\u6210\u3002\n\u5728FreeBSD\u4e0a\uff0c\u5b89\u88dd\u7cfb\u7d71\u6642\u6709\u6700\u57fa\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ftpd"),"\uff0c\u6216\u662fports\u5167\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ProFTPD"),"\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"Pure-ftpd"),"\u90fd\u80fd\u5920\u7528\u4f86\u67b6\u8a2dftp-server.\n\u4f46\u662f\u56e0\u70baFTP \u8d70\u7684\u662fport 21,\u5728\u9810\u8a2d\u6c92\u6709\u66f4\u6539\u7684\u60c5\u6cc1\u4e0b\uff0c\u9019\u4e9bftp-server\u90fd\u6703\u5617\u8a66\u53bbbind port 21\u56e0\u6b64\u540c\u6642\u9593\u53ea\u80fd\u6709\u4e00\u500bserver\u5728\u904b\u884c\u3002"),(0,l.kt)("p",null,"\u5728System Administration\u7684\u8ab2\u7a0b\u4e2d\n\u7b2c\u4e8c\u500b\u4f5c\u696d\u5c31\u8981\u6c42\u67b6\u8a2d\u4e00\u500bftp-server,\u4e26\u4e14\u6eff\u8db3\u4e0b\u5217\u8981\u6c42\uff0c\u5728\u67b6\u8a2d\u7684\u904e\u7a0b\u4e2d\u5c31\u9806\u4fbf\u8a18\u9304\u4e00\u4e0b\u5404\u7a2e\u8a2d\u5b9a\u3002"),(0,l.kt)("p",null,"\u533f\u540d\u5e33\u865f\u767b\u5165\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chrooted (/home/ftp)"),(0,l.kt)("li",{parentName:"ul"},"Only download from /home/ftp/public"),(0,l.kt)("li",{parentName:"ul"},"Can upload & mkdir but no download or delete from /home/ftp/upload",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Can't download the files upload by anonymous account"),(0,l.kt)("li",{parentName:"ul"},"Can download the files upload by others"))),(0,l.kt)("li",{parentName:"ul"},"Hidden directory /home/ftp/hidden",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'There is a directory called "treasure" inside'),(0,l.kt)("li",{parentName:"ul"},"Client can't list in /home/ftp/hidden but can in /home/ftp/hidden/treasure")))),(0,l.kt)("p",null,"Virtual users:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: ftp-vip"),(0,l.kt)("li",{parentName:"ul"},"full access on /home/ftp/{public,hidden,upload}"),(0,l.kt)("li",{parentName:"ul"},"chhrooted (/home/ftp)"),(0,l.kt)("li",{parentName:"ul"},"Hidden directory is visible to ftp-vip"),(0,l.kt)("li",{parentName:"ul"},"Only login from some ip")),(0,l.kt)("p",null,"Other:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Can login with TLS")),(0,l.kt)("p",null,"\u7cfb\u7d71:   ",(0,l.kt)("strong",{parentName:"p"},"FreeBSD 9.2"),"\nPort:  ",(0,l.kt)("strong",{parentName:"p"},"Pure-ftpd")),(0,l.kt)("h1",{id:"\u524d\u7f6e"},"\u524d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"install ports ",(0,l.kt)("inlineCode",{parentName:"li"},"portmaster ftp/pure-ftpd")," (TLS \u6253\u52fe)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo 'pureftpd_enable=\"YES\"' >> /etc/rc.conf")),(0,l.kt)("li",{parentName:"ul"},"create directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mkdir -p /home/ftp/public /home/ftp/upload /home/hidden"))))),(0,l.kt)("h1",{id:"\u533f\u540d"},"\u533f\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"config   ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/etc/pure-ftpd.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"NoAnonymous                 no"),(0,l.kt)("li",{parentName:"ul"},"AntiWarez                  yes  (\u4e0a\u50b3\u6a94\u6848owner\u662f'ftp'\u7684\u4e0d\u80fd\u522a\u9664)"),(0,l.kt)("li",{parentName:"ul"},"AnonymousCanCreateDirs\t\t yes"),(0,l.kt)("li",{parentName:"ul"},"AnonymousCantUpload         no"))),(0,l.kt)("li",{parentName:"ul"},"Add a ftp account for Anonymous",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pw groupadd ftpuser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pw useradd ftp -g ftpuser -d /home/ftp"))))),(0,l.kt)("h1",{id:"virtual-user"},"Virtual user"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"config ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/etc/pure-ftpd.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PureDB     /usr/local/etc/pureftpd.pdb"))),(0,l.kt)("li",{parentName:"ul"},"Add a real account",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pw groupadd virtualgroup"),(0,l.kt)("li",{parentName:"ul"},'pw useradd ftpuser -g virtualgroup -c "FTP visual user" -d /home/ftp -s /sbin/nologin'))),(0,l.kt)("li",{parentName:"ul"},"Map a virtual account to a real account",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pure-pw useradd ftp-vip -u ftpuser -g virtualgroup -d /home/ftp -m"))),(0,l.kt)("li",{parentName:"ul"},"IP limitation.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pure-pw usermod ftp-vip -r ","[IP/mask]","   (-r means  allow client's ip)")))),(0,l.kt)("h1",{id:"directory-permission"},"Directory permission"),(0,l.kt)("h2",{id:"public"},"public"),(0,l.kt)("p",null,"pulbic\u4e2d\uff0c\u8b93\u533f\u540d\u5e33\u865f\u8b8a\u6210other\u7684\u6b0a\u9650\uff0c\u7136\u5f8c\u628aw\u6b0a\u9650\u7d66\u62d4\u6389\uff0c\u9019\u6a23\u5c0d\u65bc\u76ee\u9304\u4e2d\u6709\u4efb\u4f55\u7570\u52d5\u7684\u884c\u70ba(\u522a\u9664\u3001\u79fb\u52d5\u3001\u6539\u540d)\u90fd\u7121\u6cd5\u4f7f\u7528\u3002\n\u8b93virtualgroup\u7684\u4eba\u4e5f\u6709\u5b8c\u6574\u7684\u6b0a\u9650\u53bb\u8655\u7406\uff0c\u9019\u6a23ftp-vip\u5c31\u6709\u5b8c\u6574\u6b0a\u9650\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chown root:virtualgroup /home/ftp/public")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod 775 /home/ftp/public"))),(0,l.kt)("h2",{id:"upload"},"upload"),(0,l.kt)("p",null,"upload\u4e2d\uff0c\u533f\u540d\u5e33\u865f\u8981\u53ef\u4ee5\u4e0b\u8f09\u8ddf\u5275\u7acb\u8cc7\u6599\u593e\uff0c\u4ee5\u53ca\u4e0b\u8f09\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"ftp"),"\u64c1\u6709\u7684\u6a94\u6848\u3002\n\u7531\u65bc\u5148\u524d\u6709\u8a2d\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"AntiWarez"),"\uff0c\u56e0\u6b64\u6a94\u6848\u64c1\u6709\u8005\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"ftp"),"\u7684\u5c31\u6703\u7121\u6cd5\u4e0b\u8f09\uff0c\nftp-vip\u662fgroup\u7684\u6b0a\u9650\uff0c\u56e0\u6b64\u4ec0\u9ebc\u90fd\u53ef\u4ee5\u505a\u3002\n\u7d66\u4e88\u5176",(0,l.kt)("inlineCode",{parentName:"p"},"w"),"\u7684\u6b0a\u9650\uff0c\u9019\u6a23\u624d\u53ef\u4ee5\u5275\u7acb\u8cc7\u6599\u593e,\u7136\u5f8c\u533f\u540d\u5e33\u865f\u5929\u751f\u5c31\u4e0d\u53ef\u4ee5\u522a\u9664\u6587\u4ef6\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chown ftp:virtualgroup /home/ftp/upload")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod 775 /home/ftp/upload"))),(0,l.kt)("h2",{id:"hidden"},"hidden"),(0,l.kt)("p",null,"\u7531\u65bc\u76ee\u9304\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"\u4ee3\u8868\u7684\u80fd\u5426\u770b\u5230\u9019\u4e9b\u6a94\u6848\u5373ls\u6307\u4ee4\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u4ee3\u8868\u53ef\u5426\u9032\u5165\u8a72\u8cc7\u6599\u593e\u5373cd\u3002\n\u56e0\u6b64\u6211\u5011\u628ar\u62d4\u6389\u5373\u53ef\u9054\u6210\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chown root:virtualgroup /home/ftp/hidden")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod 775 /home/ftp/hidden"))),(0,l.kt)("h1",{id:"tls"},"TLS"),(0,l.kt)("p",null,"\u8a73\u7d30\u53c3\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/share/doc/pure-ftpd/README.TLS")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u7684\u6642\u5019\u8981\u52fe\u9078",(0,l.kt)("inlineCode",{parentName:"li"},"TLS")),(0,l.kt)("li",{parentName:"ul"},"config ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/etc/pure-ftpd.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TLS  (0,1,2)"),(0,l.kt)("li",{parentName:"ul"},"0: \u4e0d\u652f\u63f4\u52a0\u5bc6\u50b3\u8f38"),(0,l.kt)("li",{parentName:"ul"},"1: \u52a0\u5bc6\u3001\u4e0d\u52a0\u5bc6\u90fd\u652f\u63f4\u50b3\u8f38"),(0,l.kt)("li",{parentName:"ul"},"2: \u4e0d\u652f\u63f4\u975e\u52a0\u5bc6\u50b3\u8f38"),(0,l.kt)("li",{parentName:"ul"},"\u9078\u64c72\u7684\u8a71\uff0c\u5c31\u4e00\u5b9a\u8981\u7528ftpes\u624d\u80fd\u9023\u7dda\uff0c\u9078\u64c71\u7684\u8a71\uff0c\u4f7f\u7528ftp or ftpes\u90fd\u53ef\u4ee5\u9023\u7dda"))),(0,l.kt)("li",{parentName:"ul"},"create a self-signed certificate",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u7684\u6191\u8b49\u4f4d\u7f6e\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/ssl/private/pure-ftpd.pem")),(0,l.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u7684\u6642\u5019\u53ef\u4ee5\u900f\u904e",(0,l.kt)("inlineCode",{parentName:"li"},"make configure CERTFILE=your pem location"),"\u4f86\u4fee\u6539\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mkdir -p /etc/ssl/private")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openssl req -x509 -nodes -newkey rsa:1024 -keyout /etc/ssl/private/pure-ftpd.pem -out /etc/ssl/private/pure-ftpd.pem")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod 600 /etc/ssl/private/*.pem"))))),(0,l.kt)("h1",{id:"restart-pure-ftpd"},"Restart pure-ftpd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/usr/local/etc/rc.d/pure-ftpd restart")))}s.isMDXComponent=!0}}]);