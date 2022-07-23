let wakeUp = 'Acordando!!';
let takingCoffe = 'Bora tomar café!!';
let sleep = 'Partiu dormir!!';

const callback = (message) => console.log(message);
const doingThings = (message, callback) => {
    if (wakeUp === message)      { callback(message); }
    if (takingCoffe === message) { callback(message); }
    if (sleep === message)       { callback(message); }
};

doingThings(takingCoffe, callback);
