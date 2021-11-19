import { animate } from "./helpers";

const one = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const scrollPhone = document.getElementById('scrollPhone');
    const arrow = document.querySelector('.header-contacts__arrow');
    const headerMenu = document.querySelector('.menu>.menu__icon');
    const popupMenu = document.querySelector('.popup');
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
        const screenWidth = window.screen.width;
        if (screenWidth >= '767') {
            animate({
                duration: 1200,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    popupMenu.style.right = progress * 46 + '%';
                    popupMenu.style.float = "right";
                }
            });
        }
    })

    popupMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-link') || e.target.classList.contains('close-menu')) {
            popupMenu.style.cssText = "right: 0%;";
        }
    })


    headerContactsArrow.addEventListener('click', () => {
        arrow.classList.toggle('header-accord-arrow-active');
        scrollPhone.classList.toggle('header-accord-active');
    })


}

export default one