function tabs(parentSelector, blocksGroup, contentGroup,  activeClass, display = 'block' ) {
    const blocks = document.querySelectorAll(blocksGroup);
    const blocksContent = document.querySelectorAll(contentGroup);
    const parent = document.querySelector(parentSelector);

    function showContent(i=0) {
        blocks[i].classList.add(activeClass);
        blocksContent[i].style.display = display;
    }
    function hideContent() {
        blocksContent.forEach(block => {
            block.style.display = 'none';
        })
        blocks.forEach(block => {
            block.classList.remove(activeClass);
        })
    }

    hideContent();
    showContent();
    
    parent.addEventListener('click', (e) => {
        const target = e.target;
        blocks.forEach((block, num) => {
            if (target === block || target.parentNode === block) {
                hideContent();
                showContent(num);
            }
        })
    })
}

export default tabs;