document.querySelectorAll('.tile').forEach(t=>{
  const id=t.dataset.id;
  const img=new Image(); img.alt=''; img.loading='lazy';
  img.src='https://i.ytimg.com/vi/'+id+'/maxresdefault.jpg';
  img.onload=()=>{ if(img.naturalWidth<200) img.src='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg'; };
  img.onerror=()=>{ img.src='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg'; };
  t.prepend(img);
  const pl=document.createElement('span'); pl.className='play'; pl.textContent='▶ Play'; t.appendChild(pl);
  t.addEventListener('click',()=>{t.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>'},{once:true});
});
function setLang(l){
  document.documentElement.lang=l;
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  document.title=l==='en'?'Igor Matijević · Video, editing, film':'Igor Matijević · Video, montaža, film';
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
let l='sl';try{l=localStorage.getItem('lang')||((navigator.language||'').startsWith('sl')?'sl':'en')}catch(e){}
setLang(l);
