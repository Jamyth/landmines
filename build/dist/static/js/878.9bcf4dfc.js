(self.webpackChunklandmines=self.webpackChunklandmines||[]).push([[878],{7093:function(e,t,r){"use strict";r.d(t,{z:function(){return C}});var n=r(2947),a=r(917),i=r(63),o=r(2326),s=r(5284),l=r(3105),c=r(4461),u=r(3808),f={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},d=(0,l.m$)("span",{baseStyle:f});u.Ts&&(d.displayName="VisuallyHidden");var p=(0,l.m$)("input",{baseStyle:f});u.Ts&&(p.displayName="VisuallyHiddenInput");var m=r(7294);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),y=(0,i.G)(((e,t)=>{var r=(0,o.m)("Spinner",e),n=(0,s.Lr)(e),{label:a="Loading...",thickness:i="2px",speed:u="0.45s",emptyColor:f="transparent",className:p}=n,y=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(n,["label","thickness","speed","emptyColor","className"]),v=(0,c.cx)("chakra-spinner",p),b=h({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:f,borderLeftColor:f,animation:g+" "+u+" linear infinite"},r);return m.createElement(l.m$.div,h({ref:t,__css:b,className:v},y),a&&m.createElement(d,null,a))}));u.Ts&&(y.displayName="Spinner");var v=r(8554),b=r.n(v),x=r(8500);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var[_,S]=(0,x.k)({strict:!1,name:"ButtonGroupContext"}),w=(0,i.G)(((e,t)=>{var{size:r,colorScheme:n,variant:a,className:i,spacing:o="0.5rem",isAttached:s,isDisabled:u}=e,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,c.cx)("chakra-button__group",i),p=m.useMemo((()=>({size:r,colorScheme:n,variant:a,isDisabled:u})),[r,n,a,u]),h={display:"inline-flex"};return h=k({},h,s?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:o}}),m.createElement(_,{value:p},m.createElement(l.m$.div,k({ref:t,role:"group",__css:h,className:d},f)))}));function O(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}u.Ts&&(w.displayName="ButtonGroup");var C=(0,i.G)(((e,t)=>{var r,a=S(),i=(0,o.m)("Button",P({},a,e)),u=(0,s.Lr)(e),{isDisabled:f=(null==a?void 0:a.isDisabled),isLoading:d,isActive:p,isFullWidth:h,children:g,leftIcon:y,rightIcon:v,loadingText:x,iconSpacing:k="0.5rem",type:_,spinner:w,spinnerPlacement:C="start",className:j,as:T}=u,A=O(u,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),z=b()({},null!=(r=null==i?void 0:i._focus)?r:{},{zIndex:1}),M=P({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},i,!!a&&{_focus:z}),{ref:R,type:B}=function(e){var[t,r]=m.useState(!e),n=m.useCallback((e=>{e&&r("BUTTON"===e.tagName)}),[]),a=t?"button":void 0;return{ref:n,type:a}}(T);return m.createElement(l.m$.button,P({disabled:f||d,ref:(0,n.l)(t,R),as:T,type:null!=_?_:B,"data-active":(0,c.PB)(p),"data-loading":(0,c.PB)(d),__css:M,className:(0,c.cx)("chakra-button",j)},A),y&&!d&&m.createElement(N,{marginEnd:k},y),d&&"start"===C&&m.createElement(E,{className:"chakra-button__spinner--start",label:x,placement:"start"},w),d?x||m.createElement(l.m$.span,{opacity:0},g):g,d&&"end"===C&&m.createElement(E,{className:"chakra-button__spinner--end",label:x,placement:"end"},w),v&&!d&&m.createElement(N,{marginStart:k},v))}));u.Ts&&(C.displayName="Button");var N=e=>{var{children:t,className:r}=e,n=O(e,["children","className"]),a=m.isValidElement(t)?m.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,c.cx)("chakra-button__icon",r);return m.createElement(l.m$.span,P({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:i}),a)};u.Ts&&(N.displayName="ButtonIcon");var E=e=>{var{label:t,placement:r,children:n=m.createElement(y,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i}=e,o=O(e,["label","placement","spacing","children","className","__css"]),s=(0,c.cx)("chakra-button__spinner",a),u=P({display:"flex",alignItems:"center",position:t?"relative":"absolute",["start"===r?"marginEnd":"marginStart"]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},i);return m.createElement(l.m$.div,P({className:s},o,{__css:u}),n)};u.Ts&&(E.displayName="ButtonSpinner")},8017:function(e,t,r){"use strict";r.d(t,{xu:function(){return c}});var n=r(3105),a=r(63),i=r(3808),o=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var c=(0,n.m$)("div");i.Ts&&(c.displayName="Box");var u=(0,a.G)(((e,t)=>{var{size:r,centerContent:n=!0}=e,a=l(e,["size","centerContent"]),i=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(c,s({ref:t,boxSize:r,__css:s({},i,{flexShrink:0,flexGrow:0})},a))}));i.Ts&&(u.displayName="Square");var f=(0,a.G)(((e,t)=>{var{size:r}=e,n=l(e,["size"]);return o.createElement(u,s({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(f.displayName="Circle")},4096:function(e,t,r){"use strict";r.d(t,{k:function(){return l}});var n=r(63),a=r(3105),i=r(3808),o=r(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=(0,n.G)(((e,t)=>{var{direction:r,align:n,justify:i,wrap:l,basis:c,grow:u,shrink:f}=e,d=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),p={display:"flex",flexDirection:r,alignItems:n,justifyContent:i,flexWrap:l,flexBasis:c,flexGrow:u,flexShrink:f};return o.createElement(a.m$.div,s({ref:t,__css:p},d))}));i.Ts&&(l.displayName="Flex")},336:function(e,t,r){"use strict";r.d(t,{X:function(){return f}});var n=r(63),a=r(2326),i=r(5284),o=r(3105),s=r(4461),l=r(3808),c=r(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,n.G)(((e,t)=>{var r=(0,a.m)("Heading",e),n=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,i.Lr)(e),["className"]);return c.createElement(o.m$.h2,u({ref:t,className:(0,s.cx)("chakra-heading",e.className)},n,{__css:r}))}));l.Ts&&(f.displayName="Heading")},2947:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var n=r(3808);function a(e,t){if(null!=e)if((0,n.mf)(e))e(t);else try{e.current=t}catch(r){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>a(t,e)))}}},63:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var n=r(7294);function a(e){return n.forwardRef(e)}},3105:function(e,t,r){"use strict";r.d(t,{m$:function(){return O}});var n=r(6759),a=r(4651),i=r(658),o=r(7294),s=r(2122),l=r(7866),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,l.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(5387),d=r(444),p=r(4199),m=u,h=function(e){return"theme"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?m:h},y=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},v=function e(t,r){var n,a,i=t.__emotion_real===t,l=i&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var c=y(t,r,i),u=c||g(l),m=!u("as");return function(){var h=arguments,v=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&v.push("label:"+n+";"),null==h[0]||void 0===h[0].raw)v.push.apply(v,h);else{0,v.push(h[0][0]);for(var b=h.length,x=1;x<b;x++)v.push(h[x],h[0][x])}var k=(0,f.w)((function(e,t,r){var n=m&&e.as||l,i="",s=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=(0,o.useContext)(f.T)}"string"==typeof e.className?i=(0,d.f)(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var b=(0,p.O)(v.concat(s),t.registered,h);(0,d.M)(t,b,"string"==typeof n);i+=t.key+"-"+b.name,void 0!==a&&(i+=" "+a);var x=m&&void 0===c?g(n):u,k={};for(var _ in e)m&&"as"===_||x(_)&&(k[_]=e[_]);return k.className=i,k.ref=r,(0,o.createElement)(n,k)}));return k.displayName=void 0!==n?n:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=l,k.__emotion_styles=v,k.__emotion_forwardProp=c,Object.defineProperty(k,"toString",{value:function(){return"."+a}}),k.withComponent=function(t,n){return e(t,(0,s.Z)({},r,n,{shouldForwardProp:y(k,n,!0)})).apply(void 0,v)},k}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){v[e]=v(e)}));var b=v,x=new Set([...n.propNames,"textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),k=new Set(["htmlWidth","htmlHeight","htmlSize"]),_=e=>k.has(e)||!x.has(e),S=r(5284);function w(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var O=function(e,t){var r=null!=t?t:{},{baseStyle:o}=r,s=w(r,["baseStyle"]);s.shouldForwardProp||(s.shouldForwardProp=_);var l=(e=>{var{baseStyle:t}=e;return e=>{var{css:r,__css:o,sx:s}=e,l=w(e,["theme","css","__css","sx"]),c=(0,a.lw)(l,((e,t)=>(0,n.isStyleProp)(t))),u=(0,i.Pu)(t,e),f=Object.assign({},o,u,c,s),d=(0,n.css)(f)(e.theme);return r?[d,r]:d}})({baseStyle:o});return b(e,s)(l)};S.t6.forEach((e=>{O[e]=O(e)}))},5284:function(e,t,r){"use strict";r.d(t,{t6:function(){return a},Lr:function(){return i}});var n=r(4651),a=["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"];function i(e){return(0,n.CE)(e,["styleConfig","size","variant","colorScheme"])}},2326:function(e,t,r){"use strict";r.d(t,{j:function(){return h},m:function(){return m}});var n=r(4651),a=r(8554),i=r.n(a),o=r(658),s=r(7294),l=r(9590),c=r.n(l),u=r(4738),f=r(9676);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(){return d({},(0,u.If)(),{theme:(0,f.Fg)()})}function m(e,t,r){var a,l;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:u}=t,f=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:d,colorMode:m}=p(),h=(0,n.Wf)(d,"components."+e),g=u||h,y=i()({theme:d,colorMode:m},null!=(a=null==g?void 0:g.defaultProps)?a:{},(0,n.YU)((0,n.CE)(f,["children"]))),v=(0,s.useRef)({});return(0,s.useMemo)((()=>{if(g){var e,t,n,a,s,l,u=(0,o.Pu)(null!=(e=g.baseStyle)?e:{},y),f=(0,o.Pu)(null!=(t=null==(n=g.variants)?void 0:n[y.variant])?t:{},y),d=(0,o.Pu)(null!=(a=null==(s=g.sizes)?void 0:s[y.size])?a:{},y),p=i()({},u,d,f);null!=(l=r)&&l.isMultiPart&&g.parts&&g.parts.forEach((e=>{var t;p[e]=null!=(t=p[e])?t:{}})),c()(v.current,p)||(v.current=p)}return v.current}),[g,y,null==(l=r)?void 0:l.isMultiPart])}function h(e,t){return m(e,t,{isMultiPart:!0})}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],o[c[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}}}]);