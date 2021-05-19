(this.webpackJsonpdictionary=this.webpackJsonpdictionary||[]).push([[0],{111:function(e,n,t){},112:function(e,n,t){},136:function(e,n,t){},138:function(e,n,t){},139:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(11),s=t.n(r),i=t(185),o=t(210),j=t(188),l=t(190),d=t(65),b=t(140),u=t(91),O=t.n(u),x=t(2),h=Object(i.a)((function(e){return Object(o.a)({root:{flexGrow:1,margin:0,padding:0},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));function m(){var e=h();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(j.a,{position:"static",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(x.jsx)(O.a,{})}),Object(x.jsx)(d.a,{variant:"h6",className:e.title,children:"Dictionary"})]})})})}var p=t(207),f=t(12),y=(t(111),t(191)),g=(t(112),function(){var e=Object(f.f)(),n=a.a.useCallback((function(){e.push("/academic")}),[e]);return Object(x.jsx)("div",{className:"container-notfound",style:{backgroundImage:"url(".concat("/dictionary/assets/empty.svg",")")},children:Object(x.jsx)(y.a,{variant:"contained",color:"primary",onClick:n,children:"Go to Home"})})}),v=t(92),N=t(41),w=t.n(N),k=t(59),E=t(21),S=t(60),C=t.n(S),T=t(192),R=t(193),L=t(195),I=t(199),P=t(198),W=t(194),_=t(196),z=t(197),A=t(94),F=Object(i.a)({table:{marginTop:1},sound:{maxWidth:105,paddingRight:30,paddingLeft:1}});var G=function(e){var n=e.dataEntry,t=Object(c.useState)([]),a=Object(E.a)(t,2),r=a[0],s=a[1],i=F();return Object(c.useEffect)((function(){var e=n.map((function(e){return n=e.context.regions,t=e.transcriptions?e.transcriptions[0].transcription:"",c=e.audio?e.audio.url:null,{region:n,transcription:t,audio:c};var n,t,c}));s(e)}),[n]),Object(x.jsx)(T.a,{className:"entrie_card",children:Object(x.jsxs)(R.a,{children:[Object(x.jsx)("strong",{children:"Pronunciation"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),r.length>0?Object(x.jsx)(W.a,{component:A.a,children:Object(x.jsxs)(L.a,{className:i.table,"aria-label":"simple table",children:[Object(x.jsx)(_.a,{children:Object(x.jsxs)(z.a,{children:[Object(x.jsx)(P.a,{align:"left",children:"Region"}),Object(x.jsx)(P.a,{align:"left",children:"Transcription"}),Object(x.jsx)(P.a,{align:"left",children:"Audio"})]})}),Object(x.jsx)(I.a,{children:r.map((function(e,n){return Object(x.jsxs)(z.a,{children:[Object(x.jsx)(P.a,{align:"left",size:"small",scope:"row",children:e.region}),Object(x.jsx)(P.a,{align:"left",children:e.transcription}),Object(x.jsx)(P.a,{align:"left",children:e.audio?Object(x.jsx)("audio",{src:e.audio,className:i.sound,controls:!0}):"No Audio"})]},"".concat(e.region,"-").concat(n))}))})]})}):""]})})},B=t(211),D=t(203),J=t(204),U=t(205),q=t(209),H=t(200),K=t(201),X=t(64),M=t.n(X),Q=t(206),V=t(202),Y=(t(136),function(e){var n=e.dataEntry;console.log("LEXE",n);var t=Object(c.useState)([]),a=Object(E.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){s(n)}),[n]),Object(x.jsx)(T.a,{className:"entrie_card",children:r.length>0?Object(x.jsx)(R.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Lexemes"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),r.map((function(e,n){return Object(x.jsx)("div",{children:Object(x.jsxs)(q.a,{children:[Object(x.jsx)(H.a,{expandIcon:Object(x.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsxs)(d.a,{children:["Definitions: ",e.lemma," | ",Object(x.jsx)("small",{children:e.partOfSpeech})," "]})}),Object(x.jsx)(K.a,{children:Object(x.jsx)(V.a,{container:!0,children:Object(x.jsx)(V.a,{item:!0,md:12,xs:12,children:Object(x.jsx)(D.a,{className:"lista",children:e.senses.map((function(e,n){return Object(x.jsx)(J.a,{children:Object(x.jsxs)(U.a,{children:[e.labels?e.labels.map((function(e){return Object(x.jsx)(B.a,{label:e,color:"secondary",size:"small",className:"chips"})})):"","   ",e.definition,Object(x.jsx)("br",{}),e.usageExamples?Object(x.jsxs)("div",{children:[Object(x.jsx)("small",{children:Object(x.jsx)("strong",{children:"Example:"})}),e.usageExamples]}):""]})},"".concat(e.definition.length,"-").concat(n))}))})})})})]})},"".concat(e.lemma,"-").concat(n))})),Object(x.jsx)("br",{}),r.map((function(e){return e.antonymSets})).length>0?Object(x.jsxs)(q.a,{children:[Object(x.jsx)(H.a,{expandIcon:Object(x.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsx)(d.a,{variant:"h6",children:"Antonyms  "})}),Object(x.jsx)(K.a,{children:Object(x.jsx)(V.a,{container:!0,children:Object(x.jsx)(V.a,{item:!0,md:12,xs:12,children:Object(x.jsx)(D.a,{className:"lista",children:r.filter((function(e){return e.hasOwnProperty("antonymSets")})).map((function(e,n){return Object(x.jsx)(J.a,{children:Object(x.jsx)(D.a,{children:e.antonymSets?e.antonymSets.map((function(e){return Object(x.jsxs)(J.a,{className:"items_antonimos",children:[e.sense?"".concat(e.antonyms,"  :   ").concat(e.sense):"".concat(e.antonyms),Object(x.jsx)(Q.a,{})]},"".concat(e.antonyms.length,"-").concat(e.sense))})):""})},"".concat(e.lemma,"-").concat(n,"-antonym"))}))})})})})]}):"",Object(x.jsx)("br",{}),r.map((function(e){return e.synonymSets})).length>0?Object(x.jsxs)(q.a,{children:[Object(x.jsx)(H.a,{expandIcon:Object(x.jsx)(M.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsx)(d.a,{variant:"h6",children:"Synonyms"})}),Object(x.jsx)(K.a,{children:Object(x.jsx)(V.a,{container:!0,children:Object(x.jsx)(V.a,{item:!0,md:12,xs:12,children:Object(x.jsx)(D.a,{className:"lista",children:r.filter((function(e){return e.hasOwnProperty("synonymSets")})).map((function(e,n){return Object(x.jsx)(J.a,{children:Object(x.jsx)(D.a,{children:void 0!==e.synonymSets&&e.synonymSets.map((function(e){return Object(x.jsxs)(J.a,{className:"items_antonimos",children:[e.sense?"".concat(e.synonyms,"  :   ").concat(e.sense):"".concat(e.synonyms),Object(x.jsx)(Q.a,{})]},"".concat(e.synonyms.length,"-").concat(e.sense))}))})},"".concat(e.lemma,"-").concat(n,"-synonym"))}))})})})})]}):"",Object(x.jsx)("br",{})]})}):""})}),Z=function(e){var n=e.dataEntry;return Object(x.jsx)(T.a,{className:"entrie_card",children:Object(x.jsx)(R.a,{children:Object(x.jsx)(d.a,{children:Object(x.jsx)("strong",{children:n})})})})},$=(t(138),function(){return Object(x.jsx)("div",{className:"container-notfound",style:{backgroundImage:"url(".concat("/dictionary/assets/academic.svg",")")}})}),ee=function(e){var n,t=e.responseArray;return console.log(t),Object(x.jsx)("div",{children:t.entry?(n=t,Object(x.jsxs)("div",{children:[Object(x.jsx)(Z,{dataEntry:n.entry}),n.hasOwnProperty("pronunciations")&&Object(x.jsx)(G,{dataEntry:n.pronunciations}),n.lexemes?Object(x.jsx)(Y,{dataEntry:n.lexemes}):"Lexemes not Found"]})):Object(x.jsx)($,{})})},ne=t(63),te=t(74),ce=t(208),ae=Object(i.a)({root:{minWidth:275,marginTop:20},texto:{margin:"0 2px"},boton:{margin:"0 2px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"}}),re=function(e){var n,t=e.onTipeWord,c=ae(),r=Object(f.f)(),s=a.a.useState({word:""}),i=Object(E.a)(s,2),o=i[0],j=i[1],l=function(){t(o.word.toLowerCase())},b=a.a.useCallback((function(){r.push("/urban")}),[r]);return Object(x.jsx)(T.a,{className:c.root,children:Object(x.jsxs)(R.a,{children:[Object(x.jsx)(d.a,{variant:"h5",component:"h2",children:"What word do you want to search for?"}),Object(x.jsx)(ce.a,{size:"small",className:c.texto,id:"outlined-basic",label:"Type your word",variant:"outlined",onChange:(n="word",function(e){j(Object(te.a)(Object(te.a)({},o),{},Object(ne.a)({},n,e.target.value)))}),onKeyDown:function(e){"Enter"===e.key&&(console.log("do validate",o.word),l())},value:o.word}),Object(x.jsx)(y.a,{className:c.boton,size:"large",variant:"outlined",color:"primary",onClick:l,children:"Search"}),Object(x.jsx)(y.a,{className:c.boton,size:"large",variant:"outlined",color:"secondary",onClick:b,children:"Change to Urban"})]})})},se=function(){var e=Object(c.useState)({}),n=Object(E.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),s=Object(E.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(k.a)(w.a.mark((function e(t){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("get dictionary",t),e.prev=1,""===t){e.next=8;break}return e.next=5,C.a.request({method:"GET",baseURL:"https://lingua-robot.p.rapidapi.com/language/v1",url:"/entries/en/".concat(t),headers:{"x-rapidapi-key":"".concat("b052107449msha64641c166fc5fep169fd1jsne99c7403ac77"),"x-rapidapi-host":"lingua-robot.p.rapidapi.com"}});case 5:c=e.sent,r=n(c.data.entries),a(r);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("\xc9RROR",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}(),n=function(e){console.log("pross",e);var n={};return Object.keys(e[0]).forEach((function(t){if("entry"!==t){var c,a=e.map((function(e){return e[t]})),r=function(e){var n={};return e.filter((function(e){return!n.hasOwnProperty(e)&&(n[e]=!0)}))}((c=[]).concat.apply(c,Object(v.a)(a)).map((function(e){return JSON.stringify(e)}))).map((function(e){return JSON.parse(e)}));n[t]=r}})),n.entry=e[0].entry,delete n.license,delete n.sourceUrls,n};e(i)}),[i]),Object(x.jsxs)("div",{children:[Object(x.jsx)(re,{onTipeWord:function(e){console.log(e),o(e)}}),Object(x.jsx)("br",{}),Object(x.jsx)(ee,{responseArray:t})]})},ie=function(){var e=Object(c.useState)(""),n=Object(E.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(k.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("get dictionary",n),e.prev=1,""===n){e.next=7;break}return e.next=5,C.a.request({method:"GET",url:"https://mashape-community-urban-dictionary.p.rapidapi.com/define",params:{term:n},headers:{"x-rapidapi-key":"".concat("b052107449msha64641c166fc5fep169fd1jsne99c7403ac77"),"x-rapidapi-host":"mashape-community-urban-dictionary.p.rapidapi.com"}});case 5:t=e.sent,console.log(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("\xc9RROR",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}})()(t)}),[t]),Object(x.jsxs)("div",{children:[Object(x.jsx)(re,{onTipeWord:function(e){console.log(e),a(e)}}),Object(x.jsx)("br",{})]})},oe=function(){return Object(x.jsxs)("div",{className:"contenedor_general",children:[Object(x.jsx)(m,{}),Object(x.jsx)(p.a,{fixed:!0,children:Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{exact:!0,path:"/academic",children:Object(x.jsx)(se,{})}),Object(x.jsx)(f.a,{path:"/urban",children:Object(x.jsx)(ie,{})}),Object(x.jsx)(f.a,{children:Object(x.jsx)(g,{})})]})})]})},je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,213)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))},le=t(43);s.a.render(Object(x.jsx)(le.a,{basename:"",children:Object(x.jsx)(oe,{})}),document.getElementById("root")),je()}},[[139,1,2]]]);
//# sourceMappingURL=main.be018633.chunk.js.map