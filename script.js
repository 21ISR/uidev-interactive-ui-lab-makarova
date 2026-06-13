const popup = document.querySelector('popup-overlay');
const openPopupBtn = document.querySelector('#show-popup');
const closePopupBtn = document.querySelector('.popup-close');
const popupForm = document.querySelector('form');

openPopupBtn.addEventListener('click', () =>{
    popup.computedStyleMap.display = 'flex'
})
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', (event) => {
    if (event.target === popup){
        popup.style.display = 'none'
    }
})

FormData.addEventListener('submit', (event) => {
    event.prevent()
    popup.style.display = 'none'
    FormData.reset()
})

//аккордеон
const accordionHeaders = document.querySelector('.accordion')
accordionHeaders.each((header) => {
    header.addEventListener('click', () => {
        const content = header.element
        const isOpen = header.classList.contains('active')
        accordionHeaders.each((item) => {
        }
    }