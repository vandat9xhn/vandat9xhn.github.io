(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3504],{88122:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default_fashion_buy_arr=a.default_fashion_buy_obj=void 0;var r=t(69565),n=t(7605),o=t(25561),u=function(){return{id:(0,r.getRandomId)(),product:{id:(0,r.getRandomId)(),vid_pics:(0,o.getProductVidPicArr)(1,1),total_add_cart:0,brand:"Product brand 5",type:"Product type 5",hashtag:"Product hashtag 1",name:"Product name 1",new_price:460696,old_price:460696,discount:5,description:"Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d",total:62,sold:0,created_time:"2021-04-13T21:25:14.131178Z",updated_time:"2021-04-23T02:27:05.287671Z",shop_model:3,list_model:null},quantity:2,buy_shop_model:1,product_model:2}},d=a.default_fashion_buy_obj=function(){return{id:(0,r.getRandomId)(),products:(0,n.getDefaultArr)(u,1,5),shop:{id:(0,r.getRandomId)(),picture:"",name:"Shop 1",address:"Product address 2",info:"Product info 2"},payment:"COD",status:"BUYING",created_time:"2021-04-23T09:31:11.551079Z",updated_time:"2021-04-23T09:31:11.551079Z",profile_model:1,shop_model:3,transport_price_model:1,voucher_model:1}};a.default_fashion_buy_arr=function(){return(0,n.getDefaultArr)(d,2,6)}},50586:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default_voucher_arr=a.default_payment_arr=a.default_transporter_arr=void 0;var r=t(69565),n=t(8047),o=t(7605),u=t(61426),d=["Ninja Van","Giao hang nhanh","Giao hang tiet kiem","Viettel post"],l=["Ninja 1","Ninja 2","Ninja 3","Ninja 4","Ninja 5"],c=function(){return{id:(0,r.getRandomId)(),title:(0,u.getRandomFromArr)(l),price:(0,r.getRandomNumber)(1e4,35e3),info:"Price 1",transporter_model:1}},i=function(){return{id:(0,r.getRandomId)(),info:"a b c d e f as sd\nasd asd asd asd a",name:(0,u.getRandomFromArr)(d),created_time:"2021-04-22T10:00:13Z",price_arr:(0,o.getDefaultArr)(c,3,6)}},s=(a.default_transporter_arr=function(){return(0,o.getDefaultArr)(i,3,6)},a.default_payment_arr=function(){return[{name:"COD"},{name:"BANK"},{name:"VISA"},{name:"MOMO"}]},function(){return{id:(0,r.getRandomId)(),img:(0,n.getRandomVidPic)(),name:"Free 10k",cost:(0,r.getRandomNumber)(1e4,5e4),expires:"2 days",min_amount:5e4,total_num:100,count_user:15,info:"a b c dsa as a\nas da as asd asd saa sd"}});a.default_voucher_arr=function(){return(0,o.getDefaultArr)(s,5,8)}},8610:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default_product_cancel_arr=a.default_product_cancel_obj=void 0;var r=t(69565),n=t(7605),o=t(61426),u=t(25561),d=a.default_product_cancel_obj=function(){return{id:(0,r.getRandomId)(),product:{id:(0,r.getRandomId)(),vid_pics:(0,u.getProductVidPicArr)(1,1),total_add_cart:0,brand:"Product brand 5",type:"Product type 5",hashtag:"Product hashtag 1",name:(0,o.getRandomFromArr)(u.product_name_arr),new_price:460696,old_price:460696,discount:5,description:"Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d",total:62,sold:0,created_time:"2021-04-13T21:25:14.131178Z",updated_time:"2021-04-23T02:27:05.287671Z",shop_model:3,list_model:null},quantity:2,buy_shop_model:1,product_model:2}};a.default_product_cancel_arr=function(){return(0,n.getDefaultArr)(d,2,5)}},52057:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default_fashion_cart_buy_arr=a.default_fashion_cart_buy_obj=void 0;var r=t(39727),n=t(69565),o=t(8047),u=t(7605),d=t(61426),l=t(25561),c=function(){return{id:(0,n.getRandomId)(),product:{id:(0,n.getRandomId)(),vid_pics:(0,l.getProductVidPicArr)(1,1),total_add_cart:1,brand:"Product brand 5",type:"Product type 5",hashtag:"Product hashtag 4",name:(0,d.getRandomFromArr)(l.product_name_arr),new_price:(0,n.getRandomNumber)(1e3,2e6),old_price:(0,n.getRandomNumber)(1e3,2e6),discount:5,description:"Product description a dasd asd\nasd asd asd asd\nas ad ad asda sd\n asdada d",total:91,created_time:"2021-04-13T21:25:14.131178Z",updated_time:"2021-04-13T21:25:14.131178Z",shop_model:6,list_model:null},quantity:(0,n.getRandomNumber)(1,20),checked:(0,r.getRandomBool)(),created_time:"2021-04-21T09:20:46.510170Z",updated_time:"2021-04-21T09:20:46.510170Z",cart_model:20,product_model:5}},i=a.default_fashion_cart_buy_obj=function(){return{id:(0,n.getRandomId)(),products:(0,u.getDefaultArr)(c,1,6),count_product:1,count_checked_product:2,shop:{id:1,picture:(0,o.getRandomVidPic)(),name:"Shop 6",address:"Product address 5",info:"Product info 5"},shop_model:6,profile_model:1}};a.default_fashion_cart_buy_arr=function(){return(0,u.getDefaultArr)(i,1,4)}},25561:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.product_name_arr=a.owner_info=a.getProductVidPicArr=a.default_hot_image_arr=void 0;var r=t(69565),n=t(8047),o=t(7605),u=function(){return{vid_pic:(0,n.getRandomVidPic)()}},d=(a.default_hot_image_arr=function(){return(0,o.getDefaultArr)(u,5,10)},function(){return{id:(0,r.getRandomId)(),vid_pic:(0,n.getRandomVidPic)(),product_model:5}});a.getProductVidPicArr=function(e,a){return(0,o.getDefaultArr)(d,e,a)},a.owner_info=[{title:"Rating",value:4.6},{title:"Reply chat",value:"100%"},{title:"Time joined",value:"2021-04-13T21:25:13.739874Z"},{title:"Products",value:400},{title:"Reply time",value:(new Date).toLocaleString()},{title:"Follow",value:6e5}],a.product_name_arr=["Product name 1","Product name 2","Product name 3","Product name 4","Product name 5","Product name 6","Product name 7"]},41912:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.API_FashionPayment_L=a.API_FashionUserVoucher_LC=a.API_FashionVoucher_L=a.API_FashionTransport_L=a.API_FashionComment_C=a.API_FashionRate_C=a.API_FashionCancelProduct_L=a.API_FashionBuyProduct_D=a.API_FashionBuy_LC=a.API_FashionCart_UD=a.API_FashionCountCart=a.API_FashionCart_LC=void 0;var r,n=(r=t(87421))&&r.__esModule?r:{default:r},o=t(50918),u=t(52057),d=t(88122),l=t(8610),c=t(50586),i=t(69565);a.API_FashionCart_LC=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,o.API_FakeReal)((0,u.default_fashion_cart_buy_arr)(),(function(){return(0,n.default)({url:"/fashion-api/lc-cart/",method:e,params:a,data:t})}))},a.API_FashionCountCart=function(){return(0,o.API_FakeReal)(2,(function(){return(0,n.default)({url:"/fashion-api/count-cart/",method:"GET"})}))},a.API_FashionCart_UD=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.API_FakeReal)({},(function(){return(0,n.default)({url:"/fashion-api/ud-cart/",method:e,data:a})}))},a.API_FashionBuy_LC=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,o.API_FakeReal)((0,d.default_fashion_buy_arr)(),(function(){return(0,n.default)({url:"/fashion-api/lc-buy/",method:e,params:a,data:t})}),a)},a.API_FashionBuyProduct_D=function(e){return(0,n.default)({url:"/fashion-api/d-buy-product/"+e+"/",method:"DELETE"})},a.API_FashionCancelProduct_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)((0,l.default_product_cancel_arr)(),(function(){return(0,n.default)({url:"/fashion-api/l-cancel/",method:"GET",params:e})}),e)},a.API_FashionRate_C=function(e){return(0,o.API_FakeReal)({},(function(){return(0,n.default)({url:"/fashion-api/rate-c/",method:"POST",data:e})}))},a.API_FashionComment_C=function(e){return(0,o.API_FakeReal)({id:(0,i.getRandomId)()},(function(){return(0,n.default)({url:"/fashion-api/comment-c/",method:"POST",data:e})}))},a.API_FashionTransport_L=function(e){return(0,o.API_FakeReal)((0,c.default_transporter_arr)(),(function(){return(0,n.default)({url:"/transporter/l-transport/",method:"GET",params:e})}),e)},a.API_FashionVoucher_L=function(e){return(0,o.API_FakeReal)((0,c.default_voucher_arr)(),(function(){return(0,n.default)({url:"/transporter/l-voucher/",method:"GET",params:e})}),e)},a.API_FashionUserVoucher_LC=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,o.API_FakeReal)((0,c.default_voucher_arr)(),(function(){return(0,n.default)({url:"/transporter/lc-user-voucher/",method:e,params:a,data:t})}),a)},a.API_FashionPayment_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)((0,c.default_payment_arr)(),(function(){return(0,n.default)({url:"/transporter/l-payment/",method:"GET",params:e})}))}},87994:(e,a,t)=>{"use strict";var r;Object.defineProperty(a,"__esModule",{value:!0});var n=t(67294),o=l(n),u=l(t(45697)),d=l(t(37279));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e){var a=e.value_search,t=e.default_search,r=e.handled,u=e.placeholder,l=e.handleChangeSearch,c=e.onSearch,i=e.refreshSearch,s=(0,n.useRef)(null);function f(){s.current.value.trim()?c(s.current.value.replace(/\s+/," ")):i&&i()}return o.default.createElement("div",{className:"InputSearch"},o.default.createElement("div",{className:"InputSearch_contain"},o.default.createElement("div",{className:"InputSearch_row brs-5px"},o.default.createElement("div",{className:"InputSearch_input"},o.default.createElement("input",{type:"text",ref:s,placeholder:u,defaultValue:r?void 0:t,onKeyUp:function(e){13==e.keyCode&&f()},value:r?a:void 0,onChange:r?l:void 0})),o.default.createElement("div",{className:"InputSearch_key hv-opacity",onClick:f,title:"Search"},o.default.createElement(d.default,{y:200,color:"#b3b4bb"})))))}t(45181),i.propTypes=(c(r={onSearch:u.default.func,handled:u.default.bool,placeholder:u.default.string},"handled",u.default.bool),c(r,"value_search",u.default.string),c(r,"default_search",u.default.string),c(r,"handleChangeSearch",u.default.func),r),i.defaultProps={placeholder:"Search . . .",default_search:"",value_search:"",handled:!1},a.default=i},68110:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=u(t(67294)),n=t(93191),o=u(t(45697));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var a=e.children,t=e.to,o=e.replace,u=e.className,d=e.onClick;return r.default.createElement(n.Link,{to:t,replace:o,className:u,onClick:function(e){t==location.pathname+location.search&&e.preventDefault(),d(e)}},a)}d.propTypes={children:o.default.oneOfType([o.default.string,o.default.element]),to:o.default.string,className:o.default.string,replace:o.default.bool,onClick:o.default.func},d.defaultProps={replace:!1,onClick:function(){}},a.default=d},23504:(e,a,t)=>{"use strict";var r;Object.defineProperty(a,"__esModule",{value:!0});var n=t(67294),o=s(n),u=s(t(45697)),d=t(15130),l=s(t(33963)),c=s(t(85876)),i=s(t(20109));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function _(e){var a=e.value_search,t=e.handled,r=e.handleChangeValueSearch,u=e.handleSearchFashion,s=(0,n.useContext)(d.context_api).user;return o.default.createElement("div",{className:"FashionHCommon"},o.default.createElement("div",{className:"FashionHCommon_row display-flex align-items-center"},o.default.createElement("div",{className:"FashionHCommon_left"},o.default.createElement(l.default,null)),o.default.createElement("div",{className:"FashionHCommon_center"},o.default.createElement(c.default,{handled:t,value_search:a,handleChangeValueSearch:r,handleSearchFashion:u})),o.default.createElement("div",{className:"FashionHCommon_right"},s.id?o.default.createElement(i.default,null):null)))}t(406),_.propTypes=(f(r={value_search:u.default.string,handleSearchFashion:u.default.func},"handleSearchFashion",u.default.func),f(r,"handled",u.default.bool),r),a.default=_},85876:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=d(t(67294)),n=d(t(45697)),o=d(t(68110)),u=d(t(87994));function d(e){return e&&e.__esModule?e:{default:e}}t(92939);var l=["Shoes","cloth","skirt","sandal"];function c(e){var a=e.value_search,t=e.handled,n=e.handleChangeValueSearch,d=e.handleSearchFashion;return r.default.createElement("div",{className:"FashionHC"},r.default.createElement("div",{className:"FashionHC_input"},r.default.createElement(u.default,{value_search:a,default_search:"",handled:t,placeholder:"Search for name, product",handleChangeSearch:n,onSearch:d})),r.default.createElement("div",{className:"FashionHC_search"},r.default.createElement("div",{className:"FashionHC_search-row"},l.map((function(e,a){return r.default.createElement("div",{key:"FashionHC_"+a},r.default.createElement(o.default,{to:"/fashion/search?q="+e,className:"normal-text"},e))})))))}c.propTypes={handleSearchFashion:n.default.func,handleChangeValueSearch:n.default.func,value_search:n.default.string,handled:n.default.bool},a.default=c},33963:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=u(t(67294)),n=t(93191),o=(u(t(45697)),u(t(44620)));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return r.default.createElement("div",null,r.default.createElement("div",{className:"display-flex-center"},r.default.createElement("div",{className:"FashionHL_col"},r.default.createElement(n.Link,{className:"normal-text",to:"/fashion"},r.default.createElement("div",{className:"FashionHL_icon"},r.default.createElement(o.default,{size_icon:"3rem"}))))))}t(49908),d.propTypes={},a.default=d},20109:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(67294),n=i(r),o=t(93191),u=t(12520),d=(i(t(45697)),t(85651)),l=i(t(48454)),c=i(t(39475));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var a=(0,u.useSelector)((function(e){return e.count_cart_obj})),t=a.count_cart,i=a.has_fetched,s=(0,u.useDispatch)();return(0,r.useEffect)((function(){i||s((0,d.requestFashionGetCountCart)())}),[]),n.default.createElement("div",{className:"FashionHR"},n.default.createElement("div",{className:"FashionHR_row display-flex-center"},n.default.createElement("div",{className:"FashionHR_cart pos-rel"},n.default.createElement(o.Link,{to:"/fashion/cart"},n.default.createElement("div",{className:"FashionHR_cart-icon FashionHR_item"},n.default.createElement(l.default,{x:400,size_icon:"2rem"})),n.default.createElement("div",{className:"FashionHR_cart-count display-flex-center brs-50"},t))),n.default.createElement("div",{className:"FashionHR_personal"},n.default.createElement(o.Link,{to:"/fashion/personal/user/info",replace:location.pathname.search("/fashion/personal/")>0},n.default.createElement("div",{className:"FashionHR_personal-icon FashionHR_item"},n.default.createElement(c.default,{y:200,size_icon:"1.5rem"}))))))}t(26328),s.propTypes={},a.default=s},85651:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.actionFashionChangeCountCartNum=a.actionFashionChangeCountCart=a.requestFashionGetCountCart=void 0;var r=t(41912);a.requestFashionGetCountCart=function(){return e=regeneratorRuntime.mark((function e(a){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.API_FashionCountCart)();case 2:t=e.sent,a(n(t.data));case 4:case"end":return e.stop()}}),e,void 0)})),a=function(){var a=e.apply(this,arguments);return new Promise((function(e,t){return function r(n,o){try{var u=a[n](o),d=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(d).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(d)}("next")}))},function(e){return a.apply(this,arguments)};var e,a};var n=a.actionFashionChangeCountCart=function(e){return{payload:e,type:"COUNT_CART"}};a.actionFashionChangeCountCartNum=function(e){return{payload:e,type:"COUNT_CART_CHANGE"}}},45181:(e,a,t)=>{"use strict";t.r(a)},406:(e,a,t)=>{"use strict";t.r(a)},92939:(e,a,t)=>{"use strict";t.r(a)},49908:(e,a,t)=>{"use strict";t.r(a)},26328:(e,a,t)=>{"use strict";t.r(a)}}]);
//# sourceMappingURL=3504.js.map