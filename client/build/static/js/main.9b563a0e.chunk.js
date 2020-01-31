(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,a){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(54),s=t.n(l),m=t(15),o=t(7),i=t(5),u=(t(67),function(){var e=Object(c.useState)(""),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"}," WMChat ",r.a.createElement("span",{role:"img","aria-label":"emoji"}," \ud83d\udcac")),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return t&&o?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"}," Sign In"))))}),A=t(61),E=t(57),f=t.n(E),g=t(58),p=t.n(g),h=(t(109),t(16)),d=t.n(h),N=t(59),v=t.n(N),j=(t(110),function(e){var a=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online icon"}),r.a.createElement("h3",null,"Room: ",a)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:v.a,alt:"close icon"}))))}),b=(t(111),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),C=t(60),O=t.n(C),I=(t(145),t(30)),S=t.n(I),x=(t(146),function(e){var a=e.message,t=a.text,n=a.user,c=!1,l=e.name.trim().toLowerCase();return n===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},S.a.emojify(t)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},S.a.emojify(t))),r.a.createElement("p",{className:"sentText pl-10 "},n))}),y=function(e){var a=e.messages,t=e.name;return r.a.createElement(O.a,{className:"messages"},a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(x,{message:e,name:t}))})))},M=(t(147),function(e){var a=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Realtime Chat Application - WMChat",r.a.createElement("span",{role:"img","aria-label":"emoji"}," \ud83d\udcac")),r.a.createElement("p",null," by Wan Sheng & Michael Chen"),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f"))),a?r.a.createElement("div",null,r.a.createElement("h2",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,a.map((function(e){var a=e.name;return r.a.createElement("div",{key:a,className:"activeItem"},a,r.a.createElement("img",{alt:"Online Icon",src:d.a}))}))))):null)}),R=function(e){var a=e.location,t=Object(c.useState)(""),l=Object(i.a)(t,2),s=l[0],m=l[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),E=u[0],g=u[1],h=Object(c.useState)(""),d=Object(i.a)(h,2),N=d[0],v=d[1],C=Object(c.useState)(""),O=Object(i.a)(C,2),I=O[0],S=O[1],x=Object(c.useState)([]),R=Object(i.a)(x,2),k=R[0],w=R[1];Object(c.useEffect)((function(){var e=f.a.parse(a.search),t=e.name,c=e.room;n=p()("localhost:8000"),g(c),m(t),n.emit("join",{name:t,room:c},(function(e){e&&alert(e)}))}),["localhost:8000",a.search]),Object(c.useEffect)((function(){return n.on("message",(function(e){w([].concat(Object(A.a)(k),[e]))})),n.on("roomData",(function(e){var a=e.users;v(a)})),function(){n.emit("disconnect"),n.off()}}),[k]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(j,{room:E}),r.a.createElement(y,{messages:k,name:s}),r.a.createElement(b,{message:I,setMessage:S,sendMessage:function(e){e.preventDefault(),I&&n.emit("sendMessage",I,(function(){return S("")}))}})),r.a.createElement(M,{users:N}))},k=(t(148),function(){return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("a",{className:"homeLink",href:"/join"},r.a.createElement("h1",{className:"homeH1"},"WMChat ",r.a.createElement("span",{role:"img","aria-label":"emoji"}," \ud83d\udcac"))))}),w=function(){return r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:k}),r.a.createElement(o.a,{path:"/join",exact:!0,component:u}),r.a.createElement(o.a,{path:"/chat",exact:!0,component:R}))};s.a.render(r.a.createElement(w,null),document.querySelector("#root"))},16:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},59:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,a,t){e.exports=t(149)},67:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.9b563a0e.chunk.js.map