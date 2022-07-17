// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

let savedId;

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if(professionalBoard[i].id === id) {
      savedId = professionalBoard[i].id;
      return `
      Nome completo: ${professionalBoard[i].firstName} ${professionalBoard[i].lastName}
      Especialidades: ${professionalBoard[i].specialities}`;
    }

    if (!professionalBoard[i].firstName || !professionalBoard[i].lastName || !professionalBoard[i].specialities) {
      return `Informação indisponível`;
    }
    if (professionalBoard[i].id !== id) {
      return `ID não identificada`;
    }
  }
};

module.exports = { professionalBoard, searchEmployee };