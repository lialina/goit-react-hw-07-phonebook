(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"ContactForm_form__tVDlu",label:"ContactForm_label__32662",button:"ContactForm_button__JkxoO"}},32:function(t,e,n){t.exports={container:"Container_container__2aXVB"}},33:function(t,e,n){t.exports={label:"Filter_label__fF5kp"}},42:function(t,e,n){},51:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(16),o=n.n(r),i=n(5),s=(n(42),n(7)),u=n(18),b=n(10),l=n.n(b),d=(n(51),n(32)),j=n.n(d),m=n(1);function f(t){var e=t.children;return Object(m.jsx)("div",{className:j.a.container,children:e})}var O=n(3),p=n(11),h=n.n(p);function x(t){var e=t.onSubmit,n=Object(a.useState)({name:"",number:""}),c=Object(u.a)(n,2),r=c[0],o=c[1],i=l.a.generate(),b=l.a.generate(),d=function(t){var e=t.target,n=e.value,a=e.name;"name"!==a&&"number"!==a||o(Object(s.a)(Object(s.a)({},r),{},Object(O.a)({},a,n)))},j=function(){o({name:"",number:""})};return Object(m.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),e({contact:r}),j()},children:[Object(m.jsxs)("label",{className:h.a.label,htmlFor:i,children:["Name"," ",Object(m.jsx)("input",{type:"text",name:"name",value:r.name,onChange:d,id:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:h.a.label,htmlFor:b,children:["Number"," ",Object(m.jsx)("input",{type:"tel",name:"number",value:r.number,onChange:d,id:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})}var v=n(33),_=n.n(v);function C(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})}var g=n(8),w=n.n(g),k=n(6),y=n.n(k),N=n(19),F=n(4),L=n(23),S=n.n(L),A=Object(F.b)("contacts/createContact",function(){var t=Object(N.a)(y.a.mark((function t(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.post("https://61546f8d2473940017efae5d.mockapi.io/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),z=Object(F.b)("contacts/getContact",Object(N.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("https://61546f8d2473940017efae5d.mockapi.io/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),D=Object(F.b)("contacts/deleteContact",function(){var t=Object(N.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());function E(t){var e=t.contactsData,n=Object(i.b)();return Object(m.jsx)("ul",{className:w.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:w.a.item,children:[Object(m.jsx)("p",{className:w.a.name,children:a}),Object(m.jsx)("p",{className:w.a.number,children:c}),Object(m.jsx)("button",{className:w.a.button,onClick:function(){return function(t){n(D(t))}(e)},children:"Delete"})]},e)}))})}function J(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.contacts})),n=e.items,c=e.error,r=e.loader,o=Object(a.useState)(""),b=Object(u.a)(o,2),d=b[0],j=b[1];Object(a.useEffect)((function(){t(z())}),[t]);var O=Object(a.useMemo)((function(){var t=d.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}),[n,d]);return Object(m.jsxs)(f,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(x,{onSubmit:function(e){var a=e.contact;n.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts. We are working on the ability to edit contacts, but for now you can delete the existing one and add it with a new number.")):t(A(Object(s.a)(Object(s.a)({},a),{},{id:l.a.generate()})))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:d,onChange:function(t){j(t.currentTarget.value)}}),r&&Object(m.jsx)("h2",{children:"Loading..."}),c&&Object(m.jsx)("h2",{children:c}),!r&&!c&&Object(m.jsx)(E,{contactsData:O})]})}n(72);var M,q=n(12),B=Object(F.c)({name:"contacts",initialState:{items:[],loader:!1,error:""},extraReducers:(M={},Object(O.a)(M,A.pending,(function(t){t.loader=!0})),Object(O.a)(M,A.rejected,(function(t){t.loader=!1,t.error="Error"})),Object(O.a)(M,A.fulfilled,(function(t,e){var n=e.payload;t.loader=!1,t.error="",t.items=[].concat(Object(q.a)(t.items),[n])})),Object(O.a)(M,z.pending,(function(t){t.loader=!0})),Object(O.a)(M,z.rejected,(function(t){t.loader=!1,t.error="Error"})),Object(O.a)(M,z.fulfilled,(function(t,e){var n=e.payload;t.loader=!1,t.error="",t.items=[].concat(Object(q.a)(t.items),Object(q.a)(n))})),Object(O.a)(M,D.fulfilled,(function(t,e){var n=e.payload;t.items=Object(q.a)(t.items.filter((function(t){return t.id!==n})))})),M)}),R=(B.actions.addContact,{contacts:B.reducer}),W=Object(F.a)({reducer:R,devTools:!1});o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{store:W,children:Object(m.jsx)(J,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactList_list__1RKFH",item:"ContactList_item__NvqOU",name:"ContactList_name__3RM1i",number:"ContactList_number__37g0W",button:"ContactList_button__gtWz9"}}},[[73,1,2]]]);
//# sourceMappingURL=main.fea8734c.chunk.js.map