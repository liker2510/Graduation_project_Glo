import { animate } from "./helpers";
const popup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const menuLink = document.querySelectorAll('.open_popup');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const linkPrivacy = document.querySelectorAll('.link-privacy');
    const formula = document.getElementById('formula');
    const formulaItemIcon = formula.querySelectorAll('.formula-item__icon');
    const buttons = document.querySelectorAll('.button_wide');
    const popupConsultation = document.querySelector('.popup-consultation');

    buttons.forEach((index) => {
        index.addEventListener('click', () => {
            popupConsultation.style = 'visibility: inherit;';
        })
    })

    // popupConsultation.addEventListener(() => {

    // }) 

    
    formulaItemIcon.forEach((index) => {
        index.addEventListener('mouseover', () => {

            index.classList.add('active-item');
            animate({
                duration: 300,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    index.firstElementChild.style.opacity = progress;
                }
            });
        })

        index.addEventListener('mouseout', () => {
            index.classList.remove('active-item');
        })
    })
    
    
    linkPrivacy.forEach((index) => {
        index.addEventListener('click', () => {
            popupPrivacy.style = 'visibility: inherit;';
        })
    })
    
    
    menuLink.forEach((index) => {
        index.addEventListener('click',() => {
            popupRepairTypes.style = 'visibility: inherit;';
        })
    })

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            popupRepairTypes.style = "";
            popupPrivacy.style = "";
            popupConsultation.style = '';
        } 
        // else if (e.target.classList.contains('close-consultation')) {
            
        // }
    })

}

export default popup