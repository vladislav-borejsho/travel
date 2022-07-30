    // BURGER MENU //
(function () {
      const burgerItem = document.querySelector('.burger');
      const menu = document.querySelector('.header-nav');
      const menuCloseItem = document.querySelector('.header-nav-close');

      burgerItem.addEventListener('click', () => {
          menu.classList.add('header-nav-active')
      });
      menuCloseItem.addEventListener('click', () => {
          menu.classList.remove('header-nav-active')
      });
  }())

    // POP-UP //

const logButton = document.querySelector('.search-form-header');
const popUp = document.querySelector('.pop-up');
const popUpSec = document.querySelector('.pop-up-sec')
const regButton = document.querySelector('.registr-text')
const signUpText = document.querySelector('.sign-up-text')
const mobSign = document.querySelector('.nav-item-mob.acc-button')
const signInButton = document.querySelector('.sign-in')
const signUpButton = document.querySelector('.sign-up')
const inputEmailIn = document.querySelector('.email-sign')
const inputPassIn = document.querySelector('.password-sign')
const inputEmailUp = document.querySelector('.email-create')
const inputPassUp = document.querySelector('.password-create')

logButton.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
  })

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popUp.classList.toggle('hidden')
    }
  })

regButton.addEventListener('click', () => {
    popUpSec.classList.toggle('hidden')
    popUp.classList.toggle('hidden')
  })

popUpSec.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up-sec')) {
    popUpSec.classList.toggle('hidden')
    }
})

signUpText.addEventListener('click', () => {
    popUpSec.classList.toggle('hidden')
    popUp.classList.toggle('hidden')
})

mobSign.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
})

signInButton.addEventListener('click', () => {
    alert (`E-mail: ${inputEmailIn.value}\nPassword: ${inputPassIn.value}`)
})

signUpButton.addEventListener('click', () => {
    alert (`E-mail: ${inputEmailUp.value}\nPassword: ${inputPassUp.value}`)
})

    // DESKTOP SLIDER //

const slider = document.querySelector('.dest-cards')
const leftCard = document.querySelector('.dest-card.dest1')
const midCard = document.querySelector('.dest-card.dest2')
const rightCard = document.querySelector('.dest-card.dest3')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')

let offset = 0; //смещение от левого края

leftCard.addEventListener('click', () => {
    offset += 880;
    if (offset > 880) {
        offset = -880;
        dot3.classList.add('active');
        dot1.classList.remove('active');
        dot2.classList.remove('active');
    } else {
        dot1.classList.add('active');
        dot2.classList.remove('active');
    }
    slider.style.left = offset + 'px';
})

midCard.addEventListener('click', () => {
    offset = 0;
    slider.style.left = offset + 'px';
    dot2.classList.add('active');
    dot1.classList.remove('active');
    dot3.classList.remove('active');
})

rightCard.addEventListener('click', () => {
    offset -= 880;
    if (offset < -880) {
        offset = 880;
        dot1.classList.add('active');
        dot2.classList.remove('active');
        dot3.classList.remove('active');
    } else {
        dot3.classList.add('active');
        dot2.classList.remove('active');
    }
    slider.style.left = offset + 'px';
})

    // MOBILE SLIDER //

const leftBtn = document.querySelector('.dest-slider-left')
const rightBtn = document.querySelector('.dest-slider-right')
const slides = document.querySelectorAll('.dest')
const dots = document.querySelectorAll('.dot')

let index = 0;

const activeSlide = n => {
    for (dest of slides) {
        dest.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const currentIndex = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        currentIndex(index);
    } else {
        index++;
        currentIndex(index);
    }
    rightBtn.classList.add('active');
    leftBtn.classList.remove('active');
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        currentIndex(index);
    } else {
        index--;
        currentIndex(index);
    }
    leftBtn.classList.add('active');
    rightBtn.classList.remove('active');
}

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide)