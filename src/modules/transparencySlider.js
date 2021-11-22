const transparencySlider = () => {
    const transparencyItem = document.querySelectorAll('.transparency-item');
    const transparencySlider = document.querySelector('.transparency-slider-wrap');
    const popupTransparency = document.querySelector('.popup-transparency');
    const transparencyItemImg = document.querySelectorAll('.transparency-item__img');
    const popupTransparencySliderSlide = document.querySelectorAll('.popup-transparency-slider__slide');

    let currentSlide = 0;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
        }
    
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    transparencySlider.addEventListener('click', (e) => {
        if (!e.target.matches('.slider-arrow_right, .slider-arrow_left, .transparency-item__img, svg, path')) {
             return
        }
        if (e.target.matches('.transparency-item__img')) {
            popupTransparency.style = 'visibility: visible;'
            if (e.target === transparencyItemImg[0]) {
                popupTransparencySliderSlide[0].classList.add('popup-transparency-slider__slide-active');
            }
            if (e.target === transparencyItemImg[1]) {
                popupTransparencySliderSlide[1].classList.add('popup-transparency-slider__slide-active');
            }
            if (e.target === transparencyItemImg[2]) {
                popupTransparencySliderSlide[2].classList.add('popup-transparency-slider__slide-active');
            }
        }
        prevSlide(transparencyItem, currentSlide, 'transparency-item-active')
        if (e.target.matches('.slider-arrow_right, svg, path')) {
            currentSlide++
        }else if (e.target.matches('.slider-arrow_left, svg, path')) {
            currentSlide--
        }
        if (currentSlide >= transparencyItem.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = transparencyItem.length - 1
        }
        nextSlide(transparencyItem, currentSlide, 'transparency-item-active');
    })

    popupTransparency.addEventListener('click',(e) => {
        e.preventDefault()
        if (e.target.matches('.close')) {
            popupTransparency.style = ''
            popupTransparencySliderSlide.forEach((index) => {
                index.classList.remove('popup-transparency-slider__slide-active');
            })
        }
    })
}

 export default transparencySlider