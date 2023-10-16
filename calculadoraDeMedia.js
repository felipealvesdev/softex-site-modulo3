const nota1 = parseFloat(prompt("Digite a primeira nota:")); // float
const nota2 = parseFloat(prompt("Digite a segunda nota:")); // float
const nota3 = parseFloat(prompt("Digite a terceira nota:")); // float

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média é : ${media.toFixed(2)}`);