class Cliente {
  nome;
  rg;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "André";
cliente1.rg = 431516455;
cliente1.cpf = 47134513041;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.rg = 406126781;
cliente2.cpf = 59463625003;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = "Roberto";
cliente3.rg = 287994107;
cliente3.cpf = 81635301033;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1, cliente2, cliente3);
