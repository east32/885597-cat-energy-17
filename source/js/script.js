var navMain = document.querySelector('.main-nav');

var navToggle = document.querySelector('.main-nav__toggle');

var form = document.querySelector('form');
var petname = document.querySelector('[name=petname]');
var weight = document.querySelector('[name=weight]');
var mail = document.querySelector('[name=email]');
var phone = document.querySelector('[name=phone]');



            navMain.classList.remove('main-nav--nojs');

            navToggle.addEventListener('click', function() {
              if (navMain.classList.contains('main-nav--closed')) {
                navMain.classList.remove('main-nav--closed');
                navMain.classList.add('main-nav--opened');
              } else {
                navMain.classList.add('main-nav--closed');
                navMain.classList.remove('main-nav--opened');
              }
            });
            form.addEventListener('submit', function (evt) {
               if (this.petname.is|| !weight.value || !email.value || !phone.value) {
                evt.preventDefault();
                petname.classList.add (error-input);
                weight.classList.add (error-input);
                email.classList.add (error-input);
                phone.classList.add (error-input);
               }
            });
