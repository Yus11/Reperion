(self.webpackChunkcms=self.webpackChunkcms||[]).push([[1661],{1107:(h,x,n)=>{var a=n(84856),f=n(52593),m=f(a);h.exports=m},92403:(h,x,n)=>{var a=n(1107),f=n(47727);function m(u,d){var g=-1,l=f(u)?Array(u.length):[];return a(u,function(y,b,w){l[++g]=d(y,b,w)}),l}h.exports=m},16429:(h,x,n)=>{var a=n(36393),f=n(82393),m=n(90040),u=n(92403),d=n(63135),g=n(20435),l=n(9998),y=n(51339),b=n(26126);function w(P,O,v){O.length?O=a(O,function(E){return b(E)?function(M){return f(M,E.length===1?E[0]:E)}:E}):O=[y];var j=-1;O=a(O,g(m));var R=u(P,function(E,M,S){var C=a(O,function(k){return k(E)});return{criteria:C,index:++j,value:E}});return d(R,function(E,M){return l(E,M,v)})}h.exports=w},58200:(h,x,n)=>{var a=n(31507),f=n(55164);function m(u,d){return a(u,d,function(g,l){return f(u,l)})}h.exports=m},31507:(h,x,n)=>{var a=n(82393),f=n(67937),m=n(37345);function u(d,g,l){for(var y=-1,b=g.length,w={};++y<b;){var P=g[y],O=a(d,P);l(O,P)&&f(w,m(P,d),O)}return w}h.exports=u},63135:h=>{function x(n,a){var f=n.length;for(n.sort(a);f--;)n[f]=n[f].value;return n}h.exports=x},17654:(h,x,n)=>{var a=n(85194);function f(m,u){if(m!==u){var d=m!==void 0,g=m===null,l=m===m,y=a(m),b=u!==void 0,w=u===null,P=u===u,O=a(u);if(!w&&!O&&!y&&m>u||y&&b&&P&&!w&&!O||g&&b&&P||!d&&P||!l)return 1;if(!g&&!y&&!O&&m<u||O&&d&&l&&!g&&!y||w&&d&&l||!b&&l||!P)return-1}return 0}h.exports=f},9998:(h,x,n)=>{var a=n(17654);function f(m,u,d){for(var g=-1,l=m.criteria,y=u.criteria,b=l.length,w=d.length;++g<b;){var P=a(l[g],y[g]);if(P){if(g>=w)return P;var O=d[g];return P*(O=="desc"?-1:1)}}return m.index-u.index}h.exports=f},52593:(h,x,n)=>{var a=n(47727);function f(m,u){return function(d,g){if(d==null)return d;if(!a(d))return m(d,g);for(var l=d.length,y=u?l:-1,b=Object(d);(u?y--:++y<l)&&g(b[y],y,b)!==!1;);return d}}h.exports=f},25003:(h,x,n)=>{var a=n(62186),f=n(3243);function m(u,d,g,l,y,b){return f(u)&&f(d)&&(b.set(d,u),a(u,d,void 0,m,b),b.delete(d)),u}h.exports=m},75719:(h,x,n)=>{var a=n(51751),f=n(52431),m=n(25003),u=n(2897),d=f(function(g){return g.push(void 0,m),a(u,void 0,g)});h.exports=d},2897:(h,x,n)=>{var a=n(62186),f=n(48205),m=f(function(u,d,g,l){a(u,d,g,l)});h.exports=m},47184:(h,x,n)=>{var a=n(58200),f=n(16065),m=f(function(u,d){return u==null?{}:a(u,d)});h.exports=m},8243:(h,x,n)=>{var a=n(93367),f=n(16429),m=n(52431),u=n(65145),d=m(function(g,l){if(g==null)return[];var y=l.length;return y>1&&u(g,l[0],l[1])?l=[]:y>2&&u(l[0],l[1],l[2])&&(l=[l[0]]),f(g,a(l,1),[])});h.exports=d},9217:(h,x,n)=>{"use strict";n.d(x,{Z:()=>vt});var a=n(48627),f=n(27279),m=n(12439),u=n(80174),d=n(58471),g=n(89651),l=n(20466),y=n(71285);function b(t,s){return Object.keys(t).reduce(function(e,r){return e[r]=(0,a.pi)({timeZone:s},t[r]),e},{})}function w(t,s){var e=Object.keys((0,a.pi)((0,a.pi)({},t),s));return e.reduce(function(r,i){return r[i]=(0,a.pi)((0,a.pi)({},t[i]||{}),s[i]||{}),r},{})}function P(t,s){if(!s)return t;var e=g.C.formats;return(0,a.pi)((0,a.pi)((0,a.pi)({},e),t),{date:w(b(e.date,s),b(t.date||{},s)),time:w(b(e.time,s),b(t.time||{},s))})}var O=function(t,s,e,r,i){var o=t.locale,c=t.formats,p=t.messages,T=t.defaultLocale,F=t.defaultFormats,L=t.fallbackOnEmptyString,B=t.onError,N=t.timeZone,J=t.defaultRichTextElements;e===void 0&&(e={id:""});var V=e.id,I=e.defaultMessage;(0,d.kG)(!!V,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var A=String(V),D=p&&Object.prototype.hasOwnProperty.call(p,A)&&p[A];if(Array.isArray(D)&&D.length===1&&D[0].type===y.wD.literal)return D[0].value;if(!r&&D&&typeof D=="string"&&!J)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=(0,a.pi)((0,a.pi)({},J),r||{}),c=P(c,N),F=P(F,N),!D){if(L===!1&&D==="")return D;if((!I||o&&o.toLowerCase()!==T.toLowerCase())&&B(new l.$6(e,o)),I)try{var W=s.getMessageFormat(I,T,F,i);return W.format(r)}catch(U){return B(new l.X9('Error formatting default message for: "'.concat(A,'", rendering default message verbatim'),o,e,U)),typeof I=="string"?I:A}return A}try{var W=s.getMessageFormat(D,o,c,(0,a.pi)({formatters:s},i||{}));return W.format(r)}catch(U){B(new l.X9('Error formatting message: "'.concat(A,'", using ').concat(I?"default message":"id"," as fallback."),o,e,U))}if(I)try{var W=s.getMessageFormat(I,T,F,i);return W.format(r)}catch(U){B(new l.X9('Error formatting the default message for: "'.concat(A,'", rendering message verbatim'),o,e,U))}return typeof D=="string"?D:typeof I=="string"?I:A},v=n(26054),j=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function R(t,s,e){var r=t.locale,i=t.formats,o=t.onError;e===void 0&&(e={});var c=e.format,p=c&&(0,v.TB)(i,"number",c,o)||{},T=(0,v.L6)(e,j,p);return s(r,T)}function E(t,s,e,r){r===void 0&&(r={});try{return R(t,s,r).format(e)}catch(i){t.onError(new l.Qe("Error formatting number.",t.locale,i))}return String(e)}function M(t,s,e,r){r===void 0&&(r={});try{return R(t,s,r).formatToParts(e)}catch(i){t.onError(new l.Qe("Error formatting number.",t.locale,i))}return[]}var S=n(35993),C=["numeric","style"];function k(t,s,e){var r=t.locale,i=t.formats,o=t.onError;e===void 0&&(e={});var c=e.format,p=!!c&&(0,v.TB)(i,"relative",c,o)||{},T=(0,v.L6)(e,C,p);return s(r,T)}function z(t,s,e,r,i){i===void 0&&(i={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||t.onError(new S.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,S.jK.MISSING_INTL_API));try{return k(t,s,i).format(e,r)}catch(c){t.onError(new l.Qe("Error formatting relative time.",t.locale,c))}return String(e)}var Z=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function K(t,s,e,r){var i=t.locale,o=t.formats,c=t.onError,p=t.timeZone;r===void 0&&(r={});var T=r.format,F=(0,a.pi)((0,a.pi)({},p&&{timeZone:p}),T&&(0,v.TB)(o,s,T,c)),L=(0,v.L6)(r,Z,F);return s==="time"&&!L.hour&&!L.minute&&!L.second&&!L.timeStyle&&!L.dateStyle&&(L=(0,a.pi)((0,a.pi)({},L),{hour:"numeric",minute:"numeric"})),e(i,L)}function q(t,s){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i=e[0],o=e[1],c=o===void 0?{}:o,p=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",s,c).format(p)}catch(T){t.onError(new l.Qe("Error formatting date.",t.locale,T))}return String(p)}function _(t,s){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i=e[0],o=e[1],c=o===void 0?{}:o,p=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",s,c).format(p)}catch(T){t.onError(new l.Qe("Error formatting time.",t.locale,T))}return String(p)}function tt(t,s){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i=e[0],o=e[1],c=e[2],p=c===void 0?{}:c,T=t.timeZone,F=t.locale,L=t.onError,B=(0,v.L6)(p,Z,T?{timeZone:T}:{});try{return s(F,B).formatRange(i,o)}catch(N){L(new l.Qe("Error formatting date time range.",t.locale,N))}return String(i)}function rt(t,s){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i=e[0],o=e[1],c=o===void 0?{}:o,p=typeof i=="string"?new Date(i||0):i;try{return K(t,"date",s,c).formatToParts(p)}catch(T){t.onError(new l.Qe("Error formatting date.",t.locale,T))}return[]}function et(t,s){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i=e[0],o=e[1],c=o===void 0?{}:o,p=typeof i=="string"?new Date(i||0):i;try{return K(t,"time",s,c).formatToParts(p)}catch(T){t.onError(new l.Qe("Error formatting time.",t.locale,T))}return[]}var nt=["type"];function at(t,s,e,r){var i=t.locale,o=t.onError;r===void 0&&(r={}),Intl.PluralRules||o(new S.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,S.jK.MISSING_INTL_API));var c=(0,v.L6)(r,nt);try{return s(i,c).select(e)}catch(p){o(new l.Qe("Error formatting plural.",i,p))}return"other"}var ot=["type","style"],$=Date.now();function it(t){return"".concat($,"_").concat(t,"_").concat($)}function st(t,s,e,r){r===void 0&&(r={});var i=G(t,s,e,r).reduce(function(o,c){var p=c.value;return typeof p!="string"?o.push(p):typeof o[o.length-1]=="string"?o[o.length-1]+=p:o.push(p),o},[]);return i.length===1?i[0]:i.length===0?"":i}function G(t,s,e,r){var i=t.locale,o=t.onError;r===void 0&&(r={});var c=Intl.ListFormat;c||o(new S.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,S.jK.MISSING_INTL_API));var p=(0,v.L6)(r,ot);try{var T={},F=e.map(function(L,B){if(typeof L=="object"){var N=it(B);return T[N]=L,N}return String(L)});return s(i,p).formatToParts(F).map(function(L){return L.type==="literal"?L:(0,a.pi)((0,a.pi)({},L),{value:T[L.value]||L.value})})}catch(L){o(new l.Qe("Error formatting list.",i,L))}return e}var lt=["style","type","fallback","languageDisplay"];function ut(t,s,e,r){var i=t.locale,o=t.onError,c=Intl.DisplayNames;c||o(new S.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,S.jK.MISSING_INTL_API));var p=(0,v.L6)(r,lt);try{return s(i,p).of(e)}catch(T){o(new l.Qe("Error formatting display name.",i,T))}}function ft(t){var s=t?t[Object.keys(t)[0]]:void 0;return typeof s=="string"}function mt(t){t.onWarn&&t.defaultRichTextElements&&ft(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function ct(t,s){var e=(0,v.ax)(s),r=(0,a.pi)((0,a.pi)({},v.Z0),t),i=r.locale,o=r.defaultLocale,c=r.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&c?c(new l.gb('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&c&&c(new l.gb('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(c&&c(new l.OV('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),mt(r),(0,a.pi)((0,a.pi)({},r),{formatters:e,formatNumber:E.bind(null,r,e.getNumberFormat),formatNumberToParts:M.bind(null,r,e.getNumberFormat),formatRelativeTime:z.bind(null,r,e.getRelativeTimeFormat),formatDate:q.bind(null,r,e.getDateTimeFormat),formatDateToParts:rt.bind(null,r,e.getDateTimeFormat),formatTime:_.bind(null,r,e.getDateTimeFormat),formatDateTimeRange:tt.bind(null,r,e.getDateTimeFormat),formatTimeToParts:et.bind(null,r,e.getDateTimeFormat),formatPlural:at.bind(null,r,e.getPluralRules),formatMessage:O.bind(null,r,e),$t:O.bind(null,r,e),formatList:st.bind(null,r,e.getListFormat),formatListToParts:G.bind(null,r,e.getListFormat),formatDisplayName:ut.bind(null,r,e.getDisplayNames)})}var dt=n(97340);function Q(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function H(t){return t&&Object.keys(t).reduce(function(s,e){var r=t[e];return s[e]=(0,dt.Gt)(r)?(0,u.dt)(r):r,s},{})}var X=function(t,s,e,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var c=H(r),p=O.apply(void 0,(0,a.ev)([t,s,e,c],i,!1));return Array.isArray(p)?f.Children.toArray(p):p},Y=function(t,s){var e=t.defaultRichTextElements,r=(0,a._T)(t,["defaultRichTextElements"]),i=H(e),o=ct((0,a.pi)((0,a.pi)((0,a.pi)({},u.Z0),r),{defaultRichTextElements:i}),s),c={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:i};return(0,a.pi)((0,a.pi)({},o),{formatMessage:X.bind(null,c,o.formatters),$t:X.bind(null,c,o.formatters)})},gt=function(t){(0,a.ZT)(s,t);function s(){var e=t!==null&&t.apply(this,arguments)||this;return e.cache=(0,v.Sn)(),e.state={cache:e.cache,intl:Y(Q(e.props),e.cache),prevConfig:Q(e.props)},e}return s.getDerivedStateFromProps=function(e,r){var i=r.prevConfig,o=r.cache,c=Q(e);return(0,u.wU)(i,c)?null:{intl:Y(c,o),prevConfig:c}},s.prototype.render=function(){return(0,u.lq)(this.state.intl),f.createElement(m.zt,{value:this.state.intl},this.props.children)},s.displayName="IntlProvider",s.defaultProps=u.Z0,s}(f.PureComponent);const vt=gt},74758:(h,x,n)=>{"use strict";n.d(x,{D:()=>m});var a=n(74081),f=n(93415);const m=({children:u})=>(0,a.jsx)(f.x,{paddingLeft:10,paddingRight:10,children:u})},27875:(h,x,n)=>{"use strict";n.d(x,{T:()=>w});var a=n(74081),f=n(27279),m=n(19003);const u=v=>{const j=(0,f.useRef)(null),[R,E]=(0,f.useState)(!0),M=([S])=>{E(S.isIntersecting)};return(0,f.useEffect)(()=>{const S=j.current,C=new IntersectionObserver(M,v);return S&&C.observe(j.current),()=>{S&&C.disconnect()}},[j,v]),[j,R]};var d=n(66705);const g=(v,j)=>{const R=(0,d.W)(j);(0,f.useLayoutEffect)(()=>{const E=new ResizeObserver(R);return Array.isArray(v)?v.forEach(M=>{M.current&&E.observe(M.current)}):v.current&&E.observe(v.current),()=>{E.disconnect()}},[v,R])};var l=n(93415),y=n(10701),b=n(32370);const w=v=>{const j=(0,f.useRef)(null),[R,E]=(0,f.useState)(null),[M,S]=u({root:null,rootMargin:"0px",threshold:0});return g(M,()=>{M.current&&E(M.current.getBoundingClientRect())}),(0,f.useEffect)(()=>{j.current&&E(j.current.getBoundingClientRect())},[j]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:R?.height},ref:M,children:S&&(0,a.jsx)(O,{ref:j,...v})}),!S&&(0,a.jsx)(O,{...v,sticky:!0,width:R?.width})]})};w.displayName="HeaderLayout";const P=(0,m.ZP)(l.x)`
  width: ${({width:v})=>v?`${v/16}rem`:void 0};
  z-index: ${({theme:v})=>v.zIndices[1]};
`,O=f.forwardRef(({navigationAction:v,primaryAction:j,secondaryAction:R,subtitle:E,title:M,sticky:S,width:C,...k},z)=>{const Z=typeof E=="string";return S?(0,a.jsx)(P,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(y.k,{justifyContent:"space-between",children:[(0,a.jsxs)(y.k,{children:[v&&(0,a.jsx)(l.x,{paddingRight:3,children:v}),(0,a.jsxs)(l.x,{children:[(0,a.jsx)(b.Z,{variant:"beta",as:"h1",...k,children:M}),Z?(0,a.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:E}):E]}),R?(0,a.jsx)(l.x,{paddingLeft:4,children:R}):null]}),(0,a.jsx)(y.k,{children:j?(0,a.jsx)(l.x,{paddingLeft:2,children:j}):void 0})]})}):(0,a.jsxs)(l.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:v?6:8,background:"neutral100","data-strapi-header":!0,children:[v?(0,a.jsx)(l.x,{paddingBottom:2,children:v}):null,(0,a.jsxs)(y.k,{justifyContent:"space-between",children:[(0,a.jsxs)(y.k,{minWidth:0,children:[(0,a.jsx)(b.Z,{as:"h1",variant:"alpha",...k,children:M}),R?(0,a.jsx)(l.x,{paddingLeft:4,children:R}):null]}),j]}),Z?(0,a.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:E}):E]})})},73354:(h,x,n)=>{"use strict";n.d(x,{o:()=>d});var a=n(74081),f=n(19003),m=n(93415);const u=(0,f.ZP)(m.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,d=({labelledBy:g="main-content-title",...l})=>(0,a.jsx)(u,{"aria-labelledby":g,as:"main",id:"main-content",tabIndex:-1,...l})},23886:(h,x,n)=>{"use strict";n.d(x,{z:()=>d});var a=n(74081),f=n(19003),m=n(93415);const u=(0,f.ZP)(m.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:g})=>g.spaces[3]};
    top: ${({theme:g})=>g.spaces[3]};
  }
`,d=({children:g})=>(0,a.jsx)(u,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:g})},4855:(h,x,n)=>{"use strict";n.d(x,{$:()=>u});const a={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},f={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var m=n(33106);const u={colors:a.color,shadows:f.shadow,...m.x}},53274:(h,x,n)=>{"use strict";n.d(x,{Z:()=>m});var a=n(74081);const f=u=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:(0,a.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),m=f}}]);
