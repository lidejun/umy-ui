(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{600:function(e,a,t){},606:function(e,a,t){"use strict";var n=t(600);t.n(n).a},619:function(e,a,t){"use strict";t.r(a);var n={name:"keepAliveTable",data:function(){return{keepAliveData:["Tab1","Tab2"],editableTabsValue:"1",editableTabs:[{title:"Tab 1",name:"1",router:"/"},{title:"Tab 2",name:"2",router:"/Tab2"}],demo:['<template>\n          <div class="keepAliveTable">\n             <el-tabs v-model="editableTabsValue" @tab-click="tabClick" type="card">\n                 <el-tab-pane\n                        :key="item.name"\n                        v-for="(item, index) in editableTabs"\n                        :label="item.title"\n                        :name="item.name"/>\n              </el-tabs>\n              <keep-alive :include="keepAliveData.join(\',\')">\n                 <router-view/>\n              </keep-alive>\n           </div>\n       </template>\n                '," export default {\n    name: \"keepAliveTable\",\n    data () {\n        return {\n            keepAliveData:['Tab1', 'Tab2'],\n            editableTabsValue: '1',\n            editableTabs: [{\n                title: 'Tab 1',\n                name: '1',\n                router: '/'\n            }, {\n                title: 'Tab 2',\n                name: '2',\n                router: '/Tab2'\n            }]\n        }\n    },\n    methods:{\n        tabClick (row) {\n            if (row.label === 'Tab 2') {\n                this.$router.push({\n                    path: '/wel/component/keepAliveTable/Tab2'\n                })\n            } else {\n                this.$router.push({\n                    path: '/wel/component/keepAliveTable/Tab1'\n                })\n            }\n        }\n    }\n}"]}},methods:{tabClick:function(e){"Tab 2"===e.label?this.$router.push({path:"/wel/component/keepAliveTable/Tab2"}):this.$router.push({path:"/wel/component/keepAliveTable/Tab1"})}}},l=(t(606),t(34)),i=Object(l.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"keepAliveTable"},[t("h3",[e._v("keepAlive页面缓存")]),t("p",[e._v("keepAlive页面缓存没太多需要注意的，页面该怎么写表格还是怎么写。然后哪个页面需要缓存就加入到keep-alive中去")]),e._m(0),e._m(1),t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.tabClick},model:{value:e.editableTabsValue,callback:function(a){e.editableTabsValue=a},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(e,a){return t("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}})})),1),t("keep-alive",{attrs:{include:e.keepAliveData.join(",")}},[t("router-view")],1),t("pre",[e._v("        "),t("code",[e._v(e._s(e.demo[0]))]),e._v("\n        "),t("code",[e._v(e._s(e.demo[1]))]),e._v("\n    ")])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{href:"https://github.com/u-leo/umy-ui/blob/master/examples/pages/u-table-component/virtualTableUsage/Tab1.vue",target:"_blank"}},[this._v("tab 1页面的代码")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("a",{attrs:{href:"https://github.com/u-leo/umy-ui/blob/master/examples/pages/u-table-component/virtualTableUsage/Tab2.vue",target:"_blank"}},[this._v("tab 2页面的代码")])])}],!1,null,"00bf25d4",null);a.default=i.exports}}]);