(this["webpackJsonpbook-app"]=this["webpackJsonpbook-app"]||[]).push([[0],{57:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(7),o=r.n(n),s=r(4),i=r(6),l=r.n(i),u=r(14),d=r(15),b=r(2),j=r(25),h=r.n(j),m={apiKey:"AIzaSyC6jeisnRdSmhK6q3VAMGtuDmf3Kaogv-M",search:function(e,t,r){return h.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=30&startIndex=").concat(t,"&orderBy=").concat(r,"&key=").concat(m.apiKey)).then((function(e){return e.data}))}},p=m,O="GET_SEARCH_DATA",v="GET_MORE_RESULTS",g="GET_CURRENT_SEARCH",f="SET_ISOPEN",x="GET_CATEGORY",y="TOGGLE_IS_FETCHING",k={isFetching:!1,totalItems:0,bookItems:[],currentSearch:{value:"",category:"",sort:"",step:1,startIndex:0}},I=function(e){return{type:y,payload:{isFetching:e}}},S=function(e){return{type:x,payload:{category:e}}},N=function(e,t,r){return{type:g,payload:{value:e,category:t,sort:r}}},_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y:return Object(b.a)(Object(b.a)({},t),{},{isFetching:r.payload.isFetching});case f:var c=t.bookItems.map((function(e){return e.id===r.payload.id&&(e.isOpen=!e.isOpen),e}));return Object(b.a)(Object(b.a)({},t),{},{bookItems:c});case g:var a=t.currentSearch.value===r.payload.value&&t.currentSearch.category===r.payload.category&&t.currentSearch.sort===r.payload.sort?{startIndex:t.currentSearch.startIndex+=30,step:t.currentSearch.step+=1}:{startIndex:0,step:1};return Object(b.a)(Object(b.a)({},t),{},{currentSearch:Object(b.a)({value:r.payload.value,category:r.payload.category,sort:r.payload.sort},a)});case O:var n=(null===(e=r.payload.items)||void 0===e?void 0:e.length)?r.payload.items.map((function(e){var t;return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,category:e.volumeInfo.categories,description:e.volumeInfo.description,imageUrl:null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail,isOpen:!1}})):[];return Object(b.a)(Object(b.a)({},t),{},{totalItems:r.payload.totalItems,bookItems:n});case v:var o=r.payload.items?r.payload.items.map((function(e){var t;return{id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,category:e.volumeInfo.categories,description:e.description,imageUrl:null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail,isOpen:!1}})):[];return Object(b.a)(Object(b.a)({},t),{},{bookItems:[].concat(Object(d.a)(t.bookItems),Object(d.a)(o))});case x:var s=t.bookItems.filter((function(e){var t;return"all"===r.payload.category||(null===(t=e.category)||void 0===t?void 0:t[0].toLowerCase())===r.payload.category?e:null}));return Object(b.a)(Object(b.a)({},t),{},{bookItems:s});default:return t}},w=r(0),T=function(e){var t,r,c=e.book,a=e.openHandler;return Object(w.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 book-card",children:Object(w.jsxs)("div",{onClick:function(){return a(c.id)},className:"book-card__inner",children:[Object(w.jsx)("div",{className:"book-card__img",children:Object(w.jsx)("img",{alt:c.title,src:c.imageUrl})}),Object(w.jsxs)("div",{className:"book-card__text",children:[Object(w.jsx)("p",{className:"category-text",children:(null===(t=c.category)||void 0===t?void 0:t[0])||"All"}),Object(w.jsx)("h4",{children:c.title}),Object(w.jsx)("p",{className:"authors",children:(null===(r=c.authors)||void 0===r?void 0:r.join(", "))||""})]})]})})},C=function(e){var t,r,c=e.book,a=e.setIsOpen;return Object(w.jsxs)("div",{className:"book-page row",children:[Object(w.jsx)("div",{className:"col-sm-6 book-page__img-container",children:Object(w.jsx)("img",{alt:c.title,src:c.imageUrl})}),Object(w.jsxs)("div",{className:"col-sm-6 book-page_right",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:"category-text d-block",children:null===(t=c.category)||void 0===t?void 0:t.join(", ")}),Object(w.jsx)("h2",{children:c.title}),Object(w.jsx)("p",{children:null===(r=c.authors)||void 0===r?void 0:r.join(", ")}),Object(w.jsx)("p",{children:c.description})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:function(){return a(c.id)},className:"books-button",children:"Back"})})]})]})},E=r.p+"static/media/loader.13e75cb5.gif",R=function(){return Object(w.jsx)("div",{className:"preloader",children:Object(w.jsx)("img",{src:E,alt:"loading..."})})},F=Object(s.b)((function(e){return{books:e.searchData}}),{getMoreResultsThunk:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(r){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(I(!0)),r(N(e.currentSearch.value,e.currentSearch.category,e.currentSearch.sort)),t.next=4,p.search(e.currentSearch.value,e.currentSearch.startIndex,e.currentSearch.sort);case 4:c=t.sent,r({type:v,payload:c}),r(S(e.currentSearch.category)),r(I(!1));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setIsOpen:function(e){return{type:f,payload:{id:e}}}})((function(e){var t=e.books,r=e.getMoreResultsThunk,c=e.setIsOpen;return t.bookItems.some((function(e){return!0===e.isOpen}))?Object(w.jsx)(C,{book:t.bookItems.filter((function(e){return!0===e.isOpen}))[0],setIsOpen:c}):Object(w.jsxs)("div",{className:"container books-results",children:[!t.bookItems.length&&t.isFetching&&Object(w.jsx)(R,{}),!!t.bookItems.length&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("p",{className:"text-center",children:["found ",t.totalItems," results in all categories, showing results for the category ",t.currentSearch.category]}),Object(w.jsx)("div",{className:"row book-results__items",children:t.bookItems.map((function(e,t){return Object(w.jsx)(T,{book:e,openHandler:c},t)}))}),t.totalItems-t.currentSearch.startIndex<=30?null:t.isFetching?Object(w.jsx)(R,{}):Object(w.jsx)("button",{onClick:function(){return r(t)},className:"books-button more-button",children:" Load more"})]})]})})),G=r(16),A=Object(s.b)(null,{getSearchDataThunk:function(e,t,r,c){return function(){var a=Object(u.a)(l.a.mark((function a(n){var o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(I(!0)),n(N(e,c,r)),a.next=4,p.search(e,t,r);case 4:o=a.sent,n({type:O,payload:o}),n(S(c)),n(I(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.getSearchDataThunk,r=Object(c.useRef)(null),a=Object(c.useState)("relevance"),n=Object(G.a)(a,2),o=n[0],s=n[1],i=Object(c.useState)("all"),l=Object(G.a)(i,2),u=l[0],d=l[1];return Object(w.jsx)("header",{className:"header ",children:Object(w.jsxs)("div",{className:"header__inner",children:[Object(w.jsx)("h1",{className:"text-center",children:"Search for books"}),Object(w.jsxs)("form",{className:"row search-form",onSubmit:function(e){return function(e){e.preventDefault(),t(r.current.value.trim(),0,o,u),r.current.value=""}(e)},children:[Object(w.jsxs)("div",{className:"col-12 search-form__input",children:[Object(w.jsx)("input",{ref:r,placeholder:"Search for books"}),Object(w.jsx)("button",{type:"submit",children:"Search"})]}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsx)("label",{children:"Sort By"}),Object(w.jsxs)("select",{onChange:function(e){return s(e.target.value)},children:[Object(w.jsx)("option",{value:"relevance",children:"Relevance"}),Object(w.jsx)("option",{value:"newest",children:"Newest"})]})]}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsx)("label",{children:"Categories"}),Object(w.jsx)("select",{onChange:function(e){return d(e.target.value)},children:["all","art","biography","computers","history","medical","poetry"].map((function(e){return Object(w.jsx)("option",{value:e,children:e},e)}))})]})]})]})})})),D=function(){return Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)(A,{}),Object(w.jsx)(F,{})]})},L=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,59)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),c(e),a(e),n(e),o(e)}))},M=(r(56),r(57),r(9)),U=r(26),B=Object(M.b)({searchData:_}),H=Object(M.c)(B,Object(M.a)(U.a));o.a.render(Object(w.jsx)(s.a,{store:H,children:Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(D,{})})}),document.getElementById("root")),L()}},[[58,1,2]]]);
//# sourceMappingURL=main.36f27cf6.chunk.js.map