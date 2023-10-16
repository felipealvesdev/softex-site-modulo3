const nome = prompt("Digite seu nome:"); // String
const salario = parseFloat(prompt("Digite seu salário:")); // Float
const idade = parseInt(prompt("Digite sua idade:")) // Int
let possuiDiploma = parseInt(prompt("Possui diploma? Sim(1) / Não(0)")); // boolean


if(possuiDiploma === 1){
    possuiDiploma = "Sim";
}else if(possuiDiploma === 0){
    possuiDiploma = "Não";
} else{
    possuiDiploma = "Erro"
}

alert(`Exibindo todas as informações -> Nome: ${nome}, salário: ${salario}, idade: ${idade}, possui diploma: ${possuiDiploma}.`);
