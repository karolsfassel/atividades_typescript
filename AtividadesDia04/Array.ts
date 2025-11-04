import readlineSync = require("readline-sync");

const cores: Array<string> = new Array<string>(5).fill("");

for (let i = 0; i < 5; i++) {
  cores[i] = readlineSync.question(`Digite a ${i + 1} cor: `);
}

console.log("\nCores digitadas:");
console.log(cores.join('\n'));

console.log("\nCores em ordem alfabética:");
console.log([...cores].sort().join('\n'));

//[...cores] copia o que tem em cores
//.sort() ordena
//.join() permite colocar um texto, no exemplo, \n


