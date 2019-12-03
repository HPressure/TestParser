(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1075:function(e,t,r){"use strict";var a=r(730),n=r.n(a);t.default=n.a},1289:function(e,t,r){"use strict";r.r(t);r(31),r(26),r(119),r(53),r(65),r(46),r(47),r(45),r(218),r(14),r(22);var a=r(1),n=r(20),i=r(19),s=r(632),o=r(633),c=r(646),u=r(634),l=r(628),h=r(645);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var m,f={name:"ArchivePage",components:{AppLayout:s.a,AppRightColumn:o.a,ArchiveFilter:c.a},mixins:[u.a,l.a,h.a],data:function(){return{rubricsList:[]}},computed:{pageHeader:function(){return this.rubric&&"all"!==this.rubric?"Все новости рубрики ".concat(this.getRubricNameByPath(this.rubric)):"Все новости"},rubric:function(){return this.$route.query.rubric||"all"}},beforeRouteUpdate:function(e,t,r){this.params=p({},this.params,{page:e.query.page||1}),this.pageData=p({},this.pageData,{currentPage:parseInt(this.params.page,10)}),this.changeParamsBeforeUpdate(e,t,r)},created:function(){this.store.setPageType("archive")},beforeMount:function(){var e=i.ACTUAL_RUBRICS_INFO||{};this.rubricsList=this.extendRubricObj(e),this.$root._isMounted&&this.updatePage()},methods:{updatePage:(m=Object(a.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=p({},this.params,{pageType:this.pageType}),e.prev=1,e.next=4,this.store.archivesModule.fetchArchivePageData(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),this.store.emitRequestError(e.t0);case 9:case"end":return e.stop()}},e,this,[[1,6]])})),function(){return m.apply(this,arguments)}),extendRubricObj:function(r){return i.allRubricsIds.map(function(e){if(void 0!==r[e]){var t=r[e];return p({},t,{id:e,name:t.value,value:e})}}).filter(function(e){return void 0!==e})},getRubricNameByPath:function(t){var e=this.rubricsList.find(function(e){return e.id===t});return void 0!==e?e.name:""}}},v=r(1075),g=r(3);var b=Object(g.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style["news-archive-page"]},[r("app-layout",{attrs:{"render-left-column":!1}},[r("template",{slot:"central-column"},[r("div",{class:t.$style.wrap},[r("jtn-ui-side-block-header",{class:t.$style.title,attrs:{text:t.pageHeader}}),r("archive-filter",{attrs:{date:t.date,"current-rubric":t.rubric,rubrics:t.rubricsList},on:{onFilter:t.onFilter,invalidData:t.invalidData}}),t.showedResults?r("search-records-list",{attrs:{records:t.newsData,params:t.dataBlock.params}}):r("jtn-ui-typography",{class:t.$style.notice,attrs:{tag:"div",type:"font-photoday-type-1"}},[t._v(" "+t._s(t.noticeMessage)+" ")]),t.showedResults?r("jtn-ui-pagination",{directives:[{name:"show",rawName:"v-show",value:t.pageData.numPages&&1<t.pageData.numPages,expression:"pageData.numPages && pageData.numPages > 1"}],class:t.$style.pagination,attrs:{"items-per-page":t.params.pagesize,"total-items":t.totalResult},on:{change:function(e){return t.changePage(t.pageData.currentPage)}},model:{value:t.pageData,callback:function(e){t.pageData=e},expression:"pageData"}}):t._e()],1)]),r("template",{slot:"right-column"},[r("app-right-column")],1)],2)],1)},[],!1,function(e){this.$style=v.default.locals||v.default},null,null);t.default=b.exports},630:function(e,t,r){e.exports={"search-records-list":"EFyp"}},636:function(e,t,r){e.exports={form:"DZjp","open-btn":"DZjr",opened:"DZjt",icon:"DZcp",filter:"DZjv","filter-item":"DZjx","submit-btn":"DZjz","archive-filter":"DZtv","form-select":"DZb9"}},638:function(e,t,r){"use strict";var a=r(630),n=r.n(a);t.default=n.a},641:function(e,t,r){"use strict";r(65),r(49);var a=r(61),n=r(75),i=r.n(n),s=r(76),o=r.n(s),c=r(1214),u=r(1303),l=r(623),h=r(629),d=r(34),p=r(7),m=r(298),f=r(643),v={name:"SearchResultsList",components:{JtnUiSearchArchiveItem:c.a,JtnUiRecordStatistics:u.a,JtnUiTypography:l.a,JtnWidgetAdv:m.a},mixins:[d.a,p.a,a.a,f.a],props:{records:{type:Array,default:function(){return[]}},pageType:{type:String,default:""},params:{type:Object,default:function(){return{}}}},data:function(){return{scrollTargets:[{value:25,goalName:"scrollAllNews25"},{value:50,goalName:"scrollAllNews50"},{value:75,goalName:"scrollAllNews75"},{value:100,goalName:"scrollAllNews100"}],sendScrollTargets:[]}},computed:{versionTest:function(){return this.params.version?this.params.version:""},betweenArchiveAdvBlock1:function(){return this.store.advModule.betweenArchiveAdvBlock1},betweenArchiveAdvBlock2:function(){return this.store.advModule.betweenArchiveAdvBlock2},betweenArchiveAdvBlock3:function(){return this.store.advModule.betweenArchiveAdvBlock3},betweenArchiveAdvBlock4:function(){return this.store.advModule.betweenArchiveAdvBlock4},betweenArchiveAdvBlock5:function(){return this.store.advModule.betweenArchiveAdvBlock5}},mounted:function(){this.sendReachGoal("Скроллинг","Открыл","viewAllNews"),this.checkScrollElement=this.$el,window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,!1)},updated:function(){this.sendReachGoal("Скроллинг","Открыл","viewAllNews"),this.sendScrollTargets=[]},methods:{removeTags:function(e){return e.replace(/(\<(\/?[^>]+)>)/g,"")},formatDate:function(e){return i()(e,"D MMMM YYYY, HH:mm",{locale:o.a})},formatNumber:function(e){return e.toLocaleString("ru-RU")},rubrics:function(e){return!!(e.rubrics&&0<e.rubrics.length)&&e.rubrics},theme:function(e){return 0<e.themes.length&&e.themes[0]},formatComponent:function(e){return e.url?{tag:"a",href:e.url,title:e.name}:{tag:"span"}},getImageUrl:function(e){return Object(h.a)(e,!0,720,405)},onScroll:function(){this.checkScrollTargets()},sendReachGoal:function(e,t,r){this.store.analyticsModule.sendNewReachGoal({blockType:"Контент",fieldType:e,valueName:t,goalName:r})},onClickArchiveItem:function(e,t){this.sendReachGoal("Переход на материал",t.id,"clickArticle"),this.routerPush(e,t.urls.url)},onClickFormat:function(e,t){t.url&&(this.sendReachGoal("Формат",t.name,"clickArticleFormat"),this.routerPush(e,t.url))},onClickRubric:function(e,t){this.sendReachGoal("Рубрика",t.name,"clickArticleCategory"),this.routerPush(e,t.path)},onClickComments:function(e,t){this.sendReachGoal("Комментарии к материалу",t.id,"viewAllComments"),this.routerPush(e,t.urls.urlComments)},onClickTheme:function(e,t){this.sendReachGoal("Тема",t.name,"clickArticleTheme"),this.routerPush(e,t.path)}}},g=r(638),b=r(3);var y=Object(b.a)(v,function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{class:r.$style["search-records-list"]},[r._l(r.records,function(t,e){return[a("jtn-ui-search-archive-item",{key:t.id,attrs:{"publish-date":r.formatDate(t.publishAt),"url-title":r.removeTags(t.header),url:t.urls.url,header:t.header,subheader:t.subheader,"image-url":r.getImageUrl(t.mainPhoto)},on:{click:function(e){return r.onClickArchiveItem(e,t)}}},[0<t.formats.length?a("jtn-ui-typography",r._b({attrs:{slot:"format",type:""},on:{click:function(e){return r.onClickFormat(e,t.formats[0])}},slot:"format"},"jtn-ui-typography",r.formatComponent(t.formats[0]),!1),[r._v(" "+r._s(t.formats[0].name)+" ")]):r._e(),0<t.themes.length&&"theme"!==r.pageType?a("jtn-ui-typography",{attrs:{slot:"theme",tag:"a",type:"",href:t.themes[0].path,title:t.themes[0].name},on:{click:function(e){return r.onClickTheme(e,t.themes[0])}},slot:"theme"},[r._v(" "+r._s(t.themes[0].name)+" ")]):r._e(),r._l(r.rubrics(t),function(t,e){return a("jtn-ui-typography",{key:e,attrs:{slot:"rubrics",tag:"a",type:"",href:t.path,title:t.name},on:{click:function(e){return r.onClickRubric(e,t)}},slot:"rubrics"},[r._v(" "+r._s(t.name)+" ")])}),a("jtn-ui-record-statistics",{attrs:{slot:"stats",views:t.viewsCount,comments:t.commentsCount,"comments-url":t.urls.urlComments,"comments-enabled":t.isCommentsAllowed,"discuss-text":r.$_RecordItemUtilsMixin_discussText,"discuss-url":r.$_RecordItemUtilsMixin_getDiscussUrl(t.urls.urlComments)},on:{discuss:function(e){r.routerPush(e,r.$_RecordItemUtilsMixin_getDiscussUrl(t.urls.urlComments))},"click-comments":function(e){return r.onClickComments(e,t)}},slot:"stats"})],2),"2banners"===r.versionTest&&19===e&&r.betweenArchiveAdvBlock1?a("jtn-widget-adv",{key:"advert"+e,class:"_in-news-list",attrs:{data:r.betweenArchiveAdvBlock1}}):r._e(),"2banners"===r.versionTest&&39===e&&r.betweenArchiveAdvBlock2?a("jtn-widget-adv",{key:"advert"+e,class:"_in-news-list",attrs:{data:r.betweenArchiveAdvBlock2}}):r._e(),"3banners"===r.versionTest&&13===e&&r.betweenArchiveAdvBlock3?a("jtn-widget-adv",{key:"advert"+e,class:"_in-news-list",attrs:{data:r.betweenArchiveAdvBlock3}}):r._e(),"3banners"===r.versionTest&&25===e&&r.betweenArchiveAdvBlock4?a("jtn-widget-adv",{key:"advert"+e,class:"_in-news-list",attrs:{data:r.betweenArchiveAdvBlock4}}):r._e(),"3banners"===r.versionTest&&39===e&&r.betweenArchiveAdvBlock4?a("jtn-widget-adv",{key:"advert"+e,class:"_in-news-list",attrs:{data:r.betweenArchiveAdvBlock5}}):r._e()]})],2)},[],!1,function(e){this.$style=g.default.locals||g.default},null,null);t.a=y.exports},644:function(e,t,r){"use strict";var a=r(636),n=r.n(a);t.default=n.a},645:function(e,t,r){"use strict";r.d(t,"a",function(){return l});r(31),r(26),r(46),r(47),r(45),r(218),r(14);var a=r(20),n=r(1306),i=r(671),s=r(623),o=r(641);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){Object(a.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={components:{JtnUiSideBlockHeader:n.a,JtnUiPagination:i.a,JtnUiTypography:s.a,SearchRecordsList:o.a},data:function(){return{invalidFilters:!1,date:{min:this.$route.query.dateFrom||"",max:this.$route.query.dateTo||""},params:{page:+this.$route.query.page||1,pagesize:40,rubric:this.$route.query.rubric||void 0,dateFrom:this.$route.query.dateFrom||void 0,dateTo:this.$route.query.dateTo||void 0},pageData:{currentPage:parseInt(this.$route.query.page,10)||1}}},computed:{pageType:function(){return this.store.pageType},dataBlock:function(){return this.store.archivesModule.searchResultBlock},newsData:function(){return this.dataBlock.data||[]},totalResult:function(){return this.dataBlock.meta?this.dataBlock.meta.total:0},dataPath:function(){return this.dataBlock.path||0},noticeMessage:function(){return this.invalidFilters?"Задан неверный период времени":"Ничего не найдено"},showedResults:function(){return!this.invalidFilters&&this.totalResult&&0<this.newsData.length}},methods:{changeParamsBeforeUpdate:function(e,t,r){e.query.page&&e.query.page===t.query.page&&(this.changePage(1),r()),this.params=this.setParams(this.params,e.query),this.date={min:e.query.dateFrom||"",max:e.query.dateTo||""},this.getRecords(this.params),r()},getRecords:function(e){var t=u({},e,{pageType:this.pageType});this.store.archivesModule.fetchArchiveRecords({params:t,dataPath:this.dataPath})},onFilter:function(e){this.params=u({},this.params,{},e);var t=this.setParams(this.$route.query,e);this.updateRouterQuery(t)},changePage:function(e){this.params=u({},this.params,{page:e});var t=u({},this.$route.query,{page:1<e?e:void 0});this.updateRouterQuery(t)},setParams:function(e,t){return u({},e,{page:t.page,rubric:t.rubric,dateFrom:t.dateFrom,dateTo:t.dateTo})},updateRouterQuery:function(e){var t=this.$route.path;this.$router.push({path:t,query:u({},e)})},invalidData:function(e){this.invalidFilters=e}}}},646:function(e,t,r){"use strict";r(32),r(116),r(118),r(65);var a=r(27),n=r(1300),i=r(623),s=r(622),o=r(587),c=r(621),u=r(662),l={name:"ArchiveFilter",components:{JtnUiDateRange:n.a,JtnUiTypography:i.a,JtnUiDefaultBtn:s.a,JtnUiSvgIcon:o.a,JtnUiSelect:c.a},mixins:[u.a],props:{rubrics:{type:Array,default:function(){return[]}},currentRubric:{type:String,default:"all"},pageType:{type:String,default:"archive"}},data:function(){return{rubricsList:[{name:"Все рубрики",value:"all"}],rubricValue:this.currentRubric}},watch:{currentRubric:function(){this.rubricValue=this.currentRubric},date:function(){this.$emit("invalidData",this.invalidDate)}},mounted:function(){var e=this.rubrics.slice().sort(function(e,t){return e.name.localeCompare(t.name,"ru")});this.rubricsList=[].concat(Object(a.a)(this.rubricsList),Object(a.a)(e))},methods:{onChooseRubric:function(e){this.rubricValue=e.target.value}}},h=r(644),d=r(3);var p=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style["archive-filter"]},[r("form",{class:t.$style.form,attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[r("jtn-ui-typography",{class:[t.$style[t.openedFilter?"opened":""],t.$style["open-btn"]],attrs:{tag:"a",type:"font-vijet-title"},on:{click:function(e){return e.preventDefault(),t.toggleFilter(e)}}},[t._v(" Уточнить запрос "),r("jtn-ui-svg-icon",{class:t.$style.icon,attrs:{type:"arrow",width:12,height:7,stroke:"#8D96A1","stroke-width":2}})],1),r("div",{class:[t.$style[t.openedFilter?"opened":""],t.$style.filter]},["archive"===t.pageType?r("jtn-ui-select",{class:[t.$style["filter-item"],t.$style["form-select"]],attrs:{selected:t.rubricValue,options:t.rubricsList},on:{change:t.onChooseRubric}}):t._e(),r("jtn-ui-date-range",{class:[t.$style["filter-item"],t.$style["date-range"]],attrs:{"min-date":t.date.min,"max-date":t.date.max,"placeholder-from":"Период c","placeholder-to":"до"},on:{change:t.onPublishDate,invalidDate:t.onInvalidDate}}),r("jtn-ui-default-btn",{ref:"submitButton",class:t.$style["submit-btn"],attrs:{type:"submit",text:"Применить"}})],1)],1)])},[],!1,function(e){this.$style=h.default.locals||h.default},null,null);t.a=p.exports},730:function(e,t,r){e.exports={"news-archive-page":"GJdf",notice:"GJdh",wrap:"GJdj",title:"GJn",pagination:"GJdl"}}}]);
//# sourceMappingURL=archive-page.c474fd6.js.map