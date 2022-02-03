// rodar: npm run build
// if - else if - else
let funcao = "admin";

if(funcao == "superuser"){
    console.log("Super usuário!");
}else if(funcao == "admin"){
    console.log("Administrador");
}else{
    console.log("Usuário comum");
}

// Operador condicional ternário
let perfil = "admin";
console.log(perfil == "superuser" ? "Super Usuário" : "Administrador");

// nullish coalescing = verifica se a variavel é null ou undefined, se for retorna valor padrao
let perfil2 = null;
console.log(perfil2 ?? 'Usuário comum.');

//switch
let posicao = "admin";

switch(posicao){
    case "superuser":
        console.log("Eh super usuario");
        break;
    case "manager":
        console.log("Eh gerente");
        break;
    case "admin":
        console.log("Eh admin");
        break;
    case "user":
        console.log("Eh usuario comum");
        break;
    default:
        console.log("Sem posicao");
        break;
}

// while enquanto
let idade = 10;

while(idade<=20){
    console.log(idade);
    idade++;
}

// laço for, percorrendo os valores do array
var linguagens = ["C#", "Java", "JavaScript", "Typescript"];
for(let i = 0; i <linguagens.length; i++){
    console.log(linguagens[i]);
}

// foreach é uma simplificação do operador for tambem para trabalhar em coleções de dados
var lista1 = ["AB", "CD", "EF", "GH"];
lista1.forEach(item =>{
    console.log(item);
})

// criando uma classe, com seus atributos, construtor e metodos
export class Conta{
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number){
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    consultaSaldo(): string{
        return `O saldo atual é: ${this.saldo}`;
    }

    adicionaSaldo(saldo:number): void{
        console.log(this.saldo + saldo);
    }

    sacarDoSaldo(valor:number): void{
        console.log(this.saldo -= valor);
    }

}

// instanciando um objeto da classe Conta
const primeiraConta = new Conta(123, "Luna",5000);
console.log(primeiraConta);

// chamando o metodo criado
console.log(primeiraConta.consultaSaldo());
primeiraConta.adicionaSaldo(1000);
primeiraConta.sacarDoSaldo(500);
