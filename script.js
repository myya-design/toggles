for(const toggle of document.querySelectorAll('.toggle')){
  toggle.querySelector('.stars').innerHTML=Array.from({length:9},()=>'<span class="star">✦</span>').join('');
  toggle.addEventListener('click',()=>{
    const isNight=toggle.classList.toggle('night');
    toggle.classList.toggle('day',!isNight);
    toggle.setAttribute('aria-checked',String(isNight));
    toggle.setAttribute('aria-label',isNight?'Switch night scene to day':'Switch day scene to night');
  });
}
