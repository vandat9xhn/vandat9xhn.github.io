(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2779],{5306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("vid_pic-observe opacity-0"),2),r=t[0],a=t[1];return(0,n.useEffect)((function(){e.current&&(0,l.default)({elements:[e.current],callback:function(){a("vid_pic-observe opacity-1")}})}),[e]),r};var a,n=r(67294),l=(a=r(66810))&&a.__esModule?a:{default:a}},11880:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.color;return a.default.createElement("svg",{className:"IconsStar",width:t,height:t,viewBox:"0 0 200 200",stroke:"none"},a.default.createElement("path",{className:"IconsStar_normal",d:"M100 10L120.206 72.1885H185.595L132.694 110.623L152.901 \r 172.812L100 134.377L47.0993 172.812L67.3056 110.623L14.4049 \r 72.1885H79.7937L100 10Z",fill:r}))}u.propTypes={size_icon:n.default.string,color:n.default.string},u.defaultProps={size_icon:"1rem",color:"var(--gold)"},t.default=u},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,r=e.threshold,a=void 0===r?0:r,n=e.callback,l=void 0===n?function(){}:n,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),l())}))}),{threshold:a});t.forEach((function(e){u.observe(e)}))}},14565:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openScreenNotice=function(e){var t=e.openScreenOnce,r=e.ComponentNotice;t({ScreenOneComponent:a.default.createElement(u,{ComponentNotice:r})})};var a=l(r(67294)),n=(l(r(45697)),l(r(3995)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ComponentNotice;return a.default.createElement(n.default,null,t)}u.propTypes={},t.default=u},33214:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return a.default.createElement("div",{className:"PLCompareNoticeMax padding-15px brs-10px bg-shadow-8 text-white"},"Tối đa 3 sản phẩm được thêm vào để so sánh")}n(r(45697)),l.propTypes={},t.default=l},72531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=p(a),l=r(93191),u=p(r(45697)),o=r(55852),c=p(r(29875)),i=p(r(823)),s=p(r(21698)),d=p(r(75754)),f=p(r(47356));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.num_row_info,r=e.product_obj,u=e.use_compare,p=e.use_type,m=r.id,_=r.name,v=r.product_type,h=r.type_arr,g=r.in_stock,y=r.is_coming,b=r.new_price,E=r.old_price,P=r.discount,x=r.installment,N=r.cheap_price,w=r.gift_str,M=r.rating_avg,O=r.rating_count,j=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(0),2),k=j[0],C=j[1],L=h?h[k].img:"";return n.default.createElement("div",{className:"PLProduct h-100per pos-rel"},n.default.createElement(l.Link,{to:"/phone-laptop/"+m,className:"display-block h-100per padding-8px color-inherit "+(o.IS_MOBILE?"cursor-default":"")},n.default.createElement("div",{className:"PLProduct_head margin-bottom-10px"},n.default.createElement(i.default,{img:L,installment:x,has_fetched:!!_})),_?n.default.createElement("div",{className:"PLProduct_foot"},p&&h.length>=2?n.default.createElement("div",{className:"margin-bottom-10px"},n.default.createElement(d.default,{type_arr:h,type_ix:k,handleChangeType:C})):null,n.default.createElement("div",null,n.default.createElement(s.default,{name:_,new_price:b,old_price:E,discount:P,cheap_price:N,gift_str:w,rating_avg:M,rating_count:O,is_coming:y,in_stock:g})),u?n.default.createElement("div",null,n.default.createElement(f.default,{id:m,name:_,img:L,product_type:v})):null):n.default.createElement(c.default,{num:t})))}r(84816),m.propTypes={product_obj:u.default.shape({}),use_compare:u.default.bool,use_type:u.default.bool,num_row_info:u.default.number},m.defaultProps={use_compare:!0,use_type:!0,num_row_info:5},t.default=m},47356:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=d(a),l=r(12520),u=(d(r(45697)),r(15130)),o=r(15555),c=d(r(24012)),i=r(14565),s=d(r(33214));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.id,r=e.name,d=e.img,f=e.product_type,p=(0,l.useSelector)((function(e){return e.pl_compare_obj})),m=p.device_arr,_=p.type,v=(0,l.useDispatch)(),h=m.some((function(e){return e.id==t})),g=(0,a.useContext)(u.context_api),y=g.openScreenOnce,b=g.closeScreenOnce;return n.default.createElement("div",{className:"PLProductCompare"},n.default.createElement("div",{className:"inline-flex align-items-center text-blue cursor-pointer",onClick:function(e){if(e.preventDefault(),!h&&m.length>=3&&_==f)return(0,i.openScreenNotice)({openScreenOnce:y,ComponentNotice:n.default.createElement(s.default,null)}),void setTimeout((function(){b()}),1e3);v(h?(0,o.removeDeviceFromCompare)({device_ix:m.findIndex((function(e){return e.id==t}))}):(0,o.addDeviceToCompare)({new_device:{id:t,name:r,img:d},new_type:f}))}},n.default.createElement("div",{className:"PhoneDetailHead_compare_icon display-flex-center brs-50 border-blue"},n.default.createElement(c.default,{size_icon:"13px",stroke:"currentColor",stroke_width:"10"})),n.default.createElement("div",{className:"margin-left-5px"},h?"Đã thêm so sánh":"So sánh")))}f.propTypes={},t.default=f},21698:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(27179)),l=u(r(65535));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name,r=e.new_price,u=e.old_price,o=e.discount,c=e.cheap_price,i=e.gift_str,s=e.rating_avg,d=e.rating_count,f=e.is_coming,p=e.in_stock;return a.default.createElement("div",{className:"PLProductFoot font-14px"},a.default.createElement("div",{className:"PLProductFoot_name wk-box-vertical line-clamp-2 overflow-hidden font-400"},t),a.default.createElement("div",{className:"text-red"},f?"Hàng sắp về":p?"":"Ngừng kinh doanh"),u?a.default.createElement("div",{className:"text-del font-11px"},a.default.createElement("del",null,(0,n.formatNum)(u),"đ"),o&&a.default.createElement("span",{className:"margin-left-5px"},-o+"%")):null,a.default.createElement("div",{className:"font-600"},(0,n.formatNum)(r),"đ"),c?a.default.createElement("div",null,"Giá rẻ ",(0,n.formatNum)(c)):null,i?a.default.createElement("div",null,"Quà ",i):null,d?a.default.createElement("div",{className:"display-flex align-items-center font-12px"},a.default.createElement("div",null,a.default.createElement(l.default,{rate_avg:s,size_icon:"14px",color:"var(--border-fashion)"})),a.default.createElement("div",{className:"margin-left-5px"},d)):null)}o.propTypes={},t.default=o},823:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),u(r(19400))),l=u(r(97817));function u(e){return e&&e.__esModule?e:{default:e}}r(50105);var o="pos-abs left-0 bottom-0 wh-100 brs-5px object-fit-cover";function c(e){var t=e.img,r=e.installment,u=e.has_fetched;return a.default.createElement("div",{className:"PLProductHead pos-rel padding-top-100per"},u?a.default.createElement(n.default,{vid_pic:t,type:"img",img_props:{className:"PLProductHead_img "+o}}):a.default.createElement("img",{className:""+o,src:l.default,alt:""}),void 0!==r&&a.default.createElement("div",{className:"PLProductHead_installment pos-abs left-0 top-0"},a.default.createElement("div",{className:"padding-x-4px brs-2px bg-f1 font-11px"},"Trả góp ",r,"%")))}c.propTypes={},t.default=c},75754:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(17809)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.type_arr,r=e.type_ix,l=e.handleChangeType;return a.default.createElement("div",{className:"PLProductTypes"},a.default.createElement("ul",{className:"display-flex flex-wrap list-none"},t.map((function(e,t){return a.default.createElement("li",{key:t,className:0==t?"":"margin-left-5px"},a.default.createElement(n.default,{ix:t,is_active:r==t,title:e.title,handleClick:l}))}))))}u.propTypes={},t.default=u},17809:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ix,r=e.is_active,n=e.title,l=e.handleClick;return a.default.createElement("button",{className:"padding-x-5px padding-y-3px brs-3px cursor-pointer "+(r?"border-blue":"border-blur"),type:"button",onClick:function(e){e.preventDefault(),!r&&l(t)}},n)}n(r(45697)),l.propTypes={},t.default=l},3995:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children;return a.default.createElement("div",{className:"NoticeDiv"},t)}r(83705),u.propTypes={children:n.default.element},t.default=u},65535:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=u(r(45697)),l=u(r(18416));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.rate_avg,r=e.size_icon,n=e.color,u=e.handleChangeRate,o=[1,2,3,4,5].map((function(e){var r=t+1-e;return r<=0?0:r>=1?1:r}));return a.default.createElement("div",{className:"StarsRate"},a.default.createElement("div",{className:"display-flex align-items-center"},o.map((function(e,t){return a.default.createElement(l.default,{key:""+t,rate_icon:e,star_ix:t+1,size_icon:r,color:n,handleChangeRate:u})}))))}o.propTypes={rate_avg:n.default.number,size_icon:n.default.string,handleChangeRate:n.default.func},o.defaultProps={rate_avg:5},t.default=o},18416:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=u(r(45697)),l=u(r(11880));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.star_ix,r=e.rate_icon,n=e.size_icon,u=e.color,o=e.handleChangeRate;return a.default.createElement("div",{className:"StarRate pos-rel",onClick:function(){o(t)}},a.default.createElement(l.default,{color:"var(--md-bg-ccc)",size_icon:n}),a.default.createElement("div",{className:"StarRate_rate pos-abs top-0 left-0 overflow-hidden "+(r?"":"display-none"),style:{width:r?100*r+"%":void 0}},a.default.createElement(l.default,{size_icon:n,color:u})))}r(54915),o.propTypes={rate_avg:n.default.number,star_ix:n.default.number,size_icon:n.default.string,handleChangeRate:n.default.func},o.defaultProps={handleChangeRate:function(){}},t.default=o},19400:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=i(n),u=i(r(45697)),o=r(5306),c=r(32006);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.vid_pic,r=e.type,u=e.video_props,i=e.img_props,s=(0,c.getTypeVidOrPic)(t,r),d=(0,n.useRef)(null),f=(0,o.useObserveVidPic)(d);return(0,n.useEffect)((function(){d.current&&d.current.src&&(d.current.src=t)}),[t]),"img"==s?l.default.createElement("img",a({ref:d,className:""+f,"data-src":t,alt:""},i)):"video"==s?l.default.createElement("video",a({ref:d,className:""+f,"data-src":t},u)):null}s.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},s.defaultProps={video_props:{},img_props:{}},t.default=s},62779:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=i(a),l=(i(r(45697)),r(55852)),u=r(42789),o=i(r(61498)),c=i(r(72531));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.product_arr,r=e.use_compare,i=e.use_type,s=(0,a.useRef)(null),d=(0,u.useScrollToX)(s),f=d.is_has_next,p=d.is_has_prev,m=d.handleNext,_=d.handlePrev,v=d.hasNextPrev;return(0,a.useEffect)((function(){v()}),[t.length]),n.default.createElement("div",{className:"PLRowProducts pos-rel"},n.default.createElement("div",{ref:s,className:"PLRowProducts_contain overflow-x-auto scroll-height-0"},n.default.createElement("div",{className:"PLRowProducts_row display-flex"},t.map((function(e,t){return n.default.createElement("div",{key:e.id,className:"PLRowProducts_item flex-shrink-0 border-blur"},n.default.createElement(c.default,{product_obj:e,use_compare:r,use_type:i}))})))),l.IS_MOBILE?null:n.default.createElement("div",{className:"text-white"},n.default.createElement(o.default,{is_btn_circle:!1,is_has_next:f,is_has_prev:p,handleNext:m,handlePrev:_})))}r(37809),s.propTypes={},t.default=s},97817:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});const a=r.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},84816:(e,t,r)=>{"use strict";r.r(t)},50105:(e,t,r)=>{"use strict";r.r(t)},83705:(e,t,r)=>{"use strict";r.r(t)},54915:(e,t,r)=>{"use strict";r.r(t)},37809:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2779.js.map