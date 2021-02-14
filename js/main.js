$(document).ready(function(){
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //Настройки адаптивной версии
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 6,
      }
    }
  
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
      // Параметры слайдера
      loop: true,
      slidesPerView: 1,
    
      // Подключаем стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //Посмотреть фотографии букета
    $("#review-1").on('click', function() {

      $.fancybox.open([
        {
          src  : 'https://i.pinimg.com/originals/21/bd/5c/21bd5c7087eb7cc246046d7cd829df4c.jpg',
          opts : {
            caption : 'First caption',
            thumb   : 'https://i.pinimg.com/originals/21/bd/5c/21bd5c7087eb7cc246046d7cd829df4c.jpg'
          }
        },
        {
          src  : 'https://i.pinimg.com/originals/7d/d3/62/7dd362aca4d0972f7390345a378f8021.jpg',
          opts : {
            caption : 'Second caption',
            thumb   : 'https://i.pinimg.com/originals/7d/d3/62/7dd362aca4d0972f7390345a378f8021.jpg'
          }
        }
      ], {
        loop : true,
        thumbs : {
          autoStart : true
        }
      });
    
    });

});