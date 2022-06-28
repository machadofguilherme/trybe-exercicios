const urgente = document.querySelectorAll('.emergency-tasks h3');
const naoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
const primeiroFundo = document.querySelector('.emergency-tasks div');
const segundoFundo = document.querySelector('.no-emergency-tasks div');
const footer = document.querySelector('#footer-container');

primeiroFundo.style.backgroundColor = 'palevioletred';
segundoFundo.style.backgroundColor = 'lightcoral';
footer.style.backgroundColor = 'darkgreen';
document.querySelector('#header-container').style.backgroundColor = 'mediumseagreen';

for (urgencia of urgente) {
    urgencia.style.backgroundColor = 'purple';
}

for (semurgencia of naoUrgente) {
    semurgencia.style.backgroundColor = 'black';
}