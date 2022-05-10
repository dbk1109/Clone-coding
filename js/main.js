const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  //원래는 window.screenY를 사용했지만 듀얼모니터의 경우때문에 pageYOffset를 사용함
  //_.throttle(함수, 시간)
  //gsap.to(요소, 시간, 옵션);
  if (window.pageYOffset > 500) {
    //badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

// fade-in animation

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // .7 1.4 2.1 뒤에 하나씩 늘어나면서 
    opacity: 1
  });
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 수
  spaceBetween: 10, //사이여백
  centeredSlides: true, //가운데가 1번
  loop: true,
  //autoplay: {
  //  delay: 5000
  //}
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호요소 선택자
    clickable: true, //사용자가 클릭가능한지
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
})

function random(min, max) {
  return parseFloat( (Math.random() * (max-min) + min).toFixed(2) )
}

function floatingObj(selector, delay, size) {
  gsap.to(selector, 1, {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObj('.floating--1', 1, 15);
floatingObj('.floating--2', .5, 15);
floatingObj('.floating--3', 1.5, 20);