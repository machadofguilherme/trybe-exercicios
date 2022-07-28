const { trappistEnterprise, jobInfos, user } = require('./script2');

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

// "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const {
  person: { name, age, nationality },
  job: { profession, squad, squadInitials} 
} = trappistEnterprise;

const phrase = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.
I work as a ${profession} and my squad is ${squadInitials}-${squad}.`;

console.log(phrase);
