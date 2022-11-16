/* 
    Desafios Javascript básico 10 - YOUTUBE

    Crie uma função que receba um array (a) e uma flag (order) com valor padrao 'asc'. Caso o valor de order seja 'asc' retornar o array ordenado em ordem ascendente e caso seja 'desc'retornar em ordem descendente.
*/


function myfunction(a , order = "asc"){

    return order === "asc" ? a.sort() : a.sort().reverse(); 

  /*  if(order == "asc"){
        a = a.sort()
    } else{
        a.sort().reverse()
    }
    return a; 
    */
}


console.log(myfunction([2,3,1], "asc")); // [1,2,3]
console.log(myfunction([6,2,8,1,5], "desc")); //[8,6,5,2,1]
console.log(myfunction(["uva", "maçã", "laranja"], "asc"));// [laranja,maca,uva]
console.log(myfunction(["t","a","s","z", "m"])); // [ a , m , s , t ,z]