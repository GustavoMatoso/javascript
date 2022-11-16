/* 
    Desafios Javascript básico 12 - YOUTUBE

    Crie uma função que receba um array (a) e um numero (b )como parametros.
    Faça a soma de todos os elementos do array com valor MAIOR do que b.
    Retorne a soma.
 
 
   for ([inicialização]; [condição]; [expressão final]){
   declaração)}
   
*/


function myfunction(a,b){
    var array = []
   a = a.sort().reverse()
    for( i=0 ; array.length < a.length && a[i] > b; i++){
        array.push(a[i])}
    
    return array;

}


console.log(myfunction([1,2,3,4,5,6,7,8], 3));// 30
console.log(myfunction([-14,-12,-5,4,-4], -5));// 0
console.log(myfunction([33,45,88,105,111], 99)); //216