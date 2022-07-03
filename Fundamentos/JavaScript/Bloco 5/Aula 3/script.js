function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

let numbersWeek = document.querySelector("#days");
let newDays;
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

window.onload = () => {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    newDays = document.createElement("li");
    newDays.classList.add("day");

    if (
      decemberDaysList[index] === 31 ||
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25
    ) {
      newDays.classList.add("holiday");
    }
    if (
      decemberDaysList[index] === 4 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18 ||
      decemberDaysList[index] === 25
    ) {
      newDays.classList.add("friday");
    }

    newDays.innerText = decemberDaysList[index];
    numbersWeek.appendChild(newDays);
  }
  createFridayBtn();
};

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

const btnContainer = document.querySelector(".buttons-container");
let btn = document.createElement("button");

function createBtn(content) {
  btn.id = "btn-holiday";
  btn.innerText = content;
  btnContainer.appendChild(btn);
}

createBtn("Feriados");

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

let bgHoliday = document.getElementsByClassName("holiday");

btn.addEventListener("click", () => {
  if (
    bgHoliday[0].style.backgroundColor === "lightgreen" ||
    bgHoliday[0].style.backgroundColor === "lightgreen" ||
    bgHoliday[2].style.backgroundColor === "lightgreen"
  ) {
    bgHoliday[0].style.backgroundColor = "rgb(238,238,238)";
    bgHoliday[1].style.backgroundColor = "rgb(238,238,238)";
    bgHoliday[2].style.backgroundColor = "rgb(238,238,238)";
  } else {
    bgHoliday[0].style.backgroundColor = "lightgreen";
    bgHoliday[1].style.backgroundColor = "lightgreen";
    bgHoliday[2].style.backgroundColor = "lightgreen";
  }
});

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

let fridayBtn = document.createElement("button");

function createFridayBtn() {
  fridayBtn.id = "btn-friday";
  fridayBtn.innerText = "Sexta-feira";
  btnContainer.appendChild(fridayBtn);
}

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

fridayBtn.addEventListener("click", () => {
  let fridayDay = document.querySelectorAll(".friday");

  if (
    fridayDay[0].innerText === "Sextou!" ||
    fridayDay[1].innerText === "Sextou!" ||
    fridayDay[2].innerText === "Sextou!" ||
    fridayDay[3].innerText === "Sextou!"
  ) {
    fridayDay[0].innerText = 4;
    fridayDay[1].innerText = 11;
    fridayDay[2].innerText = 18;
    fridayDay[3].innerText = 25;
  } else {
    fridayDay[0].innerText = "Sextou!";
    fridayDay[1].innerText = "Sextou!";
    fridayDay[2].innerText = "Sextou!";
    fridayDay[3].innerText = "Sextou!";
  }
});

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

numbersWeek.addEventListener('mouseover', (e) => {
  e.target.style.fontSize = '22px';
});

numbersWeek.addEventListener('mouseout', (e) => {
  e.target.style.fontSize = '20px';
});

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const taskBtn = document.querySelector('#btn-add');
const taskInput = document.querySelector('#task-input');
const myTasks = document.querySelector('.my-tasks');
let local = undefined;

taskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let task = document.createElement('span');
  if (task.length > 0) {
    task.innerText += taskInput.value;
  }
  task.style.display = 'block';
  task.innerText = taskInput.value;
  local = localStorage.setItem('task', taskInput.value);
  myTasks.appendChild(task);
  taskInput.value = '';
});