document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        loop: true,
        navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-back",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
        },
})});