"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[53386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,c=m["".concat(l,".").concat(d)]||m[d]||k[d]||p;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={title:"IPvS \u5b78\u7fd2\u624b\u518a(\u4e8c)",keywords:["linux","ipvs"],tags:["IPVS","Network","Linux"],description:"\u672c\u6587\u4f5c\u70ba IPVS \u7cfb\u5217\u6587\u7b2c\u4e8c\u7bc7\uff0c\u4e3b\u8981\u662f\u8ddf\u5927\u5bb6\u4ecb\u7d39 IPVS \u8207 Kubernetes \u7684\u4e92\u52d5\uff0c\u5305\u542b\u5982\u4f55\u8a2d\u5b9a\u4ee5\u53ca IPVS \u5982\u4f55\u5be6\u8e10 Kubernetes Service \u7684\u529f\u80fd",date:new Date("2020-03-21T06:38:55.000Z")},o="Preface",s={unversionedId:"2020/ipvs-2",id:"2020/ipvs-2",title:"IPvS \u5b78\u7fd2\u624b\u518a(\u4e8c)",description:"\u672c\u6587\u4f5c\u70ba IPVS \u7cfb\u5217\u6587\u7b2c\u4e8c\u7bc7\uff0c\u4e3b\u8981\u662f\u8ddf\u5927\u5bb6\u4ecb\u7d39 IPVS \u8207 Kubernetes \u7684\u4e92\u52d5\uff0c\u5305\u542b\u5982\u4f55\u8a2d\u5b9a\u4ee5\u53ca IPVS \u5982\u4f55\u5be6\u8e10 Kubernetes Service \u7684\u529f\u80fd",source:"@site/docs/2020/ipvs-2.md",sourceDirName:"2020",slug:"/2020/ipvs-2",permalink:"/docs/2020/ipvs-2",draft:!1,tags:[{label:"IPVS",permalink:"/docs/tags/ipvs"},{label:"Network",permalink:"/docs/tags/network"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedBy:"HWC",frontMatter:{title:"IPvS \u5b78\u7fd2\u624b\u518a(\u4e8c)",keywords:["linux","ipvs"],tags:["IPVS","Network","Linux"],description:"\u672c\u6587\u4f5c\u70ba IPVS \u7cfb\u5217\u6587\u7b2c\u4e8c\u7bc7\uff0c\u4e3b\u8981\u662f\u8ddf\u5927\u5bb6\u4ecb\u7d39 IPVS \u8207 Kubernetes \u7684\u4e92\u52d5\uff0c\u5305\u542b\u5982\u4f55\u8a2d\u5b9a\u4ee5\u53ca IPVS \u5982\u4f55\u5be6\u8e10 Kubernetes Service \u7684\u529f\u80fd",date:"2020-03-21T06:38:55.000Z"},sidebar:"techPost",previous:{title:"IPvS \u5b78\u7fd2\u624b\u518a(\u4e00)",permalink:"/docs/2020/ipvs-1"},next:{title:"IPvS \u5b78\u7fd2\u624b\u518a(\u4e09)",permalink:"/docs/2020/ipvs-3"}},l={},i=[{value:"ClusterIP/NodePort",id:"clusteripnodeport",level:2},{value:"IPSET",id:"ipset",level:2},{value:"NODE-PORT",id:"node-port",level:3},{value:"Dummy Interface",id:"dummy-interface",level:2},{value:"Experiment",id:"experiment",level:3}],u={toc:i},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preface"},"Preface"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4f5c\u70ba\u7cfb\u5217\u6587\u7ae0\u7684\u7b2c\u4e8c\u7bc7\uff0c\u8a72\u7cfb\u5217\u6587\u5e0c\u671b\u80fd\u5920\u5f9e\u6982\u5ff5\u5230\u5be6\u4f5c\uff0c\u5f9e\u7c21\u55ae\u5230\u8907\u96dc\u4f86\u63a2\u8a0e IPVS (IP Virtual Server) \u7684\u6982\u5ff5\uff0c\u76ee\u524d\u898f\u5283\u7684\u4e3b\u984c\u5305\u542b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2020/ipvs-1"},"IPVS \u7684\u57fa\u672c\u4f7f\u7528\u8207\u6982\u5ff5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2020/ipvs-2"},"IPVS \u8207 Kubernetes \u7684\u6574\u5408")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2020/ipvs-3"},"IPVS \u9664\u932f\u65b9\u5f0f\u8207\u57fa\u672c Kernel Module \u6982\u5ff5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.hwchiu.com/docs/2020/ipvs-4"},"IPVS Kernel \u67b6\u69cb\u5be6\u73fe"))),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u662f\u5f9e Kubernetes \u51fa\u767c\uff0c\u4ecb\u7d39\u5982\u4f55\u5728 Kubernetes \u5167\u4f7f\u7528 IPVS \u800c\u975e\u539f\u751f\u7684 IPTables\uff0c\u4e26\u4e14\u63a2\u8a0e\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Service")," \u662f\u5982\u4f55\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u5be6\u8e10\u7684\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4e2d\u4f7f\u7528\u7684\u6240\u6709\u6a94\u6848\u90fd\u53ef\u4ee5\u65bc ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchiu/network-study/tree/master/ipvs"},"network-study:ipvs")," \u9019\u500b repo\u627e\u5230\uff0c\u88e1\u9762\u5305\u542b\u4e86"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8a2d\u74b0\u5883\u7528\u7684 Vagrant \u6a94\u6848"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72 Kubernetes Service \u6703\u7528\u5230\u7684\u76f8\u95dc yaml \u6a94\u6848")),(0,a.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Kube-Proxy \u662f Kubernetes \u7528\u4f86\u63a7\u5236 Service \u8f49\u767c\u904e\u7a0b\u7684\u4e00\u500b\u5143\u4ef6\uff0c\u57fa\u672c\u4e0a\u6bcf\u500b\u7bc0\u9ede\u4e0a\u90fd\u8981\u90e8\u7f72\u8a72\u5143\u4ef6\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c ",(0,a.kt)("strong",{parentName:"p"},"kube-proxy")," \u6703\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"iptables")," \u4f5c\u70ba ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Service")," \u7684\u5e95\u5c64\u5be6\u73fe\u65b9\u5f0f\uff0c\u800c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u53c3\u6578\u8b8a\u5316\u7684\u65b9\u5f0f\u8981\u6c42\u5176\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"IPVS"),"\u3002"),(0,a.kt)("p",null,"\u70ba\u4e86\u5feb\u901f\u67b6\u8a2d\u74b0\u5883\uff0c\u6211\u6e96\u5099\u4e86\u4e00\u500b\u57fa\u65bc ",(0,a.kt)("strong",{parentName:"p"},"kubeadm")," \u7684\u5b89\u88dd\u74b0\u5883\uff0c\u5167\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby="},'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\nVagrant.configure("2") do |config|\n  config.vm.box = "bento/ubuntu-18.04"\n  config.vm.box_version =\'201912.14.0\'\n  config.vm.hostname = \'k8s-dev\'\n  config.vm.define vm_name = \'k8s\'\n\n  config.vm.provision "shell", privileged: false, inline: <<-SHELL\n    set -e -x -u\n    export DEBIAN_FRONTEND=noninteractive\n    #change the source.list\n    sudo apt-get update\n    sudo apt-get install -y vim git cmake build-essential tcpdump tig jq socat bash-completion ipvsadm\n    # Install Docker\n    export DOCKER_VERSION="5:19.03.5~3-0~ubuntu-bionic"\n    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n    sudo apt-get update\n    sudo apt-get install -y docker-ce=${DOCKER_VERSION}\n    sudo usermod -aG docker $USER\n    #Install module\n    sudo modprobe -- ip_vs\n    sudo modprobe -- ip_vs_rr\n    sudo modprobe -- ip_vs_wrr\n    sudo modprobe -- ip_vs_sh\n    sudo modprobe -- nf_conntrack_ipv4\n    #Disable swap\n    #https://github.com/kubernetes/kubernetes/issues/53533\n    sudo swapoff -a && sudo sysctl -w vm.swappiness=0\n    sudo sed \'/vagrant--vg-swap/d\' -i /etc/fstab\n    git clone https://github.com/hwchiu/network-study.git\n    sudo apt-get update && sudo apt-get install -y apt-transport-https curl\n    curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -\n    echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee --append /etc/apt/sources.list.d/kubernetes.list\n    sudo apt-get update\n    sudo apt-get install -y kubelet kubeadm kubectl\n    sudo kubeadm init --config network-study/ipvs/kubeconfig.yaml\n    mkdir -p $HOME/.kube\n    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n    sudo chown $(id -u):$(id -g) $HOME/.kube/config\n    kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml\n    kubectl taint node k8s-dev node-role.kubernetes.io/master:NoSchedule-\n    echo \'source <(kubectl completion bash)\' >>~/.bashrc\n  SHELL\n\n  config.vm.network :private_network, ip: "172.17.8.111"\n  config.vm.provider :virtualbox do |v|\n      v.customize ["modifyvm", :id, "--cpus", 2]\n      v.customize ["modifyvm", :id, "--memory", 4096]\n      v.customize [\'modifyvm\', :id, \'--nicpromisc1\', \'allow-all\']\n  end\nend\n')),(0,a.kt)("p",null,"\u88e1\u9762\u6709\u5e7e\u500b\u6bd4\u8f03\u503c\u5f97\u6ce8\u610f\u7684\u9ede"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"apt-get \u9806\u4fbf\u5b89\u88dd ipvsadm \u8207 ipset"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"modprobe")," \u4e8b\u5148\u5b89\u88dd\u76f8\u95dc\u7684 ",(0,a.kt)("strong",{parentName:"li"},"kernel module"),", \u5305\u542b\u4e86",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ip_vs"),(0,a.kt)("li",{parentName:"ul"},"ip_vs_rr"),(0,a.kt)("li",{parentName:"ul"},"ip_vs_wrr"),(0,a.kt)("li",{parentName:"ul"},"ip_vs_sh"),(0,a.kt)("li",{parentName:"ul"},"nf_conntrack_ipv4",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4e2d\u6709\u5e7e\u500b\u4e3b\u8981\u90fd\u662f ",(0,a.kt)("strong",{parentName:"p"},"Load Balancing")," \u4e0d\u540c\u6f14\u7b97\u6cd5\u5be6\u8e10\u7684 Module\uff0c\u4e4b\u5f8c\u63a2\u8a0e\u5e95\u5c64\u5be6\u4f5c\u7684\u6642\u5019\u518d\u4f86\u7d30\u770b\u9019\u4e9b\u7684\u5dee\u7570\u3002"))))),(0,a.kt)("li",{parentName:"ol"},"kubeadm init \u7684\u6642\u5019\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"--config")," \u4f86\u9810\u8f09\u8a2d\u5b9a\u6a94\u6848\uff0c\u5176\u5167\u5bb9\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: ipvs\n---\napiVersion: kubeadm.k8s.io/v1beta2\nkind: ClusterConfiguration\nnetworking:\n  podSubnet: "10.244.0.0/16"\n')),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"KubeProxtConfiguration")," \u7684\u65b9\u5f0f\u8b93 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeadm")," \u7522\u751f\u5c0d\u61c9\u7684 ",(0,a.kt)("strong",{parentName:"p"},"configmap")," \u7d66 ",(0,a.kt)("strong",{parentName:"p"},"kube-proxy")," \u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ kubectl -n kube-system get configmaps kube-proxy\nNAME         DATA   AGE\nkube-proxy   2      105m\n")),(0,a.kt)("p",null,"\u800c ",(0,a.kt)("strong",{parentName:"p"},"ClusterConfiguration")," \u5247\u662f\u56e0\u70ba\u5e95\u4e0b\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Flannel CNI")," \u6240\u4ee5\u9700\u8981\u8a2d\u5b9a\u7684 ",(0,a.kt)("strong",{parentName:"p"},"POD CIDR")," \u7684\u53c3\u6578"),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"vagrant up")," \u5c07\u74b0\u5883\u5efa\u7f6e\u8d77\u4f86\u5f8c\uff0c\u53ef\u4ee5\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u89c0\u5bdf\u6700\u539f\u59cb\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes")," \u8a2d\u5b9a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ sudo ipvsadm -Ln\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port Scheduler Flags\n  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  10.96.0.1:443 rr\n  -> 10.0.2.15:6443               Masq    1      3          0\nTCP  10.96.0.10:53 rr\n  -> 10.244.0.2:53                Masq    1      0          0\n  -> 10.244.0.3:53                Masq    1      0          0\nTCP  10.96.0.10:9153 rr\n  -> 10.244.0.2:9153              Masq    1      0          0\n  -> 10.244.0.3:9153              Masq    1      0          0\nUDP  10.96.0.10:53 rr\n  -> 10.244.0.2:53                Masq    1      0          0\n  -> 10.244.0.3:53                Masq    1      0          0\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u7cfb\u7d71\u4e2d\u6709\u56db\u500b ",(0,a.kt)("strong",{parentName:"p"},"IPVS Service")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"10.96.0.1:443")," (TCP)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"10.96.0.10:53")," (TCP)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"10.96.0.10:9153")," (TCP)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"10.96.0.10:53")," (UDP)")),(0,a.kt)("p",null,"\u7b2c\u4e00\u500b\u5247\u662f API Server \u7684\u670d\u52d9\uff0c\u6c92\u6709\u592a\u591a\u7684\u91cd\u9ede\uff0c\u4e3b\u8981\u662f\u89c0\u5bdf\u5f8c\u9762\u4e09\u500b\u670d\u52d9\n\u9019\u4e09\u500b\u670d\u52d9\u90fd\u662f\u5c0d\u61c9 ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDNS")," \u7684\u670d\u52d9\uff0c\u53ef\u4ee5\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u89c0\u5bdf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ kubectl -n kube-system get svc,ep\nNAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE\nservice/kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   126m\n\nNAME                                ENDPOINTS                                               AGE\nendpoints/kube-controller-manager   <none>                                                  126m\nendpoints/kube-dns                  10.244.0.2:53,10.244.0.3:53,10.244.0.2:53 + 3 more...   126m\nendpoints/kube-scheduler            <none>                                                  126m\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u53ef\u4ee5\u770b\u5230\uff0c\u5c0d\u65bc ",(0,a.kt)("strong",{parentName:"p"},"IPVS"),"\u4f86\u8aaa\uff0c\u6bcf\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes Service")," \u53ef\u4ee5\u7522\u751f\u591a\u500b ",(0,a.kt)("strong",{parentName:"p"},"IPVS Service"),"\uff0c\u4e3b\u8981\u770b\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"Service")," \u8981\u63d0\u4f9b\u591a\u5c11\u670d\u52d9\uff08\u5354\u5b9a+\u9023\u63a5\u57e0\uff09\u3002"),(0,a.kt)("h1",{id:"service"},"Service"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u5617\u8a66\u90e8\u7f72 ClusterIP \u4ee5\u53ca NodePort \u9019\u5169\u500b\u4e0d\u540c\u985e\u578b\u7684\u670d\u52d9\uff0c\u770b\u770b ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u672c\u8eab\u6703\u6709\u4ec0\u9ebc\u6539\u8b8a\u3002"),(0,a.kt)("h2",{id:"clusteripnodeport"},"ClusterIP/NodePort"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ kubectl apply -f network-study/ipvs/service.yml -f network-study/ipvs/hello.yml\n\nvagrant@k8s-dev:~$ kubectl get svc,ep\nNAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nservice/cluster-demo    ClusterIP   10.97.35.96     <none>        80/TCP         25s\nservice/kubernetes      ClusterIP   10.96.0.1       <none>        443/TCP        18m\nservice/nodeport-demo   NodePort    10.100.61.228   <none>        80:31543/TCP   25s\n\nNAME                      ENDPOINTS                                         AGE\nendpoints/cluster-demo    10.244.0.4:8080,10.244.0.5:8080,10.244.0.6:8080   25s\nendpoints/kubernetes      10.0.2.15:6443                                    18m\nendpoints/nodeport-demo   10.244.0.4:8080,10.244.0.5:8080,10.244.0.6:8080   25s\n")),(0,a.kt)("p",null,"\u5148\u78ba\u8a8d\u4e00\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ClusterIP \u4f7f\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"li"},"10.97.35.96")),(0,a.kt)("li",{parentName:"ol"},"NodePort \u4f7f\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"li"},"10.100.61.228")," \u540c\u6642\u4f7f\u7528\u7684 Port\u662f ",(0,a.kt)("strong",{parentName:"li"},"31543"),"\u3002")),(0,a.kt)("p",null,"\u7531\u65bc\u8f38\u51fa\u904e\u9577\uff0c\u6211\u5011\u5c31\u5ffd\u7565 ",(0,a.kt)("strong",{parentName:"p"},"Real Servers")," \u7684\u90e8\u5206\uff0c\u5c08\u5fc3\u770b ",(0,a.kt)("strong",{parentName:"p"},"IPVS Service"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ sudo ipvsadm -Ln | grep rr\nTCP  10.96.0.1:443 rr\nTCP  10.96.0.10:53 rr\nTCP  10.96.0.10:9153 rr\nTCP  10.97.35.96:80 rr\nTCP  10.100.61.228:80 rr\nTCP  127.0.0.1:31543 rr\nTCP  172.17.8.111:31543 rr\nTCP  172.18.0.1:31543 rr\nTCP  10.0.2.15:31543 rr\nTCP  10.244.0.0:31543 rr\nTCP  10.244.0.1:31543 rr\nUDP  10.96.0.10:53 rr\n")),(0,a.kt)("p",null,"\u9996\u5148 ",(0,a.kt)("strong",{parentName:"p"},"ClusterIP")," \u7684\u90e8\u5206\u975e\u5e38\u7c21\u55ae\uff0c\u5c31 ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP  10.97.35.96:80 rr")," \u4e00\u500b\u898f\u5247\u800c\u5df2\uff0c\u4f46\u662f\u5c0d\u65bc ",(0,a.kt)("strong",{parentName:"p"},"NodePort")," \u4f86\u8aaa\uff0c\u9019\u908a\u5247\u662f\u8981\u91dd\u5c0d\u7cfb\u7d71\u4e0a\u5168\u90e8\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP")," \u90fd\u53bb\u8a2d\u5b9a\uff0c\u6240\u4ee5\u6703\u770b\u5230\u7e3d\u5171\u6709\u516d\u500b ",(0,a.kt)("strong",{parentName:"p"},"IPVS Service"),"\uff0c\u5206\u5225\u5c0d\u61c9\u7cfb\u7d71\u4e0a\u516d\u500b",(0,a.kt)("strong",{parentName:"p"},"IP"),"\uff0c\u4e14\u90fd\u6307\u5411 ",(0,a.kt)("strong",{parentName:"p"},"31543")," \u9019\u500b\u9023\u63a5\u57e0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TCP  127.0.0.1:31543 rr\nTCP  172.17.8.111:31543 rr\nTCP  172.18.0.1:31543 rr\nTCP  10.0.2.15:31543 rr\nTCP  10.244.0.0:31543 rr\nTCP  10.244.0.1:31543 rr\n")),(0,a.kt)("p",null,"\u85c9\u7531\u4e0a\u8ff0\u7684\u89c0\u5bdf\uff0c\u6211\u5011\u53ef\u4ee5\u77e5\u9053 ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u76ee\u524d\u5275\u9020\u7684\u898f\u5247\u5982\u540c\u4e0b\u65b9\u6240\u8ff0\uff0c\u9996\u5148\u8b93\u6211\u5011\u5047\u8a2d\u8a72 Serivce \u6709\u958b\u653e ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u500b\u9023\u63a5\u65b9\u5f0f(L3+L4)\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c0d\u65bc ClusterIP \u6703\u5275\u9020 ",(0,a.kt)("strong",{parentName:"li"},"n")," \u500b ",(0,a.kt)("strong",{parentName:"li"},"IPVS Service")),(0,a.kt)("li",{parentName:"ol"},"\u5c0d\u65bc NodePort \u4f86\u8aaa, \u5c0d\u65bc\u7cfb\u7d71\u4e0a\u6bcf\u4e00\u500b\u7db2\u5361\uff0c\u90fd\u6703\u5275\u9020 ",(0,a.kt)("strong",{parentName:"li"},"n")," \u500b ",(0,a.kt)("strong",{parentName:"li"},"IPVS Service"),"\uff0c\u6240\u4ee5\u5047\u5982\u7cfb\u7d71\u4e2d\u6709\u4e94\u500b\u5c0d\u5916 IP, \u90a3\u5c31\u6703\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"5*n")," \u500b ",(0,a.kt)("strong",{parentName:"li"},"IPVS Service"),"\u3002")),(0,a.kt)("h2",{id:"ipset"},"IPSET"),(0,a.kt)("p",null,"\u9664\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"IPVS Service")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"IPVS Real Servers")," \u7684\u7d44\u5408\u5916\uff0ckube-proxy(IPVS) \u672c\u8eab\u4e5f\u6703\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," \u4f86\u8f14\u4f50\u6574\u500b\u7db2\u8def\u9023\u7dda\u7684\u8655\u7406\uff0c\u8209\u4f8b\u4f86\u8aaa\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9632\u706b\u7246"),(0,a.kt)("li",{parentName:"ol"},"SNAT (Masquerade)")),(0,a.kt)("p",null,"\u9019\u5169\u500b\u529f\u80fd\u9084\u662f\u8981\u4f9d\u8cf4 ",(0,a.kt)("strong",{parentName:"p"},"IPtables")," \u4f86\u5e6b\u5fd9\u5b8c\u6210\uff0c\u4f46\u662f\u9019\u908a\u70ba\u4e86\u8b93 ",(0,a.kt)("strong",{parentName:"p"},"IPtables")," \u7684\u898f\u5247\u76e1\u91cf\u5f97\u5c11\uff0c\u4e0d\u60f3\u8981\u6bcf\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"IP")," \u5c31\u4e00\u689d\u898f\u5247\uff0c\u9032\u800c\u63d0\u5347\u6574\u9ad4\u898f\u5247\u7684\u5339\u914d\u6548\u80fd\uff0c\u65bc\u662f\u63a1\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," \u7684\u65b9\u5f0f\u4f86\u5e6b\u5fd9\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u7528\u4e00\u500b\u6700\u5feb\u901f\u7684\u65b9\u5f0f\u4f86\u8b1b\u5c31\u662f\u5c07\u4e00\u5806 ",(0,a.kt)("strong",{parentName:"p"},"IP:PORT")," \u900f\u904e\u4e0d\u540c\u7684\u65b9\u5f0f\u653e\u5230\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"SET")," \u88e1\u9762\uff0c\u800c ",(0,a.kt)("strong",{parentName:"p"},"IPTABLES")," \u672c\u8eab\u5c31\u91dd\u5c0d\u9019\u500b ",(0,a.kt)("strong",{parentName:"p"},"SET")," \u53bb\u6bd4\u8f03\u3002 \u76f4\u63a5\u4ee5\u4e0b\u5217\u7bc4\u4f8b\u4f86\u770b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ sudo ipset list KUBE-NODE-PORT-TCP\nName: KUBE-NODE-PORT-TCP\nType: bitmap:port\nRevision: 3\nHeader: range 0-65535\nSize in memory: 8268\nReferences: 1\nNumber of entries: 1\nMembers:\n31543\n\nvagrant@k8s-dev:~$ sudo ipset list KUBE-CLUSTER-IP\nName: KUBE-CLUSTER-IP\nType: hash:ip,port\nRevision: 5\nHeader: family inet hashsize 1024 maxelem 65536\nSize in memory: 472\nReferences: 2\nNumber of entries: 6\nMembers:\n10.96.0.10,udp:53\n10.96.0.10,tcp:53\n10.96.0.10,tcp:9153\n10.97.35.96,tcp:80\n10.100.61.228,tcp:80\n10.96.0.1,tcp:443\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\u5169\u7d44 ",(0,a.kt)("strong",{parentName:"p"},"IPSET"),"\uff0c\u5176\u4e2d\u7b2c\u4e00\u7d44\u662f\u91dd\u5c0d ",(0,a.kt)("strong",{parentName:"p"},"NODE PORT")," \u53bb\u4f7f\u7528\uff0c\u5176\u578b\u614b\u70ba ",(0,a.kt)("strong",{parentName:"p"},"bitmap:port"),"\uff0c\u9019\u90e8\u5206\u53ea\u91dd\u5c0d ",(0,a.kt)("strong",{parentName:"p"},"Port")," \u53bb\u6bd4\u5c0d\uff0c\u6240\u4ee5\u88e1\u9762\u53ef\u4ee5\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"31543")," \u800c\u5df2"),(0,a.kt)("p",null,"\u81f3\u65bc\u7b2c\u4e8c\u7d44\u5247\u662f\u91dd\u5c0d\u6240\u6709\u7684 ",(0,a.kt)("strong",{parentName:"p"},"ClusterIP")," \u53bb\u4f7f\u7528\uff0c\u4ed6\u7684\u578b\u614b\u5247\u662f ",(0,a.kt)("strong",{parentName:"p"},"hash:ip,port"),"\uff0c\u6240\u4ee5\u6bcf\u500b\u8cc7\u6599\u90fd\u662f ",(0,a.kt)("strong",{parentName:"p"},"IP:Port")," \u7684\u898f\u5247\uff0c\u53ef\u4ee5\u770b\u5230\u6211\u5011\u4e4b\u524d\u7528\u5230\u7684\u5168\u90e8 ",(0,a.kt)("strong",{parentName:"p"},"ClusterIP:Port")," \u90fd\u5728\u88e1\u9762\u3002"),(0,a.kt)("p",null,"\u6709\u4e86\u9019\u5169\u7d44 ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," \u5f8c\uff0c\u6211\u5011\u7a0d\u5fae\u770b\u4e00\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"IPTABLES")," \u6703\u600e\u9ebc\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," KUBE-NODE-PORT-TCP \u4f86\u6e1b\u5c11\u9700\u8981\u7684\u898f\u5247\u6578\u91cf\u3002"),(0,a.kt)("h3",{id:"node-port"},"NODE-PORT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},'vagrant@k8s-dev:~$ sudo iptables-save  | grep KUBE-NODE\n-A KUBE-NODE-PORT -p tcp -m comment --comment "Kubernetes nodeport TCP port for masquerade purpose" -m set --match-set KUBE-NODE-PORT-TCP dst -j KUBE-MARK-MASQ\n-A KUBE-SERVICES -m addrtype --dst-type LOCAL -j KUBE-NODE-PORT\n')),(0,a.kt)("p",null,"\u5148\u89c0\u5bdf\u7684\u7b2c\u4e00\u500b\u898f\u5247\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBE-SERVICES"),"\uff0c\u672c\u8eab\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"--dst-type LOCAL")," \u4f86\u5224\u65b7\u5c01\u5305\u662f\u4e0d\u662f\u91dd\u5c0d ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," (\u672c\u5730\u7db2\u5361)\u662f\u7684\u8a71\u5c31\u8df3\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"KUBE-NODE-PORT")," \u53bb\u4e8c\u6b21\u8655\u7406\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"KUBE-NODE-PORT")," \u88e1\u9762\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"-m set --match-set KUBE-NODE-PORT-TCP dst")," \u4f86\u5224\u65b7\u5c01\u5305\u7684\u76ee\u6a19 Port \u6709\u5728 ",(0,a.kt)("strong",{parentName:"p"},"KUBE-NODE-PORT-TCP")," \u9019\u500b ",(0,a.kt)("strong",{parentName:"p"},"ipset")," \u88e1\u9762\uff0c\u5c31\u53bb\u5f04 ",(0,a.kt)("strong",{parentName:"p"},"KUBE-MARK-MASQ")," \u76f8\u95dc\u7684\u52d5\u4f5c\u3002"),(0,a.kt)("p",null,"\u56e0\u70ba\u6700\u5916\u5c64\u5df2\u7d93\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"dst-type LOCAL")," \u4f86\u5224\u65b7\u662f\u4e0d\u662f\u9001\u5f80\u672c\u5730\u4ecb\u9762\uff0c\u6240\u4ee5\u9019\u908a\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," \u53ea\u9700\u8981\u8655\u7406 ",(0,a.kt)("strong",{parentName:"p"},"Port")," \u5373\u53ef\uff0c\u5c31\u4e0d\u7528\u7ba1 ",(0,a.kt)("strong",{parentName:"p"},"IP"),"\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u95dc\u65bc ",(0,a.kt)("strong",{parentName:"p"},"IPSET")," \u7684\u4f7f\u7528\u610f\u601d\u4ee5\u53ca\u4f7f\u7528\u60c5\u5883\u53ef\u4ee5\u53c3\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/tree/master/pkg/proxy/ipvs#when-ipvs-falls-back-to-iptables"},"\u5b98\u65b9\u6587\u4ef6")),(0,a.kt)("h2",{id:"dummy-interface"},"Dummy Interface"),(0,a.kt)("p",null,"\u6700\u5f8c\u6700\u5f8c\uff0c\u6211\u5011\u4f86\u63a2\u8a0e\u4e00\u500b\u6709\u8da3\u7684\u4e8b\u60c5\uff0c\u9019\u4e9b ",(0,a.kt)("strong",{parentName:"p"},"ClusterIP")," \u672c\u8eab\u90fd\u662f\u4e00\u500b\u4e0d\u5b58\u5728\u7684",(0,a.kt)("strong",{parentName:"p"},"IP"),", \u90a3\u6211\u5011\u5230\u5e95\u662f\u5982\u4f55\u6210\u529f\u5730\u8b93\u5c01\u5305\u88ab ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u63a5\u624b\u8655\u7406\u7684\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant@k8s-dev:~$ kubectl get svc\nNAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\ncluster-demo    ClusterIP   10.97.35.96     <none>        80/TCP         63m\nkubernetes      ClusterIP   10.96.0.1       <none>        443/TCP        81m\nnodeport-demo   NodePort    10.100.61.228   <none>        80:31543/TCP   63m\n\nvagrant@k8s-dev:~$ curl 10.97.35.96\n...\n...\n")),(0,a.kt)("p",null,"\u8b6c\u5982\u4e0a\u8ff0\uff0c\u6211\u5011\u53ef\u4ee5\u5728\u7bc0\u9ede\u5167\u76f4\u63a5\u7528 curl \u7684\u65b9\u5f0f\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"clusterIP")," \u53bb\u5b58\u53d6\u670d\u52d9\uff0c\u53ef\u662f\u4e4b\u524d\u5728\u63a2\u8a0e ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u7684\u6642\u5019\uff0c\u90a3\u6642\u5019\u4f60\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Service IP(VIP)")," \u5fc5\u9808\u8981\u771f\u5be6\u5b58\u5728\u624d\u53ef\u4ee5\u8655\u7406\u3002\n\u800c\u9019\u4e9b ",(0,a.kt)("strong",{parentName:"p"},"ClusterIP")," \u672c\u8eab\u53c8\u4e0d\u5728\u7cfb\u7d71\u4e4b\u4e2d\uff0c\u90a3\u5230\u5e95\u600e\u9ebc\u8fa6\uff1f"),(0,a.kt)("p",null,"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c",(0,a.kt)("strong",{parentName:"p"},"kube-proxy"),"\u65bc\u7cfb\u7d71\u5167\u5077\u5077\u5275\u9020\u4e86\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"dummy interface kube-ipvs0"),"\uff0c\u4e26\u4e14\u628a\u6240\u6709\u7684 ",(0,a.kt)("strong",{parentName:"p"},"clusterIP")," \u90fd\u8a2d\u5b9a\u5230\u8a72\u7db2\u5361\u4e0a\u9762\u4e86\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u89c0\u5bdf\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"vagrant@k8s-dev:~$ ip link show type dummy\n5: kube-ipvs0: <BROADCAST,NOARP> mtu 1500 qdisc noop state DOWN mode DEFAULT group default\n    link/ether 62:c9:fc:74:c4:f8 brd ff:ff:ff:ff:ff:ff\nvagrant@k8s-dev:~$ ip addr show dev kube-ipvs0\n5: kube-ipvs0: <BROADCAST,NOARP> mtu 1500 qdisc noop state DOWN group default\n    link/ether 62:c9:fc:74:c4:f8 brd ff:ff:ff:ff:ff:ff\n    inet 10.96.0.10/32 brd 10.96.0.10 scope global kube-ipvs0\n       valid_lft forever preferred_lft forever\n    inet 10.96.0.1/32 brd 10.96.0.1 scope global kube-ipvs0\n       valid_lft forever preferred_lft forever\n    inet 10.97.35.96/32 brd 10.97.35.96 scope global kube-ipvs0\n       valid_lft forever preferred_lft forever\n    inet 10.100.61.228/32 brd 10.100.61.228 scope global kube-ipvs0\n       valid_lft forever preferred_lft forever\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u8cc7\u6599\u6709\u4e00\u500b\u8981\u6ce8\u610f\u7684\u5c31\u662f\uff0c\u5176\u72c0\u614b ",(0,a.kt)("inlineCode",{parentName:"p"},"DOWN"),", \u9019\u610f\u5473\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"Interface")," \u672c\u8eab\u4e0d\u662f\u4e00\u500b\u53ef\u904b\u4f5c\u7684\u72c0\u614b\uff0c\u55ae\u7d14\u53ea\u662f\u4e00\u500b\u6c92\u6709\u88ab\u53eb\u8d77\u4f86\u904b\u4f5c\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Interface"),"\u3002"),(0,a.kt)("p",null,"\u5be6\u969b\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"dummy interface")," \u672c\u8eab\u8ddf ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u7684\u5354\u540c\u5408\u4f5c\u53ea\u6709\u4e00\u500b\u76ee\u7684\uff0c\u8b93\u5c01\u5305\u53ef\u4ee5\u5f80 Kernel \u9001\uff0c\u53ea\u8981\u5c01\u5305\u53ef\u4ee5\u9806\u5229\u9001\u9032\u53bb\uff0c\u63a5\u4e0b\u4f86\u5c31\u53ef\u4ee5\u88ab ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u7d66\u63a5\u624b\u8655\u7406"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9019\u90e8\u5206\u7684\u539f\u7406\u8981\u7b49\u5230\u4e0b\u7bc7\u6587\u7ae0\u5f9e kernel + netfilter \u770b\u8d77\u624d\u6bd4\u8f03\u597d\u8aaa\u660e\u539f\u7406")),(0,a.kt)("p",null,"\u9019\u908a\u76f4\u63a5\u5feb\u901f\u7528\u4e00\u500b\u5be6\u9a57\u4f86\u9a57\u8b49\u4e0a\u9762\u63a8\u8ad6"),(0,a.kt)("h3",{id:"experiment"},"Experiment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6211\u5011\u628a\u8a72 Interface kube-ipvs0 \u53eb\u8d77\u4f86"),(0,a.kt)("li",{parentName:"ol"},"\u96a8\u4fbf\u634f\u9020\u4e00\u500b\u5047\u7684 IP, \u4e26\u4e14\u8a2d\u5b9a\u4e00\u689d\u975c\u614b\u8def\u7531\u6307\u5411 kube-ipvs0"),(0,a.kt)("li",{parentName:"ol"},"\u624b\u52d5\u7528 ipvsadm \u6839\u64da\u4e0a\u9762\u5047\u7684 IP \u53bb\u5275\u9020\u4e00\u500b\u65b0\u7684 ",(0,a.kt)("strong",{parentName:"li"},"IPVS Service")),(0,a.kt)("li",{parentName:"ol"},"\u624b\u52d5\u5c07\u6211\u5011\u7684 ",(0,a.kt)("strong",{parentName:"li"},"pod IP")," \u52a0\u5165\u5230\u4e0a\u8ff0\u5275\u9020\u7684 ",(0,a.kt)("strong",{parentName:"li"},"IPVS Service")),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e Curl \u53bb\u9023\u63a5\u6211\u5011\u5275\u9020\u7684\u5047 IP")),(0,a.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u634f\u9020\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.3.4/32")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP")," \u5730\u5740\uff0c\u7136\u5f8c\u5f8c\u7aef\u7684 ",(0,a.kt)("strong",{parentName:"p"},"POD IP:PORT")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"10.244.0.4:8080,10.244.0.5:8080,10.244.0.6:8080"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash="},"sudo ifconfig kube-ipvs0 up\nsudo ip route add 1.2.3.4/32 table local dev kube-ipvs0\nsudo ipvsadm -A -t 1.2.3.4:80\nsudo ipvsadm -a -t 1.2.3.4:80 -r 10.244.0.4:8080 -m\nsudo ipvsadm -a -t 1.2.3.4:80 -r 10.244.0.5:8080 -m\nsudo ipvsadm -a -t 1.2.3.4:80 -r 10.244.0.6:8080 -m\ncurl 1.2.3.4\n")),(0,a.kt)("p",null,"\u57f7\u884c\u5b8c curl \u5c31\u6703\u9806\u5229\u7684\u5b58\u53d6\u5230\u5f8c\u9762\u4f3a\u670d\u5668\u7684\u7db2\u9801\u5167\u5bb9\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\n",(0,a.kt)("strong",{parentName:"p"},"\u9019\u908a\u56e0\u70ba IPVS \u6703\u6839\u64da SyncPeriod \u7684\u8a2d\u5b9a\u5b9a\u671f\u53bb\u66f4\u65b0\u898f\u5247\uff0c\u6240\u4ee5\u4e0a\u8ff0\u5275\u9020\u7684\u898f\u5247\u653e\u4e00\u6bb5\u6642\u9593\u5c31\u6703\u88ab\u522a\u9664")),(0,a.kt)("p",null,"\u6839\u64da\u9019\u500b\u5be6\u9a57\u53ef\u4ee5\u9a57\u8b49\u6211\u5011\u7684\u731c\u60f3\uff0c\u5176\u5be6 ",(0,a.kt)("strong",{parentName:"p"},"kube-ipvs0")," \u9019\u500b ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u672c\u8eab\u6839\u672c\u4e0d\u9700\u8981\u6709\u4efb\u4f55\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP Address"),"\uff0c\u5176\u76ee\u7684\u53ea\u662f\u4e00\u958b\u59cb\u7522\u751f\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP address")," \u80fd\u5920\u7522\u751f\u4e00\u500b\u5c0d\u61c9\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Route Entry"),"\uff0c\u628a\u5c01\u5305\u5f80\u7cfb\u7d71\u5167\u9001\uff0c\u7576\u5c01\u5305\u8d70\u5230\u7cfb\u7d71\u5167\u5f8c\uff0c\u4fbf\u6703\u8207 ",(0,a.kt)("strong",{parentName:"p"},"Netfilter")," \u4ea4\u4e92\u4f5c\u7528\u5c07\u5c01\u5305\u8f49\u63a5\u7d66 ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u7684\u5e95\u5c64\u5be6\u4f5c\u53bb\u8655\u7406\uff0c\u9019\u6642\u5019\u5c31\u6703\u6839\u64da ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"Service")," \u4f86\u6c7a\u5b9a\u662f\u5426\u6709\u5339\u914d\u7684\u8cc7\u6599\u4e26\u4e14\u5c07\u5176\u8f49\u767c\u5230\u5f8c\u7aef\u4f3a\u670d\u5668\u3002"),(0,a.kt)("p",null,"\u4e0b\u7bc7\u6587\u7ae0\u5c31\u6703\u4f86\u958b\u59cb\u63a2\u8a0e\u5230\u5e95 ",(0,a.kt)("strong",{parentName:"p"},"IPVS")," \u8207 ",(0,a.kt)("strong",{parentName:"p"},"IPTables")," \u7684\u5dee\u7570\u5728\u54ea\u88cf\uff0c\u4e26\u4e14\u5617\u8a66\u89e3\u91cb\u4e0a\u9762\u7684\u63a8\u8ad6\u904e\u7a0b\u5176\u80cc\u5f8c\u7684\u5be6\u4f5c\u539f\u7406"))}k.isMDXComponent=!0}}]);