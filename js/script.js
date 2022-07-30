var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const content = document.querySelector('.slider__video-content');
const play = document.querySelector('.btn__play');
const video = document.querySelector('.slider__video video');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('btn__play--hidden');
    content.classList.add('slider__video-content--hidden')
});