(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9474],{67238:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294)),l=n(r(45697));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.fill,l=e.stroke,n=e.stroke_width;return a.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:r,strokeWidth:n,stroke:l,strokeLinecap:"round",strokeLinejoin:"round"},a.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),a.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}r(18639),u.propTypes={fill:l.default.string,size_icon:l.default.string,stroke:l.default.string,stroke_width:l.default.number},u.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=u},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r(67294)),l=s(r(45697)),n=s(r(88303)),u=s(r(14767));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.pic_arr,r=e.has_more,l=e.ItemComponent,u=e.clickMore;return a.default.createElement("div",{className:"flex-end row-reverse"},r&&a.default.createElement("div",{className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},a.default.createElement(l,{picture:t[0].picture}),a.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:u},a.default.createElement(n.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return a.default.createElement("div",{key:t,className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img"},a.default.createElement(l,{picture:e.picture})))})))}r(89666),o.propTypes={pic_arr:l.default.array,has_more:l.default.bool,ItemComponent:l.default.func,clickMore:l.default.func},o.defaultProps={ItemComponent:u.default},t.default=o},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.picture;return a.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}l(r(45697)),n.propTypes={},t.default=n},81419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),l=u(a),n=(u(r(45697)),u(r(91641)));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.children,r=(0,a.useRef)(null);return l.default.createElement("div",{className:"GroupLayout"},l.default.createElement("div",{className:"display-flex"},l.default.createElement("div",{className:"GroupLayout_left flex-shrink-0 left-bar-sticky"},l.default.createElement(n.default,{ref_scroll:r})),l.default.createElement("div",{className:"GroupLayout_right flex-grow-1"},t)))}s.propTypes={},t.default=s},91641:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),l=(o(r(45697)),o(r(34626))),n=o(r(7737)),u=o(r(84155)),s=o(r(60706));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.ref_scroll;return a.default.createElement("div",{className:"GroupLayoutLeft display-flex flex-col h-100per"},a.default.createElement("div",null,a.default.createElement(l.default,null)),a.default.createElement("div",{ref:t,className:"flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"},a.default.createElement("div",null,a.default.createElement(n.default,null)),a.default.createElement("div",null,a.default.createElement(s.default,{ref_scroll:t})),a.default.createElement("div",null,a.default.createElement(u.default,{ref_scroll:t}))))}i.propTypes={},t.default=i},18220:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),l=(u(r(45697)),u(r(81419))),n=u(r(49766));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return a.default.createElement("div",{className:"GroupDiscover"},a.default.createElement(l.default,null,a.default.createElement("div",{className:"GroupDiscover_right padding-top-20px"},a.default.createElement(n.default,null))))}r(77197),s.propTypes={},t.default=s},49766:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),l=(u(r(45697)),u(r(31329))),n=u(r(14319));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return a.default.createElement("div",{className:"GroupDiscoverRight"},a.default.createElement("div",null,a.default.createElement(l.default,{title:"Suggested for you",info:"Groups you might be interested in.",params_api:{type:"suggested"},link_all:"/group/categories?type=suggested"})),a.default.createElement("div",{className:"GroupDiscoverRight_separate"}),a.default.createElement("div",null,a.default.createElement(l.default,{title:"Friend's groups",info:"Groups your friends are in.",params_api:{type:"friend_group"},link_all:"/group/categories?type=friend_group"})),a.default.createElement("div",{className:"GroupDiscoverRight_separate"}),a.default.createElement("div",null,a.default.createElement(n.default,null)))}r(80913),s.propTypes={},t.default=s},14319:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),l=o(a),n=(o(r(45697)),r(24841)),u=r(2804),s=o(r(15121));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,r,o=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:p.current||m({fake_elm_end:c.current,rootMargin:"0px 0px 500px 0px",way_scroll:"to_bottom",margin:500});case 3:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(l,n){try{var u=e[l](n),s=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(s).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(s)}("next")}))},function(){return r.apply(this,arguments)});!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var i=(0,a.useRef)(null),c=(0,a.useRef)(null),d=(0,u.useObserverShowMore)({handle_API_L:function(e){return(0,n.handle_API_FbGroupSuggested_L)({c_count:e,params:{size:5,type:"more_suggestions"}})}}),f=d.data_state,p=d.is_max,m=d.observerShowMore,_=d.getData_API,v=f.data_arr;return f.has_fetched,(0,a.useEffect)((function(){o()}),[]),l.default.createElement("div",{ref:i,className:"GroupDiscoverMoreSuggestions pos-rel"},l.default.createElement("h2",{className:"GroupDiscoverMoreSuggestions_title margin-bottom-16px padding-x-3px font-20px font-700"},"More suggestions"),l.default.createElement("ul",{className:"display-flex flex-wrap list-none"},v.map((function(e,t){return l.default.createElement("li",{key:e.id,className:"GroupDiscoverMoreSuggestions_item w-50per padding-3px flex-shrink-0"},l.default.createElement(s.default,{id:e.id,name:e.name,picture:e.picture,member_count:e.member_count,post_count:e.post_count,post_unit:e.post_unit,friend_arr:e.friend_arr,friend_count:e.friend_count,has_more_friend:e.has_more_friend,BtnElm:l.default.createElement("div",{className:"display-flex-center wh-100 bg-ccc"},"Join Group")}))}))),p.current?null:l.default.createElement("div",{className:"GroupDiscoverMoreSuggestions_not_fetched"}),l.default.createElement("div",{ref:c,className:"padding-1px"}))}r(76567),i.propTypes={},t.default=i},31329:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),l=s(a),n=r(93191),u=(s(r(45697)),s(r(869)));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,r=e.info,s=e.link_all,o=e.params_api,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,l=!1,n=void 0;try{for(var u,s=e[Symbol.iterator]();!(a=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){l=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(l)throw n}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(!1),2),c=i[0],d=i[1];return l.default.createElement("div",{className:"GroupDiscoverRow"},l.default.createElement("div",{className:"GroupDiscoverRow_head margin-bottom-16px"},l.default.createElement("div",{className:"flex-between-center"},l.default.createElement("h2",{className:"GroupDiscoverRow_title font-20px font-700"},t),l.default.createElement(n.Link,{to:s},"See all")),l.default.createElement("div",{className:"GroupDiscoverRow_info text-secondary font-17px"},r)),l.default.createElement("div",{className:c?"":"display-none"},l.default.createElement(u.default,{params_api:o,BtnElm:l.default.createElement("div",{className:"display-flex-center wh-100 bg-ccc"},"Join Group"),handleFetched:function(){d(!0)}})),c?null:l.default.createElement("div",{className:"GroupDiscoverRow_not_fetched"}))}r(67781),o.propTypes={},t.default=o},18639:(e,t,r)=>{"use strict";r.r(t)},89666:(e,t,r)=>{"use strict";r.r(t)},77197:(e,t,r)=>{"use strict";r.r(t)},80913:(e,t,r)=>{"use strict";r.r(t)},76567:(e,t,r)=>{"use strict";r.r(t)},67781:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=9474.js.map