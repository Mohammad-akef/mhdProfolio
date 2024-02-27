const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle && navMenu && navClose) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
// REMOVE MENU MOBILE 

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Skills Toogle
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });

    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active');
  });
});
// Services Model __________________

const modelViews = document.querySelectorAll('.services__model');
const modelBtns = document.querySelectorAll('.services__button');
const modelCloses = document.querySelectorAll('.services__model-close');

let model = function(modelClick) {
    modelViews[modelClick].classList.add('active-model');
};

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        model(i);
    });
});

modelCloses.forEach((modelClose) => {
  modelClose.addEventListener('click', () => {
    modelViews.forEach((modelView) => {
      modelView.classList.remove('active-model');
    });
  });
});
