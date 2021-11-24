const reviewsSlider = () => {
    const reviewsSliderWrap = document.querySelector('.reviews-slider-wrap');
    const reviewsSliderSlide = document.querySelectorAll('.reviews_slider');


    let currentSlide = 0;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    reviewsSliderWrap.addEventListener('click', (e) => {
        if (!e.target.matches('#reviews-arrow_right, #reviews-arrow_left, .transparency-item__img, svg, path')) {
            return
        }
        prevSlide(reviewsSliderSlide, currentSlide, 'reviews_slider-active')
        if (e.target.matches('#reviews-arrow_right, svg, path')) {
            currentSlide++
        } else if (e.target.matches('#reviews-arrow_left, svg, path')) {
            currentSlide--
        }
        if (currentSlide >= reviewsSliderSlide.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = reviewsSliderSlide.length - 1
        }
        nextSlide(reviewsSliderSlide, currentSlide, 'reviews_slider-active');
    })

}

export default reviewsSlider