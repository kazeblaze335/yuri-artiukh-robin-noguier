let speed = 0;
let position = 0;
let block = document.querySelector('#block');

window.addEventListener('wheel', (e) => {
    speed += e.deltaY * 0.00062;
})

function raf() {
    console.log(position);
    position += speed;
    speed *= 0.8;
    block.style.transform = `translate(0, ${position*100}px)`;
    window.requestAnimationFrame(raf);
}

raf();