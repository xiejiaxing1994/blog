(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f4e3891"],{"01c9":function(t,e,s){"use strict";var a=s("5c84"),i=s.n(a);i.a},"05da":function(t,e,s){},"2fe2":function(t,e,s){},"5c84":function(t,e,s){},"5eae":function(t,e,s){"use strict";var a=s("c3c6"),i=s.n(a);i.a},6841:function(t,e,s){},"6b3f":function(t,e,s){},"9e2b":function(t,e,s){"use strict";var a=s("2fe2"),i=s.n(a);i.a},b9ad:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"home-banner":t.isHome},attrs:{id:"banner"}},[s("div",{staticClass:"banner-img",style:{"background-image":"url("+t.src+")"}},[t.isHome?[s("div",{staticClass:"focusinfo"},[s("div",{staticClass:"header-tou"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:t.websiteInfo.avatar}})])],1),s("div",{staticClass:"header-info"},[s("p",[t._v(t._s(t.websiteInfo.slogan))])]),s("div",{staticClass:"top-social"},t._l(t.socials,(function(t){return s("div",{key:t.id,attrs:{title:t.title}},[s("a",{style:{color:t.color},attrs:{href:t.href,target:"_blank"}},[s("i",{staticClass:"iconfont",class:t.icon})])])})),0)]),s("div",{staticClass:"slant-left"}),s("div",{staticClass:"slant-right"})]:t._e()],2)])},i=[],n={name:"banner",data:function(){return{websiteInfo:{},socials:[]}},props:{src:{type:String,default:"https://s1.ax1x.com/2020/05/23/YxaLMq.jpg"},isHome:{type:[Boolean,String],default:!1}},created:function(){this.getWebSiteInfo(),this.getSocial()},methods:{getSocial:function(){var t=this;this.$store.dispatch("getSocials").then((function(e){t.socials=e}))},getWebSiteInfo:function(){var t=this;this.$store.dispatch("getSiteInfo").then((function(e){t.websiteInfo=e}))}}},c=n,o=(s("5eae"),s("2877")),r=Object(o["a"])(c,a,i,!1,null,"222c7e5d",null);e["a"]=r.exports},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("banner",{attrs:{isHome:"true"}}),s("div",{staticClass:"site-content animate"},[s("div",{staticClass:"notify"},[t.hideSlogan?s("div",{staticClass:"search-result"},[t.searchWords?s("span",[t._v('搜索结果："'+t._s(t.searchWords)+'" 相关文章')]):t.category?s("span",[t._v('分类 "'+t._s(t.category)+'" 相关文章')]):t._e()]):s("quote",[t._v(t._s(t.notice))])],1),t.hideSlogan?t._e():s("div",{staticClass:"top-feature"},[s("section-title",[s("div",{staticStyle:{display:"flex","align-items":"flex-end"}},[t._v("聚焦"),s("small-ico")],1)]),s("div",{staticClass:"feature-content"},t._l(t.features,(function(t){return s("div",{key:t.title,staticClass:"feature-item"},[s("Feature",{attrs:{data:t}})],1)})),0)],1),s("main",{staticClass:"site-main",class:{search:t.hideSlogan}},[t.hideSlogan?t._e():s("section-title",[t._v("推荐")]),t._l(t.postList,(function(t){return[s("post",{key:t.id,attrs:{post:t}})]}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPage,expression:"hasNextPage"}],staticClass:"more"},[s("div",{staticClass:"more-btn",on:{click:t.loadMore}},[t._v("More")])])])],1)},i=[],n=(s("99af"),s("b9ad")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"feature"},[s("router-link",{attrs:{to:"/article/"+t.data.id}},[s("div",{staticClass:"feature-title"},[s("span",{staticClass:"foverlay"},[t._v(t._s(t.data.title))])]),s("img",{attrs:{src:t.data.img}})])],1)},o=[],r={name:"feature",props:{data:{type:Object,default:function(){return{title:"Akina",img:"https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg",href:"https://zhebk.cn/Web/Akina.html"}}}}},l=r,u=(s("edf4"),s("2877")),f=Object(u["a"])(l,c,o,!1,null,"f630e8c4",null),d=f.exports,h=s("fdba"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post post-list"},[s("div",{staticClass:"post-entry"},[s("div",{staticClass:"feature"},[s("router-link",{attrs:{to:"/article/"+t.post.id}},[s("img",{attrs:{src:t.post.banner}})])],1),s("h1",{staticClass:"entry-title"},[s("router-link",{attrs:{to:"/article/"+t.post.id}},[t.post.isTop?s("span",{staticStyle:{color:"#ff6d6d","font-weight":"600"}},[t._v("[置顶] ")]):t._e(),t._v(t._s(t.post.title))])],1),s("div",{staticClass:"p-time"},[s("i",{staticClass:"iconfont iconmeditor-time"}),t._v(" "+t._s(t._f("parseTime")(t.post.pubTime))),t.post.isHot?s("i",{staticClass:"iconfont iconfire",staticStyle:{"margin-left":"5px",color:"#ff6d6d"}}):t._e()]),s("p",{staticClass:"summary"},[t._v(t._s(t.post.summary))]),s("footer",{staticClass:"entry-footer"},[s("div",{staticClass:"post-more"},[s("router-link",{attrs:{to:"/article/"+t.post.id}},[s("i",{staticClass:"iconfont iconfish-li",staticStyle:{"font-size":"25px"}})])],1),s("div",{staticClass:"info-meta"},[s("div",{staticClass:"comnum"},[s("span",[s("i",{staticClass:"iconfont iconcomment"}),s("a",{attrs:{href:"https://zhebk.cn/Web/Akina.html"}},[t._v(t._s(t.post.commentsCount)+" 条评论")])])]),s("div",{staticClass:"views"},[s("span",[s("i",{staticClass:"iconfont iconeyes"}),t._v(t._s(t.post.viewsCount)+" 热度")])])])])]),s("hr")])},v=[],m={name:"post",props:{post:{type:Object}}},g=m,_=(s("e94f"),Object(u["a"])(g,p,v,!1,null,"09052cf2",null)),b=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"loader loader-7"},[s("div",{staticClass:"line line1"}),s("div",{staticClass:"line line2"}),s("div",{staticClass:"line line3"})])])}],k={name:"small-ico"},x=k,w=(s("01c9"),Object(u["a"])(x,C,y,!1,null,"8c50d684",null)),S=w.exports,j=s("c119"),P=s("365c"),$={name:"Home",props:["cate","words"],data:function(){return{features:[],postList:[],currPage:1,hasNextPage:!1}},components:{Banner:n["a"],Feature:d,sectionTitle:h["a"],Post:b,SmallIco:S,Quote:j["a"]},computed:{searchWords:function(){return this.$route.params.words},category:function(){return this.$route.params.cate},hideSlogan:function(){return this.category||this.searchWords},notice:function(){return this.$store.getters.notice}},methods:{fetchFocus:function(){var t=this;Object(P["c"])().then((function(e){t.features=e.data||[]})).catch((function(t){console.log(t)}))},fetchList:function(){var t=this;Object(P["e"])().then((function(e){t.postList=e.data.items||[],t.currPage=e.data.page,t.hasNextPage=e.data.hasNextPage})).catch((function(t){console.log(t)}))},loadMore:function(){var t=this;Object(P["e"])({page:this.currPage+1}).then((function(e){t.postList=t.postList.concat(e.data.items||[]),t.currPage=e.data.page,t.hasNextPage=e.data.hasNextPage}))}},mounted:function(){this.fetchFocus(),this.fetchList()}},O=$,I=(s("edb0"),Object(u["a"])(O,a,i,!1,null,"1c2070e8",null));e["default"]=I.exports},c119:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quote"},[t._t("default")],2)},i=[],n={name:"quote"},c=n,o=(s("9e2b"),s("2877")),r=Object(o["a"])(c,a,i,!1,null,"8465a266",null);e["a"]=r.exports},c3c6:function(t,e,s){},e94f:function(t,e,s){"use strict";var a=s("6b3f"),i=s.n(a);i.a},edb0:function(t,e,s){"use strict";var a=s("6841"),i=s.n(a);i.a},edf4:function(t,e,s){"use strict";var a=s("05da"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-4f4e3891.42db9ed8.js.map