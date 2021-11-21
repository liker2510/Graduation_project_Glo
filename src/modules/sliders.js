const sliders = () => {
    const sliderBlock = document.querySelector('#repair-types');
    const slidesTypes = document.querySelectorAll('.repair-types-slider>.slider__type');
    const button = document.querySelectorAll('.repair-types-nav__item');
    const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
    const sliderCounterContentTotal = document.querySelector('.slider-counter-content__total');

    let slides = document.querySelectorAll('.types-repair1>.repair-types-slider__slide');
    let currentSlideType = 0

    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const sliders = (index) => {
        let currentSlide = 0;
        sliderCounterContentCurrent.innerText = 1;
        sliderCounterContentTotal.innerText = index.length;

        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide(index, currentSlide, 'dnone')
            if (!e.target.matches('#repair-types-arrow_right, #svg-right, #path-right, #repair-types-arrow_left, #svg-left, #path-left')) {
                return
            }
            if (e.target.matches('#repair-types-arrow_right, #svg-right, #path-right')) {
                currentSlide++
            }else if (e.target.matches('#repair-types-arrow_left, #svg-left, #path-left')) {
                currentSlide--
            }
            if (currentSlide >= index.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = index.length - 1
            }
            nextSlide(index, currentSlide, 'dnone');
            sliderCounterContentCurrent.innerText = currentSlide + 1;
        })
    }
    sliders(slides);
    
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('repair-types-nav__item')) {
            return
        }
 
        prevSlide(slidesTypes, currentSlideType, 'dnone')
        nextSlide(button, currentSlideType, 'active')

        if (e.target.classList.contains('repair-types-nav__item')) {
            button.forEach((buttons, id) => {
                if (e.target === buttons) { 
                    currentSlideType = id
                }
            })
        }
        if (e.target.outerText === "Частичный ремонт") {
            slides = document.querySelectorAll('.types-repair1>.repair-types-slider__slide');
            sliders(slides);
        }else if (e.target.outerText === "Косметический ремонт") {
            slides = document.querySelectorAll('.types-repair2>.repair-types-slider__slide');
            sliders(slides);
        }else if (e.target.outerText === "Капитальный ремонт") {
            slides = document.querySelectorAll('.types-repair3>.repair-types-slider__slide');
            sliders(slides);
        }else if (e.target.outerText === "Евроремонт ремонт") {
            slides = document.querySelectorAll('.types-repair4>.repair-types-slider__slide');
            sliders(slides);
        }else if (e.target.outerText === "Индивидуальный ремонт") {
            slides = document.querySelectorAll('.types-repair5>.repair-types-slider__slide');
            sliders(slides);
        }
        nextSlide(slidesTypes, currentSlideType, 'dnone')
        prevSlide(button, currentSlideType, 'active')

    })
}
 
export default sliders

    // const autoSlide = () => {
        
    //     prevSlide(slidesTypes, currentSlideType, 'dnone')
    //     currentSlideType++
    //     if (currentSlideType >= slidesTypes.length) {
    //         currentSlideType = 0
    //     }
    //     nextSlide(slidesTypes, currentSlideType, 'dnone')
        
    // }
    // const startSlide = () => {
    //     setInterval(autoSlide, 2000)
    // }
    // const stopSlide = () => {

    // }

    // startSlide()
