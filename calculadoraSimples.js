const firstNumber = parseFloat(prompt("Digite um número:"));
const mathOperation = prompt("Digite a operação matemática desejada: Soma(+); Subtração(-); Multiplicação(*), divisão(/), potenciação(**) ou radiciação(**1/)");
const secondNumber = parseFloat(prompt("Digite o segundo número"));
let result;

switch(mathOperation){
    case("+"):
        result = firstNumber + secondNumber;
        alert(`Resultado de ${firstNumber}+${secondNumber}= ${result}`);
        break;
    case("-"):
        result = firstNumber - secondNumber;
        alert(`Resultado de ${firstNumber}-${secondNumber}= ${result}`);
        break;
    case("*"):
        result = firstNumber * secondNumber;
        alert(`Resultado de ${firstNumber}*${secondNumber}= ${result}`);
        break;
    case("/"):
        result = firstNumber / secondNumber;
        alert(`Resultado de ${firstNumber}/${secondNumber}= ${result} e resto = ${firstNumber % secondNumber}`);
        break;
    case("**"):
        result = firstNumber ** secondNumber;
        alert(`Resultado de ${firstNumber}**${secondNumber}= ${result}`);
        break;
    case("**1/"):
        result = firstNumber ** (1/secondNumber);
        alert(`Resultado de ${firstNumber}(**1/(${secondNumber}))= ${result}`);
        break;
    default:
        alert("Ocorreu algum erro. Por favor, reinicie a página.");
}