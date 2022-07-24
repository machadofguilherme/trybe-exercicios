// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

let wakeUp = 'Acordando!!';
let takingCoffe = 'Bora tomar café!!';
let sleep = 'Partiu dormir!!';

const callback = (message) => console.log(message);
const doingThings = (message, callback) => {
    if (wakeUp === message)      { callback(message); }
    if (takingCoffe === message) { callback(message); }
    if (sleep === message)       { callback(message); }
};

doingThings(takingCoffe, callback);
