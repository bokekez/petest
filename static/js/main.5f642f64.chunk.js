(this.webpackJsonppetest=this.webpackJsonppetest||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(8),o=n.n(r),s=(n(15),n(16),n(3)),j=n(1);var u=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),r("")},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a todo",value:i,name:"text",className:"todo-input",onChange:function(e){r(e.target.value),console.log(i)}}),Object(j.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},l=n(5),a=n(9),d=n(10);var b=function(e){var t=e.todos,n=e.completeTodo,i=e.removeTodo,r=e.updateTodo,o=Object(c.useState)({id:null,value:""}),l=Object(s.a)(o,2),b=l[0],O=l[1];return b.id?Object(j.jsx)(u,{edit:b,onSubmit:function(e,t){r(b.id,e),O({id:null,value:""})}}):t.map((function(e,t){return Object(j.jsxs)("div",{className:e.isComplate?"todo-row complete":"todo-row",children:[Object(j.jsx)("div",{style:{width:"14rem"},onClick:function(){return n(e.id)},children:e.text},e.id),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(a.a,{onClick:function(){return i(e.id)},className:"delete-icon"}),Object(j.jsx)(d.a,{onClick:function(){return O({id:e.id,value:e.text})},className:"edit-icon"})]})]},t)}))};var O=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{className:"todo-app",children:[Object(j.jsx)("h1",{children:"Add to your todo list"}),Object(j.jsx)(u,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(l.a)(n));i(t)}}}),Object(j.jsx)(b,{todos:n,completeTodo:function(e){var t=n.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));i(t)},removeTodo:function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e}));i(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&i((function(n){return n.map((function(n){return n.id===e?t:n}))}))}})]})},h=function(){var e=Object(c.useState)((function(){return 0})),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){i((function(e){return e-1}))},children:"-"}),Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{onClick:function(){i((function(e){return e+1}))},children:"+"})]})},x=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),u=o[0],l=o[1],a=Object(c.useState)([]),d=Object(s.a)(a,2),b=d[0],O=d[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);return Object(j.jsxs)("div",{children:[!1===u?Object(j.jsx)("button",{onClick:function(e){return function(){var e=n.map((function(e){return{name:e.name}}));O(e),console.log(e),console.log(b),l(!0)}()},style:{width:"7rem"},children:"Show users"}):Object(j.jsx)("button",{onClick:function(){return l(!1)},style:{width:"7rem"},children:"Hide users"}),!0===u?Object(j.jsx)("pre",{style:{display:"flex",flexDirection:"column",width:"7rem"},children:Object(j.jsx)("ul",{children:b.map((function(e){return Object(j.jsx)("li",{children:e.name})}))})}):Object(j.jsx)("pre",{})]})},f=function(){var e=Object(c.useState)("posts"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return i("posts")},children:"Posts"}),Object(j.jsx)("button",{onClick:function(){return i("users")},children:"Users"}),Object(j.jsx)("button",{onClick:function(){return i("comments")},children:"Comments"}),Object(j.jsx)("h1",{children:n})]})},m=function(e){var t=Object(c.useState)({name:"",id:0}),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)([{name:"",id:0}]),u=Object(s.a)(o,2),a=u[0],d=u[1],b=Object(c.useState)(1),O=Object(s.a)(b,2),h=O[0],x=O[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.name&&(x(h+1),d([].concat(Object(l.a)(a),[i]))),r({name:""})},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add to the list",value:i.name,name:"text",onChange:function(e){r({name:e.target.value,id:h})}}),Object(j.jsx)("button",{children:"Add"}),Object(j.jsx)("pre",{style:{display:"flex",flexDirection:"column",width:"7rem"},children:Object(j.jsxs)("ul",{children:[" ",a.slice(1).reverse().map((function(e){return Object(j.jsxs)("li",{children:[e.name,Object(j.jsx)("button",{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));d(t),console.log("12",a)}(e.id)},children:"Delete"})]})}))]})})]})})},v=function(){var e=Object(c.useState)("++"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)("form",{onSubmit:function(e){},children:Object(j.jsxs)("select",{value:n,onChange:function(e){i(e.target.value)},style:{height:"1.5rem"},children:[Object(j.jsx)("option",{value:"Banana",children:"Banana"}),Object(j.jsx)("option",{value:"Kru\u0161ka",children:"Kru\u0161ka"}),Object(j.jsx)("option",{value:"Jabuka",children:"Jabuka"}),Object(j.jsx)("option",{value:"Breskva",children:"Breskva"}),Object(j.jsx)("option",{value:"Jagoda",children:"Jagoda"})]})}),Object(j.jsx)("h1",{style:{height:"1rem"},children:n})]})},p=function(){var e=Object(c.useState)("white"),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(j.jsx)("button",{onClick:function(e){i("white"===n?"blue":"blue"===n?"red":"white")},style:{background:"".concat(n)},children:"Change color"})};var g=function(){return Object(j.jsxs)("div",{className:"App",style:{display:"flex",flexDirection:"row"},children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"Counter"}),Object(j.jsx)(h,{})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"Api"}),Object(j.jsx)(x,{})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"Render"}),Object(j.jsx)(f,{})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"List"}),Object(j.jsx)(m,{})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"Drop"}),Object(j.jsx)(v,{})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem"},children:[Object(j.jsx)("h1",{children:"Color button"}),Object(j.jsx)(p,{})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.5f642f64.chunk.js.map