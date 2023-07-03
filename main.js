// Programa que mostra a tabuada desejada (as três principais operações) para o número desejado.

// Menu
var option = 0;
var num = 0;

function showMenu() {
  console.log('Olá, usuário!\n\
              Qual operação você deseja?\n\
              \n\
              1. Adição\n\
              2. Subtração\n\
              3. Multiplicação\n\
              4. Sair');
  option = prompt('Digite a opção desejada: ');
  num = parseInt(prompt('Digite o número (de 0 a 10) que deseja ver a tabuada: '));
}

// Seleção da operação e criação da tabuada
function mathTable(t, n) {
  if (option == 1 || option === 'Adição' || option === 'adição') {
    for (i = 1; i <= 10; i++) {
      let op = num + i;
      console.log(`${num} + ${i} = ${op}`);
    }
  } else if (option == 2 || option === 'Subtração' || option === 'subtração') {
    for (i = 1; i <= 10; i++) {
      let op = num - i;
      console.log(`${num} - ${i} = ${op}`);
    }
  } else if (option == 3 || option === 'Multiplicação' || option === 'multiplicação') {
    for (i = 1; i <= 10; i++) {
      let op = num * i;
      console.log(`${num} * ${i} = ${op}`);
    }
  } else if (option == 4 || option === 'Sair' || option === 'sair') {
    return;
  } else {
    console.log('Por favor, selecione uma opção válida.');
    start();
  }
}

// Uso das funções
function start() {
  showMenu();
  mathTable(option, num);
}

start();
