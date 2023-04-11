"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
   const targetItem = e.target;

   if(targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}




const swiper = new Swiper('.reviews-page__swiper', {
   loop: true,

   navigation: {
     nextEl: '.reviews-page__next',
     prevEl: '.reviews-page__prev',
   },
   slidesPerView: 2,
   spaceBetween: 30,
   speed: 700,
   breakpoints: {
      991.98: {
         slidesPerView: 2,
      },
      240: {
         slidesPerView: 1,
      },
   },
 });

 const body = document.body;
 const scrollUp = "scroll-up";
 const scrollDown = "scroll-down";
 let initialScroll = 0;
 
 window.addEventListener("scroll", () => {
   const currentScroll = window.pageYOffset;

   if (currentScroll <= 0) {
     body.classList.remove(scrollUp);
     return;
   }
 
   if (currentScroll > initialScroll && !body.classList.contains(scrollDown)) {
    
     body.classList.remove(scrollUp);
     body.classList.add(scrollDown);
   } else if (currentScroll < initialScroll && body.classList.contains(scrollDown)) {

     body.classList.remove(scrollDown);
     body.classList.add(scrollUp);
   }

   initialScroll = currentScroll;
 });

const form = document.querySelector('.form');
let messageError = document.querySelector('.form__message');
form.addEventListener('submit', formSend);

function formSend(e) {
  e.preventDefault();
  
  let countError = formValidate(form);

  if (countError === 0) {  
    messageError.innerHTML = '';  
    form.submit();
    form.reset();
  }
} 

function formValidate(form) {
  let countError = 0;
  let requiredItems = document.querySelectorAll('._req');
  for (let i = 0; i < requiredItems.length; i++) {
    const requiredItem = requiredItems[i];
    formRemoveError(requiredItem);
    
    if (requiredItem.value == '') {

      formAddError(requiredItem);
      messageError.innerHTML = 'Please, enter the email';
      countError++;
    } else if (requiredItem.classList.contains('_email')) {
        if (validateEmail(requiredItem)) {

          formAddError(requiredItem);
          messageError.innerHTML = 'Please, check the spelling of the email';
          countError++;
        } 
    } 
  }

  return countError;
}

function formAddError(requiredItem) {
  requiredItem.parentElement.classList.add('_error');
  requiredItem.classList.add('_error');
}
function formRemoveError(requiredItem) {
  requiredItem.parentElement.classList.remove('_error');
  requiredItem.classList.remove('_error');
}
function validateEmail(requiredItem) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(requiredItem.value = requiredItem.value.toLowerCase().trim());
  return !mailFormat;
}