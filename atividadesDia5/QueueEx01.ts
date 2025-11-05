import * as readlineSync from 'readline-sync';

import { Queue } from './Queue';


const clientes = new Queue<any>(); //cria a fila clientes
let continua: boolean = true;

let nome: string;

while (continua) {
  console.log("***********************************************");
  console.log("1 Adicionar Cliente na Fila");
  console.log("2 Listar todos os Clientes");
  console.log("3 Retirar Cliente da Fila");
  console.log("0 Sair");
  console.log("***********************************************");

  let opcao = readlineSync.questionInt("Entre com a opcao desejada: ");


  switch (opcao) {
    case 1:
      let nome = readlineSync.question("Digite o nome do cliente: ");
      clientes.enqueue(nome); //adiciona
      console.log("***********************************************");
      console.log("FILA:\n");
      clientes.printQueue();
       console.log("Cliente adicionado!\n");
      break;

    case 2:
      console.log("Lista de Clientes:\n");
      clientes.printQueue(); //lista
      break;

    case 3:
    if (clientes.isEmpty()) {
    console.log("A fila está vazia. Nenhum cliente para retirar.");
  } else {
    const removido = clientes.dequeue();
    console.log(`Cliente retirado da lista: ${removido}`);
    console.log("***********************************************");
    console.log("FILA:\n");
    clientes.printQueue();
    console.log("O cliente foi chamado!\n");
  }
  break;


    case 0:
      continua = false; //não roda mais o menu
      console.log("Programa Finalizado!\n");
      break;

    default:
      console.log("Opcao invalida!");
  }
}
