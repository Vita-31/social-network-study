/*! For license information please see 6.d42eddd8.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[6],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(10);function r(e,t){if(null==e)return{};var n,r,s=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n(3),r=n(36),s=n(37),o=n(39),c=n(38),u=n(1),l=n.n(u),a=n(8),A=n(29),p=n(0),g=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(c.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(i.a)({},this.props)):Object(p.jsx)(a.a,{to:"/login"})}}]),u}(l.a.Component);return Object(A.b)(g)(t)}},245:function(e,t,n){e.exports={usersInner:"FindUsers_usersInner__1tUX9",span:"FindUsers_span__1mY3w",selectedPage:"FindUsers_selectedPage__2RrPl",icon:"FindUsers_icon__l9RE1"}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(61);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(u){r=!0,s=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw s}}return n}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},317:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var c in i)n.call(i,c)&&i[c]&&e.push(c);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},322:function(e,t,n){"use strict";n.r(t);var i=n(36),r=n(37),s=n(39),o=n(38),c=n(1),u=n.n(c),l=n(29),a=n(83),A=n(245),p=n.n(A),g=n(67),f=n(246),b=n(236),I=n(317),m=n.n(I),d=n(0),j=["portionSize"],E=function(e){for(var t=e.portionSize,n=void 0===t?10:t,i=Object(b.a)(e,j),r=Math.ceil(i.totalItemsCount/i.pageSize),s=[],o=1;o<=r;o++)s.push(o);var u=Math.ceil(r/n),l=Object(c.useState)(1),a=Object(f.a)(l,2),A=a[0],I=a[1],E=(A-1)*n+1,h=A*n;return Object(d.jsxs)("div",{className:p.a.paginator,children:[A>1&&Object(d.jsx)("button",{onClick:function(){I(A-1)},children:"Prev"}),s.filter((function(e){return e>=E&&e<=h})).map((function(e){return Object(d.jsx)("span",{className:m()(Object(g.a)({},p.a.selectedPage,i.currentPage===e),p.a.pageNumber),onClick:function(t){i.changePage(e)},children:e},e)})),u>A&&Object(d.jsx)("button",{onClick:function(){I(A+1)},children:"Next"})]})},h=n(6),O=function(e){var t=e.users;return Object(d.jsxs)("div",{className:p.a.card,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(h.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{className:p.a.photo,src:null!=t.photos.small?t.photos.large:"data:image/jpeg;base64,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"})}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:e.followingToggle.some((function(e){return e===t.id})),onClick:function(){e.unfollowSuccess(t.id)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:e.followingToggle.some((function(e){return e===t.id})),onClick:function(){e.followSuccess(t.id)},children:"Follow"})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("p",{children:t.status}),Object(d.jsx)("p",{children:"u.location.country"}),Object(d.jsx)("p",{children:"u.location.city"})]})]})},y=function(e){return Object(d.jsxs)("div",{className:p.a.usersInner,children:[e.users.map((function(t){return Object(d.jsx)(O,{users:t,followingToggle:e.followingToggle,unfollowSuccess:e.unfollowSuccess,followSuccess:e.followSuccess},t.id)})),Object(d.jsx)("div",{children:Object(d.jsx)(E,{currentPage:e.currentPage,changePage:e.changePage,totalItemsCount:e.totalItemsCount,pageSize:e.pageSize})})]})},x=n(27),P=n(8),V=n(238),w=n(40),R=function(e){return e.UsersPage.users},S=function(e){return e.UsersPage.pageSize},k=function(e){return e.UsersPage.totalItemsCount},v=function(e){return e.UsersPage.currentPage},z=function(e){return e.UsersPage.isFetching},N=function(e){return e.UsersPage.followingToggle},Z=function(e){return e.auth.isAuth},q=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).changePage=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return this.props.isAuth?Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching?Object(d.jsx)(x.a,{}):null,Object(d.jsx)(y,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,changePage:this.changePage,unfollow:this.props.unfollow,follow:this.props.follows,users:this.props.users,followingToggle:this.props.followingToggle,progressToggle:this.props.progressToggle,followSuccess:this.props.followSuccess,unfollowSuccess:this.props.unfollowSuccess})]}):Object(d.jsx)(P.a,{to:"/login"})}}]),n}(u.a.Component);t.default=Object(w.d)(Object(l.b)((function(e){return{users:R(e),pageSize:S(e),totalItemsCount:k(e),currentPage:v(e),isFetching:z(e),followingToggle:N(e),isAuth:Z(e)}}),{follows:a.c,unfollow:a.g,setTotalItemsCount:a.f,preloaderToggle:a.d,requestUsers:a.e,followSuccess:a.b,unfollowSuccess:a.h}),V.a)(q)}}]);
//# sourceMappingURL=6.d42eddd8.chunk.js.map