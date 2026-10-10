if('scrollRestoration' in history)history.scrollRestoration='manual';
(function(){const top=()=>{if(!location.hash){window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}};top();window.addEventListener('load',top);window.addEventListener('pageshow',top);})();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');});}
const f=document.getElementById('contact-form'),st=document.getElementById('form-status');
if(f&&st){f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;st.textContent='デモサイトのため、送信はされません。実際のサイトでは、このあとご予約確認のご連絡が届きます。';});}
