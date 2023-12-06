"use strict";(self.webpackChunksandbox_gallery_canvas_editor=self.webpackChunksandbox_gallery_canvas_editor||[]).push([[761],{187:(t,e,o)=>{o.d(e,{_:()=>r,o:()=>i});const n="https://picsum.photos";async function r(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const r=await fetch("".concat(n,"/v2/list?page=").concat(e,"&limit=").concat(o)),i=(await r.json()).map((t=>{let{id:e,author:o,download_url:n}=t;return{id:e,author:o,preview:"https://picsum.photos/id/".concat(e,"/200"),src:n}}));return{hasMore:!(null===(t=r.headers.get("Link"))||void 0===t||!t.includes('rel="next"')),images:i}}async function i(t){const e=await fetch("".concat(n,"/id/").concat(t,"/info")),{author:o,download_url:r,height:i,width:a}=await e.json();return{author:o,src:r,height:i,width:a}}},9761:(t,e,o)=>{o.r(e),o.d(e,{default:()=>pt});var n=o(4514),r=o(4417),i=o(82),a=o(5477),s=o(9059),c=o(4453),l=o(7696),u=o(187),d=o(8669),m=o(390),p=o.t(m,2),h=o(2638),g=o(1398),v=o(839);function f(t,e,o,n,r){const[i,a]=m.useState((()=>r&&o?o(t).matches:n?n(t).matches:e));return(0,v.Z)((()=>{let e=!0;if(!o)return;const n=o(t),r=()=>{e&&a(n.matches)};return r(),n.addListener(r),()=>{e=!1,n.removeListener(r)}}),[t,o]),i}const w=p.useSyncExternalStore;function Z(t,e,o,n,r){const i=m.useCallback((()=>e),[e]),a=m.useMemo((()=>{if(r&&o)return()=>o(t).matches;if(null!==n){const{matches:e}=n(t);return()=>e}return i}),[i,t,n,r,o]),[s,c]=m.useMemo((()=>{if(null===o)return[i,()=>()=>{}];const e=o(t);return[()=>e.matches,t=>(e.addListener(t),()=>{e.removeListener(t)})]}),[i,o,t]);return w(c,s,a)}function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=(0,h.Z)(),n="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:r=!1,matchMedia:i=(n?window.matchMedia:null),ssrMatchMedia:a=null,noSsr:s=!1}=(0,g.Z)({name:"MuiUseMediaQuery",props:e,theme:o});let c="function"===typeof t?t(o):t;c=c.replace(/^@media( ?)/m,"");return(void 0!==w?Z:f)(c,r,i,a,s)}var x=o(3366),b=o(7462),I=o(147),M=o(3370),S=o(4729),P=o(6869),j=o(1293),L=o(2254);function k(t){return(0,L.Z)("MuiImageList",t)}(0,j.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);const N=m.createContext({});var R=o(2559);const W=["children","className","cols","component","rowHeight","gap","style","variant"],C=(0,S.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})((t=>{let{ownerState:e}=t;return(0,b.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})})),A=m.forwardRef((function(t,e){const o=(0,P.Z)({props:t,name:"MuiImageList"}),{children:n,className:r,cols:i=2,component:a="ul",rowHeight:s="auto",gap:c=4,style:l,variant:u="standard"}=o,d=(0,x.Z)(o,W),p=m.useMemo((()=>({rowHeight:s,gap:c,variant:u})),[s,c,u]);m.useEffect((()=>{0}),[]);const h="masonry"===u?(0,b.Z)({columnCount:i,columnGap:c},l):(0,b.Z)({gridTemplateColumns:"repeat(".concat(i,", 1fr)"),gap:c},l),g=(0,b.Z)({},o,{component:a,gap:c,rowHeight:s,variant:u}),v=(t=>{const{classes:e,variant:o}=t,n={root:["root",o]};return(0,I.Z)(n,k,e)})(g);return(0,R.jsx)(C,(0,b.Z)({as:a,className:(0,M.Z)(v.root,v[u],r),ref:e,style:h,ownerState:g},d,{children:(0,R.jsx)(N.Provider,{value:p,children:n})}))})),B=A;o(557);var F=o(3201);function D(t){return(0,L.Z)("MuiImageListItem",t)}const H=(0,j.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),T=["children","className","cols","component","rows","style"],_=(0,S.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{["& .".concat(H.img)]:e.img},e.root,e[o.variant]]}})((t=>{let{ownerState:e}=t;return(0,b.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(H.img)]:(0,b.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})})})),z=m.forwardRef((function(t,e){const o=(0,P.Z)({props:t,name:"MuiImageListItem"}),{children:n,className:r,cols:i=1,component:a="li",rows:s=1,style:c}=o,l=(0,x.Z)(o,T),{rowHeight:u="auto",gap:d,variant:p}=m.useContext(N);let h="auto";"woven"===p?h=void 0:"auto"!==u&&(h=u*s+d*(s-1));const g=(0,b.Z)({},o,{cols:i,component:a,gap:d,rowHeight:u,rows:s,variant:p}),v=(t=>{const{classes:e,variant:o}=t,n={root:["root",o],img:["img"]};return(0,I.Z)(n,D,e)})(g);return(0,R.jsx)(_,(0,b.Z)({as:a,className:(0,M.Z)(v.root,v[p],r),ref:e,style:(0,b.Z)({height:h,gridColumnEnd:"masonry"!==p?"span ".concat(i):void 0,gridRowEnd:"masonry"!==p?"span ".concat(s):void 0,marginBottom:"masonry"===p?d:void 0,breakInside:"masonry"===p?"avoid":void 0},c),ownerState:g},l,{children:m.Children.map(n,(t=>m.isValidElement(t)?"img"===t.type||(0,F.Z)(t,["Image"])?m.cloneElement(t,{className:(0,M.Z)(v.img,t.props.className)}):t:null))}))})),V=z;var E=o(1442),q=o(1846),O=o(3299);function G(t){return(0,L.Z)("MuiLink",t)}const K=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var U=o(9001),Q=o(6128);const Y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},J=t=>{let{theme:e,ownerState:o}=t;const n=(t=>Y[t]||t)(o.color),r=(0,U.DW)(e,"palette.".concat(n),!1)||o.color,i=(0,U.DW)(e,"palette.".concat(n,"Channel"));return"vars"in e&&i?"rgba(".concat(i," / 0.4)"):(0,Q.Fq)(r,.4)},X=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],$=(0,S.ZP)(a.Z,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e["underline".concat((0,E.Z)(o.underline))],"button"===o.component&&e.button]}})((t=>{let{theme:e,ownerState:o}=t;return(0,b.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,b.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(K.focusVisible)]:{outline:"auto"}})})),tt=m.forwardRef((function(t,e){const o=(0,P.Z)({props:t,name:"MuiLink"}),{className:n,color:r="primary",component:i="a",onBlur:a,onFocus:s,TypographyClasses:c,underline:l="always",variant:u="inherit",sx:d}=o,p=(0,x.Z)(o,X),{isFocusVisibleRef:h,onBlur:g,onFocus:v,ref:f}=(0,q.Z)(),[w,Z]=m.useState(!1),y=(0,O.Z)(e,f),S=(0,b.Z)({},o,{color:r,component:i,focusVisible:w,underline:l,variant:u}),j=(t=>{const{classes:e,component:o,focusVisible:n,underline:r}=t,i={root:["root","underline".concat((0,E.Z)(r)),"button"===o&&"button",n&&"focusVisible"]};return(0,I.Z)(i,G,e)})(S);return(0,R.jsx)($,(0,b.Z)({color:r,className:(0,M.Z)(j.root,n),classes:c,component:i,onBlur:t=>{g(t),!1===h.current&&Z(!1),a&&a(t)},onFocus:t=>{v(t),!0===h.current&&Z(!0),s&&s(t)},ref:y,ownerState:S,variant:u,sx:[...Object.keys(Y).includes(r)?[]:[{color:r}],...Array.isArray(d)?d:[d]]},p))}));function et(t){return(0,L.Z)("MuiImageListItemBar",t)}(0,j.Z)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const ot=["actionIcon","actionPosition","className","subtitle","title","position"],nt=(0,S.ZP)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e["position".concat((0,E.Z)(o.position))]]}})((t=>{let{theme:e,ownerState:o}=t;return(0,b.Z)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===o.position&&{bottom:0},"top"===o.position&&{top:0},"below"===o.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),rt=(0,S.ZP)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.titleWrap,e["titleWrap".concat((0,E.Z)(o.position))],o.actionIcon&&e["titleWrapActionPos".concat((0,E.Z)(o.actionPosition))]]}})((t=>{let{theme:e,ownerState:o}=t;return(0,b.Z)({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},"below"===o.position&&{padding:"6px 0 12px",color:"inherit"},o.actionIcon&&"left"===o.actionPosition&&{paddingLeft:0},o.actionIcon&&"right"===o.actionPosition&&{paddingRight:0})})),it=(0,S.ZP)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(t,e)=>e.title})((t=>{let{theme:e}=t;return{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),at=(0,S.ZP)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(t,e)=>e.subtitle})((t=>{let{theme:e}=t;return{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),st=(0,S.ZP)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.actionIcon,e["actionIconActionPos".concat((0,E.Z)(o.actionPosition))]]}})((t=>{let{ownerState:e}=t;return(0,b.Z)({},"left"===e.actionPosition&&{order:-1})})),ct=m.forwardRef((function(t,e){const o=(0,P.Z)({props:t,name:"MuiImageListItemBar"}),{actionIcon:n,actionPosition:r="right",className:i,subtitle:a,title:s,position:c="bottom"}=o,l=(0,x.Z)(o,ot),u=(0,b.Z)({},o,{position:c,actionPosition:r}),d=(t=>{const{classes:e,position:o,actionIcon:n,actionPosition:r}=t,i={root:["root","position".concat((0,E.Z)(o))],titleWrap:["titleWrap","titleWrap".concat((0,E.Z)(o)),n&&"titleWrapActionPos".concat((0,E.Z)(r))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat((0,E.Z)(r))]};return(0,I.Z)(i,et,e)})(u);return(0,R.jsxs)(nt,(0,b.Z)({ownerState:u,className:(0,M.Z)(d.root,i),ref:e},l,{children:[(0,R.jsxs)(rt,{ownerState:u,className:d.titleWrap,children:[(0,R.jsx)(it,{className:d.title,children:s}),a?(0,R.jsx)(at,{className:d.subtitle,children:a}):null]}),n?(0,R.jsx)(st,{ownerState:u,className:d.actionIcon,children:n}):null]}))}));var lt=o(5400);function ut(t){let{images:e}=t;const o=(0,d.Z)(),n=y(o.breakpoints.up("lg")),r=y(o.breakpoints.up("md")),i=n?5:r?3:2;return(0,R.jsx)(B,{variant:"masonry",cols:i,gap:8,children:e.map((t=>{let{id:e,preview:o,author:n,src:r}=t;return(0,R.jsx)(V,{children:(0,R.jsxs)(tt,{component:lt.rU,to:"/edit/".concat(e),underline:"none",color:"black",children:[(0,R.jsx)(s.Z,{children:(0,R.jsx)("img",{width:"100%",src:o,alt:"",loading:"lazy"})}),(0,R.jsx)(ct,{subtitle:"by ".concat(n),position:"below"})]})},e)}))})}var dt=o(6585),mt=o(5545);function pt(){const{pageNumber:t,onPrevPage:e,onNextPage:o}=function(){const t=(0,mt.s0)(),{page:e}=(0,mt.UO)(),o=Number(null!==e&&void 0!==e?e:1);return{pageNumber:o,onPrevPage:()=>t("/page/".concat(o-1)),onNextPage:()=>t("/page/".concat(o+1))}}(),{isLoading:d,error:m,data:p}=(0,n.useQuery)({queryKey:["gallery",t],queryFn:()=>(0,u._)(t),keepPreviousData:!0});return d?(0,R.jsx)(dt.g,{}):!p||m?(0,R.jsx)(R.Fragment,{children:"An error has occurred"}):(0,R.jsxs)(r.Z,{direction:"row",spacing:2,height:"100vh",justifyContent:"space-between",children:[(0,R.jsxs)(i.Z,{disabled:t<=1,onClick:e,children:[(0,R.jsx)(c.Z,{}),(0,R.jsx)(a.Z,{children:"Prev"})]}),(0,R.jsx)(s.Z,{overflow:"auto",children:(0,R.jsx)(ut,{images:p.images})}),(0,R.jsxs)(i.Z,{disabled:!p.hasMore,onClick:o,children:[(0,R.jsx)(a.Z,{children:"Next"}),(0,R.jsx)(l.Z,{})]})]})}},4453:(t,e,o)=>{var n=o(4836);e.Z=void 0;var r=n(o(6830)),i=o(2559),a=(0,r.default)((0,i.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");e.Z=a},7696:(t,e,o)=>{var n=o(4836);e.Z=void 0;var r=n(o(6830)),i=o(2559),a=(0,r.default)((0,i.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");e.Z=a}}]);
//# sourceMappingURL=761.f63e075b.chunk.js.map