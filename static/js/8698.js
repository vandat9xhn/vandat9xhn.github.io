(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8698],{71800:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleCreateNewPost=function(e){var t=e.data,r=e.user,n=t.main_content,l=t.c_vid_pics,a=t.bg_arr,i=t.bg_ix,u=t.permission,c=t.user_tag_arr,o=t.emoji_obj,s=r.picture,d=r.first_name,f=r.last_name,m=l.map((function(e){return{id:6,content_obj:{content_more:"",has_more_content:!1,content:e.content},likes:[],arr_unique_like:[],count_like:0,vid_pic:e.vid_pic,folder_picture:"my folder picture",post_model:11,comments:[],count_comment:0,histories:[],created_time:(new Date).toString(),updated_time:(new Date).toString()}}));return{id:11,user:{id:1,picture:s,first_name:d,last_name:f,is_online:!0},user_tag_arr:c.slice(0,2),user_tag_count:c.length,emoji_obj:o,content_obj:{content_more:"",has_more_content:!1,content:n},vid_pics:m,bg_obj:i>=1?a[i]:null,vid_pic_count:1,likes:[],count_like:0,user_reacted_ix:-1,shares:[],count_share:0,count_unique_share:0,count_user_shared:0,comments:[],count_comment:0,histories:[],count_history:0,created_time:(new Date).toString(),permission_post:u,updated_time:(new Date).toString(),profile_model:1}}},44283:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStickyAuto=function(e){var t=e.sticky_location,r=void 0===t?/./:t,n=(0,l.useRef)(null),a=(0,l.useRef)(null),d=(0,l.useRef)(null),f=(0,l.useRef)(c()),m=(0,l.useRef)(o(r)),_=(0,l.useRef)(!1),p=(0,l.useRef)(0),v=(0,l.useRef)(0),h=(0,l.useRef)(!0),P=(0,i.useMounted)();function y(){var e=d.current.getBoundingClientRect().height;return e-innerHeight>0?e-innerHeight:0}function E(){d.current.style.position="sticky",d.current.style.top=u+"px",a.current.style.height="0px"}function g(){d.current.style.position="static",a.current.style.height="0px",f.current=!1}function b(){_.current&&(window.onscroll=null,_.current=!1)}function x(){_.current||(window.onscroll=N,_.current=!0,setTimeout((function(){s(document.getElementsByTagName("html")[0].scrollTop+1)}),0))}function w(){d.current&&(m.current=o(r),f.current=c(),p.current=y(),f.current?p.current<=0&&E():g(),p.current>0&&m.current&&f.current?x():b())}function N(){if(d.current){var e=d.current.getBoundingClientRect(),t=e.top,r=e.bottom,l=-n.current.getBoundingClientRect().top,i=scrollY-v.current>0,c=r<=innerHeight,o=l<=u,s=t>=0;i?(h.current||(o?a.current.style.height="0px":s&&(a.current.style.height=l+u+"px")),d.current.style.top=-p.current+"px",d.current.style.bottom="auto",h.current=!0):(h.current&&c&&(a.current.style.height=l-p.current+"px"),d.current.style.top="auto",d.current.style.bottom=-p.current-u+"px",h.current=!1),v.current=pageYOffset}}function k(){if(m.current){var e=c();e?f.current?(p.current=y(),p.current<=0?(E(),b()):x()):(p.current=y(),f.current=!0,p.current>0?(d.current.style.position="sticky",x()):E(),v.current=scrollY-296-d.current.getBoundingClientRect().height,s(v.current)):!e&&f.current&&(b(),g(),v.current=scrollY+16+d.current.getBoundingClientRect().height,s(v.current))}}return(0,l.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k),window.onscroll=null}}),[]),(0,l.useEffect)((function(){setTimeout((function(){P&&w()}),0)}),[location.href]),{calculateAgain:w,ref_main_elm:n,ref_preview_elm:d,ref_fake_elm:a}};var n,l=r(67294),a=((n=r(45697))&&n.__esModule,r(55852)),i=r(35155),u=a.HEADER_HEAD+10,c=function(){return innerWidth>900},o=function(e){return location.href.search(e)>=0};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;document.getElementsByTagName("html")[0].scrollTop=e}},81858:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return n.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return n.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return n.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var n=r(55852)},70798:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(67294),a=v(l),i=r(93191),u=v(r(45697)),c=r(15130),o=r(55852),s=r(65394),d=v(r(4299)),f=v(r(37279)),m=v(r(79460)),_=v(r(70657)),p=v(r(966));function v(e){return e&&e.__esModule?e:{default:e}}r(49437);var h=o.IS_MOBILE?[{Icon:a.default.createElement(f.default,{size_icon:"14px"}),title:"Text",component_props:{}},{Icon:a.default.createElement(f.default,{size_icon:"14px"}),title:"Live video",component_props:{}},{Icon:a.default.createElement(d.default,{size_icon:"14px"}),title:"Location",component_props:{}}]:[{Icon:a.default.createElement(f.default,{size_icon:"24px"}),title:"Live video",component_props:{}},{Icon:a.default.createElement(f.default,{size_icon:"24px"}),title:"Photo/Video",component_props:{chosen_vid_pic:!0}},{Icon:a.default.createElement(m.default,{size_icon:"24px",stroke:"var(--gold)"}),title:"Feeling/Activity",component_props:{chosen_emoji:!0}}];function P(e){var t=e.title,r=e.handleCreatePost,u=(0,l.useContext)(c.context_api),d=u.user,m=u.openScreenFloor;function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.IS_MOBILE?p.default:_.default;(0,s.openScreenWithElm)({openScreenFloor:m,elm:a.default.createElement(t,n({title:"Create post",main_content:"",vid_pics:[],title_action:"Post",user_tag_arr:[],handleCUPost:r},e))})}return a.default.createElement("div",{className:"AddNewPost padding-x-16px padding-y-12px bg-primary brs-8px"},a.default.createElement("div",{className:"AddNewPost_head display-flex align-items-center padding-bottom-12px border-bottom-blur"},a.default.createElement(i.Link,{to:"/profile/"+d.id},a.default.createElement("img",{className:"brs-50",src:d.picture,alt:"",width:"40",height:"40"})),a.default.createElement("div",{className:"AddNewPost_title flex-grow-1 margin-left-12px padding-x-12px padding-y-8px bg-fb text-nowrap text-third font-17px cursor-pointer hv-bg-hv",onClick:v},t),o.IS_MOBILE?a.default.createElement("div",{className:"padding-y-8px font-12px text-third font-600"},a.default.createElement("div",{className:"AddNewPost_photo display-flex-center flex-col padding-x-10px",onClick:function(){v({chosen_vid_pic:!0})}},a.default.createElement("div",null,a.default.createElement(f.default,{size_icon:"18px"})),a.default.createElement("div",{className:"margin-top-5px"},"Photo"))):null),a.default.createElement("div",{className:"AddNewPost_foot flex-between-center margin-top-10px font-600 text-third"},h.map((function(e,t){return a.default.createElement("div",{key:t,className:"AddNewPost_foot_part display-flex-center padding-y-8px brs-5px cursor-pointer hv-bg-hv",onClick:function(){return v(e.component_props)}},e.Icon,a.default.createElement("div",{className:"margin-left-10px"},e.title))}))))}P.propTypes={title:u.default.string,handleCreatePost:u.default.func},P.defaultProps={title:"What's on your mind?"},t.default=P},92204:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),l=i(r(45697)),a=r(32006);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.vid_pic;return n.default.createElement("div",{className:"PicSquareDiv pos-rel"},n.default.createElement("div",{className:"pos-abs-100"},n.default.createElement("div",{className:"wh-100"},(0,a.VideoOrImage)(t,""))))}r(29264),u.propTypes={vid_pic:l.default.string},t.default=u},94596:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),l=u(r(45697)),a=u(r(44027)),i=u(r(63441));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.name;return n.default.createElement("div",{className:"ProfileHome"},n.default.createElement("div",{className:"ProfileHome_row display-flex justify-content-center"},n.default.createElement("div",{className:"ProfileHome_left"},n.default.createElement(i.default,null)),n.default.createElement("div",{className:"ProfileHome_right"},n.default.createElement(a.default,{name:t}))))}r(67680),r(5312),c.propTypes={last_name:l.default.string},t.default=c},44027:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(67294),a=P(l),i=P(r(45697)),u=r(15130),c=r(29996),o=r(17892),s=P(r(37824)),d=r(2804),f=r(21092),m=r(42441),_=r(10666),p=r(71800),v=P(r(70898)),h=P(r(70798));function P(e){return e&&e.__esModule?e:{default:e}}function y(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function E(e){var t,r,i=(t=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C((function(){return(0,c.handle_API_Post_C)(t)}));case 2:r=(0,p.handleCreateNewPost)({data:t,user:g}),O((function(e){return n({},e,{data_arr:[r].concat(y(e.data_arr))})})),b();case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(l,a){try{var i=e[l](a),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return r.apply(this,arguments)}),P=e.name,E=(0,l.useContext)(u.context_api),g=E.user,b=E.closeScreenFloor,x=(0,o.GetIdSlug)(),w=(0,l.useRef)(null),N=(0,l.useRef)(null),k=(0,d.useObserverShowMore)({initial_data_arr:m.initial_posts,handle_API_L:function(e){return(0,_.handle_API_ProfilePost_L)(e,x)}}),M=k.data_state,O=k.setDataState,S=k.refreshData_API,I=k.observerShowMore,j=M.data_arr,A=M.is_fetching,R=M.has_fetched,C=(0,f.useScreenFetching)();return(0,l.useEffect)((function(){(0,s.default)({elm:w.current,callback:function(){S(),I({fake_elm_end:N.current,rootMargin:"0px 0px 1000px 0px",way_scroll:"to_bottom",margin:500})}})}),[]),a.default.createElement("div",{className:"ProfilePosts",ref:w},a.default.createElement("div",{className:"ProfilePosts_new"},a.default.createElement(h.default,{handleCreatePost:i})),a.default.createElement("div",null,a.default.createElement(v.default,{posts:R?j:[],title_add_new:g.id==x?"Post a status update":"Write a post on "+P+"'s timeline",has_fetched:R,is_fetching:A})),a.default.createElement("div",{ref:N,className:"padding-1px"}))}r(57935),E.propTypes={name:i.default.string},t.default=E},35752:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),l=r(93191),a=c(r(45697)),i=r(55852),u=c(r(40040));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,r=e.title,a=e.sk,c=e.is_fetching,o=e.ProfilePrSkeleton;return n.default.createElement("div",{className:"ProfilePrCommon bg-primary box-shadow-1 brs-5px"},n.default.createElement("div",{className:c?"display-none":""},n.default.createElement("h2",{className:"ProfilePrCommon_title"},n.default.createElement(l.Link,{to:location.pathname+"?sk="+a,className:"normal-text hv-cl-blue",replace:!i.IS_MOBILE},r)),n.default.createElement("div",null,t)),n.default.createElement(u.default,{component:n.default.createElement(o,null),has_fetched:!c}))}r(74670),o.propTypes={title:a.default.string,sk:a.default.string,is_fetching:a.default.bool,children:a.default.oneOfType([a.default.element,a.default.string]),ProfilePrSkeleton:a.default.func},o.defaultProps={ProfilePrSkeleton:function(){return n.default.createElement("div",null)}},t.default=o},63441:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),l=d(n),a=(d(r(45697)),r(44283)),i=r(17892),u=d(r(54140)),c=d(r(34394)),o=d(r(29042));r(89237);var s=r(55852);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=(0,i.GetIdSlug)(),r=(0,n.useRef)(0),d=s.IS_MOBILE?{}:(0,a.useStickyAuto)({sticky_location:/\/profile\/\d+$/}),f=d.calculateAgain,m=d.ref_main_elm,_=d.ref_preview_elm,p=d.ref_fake_elm;function v(){s.IS_MOBILE||(r.current+=1,3==r.current&&f())}return l.default.createElement("div",{ref:m,className:"ProfilePreview h-100per"},l.default.createElement("div",{ref:p}),l.default.createElement("div",{ref:_,className:"pos-sticky"},l.default.createElement("div",{className:"ProfilePreview_item"},l.default.createElement(o.default,{id:t,handleReady:v})),l.default.createElement("div",{className:"ProfilePreview_pic ProfilePreview_item"},l.default.createElement(u.default,{id:t,handleReady:v})),l.default.createElement("div",{className:"ProfilePreview_item"},l.default.createElement(c.default,{id:t,handleReady:v}))))}f.propTypes={},t.default=f},29042:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(67294),a=d(l),i=(d(r(45697)),r(35155)),u=d(r(37824)),c=r(10666),o=d(r(35752)),s=d(r(87213));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t,r,d=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v((function(e){return n({},e,{is_fetching:!0})})),e.next=3,(0,c.handle_API_ProfileUser_R)(f);case 3:t=e.sent,E&&(v({about_arr:[{title:"From",content:t.town_arr.length?t.town_arr[0].title:""},{title:"Live now",content:t.address_arr.length?t.address_arr[0].address:""},{title:"Hobby",content:t.hobby_obj.hobby},{title:"University",content:t.university_arr.length?t.university_arr[0].title:""}],is_fetching:!1}),m());case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(l,a){try{var i=e[l](a),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),f=e.id,m=e.handleReady,_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){l=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)({about_arr:[{title:"Hobby",content:""},{title:"University",content:""},{title:"From",content:""},{title:"Live now",content:""}],is_fetching:!0}),2),p=_[0],v=_[1],h=p.about_arr,P=p.is_fetching,y=(0,l.useRef)(null),E=(0,i.useMounted)();return(0,l.useEffect)((function(){(0,u.default)({elm:y.current,callback:d,when_over:!0})}),[]),a.default.createElement("div",{ref:y},a.default.createElement(o.default,{title:"Intro",sk:"about_overview",is_fetching:P,ProfilePrSkeleton:s.default},a.default.createElement("div",{className:"ProfilePrAbout"},h.map((function(e,t){return a.default.createElement("div",{key:""+t,className:e.content?"":"display-none"},a.default.createElement("span",{className:"font-500 text-secondary"},e.title,":"," "),a.default.createElement("span",{className:"font-500"},e.content))})))))}r(11100),f.propTypes={},t.default=f},87213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294)),l=(a(r(45697)),a(r(29875)));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return n.default.createElement("div",null,n.default.createElement("div",{className:"ProfilePrCommon_skeleton_title"},n.default.createElement(l.default,null)),n.default.createElement("div",{className:"ProfilePrAbout ProfilePrAboutSkeleton_item"},n.default.createElement("div",null,n.default.createElement(l.default,null)),n.default.createElement("div",null,n.default.createElement(l.default,null)),n.default.createElement("div",null,n.default.createElement(l.default,null)),n.default.createElement("div",null,n.default.createElement(l.default,null))))}i.propTypes={},t.default=i},34394:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),l=d(n),a=(d(r(45697)),d(r(37824))),i=r(10666),u=r(84353),c=d(r(35752)),o=d(r(35957)),s=d(r(37025));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.id,r=e.handleReady,d=(0,u.useDataShowMore)({initial_arr:[]||0,handle_API_L:function(e){return(0,i.handle_API_Friend_L)({user_id:t,c_count:e,params:{size:9}})}}),f=d.data_state,m=d.getData_API,_=f.data_arr,p=f.count,v=f.is_fetching,h=f.has_fetched,P=(0,n.useRef)(null);function y(){m({handleWhenFinally:r})}return(0,n.useEffect)((function(){(0,a.default)({elm:P.current,callback:y})}),[]),l.default.createElement("div",{ref:P},l.default.createElement(c.default,{title:"Friends",sk:"friend",is_fetching:v,ProfilePrSkeleton:o.default},l.default.createElement("div",null,l.default.createElement("div",null,h&&p?p:"No"," ' friends'"),l.default.createElement("div",{className:"ProfilePrFriend_pic"},l.default.createElement("div",{className:"ProfilePrFriend_pic-row display-flex flex-wrap"},_.map((function(e,t){return l.default.createElement("div",{className:"ProfilePrFriend_pic-item",key:"ProfilePrFriend_"+t},l.default.createElement(s.default,{friend_obj:e}))})))))))}r(62764),f.propTypes={},t.default=f},37025:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),l=(i(r(45697)),r(93191));r(33681);var a=i(r(92204));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.friend_obj,r=t.id,i=t.picture,u=t.last_name;return n.default.createElement(l.Link,{to:"/profile/"+r,className:"w-100per normal-text hv-cl-blue"},n.default.createElement("div",{className:"ProfilePrFrItem"},n.default.createElement("div",null,n.default.createElement(a.default,{vid_pic:i})),n.default.createElement("div",{className:"text-nowrap"},u)))}u.propTypes={},t.default=u},35957:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),l=(i(r(45697)),i(r(29875))),a=i(r(97817));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return n.default.createElement("div",null,n.default.createElement("div",{className:"ProfilePrCommon_skeleton_title"},n.default.createElement(l.default,null)),n.default.createElement("div",null,n.default.createElement("div",{className:"ProfilePrFriend_pic-row display-flex flex-wrap"},Array(9).fill(1).map((function(e,t){return n.default.createElement("div",{key:"ProfilePrFrSkeleton_"+t,className:"ProfilePrFriend_pic-item"},n.default.createElement("div",null,n.default.createElement("img",{className:"wh-100 brs-5px",src:a.default,alt:""})),n.default.createElement("div",{className:"ProfilePrFrSkeleton_pic-name"},n.default.createElement(l.default,null)))})))))}r(2736),u.propTypes={},t.default=u},54140:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(67294),a=f(l),i=(f(r(45697)),r(35155)),u=f(r(37824)),c=r(10666),o=f(r(35752)),s=f(r(93531)),d=f(r(62835));function f(e){return e&&e.__esModule?e:{default:e}}r(25677),t.default=function(e){var t,r,f=(t=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h((function(e){return n({},e,{is_fetching:!0})})),e.next=3,(0,c.handle_API_VidPic_L)(m,P.length);case 3:t=e.sent,r=t.data,g&&(h({vid_pics:r,is_fetching:!1}),_());case 6:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(l,a){try{var i=e[l](a),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),m=e.id,_=e.handleReady,p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,l=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){l=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(l)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)({vid_pics:[{id:0,vid_pic:""}],is_fetching:!0}),2),v=p[0],h=p[1],P=v.vid_pics,y=v.is_fetching,E=(0,l.useRef)(null),g=(0,i.useMounted)();return(0,l.useEffect)((function(){(0,u.default)({elm:E.current,callback:f,when_over:!0})}),[]),a.default.createElement("div",{ref:E},a.default.createElement(o.default,{title:"Photos",sk:"photos_all",is_fetching:y,ProfilePrSkeleton:s.default},a.default.createElement("div",{className:"ProfilePrPic"},a.default.createElement("div",{className:"ProfilePrPic_row display-flex flex-wrap space-between"},P.map((function(e,t){return a.default.createElement("div",{className:"ProfilePrPic_item",key:"ProfilePrPic_"+t},a.default.createElement(d.default,{id:e.id,vid_pic:e.vid_pic}))}))),P.length?null:a.default.createElement("div",null,"No video, image"))))}},62835:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),l=r(93191);i(r(45697)),r(53654);var a=i(r(92204));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.id,r=e.vid_pic;return n.default.createElement(l.Link,{to:"/post/photos/"+t,className:"w-100per"},n.default.createElement("div",{className:"ProfilePrPicItem"},n.default.createElement(a.default,{vid_pic:r})))}u.propTypes={},t.default=u},93531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),l=(i(r(45697)),i(r(29875))),a=i(r(97817));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return n.default.createElement("div",null,n.default.createElement("div",{className:"ProfilePrCommon_skeleton_title"},n.default.createElement(l.default,null)),n.default.createElement("div",null,n.default.createElement("div",{className:"ProfilePrPic_row display-flex flex-wrap"},Array(9).fill(1).map((function(e,t){return n.default.createElement("div",{key:"ProfilePrPicSkeleton_"+t,className:"ProfilePrPic_item"},n.default.createElement("img",{className:"wh-100 padding-8px brs-5px",src:a.default,alt:""}))})))))}u.propTypes={},t.default=u},49437:(e,t,r)=>{"use strict";r.r(t)},29264:(e,t,r)=>{"use strict";r.r(t)},67680:(e,t,r)=>{"use strict";r.r(t)},5312:(e,t,r)=>{"use strict";r.r(t)},57935:(e,t,r)=>{"use strict";r.r(t)},74670:(e,t,r)=>{"use strict";r.r(t)},89237:(e,t,r)=>{"use strict";r.r(t)},11100:(e,t,r)=>{"use strict";r.r(t)},62764:(e,t,r)=>{"use strict";r.r(t)},33681:(e,t,r)=>{"use strict";r.r(t)},2736:(e,t,r)=>{"use strict";r.r(t)},25677:(e,t,r)=>{"use strict";r.r(t)},53654:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8698.js.map