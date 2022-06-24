// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let operandoFatorial = 10;

for (let index = 9; index >= 1; index -= 1) {
    console.log(operandoFatorial * index);
}