/* ============================================================
   AAA by Artigellence — embeddable chat widget
   Drop ONE line before </body> on any page:
     <script src="aaa-widget.js" defer></script>
   Adds a floating "Ask AAA" bubble that opens the concierge chat.
   Scripted brain (no API key). Listen/voice built in. Self-contained.
   ============================================================ */
(function () {
  if (window.__aaaWidgetLoaded) return; window.__aaaWidgetLoaded = true;

  // ---- fonts (safe if already loaded) ----
  var f = document.createElement('link'); f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(f);

  // ---- styles (all scoped with .aaaw-) ----
  var css = `
  .aaaw-btn{position:fixed;bottom:22px;right:22px;z-index:2147483000;
    background:linear-gradient(145deg,#c9a227,#8b6914);color:#12100a;border:none;cursor:pointer;
    border-radius:100px;padding:13px 20px 13px 16px;display:flex;align-items:center;gap:10px;
    font-family:'Inter',system-ui,sans-serif;font-weight:600;font-size:14px;
    box-shadow:0 10px 34px rgba(201,162,39,.4);transition:transform .2s}
  .aaaw-btn:hover{transform:translateY(-3px)}
  .aaaw-btn .aaaw-ring{position:relative;width:9px;height:9px;display:grid;place-items:center}
  .aaaw-btn .aaaw-ring i{width:9px;height:9px;border-radius:50%;background:#12100a;display:block}
  .aaaw-btn .aaaw-ring i::after{content:"";position:absolute;inset:0;border-radius:50%;
    background:rgba(18,16,10,.5);animation:aaawPulse 1.8s infinite}
  @keyframes aaawPulse{0%{transform:scale(1);opacity:.7}70%{transform:scale(2.6);opacity:0}100%{opacity:0}}
  .aaaw-panel{position:fixed;bottom:22px;right:22px;z-index:2147483001;width:min(380px,calc(100vw - 32px));
    height:min(560px,calc(100vh - 44px));background:#0f141d;border:1px solid rgba(201,162,39,.18);
    border-radius:20px;overflow:hidden;display:none;flex-direction:column;
    box-shadow:0 30px 80px rgba(0,0,0,.6);font-family:'Inter',system-ui,sans-serif;
    animation:aaawPop .28s cubic-bezier(.2,.9,.3,1.2)}
  @keyframes aaawPop{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:none}}
  .aaaw-head{padding:14px 16px;border-bottom:1px solid rgba(201,162,39,.18);display:flex;align-items:center;gap:11px;
    background:linear-gradient(180deg,rgba(201,162,39,.08),transparent)}
  .aaaw-mk{width:32px;height:32px;border-radius:8px;display:grid;place-items:center;
    background:linear-gradient(145deg,#c9a227,#8b6914);color:#12100a;font-weight:700;font-size:12px}
  .aaaw-head .aaaw-t{flex:1;color:#eceae2}.aaaw-head .aaaw-t b{font-size:14px;display:block}
  .aaaw-head .aaaw-t span{font-size:12px;color:#047857;display:flex;align-items:center;gap:6px}
  .aaaw-head .aaaw-t span i{width:6px;height:6px;border-radius:50%;background:#047857;box-shadow:0 0 8px #047857}
  .aaaw-listen{background:rgba(201,162,39,.09);border:1px solid rgba(201,162,39,.18);color:#eceae2;
    font-family:inherit;font-size:11.5px;font-weight:500;padding:6px 10px;border-radius:100px;cursor:pointer}
  .aaaw-listen.on{background:linear-gradient(145deg,#c9a227,#8b6914);color:#12100a}
  .aaaw-x{background:none;border:none;color:#9aa0ab;cursor:pointer;font-size:22px;line-height:1;padding:0 2px}
  .aaaw-x:hover{color:#fff}
  .aaaw-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:11px}
  .aaaw-msg{max-width:85%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.5}
  .aaaw-msg.bot{background:#131a26;border:1px solid rgba(201,162,39,.18);border-bottom-left-radius:4px;align-self:flex-start;color:#eceae2}
  .aaaw-msg.user{background:linear-gradient(145deg,#c9a227,#8b6914);color:#12100a;border-bottom-right-radius:4px;align-self:flex-end;font-weight:500}
  .aaaw-msg.bot b{color:#c9a227}.aaaw-msg a{color:#c9a227}
  .aaaw-typing{display:flex;gap:4px;padding:11px 13px;align-self:flex-start}
  .aaaw-typing span{width:7px;height:7px;border-radius:50%;background:#9aa0ab;animation:aaawBlink 1.2s infinite}
  .aaaw-typing span:nth-child(2){animation-delay:.2s}.aaaw-typing span:nth-child(3){animation-delay:.4s}
  @keyframes aaawBlink{0%,60%,100%{opacity:.25}30%{opacity:1}}
  .aaaw-chips{display:flex;flex-wrap:wrap;gap:7px;padding:0 16px 9px}
  .aaaw-chip{background:rgba(201,162,39,.09);border:1px solid rgba(201,162,39,.18);color:#eceae2;font-family:inherit;
    font-size:12px;padding:7px 12px;border-radius:100px;cursor:pointer}
  .aaaw-chip:hover{background:rgba(201,162,39,.2);border-color:#c9a227}
  .aaaw-in{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(201,162,39,.18)}
  .aaaw-in input{flex:1;background:#131a26;border:1px solid rgba(201,162,39,.18);border-radius:10px;padding:10px 13px;
    color:#eceae2;font-family:inherit;font-size:14px;outline:none}
  .aaaw-in input:focus{border-color:#c9a227}
  .aaaw-in button{background:linear-gradient(145deg,#c9a227,#8b6914);border:none;color:#12100a;cursor:pointer;
    border-radius:10px;width:44px;display:grid;place-items:center;font-size:18px}
  `;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---- markup ----
  var btn = document.createElement('button'); btn.className = 'aaaw-btn';
  btn.innerHTML = '<span class="aaaw-ring"><i></i></span> Ask AAA';
  var panel = document.createElement('div'); panel.className = 'aaaw-panel';
  panel.innerHTML =
    '<div class="aaaw-head"><div class="aaaw-mk">AAA</div>' +
    '<div class="aaaw-t"><b>AAA — your second brain</b><span><i></i>Online now</span></div>' +
    '<button class="aaaw-listen" id="aaawListen">🔊 Off</button>' +
    '<button class="aaaw-x" id="aaawX">×</button></div>' +
    '<div class="aaaw-body" id="aaawBody"></div>' +
    '<div class="aaaw-chips" id="aaawChips"></div>' +
    '<div class="aaaw-in"><input id="aaawInput" placeholder="Tell me your biggest headache…"><button id="aaawSend">&rarr;</button></div>';
  document.body.appendChild(btn); document.body.appendChild(panel);

  var body = panel.querySelector('#aaawBody'), chips = panel.querySelector('#aaawChips'),
      input = panel.querySelector('#aaawInput'), listenBtn = panel.querySelector('#aaawListen');
  var listen = false, speaking = null, greeted = false;

  var STARTERS = ["I run a trades business","I have an allied health clinic","Just show me pricing","How does the pilot work?"];

  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function linkify(s){
    s = s.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
    s = s.replace(/(raj@artigellence\.com)/g,'<a href="mailto:$1">$1</a>');
    s = s.replace(/cal\.com\/raj-aaa\/aaa-discovery/g,'<a href="https://cal.com/raj-aaa/aaa-discovery" target="_blank">book a call</a>');
    s = s.replace(/(\+61 469 313 323)/g,'<a href="https://wa.me/61469313323" target="_blank">$1</a>');
    return s;
  }
  function add(t,who){var d=document.createElement('div');d.className='aaaw-msg '+who;d.innerHTML=who==='bot'?linkify(t):esc(t);body.appendChild(d);body.scrollTop=body.scrollHeight;}
  function typing(){var t=document.createElement('div');t.className='aaaw-typing';t.id='aaawTy';t.innerHTML='<span></span><span></span><span></span>';body.appendChild(t);body.scrollTop=body.scrollHeight;}
  function untyping(){var t=document.getElementById('aaawTy');if(t)t.remove();}
  function setChips(a){chips.innerHTML='';a.forEach(function(c){var b=document.createElement('button');b.className='aaaw-chip';b.textContent=c;b.onclick=function(){input.value=c;send();};chips.appendChild(b);});}
  function speak(t){if(!listen||!('speechSynthesis'in window))return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t.replace(/\*\*/g,''));u.lang='en-AU';u.rate=1.02;var v=speechSynthesis.getVoices().find(function(x){return /en-AU|Australian/i.test(x.lang+x.name);})||speechSynthesis.getVoices().find(function(x){return /en-GB/i.test(x.lang);});if(v)u.voice=v;speaking=u;speechSynthesis.speak(u);}
  function botSay(t,c){add(t,'bot');speak(t);if(c)setChips(c);}
  function send(){var v=input.value.trim();if(!v)return;input.value='';add(v,'user');chips.innerHTML='';typing();setTimeout(function(){untyping();reply(v.toLowerCase());},550);}

  function reply(q){
    if(/(trade|plumb|electric|sparky|build|carpenter|hvac|field|servicem8|tradify)/.test(q)){
      botSay("Trades is right in the wheelhouse. Most operators lose hours on <b>quoting</b> and chasing <b>late invoices</b> — AAA sits on top of ServiceM8, Tradify or simPRO and drafts quotes in under 10 minutes and chases payments on its own. Start with a <b>Phase 0 pilot — A$4,500, fully refundable</b> — first working result on your real jobs by day 10.",["What would Phase 0 do for me?","See the pricing","Book the pilot"]);
    } else if(/(health|clinic|physio|allied|cliniko|halaxy|psych|dental|chiro)/.test(q)){
      botSay("Allied health clinics burn 30–40% of the day on non-clinical admin. AAA works above Cliniko, Halaxy or Power Diary — reception, bookings, recalls and notes handled so your team stays clinical. Best entry is a <b>Phase 0 pilot — A$4,500, fully refundable</b>, first result by day 10.",["What would Phase 0 do for me?","See the pricing","Book the pilot"]);
    } else if(/(account|bookkeep|xero|myob|quickbook|tax)/.test(q)){
      botSay("Accounting practices win big on invoice OCR, reconciliation and client advisory — AAA sits over Xero, MYOB or QuickBooks and cuts processing time hard. Start with the <b>refundable Phase 0 pilot (A$4,500)</b> and see it on your own files by day 10.",["See the pricing","How does the pilot work?","Book the pilot"]);
    } else if(/(legal|law|convey|leap|smokeball|solicit)/.test(q)){
      botSay("Legal & conveyancing gains most on document drafting and lease/contract review — AAA works with LEAP, Smokeball and PEXA to lift throughput without touching your professional judgment. Begin with <b>Phase 0 — A$4,500, fully refundable</b>.",["See the pricing","Book the pilot"]);
    } else if(/(food|distribut|wholesale|ordermentum|solbox|grocer|hospitality)/.test(q)){
      botSay("Food distribution loses 20+ hours a week to order entry and forecasting — AAA sits over Ordermentum, Solbox or Choco to automate order intake and predict demand. The <b>refundable Phase 0 (A$4,500)</b> proves it on your real orders first.",["See the pricing","Book the pilot"]);
    } else if(/(gp|medical|doctor|practice|patient|scribe)/.test(q)){
      botSay("GP and medical practices gain on scribing, recalls and MBS coding — AAA works with Best Practice, Medical Director or Genie, while you stay fully in control of clinical calls. Start with <b>Phase 0 — A$4,500, fully refundable</b>.",["See the pricing","Book the pilot"]);
    } else if(/(retail|ecommerce|shop|store|shopify|woocommerce)/.test(q)){
      botSay("Retail & e-commerce lifts on personalisation, cart recovery and pricing — AAA sits over Shopify, WooCommerce and Klaviyo. Prove it on your own store with the <b>refundable Phase 0 (A$4,500)</b>.",["See the pricing","Book the pilot"]);
    } else if(/(construct|property|estimat|tender|procore|buildxact)/.test(q)){
      botSay("Construction & property wins on tender drafting and estimating — AAA works with Buildxact, Procore and Plangrid. Begin with <b>Phase 0 — A$4,500, fully refundable</b>, first result by day 10.",["See the pricing","Book the pilot"]);
    } else if(/(logistic|transport|freight|fleet|route|dispatch)/.test(q)){
      botSay("Logistics gains on route optimisation and dispatch — AAA sits over Solbox, MachShip and Cartonix. The <b>refundable Phase 0 (A$4,500)</b> shows it on your real runs first.",["See the pricing","Book the pilot"]);
    } else if(/(saas|tech|software|startup|hubspot|salesforce)/.test(q)){
      botSay("Tech & SaaS gains on SDR agents, support and knowledge bots — AAA works with HubSpot, Salesforce and Intercom. Start with <b>Phase 0 — A$4,500, fully refundable</b>.",["See the pricing","Book the pilot"]);
    } else if(/(price|pricing|cost|how much|fee|package|shape|\$|budget)/.test(q)){
      botSay("It's per-piece and transparent. Entry is <b>Phase 0 — A$4,500, fully refundable</b>. After that, agents are A$3,000 each (min 4). Packages: <b>Pilot & Prove A$9,750</b>, Growth Engine Lean A$13,500, Essentials Build A$16,500, Full Build A$28,500, Flagship Year-1 A$56,500 — all incl GST. Which fits depends on your biggest bottleneck. What's yours?",["How does the pilot work?","I run a trades business","Book the pilot"]);
    } else if(/(pilot|phase 0|phase0|refund|risk|guarantee|trial|money back)/.test(q)){
      botSay("Simple: <b>A$4,500, fully refundable through day 30, no questions.</b> Inside 10 days you get one working AI agent on your real data plus a recovery roadmap. If it doesn't earn its place, you get every dollar back. The risk sits with AAA, not you.",["See the pricing","What does AAA do?","Book the pilot"]);
    } else if(/(website|web site|site|landing|page)/.test(q)){
      botSay("AAA builds sites that actually <b>work</b> — they answer customers, take bookings and capture leads on their own, like this chat you're using now. Want Raj to show you one for your business?",["Book the pilot","Email Raj a 3-line headache"]);
    } else if(/(book|call|meet|contact|talk to|speak|human|raj|demo|appoint)/.test(q)){
      botSay("Easiest is a short call with Raj — direct, no juniors. cal.com/raj-aaa/aaa-discovery, or email <b>raj@artigellence.com</b> / WhatsApp <b>+61 469 313 323</b> with the one job eating most of your week (three lines, not an essay).",["See the pricing","What does AAA do?"]);
    } else if(/(what|who|do you do|explain|about|help|agent|automat|offer|service)/.test(q)){
      botSay("AAA builds <b>AI agents and automations</b> that run the admin eating your week — reception, quoting, invoice chasing, reporting, cross-sell. It sits <b>above</b> the tools you already use (Xero, MYOB, ServiceM8, Cliniko and the like) and never replaces them or your staff. A second brain for the business. What do you do — I'll get specific?",["I run a trades business","I have an allied health clinic","See the pricing"]);
    } else if(/(how long|timeline|when|fast|quick|days|week)/.test(q)){
      botSay("Phase 0 shows a <b>first working result by day 10</b>, with a 10–30 day window. Each build agent after that is 14–21 days, milestone-locked, and you only pay on delivery. Nothing upfront on the builds.",["See the pricing","How does the pilot work?","Book the pilot"]);
    } else if(/(hi|hey|hello|g'day|gday|yo|morning|afternoon)/.test(q)){
      botSay("G'day. Tell me what you do and the one job eating most of your week — I'll point you to exactly what'd help and what it costs.",STARTERS);
    } else {
      botSay("Good question — that one's best answered by Raj directly. Email <b>raj@artigellence.com</b> or WhatsApp <b>+61 469 313 323</b> with a three-line version of what you need. Meanwhile — want the basics on what AAA does, or the pricing?",["What does AAA do?","See the pricing","How does the pilot work?"]);
    }
  }

  function open(){panel.style.display='flex';btn.style.display='none';
    if(!greeted){greeted=true;typing();setTimeout(function(){untyping();botSay("G'day — I'm the AAA agent, built right into this site so you don't have to read the whole thing. Tell me: what do you do, and what's the one job eating most of your week?",STARTERS);},600);}}
  function close(){panel.style.display='none';btn.style.display='flex';}

  btn.onclick = open;
  panel.querySelector('#aaawX').onclick = close;
  panel.querySelector('#aaawSend').onclick = send;
  input.addEventListener('keydown', function(e){ if(e.key==='Enter') send(); });
  listenBtn.onclick = function(){listen=!listen;listenBtn.classList.toggle('on',listen);listenBtn.textContent=listen?'🔊 On':'🔊 Off';if(!listen&&speaking)speechSynthesis.cancel();};
  if('speechSynthesis'in window){speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=function(){speechSynthesis.getVoices();};}
})();
