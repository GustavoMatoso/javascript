/* 
Desafios Javascript básico 5 - YOUTUBE

ESCREVA UMA FUNÇÃO QUE RECEBA DOIS PARAMETROS (fullname,flag)

SE A FLAG FOI IGUAL A "firstname" , DEVE RETORNAR A PRIMEIRA PALAVRA DO PARAMETRO (fullname)

SE A FLAG FOI IGUAL A "lastname" , DEVE RETORNAR TODO O TEXTO, EXCETO A PRIMEIRA PALAVRA DO PARAMETRO (fullname)

SE O PARAMETRO FLAG FOR VAZIA OU (fullname) CONTER APENAS UMA PALAVRA,DEVE RETORNAR O CONTEUDO DE (fullname)
*/

function myfunction(fullname , flag=""){
    const splitfullname = fullname.split(" ")
    
    return flag.length == 0 || splitfullname.length <= 1 ? fullname : flag == "firstname" ? splitfullname[0] : splitfullname.slice(1).join(" ")
    /*
    if(flag.length == 0 || splitfullname.length <= 1){
        return fullname
    }
    if(flag == "firstname") {
        return splitfullname[0]
    }
    if(flag == "lastname"){
        return splitfullname.slice(1).join(" ")
    }
    */

}   
     

 console.log(myfunction("John Williams Smith", "firstname")) //John
console.log(myfunction("John Williams Smith", "lastname")) // Williams Smith
console.log(myfunction("John Williams Smith")) //John Williams Smith
console.log(myfunction("John", "lastname")) // John


