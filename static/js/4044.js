(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[4044],{46695:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},43214:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_page_action_other_obj={follow:{name:"follow",title:"Follow",info:""},save:{name:"save",title:"Save",info:""},share:{name:"share",title:"Share",info:""},block:{name:"block",title:"Block Page",info:""},support_report:{name:"support_report",title:"Find support or report page",info:""}}},84962:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomPageType=function(){return(0,r.getRandomFromArr)(["supermarket","Just for fun","Community","School/university"])};var r=n(61426)},96721:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var r=n(46695);t.default_fb_group_joined_action_arr=function(){return[[r.data_fb_group_action_joined_obj.notice,r.data_fb_group_action_joined_obj.unfollow],[r.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var r=n(46695);t.default_fb_group_other_action_arr=function(){return[[r.data_fb_group_action_other_obj.your_content,r.data_fb_group_action_other_obj.pin,r.data_fb_group_action_other_obj.share,r.data_fb_group_action_other_obj.report]]}},92693:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_other_action_arr=void 0;var r=n(43214);t.default_fb_page_other_action_arr=function(){return[[r.data_fb_page_action_other_obj.follow,r.data_fb_page_action_other_obj.save,r.data_fb_page_action_other_obj.share,r.data_fb_page_action_other_obj.block,r.data_fb_page_action_other_obj.support_report]]}},9022:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var r,o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(t.handle_API_GroupActions_L=(r=regeneratorRuntime.mark((function e(t){var n,r=t.group_id,o=void 0===r?0:r,u=t.type,c=void 0===u?"":u,l=t.params,s=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_GroupActions_L)(a({group_model:o,type:c},s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})),o=function(){var e=r.apply(this,arguments);return new Promise((function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(e){return o.apply(this,arguments)}),n(26386))},80551:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PageActions_L=void 0;var r,o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(t.handle_API_PageActions_L=(r=regeneratorRuntime.mark((function e(t){var n,r=t.page_id,o=void 0===r?0:r,u=t.type,c=void 0===u?"":u,l=t.params,s=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_PageActions_L)(a({page_model:o,type:c},s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})),o=function(){var e=r.apply(this,arguments);return new Promise((function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(e){return o.apply(this,arguments)}),n(96620))},3791:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),o=a(n(45697));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,n=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:n,strokeLinejoin:"round"},r.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:n,strokeWidth:"15"}),r.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),r.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}i.propTypes={size_icon:o.default.string,stroke:o.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},67238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),o=a(n(45697));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,n=e.fill,o=e.stroke,a=e.stroke_width;return r.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:n,strokeWidth:a,stroke:o,strokeLinecap:"round",strokeLinejoin:"round"},r.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),r.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}n(18639),i.propTypes={fill:o.default.string,size_icon:o.default.string,stroke:o.default.string,stroke_width:o.default.number},i.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=i},42441:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_posts=function(){return[{id:0,user:{id:0,picture:"",first_name:"",last_name:"",is_online:!1},user_tag_arr:[],user_tag_count:0,emoji_obj:{},content_obj:{content_more:"",has_more_content:!1,content:""},vid_pics:[{id:0,likes:[],arr_unique_like:[],count_like:0,vid_pic:"",content_obj:{content_more:"",has_more_content:!1,content:""},comments:[],count_comment:0,histories:[],created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}],vid_pic_count:0,likes:[],count_like:0,user_reacted_ix:-1,shares:[],count_share:0,count_unique_share:0,count_user_shared:0,comments:[],count_comment:0,histories:[],count_history:0,permission_post:0,created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}]}},26386:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var r,o=(r=n(87421))&&r.__esModule?r:{default:r},a=n(50918),i=n(76488),u=n(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.API_FakeReal)("other"==e.type?(0,i.default_fb_group_other_action_arr)():"joined"==e.type?(0,u.default_fb_group_joined_action_arr)():null,(function(){return(0,o.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},96620:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PageActions_L=void 0;var r,o=(r=n(87421))&&r.__esModule?r:{default:r},a=n(50918),i=n(92693);t.API_PageActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.API_FakeReal)((0,i.default_fb_page_other_action_arr)(),(function(){return(0,o.default)({url:"api/facebook/page-other-action-l",method:"GET",params:e})}))}},26651:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),o=(i(n(45697)),n(9022)),a=i(n(63313));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,n,i=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.handle_API_GroupActions_L)({group_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(){return n.apply(this,arguments)}),u=e.group_id,c=e.class_action_contain,l=e.is_at_body,s=e.handleAction;return r.default.createElement(a.default,{is_at_body:l,class_action_contain:c,handle_API_L:i,handleAction:s})}u.propTypes={},t.default=u},94856:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),o=(i(n(45697)),n(80551)),a=i(n(10153));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,n,i=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.handle_API_PageActions_L)({page_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(){return n.apply(this,arguments)}),u=e.page_id,c=e.class_action_contain,l=e.is_at_body,s=e.handleAction;return r.default.createElement(a.default,{class_main:"BtnPageOther",class_btn:"BtnPageOther_btn",is_at_body:l,class_action_contain:c,handle_API_L:i,handleAction:s})}u.propTypes={},t.default=u},65102:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(67294)),a=(u(n(45697)),u(n(79368))),i=u(n(44257));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.className,n=e.title,r=e.Icon,a=e.handleAction;return o.default.createElement(i.default,{className:"BtnGroupJoin "+t,title:n,Icon:r,handleClick:function(){a("join")}})}c.propTypes=r({},i.default.propTypes),c.defaultProps={className:"bg-ccc",title:"Join Group",Icon:o.default.createElement(a.default,null)},t.default=c},63313:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),o=(a(n(45697)),a(n(10153)));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.class_action_contain,n=e.is_at_body,a=e.handle_API_L,i=e.handleAction;return r.default.createElement(o.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:n,handle_API_L:a,handleAction:i})}i.propTypes={},t.default=i},23633:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),o=(l(n(45697)),l(n(25488))),a=l(n(32682)),i=l(n(183)),u=l(n(79738)),c=l(n(27688));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.action_name,n=e.use_title,l=e.use_icon,s=e.page_id,_=e.has_liked,d=e.has_followed,f=e.handleAction;return"like"==t?r.default.createElement(o.default,{use_title:n,use_icon:l,has_liked:_,handleAction:f}):"follow"==t?r.default.createElement(a.default,{use_title:n,use_icon:l,has_followed:d,handleAction:f}):"chat"==t?r.default.createElement(i.default,{page_id:s,use_title:n,use_icon:l}):"contact"==t?r.default.createElement(u.default,{use_title:n,use_icon:l,handleAction:f}):"learn_more"==t?r.default.createElement(c.default,{use_title:n,use_icon:l,handleAction:f}):null}s.propTypes={},t.default=s},183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(67294),a=l(o),i=(l(n(45697)),n(15130)),u=l(n(48454)),c=l(n(44257));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.page_id,n=e.className,r=e.Icon,u=e.title,l=e.use_title,s=e.use_icon,_=(0,o.useContext)(i.context_api).openRoomChat;return a.default.createElement(c.default,{className:"BtnPageChat "+n,Icon:r,title:u,use_title:l,use_icon:s,handleClick:function(){_(t)}})}s.propTypes=r({},c.default.propTypes),s.defaultProps={Icon:a.default.createElement(u.default,{x:200,y:200}),title:"Message",className:"bg-ccc"},t.default=s},79738:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(67294)),a=(i(n(45697)),i(n(44257)));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,n=e.Icon,r=e.title,i=e.use_title,u=e.use_icon,c=e.handleAction;return o.default.createElement(a.default,{className:"BtnPageContact "+t,Icon:n,title:r,use_title:i,use_icon:u,handleClick:function(){c("contact")}})}u.propTypes=r({},a.default.propTypes),u.defaultProps={Icon:null,title:"Contact",className:"bg-ccc"},t.default=u},32682:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(67294)),a=(u(n(45697)),u(n(96770))),i=u(n(44257));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.className,n=e.classNameActive,r=e.Icon,a=e.title,u=e.use_title,c=e.use_icon,l=e.has_followed,s=e.handleAction;return o.default.createElement(i.default,{className:"BtnPageFollow "+(l?n:t),Icon:r,title:a,use_title:u,use_icon:c,handleClick:function(){s("follow")}})}c.propTypes=r({},i.default.propTypes),c.defaultProps={Icon:o.default.createElement(a.default,null),title:"Follow",className:"bg-ccc",classNameActive:"BtnPageFollow-active bg-fb-active text-blue"},t.default=c},27688:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(67294)),a=(i(n(45697)),i(n(44257)));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.className,n=e.Icon,r=e.title,i=e.use_title,u=e.use_icon,c=e.handleAction;return o.default.createElement(a.default,{className:"BtnPageLearnMore "+t,Icon:n,title:r,use_title:i,use_icon:u,handleClick:function(){c("learn_more")}})}u.propTypes=r({},a.default.propTypes),u.defaultProps={Icon:null,title:"Learn more",className:"bg-ccc"},t.default=u},25488:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(67294)),a=(u(n(45697)),u(n(6153))),i=u(n(44257));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.className,n=e.classNameActive,r=e.Icon,a=e.title,u=e.use_title,c=e.use_icon,l=e.has_liked,s=e.handleAction;return o.default.createElement(i.default,{className:"BtnPageLike "+(l?n:t),Icon:r,title:a,use_title:u,use_icon:c,handleClick:function(){s("like")}})}c.propTypes=r({},i.default.propTypes),c.defaultProps={Icon:o.default.createElement(a.default,{fill:"currentColor",stroke:"currentColor"}),title:"Like",className:"bg-ccc",classNameActive:"bg-fb-active text-blue"},t.default=c},4685:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(67294),a=s(o),i=(s(n(45697)),n(81042)),u=n(42441),c=n(35155),l=s(n(70898));function s(e){return e&&e.__esModule?e:{default:e}}function _(e){var t,n,s=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(r({},f,{post_arr:[],has_fetched:!1})),e.next=3,(0,i.API_Post_RD)(_,"GET");case 3:t=e.sent,b&&p({post_arr:[t.data],has_fetched:!0,open_input_id_arr:[t.data.id]});case 5:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(){return n.apply(this,arguments)}),_=e.match.params.id,d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,o.useState)({post_arr:(0,u.initial_posts)(),has_fetched:!1,open_input_id_arr:[]}),2),f=d[0],p=d[1],h=f.post_arr,v=f.has_fetched,m=f.open_input_id_arr,b=(0,c.useMounted)();return(0,o.useEffect)((function(){s()}),[_]),a.default.createElement("div",{className:"UserPost"},a.default.createElement("div",{className:"UserPost_contain bg-fb"},a.default.createElement("div",{className:"UserPost_posts"},a.default.createElement(l.default,{posts:h,has_fetched:v,is_fetching:!1,open_input_id_arr:m}))))}n(3118),_.propTypes={},t.default=_},18639:(e,t,n)=>{"use strict";n.r(t)},3118:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=4044.js.map