(function(){
  var btn=document.querySelector('.sun-btn'),drawer=document.getElementById('drawer');
  if(btn&&drawer){
    function set(open){drawer.classList.toggle('is-open',open);drawer.setAttribute('aria-hidden',String(!open));btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');document.body.style.overflow=open?'hidden':'';}
    btn.addEventListener('click',function(){set(!drawer.classList.contains('is-open'));});
    drawer.addEventListener('click',function(e){if(e.target===drawer||e.target.closest('a'))set(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
  }
  var f=document.getElementById('contact-form'),st=document.getElementById('form-status');
  if(f&&st){f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;st.textContent='デモサイトのため、送信はされません。実際のサイトでは、このあとご予約確認のご連絡が届きます。';});}
  if('IntersectionObserver' in window){
    var els=document.querySelectorAll('.circles li,.menu-cards li,.zig,.steps li,.prep li,.gallery figure,.split,.price-card,.faq details');
    els.forEach(function(e){e.classList.add('fade');});
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}});},{threshold:.1});
    els.forEach(function(e){io.observe(e);});
  }
})();
