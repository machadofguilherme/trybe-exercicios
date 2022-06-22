let pecaXadrez = 'torre';

if (pecaXadrez.toLowerCase() === 'rei' || pecaXadrez.toLowerCase() === 'dama') {
    console.log('Qualquer lugar.');
} else if (pecaXadrez.toLowerCase() === 'torre') {
    console.log('Linha reta.');
} else if (pecaXadrez.toLowerCase() === 'bispo') {
    console.log('Diagonal.');
} else if (pecaXadrez.toLowerCase() === 'cavalo') {
    console.log('Horizontal e vertical.');
} else if (pecaXadrez.toLowerCase() === 'peão') {
    console.log('Para frente.');
}