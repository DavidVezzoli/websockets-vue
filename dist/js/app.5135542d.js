(function(t){function e(e){for(var o,c,u=e[0],a=e[1],l=e[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/test/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("BlockGame")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"game",staticStyle:{border:"1px solid black"},attrs:{width:"400",height:"400"}}),n("p",[n("button",{on:{click:function(e){return t.move("left")}}},[t._v("Left")]),n("button",{on:{click:function(e){return t.move("right")}}},[t._v("Right")]),n("button",{on:{click:function(e){return t.move("up")}}},[t._v("Up")]),n("button",{on:{click:function(e){return t.move("down")}}},[t._v("Down")])])])},u=[],a=n("8055"),l=n.n(a),f={name:"BlockGame",data:function(){return{socket:{},context:{},position:{x:0,y:0}}},created:function(){this.socket=l()("http://localhost:3000")},mounted:function(){var t=this;this.context=this.$refs.game.getContext("2d"),this.socket.on("position",(function(e){t.position=e,t.context.clearRect(0,0,t.$refs.game.width,t.$refs.game.height),t.context.fillRect(t.position.x,t.position.y,20,20)}))},methods:{move:function(t){this.socket.emit("move",t)}}},s=f,p=n("2877"),d=Object(p["a"])(s,c,u,!1,null,"1bf76bb2",null),h=d.exports,v={name:"App",components:{BlockGame:h}},b=v,m=Object(p["a"])(b,r,i,!1,null,null,null),g=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.5135542d.js.map