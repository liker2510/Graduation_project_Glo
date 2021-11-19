import { animate } from "./helpers";
const popup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const menuLink = document.querySelectorAll('.open_popup');
    // const popup-repairTypes = document.querySelectorAll('.popup-repair-types');
    
    
    menuLink.forEach((index) => {
        index.addEventListener("click",() => {
            popupRepairTypes.style = 'visibility: inherit;';
            console.log(close);
        })
    })

    popupRepairTypes.addEventListener('click', (e) => {
        if (e.target.classList.contains('mobile-hide')) {
            popupRepairTypes.style = "visibility: hidden;";
        }
    })

}

export default popup