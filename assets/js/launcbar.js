new Splide( '#projectSlider', {
    perPage: 2,
    perMove: 1,
    arrows : true,
    gap    : '20px',
    pagination : false,
    breakpoints: {
        800: {
          perPage: 1,
        }
    }

} ).mount();