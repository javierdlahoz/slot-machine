(function(t){function e(e){for(var o,i,r=e[0],c=e[1],u=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08f6":function(t,e,n){t.exports=n.p+"img/21.929ec374.png"},"0a4f":function(t,e,n){t.exports=n.p+"img/22.a051581d.png"},"11b3":function(t,e,n){"use strict";var o=n("2b0e"),s=new o["default"];e["a"]=s},1673:function(t,e,n){t.exports=n.p+"img/6.2fdbb5c9.png"},"19b6":function(t,e,n){"use strict";n("99af");var o,s,a=n("c3e4"),i=n("11b3"),r=n("bc3a"),c=n.n(r),u=n("2b0e"),l={data:function(){return{loading:!1,choices:[],response:{},payline:[]}},methods:{retrieveSpinData:function(t,e,n){var o=this;i["a"].$emit("spinning",!0),c.a.post(this.spinEndpoint,t,{headers:this.playerHeaders}).then((function(t){var n=t.data;o.response=n,o.choices=n.data.outcome,o.payline=n.data.payouts.payline?n.data.payouts.payline:[],o.$store.dispatch("setBetResponse",n.data),o.$store.dispatch("setBalance",n.data.balance),e(n)})).catch((function(t){i["a"].$emit("spinning",!1),u["default"].$toast.error("Something went wrong"),n(t)}))},retrieveSessionInfo:function(t,e){var n=this;c.a.get("".concat(a["a"].baseUrl,"/"),{headers:this.playerHeaders}).then((function(e){var o=e.data;n.$store.dispatch("setGame",o.data.game),n.$store.dispatch("setBalance",o.data.balance),t(o)})).catch((function(){u["default"].$toast.error("Something went wrong"),e&&e()}))}},computed:{spinEndpoint:function(){return"".concat(a["a"].baseUrl,"/games/").concat(a["a"].gameId,"/spin")},config:function(){return{headers:this.headers}},headers:function(){var t;return{Authorization:"Bearer ".concat(null!==(t=this.$store.getters.operatorToken)&&void 0!==t?t:a["a"].token)}},playerHeaders:function(){return{Authorization:"Bearer ".concat(this.$store.getters.bearerToken)}}}},p=l,d=n("2877"),f=Object(d["a"])(p,o,s,!1,null,null,null);e["a"]=f.exports},"1fcd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row control-panel",class:t.slotStyle},[n("div",{staticClass:"col-md-12"},[t.meta&&t.meta.outcome?n("div",[t.meta.payouts.payline?n("div",{staticClass:"mb-2 flex flex-grow-1 text-center"},[t._v(" payouts Log: "+t._s(t.meta.payouts.payline)+" ")]):t._e()]):t._e()]),n("div",{staticClass:"col-md-6 d-flex flex-column justify-content-center"},[t.balance?n("h5",[t._v(" Balance: "+t._s(t._f("currency")(t.balance))+" ")]):t._e(),t.meta&&t.meta.bet?n("h5",[t._v(" Bet: "+t._s(t._f("currency")(t.meta.bet))+" ")]):t._e(),t.meta&&t.meta.win?n("h5",[t._v(" Win: "+t._s(t._f("currency")(t.meta.win))+" ")]):t._e()]),n("div",{staticClass:"col-md-6 text-right"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"input-group mb-2"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number",min:"0.50",step:"0.50",disabled:t.autoSpinning},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),n("div",{staticClass:"input-group mb-2"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.autoSpins,expression:"autoSpins"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"1"},domProps:{value:t.autoSpins},on:{input:function(e){e.target.composing||(t.autoSpins=e.target.value)}}})]),n("button",{staticClass:"btn btn-block btn-primary px-4",attrs:{disabled:t.spinning||t.autoSpinning},on:{click:t.trigger}},[t.spinning?n("font-awesome-icon",{staticClass:"mx-2",attrs:{icon:"spinner",spin:""}}):n("span",[t._v("Spin")])],1),t.autoSpinning?n("button",{staticClass:"btn btn-block btn-danger px-4",attrs:{disabled:t.spinning},on:{click:t.stopAutoSpin}},[t.spinning?n("font-awesome-icon",{staticClass:"mx-2",attrs:{icon:"spinner",spin:""}}):t._e(),n("span",[t._v("("+t._s(t.spinCountdown)+") Stop ")])],1):n("button",{staticClass:"btn btn-block btn-warning px-4",attrs:{disabled:t.spinning},on:{click:function(e){return t.triggerAutoSpin(t.autoSpins)}}},[n("span",[t._v("Auto Spin")])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Bet: €")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Auto spin:")])])}],a=n("c3e4"),i=n("11b3"),r=n("977c"),c={mixins:[r["a"]],data:function(){return{spinning:!1,amount:.5,meta:null,balance:0,autoSpins:10,spinCountdown:10,autoSpinning:!1}},created:function(){var t=this;this.balance=this.$store.getters.balance,i["a"].$on("spinning",(function(e){t.balance=t.$store.getters.balance,t.spinning=e,e||(t.meta=t.$store.getters.betResponse,t.balance=t.$store.getters.balance,t.autoSpinning&&(t.spinCountdown-=1,setTimeout((function(){t.autoSpinning&&t.triggerAutoSpin(t.spinCountdown)}),a["a"].autoSpinTimeout)))}))},methods:{trigger:function(){this.$emit("triggered",{amount:this.amount})},triggerAutoSpin:function(t){this.autoSpinning=!0,this.spinCountdown=t,this.trigger(),this.spinCountdown<1&&(this.autoSpinning=!1)},stopAutoSpin:function(){this.autoSpinning=!1}}},u=c,l=n("2877"),p=Object(l["a"])(u,o,s,!1,null,null,null);e["default"]=p.exports},2365:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"slot__symbol-wrapper position-relative",class:t.slotStyle,style:{"background-image":"url("+t.imageSrc+")"}},[t.winnerSymbol&&!t.spinning?[n(t.winnerComponent,{tag:"component"})]:t._e()],2)])},s=[],a=(n("99af"),n("4160"),n("a9e3"),n("159b"),n("11b3")),i=n("977c"),r=(n("a630"),n("fb6a"),n("3ca3"),{chunk:function(t,e){return Array.from({length:Math.ceil(t.length/e)},(function(n,o){return t.slice(o*e,o*e+e)}))}}),c={mixins:[i["a"]],props:{symbol:Number,reelIndex:Number,symbolIndex:Number,row:Number},data:function(){return{spinning:!1}},created:function(){var t=this;a["a"].$on("spinning",(function(e){t.spinning=e}))},computed:{imageSrc:function(){return n("c0b6")("./".concat(window.slotConfig.theme,"/symbols/").concat(this.symbol,".png"))},winnerSymbol:function(){var t=this;if(!this.$store.getters.betResponse)return null;var e=this.$store.getters.betResponse.payouts,n=0;return e.forEach((function(e){if(e.mask){var o=r.chunk(e.mask,t.$store.getters.game.options.cols);if(o[t.row]&&o[t.row][t.reelIndex])return void(n=o[t.row][t.reelIndex])}})),n},winnerComponent:function(){return"winner-".concat(this.winnerSymbol)}}},u=c,l=n("2877"),p=Object(l["a"])(u,o,s,!1,null,null,null);e["default"]=p.exports},2407:function(t,e,n){t.exports=n.p+"img/2.1707ec89.png"},"26e4":function(t,e,n){t.exports=n.p+"img/13.302bbbf5.png"},2718:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot"},[n("div",{staticClass:"slot__window",class:t.slotStyle,style:{"max-height":t.slotWindowHeight+"px"}},[n("div",{staticClass:"slot__wrap"},[t._l(t.reel.items,(function(e,o){return n("div",{key:e,staticClass:"slot__item",class:t.slotStyle},[n("slot-symbol",{attrs:{row:0,symbol:e,"reel-index":t.reelIndex,"symbol-index":o}})],1)})),n("div",{staticClass:"slot__offset"},t._l(t.rowsRange,(function(e){return n("div",{key:e,staticClass:"slot__item slot__item--copy",class:t.slotStyle},[n("slot-symbol",{attrs:{row:e,symbol:t.reel.items[e],"reel-index":t.reelIndex}})],1)})),0)],2)])])},s=[],a=(n("a9e3"),n("96cf"),n("1da1")),i=n("977c"),r={mixins:[i["a"]],props:{reel:Object,reelIndex:{type:Number,default:0}},data:function(){return{rows:1}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.rows=t.$store.getters.game.options.rows;case 1:case"end":return e.stop()}}),e)})))()},computed:{rowsRange:function(){for(var t=[],e=0;e<this.rows;e++)t.push(e);return t}}},c=r,u=n("2877"),l=Object(u["a"])(c,o,s,!1,null,null,null);e["default"]=l.exports},2880:function(t,e,n){t.exports=n.p+"img/0.bb00b3d8.png"},"2add":function(t,e,n){t.exports=n.p+"img/18.c705da52.png"},"38eb":function(t,e,n){t.exports=n.p+"img/1.c099ec91.png"},4371:function(t,e,n){t.exports=n.p+"img/5.3abe0846.png"},5232:function(t,e,n){t.exports=n.p+"img/12.b2aeb2bd.png"},5387:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),s=n("ecee"),a=n("c074"),i=n("ad3d");s["c"].add(a["a"]),o["default"].component("font-awesome-icon",i["a"]);var r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot-machine"},[t.loading?n("splash-screen"):n("slot-board")],1)},u=[],l=(n("96cf"),n("1da1")),p=n("19b6"),d={mixins:[p["a"]],data:function(){return{loading:!0,loadingPercentage:0}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initialize();case 1:case"end":return e.stop()}}),e)})))()},methods:{initialize:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$route.params.token&&t.$store.dispatch("setBearerToken",t.$route.params.token),e.next=3,t.preload();case 3:case"end":return e.stop()}}),e)})))()},retrieveInitialData:function(){var t=this;this.loading=!0,this.retrieveSessionInfo((function(){t.loading=!1}))},preload:function(){this.retrieveInitialData()}}},f=d,m=(n("5c0b"),n("2877")),g=Object(m["a"])(f,c,u,!1,null,null,null),b=g.exports,h=n("2f62");o["default"].use(h["a"]);var v=new h["a"].Store({state:{operatorToken:null,bearerToken:null,betResponse:null,game:null,balance:null},mutations:{SET_OPERATOR_TOKEN:function(t,e){t.operatorToken=e},SET_BEARER_TOKEN:function(t,e){t.bearerToken=e},SET_BET_RESPONSE:function(t,e){t.betResponse=e},SET_GAME:function(t,e){t.game=e},SET_BALANCE:function(t,e){t.balance=e},BET:function(t,e){t.balance-=e}},actions:{setOperatorToken:function(t,e){var n=t.commit;n("SET_OPERATOR_TOKEN",e)},setBearerToken:function(t,e){var n=t.commit;n("SET_BEARER_TOKEN",e)},setBetResponse:function(t,e){var n=t.commit;n("SET_BET_RESPONSE",e)},setGame:function(t,e){var n=t.commit;n("SET_GAME",e)},setBalance:function(t,e){var n=t.commit;n("SET_BALANCE",e)},bet:function(t,e){var n=t.commit;n("BET",e)}},modules:{},getters:{operatorToken:function(t){return t.operatorToken},bearerToken:function(t){return t.bearerToken},betResponse:function(t){return t.betResponse},game:function(t){return t.game},balance:function(t){return t.balance}}}),w=n("b079"),y=n.n(w),_=(n("ce8c"),n("8c4f"));o["default"].use(_["a"]);var x=[{path:"/",name:"PlayForFun",component:b},{path:"/:token?",name:"PlayForReal",component:b}],S=new _["a"]({routes:x,mode:"history"}),C=S,E=n("f260");o["default"].config.productionTip=!1,window.slotConfig={theme:"default"},o["default"].use(y.a),o["default"].use(E["a"],{symbol:"€",thousandsSeparator:".",fractionCount:2,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}),o["default"].component("slot-control-panel",n("1fcd").default),o["default"].component("slot-board",n("91ea").default),o["default"].component("slot-reel",n("2718").default),o["default"].component("splash-screen",n("eebc").default),o["default"].component("slot-symbol",n("2365").default),o["default"].component("winner-0",n("64c2").default),o["default"].component("winner-1",n("c025").default),new o["default"]({store:v,router:C,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5387"),s=n.n(o);s.a},6224:function(t,e,n){t.exports=n.p+"img/10.076119f8.png"},"64c2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot__symbol-winner"},[n("font-awesome-icon",{attrs:{icon:"sun",spin:""}})],1)},s=[],a={},i=a,r=n("2877"),c=Object(r["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},"6bed":function(t,e,n){t.exports=n.p+"img/24.6a38dc5e.png"},"6ca6":function(t,e,n){t.exports=n.p+"img/23.4c2c1bb5.png"},7539:function(t,e,n){t.exports=n.p+"img/7.43928298.png"},8315:function(t,e,n){t.exports=n.p+"img/8.3fc234de.png"},8591:function(t,e,n){t.exports=n.p+"img/17.12658441.png"},"91ea":function(t,e,n){"use strict";n.r(e);var o,s,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container board"},[n("h2",{staticClass:"text-center"},[t._v(" "+t._s(t.$store.getters.game.name)+" ")]),n("div",{staticClass:"row mt-4 mb-4 board-container",class:t.slotStyle,style:{"max-height":t.boardHeight+"px"}},t._l(t.reels,(function(e,o){return n("div",{key:o,ref:"reels",refInFor:!0,staticClass:"reel-container",class:t.reelsColClass,style:{height:t.reelHeight+"px"}},[n("slot-reel",{attrs:{reel:e,"reel-index":o}})],1)})),0),n("slot-control-panel",{on:{triggered:function(e){return t.spin(e)}}})],1)},i=[],r=(n("99af"),n("d3b7"),n("ddb0"),n("2909")),c=(n("96cf"),n("1da1")),u=n("19b6"),l=(n("a623"),n("4160"),n("d81d"),n("159b"),n("11b3")),p=n("c3e4"),d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},f=d,m=n("977c"),g={mixins:[m["a"]],data:function(){return{opts:null,startedAt:null}},methods:{startAnimatedSpin:function(){var t=this;this.opts||(this.opts=this.reels.map((function(e,n){var o=t.$refs.reels[n],s=t.choices[n]?t.choices[n]:Math.floor(Math.random(p["a"].symbols)),a={el:o.querySelector(".slot__wrap"),finalPos:s*t.symbolHeight,choice:s,startOffset:p["a"].animationSpeed+500*Math.random()+500*n,height:e.items.length*t.symbolHeight,duration:p["a"].animationDuration+n*p["a"].stopDelay,isFinished:!1};return a})),f(this.animateSpin))},animateSpin:function(t){null==this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach((function(t){if(!t.isFinished){var n=Math.max(t.duration-e,0),o=p["a"].reels,s=Math.pow(n,o)/Math.pow(t.duration,o)*t.startOffset,a=-1*Math.floor((s+t.finalPos)%t.height);t.el.style.transform="translateY("+a+"px)",e>t.duration&&(t.isFinished=!0)}})),this.opts.every((function(t){return t.isFinished}))?(this.opts=null,this.startedAt=null,setTimeout((function(){return l["a"].$emit("spinning",!1)}),200)):f(this.animateSpin)}}},b=g,h=n("2877"),v=Object(h["a"])(b,o,s,!1,null,null,null),w=v.exports,y={mixins:[u["a"],w,m["a"]],data:function(){return{reelAmount:0,rows:0,symbolsAmount:0}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.reelAmount=t.$store.getters.game.options.cols,t.rows=t.$store.getters.game.options.rows,t.symbolsAmount=t.$store.getters.game.options.symbols;case 3:case"end":return e.stop()}}),e)})))()},computed:{reels:function(){for(var t=[],e=0;e<this.reelAmount;e++)t.push({items:Object(r["a"])(Array(this.symbolsAmount).keys())});return t},reelsColClass:function(){var t={3:"col-4",4:"col-3",5:"col-c5"};return"".concat(t[this.reelAmount]," ").concat(this.slotStyle)},boardHeight:function(){return this.slotWindowHeight+20}},methods:{winnerSymbol:function(t){return isNaN(this.payline[t])?null:this.payline[t]},spin:function(t){var e=this;this.$store.dispatch("bet",t.amount),this.retrieveSpinData(t,(function(){e.startAnimatedSpin()}),(function(t){console.log(t)}))}}},_=y,x=Object(h["a"])(_,a,i,!1,null,null,null);e["default"]=x.exports},"977c":function(t,e,n){"use strict";n("99af");var o,s,a=n("c3e4"),i={data:function(){return{windowWidth:window.innerWidth,rows:1,cols:1,defaultStyle:3,symbolDic:{"lg-3":130,"md-3":130,"sm-3":130,"xs-3":130,"lg-4":130,"md-4":130,"sm-4":130,"xs-4":130,"lg-5":130,"md-5":130,"sm-5":130,"xs-5":130}}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth})),this.rows=this.$store.getters.game.options.rows,this.cols=this.$store.getters.game.options.cols},computed:{slotStyle:function(){return"slot-".concat(this.cols)},symbolHeight:function(){return this.symbolDic["".concat(this.breakpoint,"-").concat(a["a"].reels)]},slotWindowHeight:function(){return this.symbolHeight*this.$store.getters.game.options.rows+20},reelHeight:function(){return this.slotWindowHeight*this.$store.getters.game.options.rows+10},breakpoint:function(){return this.windowWidth>1200?"lg":this.windowWidth>992?"md":this.windowWidth>768?"sm":"xs"}}},r=i,c=n("2877"),u=Object(c["a"])(r,o,s,!1,null,null,null);e["a"]=u.exports},9885:function(t,e,n){t.exports=n.p+"img/14.5fb8bb8e.png"},ad39:function(t,e,n){var o={"./default/logo.png":"d6f1"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="ad39"},ad73:function(t,e,n){t.exports=n.p+"img/16.aa8a349e.png"},ae6f:function(t,e,n){t.exports=n.p+"img/19.3c0b8b3a.png"},c025:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot__symbol-winner"},[n("font-awesome-icon",{attrs:{icon:"star",spin:""}})],1)},s=[],a={},i=a,r=n("2877"),c=Object(r["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},c03f:function(t,e,n){t.exports=n.p+"img/4.2d912c4b.png"},c0b6:function(t,e,n){var o={"./default/logo.png":"d6f1","./default/symbols/0.png":"2880","./default/symbols/1.png":"38eb","./default/symbols/10.png":"6224","./default/symbols/11.png":"d111","./default/symbols/12.png":"5232","./default/symbols/13.png":"26e4","./default/symbols/14.png":"9885","./default/symbols/15.png":"e96c","./default/symbols/16.png":"ad73","./default/symbols/17.png":"8591","./default/symbols/18.png":"2add","./default/symbols/19.png":"ae6f","./default/symbols/2.png":"2407","./default/symbols/20.png":"ef16","./default/symbols/21.png":"08f6","./default/symbols/22.png":"0a4f","./default/symbols/23.png":"6ca6","./default/symbols/24.png":"6bed","./default/symbols/3.png":"d0b8","./default/symbols/4.png":"c03f","./default/symbols/5.png":"4371","./default/symbols/6.png":"1673","./default/symbols/7.png":"7539","./default/symbols/8.png":"8315","./default/symbols/9.png":"d8ea"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="c0b6"},c3e4:function(t,e,n){"use strict";var o={symbols:25,reels:3,rows:1,cols:3,animationDuration:3e3,animationSpeed:1e4,stopDelay:200,gameId:1,autoSpinTimeout:3e3,baseUrl:"https://casino.nomadnt.com",token:"very-strong-random-string-1"};e["a"]=o},d0b8:function(t,e,n){t.exports=n.p+"img/3.d12ea337.png"},d111:function(t,e,n){t.exports=n.p+"img/11.60c254a8.png"},d6f1:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d8ea:function(t,e,n){t.exports=n.p+"img/9.05955289.png"},e96c:function(t,e,n){t.exports=n.p+"img/15.6d7ebbfc.png"},eebc:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"splash-screen"},[n("img",{attrs:{src:t.logoSrc}}),n("div",{staticClass:"spinner mt-4"},[n("div",{staticClass:"fa-3x text-white"},[n("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}})],1)])])},s=[],a=(n("a9e3"),{props:{loadingPercentage:Number},data:function(){return{game:null}},computed:{logoSrc:function(){return n("ad39")("./".concat(window.slotConfig.theme,"/logo.png"))},progressClass:function(){return"width: ".concat(this.loadingPercentage,"%")}}}),i=a,r=n("2877"),c=Object(r["a"])(i,o,s,!1,null,null,null);e["default"]=c.exports},ef16:function(t,e,n){t.exports=n.p+"img/20.2ddc82ca.png"}});
//# sourceMappingURL=app.ced46b2f.js.map