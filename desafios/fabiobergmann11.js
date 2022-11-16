/* 
    Desafios Javascript básico 11 - YOUTUBE

    Crie uma função que receba  dois arrays como parametros.
    Retorne um unico array contendo os valores dos dois arrays concatenados, removendo valores duplicados caro existem. 

    USO DE SET E DE SPREAD OPERATOR
*/



function myfunction(a,b){

    let concatenados = a.concat(b);
    const numerosSemRepeticao = [...new Set(concatenados)];
    return numerosSemRepeticao;




}



console.log(myfunction([1,2,3] , [3,4,5])); //1,2,3,4,5
console.log(myfunction([6,7] , [8,9])); //6,7,8,9
console.log(myfunction([-2,-1,0,1,2] , [-1,1,2,3]));// -2, -1, 0, 1, 2, 3
