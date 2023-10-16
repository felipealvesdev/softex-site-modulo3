class Caneta {
    constructor(marca, cor, tamanho) {
        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho;
    }
    escrever(texto) {
        return texto;
    }
    rabiscar() {
        return "Rabiscando"
    }
    reporTinta() {
        return console.log("Tinta reposta");
    }
}

class caneca {
    constructor(marca, cor, tamanho) {
        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho;
    }
    mostrarMarca() {
        return this.marca;
    }
    mostrarCor() {
        return this.cor;
    }
    mostrarTamanho() {
        return this.tamanho;
    }
}

class aluno {
    constructor(nome, turma, turno){
        this.nome = nome;
        this.turma = turma;
        this.turno = turno;
    }

    falar() {
        return console.log(`${this.nome} está falando...`);
    }
    acenar() {
        return console.log(`${this.nome} está acenando...`);
    }
    perguntar(duvida) {
        return console.log(`${this.nome} está perguntando: ${duvida}`);
    }
}

class cachorro {
    constructor(nome, raca, tamanho){
        this.nome = nome;
        this.raca = raca;
        this.tamanho = tamanho;
    }

    latir() {
        return console.log(`${this.nome} está latindo: au au au.`);
    }
    mostrarRacaDoCachorro() {
        return this.raca;
    }
    mostrarTamanhoDoCachorro() {
        return this.tamanho;
    }
}