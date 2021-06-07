(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(28),r=n.n(c),o=n(7),s=n(8),i=n.n(s),u=n(12),l=n(18),d=n(9),j=n(19),b=n(5),p=n(25);n(69),n(53);p.a.initializeApp({apiKey:"AIzaSyALvGppJZZT5NUz_pP-2jPrI1gNLI7gfcs",authDomain:"journal-app-d1430.firebaseapp.com",projectId:"journal-app-d1430",storageBucket:"journal-app-d1430.appspot.com",messagingSenderId:"789013359642",appId:"1:789013359642:web:51a8d584ecce0f2c3fb5a3"});var h=p.a.firestore(),f=new p.a.auth.GoogleAuthProvider,m=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=h.collection(" ".concat(t,"/journal/notes ")),e.next=4,a.get();case 4:return e.sent.forEach((function(e){n.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("upload_preset","react-journal"),n.append("file",t)," https://api.cloudinary.com/v1_1/dwa0boye6/upload",e.prev=4,e.next=7,fetch(" https://api.cloudinary.com/v1_1/dwa0boye6/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=16;break}return e.next=11,a.json();case 11:return c=e.sent,r=c.secure_url,e.abrupt("return",r);case 16:return e.next=18,a.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),console.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),v="[AUTH] Login",x="[AUTH] Logout",g="[UI] Set Error",y="[UI] Remove Error",w="[UI] Start Loading",N="[UI] Finish Loading",_="[Notes] New Note",k="[Notes] Set active Note",C="[Notes] Load notes",S="[Notes] Update Notes",E="[Notes] Delete Note",A="[Notes] Logout Cleaning",I=n(20),L=n.n(I),P=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:a=t.sent,n(D(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e,t){return{type:k,payload:Object(b.a)({id:e},t)}},T=function(e,t){return{type:_,payload:Object(b.a)({id:e},t)}},D=function(e){return{type:C,payload:e}},F=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r,o,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(b.a)({},e)).id,o=h.collection(" ".concat(c,"/journal/notes ")).doc("".concat(e.id)),s=o.get(),t.next=8,s;case 8:if(!t.sent.exists){t.next=10;break}o.update(r).then((function(){n(R(e.id,r)),L.a.fire("Save",e.title,"success")})).catch(console.log);case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},R=function(e,t){return{type:S,payload:{id:e,note:Object(b.a)({id:e},t)}}},z=function(e){return{type:E,payload:e}},B=n(31),G=function(e){var t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1];return[c,function(e){r(Object(b.a)(Object(b.a)({},c),{},Object(B.a)({},e.target.name,e.target.value)))},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)}]},W=n(1),q=function(){var e=Object(o.c)((function(e){return e.notes})).active,t=Object(o.b)();return Object(W.jsxs)("div",{className:"notes__appbar",children:[Object(W.jsx)("span",{children:"28-08-2121"}),Object(W.jsx)("input",{type:"file",name:"file",id:"file",onChange:function(e){var n,a=e.target.files[0];a&&t((n=a,function(){var e=Object(u.a)(i.a.mark((function e(t,a){var c,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){L.a.showLoading()}},L.a.fire(c),r=a().notes.active,e.next=5,O(n);case 5:o=e.sent,r.url=o,t(F(r)),L.a.close();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},style:{display:"none"}}),Object(W.jsxs)("div",{children:[Object(W.jsx)("button",{onClick:function(){var e;null===(e=document.getElementById("file"))||void 0===e||e.click()},className:"btn",children:"Picture"}),Object(W.jsx)("button",{onClick:function(){t(F(e))},className:"btn",children:"Save"})]})]})},J=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=G(t),c=Object(l.a)(n,3),r=c[0],s=c[1],d=c[2],j=r.title,p=r.body,f=r.url,m=r.id,O=Object(a.useRef)(t.id);Object(a.useEffect)((function(){O.current!==t.id&&(d(t),O.current=t.id)}),[t,d]),Object(a.useEffect)((function(){e(U(r.id,Object(b.a)({},r)))}),[r,e]);return Object(W.jsxs)("div",{className:"notes__main-content",children:[Object(W.jsx)(q,{}),Object(W.jsxs)("div",{className:"notes__content",children:[Object(W.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Some awesome title",autoComplete:"off",className:"notes__title-input",value:j,onChange:s}),Object(W.jsx)("textarea",{name:"body",id:"body",placeholder:"What happended today ? ",value:p,onChange:s}),f&&Object(W.jsx)("div",{className:"notes__image",children:Object(W.jsx)("img",{src:f,alt:j})})]}),Object(W.jsx)("button",{onClick:function(){e(function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var c,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,r=h.collection(" ".concat(c,"/journal/notes ")).doc("".concat(e)),o=r.get(),t.next=5,o;case 5:if(!t.sent.exists){t.next=7;break}r.delete().then((function(){n(z(e)),L.a.fire("Delete","Note ".concat(e," delete succesfully"),"error")})).catch(console.log);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(m))},className:"btn btn-block btn-danger",children:"Delete"})]})},H=function(){return Object(W.jsxs)("div",{className:"nothing__main-content",children:[Object(W.jsx)("p",{children:"Select something"}),Object(W.jsx)("br",{}),"pr create an entry!",Object(W.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},X=function(e){return{type:g,payload:e}},Z=function(){return{type:N}},K=function(e,t){return{type:v,payload:{uid:e,displayName:t}}},M=function(e,t){return function(n){n({type:w}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(K(null===t||void 0===t?void 0:t.uid,null===t||void 0===t?void 0:t.displayName)),n(Z())})).catch((function(e){L.a.fire("Error",e.message,"error"),n(Z())}))}},V=function(){return{type:x}},Q=function(e){var t=e.id,n=e.title,a=e.body,c=e.date,r=e.url,s=Object(o.b)();return Object(W.jsxs)("div",{className:"home__entry pointer",onClick:function(){s(U(t,{title:n,body:a,date:c,url:r}))},children:[r&&Object(W.jsx)("div",{className:"home__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,") ")}}),Object(W.jsxs)("div",{className:"home__entry-body",children:[Object(W.jsx)("p",{className:"home__entry-title",children:n}),Object(W.jsx)("p",{className:"home__entry-content",children:a})]}),Object(W.jsx)("div",{className:"home__entry-date-box",children:c})]})},Y=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(W.jsx)("div",{className:"home__entries",children:e.map((function(e){return Object(W.jsx)(Q,Object(b.a)({},e),e.id)}))})},$=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(W.jsxs)("aside",{className:"home__sidebar",children:[Object(W.jsxs)("div",{className:"home__siderbar-navbar",children:[Object(W.jsxs)("h3",{className:"mt-5",children:[Object(W.jsx)("i",{className:"far fa-moon"}),Object(W.jsxs)("span",{children:[" ",t]})]}),Object(W.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(V()),t({type:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"logout"})]}),Object(W.jsxs)("div",{onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,h.collection(" ".concat(a,"/journal/notes ")).add(c);case 4:r=e.sent,t(U(r.id,c)),t(T(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},className:"home__new-entry",children:[Object(W.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(W.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(W.jsx)(Y,{})]})},ee=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(W.jsxs)("div",{className:"home__main-content",children:[Object(W.jsx)($,{}),Object(W.jsx)("main",{children:e?Object(W.jsx)(J,{}):Object(W.jsx)(H,{})})]})},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=G({email:"admin@gmail.com",password:"password"}),a=Object(l.a)(n,3),c=a[0],r=a[1];a[2];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h3",{className:"auth__title",children:"Login"}),Object(W.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(M(c.email,c.password))},children:[Object(W.jsx)("input",{type:"text",placeholder:"enter your username",name:"email",autoComplete:"off",className:"auth__input",onChange:r,value:c.email}),Object(W.jsx)("input",{type:"password",placeholder:"enter your password",name:"password",autoComplete:"off",className:"auth__input",onChange:r,value:c.password}),Object(W.jsx)("button",{disabled:t,className:"btn btn-primary btn-block",type:"submit",children:"Login"}),Object(W.jsxs)("div",{className:"auth__social-network",children:[Object(W.jsx)("p",{children:"Login with social networks"}),Object(W.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(f).then((function(e){var t=e.user;K(null===t||void 0===t?void 0:t.uid,null===t||void 0===t?void 0:t.displayName)})).catch((function(e){return console.log(e)}))}))},children:[Object(W.jsx)("div",{className:"google-icon-wrapper",children:Object(W.jsx)("img",{src:"https://img2.freepng.es/20180610/jeu/kisspng-google-logo-google-search-google-now-5b1dacc1ad0462.3234288415286714257087.jpg",alt:"Logo Google",className:"google-icon"})}),Object(W.jsx)("p",{className:"btn-text",children:Object(W.jsx)("b",{children:"Sign in with Google"})})]})]}),Object(W.jsx)(j.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},ne=n(43),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msg,n=G({name:"edwin",email:"admin@gmail.com",password:"password",password2:"password"}),a=Object(l.a)(n,2),c=a[0],r=a[1],s=c.name,d=c.email,b=c.password,h=c.password2,f=function(){var t=!0;return 0===s.trim().length?(t=!1,e(X("The field name is required"))):Object(ne.a)(d)?0===b.trim().length||0===h.trim().length?(t=!1,e(X("The field password is required"))):(b!==h||b.length<5)&&(t=!1,e(X("The field password should be at least 6 characters  and match each other"))):(t=!1,e(X("The field email is required, Email is not valid!"))),e({type:y}),t};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h3",{className:"auth__title",children:"Register"}),Object(W.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log("handle submit"),f()&&(console.log("register user"),e(function(e,t,n){return function(a){p.a.auth().createUserWithEmailAndPassword(t,n).then(function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.user,t.next=3,null===a||void 0===a?void 0:a.updateProfile({displayName:e});case 3:K(null===a||void 0===a?void 0:a.uid,null===a||void 0===a?void 0:a.displayName),console.log(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return L.a.fire("Error",e.message,"error")}))}}(s,d,b)))},children:[t&&Object(W.jsx)("div",{className:"auth__alert-error",children:t}),Object(W.jsx)("input",{type:"text",placeholder:"Name",name:"name",autoComplete:"off",className:"auth__input",value:s,onChange:r}),Object(W.jsx)("input",{type:"text",placeholder:"Username",name:"email",autoComplete:"off",className:"auth__input",value:d,onChange:r}),Object(W.jsx)("input",{type:"password",placeholder:"Password",name:"password",autoComplete:"off",className:"auth__input",value:b,onChange:r}),Object(W.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",autoComplete:"off",className:"auth__input",value:h,onChange:r}),Object(W.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(W.jsx)(j.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})},ce=function(){return Object(W.jsx)("div",{className:"auth__main",children:Object(W.jsx)("div",{className:"auth__box-container",children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(d.b,{exact:!0,path:"/auth/login",component:te}),Object(W.jsx)(d.b,{exact:!0,path:"/auth/register",component:ae}),Object(W.jsx)(d.a,{to:"/auth/login"})]})})})},re=n(32),oe=function(e){var t=e.component,n=e.isAuthenticated,a=Object(re.a)(e,["component","isAuthenticated"]);return Object(W.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return n?Object(W.jsx)(t,Object(b.a)({},e)):Object(W.jsx)(d.a,{to:"/auth/login"})}}))},se=function(e){var t=e.component,n=e.isAuthenticated,a=Object(re.a)(e,["component","isAuthenticated"]);return Object(W.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return n?Object(W.jsx)(d.a,{to:"/home"}):Object(W.jsx)(t,Object(b.a)({},e))}}))},ie=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),b=s[0],h=s[1],f=Object(o.b)();return Object(a.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(f(K(null===t||void 0===t?void 0:t.uid,null===t||void 0===t?void 0:t.displayName)),f(P(t.uid)),h(!0)):h(!1),c(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[f]),n?Object(W.jsx)("h3",{children:"Espere"}):Object(W.jsx)(j.a,{children:Object(W.jsx)("div",{children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(se,{isAuthenticated:b,path:"/auth",component:ce}),Object(W.jsx)(oe,{isAuthenticated:b,component:ee,exact:!0}),Object(W.jsx)(d.a,{to:"/auth/login"})]})})})},ue=n(26),le=n(42),de=n(38),je={notes:[],active:null},be={loading:!1,msg:null},pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,he=Object(ue.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.payload.uid,name:t.payload.displayName};case x:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{msg:t.payload});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case N:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case C:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(de.a)(t.payload)});case S:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case E:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case A:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:[]});case _:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(de.a)(e.notes))});default:return e}}}),fe=Object(ue.d)(he,pe(Object(ue.a)(le.a))),me=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(o.a,{store:fe,children:Object(W.jsx)(ie,{})})})};n(67);r.a.render(Object(W.jsx)(me,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fc424b0b.chunk.js.map