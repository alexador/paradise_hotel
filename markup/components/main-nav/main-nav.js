$(document).ready(function () {
  $('.main-nav__ham-btn').on('click', function (e) {
    e.preventDefault();
    $('.main-nav__ham-btn').toggleClass('main-nav__menu-btn_active');
    $('.main-nav__menu-body').toggleClass('main-nav__menu-body_open');
  });
});
