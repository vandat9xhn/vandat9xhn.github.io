(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[117],{17892:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var a=(0,n.useParams)();return e?+a[t]:a[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var n=a(93191)},32346:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=u(n),r=u(a(45697)),i=a(65765),s=u(a(88303)),c=u(a(35214)),o=u(a(93223));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.title_action,a=e.symbol_post,r=e.children,s=(0,n.useRef)(null),u=(0,n.useRef)(null),d=(0,i.usePositionXY)({ref_child_elm:s,ref_btn_elm:u,other_state:{}}),f=d.position_state,m=d.handleOpen,p=d.handleClose,_=f.is_open,h=f.position_y,v=f.max_height;return l.default.createElement(c.default,{makeDivHidden:function(){p()}},l.default.createElement("div",{className:"Actions_contain pos-rel",onClick:function(){_?p():m({})}},l.default.createElement("div",{ref:u,className:"Actions_symbol "+(a?"Actions_symbol-post":"")},l.default.createElement("div",{className:"Actions_symbol-contain display-flex-center brs-50 hv-opacity hv-bg-s-through"},t)),l.default.createElement("div",{className:"Actions_choices "+(_?"visibility-visible":"visibility-hidden")+" "+("top"==h?"Actions_choices-top":"Actions_choices-bottom")},l.default.createElement("div",{ref:s}),_&&l.default.createElement("div",{className:"Actions_choices_actions scroll-thin bg-primary box-shadow-fb brs-5px-md text-primary",style:{maxHeight:window.innerWidth<=400?void 0:v+"px"}},l.default.createElement("div",{className:"ActionsChoices_back display-none"},l.default.createElement(o.default,null)),r))))}a(74881),a(89495),d.propTypes={title_action:r.default.oneOfType([r.default.string,r.default.element]),symbol_post:r.default.bool,children:r.default.element},d.defaultProps={symbol_post:!0,title_action:l.default.createElement(s.default,{size_icon:"1.25rem"})},t.default=d},93223:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(67294)),l=s(a(45697)),r=s(a(57108)),i=s(a(37930));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.title;return n.default.createElement("div",{className:"ActionBack action-item",title:"Back"},n.default.createElement(r.default,{Icon:i.default,x:200,y:200},t))}a(95845),c.propTypes={title:l.default.string},c.defaultProps={title:"Back"},t.default=c},10117:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=p(l),i=(p(a(45697)),a(17892)),s=p(a(37824)),c=(a(78295),a(79427)),o=a(10666),u=a(84353),d=p(a(11623)),f=p(a(89231)),m=p(a(92859));function p(e){return e&&e.__esModule?e:{default:e}}function _(){var e,t,a=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.API_Friend_D)(t);case 2:v((function(e){return n({},e,{data_arr:y.filter((function(e){return e.id!=t}))})}));case 3:case"end":return e.stop()}}),e,this)})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function n(l,r){try{var i=t[l](r),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(s)}("next")}))},function(e){return t.apply(this,arguments)}),p=(0,i.GetIdSlug)(),_=(0,u.useDataShowMore)({initial_arr:[]||0,handle_API_L:function(e){return(0,o.handle_API_Friend_L)({user_id:p,c_count:e,params:{size:20}})}}),h=_.data_state,v=_.setDataState,b=_.getData_API,y=h.data_arr,E=h.count,g=h.is_fetching,x=h.has_fetched,N=(0,l.useRef)(null);return(0,l.useEffect)((function(){(0,s.default)(N.current,b,0)}),[]),r.default.createElement("div",{ref:N,className:"ProfileFriend padding-8px brs-8px-md bg-primary box-shadow-1"},r.default.createElement("div",{className:x?"":"display-none"},r.default.createElement("h2",{className:"padding-8px"},"Friends"),r.default.createElement("div",{className:"display-flex flex-wrap space-between"},y.map((function(e,t){return r.default.createElement("div",{key:""+e.id,className:"ProfileFriend_item col-12 col-sm-6 col-lg-4"},r.default.createElement(m.default,{ix:t,user:e,handelDeleteFriend:a}))}))),r.default.createElement(d.default,{title:"See more friends",is_show_more:E>y.length,is_fetching:g&&x,handleShowMore:function(){b()}})),r.default.createElement("div",{className:x?"display-none":""},r.default.createElement(f.default,null)))}a(17088),_.propTypes={},t.default=_},92859:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=p(l),i=a(93191),s=p(a(45697)),c=a(15130),o=a(97943),u=a(39309),d=p(a(39475)),f=p(a(57108)),m=p(a(32346));function p(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.user,a=e.handelDeleteFriend,n=(0,l.useContext)(c.context_api),s=n.openRoomChat,o=n.openScreenFloor;return r.default.createElement("div",{className:"FriendEdit pos-rel box-shadow-fb brs-5px bg-primary"},r.default.createElement("div",{className:"FriendEdit_left"},r.default.createElement(i.Link,{to:"/profile/"+t.id,className:"normal-text hv-cl-blue label-field"},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement("img",{className:"brs-8px",src:t.picture,alt:"",width:"80",height:"80"})),r.default.createElement("div",{className:"FriendEdit_left_name"},t.first_name+" "+t.last_name)))),r.default.createElement("div",{className:"FriendEdit_right"},r.default.createElement(m.default,{symbol_post:!1},r.default.createElement("div",{className:"FriendEdit_action brs-5px box-shadow-1"},r.default.createElement("div",{className:"FriendEdit_action_item label-field cursor-pointer",onClick:function(){s(t.id)}},r.default.createElement(f.default,{x:200,Icon:d.default},"Message")),r.default.createElement("div",{className:"FriendEdit_action_item label-field cursor-pointer",onClick:function(){(0,u.openScreenConfirm)({openScreenFloor:o,title:"Delete",notification:"Do you really want to delete this friend",handleConfirm:function(){return a(t.id)}})}},r.default.createElement(f.default,{Icon:d.default},r.default.createElement("span",null,"Unfriend")))))))}a(84369),_.propTypes=n({},o.user_propTypes,{confirmDelete:s.default.func}),t.default=_},89231:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function r(e){return n.default.createElement("div",{className:"margin-auto height-100vh ProfileFriend_contain bg-primary"})}l(a(45697)),a(73584),r.propTypes={},t.default=r},89495:(e,t,a)=>{"use strict";a.r(t)},74881:(e,t,a)=>{"use strict";a.r(t)},95845:(e,t,a)=>{"use strict";a.r(t)},17088:(e,t,a)=>{"use strict";a.r(t)},84369:(e,t,a)=>{"use strict";a.r(t)},73584:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=117.js.map