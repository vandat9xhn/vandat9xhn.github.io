(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8925],{94289:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=function(e){var t=e.time,n=e.callback,r=void 0===n?function(){}:n,l=(0,a.useRef)(!1),u=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var e;return e=setInterval((function(){u.current?l.current?l.current=!1:r():clearInterval(e)}),t),function(){u.current=!1}}),[]),{doSkipInterval:function(){l.current=!0}}};var a=n(67294)},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:NodeList||HTMLCollection,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e.length){var n=new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute(t),n.unobserve(e.target))}))}));e.forEach((function(e){return n.observe(e)}))}},t.observerVidPic=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLPictureElement||HTMLVideoElement,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var n=new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute(t),n.unobserve(e.target))}))}));n.observe(e)}}},75147:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.API_IsLogin=o,t.API_IsLogin_URL=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return o(a({},e,{url:t}),a({},e,{url:n}))};var r=i(n(87421)),l=i(n(62667)),u=n(50918);function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return localStorage.is_login&&!u.is_api_fake?(0,r.default)(e):(0,l.default)(t)}},51468:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FashionUserContentComment_R=t.API_FashionComment_L=t.API_FashionUserContentRate_R=t.API_FashionRate_L=t.API_FashionProduct_R=t.API_FashionProduct_L=t.API_FashionHotImage_L=t.API_FashionShop_R=t.API_FashionShop_L=void 0;var a,r=(a=n(62667))&&a.__esModule?a:{default:a},l=n(75147),u=n(50918),i=n(26401);t.API_FashionShop_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.API_FakeReal)(Array(6).fill(i.default_arr_shop[0]),(function(){return(0,r.default)({url:"/fashion-api/l-shop/",method:"GET",params:e})}),e)},t.API_FashionShop_R=function(e){return(0,u.API_FakeReal)(i.default_arr_shop[0],(function(){return(0,r.default)({url:"/fashion-api/r-shop/"+e+"/",method:"GET"})}))},t.API_FashionHotImage_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.API_FakeReal)(i.default_arr_hot_image,(function(){return(0,r.default)({url:"/fashion-api/l-hot-image/",method:"GET",params:e})}))},t.API_FashionProduct_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.API_FakeReal)(Array(20).fill(i.default_arr_product[0]),(function(){return(0,r.default)({url:"/fashion-api/l-product/",method:"GET",params:e})}),e)},t.API_FashionProduct_R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,u.API_FakeReal)(i.default_arr_product_r,(function(){return(0,l.API_IsLogin_URL)({method:"GET",params:t},"/fashion-api/r-product-token/"+e+"/","/fashion-api/r-product/"+e+"/")}))},t.API_FashionRate_L=function(e){return(0,u.API_FakeReal)(i.default_arr_rate,(function(){return(0,r.default)({url:"/fashion-api/l-rate/",method:"GET",params:e})}),e)},t.API_FashionUserContentRate_R=function(e){return(0,u.API_FakeReal)(i.default_rate_content,(function(){return(0,r.default)({url:"/fashion-api/l-rate/",method:"GET",params:e})}),e)},t.API_FashionComment_L=function(e){return(0,u.API_FakeReal)(i.default_arr_cmt,(function(){return(0,r.default)({url:"/fashion-api/l-comment/",method:"GET",params:e})}),e)},t.API_FashionUserContentComment_R=function(e){return(0,u.API_FakeReal)(i.default_arr_cmt[0],(function(){return(0,r.default)({url:"/fashion-api/comment-r/",method:"GET",params:e})}),e)}},4124:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(67294)),r=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children,n=e.onClick,r=e.type,l=e.disabled,u=e.ripple_type,i=e.title;return a.default.createElement("button",{className:"ButtonRipple label-field "+(l?"opacity-5 pointer-events-none":"cursor-pointer"),type:r,title:i,disabled:l,onClick:n},a.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+u+" "+(l?"display-none":"")}),t)}n(40824),u.propTypes={type:r.default.string,title:r.default.string,disabled:r.default.bool,ripple_type:r.default.string,children:r.default.any,onClick:r.default.func},u.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=u},87868:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=s(a),l=s(n(45697)),u=n(94289),i=s(n(61498));n(97109);var o=s(n(34205));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.vid_pics,n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(1),2),l=n[0],s=n[1],c=(0,a.useRef)(!0),d=(0,a.useRef)(!1),f=(0,a.useRef)(!1),m=(0,a.useRef)(t.length),_=(0,u.useInterval)({time:6e3,callback:function(){d.current||(p(),v())}}).doSkipInterval;function p(){d.current=!0,f.current=!1,setTimeout((function(){c.current&&(d.current=!1)}),600)}function h(){p(),_()}function v(){s((function(e){e==m.current-2?(s(m.current-1),setTimeout((function(){c.current&&(f.current=!0,s(1))}),501)):e<m.current-2&&s(e+1)}))}return(0,a.useEffect)((function(){return function(){c.current=!1}}),[]),(0,a.useEffect)((function(){_(),m.current=t.length}),[t]),r.default.createElement("div",{className:"Carousel position-rel wh-100"},r.default.createElement("div",{className:"Carousel_row position-rel display-flex "+(f.current?"Carousel_transition-none":"Carousel_transition"),style:{width:100*t.length+"%",transform:"translateX(-"+100*l/t.length+"%)"}},t.map((function(e,n){return r.default.createElement(o.default,{key:"Carousel_"+n,vid_pic:e,width_vid_pic:100/t.length+"%"})}))),r.default.createElement(i.default,{is_btn_circle:!0,size_icon:"0.8rem",handleNext:function(){d.current||(h(),v())},handlePrev:function(){d.current||(h(),s((function(e){1==e?(s(0),setTimeout((function(){c.current&&(f.current=!0,s(m.current-2))}),501)):e>1&&s(e-1)})))}}))}c.propTypes={vid_pics:l.default.array.isRequired},t.default=c},34205:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(67294)),r=u(n(45697)),l=n(32006);function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pic,n=e.width_vid_pic;return a.default.createElement("div",{className:"CarouselItem",style:{width:n}},(0,l.VideoOrImage)(t))}n(25490),i.propTypes={vid_pic:r.default.string,width_vid_pic:r.default.string},t.default=i},15765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=c(a),l=n(93191),u=c(n(45697)),i=n(27179),o=n(66810),s=c(n(86383));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.img_or_dataset,n=e.link,u=e.img,c=e.name,d=e.in_stock,f=e.new_price,m=e.old_price,_=e.discount,p=e.installment,h=(0,a.useRef)(null);return(0,a.useEffect)((function(){null!=h.current&&(0,o.observerVidPic)(h.current,"data-src")}),[u]),c?r.default.createElement("div",{className:"ProductItem padding-8px position-rel",title:c},r.default.createElement(l.Link,{to:n,className:"normal-text hv-cl-blue"},r.default.createElement("div",{className:"ProductItem_head"},t?r.default.createElement("img",{src:u,alt:""}):r.default.createElement("img",{ref:h,"data-src":u,alt:""})),r.default.createElement("div",{className:"ProductItem_foot"},r.default.createElement("div",{className:"ProductItem_name label-field"},c),d&&r.default.createElement("div",{className:"text-red"},d),r.default.createElement("div",{className:"ProductItem_price"},f&&r.default.createElement("div",{className:"label-field font-italic"},(0,i.formatNum)(f)),m&&r.default.createElement("div",null,r.default.createElement("span",{className:"ProductItem_old-price"},(0,i.formatNum)(m)),r.default.createElement("sup",{className:"dv-vnd"},"đ"))))),_&&r.default.createElement("div",{className:"ProductItem_discount text-red"},-_+"%"),void 0!==p&&r.default.createElement("div",{className:"ProductItem_installment brs-5px"},p,"%")):r.default.createElement(s.default,null)}n(82463),d.propTypes={img_or_dataset:u.default.bool,link:u.default.string,img:u.default.string,name:u.default.string,in_stock:u.default.string,new_price:u.default.oneOfType([u.default.string,u.default.number]),old_price:u.default.oneOfType([u.default.string,u.default.number]),discount:u.default.oneOfType([u.default.string,u.default.number]),installment:u.default.oneOfType([u.default.string,u.default.number])},d.defaultProps={img_or_dataset:!0},t.default=d},86383:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(67294)),r=(u(n(45697)),u(n(29875))),l=u(n(97817));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return a.default.createElement("div",{className:"ProductItem"},a.default.createElement("div",{className:"ProductItem_head"},a.default.createElement("div",{className:"ProductItem_img"},a.default.createElement("img",{src:l.default,alt:""}))),a.default.createElement(r.default,{num:3}))}i.propTypes={},t.default=i},81717:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(67294)),r=(u(n(45697)),u(n(87868)));n(13473);var l=u(n(94861));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.images;return a.default.createElement("div",{className:"FashionBC"},a.default.createElement("div",{className:"FashionBC_row display-flex align-items-center flex-wrap"},a.default.createElement("div",{className:"FashionBC_carousel"},a.default.createElement(r.default,{vid_pics:t})),a.default.createElement("div",null,a.default.createElement(l.default,null))))}i.propTypes={},t.default=i},94861:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(67294)),r=(l(n(45697)),l(n(97817)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return a.default.createElement("div",{className:"FashionBCR padding-8px"},a.default.createElement("div",null,a.default.createElement("img",{src:r.default,alt:"",width:"300",height:"200"})))}n(48624),u.propTypes={},t.default=u},98623:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(67294)),r=(l(n(45697)),n(93191));function l(e){return e&&e.__esModule?e:{default:e}}n(16194);var u=[{name:"Shop mall",link:"mall"},{name:"Extra ship",link:"extra-ship"},{name:"Premium",link:"premium"},{name:"Brand discount",link:"brand-discount"},{name:"Brand name",link:"brand-1"},{name:"Brand name",link:"brand-1"},{name:"Brand name",link:"brand-1"},{name:"Brand name",link:"brand-1"},{name:"Brand name",link:"brand-1"}];function i(e){return a.default.createElement("div",{className:"FashionLN"},a.default.createElement("ul",{className:"FashionLN_list list-none"},u.map((function(e,t){return a.default.createElement("li",{key:"FashionLN_"+t,className:"FashionLN_item"},a.default.createElement(r.Link,{to:"/fashion/"+e.link},a.default.createElement("div",{className:"FashionLN_title brs-5px label-field"},e.name)))}))))}i.propTypes={},t.default=i},9239:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(67294)),r=(u(n(45697)),n(93191)),l=u(n(97817));function u(e){return e&&e.__esModule?e:{default:e}}n(17932);var i=[{name:"Fashion man",img:l.default.png,link:"man"},{name:"Fashion woman",img:l.default.png,link:"woman"},{name:"Laptop & phone",img:l.default.png,link:"laptop-phone"},{name:"Watch",img:l.default.png,link:"watch"},{name:"Shoes",img:l.default.png,link:"shoes"},{name:"Mom & baby",img:l.default.png,link:"mom-baby"},{name:"Wallet",img:l.default.png,link:"wallet"},{name:"House",img:l.default.png,link:"house"}];function o(e){return a.default.createElement("div",null,a.default.createElement("ul",{className:"FashionCtg_list list-none"},i.map((function(e,t){return a.default.createElement("li",{key:"FashionCtg_"+t},a.default.createElement(r.Link,{to:"/fashion/search?q="+e.link},a.default.createElement("div",{className:"FashionCtg_item brs-5px"},a.default.createElement("div",null,a.default.createElement("img",{src:e.img,alt:"",width:"50",height:"50"})),a.default.createElement("div",{className:"FashionCtg_item-name"},e.name))))}))))}o.propTypes={},t.default=o},28746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=i(a),l=n(93191),u=(i(n(45697)),i(n(23504)));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(""),2),n=t[0],i=t[1];return n?r.default.createElement(l.Redirect,{to:"/fashion/search?q="+n,push:!0}):r.default.createElement("div",{className:"FashionH"},r.default.createElement(u.default,{handled:!1,handleSearchFashion:function(e){e.trim()&&i(e)}}))}o.propTypes={},t.default=o},52382:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(67294),l=h(r),u=n(51468),i=h(n(4124)),o=h(n(79114)),s=h(n(15765)),c=h(n(13425)),d=h(n(81717)),f=h(n(98623)),m=h(n(9239)),_=h(n(28746)),p=h(n(97817));function h(e){return e&&e.__esModule?e:{default:e}}function v(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function g(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function a(r,l){try{var u=t[r](l),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then((function(e){a("next",e)}),(function(e){a("throw",e)}));e(i)}("next")}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(50437);var E=function(e){function t(){var e,n,a,r=this;y(this,t);for(var l=arguments.length,i=Array(l),o=0;o<l;o++)i[o]=arguments[o];return n=a=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={list:[],hot_images:[],has_fetched:!1,is_fetching:!1,count:0},a.getListHotImage=g(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_FashionHotImage_L)();case 2:t=e.sent,console.log(t.data),n=t.data.map((function(e){return e.vid_pic})),a.setState({hot_images:[n[n.length-1]].concat(v(n),[n[0]]),has_fetched:!!a.state.list.length});case 6:case"end":return e.stop()}}),e,r)}))),a.getListProductFashion=g(regeneratorRuntime.mark((function e(){var t,n,l,i,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.count,l=t.list,i=t.has_fetched,o=l.length,!(i&&n<=o)){e.next=4;break}return e.abrupt("return");case 4:return i&&a.setState({is_fetching:!0}),e.prev=5,e.next=8,(0,u.API_FashionProduct_L)({page:1,size:20,c_count:o});case 8:s=e.sent,a.mounted&&(l.push.apply(l,v(s.data.data)),a.setState({is_fetching:!1,count:i?n:s.data.count,has_fetched:!!a.state.hot_images.length})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,r,[[5,12]])}))),b(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){document.title="Fashion",this.mounted=!0,this.getListHotImage(),this.getListProductFashion()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.is_fetching,n=e.has_fetched,a=e.list,r=e.hot_images,u=e.count;return l.default.createElement("div",{className:"Fashion"},l.default.createElement("div",{className:"Fashion_head"},l.default.createElement(_.default,null)),l.default.createElement("div",{className:"Fashion_body"},l.default.createElement("div",null,l.default.createElement("div",{className:"Fashion_carousel"},l.default.createElement(d.default,{images:n?r:Array(4).fill(p.default)})),l.default.createElement("div",{className:"Fashion_banner"},l.default.createElement(f.default,null),l.default.createElement(m.default,null))),l.default.createElement("hr",{className:"App_hr-bg"}),l.default.createElement("div",null,l.default.createElement("ul",{className:"Fashion__list"},(n?a:Array(5).fill({vid_pics:[]})).map((function(e,t){return l.default.createElement("li",{key:"Fashion_item_"+(e.id||t),className:"Fashion__item"},l.default.createElement(s.default,{link:"/fashion:"+e.id,img:e.vid_pics.length?e.vid_pics[0].vid_pic:void 0,name:e.name,new_price:e.new_price,old_price:e.old_price}))})))),l.default.createElement("br",null),l.default.createElement(c.default,{title:l.default.createElement(i.default,{disabled:t,ripple_type:"center"},"More product..."),is_show_more:u>a.length,is_fetching:t&&n,handleShowMore:this.getListProductFashion,FetchingComponent:o.default})))}}]),t}(r.Component);t.default=E},97817:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=n.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},40824:(e,t,n)=>{"use strict";n.r(t)},97109:(e,t,n)=>{"use strict";n.r(t)},25490:(e,t,n)=>{"use strict";n.r(t)},82463:(e,t,n)=>{"use strict";n.r(t)},13473:(e,t,n)=>{"use strict";n.r(t)},48624:(e,t,n)=>{"use strict";n.r(t)},16194:(e,t,n)=>{"use strict";n.r(t)},17932:(e,t,n)=>{"use strict";n.r(t)},50437:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=8925.js.map