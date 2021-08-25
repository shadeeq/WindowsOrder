import {preventWords} from '../services/services';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWitdh = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    preventWords('#width');
    preventWords('#height');

    createListener('click', windowForm, 'form');
    createListener('input', windowWitdh, 'width');
    createListener('input', windowHeight, 'height');
    createListener('change', windowType, 'type');
    createListener('change', windowProfile, 'profile');

    function createListener(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'холодный' : state[prop] = 'теплый';
                            elem.forEach((elem, j) => {
                                elem.checked = false;
                                if (i === j) {
                                    elem.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            })
        })
    }
};

export default changeModalState;
