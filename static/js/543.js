(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[543],{8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},43214:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_page_action_other_obj={follow:{name:"follow",title:"Follow",info:""},save:{name:"save",title:"Save",info:""},share:{name:"share",title:"Share",info:""},block:{name:"block",title:"Block Page",info:""},support_report:{name:"support_report",title:"Find support or report page",info:""}}},84962:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomPageType=function(){return(0,n.getRandomFromArr)(["supermarket","Just for fun","Community","School/university"])};var n=r(61426)},96721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var n=r(8951);t.default_fb_group_joined_action_arr=function(){return[[n.data_fb_group_action_joined_obj.notice,n.data_fb_group_action_joined_obj.unfollow],[n.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var n=r(8951);t.default_fb_group_other_action_arr=function(){return[[n.data_fb_group_action_other_obj.your_content,n.data_fb_group_action_other_obj.pin,n.data_fb_group_action_other_obj.share,n.data_fb_group_action_other_obj.report]]}},12402:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_notice_arr=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),o=r(69565),u=r(58822),l=r(7605),i=function(){return n({id:(0,o.getRandomId)()},(0,u.getRandomUser)(),(0,u.getRandomGroup)(),{type:"posted",has_seen:(0,a.getRandomBool)(),created_time:(new Date).toString()})};t.default_fb_group_notice_arr=function(){return(0,l.getDefaultArr)(i,4,10)}},31004:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_post_group_arr=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(7605),o=r(81524),u=r(61426),l=function(){var e=(0,u.getRandomFromArr)([{name:"suggested_public",title_at_head:"Suggested for you from a public group"},{name:"joined",title_at_head:""}]),t=(0,o.default_post_obj)({post_where:"group"});return n({},t,{group_obj:n({},t.group_obj,{type:e.name,title_at_head:e.title_at_head})})};t.default_post_group_arr=function(){return(0,a.getDefaultArr)(l,8,10)}},92693:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_other_action_arr=void 0;var n=r(43214);t.default_fb_page_other_action_arr=function(){return[[n.data_fb_page_action_other_obj.follow,n.data_fb_page_action_other_obj.save,n.data_fb_page_action_other_obj.share,n.data_fb_page_action_other_obj.block,n.data_fb_page_action_other_obj.support_report]]}},9022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_GroupActions_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,l=t.type,i=void 0===l?"":l,c=t.params,s=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_GroupActions_L)(o({group_model:a,type:i},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return a.apply(this,arguments)}),r(26386))},28872:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupNotice_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_GroupNotice_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.c_count,a=void 0===n?0:n,l=t.params,i=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_GroupNotice_L)(o({page:1,size:20,c_count:a},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return a.apply(this,arguments)}),r(31578))},38834:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PostGroup_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_PostGroup_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.c_count,a=void 0===n?0:n,l=t.params,i=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_PostGroup_L)(o({page:1,size:20,c_count:a,post_where:"group"},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return a.apply(this,arguments)}),r(49466))},80551:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PageActions_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(t.handle_API_PageActions_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.page_id,a=void 0===n?0:n,l=t.type,i=void 0===l?"":l,c=t.params,s=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_PageActions_L)(o({page_model:a,type:i},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(e){return a.apply(this,arguments)}),r(96620))},74638:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.useCardsRowCenter=function(e){var t,r,c=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:h&&h(),o.IS_MOBILE||(w(),y.current=b.current?m():null,P());case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(){return r.apply(this,arguments)}),s=e.count_item_center,d=void 0===s?1:s,_=e.handle_API_L,f=void 0===_?function(){return new Promise}:_,p=e.getItemElm,m=void 0===p?function(){return u.initial_div_elm}:p,v=e.handleFetched,h=void 0===v?function(){}:v,g=(0,i.useScrollToXCenter)({count_item_center:d}),b=g.ref_scroll_elm,y=g.ref_first_item,P=g.changeItemSideWidth,w=g.hasNextPrev,x=(0,l.useDataShowMore)({handle_API_L:f}),j=x.getData_API;return(0,a.useEffect)((function(){c()}),[]),n({},g,x)};var a=r(67294),o=r(55852),u=r(96627),l=r(84353),i=r(47827)},47827:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollToXCenter=function(e){var t=e.count_item_center,r=void 0===t?1:t,u=(0,n.useRef)(null),l=(0,n.useRef)(null),i=(0,n.useRef)(0),c=(0,n.useRef)(null),s=(0,n.useRef)(null),d=(0,o.useScrollToX)({ref_scroll_elm:u,custom_scroll_x:!0,getCustomScrollX:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!f&&e||!_&&!e?c.current*r-i.current:c.current*r}}),_=d.is_has_next,f=d.is_has_prev,p=d.handleNext,m=d.handlePrev,v=d.hasNextPrev;function h(){(0,a.waitingToDoLast)({ref_interval:s,callback:function(){c.current=l.current.getBoundingClientRect().width,i.current=(u.current.clientWidth-c.current*r)/2}})}return(0,n.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]),{ref_scroll_elm:u,ref_first_item:l,is_has_next:_,is_has_prev:f,changeItemSideWidth:h,handleNext:p,handlePrev:m,hasNextPrev:v}};var n=r(67294),a=r(15138),o=r(42789)},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},n.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:r,strokeWidth:"15"}),n.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),n.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}u.propTypes={size_icon:a.default.string,stroke:a.default.string},u.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=u},72862:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_fb_group_notice_obj=void 0;var n=r(86449);t.initial_fb_group_notice_obj=function(){return{id:0,user:(0,n.initial_user)(),group_obj:{id:0,name:"",picture:""},notice_type:"",has_seen:!1,created_time:(new Date).toString()}}},26386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(76488),l=r(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)("other"==e.type?(0,u.default_fb_group_other_action_arr)():"joined"==e.type?(0,l.default_fb_group_joined_action_arr)():null,(function(){return(0,a.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},31578:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupNotice_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(12402);t.API_GroupNotice_L=function(e){return(0,o.API_FakeReal)((0,u.default_fb_group_notice_arr)(),(function(){return(0,a.default)({url:"api/facebook/group-notice-l/",method:"GET",params:e})}),e,!0)}},49466:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PostGroup_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(31004);t.API_PostGroup_L=function(e){return(0,o.API_FakeReal)((0,u.default_post_group_arr)(),(function(){return(0,a.default)({url:"api/facebook/post-l/",method:"GET",params:e})}),e)}},96620:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PageActions_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),u=r(92693);t.API_PageActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)((0,u.default_fb_page_other_action_arr)(),(function(){return(0,a.default)({url:"api/facebook/page-other-action-l",method:"GET",params:e})}))}},26651:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(9022)),o=u(r(63313));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t,r,u=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.handle_API_GroupActions_L)({group_id:l,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(){return r.apply(this,arguments)}),l=e.group_id,i=e.class_action_contain,c=e.is_at_body,s=e.handleAction;return n.default.createElement(o.default,{is_at_body:c,class_action_contain:i,handle_API_L:u,handleAction:s})}l.propTypes={},t.default=l},94856:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(80551)),o=u(r(10153));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t,r,u=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.handle_API_PageActions_L)({page_id:l,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(){return r.apply(this,arguments)}),l=e.page_id,i=e.class_action_contain,c=e.is_at_body,s=e.handleAction;return n.default.createElement(o.default,{class_main:"BtnPageOther",class_btn:"BtnPageOther_btn",is_at_body:c,class_action_contain:i,handle_API_L:u,handleAction:s})}l.propTypes={},t.default=l},65102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(67294)),o=(l(r(45697)),l(r(79368))),u=l(r(44257));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,n=e.Icon,o=e.handleAction;return a.default.createElement(u.default,{className:"BtnGroupJoin "+t,title:r,Icon:n,handleClick:function(){o("join")}})}i.propTypes=n({},u.default.propTypes),i.defaultProps={className:"bg-ccc",title:"Join Group",Icon:a.default.createElement(o.default,null)},t.default=i},63313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(10153)));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.class_action_contain,r=e.is_at_body,o=e.handle_API_L,u=e.handleAction;return n.default.createElement(a.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:r,handle_API_L:o,handleAction:u})}u.propTypes={},t.default=u},23633:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=(c(r(45697)),c(r(25488))),o=c(r(32682)),u=c(r(183)),l=c(r(79738)),i=c(r(27688));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.action_name,r=e.use_title,c=e.use_icon,s=e.page_id,d=e.has_liked,_=e.has_followed,f=e.handleAction;return"like"==t?n.default.createElement(a.default,{use_title:r,use_icon:c,has_liked:d,handleAction:f}):"follow"==t?n.default.createElement(o.default,{use_title:r,use_icon:c,has_followed:_,handleAction:f}):"chat"==t?n.default.createElement(u.default,{page_id:s,use_title:r,use_icon:c}):"contact"==t?n.default.createElement(l.default,{use_title:r,use_icon:c,handleAction:f}):"learn_more"==t?n.default.createElement(i.default,{use_title:r,use_icon:c,handleAction:f}):null}s.propTypes={},t.default=s},183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=c(a),u=(c(r(45697)),r(15130)),l=c(r(48454)),i=c(r(44257));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.page_id,r=e.className,n=e.Icon,l=e.title,c=e.use_title,s=e.use_icon,d=(0,a.useContext)(u.context_api).openRoomChat;return o.default.createElement(i.default,{className:"BtnPageChat "+r,Icon:n,title:l,use_title:c,use_icon:s,handleClick:function(){d(t)}})}s.propTypes=n({},i.default.propTypes),s.defaultProps={Icon:o.default.createElement(l.default,{x:200,y:200}),title:"Message",className:"bg-ccc"},t.default=s},79738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(44257)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.className,r=e.Icon,n=e.title,u=e.use_title,l=e.use_icon,i=e.handleAction;return a.default.createElement(o.default,{className:"BtnPageContact "+t,Icon:r,title:n,use_title:u,use_icon:l,handleClick:function(){i("contact")}})}l.propTypes=n({},o.default.propTypes),l.defaultProps={Icon:null,title:"Contact",className:"bg-ccc"},t.default=l},32682:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(67294)),o=(l(r(45697)),l(r(96770))),u=l(r(44257));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.classNameActive,n=e.Icon,o=e.title,l=e.use_title,i=e.use_icon,c=e.has_followed,s=e.handleAction;return a.default.createElement(u.default,{className:"BtnPageFollow "+(c?r:t),Icon:n,title:o,use_title:l,use_icon:i,handleClick:function(){s("follow")}})}i.propTypes=n({},u.default.propTypes),i.defaultProps={Icon:a.default.createElement(o.default,null),title:"Follow",className:"bg-ccc",classNameActive:"BtnPageFollow-active bg-fb-active text-blue"},t.default=i},27688:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(44257)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.className,r=e.Icon,n=e.title,u=e.use_title,l=e.use_icon,i=e.handleAction;return a.default.createElement(o.default,{className:"BtnPageLearnMore "+t,Icon:r,title:n,use_title:u,use_icon:l,handleClick:function(){i("learn_more")}})}l.propTypes=n({},o.default.propTypes),l.defaultProps={Icon:null,title:"Learn more",className:"bg-ccc"},t.default=l},25488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r(67294)),o=(l(r(45697)),l(r(6153))),u=l(r(44257));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.classNameActive,n=e.Icon,o=e.title,l=e.use_title,i=e.use_icon,c=e.has_liked,s=e.handleAction;return a.default.createElement(u.default,{className:"BtnPageLike "+(c?r:t),Icon:n,title:o,use_title:l,use_icon:i,handleClick:function(){s("like")}})}i.propTypes=n({},u.default.propTypes),i.defaultProps={Icon:a.default.createElement(o.default,{fill:"currentColor",stroke:"currentColor"}),title:"Like",className:"bg-ccc",classNameActive:"bg-fb-active text-blue"},t.default=i},68034:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(74638)),o=u(r(40171));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ItemComponent,r=e.item_props,u=e.has_blur_side,l=e.handle_API_L,i=e.handleFetched,c=(0,a.useCardsRowCenter)({handle_API_L:l,getItemElm:function(){return s.current.getElementsByTagName("li")[0]},handleFetched:i}),s=c.ref_scroll_elm,d=c.is_has_next,_=c.is_has_prev,f=c.data_state,p=c.handleNext,m=c.handlePrev;return n.default.createElement(o.default,{ItemComponent:t,item_props:r,ref_scroll_elm:s,data_arr:f.data_arr,has_blur_side:u,is_has_next:d,is_has_prev:_,handleNext:p,handlePrev:m})}l.propTypes={},t.default=l},40171:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),r(55852)),u=i(r(17852)),l=i(r(61498));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.ItemComponent,r=e.item_props,i=e.ref_scroll_elm,c=e.data_arr,s=e.has_blur_side,d=void 0===s?!o.IS_MOBILE:s,_=e.is_has_next,f=e.is_has_prev,p=e.handleNext,m=e.handlePrev;return a.default.createElement("div",{className:"CardsRowCenterContain pos-rel"},a.default.createElement("div",{ref:i,className:"CardsRowCenterContain_contain wh-100 overflow-x-auto scroll-height-0"},a.default.createElement("ul",{className:"display-flex list-none"},c.map((function(e,o){return a.default.createElement("li",{key:e.id,className:"CardsRowCenterContain_item flex-shrink-0"},a.default.createElement(u.default,{ref_root:i},a.default.createElement(t,n({item:e,ix:o},r))))})))),d?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"CardsRowCenterContain_side left-0 "+(_?"":"CardsRowCenterContain_side-left-only")+" "+(f?"":"CardsRowCenterContain_side-left-none"),onClick:m}),a.default.createElement("div",{className:"CardsRowCenterContain_side right-0 "+(f?"":"CardsRowCenterContain_side-right-only")+" "+(_?"":"CardsRowCenterContain_side-right-none"),onClick:p})):null,o.IS_MOBILE?null:a.default.createElement("div",{className:"text-secondary"},a.default.createElement(l.default,{is_btn_circle:!0,is_has_next:_,is_has_prev:f,handleNext:p,handlePrev:m})))}r(75441),c.propTypes={},t.default=c},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697)),o=l(r(88303)),u=l(r(14767));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.pic_arr,r=e.has_more,a=e.ItemComponent,u=e.clickMore;return n.default.createElement("div",{className:"flex-end row-reverse"},r&&n.default.createElement("div",{className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},n.default.createElement(a,{picture:t[0].picture}),n.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:u},n.default.createElement(o.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return n.default.createElement("div",{key:t,className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img"},n.default.createElement(a,{picture:e.picture})))})))}r(89666),i.propTypes={pic_arr:a.default.array,has_more:a.default.bool,ItemComponent:a.default.func,clickMore:a.default.func},i.defaultProps={ItemComponent:u.default},t.default=i},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture;return n.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}a(r(45697)),o.propTypes={},t.default=o},49188:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=i(r(67294)),o=(i(r(45697)),r(24841)),u=i(r(68034)),l=i(r(81335));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.params_api,r=e.has_blur_side,i=e.BtnElm,c=e.handleFetched;return a.default.createElement("div",{className:"GroupRowCardsCenter pos-rel"},a.default.createElement(u.default,{ItemComponent:l.default,item_props:{BtnElm:i,removeGroupCard:function(e){console.log(e)}},has_blur_side:r,handle_API_L:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,o.handle_API_FbGroupSuggested_L)({c_count:e,params:n({size:5},t)})},handleFetched:c}))}r(76341),c.propTypes={},t.default=c},84002:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(93191)),o=u(r(45915));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.item,r=t.id,u=t.user,l=t.group_obj,i=(t.notice_type,t.has_seen),c=t.created_time;return n.default.createElement(a.Link,{className:"GroupNoticeItem display-block padding-8px brs-6px hv-bg-fb "+(i?"text-secondary":"color-inherit"),to:"/group/"+l.id+"?post="+r},n.default.createElement("div",{className:"display-flex align-items-center"},n.default.createElement("img",{className:"flex-shrink-0 brs-50 border-blur object-fit-cover",src:u.picture,alt:"",width:"60",height:"60"}),n.default.createElement("div",{className:"flex-grow-1 overflow-hidden margin-left-12px"},n.default.createElement("div",{className:"text-nowrap"},n.default.createElement("span",{className:"font-600"},u.first_name," ",u.last_name),n.default.createElement("span",null," posted in "),n.default.createElement("span",{className:"font-600"},l.name)),n.default.createElement("div",{className:"line-16px font-13px "+(i?"":"text-blue")},n.default.createElement("span",null,n.default.createElement("span",{className:"inline-block padding-4px brs-50 "+(i?"bg-ccc":"bg-current")}),n.default.createElement("span",{className:"margin-left-5px"},(0,o.default)(new Date-new Date(c),"1min")," ","ago"))))))}r(76293),l.propTypes={},t.default=l},12700:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(84002)));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.title,r=e.notice_arr;return 0==r.length?null:n.default.createElement("div",{className:"GroupNoticeList padding-y-20px brs-8px-pc bg-primary box-shadow-1"},n.default.createElement("h2",{className:"GroupNoticeList_title margin-bottom-5px padding-x-16px font-600 font-20px"},t),n.default.createElement("div",{className:"GroupNoticeList_contain padding-x-8px"},r.map((function(e,t){return n.default.createElement("div",{key:e.id},n.default.createElement(a.default,{item:e}))}))))}r(2650),u.propTypes={},t.default=u},84734:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=s(n),o=(s(r(45697)),r(38834)),u=r(2804),l=s(r(70898)),i=s(r(37838)),c=s(r(48375));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=(0,n.useRef)(null),r=(0,u.useObserverShowMore)({initial_data_arr:[],handle_API_L:function(e){return(0,o.handle_API_PostGroup_L)({c_count:e,params:{}})}}),s=r.data_state,d=(r.setDataState,r.is_max),_=(r.data_count,r.getData_API),f=r.observerShowMore,p=s.data_arr,m=s.is_fetching,v=s.has_fetched;return(0,n.useEffect)((function(){_(),f({fake_elm_end:t.current,rootMargin:"0px 0px 500px 0px",way_scroll:"to_bottom",margin:500})}),[]),a.default.createElement("div",{className:"GroupFeedCenter"},a.default.createElement("div",null,a.default.createElement(c.default,null)),a.default.createElement("h2",{className:"GroupFeedCenter_title padding-y-12px font-600 font-15px text-555"},"More from groups"),a.default.createElement("div",null,a.default.createElement(l.default,{posts:p,has_fetched:v,is_fetching:m,open_input_id_arr:[],interleaved_elm_arr:[{elm:a.default.createElement(i.default,null),interleaved_ix:4}]})),d.current?null:a.default.createElement("div",{className:"h-250px"}),a.default.createElement("div",{ref:t,className:"padding-1px"}))}d.propTypes={},t.default=d},48375:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=l(n),o=(l(r(45697)),r(72862),r(28872)),u=l(r(12700));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,r,l=(t=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.handle_API_GroupNotice_L)({c_count:0,params:{time:"new"}});case 2:t=e.sent,r=t.data,s(r.slice(0,1));case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var u=e[a](o),l=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(l).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(l)}("next")}))},function(){return r.apply(this,arguments)}),i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)([]||0),2),c=i[0],s=i[1];return(0,n.useEffect)((function(){l()}),[]),a.default.createElement("div",{className:"GroupFeedCenterNew"},a.default.createElement(u.default,{title:"New for you",notice_arr:c}))}i.propTypes={},t.default=i},37838:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(93191)),o=l(r(79368)),u=l(r(49188));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return n.default.createElement("div",{className:"GroupFeedCenterSuggested padding-y-16px brs-8px-pc bg-primary box-shadow-1"},n.default.createElement("h2",{className:"margin-bottom-10px padding-x-12px font-17px font-600 text-secondary"},"More group"),n.default.createElement("div",{className:"margin-bottom-16px padding-x-12px"},n.default.createElement(u.default,{params_api:{},BtnElm:n.default.createElement("div",{className:"display-flex-center wh-100 bg-fb-active text-blue"},n.default.createElement(o.default,{size_icon:"18px",fill:"currentColor"}),n.default.createElement("span",{className:"margin-left-5px"},"Join Group"))})),n.default.createElement("div",{className:"display-flex-center"},n.default.createElement(a.Link,{to:"/group/categories?q=suggestion"},"See more group")))}i.propTypes={},t.default=i},75441:(e,t,r)=>{"use strict";r.r(t)},89666:(e,t,r)=>{"use strict";r.r(t)},76341:(e,t,r)=>{"use strict";r.r(t)},76293:(e,t,r)=>{"use strict";r.r(t)},2650:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=543.js.map