(this.webpackJsonpreact_stuff=this.webpackJsonpreact_stuff||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(13),i=n.n(c),a=n(44),s=n.n(a),o=(n(49),n(0)),l=n.n(o),r=n(3),d=n(29),u=n(14),j=n(32),b=n(33),m=n(5),p=n(18),O=n(41),h=(n(51),n(52),n(53),n(28)),x=n.p+"static/media/edit-icon.7c5f10b5.png",f=n.p+"static/media/edit-complete-icon.2ab64857.png",g=n.p+"static/media/delete-icon.055df34c.png",k=n(6);function C(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.edited&&(t.current.focus(),t.current.scrollIntoView())}),[e.edited]),Object(k.jsxs)("li",{children:[Object(k.jsxs)("div",{className:"task-row",tabIndex:0,"aria-label":"Task,"+e.name+"; Priority Level,"+e.priority+(e.completed?"; Completed":"; Incomplete"),children:[Object(k.jsxs)("label",{htmlFor:e.id,children:[Object(k.jsx)("input",{type:"checkbox",id:e.id,name:e.id,onChange:e.clickHandler,checked:e.completed}),Object(k.jsx)("div",{htmlFor:e.id,className:"checkbox priority-"+e.priority,tabIndex:0,onKeyUp:function(t){32===t.keyCode&&e.clickHandler()}}),e.edited?Object(k.jsx)(h.a,{value:e.name,ref:t,"aria-label":"Rename Task; Current name, "+e.name,onChange:function(t){return e.editTaskName(t.target.value)}}):Object(k.jsx)("span",{className:"label-text","aria-label":"Task name, "+e.name+"; checkbox",children:e.name})]}),Object(k.jsxs)("div",{className:"edit-delete",children:[Object(k.jsx)("button",{onClick:function(){e.edited?e.resetEditedItem():e.setEditedItem()},"aria-label":e.edited?"Stop editing task":"Edit task",children:Object(k.jsx)("img",{src:e.edited?f:x,alt:"edit item",width:"35px",height:"35px"})}),Object(k.jsx)("button",{onClick:e.deleteTask,children:Object(k.jsx)("img",{src:g,alt:"delete item",width:"35px",height:"35px","aria-label":"Delete task,"+e.name})})]})]}),e.edited?Object(k.jsxs)("div",{className:"priority-select",children:[Object(k.jsx)("span",{className:"priority-label",children:"Priority: "}),[1,2,3].map((function(t){return Object(k.jsx)("span",{className:"priority-box priority-"+t,"aria-label":(e.priority!==t?"Change priority level to, "+t+" ;":"")+"Current priority level, "+e.priority,tabIndex:0,onKeyUp:function(n){32===n.keyCode&&e.editPriority(t)},onClick:function(){return e.editPriority(t)}},t)}))]}):null]})}function v(e){if("boolean"===typeof e.tasks)return Object(k.jsx)("div",{id:"task-list-area",children:Object(k.jsx)("div",{id:"empty-list-text",children:"Loading ..."})});var t=e.onlyIncomplete?e.tasks.filter((function(e){return!e.completed})):e.tasks,n=t.map((function(t){return Object(c.createElement)(C,Object(d.a)(Object(d.a)({},t),{},{clickHandler:function(){return e.toggleTaskAsComplete(t.id,!t.completed)},key:t.id,edited:e.editedItem===t.id,deleteTask:function(){return e.deleteTask(t)},resetEditedItem:e.resetEditedItem,editPriority:function(n){return e.editPriority(t.id,n)},editTaskName:function(n){return e.editTaskName(t.id,n)},setEditedItem:function(){return e.setEdit(t.id)}}))}));return Object(k.jsx)("div",{id:"task-list-area",tabIndex:0,children:0===t.length?Object(k.jsx)("div",{id:"empty-list-text",children:"Hit + to add a new task!"}):Object(k.jsx)("ul",{id:"task-list",children:n})})}n(55);function y(e){return Object(k.jsx)("header",{children:Object(k.jsx)("button",{onClick:e.onClick,tabIndex:0,"aria-label":"Current List, "+e.title+"; Open Change List Menu",children:Object(k.jsxs)("h1",{children:[" ",e.title," ",Object(k.jsx)("span",{id:"header-triangle",children:"\u25bc"})," "]})})})}n(56);var w=n.p+"static/media/delete-completed-icon.e1dafe41.png",I=n.p+"static/media/add-icon.3e4e9024.png",S=n.p+"static/media/view-all.a1c1e44f.png",N=n.p+"static/media/view-incomplete.9f41f095.png";function A(e){var t="40px";return Object(k.jsxs)("footer",{tabIndex:0,children:[Object(k.jsx)("button",{id:"delete-completed-btn",onClick:e.deleteAllCompleted,"aria-label":"Delete all completed tasks",children:Object(k.jsx)("img",{src:w,alt:"delete completed",width:t,height:t})}),Object(k.jsx)("button",{id:"add-new-btn",tabIndex:0,onClick:e.addTask,"aria-label":"Add new task",children:Object(k.jsx)("img",{src:I,alt:"Add New Task",width:t,height:t})}),Object(k.jsx)("button",{id:"show-incomplete-all-btn",tabIndex:0,onClick:function(){return e.setOnlyIncomplete(!e.onlyIncomplete)},"aria-label":e.onlyIncomplete?"Currently viewing, only incomplete tasks; View all tasks":"Currently viewing, all tasks; View only incomplete tasks",children:e.onlyIncomplete?Object(k.jsx)("img",{src:S,width:"45px",height:"45px",alt:"View All"}):Object(k.jsx)("img",{src:N,width:"45px",height:"45px",alt:"View Incomplete"})})]})}n(57);var T=n.p+"static/media/x-icon.5726abf3.png",E=n.p+"static/media/check-icon.22fa9d5c.png";n(58);function L(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(c.useEffect)((function(){return t.current.focus()}),[]),Object(k.jsx)("div",{className:"backdrop",tabIndex:-1,children:Object(k.jsxs)("div",{className:e.modalClassName,tabIndex:1,ref:t,id:"collection-modal",onKeyDown:function(e){"Tab"===e.key&&e.shiftKey&&"collection-modal"===e.target.id&&(e.stopPropagation(),e.preventDefault(),setTimeout((function(){n.current&&n.current.focus()}),0))},children:[e.children,Object(k.jsxs)("div",{className:"alert-buttons",children:[Object(k.jsx)("button",{onClick:e.onClose,tabIndex:1,children:Object(k.jsx)("img",{src:T,alt:"cancel",width:"45px",height:"45px","aria-label":"Close Pop-up"})}),e.middleIcon&&Object(k.jsx)("button",{tabIndex:1,onClick:e.middleIconOnClick,"aria-label":"Add new list",children:e.middleIcon}),Object(k.jsx)("button",{tabIndex:1,ref:n,"aria-label":"Confirm",onClick:function(){e.onClose(),e.onOK()},onKeyDown:function(e){"Tab"!==e.key||e.shiftKey||setTimeout((function(){t.current&&t.current.focus()}),0)},children:Object(k.jsx)("img",{src:e.deleteAlert?g:E,alt:"confirm delete",width:"45px",height:"45px"})})]})]})})}function K(e){return Object(k.jsx)(L,{modalClassName:"delete-modal",onClose:e.onClose,onOK:e.onOK,deleteAlert:!0,children:e.children})}function D(e){return Object(k.jsx)(K,{onClose:e.onClose,onOK:e.onOK,children:Object(k.jsx)("div",{children:"Are you sure you want to delete all ".concat(e.completedTasksNumber,"/").concat(e.tasksNumber," completed tasks?")})})}function P(e){return Object(k.jsx)(K,{onClose:e.onClose,onOK:e.onOK,children:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Are you sure you want to delete "}),Object(k.jsx)("span",{className:"task-name",children:e.name}),Object(k.jsx)("span",{children:"?"})]})})}n(59);var M=n.p+"static/media/share-icon.24d01bbd.png";n(60);function U(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),l=o[0],r=o[1],d=Object(c.useRef)(null);return Object(c.useEffect)((function(){l&&(d.current.focus(),d.current.scrollIntoView())}),[l]),Object(k.jsxs)("li",{children:[Object(k.jsxs)("div",{className:"collection-row",children:[Object(k.jsx)("button",{tabIndex:1,onClick:function(){return e.setSelectedCollection(e.name)},"aria-label":"List,  "+e.name+(e.selected?"; Currently Selected":"; Select List"),children:Object(k.jsx)("span",{className:e.selected?"highlighted small-caps":"small-caps",children:e.name})}),Object(k.jsxs)("div",{className:"button-group",children:[Object(k.jsx)("button",{tabIndex:1,onClick:function(){return r(!0)},"aria-label":"Share List",children:Object(k.jsx)("img",{src:M,alt:"share",width:"45px",height:"45px"})}),!e.selected&&Object(k.jsx)("button",{tabIndex:1,onClick:e.onDelete,"aria-label":"Delete List, "+e.name,children:Object(k.jsx)("img",{src:g,alt:"cancel",width:"45px",height:"45px"})})]})]}),l&&Object(k.jsxs)("div",{className:"email-row",children:[Object(k.jsx)("label",{children:"Email: "}),Object(k.jsx)(h.a,{value:i,ref:d,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.stopPropagation(),d.current.blur())},onBlur:function(t){r(!1),e.onShared(i)}},"edit")]})]},e.name)}function V(e){var t=Object(c.useState)(e.collection),n=Object(u.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),l=o[0],r=o[1],d=Object(c.useState)(!1),j=Object(u.a)(d,2),b=j[0],m=j[1],p=Object(c.useRef)(null);return Object(c.useEffect)((function(){b&&(p.current.focus(),p.current.scrollIntoView())}),[b]),Object(k.jsx)(L,{onClose:e.onClose,onOK:function(){return e.onOK(i)},modalClassName:"change-collection-modal",deleteAlert:!1,middleIcon:Object(k.jsx)("img",{src:I,alt:"cancel",width:"45px",height:"45px"}),middleIconOnClick:function(){return m(!0)},children:Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"center-text",children:"Which list would you like to view?"}),Object(k.jsx)("ul",{id:"collections-list",children:e.collections.map((function(t){return Object(k.jsx)(U,{setSelectedCollection:function(){return a(t)},onShared:function(n){return e.onCollectionShared(t,n)},selected:i.id===t.id,name:t.name,onDelete:function(){return e.onCollectionsDeleted(t)}},t.name)}))}),b&&Object(k.jsx)(h.a,{value:l,ref:p,onChange:function(e){return r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.stopPropagation(),p.current.blur())},onBlur:function(t){m(!1),""===l?(e.onCollectionsAdded("Untitled"),a("Untitled")):(e.onCollectionsAdded(l),a(l))}},"edit")]})})}n(61);var F=n.p+"static/media/sort-icon.79aeb5e0.png",R=n.p+"static/media/sort-complete-icon.9777492c.png";function B(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),i=n[0],a=n[1],s=Object(u.a)(e.sortOptions,2),o=s[0],l=s[1],r="40px";return Object(k.jsxs)("div",{id:"sort-bar",tabIndex:0,children:[i&&Object(k.jsx)("button",{onClick:function(){return e.setSortOptions([o,"asc"===l?"desc":"asc"])},"aria-label":"Toggle Sort Direction; Current Sort direction, "+l+"ending",children:Object(k.jsx)("div",{className:"current-sort",children:"asc"===l?"\u2191":"\u2193"})}),i&&["created","name","priority"].map((function(t){return Object(k.jsx)("button",{onClick:function(){return e.setSortOptions([t,l])},"aria-label":o===t?"Current Sort Method; Method, "+t:"Change Sort Method; Method, "+t,children:Object(k.jsx)("div",{id:t,className:o===t?"current-sort":"",children:t})},t)})),Object(k.jsx)("button",{onClick:function(){return a(!i)},"aria-label":i?"Close sort menu":"open sort menu",children:Object(k.jsx)("img",{src:i?R:F,alt:"sort",width:r,height:r})})]})}n(62);var H=n.p+"static/media/person-icon.be761eed.png";function q(e){var t="40px";return Object(k.jsxs)("div",{id:"logout-bar",tabIndex:0,children:[Object(k.jsx)("div",{children:e.email}),Object(k.jsxs)("div",{id:"logout-group",children:[Object(k.jsx)("label",{htmlFor:"logout",children:"Logout"}),Object(k.jsx)("button",{id:"logout",name:"logout",onClick:e.logOut,"aria-label":"Log Out",children:Object(k.jsx)("img",{src:H,alt:"logout",width:t,height:t})})]})]})}var J=function(e){var t=Object(O.useMediaQuery)({query:"(min-width: 1225px)"}),n=Object(O.useMediaQuery)({query:"(max-width: 1224px)"}),i=Object(c.useState)(!1),a=Object(u.a)(i,2),s=a[0],o=a[1],l=Object(c.useState)(null),r=Object(u.a)(l,2),d=r[0],j=r[1],b=Object(c.useState)(!1),m=Object(u.a)(b,2),p=m[0],h=m[1],x=Object(c.useState)(null),f=Object(u.a)(x,2),g=f[0],C=f[1],w=Object(c.useState)(!1),I=Object(u.a)(w,2),S=I[0],N=I[1],T=Object(k.jsx)(A,{onlyIncomplete:s,setOnlyIncomplete:o,deleteAllCompleted:function(){return h(!p)},addTask:function(){var t=e.onItemAdded();j(t)}});return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{className:"main-app",children:[Object(k.jsx)(q,{logOut:e.logOut,email:e.email}),Object(k.jsx)(y,{title:e.collection.name,onClick:function(){return N(!0)}}),t&&T,Object(k.jsx)(B,{sortOptions:e.sortOptions,setSortOptions:e.setSortOptions}),Object(k.jsx)(v,{tasks:e.tasks,onlyIncomplete:s,toggleTaskAsComplete:function(t,n){return e.onItemChanged(t,"completed",n)},deleteTask:function(e){return C(e)},editPriority:function(t,n){return e.onItemChanged(t,"priority",n)},editTaskName:function(t,n){return e.onItemChanged(t,"name",n)},setEdit:j,editedItem:d,resetEditedItem:function(){return j(null)}}),n&&T]}),p&&Object(k.jsx)(D,{onClose:function(){return h(!1)},onOK:function(){e.onItemsDeleted(e.tasks.filter((function(e){return e.completed})).map((function(e){return e.id})))},tasksNumber:e.tasks.length,completedTasksNumber:e.tasks.filter((function(e){return e.completed})).length}),g&&Object(k.jsx)(P,{onClose:function(){return C(null)},onOK:function(){return e.onItemsDeleted([g.id])},name:g.name}),S&&Object(k.jsx)(V,{onClose:function(){return N(null)},onOK:e.setCollection,collection:e.collection,onCollectionsAdded:e.onCollectionsAdded,onCollectionsDeleted:e.onCollectionsDeleted,onCollectionShared:e.onCollectionShared,collections:e.collections})]})},Q=n(30),z=n(42);function W(e){var t=e.db.collection("Lists").where("shared","array-contains",e.user.email),n=Object(z.a)(t),i=Object(u.a)(n,3),a=i[0],s=(i[1],i[2],Object(c.useState)(null)),o=Object(u.a)(s,2),d=o[0],j=o[1],O=Object(c.useState)(["priority","desc"]),h=Object(u.a)(O,2),x=h[0],f=h[1],g=Object(u.a)(x,2),C=g[0],v=g[1],y=e.db.collection("Lists/".concat(d?d.id:"null","/tasks")).orderBy(C,v),w=Object(z.a)(y),I=Object(u.a)(w,3),S=I[0],N=I[1];I[2];function A(){return A=Object(r.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.db.doc("Lists/".concat(n.id)).delete();case 1:case"end":return t.stop()}}),t)}))),A.apply(this,arguments)}var T=N||!S?N:S.docs.map((function(e){return e.data()}));return Object(k.jsx)(J,{setCollection:j,collection:d||{name:"Loading",id:null},tasks:T,sortOptions:x,setSortOptions:f,onItemChanged:function(t,n,c){e.db.collection("Lists/".concat(d.id,"/tasks")).doc(t).update(Object(m.a)({},n,c))},onItemAdded:function(){var t=Object(b.a)();return e.db.collection("Lists/".concat(d.id,"/tasks")).doc(t).set({id:t,name:"",completed:!1,priority:2,created:Q.a.database.ServerValue.TIMESTAMP}),t},onItemsDeleted:function(t){var n=e.db.collection("Lists/".concat(d.id,"/tasks"));t.forEach((function(e){return n.doc(e).delete()}))},onCollectionsAdded:function(t){var n=Object(b.a)();e.db.doc("Lists/".concat(n)).set({id:n,name:t,owner:e.user.uid,shared:[e.user.email]})},onCollectionsDeleted:function(e){return A.apply(this,arguments)},onCollectionShared:function(t,n){if(""!==n)e.db.doc("Lists/".concat(t.id)).update({shared:[].concat(Object(p.a)(t.shared),[n])})},collections:function(e){var t=[];return e&&(e.docs.forEach((function(e){t.push(e.data())})),null===d&&j(t[0])),t}(a),logOut:e.logOut,email:e.user.email})}n(64);Q.a.initializeApp({apiKey:"AIzaSyAqjBv9F9MnhkTPQeRghfLj06E8iJVh0lg",authDomain:"list-of-tasks-281cc.firebaseapp.com",projectId:"list-of-tasks-281cc",storageBucket:"list-of-tasks-281cc.appspot.com",messagingSenderId:"319211842925",appId:"1:319211842925:web:78baa57a16f2989eac3e64"});var _=Q.a.firestore(),G=Q.a.auth();function X(e){var t=Object(j.a)(G),n=Object(u.a)(t,3),i=n[0],a=n[1],s=n[2],o=Object(c.useState)(""),l=Object(u.a)(o,2),r=l[0],b=l[1],m=Object(c.useState)(""),p=Object(u.a)(m,2),O=p[0],h=p[1];return a?Object(k.jsx)("p",{children:"Checking..."}):i?Object(k.jsx)("div",{className:"AuthApp",children:Object(k.jsx)(W,Object(d.a)(Object(d.a)({},e),{},{user:i,db:_,logOut:function(){return G.signOut()}}))}):Object(k.jsx)("div",{className:"AuthApp",children:Object(k.jsx)("div",{className:"login-wrapper",children:Object(k.jsxs)("div",{className:"login-page",children:[Object(k.jsx)("h1",{className:"app-title",children:"List of Tasks"}),s&&Object(k.jsxs)("p",{children:["Error App: ",s.message]}),Object(k.jsxs)("div",{className:"form-input",children:[Object(k.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email:"})," ",Object(k.jsx)("input",{className:"login-input",type:"email",id:"email",value:r,onChange:function(e){return b(e.target.value)}})]}),Object(k.jsxs)("div",{className:"form-input",children:[Object(k.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password:"}),Object(k.jsx)("input",{type:"password",id:"password",value:O,className:"login-input",onChange:function(e){return h(e.target.value)}})]}),Object(k.jsx)(Y,{email:r,password:O},"Sign In"),Object(k.jsx)(Z,{email:r,password:O},"Sign Up")]})})})}function Y(e){var t=Object(j.c)(G),n=Object(u.a)(t,4),c=n[0],i=n[1],a=n[2],s=n[3];return i?Object(k.jsx)("div",{children:"Unexpectedly signed in already"}):a?Object(k.jsx)("p",{children:"Logging in\u2026"}):Object(k.jsxs)(k.Fragment,{children:[s&&Object(k.jsxs)("p",{children:["Error logging in: ",s.message]}),Object(k.jsx)("button",{className:"login-button",onClick:function(){return c(e.email,e.password)},children:"Login"})]})}function Z(e){var t=Object(j.b)(G),n=Object(u.a)(t,4),i=(n[0],n[1]),a=n[2],s=n[3],o=Object(c.useState)(null),d=Object(u.a)(o,2),m=d[0],p=d[1];return i?Object(k.jsx)("div",{children:"Unexpectedly signed in already"}):a?Object(k.jsx)("p",{children:"Signing up\u2026"}):Object(k.jsxs)(k.Fragment,{children:[s||m&&Object(k.jsxs)("p",{children:["Error signing up: ",s||m]}),Object(k.jsx)("button",{className:"login-button",onClick:Object(r.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.createUserWithEmailAndPassword(e.email,e.password);case 3:return n=t.sent,c=Object(b.a)(),t.next=7,_.doc("Lists/".concat(c)).set({id:c,name:"Tasks",owner:n.user.uid,shared:[n.user.email],tasks:[]});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),p(t.t0.message),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),children:"Sign Up"})]})}s.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(X,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3ba7d123.chunk.js.map