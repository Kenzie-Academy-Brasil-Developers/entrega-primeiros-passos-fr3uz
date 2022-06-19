const refrigerante = 12;
const macarrao = 7;
const ervilha = 7;
const arroz = 23;
const feijao = 12;
const vinho = 70;

const totalDaCompra = (3*refrigerante + 4*macarrao  + 3*ervilha  + 3*arroz  + 2*feijao  + 3*vinho );
const totalDaCompra2 = (3*refrigerante  + 4*macarrao  + 3*ervilha  + 3*arroz  + 2*feijao);
console.log("O total da compra foi: R$ " + totalDaCompra);

var conta = (totalDaCompra2 / 2)
var conta2 = (conta + 3*vinho)

if (totalDaCompra % 2 == 0) {
    
    console.log(" Deu par! Um deles pagará " + conta + " e o outro " + conta2 );
}
else {
    console.log(" Deu ímpar! Cada um pagará " + totalDaCompra / 2);
}

let precoRefrigerante = refrigerante
let quantidadeRefrigerante = parseInt(prompt("Quantas garrafas de refrigerante?"))

let total1 =precoRefrigerante *quantidadeRefrigerante

let precoMacarrao = macarrao
let quantidadeMacarrao = parseInt(prompt("Quantos pacotes de macarrão?"))

let total2 = precoMacarrao * quantidadeMacarrao

let precoErvilha = ervilha
let quantidadeErvilha = parseInt(prompt("Quantas latas de ervilha?"))

let total3 = precoErvilha * quantidadeErvilha

let precoArroz = arroz
let quantidadeArroz = parseInt(prompt("Quantos pacotes de arroz?"))

let total4 = precoArroz * quantidadeArroz

let precoFeijao = feijao
let quantidadeFeijao = parseInt(prompt("Quantos pacotes de feijão?"))

let total5 = precoFeijao * quantidadeFeijao

let precoVinho = vinho
let quantidadeVinho = parseInt(prompt("Quantas garrafas de vinho?"))

let total6 = precoVinho * quantidadeVinho

let superTotal = (total1 + total2 + total3 + total4 + total5 + total6);

let superTotal2 = (total1 + total2 + total3 + total4 + total5);

var valor = (superTotal2 / 2);
var valor2 = (valor / 2);

alert(`Valor total da compra: ${superTotal}`)

if (superTotal % 2 == 0) {

    alert(`Um deverá pagar ${valor} E o outro deverá pagar ${superTotal - valor}`)
}
else {
    alert(`Cada um deverá pagar: ${superTotal / 2}`)
}
