let cube = document.querySelector('.cube');

cube.addEventListener('click', () => {
    if (cube.className === 'cube') {
        cube.className = 'rotate';
    } else {
        cube.className = 'cube';
    }
})

cube.addEventListener('scroll', () => {
    if (cube.className === 'cube') {
        cube.className = 'fade';
    } else {
        cube.className = 'cube';
    }
})