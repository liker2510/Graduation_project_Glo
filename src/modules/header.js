const one = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const scrollPhone = document.getElementById('scrollPhone');
    const arrow = document.querySelector('.header-contacts__arrow');

    headerContactsArrow.addEventListener('click', () => {
        arrow.classList.toggle('header-contacts__arrow__active');
        scrollPhone.classList.toggle('header-contacts__phone-number-accord');
    })


}

export default one