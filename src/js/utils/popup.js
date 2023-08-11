import { isMobile } from "./isMobile.js";

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupOpenButtons = document.querySelectorAll('._open-popup');


if (popupOpenButtons.length) {
    popupOpenButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.add('_open');
            document.body.classList.add('_noscroll');
        })
    })

    popupClose.addEventListener('click', function () {
        popup.classList.remove('_open');
        document.body.classList.remove('_noscroll');
    })

    popup.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            popup.classList.remove('_open')
            document.body.classList.remove('_noscroll');
        }
    })
}