const works = () => {
    const parentZone = document.querySelector('.works'),
          popup = document.createElement('div'),
          img = document.createElement('img');
    popup.classList.add('popup');
    popup.append(img);
    
    
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.display = 'none';

    parentZone.append(popup);
    
    parentZone.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        if (target && target.classList.contains('preview')) {
            popup.style.display = 'flex';

            const imgSrc = target.parentNode.getAttribute('href');
            img.src = imgSrc;
            
            
        }
        if (target === popup) {
            popup.style.display = 'none';
        }
        
    })
}

export default works;