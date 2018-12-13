(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(65)},35:function(e,t,n){},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),i=n.n(c),o=(n(35),n(4)),l=n(5),s=n(8),u=n(6),d=n(7),p=(n(37),n(2)),m=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light mb-4",style:{backgroundColor:"#e3f2fd"}},r.a.createElement("a",{className:"navbar-brand",href:"/"},"My Notes"),r.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapsibleNavId"},r.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{onClick:function(){return e.props.changeEditStatus()},className:"nav-link"},"Add New Note"))))))}}]),t}(a.Component),b=Object(p.b)(function(e,t){},function(e,t){return{changeEditStatus:function(){e({type:"CHANGE_EDIT_STATUS"})}}})(m),E=n(10),f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).isEditClick=function(){var e=n.props,t=e.changeEditStatus,a=e.getEditObject,r=n.props.editObject;t(),a(r)},n.isDeleteClick=function(){var e=n.props._id;(0,n.props.deleteNote)(e)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",role:"tab",id:"note"+this.props.id},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("a",{"data-toggle":"collapse","data-parent":"#noteList",href:"#note"+this.props.id+"content","aria-expanded":"true","aria-controls":"note"+this.props.id},this.props.title)),r.a.createElement("i",{onClick:function(){return e.isDeleteClick()},className:"fas fa-trash-alt"}),r.a.createElement("i",{onClick:function(){return e.isEditClick()},className:"fas fa-edit"})),r.a.createElement("div",{id:"note"+this.props.id+"content",className:"collapse in",role:"tabpanel","aria-labelledby":"note"+this.props.id},r.a.createElement("div",{className:"card-body"},this.props.content))))}}]),t}(a.Component),h=Object(p.b)(function(e,t){return{}},function(e,t){return{changeEditStatus:function(){e({type:"CHANGE_EDIT_STATUS"})},getEditObject:function(t){e({type:"GET_EDIT_OBJECT",editObject:t})},deleteNote:function(t){e({type:"DELETE_NOTE",noteID:t})}}})(f),v=n(12),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(v.a)({},t,a))},n.isClick=function(){var e=n.props.changeEditStatus;n.state._id?(n.props.editNote(n.state),e()):(n.props.addNote(n.state),e())},n.state=n.props.editObject,n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.editObject;return r.a.createElement("div",{className:"col-4"},r.a.createElement("h3",null,"S\u1eefa n\u1ed9i dung note"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Ti\xeau \u0111\u1ec1 note"),r.a.createElement("input",{defaultValue:t.title,type:"text",onChange:function(t){return e.isChange(t)},className:"form-control",name:"title",id:"title","aria-describedby":"noteTitle",placeholder:"Ti\xeau \u0111\u1ec1 note"}),r.a.createElement("small",{id:"noteTitle",className:"form-text text-muted"},"Nh\u1eadp ti\xeau \u0111\u1ec1 v\xe0o \u0111\xe2y")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"content"},"N\u1ed9i dung note"),r.a.createElement("textarea",{defaultValue:t.content,type:"text",onChange:function(t){return e.isChange(t)},className:"form-control",name:"content",id:"content","aria-describedby":"noteContent",placeholder:"N\u1ed9i dung note"}),r.a.createElement("small",{id:"noteContent",className:"form-text text-muted"},"Nh\u1eadp n\u1ed9i dung v\xe0o \u0111\xe2y")),r.a.createElement("input",{type:"reset",onClick:function(){return e.isClick()},className:"btn btn-primary btn-block",value:"Save"})))}}]),t}(a.Component),N=Object(p.b)(function(e,t){return{notes:e.notes,editObject:e.editObject}},function(e,t){return{addNote:function(t){e({type:"ADD_NEW",newNote:t})},editNote:function(t){e({type:"UPDATE_EDIT_OBJECT",noteEdited:t})},changeEditStatus:function(){e({type:"CHANGE_EDIT_STATUS"})}}})(O),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).renderEditForm=function(){if(n.props.editStatus)return r.a.createElement(N,null)},n.renderEditForm=n.renderEditForm.bind(Object(E.a)(Object(E.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.notes;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"noteList",role:"tablist","aria-multiselectable":"true"},e.map(function(e,t){return r.a.createElement(h,{key:t,editObject:e,id:t,_id:e._id,title:e.title,content:e.content})}))),this.renderEditForm())))}}]),t}(a.Component),g=Object(p.b)(function(e,t){return{notes:e.notes,editStatus:e.editStatus}})(j),y=n(17),T=n.n(y),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).getData=function(){return T.a.post("/api/getnotes").then(function(e){return e.data})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.getData().then(function(t){e.props.getNotes(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(g,null))}}]),t}(a.Component),_=Object(p.b)(function(e,t){return{}},function(e,t){return{getNotes:function(t){e({type:"GET_NOTES",notes:t})}}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(29),S=n(9),w=n(11),D=n.n(w),A=n(19),I=n(16),x=n(17),G={editStatus:!1,notes:[],editObject:{}},B=function(){var e=Object(A.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.put("/api/updatenote",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(A.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.post("/api/deletenote",{_id:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),J=I.createStore(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_NOTES":return Object(S.a)({},t,{notes:n.notes});case"ADD_NEW":return e=n.newNote,x.post("/api/addnew",{title:e.title,content:e.content}).then(function(e){e.data}),Object(S.a)({},t,{notes:Object(k.a)(t.notes).concat([n.newNote])});case"DELETE_NOTE":F(n.noteID);var a=[];return t.notes.map(function(e,t){return e._id!==n.noteID?a.push(e):0}),Object(S.a)({},t,{notes:a});case"CHANGE_EDIT_STATUS":return Object(S.a)({},t,{editStatus:!t.editStatus});case"GET_EDIT_OBJECT":return Object(S.a)({},t,{editObject:n.editObject});case"UPDATE_EDIT_OBJECT":B(n.noteEdited);var r=[];return t.notes.map(function(e,t){return e._id===n.noteEdited._id?r.push(n.noteEdited):r.push(e)}),Object(S.a)({},t,{editObject:{},notes:r});default:return t}});J.subscribe(function(){console.log(J.getState())});var U=J;i.a.render(r.a.createElement(p.a,{store:U},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.15274425.chunk.js.map