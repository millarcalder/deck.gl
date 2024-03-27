"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1659],{3905:(i,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var e=n(67294);function o(i,t,n){return t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function r(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.push.apply(n,e)}return n}function l(i){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(i,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(n,t))}))}return i}function c(i,t){if(null==i)return{};var n,e,o=function(i,t){if(null==i)return{};var n,e,o={},r=Object.keys(i);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||(o[n]=i[n]);return o}(i,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(i,n)&&(o[n]=i[n])}return o}var g=e.createContext({}),a=function(i){var t=e.useContext(g),n=t;return i&&(n="function"==typeof i?i(t):l(l({},t),i)),n},s=function(i){var t=a(i.components);return e.createElement(g.Provider,{value:t},i.children)},h="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return e.createElement(e.Fragment,{},t)}},d=e.forwardRef((function(i,t){var n=i.components,o=i.mdxType,r=i.originalType,g=i.parentName,s=c(i,["components","mdxType","originalType","parentName"]),h=a(n),d=o,p=h["".concat(g,".").concat(d)]||h[d]||u[d]||r;return n?e.createElement(p,l(l({ref:t},s),{},{components:n})):e.createElement(p,l({ref:t},s))}));function p(i,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof i||o){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=i,c[h]="string"==typeof i?i:o,l[1]=c;for(var a=2;a<r;a++)l[a]=n[a];return e.createElement.apply(null,l)}return e.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20745:(i,t,n)=>{var e=n(73935);t.s=e.createRoot,e.hydrateRoot},24808:(i,t,n)=>{n.d(t,{D5:()=>l});var e=n(67294),o=n(83156);n(9547),n(38826),n(81255),n(37442),n(4432),n(6415),n(90552),n(33855),n(46176),n(38824),n(31592);const r=n.e(4613).then(n.t.bind(n,24613,23)),l=e.forwardRef((function(i,t){return(0,o.Z)(i,t,r)}))},18469:(i,t,n)=>{n.d(t,{Z:()=>g});var e=n(26921),o=n(67823),r=n(56709);const l="https://api.cesium.com/v1/assets";async function c(i,t){if(!t){const n=await async function(i){(0,r.h)(i);const t=l,n={Authorization:`Bearer ${i}`},e=await(0,o.dc)(t,{headers:n});if(!e.ok)throw new Error(e.statusText);return await e.json()}(i);for(const i of n.items)"3DTILES"===i.type&&(t=i.id)}const n=await async function(i,t){(0,r.h)(i,t);const n={Authorization:`Bearer ${i}`},e=`${l}/${t}`;let c=await(0,o.dc)(`${e}`,{headers:n});if(!c.ok)throw new Error(c.statusText);let g=await c.json();if(c=await(0,o.dc)(`${e}/endpoint`,{headers:n}),!c.ok)throw new Error(c.statusText);const a=await c.json();return g={...g,...a},g}(i,t),{type:e,url:c}=n;return(0,r.h)("3DTILES"===e&&c),n.headers={Authorization:`Bearer ${n.accessToken}`},n}const g={...e.u,id:"cesium-ion",name:"Cesium Ion",preload:async function(i){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t["cesium-ion"]||{};const{accessToken:n}=t;let e=t.assetId;if(!Number.isFinite(e)){const t=i.match(/\/([0-9]+)\/tileset.json/);e=t&&t[1]}return c(n,e)},parse:async(i,t,n)=>((t={...t})["3d-tiles"]=t["cesium-ion"],t.loader=g,e.u.parse(i,t,n)),options:{"cesium-ion":{...e.u.options["3d-tiles"],accessToken:null}}}},41708:(i,t,n)=>{n.d(t,{Z:()=>r});var e=n(60326),o=n(67532);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:n=null,vertexCount:r=null}=i;this.id=i.id||(0,e.h)("geometry"),this.topology=i.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(const[e,l]of Object.entries(t)){const i=ArrayBuffer.isView(l)?{value:l}:l;(0,o.h)(ArrayBuffer.isView(i.value),`${this._print(e)}: must be typed array or object with value as typed array`),"POSITION"!==e&&"positions"!==e||i.size||(i.size=3),"indices"===e?((0,o.h)(!this.indices),this.indices=i):this.attributes[e]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let n=1/0;for(const e of Object.values(i)){const{value:i,size:t,constant:o}=e;!o&&i&&t>=1&&(n=Math.min(n,i.length/t))}return(0,o.h)(Number.isFinite(n)),n}}},42013:(i,t,n)=>{n.d(t,{H:()=>l});const e="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\nstruct AmbientLight {\nvec3 color;\n};\nstruct PointLight {\nvec3 color;\nvec3 position;\nvec3 attenuation;\n};\nstruct DirectionalLight {\nvec3 color;\nvec3 direction;\n};\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\nuniform bool lighting_uEnabled;\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\nreturn pointLight.attenuation.x\n+ pointLight.attenuation.y * distance\n+ pointLight.attenuation.z * distance * distance;\n}\n#endif\n",o={lightSources:{}};function r(i={}){const{color:t=[0,0,0],intensity:n=1}=i;return t.map((i=>i*n/255))}const l={name:"lights",vs:e,fs:e,getUniforms:function i(t=o){if("lightSources"in t){const{ambientLight:i,pointLights:n,directionalLights:e}=t.lightSources||{};return i||n&&n.length>0||e&&e.length>0?Object.assign({},function({ambientLight:i,pointLights:t=[],directionalLights:n=[]}){const e={};return e["lighting_uAmbientLight.color"]=i?r(i):[0,0,0],t.forEach(((i,t)=>{e[`lighting_uPointLight[${t}].color`]=r(i),e[`lighting_uPointLight[${t}].position`]=i.position,e[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),e.lighting_uPointLightCount=t.length,n.forEach(((i,t)=>{e[`lighting_uDirectionalLight[${t}].color`]=r(i),e[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),e.lighting_uDirectionalLightCount=n.length,e}({ambientLight:i,pointLights:n,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const n={pointLights:[],directionalLights:[]};for(const i of t.lights||[])switch(i.type){case"ambient":n.ambientLight=i;break;case"directional":n.directionalLights?.push(i);break;case"point":n.pointLights?.push(i)}return i({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}}},55098:(i,t,n)=>{n.d(t,{N:()=>c,s:()=>g});var e=n(42013);const o="uniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\nvec3 halfway_direction = normalize(light_direction + view_direction);\nfloat lambertian = dot(light_direction, normal_worldspace);\nfloat specular = 0.0;\nif (lambertian > 0.0) {\nfloat specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\nspecular = pow(specular_angle, lighting_uShininess);\n}\nlambertian = max(lambertian, 0.0);\nreturn (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\nvec3 lightColor = surfaceColor;\nif (lighting_uEnabled) {\nvec3 view_direction = normalize(cameraPosition - position_worldspace);\nlightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uPointLightCount) {\nbreak;\n}\nPointLight pointLight = lighting_uPointLight[i];\nvec3 light_position_worldspace = pointLight.position;\nvec3 light_direction = normalize(light_position_worldspace - position_worldspace);\nlightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n}\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uDirectionalLightCount) {\nbreak;\n}\nDirectionalLight directionalLight = lighting_uDirectionalLight[i];\nlightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n}\n}\nreturn lightColor;\n}\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\nvec3 lightColor = vec3(0, 0, 0);\nvec3 surfaceColor = vec3(0, 0, 0);\nif (lighting_uEnabled) {\nvec3 view_direction = normalize(cameraPosition - position_worldspace);\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uPointLightCount) {\nbreak;\n}\nPointLight pointLight = lighting_uPointLight[i];\nvec3 light_position_worldspace = pointLight.position;\nvec3 light_direction = normalize(light_position_worldspace - position_worldspace);\nlightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n}\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uDirectionalLightCount) {\nbreak;\n}\nDirectionalLight directionalLight = lighting_uDirectionalLight[i];\nlightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n}\n}\nreturn lightColor;\n}\n",r={};function l(i=r){if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:n=.6,shininess:e=32,specularColor:o=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:n,lighting_uShininess:e,lighting_uSpecularColor:o.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const c={name:"gouraud-lighting",dependencies:[e.H],vs:o,defines:{LIGHTING_VERTEX:1},getUniforms:l},g={name:"phong-lighting",dependencies:[e.H],fs:o,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(i,t,n)=>{n.d(t,{q:()=>o});const e=new Float32Array([0,1,1,1]),o={name:"picking",vs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nout vec4 picking_vRGBcolor_Avalid;\nvec3 picking_normalizeColor(vec3 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nvec4 picking_normalizeColor(vec4 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nbool picking_isColorZero(vec3 color) {\nreturn dot(color, vec3(1.0)) < 0.00001;\n}\nbool picking_isColorValid(vec3 color) {\nreturn dot(color, vec3(1.0)) > 0.00001;\n}\nbool isVertexHighlighted(vec3 vertexColor) {\nvec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\nreturn\nbool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\nvoid picking_setPickingColor(vec3 pickingColor) {\npickingColor = picking_normalizeColor(pickingColor);\nif (bool(picking.isActive)) {\npicking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\npicking_vRGBcolor_Avalid.rgb = pickingColor;\n} else {\npicking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n}\n}\nvoid picking_setPickingAttribute(float value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.r = value;\n}\n}\nvoid picking_setPickingAttribute(vec2 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rg = value;\n}\n}\nvoid picking_setPickingAttribute(vec3 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = value;\n}\n}\n",fs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\nif (picking.isActive > 0.5) {\nreturn color;\n}\nbool selected = bool(picking_vRGBcolor_Avalid.a);\nif (selected) {\nfloat highLightAlpha = picking.highlightColor.a;\nfloat blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\nfloat highLightRatio = highLightAlpha / blendedAlpha;\nvec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\nreturn vec4(blendedRGB, blendedAlpha);\n} else {\nreturn color;\n}\n}\nvec4 picking_filterPickingColor(vec4 color) {\nif (bool(picking.isActive)) {\nif (picking_vRGBcolor_Avalid.a == 0.0) {\ndiscard;\n}\nreturn picking_vRGBcolor_Avalid;\n}\nreturn color;\n}\nvec4 picking_filterColor(vec4 color) {\nvec4 highlightColor = picking_filterHighlightColor(color);\nreturn picking_filterPickingColor(highlightColor);\n}\n",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:e},getUniforms:function(i={},t){const n={};if(void 0===i.highlightedObjectColor);else if(null===i.highlightedObjectColor)n.isHighlightActive=!1;else{n.isHighlightActive=!0;const t=i.highlightedObjectColor.slice(0,3);n.highlightedObjectColor=t}if(i.highlightColor){const t=Array.from(i.highlightColor,(i=>i/255));Number.isFinite(t[3])||(t[3]=1),n.highlightColor=t}void 0!==i.isActive&&(n.isActive=Boolean(i.isActive),n.isAttribute=Boolean(i.isAttribute));void 0!==i.useFloatColors&&(n.useFloatColors=Boolean(i.useFloatColors));return n}}}}]);