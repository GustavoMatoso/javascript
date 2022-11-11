/* 
    Desafios Javascript básico 7 - YOUTUBE

    criar função receba duas strings (a,b) como parametro e retorna o numero de vezes que a string a é utilizade dentro de b
*/

function myfunction(a,b){
    return b.toLowerCase().split(a.toLowerCase()).length-1
    
}




console.log(myfunction("a", "Quantas vezes o valor de 'a' ocorre aqui?" )) //5
console.log(myfunction("as", "Quantas vezes o valor de 'a' ocorre aqui?" )) //1
console.log(myfunction("q", "Quantas vezes o valor de 'a' ocorre aqui?" )) //2