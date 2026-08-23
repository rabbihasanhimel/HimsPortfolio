// Small enhancement: reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll(".section,.contact").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(18px)";
  el.style.transition="opacity .65s ease, transform .65s ease";
  observer.observe(el);
});
const style=document.createElement("style");
style.textContent=".visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);