webpackJsonp([0],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar navbar-default topnav"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[s("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"})]),t._v(" "),s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("img",{attrs:{src:t.logo.src,alt:t.logo.title}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(t.logo.title))])])]),t._v(" "),s("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[s("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,n){return s("li",{class:{active:n===t.activeNavIndex}},[s("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(n)}}},[t._v(t._s(e))])])}),0)])])])},staticRenderFns:[]};function a(t,e){var s=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n        <div class="popover title-popover top fade in" style="position:fixed;">\n          <div class="arrow"></div>\n          <div class="popover-content"></div>\n        </div>\n      ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),n=s.style;if(void 0===e)n.display="none";else{var i=t.getBoundingClientRect(),a=window.getComputedStyle(t,null),o=parseInt(a.getPropertyValue("padding-right"))||0,l=parseInt(a.getPropertyValue("padding-top"))||0;n.visibility="hidden",n.display="block",s.querySelector(".popover-content").textContent=e,n.left=i.left-s.offsetWidth/2+(t.offsetWidth-o)/2+"px",n.top=i.top-s.offsetHeight+l+"px",n.display="block",n.visibility="visible"}}var o={name:"TheFooter",directives:{title:{bind:function(t,e,s){var n=["mouseenter","mouseleave","click"],i=function(s){"mouseenter"===s.type?a(t,e.value):a()};n.forEach(function(e){t.addEventListener(e,i,!1)}),t.destroy=function(){n.forEach(function(e){t.removeEventListener(e,i,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"Learnku Vue.js 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://learnku.com/vuejs/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://cdn.learnku.com/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://learnku.com/vuejs/contact"},{icon:"globe",title:"推荐网站",link:"https://learnku.com/vuejs/sites"}]}}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-top"},[s("div",{staticClass:"col-sm-5 col-lg-5"},[s("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),s("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return s("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[s("i",{class:"fa fa-"+e.icon})])}),0),t._v(" "),s("br"),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),s("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return s("li",[s("a",{attrs:{href:t.link,target:"_blank"}},[s("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}),0)]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return s("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("h4",[t._v(t._s(t.other.title))]),t._v(" "),s("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return s("li",[s("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],attrs:{href:e.link,target:"_blank"}},[s("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},staticRenderFns:[]};var r={name:"App",components:{TheHeader:s("VU/8")({name:"TheHeader",data:function(){return{logo:{src:this.uploadsUrl+"png/vue.png",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://yp.dayanyu.com.cn/images/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},i,!1,function(t){s("oTF8")},"data-v-531a76f0",null).exports,TheFooter:s("VU/8")(o,l,!1,function(t){s("cSg8")},"data-v-010674b3",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var p=s("VU/8")(r,c,!1,function(t){s("zYwW")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:p},template:"<App/>"})},cSg8:function(t,e){},oTF8:function(t,e){},zYwW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6374f98a56a28c2ae0c4.js.map