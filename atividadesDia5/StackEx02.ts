import {Stack} from "./Stack";

import * as readlineSync from 'readline-sync';


const livros = new Stack<string>();


let continua: boolean = true;

let nome: string;

while (continua) {
  console.log("***********************************************");
  console.log("1: Adicionar um novo livro na pilha");
  console.log("2: Listar todos os livros da Pilha");
  console.log("3: Retirar um livro da pilha");
  console.log("0 Sair");
  console.log("***********************************************");

  let opcao = readlineSync.questionInt("Entre com a opcao desejada: ");


  switch (opcao) {
    case 1:
      let nome = readlineSync.question("Digite o nome do livro: ");
      livros.push(nome); //adiciona
      console.log("***********************************************");
      console.log("PILHA:\n");
      livros.printStack();
      console.log("Livro adicionado!\n");
      break;

   
    case 2:
  if (livros.isEmpty()) {
    console.log("A pilha de livros está vazia.");
  } else {
    console.log("Lista de livros:\n");
    livros.printStack();
  }
  break;



    case 3:
    if (livros.isEmpty()) {
    console.log("A pilha está vazia. Nenhum livro para retirar.");
  } else {
    const removido = livros.pop();
    console.log(`Livro retirado da pilha: ${removido}`);
    console.log("***********************************************");
    console.log("PILHA:\n");
    livros.printStack();
    console.log("Um Livro foi retirado da pilha!\n");
  }
  break;

    case 0:
      continua = false; //não roda mais o menu
      console.log("Programa Finalizado!");
      break;

    default:
      console.log("Opcao invalida!");
  }
}
