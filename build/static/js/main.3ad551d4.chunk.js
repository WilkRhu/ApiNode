(this["webpackJsonpfront-para-testes-analytics"]=this["webpackJsonpfront-para-testes-analytics"]||[]).push([[0],{34:function(e,a,t){e.exports=t(68)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},61:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),u=(t(39),t(40),function(){return l.a.createElement("div",{className:"menu-principal"},l.a.createElement("div",{className:"caixa-itens"},l.a.createElement("a",{href:"/"},"Dashboard  ",l.a.createElement("i",{className:"fa fa-dashboard"}))),l.a.createElement("div",{className:"caixa-itens"},l.a.createElement("a",{href:"/alunos"},"Alunos ",l.a.createElement("i",{className:"fa fa-users"}))),l.a.createElement("div",{className:"caixa-itens"},l.a.createElement("a",{href:"/teacher"},"Professores ",l.a.createElement("i",{className:"fas fa-chalkboard-teacher"}))),l.a.createElement("div",{className:"caixa-itens"},l.a.createElement("a",{href:"/aulas"},"Aulas ",l.a.createElement("i",{className:"fas fa-file"}))))}),s=function(){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"col-12",id:"titulo-painel"},"Painel Teste"),l.a.createElement("div",{className:"col-12",id:"menu-nav"},l.a.createElement("nav",null,l.a.createElement(u,null))))},m=(t(41),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12",id:"nav-container"}))}),o=t(31),i=t(7),d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",null,"Dashborad")))},E=(t(42),t(6)),h=t.n(E),f=t(9),v=t(10),b=t(11),p=t(13),N=t(12),y=t(14),k=t(30),O=t.n(k).a.create(),j=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={alunos:[]},t.loadAlunos=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/alunos");case 2:a=e.sent,t.setState({alunos:a.data});case 4:case"end":return e.stop()}}),e)}))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.loadAlunos()}},{key:"renderTableData",value:function(){return this.state.alunos.map((function(e,a){var t=e.name,n=e.email,r=e.state,c=e.city,u=e.school_name;return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,u))}))}},{key:"render",value:function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Estado"),l.a.createElement("th",null,"Cidade"),l.a.createElement("th",null,"Nome da Escola"))),l.a.createElement("tbody",null,this.renderTableData()))}}]),a}(n.Component);var x=function(e){return e.history,l.a.createElement("div",{className:"col-12",id:"cont-tabela"},l.a.createElement("h1",null,"Alunos"),l.a.createElement(j,null))},w=(t(61),function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={teachers:[]},t.loadTeacher=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/teacher");case 2:a=e.sent,t.setState({teachers:a.data});case 4:case"end":return e.stop()}}),e)}))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.loadTeacher()}},{key:"renderTableData",value:function(){return this.state.teachers.map((function(e,a){var t=e.id,n=e.name,r=e.email,c=e.state,u=e.city,s=e.school_name,m=e.graduation_university_name,o=e.graduation_year,i=e.work_school_name;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,u),l.a.createElement("td",null,s),l.a.createElement("td",null,m),l.a.createElement("td",null,o),l.a.createElement("td",null,i))}))}},{key:"render",value:function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Estado"),l.a.createElement("th",null,"Cidade"),l.a.createElement("th",null,"Nome da Escola"),l.a.createElement("th",null,"Nome da Universidade"),l.a.createElement("th",null,"Ano de Gradua\xe7\xe3o"),l.a.createElement("th",null,"Escola Onde Trabalha"))),l.a.createElement("tbody",null,this.renderTableData()))}}]),a}(n.Component));var g=function(e){return e.history,l.a.createElement("div",{className:"col-12",id:"cont-tabela"},l.a.createElement("h1",null,"Professores"),l.a.createElement(w,null))},A=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(l)))).state={aulas:[]},t.loadAulas=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/aulas");case 2:a=e.sent,t.setState({aulas:a.data});case 4:case"end":return e.stop()}}),e)}))),t}return Object(y.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.loadAulas()}},{key:"renderTableData",value:function(){return this.state.aulas.map((function(e){var a=e.id,t=e.title,n=e.content,r=e.link,c=e.name_teacher;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,l.a.createElement("a",{href:r},l.a.createElement("i",{className:"fa fa-link"}))),l.a.createElement("td",null,c))}))}},{key:"render",value:function(){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Titulo"),l.a.createElement("th",null,"Conteudo"),l.a.createElement("th",null,"Link"),l.a.createElement("th",null,"Nome do Professor "))),l.a.createElement("tbody",null,this.renderTableData()))}}]),a}(n.Component);var T=function(e){return e.history,l.a.createElement("div",{className:"col-12",id:"cont-tabela"},l.a.createElement("h1",null,"Todas as Aulas"),l.a.createElement(A,null))},D=function(){return l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/dashboard",exact:!0,component:d}),l.a.createElement(i.a,{path:"/alunos",exact:!0,component:x}),l.a.createElement(i.a,{path:"/teacher",exact:!0,component:g}),l.a.createElement(i.a,{path:"/aulas",exact:!0,component:T})))},_=function(){return l.a.createElement("div",{className:"conteudoPrincipal"},l.a.createElement(m,null),l.a.createElement("div",{className:"ondeMuda"},l.a.createElement(D,null)))},C=(t(67),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2",id:"sidebar"},l.a.createElement(s,null)),l.a.createElement("div",{className:"col-10",id:"conteudoPrincipal"},l.a.createElement(_,null))))});var P=function(){return l.a.createElement(C,null)};c.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3ad551d4.chunk.js.map