/* Create Card */
const cardItems = document.querySelectorAll('.create__group-item'),
      backLink = document.querySelectorAll('.create__inner-link');

animate(cardItems, 'animate__rubberBand');
animate(backLink, 'animate__fadeOutLeft');

function animate(animateEl, animateName) {
    animateEl.forEach(item => {
        item.querySelector('img').classList.add('animate__animated');

        item.addEventListener('mouseenter', () => {
            item.querySelector('img').classList.add(animateName);
        });
    
        item.addEventListener('mouseleave', () => {
            item.querySelector('img').classList.remove(animateName);
        });
    });
}

let nameOfCard = '';
const inputTitle = document.querySelector('.input-title');
const createImg = document.querySelector('.create__box-flexbox img');

cardItems.forEach(item => {
    item.addEventListener('click', () => {
        nameOfCard = item.querySelector('.create__group-title').innerText
        localStorage.setItem('nameOfCard', nameOfCard);
    });
});

inputTitle.textContent = localStorage.getItem('nameOfCard');
createImg.src = `assets/img/${localStorage.getItem('nameOfCard')}.png`;

const inputs = document.querySelectorAll('.line-chek'),
      btn = document.querySelector('.btn--non'),
      inputsArr = Array.from(inputs),
      price = document.querySelector('.line__price'),
      nameOfWork = document.querySelector('.name__work'),
      nameInput = document.querySelector('.line__name'),
      procent = document.querySelector('.procent'),
      priceCount = document.querySelector('.jsCount'),
      multipleInput = document.querySelector('.multip-input');

function limitedValue(nameOfValue, count) {
    if (nameOfValue.textContent.length > count) {
        nameOfValue.textContent = nameOfValue.textContent.slice(0, count) + '...'
    }
}

inputs.forEach(item => {
    
    let statusMessage = document.createElement('div');
    statusMessage.innerHTML = 'Invalid value'
                statusMessage.style.cssText = `
                    font-size: 12px;
                    line-height: 14px;
                    position: absolute;
                    left: 295px;
                `;
    item.addEventListener('input', () => {

        nameOfWork.textContent = nameInput.value

        if (item.value == '') {
            statusMessage.style.color = '#e85b67';
        } else {
            statusMessage.style.color = 'transparent';
        }
        limitedValue(nameOfWork, 16);

        if ((inputsArr.some(elem => elem.value == '') || (!isNaN(price.value)) == false || multipleInput.value < 2) ) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }

        if (!isNaN(price.value) ) {
            priceCount.textContent = price.value;
            procent.textContent = price.value - price.value * 0.025;

            limitedValue(priceCount, 10);
            limitedValue(procent, 10);
        } else {
            price.value = price.value.replace(/[\D0]/, '');
        }

        item.insertAdjacentElement('afterend', statusMessage);
    });
});

let statusMessageCopies = document.createElement('div');
statusMessageCopies.innerHTML = 'Copies must be more than 1'
        statusMessageCopies.style.cssText = `
                    font-size: 12px;
                    line-height: 14px;
                    position: absolute;
                    left: 202px;
                `;

multipleInput.addEventListener('input', () => {
    if (!isNaN(multipleInput.value) ) {
    } else {
        multipleInput.value = multipleInput.value.replace(/[\D0]/, '');
    }

    if ((inputsArr.some(elem => elem.value == '') || (!isNaN(price.value)) == false || multipleInput.value < 2) ) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    if (multipleInput.value < 2) {
        statusMessageCopies.style.color = '#e85b67';
    } else {
        statusMessageCopies.style.color = 'transparent';
    }

    multipleInput.insertAdjacentElement('afterend', statusMessageCopies);
});

if ((inputsArr.some(elem => elem.value == '') ) ) {
    btn.disabled = true;
} else {
    btn.disabled = false;
}

const multipleBlock = document.querySelector('.multiple');


if (localStorage.getItem('nameOfCard') == 'Multiple') {
    multipleBlock.classList.add('mulblock');
} else {
    multipleBlock.classList.remove('mulblock');
}

const inputTurn = document.querySelector('.input__turn'),
      inputImg = document.querySelector('.input__img');

function previewFile(input, inputImg) {
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(){
        inputImg.setAttribute("src", reader.result);
      }

      reader.readAsDataURL(file);
    }
}

inputTurn.addEventListener('input', function() {
    previewFile(inputTurn, inputImg);
    inputImg.style.opacity = 1;
    document.querySelector('.btn__hide').style.opacity = 0;
});

function thanksModal() {
    const modalThanks = document.querySelector('.modal__thanks');

    modalThanks.style.display = 'block';
    modalThanks.classList.add('fade');

    setTimeout(function() {
        modalThanks.classList.add('fadeOut');
    }, 2000);

    setTimeout(function() {
        modalThanks.style.display = 'none';
        modalThanks.classList.remove('fade');
        modalThanks.classList.remove('fadeOut');
        window.location.href = 'create.html'
    }, 3000);
}

btn.addEventListener('click', () => {
    thanksModal();
});