"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const l={},o="@deck.gl/mapbox",i={unversionedId:"api-reference/mapbox/overview",id:"api-reference/mapbox/overview",title:"@deck.gl/mapbox",description:"This module integrates deck.gl into the Mapbox GL JS API-compatible ecosystem.",source:"@site/../docs/api-reference/mapbox/overview.md",sourceDirName:"api-reference/mapbox",slug:"/api-reference/mapbox/overview",permalink:"/docs/api-reference/mapbox/overview",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/mapbox/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conversion Reference",permalink:"/docs/api-reference/json/conversion-reference"},next:{title:"MapboxOverlay",permalink:"/docs/api-reference/mapbox/mapbox-overlay"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Include the Standalone Bundle",id:"include-the-standalone-bundle",level:3},{value:"Install from NPM",id:"install-from-npm",level:3},{value:"Camera Syncronization between deck.gl and Mapbox",id:"camera-syncronization-between-deckgl-and-mapbox",level:3},{value:"Using mapbox-gl controls and plugins with deck.gl",id:"using-mapbox-gl-controls-and-plugins-with-deckgl",level:3},{value:"Mixing deck.gl layers and Mapbox layers",id:"mixing-deckgl-layers-and-mapbox-layers",level:3},{value:"Interleaved Renderer Compatibility",id:"interleaved-renderer-compatibility",level:4},{value:"Alternative Mapbox Integrations",id:"alternative-mapbox-integrations",level:2},{value:"Limitations",id:"limitations",level:2}],d={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deckglmapbox"},"@deck.gl/mapbox"),(0,r.kt)("p",null,"This module integrates deck.gl into the Mapbox GL JS API-compatible ecosystem. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It synchronizes a deck.gl ",(0,r.kt)("inlineCode",{parentName:"li"},"MapView")," with the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/guides/#camera"},"mapbox-gl camera"),"."),(0,r.kt)("li",{parentName:"ul"},"It allows deck.gl to be used with mapbox-gl ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers"},"controls")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/plugins/"},"plugins")," such as ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationControl"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GeolocateControl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mapbox-gl-geocoder"),"."),(0,r.kt)("li",{parentName:"ul"},"It adds the option to interleave deck.gl layers with the base map layers, such as drawing behind map labels, z-occlusion between deck.gl 3D objects and Mapbox buildings, etc.")),(0,r.kt)("p",null,"This module may be used in the React, Pure JS, and Scripting Environments. Visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/base-maps/using-with-mapbox"},"mapbox base map developer guide")," for examples of each option."),(0,r.kt)("p",null,"When you use this module, Mapbox is the root HTML element and deck.gl is the child, with Mapbox handling all user inputs. Some of deck.gl's features are therefore unavailable due to limitations of mapbox-gl's API, see ",(0,r.kt)("a",{parentName:"p",href:"#limitations"},"limitations"),". "),(0,r.kt)("p",null,"It may be easier to understand the concepts of the module if you are already a mapbox-gl developer."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This module is compatible with Mapbox GL JS forks. Known exceptions will be clearly marked. For more, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/base-maps/using-with-mapbox#compatibility-with-mapbox-gl-js-forks"},"Compatibility with Mapbox GL JS forks"))),(0,r.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/mapbox-layers.jpg"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"include-the-standalone-bundle"},"Include the Standalone Bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src=\'https://api.tiles.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js\'><\/script>\n<script type="text/javascript">\n  const {MapboxOverlay} = deck;\n<\/script>\n')),(0,r.kt)("h3",{id:"install-from-npm"},"Install from NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @deck.gl/mapbox\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {MapboxOverlay} from '@deck.gl/mapbox';\n")),(0,r.kt)("h3",{id:"camera-syncronization-between-deckgl-and-mapbox"},"Camera Syncronization between deck.gl and Mapbox"),(0,r.kt)("p",null,"This module keeps a deck.gl ",(0,r.kt)("inlineCode",{parentName:"p"},"MapView")," in sync with the mapbox-gl camera so that the base map and deck layers are always geospactially aligned. Some ",(0,r.kt)("inlineCode",{parentName:"p"},"Deck")," props, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"viewState"),", are ignored or have different behavior. See ",(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," constructor notes. Also, some camera features are unable to be fully synchronized due to mapbox-gl API limitations, see ",(0,r.kt)("a",{parentName:"p",href:"#limitations"},"limitations"),"."),(0,r.kt)("h3",{id:"using-mapbox-gl-controls-and-plugins-with-deckgl"},"Using mapbox-gl controls and plugins with deck.gl"),(0,r.kt)("p",null,"The Mapbox ecosystem offers many well-designed controls, from the basic functionalities of ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationControl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Popup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GeolocateControl"),", to vendor-service-bound UI implementations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"mapbox-gl-geocoder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mapbox-gl-directions"),". These libraries require that the Mapbox Map holds the source of truth of the camera state, instead of the normal ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/interactivity"},"state management")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"Deck"),". When you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MapboxOverlay")," classes from this module, deck.gl plays nice with all the mapbox-gl peripherals."),(0,r.kt)("h3",{id:"mixing-deckgl-layers-and-mapbox-layers"},"Mixing deck.gl layers and Mapbox layers"),(0,r.kt)("p",null,"Some important information in the Mapbox map could be hidden by a deck.gl visualization layer, and controlling opacity is not enough. A typical example of this is labels and roads, where it is desirable to have a deck.gl visualization layer render on top of the Mapbox geography, but where one might still want to see e.g. labels and/or roads. Alternatively, the deck.gl visualization should cover the ground, but not the roads and labels."),(0,r.kt)("p",null,"To inject a deck layer into the Mapbox stack add an ",(0,r.kt)("inlineCode",{parentName:"p"},"interleaved: true")," props to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/mapbox-overlay"},"MapboxOverlay")," control and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeId")," prop to any layer passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mapbox/mapbox-overlay"},"MapboxOverlay")," control."),(0,r.kt)("p",null,"Mapbox provides an example of ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/"},"finding the first label layer"),". For more sophisticated injection point lookups, refer to Mapbox' documentation on the format of Mapbox style layers, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapbox.com/mapbox-gl-js/style-spec/#layers"},"Mapbox Style Spec"),"."),(0,r.kt)("p",null,"In some cases, the application wants to add a deck.gl 3D layer (e.g. ArcLayer, HexagonLayer, GeoJsonLayer) on top of a Mapbox basemap, while seamlessly blend into the z-buffer. This will interleave the useful visualization layers from both the deck.gl and Mapbox layer catalogs. In this case, a ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeId")," is not needed."),(0,r.kt)("h4",{id:"interleaved-renderer-compatibility"},"Interleaved Renderer Compatibility"),(0,r.kt)("p",null,"The following table details renderer support across different versions of mapbox-gl and maplibre-gl. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/get-started/using-with-map#base-maps-renderers"},"base map renderers")," to learn about the differences between overlaid and interleaved renderers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Library"),(0,r.kt)("th",{parentName:"tr",align:null},"Overlaid (default)"),(0,r.kt)("th",{parentName:"tr",align:null},"Interleaved"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapbox-gl-js (before v2.13)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapbox-gl-js v2.13+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713 with ",(0,r.kt)("inlineCode",{parentName:"td"},"useWebGl2: true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapbox-gl-js v3+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maplibre-gl-js (before v3)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maplibre-gl-js v3+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713*")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*will fallback to WebGL1 if WebGL2 is not available")),(0,r.kt)("h2",{id:"alternative-mapbox-integrations"},"Alternative Mapbox Integrations"),(0,r.kt)("p",null,"If you're using deck.gl in a React or Scripting environment, you just want the base map as a back drop, and do not need mapbox-gl's UI controls or need to mix deck.gl and Mapbox layers, it is recommended that you do not use this module and instead use deck.gl as the root HTML element. Visit ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/base-maps/using-with-mapbox#using-deckgl-as-the-root-html-element"},"Using Deck.gl as the root HTML element")," for an example."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When using deck.gl's multi-view system, only one of the views can match the base map and receive interaction. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/mapbox/mapbox-overlay#multi-view-usage"},"using MapboxOverlay with multi-views")," for details."),(0,r.kt)("li",{parentName:"ul"},"When using deck.gl as Mapbox layers or controls, ",(0,r.kt)("inlineCode",{parentName:"li"},"Deck")," only receives a subset of user inputs delegated by ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),". Therefore, certain interactive callbacks like ",(0,r.kt)("inlineCode",{parentName:"li"},"onDrag"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"onInteractionStateChange")," are not available."),(0,r.kt)("li",{parentName:"ul"},"Mapbox/Maplibre's terrain features are partially supported. When a terrain is used, the camera of deck.gl and the base map should synchronize, however the deck.gl data with z=0 are rendered at the sea level and not aligned with the terrain surface."),(0,r.kt)("li",{parentName:"ul"},"Only Mercator projection is supported. Mapbox adaptive projection is not supported as their API doesn't expose the projection used."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"position")," property in ",(0,r.kt)("inlineCode",{parentName:"li"},"viewState")," has no equivalent in mapbox-gl.")))}c.isMDXComponent=!0}}]);