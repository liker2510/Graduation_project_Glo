import { animate } from "./helpers";

const one = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const scrollPhone = document.getElementById('scrollPhone');
    const arrow = document.querySelector('.header-contacts__arrow');
    const headerMenu = document.querySelector('.menu>.menu__icon');
    const popupMenu = document.querySelector('.popup');
    const openPopupMenu = document.querySelector('.popup-dialog-menu');
    const smoothLinks = document.querySelectorAll('a[href^="#"]');


    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
        
    headerMenu.addEventListener('click', () => {
        openPopupMenu.classList.add('showHide-menu');
    })

    popupMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-link') || e.target.classList.contains('close-menu')) {
            openPopupMenu.classList.remove('showHide-menu');
        }
    })

    headerContactsArrow.addEventListener('click', () => {
        arrow.classList.toggle('header-accord-arrow-active');
        scrollPhone.classList.toggle('header-accord-active');
    })


}

export default one