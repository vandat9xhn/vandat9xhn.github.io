(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[873,838],{87898:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParseLocationSearch=function(){return location.search?JSON.parse(decodeURI(location.search).replace("?",'{"').replace(/=/g,'":"').replace(/&/g,'","')+'"}'):{}}},34980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RU_UserWork=t.RU_UserContact=t.API_UserProfile_RU=void 0;var n,a=r(50918),l=(n=r(87421))&&n.__esModule?n:{default:n},u=r(36323);t.API_UserProfile_RU=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,a.API_FakeReal)(u.default_user_r.find((function(t){return t.id==e}))||u.default_user_r[2],(function(){return(0,l.default)({url:"/user/ru-profile/"+e+"/",method:t,data:r})}))},t.RU_UserContact=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,l.default)({url:"/user/ru-contact/"+e+"/",method:t,data:r})},t.RU_UserWork=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,l.default)({url:"/user/ru-work/"+e+"/",method:t,data:r})}},48487:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(67294),l=s(a),u=s(r(45697)),i=s(r(23337));r(7838);var o=s(r(57108)),c=s(r(4299));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,r,n;d(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={value:""},n.toggleEditing=function(e){n.props.toggleEditing(e),setTimeout((function(){n.props.is_editing&&n.input.focus()}),100)},n.inputEditDiv=function(e){null!==e&&(n.input=e)},n.onChange=function(e){n.setState({value:e.target.value})},n.onPermissionChange=function(e){n.props.onPermissionChange(e.target.value)},f(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.x,n=t.y,a=t.icon_w,u=t.icon_h,s=t.name,d=t.value,f=t.permission,p=t.is_editing,m=t.onValueChange;return l.default.createElement("div",{className:"EditDiv"},l.default.createElement("div",{className:"EditDiv_name-value"},l.default.createElement("div",{className:"EditDiv__name"},l.default.createElement("div",null,l.default.createElement(o.default,{x:r,y:n,Icon:c.default},s,":")),l.default.createElement("div",null,f&&l.default.createElement("div",{className:"EditDiv__value-permission"},l.default.createElement("select",{disabled:!p,onChange:this.onPermissionChange,defaultValue:f,title:"Choose privacy"},l.default.createElement("option",null,"Public"),l.default.createElement("option",null,"Friends"),l.default.createElement("option",null,"Private"))))),l.default.createElement("div",{className:"EditDiv__value"},l.default.createElement("div",{className:"EditDiv__value-about"},l.default.createElement("input",{ref:this.inputEditDiv,type:"text",onChange:this.onChange,onBlur:function(){return m(e.state.value)},defaultValue:d,readOnly:!p,style:{backgroundColor:p?"white":""},placeholder:"Not thing"})))),l.default.createElement("div",{className:"EditDiv_icon",title:"Edit",onClick:function(){return e.toggleEditing(s)}},l.default.createElement(i.default,{width:a,height:u,is_editing:p})))}}]),t}(a.Component);p.propTypes={x:u.default.number,y:u.default.number,icon_h:u.default.string,icon_w:u.default.string,name:u.default.string,value:u.default.string,is_editing:u.default.bool,onValueChange:u.default.func,onPermissionChange:u.default.func,toggleEditing:u.default.func},p.defaultProps={},t.default=p},37944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return n.default.createElement("div",{className:e.is_show?"SuccessDiv":"display-none"},n.default.createElement("div",null,e.children))}r(66529),u.propTypes={is_show:a.default.bool,children:a.default.oneOfType([a.default.string,a.default.element])},t.default=u},70361:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_ProfileUser_R=t.handle_API_Friend_L=t.handle_API_ProfilePost_L=void 0;var n,a,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_ProfilePost_L=(n=d(regeneratorRuntime.mark((function e(t){var r,n,a,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_Post_L)(u({},s.params_profile_post_l,{c_count:t}));case 2:return r=e.sent,n=r.data,a=n.data,l=n.count,e.abrupt("return",[a,l]);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),t.handle_API_Friend_L=(a=d(regeneratorRuntime.mark((function e(t){var r,n,a,l,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_Friends_LC)("GET",{profile_user:t,page:1,size:10,c_count:u});case 2:return r=e.sent,n=r.data,a=n.data,l=n.count,e.abrupt("return",[a,l]);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),t.handle_API_ProfileUser_R=(l=d(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.API_UserProfile_RU)(t,"GET");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)}),r(79427)),o=r(81042),c=r(34980),s=r(6470);function d(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var u=t[a](l),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(i)}("next")}))}}},6470:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_profile_post_l={page:1,size:5,is_profile:1}},20045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=r(67294),l=m(a),u=(m(r(45697)),r(87898)),i=r(70361),o=m(r(77879)),c=m(r(18736)),s=m(r(96379)),d=m(r(74321)),f=m(r(10117)),p=m(r(81305));function m(e){return e&&e.__esModule?e:{default:e}}function _(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(740),t.default=function(e){var t,r,m=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_ProfileUser_R)(v);case 2:t=e.sent,g(t),document.title=t.first_name+" "+t.last_name;case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,l){try{var u=e[a](l),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(i)}("next")}))},function(){return r.apply(this,arguments)}),v=e.match.params.id,h=(0,a.useState)({}),y=n(h,2),E=y[0],g=y[1],b=(0,a.useState)({sk_loaded_arr:[],which_sk:""}),P=n(b,2),w=P[0],k=P[1],C=w.sk_loaded_arr,O=w.which_sk;return(0,a.useEffect)((function(){var e;e=(0,u.ParseLocationSearch)().sk||"",["friend","pic","intro"].includes(e)||(e=""),k({which_sk:e,sk_loaded_arr:[e]}),m()}),[v]),l.default.createElement("div",{className:"Profile"},l.default.createElement("div",{className:"Profile_info"},l.default.createElement(o.default,{profile:E,openCoverPicture:function(){console.log(v)},openPicture:function(){console.log(v)}})),l.default.createElement("div",{className:"Profile_more"},l.default.createElement(c.default,{sk:O,onClickSk:function(e){e!==O&&k({which_sk:e,sk_loaded_arr:C.includes(e)?C:[].concat(_(C),[e])})}})),C.includes("")&&l.default.createElement("div",{className:""==O?"":"display-none"},l.default.createElement(s.default,{last_name:E.last_name})),C.includes("friend")&&l.default.createElement("div",{className:"friend"==O?"":"display-none"},l.default.createElement(f.default,null)),C.includes("intro")&&l.default.createElement("div",{className:"intro"==O?"":"display-none"},l.default.createElement(p.default,null)),C.includes("pic")&&l.default.createElement("div",{className:"pic"==O?"":"display-none"},l.default.createElement(d.default,null)))}},77879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=f(n),l=f(r(45697)),u=r(15130),i=f(r(29875)),o=f(r(20658)),c=f(r(27248)),s=f(r(18069));r(33768);var d=r(17892);function f(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=(0,d.GetIdSlug)(),r=(0,n.useContext)(u.context_api).user,l=e.profile,f=e.openCoverPicture,p=e.openPicture,m=l.picture,_=l.cover_picture,v=l.first_name,h=l.last_name,y=l.nick_name,E=l.story,g=l.user_related,b=l.permission_add_friend,P=l.is_block_message;return a.default.createElement("div",{className:"ProfileInfo"},a.default.createElement("div",{className:"ProfileInfo_pics"},a.default.createElement(s.default,{cover_picture:_,picture:m,openCoverPicture:f,openPicture:p})),v?a.default.createElement("div",{className:"ProfileInfo_name-story"},a.default.createElement(c.default,{name:v+" "+h,nick_name:y,story:E,is_user:r.id==t,handleChangeStory:function(){console.log(t)}})):a.default.createElement(i.default,{num:3}),v&&a.default.createElement(o.default,{id:t,is_user:r.id==t,user_related:g,permission_add_friend:b,is_block_message:P,handleAddStory:function(){console.log(t)},handleAcceptRequest:function(){console.log(t)},handleCancelRequest:function(){console.log(t)},handleAddFriend:function(){console.log(t)},handleFollowFriend:function(){console.log(t)}}))}p.propTypes={profile:l.default.object,openCoverPicture:l.default.func,openPicture:l.default.func},t.default=p},20658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=o(n),l=(o(r(45697)),r(15130)),u=o(r(48454)),i=r(9449);function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.id,r=e.is_user,o=e.user_related,c=e.permission_add_friend,s=e.is_block_message,d=e.handleAddStory,f=e.handleAcceptRequest,p=e.handleCancelRequest,m=e.handleAddFriend,_=e.handleFollowFriend,v=(0,n.useContext)(l.context_api).openMessage;return a.default.createElement("div",{className:"ProfileInfo_is-friend"},a.default.createElement("div",{className:"brs-5px label-field"},a.default.createElement("div",{className:"display-flex justify-content-center align-items-center"},a.default.createElement("div",{className:"ProfileInfo__add-friend display-flex justify-content-center align-items-center brs-5px",title:"add friend"},(0,i.handleInfoActions)(o,c,d,f,p,m,_)),!s&&!r&&a.default.createElement("div",{className:"ProfileInfo__message",title:"message",onClick:function(){v(t)}},a.default.createElement(u.default,{x:200,y:200})))))}c.propTypes={},t.default=c},9449:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleInfoActions=function(e,t,r,d,f,p,m){switch(e){case a.user_related_obj.c_user:return n.default.createElement(s.default,{handleAddStory:r});case a.user_related_obj.friend:return n.default.createElement(u.default,null);case a.user_related_obj.received_request:return n.default.createElement(o.default,{handleAcceptRequest:d,handleCancelRequest:f});case a.user_related_obj.send_request:return n.default.createElement(c.default,{handleCancelRequest:f});case a.user_related_obj.has_mutual_friend:return t<=1?n.default.createElement(i.default,{handleAddFriend:p}):n.default.createElement(l.default,{handleFollowFriend:m});case a.user_related_obj.no_mutual_friend:return 0==t?n.default.createElement(i.default,{handleAddFriend:p}):n.default.createElement(l.default,{handleFollowFriend:m});default:return n.default.createElement("div",null)}};var n=d(r(67294)),a=r(87774),l=d(r(56078)),u=d(r(17769)),i=d(r(46510)),o=d(r(21005)),c=d(r(983)),s=d(r(88614));function d(e){return e&&e.__esModule?e:{default:e}}},56078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleFollowFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"FOLLOW +"))}a(r(45697)),l.propTypes={},t.default=l},17769:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return n.default.createElement("div",null,n.default.createElement("div",null,"Friend"))}a(r(45697)),l.propTypes={},t.default=l},46510:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(57108))),l=u(r(39475));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.handleAddFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{y:200,color:"#000000ad",Icon:l.default},"Add friend")))}i.propTypes={},t.default=i},21005:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleAcceptRequest,r=e.handleCancelRequest;return n.default.createElement("div",null,n.default.createElement("div",null,"Reply request"),n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"Accept"),n.default.createElement("div",{onClick:r},"Deny")))}a(r(45697)),l.propTypes={},t.default=l},983:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),u(r(57108))),l=u(r(39475));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.handleCancelRequest;return n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{Icon:l.default,y:200},"Cancel request"))}i.propTypes={},t.default=i},88614:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.handleAddStory;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"Add story"))}a(r(45697)),l.propTypes={},t.default=l},18069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.cover_picture,r=e.picture,l=e.openCoverPicture,u=e.openPicture;return n.default.createElement("div",{className:"ProfileInfo_pics"},n.default.createElement("div",{className:"ProfileInfo_cover-pic"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{src:t,alt:"",onClick:l}))),n.default.createElement("div",{className:"ProfileInfo_div-pic"},n.default.createElement("div",{className:"ProfileInfo_profile-pic"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{src:r,alt:"",onClick:u})))))}u.propTypes={},t.default=u},27248:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.is_user,r=e.name,a=e.nick_name,l=e.story,u=e.handleChangeStory;return n.default.createElement("div",{className:"ProfileInfo_name-story"},n.default.createElement("div",{className:"ProfileInfo_name display-flex justify-content-center align-items-center"},n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",null,r),a&&n.default.createElement("div",null," (",a,")"))),n.default.createElement("div",{className:"ProfileInfo_story text-align-center"},n.default.createElement("div",{onClick:t?u:void 0},l?n.default.createElement("div",null,l):n.default.createElement("div",null,t?"Add your story":""))))}a(r(45697)),l.propTypes={},t.default=l},18736:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=r(67294))&&n.__esModule?n:{default:n},l=r(93191);r(78826);var u=[{sk:"",title:"Post"},{sk:"friend",title:"Friend"},{sk:"pic",title:"Picture"},{sk:"intro",title:"Introduce"}];t.default=function(e){var t=e.sk,r=e.onClickSk;return a.default.createElement("div",{className:"ProfileMore"},a.default.createElement("div",{className:"ProfileMore_contain"},a.default.createElement("ul",{className:"ProfileMore__list"},u.map((function(e,n){return a.default.createElement("li",{key:"Profile_sk"+n},a.default.createElement(l.NavLink,{to:location.pathname+(e.sk?"?sk=":"")+e.sk,className:"normal-text",activeClassName:t==e.sk?"nav-active":"",replace:!0,title:e.title,onClick:function(){return r(e.sk)}},a.default.createElement("div",{className:"ProfileMore__item nav-text nav-bottom"},e.title)))})))))}},10117:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=r(67294),u=f(l),i=(f(r(45697)),r(79427)),o=r(17892),c=f(r(98989)),s=r(70361),d=f(r(92859));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function m(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var u=t[a](l),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(i)}("next")}))}}function _(){var e,t,r=(e=m(regeneratorRuntime.mark((function e(){var t,r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.handle_API_Friend_L)(_,g.length);case 2:t=e.sent,r=a(t,2),n=r[0],l=r[1],E({friend_arr:[].concat(p(g),p(n)),count_friend:P?b:l,has_fetched:!0});case 7:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)}),f=(t=m(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_Friend_D)(t,"DELETE");case 2:E(n({},y,{friend_arr:g.filter((function(e){return e.friend.id!=t}))}));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),_=(0,o.GetIdSlug)().id,v=(0,l.useState)({friend_arr:[],count_friend:0,has_fetched:!1}),h=a(v,2),y=h[0],E=h[1],g=y.friend_arr,b=y.count_friend,P=y.has_fetched;return(0,l.useEffect)((function(){r()}),[]),u.default.createElement("div",{className:"ProfileFriend"},u.default.createElement("div",{className:"ProfileFriend_contain"},u.default.createElement("div",{className:"width-fit-content margin-auto"},u.default.createElement(c.default,{open_fetching:!P})),u.default.createElement("div",{className:"display-flex flex-wrap"},g.map((function(e,t){return u.default.createElement("div",{key:"ProfileFriend_"+t,className:"ProfileFriend_item col-12 col-sm-6 col-lg-4"},u.default.createElement(d.default,{ix:t,user:e.friend,handelDeleteFriend:f}))})))))}r(17088),_.propTypes={},t.default=_},92859:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),l=p(a),u=p(r(45697)),i=r(15130),o=r(97943),c=p(r(8119)),s=p(r(57108)),d=p(r(39475)),f=p(r(16982));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=(0,a.useContext)(i.context_api),r=t.openMessage,n=t.openScreenConfirm,u=e.user,o=e.handelDeleteFriend;return l.default.createElement("div",{className:"FriendEdit position-rel box-shadow-1 brs-5px"},l.default.createElement("div",{className:"display-flex align-items-center"},l.default.createElement("div",{className:"FriendEdit_left brs-5px"},l.default.createElement(c.default,{user:u})),l.default.createElement("div",{className:"FriendEdit_right"},l.default.createElement(f.default,{title_action:"Friend",symbol_post:!1},l.default.createElement("div",{className:"FriendEdit_action brs-5px box-shadow-1"},l.default.createElement("div",{className:"FriendEdit_action-item",onClick:function(){n("Delete","Do you really want to delete this friend",(function(){return o(u.id)}))}},l.default.createElement(s.default,{Icon:d.default},"Delete")),l.default.createElement("div",{className:"FriendEdit_action-item",onClick:function(){r(u.id)}},l.default.createElement(s.default,{x:200,Icon:d.default},"Message")))))))}r(84369),m.propTypes=n({},o.user_propTypes,{confirmDelete:u.default.func}),t.default=m},81305:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=i(n),l=(i(r(45697)),i(r(59734))),u=i(r(88538));function i(e){return e&&e.__esModule?e:{default:e}}r(88095);var o=[{about:"work",title:"Work and study"},{about:"contact",title:"Contact"},{about:"personal",title:"Personal"}];function c(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("work"),2),t=e[0],r=e[1];return a.default.createElement("div",{className:"ProfileIntroduce"},a.default.createElement("div",{className:"ProfileIntroduce_container"},a.default.createElement("div",{className:"ProfileIntroduce_row"},a.default.createElement("div",{className:"ProfileIntroduce_col-menu box-shadow-1 brs-5px"},a.default.createElement("div",{className:"ProfileIntroduce__common App_title"},"Common"),o.map((function(e,n){return a.default.createElement("div",{key:"ProfileIntroduce__about_"+n,className:"ProfileIntroduce__about "+(t==e.about?"active-color":""),onClick:function(){return t=e.about,void r(t);var t}},e.title)}))),a.default.createElement("div",{className:"ProfileIntroduce_col-info box-shadow-1 brs-5px"},a.default.createElement("div",{className:"work"==t?"":"display-none"},a.default.createElement(l.default,null)),a.default.createElement("div",{className:"contact"==t?"":"display-none"},a.default.createElement(u.default,null)),a.default.createElement("div",{className:"personal"==t?"":"display-none"},"aaaa")))))}c.propTypes={},t.default=c},88538:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(67294),l=o(a),u=(o(r(45697)),o(r(48487))),i=o(r(37944));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(50234);var d=function(e){function t(){var e,r,n;c(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={contacts:[],current_edit:"",is_success:!1,shouldUpdate:!1},n.getContactList=function(){n.setState({contacts:[{name:"Phone",value:"",permission:"Public",x:0,y:200},{name:"Email",value:"",permission:"Public",x:200,y:0},{name:"Address",value:"",permission:"Public",x:0,y:0}]})},n.toggleEditing=function(e){n.setState({current_edit:n.state.current_edit==e?"":e})},n.onValueChange=function(e,t){var r=n.state.contacts;r[t].value=e,n.setState({contacts:r,shouldUpdate:!0})},n.onPermissionChange=function(e,t){var r=n.state.contacts;r[t].permission=e,n.setState({contacts:r,shouldUpdate:!0})},n.updateWork=function(){n.setState({current_edit:""});var e=n.state.contacts;if(n.state.shouldUpdate){var t={phone:e[0].value,permission_phone:e[0].permission,email:e[1].value,permission_email:e[1].permission,address:e[2].value,permission_address:e[2].permission};n.setState({is_success:!0,shouldUpdate:!1}),setTimeout((function(){n.setState({is_success:!1}),console.log(t)}),1500)}},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.getContactList()}},{key:"render",value:function(){var e=this,t=this.state,r=t.contacts,n=t.current_edit,a=t.shouldUpdate,o=t.is_success;return l.default.createElement("div",{className:"AboutContact"},l.default.createElement("div",{className:"App_title"},"Contact"),l.default.createElement("div",{className:"AboutContact_detail"},r.map((function(t,r){return l.default.createElement("div",{key:"AboutContact"+r},l.default.createElement(u.default,{x:t.x,y:t.y,name:t.name,value:t.value,permission:t.permission,is_editing:n===t.name,onValueChange:function(t){return e.onValueChange(t,r)},onPermissionChange:function(t){return e.onPermissionChange(t,r)},toggleEditing:e.toggleEditing}))})),l.default.createElement("br",null),l.default.createElement("div",{className:"AboutContact_update"},l.default.createElement("button",{className:"brs-5px",onClick:this.updateWork,title:"Update your work and study",disabled:!a},"Update"))),l.default.createElement(i.default,{is_show:o},"Updating Successfully"))}}]),t}(a.Component);d.propTypes={},t.default=d},59734:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(67294),l=o(a),u=(o(r(45697)),o(r(48487))),i=o(r(37944));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(33626);var d=function(e){function t(){var e,r,n;c(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={works:[],current_edit:"",is_success:!1,shouldUpdate:!1},n.getWorkList=function(){n.setState({works:[{name:"Work",value:""},{name:"University",value:""},{name:"High school",value:""}]})},n.toggleEditing=function(e){n.setState({current_edit:n.state.current_edit==e?"":e})},n.onValueChange=function(e,t){var r=n.state.works;r[t].value=e,n.setState({works:r,shouldUpdate:!0})},n.updateWork=function(){n.setState({current_edit:""});var e=n.state.works;if(n.state.shouldUpdate){var t={job:e[0].value,university:e[1].value,high_school:e[2].value};n.setState({is_success:!0,shouldUpdate:!1}),setTimeout((function(){n.setState({is_success:!1}),console.log(t)}),1500)}},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.getWorkList()}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"AboutWork"},l.default.createElement("div",{className:"App_title"},"Work and study"),l.default.createElement("div",{className:"AboutWork_detail"},this.state.works.map((function(t,r){return l.default.createElement("div",{key:"AboutWork"+r},l.default.createElement(u.default,{name:t.name,value:t.value,is_editing:e.state.current_edit===t.name,onValueChange:function(t){return e.onValueChange(t,r)},toggleEditing:e.toggleEditing}))})),l.default.createElement("br",null),l.default.createElement("div",{className:"AboutWork_update"},l.default.createElement("button",{className:"brs-5px",onClick:this.updateWork,title:"Update your work and study",disabled:!this.state.shouldUpdate},"Update"))),l.default.createElement(i.default,{is_show:this.state.is_success},"Updating Successfully"))}}]),t}(a.Component);d.propTypes={},t.default=d},74321:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(67294),u=o(l),i=(o(r(45697)),o(r(20045)),o(r(81972)));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(25097);var p=function(e){function t(){var e,r,a;d(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return r=a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={titles_pic:["common","profile picture","cover picture"],pictures:{},current_title:"common"},a.getPictures=function(e){a.state.pictures[e]||("Da Nang"===e?a.setState({pictures:n({},a.state.pictures,s({},e,[{picture:i.default}]))}):a.setState({pictures:n({},a.state.pictures,s({},e,[{picture:i.default},{picture:i.default}]))}))},a.changeCurrentTitle=function(e){a.getPictures(e),a.setState({current_title:e})},f(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.setState({titles_pic:[].concat(c(this.state.titles_pic),["Da Nang"])}),this.getPictures("common")}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"ProfilePicture"},u.default.createElement("div",{className:"ProfilePicture_titles"},this.state.titles_pic.map((function(t,r){return u.default.createElement("div",{key:"profile_title_pic_"+r,className:"ProfilePicture_title "+(e.state.current_title==t?"active-color":""),onClick:function(){return e.changeCurrentTitle(t)}},t)}))),u.default.createElement("br",null),u.default.createElement("div",{className:"ProfilePicture_pictures"},this.state.pictures[this.state.current_title]&&this.state.pictures[this.state.current_title].map((function(e,t){return u.default.createElement("div",{key:"profile_pic_"+t,className:"ProfilePicture_pic"},u.default.createElement("img",{src:e.picture,alt:""}))}))))}}]),t}(l.Component);p.propTypes={},t.default=p},96379:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=r(67294),u=_(l),i=r(93191),o=_(r(45697)),c=r(15130),s=r(28308),d=r(85449),f=_(r(27883)),p=r(70361),m=_(r(14122));function _(e){return e&&e.__esModule?e:{default:e}}function v(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function h(e){var t=(0,i.useParams)().id,r=(0,l.useContext)(c.context_api).user,o=e.last_name,_=(0,l.useState)({post_arr:[],count:0,is_fetching:!1,has_fetched:!1}),h=a(_,2),y=h[0],E=h[1],g=y.has_fetched,b=y.post_arr,P=y.is_fetching,w=(0,l.useRef)(0),k=(0,l.useRef)(!0),C=(0,l.useRef)(!1),O=(0,s.useMounted)();function N(){(0,d.WindowScrollDownBool)(w.current,k.current,C.current,.7)&&(w.current=window.pageYOffset,k.current=!0,j())}function j(){var e,t,r=this;E((e=regeneratorRuntime.mark((function e(t){var l,u,i,o,c,s,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=t.has_fetched,u=t.post_arr,i=t.count,E(n({},t,{is_fetching:!0})),e.next=5,(0,p.handle_API_ProfilePost_L)(u.length);case 5:o=e.sent,c=a(o,2),s=c[0],d=c[1],O&&(l&&(C.current=u.length>=i),u.push.apply(u,v(s)),E(n({},t,{count:l?i:d,is_fetching:!1,has_fetched:!0}))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.prev=15,k.current=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,r,[[0,12,15,18]])})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,l){try{var u=t[a](l),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(i)}("next")}))},function(e){return t.apply(this,arguments)}))}return(0,l.useEffect)((function(){return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[]),(0,l.useEffect)((function(){g&&(w.current=0,E((function(e){return n({},e,{has_fetched:!1,post_arr:[]})}))),j()}),[t]),u.default.createElement("div",{className:"ProfilePost bg-fb"},u.default.createElement("div",{className:"ProfilePost_row"},u.default.createElement("div",{className:"ProfilePost_col"},u.default.createElement("div",null),u.default.createElement("div",null,u.default.createElement(m.default,{posts:g?b:[{}],title_add_new:r.id==t?"Post a status update":"Write a post on "+o+"'s timeline"})),u.default.createElement("div",{className:"width-fit-content margin-auto"},u.default.createElement(f.default,{open_fetching:g&&P})))))}r(67897),h.propTypes={last_name:o.default.string},t.default=h},7838:(e,t,r)=>{"use strict";r.r(t)},66529:(e,t,r)=>{"use strict";r.r(t)},740:(e,t,r)=>{"use strict";r.r(t)},33768:(e,t,r)=>{"use strict";r.r(t)},78826:(e,t,r)=>{"use strict";r.r(t)},17088:(e,t,r)=>{"use strict";r.r(t)},84369:(e,t,r)=>{"use strict";r.r(t)},88095:(e,t,r)=>{"use strict";r.r(t)},50234:(e,t,r)=>{"use strict";r.r(t)},33626:(e,t,r)=>{"use strict";r.r(t)},25097:(e,t,r)=>{"use strict";r.r(t)},67897:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=873.js.map