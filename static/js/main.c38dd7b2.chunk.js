(this["webpackJsonpthorchain-caps"]=this["webpackJsonpthorchain-caps"]||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(7),a=n.n(r),s=(n(12),n(6),n(5)),o=n(0),h=function(e){var t=e.update.toLocaleTimeString("en",{hour:"numeric",minute:"numeric",second:"numeric"});return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Last Updated: "}),Object(o.jsx)("p",{children:t})]})};var j=function(){var e=new Date,t=Object(i.useState)(e),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(i.useState)({"mimir//CHURNINTERVAL":288e3,"mimir//FULLIMPLOSSPROTECTIONBLOCKS":0,"mimir//FUNDMIGRATIONINTERVAL":0,"mimir//MAXIMUMLIQUIDITYRUNE":5e12,"mimir//MINIMUMBONDINRUNE":3e12,"mimir//MINRUNEPOOLDEPTH":1e12,"mimir//OBSERVATIONDELAYFLEXIBILITY":20,"mimir//POOLCYCLE":14400}),j=Object(s.a)(a,2),u=j[0],O=j[1],d=function(){fetch("https://thornode.thorchain.info/thorchain/mimir",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),O(e)}))};Object(i.useEffect)((function(){r(new Date),d();var e=setInterval((function(){d(),r(new Date)}),1e4);return function(){return clearInterval(e)}}),[]);var m=u["mimir//MAXIMUMLIQUIDITYRUNE"]/Math.pow(10,8);return Object(o.jsxs)("div",{className:"App",children:[m>5e5?Object(o.jsxs)("h1",{children:[" Caps may have been raised! Check here ",Object(o.jsx)("a",{href:"https://twitter.com/THORChain",children:"THORChain Twitter"})," ",Object(o.jsx)("br",{}),"New Cap: ",m]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Max Rune: ",m]})," ",Object(o.jsx)("p",{children:"Do not attempt to add liquidity."})]}),Object(o.jsx)(h,{update:c})]})};var u=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("h1",{children:"Thorchain Pool Cap"})}),Object(o.jsx)(j,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))},d=n(4);d.a.initialize("G-3B5HLMLB3T"),d.a.pageview("/"),a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),O()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.c38dd7b2.chunk.js.map