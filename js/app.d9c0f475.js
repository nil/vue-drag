(function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],u=0,m=[];u<i.length;u++)o=i[u],r[o]&&m.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=s;l.push([0,1]),a()})({0:function(e,t,a){e.exports=a("Vtdi")},"2Orl":function(e,t,a){},Vtdi:function(e,t,a){"use strict";a.r(t);a("yt8O"),a("VRzm");var n=a("Kw5r"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"main",attrs:{id:"content"}},[a("DragBox",{attrs:{title:"Default"}}),a("DragBox",{attrs:{axis:"x",title:"Horizontal"}}),a("DragBox",{attrs:{axis:"y",title:"Vertical"}}),a("DragBox",{attrs:{handle:"",title:"With handle"}})],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo--box"},[a("svg",{directives:[{name:"drag",rawName:"v-drag",value:{handle:e.boxHandle,axis:e.boxAxis},expression:"{ handle: boxHandle, axis: boxAxis}"}],staticClass:"box",class:e.axis,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 224 160"}},[a("path",{class:e.boxBg,attrs:{d:"M3.58781 25.9846c-4.78375 32.3923-4.78375 75.6384 0 108.0304.83244 5.637 1.24866 8.456 3.28128 11.861 1.48296 2.484 4.87401 5.784 7.39831 7.198 3.4599 1.938 6.2707 2.275 11.8923 2.948 44.3077 5.304 127.3733 5.304 171.6803 0 5.622-.673 8.433-1.01 11.893-2.948 2.524-1.414 5.915-4.714 7.398-7.198 2.033-3.405 2.449-6.224 3.281-11.861 4.784-32.392 4.784-75.6381 0-108.0304-.832-5.6368-1.248-8.4551-3.281-11.8605-1.483-2.4845-4.874-5.78368-7.398-7.19785-3.46-1.93832-6.271-2.27482-11.893-2.94784-44.307-5.30455-127.3726-5.30455-171.6803 0-5.6216.67301-8.4324 1.00952-11.8923 2.94784-2.5243 1.41417-5.91535 4.71335-7.39831 7.19785-2.03262 3.4054-2.44884 6.2237-3.28128 11.8605z"}}),e.handle?a("g",{attrs:{id:"element"}},[a("path",{staticClass:"box--handle",attrs:{d:"M53.84 76.02c5.62-.67 8.43-1 11.9-2.95a24.06 24.06 0 0 0 7.4-7.2c2.02-3.4 2.44-6.22 3.27-11.85C78.74 38.24 79.94 19.88 80 1.46l-1 .03c-19.9.6-38.37 1.76-52.72 3.48-5.65.68-8.26 1-11.52 2.83a20.25 20.25 0 0 0-3.89 3.04 20.25 20.25 0 0 0-3.14 3.8c-1.92 3.2-2.32 5.82-3.15 11.5-2.32 15.7-3.52 34-3.58 52.37v1c19.93-.6 38.44-1.76 52.84-3.49z"}}),a("path",{staticClass:"box--hand",attrs:{d:"M48 32h-1a1 1 0 0 0 .01.17L48 32zm-12-1h-1a1 1 0 0 0 0 .05l1-.05zm5 2a1 1 0 1 0 2 0h-2zm-10.92-.68l.97.23-.97-.23zm.94 6.05a1 1 0 0 0 1.86-.74l-1.86.74zm.55-1.27l.92-.4-.92.4zm4.24-5.1l.96-.28a1 1 0 0 0-.03-.08l-.93.36zm.29 1l-.96.28a1 1 0 0 0 1.96-.33l-1 .05zm12.07 0l-.99.17a1 1 0 0 0 1.93.16l-.94-.33zM48 53v1a1 1 0 0 0 1-1h-1zm-14 0h-1a1 1 0 0 0 1 1v-1zm9-21c0-1.1.9-2 2-2v-2a4 4 0 0 0-4 4h2zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2zm-8 1c0-1.1.9-2 2-2v-2a4 4 0 0 0-4 4h2zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2zm-11 9.5c0-.83.67-1.5 1.5-1.5v-2a3.5 3.5 0 0 0-3.5 3.5h2zM43 33v-1h-2v1h2zm-2-2v1h2v-1h-2zm-9.95 1.54A2 2 0 0 1 33 31v-2a4 4 0 0 0-3.9 3.1l1.95.44zm1.83 5.1l-.4-.95-1.83.81c.13.3.26.58.37.87l1.86-.74zm-.4-.95c-.42-.96-.83-1.8-1.12-2.6-.3-.8-.37-1.3-.3-1.54l-1.96-.46c-.2.89.08 1.88.38 2.7.32.86.8 1.84 1.17 2.71l1.84-.8zM29.5 37c.52 0 .97.26 1.24.66l1.66-1.12A3.5 3.5 0 0 0 29.5 35v2zm3.5-6c.8 0 1.57.58 1.87 1.36l1.87-.72A4.1 4.1 0 0 0 33 29v2zm1.85 1.28l.3 1 1.9-.56-.28-1-1.92.56zm.15-1.23l.1 2 2-.1-.1-2-2 .1zm15.5.95c.52 0 .85.16 1.06.4.23.27.44.76.44 1.6h2c0-1.16-.29-2.17-.93-2.9A3.3 3.3 0 0 0 50.5 30v2zm-1.39 1.33c.19-.52.38-.85.58-1.05.17-.16.4-.28.81-.28v-2c-.9 0-1.63.3-2.2.84a4.62 4.62 0 0 0-1.07 1.83l1.88.66zm-2.1-1.16l.18 1 1.97-.34-.17-1-1.98.34zM49 53c0-2.41.3-3.98.72-5.16.43-1.2.99-2.03 1.63-3.06a15 15 0 0 0 1.83-3.87c.5-1.68.82-3.84.82-6.91h-2a22 22 0 0 1-.74 6.34c-.43 1.43-1 2.4-1.6 3.38-.62.97-1.3 2-1.82 3.44A17.04 17.04 0 0 0 47 53h2zm-1-1H34v2h14v-2zm-13 1c0-3.94-2.03-5.95-3.78-7.76C29.5 43.46 28 41.84 28 38.5h-2c0 4.16 2 6.29 3.78 8.13C31.53 48.45 33 49.93 33 53h2z"}})]):a("g",[a("path",{staticClass:"box--hand",attrs:{d:"M108 70.98l.1 1.97a1 1 0 0 1-1.96.33l-.28-.95A2.1 2.1 0 0 0 104 71a2 2 0 0 0-1.95 1.54c-.06.26 0 .74.3 1.56.21.55.48 1.13.76 1.76a89.05 89.05 0 0 1 .77 1.77 1 1 0 0 1-1.86.74l-.32-.78a1.5 1.5 0 0 0-2.7.91c0 3.34 1.5 4.96 3.22 6.74l.12.13c1.56 1.62 3.31 3.42 3.61 6.63h12.07c.07-2.06.37-3.59.82-4.84.46-1.3 1.08-2.27 1.64-3.17l.17-.27c.61-.97 1.18-1.95 1.61-3.38A22 22 0 0 0 123 74c0-.84-.21-1.33-.44-1.6-.21-.24-.54-.4-1.06-.4-.41 0-.64.12-.8.28-.2.2-.4.53-.59 1.05a1 1 0 0 1-1.92-.16l-.18-1A1 1 0 0 1 118 72a2 2 0 1 0-4 0v1a1 1 0 1 1-2 0v-2a2 2 0 0 0-4-.02zm5.43-2.04a3.98 3.98 0 0 1 6.28 1.57c.5-.33 1.1-.51 1.79-.51.98 0 1.9.34 2.57 1.1.64.73.93 1.74.93 2.9 0 3.07-.32 5.23-.82 6.91a15 15 0 0 1-2 4.14c-.57.9-1.07 1.7-1.46 2.79A15.08 15.08 0 0 0 120 93a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1c0-3.03-1.44-4.53-3.17-6.32l-.05-.05C99 84.8 97 82.67 97 78.5a3.5 3.5 0 0 1 3.56-3.5l-.08-.2a4.9 4.9 0 0 1-.38-2.7A4 4 0 0 1 104 69c.83 0 1.59.27 2.21.7a4 4 0 0 1 7.22-.76z"}}),a("path",{staticClass:"box--axis axis-x",attrs:{d:"M144.3 75.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l2.29-2.3H136a1 1 0 0 1 0-2h10.59l-2.3-2.3a1 1 0 0 1 0-1.4zM78.7 84.7a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L76.42 79H87a1 1 0 0 1 0 2H76.41l2.3 2.3a1 1 0 0 1 0 1.4z"}}),a("path",{staticClass:"box--axis axis-y",attrs:{d:"M116.7 112.3a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l2.3 2.29V104a1 1 0 0 1 2 0v10.59l2.3-2.3a1 1 0 0 1 1.4 0zM107.3 48.7a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4l-2.3-2.29V57a1 1 0 0 1-2 0V46.41l-2.3 2.3a1 1 0 0 1-1.4 0z"}})])]),a("h2",[e._v(e._s(e.title))])])},i=[],s=a("a94B"),c=(a("SRfc"),a("pIFo"),a("xfY5"),{grabElement:null,moveElement:null,axis:"all",isStyleAdded:!1,transform:{declared:!1,string:""},initialX:0,initialY:0,cursorInitialX:0,cursorInitialY:0}),d=".drag-draggable { position: relative; } .drag-draggable:not(.drag-uses-handle), .drag-handle { cursor: move; cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; } .drag-handle.drag-down, .drag-draggable:not(.drag-uses-handle).drag-down { z-index: 999; cursor: grabbing; cursor: -webkit-grabbing; cursor: -moz-grabbing; }";function u(e,t){return"matrix(".concat(c.transform.string," ").concat(e,", ").concat(t,")")}function m(e,t,a,n){c.grabElement=t,c.moveElement=a,c.axis=e||"all",c.cursorInitialX=n.pageX||n.touches[0].pageX,c.cursorInitialY=n.pageY||n.touches[0].pageY,c.initialX=Number(window.getComputedStyle(a).left.replace("px","")),c.initialY=Number(window.getComputedStyle(a).top.replace("px","")),c.relativeX=0,c.relativeY=0;var r=window.getComputedStyle(a).transform;"none"==r?(c.transform.declared=!1,c.transform.string="1, 0, 0, 1,"):(c.transform.declared=!0,c.transform.string=r.match(/\d([^,]*,){4}/g)[0]),a.style.transform=u(c.initialX,c.initialY),a.style.left=0,a.style.top=0,t.classList.add("drag-down"),document.addEventListener("mousemove",v),document.addEventListener("touchmove",v)}function v(e){var t=(e.pageX||e.touches[0].pageX)-c.cursorInitialX,a=(e.pageY||e.touches[0].pageY)-c.cursorInitialY;c.moveElement.classList.add("drag-move"),"x"==c.axis?a=0:"y"==c.axis&&(t=0),c.moveElement.style.transform=u(c.initialX+t,c.initialY+a),c.relativeX=t,c.relativeY=a}function g(){c.moveElement&&(c.moveElement.style.transform=c.transform.declared?u(0,0):"none",c.moveElement.style.left=c.initialX+c.relativeX+"px",c.moveElement.style.top=c.initialY+c.relativeY+"px",c.grabElement.classList.remove("drag-down"),c.moveElement.classList.remove("drag-move"),document.removeEventListener("mousemove",v),document.removeEventListener("touchmove",v))}n["a"].directive("drag",{inserted:function(e,t,a){var n,r,l,o,i=t.value;if(!c.isStyleAdded){c.isStyleAdded=!0;var u=document.createElement("style");u.innerHTML=d,document.body.appendChild(u)}"object"===Object(s["a"])(i)?(n=i.axis,r=i.handle):(n=t.arg,r=i);var v=document.getElementById(r);i&&!v&&i.handle?console.error("Element with id “".concat(i.handle||i,"” doesn’t exist")):(v?(l=v,o=e,o.classList.add("drag-uses-handle"),l.classList.add("drag-handle")):(l=e,o=e),o.classList.add("drag-draggable"),l.addEventListener("mousedown",function(e){return m(n,l,o,e)}),l.addEventListener("touchstart",function(e){return m(n,l,o,e)})),document.addEventListener("mouseup",g),document.addEventListener("touchend",g)}});var h={name:"DragBox",props:{handle:Boolean,axis:String,title:String},computed:{boxHandle:function(){if(this.handle)return"element"},boxAxis:function(){return this.axis},boxBg:function(){return this.handle?"box--extra":"box--bg"}}},p=h,f=a("KHd+"),x=Object(f["a"])(p,o,i,!1,null,null,null),b=x.exports,z={name:"app",components:{DragBox:b}},y=z,w=Object(f["a"])(y,r,l,!1,null,null,null),E=w.exports;a("2Orl");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(E)}}).$mount("#content")}});
//# sourceMappingURL=app.d9c0f475.js.map