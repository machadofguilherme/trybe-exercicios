const custoProduto = 10.00 * 1.20;
const valorVenda = 20.00;

if (custoProduto < 0 || valorVenda < 0) {
    console.log('Não foi possível concluir a operação.');
} else {
    console.log( (valorVenda - custoProduto) * 1000);
}