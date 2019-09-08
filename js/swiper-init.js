function mySwiper() {
   //initialize swiper when document ready
   var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 15,
      slidesPerView: 4,
      loop: true,
      freeMode: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
   });
   var galleryTop = new Swiper('.gallery-top', {
      allowTouchMove: false,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      thumbs: {
         swiper: galleryThumbs
      }
   });
}
