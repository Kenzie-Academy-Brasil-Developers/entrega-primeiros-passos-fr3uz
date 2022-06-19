const refrigerante = 11.99;
const macarrao = 6.99;
const ervilha = 6.99;
const arroz = 22.99;
const feijao = 11.89;
const vinho = 70.00;

const totalDaCompra = (refrigerante * 3 + macarrao * 4 + ervilha * 3 + arroz * 3 + feijao * 2 + vinho * 3);
const totalDaCompra2 = (refrigerante * 3 + macarrao * 4 + ervilha * 3 + arroz * 3 + feijao * 2);
console.log("O total da compra foi: R$ " + totalDaCompra);

if (totalDaCompra % 2 === 0) {
    
    console.log("Deu par! Por isso, cada um deverá pagar: R$ " + totalDaCompra2 /2);
}
else {
    console.log("Deu ímpar! Por isso, cada um deverá pagar: R$ " + totalDaCompra /2);
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

alert(`Valor total da compra: ${superTotal}`)

if (superTotal % 2 === 0) {

    alert(`Cada um deverá pagar: ${superTotal /2}`)

}

else {
    alert(`Cada um deverá pagar: ${superTotal2 /2}`)
}