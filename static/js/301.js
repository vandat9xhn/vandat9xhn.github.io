(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[301],{5306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("vid_pic-observe opacity-0"),2),r=t[0],a=t[1];return(0,n.useEffect)((function(){e.current&&(0,l.default)({elements:[e.current],callback:function(){a("vid_pic-observe opacity-1")}})}),[e]),r};var a,n=r(67294),l=(a=r(66810))&&a.__esModule?a:{default:a}},75763:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.size_icon,r=e.x,n=e.y;return a.default.createElement("svg",{className:"IconsPost",viewBox:r+" "+n+" 200 200",width:t,height:t,fill:"none",stroke:"var(--md-color)",strokeLinecap:"round"},a.default.createElement("path",{fill:"var(--blue)",d:"M10,95 L0,0 L95,10 L200,115 L115,200 Z"}),a.default.createElement("g",{stroke:"var(--blue)",fill:"white",strokeWidth:"5"},a.default.createElement("circle",{cx:"50",cy:"50",r:"20"}),a.default.createElement("circle",{cx:"80",cy:"165",r:"30"}),a.default.createElement("line",{x1:"80",y1:"145",x2:"80",y2:"185"}),a.default.createElement("line",{x1:"100",y1:"165",x2:"60",y2:"165"})),a.default.createElement("g",{className:"IconsPost_cmt",strokeWidth:"10"},a.default.createElement("path",{d:"M230,190 L230,165 L230,165 Q210,165 210,130 L210,30 Q210,5 230,5\r L370,5 Q390,5 390,30 L390,130 Q390,165 360,165 L270,165 Z"}),a.default.createElement("line",{x1:"240",y1:"40",x2:"360",y2:"40"}),a.default.createElement("line",{x1:"240",y1:"80",x2:"360",y2:"80"}),a.default.createElement("line",{x1:"240",y1:"120",x2:"360",y2:"120"})),a.default.createElement("path",{className:"IconsPost_share",d:"M180,300 L125,240 L125,280 Q40,290 25,380 Q40,330 125,320 L125,360 Z",strokeWidth:"10"}))}r(48787),c.propTypes={size_icon:n.default.string,x:n.default.number,y:n.default.number},c.defaultProps={x:0,y:0,size_icon:"1.5rem"},t.default=c},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,r=e.threshold,a=void 0===r?0:r,n=e.callback,l=void 0===n?function(){}:n,c=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),l())}))}),{threshold:a});t.forEach((function(e){c.observe(e)}))}},81858:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return a.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return a.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return a.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var a=r(55852)},64754:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(5738)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.active_ix,r=e.bg_img_arr,l=e.handleChooseBg;return a.default.createElement("div",{className:"BgImgList"},a.default.createElement("div",{className:"BgImgList_row display-flex flex-wrap justify-content-center"},r.map((function(e,r){return a.default.createElement("div",{key:""+r,className:"BgImgList_item padding-4px"},a.default.createElement(n.default,{ix:r,is_active:t==r,bg_img:e,handleChooseBg:l}))}))))}r(56352),c.propTypes={},t.default=c},5738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(19400)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.ix,r=e.is_active,l=e.bg_img,c=e.handleChooseBg;return a.default.createElement(n.default,{vid_pic:l,type:"img",img_props:{onClick:function(){c(t)},className:"BgImgItem wh-100 brs-50 "+(r?"BgImgItem-active pointer-events-none":"BgImgItem-inactive cursor-pointer")}})}r(59536),c.propTypes={},t.default=c},43658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.children,r=e.title;return a.default.createElement("div",{className:"StoryCreateChoice wh-100 pos-rel cursor-pointer"},a.default.createElement("div",{className:"pos-abs-center w-100per"},a.default.createElement("div",{className:"display-flex justify-content-center"},a.default.createElement("div",{className:"StoryCreateChoice_icon display-flex-center bg-primary brs-50 box-shadow-fb"},t)),a.default.createElement("div",{className:"StoryCreateChoice_title padding-4px text-align-center"},a.default.createElement("span",{className:"font-700 text-white font-13px"},r))))}n(r(45697)),r(62180),l.propTypes={},t.default=l},79194:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=c(r(45697)),l=c(r(43658));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.title,r=e.openScreenStoryText;return a.default.createElement("div",{className:"StoryCreateTextChoice wh-100",onClick:r},a.default.createElement(l.default,{title:t},a.default.createElement("span",{className:"StoryCreateTextChoice_title font-500 font-18px"},"Aa")))}r(46281),i.propTypes={title:n.default.string,openScreenStoryText:n.default.func},l.default.defaultProps={title:"Create a Text Story"},t.default=i},64116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=u(r(45697)),l=u(r(86804)),c=u(r(37279)),i=u(r(43658));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,r=e.openScreenStoryPic;return a.default.createElement("div",{className:"StoryCreatePicChoice h-100per"},a.default.createElement(l.default,{name:"vid_pic",accept:"image/*",handleChange:function(e){r(e)}},a.default.createElement(i.default,{title:t},a.default.createElement(c.default,null))))}r(16833),o.propTypes={title:n.default.string,openScreenStoryText:n.default.func},o.defaultProps={title:"Create a Photo Story"},t.default=o},22784:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=(c(r(45697)),c(r(2760))),l=c(r(57108));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.handleRotate;return a.default.createElement("button",{className:"btn btn-hv btn-active padding-8px bg-always-white cursor-pointer brs-8px",onClick:t},a.default.createElement(l.default,{Icon:n.default},a.default.createElement("span",{className:"font-500"},"Rotate")))}i.propTypes={},t.default=i},19400:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=o(n),c=o(r(45697)),i=r(5306),u=r(32006);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.vid_pic,r=e.type,c=e.video_props,o=e.img_props,s=(0,u.getTypeVidOrPic)(t,r),d=(0,n.useRef)(null),f=(0,i.useObserveVidPic)(d);return(0,n.useEffect)((function(){d.current&&d.current.src&&(d.current.src=t)}),[t]),"img"==s?l.default.createElement("img",a({ref:d,className:""+f,"data-src":t,alt:""},o)):"video"==s?l.default.createElement("video",a({ref:d,className:""+f,"data-src":t},c)):null}s.propTypes={vid_pic:c.default.string,type:c.default.string,video_props:c.default.object,img_props:c.default.object},s.defaultProps={video_props:{},img_props:{}},t.default=s},48787:(e,t,r)=>{"use strict";r.r(t)},56352:(e,t,r)=>{"use strict";r.r(t)},59536:(e,t,r)=>{"use strict";r.r(t)},62180:(e,t,r)=>{"use strict";r.r(t)},46281:(e,t,r)=>{"use strict";r.r(t)},16833:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=301.js.map