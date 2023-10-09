"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[42965],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={slug:"k8s-sidecar",title:"Kubernetes 1.28 Sidecar Container \u521d\u9ad4\u9a57",author:"hwchiu",tags:["Kubernetes"],description:"\u5617\u8a66\u770b\u770b Kubernetes v1.28 \u7684 sidecar \u670d\u52d9\u5e36\u4f86\u7684\u5dee\u7570\u6027"},i=void 0,o={unversionedId:"techPost/2023/k8s-1-28-sidecar",id:"techPost/2023/k8s-1-28-sidecar",title:"Kubernetes 1.28 Sidecar Container \u521d\u9ad4\u9a57",description:"\u5617\u8a66\u770b\u770b Kubernetes v1.28 \u7684 sidecar \u670d\u52d9\u5e36\u4f86\u7684\u5dee\u7570\u6027",source:"@site/docs/techPost/2023/k8s-1-28-sidecar.md",sourceDirName:"techPost/2023",slug:"/techPost/2023/k8s-sidecar",permalink:"/docs/techPost/2023/k8s-sidecar",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",frontMatter:{slug:"k8s-sidecar",title:"Kubernetes 1.28 Sidecar Container \u521d\u9ad4\u9a57",author:"hwchiu",tags:["Kubernetes"],description:"\u5617\u8a66\u770b\u770b Kubernetes v1.28 \u7684 sidecar \u670d\u52d9\u5e36\u4f86\u7684\u5dee\u7570\u6027"},sidebar:"techPost",previous:{title:"GitOps \u4e0b\u7684 Git Repo \u67b6\u69cb\u63a2\u8a0e",permalink:"/docs/techPost/2023/gitops-repo-structure"},next:{title:"\u89e3\u5bc6 Assigning Pod To Nodes(\u4e0b)",permalink:"/docs/techPost/2023/k8s-pod-affinity-2"}},s={},c=[{value:"System",id:"system",level:2},{value:"Kubeadm",id:"kubeadm",level:2},{value:"Case 1",id:"case-1",level:2},{value:"Case 2",id:"case-2",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u8a18\u9304\u5982\u4f55\u65bc Kubernetes 1.28 \u5690\u9bae\u6700\u65b0\u7684 sidecar container \u529f\u80fd"),(0,r.kt)("p",null,"Sidecar Container \u662f Kubernetes \u5167\u975e\u5e38\u8457\u540d\u4e14\u5e38\u898b\u7684\u8a2d\u8a08\u6a21\u5f0f\uff0c\u901a\u5e38\u662f\u65bc Pod \u5167\u90e8\u7f72\u591a\u500b Container\n\u5176\u4e2d Sidecar Container \u6703\u5354\u52a9\u4e3b\u8981\u5bb9\u5668\u5b8c\u6210\u5404\u7a2e\u529f\u80fd\uff0c\u8b6c\u5982"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Network Proxy: \u5982 Service Mesh \u67b6\u69cb\u4e0b\u5e6b\u5fd9\u8f49\u767c\u8207\u8655\u7406\u5404\u7a2e\u7db2\u8def\u6d41\u91cf"),(0,r.kt)("li",{parentName:"ol"},"Log Collection: \u5e6b\u5fd9\u8655\u7406\u4e3b\u8981\u5bb9\u5668\u7684 log")),(0,r.kt)("p",null,"\u7136\u800c\u5c0d\u65bc Kubernetes \u4f86\u8aaa\uff0c\u9019\u5169\u7a2e container \u672c\u8cea\u4e0a\u4e26\u7121\u5dee\u7570\uff0c\u751f\u547d\u9031\u671f\u8207\u7ba1\u7406\u65b9\u5f0f\u90fd\u4e00\u6a23\uff0c\u9019\u4e9b\u7279\u6027\u4f7f\u5f97 sidecar container \u7684\u4f7f\u7528\u4e0a\u6703\u9020\u6210\u4e00\u4e9b\u554f\u984c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee5 Job \u4f86\u8aaa\uff0c\u4e3b\u8981\u5bb9\u5668\u5df2\u7d93\u7d50\u675f\u7d50\u679c sidecar container \u9084\u5728\u904b\u884c\uff0c\u4f7f\u5f97 Job \u6c92\u8fa6\u6cd5\u6b63\u78ba\u5224\u65b7 Pod \u662f\u5426\u9806\u5229\u7d50\u675f"),(0,r.kt)("li",{parentName:"ol"},"Sidecar container \u7684\u555f\u52d5\u9806\u5e8f\u592a\u665a\uff0c\u4f7f\u5f97\u4e3b\u8981\u5bb9\u5668\u555f\u52d5\u6642\u9084\u4e0d\u80fd\u4f7f\u7528\uff0c\u9020\u6210\u932f\u8aa4\u5fc5\u9808\u8981\u7b49 containre \u91cd\u555f")),(0,r.kt)("p",null,"\u4ee5(2)\u4f86\u8aaa\uff0c\u5e38\u898b\u7684\u7bc4\u4f8b\u6709"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"istio sidecar container \u6bd4\u4e3b\u8981\u5bb9\u5668\u665a\u8d77\u4f86\uff0c\u5c0e\u81f4\u4e3b\u8981\u5bb9\u5668\u8d77\u4f86\u77ac\u9593\u7db2\u8def\u4e0d\u901a"),(0,r.kt)("li",{parentName:"ol"},"\u4ee5 GKE \u4f86\u8aaa\uff0c\u900f\u904e cloud sql proxy \u4f86\u5b58\u53d6 Cloud SQL \u6642\uff0c cloud sql proxy \u6bd4\u4e3b\u8981\u5bb9\u5668\u665a\u8d77\u4f86\uff0c\u56e0\u6b64\u4e3b\u8981\u5bb9\u5668\u5c31\u6c92\u6709\u8fa6\u6cd5\u9023\u63a5\u5230 DB \u6700\u5f8c\u7522\u751f\u932f\u8aa4")),(0,r.kt)("p",null,"\u56e0\u6b64\u904e\u5f80\u90fd\u8981\u642d\u914d\u5404\u7a2e workaround \u4f86\u4fee\u6b63\u3002"),(0,r.kt)("p",null,"\u800c\u9019\u6b21 Kubernetes \u6b63\u5f0f\u5f9e\u5167\u90e8\u652f\u63f4 sidecar container \u7684\u67b6\u69cb\uff0c\u5176\u7368\u7acb\u7684\u751f\u547d\u9031\u671f\u7ba1\u7406\u80fd\u5920\u5f9e\u6839\u672c\u4e0a\u53bb\u89e3\u6c7a\u4e0a\u8ff0\u7684\u5e38\u898b\u554f\u984c\uff0c\u8b93\u6574\u500b\u89e3\u6c7a\u65b9\u5f0f\u66f4\u70ba\u6f02\u4eae\u3002"),(0,r.kt)("h1",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,r.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u57fa\u65bc\u4e0b\u5217\u8edf\u9ad4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ubuntu 22.04"),(0,r.kt)("li",{parentName:"ol"},"Kubeadm: 1.28.2-1.1"),(0,r.kt)("li",{parentName:"ol"},"Kubelet: 1.28.2-1.1"),(0,r.kt)("li",{parentName:"ol"},"Kubectl: 1.28.2-1.1"),(0,r.kt)("li",{parentName:"ol"},"Containerd: 1.6.24-1")),(0,r.kt)("h2",{id:"system"},"System"),(0,r.kt)("p",null,"\u7531\u65bc\u74b0\u5883\u6703\u4f7f\u7528 kubeadm \u4f86\u5b89\u88dd\uff0c\u4e26\u4e14\u4f7f\u7528 containerd \u4f5c\u70ba container runtime\uff0c\u56e0\u6b64\u6e96\u5099\u4e0b\u5217\u8173\u672c\u5b89\u88dd\u6240\u6709\u76f8\u95dc\u8edf\u9ad4\u4e26\u4e14\u8a2d\u5b9a\u76f8\u95dc\u74b0\u5883\u53c3\u6578"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'# Add Docker\'s official GPG key:\nsudo apt-get update\nsudo apt-get install ca-certificates curl gnupg\nsudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\n\n# Add the repository to Apt sources:\necho \\\n  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\necho \'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /\' | sudo tee /etc/apt/sources.list.d/kubernetes.list\nsudo apt-get update\nsudo apt-get install containerd.io=1.6.24-1\nhttps://github.com/containernetworking/plugins/releases/download/v1.3.0/cni-plugins-linux-amd64-v1.3.0.tgz\nsudo mkdir -p /opt/cni/bin\nsudo tar Cxzvf /opt/cni/bin cni-plugins-linux-amd64-v1.3.0.tgz\nsudo apt-get install -y kubelet=1.28.2-1.1 kubeadm=1.28.2-1.1 kubectl=1.28.2-1.1\n\nsudo modprobe br_netfilter\nsudo modprobe overlay\nsudo sysctl -w net.ipv4.ip_forward=1\n\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward                 = 1\nEOF\n\n\ncat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\noverlay\nbr_netfilter\nEOF\n\nsudo sysctl --system\n\ncontainerd config default | sudo tee /etc/containerd/config.toml\nsudo sed -i \'s/SystemdCgroup \\= false/SystemdCgroup \\= true/g\' /etc/containerd/config.toml\nsudo systemctl restart containerd\n')),(0,r.kt)("h2",{id:"kubeadm"},"Kubeadm"),(0,r.kt)("p",null,"\u6e96\u5099\u4e0b\u5217 Kubeadm \u6a94\u6848\u4f86\u6253\u958b Sidecar Container \u7684\u8a2d\u5b9a\u6a94\u6848 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm.config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: kubeadm.k8s.io/v1beta3\nkind: ClusterConfiguration\nnetworking:\n  podSubnet: 192.168.0.0/16\napiServer:\n  extraArgs:\n    feature-gates: "SidecarContainers=true"\ncontrollerManager:\n  extraArgs:\n    feature-gates: "SidecarContainers=true"\nscheduler:\n  extraArgs:\n    feature-gates: "SidecarContainers=true"\n---\napiVersion: kubelet.config.k8s.io/v1beta1\nfeatureGates:\n  SidecarContainers: true\nkind: KubeletConfiguration\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"sudo kubeadm init --config=kubeadm.config\n")),(0,r.kt)("p",null,"\u5275\u5efa\u5b8c\u7562\u5f8c\u5b89\u88dd Calico CNI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/tigera-operator.yaml\nkubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/custom-resources.yaml\n")),(0,r.kt)("p",null,"\u7576\u7bc0\u9ede\u8b8a\u6210 Ready \u5f8c\uff0c\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\u5c07 taint \u7d66\u79fb\u9664"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl taint nodes master node-role.kubernetes.io/control-plane:NoSchedule-\n")),(0,r.kt)("h1",{id:"experiment"},"Experiment"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4f86\u793a\u7bc4\u5169\u7a2e sidecar container \u4f7f\u7528\u4e0a\u7684\u53ef\u80fd\u6027\uff0c\u4e26\u4e14\u63a2\u8a0e\u5982\u4f55\u4f7f\u7528 1.28 \u7684\u65b0\u529f\u80fd\u4f86\u89e3\u6c7a"),(0,r.kt)("h2",{id:"case-1"},"Case 1"),(0,r.kt)("p",null,"\u7b2c\u4e00\u500b\u60c5\u5883\u63a2\u8a0e\u65bc Job \u7684\u60c5\u6cc1\u4e0b\u4f7f\u7528 sidecar container \u9020\u6210\u7684\u5224\u5b9a\u554f\u984c"),(0,r.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4ee5\u4e0b\u5217\u7684 YAML \u90e8\u7f72\u4e00\u500b\u6709 sidecar container \u7684 Job \u670d\u52d9\uff0c\u8a72\u7bc4\u4f8b\u4e2d\u7684 sidecar \u55ae\u7d14\u662f\u500b\u793a\u7bc4\uff0c\u5176\u529f\u80fd\u4e0d\u91cd\u8981\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi\nspec:\n  template:\n    spec:\n      containers:\n      - name: pi\n        image: perl:5.34.0\n        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      - name: sidecar\n        image: hwchiu/netutils\n      restartPolicy: Never\n  backoffLimit: 4\n')),(0,r.kt)("p",null,"\u90e8\u7f72\u8a72 YAML \u53ef\u4ee5\u89c0\u5bdf\u5230\u4e0b\u5217\u60c5\u6cc1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML="},"$ kubectl get pods,job\nNAME           READY   STATUS     RESTARTS   AGE\npod/pi-6q4lh   1/2     NotReady   0          17m\n\nNAME           COMPLETIONS   DURATION   AGE\njob.batch/pi   0/1           17m        17m\n")),(0,r.kt)("p",null,'\u4e3b\u8981\u5bb9\u5668\u904b\u884c\u5b8c\u7562\u7d50\u675f\uff0c\u4f46\u662f sidecar container \u7e7c\u7e8c\u904b\u884c\uff0c\u56e0\u6b64\u4f7f\u5f97\u7576\u524d\u7684 Pod \u6c92\u6709\u8fa6\u6cd5\u9054\u5230 "Completed" \u7684\u72c0\u614b\uff0c\u56e0\u6b64 Job \u7121\u6cd5\u6b63\u5e38\u5224\u5b9a\u3002'),(0,r.kt)("p",null,"\u800c\u73fe\u5728\u4f86\u5617\u8a66\u770b\u770b v1.28 \u7684\u65b0\u529f\u80fd"),(0,r.kt)("p",null,'\u8a72\u529f\u80fd\u7684\u908f\u8f2f\u662f\u5efa\u7acb\u5728\u4e00\u500b "\u6703\u4e0d\u505c\u904b\u884c\u7684 initContainer" \u4e4b\u4e0a\uff0c\u56e0\u6b64\u8a2d\u5b9a\u4e0a\u662f\u5f9e "initContainer" \u51fa\u767c\uff0c\u4e26\u4e14\u900f\u904e "restartPolicy" \u4f86\u958b\u555f sidecar container \u7684\u529f\u80fd\u3002\n\u4e00\u65e6 sidecare container \u8a2d\u5b9a "restartPolicy: Always"\uff0c\u5176\u80cc\u5f8c\u7684\u904b\u4f5c\u908f\u8f2f\u5c31\u6703\u6709\u4e9b\u8a31\u6539\u8b8a'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u672c\u8eab\u4e0d\u9700\u8981\u7d50\u675f\u5c31\u53ef\u4ee5\u7e7c\u7e8c\u5f80\u4e0b\u57f7\u884c\u5176\u4ed6 Init Container"),(0,r.kt)("li",{parentName:"ol"},"\u672c\u8eab\u82e5\u767c\u751f\u554f\u984c\u96e2\u958b\uff0c\u6703\u81ea\u52d5\u91cd\u555f"),(0,r.kt)("li",{parentName:"ol"},"\u672c\u8eab\u7684\u904b\u884c\u72c0\u614b\u4e0d\u6703\u5f71\u97ff Pod \u672c\u8eab\u7684\u72c0\u614b\u5224\u5b9a")),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5617\u8a66\u4e0b\u5217 YAML \u6a94\u6848\uff0c\u6211\u5011\u5c07 sidecar container \u642c\u79fb\u5230 init container \u7684\u968e\u6bb5\uff0c\u4f86\u8a66\u8a66\u770b\u9019\u6a23\u7684\u60c5\u6cc1\u4e0b Pod \u662f\u5426\u53ef\u4ee5\u9806\u5229\u7d50\u675f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML="},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pi-sidecar\nspec:\n  template:\n    spec:\n      initContainers:\n      - name: network-proxy\n        image: hwchiu/python-example\n        restartPolicy: Always\n      containers:\n      - name: pi\n        image: perl:5.34.0\n        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  backoffLimit: 4\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"$ kubectl get pods\nNAME               READY   STATUS      RESTARTS   AGE\npi-sidecar-bszf2   0/2     Completed   0          42s\n")),(0,r.kt)("p",null,"\u5f9e\u904b\u4f5c\u7d50\u679c\u4f86\u770b\uff0c Pod \u672c\u8eab\u6240\u8a8d\u70ba\u7684 Conainer \u6578\u91cf\u4f9d\u7136\u662f 2\uff0c\u4f46\u662f\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u9806\u5229\u7d50\u675f\u5b8c\u6210 Completed \u72c0\u614b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'Events:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  79s   default-scheduler  Successfully assigned default/pi-sidecar-bszf2 to master\n  Normal  Pulling    78s   kubelet            Pulling image "hwchiu/python-example"\n  Normal  Pulled     77s   kubelet            Successfully pulled image "hwchiu/python-example" in 1.511s (1.511s including waiting)\n  Normal  Created    77s   kubelet            Created container sidecar\n  Normal  Started    77s   kubelet            Started container sidecar\n  Normal  Pulled     76s   kubelet            Container image "perl:5.34.0" already present on machine\n  Normal  Created    76s   kubelet            Created container pi\n  Normal  Started    76s   kubelet            Started container pi\n  Normal  Killing    67s   kubelet            Stopping container network-proxy\n')),(0,r.kt)("p",null,"\u53e6\u5916\u5f9e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe pods")," \u4e2d\u53bb\u89c0\u5bdf\uff0c\u53ef\u4ee5\u770b\u5230\u6700\u5f8c\u4e00\u9805 ",(0,r.kt)("inlineCode",{parentName:"p"},"Stopping container network-proxy"),"\uff0c\u9019\u610f\u5473\u7576\u4e3b\u8981\u5bb9\u5668\u7d50\u675f\u4e4b\u5f8c\uff0csidecar container(network-proxy) \u6703\u81ea\u5df1\u88ab\u7cfb\u7d71\u7d50\u675f\uff0c\u4e26\u4e0d\u6703\u5f71\u97ff\u5230\u4e3b\u8981\u5bb9\u5668\u7684\u751f\u547d\u9031\u671f\u3002"),(0,r.kt)("h2",{id:"case-2"},"Case 2"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u500b\u7bc4\u4f8b\u4e2d\u6a21\u64ec\u7684\u60c5\u5883\u662f\u900f\u904e sidecar container \u9054\u6210\u985e\u4f3c Proxy \u7684\u9023\u7dda\uff0c\u56e0\u6b64 sidecar container \u5fc5\u9808\u8981\u6bd4\u4e3b\u8981\u5bb9\u5668\u66f4\u65e9\u555f\u52d5\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5217 YAML \u70ba\u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: proxy\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      run: proxy\n  template:\n    metadata:\n      labels:\n        run: proxy\n    spec:\n      containers:\n      - name: app\n        image: hwchiu/netutils\n        command: ["/bin/sh"]\n        args: ["-c", "nc -zv localhost 5000 &&  sleep 1d"]\n      - name: proxy\n        image: hwchiu/python-example\n        ports:\n        - containerPort: 5000\n        startupProbe:\n          httpGet:\n            path: /\n            port: 5000\n')),(0,r.kt)("p",null,"\u8a72\u7bc4\u4f8b\u4e2d\u90e8\u7f72\u5169\u500b Container\uff0c\u5176\u4e2d sidecar container \u662f\u4e00\u500b\u807d 5000 port \u7684\u670d\u52d9\u5668\uff0c\u800c\u4e3b\u8981\u5bb9\u5668\u8d77\u4f86\u6642\u82e5 sidecar \u9084\u6c92\u6e96\u5099\u597d\u5c31\u6703\u76f4\u63a5\u96e2\u958b\u7b49\u5f85\u4e0b\u6b21\u91cd\u555f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'$ kubectl get pods\nNAME                     READY   STATUS    RESTARTS      AGE\nproxy-74dc7b8d88-77cft   2/2     Running   1 (49s ago)   52s\nproxy-74dc7b8d88-rlz8m   2/2     Running   1 (47s ago)   52s\nproxy-74dc7b8d88-zjkdh   2/2     Running   1 (46s ago)   52s\n$ kubectl logs -p proxy-74dbbdccd5-cf9pg\nDefaulted container "app" out of: app, proxy\nlocalhost [127.0.0.1] 5000 (?) : Connection refused\n')),(0,r.kt)("p",null,"\u91cd\u4e0a\u8ff0\u7684\u90e8\u7f72\u7d50\u679c\u53ef\u4ee5\u89c0\u5bdf\u5230\u6240\u6709\u7684 Pod \u90fd\u6703\u56e0\u70ba\u9806\u5e8f\u554f\u984c\u4f7f\u5f97\u4e3b\u8981\u5bb9\u5668\u6703\u91cd\u555f\u4e00\u6b21\uff0c\u5f9e\u524d\u8ff0\u5931\u6557\u7684 log \u4e5f\u53ef\u4ee5\u89c0\u5bdf\u5230\u56e0\u70ba sidecar container \u9084\u6c92\u6e96\u5099\u597d\u56e0\u6b64\u5c0e\u81f4\u904b\u884c\u5931\u6557\u3002\n\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe pod")," \u89c0\u5bdf\u76f8\u95dc\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  Normal  Scheduled  6m20s                  default-scheduler  Successfully assigned default/proxy-74dbbdccd5-dzdmz to master\n  Normal  Pulled     6m18s                  kubelet            Successfully pulled image "hwchiu/netutils" in 1.447s (1.447s including waiting)\n  Normal  Pulling    6m18s                  kubelet            Pulling image "hwchiu/python-example"\n  Normal  Pulled     6m15s                  kubelet            Successfully pulled image "hwchiu/python-example" in 2.459s (2.459s including waiting)\n  Normal  Created    6m15s                  kubelet            Created container proxy\n  Normal  Started    6m15s                  kubelet            Started container proxy\n  Normal  Pulling    6m14s (x2 over 6m19s)  kubelet            Pulling image "hwchiu/netutils"\n  Normal  Created    6m13s (x2 over 6m18s)  kubelet            Created container app\n  Normal  Pulled     6m13s                  kubelet            Successfully pulled image "hwchiu/netutils" in 1.47s (1.47s including waiting)\n  Normal  Started    6m12s (x2 over 6m18s)  kubelet            Started container app\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230 Proxy \u5bb9\u5668\u555f\u52d5\u5f8c\u5c31\u99ac\u4e0a\u53bb\u6293\u53d6 App \u7684\u5bb9\u5668\uff0c\u4e2d\u9593\u5e7e\u4e4e\u6c92\u6709\u4efb\u4f55\u9593\u9694\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c0e\u5165 sidecar container \u7684\u6a5f\u5236\u518d\u6b21\u5617\u8a66\u770b\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: proxy-sidecar\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      run: proxy-sidecar\n  template:\n    metadata:\n      labels:\n        run: proxy-sidecar\n    spec:\n      initContainers:\n      - name: proxy\n        image: hwchiu/python-example\n        ports:\n        - containerPort: 5000\n        restartPolicy: Always\n        startupProbe:\n          httpGet:\n            path: /\n            port: 5000\n      containers:\n      - name: app\n        image: hwchiu/netutils\n        command: ["/bin/sh"]\n        args: ["-c", "nc -zv localhost 5000 &&  sleep 1d"]\n')),(0,r.kt)("p",null,"\u8f49\u63db\u70ba"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'$ kubectl get pods\nproxy-sidecar-5dd9ff76f8-47mll   2/2     Running   0               2m34s\nproxy-sidecar-5dd9ff76f8-cmjjs   2/2     Running   0               2m34s\nproxy-sidecar-5dd9ff76f8-qctk8   2/2     Running   0               2m34s\n$ kubectl describe pods proxy-sidecar-5dd9ff76f8-qctk8\n...\n  Normal  Scheduled  2m16s  default-scheduler  Successfully assigned default/proxy-sidecar-5dd9ff76f8-qctk8 to master\n  Normal  Pulling    2m14s  kubelet            Pulling image "hwchiu/python-example"\n  Normal  Pulled     2m11s  kubelet            Successfully pulled image "hwchiu/python-example" in 1.507s (2.923s including waiting)\n  Normal  Created    2m11s  kubelet            Created container proxy\n  Normal  Started    2m11s  kubelet            Started container proxy\n  Normal  Pulling    2m5s   kubelet            Pulling image "hwchiu/netutils"\n  Normal  Pulled     2m1s   kubelet            Successfully pulled image "hwchiu/netutils" in 1.475s (4.405s including waiting)\n  Normal  Created    2m     kubelet            Created container app\n  Normal  Started    2m     kubelet            Started container app\n')),(0,r.kt)("p",null,"\u7576\u5c0e\u5165 sidecar container \u7684\u8a2d\u5b9a\u5f8c\uff0c\u53ef\u4ee5\u89c0\u5bdf\u5230 Proxy \u5bb9\u5668\u8d77\u5f8c\u52d5\u904e\u4e86\u4e00\u6bb5\u6642\u9593\u624d\u53bb\u6293\u53d6\u65b0\u7684 Image\uff0c\u9019\u662f\u56e0\u70ba sidecar container \u6703\u7b49\u5230\u5176 StartupProbe \u7d50\u675f\u5f8c\u624d\u958b\u59cb\u5f80\u4e0b\u53bb\u57f7\u884c\u4e3b\u8981\u5bb9\u5668\uff0c\u900f\u904e\u9019\u7a2e\u6a5f\u5236\u5c31\u53ef\u4ee5\u78ba\u4fdd sidecar container \u6703\u6bd4\u4e3b\u8981\u5bb9\u5668\u66f4\u65e9\u904b\u884c\u3002"),(0,r.kt)("p",null,"\u6700\u5f8c\u4ee5\u9019\u5169\u5f35\u5716\u4f86\u5448\u73fe\u4e00\u4e0b\u6848\u4f8b\u4e8c\u7684\u6d41\u7a0b\uff0c\u904e\u5f80\u5c07\u6240\u6709\u5bb9\u5668\u90fd\u653e\u5230 containers \u4e2d\u4f86\u8655\u7406 sidecar container \u7684\u908f\u8f2f\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/H1NslhSxp.png",alt:null})),(0,r.kt)("p",null,"\u800c\u65b0\u7248\u67b6\u69cb\u5247\u5c07\u5176\u8a2d\u5b9a\u642c\u79fb\u5230 initContainer \u4e2d\uff0c\u4e26\u4e14\u662f\u5f9e Kubernetes \u5167\u90e8\u4f86\u8655\u7406\u5c08\u5c6c\u7684\u751f\u547d\u9031\u671f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Sk3senHea.png",alt:null})),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"\u4ee5\u76ee\u524d\u521d\u6b21\u9ad4\u9a57\u4f86\u8aaa\uff0c sidecar container \u5e36\u4f86\u7684\u597d\u8655\u975e\u5e38\u7684\u660e\u986f\uff0c\u80fd\u5920\u6e1b\u5c11\u5f88\u591a\u904e\u5f80\u7684 workaround\uff0c\u8b93 sidecar container \u7684\u6a21\u5f0f\u66f4\u52a0\u81ea\u7136\uff0c\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/blog/2023/native-sidecars/"},"istio")," \u4f86\u8aaa\uff0c\u5176\u65b0\u7248\u672c\u4e5f\u652f\u63f4\u4f7f\u7528 k8s 1.28 sidecar \u7684\u529f\u80fd\uff0c\u4e0d\u904e\u56e0\u70ba\u9084\u6c92\u6e2c\u8a66\u904e\u56e0\u6b64\u4e0d\u78ba\u5b9a\u5f9e istio \u7684\u89d2\u5ea6\u4f86\u8aaa\n\u5be6\u969b\u4e0a\u6703\u6709\u4ec0\u9ebc\u6a23\u7684\u5dee\u7570\u3002\n\u53e6\u5916\u6b64\u9805\u529f\u80fd\u65bc 1.28 \u9084\u53ea\u662f alpha \u7248\u672c\uff0c\u63a5\u4e0b\u4f86\u9084\u6709 Beta \u4ee5\u53ca GA\uff0c\u6700\u5feb\u4e5f\u8981\u5169\u500b\u7248\u672c\u5927\u6982\u516d\u500b\u6708\uff0c\u9019\u6a23\u53ef\u80fd\u5c31\u662f 1.30\uff0c\u800c\u5404\u5927\u516c\u6709\u96f2\u5e73\u53f0 (GKE/EKS/AKS) \u60f3\u8981\u8ffd\u5230 1.30 \u60f3\u5fc5\u4e5f\u4e0d\u77ed\u671f\u5167\u6703\u767c\u751f\u7684\u4e8b\u60c5\uff0c\u56e0\u6b64\u9664\u975e\u81ea\u5df2\u53bb\u8abf\u6574 feature gate \u4f86\u555f\u52d5\uff0c\u4e0d\u7136\u77ed\u671f\u5167\u61c9\u8a72\u9084\u5f88\u96e3\u5927\u91cf\u843d\u5730\u3002"),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2023/08/25/native-sidecar-containers/"},"https://kubernetes.io/blog/2023/08/25/native-sidecar-containers/")))}d.isMDXComponent=!0}}]);