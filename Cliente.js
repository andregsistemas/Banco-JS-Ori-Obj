export class Cliente {
  nome;
  _rg;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  get rg() {
    return this._rg;
  }

  constructor(nome, rg, cpf) {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
  }
}
