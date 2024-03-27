"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},90369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},o="Frequently Asked Questions",l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"deck.gl is designed to be easy to use, however it is built on top of a complex technology (WebGL2/WebGPU) and supports a functional/reactive programming paradigm which many users are initially unfamiliar with.",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to deck.gl",permalink:"/docs/contributing"},next:{title:"Installing and Running Examples",permalink:"/docs/get-started/getting-started"}},s={},p=[{value:"Installing npm modules, learning React, it is just too much!",id:"installing-npm-modules-learning-react-it-is-just-too-much",level:2},{value:"Layer pixels render randomly on top of each other",id:"layer-pixels-render-randomly-on-top-of-each-other",level:2},{value:"Should I really regenerate all layers every time something changes?",id:"should-i-really-regenerate-all-layers-every-time-something-changes",level:2},{value:"I can&#39;t &quot;extend&quot; my Custom Layer",id:"i-cant-extend-my-custom-layer",level:2},{value:"How do I <strong>debug</strong> deck.gl applications?",id:"how-do-i-debug-deckgl-applications",level:2},{value:"How do I <strong>test</strong> deck.gl applications?",id:"how-do-i-test-deckgl-applications",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("p",null,"deck.gl is designed to be easy to use, however it is built on top of a complex technology (WebGL2/WebGPU) and supports a functional/reactive programming paradigm which many users are initially unfamiliar with."),(0,r.kt)("h2",{id:"installing-npm-modules-learning-react-it-is-just-too-much"},"Installing npm modules, learning React, it is just too much!"),(0,r.kt)("p",null,"Not to worry, there are easier ways to use deck.gl:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scripting")," - deck.gl has a scripting API that allows you get started just by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," statement to your HTML to use standard JavaScript. For an easy introduction to deck.gl scripting, see our ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/vis-gl/start-scripting-with-deck-gl-c9036d7a6011"},"blog post"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON Layers")," - It is even possible to use deck.gl without programming, by specifying deck.gl layers using a simple JSON format. See ",(0,r.kt)("a",{parentName:"p",href:"https://deck.gl/playground"},"declarative playground"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"kepler.gl")," - If scripting JSON is also too much, and you just want to play around with deck.gl visualizations in a polished application user interface, please check out ",(0,r.kt)("a",{parentName:"p",href:"http://kepler.gl/"},"kepler.gl"),"."))),(0,r.kt)("h2",{id:"layer-pixels-render-randomly-on-top-of-each-other"},"Layer pixels render randomly on top of each other"),(0,r.kt)("p",null,"You are likely experiencing a well-known issue in 3D graphics known as Z-fighting. The good news is that there are many ways to mitigate Z-fighting and deck.gl provides several mechanisms to help you. To get started, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/tips-and-tricks"},"tips and tricks")," article."),(0,r.kt)("h2",{id:"should-i-really-regenerate-all-layers-every-time-something-changes"},"Should I really regenerate all layers every time something changes?"),(0,r.kt)("p",null,"Q: If I wanted to, say, change the opacity of a layer, Is my only option to create a new layer with the same Id and different properties?"),(0,r.kt)("p",null,'Yes. deck.gl is a "reactive" application architecture and is optimized to be used like this. The layer and its props are essentially only a "descriptor", deck.gl matches and "diffs" the layers under the hood and only does the necessary changes based on actual differences compared to last layer.'),(0,r.kt)("p",null,'This is a "functional" take on programming, and it parallels key ideas in the widely used React library. The reactive architecture has big benefits when writing larger programs, but these are not as evident when writing smaller scripts.'),(0,r.kt)("p",null,'If you are coming from a more "imperative" programming experience, it can initially seem a little counter-intuitive (especially from a performance perspective). But in spite of how the API looks, performance should be very good, if this is not the case you are likely doing something else wrong.'),(0,r.kt)("p",null,"For more information, see the article about ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/performance"},"updates"),"."),(0,r.kt)("h2",{id:"i-cant-extend-my-custom-layer"},'I can\'t "extend" my Custom Layer'),(0,r.kt)("p",null,"Q: Why does deck.gl call ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.seal")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layer")," base class? I can't add members to my subclass."),(0,r.kt)("p",null,'An important thing to understand about layer instances is that they are essentially just "disposable descriptors". All permanent state is stored in the ',(0,r.kt)("inlineCode",{parentName:"p"},"layer.state"),' object, which "moves" between layers.'),(0,r.kt)("p",null,"Every time you change your layer, you create a new layer and pass it to Deck or DeckGL. Internally DeckGL matches new layers with old layers, and the old layers are released for garbage collection. So storing data on the layer itself typically does not make sense."),(0,r.kt)("h2",{id:"how-do-i-debug-deckgl-applications"},"How do I ",(0,r.kt)("strong",{parentName:"h2"},"debug")," deck.gl applications?"),(0,r.kt)("p",null,"Both deck.gl and luma.gl have powerful logging capabilities."),(0,r.kt)("p",null,"See the article about ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/debugging"},"debugging"),"."),(0,r.kt)("h2",{id:"how-do-i-test-deckgl-applications"},"How do I ",(0,r.kt)("strong",{parentName:"h2"},"test")," deck.gl applications?"),(0,r.kt)("p",null,"Q: It is hard to test WebGL2/WebGPU based applications, assuming deck.gl is no different?"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("inlineCode",{parentName:"p"},"@deck.gl/test-utils"),", which (among other things) supports visual regression testing."))}u.isMDXComponent=!0}}]);