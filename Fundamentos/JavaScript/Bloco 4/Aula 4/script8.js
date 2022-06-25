// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrome(word) {
     let wordReverse = word.split('').reverse().join('');
     if (word === wordReverse) {
        console.log(true);
     } else {
        console.log(false);
     }
}

palindrome('osso');