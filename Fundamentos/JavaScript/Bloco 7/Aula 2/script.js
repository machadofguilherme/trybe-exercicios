const btn = document.getElementById("btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let result = document.getElementById("result");
let response;

// Calcula e distribuí os resultados/erros.

const sumValues = () => {
  response = Number(num1.value) + Number(num2.value);
  try {
    // Solicita ao safeRun que execute os testes nescessários com os parâmetros.
    safeRun(num1, num2);
    // safeRun retorna os parâmetros após executar os testes.
    result.innerHTML = `A soma entre ${num1.value} e ${num2.value} é: ${response}`;
  } catch (error) {
    result.innerText = `${error.message}`;
  } finally {
    (num1.value = ""), (num2.value = "");
  }
};

// Chamadas de erro sob determinadas condições.

const safeRun = (num1, num2) => {
  if (isNaN(num1.value) || isNaN(num2.value)) {
    throw new Error("Valor incorreto. Utilize números!");
  } else if (num1.value == " " || num2.value == " ") {
    throw new Error("Não utilize espaços.");
  }
};

btn.addEventListener("click", sumValues);
