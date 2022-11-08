




function Contador(){

    


    var ninicio = window.document.querySelector('input#inicio')
    ninicio = Number(ninicio.value)
    var nfim = window.document.querySelector("input#fim")
    nfim = Number(nfim.value)
    var npasso = window.document.querySelector('input#passo')
    npasso = Number(npasso.value)
    var msg = window.document.getElementById('msg')

    if (npasso <=0){
        window.alert(`Passo inválido! Considerando PASSO 1`)
        npasso = 1 
    }

    //msg.innerHTML = `Contando: </br> ${npasso}`
    if (ninicio.length == 0 || nfim.length == 0 || npasso.length == 0){
        window.alert (`<b>[ERRO] FALTAM DADOS</b>`)

    } else { msg.innerHTML = `Contando: <br>`


    if (ninicio < nfim){
         //contagem crescente
    while (ninicio <= nfim){
        msg.innerHTML += ` ${ninicio} \u{1F449}`
        ninicio = ninicio + npasso
    }
    } else{
        //contagem decrescente
        while (ninicio >= nfim){
            msg.innerHTML += ` ${ninicio} \u{1F449}`
            ninicio = ninicio - npasso
        
    }


}
       
    msg.innerHTML += `\u{1F3C1}`
    
}

}



