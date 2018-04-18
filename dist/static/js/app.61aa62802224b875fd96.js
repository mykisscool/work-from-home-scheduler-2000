webpackJsonp([1],{"1/oy":function(e,t){},"9M+g":function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),r=s("e6fC"),l=(s("Jmt5"),s("9M+g"),{render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("Add Developers")]),e._v(" "),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.addDeveloper}},[e._v("Add")])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.developer,expression:"developer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Developer name",autofocus:"autofocus"},domProps:{value:e.developer},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addDeveloper(t):null},input:function(t){t.target.composing||(e.developer=t.target.value)}}})])])},staticRenderFns:[]}),d=s("VU/8")({name:"developer-form",data:function(){return{developer:""}},created:function(){this.resetForm()},methods:{resetForm:function(){this.developer=""},addDeveloper:function(){this.developer.length&&(this.$emit("created",{id:this.developer,name:this.developer}),this.resetForm())}}},l,!1,null,null,null).exports,o=s("Zrlr"),i=s.n(o),a=s("wxAW"),u=s.n(a),c=["Monday","Tuesday","Wednesday","Thursday"],v=function(){function e(t){i()(this,e),this.developers=t,this.scheduledDevelopers={},this.unscheduledDevelopers=[]}return u()(e,[{key:"schedule",value:function(){for(var e=this.shuffleArray(this.developers),t=this.getAllAvailableDaysShuffled(),s=0;s<c.length;s++)this.scheduledDevelopers[c[s]]=[];for(var n=0;n<this.developers.length;n++)n<t.length?this.scheduledDevelopers[t[n]].push({id:e[n].id,name:e[n].name}):this.unscheduledDevelopers.push({id:e[n].id,name:e[n].name});return{scheduledDevelopers:this.scheduledDevelopers,unscheduledDevelopers:this.unscheduledDevelopers}}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),n=[e[s],e[t]];e[t]=n[0],e[s]=n[1]}return e}},{key:"getAllAvailableDaysShuffled",value:function(){for(var e=[],t=0;t<2;t++)e=e.concat(c.slice());return this.shuffleArray(e)}}]),e}(),h={name:"developer-table",props:["developers"],methods:{remove:function(e){this.$emit("remove",e)},scheduleDevelopers:function(){var e=new v(this.developers);this.$emit("scheduled",e.schedule())}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-section"},[e.developers.length>0?s("table",{staticClass:"table table-striped table-bordered table-sm"},[s("tbody",e._l(e.developers,function(t,n){return s("tr",{key:t.name},[s("td",{attrs:{scope:"row"}},[e._v(e._s(n+1)+".")]),e._v(" "),s("td",[s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(s){e.remove(t.id)}}},[e._v("Delete")]),e._v(" "+e._s(t.name)+"\n        ")])])}))]):e._e(),e._v(" "),e.developers.length>0?s("button",{staticClass:"btn btn-outline-primary",on:{click:e.scheduleDevelopers}},[e._v("Create Schedule")]):s("p",[s("em",[e._v("Please add Developers to create the schedule.")])])])},staticRenderFns:[]};var f=s("VU/8")(h,p,!1,function(e){s("aF0j")},"data-v-a6feacb0",null).exports,m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isAnyoneScheduled?s("h3",[e._v("Schedule")]):e._e(),e._v(" "),e._l(e.scheduled,function(t,n){return e.scheduled[n].length>0?s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-header"},[e._v("\n      "+e._s(n)+"\n    ")]),e._v(" "),s("div",{staticClass:"card-body"},e._l(t,function(t){return s("div",[s("span",[e._v(e._s(t.name))])])}))]):e._e()}),e._v(" "),e.unscheduled.length>0?s("div",{staticClass:"card text-white bg-danger text-center"},[s("div",{staticClass:"card-header"},[e._v("\n      Unscheduled\n    ")]),e._v(" "),s("div",{staticClass:"card-body"},e._l(e.unscheduled,function(t,n){return s("div",[s("span",[e._v(e._s(t.name))])])}))]):e._e()],2)},staticRenderFns:[]};var _=s("VU/8")({name:"developer-schedule",props:["scheduled","unscheduled"],computed:{isAnyoneScheduled:function(){var e=0;for(var t in this.scheduled)e+=this.scheduled[t].length;return e>0}}},m,!1,function(e){s("oUNT")},"data-v-3e37b0c8",null).exports,D={name:"developers",data:function(){return{developers:[],scheduled:{},unscheduled:[]}},methods:{removeDeveloper:function(e){for(var t in this.developers=this.developers.filter(function(t){return t.id!==e}),this.unscheduled=this.unscheduled.filter(function(t){return t.id!==e}),this.scheduled)this.scheduled[t]=this.scheduled[t].filter(function(t){return t.id!==e})},addDeveloper:function(e){for(var t=0;t<this.developers.length;t++)if(e.id===this.developers[t].id)return d.methods.resetForm(),!1;this.developers.push(e)},newSchedule:function(e){this.scheduled=e.scheduledDevelopers,this.unscheduled=e.unscheduledDevelopers}},components:{DeveloperForm:d,DeveloperTable:f,DeveloperSchedule:_}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("DeveloperForm",{on:{created:e.addDeveloper}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("DeveloperTable",{attrs:{developers:e.developers},on:{remove:e.removeDeveloper,scheduled:e.newSchedule}})],1)])]),e._v(" "),s("div",{staticClass:"col-lg-6"},[s("DeveloperSchedule",{attrs:{scheduled:e.scheduled,unscheduled:e.unscheduled}})],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("The Work from Home Scheduler 2000"),t("sup",[this._v("™")])])}]},g={name:"App",components:{Developers:s("VU/8")(D,b,!1,null,null,null).exports}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("Developers")},staticRenderFns:[]};var C=s("VU/8")(g,y,!1,function(e){s("xDGt")},null,null).exports;n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",components:{App:C},template:"<App />"})},aF0j:function(e,t){},oUNT:function(e,t){},xDGt:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.61aa62802224b875fd96.js.map