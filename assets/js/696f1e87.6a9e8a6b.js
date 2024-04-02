"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(83117),a=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=f(e),[l,o]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=g({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=null!=s?s:p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);o(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),f=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),s(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{var r;const t=u.indexOf(e.currentTarget)+1;n=null!=(r=u[t])?r:u[0];break}case"ArrowLeft":{var a;const t=u.indexOf(e.currentTarget)-1;n=null!=(a=u[t])?a:u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:f},l,{className:(0,i.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},39563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(83117),a=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={},s="Using Effects",c={unversionedId:"developer-guide/using-effects",id:"developer-guide/using-effects",title:"Using Effects",description:"Effects are part of the render pipeline that affect the visuall of all layers. Deck.gl by default uses a LightingEffect to render its 3D geometries. Other effects can be found in core and extensions modules. Applications may also implement the Effect interface to create custom effects.",source:"@site/../docs/developer-guide/using-effects.md",sourceDirName:"developer-guide",slug:"/developer-guide/using-effects",permalink:"/docs/developer-guide/using-effects",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/using-effects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loading Data",permalink:"/docs/developer-guide/loading-data"},next:{title:"Performance Optimization",permalink:"/docs/developer-guide/performance"}},u={},p=[{value:"Lighting",id:"lighting",level:2},{value:"Light Settings",id:"light-settings",level:3},{value:"Shadows",id:"shadows",level:4},{value:"Material Settings",id:"material-settings",level:3},{value:"Post-Processing",id:"post-processing",level:2}],f={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-effects"},"Using Effects"),(0,a.kt)("p",null,"Effects are part of the render pipeline that affect the visuall of all layers. Deck.gl by default uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"LightingEffect")," to render its 3D geometries. Other effects can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions")," modules. Applications may also implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Effect")," interface to create custom effects."),(0,a.kt)("p",null,"The effect system is part of deck.gl's highly extensible architecture. It allows users to choose from a wide variety of features without adding excessive weight to the bundle size."),(0,a.kt)("h2",{id:"lighting"},"Lighting"),(0,a.kt)("p",null,"A lighting effect is a visual approximation of environment illumination based on simplified models to make rendering appear more realistic."),(0,a.kt)("div",{style:{position:"relative",height:450}}),(0,a.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,a.kt)("iframe",{height:"450",width:"100%",scrolling:"no",title:"deck.gl LightingEffect Demo",src:"https://codepen.io/vis-gl/embed/ZZwrZz/?height=450&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/vis-gl/pen/ZZwrZz/"},"deck.gl LightingEffect Demo")," by vis.gl (",(0,a.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Interactive demo of LightingEffect")),(0,a.kt)("h3",{id:"light-settings"},"Light Settings"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/lighting-effect"},"LightingEffect")," can be instantiated with one or more light instances:"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck, AmbientLight, SunLight, LightingEffect} from '@deck.gl/core';\n\n// create an ambient light\nconst ambientLight = new AmbientLight({\n  color: [255, 255, 255],\n  intensity: 1.0\n});\n// create directional light from the sun\nconst directionalLight = new SunLight({\n  timestamp: Date.UTC(2024, 7, 1, 22),\n  color: [255, 255, 255],\n  intensity: 1.0,\n});\n// create lighting effect with light sources\nconst lightingEffect = new LightingEffect({ambientLight, directionalLight});\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 11,\n    pitch: 45\n  },\n  controller: true,\n  // Add lighting effect to deck\n  effects: [lightingEffect]\n});\n"))),(0,a.kt)(l.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport DeckGL from '@deck.gl/react';\nimport {AmbientLight, SunLight, LightingEffect} from '@deck.gl/core';\n\n// create an ambient light\nconst ambientLight = new AmbientLight({\n  color: [255, 255, 255],\n  intensity: 1.0\n});\n// create directional light from the sun\nconst directionalLight = new SunLight({\n  timestamp: Date.UTC(2024, 7, 1, 22),\n  color: [255, 255, 255],\n  intensity: 1.0,\n});\n// create lighting effect with light sources\nconst lightingEffect = new LightingEffect({ambientLight, directionalLight});\n\nconst INITIAL_VIEW_STATE: MapViewState = {\n  longitude: -122.4,\n  latitude: 27.8,\n  zoom: 11,\n  pitch: 45\n};\n\nfunction App() {\n  return <DeckGL\n    initialViewState={INITIAL_VIEW_STATE}\n    controller\n    effects={[lightingEffect]}\n  />;\n}\n")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lights")," has all the light sources that the lighting effect uses to build the visualization. Users typically specify the following types of light sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/ambient-light"},"AmbientLight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/point-light"},"PointLight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/directional-light"},"DirectionalLight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/camera-light"},"CameraLight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/sun-light"},"SunLight"))),(0,a.kt)("p",null,"If no LightingEffect is supplied by the user, a default LightingEffect is used."),(0,a.kt)("h4",{id:"shadows"},"Shadows"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DirectionalLight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SunLight")," have an experimental option ",(0,a.kt)("inlineCode",{parentName:"p"},"_shadow"),". If enabled, geometries rendered by layers will cast shadows on each other. A layer can opt-out by setting a prop ",(0,a.kt)("inlineCode",{parentName:"p"},"shadowEnabled: false"),"."),(0,a.kt)("h3",{id:"material-settings"},"Material Settings"),(0,a.kt)("p",null,"Lighting is only applied to 2.5D (e.g. extruded ",(0,a.kt)("inlineCode",{parentName:"p"},"HexagonLayer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PolygonLayer"),") or 3D (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"PointCloudLayer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleMeshLayer"),") layers.\nMost of these layers support a ",(0,a.kt)("inlineCode",{parentName:"p"},"material")," prop that defines how the layer interacts with the global lighting."),(0,a.kt)("p",null,"A material is a plain JavaScript object with the following fiields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ambient")," (number) Between 0-1. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0.35"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"diffuse")," (number) Between 0-1. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0.6"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shininess")," (number) Larger than 0. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"32"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"specularColor")," (number","[3]","). RGB color, each channel in 0-1 range. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"[0.15, 0.15, 0.15]"),".")),(0,a.kt)("p",null,"Setting a material property to the value ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," will set all properties to their defaults."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new GeoJsonLayer({\n  id: 'geojson-layer',\n  data: '/path/to/data.geo.json',\n  // lighting only applies to extruded polygons\n  extruded: true,\n  getElevation: f => f.properties.height,\n  material: {\n    ambient: 0.8,\n    specularColor: [0.3, 0.1, 0.2]\n  }\n});\n")),(0,a.kt)("p",null,"Some layers, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"ScenegraphLayer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Tile3DLayer"),", uses materials defined inside the glTF format. Refer to the documentation of each layer to see what settings are supported."),(0,a.kt)("h2",{id:"post-processing"},"Post-Processing"),(0,a.kt)("p",null,"The post-processing effect applies screen space pixel manipulation effects to the deck.gl canvas."),(0,a.kt)("div",{style:{position:"relative",height:450}}),(0,a.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,a.kt)("iframe",{height:"450",width:"100%",scrolling:"no",title:"deck.gl PostProcessEffect Demo",src:"https://codepen.io/vis-gl/embed/YbRGvv/?height=450&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/vis-gl/pen/YbRGvv/"},"deck.gl PostProcessEffect Demo")," by vis.gl (",(0,a.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),"*Interactive demo of PostProcessEffect*",(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@luma.gl/shadertools")," provides a collection of ",(0,a.kt)("a",{parentName:"p",href:"https://luma.gl/docs/api-reference/shadertools/shader-passes/image-processing"},"shader modules")," that implements some common image processing algorithms. You may also refer to their source code to see how to implement your own."),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {brightnessContrast} from '@luma.gl/shadertools';\nimport {Deck, PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n});\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 11\n  },\n  controller: true,\n  // add post-processing effect to deck\n  effects: [postProcessEffect]\n});\n"))),(0,a.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {brightnessContrast, BrightnessContrastProps} from '@luma.gl/shadertools';\nimport {Deck, PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n} as BrightnessContrastProps);\n\nconst deckInstance = new Deck({\n  // ...\n  effects: [postProcessEffect]\n});\n"))),(0,a.kt)(l.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport DeckGL from '@deck.gl/react';\nimport {brightnessContrast, BrightnessContrastProps} from '@luma.gl/shadertools';\nimport {PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n} as BrightnessContrastProps);\n\nfunction App() {\n  return <DeckGL\n    // ...\n    effects={[postProcessEffect]}\n  />;\n}\n")))))}g.isMDXComponent=!0}}]);