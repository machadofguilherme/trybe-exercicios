const botaoEnviar = document.getElementById("botao-enviar");
const botaoApagar = document.getElementById("botao-apagar");
const nome = document.querySelector("#formulario-nome input");
const eMail = document.querySelector("#formulario-email input");
const destino = document.querySelectorAll(".formulario-destino input");
const checagem = document.getElementById("formulario-check");
const data = document.getElementById("data");
const texto = document.getElementById("texto");
const promocao = document.getElementById("promocao");
const concordo = document.getElementById("concordo");

botaoEnviar.addEventListener("click", (e) => {
  e.preventDefault();
});

botaoApagar.addEventListener("click", (e) => {
  e.preventDefault();
  nome.value = "";
  eMail.value = "";
  texto.value = "";
  data.value = "";
  promocao.checked = "";
  concordo.checked = "";

  for (lugares of destino) {
    lugares.checked = '';
  }

});