"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[46407],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(k,i(i({ref:n},p),{},{components:t})):o.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u4f7f\u7528 Cluster Capacity \u4f86\u9810\u89bd Pod \u7684\u90e8\u7f72\u60c5\u6cc1",keywords:["Kubernetes"],tags:["Kubernetes","DevOps"],description:"\u8a18\u9304\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Cluster Capacity \u6b64\u5de5\u5177",image:"./assets/SyL6TF1hT.png"},i=void 0,l={unversionedId:"2024/cluster-capacity",id:"2024/cluster-capacity",title:"\u4f7f\u7528 Cluster Capacity \u4f86\u9810\u89bd Pod \u7684\u90e8\u7f72\u60c5\u6cc1",description:"\u8a18\u9304\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Cluster Capacity \u6b64\u5de5\u5177",source:"@site/docs/2024/cluster-capacity.md",sourceDirName:"2024",slug:"/2024/cluster-capacity",permalink:"/docs/2024/cluster-capacity",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"DevOps",permalink:"/docs/tags/dev-ops"}],version:"current",lastUpdatedBy:"HungWei Chiu",frontMatter:{title:"\u4f7f\u7528 Cluster Capacity \u4f86\u9810\u89bd Pod \u7684\u90e8\u7f72\u60c5\u6cc1",keywords:["Kubernetes"],tags:["Kubernetes","DevOps"],description:"\u8a18\u9304\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Cluster Capacity \u6b64\u5de5\u5177",image:"./assets/SyL6TF1hT.png"},sidebar:"techPost",previous:{title:"2024",permalink:"/docs/category/2024"},next:{title:"Nginx Reverse Proxy \u7684 DNS Issue",permalink:"/docs/2024/nginx-dns"}},s={image:t(93997).Z},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e00\u500b\u53ef\u4ee5\u7528\u4f86\u8a55\u4f30\u76ee\u524d\u53e2\u96c6\u8cc7\u6e90\u80fd\u5920\u90e8\u7f72\u591a\u5c11\u500b\u76ee\u6a19 Pod \u7684\u5de5\u5177\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u900f\u904e\u8a72\u5de5\u5177\u4f86\u9810\u89bd\u4e00\u4e0b\u53ef\u80fd\u7684\u5206\u4f48\u60c5\u5f62"),(0,r.kt)("h1",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-capacity/blob/master/doc/cluster-capacity.md"},"Cluster Capacity")," \u7576\u521d\u7684\u8a2d\u8a08\u6587\u4ef6\uff0c\u5176\u76ee\u7684\u5c31\u662f"),(0,r.kt)("p",null,"The goal is to provide a framework that estimates a number of instances of a specified pod that would be scheduled in a cluster."),(0,r.kt)("p",null,"\u6839\u64da\u89e3\u8b80\uff0c\u5c31\u662f\u6839\u64da\u7576\u524d Cluster \u7684\u7cfb\u7d71\u8cc7\u6e90\u91cf\u4f86\u8a55\u4f30\u76ee\u6a19 Pod \u6700\u591a\u53ef\u4ee5\u90e8\u7f72\u5230\u591a\u5c11\u500b\u5230\u74b0\u5883\u4e2d\uff0c\u540c\u6642\u6bcf\u500b\u7bc0\u9ede\u4e0a\u6700\u591a\u53ef\u4ee5\u6709\u5e7e\u500b\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\u8a72\u5de5\u5177\u9664\u4e86\u7528\u4f86\u8a08\u7b97\u7e3d\u91cf\u5916\uff0c\u9084\u53ef\u4ee5\u7528\u4f86\u9810\u89bd\u76ee\u6a19 Pod \u53ef\u80fd\u6703\u88ab\u90e8\u7f72\u5230\u54ea\u4e9b\u7bc0\u9ede\u4e0a\uff0c\u5c0d\u65bc\u7528\u4f86\u5b78\u7fd2 Taint/Toleration, NodeSelector, PodAntiAffintiy \u4f86\u8aaa\u4e5f\u662f\u4e00\u500b\u4e0d\u5dee\u7684\u5de5\u5177\uff0c\u96d6\u7136\u4e26\u975e\u5b8c\u7f8e\u5230\u53ef\u4ee5\u5b8c\u5168\u6a21\u64ec Scheduler \u7684\u884c\u70ba\u4f46\u662f\u6574\u9ad4\u4e0a\u4e5f\u4e0d\u5dee\u4e86\u3002"),(0,r.kt)("h1",{id:"\u74b0\u5883\u5efa\u7f6e"},"\u74b0\u5883\u5efa\u7f6e"),(0,r.kt)("p",null,"\u8a72\u5de5\u5177\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openshift/cluster-capacity.git"},"Github")," \u4e26\u6c92\u6709\u63d0\u4f9b\u7de8\u8b6f\u597d\u7684\u57f7\u884c\u6a94\u6848\uff0c\u56e0\u6b64\u8981\u4f7f\u7528\u7684\u8a71\u4e00\u7a2e\u5c31\u662f\u81ea\u884c\u4e0b\u8f09\u7de8\u8b6f\uff0c\u4e0d\u7136\u5c31\u662f\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684 Container Image\uff0c\u672c\u7bc7\u7bc4\u4f8b\u4ee5\u4e0b\u8f09\u81ea\u884c\u7de8\u8b6f\u70ba\u4e3b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"$ git clone https://github.com/openshift/cluster-capacity.git\n$ cd cluster-capacity\n$ make\nGO111MODULE=auto go build -o hypercc sigs.k8s.io/cluster-capacity/cmd/hypercc\nln -sf hypercc cluster-capacity\nln -sf hypercc genpod\n$ ./cluster-capacity\nPod spec file is missing\n\nCluster-capacity simulates an API server with initial state copied from the Kubernetes enviroment\nwith its configuration specified in KUBECONFIG. The simulated API server tries to schedule the number of\npods specified by --max-limits flag. If the --max-limits flag is not specified, pods are scheduled until\nthe simulated API server runs out of resources.\n\nUsage:\n  cluster-capacity --kubeconfig KUBECONFIG --podspec PODSPEC [flags]\n\nFlags:\n      --default-config string   Path to JSON or YAML file containing scheduler configuration.\n      --exclude-nodes strings   Exclude nodes to be scheduled\n  -h, --help                    help for cluster-capacity\n      --kubeconfig string       Path to the kubeconfig file to use for the analysis.\n      --max-limit int           Number of instances of pod to be scheduled after which analysis stops. By default unlimited.\n  -o, --output string           Output format. One of: json|yaml (Note: output is not versioned or guaranteed to be stable across releases).\n      --podspec string          Path to JSON or YAML file containing pod definition.\n      --verbose                 Verbose mode\n")),(0,r.kt)("p",null,"Note: \u74b0\u5883\u9700\u8981\u5b89\u88dd make \u4ee5\u53ca golang \u76f8\u95dc\u5de5\u5177\u624d\u53ef\u4ee5\u6b63\u78ba\u7de8\u8b6f"),(0,r.kt)("p",null,"\u7bc4\u4f8b\u74b0\u5883\u4f7f\u7528 KIND \u53bb\u642d\u5efa\u4e00\u500b\u4e09\u7bc0\u9ede\u7684\u6a5f\u5668\uff0c\u6bcf\u500b\u7bc0\u9ede\u6240\u89c0\u770b\u5230\u7684\u8cc7\u6e90\u91cf\u90fd\u70ba 4C32G"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'\u6bcf\u500b\u7bc0\u9ede\u90fd\u6709\u4e00\u500b key \u70ba "kubernetes.io/hostname" \u7684 node label\uff0c value \u70ba\u5404\u81ea\u7684\u540d\u7a31'),(0,r.kt)("li",{parentName:"ol"},'\u7b2c\u4e00\u500b\u7bc0\u9ede\u6709\u4e00\u500b taint, key \u70ba "node-role.kubernetes.io/control-plane"')),(0,r.kt)("p",null,"\u4e4b\u5f8c\u7684\u7bc4\u4f8b\u5c31\u662f\u6703\u57fa\u65bc\u9019\u500b\u74b0\u5883\u4f86\u5617\u8a66\u5404\u7a2e cluster-capacity \u5de5\u5177\u7684\u7528\u6cd5"),(0,r.kt)("p",null,"\u6982\u5ff5\u5982\u4e0b\u5716\n",(0,r.kt)("img",{alt:"image",src:t(93997).Z,width:"980",height:"318"})),(0,r.kt)("h1",{id:"\u7cfb\u7d71\u8cc7\u6e90\u8a55\u4f30"},"\u7cfb\u7d71\u8cc7\u6e90\u8a55\u4f30"),(0,r.kt)("p",null,"\u6e96\u5099\u4e0b\u5217 pod.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: small-pod\n  labels:\n    app: guestbook\n    tier: frontend\nspec:\n  containers:\n  - name: php-redis\n    image: gcr.io/google-samples/gb-frontend:v4\n    imagePullPolicy: Always\n    resources:\n      limits:\n        cpu: 150m\n        memory: 100Mi\n      requests:\n        cpu: 150m\n        memory: 100Mi\n  restartPolicy: "OnFailure"\n  dnsPolicy: "Default"\n')),(0,r.kt)("p",null,"\u8a72 Pod \u9700\u8981\u95dc\u6ce8\u7684\u9ede\u6709\u5169\u500b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u63cf\u8ff0\u9700\u8981\u7684 CPU \u4ee5\u53ca Memory \u7528\u91cf"),(0,r.kt)("li",{parentName:"ol"},"\u6c92\u6709\u63cf\u8ff0\u4efb\u4f55\u8ddf\u6307\u6d3e(NodeSelector...etc)\u6709\u95dc\u7684\u8a2d\u5b9a")),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u57f7\u884c. cluster-capacity \u4f86\u89c0\u5bdf\u5176\u7d50\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"$ ./cluster-capacity --kubeconfig ~/.kube/config --podspec examples/pod.yaml  --verbose\nsmall-pod pod requirements:\n        - CPU: 150m\n        - Memory: 100Mi\n\nThe cluster can schedule 104 instance(s) of the pod small-pod.\n\nTermination reason: Unschedulable: 0/3 nodes are available: 1 node(s) had untolerated taint {node-role.kubernetes.io/control-plane: }, 2 Insufficient cpu. preemption: 0/3 nodes are available: 1 Preemption is not helpful for scheduling, 2 No preemption victims found for incoming pod.\n\nPod distribution among nodes:\nsmall-pod\n        - kind-worker2: 52 instance(s)\n        - kind-worker: 52 instance(s)\n")),(0,r.kt)("p",null,"\u8a72\u7d50\u679c\u6211\u5011\u5206\u6210\u5e7e\u500b\u90e8\u5206\u4f86\u62c6\u89e3\n\u9996\u5148\u63cf\u8ff0\u76ee\u6a19 Pod \u95dc\u65bc\u8cc7\u6e90\u7528\u91cf\u7684\u9700\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"small-pod pod requirements:\n        - CPU: 150m\n        - Memory: 100Mi\n")),(0,r.kt)("p",null,"\u63a5\u8005\u660e\u78ba\u6307\u51fa\uff0c\u76ee\u524d cluster \u6700\u591a\u53ef\u4ee5\u90e8\u7f72 104 \u500b\u76ee\u6a19 Pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The cluster can schedule 104 instance(s) of the pod small-pod.\n")),(0,r.kt)("p",null,"\u63a5\u8005\u6307\u51fa\u70ba\u4ec0\u9ebc\u6c92\u6709\u8fa6\u6cd5\u90e8\u7f72\u66f4\u591a\u7684 Pod\uff0c\u539f\u56e0\u5927\u81f4\u4e0a\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u4e00\u500b Node \u6709 Taint\uff0c\u56e0\u6b64\u4e0d\u80fd\u88ab\u8003\u616e"),(0,r.kt)("li",{parentName:"ol"},"\u5269\u4e0b\u5169\u500b Node \u6c92\u6709\u8db3\u5920\u7684 CPU")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Termination reason: Unschedulable: 0/3 nodes are available: 1 node(s) had untolerated taint {node-role.kubernetes.io/control-plane: }, 2 Insufficient cpu. preemption: 0/3 nodes are available: 1 Preemption is not helpful for scheduling, 2 No preemption victims found for incoming pod.\n")),(0,r.kt)("p",null,"\u6700\u5f8c\u5448\u73fe104\u7684 Pod \u7684\u8a08\u7b97\u5206\u4f48"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Pod distribution among nodes:\nsmall-pod\n        - kind-worker2: 52 instance(s)\n        - kind-worker: 52 instance(s)\n")),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"kinde-wokrer")," \u7576\u4e0b\u7684\u8cc7\u6e90\u5206\u4f48\u60c5\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Allocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests   Limits\n  --------           --------   ------\n  cpu                100m (1%)  100m (1%)\n  memory             50Mi (0%)  50Mi (0%)\n  ephemeral-storage  0 (0%)     0 (0%)\n  hugepages-1Gi      0 (0%)     0 (0%)\n  hugepages-2Mi      0 (0%)     0 (0%)\n")),(0,r.kt)("p",null,"\u7406\u8ad6\u4e0a\u6709 8C32G \u7684\u8cc7\u6e90\u7528\u91cf\uff0c\u6263\u6389\u4e0a\u8ff0\u4f54\u7528\u8cc7\u6e90\u5f8c\uff0c\u5269\u4e0b 7.9C, 31.95G\uff0c\u800c\u6bcf\u500b\u76ee\u6a19\u9700\u8981 0.15C\uff0c\u8a08\u7b97\u5f8c\u53ef\u4ee5\u5f97\u5230\n7.9/0.15 ~= 52.6666\uff0c\u56e0\u6b64\u6700\u591a\u5c31\u662f 52 \u500b\u7bc0\u9ede\u3002"),(0,r.kt)("p",null,"\u900f\u904e\u4e0a\u8ff0\u7684\u7bc4\u4f8b\uff0c\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230 cluster-capacity \u6b64\u5de5\u5177\u5feb\u901f\u7684\u8a08\u7b97"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8a72 Pod \u53ea\u80fd\u90e8\u7f72\u5230 kind-worker \u4ee5\u53ca kind-worker2 \u9019\u5169\u500b\u7bc0\u9ede\uff0c\u9019\u4e5f\u7b26\u5408\u9810\u671f\uff0c\u56e0\u70ba\u7b2c\u4e00\u500b\u7bc0\u9ede\u6709 Taint"),(0,r.kt)("li",{parentName:"ol"},"\u4e0a\u8ff0\u6bcf\u500b\u7bc0\u9ede\u8003\u616e\u5230\u7576\u524d\u8cc7\u6e90\u91cf\u5f8c\uff0c\u5404\u81ea\u6700\u591a\u53ea\u80fd\u90e8\u7f72 52 \u500b\u526f\u672c\uff0c\u6574\u500b cluster \u6700\u591a 104 \u500b\u526f\u672c\u3002")),(0,r.kt)("h1",{id:"tainttoleration"},"Taint/Toleration"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5617\u8a66\u52a0\u5165 Toleration \u8b93\u76ee\u6a19 Pod \u53ef\u4ee5\u90e8\u7f72\u5230\u7b2c\u4e00\u500b\u7bc0\u9ede\uff0c\u9019\u6642\u5019 Pod YAML \u5982\u4e0b\uff0c\u4e26\u4e14\u5b58\u70ba pod2.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: small-pod\n  labels:\n    app: guestbook\n    tier: frontend\nspec:\n  containers:\n  - name: php-redis\n    image: gcr.io/google-samples/gb-frontend:v4\n    imagePullPolicy: Always\n    resources:\n      limits:\n        cpu: 150m\n        memory: 100Mi\n      requests:\n        cpu: 150m\n        memory: 100Mi\n  tolerations:\n  - key: "node-role.kubernetes.io/control-plane"\n    effect: "NoSchedule"\n  restartPolicy: "OnFailure"\n  dnsPolicy: "Default"\n')),(0,r.kt)("p",null,"\u57f7\u884c cluster-capacity \u5de5\u5177\u53ef\u4ee5\u89c0\u5bdf\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./cluster-capacity --kubeconfig ~/.kube/config --podspec examples/pod2.yaml  --verbose\nsmall-pod pod requirements:\n        - CPU: 150m\n        - Memory: 100Mi\n\nThe cluster can schedule 151 instance(s) of the pod small-pod.\n\nTermination reason: Unschedulable: 0/3 nodes are available: 3 Insufficient cpu. preemption: 0/3 nodes are available: 3 No preemption victims found for incoming pod.\n\nPod distribution among nodes:\nsmall-pod\n        - kind-worker: 52 instance(s)\n        - kind-worker2: 52 instance(s)\n        - kind-control-plane: 47 instance(s)\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\u9019\u6642\u5019 kind-control-plane \u7bc0\u9ede\u4e5f\u88ab\u7d0d\u5165\u8003\u616e\uff0c\u8003\u616e\u5230\u76ee\u524d\u7bc0\u9ede\u4e0a\u76ee\u524d\u5269\u4e0b\u7684\u8cc7\u6e90\u7528\u91cf\uff0c 7.05C, 29.1G \u4e0b\u53bb\u5206\u914d\uff0c7.05/0.15 = 47 \u4e5f\u7b26\u5408\u9810\u671f\u7684 47 \u500b\u526f\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Allocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests    Limits\n  --------           --------    ------\n  cpu                950m (11%)  100m (1%)\n  memory             290Mi (0%)  390Mi (1%)\n  ephemeral-storage  0 (0%)      0 (0%)\n  hugepages-1Gi      0 (0%)      0 (0%)\n  hugepages-2Mi      0 (0%)      0 (0%)\n")),(0,r.kt)("h1",{id:"nodeselector"},"NodeSelector"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5617\u8a66\u4f7f\u7528 NodeSelector \u4f86\u6307\u6d3e\u56fa\u5b9a\u4e00\u500b\u7bc0\u9ede\uff0c\u5c07\u4e0b\u5217\u6a94\u6848\u5b58\u70ba pod3.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: small-pod\n  labels:\n    app: guestbook\n    tier: frontend\nspec:\n  containers:\n  - name: php-redis\n    image: gcr.io/google-samples/gb-frontend:v4\n    imagePullPolicy: Always\n    resources:\n      limits:\n        cpu: 150m\n        memory: 100Mi\n      requests:\n        cpu: 150m\n        memory: 100Mi\n  nodeSelector:\n    kubernetes.io/hostname: kind-worker2\n  tolerations:\n  - key: "node-role.kubernetes.io/control-plane"\n    effect: "NoSchedule"\n  restartPolicy: "OnFailure"\n  dnsPolicy: "Default"\n')),(0,r.kt)("p",null,"\u904b\u884c cluster-capctiy \u53ef\u89c0\u5bdf\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ./cluster-capacity --kubeconfig ~/.kube/config --podspec examples/pod3.yaml  --verbose\nsmall-pod pod requirements:\n        - CPU: 150m\n        - Memory: 100Mi\n        - NodeSelector: kubernetes.io/hostname=kind-worker2\n\nThe cluster can schedule 52 instance(s) of the pod small-pod.\n\nTermination reason: Unschedulable: 0/3 nodes are available: 1 Insufficient cpu, 2 node(s) didn't match Pod's node affinity/selector. preemption: 0/3 nodes are available: 1 No preemption victims found for incoming pod, 2 Preemption is not helpful for scheduling.\n\nPod distribution among nodes:\nsmall-pod\n        - kind-worker2: 52 instance(s)\n")),(0,r.kt)("p",null,"\u9019\u6642\u5019\u7684\u7d50\u679c\u5c31\u53ea\u6709\u91dd\u5c0d\u76ee\u6a19\u7bc0\u9ede\u53bb\u8a08\u7b97\uff0c\u7d50\u679c\u4e5f\u7b26\u5408\u9810\u671f"),(0,r.kt)("h1",{id:"antipodaffinity"},"AntiPodAffinity"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5617\u8a66\u4f7f\u7528 AntiPodAffinity\uff0c\u9019\u90e8\u5206\u9700\u8981\u5148\u90e8\u7f72 pod3.yaml \u5230\u74b0\u5883\u5167\u4f86\u6253\u9020 AntiPod \u7684\u74b0\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," kubectl get pods -o wide\nNAME        READY   STATUS         RESTARTS   AGE   IP           NODE           NOMINATED NODE   READINESS GATES\nsmall-pod   0/1     ErrImagePull   0          5s    10.244.2.2   kind-worker2   <none>           <none>\n")),(0,r.kt)("p",null,"\u7576 Pod \u90e8\u7f72\u5b8c\u7562\u5f8c\uff0c\u63a5\u4e0b\u4f86\u6e96\u5099\u4e0b\u5217\u7684 Pod YAML\uff0c\u4e26\u4e14\u5b58\u653e\u5230 pod4.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: small-pod\n  labels:\n    tier: frontend\nspec:\n  containers:\n  - name: php-redis\n    image: gcr.io/google-samples/gb-frontend:v4\n    imagePullPolicy: Always\n    resources:\n      limits:\n        cpu: 150m\n        memory: 100Mi\n      requests:\n        cpu: 150m\n        memory: 100Mi\n  affinity:\n    podAntiAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        - labelSelector:\n            matchExpressions:\n              - key: app\n                operator: In\n                values:\n                  - guestbook\n          topologyKey: "kubernetes.io/hostname"\n  tolerations:\n  - key: "node-role.kubernetes.io/control-plane"\n    effect: "NoSchedule"\n  restartPolicy: "OnFailure"\n  dnsPolicy: "Default"\n')),(0,r.kt)("p",null,"\u8a72\u6a94\u6848\u900f\u904e Affinty.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution \u78ba\u4fdd\u8a72 Pod \u5fc5\u9808\u8981\u8ddf\u524d\u8ff0\u7684 Pod \u7d66\u5206\u958b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"# ./cluster-capacity --kubeconfig ~/.kube/config --podspec examples/pod4.yaml  --verbose\nsmall-pod pod requirements:\n        - CPU: 150m\n        - Memory: 100Mi\n\nThe cluster can schedule 99 instance(s) of the pod small-pod.\n\nTermination reason: Unschedulable: 0/3 nodes are available: 1 node(s) didn't match pod anti-affinity rules, 2 Insufficient cpu. preemption: 0/3 nodes are available: 3 No preemption victims found for incoming pod.\n\nPod distribution among nodes:\nsmall-pod\n        - kind-worker: 52 instance(s)\n        - kind-control-plane: 47 instance(s)\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\u57f7\u884c\u7684\u7d50\u679c\uff0c\u4e5f\u6709\u6b63\u78ba\u7684\u6392\u9664 worker2\uff0c\u56e0\u70ba worker2 \u4e0a\u6709 antiAffinity \u7684\u898f\u5247\u5f71\u97ff\uff0c\u56e0\u6b64\u6700\u5f8c\u53ea\u6709 kind-worker \u8207 kind-control-plane \u5169\u500b\u7bc0\u9ede\u53ef\u4ee5\u7528"),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Cluster-Capacity \u5de5\u5177\u8a2d\u8a08\u7684\u76ee\u7684\u662f\u63d0\u4f9b\u4e00\u500b\u65b9\u5f0f\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u53bb\u8a55\u4f30\u76ee\u6a19 Pod \u6700\u591a\u53ef\u4ee5\u65bc\u76ee\u6a19 Cluster \u5167\u90e8\u7f72\u591a\u5c11\u500b\u526f\u672c\uff0c\u70ba\u4e86\u8a08\u7b97\u9019\u500b\u6578\u91cf\uff0c\u8ddf\u6307\u6d3e\u76f8\u95dc\u7684\u529f\u80fd\uff0c\u5982 NodeSelector, Taint/Toleration \u7b49\u4e5f\u9700\u8981\u88ab\u8003\u616e\u9032\u4f86\uff0c\u56e0\u6b64\u4e5f\u53ef\u4ee5\u7576\u4f5c\u4e00\u500b\u7c21\u55ae\u7684\u5de5\u5177\u4f86\u9810\u89bd\u4e00\u4e0b Pod \u90e8\u7f72\u5f8c\u53ef\u80fd\u5ea7\u843d\u65bc\u54ea\u4e9b\u7bc0\u9ede\u4e0a\u3002"))}d.isMDXComponent=!0},93997:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/SyL6TF1hT-579ca27192936667416bf5df210e8422.png"}}]);