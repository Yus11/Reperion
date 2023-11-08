"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[7974],{21289:(G,d,t)=>{t.d(d,{I:()=>e,U:()=>n});const e="strapi_stage",n="strapi_assignee"},72026:(G,d,t)=>{t.r(d),t.d(d,{InformationBoxEE:()=>ee});var e=t(27279),n=t(60548),r=t(50236),v=t(1821),o=t(10701),T=t(8295),g=t(61121),i=t(61020),u=t(40464),A=t(49402),m=t(21892),S=t(32739),M=t(36364),a=t(21289);function N(){const{initialData:E,layout:{uid:W},isSingleType:p,onChange:K}=(0,n.Wq)(),$=(0,A.v9)(M._),{formatMessage:l}=(0,i.Z)(),{formatAPIError:Y}=(0,n.So)(),y=(0,n.lm)(),{put:Z}=(0,n.kY)(),{allowedActions:{canReadUsers:w},isLoading:R}=(0,n.ss)({readUsers:$.settings.users.read}),{users:U,isLoading:F,isError:H}=(0,S.R)({},{enabled:!R&&w}),I=E?.[a.U]??null,L=async({value:c})=>{f.mutate({entityId:E.id,assigneeId:parseInt(c,10),uid:W})},f=(0,u.useMutation)(async({entityId:c,assigneeId:z,uid:J})=>{const h=p?"single-types":"collection-types",{data:{data:C}}=await Z(`/admin/content-manager/${h}/${J}/${c}/assignee`,{data:{id:z}});return K({target:{name:a.U,value:C[a.U]}},!0),C},{onSuccess(){y({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return e.createElement(v.g,{name:a.U,id:a.U},e.createElement(o.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(T.hQ,{clearLabel:l({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:H&&w&&l({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||f.error&&Y(f.error),disabled:!R&&!F&&U.length===0,name:a.U,id:a.U,value:I?I.id:null,onChange:c=>L({value:c}),onClear:()=>L({value:null}),placeholder:l({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:l({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:F||R||f.isLoading},U.map(c=>e.createElement(g.O,{key:c.id,value:c.id,textValue:(0,m.Gf)(c,l)},(0,m.Gf)(c,l))))))}var k=t(63738),B=t(32370),D=t(77970),P=t(67588),x=t(55911),b=t(75021),O=t(38705),s=t(86978);function V({id:E,layout:W}={},p={}){const{kind:K,uid:$}=W,l=K==="collectionType"?"collection-types":"single-types",{get:Y}=(0,n.kY)(),{data:y,isLoading:Z,refetch:w}=(0,u.useQuery)(["content-manager",l,W.uid,E,"stages"],async()=>{const{data:F}=await Y(`/admin/content-manager/${l}/${$}/${E}/stages`);return F},p),R=e.useMemo(()=>y?.meta??{},[y?.meta]),U=e.useMemo(()=>y?.data??[],[y?.data]);return{meta:R,stages:U,isLoading:Z,refetch:w}}var j=t(5318);function X(){const{initialData:E,layout:W,isSingleType:p,onChange:K}=(0,n.Wq)(),{put:$}=(0,n.kY)(),{formatMessage:l}=(0,i.Z)(),{formatAPIError:Y}=(0,n.So)(),y=(0,n.lm)(),{meta:Z,stages:w,isLoading:R,refetch:U}=V({id:E.id,layout:W},{enabled:!!E?.id}),{getFeature:F}=(0,b.q)(),[H,I]=e.useState(!1),L=F("review-workflows"),f=E?.[a.I]??null,c=(0,u.useMutation)(async({entityId:h,stageId:C,uid:Q})=>{const q=p?"single-types":"collection-types",{data:{data:_}}=await $(`/admin/content-manager/${q}/${Q}/${h}/stage`,{data:{id:C}});return K({target:{name:a.I,value:_[a.I]}},!0),await U(),_},{onSuccess(){y({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),z=async({value:h})=>{try{L?.[s.Ef]&&parseInt(L[s.Ef],10)<Z.workflowCount?I("workflow"):L?.[s._X]&&parseInt(L[s._X],10)<w.length?I("stage"):c.mutateAsync({entityId:E.id,stageId:h,uid:W.uid})}catch{}},{themeColorName:J}=f?.color?(0,j.k)(f?.color):{};return e.createElement(e.Fragment,null,e.createElement(v.g,{hint:w.length===0&&l({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:a.I,id:a.I},e.createElement(o.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(k.q4,{disabled:w.length===0,error:c.error&&Y(c.error)||null,name:a.I,id:a.I,value:f?.id,onChange:h=>z({value:h}),label:l({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:f&&e.createElement(o.k,{as:"span",height:2,background:f?.color,borderColor:J==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>e.createElement(o.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},e.createElement(B.Z,{textColor:"neutral800",ellipsis:!0},f?.name??""),R?e.createElement(D.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null)},w.map(({id:h,color:C,name:Q})=>{const{themeColorName:q}=(0,j.k)(C);return e.createElement(k.ag,{key:h,startIcon:e.createElement(o.k,{height:2,background:C,borderColor:q==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:h,textValue:Q},Q)})),e.createElement(P.J,null),e.createElement(x.c,null))),e.createElement(O.fC,{isOpen:H==="workflow",onClose:()=>I(!1)},e.createElement(O.Dx,null,l({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(O.uT,null,l({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(O.fC,{isOpen:H==="stage",onClose:()=>I(!1)},e.createElement(O.Dx,null,l({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(O.uT,null,l({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ee(){const{isCreatingEntry:E,layout:{options:W}}=(0,n.Wq)(),p=W?.reviewWorkflows??!1;return e.createElement(r.d.Root,null,e.createElement(r.d.Title,null),p&&!E&&e.createElement(e.Fragment,null,e.createElement(X,null),e.createElement(N,null)),e.createElement(r.d.Body,null))}},75021:(G,d,t)=>{t.d(d,{q:()=>v});var e=t(27279),n=t(60548),r=t(40464);function v({enabled:o}={enabled:!0}){const{get:T}=(0,n.kY)(),{data:g,isError:i,isLoading:u}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:S}}=await T("/admin/license-limit-information");return S},{enabled:o}),A=e.useMemo(()=>g??{},[g]),m=e.useCallback(S=>(A?.features??[]).find(a=>a.name===S)?.options??{},[A?.features]);return{license:A,getFeature:m,isError:i,isLoading:u}}},38705:(G,d,t)=>{t.d(d,{uT:()=>P,fC:()=>O,Dx:()=>D});var e=t(27279),n=t(32370),r=t(10701),v=t(5938),o=t(15244),T=t(93415),g=t(4987),i=t(37370),u=t(95066),A=t(70627),m=t.n(A),S=t(61020),M=t(19003);const a=t.p+"0cd5f8915b265d5b1856.png",N="limits-title",k="https://strapi.io/pricing-cloud",B="https://strapi.io/contact-sales";function D({children:s}){return e.createElement(n.Z,{variant:"alpha",id:N},s)}D.propTypes={children:m().node.isRequired};function P({children:s}){return e.createElement(n.Z,{variant:"omega"},s)}P.propTypes={children:m().node.isRequired};function x(){const{formatMessage:s}=(0,S.Z)();return e.createElement(r.k,{gap:2,paddingTop:4},e.createElement(i.Q,{variant:"default",isExternal:!0,href:k},s({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(i.Q,{variant:"tertiary",isExternal:!0,href:B},s({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const b=M.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:s})=>`-${s.spaces[7]}`};
  margin-top: ${({theme:s})=>`-${s.spaces[7]}`};
  width: 360px;
`;function O({children:s,isOpen:V,onClose:j}){const{formatMessage:X}=(0,S.Z)();return V?e.createElement(v.P,{labelledBy:N},e.createElement(o.f,null,e.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},s,e.createElement(x,null)),e.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(b,{src:a,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(T.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(g.h,{icon:e.createElement(u.Z,null),"aria-label":X({id:"global.close",defaultMessage:"Close"}),onClick:j})))))):null}O.defaultProps={isOpen:!1},O.propTypes={children:m().node.isRequired,isOpen:m().bool,onClose:m().func.isRequired}},86978:(G,d,t)=>{t.d(d,{$k:()=>a,Ef:()=>P,FT:()=>B,Nj:()=>S,Ot:()=>A,QM:()=>i,VS:()=>N,_X:()=>x,bc:()=>m,gu:()=>r,k_:()=>M,lv:()=>k,qZ:()=>g,rg:()=>o,sN:()=>n,uL:()=>D,x4:()=>u,yq:()=>v,zn:()=>T});var e=t(97003);const n="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",v="Settings/Review_Workflows/SET_CONTENT_TYPES",o="Settings/Review_Workflows/SET_IS_LOADING",T="Settings/Review_Workflows/SET_ROLES",g="Settings/Review_Workflows/SET_WORKFLOW",i="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",A="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",m="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",S="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",M="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",a="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",N="Settings/Review_Workflows/WORKFLOW_UPDATE",k={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},B=e.W.colors.primary600,D={STAGE:"stage"},P="numberOfWorkflows",x="stagesPerWorkflow"},5318:(G,d,t)=>{t.d(d,{k:()=>r,s:()=>v});var e=t(97003),n=t(86978);function r(o){if(!o)return null;const g=Object.entries(e.W.colors).filter(([,i])=>i.toUpperCase()===o.toUpperCase()).reduce((i,[u])=>(n.lv?.[u]&&(i=u),i),null);return g?{themeColorName:g,name:n.lv[g]}:null}function v(){return Object.entries(n.lv).map(([o,T])=>({hex:e.W.colors[o].toUpperCase(),name:T}))}}}]);
