const postData = async (url, body) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: body
    });
    return await res.json();
}
const getData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return await res.json();
}
const preventWords = (selector) => {
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            input.value = input.value.replace(/\D/g, '');
        })
    })
}
const clearFields = () => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWitdh = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),  
    windowProfile = document.querySelectorAll('.checkbox');

 
    createListener(windowForm);
    createListener(windowWitdh);
    createListener(windowHeight);
    createListener(windowType);
    createListener(windowProfile);

    function createListener(elem) {
        elem.forEach((item, i) => {
            switch (item.nodeName) {
                case 'SPAN':
                    item.value = null;
                    break;
                case 'INPUT':
                    if (item.getAttribute('type') === 'checkbox') {
                        item.checked = false; 
                    } else {
                        item.value = null;
                    }
                    break;
                case 'SELECT':
                    item.value = i;
                    break;
            }
        })
        
    }
}


export {postData};
export {getData};
export {preventWords};
export {clearFields}; 
