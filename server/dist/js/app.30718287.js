(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02a1":function(e,t,n){e.exports=n.p+"media/ios_whatsapp_message.8dc9455a.mp3"},"02cc":function(e,t,n){},"034f":function(e,t,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"093f":function(e,t,n){},1:function(e,t){},"18ff":function(e,t,n){"use strict";var s=n("02cc"),a=n.n(s);a.a},2:function(e,t){},"2ce3":function(e,t,n){"use strict";var s=n("ed4a"),a=n.n(s);a.a},3:function(e,t){},3174:function(e,t,n){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("ce5b"),r=n.n(a);n("bf40");s["default"].use(r.a,{iconfont:"md"});var i={},o=new r.a(i),c=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-form",[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"blue"}},[n("v-toolbar-title",[e._v(" Login form ")])],1),n("v-alert",{attrs:{color:"error",value:e.error}},[e._v(" The username or password are incorrect! ")]),n("v-card-text",[n("v-text-field",{attrs:{name:"login",label:"Login",type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{name:"password",label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",[n("v-btn",{attrs:{rounded:"",to:"/signup",dark:"",color:"indigo"}},[e._v("SignUp")]),n("v-spacer"),n("v-btn",{attrs:{rounded:"",dark:"",color:"primary"},on:{click:function(t){return t.preventDefault(),e.login()}}},[e._v(" LogIn "),n("v-icon")],1)],1)],1)],1)],1)],1)],1)],1)},p=[],m=n("e720"),f="https://fast-citadel-36819.herokuapp.com/";function g(e){return Object(m["c"])((function(){history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){history.pushState(null,document.title,location.href)})),document.title=e}),[f]),{}}var v,h={name:"logIn",data:function(){return{username:"",password:"",error:!1,posts:[],title:""}},methods:{login:function(){localStorage.setItem("userName",this.username);var e="/posts/".concat(this.username);this.$route.path!=e&&this.$router.push(e)}},hooks:function(){return g("Wellcome to the APP...")}},b=h,_=n("2877"),j=Object(_["a"])(b,d,p,!1,null,null,null),w=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"blue"}},[n("v-toolbar-title",[e._v("Signup form")])],1),n("v-card-text",[n("v-form",[n("v-alert",{attrs:{value:!0,color:"error","prepend-icon":"warning"}},[e._v(" This user already exist! ")]),n("v-text-field",{attrs:{name:"userName",label:"Username",rules:[e.rules.required]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{name:"email",label:"Email",rules:[e.rules.required,e.rules.email]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{name:"password",label:"Password",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{name:"password",label:"Confirm Password",rules:[e.rules.required],error:!e.valid()},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1)],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",[n("v-btn",{attrs:{to:"/",rounded:"",color:"black",dark:""}},[e._v("Login")]),n("v-spacer"),n("v-btn",{attrs:{rounded:"",color:"success"},on:{click:function(t){return t.preventDefault(),e.register()}}},[e._v("Register"),n("v-icon")],1)],1)],1)],1)],1)],1)],1)},y=[],k=n("53ca"),O=(n("96cf"),n("1da1")),C=n("d4ec"),P=n("bee2"),$=n("bc3a"),S=n.n($),T="api/loginRegister/",E=function(){function e(){Object(C["a"])(this,e)}return Object(P["a"])(e,null,[{key:"registerUser",value:function(e){return S.a.post(T,{text:e})}}]),e}(),M=E,F={name:"signUp",data:function(){return{username:"",email:"",password:"",confirm_password:"",user:[],rules:{required:function(e){return!!e||"Required"},email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid email."}}}},methods:{register:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user=[e.username,e.email,e.password],console.log(Object(k["a"])(e.user)),M.registerUser(e.user),e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},valid:function(){return this.password==this.confirm_password}}},A=F,R=Object(_["a"])(A,x,y,!1,null,null,null),U=R.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{position:"relative"},attrs:{sm:"10"}},[n("v-spacer"),n("v-btn",{attrs:{rounded:"",dark:"",color:"primary"},on:{click:function(t){t.preventDefault(),e.logOff(),e.signOut()}}},[e._v("signOut")]),n("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],ref:"chatContainer",staticClass:"chat-container"},[n("chatmessages",{attrs:{chatmessages:e.chatMessages}}),n("messages",{attrs:{messages:e.messages,uplodPercentage:e.uploadPercentage,getFile:e.getFile}})],1),n("div",[e._v(e._s(e.typing.text))]),e.uploadPercentage<100&&e.uploadPercentage>0?n("div",{staticClass:"messageBox backgroundBlue"},[e._v("uploading: "+e._s(e.uploadPercentage)+"%")]):e._e(),100==e.uploadPercentage?n("div",{staticClass:"messageBox backgroundBlue"},[e._v("file uploaded 100%")]):e._e(),n("div",[n("users",{attrs:{activeUsers:e.activeUsers}})],1),n("emoji-picker",{attrs:{show:e.emojiPanel,message:e.message,input:e.input},on:{close:function(t){e.toggleEmojiPanel,e.inputInit,e.setMessage("")},click:e.inputInit,"add-emoji":function(t){return e.setMessage(t)}}}),n("div",{staticClass:"typer"},[n("input",{ref:"input",attrs:{type:"text",placeholder:"Type here..."},domProps:{value:e.message},on:{keyup:[function(t){e.setMessage(t.target.value),e.isTyping(t)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.sendMessage(t),e.saveMessage(t.target.value),e.saveFile(t)}]}}),n("v-btn",{staticClass:"blue--text emoji-panel",attrs:{icon:""},on:{click:e.toggleEmojiPanel}},[n("v-icon",[e._v("mdi-emoticon-outline")])],1)],1),n("div",[n("input-file",{on:{"add-file":function(t){e.setMessage(t.name),e.setFile(t)}}})],1)],1)],1)],1)},D=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"activeUsers"},[n("h5",[e._v("Active users:")]),n("ul",e._l(e.activeUsers,(function(t,s){return n("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)])},B=[],q={data:function(){return{}},props:["activeUsers"]},Z=q,H=(n("6ecd"),Object(_["a"])(Z,I,B,!1,null,null,null)),N=H.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.messages,(function(t,s){return n("div",{key:s,staticClass:"message"},[n("message",{attrs:{message:t,index:s,messages:e.messages,uploadPercentage:e.uploadPercentage,getFile:e.getFile}}),e._v(" "+e._s(e.uploadPercentage)+" ")],1)})),0)},J=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image"},[n("img",{attrs:{src:e.imgSrc}})])},z=[],G={props:["imgsrc"],data:function(){return{imgSrc:"https://media.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif"}},mounted:function(){var e,t;e=new Image,t=this,e.onload=function(){t.imgSrc=t.imgsrc,t.$emit("imageLoad")},e.src=this.imgsrc}},K=G,Q=(n("e72b"),Object(_["a"])(K,W,z,!1,null,null,null)),V=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",e._l(e.allTodos,(function(t){return n("div",{key:t.id},[e._v(" "+e._s(t.title)+" ")])})),0),e.isCurrentUser(e.message.user)?n("div",[e.index>0&&e.messages[e.index-1].user!=e.message.user?n("div",{staticClass:"username"},[e._v(e._s(e.message.user))]):e._e(),0==e.index?n("div",{staticClass:"username justifyEnd"},[e._v(e._s(e.message.user))]):e._e(),n("div",{staticStyle:{"margin-top":"5px"}}),n("div",{staticClass:"messageBox backgroundBlue"},[n("div",{staticClass:"messageText colorWhite"},[n("div",{domProps:{innerHTML:e._s(e.check(e.message.text))}}),e.isPicture(e.message.text)?n("div",[n("img",{attrs:{src:e.image,height:"150",width:"115"}})]):e._e()])])]):n("div",[e.index>0&&e.messages[e.index-1].user!=e.message.user?n("div",{staticClass:"username"},[e._v(e._s(e.message.user))]):e._e(),0==e.index?n("div",{staticClass:"username"},[e._v(e._s(e.message.user))]):e._e(),n("div",{staticStyle:{"margin-top":"5px"}}),n("div",{staticClass:"content"},[n("div",{domProps:{innerHTML:e._s(e.check(e.message.text))}}),e.isPicture(e.message.text)?n("div",[n("img",{attrs:{src:e.image,height:"150",width:"115"}})]):e._e()])])])},ee=[],te=(n("ac1f"),n("5319"),n("5530")),ne=(n("d81d"),n("d3b7"),n("5a30")),se=n.n(ne),ae="api/files/uploads/",re="api/files/",ie=function(){function e(){Object(C["a"])(this,e)}return Object(P["a"])(e,[{key:"data",value:function(){}}],[{key:"getPicture",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(n,s){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.a.put(ae,{myFile:t});case 2:a=e.sent,r=a.data,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFile",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(n,s){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.put(ae,{myFile:t});case 3:a=e.sent,r=a.data,n(r.map((function(e){return Object(te["a"])({},e,{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),s(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"insertFile",value:function(e){var t=new se.a;e[0];return t.append("file",e[1]),S.a.post(re,t,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data"},onUploadProgress:function(e){}})}},{key:"deletePost",value:function(e){return S.a.delete("".concat(ae).concat(e))}}]),e}(),oe=ie,ce=n("2f62"),ue=(n("f0db"),{data:function(){return{val:"",mess:"",currentRef:{},image:""}},computed:Object(ce["c"])(["allTodos"]),props:["message","index","username","messages","uploadPercentage","getFile"],components:{"chat-image":V},methods:Object(te["a"])({},Object(ce["b"])(["getFiles"]),{isPicture:function(e,t){var n=!1,s=/([^\s\']+).(?:jpg|jpeg|gif|png)/i;return e.length!=e.replace(s,"'$1'").length&&(n=!0,this.getPic(e)),n},check:function(e){var t=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;return e=e.replace(t,"<a href='$1' target='_blank' style='color:black'>$1</a>"),e},getPic:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,oe.getPicture(e);case 2:n.t0=n.sent,t.image="data:image/jpeg;base64,"+n.t0;case 4:case"end":return n.stop()}}),n)})))()},isCurrentUser:function(e){var t=!1;return e===this.$route.params.username&&(t=!0),t}}),created:function(){this.getFiles()},watch:{"$route.params.username":function(e,t){}}}),le=ue,de=(n("59ef"),Object(_["a"])(le,X,ee,!1,null,null,null)),pe=de.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isCurrentUser(e.chatmessage.user)?n("div",[n("p",{staticClass:"messageText colorDark",attrs:{color:"primary lighten-4"}},[e._v(e._s(e.chatmessage.createdAt.getDate()+"/"+(e.chatmessage.createdAt.getMonth()+1)+"/"+e.chatmessage.createdAt.getFullYear()))]),n("div",{staticClass:"messageContainer justifyEnd"},[n("p",{staticClass:"sentText pr-10"},[e._v(e._s(e.chatmessage.user))]),n("div",{staticClass:"messageBox backgroundBlue"},[n("p",{staticClass:"messageText colorWhite",attrs:{color:"primary lighten-4"},domProps:{innerHTML:e._s(e.check(e.chatmessage.text))}})])])]):n("div",[n("div",{staticClass:"messageContainer justifyEnd"},[n("div",{staticClass:"messageBox backgroundLight"},[n("p",{staticClass:"messageText colorDark",domProps:{innerHTML:e._s(e.chatmessage.text)}})]),n("p",{staticClass:"sentText pr-10"},[e._v(e._s(e.chatmessage.user))])])])},fe=[],ge={data:function(){return{}},props:["username","chatmessage"],methods:{check:function(e){var t=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;return e=e.replace(t,"<a href='$1' target='_blank' style='color:black'>$1</a>"),e},isCurrentUser:function(e){var t=!1;return e===this.$route.params.username&&(t=!0),t}}},ve=ge,he=(n("c747"),Object(_["a"])(ve,me,fe,!1,null,null,null)),be=he.exports,_e={data:function(){return{val:"",mess:"",currentRef:{}}},props:["messages","uploadPercentage","getFile"],components:{"chat-image":V,message:pe},methods:{imageLoad:function(){},massageSent:function(){console.log("new message:",messages)}},watch:{messages:function(e,t){}}},je=_e,we=(n("18ff"),Object(_["a"])(je,Y,J,!1,null,null,null)),xe=we.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.chatmessages,(function(t,s){return n("div",{key:s,staticClass:"message"},[s>0&&e.chatmessages[s-1].createdAt.getDate()!==t.createdAt.getDate()?n("div",{staticClass:"username",attrs:{color:"primary lighten-4"}},[e._v(e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear()))]):e._e(),s>0&&e.chatmessages[s-1].user!=t.user?n("div",{staticClass:"username"},[e._v(e._s(t.user))]):e._e(),0==s?n("div",{staticClass:"username",attrs:{color:"primary lighten-4"}},[e._v(e._s(t.createdAt.getDate()+"/"+(t.createdAt.getMonth()+1)+"/"+t.createdAt.getFullYear()))]):e._e(),0==s?n("div",{staticClass:"username"},[e._v(e._s(t.user))]):e._e(),n("div",{staticStyle:{"margin-top":"5px"}}),n("div",{staticClass:"content"},[n("div",{domProps:{innerHTML:e._s(t.text)}})])])})),0)},ke=[],Oe={data:function(){return{}},props:["chatmessages","username"],components:{"chat-image":V,chatmessage:be},methods:{imageLoad:function(){},massageSent:function(){console.log("new message:",messages)}}},Ce=Oe,Pe=(n("d0bd"),Object(_["a"])(Ce,ye,ke,!1,null,null,null)),$e=Pe.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"emoji-picker"},[e.show?n("v-card",{attrs:{height:"300px"}},[n("v-card-title",{staticClass:"blue white--text"},[n("span",{staticClass:"headline"},[e._v("Emoji Picker")])]),n("v-card-text",[n("div",{staticClass:"emoji-content"},e._l(e.emojis,(function(t){return n("emoji",{key:t.key,attrs:{emoji:t},on:{click:e.onEmojiClick}})})),1)])],1):e._e()],1):e._e()},Te=[],Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{on:{click:e.onEmojiClick}},[e._v(e._s(e.emoji.value))])},Me=[],Fe={data:function(){return{}},props:{emoji:""},methods:{onEmojiClick:function(){this.$emit("click",this.emoji)}}},Ae=Fe,Re=Object(_["a"])(Ae,Ee,Me,!1,null,null,null),Ue=Re.exports,Le={data:function(){return{emojis:[]}},props:{show:!0,message:"",input:""},created:function(){var e=this;S.a.get("https://raw.githubusercontent.com/shanraisshan/EmojiCodeSheet/master/json/string/People.json").then((function(t){e.emojis=t.data.peoples.people}),(function(e){}))},methods:{onEmojiClick:function(e){if(this.$emit("click"),this.input){this.input.focus(),console.log(this.input);this.input.selectionEnd;var t=this.message.substring(0,this.input.selectionStart),n=this.message.substring(this.input.selectionStart),s=t+e.value+n;this.$emit("add-emoji",""),this.$emit("add-emoji",s),this.input.focus()}},closePicker:function(){this.$emit("close")}},components:{emoji:Ue}},De=Le,Ie=(n("ca65"),Object(_["a"])(De,Se,Te,!1,null,null,null)),Be=Ie.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"file"},on:{change:e.onFilePicked}})])},Ze=[],He={data:function(){return{}},props:[],components:{"chat-image":V},methods:{onFilePicked:function(e){this.$emit("add-file",e.target.files[0])},sendFile:function(e){console.log("send a file: ",e),this.$emit("send-file",e.target.files[0])}}},Ne=He,Ye=(n("b204"),Object(_["a"])(Ne,qe,Ze,!1,null,null,null)),Je=Ye.exports,We=(n("99af"),n("07ac"),n("1276"),n("2909")),ze=n("3835"),Ge=n("8055"),Ke=n.n(Ge),Qe=n("02a1"),Ve=n.n(Qe),Xe=n("0cc9");function et(e){var t="api/files/",n="api/files/uploads/",s="https://fast-citadel-36819.herokuapp.com/",a=Object(m["b"])({isShowing:e}),r=Object(m["d"])(""),i=Object(ze["a"])(r,2),o=i[0],c=i[1],u=Object(m["d"])([]),l=Object(ze["a"])(u,2),d=l[0],p=l[1],f=Object(m["d"])([]),g=Object(ze["a"])(f,2),h=g[0],b=g[1],_=Object(m["d"])(""),j=Object(ze["a"])(_,2),w=j[0],x=j[1],y=Object(m["d"])(""),k=Object(ze["a"])(y,2),C=k[0],P=k[1],$=Object(m["d"])(0),T=Object(ze["a"])($,2),E=T[0],M=T[1],F=Object(m["d"])(""),A=Object(ze["a"])(F,2),R=(A[0],A[1]),U="app";Object(m["c"])((function(){v=Ke()(s),document.title="You are: "+a.isShowing;var e=a.isShowing;v.emit("join",{name:e,room:U},(function(){}))}),[s]),Object(m["c"])((function(){history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){history.pushState(null,document.title,location.href)}))}),[s]),Object(m["c"])((function(){v.on("message",(function(e){e.user===a.isShowing?document.title="You: "+e.text:(window.navigator.vibrate(200),document.title=e.user+": "+e.text,B())}))}),[s],[o]),Object(m["c"])((function(){v.on("message",(function(e){p([].concat(Object(We["a"])(d),[e]))}))}),[d]),Object(m["c"])((function(){v.on("users",(function(e){var t=[];t=Object.values(e)[0].split(","),b(t)}))}),[s],[h]),Object(m["c"])((function(){v.on("isTyping",(function(e){console.log(e),x(e),setTimeout((function(){x("")}),2e3)}))}),[s],[w]);var L=function(e){e.preventDefault(),o&&!C&&v.emit("sendMessage",o,(function(){c("")}))},D=function(e){e.preventDefault(),console.log("user is typing..."),v.emit("isTyping","user is typing...",(function(){x("")}))},I=function(){console.log("disconnect"),v.emit("disconnectLog","disconnect user"),v.off()},B=function(){var e=new Audio(Ve.a);e.load(),e.play()},q=function(e){if(C){var n=new se.a;n.append("file",C);S.a.post(t,n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data"},onUploadProgress:function(e){M(parseInt(Math.round(100*e.loaded/e.total)));var t=new Xe["TaskTimer"](1e3);t.on("tick",(function(){console.log("Tick count: ".concat(t.tickCount)),100==parseInt(Math.round(100*e.loaded/e.total))&&(console.log("send a file message"),R(o),setTimeout((function(){v.emit("sendMessage",o,(function(){R("")}))}),5e3),t.stop())})),c(""),t.start(),setTimeout((function(){M(0)}),1e4)}})}P("")},Z=function(e){return new Promise(function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(s,a){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.a.put(n,{myFile:e});case 2:r=t.sent,i=r.data,s(i);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())};return console.log(o,d),{data:a,message:o,messages:d,activeUsers:h,typing:w,file:C,uploadPercentage:E,setMessage:c,sendMessage:L,setFile:P,saveFile:q,logOff:I,isTyping:D,getFile:Z}}var tt={template:"#child",name:"postComponent",data:function(){return{emojiPanel:!1,input:JSON.parse('{"type":"text", "placeholder":"Type here..."}'),chatMessages:[],chatFiles:[]}},methods:{signOut:function(){this.$router.push("/")},inputInit:function(){this.input=this.$refs.input},toggleEmojiPanel:function(){this.emojiPanel=!this.emojiPanel},loadChat:function(){return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("Chat is loading...");case 1:case"end":return e.stop()}}),e)})))()},saveMessage:function(e){}},components:{messages:xe,chatmessages:$e,users:N,"emoji-picker":Be,"input-file":Je},mounted:function(){this.loadChat()},hooks:function(){return et(localStorage.getItem("userName"))}},nt=tt,st=(n("2ce3"),Object(_["a"])(nt,L,D,!1,null,null,null)),at=st.exports,rt={name:"App",components:{logIn:w,signUp:U,postComponent:at}},it=rt,ot=(n("034f"),Object(_["a"])(it,u,l,!1,null,null,null)),ct=ot.exports,ut=n("123d"),lt=n.n(ut),dt={state:{todos:[]},getters:{allTodos:function(e){return e.todos}},actions:{getFiles:function(e){e.commit;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mutations:{}},pt=dt;s["default"].use(ce["a"]);var mt=new ce["a"].Store({modules:{chatModule:pt}});s["default"].config.productionTip=!1,s["default"].use(m["a"]),s["default"].use(c["a"]),s["default"].use(lt.a),S.a.defaults.baseUrl="api/";var ft=[{path:"/",component:w,name:"login"},{path:"/signup",component:U,name:"signup"},{path:"/posts/:username",component:at,name:"posts"}],gt=new c["a"]({mode:"history",routes:ft,base:"/"});new s["default"]({router:gt,store:mt,render:function(e){return e(ct)},vuetify:o}).$mount("#app")},"59ef":function(e,t,n){"use strict";var s=n("a9cc"),a=n.n(s);a.a},6:function(e,t){},"6ecd":function(e,t,n){"use strict";var s=n("e485"),a=n.n(s);a.a},7:function(e,t){},"85ec":function(e,t,n){},a9cc:function(e,t,n){},b204:function(e,t,n){"use strict";var s=n("d1f0"),a=n.n(s);a.a},bedb:function(e,t,n){},c747:function(e,t,n){"use strict";var s=n("3174"),a=n.n(s);a.a},ca65:function(e,t,n){"use strict";var s=n("cd17"),a=n.n(s);a.a},cd17:function(e,t,n){},d0bd:function(e,t,n){"use strict";var s=n("093f"),a=n.n(s);a.a},d1f0:function(e,t,n){},e485:function(e,t,n){},e72b:function(e,t,n){"use strict";var s=n("bedb"),a=n.n(s);a.a},ed4a:function(e,t,n){}});
//# sourceMappingURL=app.30718287.js.map