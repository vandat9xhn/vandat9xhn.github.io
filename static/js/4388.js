(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[4388],{35227:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_media_album_arr=void 0;var r=a(39727),n=a(70745),u=a(69565),o=a(8047),l=a(7605),i=function(){var e=(0,u.getRandomId)();return{id:e,title:(0,n.getRandomContent)().slice(0,(0,u.getRandomNumber)(20,50)),img:(0,o.getRandomVidPic)(),link_to:"/post/album/"+e,photo_count:(0,u.getRandomNumber)(1,3),video_count:(0,r.getRandomBool)()?(0,u.getRandomNumber)(0,3):0}};t.default_fb_group_page_media_album_arr=function(){return(0,l.getDefaultArr)(i,15,15)}},74936:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupMediaAlbum_L=void 0;var r,n,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=(t.handle_API_FbGroupMediaAlbum_L=(r=regeneratorRuntime.mark((function e(t){var a,r=t.c_count,n=void 0===r?0:r,l=t.group_id,i=void 0===l?0:l,d=t.params,c=void 0===d?{}:d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_FbGroupMediaAlbum_L)(u({page:1,size:20,c_count:n,group_model:i},c));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=r.apply(this,arguments);return new Promise((function(t,a){return function r(n,u){try{var o=e[n](u),l=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(l).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(l)}("next")}))},function(e){return n.apply(this,arguments)}),a(21082))},21082:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbGroupMediaAlbum_L=void 0;var r,n=(r=a(87421))&&r.__esModule?r:{default:r},u=a(50918),o=a(35227);t.API_FbGroupMediaAlbum_L=function(e){return(0,u.API_FakeReal)((0,o.default_fb_group_page_media_album_arr)(),(function(){return(0,n.default)({url:"api/facebook/group-media-album-l/",method:"GET",params:e})}),e)}},81499:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),a(93191));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.img,a=e.link_to,u=e.children;return r.default.createElement(n.Link,{className:"GPMediaPicsItem display-block h-100per brs-8px color-inherit hv-after-shadow-05",to:a},r.default.createElement("div",{className:"padding-top-100per pos-rel"},r.default.createElement("img",{className:"pos-abs-100 brs-8px border-blur object-fit-cover",src:t,alt:""})),r.default.createElement("div",{className:"GPMediaPicsItem_title"},u))}a(44647),o.propTypes={},t.default=o},94388:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=i(r),u=(i(a(45697)),a(74936)),o=a(2804),l=i(a(81499));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.group_id,a=(0,r.useRef)(null),i=(0,o.useObserverShowMore)({handle_API_L:function(e){return(0,u.handle_API_FbGroupMediaAlbum_L)({c_count:e,group_id:t})}}),d=i.data_state,c=i.is_max,s=i.getData_API,_=i.observerShowMore,m=d.data_arr;return d.has_fetched,(0,r.useEffect)((function(){s(),_({fake_elm_end:a.current,rootMargin:"0px",way_scroll:"to_bottom",margin:0})}),[]),n.default.createElement("div",{className:"GPMediaAlbums"},n.default.createElement("ul",{className:"display-flex flex-wrap list-none"},m.map((function(e,t){return n.default.createElement("li",{key:e.id,className:"GPMediaAlbums_item gr-page-media-item"},n.default.createElement(l.default,{img:e.img,link_to:e.link_to},n.default.createElement("div",{className:"GPMediaAlbums_item_title padding-5px"},n.default.createElement("div",{className:"line-20px font-600"},e.title),n.default.createElement("div",{className:"font-13px line-16px text-secondary"},e.video_count?e.video_count+" video"+(e.video_count>=2?"s":""):null,e.video_count&&e.photo_count?" · ":null,e.photo_count?e.photo_count+" photo"+(e.photo_count>=2?"s":""):null))))}))),n.default.createElement("div",{ref:a,className:"h-1px"}),c.current?null:n.default.createElement("div",{className:"h-250px"}))}a(62401),d.propTypes={},t.default=d},44647:(e,t,a)=>{"use strict";a.r(t)},62401:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=4388.js.map