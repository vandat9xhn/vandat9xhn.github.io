(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8874],{28308:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useMounted=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!0),2),t=e[0],a=e[1];return(0,n.useEffect)((function(){return function(){a(!1)}}),[]),t};var n=a(67294)},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:NodeList||HTMLCollection,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e.length){var a=new IntersectionObserver((function(e,a){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute(t),a.unobserve(e.target))}))}));e.forEach((function(e){return a.observe(e)}))}},t.observerVidPic=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLPictureElement||HTMLVideoElement,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){var a=new IntersectionObserver((function(e,a){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute(t),a.unobserve(e.target))}))}));a.observe(e)}}},17089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=document.getElementsByClassName(e)[0].getBoundingClientRect().width,r=document.getElementsByClassName(t)[0].getBoundingClientRect().width,l=r*a,u=Math.floor(n/r)*r,o=l-n;return[u,o]}},62944:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(e.target.dataset.appearance=!0,t.unobserve(e.target)):e.target.dataset.appearance&&(e.target.dataset.appearance=!1,t.unobserve(e.target))}))}),{threshold:.9}).observe(e)}},25770:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PhoneOrder_C=t.CreateFilterAllProducts=t.API_PhoneLaptop_R=t.API_FilterPhoneLaptop_L=t.API_PhoneLaptop_L=void 0;var n,r=(n=a(62667))&&n.__esModule?n:{default:n},l=a(50918),u=a(55835);t.API_PhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,r.default)({url:"/phone/list/",params:e})}),e)},t.API_FilterPhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,r.default)({url:"/phone/list-filter/",params:e})}),e)},t.API_PhoneLaptop_R=function(e){return(0,l.API_FakeReal)(u.default_phone_arr[0],(function(){return(0,r.default)({url:"/phone/"+e+"/"})}))},t.CreateFilterAllProducts=function(e){return(0,r.default)({method:"POST",url:"/phone/create/",data:e})},t.API_PhoneOrder_C=function(e){return(0,l.API_FakeReal)({},(function(){return(0,r.default)({url:"/phone/order-c/",method:"POST",data:e})}))}},97284:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=c(r),u=c(a(37930)),o=c(a(25061));function c(e){return e&&e.__esModule?e:{default:e}}a(36233),t.default=function(e){var t=(0,r.useState)(!1),a=n(t,2),c=a[0],i=a[1],s=(0,r.useState)(!1),d=n(s,2),f=d[0],m=d[1];return l.default.createElement("div",{className:location.pathname.includes("phone")?"Contact":"display-none"},l.default.createElement("div",{className:"Contact_close"},l.default.createElement("div",{onClick:function(){i(!c),f&&m(!1)},title:c?"Close":"Contact"},c?l.default.createElement(u.default,{x:400}):l.default.createElement(u.default,{x:200}))),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("div",{className:"Contact_main "+(c?"":"Contact_hide")},l.default.createElement("div",{className:"Contact_phone"},l.default.createElement("div",{className:"Contact_phone-number",onClick:function(){!f&&m(!0)}},l.default.createElement("img",{className:c?"Contact_phone-img":"",src:o.default,alt:""})),l.default.createElement("div",{className:c?"Contact_phone-animation":""})),l.default.createElement("div",{className:"Contact_web"},l.default.createElement("div",{className:"Contact_web-online"},"FB"),l.default.createElement("div",{className:"Contact_web-online"},"ZL"),l.default.createElement("div",{className:"Contact_web-online"},"TT")),l.default.createElement("div",{className:"Contact_number "+(f?"":"display-none")},l.default.createElement("div",{className:"label-field"},"0987.654.321"))))}},15765:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=s(n),l=a(93191),u=s(a(45697)),o=a(27179),c=a(66810),i=s(a(86383));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.img_or_dataset,a=e.link,u=e.img,s=e.name,d=e.in_stock,f=e.new_price,m=e.old_price,p=e.discount,_=e.installment,v=(0,n.useRef)(null);return(0,n.useEffect)((function(){null!=v.current&&(0,c.observerVidPic)(v.current,"data-src")}),[u]),s?r.default.createElement("div",{className:"ProductItem padding-8px position-rel",title:s},r.default.createElement(l.Link,{to:a,className:"normal-text hv-cl-blue"},r.default.createElement("div",{className:"ProductItem_head"},t?r.default.createElement("img",{src:u,alt:""}):r.default.createElement("img",{ref:v,"data-src":u,alt:""})),r.default.createElement("div",{className:"ProductItem_foot"},r.default.createElement("div",{className:"ProductItem_name label-field"},s),d&&r.default.createElement("div",{className:"text-red"},d),r.default.createElement("div",{className:"ProductItem_price"},f&&r.default.createElement("div",{className:"label-field font-italic"},(0,o.formatNum)(f)),m&&r.default.createElement("div",null,r.default.createElement("span",{className:"ProductItem_old-price"},(0,o.formatNum)(m)),r.default.createElement("sup",{className:"dv-vnd"},"đ"))))),p&&r.default.createElement("div",{className:"ProductItem_discount text-red"},-p+"%"),void 0!==_&&r.default.createElement("div",{className:"ProductItem_installment brs-5px"},_,"%")):r.default.createElement(i.default,null)}a(82463),d.propTypes={img_or_dataset:u.default.bool,link:u.default.string,img:u.default.string,name:u.default.string,in_stock:u.default.string,new_price:u.default.oneOfType([u.default.string,u.default.number]),old_price:u.default.oneOfType([u.default.string,u.default.number]),discount:u.default.oneOfType([u.default.string,u.default.number]),installment:u.default.oneOfType([u.default.string,u.default.number])},d.defaultProps={img_or_dataset:!0},t.default=d},86383:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),u(a(29875))),l=u(a(97817));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return n.default.createElement("div",{className:"ProductItem"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_img"},n.default.createElement("img",{src:l.default,alt:""}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement(r.default,{num:4})))}o.propTypes={},t.default=o},55835:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_phone_arr=void 0;var n,r=(n=a(51374))&&n.__esModule?n:{default:n};t.default_phone_arr=[{id:1,url:r.default,in_stock:"in stock",discount:10,installment:0,gift:"asd asd\nad asd\nasd asd sad",product_sets:"asd asd asd\nasdsadas\nasd asdsadas asd sad\nasd asd asda",cpu:"500",os:"Android",ram:"3G",internal_memory:"32G",camera:"Full HD",memory_stick:"120G",type_product:"phone",name:"Abc Xyz",new_price:8e6,old_price:85e5,types:[{url:r.default,title:"Black"},{url:r.default,title:"Blue"},{url:r.default,title:"White"}],promotion:"ad asd ad asd as asd asd \nad ada d asda dsa dasd \nasd asd asd as asd asd asd asd"}]},87934:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=u(a(45697)),l=u(a(15765));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.products;return n.default.createElement("div",{className:"ProductContent padding-8px bg-primary"},n.default.createElement("div",{className:"ProductContent_row display-flex justify-content-center flex-wrap"},t.map((function(e,t){return n.default.createElement("div",{key:t,className:"ProductContent_item"},n.default.createElement(l.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}a(90548),o.propTypes={products:r.default.array},t.default=o},98874:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=a(67294),u=m(l),o=(m(a(45697)),a(25770)),c=a(28308),i=m(a(37824)),s=m(a(97284)),d=m(a(38326)),f=m(a(46163));function m(e){return e&&e.__esModule?e:{default:e}}a(37981);var p=[1,2,3,4,5,6],_=[1,2,3,4,5,6,7,8,9,10,11,12],v={pk:-1,gte_price:0,lte_price:1e8,in_stock:"",page:1};function h(e){var t,a,m=(t=regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.API_PhoneLaptop_L)(n({},v,t));case 3:r=e.sent,M&&a(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var u=e[r](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(o)}("next")}))},function(e,t){return a.apply(this,arguments)}),h=(0,l.useState)(_),y=r(h,2),b=y[0],P=y[1],E=(0,l.useState)(p),g=r(E,2),N=g[0],w=g[1],k=(0,l.useState)(p),A=r(k,2),O=A[0],I=A[1],x=(0,l.useRef)(null),C=(0,l.useRef)(null),j=(0,l.useRef)(null),M=(0,c.useMounted)();return(0,l.useEffect)((function(){document.title="Phone Laptop",(0,i.default)(x.current,(function(){return m({is_hot:1,size:12},P)}),0),(0,i.default)(C.current,(function(){return m({type_product:"phone",size:15},w)}),0),(0,i.default)(j.current,(function(){return m({type_product:"laptop",size:15},I)}),0)}),[]),u.default.createElement("div",{className:"PhoneLaptop"},u.default.createElement("div",{ref:x,className:"PhoneLaptop_banner"},u.default.createElement(d.default,{products:b})),u.default.createElement("div",{ref:C,className:"PhoneLaptop_phone"},u.default.createElement(f.default,{products:N,title:"Phone",link:"/phone-laptop-phones"})),u.default.createElement("div",{ref:j,className:"PhoneLaptop_laptop"},u.default.createElement(f.default,{products:O,title:"Laptop",link:"/phone-laptop-laptops"})),u.default.createElement(s.default,null))}h.propTypes={},t.default=h},38326:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(67294),u=f(l),o=f(a(45697)),c=f(a(17089)),i=f(a(62944)),s=f(a(61498));a(39480);var d=f(a(15765));function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(44149);var _=function(e){function t(){var e,a,r;m(this,t);for(var l=arguments.length,u=Array(l),o=0;o<l;o++)u[o]=arguments[o];return a=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={translateX:0},r.refProductAnimate=function(e){null!=e&&(r.ref_product_animate=e)},r.makeBtnDisabled=function(){r.stop_auto=!0,r.just_click=!0,setTimeout((function(){r.just_click=!1}),1e3)},r.handleNextPrev=function(e){if(!r.just_click){var t=(0,c.default)("ProductsAnimate_row","ProductsAnimate__0",r.props.products.length),a=n(t,2),l=a[0],u=a[1];e(r.state.translateX,l,u),r.makeBtnDisabled()}},r.nextPhones=function(){r.handleNextPrev((function(e,t,a){r.setState({translateX:e>=a?0:e+t<a?e+t:a})}))},r.prevPhones=function(){r.handleNextPrev((function(e,t,a){r.setState({translateX:0==e?a:e-t<0?0:e-t})}))},r.autoNext=function(){r.mounted&&("false"!=r.ref_product_animate.dataset.appearance&&(r.stop_auto||r.nextPhones(),r.stop_auto=!1),setTimeout((function(){(0,i.default)(r.ref_product_animate),setTimeout((function(){r.autoNext()}),1e3)}),7e3))},p(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.just_click=!1,this.stop_auto=!0,this.autoNext()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.translateX,t=this.props.products;return u.default.createElement("div",{className:"ProductsAnimate"},u.default.createElement("h3",{className:"ProductsAnimate_title App_title margin-0"},"HOT PRODUCTS"),u.default.createElement("div",null,u.default.createElement("div",{ref:this.refProductAnimate,className:"ProductsAnimate_contain brs-5px box-shadow-1","data-appearance":"false"},u.default.createElement("div",{className:"ProductsAnimate_row",style:{transform:"translateX("+-e+"px)"}},t.map((function(e,t){return u.default.createElement("div",{className:"ProductsAnimate__"+t,key:"ProductsAnimate__"+t},u.default.createElement(d.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment,img_or_dataset:t<6}))}))),u.default.createElement(s.default,{handleNext:this.nextPhones,handlePrev:this.prevPhones}))))}}]),t}(l.Component);_.propTypes={products:o.default.array},t.default=_},46163:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),r=a(93191),l=o(a(45697)),u=o(a(87934));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.products,a=e.title,l=e.link;return n.default.createElement("div",{className:"SpecProducts"},n.default.createElement("div",{className:"SpecProducts_title"},n.default.createElement("h3",{className:"App_title margin-0"},n.default.createElement(r.Link,{className:"SpecProducts_text normal-text",to:l},a))),n.default.createElement("div",{className:"SpecProducts_list"},n.default.createElement(u.default,{products:t})))}a(20802),c.propTypes={products:l.default.array},t.default=c},25061:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"static/images_icons/fefcadbbafef304e76966b3277a4748e.png"},97817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},51374:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"static/images_icons/324ce9c2345361017cf71de4d8fb070a.jpg"},36233:(e,t,a)=>{"use strict";a.r(t)},82463:(e,t,a)=>{"use strict";a.r(t)},90548:(e,t,a)=>{"use strict";a.r(t)},37981:(e,t,a)=>{"use strict";a.r(t)},39480:(e,t,a)=>{"use strict";a.r(t)},44149:(e,t,a)=>{"use strict";a.r(t)},20802:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=8874.js.map