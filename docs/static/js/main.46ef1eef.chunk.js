(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var a=t(0),r=t(1),n=t.n(r),s=t(16),i=t.n(s),l=(t(23),t(14)),j=t(2),h=(t(24),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e})).catch((function(){return console.log("Error. Can\u2019t access fetch response.")}))}),o=t(7);var m=function(e){return Object(a.jsx)("article",{className:"char--container",children:Object(a.jsxs)(o.b,{to:"/character/".concat(e.id),children:[Object(a.jsx)("div",{className:"char__image--container",children:Object(a.jsx)("img",{className:"char__image",src:e.imageUrl,alt:e.name})}),Object(a.jsx)("h2",{className:"char__name",children:e.name}),Object(a.jsx)("p",{className:"char__species",children:e.species}),Object(a.jsx)("p",{className:"char__gender",children:e.gender}),Object(a.jsx)("p",{className:"char__life-status",children:e.status})]})})};t(30);var d=function(e){var c=e.alert?e.wrongText.length>=5?Object(a.jsx)("img",{src:"https://i.pinimg.com/originals/e4/48/63/e44863ebec8dd76213734a95fe6094f1.gif",alt:"Rick facepalming really hard"}):Object(a.jsxs)("p",{className:"alert",children:['What kind of a lame-ass would type "',e.wrongText,'"?!']}):e.characters.map((function(e){return Object(a.jsx)("li",{className:"character__item",children:Object(a.jsx)(m,{imageUrl:e.image,name:e.name,species:e.species,gender:e.gender,status:e.status,id:e.id})},"character".concat(e.id))}));return Object(a.jsx)("ul",{className:"character__list",children:c})},u=function(e){return Object(a.jsxs)("form",{className:"search-input",children:[Object(a.jsx)("label",{className:"form__label",htmlFor:"name"}),Object(a.jsx)("input",{className:"form__input--text",type:"text",id:"name",onChange:function(c){e.handleSearchText(c.target.value)}})]})};var b=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(o.b,{to:"/",children:"Go back"})}),Object(a.jsxs)("article",{className:"char--container",children:[Object(a.jsx)("div",{className:"char__image--container",children:Object(a.jsx)("img",{className:"char__image",src:e.imageUrl,alt:e.name})}),Object(a.jsx)("h2",{className:"char__name",children:e.name}),Object(a.jsx)("p",{className:"char__species",children:e.species}),Object(a.jsx)("p",{className:"char__gender",children:e.gender}),Object(a.jsx)("p",{className:"char__life-status",children:e.status}),Object(a.jsx)("p",{className:"char__origin",children:e.origin}),Object(a.jsx)("p",{className:"char__episode-count",children:e.episodes})]})]})};var x=function(){var e=Object(r.useState)([]),c=Object(l.a)(e,2),t=c[0],n=c[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),o=i[0],m=i[1];Object(r.useEffect)((function(){h().then((function(e){n(e.results)}))}),[]);var x=function(e){m(e)},g=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"main-container",children:Object(a.jsx)("main",{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"Rick and Morty logo"}),Object(a.jsx)(u,{handleSearchText:x})]}),Object(a.jsx)(d,{alert:0===g.length,wrongText:o,characters:""===o?t:g})]})}}),Object(a.jsx)(j.a,{path:"/character/:id",render:function(e){var c=parseInt(e.match.params.id),r=t.find((function(e){return e.id===c}));return Object(a.jsx)(b,{imageUrl:r.image,name:r.name,species:r.species,gender:r.gender,status:r.status,origin:r.origin.name,episodes:r.episode.length,id:r.id})}})]})})})})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(x,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.46ef1eef.chunk.js.map