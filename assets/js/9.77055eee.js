(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{383:function(t,e,s){"use strict";s.r(e);var a=s(0),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本文主要讲解如何重启RHEL 8或者CentOS 8网络以及如何解决RHEL8和CentOS8系统的网络管理服务报错，当我们安装好RHEL 8或者 CentOS 8，重启启动网络时，会出现以下报错：\n")]),t._v(" "),s("h2",{attrs:{id:"前导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前导"}},[t._v("#")]),t._v(" 前导")]),t._v(" "),s("p",[t._v("本文主要讲解如何重启RHEL 8或者CentOS 8网络以及如何解决RHEL8和CentOS8系统的网络管理服务报错，当我们安装好RHEL 8或者 CentOS 8，重启启动网络时，会出现以下报错：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.peacecity.cn/img/20201121115514.png",alt:""}})]),t._v(" "),s("p",[t._v("报错信息如下\n"),s("code",[t._v("Failed to restart network.service: Unit network.service not found.")]),t._v("\n意思为无法重启网络服务，原因是无法找到network.service网络服务")]),t._v(" "),s("p",[t._v("出现错误的原因是，在RHEL 8和CentOS 8系统里，已废弃network.service，因此只能通过其它方法进行网络配置，包括NM命令工具集。换言之，在rhel8上，必须开启NM，否则无法使用网络")]),t._v(" "),s("p",[t._v("此时必须找到你的网卡标识，可用如下命令确定网卡标识符")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root#localhost ~]# ip addr\n")])])]),s("p",[t._v("比如我的虚拟机网卡标识符就是"),s("code",[t._v("ens160")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.peacecity.cn/img/20201121120349.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"rhel8或者centos8利用手工配置ifcfg使用nmcli来生效新的网络配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rhel8或者centos8利用手工配置ifcfg使用nmcli来生效新的网络配置"}},[t._v("#")]),t._v(" RHEL8或者CentOS8利用手工配置"),s("code",[t._v("ifcfg")]),t._v("使用"),s("code",[t._v("nmcli")]),t._v("来生效新的网络配置")]),t._v(" "),s("ul",[s("li",[t._v("假设网卡标识符为xxx")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root#localhost ~]# vi etc/sysconfig/network-scripts/ifcfg-xxx\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.peacecity.cn/img/20201121120924.png",alt:""}})]),t._v(" "),s("p",[t._v("此文件里ONBOOT记得一定要开启也就是yes")]),t._v(" "),s("ul",[s("li",[t._v("保存后使用"),s("code",[t._v("nmcli")]),t._v("重新回载网络配置")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root#localhost ~]# nmcli c reload\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root#localhost ~]# nmcli c up xxx\n")])])]),s("ul",[s("li",[t._v("最后使用"),s("code",[t._v("ifconfig")]),t._v("查看是否成功修改")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root#localhost ~]# ifconfig\n")])])]),s("ul",[s("li",[t._v("整体流程如下：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.peacecity.cn/img/20201121121225.png",alt:""}})]),t._v(" "),s("p",[t._v("{% note success %}\n总结完毕~~~~\n{% endnote %}")])])}),[],!1,null,null,null);e.default=c.exports}}]);