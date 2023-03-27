(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  document.querySelector('html').classList.remove('no-js');
  if (!window.Cypress) {

    AOS.init({
      mirror: true,
      duration: 1500,
      initClassName: 'aos-init',
      once: true,
    });

  }
 
  let mobilemenu = document.querySelector('.mobile-menu')
  let mobilemenusc = document.querySelector('.siteBar')
  let navBtn = document.querySelectorAll('.mobile-menu nav a')
  navBtn.forEach(navLink => {
      navLink.addEventListener('click', () => {
          mobilemenu.classList.remove('siteBar')
      })
  })

  // owlCarousel
  $(".hero_cover").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i><img src="assets/img/arrow.png" alt=""></i>',
      '<i><img src="assets/img/arrow.png" alt=""></i>'
    ],
    nav: true,
    dots: false,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:5000 
  });
})(jQuery);
