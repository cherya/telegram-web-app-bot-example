import{f as ze,s as De,h as ue,i as ke,j as ye,c as Ve,u as Le,g as je,d as He,n as N,k as Ce,l as Ue,m as Ne,r as Me,p as We}from"../chunks/scheduler.i60jWgnB.js";import{S as Be,i as we,g as p,h as k,j as A,f as v,y as Ae,a as M,p as Oe,t as se,b as Re,d as ne,z as Ee,m as Q,A as Te,n as F,k as r,x as _,o as Z,B as Y,s as x,r as qe,c as D,u as Ge,C as V,v as Je,w as Qe}from"../chunks/index.K2uzg1Tt.js";import{w as Ie,r as Fe}from"../chunks/index._73hDoBv.js";function Ke(l,e){const t={},a={},s={$$scope:1};let i=l.length;for(;i--;){const n=l[i],o=e[i];if(o){for(const c in n)c in o||(a[c]=1);for(const c in o)s[c]||(t[c]=o[c],s[c]=1);l[i]=o}else for(const c in n)s[c]=1}for(const n in a)n in t||(t[n]=void 0);return t}const le=Ie({valid:null,data:{}}),Xe="https://powerful-unbiased-gannet.ngrok-free.app",H={initData:Telegram.WebApp.initData||"",initDataUnsafe:Telegram.WebApp.initDataUnsafe||{},MainButton:Telegram.WebApp.MainButton,init(l){Telegram.WebApp.ready(),Telegram.WebApp.MainButton.setParams({text:"Close",is_visible:!0}).onClick(H.close)},expand(){Telegram.WebApp.expand()},close(){Telegram.WebApp.close()},toggleMainButton(l){const e=Telegram.WebApp.MainButton;e.isVisible?(e.hide(),l.innerHTML="Show Main Button"):(e.show(),l.innerHTML="Hide Main Button")},async checkInitData(l){if(l){le.set({valid:null,data:{}});let e={method:"GET",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"69420"}};const t=await fetch(`${Xe}/validate?${l}`,e),a=await t.json();return t.ok?(le.set({valid:!0,data:a}),a):(le.set({valid:!1,data:{}}),{})}return{}}},ce={};function Se(l){return l==="local"?localStorage:sessionStorage}function fe(l,e,t){const a=t?.serializer??JSON,s=t?.storage??"local";function i(n,o){Se(s).setItem(n,a.stringify(o))}if(!ce[l]){const n=Ie(e,f=>{const g=Se(s).getItem(l);g&&f(a.parse(g));{const u=d=>{d.key===l&&f(d.newValue?a.parse(d.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:o,set:c}=n;ce[l]={set(f){i(l,f),c(f)},update(f){const g=f(ze(n));i(l,g),c(g)},subscribe:o}}return ce[l]}fe("modeOsPrefers",!1);fe("modeUserPrefers",void 0);fe("modeCurrent",!1);const Pe="(prefers-reduced-motion: reduce)";function Ye(){return window.matchMedia(Pe).matches}Fe(Ye(),l=>{{const e=a=>{l(a.matches)},t=window.matchMedia(Pe);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function Ze(l){let e;const t=l[17].default,a=Ve(t,l,l[16],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,i){a&&a.m(s,i),e=!0},p(s,i){a&&a.p&&(!e||i&65536)&&Le(a,t,s,s[16],e?He(t,s[16],i,null):je(s[16]),null)},i(s){e||(ne(a,s),e=!0)},o(s){se(a,s),e=!1},d(s){a&&a.d(s)}}}function $e(l){let e,t,a=String(l[1]).substring(0,2).toUpperCase()+"",s,i;return{c(){e=Ee("svg"),t=Ee("text"),s=Q(a),this.h()},l(n){e=Te(n,"svg",{class:!0,viewBox:!0});var o=A(e);t=Te(o,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var c=A(t);s=F(c,a),c.forEach(v),o.forEach(v),this.h()},h(){r(t,"x","50%"),r(t,"y","50%"),r(t,"dominant-baseline","central"),r(t,"text-anchor","middle"),r(t,"font-weight","bold"),r(t,"font-size",l[3]),r(t,"class",i="avatar-text "+l[2]),r(e,"class","avatar-initials w-full h-full"),r(e,"viewBox","0 0 512 512")},m(n,o){M(n,e,o),_(e,t),_(t,s)},p(n,o){o&2&&a!==(a=String(n[1]).substring(0,2).toUpperCase()+"")&&Z(s,a),o&8&&r(t,"font-size",n[3]),o&4&&i!==(i="avatar-text "+n[2])&&r(t,"class",i)},i:N,o:N,d(n){n&&v(e)}}}function et(l){let e,t,a,s,i,n,o;return{c(){e=p("img"),this.h()},l(c){e=k(c,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","avatar-image "+lt),r(e,"style",t=l[9].style??""),Ce(e.src,a=l[0])||r(e,"src",a),r(e,"alt",s=l[9].alt||"")},m(c,f){M(c,e,f),n||(o=[Ue(i=l[5].call(null,e,l[6])),Y(e,"error",l[18])],n=!0)},p(c,f){f&512&&t!==(t=c[9].style??"")&&r(e,"style",t),f&1&&!Ce(e.src,a=c[0])&&r(e,"src",a),f&512&&s!==(s=c[9].alt||"")&&r(e,"alt",s),i&&Ne(i.update)&&f&64&&i.update.call(null,c[6])},i:N,o:N,d(c){c&&v(e),n=!1,Me(o)}}}function tt(l){let e,t,a,s,i;const n=[et,$e,Ze],o=[];function c(u,d){return u[0]||u[4]?0:u[1]?1:2}t=c(l),a=o[t]=n[t](l);let f=[{class:s="avatar "+l[7]},{"data-testid":"avatar"},l[8]()],g={};for(let u=0;u<f.length;u+=1)g=ue(g,f[u]);return{c(){e=p("figure"),a.c(),this.h()},l(u){e=k(u,"FIGURE",{class:!0,"data-testid":!0});var d=A(e);a.l(d),d.forEach(v),this.h()},h(){Ae(e,g)},m(u,d){M(u,e,d),o[t].m(e,null),i=!0},p(u,[d]){let y=t;t=c(u),t===y?o[t].p(u,d):(Oe(),se(o[y],1,1,()=>{o[y]=null}),Re(),a=o[t],a?a.p(u,d):(a=o[t]=n[t](u),a.c()),ne(a,1),a.m(e,null)),Ae(e,g=Ke(f,[(!i||d&128&&s!==(s="avatar "+u[7]))&&{class:s},{"data-testid":"avatar"},u[8]()]))},i(u){i||(ne(a),i=!0)},o(u){se(a),i=!1},d(u){u&&v(e),o[t].d()}}}let at="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",lt="w-full object-cover";function st(l,e,t){let a;const s=["initials","fill","fontSize","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let i=ke(e,s),{$$slots:n={},$$scope:o}=e,{initials:c=""}=e,{fill:f="fill-token"}=e,{fontSize:g=150}=e,{src:u=""}=e,{fallback:d=""}=e,{action:y=()=>{}}=e,{actionParams:W=""}=e,{background:B="bg-surface-400-500-token"}=e,{width:O="w-16"}=e,{border:U=""}=e,{rounded:L="rounded-full"}=e,{shadow:S=""}=e,{cursor:R=""}=e;function K(){return delete i.class,i}const q=()=>t(0,u=d);return l.$$set=h=>{t(9,e=ue(ue({},e),ye(h))),t(19,i=ke(e,s)),"initials"in h&&t(1,c=h.initials),"fill"in h&&t(2,f=h.fill),"fontSize"in h&&t(3,g=h.fontSize),"src"in h&&t(0,u=h.src),"fallback"in h&&t(4,d=h.fallback),"action"in h&&t(5,y=h.action),"actionParams"in h&&t(6,W=h.actionParams),"background"in h&&t(10,B=h.background),"width"in h&&t(11,O=h.width),"border"in h&&t(12,U=h.border),"rounded"in h&&t(13,L=h.rounded),"shadow"in h&&t(14,S=h.shadow),"cursor"in h&&t(15,R=h.cursor),"$$scope"in h&&t(16,o=h.$$scope)},l.$$.update=()=>{t(7,a=`${at} ${B} ${O} ${U} ${L} ${S} ${R} ${e.class??""}`)},e=ye(e),[u,c,f,g,d,y,W,a,K,e,B,O,U,L,S,R,o,n,q]}class nt extends Be{constructor(e){super(),we(this,e,st,tt,De,{initials:1,fill:2,fontSize:3,src:0,fallback:4,action:5,actionParams:6,background:10,width:11,border:12,rounded:13,shadow:14,cursor:15})}}function xe(l){let e,t='<div class="fa-solid fa-triangle-exclamation text-4xl"></div> <div class="alert-message"><h3 class="h3">Invalid initData</h3> <p>Can&#39;t validate the data. Ensure that page is opened from Telegram app and try again.</p></div>';return{c(){e=p("aside"),e.innerHTML=t,this.h()},l(a){e=k(a,"ASIDE",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-4yd9c1"&&(e.innerHTML=t),this.h()},h(){r(e,"class","alert variant-filled-error rounded-md")},m(a,s){M(a,e,s)},d(a){a&&v(e)}}}function it(l){let e;return{c(){e=p("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),A(e).forEach(v),this.h()},h(){r(e,"class","badge-icon variant-filled-warning animate-pulse absolute -bottom-0 -left-0 z-10")},m(t,a){M(t,e,a)},d(t){t&&v(e)}}}function rt(l){let e;return{c(){e=p("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),A(e).forEach(v),this.h()},h(){r(e,"class","badge-icon variant-filled-error absolute -bottom-0 -left-0 z-10")},m(t,a){M(t,e,a)},d(t){t&&v(e)}}}function ot(l){let e;return{c(){e=p("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),A(e).forEach(v),this.h()},h(){r(e,"class","badge-icon variant-filled-success absolute -bottom-0 -left-0 z-10")},m(t,a){M(t,e,a)},d(t){t&&v(e)}}}function ct(l){let e,t='<div class="placeholder animate-pulse rounded-md mt-2"></div> <div class="placeholder animate-pulse rounded-md mt-4"></div>';return{c(){e=p("div"),e.innerHTML=t,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-gsq5xa"&&(e.innerHTML=t),this.h()},h(){r(e,"class","flex-1 ml-8")},m(a,s){M(a,e,s)},p:N,d(a){a&&v(e)}}}function ut(l){let e,t,a=l[1].first_name+"",s,i,n,o,c=l[1].username+"",f;return{c(){e=p("div"),t=p("h1"),s=Q(a),i=x(),n=p("p"),o=Q("@"),f=Q(c),this.h()},l(g){e=k(g,"DIV",{class:!0});var u=A(e);t=k(u,"H1",{class:!0});var d=A(t);s=F(d,a),d.forEach(v),i=D(u),n=k(u,"P",{class:!0});var y=A(n);o=F(y,"@"),f=F(y,c),y.forEach(v),u.forEach(v),this.h()},h(){r(t,"class","text-2xl font-bold"),r(n,"class","text-gray-500"),r(e,"class","flex-1 ml-8")},m(g,u){M(g,e,u),_(e,t),_(t,s),_(e,i),_(e,n),_(n,o),_(n,f)},p(g,u){u&2&&a!==(a=g[1].first_name+"")&&Z(s,a),u&2&&c!==(c=g[1].username+"")&&Z(f,c)},d(g){g&&v(e)}}}function ft(l){let e;return{c(){e=p("div"),this.h()},l(t){e=k(t,"DIV",{class:!0}),A(e).forEach(v),this.h()},h(){r(e,"class","placeholder animate-pulse rounded-md")},m(t,a){M(t,e,a)},p:N,d(t){t&&v(e)}}}function dt(l){let e,t="validation failded";return{c(){e=p("div"),e.textContent=t,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-13s60je"&&(e.textContent=t),this.h()},h(){r(e,"class","text-center")},m(a,s){M(a,e,s)},p:N,d(a){a&&v(e)}}}function ht(l){let e,t=JSON.stringify(l[1],null,2)+"",a;return{c(){e=p("pre"),a=Q(t),this.h()},l(s){e=k(s,"PRE",{class:!0});var i=A(e);a=F(i,t),i.forEach(v),this.h()},h(){r(e,"class","pre rounded-md svelte-t70oqn")},m(s,i){M(s,e,i),_(e,a)},p(s,i){i&2&&t!==(t=JSON.stringify(s[1],null,2)+"")&&Z(a,t)},d(s){s&&v(e)}}}function _t(l){let e,t,a,s,i,n,o,c,f,g="initData:",u,d,y,W,B,O="Validated user data:",U,L,S,R="Re-validate data",K,q,h,j,I,de="Expand WebView",ie,P,he="Close WebView",re,z,_e="Toggle Main Button",X,oe,me,E=l[0]===!1&&xe();function be(m,b){if(m[0]===!0)return ot;if(m[0]===!1)return rt;if(m[0]===null)return it}let G=be(l),T=G&&G(l);n=new nt({});function ve(m,b){return m[0]===!0?ut:ct}let $=ve(l),w=$(l);function ge(m,b){if(m[0]===!0)return ht;if(m[0]===!1)return dt;if(m[0]===null)return ft}let J=ge(l),C=J&&J(l);return{c(){e=p("div"),E&&E.c(),t=x(),a=p("div"),s=p("div"),T&&T.c(),i=x(),qe(n.$$.fragment),o=x(),w.c(),c=x(),f=p("h6"),f.textContent=g,u=x(),d=p("pre"),y=Q(l[2]),W=x(),B=p("h6"),B.textContent=O,U=x(),C&&C.c(),L=x(),S=p("button"),S.textContent=R,K=x(),q=p("hr"),h=x(),j=p("div"),I=p("button"),I.textContent=de,ie=x(),P=p("button"),P.textContent=he,re=x(),z=p("button"),z.textContent=_e,this.h()},l(m){e=k(m,"DIV",{class:!0});var b=A(e);E&&E.l(b),t=D(b),a=k(b,"DIV",{class:!0});var ee=A(a);s=k(ee,"DIV",{class:!0});var te=A(s);T&&T.l(te),i=D(te),Ge(n.$$.fragment,te),te.forEach(v),o=D(ee),w.l(ee),ee.forEach(v),c=D(b),f=k(b,"H6",{class:!0,"data-svelte-h":!0}),V(f)!=="svelte-h4l6vz"&&(f.textContent=g),u=D(b),d=k(b,"PRE",{class:!0});var pe=A(d);y=F(pe,l[2]),pe.forEach(v),W=D(b),B=k(b,"H6",{class:!0,"data-svelte-h":!0}),V(B)!=="svelte-1y4ptn6"&&(B.textContent=O),U=D(b),C&&C.l(b),L=D(b),S=k(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),V(S)!=="svelte-1dehkth"&&(S.textContent=R),K=D(b),q=k(b,"HR",{class:!0}),h=D(b),j=k(b,"DIV",{class:!0});var ae=A(j);I=k(ae,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),V(I)!=="svelte-xjalyc"&&(I.textContent=de),ie=D(ae),P=k(ae,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),V(P)!=="svelte-e5j5lg"&&(P.textContent=he),ae.forEach(v),re=D(b),z=k(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),V(z)!=="svelte-njdzn9"&&(z.textContent=_e),b.forEach(v),this.h()},h(){r(s,"class","relative inline-block flex-none"),r(a,"class","flex"),r(f,"class","h6"),r(d,"class","pre rounded-md svelte-t70oqn"),r(B,"class","h6"),r(S,"type","button"),r(S,"class","btn variant-filled rounded-md"),r(q,"class","!border-t-4"),r(I,"type","button"),r(I,"class","btn variant-filled rounded-md flex-1"),r(P,"type","button"),r(P,"class","btn variant-filled rounded-md flex-1"),r(j,"class","flex space-x-2 flex-wrap"),r(z,"type","button"),r(z,"class","btn variant-filled rounded-md w-full"),r(e,"class","container container mx-auto p-6 space-y-4")},m(m,b){M(m,e,b),E&&E.m(e,null),_(e,t),_(e,a),_(a,s),T&&T.m(s,null),_(s,i),Je(n,s,null),_(a,o),w.m(a,null),_(e,c),_(e,f),_(e,u),_(e,d),_(d,y),_(e,W),_(e,B),_(e,U),C&&C.m(e,null),_(e,L),_(e,S),_(e,K),_(e,q),_(e,h),_(e,j),_(j,I),_(j,ie),_(j,P),_(e,re),_(e,z),X=!0,oe||(me=[Y(S,"click",l[3]),Y(I,"click",l[4]),Y(P,"click",l[5]),Y(z,"click",l[6])],oe=!0)},p(m,[b]){m[0]===!1?E||(E=xe(),E.c(),E.m(e,t)):E&&(E.d(1),E=null),G!==(G=be(m))&&(T&&T.d(1),T=G&&G(m),T&&(T.c(),T.m(s,i))),$===($=ve(m))&&w?w.p(m,b):(w.d(1),w=$(m),w&&(w.c(),w.m(a,null))),(!X||b&4)&&Z(y,m[2]),J===(J=ge(m))&&C?C.p(m,b):(C&&C.d(1),C=J&&J(m),C&&(C.c(),C.m(e,L)))},i(m){X||(ne(n.$$.fragment,m),X=!0)},o(m){se(n.$$.fragment,m),X=!1},d(m){m&&v(e),E&&E.d(),T&&T.d(),Qe(n),w.d(),C&&C.d(),oe=!1,Me(me)}}}function mt(l,e,t){let a=!1,s={},i=le.subscribe(d=>{t(0,a=d.valid),t(1,s=d.data.user)}),n=H.initData;n===""&&(n="query_id=AAEMjsEBAAAAAAyOwQGvrIHL&user=%7B%22id%22%3A29462028%2C%22first_name%22%3A%22Ilia%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22cherya%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721554069&hash=b9a1a2753acbd55e974fb118f3cc03ea484f98cac8e5c89f5aede16b4b8c2dab");let o=H.checkInitData(n);o.then(()=>{H.init()}).catch(d=>{console.error(d)});function c(d){try{o=H.checkInitData(n)}catch(y){console.error(y)}}return We(i),[a,s,n,c,()=>H.expand(),()=>H.close(),()=>H.toggleMainButton()]}class pt extends Be{constructor(e){super(),we(this,e,mt,_t,De,{})}}export{pt as component};
