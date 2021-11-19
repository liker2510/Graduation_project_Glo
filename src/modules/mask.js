const mask = () => {

    document.body.addEventListener('input', (e) => {
        if (e.target.name === "phone") {
            e.target.value = e.target.value.replace(/[^0-9]+/, '');
        }
    })
}

export default mask