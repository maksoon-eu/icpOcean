const slides = document.querySelectorAll('[data-slide]');
const slideWidth = document.querySelector('.market__slide-item--purple');


slides.forEach(el => {
    el.addEventListener('click', () => {
        const clickedEL = el.closest('.market__slide-list').querySelector('.market__list')
        const arrowBackReturn = el.querySelector('.market__slide-icon--class')
        let elHeight = clickedEL.querySelector('.check-height').offsetHeight;
        if (clickedEL.classList.contains('show-list')) {
                clickedEL.style.height = 0
                clickedEL.classList.remove('show-list')
                arrowBackReturn.style.transform = 'rotate(0deg)'
        } else {
            clickedEL.style.height = elHeight + 'px'
            clickedEL.classList.add('show-list')
            arrowBackReturn.style.transform = 'rotate(180deg)'
        }
    });
});

const elWidth = document.querySelector('.check-height').offsetWidth;
const arrowReturn = document.querySelector('.market__slide-icon--abs img')
slideWidth.addEventListener('click', () => {
    const clickedEL = slideWidth.closest('.market__slide');
    
    if (clickedEL.classList.contains('show-list')) {
        clickedEL.style.maxWidth = elWidth + 'px';
        clickedEL.classList.remove('show-list')
        arrowReturn.style.transform = 'rotate(360deg)'
    } else {
        clickedEL.style.maxWidth = 0
        clickedEL.classList.add('show-list')
        arrowReturn.style.transform = 'rotate(180deg)'
    }
});

let indexOfArr1 = 0;
const markerItem = document.querySelectorAll('.market__list-item');
let whichCliced = '';
for (let i = 0; i < markerItem.length; i++) {
    const el = markerItem[i];
    el.addEventListener('click', () => {
        indexOfArr1 = i
        whichCliced = el.textContent;

        if ((whichCliced == 'Apply')) {
            const searchMin = document.querySelector('.search__input--price-min').value
            const searchMax = document.querySelector('.search__input--price-max').value
            whichCliced = searchMin + ' icp' + ' - ' + searchMax + ' icp'
        }

        if (el.classList.contains('show-list')) {
            el.classList.remove('marker')
            el.classList.remove('show-list')
            myCards.forEach(item => {
                if (indexOfArr1 == Number(item.closest('.chosen-categories-item').id)) {
                    item.closest('.chosen-categories-item').remove('.chosen-categories-item')
                    myCards = document.querySelectorAll('.chosen__item-img')
                }
            });
        } else {
            el.classList.add('marker')
            createCard();
            el.classList.add('show-list')
        }

        if (myCards.length > 0) {
            clearBtn.style.display = 'flex'
        } else {
            clearBtn.style.display = 'none'
        }
    });
}

let myCards = ''

function createCard() {
    const element = document.createElement('div');

    element.classList.add('chosen-categories-item');

    element.innerHTML = `
        <div class="chosen__item-text">${whichCliced}</div>
        <div class="chosen__item-img">
            <img src="assets/img/delete.svg" alt="">
        </div>
    `;

    element.id = indexOfArr1;

    document.querySelector('.chosen-categories').append(element)
    myCards = document.querySelectorAll('.chosen__item-img')

    for (let i = 0; i < myCards.length; i++) {
        const el = myCards[i];
        el.addEventListener('click', () => {
            let deleteIndex = Number(el.closest('.chosen-categories-item').id)
            el.closest('.chosen-categories-item').remove('.chosen-categories-item')
            if (indexOfArr1 == Number(element.id)) {
                markerItem[deleteIndex].classList.remove('show-list')
                markerItem[deleteIndex].classList.remove('marker')
                myCards = document.querySelectorAll('.chosen__item-img')
            }

            if (myCards.length > 0) {
                clearBtn.style.display = 'flex'
            } else {
                clearBtn.style.display = 'none'
            }
        });
        
    }
}

let clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    myCards.forEach(el => {
        el.closest('.chosen-categories-item').remove('.chosen-categories-item')
    });
    myCards = []

    markerItem.forEach(el => {
        el.classList.remove('marker')
        el.classList.remove('show-list')
    });
    
    if (myCards.length > 0) {
        clearBtn.style.display = 'flex'
    } else {
        clearBtn.style.display = 'none'
    }
});