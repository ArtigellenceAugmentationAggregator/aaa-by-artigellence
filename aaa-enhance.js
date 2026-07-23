/* ============================================================
   AAA by Artigellence — UI Enhancement Layer v1
   ONE line to install, before </body>:
     <script src="aaa-enhance.js" defer></script>
   Additive only. Remove the line = everything reverts.
   Desktop-heavy effects auto-disable on touch / reduced-motion.
   Every block is try/caught — it can never break the page.
   ============================================================ */
(function () {
  if (window.__aaaEnhance) return; window.__aaaEnhance = true;
  var FINE = false, REDUCE = false;
  try { FINE = matchMedia('(pointer:fine)').matches; } catch(e){}
  try { REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch(e){}

  /* ---------- injected CSS ---------- */
  try {
    var css = ''
    + '#aaaProg{position:fixed;top:0;left:0;height:2.5px;width:0;z-index:2147483000;'
    +   'background:linear-gradient(90deg,#8b6914,#c9a227,#f0d878);box-shadow:0 0 10px rgba(201,162,39,.6);'
    +   'transition:width .08s linear;pointer-events:none}'
    + '.aaaRv{opacity:0;transform:translateY(16px);transition:opacity .65s ease,transform .65s cubic-bezier(.2,.8,.25,1)}'
    + '.aaaRv.aaaIn{opacity:1;transform:none}'
    + '.aaaTilt{transform-style:preserve-3d;will-change:transform;transition:transform .18s ease,box-shadow .25s ease}'
    + '.aaaShine{position:relative;overflow:hidden}'
    + '.aaaShine::after{content:"";position:absolute;top:0;left:-75%;width:45%;height:100%;'
    +   'background:linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent);'
    +   'transform:skewX(-22deg);animation:aaaShineK 5.5s ease-in-out infinite;pointer-events:none}'
    + '@keyframes aaaShineK{0%,70%{left:-75%}90%,100%{left:135%}}'
    + '#aaaGlow{position:fixed;width:340px;height:340px;border-radius:50%;pointer-events:none;z-index:1;'
    +   'background:radial-gradient(circle,rgba(201,162,39,.10),transparent 65%);'
    +   'transform:translate(-50%,-50%);mix-blend-mode:screen}'
    + '#aaaDust{position:fixed;inset:0;z-index:1;pointer-events:none}'
    + '@media (prefers-reduced-motion:reduce){.aaaRv{opacity:1;transform:none;transition:none}'
    +   '.aaaShine::after{animation:none}#aaaGlow,#aaaDust,#aaaProg{display:none}}';
    var st = document.createElement('style'); st.id='aaaEnhCss'; st.textContent = css;
    document.head.appendChild(st);
  } catch(e){}

  /* ---------- 1 · scroll progress bar ---------- */
  try {
    if (!REDUCE) {
      var prog = document.createElement('div'); prog.id='aaaProg'; document.body.appendChild(prog);
      var onScr = function(){
        var h = document.documentElement;
        var max = (h.scrollHeight - h.clientHeight) || 1;
        prog.style.width = Math.min(100, (h.scrollTop / max) * 100) + '%';
      };
      addEventListener('scroll', onScr, {passive:true}); onScr();
    }
  } catch(e){}

  /* ---------- 2 · scroll reveals (safe, once) ---------- */
  try {
    var RV_SEL = '.industry-box,.collab-tier,.section-head,.stat-block,.swf-card,.tier,.np-card,.step,.truth';
    var rvEls = document.querySelectorAll(RV_SEL);
    if (rvEls.length && 'IntersectionObserver' in window && !REDUCE) {
      var io = new IntersectionObserver(function(es){
        es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('aaaIn'); io.unobserve(en.target);} });
      }, {threshold:.1, rootMargin:'0px 0px -5% 0px'});
      rvEls.forEach(function(el,i){
        var r = el.getBoundingClientRect();
        if (r.top < innerHeight) { return; } /* already visible — don't touch */
        el.classList.add('aaaRv');
        el.style.transitionDelay = (i % 3) * 70 + 'ms';
        io.observe(el);
      });
    }
  } catch(e){}

  /* ---------- 3 · 3D tilt on cards (desktop only) ---------- */
  try {
    if (FINE && !REDUCE) {
      var tiltEls = document.querySelectorAll('.industry-box,.collab-tier,.swf-card,.tier');
      tiltEls.forEach(function(el){
        el.classList.add('aaaTilt');
        var rect = null;
        el.addEventListener('mouseenter', function(){ rect = el.getBoundingClientRect(); });
        el.addEventListener('mousemove', function(ev){
          if(!rect) rect = el.getBoundingClientRect();
          var px = (ev.clientX - rect.left)/rect.width - .5;
          var py = (ev.clientY - rect.top)/rect.height - .5;
          el.style.transform = 'perspective(900px) rotateX(' + (-py*6).toFixed(2) + 'deg) rotateY(' + (px*8).toFixed(2) + 'deg) translateY(-4px)';
        });
        el.addEventListener('mouseleave', function(){ el.style.transform=''; rect=null; });
      });
    }
  } catch(e){}

  /* ---------- 4 · shine sweep on primary CTAs ---------- */
  try {
    if (!REDUCE) {
      var btns = document.querySelectorAll('.btn-primary,.topnav-cta-book,.tier-cta');
      var n=0;
      btns.forEach(function(b){ if(n<6){ b.classList.add('aaaShine'); n++; } });
    }
  } catch(e){}

  /* ---------- 5 · gold dust particle field + mouse parallax (desktop only) ---------- */
  try {
    if (FINE && !REDUCE) {
      var cv = document.createElement('canvas'); cv.id='aaaDust'; document.body.appendChild(cv);
      var cx = cv.getContext('2d'), W, H, ps = [], mx = .5, my = .5;
      var N = 46;
      function size(){ W = cv.width = innerWidth; H = cv.height = innerHeight; }
      function mk(){ ps = []; for (var i=0;i<N;i++) ps.push({
        x: Math.random()*W, y: Math.random()*H,
        r: .6 + Math.random()*1.7, d: .4 + Math.random()*.9,      /* depth for parallax */
        vx: (Math.random()-.5)*.12, vy: -(.04 + Math.random()*.10),
        a: .12 + Math.random()*.3, tw: Math.random()*6.28 });
      }
      size(); mk();
      addEventListener('resize', function(){ size(); mk(); }, {passive:true});
      addEventListener('mousemove', function(e){ mx = e.clientX/W; my = e.clientY/H; }, {passive:true});
      var t = 0, running = true;
      document.addEventListener('visibilitychange', function(){ running = !document.hidden; if(running) loop(); });
      function loop(){
        if(!running) return;
        t += .016; cx.clearRect(0,0,W,H);
        var ox = (mx-.5)*30, oy = (my-.5)*18;   /* parallax offset */
        for (var i=0;i<ps.length;i++){
          var p = ps[i];
          p.x += p.vx; p.y += p.vy;
          if (p.y < -8){ p.y = H+8; p.x = Math.random()*W; }
          if (p.x < -8) p.x = W+8; if (p.x > W+8) p.x = -8;
          var tw = .55 + .45*Math.sin(t*1.6 + p.tw);
          cx.globalAlpha = p.a * tw;
          cx.fillStyle = '#e8c34a';
          cx.beginPath();
          cx.arc(p.x + ox*p.d, p.y + oy*p.d, p.r, 0, 6.283);
          cx.fill();
        }
        cx.globalAlpha = 1;
        requestAnimationFrame(loop);
      }
      loop();
    }
  } catch(e){}

  /* ---------- 6 · cursor aura (desktop only, very subtle) ---------- */
  try {
    if (FINE && !REDUCE) {
      var g = document.createElement('div'); g.id='aaaGlow'; document.body.appendChild(g);
      var gx=-500, gy=-500, tx=-500, ty=-500;
      addEventListener('mousemove', function(e){ tx=e.clientX; ty=e.clientY; }, {passive:true});
      (function glowLoop(){
        gx += (tx-gx)*.09; gy += (ty-gy)*.09;
        g.style.left = gx+'px'; g.style.top = gy+'px';
        requestAnimationFrame(glowLoop);
      })();
    }
  } catch(e){}
})();
