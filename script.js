const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1000)
}

const loop = setInterval() =

document.addEventListener('keydown', jump);