(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9457],{44686:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useMouseDownToWindowUp=function(e){var n=e.handleDown,t=void 0===n?function(){}:n,i=e.handleMove,l=void 0===i?function(){}:i,a=e.handleEnd,d=void 0===a?function(){}:a,s=e.detectEndTouch,f=void 0===s?o:s,v=e.detectStartTouch,h=void 0===v?c:v,_=(0,r.useRef)(null),M=(0,r.useRef)(null);function w(e){l(e)}function p(e){d(e),u.IS_MOBILE?f(e)&&(window.removeEventListener("touchmove",_.current),window.removeEventListener("touchend",M.current)):(window.removeEventListener("mousemove",_.current),window.removeEventListener("mouseup",M.current)),_.current=null,M.current=null}return{onDown:function(e){t(e),_.current||(_.current=w),M.current||(M.current=p),u.IS_MOBILE?h(e)&&(window.addEventListener("touchmove",_.current),window.addEventListener("touchend",M.current)):(window.addEventListener("mousemove",_.current),window.addEventListener("mouseup",M.current))}}};var r=t(67294),u=t(55852);function o(e){return 0==e.touches.length}function c(e){return e.touches.length>0}},9653:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useMouseMoveOneAxis=function(e){var n=e.axis,t=void 0===n?"x":n,c=e.handleMouseDown,i=void 0===c?function(){}:c,l=e.handleMouseMove,a=void 0===l?function(){}:l,d=e.handleMouseEnd,s=void 0===d?function(){}:d,f=(0,r.useRef)(!1),v=(0,r.useRef)(""),h=(0,r.useRef)(0),_=(0,r.useRef)(0),M=(0,o.useMouseDownToWindowUp)({handleDown:i,handleMove:w,handleEnd:p}).onDown;function w(e){if(f.current){var n=(0,u.getClientXY)(e),r=n.client_x,o=n.client_y,c=r-h.current,i=o-_.current;""==v.current&&(v.current=Math.abs(c)>=Math.abs(i)?"x":"y"),a("x"===t?c:i),h.current=r,_.current=o}}function p(){f.current=!1,s(),v.current=""}return{is_run:f,client_x:h,client_y:_,first_orientation:v,handleStart:function(e){e.stopPropagation(),f.current=!0;var n=(0,u.getClientXY)(e),t=n.client_x,r=n.client_y;h.current=t,_.current=r,M(e)},handleMove:w,handleEnd:p}};var r=t(67294),u=t(81858),o=t(44686)},38808:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useMouseMoveY=function(e){var n=e.handleMouseDown,t=void 0===n?function(){}:n,u=e.handleMouseMove,o=void 0===u?function(){}:u,c=e.handleMouseEnd,i=void 0===c?function(){}:c;return(0,r.useMouseMoveOneAxis)({axis:"y",handleMouseDown:t,handleMouseMove:o,handleMouseEnd:i})};var r=t(9653)},81858:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},n.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},n.getClientXY=function(e){return r.IS_MOBILE?e.touches?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:0,client_y:0}:{client_x:e.clientX,client_y:e.clientY}},n.getTouchClientXY=function(e,n){return{client_x:e.touches[n].clientX,client_y:e.touches[n].clientY}};var r=t(55852)},84333:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useSwipeYFull=function(e){var n=e.initial_ref_main,t=e.needed_change_y,c=void 0===t?20:t,i=e.swipe_up,l=void 0===i||i,a=e.handleChangeIx,d=void 0===a?function(){}:a,s=e.callbackTouchMove,f=void 0===s?function(){}:s,v=(0,r.useRef)(null),h=n||v,_=(0,r.useRef)(0),M=(0,r.useRef)(0),w=(0,u.useMouseMoveY)({handleMouseMove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=l?-e:e;M.current+=n,m(h.current.scrollTop+n),f(M.current/_.current)},handleMouseEnd:function(){if(0!==M.current){var e,n,t,r=(e=h.current.scrollTop%_.current,n=(h.current.scrollTop-e)/_.current,M.current*(l?-1:1)>0?n+(e<_.current-c?0:1):n+(e<c?0:1));d(r),t=_.current*r,(0,o.handleScrollSmooth)((function(){m(t)}),h.current),M.current=0}}}).handleStart;(0,r.useEffect)((function(){return p(),window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[]);var p=function(){_.current=h.current.clientHeight},m=function(e){h.current.scrollTop=e};return{ref_main:h,handleStart:w}};var r=t(67294),u=t(38808),o=t(13118)},27396:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=c(t(67294)),u=(c(t(45697)),t(55852)),o=t(84333);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var n=e.initial_ref_main,t=e.needed_change_y,c=e.swipe_up,i=e.className,l=e.children,a=e.handleChangeIx,d=e.callbackTouchMove,s=(0,o.useSwipeYFull)({initial_ref_main:n,needed_change_y:t,swipe_up:c,handleChangeIx:a,callbackTouchMove:d}),f=s.ref_main,v=s.handleStart;return r.default.createElement("div",{ref:f,className:"SwipeYFull wh-100 touch-action-none overflow-y-auto scroll-width-0 "+i,onTouchStart:v,onMouseDown:u.IS_MOBILE?void 0:v},l)}t(90290),i.propTypes={},n.default=i},19457:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(67294));o(t(45697)),t(72422);var u=o(t(90435));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return r.default.createElement("div",{className:"LearnHTML"},r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(u.default,null),r.default.createElement("div",{className:"h-100vh"}))}c.propTypes={},n.default=c},90435:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(67294)),u=(o(t(45697)),o(t(27396)));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return r.default.createElement("div",{className:"w-500px max-w-100per margin-auto user-select-none"},r.default.createElement("div",{style:{height:300,border:"5px solid"}},r.default.createElement(u.default,{className:"bg-green text-white font-500"},r.default.createElement(r.default.Fragment,null,[1,2,3,4,5,6].map((function(e,n){return r.default.createElement("div",{key:n,className:"LearnSwipeYFull_item SwipeYFull_item display-flex-center",style:{border:"4px solid red"}},e)}))))))}c.propTypes={},n.default=c},90290:(e,n,t)=>{"use strict";t.r(n)},72422:(e,n,t)=>{"use strict";t.r(n)}}]);
//# sourceMappingURL=9457.js.map