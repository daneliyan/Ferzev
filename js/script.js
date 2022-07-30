var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const content = document.querySelector('.slider__video-content');
const play = document.querySelectorAll('.btn__play');
const videos = document.querySelectorAll('video');

play.forEach((btn__play) => {
    btn__play.addEventListener('click', (event) => {
        videos.forEach(video => video.load())
        const video = event.target.closest('.slider__video').querySelector('video');
        video.play();
        video.setAttribute('controls', 'controls');
        btn__play.classList.add('btn__play--hidden');
        content.classList.add('slider__video-content--hidden')
    })
});
