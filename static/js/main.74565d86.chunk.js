(this.webpackJsonpreact_stuff=this.webpackJsonpreact_stuff||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(9),d=n.n(s),o=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,d=t.getTTFB;n(e),c(e),i(e),s(e),d(e)}))}),l=n(4),a=n(10),r=n(7),u=n(3),j=n(2),m=(n(16),n(17),n(18),n(0));function b(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.edited&&t.current.focus()}),[e.edited]),Object(m.jsxs)("li",{children:[Object(m.jsxs)("label",{htmlFor:e.id,children:[Object(m.jsx)("input",{type:"checkbox",id:e.id,name:e.id,onChange:e.clickHandler,checked:e.completed}),Object(m.jsx)("div",{className:"checkbox"}),e.edited?Object(m.jsx)("input",{type:"text",ref:t,value:e.name,onChange:function(t){return e.editTaskName(t.target.value)},onBlur:e.resetEditedItem}):Object(m.jsx)("span",{className:"label-text",children:e.name})]}),Object(m.jsxs)("div",{className:"edit-delete",children:[e.edited?null:Object(m.jsx)("img",{src:"../icons/edit-icon.png",alt:"edit item",width:"35px",height:"35px",onClick:function(){e.setEditedItem()}}),Object(m.jsx)("img",{src:"../icons/delete-icon.png",alt:"delete item",width:"35px",height:"35px",onClick:e.deleteTask})]})]})}function O(e){var t=e.onlyIncomplete?e.tasks.filter((function(e){return!e.completed})):e.tasks,n=t.map((function(t){return Object(c.createElement)(b,Object(u.a)(Object(u.a)({},t),{},{clickHandler:function(){return e.toggleTaskAsComplete(t.id,!t.completed)},key:t.id,edited:e.editedItem===t.id,deleteTask:function(){return e.deleteTask(t)},resetEditedItem:e.resetEditedItem,editTaskName:function(n){return e.editTaskName(t.id,n)},setEditedItem:function(){return e.setEdit(t.id)}}))}));return Object(m.jsx)("div",{id:"task-list-area",children:0===t.length?Object(m.jsx)("div",{id:"empty-list-text",children:"Hit + to add a new task!"}):Object(m.jsx)("ul",{id:"task-list",children:n})})}n(20);function h(e){return Object(m.jsx)("header",{children:Object(m.jsxs)("h1",{children:[" ",e.title," "]})})}n(21);function p(e){var t="40px";return Object(m.jsxs)("footer",{children:[Object(m.jsx)("div",{id:"delete-completed-btn",onClick:e.deleteAllCompleted,children:Object(m.jsx)("img",{src:"../icons/delete-completed-icon.png",alt:"delete completed",width:t,height:t})}),Object(m.jsx)("div",{id:"add-new-btn",onClick:e.addTask,children:Object(m.jsx)("img",{src:"../icons/add-icon.png",alt:"Add New Task",width:t,height:t})}),Object(m.jsx)("div",{id:"show-incomplete-all-btn",onClick:function(){return e.setOnlyIncomplete(!e.onlyIncomplete)},children:e.onlyIncomplete?Object(m.jsx)("img",{src:"../icons/view-all.png",width:"45px",height:"45px",alt:"View All"}):Object(m.jsx)("img",{src:"../icons/view-incomplete.png",width:"45px",height:"45px",alt:"View Incomplete"})})]})}n(22);function f(e){return Object(m.jsx)("div",{className:"backdrop",children:Object(m.jsxs)("div",{className:"modal",children:[e.children,Object(m.jsxs)("div",{className:"alert-buttons",children:[Object(m.jsx)("img",{src:"../icons/x-icon.png",alt:"cancel",width:"45px",height:"45px",onClick:e.onClose}),Object(m.jsx)("img",{src:"../icons/delete-icon.png",alt:"confirm delete",width:"45px",height:"45px",onClick:function(){e.onClose(),e.onOK()}})]})]})})}function x(e){return Object(m.jsx)(f,{onClose:e.onClose,onOK:e.onOK,children:Object(m.jsx)("div",{children:"Are you sure you want to delete all completed tasks?"})})}function k(e){return Object(m.jsx)(f,{onClose:e.onClose,onOK:e.onOK,children:Object(m.jsxs)("div",{children:['Are you sure you want to delete "',e.name,'"?']})})}var g=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),i=n[0],s=n[1],d=Object(c.useState)(null),o=Object(j.a)(d,2),l=o[0],a=o[1],r=Object(c.useState)(!1),u=Object(j.a)(r,2),b=u[0],f=u[1],g=Object(c.useState)(null),v=Object(j.a)(g,2),C=v[0],I=v[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"main-app",children:[Object(m.jsx)(h,{title:"List of Tasks"}),Object(m.jsx)(O,{tasks:e.tasks,onlyIncomplete:i,toggleTaskAsComplete:function(t,n){return e.onItemChanged(t,"completed",n)},deleteTask:function(e){return I(e)},editTaskName:function(t,n){return e.onItemChanged(t,"name",n)},setEdit:a,editedItem:l,resetEditedItem:function(){return a(null)}}),Object(m.jsx)(p,{onlyIncomplete:i,setOnlyIncomplete:s,deleteAllCompleted:function(){return f(!b)},addTask:function(){var t=e.onItemAdded();a(t)}})]}),b&&Object(m.jsx)(x,{onClose:function(){return f(!1)},onOK:function(){e.onItemsDeleted(e.tasks.filter((function(e){return e.completed})).map((function(e){return e.id})))}}),C&&Object(m.jsx)(k,{onClose:function(){return I(null)},onOK:function(){return e.onItemsDeleted([C.id])},name:C.name})]})};function v(e){var t=Object(c.useState)(e.tasks),n=Object(j.a)(t,2),i=n[0],s=n[1];return Object(m.jsx)(g,{tasks:i,onItemChanged:function(e,t,n){s(i.map((function(c){return c.id!==e?c:Object(u.a)(Object(u.a)({},c),{},Object(r.a)({},t,n))})))},onItemAdded:function(){var e=Object(l.a)();return s([].concat(Object(a.a)(i),[{name:"",id:e,completed:!1}])),e},onItemsDeleted:function(e){s(i.filter((function(t){return!e.includes(t.id)})))}})}var C=[{name:"Buy New John Grisham Book",id:Object(l.a)(),completed:!1},{name:"Call Mom",id:Object(l.a)(),completed:!1}];d.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{tasks:C})}),document.getElementById("root")),o()}],[[23,1,2]]]);
//# sourceMappingURL=main.74565d86.chunk.js.map