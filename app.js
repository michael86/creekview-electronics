const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');
navClose.addEventListener('click', e => navToggle.checked = false);


const header = document.getElementById('header');
const hamburgerLines = document.getElementsByClassName('line');
const headerImg = document.getElementById('header-img');
window.onscroll = () => {

    const scrolled = document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
    const viewportWidth = window.visualViewport.width;
    if (scrolled) {

        header.classList.add("nav-scroll");

        for (const line of hamburgerLines) {
            line.classList.add('background-white');
        }
    } else {

        header.classList.remove("nav-scroll");

        for (const line of hamburgerLines) {
            line.classList.remove('background-white');
        }
    }

    if (scrolled && viewportWidth >= 1240 && !headerImg.classList.contains('nav-scroll')) {
        headerImg.classList.add('img-scroll');
    } else {
        headerImg.classList.remove('img-scroll');
    }
};

(function () {
    let cards, windowHeight;


    function init() {
        cards = document.getElementsByClassName('card');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < cards.length; i++) {

            var card = cards[i];
            var positionFromTop = cards[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -50) {
                card.classList.add('show-card');
            } else {
                card.classList.remove('show-card');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();