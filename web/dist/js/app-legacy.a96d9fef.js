(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/web/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"053e":function(t,e,n){"use strict";var o=n("e996"),r=n.n(o);r.a},"13f2":function(t,e,n){"use strict";var o=n("3747"),r=n.n(o);r.a},"1ad5":function(t,e,n){},2154:function(t,e,n){"use strict";var o=n("1ad5"),r=n.n(o);r.a},3747:function(t,e,n){},"4a48":function(t,e,n){"use strict";var o=n("9838"),r=n.n(o);r.a},"4bbd":function(t,e,n){"use strict";var o=n("cbf7"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"w3-bar w3-black w3-card"},[n("div",{staticClass:"w3-container w3-section"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-home",attrs:{title:"home"}})])],1)]),n("div",{staticClass:"w3-row"},[n("div",{staticClass:"w3-col s0 m1 l2"},[t._v(" ")]),n("div",{staticClass:"w3-col s12 m10 l8 w3-content"},[n("router-view")],1),n("div",{staticClass:"w3-col s0 m1 l2"},[t._v(" ")])]),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge"},[n("a",{attrs:{href:"https://github.com/wmurphyrd/guppe"}},[n("i",{staticClass:"fab fa-github w3-hover-opacity"})])])}],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,r,a,!1,null,null,null),u=s.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-container"},[t._m(0),n("h1",{staticClass:"w3-center"},[t._v("Guppe Groups")]),n("p",[t._v("\n    Guppe brings social groups to the fediverse — making it easy to connect and meet new\n    people based on shared\n    interests without the maniuplation of your attention to maximize ad revenue nor the\n    walled garden lock-in of capitalist social media.\n  ")]),n("h2",{staticClass:"w3-center"},[t._v("How does Guppe work?")]),n("p",[t._v("\n    Guppe groups look like regular users you can interact with using your existing account on any\n    ActivityPub service, but they automatically share anything you send them with all of their followers.\n  ")]),t._m(1),n("h2",{staticClass:"w3-center"},[t._v("Active Groups")]),n("div",{staticClass:"profile-grid w3-margin-bottom w3-mobile"},t._l(t.groups,(function(e){return n("div",{key:e._id,staticClass:"w3-card w3-container w3-section"},[n("profile-summary",{staticClass:"profile",attrs:{actor:e}}),n("router-link",{attrs:{to:"/u/"+e.preferredUsername}},[t._v("Group profile...")])],1)})),0)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-center"},[n("img",{attrs:{alt:"Guppe logo",src:"/f/guppe.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("Follow a group on @gup.pe to join that group")]),n("li",[t._v("Mention a group on @gup.pe to share a post with everyone in the group")]),n("li",[t._v("New groups are created on demand, just search for or mention @YourGroupNameHere@gup.pe and it will show up")]),n("li",[t._v("Visit a @gup.pe group profile to see the group history")])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-center"},[n("img",{staticClass:"w3-image profile-image",attrs:{src:t.groupProfileSrc}}),n("h2",{staticClass:"w3-wide"},[t._v(t._s(t.actor.preferredUsername))]),n("div",{staticClass:"w3-container"},[n("span",{staticClass:"w3-container w3-show-inline-block"},[n("i",{staticClass:"fas fa-users",attrs:{title:"Group members"}}),t._v(t._s(t.followerCount))]),n("span",{staticClass:"w3-container w3-show-inline-block"},[n("i",{staticClass:"fas fa-mail-bulk",attrs:{title:"Group posts"}}),t._v(t._s(t.postCount))])]),n("p",{staticClass:"w3-opacity"},[n("i",[t._v(t._s(t.actor.summary))])])])},h=[],w={props:{actor:{type:Object,required:!0}},data:function(){return{followerCount:void 0,postCount:void 0}},computed:{groupProfileSrc:function(){return this.actor&&this.actor.icon?this.actor.icon.url:""}},methods:{fetchInfo:function(){var t=this;window.fetch(this.actor.followers,{method:"get",headers:{accept:"application/activity+json"}}).then((function(t){return t.json()})).then((function(e){t.followerCount=e.totalItems})),window.fetch(this.actor.outbox,{method:"get",headers:{accept:"application/activity+json"}}).then((function(t){return t.json()})).then((function(e){t.postCount=e.totalItems}))}},created:function(){this.fetchInfo()},updated:function(){this.fetchInfo()}},v=w,m=(n("13f2"),Object(i["a"])(v,d,h,!1,null,"c1288b72",null)),g=m.exports,b={name:"home",components:{ProfileSummary:g},data:function(){return{groups:[],error:null}},created:function(){var t=this;window.fetch("/u/",{method:"get",headers:{accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){t.groups=e})).catch((function(e){return t.error=e.message}))}},y=b,_=(n("4bbd"),n("2154"),Object(i["a"])(y,p,f,!1,null,"9c330358",null)),C=_.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-container w3-content w3-center w3-padding-32"},[n("profile-summary",{attrs:{actor:t.actor}}),n("p",{staticClass:"w3-left-align"},[t._v("To join "+t._s(t.actor.preferredUsername)+", enter your handle below and you'll be\n    redirected back to this group's profile in your app where you can follow it.")]),n("form",{staticClass:"w3-container"},[n("label",[t._v("Your account")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.handle,expression:"handle"}],staticClass:"w3-input w3-center",attrs:{placeholder:"user@example.com",type:"text"},domProps:{value:t.handle},on:{input:function(e){e.target.composing||(t.handle=e.target.value)}}}),n("button",{staticClass:"w3-btn w3-cyan w3-block w3-margin-top",attrs:{disabled:t.fetchingRemote},on:{click:function(e){return e.preventDefault(),t.doFollow(e)}}},[t._v("\n      Procced to follow\n    ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.invalidHandle,expression:"invalidHandle"}],staticClass:"w3-panel w3-pale-red w3-display-container w3-border"},[n("span",{staticClass:"w3-button w3-large w3-display-topright",on:{click:function(e){e.preventDefault(),t.invalidHandle=!1}}},[t._v("×")]),n("h3",[t._v("Double check that username")]),n("p",[t._v("e.g. you@yourhost.com")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.unreachable,expression:"unreachable"}],staticClass:"w3-panel w3-pale-red w3-display-container w3-border"},[n("span",{staticClass:"w3-button w3-large w3-display-topright",on:{click:function(e){e.preventDefault(),t.unreachable=!1}}},[t._v("×")]),n("h3",[t._v("Oops")]),n("p",[t._v("Couldn't connect with your host.")]),n("p",[t._v("You could try going back to your app and entering @"+t._s(t.groupHandle)+" in the search instead")])]),n("div",{staticClass:"w3-container w3-content w3-padding-64"},[n("h2",{staticClass:"w3-wide w3-center"},[t._v("Recent group posts")]),n("div",t._l(t.stream,(function(t){return n("post-card",{key:t.id,attrs:{activity:t}})})),1)])],1)},k=[],x=(n("7f7f"),n("a481"),n("7514"),n("768b")),O=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-card w3-margin-bottom"},[n("div",{staticClass:"w3-container w3-left-align"},[n("label",[n("b",[t._v(t._s(t.actor.preferredUsername))]),n("span",{staticClass:"w3-text-grey"},[t._v("@"+t._s(t.actorHost))])])]),n("div",{staticClass:"w3-container"},[n("p",{domProps:{innerHTML:t._s(t.post.content)}})])])}),P=[],H={props:{activity:{type:Object,required:!0}},data:function(){return{post:{},actor:{},isError:!1}},computed:{actorIconUrl:function(){return this.actor.icon&&this.actor.icon.url},actorHost:function(){try{var t=new URL(this.actor.id);return t.host}catch(e){return""}}},methods:{resolveObject:function(t){var e=this;return"string"!==typeof t?new Promise((function(e){return e(t)})):window.fetch("/o/".concat(encodeURIComponent(t)),{method:"get",headers:{accept:"application/activity+json"}}).then((function(t){return t.json()})).catch((function(t){e.isError=!0,console.log(t.message)}))}},created:function(){var t=this;this.resolveObject(this.activity.object).then((function(e){return t.post=e,t.resolveObject(t.post.attributedTo)})).then((function(e){t.actor=e}))}},G=H,S=(n("4a48"),n("582d"),Object(i["a"])(G,O,P,!1,null,"26eca70a",null)),E=S.exports,U={components:{PostCard:E,ProfileSummary:g},props:{name:{type:String,required:!0},postLimit:{type:Number,default:20}},data:function(){return{actor:{},stream:{},error:null,handle:"",invalidHandle:!1,unreachable:!1,fetchingRemote:!1}},computed:{groupProfileSrc:function(){return this.actor&&this.actor.icon?this.actor.icon.url:""},groupHandle:function(){if(this.actor.id&&this.actor.preferredUsername){var t=new window.URL(this.actor.id);return"".concat(this.actor.preferredUsername.toLowerCase(),"@").concat(t.host)}return""}},methods:{doFollow:function(){var t,e,n=this;this.invalidHandle=!1,this.unreachable=!1;try{var o=/@?([^@]+)@(.+)/.exec(this.handle),r=Object(x["a"])(o,3);t=r[0],r[1],e=r[2]}catch(a){return void(this.invalidHandle=!0)}this.fetchingRemote=!0,window.fetch("https://".concat(e,"/.well-known/webfinger?resource=acct:").concat(t),{method:"get",mode:"cors",headers:{accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){var e=t.links.find((function(t){return"http://ostatus.org/schema/1.0/subscribe"===t.rel}));window.location.href=e.template.replace("{uri}",n.groupHandle)})).catch((function(t){console.log(t),n.unreachable=!0})).then((function(){n.fetchingRemote=!1}))}},created:function(){var t=this;window.fetch("/u/".concat(this.name),{method:"get",headers:{accept:"application/activity+json"}}).then((function(t){return t.json()})).then((function(e){t.actor=e})).then((function(){return window.fetch(t.actor.outbox,{method:"get",mode:"cors",headers:{accept:"application/activity+json"}})})).then((function(t){return t.json()})).then((function(e){t.stream=e.orderedItems.filter((function(t){return"Announce"===t.type})).slice(0,t.postLimit)})).catch((function(e){return t.error=e.message}))}},$=U,I=(n("053e"),Object(i["a"])($,j,k,!1,null,"2eec363b",null)),R=I.exports;o["a"].use(l["a"]);var L=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:C},{path:"/u/:name",name:"profile",component:R,props:!0}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});o["a"].config.productionTip=!1,new o["a"]({router:L,render:function(t){return t(u)}}).$mount("#app")},"582d":function(t,e,n){"use strict";var o=n("c8b5"),r=n.n(o);r.a},"64a9":function(t,e,n){},9838:function(t,e,n){},c8b5:function(t,e,n){},cbf7:function(t,e,n){},e996:function(t,e,n){}});
//# sourceMappingURL=app-legacy.a96d9fef.js.map