const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-btn');
const closeModalBtn = document.querySelector('.modal-close-btn');
const mobileModal = document.querySelector('.mob-menu');
const mobileOpenBtn = document.querySelector('.menu-open-btn');
const mobileCloseBtn = document.querySelector('.menu-close-btn');

openModalBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
    modal.classList.remove('is-open');
    }
});

mobileOpenBtn.addEventListener('click', () => {
    mobileModal.classList.toggle('is-open');
});

mobileCloseBtn.addEventListener('click', () => {
    mobileModal.classList.remove('is-open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
    scrollBtn.style.display = 'flex';
    } else {
    scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
});