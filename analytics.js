document.addEventListener('DOMContentLoaded', function () {

    const setSrc = document.querySelector('.navbar-toggler');
    if (setSrc) {
        setSrc.addEventListener('click', foo);
    }

    function foo() {
        const link = document.querySelector('.vacation-icon a');
        const support = document.querySelector('.support-icon a');

        link.setAttribute('onclick', 'window.location.href = "vacation.html";');
        support.setAttribute('onclick', 'window.location.href = "support.html";');
    }

    /* Add listener to d-none mobile-btn*/
    window.addEventListener('scroll', onHandler);
    const mobileBlock = document.querySelector('.mobile-bottom-menu');
    const cardPopUp = document.querySelector('.card-popup');

    function onHandler() {
        if (mobileBlock !== null) {
            let sY = window.pageYOffset;

            if (sY <= 166) {
                mobileBlock.classList.remove('d-none');
            } else {
                mobileBlock.classList.remove('d-flex');
                mobileBlock.classList.add('d-none');
            }
        }
    }

    const homeBanner = document.getElementById('home');
    if (homeBanner !== null) {
        homeBanner.addEventListener('click', () => {
            checkClassPopUp();
        })
    }


    function checkClassPopUp() {
        const isClass = cardPopUp.classList.contains('d-block');
        if (isClass) {
            console.log(isClass);
            mobileBlock.style = "display:flex !important;"
        } else {
            mobileBlock.style = "";
        }
    }


    const aboutProduct = document.querySelectorAll('.product-item a');
    if (aboutProduct !== null) {
        aboutProduct.forEach(el => {
            el.addEventListener('click', () => {
                window.location.href = 'about-product.html';
            })
        })
    }


    const modalCenter = document.querySelector('.reviews-feedback-msg');

    const booking = document.querySelector('.booking');
    let str = 'left: 50%; transform:translateX(-43%)';
    if (modalCenter) {
        modalCenter.parentElement.style = str;
    }

    if (booking) {
        booking.parentElement.style = str;
    }


    const btnBooking = document.querySelector('.d-md-none');
    if (btnBooking) {
        btnBooking.addEventListener('click', checkBtn);
    }

    function checkBtn() {
        mobileBlock.classList.remove('d-flex');
        mobileBlock.classList.add('d-none');
    }


    const closeModal = document.querySelector('.booking .modal-content button');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            mobileBlock.classList.remove('d-none');
            mobileBlock.classList.add('d-flex');
        })

    }

    const fixComment = document.querySelector('.form-comment input');

    if (fixComment) {
        fixComment.classList.add('fix0');
    }

    const personData = document.querySelector('.forgot-pass');
    if (personData) {
        personData.addEventListener('click', (e) => {
            window.location.href = 'person-dataPixelPerfect.html';
        })
    }

})