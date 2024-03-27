"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(83117),a=(n(67294),n(3905));const r={},o="Viewport",l={unversionedId:"api-reference/core/viewport",id:"api-reference/core/viewport",title:"Viewport",description:"Read the article detailing deck.gl's Views and Projections system.",source:"@site/../docs/api-reference/core/viewport.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/viewport",permalink:"/docs/api-reference/core/viewport",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/viewport.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"project64 (Shader Module)",permalink:"/docs/api-reference/core/project64"},next:{title:"GlobeViewport (Experimental)",permalink:"/docs/api-reference/core/globe-viewport"}},p={},s=[{value:"Overview of Viewport Classes",id:"overview-of-viewport-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>equals</code>",id:"equals",level:5},{value:"<code>project</code>",id:"project",level:5},{value:"<code>unproject</code>",id:"unproject",level:5},{value:"<code>projectPosition</code>",id:"projectposition",level:5},{value:"<code>unprojectPosition</code>",id:"unprojectposition",level:5},{value:"<code>getBounds</code>",id:"getbounds",level:5},{value:"<code>getFrustumPlanes</code>",id:"getfrustumplanes",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Source",id:"source",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"viewport"},"Viewport"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Read the article detailing deck.gl's ",(0,a.kt)("a",{parentName:"p",href:"/docs/developer-guide/views"},"Views and Projections")," system.")),(0,a.kt)("p",null,"A deck.gl ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," is essentially a geospatially enabled camera, and combines a number of responsibilities, which can project and unproject 3D coordinates to the screen."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," classes are focused on mathematical operations such as coordinate projection/unprojection, and calculation of ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"projection")," matrices and other uniforms needed by the WebGL2/WebGPU vertex shaders. The basic ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport"),' class is a generic geospatially enabled version of the typical 3D "camera" class you would find in most 3D/WebGL2/OpenGL libraries.'),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," class can certainly be used directly if you need and are able to calculate your own projection matrices, you typically do not directly create ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," instances. Instead, ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," classes are created using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/view"},"View")," class descriptors and the current ",(0,a.kt)("inlineCode",{parentName:"p"},"viewState"),"."),(0,a.kt)("h2",{id:"overview-of-viewport-classes"},"Overview of Viewport Classes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Viewport Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/viewport"},(0,a.kt)("inlineCode",{parentName:"a"},"Viewport"))),(0,a.kt)("td",{parentName:"tr",align:null},"The base viewport has to be supplied view and projection matrices. It is typically only instantiated directly if the application needs to work with viewports that have been supplied from external sources, such as the ",(0,a.kt)("inlineCode",{parentName:"td"},"WebVR")," API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/web-mercator-viewport"},(0,a.kt)("inlineCode",{parentName:"a"},"WebMercatorViewport"))),(0,a.kt)("td",{parentName:"tr",align:null},"While all ",(0,a.kt)("inlineCode",{parentName:"td"},"Viewport")," subclasses are geospatially enabled, this class renders from a perspective that matches a typical top-down map and is designed to synchronize perfectly with a mapbox-gl base map (even in 3D enabled perspective mode).")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport")," class is normally not instantiated directly. The ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/view"},(0,a.kt)("inlineCode",{parentName:"a"},"View"))," class is more commonly used by applications. deck.gl automatically creates ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewport"),"s from ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"viewState")," when needed, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"View.makeViewport")," method."),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Viewport({width: 500, height: 500, viewMatrix, projectionMatrix, ...});\n")),(0,a.kt)("p",null,"General Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),", optional) - x position of viewport top-left corner. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),", optional) - y position of viewport top-left corner. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - Width of viewport. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - Height of viewport. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,a.kt)("p",null,"View Matrix Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewMatrix")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Array[16]"),", optional) - 4x4 view matrix. Defaults to the identity matrix.")),(0,a.kt)("p",null,"Position and Geospatial Anchor Options (Optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"latitude")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", optional) - Center of viewport on map (alternative to center). Must be provided if constructing a geospatial viewport.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"longitude")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", optional) - Center of viewport on map (alternative to center). Must be provided if constructing a geospatial viewport.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"zoom")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", optional) - ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/Zoom_levels"},"zoom level")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"focalDistance")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", optional) - modifier of viewport scale if ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")," is not supplied. Corresponds to the number of pixels per meter. Default to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"position")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Array[3]"),", optional) - Position of viewport camera. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 0, 0]"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"modelMatrix")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Array[16]"),", optional) - Optional 4x4 model matrix applied to position."))),(0,a.kt)("p",null,"Projection Matrix Parameters."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"projectionMatrix")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Array[16]"),", optional) - 4x4 projection matrix.")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"projectionMatrix")," is not supplied, an attempt is made to build from the remaining parameters. Otherwise the remaining parameters will be ignored."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fovy")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),", optional) - Field of view covered by camera, in the perspective case. In degrees. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"75"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"near")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),", optional) - Distance of near clipping plane. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0.1"),". (Note that in geospatial viewports, this actual distance used is scaled by the height of the screen)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"far")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),", optional) - Distance of far clipping plane. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),". (Note that in geospatial viewports, this actual distance used is scaled by the height of the screen)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"orthographic")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"),", optional) - whether to create an orthographic or perspective projection matrix. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," (perspective projection).")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h5",{id:"equals"},(0,a.kt)("inlineCode",{parentName:"h5"},"equals")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewport")," (Viewport) - The viewport to compare with.")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," if the given viewport is identical to the current one.")),(0,a.kt)("h5",{id:"project"},(0,a.kt)("inlineCode",{parentName:"h5"},"project")),(0,a.kt)("p",null,"Projects world coordinates to pixel coordinates on screen."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coordinates")," (Array) - ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y, Z]")," in world units. ",(0,a.kt)("inlineCode",{parentName:"li"},"Z")," is default to ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," if not supplied."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," (Object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topLeft")," (Boolean, optional) - Whether projected coords are top left. Default to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[x, y]")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]")," in pixels coordinates. ",(0,a.kt)("inlineCode",{parentName:"li"},"z")," is pixel depth.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y]"),": returns ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y]"),"."),(0,a.kt)("li",{parentName:"ul"},"If input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y, Z]"),": returns ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]"),".")))),(0,a.kt)("h5",{id:"unproject"},(0,a.kt)("inlineCode",{parentName:"h5"},"unproject")),(0,a.kt)("p",null,"Unproject pixel coordinates on screen into world coordinates."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pixels")," (Array) - ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]")," in pixel coordinates. Passing a ",(0,a.kt)("inlineCode",{parentName:"li"},"z")," is optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opts")," (Object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topLeft")," (Boolean, optional) - Whether projected coords are top left. Default to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"targetZ")," (Number, optional) - If pixel depth ",(0,a.kt)("inlineCode",{parentName:"li"},"z")," is not specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"pixels"),", this is used as the elevation plane to unproject onto. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),".")))),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y]")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y, Z]")," in world coordinates.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y]")," without specifying ",(0,a.kt)("inlineCode",{parentName:"li"},"opts.targetZ"),": returns ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y]"),"."),(0,a.kt)("li",{parentName:"ul"},"If input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y]")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"opts.targetZ"),": returns ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y, targetZ]"),"."),(0,a.kt)("li",{parentName:"ul"},"If input is ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]"),": returns ",(0,a.kt)("inlineCode",{parentName:"li"},"[X, Y, Z]"),".")))),(0,a.kt)("h5",{id:"projectposition"},(0,a.kt)("inlineCode",{parentName:"h5"},"projectPosition")),(0,a.kt)("p",null,"Projects latitude, longitude (and altitude) to coordinates in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/project"},"common space"),"."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coordinates")," (Array) - ",(0,a.kt)("inlineCode",{parentName:"li"},"[lng, lat, altitude]")," Passing an altitude is optional.")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]")," in WebMercator coordinates.")),(0,a.kt)("h5",{id:"unprojectposition"},(0,a.kt)("inlineCode",{parentName:"h5"},"unprojectPosition")),(0,a.kt)("p",null,"Projects a coordinate from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/project"},"common space")," to latitude, longitude and altitude."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coordinates")," (Array) - ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y, z]")," in the WebMercator world. ",(0,a.kt)("inlineCode",{parentName:"li"},"z")," is optional.")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[longitude, latitude, altitude]"))),(0,a.kt)("h5",{id:"getbounds"},(0,a.kt)("inlineCode",{parentName:"h5"},"getBounds")),(0,a.kt)("p",null,"Extracts the axis-aligned bounding box of the current visible area."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," (Object, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options.z")," (Number, optional) - To calculate a bounding volume for fetching 3D data, this option can be used to get the bounding box at a specific elevation. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),".")))),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[minX, minY, maxX, maxY]")," that defines the smallest orthogonal bounds that encompasses the visible region.")),(0,a.kt)("h5",{id:"getfrustumplanes"},(0,a.kt)("inlineCode",{parentName:"h5"},"getFrustumPlanes")),(0,a.kt)("p",null,"Extract view frustum planes of the current camera. Each plane is defined by its normal ",(0,a.kt)("inlineCode",{parentName:"p"},"normal")," and distance from\nthe origin ",(0,a.kt)("inlineCode",{parentName:"p"},"distance")," (such that point ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," is on the plane if ",(0,a.kt)("inlineCode",{parentName:"p"},"dot(normal, x) === distance"),") in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/project"},"common space"),"."),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{near: {normal, distance}, far: {normal, distance}, left: {normal, distance}, right: {normal, distance}, top: {normal, distance}, bottom: {normal, distance}}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Vector3} from '@math.gl/core';\n\n// Culling tests must be done in common space\nconst commonPosition = new Vector3(viewport.projectPosition(point));\n\n// Extract frustum planes based on current view.\nconst frustumPlanes = viewport.getFrustumPlanes();\nlet outDir = null;\n\n// Check position against each plane\nfor (const dir in frustumPlanes) {\n  const plane = frustumPlanes[dir];\n  if (commonPosition.dot(plane.normal) > plane.distance) {\n    outDir = dir;\n    break;\n  }\n}\nif (outDir) {\n  console.log(`Point is outside of the ${outDir} plane`);\n} else {\n  console.log('Point is visible');\n}\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Viewport")," class and its subclasses are perhaps best thought of as geospatially enabled counterparts of the typical ",(0,a.kt)("inlineCode",{parentName:"li"},"Camera")," classes found in most 3D libraries."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Viewport")," class works together with the ",(0,a.kt)("inlineCode",{parentName:"li"},"project")," shader module and generates the uniforms that module needs to project correctly in GLSL code."),(0,a.kt)("li",{parentName:"ul"},"Accordingly, a main function of viewports is to generate WebGL2/WebGPU compatible view and projection matrices (column-major format)."),(0,a.kt)("li",{parentName:"ul"},"Functions (including projection and unprojection of coordinates) are available both in JavaScript and in GLSL, so that layers can do consistent projection calculations in both GLSL and JavaScript."),(0,a.kt)("li",{parentName:"ul"},"To support pixel project/unproject functions (in addition to the clipspace projection that Camera classes typically manage), the ",(0,a.kt)("inlineCode",{parentName:"li"},"Viewport")," is also aware of the viewport extents."),(0,a.kt)("li",{parentName:"ul"},"In geospatial setups, Viewports can contain geospatial anchors.")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/9.0-release/modules/core/src/viewports/viewport.ts"},"modules/core/src/viewports/viewport.ts")))}m.isMDXComponent=!0}}]);