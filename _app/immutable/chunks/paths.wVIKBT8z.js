import{n as c,s as u}from"./scheduler.SiZdlcgb.js";const t=[];function g(n,l=c){let o;const i=new Set;function r(e){if(u(n,e)&&(n=e,o)){const b=!t.length;for(const s of i)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(n))}function f(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(o=l(r,a)||c),e(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:a,subscribe:f}}const p=globalThis.__sveltekit_lz15q0?.base??"/telegram-web-app-bot-example",h=globalThis.__sveltekit_lz15q0?.assets??p;export{h as a,p as b,g as w};
