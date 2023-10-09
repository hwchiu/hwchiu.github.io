"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[17861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=r.createContext({}),s=function(e){var t=r.useContext(_),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(_.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,_=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,k=c["".concat(_,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var _ in t)hasOwnProperty.call(t,_)&&(a[_]=t[_]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"Openvswitch source code(1)",date:"2013-12-02 09:17",comments:!0,tags:["SDN","Network","OpenvSwitch","SourceCode"],description:"In this post, I try to study the soruce code of openvswitch to learn how does the openvswitch kernel module works."},l="Preface",a={unversionedId:"techPost/2013/openvswitch-2",id:"techPost/2013/openvswitch-2",title:"Openvswitch source code(1)",description:"In this post, I try to study the soruce code of openvswitch to learn how does the openvswitch kernel module works.",source:"@site/docs/techPost/2013/openvswitch-2.md",sourceDirName:"techPost/2013",slug:"/techPost/2013/openvswitch-2",permalink:"/docs/techPost/2013/openvswitch-2",draft:!1,tags:[{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Network",permalink:"/docs/tags/network"},{label:"OpenvSwitch",permalink:"/docs/tags/openv-switch"},{label:"SourceCode",permalink:"/docs/tags/source-code"}],version:"current",frontMatter:{title:"Openvswitch source code(1)",date:"2013-12-02 09:17",comments:!0,tags:["SDN","Network","OpenvSwitch","SourceCode"],description:"In this post, I try to study the soruce code of openvswitch to learn how does the openvswitch kernel module works."},sidebar:"techPost",previous:{title:"Openflow Introduction, Port Types",permalink:"/docs/techPost/2013/openflow-number-1"},next:{title:"OpenvSwitch source code(2)",permalink:"/docs/techPost/2013/openvswitch-3"}},_={},s=[{value:"datapath.c",id:"datapathc",level:2},{value:"ovs_workqueues_init",id:"ovs_workqueues_init",level:3},{value:"ovs_flow_init",id:"ovs_flow_init",level:3},{value:"ovs_vport_init",id:"ovs_vport_init",level:3},{value:"register_pernet_device(&amp;ovs_net_ops)",id:"register_pernet_deviceovs_net_ops",level:3},{value:"register_netdevice_notifier",id:"register_netdevice_notifier",level:3},{value:"dp_register_genl",id:"dp_register_genl",level:3},{value:"schedule_delayed_work",id:"schedule_delayed_work",level:3},{value:"other",id:"other",level:3}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preface"},"Preface"),(0,o.kt)("p",null,"Openvswitch support two modes for user to config, user mode and kernel mode.\nwe will discuss the kernel mode in this article."),(0,o.kt)("p",null,"Software version: openvswitch v.20"),(0,o.kt)("h1",{id:"sourcecode"},"SourceCode"),(0,o.kt)("h2",{id:"datapathc"},"datapath.c"),(0,o.kt)("p",null,"This file is the main part of the kernel module and it will be compiled to the datapath.ko."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'module_init(dp_init);\nmodule_exit(dp_cleanup);\n\nMODULE_DESCRIPTION("Open vSwitch switching datapath");\nMODULE_LICENSE("GPL");\nMODULE_VERSION(VERSION);\n')),(0,o.kt)("p",null,"The kernel will call its init function ",(0,o.kt)("inlineCode",{parentName:"p"},"dp_init")," after the kernel module has been loaded."),(0,o.kt)("p",null,"The following is the work flow of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dp_init"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ovs_workqueues_init()"),(0,o.kt)("li",{parentName:"ul"},"ovs_flow_init()"),(0,o.kt)("li",{parentName:"ul"},"ovs_vport_init"),(0,o.kt)("li",{parentName:"ul"},"register_pernet_device(&ovs_net_ops);"),(0,o.kt)("li",{parentName:"ul"},"register_netdevice_notifier(&ovs_dp_device_notifier);"),(0,o.kt)("li",{parentName:"ul"},"dp_register_genl();"),(0,o.kt)("li",{parentName:"ul"},"schedule_delayed_work(&rehash_flow_wq, REHASH_FLOW_INTERVAL);")),(0,o.kt)("h3",{id:"ovs_workqueues_init"},"ovs_workqueues_init"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"workqueue.c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'static struct task_struct *workq_thread;\nspin_lock_init(&wq_lock);\nINIT_LIST_HEAD(&workq);\ninit_waitqueue_head(&more_work);\n\nworkq_thread = kthread_create(worker_thread, NULL, "ovs_workq");\nif (IS_ERR(workq_thread))\nreturn PTR_ERR(workq_thread);\n\nwake_up_process(workq_thread);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initail the worker queue."),(0,o.kt)("li",{parentName:"ul"},"Create a kernel thread and the handler is ",(0,o.kt)("strong",{parentName:"li"},"worker_thread")),(0,o.kt)("li",{parentName:"ul"},"start the kernel thread by calling ",(0,o.kt)("strong",{parentName:"li"},"wake_up_process"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static int worker_thread(void *dummy)\n{\n        for (;;) {\n                wait_event_interruptible(more_work,\n                                (kthread_should_stop() || !list_empty(&workq)));\n\n                if (kthread_should_stop())\n                        break;\n\n                run_workqueue();\n        }\n\n        return 0;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"wait_event_interruptible make the thread hibernation and add into the queue more_work."),(0,o.kt)("li",{parentName:"ul"},'The thread will wake up until the condition "kthread_should_stop() || !list_empty(&workq))" is true.'),(0,o.kt)("li",{parentName:"ul"},"It will call the ",(0,o.kt)("inlineCode",{parentName:"li"},"run_workqueue")," after it wake up.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static void run_workqueue(void)\n{\n        spin_lock_irq(&wq_lock);\n        while (!list_empty(&workq)) {\n                struct work_struct *work = list_entry(workq.next,\n                                struct work_struct, entry);\n\n                work_func_t f = work->func;\n                list_del_init(workq.next);\n                current_work = work;\n                spin_unlock_irq(&wq_lock);\n\n                work_clear_pending(work);\n                f(work);\n\n                BUG_ON(in_interrupt());\n                spin_lock_irq(&wq_lock);\n                current_work = NULL;\n        }\n        spin_unlock_irq(&wq_lock);\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the work from the workq list and call the fucntion.")),(0,o.kt)("h3",{id:"ovs_flow_init"},"ovs_flow_init"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"flow.c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* Initializes the flow module.\n * Returns zero if successful or a negative error code. */\nint ovs_flow_init(void)\n{\n        BUILD_BUG_ON(__alignof__(struct sw_flow_key) % __alignof__(long));\n        BUILD_BUG_ON(sizeof(struct sw_flow_key) % sizeof(long));\n\n        flow_cache = kmem_cache_create("sw_flow", sizeof(struct sw_flow), 0,\n                                        0, NULL);\n        if (flow_cache == NULL)\n                return -ENOMEM;\n\n        return 0;\n}\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use the ",(0,o.kt)("inlineCode",{parentName:"li"},"kmem_cache_create")," to create a kernel cache with size ",(0,o.kt)("inlineCode",{parentName:"li"},"sw_flow"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"struct sw_flow {\n        struct rcu_head rcu;\n        struct hlist_node hash_node[2];\n        u32 hash;\n\n        struct sw_flow_key key;\n        struct sw_flow_key unmasked_key;\n        struct sw_flow_mask *mask;\n        struct sw_flow_actions __rcu *sf_acts;\n\n        spinlock_t lock;        /* Lock for values below. */\n        unsigned long used;     /* Last used time (in jiffies). */\n        u64 packet_count;       /* Number of packets matched. */\n        u64 byte_count;         /* Number of bytes matched. */\n        u8 tcp_flags;           /* Union of seen TCP flags. */\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This struct store the info of each flow, including count, flow_key and flow_mask.")),(0,o.kt)("h3",{id:"ovs_vport_init"},"ovs_vport_init"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'vport.c"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/**\n *      ovs_vport_init - initialize vport subsystem\n *\n * Called at module load time to initialize the vport subsystem.\n */\nint ovs_vport_init(void)\n{\n        dev_table = kzalloc(VPORT_HASH_BUCKETS * sizeof(struct hlist_head),\n                            GFP_KERNEL);\n        if (!dev_table)\n                return -ENOMEM;\n\n        return 0;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"kzalloc")," malloc the memory from kernel.")),(0,o.kt)("h3",{id:"register_pernet_deviceovs_net_ops"},"register_pernet_device(&ovs_net_ops)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"    register_pernet_device(&ovs_net_ops);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register a network device ",(0,o.kt)("inlineCode",{parentName:"li"},"ovs_net_ops"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static struct pernet_operations ovs_net_ops = {\n        .init = ovs_init_net,\n        .exit = ovs_exit_net,\n        .id   = &ovs_net_id,\n        .size = sizeof(struct ovs_net),\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ovs_net_ops inherent from ",(0,o.kt)("inlineCode",{parentName:"li"},"pernet_operations"),", it should implement some function (init, exit)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static int __net_init ovs_init_net(struct net *net)\n{\n        struct ovs_net *ovs_net = net_generic(net, ovs_net_id);\n\n        INIT_LIST_HEAD(&ovs_net->dps);\n        INIT_WORK(&ovs_net->dp_notify_work, ovs_dp_notify_wq);\n        return 0;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"net_generic")," get the pointer to ovs_net."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"INIT_WORK")," to create a worker and set the function (dp_notify_work) as its work.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"struct ovs_net {\n        struct list_head dps;\n        struct vport_net vport_net;\n        struct work_struct dp_notify_work;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"need to study later.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void ovs_dp_notify_wq(struct work_struct *work)\n{\n        struct ovs_net *ovs_net = container_of(work, struct ovs_net, dp_notify_work);\n        struct datapath *dp;\n\n        ovs_lock();\n        list_for_each_entry(dp, &ovs_net->dps, list_node) {\n                int i;\n\n                for (i = 0; i < DP_VPORT_HASH_BUCKETS; i++) {\n                        struct vport *vport;\n                        struct hlist_node *n;\n\n                        hlist_for_each_entry_safe(vport, n, &dp->ports[i], dp_hash_node) {\n                                struct netdev_vport *netdev_vport;\n\n                                if (vport->ops->type != OVS_VPORT_TYPE_NETDEV)\n                                        continue;\n\n                                netdev_vport = netdev_vport_priv(vport);\n                                if (netdev_vport->dev->reg_state == NETREG_UNREGISTERED ||\n                                    netdev_vport->dev->reg_state == NETREG_UNREGISTERING)\n                                        dp_detach_port_notify(vport);\n                        }\n                }\n        }\n        ovs_unlock();\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"search datapathes and list all its vport."),(0,o.kt)("li",{parentName:"ul"},"Delete the vport if its status is ",(0,o.kt)("inlineCode",{parentName:"li"},"UNREGISTERED")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"UNREGISTERING"),".")),(0,o.kt)("h3",{id:"register_netdevice_notifier"},"register_netdevice_notifier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"}," register_netdevice_notifier(&ovs_dp_device_notifier);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register the network notification chain, it will call ",(0,o.kt)("inlineCode",{parentName:"li"},"ovs_dp_device_notifier")," when event occur.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"struct notifier_block ovs_dp_device_notifier = {\n        .notifier_call = dp_device_event\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ovs_dp_device_notifier")," contains a function pointer which point to ",(0,o.kt)("inlineCode",{parentName:"li"},"dp_device_event"),"."),(0,o.kt)("li",{parentName:"ul"},"This function will be call when the notification has occur.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static int dp_device_event(struct notifier_block *unused, unsigned long event,\n                           void *ptr)\n{\n        struct ovs_net *ovs_net;\n        struct net_device *dev = ptr;\n        struct vport *vport = NULL;\n\n        if (!ovs_is_internal_dev(dev))\n                vport = ovs_netdev_get_vport(dev);\n\n        if (!vport)\n                return NOTIFY_DONE;\n\n        if (event == NETDEV_UNREGISTER) {\n                ovs_net = net_generic(dev_net(dev), ovs_net_id);\n                queue_work(&ovs_net->dp_notify_work);\n        }\n\n        return NOTIFY_DONE;\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to study.")),(0,o.kt)("h3",{id:"dp_register_genl"},"dp_register_genl"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"datapath.c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static int dp_register_genl(void)\n{\n        int n_registered;\n        int err;\n        int i;\n\n        n_registered = 0;\n        for (i = 0; i < ARRAY_SIZE(dp_genl_families); i++) {\n                const struct genl_family_and_ops *f = &dp_genl_families[i];\n\n                err = genl_register_family_with_ops(f->family, f->ops,\n                                                    f->n_ops);\n                if (err)\n                        goto error;\n                n_registered++;\n\n                if (f->group) {\n                        err = genl_register_mc_group(f->family, f->group);\n                        if (err)\n                                goto error;\n                }\n        }\n\n        return 0;\n\nerror:\n        dp_unregister_genl(n_registered);\n        return err;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register four types of gereric netlink (datapath, vport, flow, packet)."),(0,o.kt)("li",{parentName:"ul"},"You can see the detail info in ",(0,o.kt)("strong",{parentName:"li"},"dp_genl_families")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"genl_register_family_with_ops"),"  : register a generic netlink family with ops.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static const struct genl_family_and_ops dp_genl_families[] = {\n        { &dp_datapath_genl_family,\n          dp_datapath_genl_ops, ARRAY_SIZE(dp_datapath_genl_ops),\n          &ovs_dp_datapath_multicast_group },\n        { &dp_vport_genl_family,\n          dp_vport_genl_ops, ARRAY_SIZE(dp_vport_genl_ops),\n          &ovs_dp_vport_multicast_group },\n        { &dp_flow_genl_family,\n          dp_flow_genl_ops, ARRAY_SIZE(dp_flow_genl_ops),\n          &ovs_dp_flow_multicast_group },\n        { &dp_packet_genl_family,\n          dp_packet_genl_ops, ARRAY_SIZE(dp_packet_genl_ops),\n          NULL },\n};\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"struct genl_family_and_ops {\n        struct genl_family *family;\n        struct genl_ops *ops;\n        int n_ops;\n        struct genl_multicast_group *group;\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A genl_family_and_ops contains a pointer to its family and a pointer to its operations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static struct genl_family dp_datapath_genl_family = {\n        .id = GENL_ID_GENERATE,\n        .hdrsize = sizeof(struct ovs_header),\n        .name = OVS_DATAPATH_FAMILY,\n        .version = OVS_DATAPATH_VERSION,\n        .maxattr = OVS_DP_ATTR_MAX,\n        .netnsok = true,\n         SET_PARALLEL_OPS\n};\n\n\n\nstatic struct genl_ops dp_datapath_genl_ops[] = {\n        { .cmd = OVS_DP_CMD_NEW,\n          .flags = GENL_ADMIN_PERM, /* Requires CAP_NET_ADMIN privilege. */\n          .policy = datapath_policy,\n          .doit = ovs_dp_cmd_new\n        },\n        { .cmd = OVS_DP_CMD_DEL,\n          .flags = GENL_ADMIN_PERM, /* Requires CAP_NET_ADMIN privilege. */\n          .policy = datapath_policy,\n          .doit = ovs_dp_cmd_del\n        },\n        { .cmd = OVS_DP_CMD_GET,\n          .flags = 0,               /* OK for unprivileged users. */\n          .policy = datapath_policy,\n          .doit = ovs_dp_cmd_get,\n          .dumpit = ovs_dp_cmd_dump\n        },\n        { .cmd = OVS_DP_CMD_SET,\n          .flags = GENL_ADMIN_PERM, /* Requires CAP_NET_ADMIN privilege. */\n          .policy = datapath_policy,\n          .doit = ovs_dp_cmd_set,\n        },\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take ",(0,o.kt)("strong",{parentName:"li"},"dp_datapath_genl_ops")," for example. when the event is ",(0,o.kt)("strong",{parentName:"li"},"OVS_DP_CMD_NEW")," it will call it function handler ",(0,o.kt)("strong",{parentName:"li"},"ovs_dp_cmd_new"),".")),(0,o.kt)("h3",{id:"schedule_delayed_work"},"schedule_delayed_work"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to study")),(0,o.kt)("h3",{id:"other"},"other"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pr_info is printk(KERN_INFO,pr_fmt(fmt), ##",(0,o.kt)("strong",{parentName:"li"},"VA_ARGS"),")")))}u.isMDXComponent=!0}}]);