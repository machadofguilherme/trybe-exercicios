// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (joke) => {
  const phrase = document.getElementById('jokeContainer');
  const body = document.getElementsByTagName('body');

  phrase.innerText = joke;
  body.appendChild(phrase);
}

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke);
  showJoke(joke);
};

window.onload = () => fetchJoke();
