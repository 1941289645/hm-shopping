"use strict";(self["webpackChunkhm_shopping"]=self["webpackChunkhm_shopping"]||[]).push([[874],{7874:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(7658);var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch,"show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item",on:{click:function(s){return t.getList("all")}}},[t._v("综合")]),s("div",{staticClass:"sort-item",on:{click:function(s){return t.getList("sales")}}},[t._v("销量")]),s("div",{staticClass:"sort-item",on:{click:function(s){return t.getList("price",t.priceshift)}}},[t._v("价格 ")])]),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},o=[],i=e(1787),a=e(5067),n={name:"SearchIndex",components:{GoodsItem:a.Z},data(){return{page:1,proList:[],priceshift:0}},computed:{querySearch(){return this.$route.query.search}},created(){this.getList()},methods:{async getList(t,s){const{data:{list:e}}=await(0,i.Fs)({sortType:t,sortPrice:s,categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=e.data,"price"===t&&(this.priceshift=s?0:1,console.log(this.priceshift))}}},c=n,u=e(1001),d=(0,u.Z)(c,r,o,!1,null,"589bb140",null),l=d.exports},1787:function(t,s,e){e.d(s,{Aw:function(){return i},Fs:function(){return o},U3:function(){return a}});var r=e(4471);const o=t=>{const{sortType:s,sortPrice:e,categoryId:o,goodsName:i,page:a}=t;return r.Z.get("/goods/list",{params:{sortType:s,sortPrice:e,categoryId:o,goodsName:i,page:a}})},i=t=>r.Z.get("/goods/detail",{params:{goodsId:t}}),a=(t,s)=>r.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=874.d487d3c0.js.map