(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[45],{2434:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_sk_link_arr=[{sk:"",title:"Posts"},{sk:"about_overview",title:"About"},{sk:"friend",title:"Friends"},{sk:"photos_all",title:"Photos"}]},47348:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var n,a=r(67294),o=(n=r(7145))&&n.__esModule?n:{default:n};t.useRouteLoaded=function(e){var t=e.initial_route_arr,r=void 0===t?[]:t,n=e.allow_routes_str,l=void 0===n?"":n,u=e.part_location,i=void 0===u?"pathname":u,c=e.deps,s=void 0===c?[]:c,f=e.handleNotFoundRoute,d=void 0===f?function(){}:f,p=e.handleBeforeSetRouteLoaded,m=void 0===p?function(){}:p,_=e.handleAfterSetRouteLoaded,v=void 0===_?function(){}:_,h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(r),2),y=h[0],b=h[1],E=(0,a.useRef)(!1);function P(){E.current=!0}function g(){b((function(e){var t=e.findIndex((function(e){return e[i].includes(location[i])})),r=(0,o.default)(e,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t,{is_active:{$set:!0},is_loaded:{$set:!0}}));return r.map((function(e,r){return r!=t&&(e.is_active=!1,E.current&&(e.is_loaded=!1)),e})),E.current=!1,r}))}return(0,a.useLayoutEffect)((function(){P()}),s),(0,a.useLayoutEffect)((function(){l.includes(location[i])?(m(),E.current?function(){if(y.findIndex((function(e){return e[i].includes(location[i])}))==y.findIndex((function(e){return e.is_active})))return b(r),void setTimeout((function(){g()}),0);g()}():g(),v()):d()}),[location[i]].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(s))),{route_arr:y,should_reset:E,setRouteArr:b,makeReset:P}}},42488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=l(n),o=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.route_arr,r=e.fallback,o=e.use_loaded;return a.default.createElement("div",null,a.default.createElement(n.Suspense,{fallback:r},t.map((function(e,t){return a.default.createElement("div",{key:"RouteLoaded_"+t,className:e.is_active?"":"display-none"},(o?e.is_loaded:e.is_active)&&a.default.createElement(e.component,e.props||{}))}))),t.some((function(e){return e.is_active}))?a.default.createElement("div",null):a.default.createElement("div",{className:"opacity-0"},r))}u.propTypes={route_arr:o.default.array,fallback:o.default.element,use_loaded:o.default.bool},u.defaultProps={part_location:"pathname",fallback:a.default.createElement(n.Fragment,null),use_loaded:!0},t.default=u},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(45697)),o=u(r(88303)),l=u(r(14767));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.pic_arr,r=e.has_more,a=e.ItemComponent,l=e.clickMore;return n.default.createElement("div",{className:"flex-end row-reverse"},r&&n.default.createElement("div",{className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},n.default.createElement(a,{picture:t[0].picture}),n.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:l},n.default.createElement(o.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return n.default.createElement("div",{key:t,className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img"},n.default.createElement(a,{picture:e.picture})))})))}r(89666),i.propTypes={pic_arr:a.default.array,has_more:a.default.bool,ItemComponent:a.default.func,clickMore:a.default.func},i.defaultProps={ItemComponent:l.default},t.default=i},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture;return n.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}a(r(45697)),o.propTypes={},t.default=o},7157:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.profile_search_arr=t.ProfileRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=r(12471),l=r(83655),u=a.default.lazy((function(){return Promise.all([r.e(319),r.e(6490),r.e(6272),r.e(898),r.e(7294),r.e(4596)]).then(r.bind(r,94596))})),i=a.default.lazy((function(){return r.e(1189).then(r.bind(r,1189))})),c=a.default.lazy((function(){return r.e(117).then(r.bind(r,10117))})),s=a.default.lazy((function(){return r.e(8780).then(r.bind(r,38780))})),f=t.ProfileRoutes=[{component:u,search:"",is_active:!1,is_loaded:!1,props:{}},{component:i,search:o.about_searches_str,is_active:!1,is_loaded:!1,props:{}},{component:s,search:l.photos_searches_str,is_active:!1,is_loaded:!1,props:{}},{component:c,search:"?sk=friend",is_active:!1,is_loaded:!1,props:{}}];t.profile_search_arr=f.reduce((function(e,t){return e+t.search}),"")},40673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return n.default.createElement("div",{className:"ProfileSkeleton margin-auto h-100vh bg-primary"})}a(r(45697)),r(352),o.propTypes={},t.default=o},20045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=y(a),l=r(93191),u=y(r(7145)),i=(y(r(45697)),r(55852)),c=r(80941),s=r(78295),f=r(47348),d=y(r(42488)),p=r(7157),m=y(r(40673)),_=y(r(77879)),v=y(r(95319)),h=y(r(92456));function y(e){return e&&e.__esModule?e:{default:e}}r(740),t.default=function(e){var t,r,y=(t=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(n({},g,{is_fetching:!0})),e.next=3,(0,c.handle_API_ProfileInfo_R)({user_id:E});case 3:t=e.sent,r=t.first_name+" "+t.last_name,M.map((function(e){return e.props={name:r,user_id:E},e})),k(n({},g,{profile:t,is_fetching:!1})),document.title=r;case 8:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),b=(0,l.useHistory)(),E=(0,l.useParams)().id,P=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({profile:(0,s.initial_profile)(),is_fetching:!1}),2),g=P[0],k=P[1],x=g.profile,w=g.is_fetching;(0,a.useEffect)((function(){window.scroll(0,0),y()}),[E]);var N=(0,f.useRouteLoaded)({initial_route_arr:(0,u.default)(p.ProfileRoutes,{0:{props:{$set:{}}}}),part_location:"search",allow_routes_str:p.profile_search_arr,deps:[E],handleNotFoundRoute:function(){0==location.pathname.search("/profile")&&b.replace("/profile/"+E)}}),M=N.route_arr;function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)}return N.makeReset,w?null:o.default.createElement("div",{key:E,className:"Profile"},o.default.createElement("div",{className:"Profile_head margin-bottom-15px bg-primary"},o.default.createElement("div",{className:"Profile_info"},o.default.createElement(_.default,{profile:x,openCoverPicture:function(){console.log(E)},openPicture:function(){console.log(E)},handleAction:O})),x.sent_request?o.default.createElement("div",{className:"Profile_sent_request margin-top-20px"},o.default.createElement(h.default,{user_name:x.first_name+" "+x.last_name,handleAction:O})):null,i.IS_MOBILE?null:o.default.createElement("div",{className:"Profile_more margin-top-20px"},o.default.createElement(v.default,{user_id:E,handleAction:O}))),o.default.createElement(d.default,{route_arr:M,fallback:o.default.createElement(m.default,null)}))}},77879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=_(n),o=_(r(45697)),l=r(15130),u=r(55852),i=_(r(17852)),c=_(r(20658)),s=_(r(59625)),f=_(r(18069)),d=_(r(90410)),p=_(r(87227)),m=_(r(5675));function _(e){return e&&e.__esModule?e:{default:e}}function v(e){var t=e.profile,r=e.openCoverPicture,o=e.openPicture,_=e.handleAction,v=(0,n.useContext)(l.context_api).user,h=t.id,y=t.first_name,b=t.last_name,E=t.picture,P=t.cover,g=t.has_new_story,k=t.nick_name,x=t.bio,w=t.friend_arr,N=t.friend_count,M=t.mutual_friend_arr,O=t.mutual_friend_count,j=t.has_more_friend,A=t.action_case_arr,I=v.id==h;return a.default.createElement(i.default,null,a.default.createElement("div",{className:"ProfileInfo bg-primary"},a.default.createElement("div",{className:"ProfileInfo_cover"},a.default.createElement(d.default,{cover:P,openCoverPicture:r})),a.default.createElement("div",{className:"ProfileInfo_user_action display-flex space-between fb-profile-width-contain"},a.default.createElement("div",{className:"ProfileInfo_user display-flex"},a.default.createElement("div",{className:"flex-shrink-0"},a.default.createElement(f.default,{picture:E,has_new_story:g,openPicture:o})),a.default.createElement("div",{className:"ProfileInfo_name_friend margin-left-16px"},a.default.createElement("div",null,a.default.createElement(p.default,{name:y+" "+b,nick_name:k})),u.IS_MOBILE?null:a.default.createElement("div",null,a.default.createElement(m.default,{is_user:I,friend_count:N,mutual_friend_count:O,friend_arr:O>0?M:w,has_more_friend:j})))),a.default.createElement("div",{className:"ProfileInfo_actions align-self-end"},a.default.createElement(c.default,{user_id:h,action_case_arr:A,handleAction:_}))),x?a.default.createElement("div",{className:"ProfileInfo_bio fb-profile-width-contain padding-top-20px"},a.default.createElement(s.default,{is_user:I,bio:x,handleChangeBio:function(){console.log(h)}})):null))}r(33768),v.propTypes={profile:o.default.object,openCoverPicture:o.default.func,openPicture:o.default.func},t.default=v},20658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(55852)),o=u(r(40808)),l=u(r(87049));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.action_case_arr,r=e.user_id,u=e.handleAction;return n.default.createElement("div",{className:"ProfileInfoActions"},n.default.createElement("div",{className:"flex-end align-items-center flex-wrap"},t.slice(0,a.IS_MOBILE?1:2).map((function(e,t){return n.default.createElement("div",{key:t,className:"ProfileInfoActions_item margin-x-4px margin-top-8px"},n.default.createElement(o.default,{action_case:e.name,user_id:r,handleAction:u}))})),a.IS_MOBILE?n.default.createElement("div",{className:"margin-x-4px margin-top-8px "+(2==t.length?"flex-grow-1 display-flex align-items-center":"")},2==t.length?n.default.createElement("div",{className:"ProfileInfoActions_item"},n.default.createElement(o.default,{action_case:t[1].name,user_id:r,handleAction:u})):null,n.default.createElement("div",{className:2==t.length?"margin-left-8px":""},n.default.createElement(l.default,{user_id:r,handleAction:u}))):null))}r(89662),i.propTypes={},t.default=i},59625:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_user,r=e.bio,a=e.handleChangeBio;return n.default.createElement("div",{className:"ProfileInfoBio margin-auto"},n.default.createElement("div",{className:"ProfileInfoBio_contain text-align-center"},n.default.createElement("div",{onClick:t?a:void 0},r)))}a(r(45697)),r(50724),o.propTypes={},t.default=o},90410:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=r(93191);function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.cover,r=e.openCoverPicture;return n.default.createElement("div",{className:"ProfileInfoCover pos-rel"},n.default.createElement("div",{className:"ProfileInfoCover_contain margin-auto pos-rel"},n.default.createElement(a.Link,{className:"pos-abs-0 wh-100",to:"/posts/1"},n.default.createElement("img",{className:"ProfileInfoCover_img wh-100 object-fit-cover",src:t,alt:"",onClick:r}))),n.default.createElement("div",null))}o(r(45697)),r(58502),l.propTypes={},t.default=l},5675:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(93191)),o=u(r(52636)),l=u(r(43174));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.is_user,r=e.friend_count,u=e.mutual_friend_count,i=e.friend_arr,c=e.has_more_friend;return n.default.createElement("div",{className:"ProfileInfoFriends"},n.default.createElement("div",null,n.default.createElement(l.default,{friend_count:r,mutual_friend_count:u,is_user:t})),n.default.createElement("div",{className:"padding-top-8px"},n.default.createElement(a.Link,{to:"?sk=friend"+(u?"&type=mutual":"")},n.default.createElement(o.default,{pic_arr:i,has_more:c}))))}r(95932),i.propTypes={},t.default=i},43174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(93191));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.friend_count,r=e.mutual_friend_count,o=e.is_user;return n.default.createElement("div",{className:"text-secondary font-500"},t?n.default.createElement(a.Link,{to:"?sk=friend",className:"color-inherit hv-underline"},t," Friend",t>=2?"s":""):null,t&&r&&!o?" · ":"",!o&&r?n.default.createElement(a.Link,{to:"?sk=friend&type=mutual",className:"color-inherit hv-underline"},r," mutual friend",r>=2?"s":""):null)}l.propTypes={},t.default=l},87227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name,r=e.nick_name;return n.default.createElement("div",{className:"ProfileInfoName"},n.default.createElement("h1",{className:"ProfileInfoName_name"},t,r?n.default.createElement("span",{className:"ProfileInfoName_nick margin-left-8px font-400"},"(",r,")"):null))}a(r(45697)),r(44501),o.propTypes={},t.default=o},18069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=r(93191);function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.picture,r=e.has_new_story,o=e.openPicture;return n.default.createElement("div",{className:"ProfileInfoPicture pos-rel h-100per"},n.default.createElement("div",{className:"ProfileInfoPicture_contain pos-abs bottom-0 left-0 w-100per"},n.default.createElement(a.Link,{className:"ProfileInfoPicture_link display-block w-100per brs-50 box-shadow-1 "+(r?"ProfileInfoPicture_link-story":""),to:"/posts/1"},n.default.createElement("img",{className:"ProfileInfoPicture_img w-100per brs-50 object-fit-cover",src:t,height:"160",alt:"",onClick:o}))))}o(r(45697)),r(42724),l.propTypes={},t.default=l},95319:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=r(2434),o=u(r(87049)),l=u(r(39012));function u(e){return e&&e.__esModule?e:{default:e}}r(45791),t.default=function(e){var t=e.user_id,r=e.handleAction;return n.default.createElement("div",{className:"ProfileMore pos-rel margin-auto border-top-blur"},n.default.createElement("ul",{className:"ProfileMore_list flex-grow-1 display-flex list-none overflow-x-auto"},a.data_sk_link_arr.map((function(e,t){return n.default.createElement("li",{key:t,className:"ProfileMore_item"},n.default.createElement(l.default,{sk:e.sk,title:e.title}))}))),n.default.createElement("div",{className:"pos-abs right-0 y-center z-index-1"},n.default.createElement(o.default,{user_id:t,handleAction:r})))}},39012:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(93191));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.sk,r=e.title;return n.default.createElement(a.NavLink,{to:location.pathname+(t?"?sk=":"")+t,className:location.search.startsWith("?sk="+t.split("_")[0])&&""!=t||""==location.search&&""==t?"ProfileMoreItem-active nav-active":"normal-text",replace:!0},n.default.createElement("div",{className:"ProfileMoreItem_contain display-flex-center padding-x-15px cursor-pointer font-600 text-secondary nav-text"},r))}r(17858),l.propTypes={},t.default=l},92456:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(27345)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.user_name,r=e.handleAction;return n.default.createElement("div",{className:"ProfileSentFriendRequest fb-profile-width-contain padding-16px bg-fb"},n.default.createElement("div",{className:"ProfileSentFriendRequest_row flex-between-center"},n.default.createElement("div",{className:"ProfileSentFriendRequest_title font-17px font-600"},t," sent you a friend request"),n.default.createElement("div",{className:"display-flex flex-wrap"},n.default.createElement("div",{className:"ProfileSentFriendRequest_btn margin-5px"},n.default.createElement(a.default,{className:"bg-blue text-white",title:"Confirm Request",handleClick:function(){r("confirm_request")}})),n.default.createElement("div",{className:"ProfileSentFriendRequest_btn margin-5px"},n.default.createElement(a.default,{className:"bg-ccc",title:"Delete Request",handleClick:function(){r("delete_request")}})))))}r(98589),l.propTypes={},t.default=l},12471:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.common_about_title=t.about_searches_str=t.AboutRoutes=t.AboutCommonRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=a.default.lazy((function(){return r.e(3290).then(r.bind(r,33290))})),l=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(8897)]).then(r.bind(r,76047))})),u=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(8551)]).then(r.bind(r,40843))})),i=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(5803)]).then(r.bind(r,31157))})),c=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(1072)]).then(r.bind(r,52694))})),s=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(4376)]).then(r.bind(r,59149))})),f=a.default.lazy((function(){return Promise.all([r.e(7946),r.e(5102)]).then(r.bind(r,97684))})),d=t.AboutCommonRoutes=[{component:o,search:"?sk=about_overview",props:{},title:"Overview"},{component:l,search:"?sk=about_place_lived",props:{},title:"Place lived"},{component:u,search:"?sk=about_work_edu",props:{},title:"Work and education"},{component:i,search:"?sk=about_contact",props:{},title:"Contact and basis info"},{component:c,search:"?sk=about_family_relationships",props:{},title:"Family and relationships"},{component:s,search:"?sk=about_details",props:{},title:"Details"},{component:f,search:"?sk=about_life_events",props:{},title:"Life events"}];t.AboutRoutes=d.map((function(e){return{component:e.component,search:e.search,props:e.props,is_active:!1,is_loaded:!1}})),t.about_searches_str=d.reduce((function(e,t){return e+t.search}),""),t.common_about_title=d.map((function(e){return{search:e.search,title:e.title}}))},83655:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.photos_searches_str=t.PhotosRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=a.default.lazy((function(){return r.e(5147).then(r.bind(r,35147))})),l=a.default.lazy((function(){return r.e(2426).then(r.bind(r,82426))})),u=t.PhotosRoutes=[{component:l,search:"?sk=photos_album",props:{}},{component:o,search:"?sk=photos_all",props:{}}];t.photos_searches_str=u.reduce((function(e,t){return e+t.search}),"")},7145:(e,t)=>{"use strict";function r(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var n="object"==typeof process&&!0;function a(e,t){if(!e){if(n)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=a;var o=Object.prototype.hasOwnProperty,l=Array.prototype.splice,u=Object.prototype.toString;function i(e){return u.call(e).slice(8,-1)}var c=Object.assign||function(e,t){return s(t).forEach((function(r){o.call(t,r)&&(e[r]=t[r])})),e},s="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function f(e){return Array.isArray(e)?c(e.constructor(e.length),e):"Map"===i(e)?new Map(e):"Set"===i(e)?new Set(e):e&&"object"==typeof e?c(Object.create(Object.getPrototypeOf(e)),e):e}var d=function(){function e(){this.commands=c({},p),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var r=this,n="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(n)||a(!Array.isArray(n),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),a("object"==typeof n&&null!==n,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(r.commands).join(", ")+"."}));var l=e;return s(n).forEach((function(t){if(o.call(r.commands,t)){var a=e===l;l=r.commands[t](n[t],l,n,e),a&&r.isEquals(l,e)&&(l=e)}else{var u="Map"===i(e)?r.update(e.get(t),n[t]):r.update(e[t],n[t]),c="Map"===i(l)?l.get(t):l[t];r.isEquals(u,c)&&(void 0!==u||o.call(e,t))||(l===e&&(l=f(e)),"Map"===i(l)?l.set(t,u):l[t]=u)}})),l},e}();t.Context=d;var p={$push:function(e,t,r){return _(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return _(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){a(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+r(e)})),h(t.$splice)}(t,n),e.forEach((function(e){h(e),t===o&&e.length&&(t=f(o)),l.apply(t,e)})),t},$set:function(e,t,r){return function(e){a(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(r),e},$toggle:function(e,t){v(e,"$toggle");var r=e.length?f(t):t;return e.forEach((function(e){r[e]=!t[e]})),r},$unset:function(e,t,r,n){return v(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=f(n)),delete t[e])})),t},$add:function(e,t,r,n){return y(t,"$add"),v(e,"$add"),"Map"===i(t)?e.forEach((function(e){var r=e[0],a=e[1];t===n&&t.get(r)!==a&&(t=f(n)),t.set(r,a)})):e.forEach((function(e){t!==n||t.has(e)||(t=f(n)),t.add(e)})),t},$remove:function(e,t,r,n){return y(t,"$remove"),v(e,"$remove"),e.forEach((function(e){t===n&&t.has(e)&&(t=f(n)),t.delete(e)})),t},$merge:function(e,t,n,o){var l,u;return l=t,a((u=e)&&"object"==typeof u,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(u)})),a(l&&"object"==typeof l,(function(){return"update(): $merge expects a target of type 'object'; got "+r(l)})),s(e).forEach((function(r){e[r]!==t[r]&&(t===o&&(t=f(o)),t[r]=e[r])})),t},$apply:function(e,t){var n;return a("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),e(t)}},m=new d;function _(e,t,n){a(Array.isArray(e),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(e)+"."})),v(t[n],n)}function v(e,t){a(Array.isArray(e),(function(){return"update(): expected spec of "+r(t)+" to be an array; got "+r(e)+". Did you forget to wrap your parameter in an array?"}))}function h(e){a(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(e)+". Did you forget to wrap your parameters in an array?"}))}function y(e,t){var n=i(e);a("Map"===n||"Set"===n,(function(){return"update(): "+r(t)+" expects a target of type Set or Map; got "+r(n)}))}t.isEquals=m.update.isEquals,t.extend=m.extend,t.default=m.update,t.default.default=e.exports=c(t.default,t)},89666:(e,t,r)=>{"use strict";r.r(t)},352:(e,t,r)=>{"use strict";r.r(t)},740:(e,t,r)=>{"use strict";r.r(t)},33768:(e,t,r)=>{"use strict";r.r(t)},89662:(e,t,r)=>{"use strict";r.r(t)},50724:(e,t,r)=>{"use strict";r.r(t)},58502:(e,t,r)=>{"use strict";r.r(t)},95932:(e,t,r)=>{"use strict";r.r(t)},44501:(e,t,r)=>{"use strict";r.r(t)},42724:(e,t,r)=>{"use strict";r.r(t)},45791:(e,t,r)=>{"use strict";r.r(t)},17858:(e,t,r)=>{"use strict";r.r(t)},98589:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=45.js.map