(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02a1":function(e,t,n){e.exports=n.p+"media/ios_whatsapp_message.8dc9455a.mp3"},"02cc":function(e,t,n){},"034f":function(e,t,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},1:function(e,t){},"18ff":function(e,t,n){"use strict";var s=n("02cc"),r=n.n(s);r.a},"2ce3":function(e,t,n){"use strict";var s=n("ed4a"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("ce5b"),a=n.n(r);n("bf40");s["default"].use(a.a,{iconfont:"md"});var o={},i=new a.a(o),c=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},l=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-form",[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"blue"}},[n("v-toolbar-title",[e._v(" Login form ")])],1),n("v-alert",{attrs:{color:"error",value:e.error}},[e._v(" The username or password are incorrect! ")]),n("v-card-text",[n("v-text-field",{attrs:{name:"login",label:"Login",type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{name:"password",label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",[n("v-btn",{attrs:{rounded:"",to:"/signup",dark:"",color:"indigo"}},[e._v("SignUp")]),n("v-spacer"),n("v-btn",{attrs:{rounded:"",dark:"",color:"primary"},on:{click:function(t){return t.preventDefault(),e.login()}}},[e._v(" LogIn "),n("v-icon")],1)],1)],1)],1)],1)],1)],1)],1)},m=[],f=n("e720"),d="https://fast-citadel-36819.herokuapp.com/";function v(e){return Object(f["c"])((function(){history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){history.pushState(null,document.title,location.href)})),document.title=e}),[d]),{}}var g,h={name:"logIn",data:function(){return{username:"",password:"",error:!1,posts:[],title:""}},methods:{login:function(){localStorage.setItem("userName",this.username);var e="/posts/".concat(this.username);this.$route.path!=e&&this.$router.push(e)}},hooks:function(){return v("Wellcome to the APP...")}},b=h,j=n("2877"),y=Object(j["a"])(b,p,m,!1,null,null,null),_=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"blue"}},[n("v-toolbar-title",[e._v("Signup form")])],1),n("v-card-text",[n("v-form",[n("v-alert",{attrs:{value:!0,color:"error","prepend-icon":"warning"}},[e._v(" This user already exist! ")]),n("v-text-field",{attrs:{name:"userName",label:"Username",rules:[e.rules.required]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{name:"email",label:"Email",rules:[e.rules.required,e.rules.email]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{name:"password",label:"Password",rules:[e.rules.required]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{name:"password",label:"Confirm Password",rules:[e.rules.required],error:!e.valid()},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1)],1),n("v-divider",{attrs:{light:""}}),n("v-card-actions",[n("v-btn",{attrs:{to:"/",rounded:"",color:"black",dark:""}},[e._v("Login")]),n("v-spacer"),n("v-btn",{attrs:{rounded:"",color:"success"},on:{click:function(t){return t.preventDefault(),e.register()}}},[e._v("Register"),n("v-icon")],1)],1)],1)],1)],1)],1)],1)},x=[],k=n("53ca"),O=(n("96cf"),n("1da1")),C=n("d4ec"),$=n("bee2"),S=n("bc3a"),E=n.n(S),P="api/loginRegister/",T=function(){function e(){Object(C["a"])(this,e)}return Object($["a"])(e,null,[{key:"registerUser",value:function(e){return E.a.post(P,{text:e})}}]),e}(),U=T,M={name:"signUp",data:function(){return{username:"",email:"",password:"",confirm_password:"",user:[],rules:{required:function(e){return!!e||"Required"},email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid email."}}}},methods:{register:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.user=[e.username,e.email,e.password],console.log(Object(k["a"])(e.user)),U.registerUser(e.user),e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},valid:function(){return this.password==this.confirm_password}}},L=M,I=Object(j["a"])(L,w,x,!1,null,null,null),A=I.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{position:"relative"},attrs:{sm:"10"}},[n("v-spacer"),n("v-btn",{attrs:{rounded:"",dark:"",color:"primary"},on:{click:function(t){t.preventDefault(),e.logOff(),e.signOut()}}},[e._v("signOut")]),n("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],ref:"chatContainer",staticClass:"chat-container"},[n("messages",{attrs:{messages:e.messages,typing:e.typing}})],1),n("div",[n("users",{attrs:{activeUsers:e.activeUsers}})],1),n("emoji-picker",{attrs:{show:e.emojiPanel,message:e.message,input:e.input},on:{close:function(t){e.toggleEmojiPanel,e.inputInit,e.setMessage("")},click:e.inputInit,"add-emoji":function(t){return e.setMessage(t)}}}),n("div",{staticClass:"typer"},[n("input",{ref:"input",attrs:{type:"text",placeholder:"Type here..."},domProps:{value:e.message},on:{keyup:[function(t){e.setMessage(t.target.value),e.isTyping(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}]}}),n("v-btn",{staticClass:"blue--text emoji-panel",attrs:{icon:""},on:{click:e.toggleEmojiPanel}},[n("v-icon",[e._v("mdi-emoticon-outline")])],1)],1)],1)],1)],1)},q=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"activeUsers"},[n("h5",[e._v("Active users:")]),n("ul",e._l(e.activeUsers,(function(t,s){return n("li",{key:s},[e._v(" "+e._s(t)+" ")])})),0)])},N=[],Z={data:function(){return{}},props:["activeUsers"]},B=Z,J=(n("6ecd"),Object(j["a"])(B,D,N,!1,null,null,null)),z=J.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12",attrs:{color:"primary lighten-4"}},[n("v-toolbar",{attrs:{dark:"",color:"primary darken-1"}},[n("v-toolbar-title",[e._v("Chat")])],1),n("v-card-text",[n("v-list",{ref:"chat",attrs:{id:"messages"}},[e._l(e.messages,(function(t,s){return[t?n("v-subheader",{key:s},[n("message",{attrs:{message:t}})],1):e._e()]}))],2)],1)],1),n("v-alert",[e._v(e._s(e.typing.text))])],1)],1)],1)],1)},W=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image"},[n("img",{attrs:{src:e.imgSrc}})])},F=[],G={props:["imgsrc"],data:function(){return{imgSrc:"https://media.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif"}},mounted:function(){var e,t;e=new Image,t=this,e.onload=function(){t.imgSrc=t.imgsrc,t.$emit("imageLoad")},e.src=this.imgsrc}},K=G,Q=(n("e72b"),Object(j["a"])(K,Y,F,!1,null,null,null)),V=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isCurrentUser(e.message.user)?n("div",[n("div",{staticClass:"messageContainer justifyEnd"},[n("p",{staticClass:"sentText pr-10"},[e._v(e._s(e.message.user))]),n("div",{staticClass:"messageBox backgroundBlue"},[n("p",{staticClass:"messageText colorWhite",attrs:{color:"primary lighten-4"},domProps:{innerHTML:e._s(e.check(e.message.text))}})])])]):n("div",[n("div",{staticClass:"messageContainer justifyEnd"},[n("div",{staticClass:"messageBox backgroundLight"},[n("p",{staticClass:"messageText colorDark",domProps:{innerHTML:e._s(e.message.text)}})]),n("p",{staticClass:"sentText pr-10"},[e._v(e._s(e.message.user))])])])},ee=[],te=(n("ac1f"),n("5319"),{data:function(){return{val:"",mess:"",currentRef:{}}},props:["message","username"],components:{"chat-image":V},methods:{check:function(e){var t=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;return e=e.replace(t,"<a href='$1' target='_blank' style='color:black'>$1</a>"),e},isCurrentUser:function(e){var t=!1;return e===this.$route.params.username&&(t=!0),t}},watch:{"$route.params.username":function(e,t){}}}),ne=te,se=(n("59ef"),Object(j["a"])(ne,X,ee,!1,null,null,null)),re=se.exports,ae={data:function(){return{val:"",mess:"",currentRef:{}}},props:["messages","typing"],components:{"chat-image":V,message:re},computed:{username:function(){return this.$store.getters.user.username}},methods:{imageLoad:function(){},massageSent:function(){console.log("new message:",messages)}},watch:{messages:function(e,t){}}},oe=ae,ie=(n("18ff"),Object(j["a"])(oe,H,W,!1,null,null,null)),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"emoji-picker"},[e.show?n("v-card",{attrs:{height:"300px"}},[n("v-card-title",{staticClass:"blue white--text"},[n("span",{staticClass:"headline"},[e._v("Emoji Picker")])]),n("v-card-text",[n("div",{staticClass:"emoji-content"},e._l(e.emojis,(function(t){return n("emoji",{key:t.key,attrs:{emoji:t},on:{click:e.onEmojiClick}})})),1)])],1):e._e()],1):e._e()},le=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{on:{click:e.onEmojiClick}},[e._v(e._s(e.emoji.value))])},me=[],fe={data:function(){return{}},props:{emoji:""},methods:{onEmojiClick:function(){this.$emit("click",this.emoji)}}},de=fe,ve=Object(j["a"])(de,pe,me,!1,null,null,null),ge=ve.exports,he={data:function(){return{emojis:[]}},props:{show:!0,message:"",input:""},created:function(){var e=this;E.a.get("https://raw.githubusercontent.com/shanraisshan/EmojiCodeSheet/master/json/string/People.json").then((function(t){e.emojis=t.data.peoples.people}),(function(e){}))},methods:{onEmojiClick:function(e){if(this.$emit("click"),this.input){this.input.focus(),console.log(this.input);this.input.selectionEnd;var t=this.message.substring(0,this.input.selectionStart),n=this.message.substring(this.input.selectionStart),s=t+e.value+n;this.$emit("add-emoji",""),this.$emit("add-emoji",s),this.input.focus()}},closePicker:function(){this.$emit("close")}},components:{emoji:ge}},be=he,je=(n("ca65"),Object(j["a"])(be,ue,le,!1,null,null,null)),ye=je.exports,_e=(n("99af"),n("07ac"),n("1276"),n("2909")),we=n("3835"),xe=n("8055"),ke=n.n(xe),Oe=n("02a1"),Ce=n.n(Oe);function $e(e){var t="https://fast-citadel-36819.herokuapp.com/",n=Object(f["b"])({isShowing:e}),s=Object(f["d"])(""),r=Object(we["a"])(s,2),a=r[0],o=r[1],i=Object(f["d"])([]),c=Object(we["a"])(i,2),u=c[0],l=c[1],p=Object(f["d"])([]),m=Object(we["a"])(p,2),d=m[0],v=m[1],h=Object(f["d"])(""),b=Object(we["a"])(h,2),j=b[0],y=b[1],_="app";Object(f["c"])((function(){g=ke()(t),document.title="You are: "+n.isShowing;var e=n.isShowing;g.emit("join",{name:e,room:_},(function(){}))}),[t]),Object(f["c"])((function(){history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(e){history.pushState(null,document.title,location.href)}))}),[t]),Object(f["c"])((function(){g.on("message",(function(e){e.user===n.isShowing?document.title="You: "+e.text:(window.navigator.vibrate(200),document.title=e.user+": "+e.text,O())}))}),[t],[a]),Object(f["c"])((function(){g.on("message",(function(e){l([].concat(Object(_e["a"])(u),[e]))}))}),[u]),Object(f["c"])((function(){g.on("users",(function(e){var t=[];t=Object.values(e)[0].split(","),v(t)}))}),[t],[d]),Object(f["c"])((function(){g.on("isTyping",(function(e){console.log(e),y(e),setTimeout((function(){y("")}),2e3)}))}),[t],[j]);var w=function(e){e.preventDefault(),a&&g.emit("sendMessage",a,(function(){o("")}))},x=function(e){e.preventDefault(),console.log("user is typing..."),g.emit("isTyping","user is typing...",(function(){y("")}))},k=function(){console.log("disconnect"),g.emit("disconnectLog","disconnect user"),g.off()},O=function(){var e=new Audio(Ce.a);e.load(),e.play()};return console.log(a,u),{data:n,message:a,messages:u,activeUsers:d,typing:j,setMessage:o,setMessages:l,sendMessage:w,logOff:k,isTyping:x}}var Se={template:"#child",name:"postComponent",data:function(){return{emojiPanel:!1,input:JSON.parse('{"type":"text", "placeholder":"Type here..."}')}},methods:{signOut:function(){this.$router.push("/")},inputInit:function(){this.input=this.$refs.input},toggleEmojiPanel:function(){this.emojiPanel=!this.emojiPanel}},components:{messages:ce,users:z,"emoji-picker":ye},hooks:function(){return $e(localStorage.getItem("userName"))}},Ee=Se,Pe=(n("2ce3"),Object(j["a"])(Ee,R,q,!1,null,null,null)),Te=Pe.exports,Ue={name:"App",components:{logIn:_,signUp:A,postComponent:Te}},Me=Ue,Le=(n("034f"),Object(j["a"])(Me,u,l,!1,null,null,null)),Ie=Le.exports,Ae=n("123d"),Re=n.n(Ae);s["default"].config.productionTip=!1,s["default"].use(f["a"]),s["default"].use(c["a"]),s["default"].use(Re.a),E.a.defaults.baseUrl="api/";var qe=[{path:"/",component:_,name:"login"},{path:"/signup",component:A,name:"signup"},{path:"/posts/:username",component:Te,name:"posts"}],De=new c["a"]({mode:"history",routes:qe,base:"/"});new s["default"]({router:De,render:function(e){return e(Ie)},vuetify:i}).$mount("#app")},"59ef":function(e,t,n){"use strict";var s=n("a9cc"),r=n.n(s);r.a},"6ecd":function(e,t,n){"use strict";var s=n("e485"),r=n.n(s);r.a},"85ec":function(e,t,n){},a9cc:function(e,t,n){},bedb:function(e,t,n){},ca65:function(e,t,n){"use strict";var s=n("cd17"),r=n.n(s);r.a},cd17:function(e,t,n){},e485:function(e,t,n){},e72b:function(e,t,n){"use strict";var s=n("bedb"),r=n.n(s);r.a},ed4a:function(e,t,n){}});
//# sourceMappingURL=app.f33909a0.js.map