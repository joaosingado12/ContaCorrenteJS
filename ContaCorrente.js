import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    _agencia;
    _cliente;
    _saldo = 0; 

    get agencia(){
        return this.agencia
    }

    get saldo(){
        return this._saldo
    }
     
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    };

    get cliente(){
        return this._cliente;
    }

    constructor(cliente, agencia){
        this._cliente = cliente;
        this._agencia = agencia;
        ContaCorrente.numeroDeContas +=1;

    }

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
    transferir(valor, conta){
        if(this._agencia === conta._agencia){
            if(valor>0){
                const valorSacado = this.sacar(valor);
                conta.depositar(valorSacado);
            }
        }
    }
}
