let nota = 70;

if (nota > 100 || nota < 0) {
    console.log('Sua nota ainda não foi computada.');
} else if (nota >= 90) {
    console.log('Você recebeu A!');
} else if (nota >= 80) {
    console.log('Você recebeu B!');
} else if (nota >= 70) {
    console.log('Você recebeu C!');
} else if (nota >= 60) {
    console.log('Você recebeu D!');
} else if (nota >= 50) {
    console.log('Você recebeu E!');
} else if (nota < 50) {
    console.log('Você recebeu F!');
}