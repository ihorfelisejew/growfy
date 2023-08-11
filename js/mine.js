document.addEventListener('click', documentClick);

function documentClick(e){
    const targetItem = e.target;
    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}

new Swiper('.clients__container', {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    loopedSlides: 5,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    speed: 1200,
    breakpoints: {
        1100: {
            slidesPerView: 5,
            loopedSlides: 5,
        },
        768 : {
            slidesPerView: 4,
            loopedSlides: 4,
        },
        480:{
            slidesPerView: 3,
            loopedSlides: 3,
        },
        0: {
            slidesPerView: 1,
            loopedSlides: 1,
        }
    }
});
