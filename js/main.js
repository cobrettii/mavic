$(function () {
  $(".products__slider").slick({
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__raght"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    infinite: false,
  });

  $(".questions__item-title").on("click", function () {
    $(".questions__item").removeClass("questions__item--active");
    $(this).parent().addClass("questions__item--active");
    $('.questions__item-text').removeClass("questions__item-text--active");
    $(this).next().addClass("questions__item-text--active");
  });

  $('.link-dron').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#products').offset().top }, 900);
    e.preventDefault();
  });

  $('.link-benefits').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#benefits').offset().top }, 900);
    e.preventDefault();
  });

  $('.link-specification').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#specification').offset().top }, 900);
    e.preventDefault();
  });

  $('.link-questions').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#questions').offset().top }, 900);
    e.preventDefault();
  });

  $('.link-contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 900);
    e.preventDefault();
  });
});
