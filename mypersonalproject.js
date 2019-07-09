const button = document.querySelector('button');
const container = document.querySelector('.container-wrapper');
const close = document.querySelector('.container-close')

button.addEventListener('click', () => {
    container.style.display = 'block';
})

close.addEventListener('click', () => {
    container.style.display = 'none'
})
container.addEventListener('click', () => {
    container.style.display = 'none'
})