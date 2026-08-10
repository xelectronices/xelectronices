document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.getElementById("mobileMenu"),toggle=document.getElementById("menuToggle"),header=document.getElementById("siteHeader"),progress=document.getElementById("progress");
  const closeMenu=()=>{menu?.classList.remove("open");toggle?.setAttribute("aria-expanded","false")};
  toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
  document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("click",e=>{if(menu?.classList.contains("open")&&!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
  const onScroll=()=>{
    const y=window.scrollY||0;
    header?.classList.toggle("scrolled",y>10);
    const max=document.documentElement.scrollHeight-window.innerHeight;
    if(progress)progress.style.width=(max>0?Math.min(y/max*100,100):0)+"%";
  };
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();

  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}
  }),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

  const counters=document.querySelectorAll(".counter");
  const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target,target=Number(el.dataset.target||0),prefix=el.dataset.prefix||"",suffix=el.dataset.suffix||"",start=performance.now(),duration=1400;
    const tick=now=>{const p=Math.min((now-start)/duration,1),ease=1-Math.pow(1-p,3);el.textContent=prefix+Math.floor(target*ease).toLocaleString("en-IN")+suffix;if(p<1)requestAnimationFrame(tick)};
    requestAnimationFrame(tick);counterObserver.unobserve(el);
  }),{threshold:.55});
  counters.forEach(el=>counterObserver.observe(el));

  document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener("click",()=>{
    if(typeof gtag==="function")gtag("event","whatsapp_enquiry",{event_category:"engagement",event_label:(a.textContent||"WhatsApp").trim()});
  }));
  document.getElementById("year").textContent=new Date().getFullYear();
});