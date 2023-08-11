import { Swiper, Pagination, Navigation } from "swiper";

const gallery = document.querySelector('.gallery');
const gallerySlider = document.querySelector('.gallery .swiper');
if (gallerySlider) {
    const slides = gallerySlider.querySelectorAll('.swiper-slide');
    const prev = gallery.querySelector('.gallery__prev');
    const next = gallery.querySelector('.gallery__next');
    const pagination = gallery.querySelector('.gallery__pagination');

    if (slides.length)

        new Swiper(gallerySlider, {
            modules: [
                Pagination, Navigation
            ],

            pagination: {
                el: pagination,
                type: 'fraction'
            },
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            
            slidesPerView: 'auto',
            spaceBetween: 60,

        })
}