(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(9),c=n.n(i),l=(n(15),n(1)),s=n(2),d=n(3),r=n(5),u=n(4),h=n(6),p=n(7),m=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).handleInput=t.handleInput.bind(Object(p.a)(t)),t}return Object(h.a)(e,t),Object(d.a)(e,[{key:"handleInput",value:function(t){13===t.keyCode&&this.props.add(t.target.value)}},{key:"render",value:function(){return a.a.createElement("div",{style:{width:"500px",height:"50px",margin:"0 auto"}},"ToDoList",a.a.createElement("input",{text:"type",onKeyDown:this.handleInput}))}}]),e}(o.Component),g=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"delItem",value:function(t){this.props.del(t)}},{key:"deldoneItem",value:function(t){this.props.deldone(t)}},{key:"check",value:function(t,e){var n=""+e.target.checked;"true"==n&&this.props.goFinish(t)}},{key:"check2",value:function(t,e){this.props.goToDo(t)}},{key:"render",value:function(){var t=this,e=this.props.todo,n=this.props.todone,o=this.props.dolength,i=this.props.finishlength;return a.a.createElement("div",{style:{width:"500px",height:"300px",margin:"0 auto"}},a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c\uff1a"),a.a.createElement("div",null,"\u5f85\u529e\uff1a",o),a.a.createElement("ul",null,e.map((function(e,n){return a.a.createElement("ol",{key:n},a.a.createElement("input",{type:"checkbox",onChange:t.check.bind(t,n),checked:!1})," ",e,a.a.createElement("button",{onClick:t.delItem.bind(t,n)},"\u5220\u9664"))}))),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210\uff1a"),a.a.createElement("div",null,"\u5df2\u5b8c\u6210\uff1a",i),a.a.createElement("ul",null,n.map((function(e,n){return a.a.createElement("ol",{key:n},a.a.createElement("input",{type:"checkbox",onClick:t.check2.bind(t,n),checked:!0,readOnly:!0})," ",e,a.a.createElement("button",{onClick:t.deldoneItem.bind(t,n)},"\u5220\u9664"))}))))}}]),e}(o.Component),f=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(l.a)(t.state.todo),[e])},(function(){localStorage.setItem("todo",JSON.stringify(t.state.todo)),t.componentDidMount()}))},t.delItem=function(e,n){var o=Object(l.a)(t.state.todo);o.splice(e,1),t.setState({todo:o},(function(){localStorage.setItem("todo",JSON.stringify(o)),t.componentDidMount()}))},t.deldone=function(e,n){var o=Object(l.a)(t.state.todone);o.splice(e,1),t.setState({todone:o},(function(){localStorage.setItem("todo",JSON.stringify(o)),t.componentDidMount()}))},t.goFinish=function(e){var n=Object(l.a)(t.state.todo),o=n[e],a=Object(l.a)(t.state.todone);n.splice(e,1),a.push(o),t.setState({todone:a,todo:n},(function(){localStorage.setItem("todo",JSON.stringify(n)),localStorage.setItem("done",JSON.stringify(a)),t.componentDidMount()}))},t.goToDo=function(e){var n=Object(l.a)(t.state.todo),o=Object(l.a)(t.state.todone),a=o[e];o.splice(e,1),n.push(a),t.setState({todone:o,todo:n},(function(){localStorage.setItem("todo",JSON.stringify(n)),localStorage.setItem("done",JSON.stringify(o)),t.componentDidMount()}))},t.state={todo:[],todone:[],dolength:0,finishlength:0},t}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(this.state.todo),e=Object(l.a)(this.state.todone);this.setState({dolength:t.length,finishlength:e.length})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,{add:this.addItem,doing:this.state.doing}),a.a.createElement(g,{todo:this.state.todo,todone:this.state.todone,dolength:this.state.dolength,finishlength:this.state.finishlength,del:this.delItem,doing:this.state.doing,deldone:this.deldone,goFinish:this.goFinish,goToDo:this.goToDo}))}}]),e}(o.Component);c.a.render(a.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2cc31ac5.chunk.js.map