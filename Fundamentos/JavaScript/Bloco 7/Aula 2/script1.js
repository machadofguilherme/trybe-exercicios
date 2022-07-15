// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const newKey = (object, key, value) => {
  key = 'fullName';
  value = `${data.name} ${data.lastName}`
  object[key] = value;
  console.log(object);
}

const data = {
  name: 'Guilherme',
  lastName: 'Machado',
  age: 30
}

newKey(data);