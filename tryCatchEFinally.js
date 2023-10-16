function dividir(numerador, denominador) {
    if(denominador === 0){
        throw new Error("Divisao por zero nao permitida");
    }
    resultado = numerador / denominador;
    return resultado;
}

const numerador = 10;
const denominador = 0;

try{
    const resultado = dividir(numerador, denominador);
    console.log(resultado);
}catch(err) {
    console.log("Erro aconteceu:" + err);
}finally{
    console.log("Programa encerrado.")
}