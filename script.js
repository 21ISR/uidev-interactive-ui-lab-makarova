//popup

const popupOverlay = document.querySelector('# popup');
const openPopupBtn = document.querySelector('#show-popup')
const closePopupBtn = document.querySelector('.popup-close')
const popupForm = document.querySelector("#popup-form")

function closePopup(){
    popupOverlay.computedStyleMap.display = 'none'
}

openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex'
})

closePopupBtn.addEventListener('click', closePopup)

popupOverlay.addEventListener('click', (event) => {
    if(event.target === popupOverlay){
        closePopup()
    }
})

popupForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    alert("Soobshenue otpravleno")
    popupForm.reset()
    closePopup()
})


//accordeon

const accordeonHeaders = document.querySelectorAll('.accordion-header')

const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isOpen = header.classList.contains('active')

        // Закрываем все остальные блоки (режим "один открытый")
        accordionHeaders.forEach((otherHeader) => {
            if (otherHeader !== header) {
                otherHeader.classList.remove('active')
                otherHeader.nextElementSibling.style.maxHeight = null
            }
        })

        if (isOpen) {
            header.classList.remove('active')
            content.style.maxHeight = null
        } else {
            header.classList.add('active')
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})
 //tab

const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        tabBtns.forEach((b) => b.classList.remove('active'))
        tabContents.forEach((c) => c.classList.remove('active'))
        btn.classList.add('active')
        const tabId = btn.getAttribute('data-tab')
        document.getElementById(tabId).classList.add('active')
    })
})

//toolrips
const tooltips = document.querySelector('.tooltip')
tooltips.forEach((tooltip)=> {
    const text = tooltip.querySelector('.tooltip-text')
    tooltip.addEventListener('mouseenter', () => {
        text.style.visibility = 'visible'
        text.style.opacity = '1'
    })
    tooltip.addEventListener('mouseleave', () => {
        text.style.visibility = 'hidden'
        text.style.opacity = '0'
    })
})

//slader

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.slider-arrow-left')
const nextBtn = document.querySelector('.slider-arrow-right')
const dots = document.querySelectorAll('.slider-dot')

let currentSlide = 0
const slidesCount = slides.length
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < slidesCount - 1){
        currentSlide++
    } else {
        currentSlide = 0
    }
    updateSlider()
})

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0){
        currentSlide--
    } else {
        currentSlide = slidesCount -1
    }
    updateSlider()
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index
        updateSlider()
    })
})
