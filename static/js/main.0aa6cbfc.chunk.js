(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{103:function(e,A,t){"use strict";t.d(A,"a",(function(){return o}));var n=t(39),a=t(4),r={dialogsData:[{name:"Vasya",id:"1"},{name:"Kolyan",id:"2"},{name:"Lenka",id:"3"},{name:"Kuklovod",id:"4"},{name:"VovaPutin",id:"5"}],messagesData:[{text:"Hi",id:"1"},{text:"How are  ?",id:"2"},{text:"\u041f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442",id:"3"},{text:"\u0435\u0449\u0435 \u041f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442",id:"4"},{text:"\u0435\u0449\u0435 \u0438 \u0435\u0449\u0435 \u041f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0442\u0435\u043a\u0441\u0442",id:"5"}]},o=function(e){return{type:"ADD-DIALOG",newMessageBody:e}};A.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case"ADD-DIALOG":var t=A.newMessageBody,o=Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(n.a)(e.messagesData),[{text:t,id:6}])});return o;default:return e}}},114:function(e,A,t){},13:function(e,A,t){"use strict";t.d(A,"c",(function(){return r})),t.d(A,"b",(function(){return o})),t.d(A,"a",(function(){return i}));var n=t(129),a=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"72b8ab47-d597-4c01-b123-5696d0cf7a9d"}}),r={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(A)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obselete method. Please use profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("/profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,A){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:A,rememberMe:t})},logout:function(){return a.delete("auth/login")}}},133:function(e,A){e.exports="data:image/gif;base64,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"},136:function(e,A,t){"use strict";t.d(A,"a",(function(){return m}));var n=t(25),a=t(26),r=t(28),o=t(27),i=t(0),s=t.n(i),c=t(22),l=t(9),u=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var A=function(A){Object(r.a)(i,A);var t=Object(o.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),i}(s.a.Component);return Object(l.b)(u)(A)}},14:function(e,A,t){e.exports={nav:"Navbar_nav__k48wd",item:"Navbar_item__EiVN3",active:"Navbar_active__AaJoc"}},162:function(e,A,t){e.exports=t(291)},248:function(e,A,t){},249:function(e,A,t){},251:function(e,A,t){},252:function(e,A,t){},253:function(e,A,t){},291:function(e,A,t){"use strict";t.r(A);var n=t(0),a=t.n(n),r=t(61),o=t.n(r),i=t(9),s=t(8),c=t(91),l=t(103),u={friendsData:[{name:"Andrew",img:"url-img",id:1},{name:"Sasha",img:"url2-img",id:2},{name:"Fedor",img:"url3-img",id:3}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},g=t(39),E=t(4),d=t(13),p={usersData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},h=function(e){return{type:"UNFOLLOW",userId:e}},C=function(e){return{type:"IS_FETCHING",isFetching:e}},I=function(e,A){return{type:"TOGGLE_IS_FOLLOWING_IN_PROGRESS",followingInProgress:e,userId:A}},b=function(e,A,t,n){e(I(!0,A)),t(A).then((function(t){0===t.data.resultCode&&e(n(A)),e(I(!1,A))}))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case"FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===A.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(E.a)(Object(E.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===A.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{usersData:A.users});case"SET_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:A.pageId});case"SET_TOTAL_COUNT":return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:A.totalCount});case"IS_FETCHING":return Object(E.a)(Object(E.a)({},e),{},{isFetching:A.isFetching});case"TOGGLE_IS_FOLLOWING_IN_PROGRESS":return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:A.followingInProgress?[].concat(Object(g.a)(e.followingInProgress),[A.userId]):e.followingInProgress.filter((function(e){return e!==A.userId}))});default:return e}},w=t(50),S=t.n(w),B=t(86),k=t(52),j={userId:null,email:null,login:null,isAuth:!1},y=function(e,A,t,n){return{type:"auth/SET_USER_DATA/auth",data:{email:e,login:A,userId:t,isAuth:n}}},v=function(){return function(){var e=Object(B.a)(S.a.mark((function e(A){var t,n,a,r,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.me();case 2:0===(t=e.sent).data.resultCode&&(n=t.data.data,a=n.email,r=n.login,o=n.id,A(y(a,r,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case"auth/SET_USER_DATA/auth":return Object(E.a)(Object(E.a)({},e),A.data);default:return e}},T=t(130),N=t(127),P={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case"SET_INITIALIZED":return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},R=Object(s.c)({profilePage:c.b,messagesPage:l.b,sidebar:m,usersPage:O,auth:Q,form:N.a,app:U}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,M=Object(s.e)(R,F(Object(s.a)(T.a))),G=t(25),J=t(26),D=t(28),Y=t(27),x=(t(248),t(22)),L=(t(249),t(14)),z=t.n(L),K=t(10),H=function(){return a.a.createElement("nav",{className:z.a.nav},a.a.createElement("ul",null,a.a.createElement("li",{className:"".concat(z.a.item)},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/profile"},"Profile")),a.a.createElement("li",{className:z.a.item},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/dialogs"},"Messages")),a.a.createElement("li",{className:z.a.item},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/users"},"Users")),a.a.createElement("li",{className:z.a.item},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/news"},"News")),a.a.createElement("li",{className:z.a.item},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/music"},"Music")),a.a.createElement("li",{className:z.a.item},a.a.createElement(K.b,{activeClassName:z.a.active,to:"/settings"},"Settings"))))},Z=(t(251),t(252),function(e){return a.a.createElement("div",{className:"friend__item"},a.a.createElement("div",{className:"friend__pic"},e.img),a.a.createElement("div",{className:"friend__name"},e.name))}),q=function(e){var A=e.friendsData.map((function(e){return a.a.createElement(Z,{name:e.name,img:e.img,key:e.id})}));return a.a.createElement("div",{className:"friends"},a.a.createElement("p",{className:"friends__title"},"Friends"),a.a.createElement("div",{className:"row"},A))},W=Object(i.b)((function(e){return{friendsData:e.sidebar.friendsData}}),(function(e){return{}}))(q),V=function(){return a.a.createElement("div",{className:"sidebar"},a.a.createElement(H,null),a.a.createElement(W,null))},_=function(){return a.a.createElement("main",null,"News")},X=function(){return a.a.createElement("main",null,"Music")},$=(t(114),t(92)),ee=(t(253),function(e){var A=Math.ceil(e.totalUsersCount/e.pageSize),t=[];console.log(e.pageSize);for(var r=Math.ceil(A/e.portionSize),o=Object(n.useState)(1),i=Object($.a)(o,2),s=i[0],c=i[1],l=(s-1)*e.portionSize+1,u=s*e.portionSize,m=1;m<=A;m+=1)t.push(m);return a.a.createElement("ul",{className:"pagination"},s>1&&a.a.createElement("button",{onClick:function(){c(s-1)}},"Prev"),t.filter((function(e){return e>=l&&e<=u})).map((function(A){return e.currentPage===A?a.a.createElement("li",{key:A,className:"pagination__item pagination__item_current"},A):a.a.createElement("li",{key:A,className:"pagination__item"},a.a.createElement("a",{onClick:function(){e.onPageChanged(A)},className:"pagination__link",href:"#"},A))})),r>s&&a.a.createElement("button",{onClick:function(){c(s+1)}},"NEXT"))}),Ae=function(e){var A=e.user,t=e.followingInProgress,n=e.toggleUnFollow,r=e.toggleFollow;return a.a.createElement("div",{className:"users__item"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"users__left"},a.a.createElement("div",{className:"users__pic"},a.a.createElement(K.b,{to:"/profile/"+A.id},null!=A.photos.small?a.a.createElement("img",{src:A.photos.small,className:"users__photo",alt:""}):a.a.createElement("div",{className:"users__no-photo"},"\u0444\u043e\u0442\u043a\u0430 \u0437\u0430\u0433\u043b\u0443\u0445\u0430"))),A.followed?a.a.createElement("button",{disabled:t.some((function(e){return e===A.id})),onClick:function(){n(A.id)},className:"users__btn"},"Unfollow"):a.a.createElement("button",{disabled:t.some((function(e){return e===A.id})),onClick:function(){r(A.id)},className:"users__btn"},"Follow")),a.a.createElement("div",{className:"users__right"},a.a.createElement("div",{className:"users__block row"},a.a.createElement("div",{className:"users__info row"},a.a.createElement("p",{className:"users__name"},A.name),a.a.createElement("p",{className:"users__status"},A.status)),a.a.createElement("div",{className:"users__location"},a.a.createElement("p",{className:"users__country"},"item.location.userCountry"),a.a.createElement("p",{className:"users__city"},"item.location.userCity"))))))},te=function(e){return a.a.createElement("div",{className:"users"},a.a.createElement("h2",{className:"users__title"},"UsersList"),e.usersData.map((function(A){return a.a.createElement(Ae,{key:A.id,user:A,followingInProgress:e.followingInProgress,toggleUnFollow:e.toggleUnFollow,toggleFollow:e.toggleFollow})})),a.a.createElement(ee,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,portionSize:10,onPageChanged:e.onPageChanged}))},ne=t(62),ae=(t(136),t(134)),re=function(e){return e.usersPage.usersData},oe=(Object(ae.a)(re,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),ie=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(D.a)(t,e);var A=Object(Y.a)(t);function t(){var e;Object(G.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=A.call.apply(A,[this].concat(a))).onPageChanged=function(A){e.props.getUsers(A,e.props.pageSize),e.props.setPageAC(A)},e}return Object(J.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,A=e.currentPage,t=e.pageSize;this.props.getUsers(A,t)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(ne.a,null):null,a.a.createElement(te,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,usersData:this.props.usersData,onPageChanged:this.onPageChanged,toggleUnFollow:this.props.toggleUnFollow,toggleFollow:this.props.toggleFollow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth}))}}]),t}(a.a.Component),me=Object(s.d)(Object(i.b)((function(e){return{usersData:re(e),pageSize:oe(e),totalUsersCount:ie(e),currentPage:se(e),isFetching:ce(e),followingInProgress:le(e)}}),{toggleFollow:function(e){return function(A){var t=d.c.follow.bind(d.c);b(A,e,t,f)}},toggleUnFollow:function(e){return function(A){var t=d.c.unFollow.bind(d.c);b(A,e,t,h)}},setPageAC:function(e){return{type:"SET_PAGE",pageId:e}},getUsers:function(e,A){return function(t){t(C(!0)),d.c.getUsers(e,A).then((function(e){t(C(!1)),t({type:"SET_USERS",users:e.items}),t({type:"SET_TOTAL_COUNT",totalCount:e.totalCount})}))}}}))(ue),ge=function(){return a.a.createElement("main",null,"settings")},Ee=t(51),de=t.n(Ee),pe=function(e){return a.a.createElement("header",{className:[de.a.header,de.a.row].join(" ")},a.a.createElement("div",{className:de.a.logo},"logo"),a.a.createElement("div",null,e.isAuth?a.a.createElement("div",null,e.login," ",a.a.createElement("button",{onClick:e.logout},"Log out")):a.a.createElement(K.b,{className:de.a.loginBlock,to:"/login"},"LOGIN")))},fe=function(e){Object(D.a)(t,e);var A=Object(Y.a)(t);function t(){return Object(G.a)(this,t),A.apply(this,arguments)}return Object(J.a)(t,[{key:"render",value:function(){return a.a.createElement(pe,this.props)}}]),t}(a.a.Component),he=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}}),{logout:function(){return function(e){d.a.logout().then((function(A){0===A.data.resultCode&&e(y(null,null,null,!1))}))}}})(fe),Ce=t(125),Ie=t(126),be=t(63),Oe=t(82),we=t(48),Se=t.n(we),Be=Object(Ie.a)({form:"login"})((function(e){var A=e.handleSubmit,t=e.error;return a.a.createElement("form",{onSubmit:A},a.a.createElement("div",null,a.a.createElement(Ce.a,{validate:[Oe.b],name:"email",type:"text",placeholder:"login",component:be.a})),a.a.createElement("div",null,a.a.createElement(Ce.a,{validate:[Oe.b],name:"password",type:"password",placeholder:"password",component:be.a})),a.a.createElement("div",null,a.a.createElement(Ce.a,{name:"rememberMe",type:"checkbox",component:be.a})," remember me"),t&&a.a.createElement("div",{className:Se.a.formSummaryError},t),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),ke=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,A,t){return function(){var n=Object(B.a)(S.a.mark((function n(a){var r,o,i;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.login(e,A,t);case 2:0===(r=n.sent).data.resultCode?a(v()):(o=r.data.messages.length>0?r.data.messages[0]:"Some error",i=Object(k.a)("login",{_error:o}),a(i));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(x.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Be,{onSubmit:function(A){e.login(A.email,A.password,A.rememberMe)}}))})),je=a.a.lazy((function(){return t.e(4).then(t.bind(null,297))})),ye=a.a.lazy((function(){return t.e(3).then(t.bind(null,296))})),ve=function(e){Object(D.a)(t,e);var A=Object(Y.a)(t);function t(){return Object(G.a)(this,t),A.apply(this,arguments)}return Object(J.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"App wrapper"},a.a.createElement(he,null),a.a.createElement("div",{className:"row"},a.a.createElement(V,null),a.a.createElement(x.b,{path:"/dialogs",render:function(){return a.a.createElement(n.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(je,null))}}),a.a.createElement(x.b,{path:"/profile/:userId?",render:(e=ye,function(A){return a.a.createElement(n.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,A))})}),a.a.createElement(x.b,{path:"/users",render:function(){return a.a.createElement(me,null)}}),a.a.createElement(x.b,{path:"/news",component:_}),a.a.createElement(x.b,{path:"/music",component:X}),a.a.createElement(x.b,{path:"/settings",component:ge}),a.a.createElement(x.b,{path:"/login",component:ke}))):a.a.createElement(ne.a,null);var e}}]),t}(n.Component),Qe=Object(s.d)(x.f,Object(i.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var A=e(v());Promise.all([A]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(K.a,null,a.a.createElement(i.a,{store:M},a.a.createElement(Qe,null))),document.getElementById("root")),window.store=M,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,A,t){e.exports={formControl:"FormsControls_formControl__2OTLd",error:"FormsControls_error__1rnQR",formSummaryError:"FormsControls_formSummaryError__2sQ7M"}},51:function(e,A,t){e.exports={header:"Header_header__4ppCZ",row:"Header_row__1DmTc",logo:"Header_logo__Iwsxd",loginBlock:"Header_loginBlock__3Zy8i"}},62:function(e,A,t){"use strict";var n=t(0),a=t.n(n),r=t(133),o=t.n(r);A.a=function(e){return a.a.createElement("img",{style:{position:"absolute",top:"50%",left:"50%"},src:o.a})}},63:function(e,A,t){"use strict";t.d(A,"b",(function(){return c})),t.d(A,"a",(function(){return l}));var n=t(135),a=t(0),r=t.n(a),o=t(48),i=t.n(o),s=function(e){return function(A){var t=A.input,a=A.meta,o=Object(n.a)(A,["input","meta"]),s=a.touched&&a.error;return r.a.createElement("div",{className:i.a.formControl+" "+(s?i.a.error:"")},r.a.createElement("div",null,r.a.createElement(e,Object.assign({},t,o))),s&&r.a.createElement("span",null,a.error))}},c=s("textarea"),l=s("input")},82:function(e,A,t){"use strict";t.d(A,"b",(function(){return n})),t.d(A,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(A){if(A.length>e)return"Max length ".concat(e," symbols")}}},91:function(e,A,t){"use strict";t.d(A,"a",(function(){return i})),t.d(A,"e",(function(){return s})),t.d(A,"c",(function(){return l})),t.d(A,"d",(function(){return u})),t.d(A,"f",(function(){return m}));var n=t(39),a=t(4),r=t(13),o={postData:[{message:"Hi, how are you",id:1,likeCount:17},{message:"It is my first post",id:2,likeCount:37},{message:"It is my first sdga rg s",id:3,likeCount:27},{message:"It is my fergsedrirst poaedrgsst",id:4,likeCount:47}],profile:null,status:""},i=function(e){return{type:"ADD-POST",newPostMessage:e}},s=function(e){return{type:"UPDATE-NEW-POST-TEXT",text:e}},c=function(e){return{type:"SET_STATUS",status:e}},l=function(e){return function(A){r.c.getProfile(e).then((function(e){A({type:"SET_USER_PROFILE",profile:e.data})}))}},u=function(e){return function(A){r.b.getStatus(e).then((function(e){A(c(e.data))}))}},m=function(e){return function(A){r.b.updateStatus(e).then((function(t){0===t.data.resultCode&&A(c(e))}))}};A.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,A=arguments.length>1?arguments[1]:void 0;switch(A.type){case"ADD-POST":var t={message:A.newPostMessage,id:5,likeCount:0};return Object(a.a)(Object(a.a)({},e),{},{postData:[].concat(Object(n.a)(e.postData),[t])});case"UPDATE-NEW-POST-TEXT":return Object(a.a)(Object(a.a)({},e),{},{newPostText:A.text});case"SET_USER_PROFILE":return Object(a.a)(Object(a.a)({},e),{},{profile:A.profile});case"SET_STATUS":return Object(a.a)(Object(a.a)({},e),{},{status:A.status});case"DELETE_POST":return Object(a.a)(Object(a.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=A.postId}))});default:return e}}}},[[162,1,2]]]);
//# sourceMappingURL=main.0aa6cbfc.chunk.js.map