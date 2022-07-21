const newEmployees = () => {
  const employees = {
    id1: returnPerson('Pedro Guerra'),
    id2: returnPerson('Luiza Drumond'),
    id3: returnPerson('Carla Paiva'),
  }
  return employees;
};

const returnPerson = (name) => {
  console.log( { nomeCompleto: name, email: `${name}@trybe.com`} );
}

newEmployees();