const btn = document.getElementById('btn');
const messageProgram = document.getElementById('count');

let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;
    messageProgram.innerText = clickCount;
})