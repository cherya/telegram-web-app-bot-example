import{s as me,n as te}from"../chunks/scheduler.FBjjn5oP.js";import{S as fe,i as ge,g as s,s as o,m as be,h as a,j as x,y as n,c as r,f as b,n as he,k as t,l as ke,A as P,a as xe,x as e}from"../chunks/index.Yx7fxxdr.js";function we(_e){let c,l,h,le="Send «Hello, World!»",V,_,se="Send «Hello, World!» with inline webview button",B,m,ae="Send current time to bot (x10)",L,w,ie="Expand Webview",F,C,ce="Hide Main Button",M,y,U,T,z,A,oe='<img id="peer_photo" class="chat_img svelte-9bvidl" src=""/> <span id="peer_name"></span>',R,D,Q,O,v,re="bg_color",f,ne="secondary_bg_color",G,g,J,I,K,j,d,ve="bg_color",k,de="secondary_bg_color",p,pe="custom...",X,H,ue=`<div id="btn_status" class="hint svelte-9bvidl" style="display: none;"></div> <p class="svelte-9bvidl">Test links:</p> <ul class="svelte-9bvidl"><li class="svelte-9bvidl"><a id="regular_link" href="" class="svelte-9bvidl">Regular link #2</a> (opens inside webview)</li> <li class="svelte-9bvidl"><a href="https://telegram.org/" target="_blank" class="svelte-9bvidl">target=&quot;_blank&quot; link</a>
        (opens outside webview)</li> <li class="svelte-9bvidl"><a href="javascript:window.open(&#39;https://telegram.org/&#39;);" class="svelte-9bvidl">window.open() link</a> (opens outside webview)</li> <li class="svelte-9bvidl"><a href="https://t.me/like" class="svelte-9bvidl">LikeBot t.me link</a> (opens inside Telegram
        app)</li> <li class="svelte-9bvidl"><a href="javascript:Telegram.WebApp.openTelegramLink(&#39;https://t.me/vote&#39;);" class="svelte-9bvidl">web_app_open_tg_link()</a> (opens inside Telegram app)</li> <li class="svelte-9bvidl"><a href="javascript:Telegram.WebApp.openLink(&#39;https://google.com/&#39;);" class="svelte-9bvidl">web_app_open_link()</a> (opens outside webview)</li> <li class="svelte-9bvidl"><a href="tg://resolve?domain=vote" class="svelte-9bvidl">VoteBot tg:// link</a> (does not open)</li></ul> <p class="svelte-9bvidl">Test permissions:</p> <ul class="svelte-9bvidl"><li class="svelte-9bvidl"><a href="javascript:;" onclick="return DemoApp.requestLocation(this);" class="svelte-9bvidl">Request Location</a> <span></span></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="return DemoApp.requestVideo(this);" class="svelte-9bvidl">Request Video</a> <span></span></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="return DemoApp.requestAudio(this);" class="svelte-9bvidl">Request Audio</a> <span></span></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="return DemoApp.requestAudioVideo(this);" class="svelte-9bvidl">Request Audio+Video</a> <span></span></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="return DemoApp.testClipboard(this);" id="clipboard_test" class="svelte-9bvidl">Read from clipboard</a> <span></span></li></ul> <p class="svelte-9bvidl">Test alerts:</p> <div class="columns svelte-9bvidl"><ul class="svelte-9bvidl"><li class="svelte-9bvidl"><a href="javascript:;" onclick="alert(&#39;Hello!&#39;);" class="svelte-9bvidl">alert</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="confirm(&#39;Are you sure?&#39;);" class="svelte-9bvidl">confirm</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="prompt(&#39;How old are you?&#39;);" class="svelte-9bvidl">prompt</a></li></ul> <ul class="svelte-9bvidl"><li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.showAlert(&#39;Hello!&#39;);" class="svelte-9bvidl">showAlert</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.showConfirm(&#39;Are you sure?&#39;);" class="svelte-9bvidl">showConfirm</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.requestWriteAccess();" class="svelte-9bvidl">requestWriteAccess</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.requestContact();" class="svelte-9bvidl">requestContact</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.showPopup();" class="svelte-9bvidl">showPopup</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.showScanQrPopup();" class="svelte-9bvidl">showScanQrPopup</a></li> <li class="svelte-9bvidl"><a href="javascript:;" onclick="DemoApp.showScanQrPopup(true);" class="svelte-9bvidl">showScanQrPopup (links only)</a></li></ul></div> <p class="svelte-9bvidl">Haptics:</p> <ul class="svelte-9bvidl"><li class="svelte-9bvidl">Impact: <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;heavy&#39;);" class="svelte-9bvidl">heavy</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;light&#39;);" class="svelte-9bvidl">light</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;medium&#39;);" class="svelte-9bvidl">medium</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;rigid&#39;);" class="svelte-9bvidl">rigid</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.impactOccurred(&#39;soft&#39;);" class="svelte-9bvidl">soft</a><br/><br/></li> <li class="svelte-9bvidl">Notification: <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;error&#39;);" class="svelte-9bvidl">error</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;success&#39;);" class="svelte-9bvidl">success</a>,  
        <a href="javascript:Telegram.WebApp.HapticFeedback.notificationOccurred(&#39;warning&#39;);" class="svelte-9bvidl">warning</a><br/><br/></li> <li class="svelte-9bvidl">Selection: <a href="javascript:Telegram.WebApp.HapticFeedback.selectionChanged();" class="svelte-9bvidl">changed</a><br/><br/></li></ul> <pre class="svelte-9bvidl"><code id="webview_data"></code></pre> <div class="hint svelte-9bvidl">Data passed to webview.
      <span id="webview_data_status" class="status_need svelte-9bvidl">Checking hash...</span></div> <pre class="svelte-9bvidl"><code id="theme_data"></code></pre> <div class="hint svelte-9bvidl">Theme params</div> <div class="hint svelte-9bvidl">Version: <span id="ver"></span>, platform: <span id="platform"></span></div>`,Y,q,Z,E;return{c(){c=s("div"),l=s("section"),h=s("button"),h.textContent=le,V=o(),_=s("button"),_.textContent=se,B=o(),m=s("button"),m.textContent=ae,L=o(),w=s("button"),w.textContent=ie,F=o(),C=s("button"),C.textContent=ce,M=o(),y=s("input"),U=o(),T=s("div"),z=o(),A=s("div"),A.innerHTML=oe,R=o(),D=s("div"),Q=be("Header: "),O=s("select"),v=s("option"),v.textContent=re,f=s("option"),f.textContent=ne,G=o(),g=s("div"),J=be("Background: "),I=s("input"),K=o(),j=s("select"),d=s("option"),d.textContent=ve,k=s("option"),k.textContent=de,p=s("option"),p.textContent=pe,X=o(),H=s("section"),H.innerHTML=ue,Y=o(),q=s("div"),Z=o(),E=s("div"),this.h()},l(W){c=a(W,"DIV",{class:!0});var u=x(c);l=a(u,"SECTION",{id:!0,class:!0});var i=x(l);h=a(i,"BUTTON",{id:!0,onclick:!0,class:!0,"data-svelte-h":!0}),n(h)!=="svelte-1lcrk0"&&(h.textContent=le),V=r(i),_=a(i,"BUTTON",{id:!0,onclick:!0,class:!0,"data-svelte-h":!0}),n(_)!=="svelte-zutttf"&&(_.textContent=se),B=r(i),m=a(i,"BUTTON",{id:!0,onclick:!0,class:!0,"data-svelte-h":!0}),n(m)!=="svelte-125ccpw"&&(m.textContent=ae),L=r(i),w=a(i,"BUTTON",{onclick:!0,class:!0,"data-svelte-h":!0}),n(w)!=="svelte-1qkzyz3"&&(w.textContent=ie),F=r(i),C=a(i,"BUTTON",{onclick:!0,class:!0,"data-svelte-h":!0}),n(C)!=="svelte-1qs826o"&&(C.textContent=ce),M=r(i),y=a(i,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),U=r(i),T=a(i,"DIV",{class:!0,contenteditable:!0,"data-placeholder":!0,id:!0}),x(T).forEach(b),z=r(i),A=a(i,"DIV",{id:!0,style:!0,"data-svelte-h":!0}),n(A)!=="svelte-er9q7j"&&(A.innerHTML=oe),R=r(i),D=a(i,"DIV",{class:!0});var $=x(D);Q=he($,"Header: "),O=a($,"SELECT",{id:!0});var ee=x(O);v=a(ee,"OPTION",{"data-svelte-h":!0}),n(v)!=="svelte-12yzkyt"&&(v.textContent=re),f=a(ee,"OPTION",{"data-svelte-h":!0}),n(f)!=="svelte-1x10bni"&&(f.textContent=ne),ee.forEach(b),$.forEach(b),G=r(i),g=a(i,"DIV",{class:!0});var N=x(g);J=he(N,"Background: "),I=a(N,"INPUT",{type:!0,id:!0}),K=r(N),j=a(N,"SELECT",{id:!0});var S=x(j);d=a(S,"OPTION",{"data-svelte-h":!0}),n(d)!=="svelte-12yzkyt"&&(d.textContent=ve),k=a(S,"OPTION",{"data-svelte-h":!0}),n(k)!=="svelte-1x10bni"&&(k.textContent=de),p=a(S,"OPTION",{id:!0,"data-svelte-h":!0}),n(p)!=="svelte-z7gcmv"&&(p.textContent=pe),S.forEach(b),N.forEach(b),i.forEach(b),X=r(u),H=a(u,"SECTION",{class:!0,"data-svelte-h":!0}),n(H)!=="svelte-1217p0s"&&(H.innerHTML=ue),Y=r(u),q=a(u,"DIV",{class:!0}),x(q).forEach(b),Z=r(u),E=a(u,"DIV",{class:!0}),x(E).forEach(b),u.forEach(b),this.h()},h(){t(h,"id","main_btn"),t(h,"onclick","DemoApp.sendMessage('');"),t(h,"class","svelte-9bvidl"),t(_,"id","with_webview_btn"),t(_,"onclick","DemoApp.sendMessage('', true);"),t(_,"class","svelte-9bvidl"),t(m,"id","data_btn"),t(m,"onclick","DemoApp.sendTime(true);"),t(m,"class","svelte-9bvidl"),t(w,"onclick","DemoApp.expand();"),t(w,"class","svelte-9bvidl"),t(C,"onclick","DemoApp.toggleMainButton(this);"),t(C,"class","svelte-9bvidl"),t(y,"type","text"),t(y,"placeholder","Input text in regular input..."),t(y,"id","regular_field"),t(y,"class","svelte-9bvidl"),t(T,"class","input svelte-9bvidl"),t(T,"contenteditable","true"),t(T,"data-placeholder","Input text in contenteditable field..."),t(T,"id","text_field"),t(A,"id","peer_wrap"),ke(A,"display","none"),v.__value="bg_color",P(v,v.__value),v.selected=!0,f.__value="secondary_bg_color",P(f,f.__value),t(O,"id","header_color_sel"),t(D,"class","sect_row svelte-9bvidl"),t(I,"type","color"),t(I,"id","bg_color_input"),d.__value="bg_color",P(d,d.__value),d.selected=!0,k.__value="secondary_bg_color",P(k,k.__value),p.__value="custom",P(p,p.__value),t(p,"id","bg_color_val"),t(j,"id","bg_color_sel"),t(g,"class","sect_row svelte-9bvidl"),t(l,"id","top_sect"),t(l,"class","second svelte-9bvidl"),t(H,"class","svelte-9bvidl"),t(q,"class","viewport-border svelte-9bvidl"),t(E,"class","viewport-stable_border svelte-9bvidl"),t(c,"class","container")},m(W,u){xe(W,c,u),e(c,l),e(l,h),e(l,V),e(l,_),e(l,B),e(l,m),e(l,L),e(l,w),e(l,F),e(l,C),e(l,M),e(l,y),e(l,U),e(l,T),e(l,z),e(l,A),e(l,R),e(l,D),e(D,Q),e(D,O),e(O,v),e(O,f),e(l,G),e(l,g),e(g,J),e(g,I),e(g,K),e(g,j),e(j,d),e(j,k),e(j,p),e(c,X),e(c,H),e(c,Y),e(c,q),e(c,Z),e(c,E)},p:te,i:te,o:te,d(W){W&&b(c)}}}class Ae extends fe{constructor(c){super(),ge(this,c,null,we,me,{})}}export{Ae as component};