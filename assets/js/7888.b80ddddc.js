"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7888],{3905:(t,i,e)=>{e.d(i,{Zo:()=>h,kt:()=>p});var n=e(67294);function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){r(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function c(t,i){if(null==t)return{};var e,n,r=function(t,i){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],i.indexOf(e)>=0||(r[e]=t[e]);return r}(t,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a=n.createContext({}),s=function(t){var i=n.useContext(a),e=i;return t&&(e="function"==typeof t?t(i):l(l({},i),t)),e},h=function(t){var i=s(t.components);return n.createElement(a.Provider,{value:i},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var i=t.children;return n.createElement(n.Fragment,{},i)}},f=n.forwardRef((function(t,i){var e=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,h=c(t,["components","mdxType","originalType","parentName"]),u=s(e),f=r,p=u["".concat(a,".").concat(f)]||u[f]||g[f]||o;return e?n.createElement(p,l(l({ref:i},h),{},{components:e})):n.createElement(p,l({ref:i},h))}));function p(t,i){var e=arguments,r=i&&i.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=f;var c={};for(var a in i)hasOwnProperty.call(i,a)&&(c[a]=i[a]);c.originalType=t,c[u]="string"==typeof t?t:r,l[1]=c;for(var s=2;s<o;s++)l[s]=e[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}f.displayName="MDXCreateElement"},66871:(t,i,e)=>{e.d(i,{Z:()=>u,Q:()=>h});var n=e(67614),r=e(51212),o=e(48348),l=e(46196),c=e(33085);var a=e(42957);function s(t,i,e,r){var o,s=(0,n.ly)(t,i,e);switch((r=(0,l.Z)(null==r?",f":r)).type){case"s":var h=Math.max(Math.abs(t),Math.abs(i));return null!=r.precision||isNaN(o=function(t,i){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,c.Z)(i)/3)))-(0,c.Z)(Math.abs(t)))}(s,h))||(r.precision=o),(0,a.jH)(r,h);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(o=function(t,i){return t=Math.abs(t),i=Math.abs(i)-t,Math.max(0,(0,c.Z)(i)-(0,c.Z)(t))+1}(s,Math.max(Math.abs(t),Math.abs(i))))||(r.precision=o-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(o=function(t){return Math.max(0,-(0,c.Z)(Math.abs(t)))}(s))||(r.precision=o-2*("%"===r.type))}return(0,a.WU)(r)}function h(t){var i=t.domain;return t.ticks=function(t){var e=i();return(0,n.ZP)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var n=i();return s(n[0],n[n.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,o,l=i(),c=0,a=l.length-1,s=l[c],h=l[a],u=10;for(h<s&&(o=s,s=h,h=o,o=c,c=a,a=o);u-- >0;){if((o=(0,n.G9)(s,h,e))===r)return l[c]=s,l[a]=h,i(l);if(o>0)s=Math.floor(s/o)*o,h=Math.ceil(h/o)*o;else{if(!(o<0))break;s=Math.ceil(s*o)/o,h=Math.floor(h*o)/o}r=o}return t},t}function u(){var t=(0,r.ZP)();return t.copy=function(){return(0,r.JG)(t,u())},o.o.apply(t,arguments),h(t)}},24808:(t,i,e)=>{e.d(i,{D5:()=>l});var n=e(67294),r=e(83156);e(9547),e(38826),e(81255),e(37442),e(4432),e(6415),e(90552),e(33855),e(46176),e(38824),e(31592);const o=e.e(4613).then(e.t.bind(e,24613,23)),l=n.forwardRef((function(t,i){return(0,r.Z)(t,i,o)}))},41708:(t,i,e)=>{e.d(i,{Z:()=>o});var n=e(60326),r=e(67532);class o{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:i={},indices:e=null,vertexCount:o=null}=t;this.id=t.id||(0,n.h)("geometry"),this.topology=t.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[n,l]of Object.entries(i)){const t=ArrayBuffer.isView(l)?{value:l}:l;(0,r.h)(ArrayBuffer.isView(t.value),`${this._print(n)}: must be typed array or object with value as typed array`),"POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n?((0,r.h)(!this.indices),this.indices=t):this.attributes[n]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=o||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,i){return this}_calculateVertexCount(t,i){if(i)return i.value.length;let e=1/0;for(const n of Object.values(t)){const{value:t,size:i,constant:r}=n;!r&&t&&i>=1&&(e=Math.min(e,t.length/i))}return(0,r.h)(Number.isFinite(e)),e}}},35300:(t,i,e)=>{e.d(i,{q:()=>r});const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nout vec4 picking_vRGBcolor_Avalid;\nvec3 picking_normalizeColor(vec3 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nvec4 picking_normalizeColor(vec4 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nbool picking_isColorZero(vec3 color) {\nreturn dot(color, vec3(1.0)) < 0.00001;\n}\nbool picking_isColorValid(vec3 color) {\nreturn dot(color, vec3(1.0)) > 0.00001;\n}\nbool isVertexHighlighted(vec3 vertexColor) {\nvec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\nreturn\nbool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\nvoid picking_setPickingColor(vec3 pickingColor) {\npickingColor = picking_normalizeColor(pickingColor);\nif (bool(picking.isActive)) {\npicking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\npicking_vRGBcolor_Avalid.rgb = pickingColor;\n} else {\npicking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n}\n}\nvoid picking_setPickingAttribute(float value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.r = value;\n}\n}\nvoid picking_setPickingAttribute(vec2 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rg = value;\n}\n}\nvoid picking_setPickingAttribute(vec3 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = value;\n}\n}\n",fs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\nif (picking.isActive > 0.5) {\nreturn color;\n}\nbool selected = bool(picking_vRGBcolor_Avalid.a);\nif (selected) {\nfloat highLightAlpha = picking.highlightColor.a;\nfloat blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\nfloat highLightRatio = highLightAlpha / blendedAlpha;\nvec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\nreturn vec4(blendedRGB, blendedAlpha);\n} else {\nreturn color;\n}\n}\nvec4 picking_filterPickingColor(vec4 color) {\nif (bool(picking.isActive)) {\nif (picking_vRGBcolor_Avalid.a == 0.0) {\ndiscard;\n}\nreturn picking_vRGBcolor_Avalid;\n}\nreturn color;\n}\nvec4 picking_filterColor(vec4 color) {\nvec4 highlightColor = picking_filterHighlightColor(color);\nreturn picking_filterPickingColor(highlightColor);\n}\n",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(t={},i){const e={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)e.isHighlightActive=!1;else{e.isHighlightActive=!0;const i=t.highlightedObjectColor.slice(0,3);e.highlightedObjectColor=i}if(t.highlightColor){const i=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),e.highlightColor=i}void 0!==t.isActive&&(e.isActive=Boolean(t.isActive),e.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(e.useFloatColors=Boolean(t.useFloatColors));return e}}},39875:(t,i,e)=>{e.d(i,{Z:()=>r});const n=1e20;class r{constructor({fontSize:t=24,buffer:i=3,radius:e=8,cutoff:n=.25,fontFamily:r="sans-serif",fontWeight:o="normal",fontStyle:l="normal"}={}){this.buffer=i,this.cutoff=n,this.radius=e;const c=this.size=t+4*i,a=this._createCanvas(c),s=this.ctx=a.getContext("2d",{willReadFrequently:!0});s.font=`${l} ${o} ${t}px ${r}`,s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(t){const i=document.createElement("canvas");return i.width=i.height=t,i}draw(t){const{width:i,actualBoundingBoxAscent:e,actualBoundingBoxDescent:r,actualBoundingBoxLeft:l,actualBoundingBoxRight:c}=this.ctx.measureText(t),a=Math.ceil(e),s=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(c-l))),h=Math.min(this.size-this.buffer,a+Math.ceil(r)),u=s+2*this.buffer,g=h+2*this.buffer,f=Math.max(u*g,0),p=new Uint8ClampedArray(f),v={data:p,width:u,height:g,glyphWidth:s,glyphHeight:h,glyphTop:a,glyphLeft:0,glyphAdvance:i};if(0===s||0===h)return v;const{ctx:d,buffer:b,gridInner:y,gridOuter:C}=this;d.clearRect(b,b,s,h),d.fillText(t,b,b+a);const k=d.getImageData(b,b,s,h);C.fill(n,0,f),y.fill(0,0,f);for(let o=0;o<h;o++)for(let t=0;t<s;t++){const i=k.data[4*(o*s+t)+3]/255;if(0===i)continue;const e=(o+b)*u+t+b;if(1===i)C[e]=0,y[e]=n;else{const t=.5-i;C[e]=t>0?t*t:0,y[e]=t<0?t*t:0}}o(C,0,0,u,g,u,this.f,this.v,this.z),o(y,b,b,s,h,u,this.f,this.v,this.z);for(let n=0;n<f;n++){const t=Math.sqrt(C[n])-Math.sqrt(y[n]);p[n]=Math.round(255-255*(t/this.radius+this.cutoff))}return v}}function o(t,i,e,n,r,o,c,a,s){for(let h=i;h<i+n;h++)l(t,e*o+h,o,r,c,a,s);for(let h=e;h<e+r;h++)l(t,h*o+i,1,n,c,a,s)}function l(t,i,e,r,o,l,c){l[0]=0,c[0]=-n,c[1]=n,o[0]=t[i];for(let a=1,s=0,h=0;a<r;a++){o[a]=t[i+a*e];const r=a*a;do{const t=l[s];h=(o[a]-o[t]+r-t*t)/(a-t)/2}while(h<=c[s]&&--s>-1);s++,l[s]=a,c[s]=h,c[s+1]=n}for(let n=0,a=0;n<r;n++){for(;c[a+1]<n;)a++;const r=l[a],s=n-r;t[i+n*e]=o[r]+s*s}}}}]);