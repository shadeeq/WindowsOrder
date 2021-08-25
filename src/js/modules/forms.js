import {postData, preventWords, clearFields} from '../services/services';


function forms(state) {
    const forms = document.querySelectorAll('form');
    
    preventWords('input[name="user_phone"]');

    const formStates = {
        loading: 'Loading',
        error: 'Error',
        success: 'SUCCESS'
    }

    forms.forEach(form => {
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const status = document.createElement('div');
            status.textContent = formStates.loading;
            form.append(status);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/menu', json)
            .then(data => {
                console.log(data);
                status.textContent = formStates.success;
                console.log(state);
                for (const prop in state) {
                    delete state[prop];
                  }
                clearFields();
                setTimeout(() => {
                    status.textContent = '';
                }, 5000);
                
            })
            .catch(() => status.textContent = formStates.error)
            .finally(() => {
                
                form.reset();
            })
            
        })
    })

}

export default forms;

