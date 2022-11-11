/* 
    Desafios Javascript básico 8 - YOUTUBE

    criar função receba um array por parâmetro e remove os 3 primeiros elementos do array.

    Caso o array tenha menos de 3 elementos, retornar array vazio.
*/

function myfunction(a){
    
    return a.length > 3 ? a.slice(3) : []
}



console.log(myfunction([1,2,3,4,5]));// [4,5]
console.log(myfunction([5,4,3,2,1,0]));// [2,1,0]
console.log(myfunction([10,20,30]));// []
console.log(myfunction([99,100]));// []

 