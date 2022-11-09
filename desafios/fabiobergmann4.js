/* 
Desafios Javascript básico 4 - YOUTUBE

ESCREVA UMA FUNÇÃO QUE RECEBA DOIS PARAMETROS (TEXT,FLAG)
SE A FLAG FOI IGUAL A "start" , DEVE RETORNAR OS 3 PRIMEIROS CARACTERES DO PARAMETRO TEXT

SE A FLAG FOI IGUAL A "end" , DEVE RETORNAR OS 3 ULTIMOS CARACTERES DO PARAMETRO TEXT

SE O PARAMETRO TEXT TIVER MENOS DE 3 CARACTERES, APENAS DEVE RETORNAR O TEXT
*/

function minhafuncao(text,flag="start"){
 
    return text.length < 3 ? text : flag === "start" ? text.slice(0,3) : text.slice(-3)



    /*if(text.length < 3){
        return text;
    }
    if(flag == "start"){
        return text.slice(0,3)
    }
    if(flag == "end"){
        return text.slice(text.length-3)
    }
    */




    
}
console.log(minhafuncao("abcdefg","start"))
console.log(minhafuncao("abcdefg","end"))
console.log(minhafuncao("ab","end"))
console.log(minhafuncao("abcdefg"))

