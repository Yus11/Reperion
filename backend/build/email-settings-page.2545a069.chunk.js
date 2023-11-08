"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[1495],{74758:(y,g,t)=>{t.d(g,{D:()=>u});var e=t(74081),a=t(93415);const u=({children:m})=>(0,e.jsx)(a.x,{paddingLeft:10,paddingRight:10,children:m})},27875:(y,g,t)=>{t.d(g,{T:()=>p});var e=t(74081),a=t(27279),u=t(19003);const m=s=>{const l=(0,a.useRef)(null),[i,d]=(0,a.useState)(!0),r=([c])=>{d(c.isIntersecting)};return(0,a.useEffect)(()=>{const c=l.current,M=new IntersectionObserver(r,s);return c&&M.observe(l.current),()=>{c&&M.disconnect()}},[l,s]),[l,i]};var P=t(66705);const h=(s,l)=>{const i=(0,P.W)(l);(0,a.useLayoutEffect)(()=>{const d=new ResizeObserver(i);return Array.isArray(s)?s.forEach(r=>{r.current&&d.observe(r.current)}):s.current&&d.observe(s.current),()=>{d.disconnect()}},[s,i])};var o=t(93415),_=t(10701),f=t(32370);const p=s=>{const l=(0,a.useRef)(null),[i,d]=(0,a.useState)(null),[r,c]=m({root:null,rootMargin:"0px",threshold:0});return h(r,()=>{r.current&&d(r.current.getBoundingClientRect())}),(0,a.useEffect)(()=>{l.current&&d(l.current.getBoundingClientRect())},[l]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:i?.height},ref:r,children:c&&(0,e.jsx)(R,{ref:l,...s})}),!c&&(0,e.jsx)(R,{...s,sticky:!0,width:i?.width})]})};p.displayName="HeaderLayout";const D=(0,u.ZP)(o.x)`
  width: ${({width:s})=>s?`${s/16}rem`:void 0};
  z-index: ${({theme:s})=>s.zIndices[1]};
`,R=a.forwardRef(({navigationAction:s,primaryAction:l,secondaryAction:i,subtitle:d,title:r,sticky:c,width:M,...v},C)=>{const O=typeof d=="string";return c?(0,e.jsx)(D,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(_.k,{justifyContent:"space-between",children:[(0,e.jsxs)(_.k,{children:[s&&(0,e.jsx)(o.x,{paddingRight:3,children:s}),(0,e.jsxs)(o.x,{children:[(0,e.jsx)(f.Z,{variant:"beta",as:"h1",...v,children:r}),O?(0,e.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),i?(0,e.jsx)(o.x,{paddingLeft:4,children:i}):null]}),(0,e.jsx)(_.k,{children:l?(0,e.jsx)(o.x,{paddingLeft:2,children:l}):void 0})]})}):(0,e.jsxs)(o.x,{ref:C,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(o.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(_.k,{justifyContent:"space-between",children:[(0,e.jsxs)(_.k,{minWidth:0,children:[(0,e.jsx)(f.Z,{as:"h1",variant:"alpha",...v,children:r}),i?(0,e.jsx)(o.x,{paddingLeft:4,children:i}):null]}),l]}),O?(0,e.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},73354:(y,g,t)=>{t.d(g,{o:()=>P});var e=t(74081),a=t(19003),u=t(93415);const m=(0,a.ZP)(u.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,P=({labelledBy:h="main-content-title",...o})=>(0,e.jsx)(m,{"aria-labelledby":h,as:"main",id:"main-content",tabIndex:-1,...o})},16543:(y,g,t)=>{t.d(g,{Z:()=>u});var e=t(74081);const a=m=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...m,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),u=a},2872:(y,g,t)=>{t.d(g,{ProtectedSettingsPage:()=>b});var e=t(74081),a=t(27279),u=t(73354),m=t(27875),P=t(74758),h=t(10701),o=t(93415),_=t(32370),f=t(23298),p=t(74577),D=t(12881),R=t(5627),s=t(78955),l=t(48102),i=t(60548),d=t(16543),r=t(61020),c=t(40464),M=t(19003),v=t(47853),C=t(44221);const O=v.Ry().shape({email:v.Z_().email(i.I0.email).required(i.I0.required)}),A=M.ZP.a`
  color: ${({theme:L})=>L.colors.primary600};
`,b=()=>(0,e.jsx)(i.O4,{permissions:C.P.settings,children:(0,e.jsx)(K,{})}),K=()=>{const L=(0,i.lm)(),{formatMessage:n}=(0,r.Z)(),{lockApp:U,unlockApp:Z}=(0,i.o1)(),{get:z,post:k}=(0,i.kY)(),[x,F]=a.useState(""),[H,I]=a.useState(!1),[S,V]=a.useState({}),{data:j,isLoading:W}=(0,c.useQuery)(["email","settings"],async()=>{const E=await z("/email/settings"),{data:{config:T}}=E;return T}),B=(0,c.useMutation)(async E=>{await k("/email/test",E)},{onError(){L({type:"warning",message:n({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:x})})},onSuccess(){L({type:"success",message:n({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:x})})},retry:!1});(0,i.go)(),a.useEffect(()=>{O.validate({email:x},{abortEarly:!1}).then(()=>I(!0)).catch(()=>I(!1))},[x]);const $=E=>{F(()=>E.target.value)},w=async E=>{E.preventDefault();try{await O.validate({email:x},{abortEarly:!1})}catch(T){T instanceof v.p8&&V((0,i.CJ)(T))}U(),B.mutate({to:x}),Z()};return(0,e.jsxs)(u.o,{labelledBy:"title","aria-busy":W||B.isLoading,children:[(0,e.jsx)(i.SL,{name:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(m.T,{id:"title",title:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:n({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(P.D,{children:W?(0,e.jsx)(i.dO,{}):j&&(0,e.jsx)("form",{onSubmit:w,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:n({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(_.Z,{children:n({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(A,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:n({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(f.r,{gap:5,children:[(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(D.o,{name:"shipper-email",label:n({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:j.settings.defaultFrom})}),(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(D.o,{name:"response-email",label:n({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:j.settings.defaultReplyTo})}),(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(R.P,{name:"email-provider",label:n({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:j.provider,children:(0,e.jsx)(s.W,{value:j.provider,children:j.provider})})})]})]})}),(0,e.jsxs)(h.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(_.Z,{variant:"delta",as:"h2",children:n({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(f.r,{gap:5,children:[(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(D.o,{id:"test-address-input",name:"test-address",onChange:$,label:n({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:x,error:S.email?.id&&n({id:`email.${S.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:n({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(p.P,{col:7,s:12,children:(0,e.jsx)(l.z,{loading:B.isLoading,disabled:!H,type:"submit",startIcon:(0,e.jsx)(d.Z,{}),children:n({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);
