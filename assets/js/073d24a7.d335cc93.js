"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[59058],{15629:e=>{e.exports=JSON.parse('{"label":"Paper","permalink":"/docs/tags/paper","allTagsPath":"/docs/tags","count":4,"items":[{"id":"techPost/2018/paper-tensorflow-with-rdma","title":"[\u8ad6\u6587\u5c0e\u8b80] - Towards Zero Copy Dataflows using RDMA","description":"\u672c\u6587\u5c6c\u65bc\u8ad6\u6587\u5c0e\u8b80\u7cfb\u5217\uff0c\u9019\u6b21\u91dd\u5c0d\u7684\u662f\u9ad8\u901f\u7db2\u8def(RDMA)\u7684\u61c9\u7528\uff0c\u4f86\u6e90\u662f SICCOM 2017 \u6703\u8b70\u4e0a\u3002\u9019\u7bc7\u6587\u7ae0\u6709\u8da3\u7684\u5730\u65b9\u5728\u65bc\u4ed6\u4e0d\u662f\u55ae\u7d14\u7684\u4ecb\u7d39\u67b6\u69cb\uff0c\u800c\u662f\u900f\u904e\u4e00\u500b\u5be6\u969b\u7684\u61c9\u7528\u7a0b\u5f0f\u4f86\u95e1\u8ff0\u7576\u8a72\u61c9\u7528\u7a0b\u5f0f\u642d\u914d\u4e0a RDMA \u5f8c\u7372\u5f97\u4e86 Zero Copy \u7684\u7279\u8272\uff0c\u5728\u6b64\u7279\u8272\u52a0\u6301\u4e0b\uff0c\u539f\u5148\u61c9\u7528\u7a0b\u5f0f\u7684\u6548\u80fd\u63d0\u5347\u4e86\u591a\u5c11\u3002\u672c\u6587\u7684\u6a19\u984c\u662f Towards Zero Copy Dataflows using RDMA, \u5176\u5167\u5bb9\u8ddf AI \u7684\u8a13\u7df4\u904e\u7a0b\u6709\u95dc\uff0c\u63a1\u7528\u4e86\u7531 Google \u958b\u6e90\u7684\u8a13\u7df4\u6846\u67b6\uff0c Ternsorflow, \u4e26\u4e14\u5206\u6790\u4e86\u5728\u539f\u5148\u5206\u6563\u5f0f\u7684\u8a13\u7df4\u6a21\u578b\u4e2d\uff0c\u8cc7\u6599\u4e0d\u8ad6\u5728 CPU/GPU UserSpace/KernelSpace \u751a\u81f3\u7bc0\u9ede\u9593\u90fd\u6709\u5927\u91cf\u7684\u8cc7\u6599\u8907\u88fd\u884c\u70ba\u3002\u900f\u904e RDMA \u7684\u5e6b\u5fd9\u6e1b\u5c11\u4e86\u9019\u4e9b\u884c\u70ba\u6700\u5f8c\u8b49\u660e\u4e86\u6574\u9ad4\u5206\u6563\u5f0f\u8a13\u7df4\u7684\u6642\u9593\u5927\u5e45\u5ea6\u7e2e\u77ed\uff0c\u662f\u500b\u975e\u5e38\u6709\u8da3\u7684\u77ed\u6587.","permalink":"/docs/techPost/2018/paper-tensorflow-with-rdma"},{"id":"techPost/2017/paper-maglve","title":"[\u8ad6\u6587\u5c0e\u8b80] Maglev: A Fast and Reliable Software Network Load Balancer","description":"\u672c\u7bc7\u6587\u7ae0\u662f\u5c6c\u65bc\u8ad6\u6587\u5c0e\u8b80\u7cfb\u5217\uff0c\u9019\u6b21\u7684\u5c0d\u8c61\u662fGoogle\u6240\u63a8\u51fa\u7684Software Network Load Balancer, Meglev. \u900f\u904e\u5c0d\u8a72\u8ad6\u6587\u7684\u7814\u7a76\u5f8c\u53ef\u4ee5\u5b78\u7fd2\u5230Google\u5c0d\u65bc\u4e00\u500b Network Load Balancer \u7684\u671f\u8a31\u4ee5\u53ca\u8a2d\u8a08\u7684\u601d\u8003\u8108\u7d61\uff0c\u4e26\u4e14\u5be6\u969b\u7406\u89e3\u5176\u67b6\u69cb\u4f86\u5b78\u7fd2\u5230\u5982\u4f55\u8a2d\u8a08\u4e00\u500b\u901a\u7528(\u53ef\u904b\u884c\u5728\u4efb\u610f\u7684 Linux Server\u4e0a), \u5206\u6563\u5f0f\u4e14\u6613\u65bc\u64f4\u5145\u7684\u5f48\u6027\u67b6\u69cb\u4ee5\u53ca\u9ad8PPS(Packet Per Second)\u8655\u7406\u80fd\u529b\u7684\u8edf\u9ad4\u7a0b\u5f0f\u3002\u6700\u5f8c\u900f\u904e\u8ad6\u6587\u4e2d\u7684\u5be6\u9a57\u8207\u6548\u80fd\u8a55\u4f30\u4f86\u89c0\u5bdf\u5be6\u969b\u4e0a Meglev \u7684\u6548\u80fd\u4ee5\u53ca\u662f\u5426\u6709\u6eff\u8db3Google\u5c0d\u8a72\u8edf\u9ad4\u67b6\u69cb\u7684\u671f\u671b\u3002","permalink":"/docs/techPost/2017/paper-maglve"},{"id":"techPost/2017/paper-redesign-data-center","title":"[\u8ad6\u6587\u5c0e\u8b80] Re-architecting datacenter networks and stacks for low latency and high performance","description":"\u672c\u6587\u5c6c\u65bc\u8ad6\u6587\u5c0e\u8b80\u7cfb\u5217\uff0c\u9019\u6b21\u91dd\u5c0d\u7684\u662fSIGCOMM 2017\u6240\u767c\u8868\u7684\u8ad6\u6587\u4e2d\u95dc\u65bcData Center\u67b6\u69cb\u7684\u8ad6\u6587\u3002SIGCOMM\u9019\u500b Conference\u88e1\u9762\u90fd\u6709\u5f88\u591a\u8ddf\u7db2\u8def\u76f8\u95dc\u4e14\u9ad8\u54c1\u8cea\u7684\u8ad6\u6587\uff0c\u9664\u4e86\u5b78\u754c\u4e4b\u5916\uff0c\u4e5f\u5e38\u5e38\u6709\u5f88\u591a\u696d\u754c\u6703\u5c07\u76f8\u95dc\u7684\u7814\u7a76\u8207\u7522\u54c1\u8a2d\u8a08\u6295\u7a3f\u65bc\u6b64\uff0c\u56e0\u6b64\u662f\u500b\u6eff\u597d\u5b78\u7fd2\u7db2\u8def\u6982\u5ff5\u7684\u4e00\u500b\u8cc7\u6e90\u3002\u672c\u7bc7\u6587\u7ae0\u91dd\u5c0d\u7684\u4e3b\u984c\u662f Re-architecting datacenter networks and stacks for low latency and high performance, \u8a72\u6587\u4e3b\u65e8\u5e0c\u671b\u91cd\u65b0\u6253\u9020\u4e00\u500b\u6709\u771f\u6b63\u9ad8\u50b3\u8f38\u6548\u80fd\u7684\u8cc7\u6599\u4e2d\u5fc3\uff0c\u5176\u4e2d\u6d89\u53ca\u4e86\u975e\u5e38\u591a\u7684\u9762\u76f8\uff0c\u5f9e\u4ea4\u63db\u6a5f\u7684\u5be6\u73fe\u5230\u4e0a\u5c64 TCP \u5354\u5b9a\u7684\u4fee\u6b63\uff0c\u5f9e\u8af8\u591a\u9762\u5411\u4f86\u63a2\u8a0e\u50b3\u7d71\u7684\u8af8\u591a\u5354\u5b9a\u70ba\u4ec0\u9ebc\u6c92\u6709\u8fa6\u6cd5\u9054\u5230\u771f\u6b63\u7684\u9ad8\u6548\u80fd\u50b3\u8f38\uff0c\u8a72\u8ad6\u6587\u975e\u5e38\u7cbe\u5f69\uff0c\u53ef\u4ee5\u5b78\u7fd2\u5230\u975e\u5e38\u591a\u7684\u6982\u5ff5\u8207\u77e5\u8b58\uff0c\u975e\u5e38\u6b61\u8fce\u95b1\u8b80\u3002","permalink":"/docs/techPost/2017/paper-redesign-data-center"},{"id":"techPost/2016/mtcp-reading-note","title":"mTCP \u8b80\u5f8c\u7b46\u8a18","description":"\u4e4b\u524d\u5728\u7db2\u8def\u4e0a\u770b\u5230\u4e86\u4e00\u7bc7 paper","permalink":"/docs/techPost/2016/mtcp-reading-note"}]}')}}]);