(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[7057],{44686:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseDownToWindowUp=function(e){var t=e.handleDown,n=void 0===t?function(){}:t,o=e.handleMove,c=void 0===o?function(){}:o,a=e.handleEnd,s=void 0===a?function(){}:a,d=e.detectEndTouch,f=void 0===d?i:d,_=e.detectStartTouch,v=void 0===_?l:_,L=(0,r.useRef)(null),m=(0,r.useRef)(null);function h(e){c(e)}function w(e){s(e),u.IS_MOBILE?f(e)&&(window.removeEventListener("touchmove",L.current),window.removeEventListener("touchend",m.current)):(window.removeEventListener("mousemove",L.current),window.removeEventListener("mouseup",m.current)),L.current=null,m.current=null}return{onDown:function(e){n(e),L.current||(L.current=h),m.current||(m.current=w),u.IS_MOBILE?v(e)&&(window.addEventListener("touchmove",L.current),window.addEventListener("touchend",m.current)):(window.addEventListener("mousemove",L.current),window.addEventListener("mouseup",m.current))}}};var r=n(67294),u=n(55852);function i(e){return 0==e.touches.length}function l(e){return e.touches.length>0}},67238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),u=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,n=e.fill,u=e.stroke,i=e.stroke_width;return r.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:n,strokeWidth:i,stroke:u,strokeLinecap:"round",strokeLinejoin:"round"},r.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),r.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}n(18639),l.propTypes={fill:u.default.string,size_icon:u.default.string,stroke:u.default.string,stroke_width:u.default.number},l.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=l},81858:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=n(55852)},19457:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294));i(n(45697)),n(72422);var u=i(n(32847));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return r.default.createElement("div",{className:"LearnHTML"},r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(u.default,null),r.default.createElement("div",{className:"h-100vh"}))}l.propTypes={},t.default=l},32847:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),u=(i(n(45697)),i(n(49204)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return r.default.createElement("div",{className:"LearnVideo margin-auto border-blur bg-shadow-8"},r.default.createElement(u.default,{video:"http://media.w3.org/2010/05/sintel/trailer.webm",initial_is_play:!1,initial_zoom_lv:0,initial_is_mute:!0,initial_c_time:0,initial_total_time:0}))}n(26823),l.propTypes={},t.default=l},18639:(e,t,n)=>{"use strict";n.r(t)},72422:(e,t,n)=>{"use strict";n.r(t)},26823:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=7057.js.map