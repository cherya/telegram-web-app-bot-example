import{s as ye,n as re,r as Te,o as Ae}from"../chunks/scheduler.i60jWgnB.js";import{S as je,i as we,g as i,s as u,m as he,h as r,j as k,C as v,c as m,f as T,n as _e,k as l,l as ke,D as R,a as xe,x as n,B as Q}from"../chunks/index.K2uzg1Tt.js";function Ce(D){let p,a,g,N="Send «Hello, World!»",L,d,x="Send «Hello, World!» with inline webview button",b,e,t="Send current time to bot (x10)",s,o,S="Expand Webview",J,C,ce="Hide Main Button",K,I,$,E,G,W,pe='<img id="peer_photo" class="chat_img svelte-15a0j6t" src=""/> <span id="peer_name"></span>',X,M,Y,q,f,de="bg_color",A,ue="secondary_bg_color",Z,j,ee,U,te,B,h,me="bg_color",w,ve="secondary_bg_color",_,ge="custom...",ae,H,be=`<div id="btn_status" class="hint svelte-15a0j6t" style="display: none;"></div> <p class="svelte-15a0j6t">Test links:</p> <ul class="svelte-15a0j6t"><li class="svelte-15a0j6t"><a id="regular_link" href="" class="svelte-15a0j6t">Regular link #2</a> (opens inside webview)</li> <li class="svelte-15a0j6t"><a href="https://telegram.org/" target="_blank" class="svelte-15a0j6t">target=&quot;_blank&quot; link</a>
        (opens outside webview)</li> <li class="svelte-15a0j6t"><a href="javascript:window.open(&#39;https://telegram.org/&#39;);" class="svelte-15a0j6t">window.open() link</a> (opens outside webview)</li> <li class="svelte-15a0j6t"><a href="https://t.me/like" class="svelte-15a0j6t">LikeBot t.me link</a> (opens inside Telegram
        app)</li> <li class="svelte-15a0j6t"><a href="javascript:Telegram.WebApp.openTelegramLink(&#39;https://t.me/vote&#39;);" class="svelte-15a0j6t">web_app_open_tg_link()</a> (opens inside Telegram app)</li> <li class="svelte-15a0j6t"><a href="javascript:Telegram.WebApp.openLink(&#39;https://google.com/&#39;);" class="svelte-15a0j6t">web_app_open_link()</a> (opens outside webview)</li> <li class="svelte-15a0j6t"><a href="tg://resolve?domain=vote" class="svelte-15a0j6t">VoteBot tg:// link</a> (does not open)</li></ul> <p class="svelte-15a0j6t">Test permissions:</p> <ul class="svelte-15a0j6t"><li class="svelte-15a0j6t"><a href="javascript:;" onclick="return DemoApp.requestLocation(this);" class="svelte-15a0j6t">Request Location</a> <span></span></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="return DemoApp.requestVideo(this);" class="svelte-15a0j6t">Request Video</a> <span></span></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="return DemoApp.requestAudio(this);" class="svelte-15a0j6t">Request Audio</a> <span></span></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="return DemoApp.requestAudioVideo(this);" class="svelte-15a0j6t">Request Audio+Video</a> <span></span></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="return DemoApp.testClipboard(this);" id="clipboard_test" class="svelte-15a0j6t">Read from clipboard</a> <span></span></li></ul> <p class="svelte-15a0j6t">Test alerts:</p> <div class="columns svelte-15a0j6t"><ul class="svelte-15a0j6t"><li class="svelte-15a0j6t"><a href="javascript:;" onclick="alert(&#39;Hello!&#39;);" class="svelte-15a0j6t">alert</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="confirm(&#39;Are you sure?&#39;);" class="svelte-15a0j6t">confirm</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="prompt(&#39;How old are you?&#39;);" class="svelte-15a0j6t">prompt</a></li></ul> <ul class="svelte-15a0j6t"><li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.showAlert(&#39;Hello!&#39;);" class="svelte-15a0j6t">showAlert</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.showConfirm(&#39;Are you sure?&#39;);" class="svelte-15a0j6t">showConfirm</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.requestWriteAccess();" class="svelte-15a0j6t">requestWriteAccess</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.requestContact();" class="svelte-15a0j6t">requestContact</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.showPopup();" class="svelte-15a0j6t">showPopup</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.showScanQrPopup();" class="svelte-15a0j6t">showScanQrPopup</a></li> <li class="svelte-15a0j6t"><a href="javascript:;" onclick="DemoApp.showScanQrPopup(true);" class="svelte-15a0j6t">showScanQrPopup (links only)</a></li></ul></div> <p class="svelte-15a0j6t">Haptics:</p> <ul class="svelte-15a0j6t"><li class="svelte-15a0j6t">Impact: <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;heavy&#39;);" class="svelte-15a0j6t">heavy</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;light&#39;);" class="svelte-15a0j6t">light</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;medium&#39;);" class="svelte-15a0j6t">medium</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;rigid&#39;);" class="svelte-15a0j6t">rigid</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;soft&#39;);" class="svelte-15a0j6t">soft</a><br/><br/></li> <li class="svelte-15a0j6t">Notification: <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;error&#39;);" class="svelte-15a0j6t">error</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;success&#39;);" class="svelte-15a0j6t">success</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;warning&#39;);" class="svelte-15a0j6t">warning</a><br/><br/></li> <li class="svelte-15a0j6t">Selection: <a href="javascript:Telegram.WebApp.HapticFeedback.selectionChanged();" class="svelte-15a0j6t">changed</a><br/><br/></li></ul> <pre class="svelte-15a0j6t"><code id="webview_data"></code></pre> <div class="hint svelte-15a0j6t">Data passed to webview.
      <span id="webview_data_status" class="status_need svelte-15a0j6t">Checking hash...</span></div> <pre class="svelte-15a0j6t"><code id="theme_data"></code></pre> <div class="hint svelte-15a0j6t">Theme params</div> <div class="hint svelte-15a0j6t">Version: <span id="ver"></span>, platform: <span id="platform"></span></div>`,se,O,ne,P,le,fe;return{c(){p=i("div"),a=i("section"),g=i("button"),g.textContent=N,L=u(),d=i("button"),d.textContent=x,b=u(),e=i("button"),e.textContent=t,s=u(),o=i("button"),o.textContent=S,J=u(),C=i("button"),C.textContent=ce,K=u(),I=i("input"),$=u(),E=i("div"),G=u(),W=i("div"),W.innerHTML=pe,X=u(),M=i("div"),Y=he("Header: "),q=i("select"),f=i("option"),f.textContent=de,A=i("option"),A.textContent=ue,Z=u(),j=i("div"),ee=he("Background: "),U=i("input"),te=u(),B=i("select"),h=i("option"),h.textContent=me,w=i("option"),w.textContent=ve,_=i("option"),_.textContent=ge,ae=u(),H=i("section"),H.innerHTML=be,se=u(),O=i("div"),ne=u(),P=i("div"),this.h()},l(V){p=r(V,"DIV",{class:!0});var y=k(p);a=r(y,"SECTION",{id:!0,class:!0});var c=k(a);g=r(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),v(g)!=="svelte-1917wpp"&&(g.textContent=N),L=m(c),d=r(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),v(d)!=="svelte-1th9r8y"&&(d.textContent=x),b=m(c),e=r(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),v(e)!=="svelte-12z20yl"&&(e.textContent=t),s=m(c),o=r(c,"BUTTON",{class:!0,"data-svelte-h":!0}),v(o)!=="svelte-1eu8sme"&&(o.textContent=S),J=m(c),C=r(c,"BUTTON",{class:!0,"data-svelte-h":!0}),v(C)!=="svelte-3mqsg1"&&(C.textContent=ce),K=m(c),I=r(c,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),$=m(c),E=r(c,"DIV",{class:!0,contenteditable:!0,"data-placeholder":!0,id:!0}),k(E).forEach(T),G=m(c),W=r(c,"DIV",{id:!0,style:!0,"data-svelte-h":!0}),v(W)!=="svelte-er9q7j"&&(W.innerHTML=pe),X=m(c),M=r(c,"DIV",{class:!0});var oe=k(M);Y=_e(oe,"Header: "),q=r(oe,"SELECT",{id:!0});var ie=k(q);f=r(ie,"OPTION",{"data-svelte-h":!0}),v(f)!=="svelte-12yzkyt"&&(f.textContent=de),A=r(ie,"OPTION",{"data-svelte-h":!0}),v(A)!=="svelte-1x10bni"&&(A.textContent=ue),ie.forEach(T),oe.forEach(T),Z=m(c),j=r(c,"DIV",{class:!0});var F=k(j);ee=_e(F,"Background: "),U=r(F,"INPUT",{type:!0,id:!0}),te=m(F),B=r(F,"SELECT",{id:!0});var z=k(B);h=r(z,"OPTION",{"data-svelte-h":!0}),v(h)!=="svelte-12yzkyt"&&(h.textContent=me),w=r(z,"OPTION",{"data-svelte-h":!0}),v(w)!=="svelte-1x10bni"&&(w.textContent=ve),_=r(z,"OPTION",{id:!0,"data-svelte-h":!0}),v(_)!=="svelte-z7gcmv"&&(_.textContent=ge),z.forEach(T),F.forEach(T),c.forEach(T),ae=m(y),H=r(y,"SECTION",{class:!0,"data-svelte-h":!0}),v(H)!=="svelte-1217p0s"&&(H.innerHTML=be),se=m(y),O=r(y,"DIV",{class:!0}),k(O).forEach(T),ne=m(y),P=r(y,"DIV",{class:!0}),k(P).forEach(T),y.forEach(T),this.h()},h(){l(g,"id","main_btn"),l(g,"class","svelte-15a0j6t"),l(d,"id","with_webview_btn"),l(d,"class","svelte-15a0j6t"),l(e,"id","data_btn"),l(e,"class","svelte-15a0j6t"),l(o,"class","svelte-15a0j6t"),l(C,"class","svelte-15a0j6t"),l(I,"type","text"),l(I,"placeholder","Input text in regular input..."),l(I,"id","regular_field"),l(I,"class","svelte-15a0j6t"),l(E,"class","input svelte-15a0j6t"),l(E,"contenteditable","true"),l(E,"data-placeholder","Input text in contenteditable field..."),l(E,"id","text_field"),l(W,"id","peer_wrap"),ke(W,"display","none"),f.__value="bg_color",R(f,f.__value),f.selected=!0,A.__value="secondary_bg_color",R(A,A.__value),l(q,"id","header_color_sel"),l(M,"class","sect_row svelte-15a0j6t"),l(U,"type","color"),l(U,"id","bg_color_input"),h.__value="bg_color",R(h,h.__value),h.selected=!0,w.__value="secondary_bg_color",R(w,w.__value),_.__value="custom",R(_,_.__value),l(_,"id","bg_color_val"),l(B,"id","bg_color_sel"),l(j,"class","sect_row svelte-15a0j6t"),l(a,"id","top_sect"),l(a,"class","second svelte-15a0j6t"),l(H,"class","svelte-15a0j6t"),l(O,"class","viewport-border svelte-15a0j6t"),l(P,"class","viewport-stable_border svelte-15a0j6t"),l(p,"class","container")},m(V,y){xe(V,p,y),n(p,a),n(a,g),n(a,L),n(a,d),n(a,b),n(a,e),n(a,s),n(a,o),n(a,J),n(a,C),n(a,K),n(a,I),n(a,$),n(a,E),n(a,G),n(a,W),n(a,X),n(a,M),n(M,Y),n(M,q),n(q,f),n(q,A),n(a,Z),n(a,j),n(j,ee),n(j,U),n(j,te),n(j,B),n(B,h),n(B,w),n(B,_),n(p,ae),n(p,H),n(p,se),n(p,O),n(p,ne),n(p,P),le||(fe=[Q(g,"click",D[0].sendMessage("")),Q(d,"click",D[0].sendMessage("",!0)),Q(e,"click",D[0].sendTime(!0)),Q(o,"click",D[0].expand()),Q(C,"click",D[0].toggleMainButton())],le=!0)},p:re,i:re,o:re,d(V){V&&T(p),le=!1,Te(fe)}}}function Ee(D){const p={};return Ae(()=>{const a={initData:Telegram.WebApp.initData||"",initDataUnsafe:Telegram.WebApp.initDataUnsafe||{},MainButton:Telegram.WebApp.MainButton,init(e){document.body.style.visibility="",Telegram.WebApp.ready(),Telegram.WebApp.MainButton.setParams({text:"CLOSE WEBVIEW",is_visible:!0}).onClick(a.close),Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick(()=>navigation.back())},expand(){Telegram.WebApp.expand()},close(){Telegram.WebApp.close()},toggleMainButton(e){const t=Telegram.WebApp.MainButton;t.isVisible?(t.hide(),e.innerHTML="Show Main Button"):(t.show(),e.innerHTML="Hide Main Button")},sendMessage(e,t){if(!a.initDataUnsafe.query_id){alert("WebViewQueryId not defined");return}document.querySelectorAll("button").forEach(o=>o.disabled=!0);const s=document.querySelector("#btn_status");s.textContent="Sending...",a.apiRequest("sendMessage",{msg_id:e||"",with_webview:!a.initDataUnsafe.receiver&&t?1:0},function(o){document.querySelectorAll("button").forEach(S=>S.disabled=!1),o.response?o.response.ok?(s.textContent="Message sent successfully!",s.className="ok",s.style.display="block"):(s.textContent=o.response.description,s.className="err",s.style.display="block",alert(o.response.description)):o.error?(s.textContent=o.error,s.className="err",s.style.display="block",alert(o.error)):(s.textContent="Unknown error",s.className="err",s.style.display="block",alert("Unknown error"))})},changeMenuButton(e){document.querySelectorAll("button").forEach(s=>s.disabled=!0);const t=document.querySelector("#btn_status");t.textContent="Changing button...",a.apiRequest("changeMenuButton",{},function(s){document.querySelectorAll("button").forEach(o=>o.disabled=!1),s.response?s.response.ok?(t.textContent="Button changed!",t.className="ok",t.style.display="block",Telegram.WebApp.close()):(t.textContent=s.response.description,t.className="err",t.style.display="block",alert(s.response.description)):s.error?(t.textContent=s.error,t.className="err",t.style.display="block",alert(s.error)):(t.textContent="Unknown error",t.className="err",t.style.display="block",alert("Unknown error"))}),e&&setTimeout(function(){Telegram.WebApp.close()},50)},checkInitData(){const e=document.querySelector("#webview_data_status");a.initDataUnsafe.query_id&&a.initData&&e.classList.contains("status_need")&&(e.classList.remove("status_need"),a.apiRequest("checkInitData",{},function(t){t.ok?(e.textContent="Hash is correct (async)",e.className="ok"):(e.textContent=t.error+" (async)",e.className="err")}))},sendText(e){const t=document.querySelector("#text_field"),s=t.value;if(!s.length)return t.focus();if(g(s)>4096)return alert("Text is too long");const o=e?10:1;for(let S=0;S<o;S++)Telegram.WebApp.sendData(s)},sendTime(e){const t=e?10:1;for(let s=0;s<t;s++)Telegram.WebApp.sendData(new Date().toString())},showAlert(e){Telegram.WebApp.showAlert(e)},showConfirm(e){Telegram.WebApp.showConfirm(e)},requestWriteAccess(){Telegram.WebApp.requestWriteAccess(function(e){e?a.showAlert("Write access granted"):a.showAlert("Write access denied")})},requestContact(){Telegram.WebApp.requestContact(function(e){e?a.showAlert("Contact granted"):a.showAlert("Contact denied")})},isVersionAtLeast(e){return Telegram.WebApp.isVersionAtLeast(e)},doesntSupport(e){if(!this.isVersionAtLeast(e))throw Telegram.WebApp.showAlert("This feature is not supported in this version of Telegram",function(){Telegram.WebApp.close()}),new Error("This feature is not supported in this version of Telegram")},showPopup(){Telegram.WebApp.showPopup({title:"Popup title",message:"Popup message",buttons:[{id:"delete",type:"destructive",text:"Delete all"},{id:"faq",type:"default",text:"Open FAQ"},{type:"cancel"}]},function(e){e==="delete"?a.showAlert("'Delete all' selected"):e==="faq"&&Telegram.WebApp.openLink("https://telegram.org/faq")})},showScanQrPopup(e){Telegram.WebApp.showScanQrPopup({text:e?"with any link":"for test purposes"},function(t){if(e){const s=t.toString().toLowerCase();if(s.substring(0,7)==="http://"||s.substring(0,8)==="https://")return setTimeout(function(){Telegram.WebApp.openLink(t)},50),!0}else return a.showAlert(t),!0})},requestLocation(e){return navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e.nextElementSibling.innerHTML="("+t.coords.latitude+", "+t.coords.longitude+")",e.nextElementSibling.className="ok"}):(e.nextElementSibling.innerHTML="Geolocation is not supported in this browser.",e.nextElementSibling.className="err"),!1},requestVideo(e){return navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(t){e.nextElementSibling.innerHTML="(Access granted)"}):(e.nextElementSibling.innerHTML="Media devices is not supported in this browser.",e.nextElementSibling.className="err"),!1},requestAudio(e){return navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(t){e.nextElementSibling.innerHTML="(Access granted)",e.nextElementSibling.className="ok"}):(e.nextElementSibling.innerHTML="Media devices is not supported in this browser.",e.nextElementSibling.className="err"),!1},requestAudioVideo(e){return navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then(function(t){e.nextElementSibling.innerHTML="(Access granted)",e.nextElementSibling.className="ok"}):(e.nextElementSibling.innerHTML="Media devices is not supported in this browser.",e.nextElementSibling.className="err"),!1},testClipboard(e){return!1},apiRequest(e,t,s){return s&&s({error:"This function ("+e+") should send requests to your backend. Please, change this code to your own."})}};function g(e){if(window.Blob)try{return new Blob([e]).size}catch{}let t=e.length;for(let s=e.length-1;s>=0;s--){const o=e.charCodeAt(s);o>127&&o<=2047?t++:o>2047&&o<=65535&&(t+=2),o>=56320&&o<=57343&&s--}return t}function N(e,t){const s=Math.pow(10,t||0);return Math.round(e*s)/s}Telegram.WebApp.onEvent("themeChanged",function(){document.getElementById("theme_data").innerHTML=JSON.stringify(Telegram.WebApp.themeParams,null,2)}),a.initDataUnsafe.query_id&&(document.getElementById("main_btn").style.display="block"),document.getElementById("with_webview_btn").style.display=a.initDataUnsafe.query_id&&!a.initDataUnsafe.receiver?"block":"none",document.getElementById("webview_data").innerHTML=JSON.stringify(a.initDataUnsafe,null,2),document.getElementById("theme_data").innerHTML=JSON.stringify(Telegram.WebApp.themeParams,null,2),document.getElementById("regular_link").setAttribute("href",document.getElementById("regular_link").getAttribute("href")+location.hash),document.getElementById("text_field").focus(),document.getElementById("regular_field").addEventListener("input",function(e){this.value.toLowerCase().indexOf("progress")>=0?Telegram.WebApp.MainButton.showProgress():Telegram.WebApp.MainButton.hideProgress()}),document.getElementById("ver").innerHTML=Telegram.WebApp.version,document.getElementById("platform").innerHTML=Telegram.WebApp.platform,a.initDataUnsafe.receiver?(document.getElementById("peer_wrap").style.display="block",document.getElementById("peer_name").innerHTML=a.initDataUnsafe.receiver.first_name+" "+a.initDataUnsafe.receiver.last_name,a.initDataUnsafe.receiver.photo_url?document.getElementById("peer_photo").setAttribute("src",a.initDataUnsafe.receiver.photo_url):document.getElementById("peer_photo").style.display="none"):a.initDataUnsafe.chat&&(document.getElementById("peer_wrap").style.display="block",document.getElementById("peer_name").innerHTML=a.initDataUnsafe.chat.title,a.initDataUnsafe.chat.photo_url?document.getElementById("peer_photo").setAttribute("src",a.initDataUnsafe.chat.photo_url):document.getElementById("peer_photo").style.display="none"),a.checkInitData(),a.init();function L(){document.querySelector(".viewport-border").setAttribute("text",window.innerWidth+" x "+N(Telegram.WebApp.viewportHeight,2)),document.querySelector(".viewport-stable_border").setAttribute("text",window.innerWidth+" x "+N(Telegram.WebApp.viewportStableHeight,2)+" | is_expanded: "+(Telegram.WebApp.isExpanded?"true":"false"))}Telegram.WebApp.setHeaderColor("secondary_bg_color"),Telegram.WebApp.onEvent("viewportChanged",L),L(),Telegram.WebApp.onEvent("settingsButtonClicked",function(){alert("Settings opened!")});let d=document.getElementById("bg_color_sel").value;const x=document.getElementById("bg_color_input"),b=document.getElementById("header_color_sel");x.value=Telegram.WebApp.backgroundColor,document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor),b.value="secondary_bg_color",b.addEventListener("change",function(e){const t=e.target.value;document.getElementById("top_sect").classList.toggle("second",t==="secondary_bg_color"),Telegram.WebApp.setHeaderColor(t),document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),x.addEventListener("change",function(e){const t=e.target.value;document.getElementById("bg_color_val").textContent=t,b.value="custom",d=document.getElementById("bg_color_sel").value,Telegram.WebApp.setBackgroundColor(t),document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),b.addEventListener("change",function(e){const t=e.target.value;t==="custom"?(b.value=d,x.focus()):(document.getElementById("bg_color_val").textContent="custom...",Telegram.WebApp.setBackgroundColor(t),document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor),x.value=Telegram.WebApp.backgroundColor,d=b.value)}),Telegram.WebApp.onEvent("themeChanged",function(){x.value=Telegram.WebApp.backgroundColor,document.body.setAttribute("style","--bg-color:"+Telegram.WebApp.backgroundColor)}),a.testClipboard(document.getElementById("clipboard_test"))}),[p]}class De extends je{constructor(p){super(),we(this,p,Ee,Ce,ye,{})}}export{De as component};
