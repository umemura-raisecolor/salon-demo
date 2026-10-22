if('scrollRestoration' in history)history.scrollRestoration='manual';
(function(){const top=()=>{if(!location.hash){window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}};top();window.addEventListener('load',top);window.addEventListener('pageshow',top);})();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');});}
const f=document.getElementById('contact-form'),st=document.getElementById('form-status');
if(f&&st){f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;st.textContent='デモサイトのため、送信はされません。実際のサイトでは、このあとご予約確認のご連絡が届きます。';});}
(function(){const els=document.querySelectorAll('.concept-card,.menu-item,.mdetail,.step,.prep>div,.greet,.gallery figure,.salon,.prow');if(!('IntersectionObserver' in window))return;els.forEach(e=>e.classList.add('fade'));const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}})},{threshold:.12});els.forEach(e=>io.observe(e));})();
(function(){
  var io='IntersectionObserver' in window;
  // stagger order inside grids
  ['.concept-cards','.menu-inner','.prep','.gallery','.steps','.plist .inner'].forEach(function(sel){document.querySelectorAll(sel).forEach(function(g){var n=0;g.querySelectorAll('.fade').forEach(function(el){el.style.setProperty('--n',n++%4);});});});
  // reveal targets
  var map=[['.section-intro .eyebrow,.menu-heading .eyebrow,.sec-head .eyebrow,.salon-copy .eyebrow','x'],['.section-intro h2,.menu-heading h2,.sec-head h2,.salon-copy h2,.greet h2,.reservation h2','up'],['.section-intro>p,.menu-heading>p,.sec-head>p,.salon-copy>p,.reservation-content>p','up'],['.section-intro .text-link,.menu-heading .button,.salon-copy .text-link,.reservation .button','up'],['.salon-image,.greet .g-img','left'],['.cblock','up'],['.form','right'],['.itable','up'],['.front','zoom']];
  var all=[];
  map.forEach(function(m){document.querySelectorAll(m[0]).forEach(function(el){el.classList.add('rv');if(m[1]!=='x')el.classList.add(m[1]);all.push(el);});});
  var shadow=document.querySelectorAll('.md-img,.salon-image,.greet .g-img,.front');
  shadow.forEach(function(el){el.classList.add('pre');all.push(el);});
  if(io){
    var ob=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('is-in');en.target.classList.remove('pre');ob.unobserve(en.target);}});},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
    all.forEach(function(el){ob.observe(el);});
  }else{all.forEach(function(el){el.classList.add('is-in');el.classList.remove('pre');});}
  // count-up prices
  function countUp(el){var raw=el.textContent,m=raw.match(/[\d,]+/);if(!m)return;var target=parseInt(m[0].replace(/,/g,''),10),pre=raw.slice(0,m.index),post=raw.slice(m.index+m[0].length),t0=null,dur=1300;
    function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur),v=Math.round(target*(1-Math.pow(1-p,3)));el.textContent=pre+v.toLocaleString('ja-JP')+post;if(p<1)requestAnimationFrame(step);else{el.textContent=raw;el.classList.add('done');}}
    requestAnimationFrame(step);}
  var nums=document.querySelectorAll('.price strong,.md-price strong,.prow strong,.hero-points b');
  nums.forEach(function(n){n.classList.add('count');});
  if(io&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var oc=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var d=en.target.closest('.hero')?1500:0;setTimeout(function(){countUp(en.target);},d);oc.unobserve(en.target);}});},{threshold:.6});
    nums.forEach(function(n){oc.observe(n);});
  }
  // header shadow & back-to-top
  var hd=document.querySelector('.site-header'),tt=document.createElement('a');
  tt.href='#top';tt.className='to-top';tt.setAttribute('aria-label','ページの先頭へ');tt.textContent='↑';document.body.appendChild(tt);
  function onScroll(){var y=window.scrollY;if(hd)hd.classList.toggle('is-scrolled',y>40);tt.classList.toggle('show',y>600);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
