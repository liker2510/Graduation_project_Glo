import { animate } from "./helpers";

const one = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const scrollPhone = document.getElementById('scrollPhone');
    const arrow = document.querySelector('.header-contacts__arrow');
    const headerMenu = document.querySelector('.menu>.menu__icon');
    const popupMenu = document.querySelector('.popup');
    console.log(headerMenu);
    console.log(popupMenu);


    headerMenu.addEventListener('click', () => {
        const screenWidth = window.screen.width;
        if (screenWidth >= '767') {
            animate({
                duration: 1200,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    // popupMenu.style.cssText = "width: 0%;";
                    popupMenu.style.width = progress * 44 + '%';
                    console.log(progress);
                }
            });
        }
    })

    popupMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-menu')) {
            const screenWidth = window.screen.width;
            if (screenWidth >= '767') {
                animate({
                    duration: 1200,
                    timing(timeFraction) {
                        return 1 - Math.sin(Math.acos(timeFraction));
                    },
                    draw(progress) {
                        // popupMenu.style.cssText = "width: 0%;";
                        popupMenu.style.width = progress * 100 + '%';
                        console.log(progress);
                    }
                });
            }
        }
    })


    headerContactsArrow.addEventListener('click', () => {
        arrow.classList.toggle('header-contacts__arrow__active');
        scrollPhone.classList.toggle('header-contacts__phone-number-accord');
    })


}

export default one