(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[4379],{28206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_short_video_arr=t.default_short_video_obj=void 0;var r=n(70745),a=n(69565),o=n(32601),i=n(8047),u=n(7605),l=t.default_short_video_obj=function(e){return{id:e||(0,a.getRandomId)(),video:(0,i.getRandomVideo)(),thumb:(0,i.getRandomImg)(),content:(0,r.getRandomContent)(),name:(0,o.getRandomName)(),picture:(0,i.getRandomImg)(),link_to:"/profile/"+(0,a.getRandomNumber)(),interacts:[{icon_name:"like",count_str:"20K"},{icon_name:"comment",count_str:"500"},{icon_name:"share",count_str:"1K"}]}};t.default_short_video_arr=function(e){return[l(e)].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}((0,u.getDefaultArr)(l,5,5)))}},32729:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_ShortVideo_L=void 0;var r=n(69565),a=n(28206);t.handle_API_ShortVideo_L=function(e){return new Promise((function(t){setTimeout((function(){t({data:(0,a.default_short_video_arr)(e),next_id:(0,r.getRandomId)()})}),250)}))}},44686:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseDownToWindowUp=function(e){var t=e.handleDown,n=void 0===t?function(){}:t,u=e.handleMove,l=void 0===u?function(){}:u,c=e.handleEnd,d=void 0===c?function(){}:c,s=e.detectEndTouch,f=void 0===s?o:s,v=e.detectStartTouch,h=void 0===v?i:v,m=(0,r.useRef)(null),_=(0,r.useRef)(null);function p(e){l(e)}function y(e){d(e),a.IS_MOBILE?f(e)&&(window.removeEventListener("touchmove",m.current),window.removeEventListener("touchend",_.current)):(window.removeEventListener("mousemove",m.current),window.removeEventListener("mouseup",_.current)),m.current=null,_.current=null}return{onDown:function(e){n(e),m.current||(m.current=p),_.current||(_.current=y),a.IS_MOBILE?h(e)&&(window.addEventListener("touchmove",m.current),window.addEventListener("touchend",_.current)):(window.addEventListener("mousemove",m.current),window.addEventListener("mouseup",_.current))}}};var r=n(67294),a=n(55852);function o(e){return 0==e.touches.length}function i(e){return e.touches.length>0}},9653:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveOneAxis=function(e){var t=e.axis,n=void 0===t?"x":t,i=e.handleMouseDown,u=void 0===i?function(){}:i,l=e.handleMouseMove,c=void 0===l?function(){}:l,d=e.handleMouseEnd,s=void 0===d?function(){}:d,f=(0,r.useRef)(!1),v=(0,r.useRef)(""),h=(0,r.useRef)(0),m=(0,r.useRef)(0),_=(0,o.useMouseDownToWindowUp)({handleDown:u,handleMove:p,handleEnd:y}).onDown;function p(e){if(f.current){var t=(0,a.getClientXY)(e),r=t.client_x,o=t.client_y,i=r-h.current,u=o-m.current;""==v.current&&(v.current=Math.abs(i)>=Math.abs(u)?"x":"y"),c("x"===n?i:u),h.current=r,m.current=o}}function y(){f.current=!1,s(),v.current=""}return{is_run:f,client_x:h,client_y:m,first_orientation:v,handleStart:function(e){e.stopPropagation(),f.current=!0;var t=(0,a.getClientXY)(e),n=t.client_x,r=t.client_y;h.current=n,m.current=r,_(e)},handleMove:p,handleEnd:y}};var r=n(67294),a=n(81858),o=n(44686)},38808:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveY=function(e){var t=e.handleMouseDown,n=void 0===t?function(){}:t,a=e.handleMouseMove,o=void 0===a?function(){}:a,i=e.handleMouseEnd,u=void 0===i?function(){}:i;return(0,r.useMouseMoveOneAxis)({axis:"y",handleMouseDown:n,handleMouseMove:o,handleMouseEnd:u})};var r=n(9653)},31654:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.useShortVideoMainMb=function(e){var t=e.paused,n=void 0===t||t,i=e.initial_ref_main,u=void 0===i?{current:null}:i,l=e.initial_ref_video,c=void 0===l?{current:null}:l,d=e.time_show_btn_play,s=void 0===d?2500:d,f=(0,a.useState)(!0),v=r(f,2),h=v[0],m=v[1],_=(0,a.useState)(!1),p=r(_,2),y=p[0],w=p[1],g=c||(0,a.useRef)(null),M=u||(0,a.useRef)(null),b=(0,o.useBool)(!1),E=b.is_true,x=b.toggleBool,S=b.setIsTrue;return(0,a.useEffect)((function(){var e=null;return E?e=setTimeout((function(){S(!1)}),s):e&&clearTimeout(e),function(){e&&clearTimeout(e)}}),[E,h]),(0,a.useEffect)((function(){y&&(!n&&h?g.current.play():g.current.pause())}),[y,!n&&h]),{ref_main:M,ref_video:g,is_play:h,is_true:E,togglePlay:function(){m((function(e){return!e}))},toggleBool:x,handleLoadedMetadata:function(){w(!0)}}};var a=n(67294),o=n(8238)},82866:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=(u(n(45697)),u(n(44257))),o=u(n(6153)),i=u(n(75763));function u(e){return e&&e.__esModule?e:{default:e}}n(92862);var l={like:r.default.createElement(o.default,null),share:r.default.createElement(i.default,{y:200}),comment:r.default.createElement(i.default,{x:200})};d.propTypes={};var c=function(e){var t=e.icon_name,n=e.handleAction;return r.default.createElement(a.default,{className:"ShortVideoInteract_item_btn",Icon:l[t],handleClick:function(){n(t)}})};function d(e){var t=e.interacts,n=e.handleAction;return r.default.createElement("div",{className:"ShortVideoInteract display-flex flex-end flex-col padding-10px h-100per font-14px font-500"},t.map((function(e,t){return r.default.createElement("div",{key:e.icon_name,className:"padding-y-5px"},r.default.createElement("div",null,r.default.createElement(c,{icon_name:e.icon_name,handleAction:n})),r.default.createElement("div",{className:"text-align-center"},e.count_str))})))}t.default=d},72347:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=(i(n(45697)),i(n(98238))),o=i(n(82866));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.video,n=e.paused,i=e.currentTime,u=e.name,l=e.picture,c=e.link_to,d=e.content,s=e.interacts,f=e.handleAction;return r.default.createElement("div",{className:"ShortVideoFullMb pos-rel wh-100 text-white"},r.default.createElement(a.default,{video:t,paused:n,currentTime:i,name:u,picture:l,link_to:c,content:d}),r.default.createElement("div",{className:"pos-abs right-0 bottom-0"},r.default.createElement(o.default,{interacts:s,handleAction:f})))}n(8951),u.propTypes={},t.default=u},98238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=n(93191),o=(u(n(45697)),n(31654)),i=(u(n(19400)),u(n(37709)));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.video,n=e.paused,u=void 0===n||n,l=e.currentTime,c=e.name,d=e.picture,s=e.link_to,f=e.content,v=(0,o.useShortVideoMainMb)({paused:u,currentTime:l}),h=v.ref_main,m=v.ref_video,_=v.is_play,p=v.is_true,y=v.togglePlay,w=v.toggleBool,g=v.handleLoadedMetadata;return r.default.createElement("div",{ref:h,className:"ShortVideoFullMainMb pos-rel wh-100 font-13px bg-black"},r.default.createElement("div",{className:"display-flex align-items-center wh-100"},r.default.createElement("video",{ref:m,className:"w-100per max-h-100per object-fit-cover",src:t,loop:!0,onClick:w,onLoadedMetadata:g})),r.default.createElement("div",{className:"ShortVideoFullMainMb_user pos-abs-0 w-100per"},r.default.createElement("div",{className:"display-flex align-items-center padding-12px bg-shadow-05"},r.default.createElement(a.Link,{to:s,className:"display-block hv-after-shadow-05"},r.default.createElement("img",{className:"brs-50 object-fit-cover",src:d,alt:"",width:42,height:42})),r.default.createElement("div",{className:"margin-left-12px"},r.default.createElement(a.Link,{to:s,className:"text-white"},c)))),r.default.createElement("div",{className:"pos-abs-center "+(p?"":"opacity-0 visibility-hidden transition-all-250ms"),onClick:y,title:_?"Pause":"Play"},r.default.createElement(i.default,{x:_?200:0,size_icon:"36px"})),r.default.createElement("div",{className:"ShortVideoFullMainMb_content pos-abs left-0 bottom-0 padding-12px bg-shadow-05 min-w-100per"},r.default.createElement("div",{className:"wk-box-vertical line-clamp-2 overflow-hidden"},f)))}n(42348),l.propTypes={},t.default=l},84333:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSwipeYFull=function(e){var t=e.initial_ref_main,n=e.needed_change_y,i=void 0===n?20:n,u=e.swipe_up,l=void 0===u||u,c=e.handleChangeIx,d=void 0===c?function(){}:c,s=e.callbackTouchMove,f=void 0===s?function(){}:s,v=(0,r.useRef)(null),h=t||v,m=(0,r.useRef)(0),_=(0,r.useRef)(0),p=(0,a.useMouseMoveY)({handleMouseMove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=l?-e:e;_.current+=t,w(h.current.scrollTop+t),f(_.current/m.current)},handleMouseEnd:function(){if(0!==_.current){var e,t,n,r=(e=h.current.scrollTop%m.current,t=(h.current.scrollTop-e)/m.current,_.current*(l?-1:1)>0?t+(e<m.current-i?0:1):t+(e<i?0:1));d(r),n=m.current*r,(0,o.handleScrollSmooth)((function(){w(n)}),h.current),_.current=0}}}).handleStart;(0,r.useEffect)((function(){return y(),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}}),[]);var y=function(){m.current=h.current.clientHeight},w=function(e){h.current.scrollTop=e};return{ref_main:h,handleStart:p}};var r=n(67294),a=n(38808),o=n(13118)},27396:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=(i(n(45697)),n(55852)),o=n(84333);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.initial_ref_main,n=e.needed_change_y,i=e.swipe_up,u=e.className,l=e.children,c=e.handleChangeIx,d=e.callbackTouchMove,s=(0,o.useSwipeYFull)({initial_ref_main:t,needed_change_y:n,swipe_up:i,handleChangeIx:c,callbackTouchMove:d}),f=s.ref_main,v=s.handleStart;return r.default.createElement("div",{ref:f,className:"SwipeYFull wh-100 touch-action-none overflow-y-auto scroll-width-0 "+u,onTouchStart:v,onMouseDown:a.IS_MOBILE?void 0:v},l)}n(90290),u.propTypes={},t.default=u},44379:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),o=f(a),i=n(93191),u=(f(n(45697)),n(32729)),l=n(30796),c=f(n(17852)),d=f(n(27396)),s=f(n(72347));function f(e){return e&&e.__esModule?e:{default:e}}function v(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function h(e){var t=this,n=e.show_screen_title,f=void 0!==n&&n,h=(0,i.useParams)().id,m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({list:[],ix:0,temp_ix:0,next_id:0,is_fetching:!1,has_fetched:!1}),2),_=m[0],p=m[1],y=_.list,w=_.ix,g=_.temp_ix,M=_.next_id,b=_.is_fetching,E=_.has_fetched;!f&&(0,l.useMakeBodyHidden)({hidden_header:!0}),(0,a.useEffect)((function(){k(h)}),[]);var x,S,k=(x=regeneratorRuntime.mark((function e(){var n,a,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p((function(e){return r({},e,{is_fetching:!0})})),e.next=3,(0,u.handle_API_ShortVideo_L)(i);case 3:n=e.sent,a=n.data,o=n.next_id,p((function(e){return r({},e,{list:[].concat(v(e.list),v(a)),next_id:o,is_fetching:!1,has_fetched:!0})}));case 7:case"end":return e.stop()}}),e,t)})),S=function(){var e=x.apply(this,arguments);return new Promise((function(t,n){return function r(a,o){try{var i=e[a](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(){return S.apply(this,arguments)}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)};return E?o.default.createElement("div",{className:"ShortVideoFullPgMb"},o.default.createElement(d.default,{handleChangeIx:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;p((function(t){return history.replaceState("","","/short-video/"+y[e].id),r({},t,{ix:e,temp_ix:e})})),y.length-2===e&&k(M)},callbackTouchMove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;p((function(t){return r({},t,{temp_ix:t.ix+(e>=.5?1:e<=-.5?-1:0)})}))}},o.default.createElement(o.default.Fragment,null,y.map((function(e,t){return o.default.createElement("div",{className:"SwipeYFull_item",key:e.id},o.default.createElement(c.default,null,o.default.createElement(s.default,{video:e.video,paused:t!==g,interacts:e.interacts,name:e.name,picture:e.picture,content:e.content,link_to:e.link_to,is_fetching:b,is_has_next:!0,is_has_prev:w>0,handleAction:T})))}))))):null}n(92753),h.propTypes={},t.default=h},92862:(e,t,n)=>{"use strict";n.r(t)},8951:(e,t,n)=>{"use strict";n.r(t)},42348:(e,t,n)=>{"use strict";n.r(t)},90290:(e,t,n)=>{"use strict";n.r(t)},92753:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=4379.js.map