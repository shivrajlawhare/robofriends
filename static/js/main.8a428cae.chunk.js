(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),m=(t(17),t(19),function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,27)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),i(e),c(e)})}),l=t(3),s=t(4),o=t(6),h=t(5),u=t(7),d=[{id:43,name:"Shivraj Lawhare",username:"shiv",email:"shivrajlawhare@gmail.com"},{id:53,name:"Manoj Masule",username:"manyaa",email:"manojmasule@gmail.com"},{id:54,name:"Shreya Mohod",username:"shembdi",email:"shreyamohod@gmail.com"},{id:66,name:"Soham Ovhal",username:"som",email:"sohamovhal@gmail.com"},{id:71,name:"Disha Parale",username:"dish",email:"dishaparale@gmail.com"},{id:74,name:"Asmita Mahamuni",username:"hasmita",email:"asmitamahamuni@gmail.com"}],b=function(e){return r.a.createElement("div",{className:" tc bg-washed-green dib br3 ma2 pa3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))},g=function(e){var a=e.Robots;return r.a.createElement("div",null,a.map(function(e,a){return r.a.createElement(b,{key:a,id:e.id,name:e.name,email:e.email})}))},f=function(e){e.searchfield;var a=e.searchchange;return r.a.createElement("div",{className:"tc pa3"},r.a.createElement("input",{className:"tc pa3 ba b--green bg-lightest-blue dim",type:"search",placeholder:"search robots",onChange:a}))},v=(t(21),t(23),function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(h.a)(a).call(this))).onsearchchange=function(a){e.setState({searchfield:a.target.value})},e.state={Robots:d,searchfield:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.Robots.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc "},r.a.createElement("nav",{className:"sticky"},r.a.createElement("h1",{className:"tc f-subheadline lh-title"},"RoboFriends"),r.a.createElement(f,{searchchange:this.onsearchchange})),r.a.createElement("div",{className:"body"},r.a.createElement(g,{Robots:a})))}}]),a}(n.Component));c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),m()},8:function(e,a,t){e.exports=t(25)}},[[8,3,2]]]);
//# sourceMappingURL=main.8a428cae.chunk.js.map