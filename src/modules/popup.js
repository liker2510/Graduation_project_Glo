import { animate } from "./helpers";
const popup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const menuLink = document.querySelectorAll('.open_popup');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const linkPrivacy = document.querySelectorAll('.link-privacy');
    const formula = document.getElementById('formula');
    const formulaItemIcon = formula.querySelectorAll('.formula-item__icon');

    
    formulaItemIcon.forEach((index) => {
        index.addEventListener('mouseover', () => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    index.firstElementChild.style.opacity = progress;
                }
            });
            if (index.innerText === '01') {
                index.firstElementChild.style = "visibility: inherit; ";
            } else if (index.innerText === '02') {
                index.firstElementChild.style = "visibility: inherit;";
            } else if (index.innerText === '03') {
                index.firstElementChild.style = "visibility: inherit;";
            } else if (index.innerText === '04') {
                index.firstElementChild.style = "visibility: inherit;";
            } else if (index.innerText === '05') {
                index.firstElementChild.style = "visibility: inherit;";
            } else if (index.innerText === '06') {
                index.firstElementChild.style = "visibility: inherit;";
            }
        })

        index.addEventListener('mouseout', () => {
            index.firstElementChild.style = "";
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
            console.log(close);
        })
    })

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('mobile-hide')) {
            popupRepairTypes.style = "visibility: hidden;";
            popupPrivacy.style = "visibility: hidden;";
        }
    })

}

export default popup