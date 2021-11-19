
const popup = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const menuLink = document.querySelectorAll('.open_popup');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const linkPrivacy = document.querySelectorAll('.link-privacy');
    
    console.log(linkPrivacy);
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