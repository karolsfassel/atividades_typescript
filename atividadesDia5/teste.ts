import * as readlineSync from 'readline-sync';


import { Queue } from './Queue';

const clientes = new Queue<any>();
let continua: boolean = true;

let nome: string;

while (continua) {
  console.log("***********************************************");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  console.log("***********************************************");

  let opcao = readlineSync.questionInt("Digite um numero: ");


  switch (opcao) {
    case 1:
      let nome = readlineSync.question("Digite o nome do cliente: ");
      clientes.enqueue(nome);
      break;

    case 2:
      console.log("Lista de Clientes:\n");
      clientes.printQueue();
      break;

    case 3:
      console.log(`Cliente retirado da lista: ${clientes.dequeue()}`);
      break;

    case 0:
      continua = false;
      break;

    default:
      console.log("Opcao invalida!");
  }
}
