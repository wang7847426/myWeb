webpackJsonp([7],{"7JOe":function(t,e){},Y3JW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{page:28,meiTuList:[]}},created:function(){this.axiosMeitu()},methods:{axiosMeitu:function(){var t=this;this.$axios.get("https://www.apiopen.top/meituApi?page="+this.page).then(function(e){console.log(e.data),t.meiTuList=e.data.data}).catch(function(t){console.log(t)})}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",this._l(this.meiTuList,function(t,i){return e("li",{key:i},[e("img",{attrs:{src:t.url,alt:""}})])}),0)])},staticRenderFns:[]};var s=i("C7Lr")(n,a,!1,function(t){i("7JOe")},"data-v-368ccf98",null);e.default=s.exports}});
//# sourceMappingURL=7.0bd992b4134f630878e1.js.map