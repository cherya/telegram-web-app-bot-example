import{s as me,n as ce,o as Le}from"../chunks/scheduler.k-kUyWhY.js";import{S as de,i as ge,g as I,m as h,s as R,h as S,j as b,n as m,c as T,f as d,k as C,a as ie,x as i,o as V,d as ne,p as ye,b as Ie,t as ae,y as Se,r as be,u as De,v as Xe,z as we,w as Me,A as Ce}from"../chunks/index.STZKi_aV.js";function ue(t){return t?.length!==void 0?t:Array.from(t)}function Ve(){return console.log("fetching character data mock"),{name:"Mocked character",level:99,class:"Mocked class"}}function Ee(t){let e;return{c(){e=I("progress"),this.h()},l(l){e=S(l,"PROGRESS",{max:!0,class:!0}),b(e).forEach(d),this.h()},h(){e.value=t[2],C(e,"max","100"),C(e,"class","svelte-13s1f8e")},m(l,n){ie(l,e,n)},p(l,n){n&4&&(e.value=l[2])},d(l){l&&d(e)}}}function Re(t){let e,l,n=t[0].name+"",r,s,a=t[0].experience.currentLevel+"",g,o,c=t[0].experience.maxLevel+"",L,k,_,u,P=t[0].action_timeout+"",y,x,M,w,D=t[0].activity_exp_per_action+"",z,G,J,Q,K=t[0].skill_exp_per_action+"",W,B,$,Y,U=t[0].experience.maxExp+"",N,j,F,A,ee=t[0].experience.currentExp+"",f,E,v=t[0].experience.nextLevelAt+"",H,te,q,le,Z,fe,oe,O=t[1]&&Ee(t);return{c(){e=I("div"),l=I("h3"),r=h(n),s=R(),g=h(a),o=h("/"),L=h(c),k=R(),_=I("p"),u=h("Action Timeout: "),y=h(P),x=R(),M=I("p"),w=h("EXP per Action: "),z=h(D),G=R(),J=I("p"),Q=h("Skill EXP per Action: "),W=h(K),B=R(),$=I("p"),Y=h("Max EXP: "),N=h(U),j=R(),F=I("p"),A=h("EXP: "),f=h(ee),E=h("/"),H=h(v),te=R(),q=I("progress"),fe=R(),O&&O.c(),this.h()},l(X){e=S(X,"DIV",{class:!0});var p=b(e);l=S(p,"H3",{class:!0});var re=b(l);r=m(re,n),s=T(re),g=m(re,a),o=m(re,"/"),L=m(re,c),re.forEach(d),k=T(p),_=S(p,"P",{});var ve=b(_);u=m(ve,"Action Timeout: "),y=m(ve,P),ve.forEach(d),x=T(p),M=S(p,"P",{});var pe=b(M);w=m(pe,"EXP per Action: "),z=m(pe,D),pe.forEach(d),G=T(p),J=S(p,"P",{});var _e=b(J);Q=m(_e,"Skill EXP per Action: "),W=m(_e,K),_e.forEach(d),B=T(p),$=S(p,"P",{});var he=b($);Y=m(he,"Max EXP: "),N=m(he,U),he.forEach(d),j=T(p),F=S(p,"P",{});var se=b(F);A=m(se,"EXP: "),f=m(se,ee),E=m(se,"/"),H=m(se,v),se.forEach(d),te=T(p),q=S(p,"PROGRESS",{max:!0,class:!0}),b(q).forEach(d),fe=T(p),O&&O.l(p),p.forEach(d),this.h()},h(){C(l,"class","svelte-13s1f8e"),q.value=le=t[0].experience.currentExp,C(q,"max",Z=t[0].experience.nextLevelAt),C(q,"class","svelte-13s1f8e"),C(e,"class",oe="activity-card "+(t[1]?"active":"")+" svelte-13s1f8e")},m(X,p){ie(X,e,p),i(e,l),i(l,r),i(l,s),i(l,g),i(l,o),i(l,L),i(e,k),i(e,_),i(_,u),i(_,y),i(e,x),i(e,M),i(M,w),i(M,z),i(e,G),i(e,J),i(J,Q),i(J,W),i(e,B),i(e,$),i($,Y),i($,N),i(e,j),i(e,F),i(F,A),i(F,f),i(F,E),i(F,H),i(e,te),i(e,q),i(e,fe),O&&O.m(e,null)},p(X,[p]){p&1&&n!==(n=X[0].name+"")&&V(r,n),p&1&&a!==(a=X[0].experience.currentLevel+"")&&V(g,a),p&1&&c!==(c=X[0].experience.maxLevel+"")&&V(L,c),p&1&&P!==(P=X[0].action_timeout+"")&&V(y,P),p&1&&D!==(D=X[0].activity_exp_per_action+"")&&V(z,D),p&1&&K!==(K=X[0].skill_exp_per_action+"")&&V(W,K),p&1&&U!==(U=X[0].experience.maxExp+"")&&V(N,U),p&1&&ee!==(ee=X[0].experience.currentExp+"")&&V(f,ee),p&1&&v!==(v=X[0].experience.nextLevelAt+"")&&V(H,v),p&1&&le!==(le=X[0].experience.currentExp)&&(q.value=le),p&1&&Z!==(Z=X[0].experience.nextLevelAt)&&C(q,"max",Z),X[1]?O?O.p(X,p):(O=Ee(X),O.c(),O.m(e,null)):O&&(O.d(1),O=null),p&2&&oe!==(oe="activity-card "+(X[1]?"active":"")+" svelte-13s1f8e")&&C(e,"class",oe)},i:ce,o:ce,d(X){X&&d(e),O&&O.d()}}}function Te(t,e,l){let{activity:n}=e,{isActive:r=!1}=e,s=0,a;Le(()=>(g(),a=requestAnimationFrame(g),()=>{cancelAnimationFrame(a)}));function g(){const o=new Date(n.last_run_at).getTime(),L=new Date().getTime()-o,k=n.action_timeout/1e6;l(2,s=L%k/k*100),s>100&&l(2,s=100),a=requestAnimationFrame(g)}return t.$$set=o=>{"activity"in o&&l(0,n=o.activity),"isActive"in o&&l(1,r=o.isActive)},[n,r,s]}class je extends de{constructor(e){super(),ge(this,e,Te,Re,me,{activity:0,isActive:1})}}function ke(t,e,l){const n=t.slice();return n[3]=e[l],n}function Ae(t){let e,l,n,r,s,a;l=new je({props:{activity:t[3],isActive:t[1]===t[3].id}});function g(){return t[2](t[3])}return{c(){e=I("div"),be(l.$$.fragment),n=R()},l(o){e=S(o,"DIV",{});var c=b(e);De(l.$$.fragment,c),n=T(c),c.forEach(d)},m(o,c){ie(o,e,c),Xe(l,e,null),i(e,n),r=!0,s||(a=we(e,"click",g),s=!0)},p(o,c){t=o;const L={};c&1&&(L.activity=t[3]),c&3&&(L.isActive=t[1]===t[3].id),l.$set(L)},i(o){r||(ne(l.$$.fragment,o),r=!0)},o(o){ae(l.$$.fragment,o),r=!1},d(o){o&&d(e),Me(l),s=!1,a()}}}function Fe(t){let e,l,n,r=t[0].name+"",s,a,g=t[0].experience.currentLevel+"",o,c,L=t[0].experience.maxLevel+"",k,_,u,P,y=t[0].experience.maxExp+"",x,M,w,D,z=t[0].experience.currentExp+"",G,J,Q=t[0].experience.nextLevelAt+"",K,W,B,$,Y,U,N,j,F=ue(t[0].activities),A=[];for(let f=0;f<F.length;f+=1)A[f]=Ae(ke(t,F,f));const ee=f=>ae(A[f],1,1,()=>{A[f]=null});return{c(){e=I("div"),l=I("div"),n=I("h2"),s=h(r),a=R(),o=h(g),c=h("/"),k=h(L),_=R(),u=I("p"),P=h("Max EXP: "),x=h(y),M=R(),w=I("p"),D=h("EXP: "),G=h(z),J=h("/"),K=h(Q),W=R(),B=I("progress"),U=R(),N=I("div");for(let f=0;f<A.length;f+=1)A[f].c();this.h()},l(f){e=S(f,"DIV",{class:!0});var E=b(e);l=S(E,"DIV",{});var v=b(l);n=S(v,"H2",{class:!0});var H=b(n);s=m(H,r),a=T(H),o=m(H,g),c=m(H,"/"),k=m(H,L),H.forEach(d),_=T(v),u=S(v,"P",{});var te=b(u);P=m(te,"Max EXP: "),x=m(te,y),te.forEach(d),M=T(v),w=S(v,"P",{});var q=b(w);D=m(q,"EXP: "),G=m(q,z),J=m(q,"/"),K=m(q,Q),q.forEach(d),W=T(v),B=S(v,"PROGRESS",{max:!0,class:!0}),b(B).forEach(d),v.forEach(d),U=T(E),N=S(E,"DIV",{class:!0});var le=b(N);for(let Z=0;Z<A.length;Z+=1)A[Z].l(le);le.forEach(d),E.forEach(d),this.h()},h(){C(n,"class","svelte-18g1hda"),B.value=$=t[0].experience.currentExp,C(B,"max",Y=t[0].experience.nextLevelAt),C(B,"class","svelte-18g1hda"),C(N,"class","activities svelte-18g1hda"),C(e,"class","skill-card svelte-18g1hda")},m(f,E){ie(f,e,E),i(e,l),i(l,n),i(n,s),i(n,a),i(n,o),i(n,c),i(n,k),i(l,_),i(l,u),i(u,P),i(u,x),i(l,M),i(l,w),i(w,D),i(w,G),i(w,J),i(w,K),i(l,W),i(l,B),i(e,U),i(e,N);for(let v=0;v<A.length;v+=1)A[v]&&A[v].m(N,null);j=!0},p(f,[E]){if((!j||E&1)&&r!==(r=f[0].name+"")&&V(s,r),(!j||E&1)&&g!==(g=f[0].experience.currentLevel+"")&&V(o,g),(!j||E&1)&&L!==(L=f[0].experience.maxLevel+"")&&V(k,L),(!j||E&1)&&y!==(y=f[0].experience.maxExp+"")&&V(x,y),(!j||E&1)&&z!==(z=f[0].experience.currentExp+"")&&V(G,z),(!j||E&1)&&Q!==(Q=f[0].experience.nextLevelAt+"")&&V(K,Q),(!j||E&1&&$!==($=f[0].experience.currentExp))&&(B.value=$),(!j||E&1&&Y!==(Y=f[0].experience.nextLevelAt))&&C(B,"max",Y),E&3){F=ue(f[0].activities);let v;for(v=0;v<F.length;v+=1){const H=ke(f,F,v);A[v]?(A[v].p(H,E),ne(A[v],1)):(A[v]=Ae(H),A[v].c(),ne(A[v],1),A[v].m(N,null))}for(ye(),v=F.length;v<A.length;v+=1)ee(v);Ie()}},i(f){if(!j){for(let E=0;E<F.length;E+=1)ne(A[E]);j=!0}},o(f){A=A.filter(Boolean);for(let E=0;E<A.length;E+=1)ae(A[E]);j=!1},d(f){f&&d(e),Se(A,f)}}}function Oe(t,e){fetch(`http://localhost:8080/api/actions/${e}/${t}/start`,{method:"POST"})}function qe(t,e,l){let{skill:n}=e,{runningActivityId:r=null}=e;const s=a=>Oe(a.id,n.id);return t.$$set=a=>{"skill"in a&&l(0,n=a.skill),"runningActivityId"in a&&l(1,r=a.runningActivityId)},[n,r,s]}class Ge extends de{constructor(e){super(),ge(this,e,qe,Fe,me,{skill:0,runningActivityId:1})}}function Pe(t,e,l){const n=t.slice();return n[9]=e[l],n}function xe(t){let e,l,n=t[9].name+"",r,s,a,g,o=t[9].experience.currentLevel+"",c,L,k=t[9].experience.maxLevel+"",_,u,P,y,x;function M(){return t[6](t[9])}return{c(){e=I("div"),l=I("p"),r=h(n),s=R(),a=I("p"),g=h("Level: "),c=h(o),L=h("/"),_=h(k),u=R(),this.h()},l(w){e=S(w,"DIV",{class:!0});var D=b(e);l=S(D,"P",{});var z=b(l);r=m(z,n),z.forEach(d),s=T(D),a=S(D,"P",{});var G=b(a);g=m(G,"Level: "),c=m(G,o),L=m(G,"/"),_=m(G,k),G.forEach(d),u=T(D),D.forEach(d),this.h()},h(){C(e,"class",P="skill "+(t[1]===t[9].id?"active":"")+" svelte-met2j9")},m(w,D){ie(w,e,D),i(e,l),i(l,r),i(e,s),i(e,a),i(a,g),i(a,c),i(a,L),i(a,_),i(e,u),y||(x=we(e,"click",M),y=!0)},p(w,D){t=w,D&1&&n!==(n=t[9].name+"")&&V(r,n),D&1&&o!==(o=t[9].experience.currentLevel+"")&&V(c,o),D&1&&k!==(k=t[9].experience.maxLevel+"")&&V(_,k),D&3&&P!==(P="skill "+(t[1]===t[9].id?"active":"")+" svelte-met2j9")&&C(e,"class",P)},d(w){w&&d(e),y=!1,x()}}}function He(t){let e,l="Select a skill to view details";return{c(){e=I("p"),e.textContent=l},l(n){e=S(n,"P",{"data-svelte-h":!0}),Ce(e)!=="svelte-1rf024m"&&(e.textContent=l)},m(n,r){ie(n,e,r)},p:ce,i:ce,o:ce,d(n){n&&d(e)}}}function ze(t){let e,l;return e=new Ge({props:{skill:t[2],runningActivityId:t[0].currentActivity.id}}),{c(){be(e.$$.fragment)},l(n){De(e.$$.fragment,n)},m(n,r){Xe(e,n,r),l=!0},p(n,r){const s={};r&4&&(s.skill=n[2]),r&1&&(s.runningActivityId=n[0].currentActivity.id),e.$set(s)},i(n){l||(ne(e.$$.fragment,n),l=!0)},o(n){ae(e.$$.fragment,n),l=!1},d(n){Me(e,n)}}}function Be(t){let e,l,n,r,s,a,g,o=ue(t[0].skills),c=[];for(let u=0;u<o.length;u+=1)c[u]=xe(Pe(t,o,u));const L=[ze,He],k=[];function _(u,P){return u[1]?0:1}return s=_(t),a=k[s]=L[s](t),{c(){e=I("div"),l=I("aside");for(let u=0;u<c.length;u+=1)c[u].c();n=R(),r=I("main"),a.c(),this.h()},l(u){e=S(u,"DIV",{class:!0});var P=b(e);l=S(P,"ASIDE",{class:!0});var y=b(l);for(let M=0;M<c.length;M+=1)c[M].l(y);y.forEach(d),n=T(P),r=S(P,"MAIN",{class:!0});var x=b(r);a.l(x),x.forEach(d),P.forEach(d),this.h()},h(){C(l,"class","svelte-met2j9"),C(r,"class","svelte-met2j9"),C(e,"class","container svelte-met2j9")},m(u,P){ie(u,e,P),i(e,l);for(let y=0;y<c.length;y+=1)c[y]&&c[y].m(l,null);i(e,n),i(e,r),k[s].m(r,null),g=!0},p(u,[P]){if(P&11){o=ue(u[0].skills);let x;for(x=0;x<o.length;x+=1){const M=Pe(u,o,x);c[x]?c[x].p(M,P):(c[x]=xe(M),c[x].c(),c[x].m(l,null))}for(;x<c.length;x+=1)c[x].d(1);c.length=o.length}let y=s;s=_(u),s===y?k[s].p(u,P):(ye(),ae(k[y],1,1,()=>{k[y]=null}),Ie(),a=k[s],a?a.p(u,P):(a=k[s]=L[s](u),a.c()),ne(a,1),a.m(r,null))},i(u){g||(ne(a),g=!0)},o(u){ae(a),g=!1},d(u){u&&d(e),Se(c,u),k[s].d()}}}function Ne(t,e,l){let n,r={skills:[],currentActivity:null},s=null,a=null,g=!1,o=1e3;Le(async()=>{try{await c(),l(1,s=r.currentActivity.skillId)}catch(_){console.error("Error fetching character data:",_)}});async function c(){if(!g){g=!0;try{const _=await Ve();l(0,r={..._}),r.currentActivity&&(console.log("chaging sync interval to:",r.currentActivity.action_timeout/1e6),l(5,o=r.currentActivity.action_timeout/1e6))}catch(_){console.error("Error syncing character data:",_)}finally{g=!1}}}function L(_){_&&(l(1,s=_),console.log("Selected skill:",s))}r.currentActivity&&(s=r.currentActivity.skill_id);const k=_=>L(_.id);return t.$$.update=()=>{t.$$.dirty&3&&l(2,n=r.skills.find(_=>_.id===s)),t.$$.dirty&48&&(clearInterval(a),l(4,a=setInterval(c,o)))},[r,s,n,L,a,o,k]}class Ke extends de{constructor(e){super(),ge(this,e,Ne,Be,me,{})}}export{Ke as component};
