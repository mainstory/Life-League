function initSwiper() {

   if (document.querySelector('[data-section-shop]') || document.querySelector('[data-section-inventory]')) {

      var mySwiper = new Swiper('.swiper', {
         spaceBetween: 15,
         freeMode: true,
         slidesPerView: "auto",
      });

      return mySwiper


   }

}

export {
   initSwiper,
}
