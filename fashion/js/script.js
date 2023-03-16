document.addEventListener('click', documnetClick);

function documnetClick(e) {
   const targetItem = e.target;

   if(targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}