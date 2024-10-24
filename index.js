import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("ricardo", 50903908867);
const conta1 = new ContaCorrente(cliente1, 1001)

//crio uma intancia de Cliente
const cliente2 = new Cliente("Alice", 88822233309);

//atribuo minha instancia de Cliente na propriedade cliente da ContaCorrente (Estou usando verificações para saber se o valor que estou passando para meu atributo cliente é do tipo Cliente())
const conta2 = new ContaCorrente(cliente2, 1001);


//Chamadas
/*const deposito = conta1.depositar(300)

conta1.sacar(50)

conta1.depositar(200)

console.log(deposito)
*/


conta1.depositar(500)
conta2.depositar(500)

let valorTrans = 200
conta2.transferir(valorTrans, conta1)


console.log(conta1)

console.log(conta2)

console.log(ContaCorrente.numeroDeContas)

