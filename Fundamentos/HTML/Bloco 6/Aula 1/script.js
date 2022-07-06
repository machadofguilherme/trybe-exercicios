// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

INPUT_TEXT.addEventListener('click', (e) => {
    e.preventDefault();
})

INPUT_TEXT.addEventListener('keypress', (e) => {
    if (e.key !== 'a') {
        e.preventDefault();
    }
})

INPUT_CHECKBOX.addEventListener('click', (e) => {
    e.preventDefault();
})