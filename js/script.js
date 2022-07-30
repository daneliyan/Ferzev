const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const play = document.querySelectorAll('.btn__play');

function reset() {
    const activeVideoBtn = document.querySelector('.btn__play--hidden');

    if (!activeVideoBtn) return;

    activeVideoBtn.classList.remove('btn__play--hidden');

    const activeVideo = activeVideoBtn.closest('.slider__video').querySelector('video');
    activeVideo.removeAttribute('controls');
    activeVideo.load();

    const activeContent = activeVideoBtn.closest('.slider__video').querySelector('.slider__video-content');
    activeContent.classList.remove('slider__video-content--hidden');
}

play.forEach(btnPlay => {
    btnPlay.addEventListener('click', (event) => {
        reset(); // Встановлюються стандартні параметри відео яке було включено

        // Нижче встановлюються параметри конкретно для кнопки на яку тикунли

        btnPlay.classList.add('btn__play--hidden');

        const video = event.target.closest('.slider__video').querySelector('video');
        video.play();
        video.setAttribute('controls', 'controls');

        const content = event.target.closest('.slider__video').querySelector('.slider__video-content');
        content.classList.add('slider__video-content--hidden');
    })
});
