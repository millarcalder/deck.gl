"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(83117),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),p=a(67392),c=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,p]=b({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=null!=s?s:u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var v=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(u(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;a=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},82340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(83117),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={},s="MapboxOverlay",p={unversionedId:"api-reference/mapbox/mapbox-overlay",id:"api-reference/mapbox/mapbox-overlay",title:"MapboxOverlay",description:"MapboxOverlay is an implementation of Mapbox GL JS's IControl API. When adding a MapboxOverlay control to an mapbox map, deck.gl layers are rendered in synchronization with the base map layers. This control supports both overlaid and interleaved rendering modes.",source:"@site/../docs/api-reference/mapbox/mapbox-overlay.md",sourceDirName:"api-reference/mapbox",slug:"/api-reference/mapbox/mapbox-overlay",permalink:"/docs/api-reference/mapbox/mapbox-overlay",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/mapbox/mapbox-overlay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@deck.gl/mapbox",permalink:"/docs/api-reference/mapbox/overview"},next:{title:"DeckGL (React Component)",permalink:"/docs/api-reference/react/deckgl"}},c={},u=[{value:"Example",id:"example",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"setProps",id:"setprops",level:5},{value:"pickObject",id:"pickobject",level:5},{value:"pickObjects",id:"pickobjects",level:5},{value:"pickMultipleObjects",id:"pickmultipleobjects",level:5},{value:"finalize",id:"finalize",level:5},{value:"getCanvas",id:"getcanvas",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Multi-view usage",id:"multi-view-usage",level:3}],d={toc:u},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapboxoverlay"},"MapboxOverlay"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," is an implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mapbox-gl"},"Mapbox GL JS"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#icontrol"},"IControl")," API. When adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," control to an mapbox map, deck.gl layers are rendered in synchronization with the base map layers. This control supports both ",(0,r.kt)("a",{parentName:"p",href:"/docs/get-started/using-with-map"},"overlaid and interleaved")," rendering modes."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {MapboxOverlay} from '@deck.gl/mapbox';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport mapboxgl from 'mapbox-gl';\nimport 'mapbox-gl/dist/mapbox-gl.css';\n\nconst map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/mapbox/light-v9',\n  accessToken: '<mapbox_access_token>',\n  center: [0.45, 51.47],\n  zoom: 11\n});\n\nmap.once('load', () => {\n  const deckOverlay = new MapboxOverlay({\n    interleaved: true,\n    layers: [\n      new ScatterplotLayer({\n        id: 'deckgl-circle',\n        data: [\n          {position: [0.45, 51.47]}\n        ],\n        getPosition: d => d.position,\n        getFillColor: [255, 0, 0, 100],\n        getRadius: 1000,\n        beforeId: 'waterway-label' // In interleaved mode render the layer under map labels\n      })\n    ]\n  });\n\n  map.addControl(deckOverlay);\n});\n"))),(0,r.kt)(o.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Map, useControl} from 'react-map-gl';\nimport {MapboxOverlay} from '@deck.gl/mapbox';\nimport {DeckProps} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport 'mapbox-gl/dist/mapbox-gl.css';\n\nfunction DeckGLOverlay(props: DeckProps) {\n  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));\n  overlay.setProps(props);\n  return null;\n}\n\nfunction App() {\n  const layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n      beforeId: 'waterway-label' // In interleaved mode render the layer under map labels\n    })\n  ];\n\n  return (\n    <Map\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      mapStyle=\"mapbox://styles/mapbox/light-v9\"\n      mapboxAccessToken=\"<mapbox_access_token>\"\n    >\n      <DeckGLOverlay layers={layers} interleaved />\n    </Map>\n  );\n}\n")),(0,r.kt)("p",null,"See react-map-gl's ",(0,r.kt)("a",{parentName:"p",href:"https://visgl.github.io/react-map-gl/docs/api-reference/use-control"},"useControl")," hook."))),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {MapboxOverlay} from '@deck.gl/mapbox';\nimport type {MapboxOverlayProps} from '@deck.gl/mapbox';\n\nnew MapboxOverlay(props: MapboxOverlayProps);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," accepts the same props as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck"},"Deck")," class, with the following exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"views")," - multi-view support is limited. There is only one ",(0,r.kt)("inlineCode",{parentName:"li"},"MapView")," that can synchronize with the base map. See the ",(0,r.kt)("a",{parentName:"li",href:"#multi-view-usage"},"using with multi-views")," section for details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"canvas")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"device")," - context creation is managed internally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewState")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"initialViewState")," - camera state is managed internally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller")," - always disabled (to use Mapbox's interaction handlers).")),(0,r.kt)("p",null,"The constructor additionally accepts the following option:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interleaved")," (boolean) - If ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", a dedicated deck.gl canvas is added on top of the base map. If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", deck.gl layers are inserted into mapbox-gl's layer stack, and share the same ",(0,r.kt)("inlineCode",{parentName:"li"},"WebGL2RenderingContext")," as the base map. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),". Note that interleaving with basemaps such as mapbox-gl-js v1 that only support WebGL 1 is not supported, see ",(0,r.kt)("a",{parentName:"li",href:"./overview#compatibility"},"compatibility"),".")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"interleaved: true"),", you may optionally add a ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeId")," prop to a layer to specify its position in the Mapbox layer stack. If multiple deck.gl layers have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeId"),", they are rendered in the order that is passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"layers")," array."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h5",{id:"setprops"},"setProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const overlay = new MapboxOverlay({\n  interleaved: true,\n  layers: []\n});\n\nmap.addControl(overlay);\n\n// Update layers\noverlay.setProps({\n  layers: [new ScatterplotLayer({...})]\n})\n")),(0,r.kt)("p",null,"Updates (partial) props of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"Deck")," instance. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#setprops"},"Deck.setProps"),"."),(0,r.kt)("h5",{id:"pickobject"},"pickObject"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#pickobject"},"Deck.pickObject"),"."),(0,r.kt)("h5",{id:"pickobjects"},"pickObjects"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#pickobjects"},"Deck.pickObjects"),"."),(0,r.kt)("h5",{id:"pickmultipleobjects"},"pickMultipleObjects"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#pickmultipleobjects"},"Deck.pickMultipleObjects"),"."),(0,r.kt)("h5",{id:"finalize"},"finalize"),(0,r.kt)("p",null,"Removes the control and deletes all resources."),(0,r.kt)("h5",{id:"getcanvas"},"getCanvas"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#getcanvas"},"Deck.getCanvas"),". When using ",(0,r.kt)("inlineCode",{parentName:"p"},"interleaved: true"),", returns the base map's ",(0,r.kt)("inlineCode",{parentName:"p"},"canvas"),"."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("h3",{id:"multi-view-usage"},"Multi-view usage"),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," with multiple views passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," prop, only one of the views can match the base map and receive interaction."),(0,r.kt)("p",null,"With that said, it is still possible to take advantage of deck's multi-view system and render a mapbox base map onto any one MapView of your choice by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"views")," array and a ",(0,r.kt)("inlineCode",{parentName:"p"},"layerFilter")," callback."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To use multiple views, define a ",(0,r.kt)("inlineCode",{parentName:"li"},"MapView")," with the id ",(0,r.kt)("inlineCode",{parentName:"li"},"\u201cmapbox\u201d"),". This view will receive the state that matches the base map at each render."),(0,r.kt)("li",{parentName:"ul"},"If views are provided but the array does not contain this id, then a ",(0,r.kt)("inlineCode",{parentName:"li"},"MapView({id: 'mapbox'})")," will be inserted at the bottom of the stack.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {MapboxOverlay} from '@deck.gl/mapbox';\nimport {Deck, MapView, OrthographicView} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst map = new mapboxgl.Map({...});\n\nconst overlay = new MapboxOverlay({\n  views: [\n    // This view will be synchronized with the base map\n    new MapView({id: 'mapbox'}),\n    // This view will not be interactive\n    new OrthographicView({id: 'widget'})\n  ],\n  layerFilter: ({layer, viewport}) => {\n    const shouldDrawInWidget = layer.id.startsWith('widget');\n    if (viewport.id === 'widget') return shouldDrawInWidget;\n    return !shouldDrawInWidget;\n  },\n  layers: [\n    new ScatterplotLayer({\n      id: 'my-scatterplot',\n      data: [\n        {position: [-74.5, 40], size: 100}\n      ],\n      getPosition: d => d.position,\n      getRadius: d => d.size,\n      getFillColor: [255, 0, 0]\n    }),\n    new ScatterplotLayer({\n      id: 'widget-scatterplot',\n      data: [\n        {position: [0, 0], size: 100}\n      ],\n      getPosition: d => d.position,\n      getRadius: d => d.size,\n      getFillColor: [255, 0, 0]\n    })\n  ]\n});\n\nmap.addControl(overlay);\n")))}b.isMDXComponent=!0}}]);