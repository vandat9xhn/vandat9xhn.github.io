(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1285],{44686:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseDownToWindowUp=function(e){var t=e.handleDown,n=void 0===t?function(){}:t,l=e.handleMove,a=void 0===l?function(){}:l,c=e.handleEnd,d=void 0===c?function(){}:c,s=e.detectEndTouch,v=void 0===s?o:s,f=e.detectStartTouch,m=void 0===f?i:f,w=(0,r.useRef)(null),_=(0,r.useRef)(null);function h(e){a(e)}function E(e){d(e),u.IS_MOBILE?v(e)&&(window.removeEventListener("touchmove",w.current),window.removeEventListener("touchend",_.current)):(window.removeEventListener("mousemove",w.current),window.removeEventListener("mouseup",_.current)),w.current=null,_.current=null}return{onDown:function(e){n(e),w.current||(w.current=h),_.current||(_.current=E),u.IS_MOBILE?m(e)&&(window.addEventListener("touchmove",w.current),window.addEventListener("touchend",_.current)):(window.addEventListener("mousemove",w.current),window.addEventListener("mouseup",_.current))}}};var r=n(67294),u=n(55852);function o(e){return 0==e.touches.length}function i(e){return e.touches.length>0}},19457:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294));o(n(45697)),n(72422);var u=o(n(32847));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return r.default.createElement("div",{className:"LearnHTML"},r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(u.default,null),r.default.createElement("div",{className:"h-100vh"}))}i.propTypes={},t.default=i},32847:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),u=(o(n(45697)),o(n(49204)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return r.default.createElement("div",{className:"LearnVideo margin-auto border-blur bg-shadow-8"},r.default.createElement(u.default,{video:"http://media.w3.org/2010/05/sintel/trailer.webm",initial_is_play:!1,initial_zoom_lv:0,initial_is_mute:!0,initial_c_time:0,initial_total_time:0}))}n(26823),i.propTypes={},t.default=i},72422:(e,t,n)=>{"use strict";n.r(t)},26823:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=1285.js.map