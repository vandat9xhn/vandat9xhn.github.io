(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8190],{73674:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_City_UD=t.API_City_C=void 0;var r,l=a(50918),n=(r=a(87421))&&r.__esModule?r:{default:r};t.API_City_C=function(e){return(0,l.API_FakeReal)({},(function(){return(0,n.default)({url:"/api01/c-city/",method:"POST",data:e})}))},t.API_City_UD=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,l.API_FakeReal)({},(function(){return(0,n.default)({url:"/api01/ud-city/"+e+"/",method:t,data:a})}))}},19594:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),l=o(r),n=o(a(45697)),i=o(a(35214)),u=o(a(3001));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.active_ix,a=e.color_bg_arr,n=e.handleChangeColorBg,o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),c=o[0],d=o[1];function s(){c&&d(!1)}return l.default.createElement("div",{className:"SelectColorBg position-rel"},l.default.createElement(i.default,{makeDivHidden:s},l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",{className:"SelectColorBg_btn-item padding-4px text-align-center label-field cursor-pointer "+a[t].bg+" "+a[t].color,onClick:function(){d(!c)},type:"text"},"Color")),l.default.createElement("div",{className:"SelectColorBg_list "+(c?"":"display-none")},l.default.createElement("div",{onClick:s},a.map((function(e,t){return l.default.createElement("div",{className:"SelectColorBg_item",key:""+t},l.default.createElement(u.default,{ix:t,bg:e.bg,color:e.color,handleChangeColorBg:n}))})))))))}a(14795),c.propTypes={active_ix:n.default.number,color_bg_arr:n.default.array,handleChangeColorBg:n.default.func},c.defaultProps={},t.default=c},3001:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.ix,a=e.color,l=e.bg,n=e.handleChangeColorBg;return r.default.createElement("div",{className:"SelectColorBgItem padding-4px text-align-center cursor-pointer "+l+" "+a,onClick:function(){n(t)}},"Color")}l(a(45697)),a(92428),n.propTypes={},t.default=n},22607:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=c(a(67294)),n=c(a(45697)),i=c(a(57108)),u=c(a(39475));c(a(85315)),a(17727);var o=a(66878);function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.field,a=e.form,n=e.is_textarea,c=e.type,d=e.label,s=e.placeholder,f=e.dataList,m=e.help,p=e.max_length,y=t.name,v=t.onChange,g=a.touched,b=a.errors,_=g[y]&&b[y],h="list_"+y+"_"+d;return l.default.createElement("div",{className:"InputText"},l.default.createElement("div",null,l.default.createElement("label",{className:"label-field"},d)),l.default.createElement("div",null,n?l.default.createElement("textarea",r({className:"InputText_input InputText_textarea scroll-thin brs-5px "+(g[y]&&!b[y]?"InputText_valid":"")+" "+(g[y]&&b[y]?"InputText_invalid":"")},t,{onChange:function(e){v(e),(0,o.makeAutoHeight)(e)},placeholder:s,type:c,maxLength:p})):l.default.createElement("input",r({className:"InputText_input brs-5px "+(g[y]&&!b[y]?"InputText_valid":"")+" "+(g[y]&&b[y]?"InputText_invalid":"")},t,{placeholder:s,type:c,list:h,maxLength:p}))),l.default.createElement("datalist",{id:h},f.map((function(e,t){return l.default.createElement("option",{key:"InputText_"+t},e)}))),m&&l.default.createElement("div",{className:"help-text"},l.default.createElement(i.default,{Icon:u.default,x:600},"* ",m)),_&&l.default.createElement("div",{className:"error-field"},l.default.createElement(i.default,{Icon:u.default,x:400,y:400},b[y])))}d.propTypes={field:n.default.object,form:n.default.object,is_textarea:n.default.bool,type:n.default.string,label:n.default.string,placeholder:n.default.string,dataList:n.default.array,help:n.default.string,max_length:n.default.number},d.defaultProps={is_textarea:!1,dataList:[],type:"text"},t.default=d},92362:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialValues=t.validationSchema=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(57503));t.validationSchema=r.object().shape({city:r.string().required("City is required").min(3,"At least 3 letters").max(50,"max 50 letters"),street:r.string().required("City is required").min(3,"At least 3 letters").max(50,"max 50 letters"),quote:r.string().required("Quote is required").min(5,"At least 5 letters"),image:r.mixed().required("Image is required")}),t.initialValues={city:"",street:"",bg_color:"bg-primary.text-primary",quote:"",image:""}},28108:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),i=p(n),u=a(18948),o=p(a(45697)),c=p(a(22607)),d=p(a(4124)),s=p(a(19594)),f=a(92362),m=p(a(90520));function p(e){return e&&e.__esModule?e:{default:e}}a(18886);var y=[{color:"text-primary",bg:"bg-primary"},{color:"color-react",bg:"bg-green"},{color:"text-secondary",bg:"bg-active-fb"},{color:"text-white",bg:"bg-linear-45-success-tear"}];function v(e){var t=e.initialValues,a=t.bg_color,o=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["bg_color"]),p=e.title_submit,v=e.handleSubmit,g=e.use_has_change,b=e.detectHasChange,_=(0,n.useState)(""),h=l(_,2),x=h[0],C=h[1],E=(0,n.useState)(y.findIndex((function(e){return e.bg+"."+e.color==a}))),I=l(E,2),N=I[0],O=I[1],j=y[N].color,S=y[N].bg,w=(0,n.useRef)(null);function F(e){C(e)}function P(e){e!=N&&O(e)}return i.default.createElement(u.Formik,{initialValues:o,validationSchema:f.validationSchema,onSubmit:function(e,t){v(r({},e,{bg_color:S+"."+j,file:x}))}},(function(e){var t,r,l;return g&&b((t=e.values.city,r=e.values.street,l=e.values.quote,!(!g||t==o.city&&r==o.street&&l==o.quote&&!x&&y[N].bg+"."+y[N].color==a))),i.default.createElement("div",{className:"CityForm"},i.default.createElement(u.Form,{className:"CityForm_contain App_Form brs-5px-md box-shadow-1 scroll-thin "+j+" "+S,autoComplete:"off"},i.default.createElement("div",{ref:w},i.default.createElement("div",{className:"CityForm_field"},i.default.createElement(u.FastField,{name:"city",component:c.default,label:"City",placeholder:"City...",dataList:["Ha Noi","Ho Chi Minh","Da Nang"],help:"5-50 letters"})),i.default.createElement("div",{className:"CityForm_field"},i.default.createElement(u.FastField,{name:"street",component:c.default,label:"Street",placeholder:"Street...",dataList:["Nguyen Trai","Nguyen Hue","Quang Trung","Tran Phu"],help:"5-50 letters"})),i.default.createElement("div",{className:"CityForm_field"},i.default.createElement(u.FastField,{name:"quote",component:c.default,label:"Quote",placeholder:"Quote...",is_textarea:!0})),i.default.createElement("div",{className:"CityForm_field"},i.default.createElement(s.default,{active_ix:N,color_bg_arr:y,handleChangeColorBg:P})),i.default.createElement("div",{className:"CityForm_field"},i.default.createElement(u.FastField,{name:"image",component:m.default,label:"Image",handleImageChange:F})),i.default.createElement("br",null),i.default.createElement("div",{className:"App_submit display-flex-center  "+(e.dirty||S+"."+j!=a?"":"pointer-events-none opacity-05"),onClick:function(){return function(e){if(Object.keys(e).length){var t=Object.keys(e);w.current.querySelector("[name="+t[0]+"]").scrollIntoView(!1)}}(e.errors)}},i.default.createElement(d.default,{type:"submit",title:"Create new city"},p)))))}))}v.propTypes={initialValues:o.default.object,title_submit:o.default.string,handleSubmit:o.default.func,use_has_change:o.default.bool,detectHasChange:o.default.func},v.defaultProps={title_submit:"Upload",use_has_change:!1},t.default=v},90520:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=a(67294),n=d(l),i=d(a(45697)),u=d(a(37279)),o=d(a(86804)),c=d(a(23596));function d(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.form,a=e.field,i=e.type,d=e.label,s=e.handleImageChange,f=a.name,m=a.value,p=t.touched,y=t.errors,v=p[f]&&y[f],g=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)(m?[{url:m,type:f}]:[]),2),b=g[0],_=g[1];return n.default.createElement("div",{className:"InputImage"},n.default.createElement("div",null,n.default.createElement("label",{className:"label-field",htmlFor:f},d)),n.default.createElement("div",{className:"InputImage_file"},n.default.createElement(o.default,r({width:"2rem",type:i},a,{onChange:function(e){var a=e.target.files;if(a.length){var r=new FileReader;r.onload=function(){_([{url:r.result,type:a[0].type}]),t.setFieldValue("image",r.result)},r.readAsDataURL(a[0]),s(a[0])}},accept:"image/*"}),n.default.createElement(u.default,null))),v&&n.default.createElement("div",{className:"error-field"},v),n.default.createElement("div",{className:"InputImage_preview"},n.default.createElement(c.default,{deleteAnItem:function(){_([]),s(""),t.setFieldValue("image","")},delete_in_pic:!0,urls:b})))}a(49764),s.propTypes={form:i.default.object,field:i.default.object,type:i.default.string,label:i.default.string,onImageChange:i.default.func},s.defaultProps={type:"file"},t.default=s},14795:(e,t,a)=>{"use strict";a.r(t)},92428:(e,t,a)=>{"use strict";a.r(t)},17727:(e,t,a)=>{"use strict";a.r(t)},18886:(e,t,a)=>{"use strict";a.r(t)},49764:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=8190.js.map