var navMain = document.querySelector('.main-nav');

var navToggle = document.querySelector('.main-nav__toggle');

var form = document.querySelector("form");
var name = document.querySelector("[name=name]");
var weight = document.querySelector("[name=weight]");
var mail = document.querySelector("[name=email]");
var phone = document.querySelector("[name=phone]");



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

            form.addEventListener("submit", function (evt) {
              if (!name.value || !weight.value ||  !mail.value || !phone.value) {
                evt.preventDefault();
              }
            });
