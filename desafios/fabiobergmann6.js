/* 
    Desafios Javascript básico 6 - YOUTUBE

    criar função que retorne TRUE se o numero for par e FALSE se o numero for impar  

*/

function minhafuncao(numero=0){

    return numero % 2 === 0


}

console.log(minhafuncao(12)); //true
console.log(minhafuncao(-10)); //true
console.log(minhafuncao(7)); //false
console.log(minhafuncao(-41)); //false