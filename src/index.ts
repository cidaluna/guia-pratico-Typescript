// Types var, let e const

// var: pode ser acessada de qualquer ponto do código
// Toda variável é elevada/movida (hositing) ao topo do seu contexto, antes da execução do código
// exemplo var 1
var languages: Array<string> = [];
languages.push("Typescript", "Java", "Teste 123");
console.log(languages);

// exemplo var 2
var msgfora = 'mensagem fora do if';
if(true){
    var msgdentro = 'msg dentro do if';
    console.log(msgdentro);
}
console.log(msgfora);
console.log(msgdentro);

// exemplo var 3
mensagem = 'conteúdo da mensagem já atribuido a uma variável que será criada e elevada ao topo';
console.log(mensagem);
var mensagem;

// let: funciona dentro do bloco em que foi declarada
let msgletfora = 'msg let fora';
if(true){
    let msgletdentro = 'msg let dentro do if';
    console.log(msgletdentro);
}
console.log(msgletfora);
console.log("Nao é possível chamar a msgletdentro fora do bloco onde ela foi criada!");

// const: declarar variáveis read-only, ou seja, nao pode ter o valor alterado (estado imutável)
const mensagemImutavel = 'MSG imutável 1';
console.log(mensagemImutavel);


// boolean
let ativo: boolean = true;
console.log(ativo);

// number
// No Typescript todos os valores numericos (floating, decimal, octal, hex) devem ser tipados como number
let octal: number = 0o745;
let binary: number = 0b1111;
let decimal: number = 34;
let hex: number = 0xf34d;
console.log("Octal: "+octal);
console.log("Binary: "+binary);
console.log("Decimal: "+decimal);
console.log("Hex: "+hex);


// string pode declarar com aspas simples ou aspas duplas
// template string `` usamos para concatenar valores
let nome: string = "Cida Luna";
let idade: number = 34;
let sentence: string = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(sentence);

// length verifica o tamanho da string
console.log("Tamanho da string: "+sentence.length);

// indexOf encontra a posicao de um valor (caracter) dentro da string, caso o elemento nao exista, retorna -1
console.log("Posicao da palavra meu: "+sentence.indexOf('meu'));
console.log("Posicao da palavra idade: "+sentence.indexOf('idade')); // retorna -1 porque a palavra idade é uma variável e não um valor dentro da string

// arrays
let numeros: number[] = [1,2,3];
let textos: string[] = ["exemplo 1", "exemplo 2", "exemplo 3"];
console.log(numeros);
console.log(textos);

// também podemos declarar arrays de outra forma
let outrosNumeros: Array<number> = [2,4,6];
let outrosTextos: Array<string> = ["string 2", "string 4", "string 6"];

outrosNumeros.push(8);
outrosTextos.push("string 8");
console.log(outrosNumeros);
console.log(outrosTextos);

// ReadyonlyArray<T> array que permite somente leitura, removendo os metodos push, pop, etc.
let numerosDaMega: ReadonlyArray<number> = [5,10,1,4,27,28];
console.log(numerosDaMega);
console.log(numerosDaMega.length);

// Tuple, as tuplas, aceitam diferentes tipos de dados
let lista: [string, number, string[]] = ["mercado", 22, ["salmao","arroz","batatas"]];
console.log("Imprimindo tupla: "+lista);

let listaAlunos: [nome: string, idade: number, email: string];
listaAlunos=["Maria", 40, "teste"];
listaAlunos.push("Joao", 99, "teste jão");
console.log(listaAlunos);

// enum permite atribuir valores predefinidos, podendo ser number, string ou heterogeneous
export enum DiaDaSemana{
    Segunda = 1,
    Terca = "Terça-feira",
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sábado = 6,
    Domingo = 7
}

let dia = DiaDaSemana[5];
console.log(dia);
let outroDia = DiaDaSemana.Terca;
console.log(outroDia);

// Union permite combinar um ou mais tipos, a mesma variável
let minhaVar: (string | number | boolean | string[])
minhaVar = "Cida";
console.log(minhaVar);
minhaVar = 99;
console.log(minhaVar);
minhaVar = true;
console.log(minhaVar);
minhaVar = ["string 1", "string 2", "string 3"];
console.log(minhaVar);

var arr: (number[] | string[]);
var i: number;
arr = ["teste A", "teste B", "teste C", "teste D"];

for(i = 0; i < arr.length; i ++){
    console.log(arr[i]);
}

// Union passado no parâmetro da função
function deleteAluno(aluno: string | string[]){
    if(typeof aluno == "string"){ // deletar um registro (typeof retorna o tipo do objeto)
        console.log(aluno, "deletado");
    }else{
        var i;
        for (i=0; i< aluno.length;i++){ // deletar mais de um rgistro
            console.log(aluno[i], "deletado");
        }
    }
}

var alunos: string[] = ["Joao", "Pedro", "Jeferson", "Luana", "Priscila"];
deleteAluno(alunos);

let outraVariavel: string | number | boolean = 13;
console.log("O tipo dessa variável é: ",typeof(outraVariavel));

// Exemplo do uso de instanceOf
interface exemploInterfaceZ{ x(): string }

class A implements exemploInterfaceZ{
    x(): string{
        throw new Error("Method not implemented.")
    }
}

class B implements exemploInterfaceZ{
    x(): string{
        throw new Error("Method not implemented.")
    }
}

function exemploComInstanceOf(parametro: exemploInterfaceZ){
    if(parametro instanceof A){
        console.log("Sou da classe A.");
    }else if(parametro instanceof B){
        console.log("Sou da classe B.")
    }
}

exemploComInstanceOf(new A());

// Tipo any, utilizado por exemplo, quando for preciso acessar uma API de terceiros e desconhece a estrutura.
let minhaVariavelAny: any = "Teste any";
minhaVariavelAny = 12;
minhaVariavelAny = true;
console.log(minhaVariavelAny);

// Tipando funções
// função recebe 2 parametros number e retorna uma string
function calcula(primeiroNumero: number, segundoNumero: number): string{
    return `Resultado: ${primeiroNumero + segundoNumero}`;
}

let soma: string;
soma = calcula(10,20);
console.log(soma);

// Void passa para o compilador que aquela funcao nao tera um retorno.
function log(msg: string ): void {
    console.log(`Função sem retorno: ${msg}`);
}  
log("Teste Console Log");

// Never
function verificandoTipo(x: string | number): boolean{
    if(typeof x === "string"){
        return true;
    }else if(typeof x === "number"){
        return false;
    }
    return openFail("Esse método não aceita esse tipo de type! ");
}

function openFail(message: string): never{
    throw new Error(message);
}

console.log(verificandoTipo("Teste string"));
console.log(verificandoTipo(199));

// Type assertions funciona como o cast, é possível alterar o tipo de uma variável sem lançar Exception
function myTypeAssertions(codigoAny: any){
    let codigoNumber: number = <number>codigoAny;
    return codigoNumber * 5;
}
console.log(myTypeAssertions(10));


interface Student{
    nome: string,
    codigo: number
}

let estudante = <Student>{}
estudante.nome = "Luna";
estudante.codigo = 2022;
console.log(estudante);