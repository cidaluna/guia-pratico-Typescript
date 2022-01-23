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

