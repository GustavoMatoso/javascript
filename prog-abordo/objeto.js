var pessoa = {
    nome: "Gustavo",
    idade: 23,
    instagram: "Gustavo.mth",
    estado: "Distrito Ferderal"
};

console.log(pessoa);


// Posso adicionar chaves mesmo apos a criação do objeto da seguinte forma:

pessoa.pais = "Brazil";

console.log(pessoa);

// Posso deletar chave com a palavra reservada Delete:

delete pessoa.pais;

console.log(pessoa)
// Como chaves posso colocar até mesmo arrays / funcoes / objetos: Exemplo com array

pessoa.hobby = ['Musculação', 'Viagem', 'Filmes'];

console.log(pessoa);
//exemplo com função

var pessoa2 = {
    digaOi(nome){
        return `Boa noite ${nome}`;
    }

};
console.log(pessoa2);
console.log(pessoa2.digaOi('Henrique'));

// Posso usar uma variável como chave de objeto:
var sexo = 'masculino';
var sobrenome = 'Matoso';
var pessoa3 = {
    sexo,
    sobrenome
};
console.log(pessoa3);

// A forma de juntar objetos em um  NOVO só é feito com (Object.assign({}, obj1,obj2,ob3,etc)... exemplo

var extraInfo = {
    apelido: "guuiginha da xj6",
    nacionalidade: "brasileiro"
};

var pessoaCompleta = Object.assign({}, pessoa3, extraInfo);
console.log(pessoaCompleta);

//Segunda opção resumida seria: var pessoaCompleta{
//                                           ...pessoa3        
//                                           ...extraInfo }

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Sempre que eu quiser por o nome de uma chave como o valor de uma variável, eu tenho que colocar o nome da chave entre colchetes:

var nomeVariavel = 'estado civil';
var pessoa4 = {
    nome: 'Gustavo Hms',
    [nomeVariavel]: 'Solteiro'
}
console.log(pessoa4)

