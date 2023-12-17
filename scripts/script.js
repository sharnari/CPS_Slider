let moreBtn = document.querySelector('.read-more-button');
let itemList = document.querySelector('.list');
let SwiperContainer = document.querySelector('.for-swiper');

moreBtn.addEventListener('click', function() {
    let classes = itemList.className.split(/\s+/);
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] === 'list--show-part') {
            let classes = itemList.className.split(/\s+/);
            itemList.classList.remove('list--show-part');
            moreBtn.classList.remove('read-more-button--close');
            moreBtn.classList.add('read-more-button--open');
            moreBtn.firstChild.data = 'Скрыть';
        } else {
            itemList.classList.add('list--show-part');
            moreBtn.classList.remove('read-more-button--open');
            moreBtn.classList.add('read-more-button--slose');
            moreBtn.firstChild.data = 'Показать всё';
        }
    }
})

let swiperInit = function() {
    let swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            },
        });
    return swiper;
}

document.addEventListener("DOMContentLoaded", function(){
    let windowWidth = document.documentElement.clientWidth;
    if(windowWidth < 768) {
        addSwiperClasses();
        let globalSwiper = swiperInit();
    }
});

window.addEventListener('resize', function() {
    let windowWidth = document.documentElement.clientWidth;
    addSwiperClasses();
    let globalSwiper = swiperInit();       
    if(windowWidth >= 768) {
        deleteSwiperClasses();
        globalSwiper.destroy(); 
    }
});

let deleteSwiperClasses = () => {
    let SwiperContainer = document.querySelector('.for-swiper');
    let wrapper = SwiperContainer.querySelector('.for-wrapper');
    let slides = wrapper.querySelectorAll('.for-slide');
    let forPagination = SwiperContainer.querySelector('.for-pagination');
    SwiperContainer.classList.remove('swiper');
    wrapper.classList.remove('swiper-wrapper');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('swiper-slide');
    }
    forPagination.classList.remove('swiper-pagination');
    forPagination.classList.remove('swiper-pagination-clickable');
    forPagination.classList.remove('swiper-pagination-bullets');
    forPagination.classList.remove('swiper-pagination-horizontal');
    wrapper.classList.add('list--show-part');
}

function addSwiperClasses() {
    let SwiperContainer = document.querySelector('.for-swiper');
    let wrapper = SwiperContainer.querySelector('.for-wrapper');
    let slides = wrapper.querySelectorAll('.for-slide');
    let forPagination = SwiperContainer.querySelector('.for-pagination');
    SwiperContainer.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide');
    }
    forPagination.classList.add('swiper-pagination');
    wrapper.classList.remove('list--show-part');
}
