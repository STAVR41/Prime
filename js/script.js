$(document).ready(function () {
   $('.header-menu').click(function (event) {
      $('.header-menu, .header__menu, .header__lang, .header__bottom').toggleClass('active');
      $('body').toggleClass('lock');
   });
});