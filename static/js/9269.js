(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9269,876],{35640:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollDown=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.useScrollDownWindow=function(e){var t=e.initial_data_arr,n=void 0===t?[]:t,r=e.handle_API_L,l=void 0===r?function(){return new Promise}:r,u=e.thresh_hold,c=o({initial_data_arr:n,handle_API_L:l,thresh_hold:void 0===u?.7:u}),i=c.data_state,d=c.setDataState,s=c.handleScroll,f=c.getData_API_at_first,_=c.resetStopScrollDown;return(0,a.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),{data_state:i,setDataState:d,getData_API_at_first:f,resetStopScrollDown:_}};var a=n(67294),l=n(50918),u=n(35155),c=n(85449);function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.useScrollDown=function(e){var t,n,o=(t=regeneratorRuntime.mark((function e(){var t,n,a,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E((function(e){return r({},e,{is_fetching:!0},l)})),e.next=4,_(S.current);case 4:t=e.sent,n=t.data,a=t.count,P&&E((function(e){var t=e.has_fetched,r=e.data_arr,l=e.count;return S.current+=n.length,N.current=t?l<=r.length+a:a<=n.length,{data_arr:t?[].concat(i(r),i(n)):n,count:t?l:a,is_fetching:!1,has_fetched:!0}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,b.current=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[0,10,13,16]])})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,l){try{var u=e[a](l),c=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(c).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(c)}("next")}))},function(){return n.apply(this,arguments)}),d=e.initial_data_arr,s=void 0===d?[]:d,f=e.handle_API_L,_=void 0===f?function(){return new Promise}:f,m=e.thresh_hold,v=void 0===m?.7:m,h=e.elm,p=void 0===h?window:h,w=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({data_arr:s,count:0,is_fetching:!1,has_fetched:!1}),2),y=w[0],E=w[1],g=(0,a.useRef)(0),N=(0,a.useRef)(!1),b=(0,a.useRef)(!0),S=(0,a.useRef)(0),P=(0,u.useMounted)();return{data_state:y,setDataState:E,handleScroll:function(){0!=S.current&&(document.getElementsByTagName("body")[0].dataset.countHidden||(p==window?(0,c.WindowScrollDownBool)(g.current,b.current,!l.is_api_fake&&N.current,v):(0,c.ScrollDownBool)(p,g.current,b.current,!l.is_api_fake&&N.current,v))&&(g.current=p==window?window.pageYOffset:p.scrollTop,b.current=!0,o()))},getData_API_at_first:function(){o({data_arr:[],count:0,has_fetched:!1})},resetStopScrollDown:function(){g.current=0,S.current=0}}}},85449:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollDownBool=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.7;return!(e.scrollTop<=t||n||r||e.scrollTop<=a*(e.scrollHeight-e.clientHeight))},t.WindowScrollDownBool=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9;return!(e>=window.pageYOffset||t||n||window.pageYOffset<r*(document.body.offsetHeight-window.innerHeight))}},51161:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_posts=[{id:0,user:{id:0,picture:"",first_name:"",last_name:"",is_online:!1},content_obj:{content_more:"",has_more_content:!1,content:""},vid_pics:[{id:0,likes:[],arr_unique_like:[],count_like:0,vid_pic:"",content_obj:{content_more:"",has_more_content:!1,content:""},comments:[],count_comment:0,histories:[],created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}],count_vid_pic:0,likes:[],count_like:0,user_type_like:-1,shares:[],count_share:0,count_unique_share:0,count_user_shared:0,comments:[],count_comment:0,histories:[],count_history:0,permission_post:0,created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}]},40374:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=i(r),l=i(n(45697)),u=i(n(37279)),c=i(n(37930));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.value,n=e.placeholder,l=e.handleChange,i=e.handleSearch,o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),d=o[0],s=o[1];return a.default.createElement("div",{className:"SearchAnimateDiv position-rel "+(d?"":"SearchAnimateDiv_close")},a.default.createElement("div",{className:"SearchAnimateDiv_key"},a.default.createElement("div",{className:"SearchAnimateDiv_key-contain display-flex justify-content-center align-items-center cursor-pointer "+(d?"nav-active":""),onClick:function(){d?i():s(!0)}},a.default.createElement(u.default,{y:200}))),a.default.createElement("div",{className:"SearchAnimateDiv_input"},a.default.createElement("input",{type:"text",value:t,placeholder:n,onChange:function(e){l(e.target.value)},onKeyDown:function(e){13==e.keyCode&&(e.preventDefault(),i())}}),a.default.createElement("div",{className:"SearchAnimateDiv_input-clear",onClick:function(){l("")}},a.default.createElement(c.default,{y:400,size_icon:"0.8rem"}))),a.default.createElement("div",{className:"SearchAnimateDiv_right"},a.default.createElement("div",{className:"SearchAnimateDiv_icon-close display-flex justify-content-center align-items-center"},a.default.createElement("div",{className:"close-icon-small brs-50 cursor-pointer",onClick:function(){s(!1)}},a.default.createElement(c.default,{y:400,size_icon:"1rem"})))))}n(89497),o.propTypes={value:l.default.string,handleChange:l.default.func,handleSearch:l.default.func,placeholder:l.default.string},o.defaultProps={value:"",placeholder:"Search..."},t.default=o},89473:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.common_left_head_link_arr=void 0;var r=u(n(67294)),a=u(n(39475)),l=u(n(4299));function u(e){return e&&e.__esModule?e:{default:e}}t.common_left_head_link_arr=[{name:"friends",count_new:0,title_new:"",title:"Friends",Icon:r.default.createElement(a.default,{x:400}),link_to:"/add-friend-add"},{name:"groups",count_new:0,title_new:"",title:"Groups",Icon:r.default.createElement(l.default,null),link_to:"#"},{name:"marketplace",count_new:0,title_new:"",title:"MarketPlace",Icon:r.default.createElement(l.default,null),link_to:"#"},{name:"watch",count_new:0,title_new:"",title:"Watch",Icon:r.default.createElement(l.default,null),link_to:"#"},{name:"event",count_new:0,title_new:"",title:"Event",Icon:r.default.createElement(l.default,null),link_to:"#"},{name:"weather",count_new:0,title_new:"",title:"Weather",Icon:r.default.createElement(l.default,null),link_to:"#"}]},21810:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_NewFeedContact_L=t.handle_API_NewFeedPost_L=void 0;var r,a,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=(t.handle_API_NewFeedPost_L=(r=o(regeneratorRuntime.mark((function e(t){var n,r=t.c_count,a=void 0===r?0:r,u=t.params,o=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.API_Post_L)(l({},i.params_new_feed_post_l,{c_count:a},o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)}),t.handle_API_NewFeedContact_L=(a=o(regeneratorRuntime.mark((function e(t){var n,r=t.c_count,a=void 0===r?0:r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_Friends_LC)("GET",l({},i.params_new_feed_contact_l,{c_count:a}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),n(79427)),c=n(81042),i=n(77820);function o(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,l){try{var u=t[a](l),c=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(c).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(c)}("next")}))}}},77820:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_new_feed_post_l={page:1,size:6,is_profile:0},t.params_new_feed_contact_l={page:1,size:6}},97011:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=f(r),l=(f(n(45697)),n(35640)),u=n(51161),c=f(n(14122)),i=n(21810);n(13090);var o=f(n(46860)),d=f(n(63701)),s=f(n(42942));function f(e){return e&&e.__esModule?e:{default:e}}function _(){var e=(0,r.useRef)({}),t=(0,l.useScrollDownWindow)({initial_data_arr:u.initial_posts,handle_API_L:function(t){return(0,i.handle_API_NewFeedPost_L)({c_count:t,params:e.current})}}),n=t.data_state,f=t.getData_API_at_first,_=n.data_arr,m=n.is_fetching,v=n.has_fetched;return(0,r.useEffect)((function(){document.title="New Feed",f()}),[]),a.default.createElement("div",{className:"NewFeed"},a.default.createElement("div",{className:"NewFeed_contain bg-fb"},a.default.createElement("div",{className:"NewFeed_search"},a.default.createElement(o.default,{handleSearch:function(t){e.current={search:t},f()}})),a.default.createElement("div",{className:"NewFeed_row display-flex space-between"},a.default.createElement("div",{className:"NewFeed_col-left"},a.default.createElement(s.default,null)),a.default.createElement("div",{className:"NewFeed_col-center"},a.default.createElement("div",null,a.default.createElement(c.default,{posts:v?_:[],has_fetched:v,is_fetching:m}))),a.default.createElement("div",{className:"NewFeed_col-right"},a.default.createElement(d.default,null)))))}n(7663),n(30747),_.propTypes={},t.default=_},42942:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=(l(n(45697)),l(n(94710)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement(a.default,null)))}u.propTypes={},t.default=u},94710:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=d(r),l=n(93191),u=(d(n(45697)),n(15130)),c=d(n(48474)),i=d(n(8119)),o=n(89473);function d(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=(0,r.useContext)(u.context_api).user;return a.default.createElement("div",{className:"NewFeedLeftHead scroll-thin"},a.default.createElement("div",null,a.default.createElement("div",{className:"NewFeed_side_item"},a.default.createElement(i.default,{user:t,align_center:!1})),o.common_left_head_link_arr.map((function(e,t){return a.default.createElement("div",{className:"NewFeed_side_item",key:"NewFeedLeftHead_item_"+t},a.default.createElement(l.Link,{to:e.link_to,className:"normal-text hv-cl-blue w-100per"},a.default.createElement(c.default,{ComponentLeft:e.Icon,ComponentRight:a.default.createElement("div",null,a.default.createElement("div",{className:"text-secondary label-field"},e.title),a.default.createElement("div",{className:"font-12px text-blue "+(e.count_new?"":"display-none")},"* ",e.count_new," ",e.title_new)),align_center:!1})))}))))}n(67157),s.propTypes={},t.default=s},63701:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=(u(n(45697)),u(n(7318))),l=u(n(89589));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement(a.default,null)),r.default.createElement("div",null,r.default.createElement(l.default,null)))}c.propTypes={},t.default=c},7318:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=s(r),l=(s(n(45697)),n(15130)),u=n(35640),c=s(n(37824)),i=s(n(98989)),o=s(n(44314)),d=n(21810);function s(e){return e&&e.__esModule?e:{default:e}}function f(){var e=(0,r.useContext)(l.context_api).openMessage,t=(0,r.useRef)(null),n=(0,u.useScrollDown)({handle_API_L:function(e){return(0,d.handle_API_NewFeedContact_L)({c_count:e})},thresh_hold:.8,elm:t.current}),s=n.data_state,f=n.getData_API_at_first,_=n.handleScroll,m=s.data_arr,v=s.has_fetched,h=s.is_fetching;return(0,r.useEffect)((function(){(0,c.default)(t.current,f,0)}),[]),a.default.createElement("div",{ref:t,className:"NewFeedContact scroll-thin",onScroll:_},a.default.createElement("div",null,a.default.createElement("h3",{className:"text-secondary"},"Contacts")),a.default.createElement("div",{className:v?"":"pointer-events-none"},a.default.createElement("div",null,(v?m:[{friend:{}}]).map((function(t,n){return a.default.createElement("div",{key:"NewFeedContact_item_"+(t.id||n),className:"NewFeedContact_item NewFeed_side_item"},a.default.createElement(o.default,{user:t.friend,handleClick:function(){return e(t.friend.id)}}))})))),a.default.createElement("div",{className:"display-flex-center"},a.default.createElement(i.default,{is_fetching:h})))}n(30594),f.propTypes={},t.default=f},89589:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=(u(n(45697)),u(n(37930))),l=u(n(57108));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return r.default.createElement("div",{className:"NewFeedGroupConversation"},r.default.createElement("div",null,r.default.createElement("h3",{className:"text-secondary"},"Group conversation")),r.default.createElement("div",null,r.default.createElement("div",{className:"NewFeed_side_item"},r.default.createElement(l.default,{Icon:a.default,y:400,size_icon:"1rem"},"Create New Group"))))}n(51533),c.propTypes={},t.default=c},46860:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=c(r),l=c(n(45697)),u=c(n(40374));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.handleSearch,n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),l=n[0],c=n[1];return a.default.createElement("div",{className:"NewFeedSearch"},a.default.createElement("div",null,a.default.createElement(u.default,{value:l,placeholder:"Search...",handleChange:function(e){c(e)},handleSearch:function(){t(l)}})))}n(95589),i.propTypes={handleSearch:l.default.func},t.default=i},89497:(e,t,n)=>{"use strict";n.r(t)},7663:(e,t,n)=>{"use strict";n.r(t)},13090:(e,t,n)=>{"use strict";n.r(t)},30747:(e,t,n)=>{"use strict";n.r(t)},67157:(e,t,n)=>{"use strict";n.r(t)},30594:(e,t,n)=>{"use strict";n.r(t)},51533:(e,t,n)=>{"use strict";n.r(t)},95589:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=9269.js.map