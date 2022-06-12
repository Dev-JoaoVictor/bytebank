console.log("Trabalhando com condicionais");


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);//removendo um item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);//removendo um item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);


if (idadeComprador >= 18  ||  estaAcompanhada == true ) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1);//removendo um item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!")
}else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);
