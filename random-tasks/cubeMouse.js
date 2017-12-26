let cube = document.getElementById('cube');
window.document.addEventListener('mousemove', e => {
    
    let screenX = e.view.innerHeight;
    let screenY = e.view.innerWidth;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let cubeX = 0;
    let cubeY = 0;

    if (mouseX < screenX / 2 && mouseY < screenY / 2) {
        // console.log('top-left');
        cubeX = mouseX - 5;
        cubeY = mouseY - 5;
    }
    else if (mouseX < screenX / 2 && mouseY > screenY / 2) {
        // console.log('bottom-left');
        cubeX = mouseX - 5;
        cubeY = mouseY - 55;
    }
    else if (mouseX > screenX / 2 && mouseY < screenY / 2) {
        // console.log('top-right');
        cubeX = mouseX - 55;
        cubeY = mouseY - 5;
    }
    else if (mouseX > screenX / 2 && mouseY > screenY / 2) {
        // console.log('bottom-right');
        cubeX = mouseX - 55;
        cubeY = mouseY - 55;
    }

    cube.style.left = `${cubeX}px`;
    cube.style.top = `${cubeY}px`;
})

