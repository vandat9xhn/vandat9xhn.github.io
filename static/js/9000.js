(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9e3],{17892:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var r=(0,n.useParams)();return e?+r[t]:r[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var n=r(93191)},69e3:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),i=m(a),o=r(93191),c=(m(r(45697)),r(45955)),u=r(17892),s=r(18638),l=r(74249),h=r(7550),f=r(38637),d=r(21092),p=m(r(69457));function m(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=this,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({room_chat:(0,u.GetIdSlug)(),chat_item:(0,h.initial_chat_item)(),ws:null,has_fetched:!1}),2),m=r[0],_=r[1],v=m.room_chat,y=m.chat_item,w=m.ws,g=m.has_fetched,b=(0,o.useParams)().id,k=(0,d.useScreenFetching)();(0,a.useEffect)((function(){return(0,c.toggleAppHiddenTemp)({is_hidden:!0}),function(){(0,c.toggleAppHiddenTemp)({is_hidden:!1})}}),[]),(0,a.useEffect)((function(){C(v)}),[b]);var P,x,C=(P=regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k((function(){return(0,f.handle_API_ChatZoom_R)(r)}));case 2:a=e.sent,_(n({},m,{room_chat:r,chat_item:(0,l.makeNewChat)(a),ws:(0,s.getRoomChatWebsocket)(r),has_fetched:!0}));case 4:case"end":return e.stop()}}),e,t)})),x=function(){var e=P.apply(this,arguments);return new Promise((function(t,r){return function n(a,i){try{var o=e[a](i),c=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(c).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(c)}("next")}))},function(e){return x.apply(this,arguments)});return g?i.default.createElement("div",{key:b,className:"ChatMobile"},i.default.createElement(p.default,{chat_ix:0,is_two_chat:!1,index:0,ws:w,scroll_y:0,room_chat:v,chat_item:y})):null}r(82618),_.propTypes={},t.default=_},82618:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=9000.js.map