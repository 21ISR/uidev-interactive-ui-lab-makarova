const popup = document.querySelector('popup-overlay');
const openPopupBtn = document.querySelector('#show-popup');
const closePopupBtn = document.querySelector('.popup-close');
const popupForm = document.querySelector('popup-form');

popupOverlay.addEventListener('click', (event) =>{
    if (event.target === popupOverlay){
        popupOverlay.classList.remove('show');
    }
});
showPopupBtn.addEventListener('click', () => {
    popupOverlay.classList.add('show');
});
popupClose.addEventListener('click', (event) => {
    popupOverlay.classList.remove('show');
});
popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    popupOverlay.classList.remove('show');
    popupForm.reset();
});

//аккордеон
const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')
        if (isOpen) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
        header.classList.toggle('active')
        
    });
});
