let newPhrase = undefined;

const returnString = (string) => {
  const skills = ["CSS", "JavaScript", "HTML"];

  console.log(`${string}
  Minhas três principais habilidades são:
  1. ${skills[0]}
  2. ${skills[1]}
  3. ${skills[2]}`);
};

const replaceX = (name) => {
  const phrase = "Tryber x aqui!";

  newPhrase = phrase.replace("x", name);
  returnString(newPhrase);
};

replaceX("Guilherme");
