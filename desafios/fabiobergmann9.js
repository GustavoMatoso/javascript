/* 
    Desafios Javascript básico 9 - YOUTUBE

    Crie uma função que receba um array (a) e um valor (b) como parâmetro.  A função deve remover todas as ocorrências de (b) e retornar o array filtrado
*/

function myfunction(a,b){
    return a.splice(a.indexOf(b))
}


console.log(myfunction([1,2,3],2)); // [1,3]
console.log(myfunction([1,2,"3"],"3")); // [1,2]
console.log(myfunction(["1", false, 2, "3"],false));// [1,2,3]
console.log(myfunction([5,1,2,5,3,5],5));//[1,2,3]