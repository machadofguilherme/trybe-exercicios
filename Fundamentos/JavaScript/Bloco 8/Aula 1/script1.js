const message = (string) => console.log(string);

const doingThings = (call) => {
  if (call === 'wake')  { message('Acordando!!')       };
  if (call === 'coffe') { message('Bora tomar café!!') };
  if (call === 'sleep') { message('Partiu dormir!!')   };
};

doingThings('sleep');
