(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2473],{8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},43214:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_page_action_other_obj={follow:{name:"follow",title:"Follow",info:""},save:{name:"save",title:"Save",info:""},share:{name:"share",title:"Share",info:""},block:{name:"block",title:"Block Page",info:""},support_report:{name:"support_report",title:"Find support or report page",info:""}}},84962:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomPageType=function(){return(0,a.getRandomFromArr)(["supermarket","Just for fun","Community","School/university"])};var a=r(61426)},96721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var a=r(8951);t.default_fb_group_joined_action_arr=function(){return[[a.data_fb_group_action_joined_obj.notice,a.data_fb_group_action_joined_obj.unfollow],[a.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var a=r(8951);t.default_fb_group_other_action_arr=function(){return[[a.data_fb_group_action_other_obj.your_content,a.data_fb_group_action_other_obj.pin,a.data_fb_group_action_other_obj.share,a.data_fb_group_action_other_obj.report]]}},65993:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_obj=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(39727),o=r(69565),l=r(8047),u=r(32601),i=r(58822),c=r(7605),d=r(61426),s=[{bg:"",bg_btn:"#0091DA",color:"#57BCEF"},{bg:"#B6C8DE",bg_btn:"#2F9A48",color:"#72BF84"},{bg:"#B6C8DE",bg_btn:"#0091DA",color:"#57BCEF"},{bg:"#E1BEC0",bg_btn:"#EF5370",color:"#FD90A5"}];t.default_fb_group_page_obj=function(){var e,t,r,f=(0,n.getRandomBool)(),_=(0,c.getDefaultArr)((function(){return(0,i.getRandomUser)().user}),6,8),p=(0,d.getRandomFromArr)(["person","page"]),m=!!((0,n.getRandomBool)()*(0,n.getRandomBool)()),v=!m&&!!((0,n.getRandomBool)()*(0,n.getRandomBool)());return a({},(0,i.getRandomGroup)().group_obj,(e={color_obj:(0,d.getRandomFromArr)(s),affiliation_obj:(0,n.getRandomBool)()?{to:p,id:(0,o.getRandomId)(),name:"person"==p?(0,u.getRandomName)():(0,u.getRandomPageName)(),picture:(0,l.getRandomVidPic)()}:{to:"",id:0,name:"",picture:""},is_admin:m,is_moderate:v,privacy:(0,n.getRandomBool)()?"Public":(0,d.getRandomFromArr)(["Public","Private"]),joined:f,member_count:1e3*(0,o.getRandomNumber)(1,20),action_name:f?"joined":"join",member_arr:_},t="member_count",r=1e4*(0,o.getRandomNumber)(1,20),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e))}},92693:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_other_action_arr=void 0;var a=r(43214);t.default_fb_page_other_action_arr=function(){return[[a.data_fb_page_action_other_obj.follow,a.data_fb_page_action_other_obj.save,a.data_fb_page_action_other_obj.share,a.data_fb_page_action_other_obj.block,a.data_fb_page_action_other_obj.support_report]]}},9022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var a,n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=(t.handle_API_GroupActions_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.group_id,n=void 0===a?0:a,u=t.type,i=void 0===u?"":u,c=t.params,d=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_GroupActions_L)(o({group_model:n,type:i},d));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(e){return n.apply(this,arguments)}),r(26386))},80351:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupPage_R=void 0;var a,n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=(t.handle_API_GroupPage_R=(a=regeneratorRuntime.mark((function e(t){var r,a=t.group_id,n=void 0===a?0:a,u=t.params,i=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_GroupPage_R)(o({group_model:n},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(e){return n.apply(this,arguments)}),r(85534))},80551:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PageActions_L=void 0;var a,n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=(t.handle_API_PageActions_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.page_id,n=void 0===a?0:a,u=t.type,i=void 0===u?"":u,c=t.params,d=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_PageActions_L)(o({page_model:n,type:i},d));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(e){return n.apply(this,arguments)}),r(96620))},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,r=e.stroke;return a.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},a.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:r,strokeWidth:"15"}),a.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),a.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}l.propTypes={size_icon:n.default.string,stroke:n.default.string},l.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=l},64561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_group_page_about=t.initial_group_page=void 0;var a=r(86449);t.initial_group_page=function(){return{id:0,name:"",picture:"",color_obj:{bg:"",bg_btn:"",color:""},affiliation_obj:{to:"person",id:0,name:"",picture:""},joined:!1,privacy:"",member_arr:[],member_count:0,action_name:""}},t.initial_group_page_about=function(){return{description:"",privacy:"",visibility:"",type_obj:{Icon:null,title:""},member_count:0,created_time:(new Date).toString(),recommended_count:0,friend_arr:[(0,a.initial_user)(),(0,a.initial_page)()],friend_name_str:"",admin_arr:[(0,a.initial_user)(),(0,a.initial_page)()],admin_name_str:"",post_day_count:0,post_month_count:0,member_week_count:0}}},26386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},o=r(50918),l=r(76488),u=r(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)("other"==e.type?(0,l.default_fb_group_other_action_arr)():"joined"==e.type?(0,u.default_fb_group_joined_action_arr)():null,(function(){return(0,n.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},85534:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupPage_R=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},o=r(50918),l=r(65993);t.API_GroupPage_R=function(e){return(0,o.API_FakeReal)((0,l.default_fb_group_page_obj)(),(function(){return(0,n.default)({url:"api/facebook/fb-group-page-r/",method:"GET",params:e})}),e)}},96620:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PageActions_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},o=r(50918),l=r(92693);t.API_PageActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)((0,l.default_fb_page_other_action_arr)(),(function(){return(0,n.default)({url:"api/facebook/page-other-action-l",method:"GET",params:e})}))}},18717:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(65102))),o=l(r(19088));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.action_name,r=e.group_id,l=e.handleAction;return"join"==t?a.default.createElement(n.default,{handleAction:l}):"joined"==t?a.default.createElement(o.default,{group_id:r,handleAction:l}):null}u.propTypes={},t.default=u},19088:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(9022)),o=u(r(68188)),l=u(r(97855));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id,r=e.handleAction;return a.default.createElement("div",{className:"ActionsGroupJoined"},a.default.createElement(o.default,{title_action:a.default.createElement(l.default,null),handle_API_L:function(){return(0,n.handle_API_GroupActions_L)({group_id:t,type:"joined"})},handleAction:r}))}i.propTypes={},t.default=i},26651:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(9022)),o=l(r(63313));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,r,l=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.handle_API_GroupActions_L)({group_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),u=e.group_id,i=e.class_action_contain,c=e.is_at_body,d=e.handleAction;return a.default.createElement(o.default,{is_at_body:c,class_action_contain:i,handle_API_L:l,handleAction:d})}u.propTypes={},t.default=u},94856:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(80551)),o=l(r(10153));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,r,l=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.handle_API_PageActions_L)({page_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),u=e.page_id,i=e.class_action_contain,c=e.is_at_body,d=e.handleAction;return a.default.createElement(o.default,{class_main:"BtnPageOther",class_btn:"BtnPageOther_btn",is_at_body:c,class_action_contain:i,handle_API_L:l,handleAction:d})}u.propTypes={},t.default=u},2436:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=u(r(67294)),o=(u(r(45697)),u(r(24012))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,a=e.Icon,o=e.btn_props,u=e.handleAction;return n.default.createElement(l.default,{className:"BtnGroupInvite "+t,title:r,Icon:a,btn_props:o,handleClick:function(){u("invite")}})}i.propTypes=a({},l.default.propTypes),i.defaultProps={className:"bg-blue text-white",title:"Invite",Icon:n.default.createElement(o.default,{stroke:"currentColor"})},t.default=i},65102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=u(r(67294)),o=(u(r(45697)),u(r(79368))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,a=e.Icon,o=e.handleAction;return n.default.createElement(l.default,{className:"BtnGroupJoin "+t,title:r,Icon:a,handleClick:function(){o("join")}})}i.propTypes=a({},l.default.propTypes),i.defaultProps={className:"bg-ccc",title:"Join Group",Icon:n.default.createElement(o.default,null)},t.default=i},97855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=u(r(67294)),o=(u(r(45697)),u(r(79368))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,a=e.Icon,o=e.handleAction;return n.default.createElement(l.default,{className:"BtnGroupJoined "+t,title:r,Icon:a,handleClick:function(){o&&o("joined")}})}i.propTypes=a({},l.default.propTypes),i.defaultProps={className:"bg-ccc",title:"Joined",Icon:n.default.createElement(o.default,null)},t.default=i},63313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(10153)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.class_action_contain,r=e.is_at_body,o=e.handle_API_L,l=e.handleAction;return a.default.createElement(n.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:r,handle_API_L:o,handleAction:l})}l.propTypes={},t.default=l},28978:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(37279))),o=l(r(44257));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleClick;return a.default.createElement(o.default,{className:"bg-ccc",Icon:a.default.createElement(n.default,{y:200}),title:"",use_title:!1,handleClick:t})}u.propTypes={},t.default=u},23633:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=(c(r(45697)),c(r(25488))),o=c(r(32682)),l=c(r(183)),u=c(r(79738)),i=c(r(27688));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.action_name,r=e.use_title,c=e.use_icon,d=e.page_id,s=e.has_liked,f=e.has_followed,_=e.handleAction;return"like"==t?a.default.createElement(n.default,{use_title:r,use_icon:c,has_liked:s,handleAction:_}):"follow"==t?a.default.createElement(o.default,{use_title:r,use_icon:c,has_followed:f,handleAction:_}):"chat"==t?a.default.createElement(l.default,{page_id:d,use_title:r,use_icon:c}):"contact"==t?a.default.createElement(u.default,{use_title:r,use_icon:c,handleAction:_}):"learn_more"==t?a.default.createElement(i.default,{use_title:r,use_icon:c,handleAction:_}):null}d.propTypes={},t.default=d},183:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),o=c(n),l=(c(r(45697)),r(15130)),u=c(r(48454)),i=c(r(44257));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.page_id,r=e.className,a=e.Icon,u=e.title,c=e.use_title,d=e.use_icon,s=(0,n.useContext)(l.context_api).openRoomChat;return o.default.createElement(i.default,{className:"BtnPageChat "+r,Icon:a,title:u,use_title:c,use_icon:d,handleClick:function(){s(t)}})}d.propTypes=a({},i.default.propTypes),d.defaultProps={Icon:o.default.createElement(u.default,{x:200,y:200}),title:"Message",className:"bg-ccc"},t.default=d},79738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=l(r(67294)),o=(l(r(45697)),l(r(44257)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,r=e.Icon,a=e.title,l=e.use_title,u=e.use_icon,i=e.handleAction;return n.default.createElement(o.default,{className:"BtnPageContact "+t,Icon:r,title:a,use_title:l,use_icon:u,handleClick:function(){i("contact")}})}u.propTypes=a({},o.default.propTypes),u.defaultProps={Icon:null,title:"Contact",className:"bg-ccc"},t.default=u},32682:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=u(r(67294)),o=(u(r(45697)),u(r(96770))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.classNameActive,a=e.Icon,o=e.title,u=e.use_title,i=e.use_icon,c=e.has_followed,d=e.handleAction;return n.default.createElement(l.default,{className:"BtnPageFollow "+(c?r:t),Icon:a,title:o,use_title:u,use_icon:i,handleClick:function(){d("follow")}})}i.propTypes=a({},l.default.propTypes),i.defaultProps={Icon:n.default.createElement(o.default,null),title:"Follow",className:"bg-ccc",classNameActive:"BtnPageFollow-active bg-fb-active text-blue"},t.default=i},27688:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=l(r(67294)),o=(l(r(45697)),l(r(44257)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,r=e.Icon,a=e.title,l=e.use_title,u=e.use_icon,i=e.handleAction;return n.default.createElement(o.default,{className:"BtnPageLearnMore "+t,Icon:r,title:a,use_title:l,use_icon:u,handleClick:function(){i("learn_more")}})}u.propTypes=a({},o.default.propTypes),u.defaultProps={Icon:null,title:"Learn more",className:"bg-ccc"},t.default=u},25488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=u(r(67294)),o=(u(r(45697)),u(r(6153))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.classNameActive,a=e.Icon,o=e.title,u=e.use_title,i=e.use_icon,c=e.has_liked,d=e.handleAction;return n.default.createElement(l.default,{className:"BtnPageLike "+(c?r:t),Icon:a,title:o,use_title:u,use_icon:i,handleClick:function(){d("like")}})}i.propTypes=a({},l.default.propTypes),i.defaultProps={Icon:n.default.createElement(o.default,{fill:"currentColor",stroke:"currentColor"}),title:"Like",className:"bg-ccc",classNameActive:"bg-fb-active text-blue"},t.default=i},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=u(r(45697)),o=u(r(88303)),l=u(r(14767));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.pic_arr,r=e.has_more,n=e.ItemComponent,l=e.clickMore;return a.default.createElement("div",{className:"flex-end row-reverse"},r&&a.default.createElement("div",{className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},a.default.createElement(n,{picture:t[0].picture}),a.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:l},a.default.createElement(o.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return a.default.createElement("div",{key:t,className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img"},a.default.createElement(n,{picture:e.picture})))})))}r(89666),i.propTypes={pic_arr:n.default.array,has_more:n.default.bool,ItemComponent:n.default.func,clickMore:n.default.func},i.defaultProps={ItemComponent:l.default},t.default=i},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture;return a.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}n(r(45697)),o.propTypes={},t.default=o},76721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=(i(r(45697)),i(r(81556))),o=i(r(60840)),l=i(r(7363)),u=i(r(6702));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.group_id,r=e.name,i=e.picture,c=e.color_obj,d=e.affiliation_obj,s=e.privacy,f=e.action_name,_=e.member_arr,p=e.member_count,m=e.openCoverPicture,v=e.toggleRelatedGroup,b=e.handleAction;return a.default.createElement("div",{className:"GroupPageInfo"},a.default.createElement("div",null,a.default.createElement(n.default,{picture:i,affiliation_obj:d,bg_btn:c.bg_btn,openCoverPicture:m})),a.default.createElement("div",{className:"GroupPageInfo_foot fb-profile-width-contain padding-top-16px"},a.default.createElement("div",{className:"GroupPageInfo_foot_row display-flex space-between"},a.default.createElement("div",{className:"padding-bottom-16px padding-top-6px padding-x-6px"},a.default.createElement("div",null,a.default.createElement(o.default,{name:r})),a.default.createElement("div",{className:"GroupPageInfo_member font-17px"},a.default.createElement(l.default,{group_id:t,privacy:s,member_arr:_,member_count:p}))),a.default.createElement("div",{className:"align-self-end padding-bottom-16px padding-top-6px padding-x-6px"},a.default.createElement(u.default,{action_name:f,group_id:t,bg_btn:c.bg_btn,handleAction:b,toggleRelatedGroup:v})))))}r(11833),c.propTypes={},t.default=c},6702:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=(c(r(45697)),r(55852)),o=c(r(37930)),l=c(r(2436)),u=c(r(44257)),i=c(r(18717));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.action_name,r=e.group_id,c=e.bg_btn,d=e.handleAction,s=e.toggleRelatedGroup;return a.default.createElement("div",{className:"GroupPageActions"},a.default.createElement("div",{className:"GroupPageActions_row display-flex align-items-center"},a.default.createElement("div",{className:"GroupPageActions_btn margin-right-8px"},a.default.createElement(i.default,{action_name:t,group_id:r,handleAction:d})),"joined"==t?a.default.createElement("div",{className:"GroupPageActions_btn margin-right-8px"},a.default.createElement(l.default,{className:"text-white",btn_props:{style:{backgroundColor:c}},handleAction:d})):null,n.IS_MOBILE||"joined"!=t?null:a.default.createElement("div",null,a.default.createElement(u.default,{className:"bg-ccc padding-x-16px",Icon:a.default.createElement(o.default,{class_icon:"rotate-90",x:200,size_icon:"12px"}),title:"",use_title:!1,handleClick:s}))))}r(63268),d.propTypes={},t.default=d},81556:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(85879))),o=l(r(94808));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.picture,r=e.bg_btn,l=e.affiliation_obj,u=e.openCoverPicture;return a.default.createElement(n.default,{cover:t,link_to:"/post/1",openCoverPicture:u},l.id>0?a.default.createElement("div",{className:"pos-abs bottom-0 left-0 w-100per"},a.default.createElement(o.default,{bg_btn:r,affiliation_obj:l})):null)}u.propTypes={},t.default=u},94808:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=r(93191),o=(u(r(45697)),u(r(75238))),l=u(r(78740));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.bg_btn,r=e.affiliation_obj,u=r.to,i=r.id,c=r.name;return a.default.createElement("div",{className:"GroupPageAffiliation padding-x-16px padding-y-10px font-600 bg-blue text-white",style:{backgroundColor:t||void 0,color:t?"white":void 0}},a.default.createElement("div",{className:"display-flex"},a.default.createElement("div",{className:"margin-right-8px"},"Group by"),a.default.createElement("div",null,"person"==u?a.default.createElement(o.default,{user_id:i,title_action:a.default.createElement(n.Link,{className:"color-inherit hv-underline",to:"/profile/"+i},c)}):a.default.createElement(l.default,{page_id:i,title_action:a.default.createElement(n.Link,{className:"color-inherit hv-underline",to:"/page/"+i},c)}))))}r(23921),i.propTypes={},t.default=i},7363:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(30484))),o=l(r(40030));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.privacy,l=e.member_arr,u=e.member_count;return a.default.createElement("div",{className:"GroupPageMembers"},a.default.createElement("div",{className:"margin-top-8px margin-bottom-12px"},a.default.createElement(n.default,{privacy:r,member_count:u})),a.default.createElement("div",null,a.default.createElement(o.default,{group_id:t,member_arr:l,member_count:u})))}u.propTypes={},t.default=u},30484:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(36289)),o=u(r(3791)),l=u(r(68986));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.privacy,r=e.member_count;return a.default.createElement("div",{className:"GroupPageMemberCount text-secondary"},a.default.createElement("div",{className:"GroupPageMemberCount_row display-flex align-items-center"},a.default.createElement("div",{className:"display-flex align-items-center"},"PRIVATE"==t.toUpperCase()?a.default.createElement(o.default,{stroke:"currentColor"}):a.default.createElement(l.default,{stroke:"currentColor"}),a.default.createElement("div",{className:"margin-left-5px"},t," group")),a.default.createElement("div",{className:"margin-x-5px"},"·"),a.default.createElement("div",null,(0,n.UnitNumber)(r)," member",r>=2?"s":"")))}r(10268),i.propTypes={},t.default=i},40030:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(93191)),o=l(r(52636));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.member_arr,l=e.member_count;return a.default.createElement("div",{className:"GroupPageMemberPics"},a.default.createElement(n.Link,{to:"/group/"+t+"/members"},a.default.createElement(o.default,{pic_arr:r,has_more:r<l})))}r(60940),u.propTypes={},t.default=u},60840:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(67020)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.name;return a.default.createElement(n.default,{name:t})}l.propTypes={},t.default=l},69108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=p(a),o=(p(r(45697)),r(55852)),l=p(r(18717)),u=p(r(2436)),i=p(r(43642)),c=p(r(28236)),d=p(r(5526)),s=p(r(11045)),f=p(r(24813)),_=p(r(57084));function p(e){return e&&e.__esModule?e:{default:e}}r(29696);var m=function(e){var t=e.group_id,r=void 0===t?0:t;return[{title:"Media",link_to:"/group/"+r+"/media"},{title:"Files",link_to:"/group/"+r+"/files"}]},v=function(e){var t=e.group_id,r=void 0===t?0:t;return[{title:"About",link_to:"/group/"+r+"/about"},{title:"Discussion",link_to:"/group/"+r+"/discuss"},{title:"Members",link_to:"/group/"+r+"/members"},{title:"Topics",link_to:"/group/"+r+"/topics"}].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o.IS_MOBILE?m({group_id:r}):[]))};function b(e){var t=e.group_id,r=e.color,p=e.bg_btn,b=e.name,g=e.picture,h=e.link_to,y=e.action_name,P=e.no_permission,E=e.handleAction,j=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(a=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(n)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({nav_arr:v({group_id:t}),nav_more_arr:o.IS_MOBILE?[]:m({group_id:t})}),2),A=j[0];return j[1],n.default.createElement(i.default,{left_main_elm:n.default.createElement("ul",{className:"display-flex list-none h-100per padding-top-3px"},A.nav_arr.slice(0,P?2:void 0).map((function(e,t){return n.default.createElement("li",{key:t,className:"GroupPageNav_item"},n.default.createElement(d.default,{title:e.title,link_to:e.link_to,color_active:r,border_active:p}))})),o.IS_MOBILE||P?null:n.default.createElement("li",{className:"GroupPageNav_item"},n.default.createElement(c.default,{color:r,bg_btn:p,more_link_arr:A.nav_more_arr}))),left_sticky_elm:n.default.createElement("div",{className:"flex-between-center h-100per"},n.default.createElement("div",{className:"flex-grow-1 h-100per padding-y-2px overflow-hidden"},n.default.createElement(_.default,{name:b,picture:g,link_to:h})),n.default.createElement("div",{className:"display-flex align-items-center"},n.default.createElement("div",{className:"margin-left-8px"},n.default.createElement(l.default,{action_name:y,group_id:t,handleAction:E})),"joined"==y?n.default.createElement("div",{className:"margin-left-8px"},n.default.createElement(u.default,{className:"text-white",btn_props:{style:{backgroundColor:p}},handleAction:E})):null)),right_elm:n.default.createElement("div",{className:"display-flex align-items-center h-100per"},P?null:n.default.createElement("div",null,n.default.createElement(s.default,null)),n.default.createElement("div",{className:"margin-left-8px"},n.default.createElement(f.default,{group_id:t,handleAction:E})))})}b.propTypes={},t.default=b},24813:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(26651)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.group_id,r=e.handleAction;return a.default.createElement(n.default,{group_id:t,handleAction:r})}l.propTypes={},t.default=l},11045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(28978)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.openGroupSearch;return a.default.createElement(n.default,{handleClick:t})}l.propTypes={},t.default=l},57084:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),r(93191),o(r(19936)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.link_to,r=e.picture,o=e.name;return a.default.createElement(n.default,{link_to:t,picture:r,name:o})}l.propTypes={},t.default=l},5526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(7077)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,r=e.link_to,o=e.color_active,l=e.border_active;return a.default.createElement(n.default,{title:t,link_to:r,color_active:o,border_active:l})}r(95094),l.propTypes={},t.default=l},28236:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(91834)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.color,r=e.bg_btn,o=e.more_link_arr,l=o.some((function(e){return location.pathname.startsWith(e.link_to)}));return a.default.createElement(n.default,{color:t,bg_btn:r,more_link_arr:o,is_active:l})}l.propTypes={},t.default=l},38612:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),o=f(n),l=r(93191),u=(f(r(45697)),r(64561)),i=r(80351),c=r(25259);r(65371);var d=f(r(76721)),s=f(r(69108));function f(e){return e&&e.__esModule?e:{default:e}}function _(e){var t,r,f=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_GroupPage_R)({group_id:_});case 2:t=e.sent,v((function(e){return a({},e,{group_obj:t,has_fetch:!0})}));case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,o){try{var l=e[n](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),_=(0,l.useParams)().id,p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(a=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(n)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({group_obj:(0,u.initial_group_page)(),has_fetch:!1}),2),m=p[0],v=p[1],b=m.group_obj,g=m.has_fetch,h=b.name,y=b.picture,P=b.color_obj,E=b.affiliation_obj,j=b.is_admin,A=b.is_moderate,M=b.privacy,O=b.action_name,k=b.member_arr,w=b.member_count,N="join"==O&&"PRIVATE"==M.toUpperCase();(0,n.useEffect)((function(){f()}),[_]);var x={group_id:_,is_admin:j,is_moderate:A,no_permission:N,member_count:w};return 0==location.pathname.search(/\/group\/\d+\/discuss/)&&(x.bg_btn=P.bg_btn),g?o.default.createElement("div",{key:_,className:"GroupPage"},o.default.createElement("div",{className:"bg-primary"},o.default.createElement(d.default,{group_id:_,name:h,picture:y,color_obj:P,affiliation_obj:E,privacy:M,action_name:O,member_arr:k,member_count:w,openCoverPicture:function(){},toggleRelatedGroup:function(){},handleAction:function(){}})),o.default.createElement("div",{className:"fb-profile-nav"},o.default.createElement("div",{className:"GroupPage_nav_contain fb-profile-width-contain"},o.default.createElement(s.default,{group_id:_,color:P.color,bg_btn:P.bg_btn,no_permission:N,action_name:O,name:h,picture:y,link_to:"/group/"+_+"/discuss"}))),o.default.createElement("div",{className:"padding-y-16px",style:{backgroundColor:P.bg}},_>0?o.default.createElement(n.Suspense,{fallback:null},o.default.createElement(l.Switch,null,c.GroupPageRoutes.slice(0,N?2:void 0).map((function(e,t){return o.default.createElement(l.Route,{key:t,path:e.path,render:function(t){return o.default.createElement(e.component,a({},t,x))}})})),o.default.createElement(l.Redirect,{to:"/group/"+_+"/discuss"}))):null)):null}r(50215),_.propTypes={},t.default=_},25259:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GroupPageRoutes=void 0;var a,n=(a=r(67294))&&a.__esModule?a:{default:a},o=n.default.lazy((function(){return Promise.all([r.e(869),r.e(5684)]).then(r.bind(r,17267))})),l=n.default.lazy((function(){return Promise.all([r.e(9859),r.e(9319),r.e(6272),r.e(898),r.e(688),r.e(482)]).then(r.bind(r,90482))})),u=n.default.lazy((function(){return r.e(3774).then(r.bind(r,3774))})),i=n.default.lazy((function(){return r.e(8380).then(r.bind(r,48380))})),c=n.default.lazy((function(){return r.e(704).then(r.bind(r,80704))})),d=n.default.lazy((function(){return r.e(7178).then(r.bind(r,47178))}));t.GroupPageRoutes=[{component:o,path:"/group/:id/about"},{component:l,path:"/group/:id/discuss"},{component:i,path:"/group/:id/members"},{component:u,path:"/group/:id/topics"},{component:c,path:"/group/:id/media"},{component:d,path:"/group/:id/files"}]},89666:(e,t,r)=>{"use strict";r.r(t)},11833:(e,t,r)=>{"use strict";r.r(t)},63268:(e,t,r)=>{"use strict";r.r(t)},23921:(e,t,r)=>{"use strict";r.r(t)},10268:(e,t,r)=>{"use strict";r.r(t)},60940:(e,t,r)=>{"use strict";r.r(t)},29696:(e,t,r)=>{"use strict";r.r(t)},95094:(e,t,r)=>{"use strict";r.r(t)},50215:(e,t,r)=>{"use strict";r.r(t)},65371:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2473.js.map