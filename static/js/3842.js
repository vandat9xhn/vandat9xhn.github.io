(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3842],{81397:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_search_video_arr=void 0;var r=a(70745),n=a(69565),l=a(8047),i=a(7605),c=function(){return{id:(0,n.getRandomId)(),title:"Video title",img:(0,l.getRandomImg)(),description:(0,r.getRandomContent)().slice(0,100),total_time_str:"5:11",count_view:1e3*(0,n.getRandomNumber)(10,50),page_name:"Page name",page_link:"/watch/page_link",created_time:(new Date).toDateString()}};t.default_fb_search_video_arr=function(){return(0,i.getDefaultArr)(c,16,16)}},86452:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbSearchVideo_L=void 0;var r,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=(t.handle_API_FbSearchVideo_L=(r=regeneratorRuntime.mark((function e(t){var a,r=t.c_count,n=void 0===r?0:r,c=t.params,o=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FbSearchVideo_L)(l({c_count:n,size:16,page:1},o));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=r.apply(this,arguments);return new Promise((function(t,a){return function r(n,l){try{var i=e[n](l),c=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(c).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(c)}("next")}))},function(e){return n.apply(this,arguments)}),a(14938))},4814:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.useObserverMoreSearch=function(e){var t=e.handle_API_L,a=(0,n.useRef)(null),i=(0,l.useObserverShowMore)({handle_API_L:t});return(0,n.useEffect)((function(){i.refreshData_API()}),[location.search]),(0,n.useEffect)((function(){i.observerShowMore({fake_elm_end:a.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),r({ref_fake_elm:a},i)};var n=a(67294),l=a(2804)},81858:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?e.touches?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:0,client_y:0}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=a(55852)},14938:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbSearchVideo_L=void 0;var r,n=(r=a(87421))&&r.__esModule?r:{default:r},l=a(50918),i=a(81397);t.API_FbSearchVideo_L=function(e){return(0,l.API_FakeReal)((0,i.default_fb_search_video_arr)(),(function(){return(0,n.default)({url:"api/facebook/fb-search-video-l/",method:"GET",params:e})}),e)}},61189:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=s(a(67294)),l=(s(a(45697)),a(87898)),i=a(86452),c=a(4814),o=s(a(29448)),u=s(a(59730));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=(0,c.useObserverMoreSearch)({handle_API_L:function(e){return(0,i.handle_API_FbSearchVideo_L)({c_count:e,params:r({},(0,l.ParseLocationSearch)())})}}),a=t.ref_fake_elm,s=t.data_state,d=t.data_count,f=s.data_arr,_=s.has_fetched;return n.default.createElement("div",{className:"FbSearchPageVideo"},n.default.createElement(o.default,{right_elm:n.default.createElement("div",{className:"fb-search-page-right-contain display-flex-center"},n.default.createElement("div",{className:"w-680px"},n.default.createElement("div",null,f.map((function(e,t){return n.default.createElement("div",{key:e.id,className:"fb-search-page-right-item"},n.default.createElement(u.default,{video_obj:e}))}))),n.default.createElement("div",{ref:a,className:"padding-1px"}))),no_result:_&&0==d.current,title:"Videos"}))}a(3492),d.propTypes={},t.default=d},59730:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=a(93191),l=(i(a(45697)),a(36289));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.video_obj,a=t.id,i=t.title,c=t.img,o=t.description,u=t.total_time_str,s=t.count_view,d=t.page_name,f=t.page_link,_=t.created_time;return r.default.createElement("div",{className:"FbSearchPageVideoItem fb-search-page-right-item-contain pos-rel padding-16px brs-8px bg-primary box-shadow-1"},r.default.createElement(n.Link,{className:"FbSearchPageVideoItem_link display-block pos-abs-100 z-index-1 brs-8px-pc cursor-pointer hv-bg-hv",to:"/watch?id="+a}),r.default.createElement("div",{className:"display-flex"},r.default.createElement("div",{className:" margin-right-12px"},r.default.createElement("div",{className:"pos-rel"},r.default.createElement("img",{className:"FbSearchPageVideoItem_thumbnail border-blur brs-8px object-fit-cover",src:c,alt:"",width:"200",height:"112"}),r.default.createElement("div",{className:"FbSearchPageVideoItem_time pos-abs right-0 bottom-0 padding-8px"},r.default.createElement("div",{className:"padding-x-8px padding-y-4px brs-4px bg-shadow-5 line-16px text-white font-13px font-600"},u)))),r.default.createElement("div",{className:"flex-grow-1 space-between"},r.default.createElement("div",null,r.default.createElement("div",{className:"wk-box-vertical line-clamp-2 overflow-hidden line-20px font-600"},i),r.default.createElement("div",{className:"wk-box-vertical line-clamp-2 overflow-hidden font-13px"},o),r.default.createElement("div",{className:"display-flex font-13px text-secondary"},r.default.createElement(n.Link,{className:"color-inherit hv-underline",to:""+f},r.default.createElement("div",{className:"pos-rel z-index-1"},d))),r.default.createElement("div",{className:"font-13px text-secondary"},r.default.createElement("span",null,_)," · ",r.default.createElement("span",null,(0,l.UnitNumber)(s)," view",s>=2?"s":""))),r.default.createElement("div",null))))}i(a(68188)),a(96718),c.propTypes={},t.default=c},3492:(e,t,a)=>{"use strict";a.r(t)},96718:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3842.js.map