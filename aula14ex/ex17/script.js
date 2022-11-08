function gerar(){

    var txtnumero = window.document.querySelector('input#numero')
    numero = Number(txtnumero.value)
    var tabuada = window.document.querySelector("select#seltab")
    var msg = document.querySelector('p#msg')
    
    
    
    if (txtnumero.value.length == 0){
        msg.innerHTML = (`[ERRO]Digite um Número!`)

    } else {
        msg.innerHTML = (``)
        var i = 1 
        tabuada.innerHTML = ''
        while (i <=10){
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
            i++
        }
    }   

    







}



