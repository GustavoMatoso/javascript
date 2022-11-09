/* 
Desafios Javascript básico 3 - YOUTUBE

ESCREVA UMA FUNÇÃO QUE RECEBA 6 PARAMETROS (A,B,C,D,E,F)
FAÇA SOMA DE A COM B
RESULTADO DA SOMA, SUBTRAIA COM C
RESULTADO DA SUBTRAÇÃO, MULTIPLIQUE POR D E FAÇA DIVISÃO POR E
E FINALIZE , FAÇA O RESULTADO ELEVADO A PORTÊNCIA DE F
*/

function minhafuncao(a=0,b=0,c=0,d=0,e=0,f=0){
    /* a += b;
    a -= c;
    a *= d;
    a /= e ;
    a **= f ;
    */
    
    return (((a + b) - c )* d / e)** f ;

}
console.log(minhafuncao(6,5,4,3,2,1))
console.log(minhafuncao(6,2,1,4,2,3))
console.log(minhafuncao(2,3,6,4,2,3))