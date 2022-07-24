// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let compare;
let total = 0;

const totalScore = (correct, students) => {
  for (let i = 0; i < correct.length; i += 1) {
    compare = correct[i];
    for (let i2 = 0; i2 < students.length; i2 += 1) {
      if (compare === students[i2]) {
        total += 1;
      } else if (compare !== students[i2]) {
        total -= 1;
      } else {
        total = Number(total);
      }
    }
  }
  console.log(total);
}

totalScore(RIGHT_ANSWERS, STUDENT_ANSWERS);