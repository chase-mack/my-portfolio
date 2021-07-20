const fullPage = document.querySelector('#body');
const scrollUpBtn = document.querySelector('#scroll-up-btn');

document.addEventListener('DOMContentLoaded', function (e) {
    document.addEventListener('scroll', function (e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 1;
        if (currentScroll + modifier > documentHeight) {
            scrollUpBtn.classList.add('slide-up');
            scrollUpBtn.classList.remove('slide-down');
        } else {
            scrollUpBtn.classList.add('slide-down');
            scrollUpBtn.classList.remove('slide-up');
        }
    })
})