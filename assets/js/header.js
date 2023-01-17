const notification = document.querySelector('#notification'),
      blockchain = document.querySelector('#blockchain'),
      notModal = document.querySelector('#NotModal'),
      notModal2 = document.querySelector('#NotModal2'),
      flexContent = document.querySelector("#flexContent"),
      notModalWallet = document.querySelector('#notModalWallet'),
      wallet = document.querySelector('#btnWallet'),
      notClose = document.querySelectorAll('.notifications-close');
let borderColor = '';
let modalItem = '';

const inp = document.querySelectorAll('input');

inp.forEach(item => {
    item.oninput = () => {
        if(item.value.charAt(0) === ' ') {
            item.value = '';
        }
    };
});

function modalToggle(modalOpen, modalClose, modalClose2) {

    if (modalOpen.classList.contains('notification-active')) {
        setTimeout(function() {
            modalOpen.classList.add('nonee');
        }, 200);
        modalOpen.classList.remove('notification-active');
    } else {
        setTimeout(function() {
            modalOpen.classList.add('notification-active');
        }, 1);
        modalOpen.classList.remove('nonee');

        setTimeout(function() {
            modalClose.classList.add('nonee');
        }, 200);
        modalClose.classList.remove('notification-active');

        setTimeout(function() {
            modalClose2.classList.add('nonee');
        }, 200);
        modalClose2.classList.remove('notification-active');
    }
}

blockchain.addEventListener('click', () => {
    modalToggle(notModal2, notModal, notModalWallet);

    modalItem = document.querySelectorAll('#NotModal2 .modal__inner-item');
    borderColor = notModal2.getElementsByClassName('borderColor');
    choozeItem();
});

notification.addEventListener('click', () => {
    modalToggle(notModal, notModal2, notModalWallet);
});

wallet.addEventListener('click', () => {
    modalToggle(notModalWallet, notModal2, notModal);

    modalItem = document.querySelectorAll('#notModalWallet .modal__inner-item');
    borderColor = notModalWallet.getElementsByClassName('borderColor');
    choozeItem();
});

function choozeItem() {
    for (i = 0; modalItem.length > i; i++) {
        modalItem[i].onclick = function() {
            let currentActive = borderColor[0];
            if(currentActive) 
                currentActive.classList.remove("borderColor");
            if(currentActive !== this) 
                this.classList.add("borderColor");
            
        };
    }
}

function clickOutEl(modalWindow) {
    document.addEventListener('click', (event) => {
        if (!modalWindow.contains(event.target) && modalWindow.classList.contains('notification-active')) {
            modalWindow.classList.remove('notification-active');
        }
    });
}
clickOutEl(notModal);
clickOutEl(notModal2);
clickOutEl(notModalWallet);

notClose.forEach(item => {
    item.addEventListener('click', () => {
        item.closest('.notification__modal').classList.remove('notification-active');
    });
});

let navToggle = document.querySelector("#navToggle");

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('burger-active');

    flexContent.classList.toggle('show');
});

navToggle.addEventListener('click', function () {
    notModal.classList.remove('notification-active');
    notModal2.classList.remove('notification-active');
    notModalWallet.classList.remove('notification-active');
});