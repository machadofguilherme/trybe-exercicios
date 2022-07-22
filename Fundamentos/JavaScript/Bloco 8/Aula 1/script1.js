let wakeUp;
let takingCoffe;
let sleep;

const callback = (message) => console.log(message);
const doingThings = (message, callback) => {
    if (wakeUp) {
      message = 'Acordar!!';
      callback(message); 
    } else if (takingCoffe) {
      message = 'Tomar café!!';
      callback(message);
    } else if (sleep) {
      message = 'Dormir!!';
      callback(message); 
    }
};

doingThings(sleep, callback);
