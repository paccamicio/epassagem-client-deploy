function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{H1qS:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),c=n("3Pt+"),o=n("tyNb"),a=n("yhGT"),r=n("fXoL"),s=n("5eHb"),l=function(t){return{completed:t}};function b(t,e){if(1&t){var n=r.Yb();r.Xb(0,"li",33),r.Xb(1,"div",34),r.Xb(2,"h4",35),r.Uc(3),r.Wb(),r.Xb(4,"span",36),r.Xb(5,"span",37),r.jc("click",(function(t){r.Kc(n);var i=e.index;return r.nc().taskDeleted(i)})),r.Xb(6,"i",14),r.Sb(7,"i",38),r.Wb(),r.Wb(),r.Xb(8,"span",39),r.jc("click",(function(t){r.Kc(n);var i=e.$implicit;return r.nc().taskCompleted(i)})),r.Xb(9,"i",14),r.Sb(10,"i",15),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb()}if(2&t){var i=e.$implicit;r.uc("ngClass",r.yc(2,l,i.completed)),r.Cb(3),r.Vc(i.text)}}var d,u,p=function(t){return{"move-up":t}},k=function(t){return{"move-down":t}},f=function(t){return{hide:t}},m=function(t){return{visible:t}},v=[{path:"",children:[{path:"",component:(d=function(){function t(e){_classCallCheck(this,t),this.toastrService=e,this.todos=a.a,this.red_border=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"addTask",value:function(t){if(!t)return this.red_border=!0,!1;this.todos.push({text:t,completed:!1}),this.text="",this.red_border=!1}},{key:"taskCompleted",value:function(t){t.completed=!t.completed,t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted")}},{key:"taskDeleted",value:function(t){this.todos.splice(t,1)}},{key:"markAllAction",value:function(t){this.todos.filter((function(e){e.completed=t})),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}}]),t}(),d.\u0275fac=function(t){return new(t||d)(r.Rb(s.b))},d.\u0275cmp=r.Lb({type:d,selectors:[["app-to-do"]],decls:44,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks"],[1,"mark-all-tasks-container"],["id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn",3,"ngClass"],[1,"action-box",3,"click"],[1,"todo-list-body"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus","mr-1"],[1,"new-task-wrapper",3,"ngClass"],["id","new-task","placeholder","Enter new task here. . .",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn",3,"click"],["id","add-task",1,"btn","btn-success","ml-3","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,e){1&t&&(r.Xb(0,"div",0),r.Xb(1,"div",1),r.Xb(2,"div",2),r.Xb(3,"div",3),r.Xb(4,"div",4),r.Xb(5,"h5"),r.Uc(6,"To-Do"),r.Wb(),r.Wb(),r.Xb(7,"div",5),r.Xb(8,"div",6),r.Xb(9,"div",7),r.Xb(10,"div",8),r.Xb(11,"div",9),r.Xb(12,"div",10),r.Xb(13,"span",11),r.Xb(14,"span",12),r.Uc(15,"Mark all as finished"),r.Wb(),r.Xb(16,"span",13),r.jc("click",(function(t){return e.markAllAction(!0)})),r.Xb(17,"i",14),r.Sb(18,"i",15),r.Wb(),r.Wb(),r.Wb(),r.Xb(19,"span",16),r.Xb(20,"span",12),r.Uc(21,"Mark all as completed"),r.Wb(),r.Xb(22,"span",17),r.jc("click",(function(t){return e.markAllAction(!1)})),r.Xb(23,"i",14),r.Sb(24,"i",15),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(25,"div",18),r.Xb(26,"ul",19),r.Sc(27,b,11,4,"li",20),r.Wb(),r.Wb(),r.Xb(28,"div",21),r.Xb(29,"div",22),r.Xb(30,"span",23),r.Xb(31,"button",24),r.jc("click",(function(t){return e.visible=!0})),r.Sb(32,"i",25),r.Uc(33,"Add new task "),r.Wb(),r.Wb(),r.Wb(),r.Xb(34,"div",26),r.Xb(35,"textarea",27),r.jc("ngModelChange",(function(t){return e.text=t})),r.Wb(),r.Xb(36,"button",28),r.jc("click",(function(t){return e.visible=!1})),r.Uc(37,"Close"),r.Wb(),r.Xb(38,"button",29),r.jc("click",(function(t){return e.addTask(e.text)})),r.Uc(39,"Add Task"),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Xb(40,"div",30),r.Xb(41,"p"),r.Sb(42,"span",31),r.Sb(43,"span",32),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb(),r.Wb()),2&t&&(r.Cb(13),r.uc("ngClass",r.yc(8,p,e.completed)),r.Cb(6),r.uc("ngClass",r.yc(10,k,!e.completed)),r.Cb(8),r.uc("ngForOf",e.todos),r.Cb(3),r.uc("ngClass",r.yc(12,f,e.visible)),r.Cb(4),r.uc("ngClass",r.yc(14,m,e.visible)),r.Cb(1),r.Ib("border-danger",e.red_border),r.uc("ngModel",e.text))},directives:[i.n,i.o,c.b,c.o,c.r],styles:[""]}),d),data:{title:"To-Do",breadcrumb:""}}]}],h=((u=function t(){_classCallCheck(this,t)}).\u0275mod=r.Pb({type:u}),u.\u0275inj=r.Ob({factory:function(t){return new(t||u)},imports:[[o.h.forChild(v)],o.h]}),u);n.d(e,"ToDoModule",(function(){return W}));var X,W=((X=function t(){_classCallCheck(this,t)}).\u0275mod=r.Pb({type:X}),X.\u0275inj=r.Ob({factory:function(t){return new(t||X)},imports:[[i.c,c.j,h]]}),X)}}]);