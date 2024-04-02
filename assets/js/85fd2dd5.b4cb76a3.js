"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6407],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(83117),r=t(67294),o=t(86010),l=t(12466),i=t(16550),s=t(91980),d=t(67392),p=t(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function u(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=a?a:c(t);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){var a;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(a=n.find((e=>e.default)))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[s,d]=g({queryString:t,groupId:n}),[c,f]=function(e){let{groupId:a}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(a),[n,o]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),h=(()=>{const e=null!=s?s:c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var h=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const a=e.currentTarget,t=p.indexOf(a),n=d[t].value;n!==i&&(c(a),s(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const a=p.indexOf(e.currentTarget)+1;t=null!=(n=p[a])?n:p[0];break}case"ArrowLeft":{var r;const a=p.indexOf(e.currentTarget)-1;t=null!=(r=p[a])?r:p[p.length-1];break}}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},d.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:m,onClick:u},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,a)),r.createElement(b,(0,n.Z)({},e,a)))}function w(e){const a=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(a)},e))}},73141:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(83117),r=(t(67294),t(3905)),o=t(74866),l=t(85162);const i={},s="Loading Data",d={unversionedId:"developer-guide/loading-data",id:"developer-guide/loading-data",title:"Loading Data",description:"deck.gl uses loaders.gl, a framework-agnostic library to read data and resources.",source:"@site/../docs/developer-guide/loading-data.md",sourceDirName:"developer-guide",slug:"/developer-guide/loading-data",permalink:"/docs/developer-guide/loading-data",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/loading-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Animations and Transitions",permalink:"/docs/developer-guide/animations-and-transitions"},next:{title:"Using Effects",permalink:"/docs/developer-guide/using-effects"}},p={},c=[{value:"Customize Data Loading Behavior",id:"customize-data-loading-behavior",level:2},{value:"Example: Fetch data with credentials",id:"example-fetch-data-with-credentials",level:3},{value:"Example: Override the default image loading options",id:"example-override-the-default-image-loading-options",level:3},{value:"Support Additional Formats",id:"support-additional-formats",level:2},{value:"Force Reload From an URL",id:"force-reload-from-an-url",level:2},{value:"Loaders and Web Workers",id:"loaders-and-web-workers",level:2},{value:"Load Resource Without an URL",id:"load-resource-without-an-url",level:2},{value:"Example: Use image from a programmatically generated SVG string",id:"example-use-image-from-a-programmatically-generated-svg-string",level:3},{value:"Example: Parse glTF from a binary blob",id:"example-parse-gltf-from-a-binary-blob",level:3}],u={toc:c},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loading-data"},"Loading Data"),(0,r.kt)("p",null,"deck.gl uses ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl"},"loaders.gl"),", a framework-agnostic library to read data and resources."),(0,r.kt)("p",null,"deck.gl core always includes loaders for JSON and standard image formats (e.g, png, jpeg, svg). Certain layers include additional loaders supporting their own use cases. It is easy for applications to provide options to configure the behavior of the default loaders or to add loaders to support for additional formats."),(0,r.kt)("p",null,"Some examples of when loaders are used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON array or object from an URL passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," prop of a layer"),(0,r.kt)("li",{parentName:"ul"},"Texture from an image, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"image")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"BitmapLayer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"iconAtlas")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"IconLayer"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"texture")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleMeshLayer")),(0,r.kt)("li",{parentName:"ul"},"Geometries from a binary tile, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"MVTLayer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TerrainLayer"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Tile3DLayer")),(0,r.kt)("li",{parentName:"ul"},"Geometries from a standard 3D format, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"scenegraph")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"ScenegraphLayer"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"mesh")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"SimpleMeshLayer"))),(0,r.kt)("h2",{id:"customize-data-loading-behavior"},"Customize Data Loading Behavior"),(0,r.kt)("p",null,"All layers support a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/layer#loadoptions"},"loadOptions")," prop that can be used to customize loading and parsing."),(0,r.kt)("h3",{id:"example-fetch-data-with-credentials"},"Example: Fetch data with credentials"),(0,r.kt)("p",null,"In a production environment, deck.gl applications may need to load data from secure APIs that require special HTTP headers (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),") to be set."),(0,r.kt)("p",null,"In order to access a secure API, the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadOptions.fetch")," option passes through additional parameters to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"fetch"),", which deck.gl calls under the hood to load resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new ScatterplotLayer({\n  data: 'https://secure-server.com/userActivity',\n  loadOptions: {\n    fetch: {\n      method: 'POST',\n      body: JSON.stringify(requestBody),\n      headers: {\n        'Authorization': `Bearer ${accessToken}`,\n      }\n    }\n  }\n});\n")),(0,r.kt)("h3",{id:"example-override-the-default-image-loading-options"},"Example: Override the default image loading options"),(0,r.kt)("p",null,"deck.gl uses ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/images/docs/api-reference/image-loader"},"ImageLoader")," to read common image formats. The default loader options are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  image: {type: 'auto'},\n  imagebitmap: {premultiplyAlpha: 'none'}\n}\n")),(0,r.kt)("p",null,"The image is decoded into an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap"},"ImageBitmap")," if the browser supports it (Firefox, Chrome, Edge) for better performance. You can override the default ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/images/docs/api-reference/image-loader#magebitmap-options"},"options")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"createImageBitmap")," API as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new IconLayer({\n  iconAtlas: '/path/to/image.png',\n  loadOptions: {\n    imagebitmap: {\n      // Flip the image vertically\n      imageOrientation: 'flipY'\n    }\n  }\n})\n")),(0,r.kt)("p",null,"If the image is a SVG that does not include width and height information, ",(0,r.kt)("inlineCode",{parentName:"p"},"createImageBitmap")," will throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"DOMException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The image element contains an SVG image without intrinsic dimensions, and no resize options or crop region are specified.\n")),(0,r.kt)("p",null,"This can be fixed by explicitly setting its dimensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new IconLayer({\n  iconAtlas: '/path/to/image.svg',\n  loadOptions: {\n    imagebitmap: {\n      resizeWidth: 256,\n      resizeHeight: 256,\n      resizeQuality: 'high'\n    }\n  }\n})\n")),(0,r.kt)("h2",{id:"support-additional-formats"},"Support Additional Formats"),(0,r.kt)("p",null,"All layers support a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/layer#loaders"},"loaders")," prop that can be used to add ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/docs/developer-guide/using-loaders"},"loaders.gl loaders")," for parsing a specific input format."),(0,r.kt)("p",null,"For example, the following code adds the ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/csv/docs/api-reference/csv-loader"},"CSVLoader")," to support CSV/TSV files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {CSVLoader} from '@loaders.gl/csv';\n\nnew HexagonLayer({\n  data: '/path/to/data.tsv',\n  loaders: [CSVLoader],\n  loadOptions: {\n    csv: {\n      delimiter: '\\t',\n      dynamicTyping: true,\n      skipEmptyLines: true\n    }\n  }\n});\n")),(0,r.kt)("p",null,"The following code adds the ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/las/docs/api-reference/las-loader"},"LASLoader")," to support LAS/LAZ files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {LASLoader} from '@loaders.gl/las';\n\nnew PointCloudLayer({\n  mesh: '/path/to/pointcloud.laz',\n  loaders: [LASLoader]\n});\n")),(0,r.kt)("h2",{id:"force-reload-from-an-url"},"Force Reload From an URL"),(0,r.kt)("p",null,"Usually, a layer refreshes its data when and only when the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," prop changes.\nThe following code refreshes data from the same URL every 5 minutes by changing a query parameter:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 27.8,\n    zoom: 8\n  },\n  controller: true\n});\n\nlet dataVersion = 0;\nfunction update() {\n  const layers = [\n    new ScatterplotLayer({\n      data: `path/to/data.json?v=${++dataVersion}`,\n      getPosition: d => d.position\n    })\n  ];\n\n  deckInstance.setProps({layers});\n\n  // Refresh after 5 minutes\n  return setTimeout(update, 5 * 60 * 1000);\n};\n\nupdate();\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {Deck} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 27.8,\n    zoom: 8\n  },\n  controller: true\n});\n\ntype DataType = {\n  position: [longitude: number, latitude: number];\n};\n\nlet dataVersion: number = 0;\nfunction update() {\n  const layers = [\n    new ScatterplotLayer<DataType>({\n      data: `path/to/data.json?v=${++dataVersion}`,\n      getPosition: (d: DataType) => d.position\n    })\n  ];\n\n  deckInstance.setProps({layers});\n\n  // Refresh after 5 minutes\n  return setTimeout(update, 5 * 60 * 1000);\n};\n\nupdate();\n"))),(0,r.kt)(l.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useState, useEffect} from 'react';\nimport DeckGL from '@deck.gl/react';\nimport {MapViewState} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst INITIAL_VIEW_STATE: MapViewState = {\n  longitude: -122.4,\n  latitude: 27.8,\n  zoom: 8\n};\n\ntype DataType = {\n  position: [longitude: number, latitude: number];\n};\n\nfunction App() {\n  const [dataVersion, setDataVersion] = useState<number>(0);\n\n  useEffect(() => {\n    const nextUpdate = setTimeout(() => setDataVersion(dataVersion + 1), 5 * 60 * 1000);\n    return () => clearTimeout(nextUpdate);\n  }, [dataVersion]);\n\n  const layers = [\n    new ScatterplotLayer<DataType>({\n      data: `/path/to/data.json?v=${++dataVersion}`,\n      getPosition: (d: DataType) => d.position\n    })\n  ];\n\n  return <DeckGL\n    initialViewState={INITIAL_VIEW_STATE}\n    controller\n    layers={layers}\n  />;\n}\n")))),(0,r.kt)("h2",{id:"loaders-and-web-workers"},"Loaders and Web Workers"),(0,r.kt)("p",null,"For the best performance, some specialized loaders parse data using web workers, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"TerrainLoader")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/geo-layers/terrain-layer"},"TerrainLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MVTLoader")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/geo-layers/mvt-layer"},"MVTLayer"),". By default, the worker code is loaded from from the latest published NPM module on ",(0,r.kt)("a",{parentName:"p",href:"https://unpkg.com"},"unpkg.com"),"."),(0,r.kt)("p",null,"It might be desirable for some applications to serve the worker code itself without relying on the CDN. To do this, locate the worker bundle locally in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/@loaders.gl/<module>/dist/<name>-worker.js")," and serve it as a static asset with your server. Point the loader to use this alternative URL using ",(0,r.kt)("inlineCode",{parentName:"p"},"loadOptions.<name>.workerUrl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new MVTLayer({\n  loadOptions: {\n    mvt: {\n      // cp node_modules/@loaders.gl/mvt/dist/mvt-worker.js static/mvt-worker.js\n      workerUrl: '/static/mvt-worker.js'\n    }\n  }\n}\n")),(0,r.kt)("p",null,"If the layer is used in an environment that does not support web workers, or you need to debug the loader code on the main thread, you may import the full loader like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {MVTLoader} from '@loaders.gl/mvt';\nnew MVTLayer({\n  loaders: [MVTLoader],\n  loadOptions: {worker: false}\n});\n")),(0,r.kt)("p",null,"Refer to each specific layer's documentation to see which loaders are used."),(0,r.kt)("h2",{id:"load-resource-without-an-url"},"Load Resource Without an URL"),(0,r.kt)("p",null,"In some use cases, resources do not exist at a static URL. For example, some applications construct images dynamically based on user input. Some applications receive arbitrary binary blobs from a server via a WebSocket connection."),(0,r.kt)("p",null,"Before reading on, remember that you don't have to use a loader if your app already knows how to interpret the content. For example, if you have the RGBA values of all pixels of an image. you can simply construct an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ImageData"},"ImageData")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new BitmapLayer({\n  image: new ImageData(pixels, 128, 128)\n})\n")),(0,r.kt)("p",null,"If you have a custom-formatted binary, consider the techniques in ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/performance#use-binary-data"},"using binary data"),"."),(0,r.kt)("p",null,"The following examples only address the use cases where you need a loader/parser to interpret the incoming data."),(0,r.kt)("h3",{id:"example-use-image-from-a-programmatically-generated-svg-string"},"Example: Use image from a programmatically generated SVG string"),(0,r.kt)("p",null,"The following code dynamically generates SVG icons and convert them to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"data URLs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'function createSVGIcon(n: number): string {\n  const label = n < 10 ? n.toString() : \'10+\';\n  return `\\\n  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <circle cx="12" cy="12" r="10" fill="#c00" stroke="#fa1" stroke-width="2"/>\n    <text x="12" y="12" fill="#fff" text-anchor="middle" alignment-baseline="middle" font-size="8">${label}</text>\n  </svg>`;\n}\n\n// Note that a xml string cannot be directly embedded in a data URL\n// it has to be either escaped or converted to base64.\nfunction svgToDataUrl(svg: string): string {\n  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;\n}\n\n// You may need base64 encoding if the SVG contains certain special characters\nfunction svgToDataUrlBase64(svg: string): string {\n  return `data:image/svg+xml;base64,${btoa(svg)}`;\n}\n\nconst layer = new IconLayer({\n  getIcon: d => {\n    url: svgToDataUrl(createSVGIcon(d.value)),\n    width: 24,\n    height: 24\n  }\n})\n')),(0,r.kt)("h3",{id:"example-parse-gltf-from-a-binary-blob"},"Example: Parse glTF from a binary blob"),(0,r.kt)("p",null,"The following code shows how to parse a glTF model that is already loaded into an ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," object."),(0,r.kt)("p",null,"There are two ways for deck.gl to load it. One is to create a blob URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const blob = new Blob([arraybuffer]);\nconst objectURL = URL.createObjectURL(blob);\n\nconst layer = new ScenegraphLayer({\n  scenegraph: objectURL\n});\n")),(0,r.kt)("p",null,"Or more directly, import the ",(0,r.kt)("a",{parentName:"p",href:"https://loaders.gl/modules/core/docs/api-reference/parse"},"parse")," utility from loaders.gl (already a dependency of deck.gl), which returns a promise:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {parse} from '@loaders.gl/core';\nimport {GLTFLoader} from '@loaders.gl/gltf';\n\nconst layer = new ScenegraphLayer({\n  scenegraph: parse(arraybuffer, GLTFLoader)\n})\n")))}g.isMDXComponent=!0}}]);