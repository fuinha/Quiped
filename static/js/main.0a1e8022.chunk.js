(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/loader.baeaf0c7.gif"},35:function(e,t,a){e.exports=a.p+"static/media/off.0727485c.png"},36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(29),l=a.n(i),o=(a(41),a(20)),s=a(12),m=(a(22),a(10)),r=a(5),u=a.n(r),d=a(30),f=a.n(d);function p(e){return c.a.createElement("div",{className:"loading d-flex justify-content-center align-items-center flex-column",style:e},c.a.createElement("img",{src:f.a,alt:"loader"}))}var b=c.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!1),i=Object(m.a)(a,2),l=i[0],o=i[1],s=Object(n.useState)(""),r=Object(m.a)(s,2),d=r[0],f=r[1];return Object(n.useEffect)(function(){u.a.auth().onAuthStateChanged(function(e){o(!!e),f(e)})},[]),c.a.createElement(b.Provider,{value:{user:d,signIn:l}},t)},g=a(31),x=a.n(g);u.a.apps.length||u.a.initializeApp({apiKey:"AIzaSyBDlpHzVdhhdvX41O5l642UpTH-1ycZQ0k",authDomain:"quiped-4d0e3.firebaseapp.com",databaseURL:"https://quiped-4d0e3.firebaseio.com",projectId:"quiped-4d0e3",storageBucket:"quiped-4d0e3.appspot.com",messagingSenderId:"780974138254",appId:"1:780974138254:web:1ec3792d7a20d0bf633adf",measurementId:"G-SYF0K0H7X9"});var E=function(){var e=Object(n.useContext)(b).signIn,t=Object(s.g)();Object(n.useEffect)(function(){o(!0),e?t.push("/dashboard"):setTimeout(function(){o(!1)},5e3)},[e,t]);var a=Object(n.useState)(!1),i=Object(m.a)(a,2),l=i[0],o=i[1],r={signInFlow:"popup",signInOptions:[u.a.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}};return l?c.a.createElement(p,{style:{display:l?"flex":"none"}}):c.a.createElement("div",{className:"bg"},c.a.createElement("div",{className:"d-flex flex-column justify-content-center  align-items-center h-100"},c.a.createElement("h1",{className:"text-dark font-weight-bold title"},"Rubico IT"),c.a.createElement("h6",{className:"text-capitalize text-white tag"},"HDR conference room management application."),c.a.createElement(x.a,{uiConfig:r,firebaseAuth:u.a.auth()})))},v=a(14),w=a.n(v),y=a(35),N=a.n(y);function O(e){var t=e.src,a=e.onClick,n=e.stats,i=e.style,l=e.show;return c.a.createElement("div",{className:"pb-3 header"},c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l?c.a.createElement("h6",{className:"my-3 font-weight-bold",style:i},"Occupancy Status: ",n," available "):c.a.createElement("h6",{className:"my-3  font-weight-bold text-info"},"HDR Conference Room Management"),c.a.createElement("div",{className:"d-flex ml-3"},c.a.createElement("img",{src:t,alt:"profile",className:"profile"}),c.a.createElement("button",{onClick:a},c.a.createElement("p",{className:"logout font-weight-bold"},"Sign Out"),c.a.createElement("img",{className:"off",src:N.a,alt:"loader"})))),c.a.createElement("li",{className:"small text-dark font-weight-bold"},"Rooms already occupied by other members can't be occupied."),c.a.createElement("li",{className:"small text-dark font-weight-bold"},"You can only occupy one vacant room at a time."),c.a.createElement("li",{className:"small text-dark font-weight-bold"},"Extend button would be visible five minutes before the end time. Clicking on it will add another 15 mins in your end time."),c.a.createElement("li",{className:"small text-dark font-weight-bold"},"Rooms will automatically vacate after the alloted time.However, Do remember to vacate by clicking again at the end of the meeting."))}function k(e){var t=e.keyValue,a=e.name,n=e.item,i=e.enabled,l=e.onClick,o=e.occupied,s=e.user,m=e.status,r=e.time,u=e.showExtend,d=e.handleExtend,f=e.fade;return c.a.createElement("div",{className:"d-flex justify-content-between align-items-center list",style:{opacity:f?0:1}},c.a.createElement("p",{className:"text-info font-weight-bold",key:t},a),c.a.createElement("div",{className:"d-flex  justify-content-between "},c.a.createElement("p",{className:"tab text-info px-2"},r),u&&s===n?c.a.createElement("p",{className:"tab text-danger hand px-1",onClick:d},"Book again"):null,n?c.a.createElement("p",{className:"tab text-success px-1"},n):c.a.createElement("p",{className:"tab text-info px-1"},"Vacant"),c.a.createElement("div",{style:{borderColor:m?"#0c9":"#999",display:m?"block":-1===o.indexOf(s)&&i?"block":"none"},className:"box",onClick:l})))}function j(){return c.a.createElement("footer",{className:"fixed-bottom bg-info w-100 d-flex justify-content-between py-2 px-1"},c.a.createElement("p",{className:"small text-white"},"\xa9 Copyright 2020, All rights reserved."),c.a.createElement("p",{className:"small text-white"},"Made with \u2665 by Sudhir"))}var C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(null),o=Object(m.a)(l,2),r=o[0],d=o[1],f=Object(n.useState)([]),h=Object(m.a)(f,2),g=h[0],x=h[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),y=v[0],N=v[1],C=Object(n.useContext)(b),S=C.user,I=C.signIn,R=Object(n.useState)(!1),L=Object(m.a)(R,2),D=L[0],U=L[1];Object(n.useEffect)(function(){setInterval(function(){H()},1e3)},[]);var A=function(e,t){var n,c=a.some(function(e){return e.occupant===S.displayName});n=a.map(function(a){if(c||a.id!==e||""!==a.occupant){if(c&&a.id===e&&a.occupant===S.displayName)for(var n in a.status=!a.status,a.occupant="",a.timestamp=null,a.timeLimit=null,g)g[n].User===S.displayName&&u.a.database().ref().child("Occupy/"+n).remove()}else{a.status=!a.status,a.occupant=S.displayName,a.enabled=!0,a.timestamp=w()().unix(),a.timeLimit=t;var i={RoomId:a.id,User:S.displayName,timestamp:w()().unix()};u.a.database().ref("Occupy").push(i),d(null),N(!1)}return a}),i(n),B()},B=function(){u.a.database().ref("Rooms/").set({data:a})},H=function(){U(!0),u.a.database().ref("Rooms/").on("value",function(e){i(e.val().data)}),u.a.database().ref("Occupy/").on("value",function(e){x(e.val()),U(!1)})},P=function(e,t){var a=w()(w()(w.a.unix(e).toLocaleString()).add(t,"m").toLocaleString()),n=w.a.unix(w()().unix()).toLocaleString();return a.diff(n,"minutes")},V=function(e,t,a){var n=e-1,c={enabled:!0,id:e,name:t,occupant:"",status:!1,timestamp:null};u.a.database().ref("Occupy/").on("value",function(e){for(var t in e.val())e.val()[t].User===a&&u.a.database().ref().child("Occupy/"+t).remove()}),u.a.database().ref("Rooms/data").child(n).set(c)},q=(g?Array.from(Object.values(g)):["Dummy User"]).map(function(e){return e.User});if(!I)return c.a.createElement(s.a,{to:"/"});var z=a.filter(function(e){return""===e.occupant}).length,T=0===z?"No room":1===z?"1 room":"".concat(z," rooms"),Y="No room"===T?"tomato":"#38a2b8";return c.a.createElement("div",{className:"bg"},c.a.createElement("div",{className:"bg-white position-relative vh-100"},c.a.createElement("div",{className:"container position-relative"},c.a.createElement(O,{style:{color:Y},src:S&&S.photoURL,onClick:function(){return u.a.auth().signOut()},stats:T,show:0!==z}),y?c.a.createElement("div",{className:"d-flex flex-column bg-white justify-content-center align-items-center position-absolute w-100 h-100"},c.a.createElement("h6",{className:"font-weight-bold p-2 text-center"},"Select Time period for the meeting. "),c.a.createElement("p",{className:"tag font-weight-bold text-center bg-info p-2 w-50 text-white mb-2 hand",onClick:function(){return A(r,15)}},"15 mins"),c.a.createElement("p",{className:"tag font-weight-bold text-center bg-info p-2 w-50 text-white mb-2 hand",onClick:function(){return A(r,30)}},"30 mins"),c.a.createElement("p",{className:"tag font-weight-bold text-center bg-info p-2 w-50 text-white mb-2 hand",onClick:function(){return A(r,45)}},"45 mins"),c.a.createElement("p",{className:"tag font-weight-bold text-center bg-info p-2 w-50 text-white mb-2 hand",onClick:function(){return A(r,60)}},"60 mins")):null,D?c.a.createElement(p,{style:{display:D?"flex":"none"}}):void 0!==a?a.map(function(e){return c.a.createElement(k,{keyValue:e.id,name:e.name,item:e.occupant,status:e.status,occupied:q,user:S.displayName,enabled:e.enabled,time:isNaN(P(e.timestamp))?null:P(e.timestamp,e.timeLimit)<=0?V(e.id,e.name,e.occupant):(P(e.timestamp,e.timeLimit)>0&&P(e.timestamp,e.timeLimit),P(e.timestamp,e.timeLimit)+" mins left"),onClick:e.status?function(){return A(e.id)}:function(){return t=e.id,d(t),void N(!0);var t},handleExtend:function(){return function(e,t,a,n,c){var i=e-1,l={enabled:!0,id:e,name:t,occupant:a,status:!0,timestamp:n,timeLimit:c+15};u.a.database().ref("Rooms/data").child(i).set(l)}(e.id,e.name,e.occupant,e.timestamp,e.timeLimit)},showExtend:e.status&&P(e.timestamp,e.timeLimit)<=5,fade:null!==r})}):c.a.createElement("p",null,"Please ask your administrator to add rooms."),null===r?c.a.createElement("div",{className:"fixed-bottom  mb-5 d-flex justify-content-around  align-items-center"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("p",{className:"small mx-2"},"Press"),c.a.createElement("div",{className:"box",style:{borderColor:"#999"}}),c.a.createElement("p",{className:"small mx-2"},"to Book a room.")),c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("p",{className:"small mx-2"},"Press"),c.a.createElement("div",{className:"box",style:{borderColor:"#0c9"}}),c.a.createElement("p",{className:"small mx-2"}," to Vacate a room."))):null,c.a.createElement(j,null))))},S=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(h,null,c.a.createElement(o.a,{basename:"/Quiped"},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:E}),c.a.createElement(s.b,{exact:!0,path:"/dashboard",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.disableYellowBox=!0,l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.0a1e8022.chunk.js.map