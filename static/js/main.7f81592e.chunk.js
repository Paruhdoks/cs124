(this.webpackJsonpreact_stuff=this.webpackJsonpreact_stuff||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),d=n(9),s=n.n(d),l=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,d=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),d(e),s(e)}))}),a=n(4),o=n(10),r=n(7),u=n(3),j=n(2),m=(n(16),n(17),n(18),n.p+"static/media/edit-icon.7c5f10b5.png"),b=n.p+"static/media/delete-icon.055df34c.png",p=n(0);function O(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){e.edited&&t.current.focus()}),[e.edited]),Object(p.jsxs)("li",{children:[Object(p.jsxs)("label",{htmlFor:e.id,children:[Object(p.jsx)("input",{type:"checkbox",id:e.id,name:e.id,onChange:e.clickHandler,checked:e.completed}),Object(p.jsx)("div",{className:"checkbox"}),e.edited?Object(p.jsx)("input",{type:"text",ref:t,value:e.name,onChange:function(t){return e.editTaskName(t.target.value)},onBlur:e.resetEditedItem}):Object(p.jsx)("span",{className:"label-text",children:e.name})]}),Object(p.jsxs)("div",{className:"edit-delete",children:[e.edited?null:Object(p.jsx)("img",{src:m,alt:"edit item",width:"35px",height:"35px",onClick:function(){e.setEditedItem()}}),Object(p.jsx)("img",{src:b,alt:"delete item",width:"35px",height:"35px",onClick:e.deleteTask})]})]})}function f(e){var t=e.onlyIncomplete?e.tasks.filter((function(e){return!e.completed})):e.tasks,n=t.map((function(t){return Object(c.createElement)(O,Object(u.a)(Object(u.a)({},t),{},{clickHandler:function(){return e.toggleTaskAsComplete(t.id,!t.completed)},key:t.id,edited:e.editedItem===t.id,deleteTask:function(){return e.deleteTask(t)},resetEditedItem:e.resetEditedItem,editTaskName:function(n){return e.editTaskName(t.id,n)},setEditedItem:function(){return e.setEdit(t.id)}}))}));return Object(p.jsx)("div",{id:"task-list-area",children:0===t.length?Object(p.jsx)("div",{id:"empty-list-text",children:"Hit + to add a new task!"}):Object(p.jsx)("ul",{id:"task-list",children:n})})}n(20);function h(e){return Object(p.jsx)("header",{children:Object(p.jsxs)("h1",{children:[" ",e.title," "]})})}n(21);var x=n.p+"static/media/delete-completed-icon.e1dafe41.png",k=n.p+"static/media/add-icon.3e4e9024.png",g=n.p+"static/media/view-all.a1c1e44f.png",v=n.p+"static/media/view-incomplete.9f41f095.png";function C(e){var t="40px";return Object(p.jsxs)("footer",{children:[Object(p.jsx)("div",{id:"delete-completed-btn",onClick:e.deleteAllCompleted,children:Object(p.jsx)("img",{src:x,alt:"delete completed",width:t,height:t})}),Object(p.jsx)("div",{id:"add-new-btn",onClick:e.addTask,children:Object(p.jsx)("img",{src:k,alt:"Add New Task",width:t,height:t})}),Object(p.jsx)("div",{id:"show-incomplete-all-btn",onClick:function(){return e.setOnlyIncomplete(!e.onlyIncomplete)},children:e.onlyIncomplete?Object(p.jsx)("img",{src:g,width:"45px",height:"45px",alt:"View All"}):Object(p.jsx)("img",{src:v,width:"45px",height:"45px",alt:"View Incomplete"})})]})}n(22);var I=n.p+"static/media/x-icon.5726abf3.png";function w(e){return Object(p.jsx)("div",{className:"backdrop",children:Object(p.jsxs)("div",{className:"modal",children:[e.children,Object(p.jsxs)("div",{className:"alert-buttons",children:[Object(p.jsx)("img",{src:I,alt:"cancel",width:"45px",height:"45px",onClick:e.onClose}),Object(p.jsx)("img",{src:b,alt:"confirm delete",width:"45px",height:"45px",onClick:function(){e.onClose(),e.onOK()}})]})]})})}function y(e){return Object(p.jsx)(w,{onClose:e.onClose,onOK:e.onOK,children:Object(p.jsx)("div",{children:"Are you sure you want to delete all completed tasks?"})})}function T(e){return Object(p.jsx)(w,{onClose:e.onClose,onOK:e.onOK,children:Object(p.jsxs)("div",{children:['Are you sure you want to delete "',e.name,'"?']})})}var N=function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),i=n[0],d=n[1],s=Object(c.useState)(null),l=Object(j.a)(s,2),a=l[0],o=l[1],r=Object(c.useState)(!1),u=Object(j.a)(r,2),m=u[0],b=u[1],O=Object(c.useState)(null),x=Object(j.a)(O,2),k=x[0],g=x[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"main-app",children:[Object(p.jsx)(h,{title:"List of Tasks"}),Object(p.jsx)(f,{tasks:e.tasks,onlyIncomplete:i,toggleTaskAsComplete:function(t,n){return e.onItemChanged(t,"completed",n)},deleteTask:function(e){return g(e)},editTaskName:function(t,n){return e.onItemChanged(t,"name",n)},setEdit:o,editedItem:a,resetEditedItem:function(){return o(null)}}),Object(p.jsx)(C,{onlyIncomplete:i,setOnlyIncomplete:d,deleteAllCompleted:function(){return b(!m)},addTask:function(){var t=e.onItemAdded();o(t)}})]}),m&&Object(p.jsx)(y,{onClose:function(){return b(!1)},onOK:function(){e.onItemsDeleted(e.tasks.filter((function(e){return e.completed})).map((function(e){return e.id})))}}),k&&Object(p.jsx)(T,{onClose:function(){return g(null)},onOK:function(){return e.onItemsDeleted([k.id])},name:k.name})]})};function A(e){var t=Object(c.useState)(e.tasks),n=Object(j.a)(t,2),i=n[0],d=n[1];return Object(p.jsx)(N,{tasks:i,onItemChanged:function(e,t,n){d(i.map((function(c){return c.id!==e?c:Object(u.a)(Object(u.a)({},c),{},Object(r.a)({},t,n))})))},onItemAdded:function(){var e=Object(a.a)();return d([].concat(Object(o.a)(i),[{name:"",id:e,completed:!1}])),e},onItemsDeleted:function(e){d(i.filter((function(t){return!e.includes(t.id)})))}})}var E=[{name:"Buy New John Grisham Book",id:Object(a.a)(),completed:!1},{name:"Call Mom",id:Object(a.a)(),completed:!1}];s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(A,{tasks:E})}),document.getElementById("root")),l()}],[[23,1,2]]]);
//# sourceMappingURL=main.7f81592e.chunk.js.map