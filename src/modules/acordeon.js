const acordeon = () => {
    const titleBlock = document.querySelectorAll('.title_block');

    titleBlock.forEach((index) => {
        index.addEventListener('click',() => {
            index.classList.toggle('msg-active');
        })
    })
    
}

export default acordeon