document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn");
  const nav=document.querySelector("#mainNav");
  const stickyHeader=document.querySelector("#stickyHeader");

  const setHeaderHeight=()=>{
    if(!stickyHeader) return;
    const height=Math.ceil(stickyHeader.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--sticky-header-height",`${height}px`);
  };

  // The full header is fixed, so keep the page content below it.
  setHeaderHeight();
  window.addEventListener("load",setHeaderHeight,{once:true});
  window.addEventListener("resize",setHeaderHeight);
  if(window.ResizeObserver && stickyHeader){
    new ResizeObserver(setHeaderHeight).observe(stickyHeader);
  }

  if(menu && nav){
    menu.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      menu.setAttribute("aria-expanded",open);
      setHeaderHeight();
    });
  }

  document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{
    if(nav) nav.classList.remove("open");
    if(menu) menu.setAttribute("aria-expanded","false");
    setHeaderHeight();
  }));

  document.querySelectorAll(".service-card").forEach(card=>{
    card.addEventListener("touchstart",()=>{
      document.querySelectorAll(".service-card.tapped").forEach(x=>{
        if(x!==card) x.classList.remove("tapped");
      });
      card.classList.add("tapped");
    },{passive:true});
  });

  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();
});