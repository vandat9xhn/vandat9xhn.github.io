(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6930],{98503:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MIN_SCALE_TEXT_TAG=t.data_story_tag_bg_color_arr=t.data_story_pic_edit_mode_arr=t.data_story_effect_arr=t.data_story_bg_arr=t.data_story_font_arr=t.data_story_text_color_arr=void 0;var r=B(a(95677)),n=B(a(49514)),c=B(a(41810)),i=B(a(82153)),s=B(a(58135)),l=B(a(86889)),o=B(a(83827)),d=B(a(81890)),u=B(a(54509)),f=B(a(53490)),_=B(a(79977)),m=B(a(970)),p=B(a(53273)),g=B(a(97934)),v=B(a(98146)),b=B(a(76533)),h=B(a(62343)),y=B(a(7373)),E=B(a(61031)),w=B(a(85103)),j=B(a(26570)),C=B(a(56854)),M=B(a(45192)),P=B(a(78807)),S=B(a(9675)),L=B(a(4056)),x=B(a(18675)),k=B(a(99660)),I=B(a(95767)),O=B(a(99360));function B(e){return e&&e.__esModule?e:{default:e}}t.data_story_text_color_arr=["var(--white)","var(--danger)","var(--blue)","var(--success)","var(--blue-tear)","var(--gold)","var(--snow-flake)","var(--heart)","var(--warning)"],t.data_story_font_arr=["Segoe UI Historic","Segoe UI","Helvetica","Arial","sans-serif"],t.data_story_bg_arr=[r.default,n.default,c.default,i.default,s.default,l.default,o.default,d.default,u.default,f.default,_.default,m.default,p.default,g.default,v.default,b.default,h.default,y.default,E.default,w.default,j.default,C.default,M.default,P.default,S.default,L.default,x.default,k.default,I.default,O.default],t.data_story_effect_arr=["none","blur(1px)","grayscale(50%)","sepia(40%)","contrast(200%)"],t.data_story_pic_edit_mode_arr=["Auto","Fixed","Move","Resize","Rotate"],t.data_story_tag_bg_color_arr=[{bg:"var(--green)",color:"var(--white)"},{bg:"var(--white)",color:"var(--green)"},{bg:"var(--blue)",color:"var(--white)"},{bg:"var(--white)",color:"var(--blue)"}],t.MIN_SCALE_TEXT_TAG=.5},27720:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsPermission=void 0;var r=l(a(67294)),n=l(a(39475)),c=l(a(3791)),i=l(a(68986)),s=l(a(67238));function l(e){return e&&e.__esModule?e:{default:e}}t.IconsPermission=[{Icon:r.default.createElement(i.default,null),title:"Public"},{Icon:r.default.createElement(n.default,{y:200}),title:"Friend"},{Icon:r.default.createElement(n.default,{x:400}),title:"Friend of friend"},{Icon:r.default.createElement(s.default,null),title:"Setting"},{Icon:r.default.createElement(c.default,null),title:"Private"}]},51353:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveXY=function(e){var t=e.handleMouseMove,a=void 0===t?function(){}:t,i=e.handleMouseEnd,s=void 0===i?function(){}:i,l=(0,r.useRef)(!1),o=(0,r.useRef)(0),d=(0,r.useRef)(0);function u(e){if(l.current){if(e.touches&&e.touches.length>1)return window.onmousemove=null,void(window.onmouseup=null);var t=(0,c.getClientXY)(e),r=t.client_x,n=t.client_y;a({old_client_x:o.current,old_client_y:d.current,new_client_x:r,new_client_y:n,client_x_change:r-o.current,client_y_change:n-d.current}),o.current=r,d.current=n}}function f(){l.current=!1,s(),n.IS_MOBILE?(window.ontouchmove=null,window.ontouchend=null):(window.onmousemove=null,window.onmouseup=null)}return{handleStart:function(e){e.stopPropagation(),l.current=!0;var t=(0,c.getClientXY)(e),a=t.client_x,r=t.client_y;o.current=a,d.current=r,n.IS_MOBILE?(window.ontouchmove=u,window.ontouchend=f):(window.onmousemove=u,window.onmouseup=f)}}};var r=a(67294),n=a(55852),c=a(81858)},3791:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,a=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:a,strokeLinejoin:"round"},r.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:"black",strokeWidth:"15"}),r.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),r.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}i.propTypes={size_icon:n.default.string,stroke:n.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},68986:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,a=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:"none",strokeWidth:"5",stroke:a},r.default.createElement("circle",{cx:"100",cy:"100",r:"85",strokeWidth:"10"}),r.default.createElement("line",{x1:"99.3965",y1:"16.1017",x2:"99.3965",y2:"183.898",stroke:"black"}),r.default.createElement("line",{x1:"10",y1:"97.5",x2:"184.569",y2:"97.5"}),r.default.createElement("path",{d:"M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z"}),r.default.createElement("path",{d:"M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957"}))}i.propTypes={size_icon:n.default.string,stroke:n.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},67238:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,a=e.fill,n=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:a,strokeWidth:"10",stroke:n},r.default.createElement("path",{d:"M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334\r 124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216\r 74.9331 145.216 99.5058Z"}),r.default.createElement("path",{d:"M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827\r 23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185\r 121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043\r 170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983\r 146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251\r 58.9826L59.092244.157Z"}),r.default.createElement("circle",{cx:"100",cy:"100",r:"35",fill:"none"}))}i.propTypes={fill:n.default.string,size_icon:n.default.string,stroke:n.default.string},i.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},81858:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=a(55852)},77992:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(67294)),n=s(a(45697)),c=a(30796),i=s(a(65635));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){e.closeScreen;var t=e.children,a=e.screen_center,n=e.waiting,s=e.use_body_hidden,l=e.use_scale,o=e.FetchingComponent;return(0,c.useMakeBodyHidden)({hidden_app:s}),r.default.createElement("div",{className:"ScreenBlur "+(a?"ScreenBlur_center display-flex-center":"")},r.default.createElement("div",{className:n?"width-0 height-0":"App_Form"},r.default.createElement("div",{className:"ScreenBlur_contain bg-primary brs-5px-md box-shadow-fb "+(n?"ScreenBlur_contain-waiting":"")+" "+(l?"ScreenBlur_contain-scale":"")+" "+(a?"":"ScreenBlur_contain-normal")},t)),r.default.createElement("div",{className:"ScreenBlur_waiting pos-fixed-100v "+(n?"":"display-none")},r.default.createElement(i.default,{FetchingComponent:o})))}a(16209),l.propTypes={closeScreen:n.default.func,children:n.default.element,use_body_hidden:n.default.bool,screen_center:n.default.bool,waiting:n.default.bool,use_scale:n.default.bool,FetchingComponent:n.default.func},l.defaultProps={use_body_hidden:!1,screen_center:!1,waiting:!1,use_scale:!1},t.default=l},14927:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.openScreenPermission=function(e){var t=e.openScreenFloor,a=void 0===t?function(){}:t,r=e.permission,n=void 0===r?0:r,c=e.handleChoosePermission;a({FloorComponent:_,permission:n,handleChoosePermission:void 0===c?function(){}:c})};var n=a(67294),c=f(n),i=f(a(45697)),s=a(27720),l=f(a(98513)),o=f(a(77992)),d=f(a(52122)),u=f(a(33468));function f(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.permission,a=e.closeScreen,i=e.handleChoosePermission,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{!r&&s.return&&s.return()}finally{if(n)throw c}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({active_permission:t}),2),_=f[0],m=f[1],p=_.active_permission;function g(e){m(r({},_,{active_permission:e}))}return c.default.createElement(o.default,{closeScreen:a,screen_center:!0},c.default.createElement("div",{className:"ScreenPermission"},c.default.createElement("div",null,c.default.createElement(l.default,{title:"Permission",closeScreenBlur:a})),c.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},s.IconsPermission.map((function(e,t){return c.default.createElement("div",{key:"ScreenPermission_"+t,className:"ScreenPermission_item"},c.default.createElement(d.default,{ix:t,is_active:p==t,icon_obj:e,choosePermission:g}))}))),c.default.createElement("div",null,c.default.createElement(u.default,{disabled:t==p,handleConfirm:function(){a(),t!=p&&i(p)},closeScreenBlur:a}))))}a(15934),_.propTypes={permission:i.default.number,closeScreen:i.default.func,handleChoosePermission:i.default.func},_.defaultProps={permission:0},t.default=_},52122:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=i(a(45697)),c=i(a(22421));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.is_active,a=e.ix,n=e.icon_obj,i=e.choosePermission,s=n.Icon,l=n.title;return r.default.createElement("div",{className:"ScreenPermissionItem cursor-pointer "+(t?"ScreenPermissionItem_active":""),onClick:function(){!t&&i(a)}},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement(c.default,{is_active:t})),r.default.createElement("div",{className:"ScreenPermissionItem_right"},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"ScreenPermissionItem_right_icon display-flex"},s),r.default.createElement("div",{className:"font-500"},l)))))}a(83180),s.propTypes={is_active:n.default.bool,icon_obj:n.default.object},t.default=s},22421:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.is_active;return r.default.createElement("div",{className:"RadioCustom brs-50 "+(t?"RadioCustom_active":"RadioCustom_inactive")},r.default.createElement("div",{className:"RadioCustom_center pos-abs-center brs-50"}))}a(69226),i.propTypes={is_active:n.default.bool},i.defaultProps={is_active:!1},t.default=i},95677:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/d2c8d7bc6b4d6322380e8321ccdebc4e.jpg"},53490:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/22a2aa93bd4f12f3f1da55e53e309252.jpg"},79977:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/cea1073fd61572168865bd9292f6e035.jpg"},970:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/ae2ae963728092a5bc54834ce4a125ba.jpg"},53273:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/7f1c5e364bfeec613739dd16fe4857e6.jpg"},97934:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/e90ae81fb5e2830d8f74d2f78d8a2ce5.jpg"},98146:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/0b1d2534841c86722977ff26e703ae7b.jpg"},76533:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/3c7d14f2ead55460534cc026aba4ef7f.jpg"},62343:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/f7bffbd43430fd575b96f7b1e92dc75a.jpg"},7373:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/ba4885f42ec55e7fa95e8e548ea609af.jpg"},61031:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/768954b37cddd756631633fb4217b822.jpg"},49514:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/95ef9f54374421f6432b9b9a672759f2.jpg"},85103:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/abd927473948e5ecdfeb794c6518095e.jpg"},26570:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/af605cff48a40cb4b47583a0d1ad2415.jpg"},56854:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/667a8a451b466310a9d344ed4803d875.jpg"},45192:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/46f3d40ad5f7f5ffb7a7d344be69ff61.jpg"},78807:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/737e78c70e49908dac19d90ef8001263.jpg"},9675:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/e8b4ae1d8b35ca3e73e3e3b17438d629.jpg"},4056:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/b6d2718e913ced9e2561e54d7b0dfa8f.jpg"},18675:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/453698a0df009faaa23d73448aaaa866.jpg"},99660:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/e3892a279c6a08271ba64c9078bd671e.jpg"},95767:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/372c246c4179d38864d4fad688bca695.jpg"},41810:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/ba25f6145e08279443458ab9a2c83f94.jpg"},99360:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/cd2beb3f8367dc3bf8abd86a1a2c71d3.jpg"},82153:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/c9e53c4546c4824e66ab8e3ca53ca620.jpg"},58135:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/d1e709d57f4370cbe3bb7556561729e0.jpg"},86889:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/b25ac7c4768d1e01956b7f09b88ce74d.jpg"},83827:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/9e102d426f4b1b80e72fef3002a52efa.jpg"},81890:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/8e9f50b46e1848bca9c38f1218ac97e0.jpg"},54509:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});const r=a.p+"static/images_icons/8bedd00bbd49ea3c50adfeca75655cfc.jpg"},16209:(e,t,a)=>{"use strict";a.r(t)},15934:(e,t,a)=>{"use strict";a.r(t)},83180:(e,t,a)=>{"use strict";a.r(t)},69226:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=6930.js.map