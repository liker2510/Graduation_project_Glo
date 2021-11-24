const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const popupThank = document.querySelector('.popup-thank');
    const getSheckbox = form.querySelector('input[type="checkbox"]');
    const statusBlock = document.createElement('div');
    const errorText = 'Заполните все поля!';
    statusBlock.style = "color: black;"

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {};

        popupThank.style = 'visibility: inherit;';

        formData.forEach((val, key) => {
            formBody[key] = val;
        })
        console.log('submit');
        console.log();

     sendData(formBody) 
        .then(data => {
            formElements.forEach(input => {
                input.value = '';
            })
        })
        // .catch(error => {
        //     statusBlock.textContent = errorText;
        // })
    }

    popupThank.addEventListener('click', (e) => {
        if (!e.target.matches('.close-thank')) {
            return
        }
        if (e.target.matches('.close-thank')) {
            popupThank.style = '';
        }
    })

    
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (getSheckbox.checked === true) {
                statusBlock.textContent = "";
                submitForm();
            } else {
                statusBlock.textContent = errorText;
                form.append(statusBlock);
            }
 
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm;