let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//  console.log('Bem-vinda, ' + info.personagem);

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'Sim';
//console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (content in info) {
//     console.log(content);
// }

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for (content in info) {
//     console.log(info[content]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let patos = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    "Ambos recorrentes": 'Sim',
}

for (objects in patos, info) {
    let textPrinting = info[objects] + ' e ' + patos[objects];
    if (patos[objects] === undefined) {
        textPrinting = 'Ambos recorrentes';
    }
    console.log(textPrinting);
}