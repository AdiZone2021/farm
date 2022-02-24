

  window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
      buttons = document.querySelectorAll('button'),
      openBtn = document.querySelector('.open');
 

    function createCart() {
        let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading =  document.createElement('h2'),
        closeBtn =  document.createElement('button');



        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');


        heading.textContent = "В Вашей Корзине:";
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(cart);  
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

  createCart();



  
  let field = document.querySelector('.cart-field'),
   cart = document.querySelector('.cart'),
   close = document.querySelector('.close');

function openCart(){
    cart.style.display = 'block';
} 

function closeCart(){
    cart.style.display = 'none'; 
} 

 openBtn.addEventListener('click', openCart);
 close.addEventListener('click', closeCart);



buttons.forEach((item,i) => {
    item.addEventListener('click', () => {
        let item = products[i].cloneNode(true),
        btn = item.querySelector('button');


        btn.remove();
        field.appendChild(item);
        products[i].remove();
 
    });
  });


$(function(){
  
    $('.slider__inner').slick({
       nextArrow:' <button type="button" class="slick-btn slick-next"></button>',
       prevArrow:'<button type="button" class="slick-btn  slick-prev"></button>',
       infinite:false

    });
    
  
});

  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


$('.open-popup').click(function(e){
  e.preventDefault();
  $('.popup-bg').fadeIn(600);
  $('hmtl').addClass('.no-scroll');
});
    
$('.close-popup').click(function(){
  $('.popup-bg').fadeOut(600);
  $('hmtl').removeClass('.no-scroll');
});
    

$('select').styler();

$('.header__btn-menu').on('click', function(){
  $('.menu ul').slideToggle();
});




});


