document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-back",
        },
    });
});