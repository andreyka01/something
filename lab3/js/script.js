
document.addEventListener('click', documentActions);

function documentActions(e) {
   const targetItem = e.target;
   
   if (targetItem.closest('.burger-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}  