"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[4593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},23421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"[Container Network Interface] CNI Introduction",tags:["CNI","Network","Container","Linux","Ubuntu","Kubernetes"],date:new Date("2018-04-08T05:16:01.000Z"),description:"Container Network Interface (CNI) as a Network Interface between the network soluition and the container mechanism. Without the CNI, the network solution developer should implement his/her plugin for every container environment and it must be a disaster. Fortunately, with the help of the CNI, the developer can only focus on one interface and it should work for every container mechanism. In this post, we will see why we need the CNI, what is CNI and how kubernetes use the CNI to provide the network connectiviy for the computing unit,  so called Pod."},i="Preface",l={unversionedId:"2018/introduce-cni-ii",id:"2018/introduce-cni-ii",title:"[Container Network Interface] CNI Introduction",description:"Container Network Interface (CNI) as a Network Interface between the network soluition and the container mechanism. Without the CNI, the network solution developer should implement his/her plugin for every container environment and it must be a disaster. Fortunately, with the help of the CNI, the developer can only focus on one interface and it should work for every container mechanism. In this post, we will see why we need the CNI, what is CNI and how kubernetes use the CNI to provide the network connectiviy for the computing unit,  so called Pod.",source:"@site/docs/2018/introduce-cni-ii.md",sourceDirName:"2018",slug:"/2018/introduce-cni-ii",permalink:"/docs/2018/introduce-cni-ii",draft:!1,tags:[{label:"CNI",permalink:"/docs/tags/cni"},{label:"Network",permalink:"/docs/tags/network"},{label:"Container",permalink:"/docs/tags/container"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",lastUpdatedBy:"HungWei Chiu",frontMatter:{title:"[Container Network Interface] CNI Introduction",tags:["CNI","Network","Container","Linux","Ubuntu","Kubernetes"],date:"2018-04-08T05:16:01.000Z",description:"Container Network Interface (CNI) as a Network Interface between the network soluition and the container mechanism. Without the CNI, the network solution developer should implement his/her plugin for every container environment and it must be a disaster. Fortunately, with the help of the CNI, the developer can only focus on one interface and it should work for every container mechanism. In this post, we will see why we need the CNI, what is CNI and how kubernetes use the CNI to provide the network connectiviy for the computing unit,  so called Pod."},sidebar:"techPost",previous:{title:"[Container Network Interface] Bridge Network In Docker",permalink:"/docs/2018/introduce-cni-i"},next:{title:"[Container Network Interface] Implement Your CNI In Golang",permalink:"/docs/2018/introduce-cni-iii"}},s={},p=[{value:"Why We Need CNI",id:"why-we-need-cni",level:2},{value:"How CNI works",id:"how-cni-works",level:2},{value:"What does CNI do",id:"what-does-cni-do",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How To Use it.",id:"how-to-use-it",level:2},{value:"Pause Container.",id:"pause-container",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preface"},"Preface"),(0,o.kt)("p",null,"It's a series post about the Container Network Interface and you can find other posts below.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/introduce-cni-i"},"[Container Network Interface] Bridge Network In Docker"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/introduce-cni-iii"},"[Container Network Interface] Write a CNI Plugin By Golang")),(0,o.kt)("p",null,"In this post, I will try to introduce the concept of Container Network Interface (CNI), including why we need this, how it works and what does it do."),(0,o.kt)("p",null,"If you have not familiar with what is ",(0,o.kt)("inlineCode",{parentName:"p"},"linux network namespace")," and how ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," handles the network for its containers.\nYou should read the ",(0,o.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/docs/2018/introduce-cni-i"},"[CNI] Bridge Network In Docker")," to learn those concepts and that will be helpful for this tutorial."),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"why-we-need-cni"},"Why We Need CNI"),(0,o.kt)("p",null,"In the previous post, we have learn the procedure of the basic bridge network in the docker."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Linux Bridge"),(0,o.kt)("li",{parentName:"ul"},"Create a Network Namespace"),(0,o.kt)("li",{parentName:"ul"},"Create a Veth Pair"),(0,o.kt)("li",{parentName:"ul"},"Connect the bridge and network namespace with veth pair"),(0,o.kt)("li",{parentName:"ul"},"Setup the IP address to the network namespace"),(0,o.kt)("li",{parentName:"ul"},"Setup the iptalbes rules for exporting the services (optional)")),(0,o.kt)("p",null,"However, That's the ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge network")," and it only provide the layer2 forwarding. For some use cases, it's not enough.\nMore and more requirement, such as layer3 routing, overlay network, high performance\n, openvswitch and so on."),(0,o.kt)("p",null,"From the docker point of view, it's impossible to implement and maintain all above requirements by them."),(0,o.kt)("p",null,"The better solution is to open its interface and make everyone can write its own network service and that's how ",(0,o.kt)("inlineCode",{parentName:"p"},"docker network")," works."),(0,o.kt)("p",null,"So, there're so many plugins for the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker network")," now and every can choose what kind of the network they want."),(0,o.kt)("p",null,"Unfortunately, docker isn't the only container technical, there're otehr competitors, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"rkt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lxc"),".\nBesides, more and more ",(0,o.kt)("inlineCode",{parentName:"p"},"container cluster orchestration"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker swam"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mesos"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," and so on."),(0,o.kt)("p",null,"Take a ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge network")," as an example, do we need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge network")," for all container orchestration/solutions? do we need to write many duplicate code because of the not-unified interface between each orchestrator?"),(0,o.kt)("p",null,"That's why we need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Network Interface(CNI)"),", The ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Network Interface(CNI)")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud Native Computing Foundation")," projects, we can see more information ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"here"),"."),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"CNI"),", we have a unified interface for network services and we should only implement our network plugin once, and it should works everywhere which support the ",(0,o.kt)("inlineCode",{parentName:"p"},"CNI"),"."),(0,o.kt)("p",null,"According to the official website's report. those ",(0,o.kt)("inlineCode",{parentName:"p"},"container runtimes")," solutions all supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"CNI")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://coreos.com/blog/rkt-cni-networking.html"},"rkt - container engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://kubernetes.io/docs/admin/network-plugins/"},"Kubernetes - a system to simplify container operations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openshift/origin/blob/master/docs/openshift_networking_requirements.md"},"OpenShift - Kubernetes with additional enterprise features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudfoundry-incubator/cf-networking-release"},"Cloud Foundry - a platform for cloud applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/mesos/blob/master/docs/cni.md"},"Apache Mesos - a distributed systems kernel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ecs/"},"Amazon ECS - a highly scalable, high performance container management service"))),(0,o.kt)("h2",{id:"how-cni-works"},"How CNI works"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Container Network Interface")," is a specifiction which defined what kind of the interface you should implement."),(0,o.kt)("p",null,"In order to make it easy for developers to deveploe its own CNI plugin. the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Network Interface")," project also provides many library for developing and all of it is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"golang")," language."),(0,o.kt)("p",null,"You can find those two libraries below\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"https://github.com/containernetworking/cni"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/plugins"},"https://github.com/containernetworking/plugins")),(0,o.kt)("h2",{id:"what-does-cni-do"},"What does CNI do"),(0,o.kt)("p",null,"In CNI specifiction, there're three method we need to implement for our own plugin."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ADD"),(0,o.kt)("li",{parentName:"ul"},"DELETE"),(0,o.kt)("li",{parentName:"ul"},"VERSION")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ADD")," will be invoked when the container has been created. The plugin should prepare resources and make sure that container with network connectivity.\n",(0,o.kt)("inlineCode",{parentName:"p"},"DEKETE")," will be inboked when the container has been destroyed. The plugin should remove all allocated reousrces.\n",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION")," shows the version of this CNI plugin."),(0,o.kt)("p",null,"For each method, the CNI interface will pass the following information into your plugin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ContainerID"),(0,o.kt)("li",{parentName:"ul"},"Netns"),(0,o.kt)("li",{parentName:"ul"},"IfName"),(0,o.kt)("li",{parentName:"ul"},"Args"),(0,o.kt)("li",{parentName:"ul"},"Path"),(0,o.kt)("li",{parentName:"ul"},"StdinData")),(0,o.kt)("p",null,"I will explain those fields detaily in the next tutorial. In here, we just need to know for the CNI plugin, we sholud use those information ",(0,o.kt)("inlineCode",{parentName:"p"},"ContainerID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Network Namespace path")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Interface Name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StdinData")," to make the container with network connectivity."),(0,o.kt)("p",null,"Use the previous bridge-network as example. the ",(0,o.kt)("inlineCode",{parentName:"p"},"network namespace")," will be created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"orchestrator")," and it will pass the path of that ",(0,o.kt)("inlineCode",{parentName:"p"},"network namespace")," via the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"netns")," to CNI.\nAfter we crete the ",(0,o.kt)("inlineCode",{parentName:"p"},"veth")," pair and connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"network namespace"),", we should set the interface name to ",(0,o.kt)("inlineCode",{parentName:"p"},"Ifname"),"."),(0,o.kt)("p",null,"For the IPAM (IP Adderss Management), we can get the information from the ",(0,o.kt)("inlineCode",{parentName:"p"},"StdinData")," and calculate what IP address we should use in the CNI plugin."),(0,o.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Now, We will see how kubernetes use CNI to create a network function for Pods."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to use the CNI, we need to config the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CNI")," method.\nThere're three argurments we need to take care."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cni-bin-dir: the directory of CNI binaries."),(0,o.kt)("li",{parentName:"ol"},"cni-conf-dir: the directory of CNI config files, common CNI(flannel/calico..etc) will install its config into here."),(0,o.kt)("li",{parentName:"ol"},"network-plugin: the type of network-plugin for Pods.")),(0,o.kt)("p",null,"In my kubernetes cluster (installed by kubeadm)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},"vortex-dev:10:06:59 [~]vagrant\n$ps axuw | grep cni\nroot      1864  4.9  2.1 569172 110108 ?       Ssl  15:18   3:06 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --cgroup-driver=cgroupfs --cni-bin-dir=/opt/cni/bin --cni-conf-dir=/etc/cni/net.d --network-plugin=cni\n")),(0,o.kt)("p",null,"You can see the arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"--cni-bin-dir=/opt/cni/bin --cni-conf-dir=/etc/cni/net.d --network-plugin=cni")," of the kubelet."),(0,o.kt)("p",null,"Now, Let we see the files under ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-bin-dir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-conf-dir"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-bin-dir")," contains all the CNI binary file and those files can be programmed by any language, just follow the CNI interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},"vortex-dev:04:21:29 [~]vagrant\n$ls /opt/cni/bin/\nbridge  dhcp  flannel  host-local  ipvlan  loopback  macvlan  portmap  ptp  rainier  sample  tuning  vlan\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-conf-dir"),", we should put the CNI config here and ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," will use the config for your Pod.\nIn my ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," cluster, I had installed the flannel CNI in it and the flannel will install its config here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},'vortex-dev:05:11:30 [~]vagrant\n$ls /etc/cni/net.d/\n10-flannel.conf\nvortex-dev:05:11:34 [~]vagrant\n$cat /etc/cni/net.d/10-flannel.conf\n{\n  "name": "cbr0",\n  "type": "flannel",\n  "delegate": {\n    "isDefaultGateway": true\n  }\n}\n')),(0,o.kt)("h2",{id:"how-to-use-it"},"How To Use it."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," receives a request to create a Pod in the node.\nFirst, it will search the ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-conf-dir")," in the alphabet order and inspect it."),(0,o.kt)("p",null,"Take the ",(0,o.kt)("inlineCode",{parentName:"p"},"10-falnnel.conf")," as example. when the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," knows the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"flannel"),", it will try to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"flannel")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cni-bin-dir")," and that's ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/cni/bin/flannel"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},'vortex-dev:05:11:34 [~]vagrant\n$cat /etc/cni/net.d/10-flannel.conf\n{\n  "name": "cbr0",\n  "type": "flannel",\n  "delegate": {\n    "isDefaultGateway": true\n  }\n}\n')),(0,o.kt)("h2",{id:"pause-container"},"Pause Container."),(0,o.kt)("p",null,"Before ",(0,o.kt)("inlineCode",{parentName:"p"},"kuberlet")," creates the Pod, it will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"pause")," conatiner first.\nAnd follows the CNI steps to setup the network fot that ",(0,o.kt)("inlineCode",{parentName:"p"},"pause")," container.(Assueme we use the network-plugin=cni)"),(0,o.kt)("p",null,"Now, The pause container is running and has the network connectivity.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," will create containers which is be described in the yaml file and attach those container to that pause container (in the docker command, we can use the --net=$containerID to do the same thing)."),(0,o.kt)("p",null,"By those procedure, we can maks sure all containers share the same network stack and any container crash won't destory the network stack since the network stack is hold sy the ",(0,o.kt)("inlineCode",{parentName:"p"},"pause container"),"."),(0,o.kt)("p",null,"Combine the pause container and user containers, it's called ",(0,o.kt)("inlineCode",{parentName:"p"},"Pod"),".\nAnd you can try to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes")," node to see how many pause container in there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell="},'vortex-dev:05:19:30 [~]vagrant\n$sudo docker ps -a | grep pause\n8838b9614a30        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_nfs-provisioner-5b75397b4807c54ad4fe92e2-6954c749cc-cn5jh_vortex_9f2f692c-a130-11e8-9450-02ddf6cab53d_0\n0a232459f786        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_vortex-server-58895cd7c6-xvd8g_vortex_7d88347b-9f9a-11e8-8719-02ddf6cab53d_8\nb0ca4ca2405d        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_kube-state-metrics-7d7d7b6bbc-fsf7b_vortex_7d83db65-9f9a-11e8-8719-02ddf6cab53d_7\n63a1f3b8a35f        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_coredns-78fcdf6894-s8ts5_kube-system_c9ef514c-9a23-11e8-9c21-02ddf6cab53d_9\n310b7a6daa54        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_cadvisor-zk8bk_vortex_7d726ff5-9f9a-11e8-8719-02ddf6cab53d_3\n3f0141a5a9b6        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n                   k8s_POD_network-controller-server-tcp-nnvgk_vortex_7d648d43-9f9a-11e8-8719-02ddf6cab53d_2\n9cedcb482e69        k8s.gcr.io/pause:3.1                              "/pause"                 7 hours ago         Up 7 hours\n')),(0,o.kt)("h1",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Network Interface")," CNI made the network-service developer more easy to develop their own network plguin. They don't need to write duplicate code for different system/orchestrator.\nJust write once and run everywhere."),(0,o.kt)("p",null,"And the CNI consists of a specification and many userful libraries for developers. The CNI only care the ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," events. the CNI plugin shoould make sure the container with network connectivity when the ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD")," event has been triggered and remove all allocted resources when the ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," event has been triggered."),(0,o.kt)("p",null,"In the next tutorial, I will show how to write a simple bridge CNI plugin in golang."))}u.isMDXComponent=!0}}]);