import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = 50903908867;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2






//Chamadas
/*const deposito = contaCorrenteRicardo.depositar(300)

contaCorrenteRicardo.sacar(50)

contaCorrenteRicardo.depositar(200)

console.log(deposito)
*/

contaCorrenteRicardo.depositar(500)
conta2.depositar(500)
conta2.agencia = 1001
console.log(contaCorrenteRicardo._saldo)

console.log(contaCorrenteRicardo)

console.log(conta2)

let valorTrans = 200
conta2.transferir(valorTrans, contaCorrenteRicardo)

console.log(contaCorrenteRicardo)

console.log(conta2)

console.log(conta2.cliente)

console.log(conta2.saldo)
