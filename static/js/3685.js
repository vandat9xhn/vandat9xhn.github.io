(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3685],{96369:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use2FingersResize=function(e){var t=e.handleResize,a=void 0===t?function(){}:t,l=(0,r.useRef)(!1),c=(0,r.useRef)(0),o=(0,r.useRef)(0),i=(0,r.useRef)(0),d=(0,r.useRef)(0),u=(0,r.useRef)(0),s=(0,r.useRef)(0);function f(e){var t=(0,n.getTouchClientXY)(e,0),a=t.client_x,r=t.client_y,l=(0,n.getTouchClientXY)(e,1),u=l.client_x,s=l.client_y;return c.current=a,o.current=r,i.current=u,d.current=s,Math.pow(Math.pow(u-a,2)+Math.pow(s-r,2),.5)}return{handleTouchStart:function(e){2==e.touches.length&&(l.current=!0,u.current=f(e),s.current=u.current)},handleTouchMove:function(e){if(l.current){var t=f(e);a({client_change:t-s.current,client_x_0:c.current,client_x_1:i.current,client_y_0:o.current,client_y_1:d.current}),s.current=t}},handleTouchEnd:function(e){l.current=!1}}};var r=a(67294),n=a(81858)},51965:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValueHasMinMax=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e<=t?t:e>=a?a:e}},73685:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openScreenCreateStoryMb=o;var r=a(67294),n=(c(r),c(a(45697)),a(15130)),l=c(a(15147));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.openScreenFloor,a=void 0===t?function(){}:t,r=e.has_history,n=void 0===r||r,c=e.hidden_before,o=void 0===c||c;a({FloorComponent:l.default,has_history:n,hidden_before:o})}function i(e){e.closeScreen;var t=(0,r.useContext)(n.context_api).openScreenFloor;return(0,r.useEffect)((function(){o({openScreenFloor:t})}),[]),null}i.propTypes={},t.default=i},12282:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(31716)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.effect_arr,a=e.effect_ix,l=e.pic,c=e.handleChangeEffect;return r.default.createElement("div",{className:"PicEffectList padding-4px"},r.default.createElement("div",{className:"display-flex"},t.map((function(e,t){return r.default.createElement("div",{key:""+t},r.default.createElement(n.default,{ix:t,is_active:a==t,effect:e,pic:l,handleChangeEffect:c}))}))))}c.propTypes={},t.default=c},31716:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ix,a=e.is_active,n=e.pic,l=e.effect,c=e.handleChangeEffect;return r.default.createElement("div",{className:"PicEffectItem padding-4px",onClick:function(){c(t)}},r.default.createElement("img",{className:"wh-100 brs-8px "+(a?"PicEffectItem-active":""),src:n,alt:"",style:{filter:l}}))}n(a(45697)),a(85751),l.propTypes={},t.default=l},56696:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.ref_fake_elm,a=e.scale;return r.default.createElement("div",{ref:t,className:"pos-abs left-50per top-50per wh-200v display-none",style:{transform:"translate(-50%, -50%) scale("+2/a+")",zIndex:-1}})}n(a(45697)),l.propTypes={},t.default=l},60356:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(39475)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.can_share,a=e.handleCreateStory;return r.default.createElement("div",{className:"StoryBtnShareMb padding-8px brs-5px cursor-pointer "+(t?"bg-blue":"bg-always-white pointer-events-none"),onClick:a},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement("span",{className:"font-500 "+(t?"text-white":"text-third")},"Share story")),r.default.createElement("div",{className:"margin-left-5px"},r.default.createElement(n.default,{x:200,y:200}))))}c.propTypes={},t.default=c},66025:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(37930)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.handleDiscard;return r.default.createElement("div",{className:"StoryIconCloseMb padding-4px",onClick:t},r.default.createElement(n.default,{y:400,size_icon:"1.5rem"}))}c.propTypes={},t.default=c},73246:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(67238)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.openPrivacy;return r.default.createElement("div",{className:"StoryBtnPrivacyMb brs-5px cursor-pointer",onClick:t},r.default.createElement("div",{className:"display-flex flex-col align-items-center"},r.default.createElement("div",null,r.default.createElement(n.default,{stroke:"white"})),r.default.createElement("div",null,r.default.createElement("span",{className:"font-500 text-white"},"Privacy"))))}c.propTypes={},t.default=c},15147:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=p(n),c=p(a(45697)),o=a(15130),i=a(39309),d=a(14927),u=a(30796),s=p(a(99801)),f=p(a(94834)),_=p(a(56346));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){e.closeScreen;var t=(0,n.useContext)(o.context_api).openScreenFloor,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({create_type:"",vid_pic:"",vid_pic_width:0,permission:0}),2),c=a[0],p=a[1],m=c.create_type,v=c.vid_pic,h=(c.vid_pic_width,c.permission);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p((function(t){return r({},t,{create_type:e})}))}function g(e){p(r({},c,{permission:e}))}function b(){(0,d.openScreenPermission)({openScreenFloor:t,permission:h,handleChoosePermission:g})}function E(e){console.log(e)}function x(){(0,i.openScreenConfirm)({openScreenFloor:t,title:"Discard story?",notification:"Are you sure that you want to discard this story? Your story won't be saved.",handleConfirm:y})}function M(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?x():y()}return(0,u.useMakeBodyHidden)({hidden_app:!0,hidden_header:!0}),(0,n.useEffect)((function(){document.title="Create story"}),[]),l.default.createElement("div",{className:"StoryCreateMb wh-100v"},""==m?l.default.createElement(s.default,{openScreenStoryText:function(){y("text")},openScreenStoryPic:function(e){var t=e.vid_pics[0].vid_pic,a=e.files;console.log(a),p(r({},c,{create_type:"pic",vid_pic:t}))}}):"text"==m?l.default.createElement(f.default,{handleCreateStory:E,openPrivacy:b,handleDiscard:M}):l.default.createElement(_.default,{vid_pic:v,handleCreateStory:E,openPrivacy:b,handleDiscard:M}))}m.propTypes={closeScreen:c.default.func},t.default=m},99801:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(21425)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.openScreenStoryText,a=e.openScreenStoryPic;return r.default.createElement("div",{className:"StoryCHomeMb"},r.default.createElement("h2",{className:"padding-16px text-align-center font-20px"},"Create story"),r.default.createElement("div",null,r.default.createElement(n.default,{openScreenStoryText:t,openScreenStoryPic:a})),r.default.createElement("div",null))}c.propTypes={},t.default=c},21425:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=(c(a(45697)),c(a(79194))),l=c(a(64116));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.openScreenStoryText,a=e.openScreenStoryPic;return r.default.createElement("div",{className:"StoryCHHeadMb padding-x-8px padding-y-15px"},r.default.createElement("div",{className:"display-flex"},r.default.createElement("div",{className:"StoryCHHeadMb_item pos-rel"},r.default.createElement("div",{className:"pos-abs-100 padding-4px "},r.default.createElement("div",{className:"wh-100 brs-8px overflow-hidden"},r.default.createElement(n.default,{title:"Text",openScreenStoryText:t})))),r.default.createElement("div",{className:"StoryCHHeadMb_item pos-rel"},r.default.createElement("div",{className:"pos-abs-100 padding-4px"},r.default.createElement("div",{className:"wh-100 brs-8px overflow-hidden"},r.default.createElement(l.default,{title:"Photo",openScreenStoryPic:a}))))))}a(40570),o.propTypes={},t.default=o},56346:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=x(n),c=(x(a(45697)),a(55852)),o=(a(86449),a(98503)),i=a(51965),d=a(82403),u=x(a(66025)),s=x(a(73246)),f=x(a(60356)),_=x(a(83776)),p=x(a(56714)),m=x(a(21002)),v=x(a(46544)),h=x(a(89173)),y=x(a(28901)),g=x(a(35643)),b=x(a(19225)),E=x(a(22784));function x(e){return e&&e.__esModule?e:{default:e}}function M(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function P(e){var t=e.vid_pic,a=e.openPrivacy,x=e.handleCreateStory,P=e.handleDiscard,S=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({story_width:0,vid_pic_obj:{vid_pic:t,mode:o.data_story_pic_edit_mode_arr[0],mode_ix:0,effect:o.data_story_effect_arr[0],effect_ix:0,trans_x:0,trans_y:0,scale:1,rotate:0},text_obj:{text:"",trans_x:0,trans_y:0,rotate:0,scale:1},tag_user_arr:[]||0,open_add_text:!1,open_effect_pic:!1,open_add_friend:!1,open_edit_pic:!1,can_undo:!1,can_redo:!1}),2),C=S[0],T=S[1],N=C.vid_pic_obj,w=C.text_obj,j=C.tag_user_arr,O=C.open_add_text,A=C.open_add_friend,k=C.open_effect_pic,R=C.open_edit_pic,I=(0,n.useRef)([{trans_x:0,trans_y:0,scale:1,rotate:0}]),F=(0,n.useRef)(0),z=(0,d.useForceUpdate)();function D(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];T((function(t){return F.current+=e?-1:1,r({},t,{vid_pic_obj:r({},t.vid_pic_obj,I.current[F.current])})}))}function H(){T(r({},C,{open_effect_pic:!1}))}function B(){T((function(e){var t=r({},e.vid_pic_obj),a=(t.mode_ix+1)%o.data_story_pic_edit_mode_arr.length;return t.mode_ix=a,t.mode=o.data_story_pic_edit_mode_arr[a],r({},e,{vid_pic_obj:t})}))}function L(){T(r({},C,{open_add_text:!0}))}function U(){T(r({},C,{open_add_text:!1}))}function Y(){T(r({},C,{open_add_friend:!1}))}function X(e){var t=e.ix,a=e.client_x_change,n=e.client_y_change;T((function(e){var l=[].concat(M(e.tag_user_arr));return l[t].trans_x+=a,l[t].trans_y+=n,r({},e,{tag_user_arr:l})}))}function V(e){var t=e.ix,a=e.client_change;T((function(e){var n=[].concat(M(e.tag_user_arr));return n[t].scale=(0,i.getValueHasMinMax)(n[t].scale+a/(4*c.SCALE_PIC_RATIO),.5,2),r({},e,{tag_user_arr:n})}))}function G(e){T((function(t){var a=[].concat(M(t.tag_user_arr)),n=(a[e].bg_color_ix+1)%o.data_story_tag_bg_color_arr.length;return a[e].bg_color_ix=n,a[e].bg=o.data_story_tag_bg_color_arr[n].bg,a[e].color=o.data_story_tag_bg_color_arr[n].color,r({},t,{tag_user_arr:a})}))}function W(e){var t=[].concat(M(j));t.splice(e,1),T(r({},C,{tag_user_arr:t}))}return l.default.createElement("div",{className:"StoryCreatePicMb wh-100 pos-rel overflow-hidden"},l.default.createElement("img",{src:t,alt:"",className:"wh-100",style:{filter:"blur(100px)"}}),l.default.createElement(p.default,{vid_pic_obj:N,handleTouchEnd:function(){var e=N.trans_x,t=N.trans_y,a=N.scale,r=N.rotate,n=I.current[F.current],l=n.trans_x,c=n.trans_y,o=n.scale,i=n.rotate;e==l&&t==c&&a==o&&r==i||(F.current+=1,I.current.splice(F.current,I.current.length,{trans_x:e,trans_y:t,scale:a,rotate:r}),R&&z())},handleResizePic:function(e){var t=e.client_change;T((function(e){var a=r({},e.vid_pic_obj);return a.scale<=.25&&t<0?a.scale=.25:a.scale+=t/(4*c.SCALE_PIC_RATIO),r({},e,{vid_pic_obj:a})}))},handleMovePic:function(e){var t=e.client_x_change,a=e.client_y_change;T((function(e){return r({},e,{vid_pic_obj:r({},e.vid_pic_obj,{trans_x:e.vid_pic_obj.trans_x+t,trans_y:e.vid_pic_obj.trans_y+a})})}))}}),O?l.default.createElement("div",{className:"pos-abs-100 z-index-lv1"},l.default.createElement("div",{className:"pos-abs-100 bg-shadow-9",onClick:U}),l.default.createElement(v.default,{text:w.text,handleChange:function(e){T((function(t){var a=r({},t.text_obj);return a.text=e,r({},t,{text_obj:a})}))}}),l.default.createElement("div",{className:"pos-abs right-0 bottom-0"},l.default.createElement("div",{className:"padding-8px",onClick:U},l.default.createElement("span",{className:"font-500 text-white"},"Done")))):w.text.trim()?l.default.createElement(_.default,{text_obj:w,openChangeText:L,handleResizeText:function(e){var t=e.client_change;T((function(e){var a=r({},e.text_obj);return a.scale=(0,i.getValueHasMinMax)(a.scale+t/(4*c.SCALE_PIC_RATIO),.5,4),r({},e,{text_obj:a})}))},handleMoveText:function(e){var t=e.client_x_change,a=e.client_y_change;T((function(e){var n=r({},e.text_obj);return n.trans_x+=t,n.trans_y+=a,r({},e,{text_obj:n})}))}}):null,j.map((function(e,t){return l.default.createElement(y.default,{key:""+e.user.id,ix:t,tag_user_obj:e,changeBgColorIx:G,handleDelTag:W,handleResizeTag:V,handleMoveTag:X})})),l.default.createElement("div",{className:"pos-abs right-0 top-0"},l.default.createElement("div",{className:"padding-4px"},l.default.createElement(m.default,{mode:N.mode,openAddText:L,changeModePic:B,openTagFriend:function(){T(r({},C,{open_add_friend:!0}))}}))),l.default.createElement("div",{className:"StoryCreatePicMb_edit_pic pos-abs left-0 "+(R?"w-100per":"")},l.default.createElement(b.default,{mode:N.mode,open_edit_pic:R,can_undo:F.current>0,can_redo:F.current<I.current.length-1,toggleEditPic:function(){T(r({},C,{open_edit_pic:!R}))},openEffectPic:function(){T(r({},C,{open_effect_pic:!0}))},undoEditPic:function(){0!=F.current&&D(!0)},redoEditPic:function(){F.current!=I.length-1&&D(!1)},changeModePic:B})),l.default.createElement("div",{className:"pos-abs left-0 top-0"},l.default.createElement(u.default,{handleDiscard:P})),l.default.createElement("div",{className:"pos-abs left-0 bottom-0"},l.default.createElement("div",{className:"padding-8px"},l.default.createElement(s.default,{openPrivacy:a}))),l.default.createElement("div",{className:"pos-abs right-0 bottom-0"},l.default.createElement("div",{className:"padding-8px"},l.default.createElement(f.default,{can_share:!0,handleCreateStory:function(){x(C)}}))),l.default.createElement("div",{className:"StoryCreatePicMb_rotate pos-abs left-0 w-100per bottom-0 "+("ROTATE"==N.mode.toUpperCase()?"StoryCreatePicMb_rotate-show":"StoryCreatePicMb_rotate-hide")},l.default.createElement("div",{className:"display-flex-center padding-8px bg-shadow-9"},l.default.createElement(E.default,{handleRotate:function(){T((function(e){var t=r({},e.vid_pic_obj),a=t.rotate+90;return t.rotate=a>=360?0:a,r({},e,{vid_pic_obj:t})}))}}))),A?l.default.createElement("div",{className:"pos-abs-100"},l.default.createElement("div",{className:"pos-abs-100 bg-shadow-9",onClick:Y}),l.default.createElement("div",{className:"pos-abs-100"},l.default.createElement(g.default,{handleTagFriend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};T(r({},C,{tag_user_arr:[].concat(M(C.tag_user_arr),[r({user:e,bg_color_ix:0},o.data_story_tag_bg_color_arr[0],{trans_x:0,trans_y:0,rotate:0,scale:1})]),open_add_friend:!1}))}})),l.default.createElement("div",{className:"pos-abs right-0 bottom-0",onClick:Y},l.default.createElement("div",{className:"padding-8px"},l.default.createElement("span",{className:"text-white font-500"},"Done")))):null,k?l.default.createElement("div",{className:"pos-abs-100"},l.default.createElement("div",{className:"pos-abs-100 bg-shadow-9",onClick:H}),l.default.createElement(h.default,{pic:t,effect_arr:o.data_story_effect_arr,effect_ix:N.effect_ix,handleChangeEffectPic:function(e){T((function(t){var a=r({},t.vid_pic_obj);return a.effect_ix=e,a.effect=o.data_story_effect_arr[e],r({},t,{vid_pic_obj:a})}))}}),l.default.createElement("div",{className:"pos-abs right-0 top-0",onClick:H},l.default.createElement("div",{className:"padding-4px"},l.default.createElement("span",{className:"text-white font-500"},"Done")))):null)}a(54983),P.propTypes={},t.default=P},21002:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(75763)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.mode,a=e.openAddText,l=e.changeModePic,c=e.openTagFriend;return r.default.createElement("div",{className:"StoryCPActionsMb text-white font-500 font-13px"},r.default.createElement("div",null),r.default.createElement("div",{className:"StoryCPActionsMb_part",onClick:a},r.default.createElement("div",{className:"display-flex flex-end align-items-center"},r.default.createElement("div",null,r.default.createElement("span",null,"Text")),r.default.createElement("div",{className:"StoryCPActionsMb_part_right"},r.default.createElement("span",null,"Aa")))),r.default.createElement("div",{className:"StoryCPActionsMb_part",onClick:l},r.default.createElement("div",{className:"display-flex flex-end align-items-center"},r.default.createElement("div",null,r.default.createElement("span",null,"Pic")),r.default.createElement("div",{className:"StoryCPActionsMb_part_right"},r.default.createElement("span",null,t)))),r.default.createElement("div",{className:"StoryCPActionsMb_part",onClick:c},r.default.createElement("div",{className:"display-flex flex-end align-items-center"},r.default.createElement("div",null,r.default.createElement("span",null,"Tag")),r.default.createElement("div",{className:"StoryCPActionsMb_part_right"},r.default.createElement(n.default,{size_icon:"1rem"})))))}a(57867),c.propTypes={},t.default=c},46544:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(85315)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.text,a=e.handleChange;return r.default.createElement(n.default,{name:"story_input",text:t,placeholder:"START TYPING",textarea_class:"StoryCPAddTextMb pos-abs-center overflow-y-auto scroll-thin text-align-center text-white font-500 font-18px",onChange:a})}a(95684),c.propTypes={},t.default=c},19225:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=(c(a(45697)),c(a(37930))),l=c(a(24206));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.open_edit_pic,a=e.mode,c=e.can_undo,o=e.can_redo,i=e.toggleEditPic,d=e.openEffectPic,u=e.undoEditPic,s=e.redoEditPic,f=e.changeModePic;return r.default.createElement("div",{className:"StoryCPEditPicMb pos-rel"},r.default.createElement("div",{className:"StoryCPEditPicMb_row display-flex align-items-center "+(t?"w-100per":"width-0")},r.default.createElement("div",{className:"StoryCPEditPicMb_toggle display-flex-center brs-50 bg-blue "+(t?"StoryCPEditPicMb_toggle-close":"StoryCPEditPicMb_toggle-open opacity-05"),onClick:i},r.default.createElement(n.default,{y:400,size_icon:"1rem"})),r.default.createElement("div",{className:"StoryCPEditPicMb_right overflow-hidden "+(t?"StoryCPEditPicMb_right-show flex-grow-1":"StoryCPEditPicMb_right-hide")},r.default.createElement("div",{className:"StoryCPEditPicMb_right_contain"},r.default.createElement(l.default,{mode:a,can_undo:c,can_redo:o,openEffectPic:d,undoEditPic:u,redoEditPic:s,changeModePic:f})))))}a(9893),o.propTypes={},t.default=o},24206:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(26804)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.mode,a=e.can_undo,l=e.can_redo,c=e.openEffectPic,o=e.undoEditPic,i=e.redoEditPic,d=e.changeModePic;return r.default.createElement("div",{className:"StoryCPEditPicActionsMb"},r.default.createElement("div",{className:"display-flex"},r.default.createElement("div",null,r.default.createElement("div",{className:"padding-x-8px",onClick:c},r.default.createElement("span",{className:"font-500 text-white"},"Effect"))),r.default.createElement("div",{className:a?"":"pointer-events-none opacity-05"},r.default.createElement("div",{className:"padding-x-8px",onClick:o},r.default.createElement(n.default,null))),r.default.createElement("div",{className:l?"":"pointer-events-none opacity-05"},r.default.createElement("div",{className:"StoryCPEditPicActionsMb_redo_contain padding-x-8px",onClick:i},r.default.createElement(n.default,null))),r.default.createElement("div",null,r.default.createElement("div",{className:"padding-x-8px",onClick:d},r.default.createElement("span",{className:"font-500 text-white"},t)))))}a(54039),c.propTypes={},t.default=c},89173:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(12282)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.pic,a=e.effect_arr,l=e.effect_ix,c=e.handleChangeEffectPic;return r.default.createElement("div",{className:"pos-abs bottom-0 w-100per"},r.default.createElement("div",{className:"w-100per overflow-x-auto scroll-height-0"},r.default.createElement(n.default,{pic:t,effect_arr:a,effect_ix:l,handleChangeEffect:c})))}c.propTypes={},t.default=c},56714:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=i(r),l=(i(a(45697)),a(96369)),c=a(51353);a(88631);var o=i(a(56696));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.vid_pic_obj,a=e.handleResizePic,i=e.handleMovePic,d=e.handleTouchEnd,u=t.vid_pic,s=t.mode,f=t.effect,_=t.trans_x,p=t.trans_y,m=t.rotate,v=t.scale,h=(0,r.useRef)(null),y=(0,r.useRef)(null),g=(0,l.use2FingersResize)({handleResize:a}),b=g.handleTouchStart,E=g.handleTouchMove,x=g.handleTouchEnd,M=(0,c.useMouseMoveXY)({handleMouseMove:i}).handleStart;return n.default.createElement("div",{ref:h,className:"StoryCPPicMb pos-abs left-50per top-50per "+("FIXED"==s.toUpperCase()?"":"touch-action-none"),style:{transform:"translate(-50%, -50%) translate("+_+"px, "+p+"px) rotate("+m+"deg) scale("+v+")"},onTouchStart:function(e){h.current.style.zIndex=100,y.current.style.display="block","MOVE"==s.toUpperCase()||"AUTO"==s.toUpperCase()&&1==e.touches.length?M(e):["RESIZE","AUTO"].includes(s.toUpperCase())&&b(e)},onTouchMove:function(e){E(e)},onTouchEnd:function(e){x(e),d(),0==e.touches.length&&(h.current.style.removeProperty("z-index"),y.current.style.removeProperty("display"))}},n.default.createElement("img",{className:"StoryCPPicMb_img",src:u,alt:"",style:{filter:f}}),n.default.createElement("div",{className:"pos-abs-100"}),n.default.createElement(o.default,{ref_fake_elm:y,scale:v}))}d.propTypes={},t.default=d},35643:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=u(r),l=(u(a(45697)),a(10666)),c=a(84353),o=a(90663),i=u(a(11623)),d=u(a(88134));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.handleTagFriend,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),u=a[0],s=a[1],f=(0,r.useRef)(""),_=(0,c.useDataShowMore)({initial_arr:[],handle_API_L:function(e){return(0,l.handle_API_Friend_L)({c_count:e,params:{search:f.current}})}}),p=_.data_state,m=_.refreshData_API,v=_.getData_API,h=p.data_arr,y=p.count,g=p.is_fetching,b=(p.has_fetched,(0,o.useWaitingLastAction)({time_waiting:500,callback:m}).handleWaitingLastAction);return(0,r.useEffect)((function(){v()}),[]),n.default.createElement("div",{className:"StoryCPAddTagFriendMb h-100per"},n.default.createElement("div",{className:"StoryCPAddTagFriendMb_head"},n.default.createElement("input",{className:"StoryCPAddTagFriendMb_input border-none w-100per padding-8px",type:"text",value:u,placeholder:"Search friend...",onChange:function(e){var t=e.target.value;s(t),t.trim()!=f.current.trim()&&(f.current=t,b())}})),n.default.createElement("div",{className:"StoryCPAddTagFriendMb_body bg-primary overflow-y-auto"},h.map((function(e){return n.default.createElement("div",{key:""+e.id},n.default.createElement(d.default,{user:e,handleTagFriend:t}))})),n.default.createElement(i.default,{is_show_more:h.length<y,is_fetching:g,handleShowMore:function(){v()}})))}a(8982),s.propTypes={},t.default=s},88134:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(44314)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.user,a=e.handleTagFriend;return r.default.createElement("div",{className:"padding-8px"},r.default.createElement(n.default,{user:t,handleClick:function(){a(t)}}))}c.propTypes={},t.default=c},28901:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=u(n),c=(u(a(45697)),a(96369)),o=a(51353),i=u(a(37930)),d=u(a(56696));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.ix,a=e.tag_user_obj,u=e.changeBgColorIx,s=e.handleResizeTag,f=e.handleMoveTag,_=e.handleDelTag,p=a.user,m=a.bg,v=a.color,h=a.trans_x,y=a.trans_y,g=a.rotate,b=a.scale,E=(0,n.useRef)(null),x=(0,n.useRef)(null),M=(0,c.use2FingersResize)({handleResize:function(e){s(r({},e,{ix:t}))}}),P=M.handleTouchStart,S=M.handleTouchMove,C=M.handleTouchEnd,T=(0,o.useMouseMoveXY)({handleMouseMove:function(e){f(r({},e,{ix:t}))}}).handleStart;return l.default.createElement("div",{ref:E,className:"StoryCPTagFriendItemMb pos-abs left-50per top-50per touch-action-none",style:{transform:"translate(-50%, -50%) translate("+h+"px, "+y+"px) rotate("+g+"deg) scale("+b+")"},onTouchStart:function(e){E.current.style.zIndex=100,x.current.style.display="block",1==e.touches.length?T(e):P(e)},onTouchMove:function(e){S(e)},onTouchEnd:function(e){C(e),0==e.touches.length&&(E.current.style.removeProperty("z-index"),x.current.style.removeProperty("display"))}},l.default.createElement("div",{className:"padding-8px brs-8px text-nowrap",style:{backgroundColor:m,color:v}},l.default.createElement("span",{className:"font-500 font-18px"},"@ ",p.first_name," ",p.last_name)),l.default.createElement("div",{className:"StoryCPTagFriendItemMb_close pos-abs left-100per bottom-100per display-none",style:{transform:"translate(-50%, 50%) scale("+1/b+")"}},l.default.createElement("div",{className:"StoryCPTagFriendItemMb_close_contain display-flex-center bg-always-white brs-50 box-shadow-1",onClick:function(){_(t)}},l.default.createElement(i.default,{y:400,size_icon:"1rem"}))),l.default.createElement("div",{className:"pos-abs-100",onClick:function(){u(t)}}),l.default.createElement(d.default,{ref_fake_elm:x,scale:b}))}a(18296),s.propTypes={},t.default=s},83776:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=i(r),l=(i(a(45697)),a(96369)),c=a(51353);a(47227);var o=i(a(56696));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.text_obj,a=e.openChangeText,i=e.handleResizeText,d=e.handleMoveText,u=t.text,s=t.trans_x,f=t.trans_y,_=t.rotate,p=t.scale,m=(0,r.useRef)(null),v=(0,r.useRef)(null),h=(0,l.use2FingersResize)({handleResize:i}),y=h.handleTouchStart,g=h.handleTouchMove,b=h.handleTouchEnd,E=(0,c.useMouseMoveXY)({handleMouseMove:d}).handleStart;return n.default.createElement("div",{ref:m,className:"StoryCPTextMb pos-abs left-50per top-50per padding-8px brs-8px bg-shadow-9 touch-action-none",style:{transform:"translate(-50%, -50%) translate("+s+"px, "+f+"px) rotate("+_+"deg) scale("+p+")"},onTouchStart:function(e){m.current.style.zIndex=100,v.current.style.display="block",1==e.touches.length?E(e):y(e)},onTouchMove:function(e){g(e)},onTouchEnd:function(e){b(e),0==e.touches.length&&(m.current.style.removeProperty("z-index"),v.current.style.removeProperty("display"))},onClick:a},n.default.createElement("span",{className:"StoryCPTextMb_text text-white font-500 font-18px"},u),n.default.createElement("div",{className:"pos-abs-100"}),n.default.createElement(o.default,{ref_fake_elm:v,scale:p}))}d.propTypes={},t.default=d},94834:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=u(n),c=(u(a(45697)),a(98503)),o=u(a(66025)),i=u(a(15992)),d=u(a(29955));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.handleCreateStory,a=e.openPrivacy,u=e.handleDiscard,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({active_bg_ix:0,text:""}),2),f=s[0],_=s[1],p=f.active_bg_ix,m=f.text;return l.default.createElement("div",{className:"StoryCreateTextMb wh-100"},l.default.createElement("img",{src:c.data_story_bg_arr[p],alt:"",className:"wh-100"}),l.default.createElement("div",{className:"pos-abs left-0 top-0"},l.default.createElement(o.default,{handleDiscard:function(){u(!!m.trim())}})),l.default.createElement("div",{className:"StoryCreateTextMb_input pos-abs-center"},l.default.createElement(d.default,{text:m,handleChange:function(e){_((function(t){return r({},t,{text:e})}))}})),l.default.createElement("div",{className:"pos-abs bottom-0 left-0 w-100per"},l.default.createElement(i.default,{active_bg_ix:p,bg_img_arr:c.data_story_bg_arr,can_share:m.trim(),handleChooseBg:function(e){_((function(t){return r({},t,{active_bg_ix:e})}))},openPrivacy:a,handleCreateStory:function(){t(f)}})))}a(80579),s.propTypes={},t.default=s},15992:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a(67294)),n=(o(a(45697)),o(a(64754))),l=o(a(73246)),c=o(a(60356));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.active_bg_ix,a=e.bg_img_arr,o=e.can_share,i=e.handleChooseBg,d=e.openPrivacy,u=e.handleCreateStory;return r.default.createElement("div",{className:"StoryCTFootMb padding-8px"},r.default.createElement("div",{className:"StoryCTFootMb_bg"},r.default.createElement(n.default,{active_ix:t,bg_img_arr:a,handleChooseBg:i})),r.default.createElement("div",{className:"flex-between-center"},r.default.createElement("div",null,r.default.createElement(l.default,{openPrivacy:d})),r.default.createElement("div",null,r.default.createElement(c.default,{can_share:o,handleCreateStory:u}))))}a(14682),i.propTypes={},t.default=i},29955:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(85315)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.text,a=e.handleChange;return r.default.createElement(n.default,{name:"story_input",text:t,placeholder:"START TYPING",textarea_class:"StoryCTInputMb_textarea pos-abs-center overflow-y-auto scroll-thin text-align-center text-white font-500 font-18px",onChange:a})}a(27541),c.propTypes={},t.default=c},85751:(e,t,a)=>{"use strict";a.r(t)},40570:(e,t,a)=>{"use strict";a.r(t)},54983:(e,t,a)=>{"use strict";a.r(t)},57867:(e,t,a)=>{"use strict";a.r(t)},95684:(e,t,a)=>{"use strict";a.r(t)},9893:(e,t,a)=>{"use strict";a.r(t)},54039:(e,t,a)=>{"use strict";a.r(t)},88631:(e,t,a)=>{"use strict";a.r(t)},8982:(e,t,a)=>{"use strict";a.r(t)},18296:(e,t,a)=>{"use strict";a.r(t)},47227:(e,t,a)=>{"use strict";a.r(t)},80579:(e,t,a)=>{"use strict";a.r(t)},14682:(e,t,a)=>{"use strict";a.r(t)},27541:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3685.js.map