//Sintaxe para classes privadas em java Script https://github.com/tc39/proposal-class-fields#private-fields

import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("André", 431516455, 47134513041);
const cliente2 = new Cliente("Alice", 406126781, 59463625003);
const cliente3 = new Cliente("Roberto", 287994107, 81635301033);

const contaCorrenteAndre = new contaCorrente(cliente1, 1001);
contaCorrenteAndre.depositar(500);

const contaCorrenteAlice = new contaCorrente(cliente2, 1001);

let valor = 200;
contaCorrenteAndre.transferir(200, contaCorrenteAlice);

const contaCorrenteRoberto = new contaCorrente(cliente3, 1001);
contaCorrenteRoberto.depositar(3000);

console.log(contaCorrente.numeroDeContas);
