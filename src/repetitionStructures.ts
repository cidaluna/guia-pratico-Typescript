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

// criando uma classe Conta, com seus atributos, construtor e metodos
export class Conta{
    private readonly _numeroDaConta: number; // utilizado o underline como convencao da comunidade para informar q eh privado
    titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number){
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }

    get numeroDaConta(): number{
        return this._numeroDaConta;
    }

    protected consultaSaldo(): number{
        return this._saldo;
    }

    protected adicionaSaldo(saldo:number): void{
        console.log(this._saldo + saldo);
    }

    protected sacarDoSaldo(valor:number): void{
        console.log(this._saldo -= valor);
    }

}

// Criando classe PF e classe PJ que herdam da classe Conta
class ContaPF extends Conta{
    cpf: number;

    constructor(cpf: number, titular: string, saldo: number){
        super(titular, saldo);
        this.cpf = cpf;
    }

    consultar(): string{
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    sacar(valor: number){
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()){
            this.sacarDoSaldo(valor);
        }
    }
}

// instanciando um objeto da classe  
const primeiraConta = new Conta("Luna",5000);
console.log("Imprime titular da conta: ",primeiraConta.titular);
console.log("Imprime numero da conta: ",primeiraConta.numeroDaConta); // gera cada vez que builda, apenas para teste

// busca por elemento atraves do seu indice
const list = [1, 2, 3, 4, 555];
const listLength = list.length;
const lastItemIndex = listLength - 1;
const lastItem = list[lastItemIndex]; // 555
console.log("List: "+list);
console.log("Tamanho da lista: ", listLength);
console.log("Indice: ", lastItemIndex); // indice inicia em zero, logo o ultimo índice é o quatro
console.log("Valor do ultimo elemento: ", lastItem);

// filtro
const listaA = [10, 20, 30, 40, 50];
const itemsLessThanTwenty = listaA.filter((item) => item < 20);
console.log("Busca listaA: "+itemsLessThanTwenty);


var employees = [{  
    id: 33,  
    name: 'Jhon',  
    salary: 30000,
    dept: "it"  
}, {  
    id: 21,  
    name: 'Mel',  
    salary: 35000,  
    dept: "hr"  
}, {  
    id: 56,  
    name: 'Rahul',  
    salary: 32000,  
    dept: "it"  
}, {  
    id: 104,  
    name: 'Zoe Jhon',  
    salary: 38000,  
    dept: "hr"  
}];   

// continuacao do uso do metodo filter
const searchEmployees = employees.filter(function(item){  
    return item.dept == "it";  
 });

 const searchName = employees.filter((item)=>{
    return item.name == "Jhon";
 });
 console.log("Lista de empregados: ", employees)
 console.log("Busca de empregados do depart it: ", searchEmployees);
 console.log("Busca pelo nome: ", searchName);

