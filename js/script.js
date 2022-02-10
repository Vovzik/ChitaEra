
function swiper() {
//cards slider
const cards__swiper = new Swiper('.cards__swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});


const cardsmini__swiper = new Swiper('.cardsmini__swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.cards__swiper-button-next',
    prevEl: '.cards__swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2
    },
    501: {
      slidesPerView: 3
    },
    769: {
      direction: 'vertical'
    },
  }

});


//Управление slider
cards__swiper.controller.control = cardsmini__swiper;
cardsmini__swiper.controller.control = cards__swiper;



}

swiper();

function plusMinusValue() {
  const js__cardsMinus = document.querySelectorAll('.js__cards-minus');
  const js__cardsValue = document.querySelectorAll('.js__cards-value');
  const js__cardsPlus = document.querySelectorAll('.js__cards-plus');


  for (let i = 0; i < js__cardsPlus.length; i++) {
    js__cardsPlus[i].addEventListener('click', () => {
      js__cardsValue[i].value++;
    })

    js__cardsMinus[i].addEventListener('click', () => {
      if (js__cardsValue[i].value > 1) {
        js__cardsValue[i].value--;
      }
    })
  }
}

plusMinusValue();


function tabs() {
   const js__orderingBtn = document.querySelectorAll('.js__ordering-btn');
   const js__orderingBody = document.querySelector('.js__ordering-body');
   const js__orderingInnerbtn = document.querySelector('.js__ordering-innerbtn');
   
   for (let i = 0; i < js__orderingBtn.length; i++) {
      js__orderingBtn[i].addEventListener('click', function () {
      js__orderingInnerbtn.querySelector('.active').classList.remove('active');
      js__orderingInnerbtn.querySelectorAll('.js__ordering-btn')[i].classList.add('active');
   
       js__orderingBody.querySelector('.active').classList.remove('active');
       js__orderingBody.querySelectorAll('.js__ordering-item')[i].classList.add('active'); 
     })
   }
}

tabs()







