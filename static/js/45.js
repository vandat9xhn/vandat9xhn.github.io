(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[45],{13989:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.user_related_obj={no_mutual_friend:"no_mutual_friend",has_mutual_friend:"has_mutual_friend",send_request:"send_request",received_request:"received_request",friend:"friend",c_user:"c_user"},t.permission_add_friend_obj={no_mutual_friend:0,has_mutual_friend:1,follow:2}},2434:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_sk_link_arr=[{sk:"",title:"Posts"},{sk:"about_overview",title:"About"},{sk:"friend",title:"Friends"},{sk:"photos_all",title:"Photos"}]},47348:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var n,a=r(67294),o=(n=r(7145))&&n.__esModule?n:{default:n};t.useRouteLoaded=function(e){var t=e.initial_route_arr,r=void 0===t?[]:t,n=e.allow_routes_str,l=void 0===n?"":n,u=e.part_location,i=void 0===u?"pathname":u,s=e.deps,c=void 0===s?[]:s,d=e.handleNotFoundRoute,f=void 0===d?function(){}:d,p=e.handleBeforeSetRouteLoaded,_=void 0===p?function(){}:p,m=e.handleAfterSetRouteLoaded,v=void 0===m?function(){}:m,y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(r),2),h=y[0],b=y[1],E=(0,a.useRef)(!1);function g(){E.current=!0}function P(){b((function(e){var t=e.findIndex((function(e){return e[i].includes(location[i])})),r=(0,o.default)(e,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t,{is_active:{$set:!0},is_loaded:{$set:!0}}));return r.map((function(e,r){return r!=t&&(e.is_active=!1,E.current&&(e.is_loaded=!1)),e})),E.current=!1,r}))}return(0,a.useLayoutEffect)((function(){g()}),c),(0,a.useLayoutEffect)((function(){l.includes(location[i])?(_(),E.current?function(){if(h.findIndex((function(e){return e[i].includes(location[i])}))==h.findIndex((function(e){return e.is_active})))return b(r),void setTimeout((function(){P()}),0);P()}():P(),v()):f()}),[location[i]].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(c))),{route_arr:h,should_reset:E,setRouteArr:b,makeReset:g}}},78295:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_profile={id:0,picture:"",cover:"",first_name:"",last_name:"",permission_add_friend:0,user_related:"c_user",is_block_message:0,gender_obj:{id:0,gender:"",permission:0,profile_model:0},birth_obj:{id:0,birth:"",permission:0,profile_model:0},lang_obj:{id:0,lang:"",permission:0,profile_model:0},life_arr:[],mail_obj:{id:0,mail:"",permission:0,profile_model:0},phone_arr:[],address_arr:[],town_arr:[],city_arr:[],family_arr:[{id:0,permission:0,profile_model:0,member:0}],relation_obj:{id:0,relation:"",permission:0,profile_model:0},work_arr:[],school_arr:[],university_arr:[],hobby_obj:{id:0,hobby:"",permission:0,profile_model:0},you_obj:{id:0,you:"",permission:0,profile_model:0},other_name_arr:[],is_online:!0,created_time:""},t.initial_friend=function(){return{id:0,first_name:"",last_name:"",picture:""}}},42488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=l(n),o=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.route_arr,r=e.fallback,o=e.use_loaded;return a.default.createElement("div",null,a.default.createElement(n.Suspense,{fallback:r},t.map((function(e,t){return a.default.createElement("div",{key:"RouteLoaded_"+t,className:e.is_active?"":"display-none"},(o?e.is_loaded:e.is_active)&&a.default.createElement(e.component,e.props||{}))}))),t.some((function(e){return e.is_active}))?a.default.createElement("div",null):a.default.createElement("div",{className:"opacity-0"},r))}u.propTypes={route_arr:o.default.array,fallback:o.default.element,use_loaded:o.default.bool},u.defaultProps={part_location:"pathname",fallback:a.default.createElement(n.Fragment,null),use_loaded:!0},t.default=u},7157:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.profile_search_arr=t.ProfileRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=r(12471),l=r(83655),u=a.default.lazy((function(){return Promise.all([r.e(6930),r.e(8441),r.e(9650),r.e(6272),r.e(3498),r.e(4596)]).then(r.bind(r,94596))})),i=a.default.lazy((function(){return r.e(1189).then(r.bind(r,1189))})),s=a.default.lazy((function(){return r.e(117).then(r.bind(r,10117))})),c=a.default.lazy((function(){return r.e(8780).then(r.bind(r,38780))})),d=t.ProfileRoutes=[{component:u,search:"",is_active:!1,is_loaded:!1,props:{}},{component:i,search:o.about_searches_str,is_active:!1,is_loaded:!1,props:{}},{component:c,search:l.photos_searches_str,is_active:!1,is_loaded:!1,props:{}},{component:s,search:"?sk=friend",is_active:!1,is_loaded:!1,props:{}}];t.profile_search_arr=d.reduce((function(e,t){return e+t.search}),"")},40673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return n.default.createElement("div",{className:"ProfileSkeleton margin-auto h-100vh bg-primary"})}a(r(45697)),r(352),o.propTypes={},t.default=o},20045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=v(a),l=r(93191),u=v(r(7145)),i=(v(r(45697)),r(47348)),s=v(r(42488)),c=r(7157),d=r(78295),f=r(10666),p=v(r(40673)),_=v(r(77879)),m=v(r(95319));function v(e){return e&&e.__esModule?e:{default:e}}r(740),t.default=function(e){var t,r,v=(t=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(n({},E,{is_fetching:!0})),e.next=3,(0,f.handle_API_ProfileUser_R)({user_id:h});case 3:t=e.sent,r=t.first_name+" "+t.last_name,w.map((function(e){return e.props={name:r,user_id:h},e})),g({profile:t,is_fetching:!1}),document.title=r;case 8:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),y=(0,l.useHistory)(),h=e.match.params.id,b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({profile:d.initial_profile,is_fetching:!1}),2),E=b[0],g=b[1],P=E.profile,j=E.is_fetching;(0,a.useEffect)((function(){window.scroll(0,0),v()}),[h]);var k=(0,i.useRouteLoaded)({initial_route_arr:(0,u.default)(c.ProfileRoutes,{0:{props:{$set:{}}}}),part_location:"search",allow_routes_str:c.profile_search_arr,deps:[h],handleNotFoundRoute:function(){y.replace("/profile/"+h)}}),w=k.route_arr;return k.makeReset,o.default.createElement("div",{key:h,className:"Profile"},o.default.createElement("div",{className:"Profile_info"},o.default.createElement(_.default,{profile:P,is_fetching:j,openCoverPicture:function(){console.log(h)},openPicture:function(){console.log(h)}})),o.default.createElement("div",{className:"Profile_more"},o.default.createElement(m.default,null)),o.default.createElement(s.default,{route_arr:w,fallback:o.default.createElement(p.default,null)}))}},77879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=f(n),o=f(r(45697)),l=r(15130),u=f(r(29875));r(33768);var i=f(r(20658)),s=f(r(27248)),c=f(r(18069)),d=f(r(17852));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=e.profile,r=e.is_fetching,o=e.openCoverPicture,f=e.openPicture,p=(0,n.useContext)(l.context_api).user,_=t.id,m=t.picture,v=t.cover,y=t.first_name,h=t.last_name,b=t.user_related,E=t.permission_add_friend,g=t.is_block_message,P=t.you_obj.you,j=t.other_name_arr.length?t.other_name_arr[0].other_name:"";return a.default.createElement(d.default,null,a.default.createElement("div",{className:"ProfileInfo bg-primary"},a.default.createElement(c.default,{cover:v,picture:m,is_fetching:r,openCoverPicture:o,openPicture:f}),r?a.default.createElement("div",null,a.default.createElement("br",null),a.default.createElement(u.default,{num:2})):a.default.createElement(s.default,{name:y+" "+h,nick_name:j,story:P,is_user:p.id==_,handleChangeStory:function(){console.log(_)}}),r?a.default.createElement("div",{className:"ProfileInfo_actions"},a.default.createElement("br",null)," ",a.default.createElement(u.default,null)):a.default.createElement(i.default,{id:_,is_user:p.id==_,user_related:b,permission_add_friend:E,is_block_message:g,handleAddStory:function(){console.log(_)},handleAcceptRequest:function(){console.log(_)},handleCancelRequest:function(){console.log(_)},handleAddFriend:function(){console.log(_)},handleFollowFriend:function(){console.log(_)}})))}p.propTypes={profile:o.default.object,openCoverPicture:o.default.func,openPicture:o.default.func},t.default=p},20658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=i(n),o=(i(r(45697)),r(15130)),l=i(r(48454)),u=r(9449);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.id,r=e.is_user,i=e.user_related,s=e.permission_add_friend,c=e.is_block_message,d=e.handleAddStory,f=e.handleAcceptRequest,p=e.handleCancelRequest,_=e.handleAddFriend,m=e.handleFollowFriend,v=(0,n.useContext)(o.context_api).openRoomChat;return a.default.createElement("div",{className:"ProfileInfoActions"},a.default.createElement("div",{className:"brs-5px font-500"},a.default.createElement("div",{className:"display-flex-center"},a.default.createElement("div",{className:"display-flex-center"},a.default.createElement("div",{className:"ProfileInfoActions_add-friend display-flex-center brs-5px"},(0,u.handleInfoActions)(i,s,d,f,p,_,m))),!c&&!r&&a.default.createElement("div",{className:"ProfileInfoActions_message",title:"message",onClick:function(){v(t)}},a.default.createElement(l.default,{x:200,y:200,size_icon:"2rem"})))))}r(89662),s.propTypes={},t.default=s},9449:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleInfoActions=function(e,t,r,d,f,p,_){switch(e){case a.user_related_obj.c_user:return n.default.createElement(c.default,{handleAddStory:r});case a.user_related_obj.friend:return n.default.createElement(l.default,null);case a.user_related_obj.received_request:return n.default.createElement(i.default,{handleAcceptRequest:d,handleCancelRequest:f});case a.user_related_obj.send_request:return n.default.createElement(s.default,{handleCancelRequest:f});case a.user_related_obj.has_mutual_friend:return t<=1?n.default.createElement(u.default,{handleAddFriend:p}):n.default.createElement(o.default,{handleFollowFriend:_});case a.user_related_obj.no_mutual_friend:return 0==t?n.default.createElement(u.default,{handleAddFriend:p}):n.default.createElement(o.default,{handleFollowFriend:_});default:return n.default.createElement("div",null)}};var n=d(r(67294)),a=r(13989),o=d(r(56078)),l=d(r(17769)),u=d(r(46510)),i=d(r(21005)),s=d(r(983)),c=d(r(88614));function d(e){return e&&e.__esModule?e:{default:e}}},56078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleFollowFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"FOLLOW +"))}a(r(45697)),o.propTypes={},t.default=o},17769:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return n.default.createElement("div",null,n.default.createElement("div",null,"Friend"))}a(r(45697)),o.propTypes={},t.default=o},46510:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(57108))),o=l(r(39475));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleAddFriend;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{y:200,color:"#000000ad",Icon:o.default},"Add friend")))}u.propTypes={},t.default=u},21005:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=l(n),o=(l(r(45697)),l(r(35214)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleAcceptRequest,r=e.handleCancelRequest,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),u=l[0],i=l[1];return a.default.createElement(o.default,{makeDivHidden:function(){u&&i(!1)}},a.default.createElement("div",{className:"pos-rel"},a.default.createElement("div",{onClick:function(){i(!u)}},"Reply request"),a.default.createElement("div",{className:"CaseReceivedRequest_response bg-primary box-shadow-1 "+(u?"":"display-none")},a.default.createElement("div",{className:"flex-between-center"},a.default.createElement("div",{className:"CaseReceivedRequest_response-item",onClick:function(){i(!1),t()}},"Accept"),a.default.createElement("div",{className:"CaseReceivedRequest_response-item",onClick:function(){i(!1),r()}},"Deny")))))}r(29785),u.propTypes={},t.default=u},983:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(57108))),o=l(r(39475));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleCancelRequest;return n.default.createElement("div",{onClick:t},n.default.createElement(a.default,{Icon:o.default,y:200},"Cancel request"))}u.propTypes={},t.default=u},88614:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleAddStory;return n.default.createElement("div",null,n.default.createElement("div",{onClick:t},"Add story"))}a(r(45697)),o.propTypes={},t.default=o},18069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=r(93191);function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.cover,r=e.picture,o=e.is_fetching,l=e.openCoverPicture,u=e.openPicture;return n.default.createElement("div",{className:"ProfileInfoPicture pos-rel "+(o?"pointer-events-none":"")},n.default.createElement("div",{className:"ProfileInfoPicture_cover"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{className:"w-100per brs-5px object-fit-cover box-shadow-1",src:o?"":t,alt:"",onClick:l}))),n.default.createElement("div",{className:"ProfileInfoPicture_profile pos-abs top-100per x-center"},n.default.createElement("div",{className:"ProfileInfoPicture_profile_contain pos-abs bottom-0 x-center"},n.default.createElement(a.Link,{to:"/posts/1"},n.default.createElement("img",{className:"object-fit-cover brs-50 box-shadow-1 "+(o?"ProfileInfoPicture_profile-fetching overflow-hidden bg-primary":""),src:o?"":r,alt:"",onClick:u})))))}o(r(45697)),r(42724),l.propTypes={},t.default=l},27248:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_user,r=e.name,a=e.nick_name,o=e.story,l=e.handleChangeStory;return n.default.createElement("div",{className:"ProfileInfoStory"},n.default.createElement("div",{className:"ProfileInfoStory_head display-flex-center"},n.default.createElement("div",{className:"display-flex"},n.default.createElement("h2",{className:"ProfileInfoStory_name margin-0 display-flex"},n.default.createElement("div",null,r),n.default.createElement("div",{className:a?"ProfileInfoStory__nick":"display-none"},"(",a,")")))),n.default.createElement("div",{className:"ProfileInfoStory_story text-align-center"},n.default.createElement("div",{onClick:t?l:void 0},n.default.createElement("div",{className:o?"":"display-none"},o),n.default.createElement("div",{className:o?"display-none":""},t?"Add your story":""))))}a(r(45697)),r(59848),o.propTypes={},t.default=o},95319:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=r(2434),o=l(r(39012));function l(e){return e&&e.__esModule?e:{default:e}}r(45791),t.default=function(e){return n.default.createElement("div",{className:"ProfileMore box-shadow-1 bg-primary padding-4px overflow-x-auto"},n.default.createElement("div",{className:"width-fit-content margin-auto"},n.default.createElement("ul",{className:"ProfileMore_list display-flex list-none"},a.data_sk_link_arr.map((function(e,t){return n.default.createElement("li",{key:""+t,className:"ProfileMore_item padding-x-8px"},n.default.createElement(o.default,{sk:e.sk,title:e.title}))})))))}},39012:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(93191));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.sk,r=e.title;return n.default.createElement(a.NavLink,{to:location.pathname+(t?"?sk=":"")+t,className:location.search.startsWith("?sk="+t.split("_")[0])&&""!=t||""==location.search&&""==t?"nav-active":"normal-text",replace:!0},n.default.createElement("div",{className:"ProfileMoreItem padding-8px hv-bg-blur cursor-pointer font-500 text-secondary nav-text nav-bottom"},r))}r(17858),l.propTypes={},t.default=l},12471:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.common_about_title=t.about_searches_str=t.AboutRoutes=t.AboutCommonRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=a.default.lazy((function(){return r.e(3290).then(r.bind(r,33290))})),l=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(2485)]).then(r.bind(r,76047))})),u=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(486)]).then(r.bind(r,40843))})),i=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(8224)]).then(r.bind(r,31157))})),s=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(7678)]).then(r.bind(r,52694))})),c=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(6552)]).then(r.bind(r,59149))})),d=a.default.lazy((function(){return Promise.all([r.e(5680),r.e(217)]).then(r.bind(r,97684))})),f=t.AboutCommonRoutes=[{component:o,search:"?sk=about_overview",props:{},title:"Overview"},{component:l,search:"?sk=about_place_lived",props:{},title:"Place lived"},{component:u,search:"?sk=about_work_edu",props:{},title:"Work and education"},{component:i,search:"?sk=about_contact",props:{},title:"Contact and basis info"},{component:s,search:"?sk=about_family_relationships",props:{},title:"Family and relationships"},{component:c,search:"?sk=about_details",props:{},title:"Details"},{component:d,search:"?sk=about_life_events",props:{},title:"Life events"}];t.AboutRoutes=f.map((function(e){return{component:e.component,search:e.search,props:e.props,is_active:!1,is_loaded:!1}})),t.about_searches_str=f.reduce((function(e,t){return e+t.search}),""),t.common_about_title=f.map((function(e){return{search:e.search,title:e.title}}))},83655:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.photos_searches_str=t.PhotosRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=a.default.lazy((function(){return r.e(5147).then(r.bind(r,35147))})),l=a.default.lazy((function(){return r.e(2426).then(r.bind(r,82426))})),u=t.PhotosRoutes=[{component:l,search:"?sk=photos_album",props:{}},{component:o,search:"?sk=photos_all",props:{}}];t.photos_searches_str=u.reduce((function(e,t){return e+t.search}),"")},7145:(e,t)=>{"use strict";function r(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var n="object"==typeof process&&!0;function a(e,t){if(!e){if(n)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=a;var o=Object.prototype.hasOwnProperty,l=Array.prototype.splice,u=Object.prototype.toString;function i(e){return u.call(e).slice(8,-1)}var s=Object.assign||function(e,t){return c(t).forEach((function(r){o.call(t,r)&&(e[r]=t[r])})),e},c="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?s(e.constructor(e.length),e):"Map"===i(e)?new Map(e):"Set"===i(e)?new Set(e):e&&"object"==typeof e?s(Object.create(Object.getPrototypeOf(e)),e):e}var f=function(){function e(){this.commands=s({},p),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var r=this,n="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(n)||a(!Array.isArray(n),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),a("object"==typeof n&&null!==n,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(r.commands).join(", ")+"."}));var l=e;return c(n).forEach((function(t){if(o.call(r.commands,t)){var a=e===l;l=r.commands[t](n[t],l,n,e),a&&r.isEquals(l,e)&&(l=e)}else{var u="Map"===i(e)?r.update(e.get(t),n[t]):r.update(e[t],n[t]),s="Map"===i(l)?l.get(t):l[t];r.isEquals(u,s)&&(void 0!==u||o.call(e,t))||(l===e&&(l=d(e)),"Map"===i(l)?l.set(t,u):l[t]=u)}})),l},e}();t.Context=f;var p={$push:function(e,t,r){return m(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return m(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){a(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+r(e)})),y(t.$splice)}(t,n),e.forEach((function(e){y(e),t===o&&e.length&&(t=d(o)),l.apply(t,e)})),t},$set:function(e,t,r){return function(e){a(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(r),e},$toggle:function(e,t){v(e,"$toggle");var r=e.length?d(t):t;return e.forEach((function(e){r[e]=!t[e]})),r},$unset:function(e,t,r,n){return v(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=d(n)),delete t[e])})),t},$add:function(e,t,r,n){return h(t,"$add"),v(e,"$add"),"Map"===i(t)?e.forEach((function(e){var r=e[0],a=e[1];t===n&&t.get(r)!==a&&(t=d(n)),t.set(r,a)})):e.forEach((function(e){t!==n||t.has(e)||(t=d(n)),t.add(e)})),t},$remove:function(e,t,r,n){return h(t,"$remove"),v(e,"$remove"),e.forEach((function(e){t===n&&t.has(e)&&(t=d(n)),t.delete(e)})),t},$merge:function(e,t,n,o){var l,u;return l=t,a((u=e)&&"object"==typeof u,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(u)})),a(l&&"object"==typeof l,(function(){return"update(): $merge expects a target of type 'object'; got "+r(l)})),c(e).forEach((function(r){e[r]!==t[r]&&(t===o&&(t=d(o)),t[r]=e[r])})),t},$apply:function(e,t){var n;return a("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),e(t)}},_=new f;function m(e,t,n){a(Array.isArray(e),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(e)+"."})),v(t[n],n)}function v(e,t){a(Array.isArray(e),(function(){return"update(): expected spec of "+r(t)+" to be an array; got "+r(e)+". Did you forget to wrap your parameter in an array?"}))}function y(e){a(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(e)+". Did you forget to wrap your parameters in an array?"}))}function h(e,t){var n=i(e);a("Map"===n||"Set"===n,(function(){return"update(): "+r(t)+" expects a target of type Set or Map; got "+r(n)}))}t.isEquals=_.update.isEquals,t.extend=_.extend,t.default=_.update,t.default.default=e.exports=s(t.default,t)},352:(e,t,r)=>{"use strict";r.r(t)},740:(e,t,r)=>{"use strict";r.r(t)},33768:(e,t,r)=>{"use strict";r.r(t)},89662:(e,t,r)=>{"use strict";r.r(t)},29785:(e,t,r)=>{"use strict";r.r(t)},42724:(e,t,r)=>{"use strict";r.r(t)},59848:(e,t,r)=>{"use strict";r.r(t)},45791:(e,t,r)=>{"use strict";r.r(t)},17858:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=45.js.map