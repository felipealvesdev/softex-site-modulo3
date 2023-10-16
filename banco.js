class Banco {
    constructor(id, saldoInicial, tipoConta, agencia) {
        this.id = id;
        this.saldo = saldoInicial;
        this.tipoConta = tipoConta;
        this.agencia = agencia; 
    }

    verSaldo() {
     return this.saldo;   
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    verNumeroDaConta() {
        return this.id;
    }
}
