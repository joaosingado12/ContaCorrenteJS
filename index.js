class Cliente{
    nome;
    cpf;
};

class ContaCorrente{
    agencia;
    _saldo = 0; 

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        } 
        return valor;
    }


    depositar(valor){
        if(valor>0){
            this._saldo += valor
        }
        return valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = 50903908867;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//Chamadas
const deposito = contaCorrenteRicardo.depositar(300)

contaCorrenteRicardo.sacar(50)

contaCorrenteRicardo.depositar(200)

console.log(deposito)

console.log(contaCorrenteRicardo._saldo)

