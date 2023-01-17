const like = document.querySelector('#like')

let clickCount1 = 0;
like.addEventListener('click', () => {
    clickCount1++;
    if (clickCount1 % 2) {
        like.querySelector('.count').textContent++;
        like.querySelector('.count').classList.add('red')
        like.querySelector('.card__svg path').classList.add('red')
    } else {
        like.querySelector('.count').textContent--;
        like.querySelector('.count').classList.remove('red')
        like.querySelector('.card__svg path').classList.remove('red')
    }

    if (clickCount1 == 3) {
        clickCount1 = 1
    }
});

new Splide( '#productSlider4', {
    perPage: 4,
    perMove: 1,
    arrows : true,
    gap    : '20px',
    pagination : false,
    breakpoints: {
        800: {
          perPage: 2,
        },
        540: {
            perPage: 1,
        }
    }

} ).mount();