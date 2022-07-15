let biggerWord = undefined;
let biggerIndex = undefined;
let wordList = [];

const longestWord = (word) => {

  biggerWord = word.split(" ");

  for (let i = 0; i < biggerWord.length; i += 1) {
    wordList.push(biggerWord[i].length);
    biggerIndex = wordList.sort((a, b) => a - b);
  }

  biggerIndex = Math.max(...biggerIndex);

  for (x of biggerWord) {
    if (biggerIndex === x.length) {
      console.log(x);
    }
  }

};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'
