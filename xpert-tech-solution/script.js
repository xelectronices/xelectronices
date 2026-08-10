document.addEventListener("DOMContentLoaded",function(){
  const root=document.getElementById("xpert-page");
  if(!root)return;

  const header=document.getElementById("xpertHeader");
  const progress=document.getElementById("xpertProgress");
  const menuBtn=document.getElementById("xpertMenuBtn");
  const mobileNav=document.getElementById("xpertMobileNav");

  function closeMenu(){
    menuBtn.classList.remove("is-open");
    mobileNav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded","false");
  }

  menuBtn.addEventListener("click",function(){
    const open=!mobileNav.classList.contains("is-open");
    mobileNav.classList.toggle("is-open",open);
    menuBtn.classList.toggle("is-open",open);
    menuBtn.setAttribute("aria-expanded",String(open));
  });

  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));

  document.addEventListener("click",function(e){
    if(mobileNav.classList.contains("is-open") && !mobileNav.contains(e.target) && !menuBtn.contains(e.target))closeMenu();
  });

  function scrollUI(){
    const y=window.scrollY||0;
    header.classList.toggle("is-scrolled",y>8);
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.width=(max>0?Math.min(100,(y/max)*100):0)+"%";
  }
  window.addEventListener("scroll",scrollUI,{passive:true});
  scrollUI();

  const reveal=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      }
    });
  },{threshold:.08});
  root.querySelectorAll(".xpert-reveal").forEach(el=>reveal.observe(el));

  document.getElementById("xpertYear").textContent=new Date().getFullYear();
});