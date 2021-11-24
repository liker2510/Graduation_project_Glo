const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const popupThank = document.querySelector('.popup-thank');


    const sendData = (data) => {
        return fetch('/Graduation_project_Glo/server.php', {
            method: 'GET',
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
        
            submitForm();
        })
    } catch(error) {
        console.log(error.message);
    }
}

export default sendForm;