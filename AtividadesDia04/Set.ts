import readlineSync = require("readline-sync");

const numeros = new Set<number>();

for (let i = 0; i < 10; i++) {
  const entrada = readlineSync.question(`Digite ${i+1} numero inteiro: `);
  numeros.add(Number(entrada)); 
}

console.log("\nNúmeros digitados em ordem crescente(dados do Set):");
console.log([...numeros].sort((a, b) => a - b).join('\n'));