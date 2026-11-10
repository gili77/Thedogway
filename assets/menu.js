const button=document.querySelector('.menu-toggle');
const menu=document.querySelector('#site-menu');
if(button&&menu){
  menu.hidden=true;
  button.hidden=false;
  document.body.classList.add('menu-ready');
  const close=()=>{menu.hidden=true;button.setAttribute('aria-expanded','false');};
  button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';menu.hidden=open;button.setAttribute('aria-expanded',String(!open));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){close();button.focus();}});
  document.addEventListener('click',event=>{if(!menu.hidden&&!menu.contains(event.target)&&!button.contains(event.target))close();});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{close();const target=document.querySelector(link.hash);if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}}));
}
