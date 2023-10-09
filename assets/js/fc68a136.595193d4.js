"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[22746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,k=u["".concat(c,".").concat(h)]||u[h]||m[h]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Rancher - \u5176\u4ed6\u4e8b\u9805",sidebar_position:14,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},o="\u524d\u8a00",i={unversionedId:"techPost/2021/iThome_Challenge/day14",id:"techPost/2021/iThome_Challenge/day14",title:"Rancher - \u5176\u4ed6\u4e8b\u9805",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day14.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day14",permalink:"/docs/techPost/2021/iThome_Challenge/day14",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:14,frontMatter:{title:"Rancher - \u5176\u4ed6\u4e8b\u9805",sidebar_position:14,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"Rancher \u5c08\u6848\u7ba1\u7406\u6307\u5357 - \u8cc7\u6e90\u63a7\u7ba1",permalink:"/docs/techPost/2021/iThome_Challenge/day13"},next:{title:"Rancher \u8207 Infrastructure as Code",permalink:"/docs/techPost/2021/iThome_Challenge/day15"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u904e\u53bb\u5341\u591a\u7bc7\u6587\u7ae0\u5f9e\u5f9e\u4e09\u500b\u4e0d\u540c\u89d2\u5ea6\u4f86\u63a2\u8a0e\u5982\u4f55\u4f7f\u7528 Rancher\uff0c\u5305\u542b\u7cfb\u7d71\u7ba1\u7406\u54e1\uff0c\u53e2\u96c6\u7ba1\u7406\u54e1\u5230\u5c08\u6848\u7ba1\u7406\u54e1\uff0c\u4e0d\u540c\u5c64\u7d1a\u5c08\u6ce8\u7684\u89d2\u5ea6\u4e0d\u540c\uff0c\u56e0\u6b64\u4f7f\u7528\u4e0a\u4e5f\u6709\u4e0d\u540c\u7684\u529f\u80fd\u53ef\u4ee5\u7528\u3002"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u5c07\u63a2\u8a0e Rancher \u4e00\u4e9b\u5176\u4ed6\u7684\u6ce8\u610f\u4e8b\u9805\u3002"),(0,a.kt)("h1",{id:"\u6e05\u9664\u7bc0\u9ede"},"\u6e05\u9664\u7bc0\u9ede"),(0,a.kt)("p",null,"\u4e4b\u524d\u6587\u7ae0\u63a2\u8a0e\u904e\u4e09\u7a2e\u4e0d\u540c\u5b89\u88dd Kubernetes \u7684\u65b9\u5f0f\uff0c\u5176\u4e2d\u4e00\u7a2e\u65b9\u5f0f\u662f\u904b\u884c docker command \u5728\u73fe\u6709\u7684\u7bc0\u9ede\u4e0a\u5c07\u8a72\u7bc0\u9ede\u52a0\u5165\u5230 RKE \u53e2\u96c6\u4e2d\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4eca\u5929\u6709\u9700\u6c42\u60f3\u5c07\u8a72\u7bc0\u9ede\u5f9e RKE \u4e2d\u79fb\u9664\u8a72\u600e\u9ebc\u8fa6?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/K9JI1WS.png",alt:null})),(0,a.kt)("p",null,"Cluster Manager \u4e2d\u53ef\u4ee5\u76f4\u63a5\u5230 Cluster \u9801\u9762\u5c07\u8a72\u7bc0\u9ede\u5f9e RKE \u4e2d\u79fb\u9664\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\uff0c\u9019\u908a\u7684\u79fb\u9664\u4ee3\u8868\u7684\u53ea\u662f\u5c07\u8a72\u7bc0\u9ede\u5f9e RKE \u79fb\u9664\uff0c\u8a72\u7bc0\u9ede\u4e0a\u53ef\u80fd\u6703\u6709\u4e00\u4e9b\u56e0\u70ba\u52a0\u5165 RKE \u800c\u7522\u751f\u7684\u6a94\u6848\u4f9d\u7136\u5b58\u5728\u7bc0\u9ede\u4e0a\u3002"),(0,a.kt)("p",null,"\u5047\u8a2d\u4eca\u5929\u6709\u9700\u6c42\u53c8\u8981\u5c07\u8a72\u7bc0\u9ede\u91cd\u65b0\u52a0\u5165\u56de\u5230 RKE \u4e2d\u7684\u8a71\uff0c\u5982\u679c\u4e0a\u6b21\u79fb\u9664\u6642\u6c92\u6709\u59a5\u5584\u5730\u53bb\u522a\u9664\u90a3\u4e9b\u6a94\u6848\u7684\u8a71\uff0c\u7b2c\u4e8c\u6b21\u904b\u884c docker command \u53bb\u52a0\u5165 RKE \u53e2\u96c6\u6709\u975e\u5e38\u5927\u7684\u6a5f\u7387\u6703\u5931\u6557\uff0c\u56e0\u70ba\u7bc0\u9ede\u4e2d\u6709\u592a\u591a\u4e4b\u524d\u7684\u7522\u7269\u5b58\u5728\u3002"),(0,a.kt)("p",null,"\u5b98\u7db2\u6709\u7279\u5225\u64b0\u5beb\u4e00\u7bc7\u6587\u7ae0\u63a2\u8a0e\u5982\u679c\u8981\u6e05\u9664\u9019\u4e9b\u7522\u7269\u7684\u8a71\uff0c\u6709\u54ea\u4e9b\u8cc7\u6e90\u8981\u8655\u7406\uff0c\u8a73\u7d30\u7248\u672c\u53ef\u4ee5\u53c3\u95b1 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-admin/cleaning-cluster-nodes/"},"Removing Kubernetes Components from Nodes")),(0,a.kt)("p",null,"\u9019\u908a\u5217\u8209\u4e00\u4e0b\u4e00\u500b\u6e05\u9664\u7bc0\u9ede\u6b63\u78ba\u6b65\u9a5f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f9e Rancher UI \u79fb\u9664\u8a72\u7bc0\u9ede"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u555f\u8a72\u7bc0\u9ede\uff0c\u78ba\u4fdd\u6240\u6709\u653e\u5230\u66ab\u5b58\u8cc7\u6599\u593e\u7684\u6a94\u6848\u90fd\u6703\u6d88\u5931"),(0,a.kt)("li",{parentName:"ol"},"Docker \u76f8\u95dc\u8cc7\u6599"),(0,a.kt)("li",{parentName:"ol"},"Mount \u76f8\u95dc\u8cc7\u8a0a\u90fd\u8981 umount"),(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\u8cc7\u6599\u593e"),(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\u591a\u7684\u7db2\u5361"),(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\u591a\u7684 iptables \u898f\u5247"),(0,a.kt)("li",{parentName:"ol"},"\u518d\u6b21\u91cd\u958b\u6a5f")),(0,a.kt)("p",null,"\u7b2c\u4e09\u9ede\u79fb\u9664 docker \u76f8\u95dc\u8cc7\u6599\uff0c\u5b98\u65b9\u5217\u51fa\u4e09\u500b\u6307\u4ee4\uff0c\u5206\u5225\u79fb\u9664 container, volume \u4ee5\u53ca image\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm -f $(docker ps -qa)\ndocker rmi -f $(docker images -q)\ndocker volume rm $(docker volume ls -q)\n")),(0,a.kt)("p",null,"\u5982\u679c\u8a72\u7bc0\u9ede\u63a5\u4e0b\u4f86\u53c8\u8981\u91cd\u65b0\u52a0\u5165\u5230 Rancher \u4e2d\uff0c\u5efa\u8b70\u4e0d\u9700\u8981\u57f7\u884c docker rmi \u7684\u6b65\u9a5f\uff0c\u4e4b\u524d\u7684 image \u53ef\u4ee5\u91cd\u65b0\u4f7f\u7528\u4e0d\u9700\u8981\u91cd\u65b0\u6293\u53d6\uff0c\u9019\u6a23\u53ef\u4ee5\u7701\u4e00\u4e9b\u6642\u9593\u3002"),(0,a.kt)("p",null,"\u7b2c\u56db\u9ede\u7684 mount \u90e8\u5206\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b98\u6587\u6587\u4ef6\u6c92\u6709\u7279\u5225\u4f7f\u7528 sudo \u7684\u6307\u4ee4\u65bc\u7bc4\u4f8b\u4e2d\uff0c\u4ee3\u8868\u5176\u5047\u8a2d\u4f60\u6703\u4f7f\u7528 root \u8eab\u4efd\u57f7\u884c\uff0c\u56e0\u6b64\u5982\u679c\u4e0d\u662f\u4f7f\u7528 root \u7684\u8a71\u8a18\u5f97\u8981\u5728 umount \u6307\u4ee4\u4e2d\u88dc\u4e0a sudo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"for mount in $(mount | grep tmpfs | grep '/var/lib/kubelet' | awk '{ print $3 }') /var/lib/kubelet /var/lib/rancher; do sudo umount $mount; done\n")),(0,a.kt)("p",null,"\u7b2c\u4e94\u9ede\u8ddf\u7b2c\u56db\u9ede\u4e00\u6a23\uff0c\u4f46\u662f\u7b2c\u4e94\u9ede\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u70ba\u7cfb\u7d71\u4e0a\u6709\u592a\u591a\u7684\u8cc7\u6599\u593e\u90fd\u542b\u6709\u904e\u5f80 RKE \u53e2\u96c6\u7684\u8cc7\u6599\uff0c\u6240\u4ee5\u7b2c\u4e94\u6b65\u4e00\u5b9a\u8981\u78ba\u4fdd\u9700\u8981\u57f7\u884c\u624d\u53ef\u4ee5\u5c07\u8cc7\u6599\u6e05\u9664\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"sudo rm -rf /etc/ceph \\\n       /etc/cni \\\n       /etc/kubernetes \\\n       /opt/cni \\\n       /opt/rke \\\n       /run/secrets/kubernetes.io \\\n       /run/calico \\\n       /run/flannel \\\n       /var/lib/calico \\\n       /var/lib/etcd \\\n       /var/lib/cni \\\n       /var/lib/kubelet \\\n       /var/lib/rancher/rke/log \\\n       /var/log/containers \\\n       /var/log/kube-audit \\\n       /var/log/pods \\\n       /var/run/calico\n")),(0,a.kt)("p",null,"\u7b2c\u516d\u8ddf\u7b2c\u4e03\u9019\u5169\u6b65\u9a5f\u4e26\u4e0d\u4e00\u5b9a\u8981\u8655\u7406\uff0c\u56e0\u70ba\u9019\u4e9b\u8cc7\u8a0a\u90fd\u662f\u7bc0\u9ede\u52a0\u5165\u5230 Kubernetes \u5f8c\u88ab\u52d5\u614b\u5275\u5efa\u7684\uff0c\u57fa\u672c\u4e0a\u91cd\u958b\u6a5f\u5c31\u4e0d\u6703\u6709\u9019\u4e9b\u8cc7\u8a0a\uff0c\u53ea\u8981\u78ba\u4fdd\u7bc0\u9ede\u91cd\u65b0\u958b\u6a5f\u5f8c\u6c92\u6709\u7e7c\u7e8c\u6210\u70ba Kubernetes \u7684\u7bc0\u9ede\uff0c\u90a3\u76f8\u95dc\u7684\u865b\u64ec\u7db2\u5361\u8ddf iptables \u898f\u5247\u4e5f\u5c31\u4e0d\u6703\u88ab\u7522\u751f\u3002"),(0,a.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\u5b98\u65b9\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u6b65\u9a5f\u4e0d\u4e00\u5b9a\u90fd\u6703\u6709\u6771\u897f\u53ef\u4ee5\u522a\u9664\uff0c\u4e3b\u8981\u6703\u53d6\u6c7a\u65bc\u53e2\u96c6\u5167\u7684\u8a2d\u5b9a\uff0c\u4e0d\u540c\u7684\u8a2d\u5b9a\u53ef\u80fd\u6703\u6709\u4e0d\u540c\u7684\u7d50\u679c\uff0c\u8b6c\u5982\u63a1\u7528\u4e0d\u540c\u7684 CNI\uff0c\u5176\u7522\u751f\u7684 iptables \u898f\u5247\u8207\u865b\u64ec\u7db2\u5361\u5c31\u6703\u6709\u6240\u4e0d\u540c\u3002"),(0,a.kt)("h1",{id:"\u96e2\u7dda\u5b89\u88dd"},"\u96e2\u7dda\u5b89\u88dd"),(0,a.kt)("p",null,"\u96d6\u7136\u96f2\u7aef\u74b0\u5883\u65b9\u4fbf\u5b58\u53d6\uff0c\u4f46\u662f\u5f88\u591a\u7522\u696d\u8207\u74b0\u5883\u53ef\u80fd\u6703\u9700\u8981\u65bc\u4e00\u500b\u6c92\u6709\u5c0d\u5916\u7db2\u8def\u7684\u74b0\u5883\u4e0b\u53bb\u5b89\u88dd Kubernetes \u53e2\u96c6\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b\u5982\u679c\u60f3\u8981\u4f7f\u7528 Rancher \u7684\u8a71\u5c31\u8981\u63a2\u8a0e\u5982\u4f55\u9054\u5230\u96e2\u7dda\u5b89\u88dd\u3002"),(0,a.kt)("p",null,"Rancher \u8b1b\u5230\u96e2\u7dda\u5b89\u88dd\u6709\u5169\u7a2e\u542b\u7fa9\uff0c\u4e00\u7a2e\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rancher \u672c\u8eab\u7684\u96e2\u7dda\u5b89\u88dd"),(0,a.kt)("li",{parentName:"ol"},"Rancher \u4ee5\u96e2\u7dda\u5b89\u88dd\u7684\u65b9\u5f0f\u5e6b\u5fd9\u5275\u5efa RKE \u53e2\u96c6")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u5169\u7a2e\u65b9\u5f0f\u5176\u5be6\u90fd\u9084\u662f\u4ef0\u8cf4\u5404\u5f0f\u5404\u6a23\u7684 container image \u4f86\u8655\u7406\uff0c\u6240\u4ee5\u8655\u7406\u7684\u65b9\u6cd5\u4e00\u81f4\uff0c\u5c31\u662f\u8981\u5b89\u88dd\u4e00\u500b container registry \u4e26\u4e14\u5c07\u6703\u9700\u8981\u4f7f\u7528\u7684 container image \u90fd\u4e8b\u5148\u532f\u5165\u5230\u8a72 container registry \u4e2d\uff0c\u63a5\u8005\u5b89\u88dd\u6642\u8981\u8b93\u7cfb\u7d71\u77e5\u9053\u53bb\u54ea\u4e0b\u8f09\u76f8\u95dc\u7684 container image \u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5b98\u7db2\u6709\u6578\u7bc7\u6587\u7ae0\u63a2\u8a0e\u9019\u7a2e\u985e\u578b\u4e0b\u7684\u5b89\u88dd\u8a72\u600e\u9ebc\u8655\u7406\uff0c\u6709\u8208\u8da3\u7684\u4e5f\u53ef\u4ee5\u53c3\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/other-installation-methods/air-gap/"},"Air Gapped Helm CLI Install")),(0,a.kt)("p",null,"\u7531\u65bc\u5b89\u88dd Rancher \u672c\u8eab\u6709\u5f88\u591a\u65b9\u5f0f\uff0c\u8b6c\u5982\u591a\u7bc0\u9ede\u7684 RKE \u6216\u662f\u55ae\u7bc0\u7684 Docker \u5b89\u88dd\uff0c\u4ee5\u4e0b\u7c21\u8ff0\u4e00\u4e0b\u5982\u4f55\u7528 Docker \u9054\u6210\u55ae\u7bc0\u9ede\u7684\u96e2\u7dda\u5b89\u88dd\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67b6\u8a2d\u4e00\u500b Private Container Registry"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e Rancher \u6e96\u5099\u597d\u7684\u8173\u672c\u53bb\u4e0b\u8f09\u4e26\u6253\u5305 Rancher \u6703\u7528\u5230\u7684\u6240\u6709 Container Image"),(0,a.kt)("li",{parentName:"ol"},"\u628a\u7b2c\u4e8c\u6b65\u9a5f\u7522\u751f Container Image \u6a94\u6848\u7d66\u532f\u5165\u5230 Private Container Registry"),(0,a.kt)("li",{parentName:"ol"},"\u904b\u884c\u4fee\u6539\u904e\u5f8c\u7684 Docker \u4f86\u5b89\u88dd Rancher.")),(0,a.kt)("p",null,"\u7b2c\u4e00\u9ede\u9019\u908a\u6709\u5e7e\u9ede\u8981\u6ce8\u610f\na. \u53ef\u4ee5\u4f7f\u7528 container registry v2 \u6216\u662f\u4f7f\u7528 harbor\nb. \u4e00\u5b9a\u8981\u5e6b\u8a72 container registry \u6e96\u5099\u597d\u4e00\u500b\u6191\u8b49\uff0c\u9019\u6a23\u4f7f\u7528\u4e0a\u6703\u6bd4\u8f03\u65b9\u4fbf\uff0c\u4e0d\u7528\u592a\u591a\u5730\u65b9\u8981\u53bb\u8655\u7406 invalid certificate \u7684\u7528\u6cd5\u3002\u6191\u8b49\u7684\u90e8\u5206\u53ef\u4ee5\u81ea\u7c3d CA \u6216\u662f\u7531\u4e00\u500b\u5df2\u77e5\u4fe1\u4efb CA \u7c3d\u7f72\u7684\u3002\nc. image \u7684\u5bb9\u91cf\u5927\u6982\u9700\u8981 28 GB \u5de6\u53f3\uff0c\u56e0\u6b64\u6e96\u5099\u74b0\u5883\u6642\u8981\u6ce8\u610f\u7a7a\u9593"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u8ddf\u7b2c\u4e09\u9ede\u76f4\u63a5\u53c3\u95b1\u5b98\u7db2\u7684\u65b9\u5f0f\uff0c\u5148\u5230 GitHub \u7684 Release Page \u627e\u5230\u76ee\u6a19\u7248\u672c\uff0c\u63a5\u8005\u4e0b\u8f09\u4e0b\u5217\u4e09\u500b\u6a94\u6848"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"rancher-images.txt"),(0,a.kt)("li",{parentName:"ol"},"rancher-save.images.sh"),(0,a.kt)("li",{parentName:"ol"},"rancher-load-images.sh")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u500b\u8173\u672c\u6703\u8ca0\u8cac\u53bb\u4e0b\u8f09 rancher-images.txt \u4e2d\u63cf\u8ff0\u7684\u6a94\u6848\u4e26\u4e14\u6253\u5305\u6210\u4e00\u500b tar \u6a94\u6848\uff0c\u7cfb\u7d71\u4e2d\u6703\u540c\u6642\u5b58\u653e container image \u4ee5\u53ca tar \u6a94\uff0c\u6240\u4ee5\u6700\u597d\u78ba\u4fdd\u7a7a\u9593\u6709 60GB \u4ee5\u4e0a\u7684\u8db3\u5920\u7a7a\u9593\u3002\n\u7b2c\u4e09\u500b\u8173\u672c\u6703\u5c07\u8a72 tar \u6a94\u6848\u7684\u5167\u5bb9\u4e0a\u50b3\u5230\u76ee\u6a19 container registry\u3002"),(0,a.kt)("p",null,"\u9019\u4e00\u5207\u90fd\u6e96\u5099\u5b8c\u7562\u5f8c\uff0c\u5c31\u53ef\u4ee5\u57f7\u884c docker \u6307\u4ee4\uff0c\u53ef\u4ee5\u53c3\u95b1",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/other-installation-methods/air-gap/install-rancher/docker-install-commands/"},"Docker Install Commands")),(0,a.kt)("p",null,"\u4e00\u500b\u7bc4\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -v /mysite/fullchain.pem:/etc/rancher/ssl/cert.pem \\\n    -v /mysite/previkey.pem>:/etc/rancher/ssl/key.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=test.hwchiu.com \\ # Set a default private registry to be used in Rancher\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n    --privileged\n    registry.hwchiu.com/rancher/rancher:v2.5.9  \\\n    --no-cacerts\n")),(0,a.kt)("p",null,"\u8acb\u7279\u5225\u6ce8\u610f\u4e0a\u8ff0\u7684\u53c3\u6578\uff0c\u4e0d\u540c\u7684\u6191\u8b49\u65b9\u5f0f\u6703\u50b3\u5165\u7684\u8cc7\u8a0a\u4e0d\u540c\uff0c\u81ea\u7c3d\u7684\u65b9\u5f0f\u9084\u8981\u984d\u5916\u628a CA_CERTS \u7d66\u4e1f\u9032\u53bb\u3002"))}m.isMDXComponent=!0}}]);