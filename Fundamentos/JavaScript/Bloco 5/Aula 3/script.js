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