(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6929],{79324:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_phone_arr=void 0;var n,r=(n=a(51374))&&n.__esModule?n:{default:n};t.default_phone_arr=[{id:1,url:r.default,in_stock:"in stock",discount:10,installment:0,gift:"asd asd\nad asd\nasd asd sad",product_sets:"asd asd asd\nasdsadas\nasd asdsadas asd sad\nasd asd asda",cpu:"500",os:"Android",ram:"3G",internal_memory:"32G",camera:"Full HD",memory_stick:"120G",type_product:"phone",name:"Abc Xyz",new_price:8e6,old_price:85e5,types:[{url:r.default,title:"Black"},{url:r.default,title:"Blue"},{url:r.default,title:"White"}],promotion:"ad asd ad asd as asd asd \nad ada d asda dsa dasd \nasd asd asd as asd asd asd asd"}]},5306:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)("vid_pic-observe opacity-0"),2),a=t[0],n=t[1];return(0,r.useEffect)((function(){e.current&&(0,l.default)({elements:[e.current],callback:function(){n("vid_pic-observe opacity-1")}})}),[e]),a};var n,r=a(67294),l=(n=a(66810))&&n.__esModule?n:{default:n}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,a=e.threshold,n=void 0===a?0:a,r=e.callback,l=void 0===r?function(){}:r,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),l())}))}),{threshold:n});t.forEach((function(e){u.observe(e)}))}},25770:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PhoneOrder_C=t.API_PhoneLaptop_R=t.API_FilterPhoneLaptop_L=t.API_PhoneLaptop_L=void 0;var n,r=(n=a(62667))&&n.__esModule?n:{default:n},l=a(50918),u=a(79324);t.API_PhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,r.default)({url:"/phone/list/",params:e})}),e)},t.API_FilterPhoneLaptop_L=function(e){return(0,l.API_FakeReal)(Array(12).fill(u.default_phone_arr[0]),(function(){return(0,r.default)({url:"/phone/list-filter/",params:e})}),e)},t.API_PhoneLaptop_R=function(e){return(0,l.API_FakeReal)(u.default_phone_arr[0],(function(){return(0,r.default)({url:"/phone/"+e+"/"})}))},t.API_PhoneOrder_C=function(e){return(0,l.API_FakeReal)({},(function(){return(0,r.default)({url:"/phone/order-c/",method:"POST",data:e})}))}},14565:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openScreenNotice=function(e){var t=e.openScreenOnce,a=e.ComponentNotice;t({ScreenOneComponent:n.default.createElement(u,{ComponentNotice:a})})};var n=l(a(67294)),r=(l(a(45697)),l(a(3995)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ComponentNotice;return n.default.createElement(r.default,null,t)}u.propTypes={},t.default=u},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children,a=e.onClick,r=e.type,l=e.disabled,u=e.ripple_type,o=e.title;return n.default.createElement("button",{className:"ButtonRipple btn label-field "+(l?"opacity-05 pointer-events-none":"cursor-pointer"),type:r,title:o,disabled:l,onClick:a},n.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+u+" "+(l?"display-none":"")}),t)}a(40824),u.propTypes={type:r.default.string,title:r.default.string,disabled:r.default.bool,ripple_type:r.default.string,children:r.default.any,onClick:r.default.func},u.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=u},15765:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),r=a(93191),l=d(a(45697)),u=a(27179),o=d(a(19400)),c=d(a(86383));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.img_or_dataset,a=e.num_row_info,l=e.link,d=e.img,i=e.name,s=e.in_stock,f=e.new_price,m=e.old_price,p=e.discount,_=e.installment;return i?n.default.createElement("div",{className:"ProductItem padding-8px position-rel",title:i},n.default.createElement(r.Link,{to:l,className:"normal-text hv-cl-blue"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},t?n.default.createElement("img",{src:d,alt:""}):n.default.createElement(o.default,{vid_pic:d}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement("div",{className:"ProductItem_name label-field"},i),s&&n.default.createElement("div",{className:"text-red"},s),n.default.createElement("div",{className:"ProductItem_price"},f&&n.default.createElement("div",{className:"label-field font-italic"},(0,u.formatNum)(f)),m&&n.default.createElement("div",null,n.default.createElement("span",{className:"ProductItem_old-price"},(0,u.formatNum)(m)),n.default.createElement("sup",{className:"dv-vnd"},"đ"))))),p&&n.default.createElement("div",{className:"ProductItem_discount text-red"},-p+"%"),void 0!==_&&n.default.createElement("div",{className:"ProductItem_installment brs-5px"},_,"%")):n.default.createElement(c.default,{num_row_info:a})}a(82463),i.propTypes={img_or_dataset:l.default.bool,num_row_info:l.default.number,link:l.default.string,img:l.default.string,name:l.default.string,in_stock:l.default.string,new_price:l.default.oneOfType([l.default.string,l.default.number]),old_price:l.default.oneOfType([l.default.string,l.default.number]),discount:l.default.oneOfType([l.default.string,l.default.number]),installment:l.default.oneOfType([l.default.string,l.default.number])},i.defaultProps={img_or_dataset:!0,num_row_info:4},t.default=i},86383:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),u(a(29875))),l=u(a(97817));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.num_row_info;return n.default.createElement("div",{className:"ProductItem padding-8px position-rel"},n.default.createElement("div",{className:"ProductItem_head"},n.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},n.default.createElement("img",{src:l.default,alt:""}))),n.default.createElement("div",{className:"ProductItem_foot"},n.default.createElement(r.default,{num:t})))}o.propTypes={},t.default=o},3995:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children;return n.default.createElement("div",{className:"NoticeDiv"},t)}a(83705),u.propTypes={children:r.default.element},t.default=u},19400:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=d(r),u=d(a(45697)),o=a(5306),c=a(32006);function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pic,a=e.type,u=e.video_props,d=e.img_props,i=(0,c.type_video_or_img)(t,a),s=(0,r.useRef)(null),f=(0,o.useObserveVidPic)(s);return"img"==i?l.default.createElement("img",n({ref:s,className:""+f,"data-src":t,alt:""},d)):"video"==i?l.default.createElement("video",n({ref:s,className:""+f,"data-src":t},u)):l.default.createElement("div",null)}i.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},i.defaultProps={video_props:{},img_props:{}},t.default=i},46929:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=y(r),u=a(93191),o=(y(a(45697)),a(15130)),c=a(25770),d=a(21092),i=y(a(48321)),s=y(a(37824)),f=a(14565),m=y(a(71975)),p=y(a(69879)),_=y(a(98270)),v=y(a(84724));function y(e){return e&&e.__esModule?e:{default:e}}function h(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function n(r,l){try{var u=t[r](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}a(56405);var E={product:{},action:"",open_discount:!1,type_buy_ix:0,has_fetched:!1};function b(){var e,t,a=(e=h(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(E),e.next=4,(0,c.API_PhoneLaptop_R)(b);case 4:t=e.sent,document.title=t.data.name,T((function(e){return n({},e,{product:t.data,has_fetched:!0})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return e.apply(this,arguments)}),y=(t=h(regeneratorRuntime.mark((function e(t,a,r){var u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,i.default)({full_name:t,address:a,phone_number:r,phone_color:I,phone_model:b,quantity:1,status:"order"}),e.next=3,A((function(){return(0,c.API_PhoneOrder_C)(u)}));case 3:T(n({},x,{action:"",type_buy_ix:0,open_discount:!1})),(0,f.openScreenNotice)({openScreenOnce:N,ComponentNotice:l.default.createElement("div",{className:"PhoneLaptopDetail_notice-success brs-5px bg-loader"},"Order successfully")}),setTimeout((function(){g()}),800);case 6:case"end":return e.stop()}}),e,this)}))),function(e,a,n){return t.apply(this,arguments)}),b=+(0,u.useParams)().id,P=(0,r.useContext)(o.context_api),N=P.openScreenOnce,g=P.closeScreenOnce,w=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(E),2),x=w[0],T=w[1],k=x.product,O=x.action,C=x.open_discount,I=x.type_buy_ix,M=x.has_fetched,L=(0,r.useRef)(null),A=(0,d.useScreenFetching)();function B(){T(n({},x,{action:"type_buy"}))}return(0,r.useEffect)((function(){window.scrollTo(0,0),(0,s.default)(L.current,a,0)}),[b]),l.default.createElement("div",{className:"bg-primary"},l.default.createElement("div",{ref:L},l.default.createElement(m.default,{product:k,has_fetched:M,openTypeBuy:B})),l.default.createElement("hr",{className:"App_hr-bg"}),l.default.createElement("div",null,l.default.createElement(p.default,{product_id:b})),l.default.createElement("div",{className:""==O?"display-none":"screen-blur"},l.default.createElement("div",{className:"form-fixed"},l.default.createElement("div",{className:"type_buy"==O?"":"display-none"},l.default.createElement(_.default,{product:k,open_discount:C,type_buy_ix:I,toggleDiscountType:function(){T(n({},x,{open_discount:!C}))},handleChangeTypeBuy:function(e){I!==e&&T(n({},x,{type_buy_ix:e}))},openConfirmBuy:function(){T(n({},x,{action:"confirm_buy"}))},closeTypeBuy:function(){T(n({},x,{action:""}))}})),l.default.createElement("div",{className:"confirm_buy"==O?"":"display-none"},l.default.createElement(v.default,{closeConfirmBuy:function(){B()},handleSubmit:y})))))}b.propTypes={},t.default=b},84160:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.openTypeBuy;return n.default.createElement("div",{className:"PhoneLaptopBuying"},n.default.createElement("div",{className:"PhoneLaptopBuying_row-btn"},n.default.createElement("div",{className:"PhoneLaptopBuying_btn brs-5px",onClick:t},"Buy now"),n.default.createElement("div",{className:"font-italic"},"Delivery or receive at supermarket")))}r(a(45697)),a(81753),l.propTypes={},t.default=l},84724:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=o(n),l=o(a(45697)),u=o(a(37930));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.handleSubmit,a=e.closeConfirmBuy,l=(0,n.useRef)(null),o=(0,n.useRef)(null),c=(0,n.useRef)(null);return r.default.createElement("div",null,r.default.createElement("div",{className:"PhoneLaptopConfirmBuy_contain scroll-thin brs-5px box-shadow-1"},r.default.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l.current.value,o.current.value,c.current.value)},autoComplete:"off"},r.default.createElement("div",null,r.default.createElement("label",{className:"label-field"},"Full name"),r.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},r.default.createElement("input",{ref:l,type:"text",name:"full_name",required:!0}))),r.default.createElement("div",null,r.default.createElement("label",{className:"label-field"},"Address"),r.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},r.default.createElement("input",{ref:o,type:"text",name:"address",required:!0}))),r.default.createElement("div",null,r.default.createElement("label",{className:"label-field"},"Phone"),r.default.createElement("div",{className:"PhoneLaptopConfirmBuy__input"},r.default.createElement("input",{ref:c,type:"tel",name:"phone",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"0123456789",required:!0}))),r.default.createElement("div",{className:"PhoneLaptopConfirmBuy_submit"},r.default.createElement("button",{type:"submit"},"Send information"))),r.default.createElement("div",{className:"PhoneLaptopConfirmBuy_close"},r.default.createElement("div",{className:"PhoneLaptopConfirmBuy_close-icon brs-50 hv-opacity",onClick:a},r.default.createElement(u.default,{y:400,size_icon:"1rem"})))))}a(28374),c.propTypes={handleSubmit:l.default.func,closeConfirmBuy:l.default.func},t.default=c},71975:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),r=d(a(45697)),l=a(27179),u=d(a(29875)),o=d(a(84160)),c=d(a(97817));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.product,a=e.openTypeBuy,r=e.has_fetched,d=t.url,i=t.name,s=t.new_price,f=t.old_price,m=t.in_stock,p=t.discount,_=t.installment,v=t.promotion,y=t.gift,h=t.product_sets,E=t.cpu,b=t.os,P=t.ram,N=t.internal_memory,g=t.camera,w=t.memory_stick,x=r?[{name:"CPU",value:E},{name:"OS",value:b},{name:"RAM",value:P},{name:"Internal memory",value:N},{name:"Camera",value:g},{name:"Memory stick",value:w}]:void 0;return n.default.createElement("div",{className:"ProductDetail"},n.default.createElement("div",{className:"padding-8px"},r?n.default.createElement("h2",{className:"ProductDetail_name margin-0"},i):n.default.createElement("h2",{className:"ProductDetail_name-skeleton margin-0"},n.default.createElement(u.default,null))),n.default.createElement("hr",{className:"App_hr-bg"}),n.default.createElement("div",{className:"ProductDetail_contain"},n.default.createElement("div",{className:"ProductDetail_row display-flex"},n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",{className:"ProductDetail_image"},n.default.createElement("div",{className:"ProductDetail__img position-rel"},n.default.createElement("img",{className:"wh-100",src:d||c.default,alt:""}),n.default.createElement("div",{className:"ProductDetail__discount"},"-",p,"%"),n.default.createElement("div",{className:"ProductDetail__installment"},"Installment ",_,"%")),r?n.default.createElement("div",null,n.default.createElement("div",null,(0,l.formatNum)(s)," VND"," ",n.default.createElement("del",null,(0,l.formatNum)(f))),n.default.createElement("div",{className:"text-red"},m)):n.default.createElement(u.default,{num:2}))),n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",null,n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Promotion:"," "),r?v.split("\n").map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_promotion_"+t},e)})):n.default.createElement(u.default,{num:6})),n.default.createElement("div",null,y)),n.default.createElement("div",{className:"ProductDetail_col"},n.default.createElement("div",null,n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Product sets:"," "),r?h.split("\n").map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_product_sets_"+t},e)})):n.default.createElement(u.default,{num:6}))))),n.default.createElement("hr",{className:"App_hr-bg"}),n.default.createElement("div",{className:"ProductDetail_specs"},n.default.createElement("h3",{className:"ProductDetail_specs_title"},"* Product specifications:"),r?x.map((function(e,t){return n.default.createElement("div",{key:"ProductDetail_product_specs_"+t},"- ",e.name,": ",e.value)})):n.default.createElement(u.default,{num:6})),n.default.createElement("div",null,n.default.createElement(o.default,{openTypeBuy:a})))}a(27980),i.propTypes={product:r.default.object},t.default=i},69879:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=d(n),l=d(a(45697)),u=a(25770),o=d(a(37824)),c=d(a(15765));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t,a,l=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({products:[],has_fetched:!1}),e.next=3,(0,u.API_PhoneLaptop_L)({pk:d,page:1,size:10});case 3:t=e.sent,f({products:t.data.data,has_fetched:!0});case 5:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var u=e[r](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(o)}("next")}))},function(){return a.apply(this,arguments)}),d=e.product_id,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({products:[],has_fetched:!1}),2),s=i[0],f=i[1],m=s.products,p=s.has_fetched,_=(0,n.useRef)(null);return(0,n.useEffect)((function(){(0,o.default)(_.current,l,0)}),[d]),r.default.createElement("div",{ref:_,className:"RelativeProducts brs-5px padding-8px"},r.default.createElement("h2",null,"Relative"),r.default.createElement("div",{className:"RelativeProducts_row display-flex justify-content-center flex-wrap"},(p?m:Array(5).fill(1)).map((function(e,t){return r.default.createElement("div",{key:"RelativeProducts_item_"+t,className:"RelativeProducts_col"},r.default.createElement(c.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}a(40703),i.propTypes={product_id:l.default.number},t.default=i},98270:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),r=d(a(45697)),l=a(27179),u=d(a(37930)),o=d(a(4124)),c=d(a(12077));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.product,a=e.open_discount,r=e.type_buy_ix,d=e.toggleDiscountType,i=e.handleChangeTypeBuy,s=e.openConfirmBuy,f=e.closeTypeBuy,m=t.name,p=t.new_price,_=t.old_price,v=t.types,y=t.promotion;return n.default.createElement("div",{className:"PhoneLaptopType position-rel scroll-thin bg-primary brs-5px box-shadow-1"},n.default.createElement("div",{className:"PhoneLaptopType_head padding-8px"},n.default.createElement("h3",{className:"margin-0"},m),n.default.createElement("div",null,n.default.createElement("span",{className:"PhoneLaptopType_new-price"},(0,l.formatNum)(p)," vnd"),n.default.createElement("span",{className:"PhoneLaptopType_old-price"},(0,l.formatNum)(_)," vnd"))),n.default.createElement("div",{className:"PhoneLaptopType_body"},n.default.createElement("label",{className:"padding-8px label-field"},"Choose type:"),n.default.createElement("ul",{className:"PhoneLaptopType_list display-flex list-none"},v&&v.map((function(e,t){return n.default.createElement("li",{key:"PhoneLaptopType_"+t},n.default.createElement(c.default,{ix:t,is_active:t==r,url:e.url,title:e.title,handleChangeTypeBuy:i}))})))),n.default.createElement("div",{className:"PhoneLaptopType_bottom padding-8px"},n.default.createElement("div",null,n.default.createElement("div",{className:"label-field width-fit-content cursor-pointer font-italic",onClick:d},a?"Hide discount":"Show more discount")),n.default.createElement("div",{className:a?"PhoneLaptopType_bottom_promotion":"display-none"},y)),n.default.createElement("div",{className:"App_submit display-flex-center"},n.default.createElement(o.default,{type:"text",title:"Buy now",onClick:s},"Buy now")),n.default.createElement("div",{className:"PhoneLaptopType_close"},n.default.createElement("div",{className:"close-icon-small brs-50 hv-opacity cursor-pointer",onClick:f},n.default.createElement(u.default,{y:400,size_icon:"1rem"}))))}a(40474),i.propTypes={types:r.default.array},i.defaultProps={types:[]},t.default=i},12077:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ix,a=e.is_active,r=e.url,l=e.title,u=e.handleChangeTypeBuy;return n.default.createElement("label",{htmlFor:"TypeItem_phone_"+t,className:"TypeItem padding-8px cursor-pointer"},n.default.createElement("div",{className:"TypeItem_row flex-col display-flex align-items-center"},n.default.createElement("div",null,n.default.createElement("img",{src:r,alt:"",width:"80",height:"100"})),n.default.createElement("div",null,n.default.createElement("input",{id:"TypeItem_phone_"+t,type:"radio",name:"type_buy",checked:a,onChange:function(){u(t)}})),n.default.createElement("div",null,l)))}r(a(45697)),a(98977),l.propTypes={},t.default=l},97817:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n=a.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},40824:(e,t,a)=>{"use strict";a.r(t)},82463:(e,t,a)=>{"use strict";a.r(t)},83705:(e,t,a)=>{"use strict";a.r(t)},56405:(e,t,a)=>{"use strict";a.r(t)},81753:(e,t,a)=>{"use strict";a.r(t)},28374:(e,t,a)=>{"use strict";a.r(t)},27980:(e,t,a)=>{"use strict";a.r(t)},40703:(e,t,a)=>{"use strict";a.r(t)},40474:(e,t,a)=>{"use strict";a.r(t)},98977:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=6929.js.map