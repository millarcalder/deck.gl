"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return n?l.createElement(m,a(a({ref:t},d),{},{components:n})):l.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=n(83117),r=(n(67294),n(3905));const i={},a="FullscreenWidget",o={unversionedId:"api-reference/widgets/fullscreen-widget",id:"api-reference/widgets/fullscreen-widget",title:"FullscreenWidget",description:"This widget enlarges deck.gl to fill the full screen. Click the widget to enter or exit full screen.",source:"@site/../docs/api-reference/widgets/fullscreen-widget.md",sourceDirName:"api-reference/widgets",slug:"/api-reference/widgets/fullscreen-widget",permalink:"/docs/api-reference/widgets/fullscreen-widget",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/widgets/fullscreen-widget.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Props",id:"props",level:2},{value:"<code>id</code> (String)",id:"id",level:3},{value:"<code>placement</code> (String, optional)",id:"placement",level:3},{value:"<code>container</code> (HTMLElement, optional)",id:"container",level:3},{value:"<code>enterLabel</code> (String, optional)",id:"enterlabel",level:3},{value:"<code>exitLabel</code> (String, optional)",id:"exitlabel",level:3},{value:"<code>style</code> (Object, optional)",id:"style",level:3},{value:"<code>className</code> (String, optional)",id:"classname",level:3}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fullscreenwidget"},"FullscreenWidget"),(0,r.kt)("p",null,"This widget enlarges deck.gl to fill the full screen. Click the widget to enter or exit full screen."),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")," (String)"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'fullscreen'")),(0,r.kt)("p",null,"Unique identifier of the widget."),(0,r.kt)("h3",{id:"placement"},(0,r.kt)("inlineCode",{parentName:"h3"},"placement")," (String, optional)"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'top-left'")),(0,r.kt)("p",null,"Widget position within the view relative to the map container. Valid options are ",(0,r.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom-right"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"fill"),"."),(0,r.kt)("h3",{id:"container"},(0,r.kt)("inlineCode",{parentName:"h3"},"container")," (HTMLElement, optional)"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen#Compatible_elements"},"compatible DOM element")," which should be made full screen. By default, the map container element will be made full screen."),(0,r.kt)("h3",{id:"enterlabel"},(0,r.kt)("inlineCode",{parentName:"h3"},"enterLabel")," (String, optional)"),(0,r.kt)("p",null,"Tooltip message displayed while hovering a mouse over the widget when out of fullscreen."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Enter Fullscreen'")),(0,r.kt)("h3",{id:"exitlabel"},(0,r.kt)("inlineCode",{parentName:"h3"},"exitLabel")," (String, optional)"),(0,r.kt)("p",null,"Tooltip message displayed while hovering a mouse over the widget when fullscreen."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Exit Fullscreen'")),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")," (Object, optional)"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("p",null,"Additional CSS styles for the canvas."),(0,r.kt)("h3",{id:"classname"},(0,r.kt)("inlineCode",{parentName:"h3"},"className")," (String, optional)"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Class name to attach to the widget element. The element has the default class name of ",(0,r.kt)("inlineCode",{parentName:"p"},"deck-widget deck-fullscreen-widget"),"."))}u.isMDXComponent=!0}}]);