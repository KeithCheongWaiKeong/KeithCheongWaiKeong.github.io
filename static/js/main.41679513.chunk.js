(this["webpackJsonpkeithcheongwaikeong.github.io"]=this["webpackJsonpkeithcheongwaikeong.github.io"]||[]).push([[0],{158:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),i=n.n(r),o=n(47),s=n(16),l=n(146),j=n(452),p=n(453),u=(n(158),n(54)),b=n(99),d=n.n(b),h=n(100),m=n.n(h),O=n(454),x=n(442),f=n(457),v=n(82),g=n(441),C=n.p+"static/media/avatar.4721bd79.jpg",y=n(6),w=Object(g.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),margin:e.spacing(1)},title:{color:e.palette.secondary.main},subtitle:{color:e.palette.secondary.dark,textTransform:"uppercase"},content:{color:"white"},typedContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100vw",textAlign:"center",zIndex:1},textContainer:{backgroundColor:e.palette.primary.main}}})),k=function(){var e=w(),t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){r(m()().diff(m()("1996-11-02"),"year",!0))}));return function(){return clearInterval(e)}}),[]),Object(y.jsxs)(O.a,{className:e.typedContainer,children:[Object(y.jsx)(x.a,{container:!0,justify:"center",children:Object(y.jsx)(f.a,{className:e.avatar,src:C,alt:"Keith Cheong"})}),Object(y.jsxs)(x.a,{className:e.textContainer,children:[Object(y.jsx)(v.a,{className:e.title,variant:"h4",children:Object(y.jsx)(d.a,{strings:["Keith Cheong","".concat(c.toPrecision(12)," Years Old, Human")],typeSpeed:40,backDelay:5e3,backSpeed:50,loop:!0})}),Object(y.jsx)(v.a,{className:e.subtitle,variant:"h5",children:Object(y.jsx)(d.a,{strings:["Frontend Developer","Backend Developer","Fullstack Developer"],typeSpeed:40,backSpeed:50,loop:!0})}),Object(y.jsx)(v.a,{className:e.content,varient:"body1",children:"Still WIP (Don't judge)"})]})]})},F=n(141),D={particles:{number:{value:45,density:{enable:!0,value_area:800}},shape:{type:"circle",stroke:{width:1,color:"grey"}},size:{value:8,random:!0,anim:{enable:!1,speed:6,size_min:0,sync:!0}},opacity:{value:.75,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}}}},N=Object(g.a)((function(e){return{particlesCanvas:{position:"fixed",opacity:"0.3"}}})),S=function(){var e=N();return Object(y.jsx)(F.Particles,{canvasClassName:e.particlesCanvas,params:D})},B=function(){return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(k,{}),Object(y.jsx)(S,{})]})},T=n(444),I=n(445),K=n(456),P=n(446),z=n(447),A=n(455),E=n(448),R=n(449),L=n(450),V=n(451),_=n(145),J=n.n(_),W=n(142),H=n.n(W),M=n(143),Y=n.n(M),q=n(144),G=n.n(q),Q=[{name:"Resume",path:"/resume",icon:Object(y.jsx)(H.a,{color:"secondary"})},{name:"Documentation",path:"/doc",icon:Object(y.jsx)(Y.a,{color:"secondary"})},{name:"Contact",path:"/contact",icon:Object(y.jsx)(G.a,{color:"secondary"})}],U=function(e){var t=Z(),n=e.value,a=e.setValue;return Object(y.jsxs)(T.a,{className:t.desktopAppBarContainer,position:"static",children:[Object(y.jsx)(f.a,{className:t.avatar,src:C,alt:"Keith Cheong"}),Object(y.jsx)(I.a,{color:"inherit",to:"/",disableFocusRipple:!0,disableRipple:!0,component:o.b,onClick:function(){a(null)},children:Object(y.jsx)(v.a,{className:t.avatarText,children:"Keith Cheong"})}),Object(y.jsx)(K.a,{value:n,onChange:function(e,t){a(t)},variant:"standard",selectionFollowsFocus:!0,children:Q.map((function(e){return Object(y.jsx)(P.a,{label:e.name,to:e.path,component:o.b})}))})]})},X=function(e){var t=Z(),n=e.drawerOpen,a=e.setDrawerOpen,c=e.setValue,r=function(){a(!0)};return Object(y.jsxs)(T.a,{className:t.mobileAppBarContainer,position:"static",children:[Object(y.jsx)(z.a,{color:"inherit",onClick:r,children:Object(y.jsx)(J.a,{})}),Object(y.jsx)(f.a,{className:t.avatar,src:C,alt:"Keith Cheong"}),Object(y.jsx)(I.a,{color:"inherit",to:"/",disableFocusRipple:!0,disableRipple:!0,component:o.b,onClick:function(){c(null)},children:Object(y.jsx)(v.a,{className:t.avatarText,children:"Keith Cheong"})}),Object(y.jsx)(A.a,{classes:{paper:t.drawerContainer},anchor:"left",open:n,onClose:r,children:Object(y.jsx)(E.a,{children:Q.map((function(e,t){return Object(y.jsxs)(R.a,{button:!0,to:e.path,component:o.b,onClick:function(){return function(e){c(e),a(!1)}(t)},children:[Object(y.jsx)(L.a,{children:e.icon}),Object(y.jsx)(V.a,{primaryTypographyProps:{color:"secondary"},children:e.name})]},e.name)}))})})]})},Z=Object(g.a)((function(e){return{desktopAppBarContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},mobileAppBarContainer:{flexDirection:"row",alignItems:"center"},avatar:{height:32,width:32,margin:8},avatarText:{textTransform:"uppercase",margin:8},drawerContainer:{backgroundColor:e.palette.primary.main}}})),$=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(u.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)(!1),j=Object(u.a)(l,2),p=j[0],b=j[1];return Object(a.useEffect)((function(){var e=function(){return c(window.innerWidth<900)};return e(),window.addEventListener("resize",(function(){return e()})),function(){return window.removeEventListener("resize",(function(){return e()}))}}),[]),n?Object(y.jsx)(X,{drawerOpen:p,setDrawerOpen:b,setValue:s}):Object(y.jsx)(U,{value:o,setValue:s})},ee=Object(l.a)({palette:{primary:{main:"#112612",contrastText:"#FFBFCD"},secondary:{main:"#FFBFCD"}}});var te=function(){return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(j.a,{}),Object(y.jsx)(p.a,{theme:ee,children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)($,{}),Object(y.jsx)(B,{}),Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{exact:!0,path:"/",component:B}),Object(y.jsx)(s.a,{exact:!0,path:"/resume",component:B}),Object(y.jsx)(s.a,{exact:!0,path:"/doc",component:B}),Object(y.jsx)(s.a,{exact:!0,path:"/contact",component:B})]})]})})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,459)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(te,{})}),document.getElementById("root")),ne()}},[[420,1,2]]]);
//# sourceMappingURL=main.41679513.chunk.js.map