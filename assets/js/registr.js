const inputTurn = document.querySelector('.input__turn'),
      inputTurn2 = document.querySelector('.input__turn2'),
      inputImg = document.querySelector('.input__img'),
      inputImg2 = document.querySelector('.input__img2');

function previewFile(input, inputImg) {
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function() {
        inputImg.setAttribute("src", reader.result);
      }

      reader.readAsDataURL(file);
    }
}

inputTurn.addEventListener('input', function() {
    previewFile(inputTurn, inputImg);
    inputImg.style.opacity = 1;
});

inputTurn2.addEventListener('input', function() {
    previewFile(inputTurn2, inputImg2);
    inputImg2.style.opacity = 1;
});

const inputs = document.querySelectorAll('.search__input-chek'),
      inputsArr = Array.from(inputs),
      btn = document.querySelector('.btn-registr');

btn.disabled = true;

inputs.forEach(item => {
    
    let statusMessage = document.createElement('div');
    statusMessage.innerHTML = 'Invalid value'
                statusMessage.style.cssText = `
                    font-size: 12px;
                    line-height: 14px;
                    position: absolute;
                    left: 250px;
                    bottom: 5px;
                `;

    item.addEventListener('input', () => {

        if (item.value == '') {
            statusMessage.style.color = '#e85b67';
        } else {
            statusMessage.style.color = 'transparent';
        }

        let result = inputsArr.some(item => item.value == '');
        if (result) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }

        item.insertAdjacentElement('afterend', statusMessage);
    });
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
        window.location.href = 'index.html';
    }, 3000);
}

btn.addEventListener('click', () => {
    thanksModal();
});
