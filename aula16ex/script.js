var listan = []

function adicionar(){
    var tabela = window.document.querySelector("select#seltab")
    var txtnumero = window.document.querySelector('input#numero')
    var numero = Number(txtnumero.value)
    var msg = document.querySelector('p#msg')
    msg.innerHTML = ``

    if (numero < 1 || numero > 100  ){
        window.alert(`[ERRO] Número inválido!`)
    } 
    else {
    
    if(listan.indexOf(numero)!= -1){
        window.alert(`[ERRO] Esse Número já foi inserido! Por favor digite outro.`)
    } else {

    if (listan.indexOf(numero) === -1){
        listan.push(numero)
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        tabela.appendChild(item)
  
  
    }

    listan.sort()
    txtnumero.value = ``
    txtnumero.focus()    
    
}
}
}

function finalizar(){
    

    //fazer a soma dos elementos da array
    var soma = 0
    for(var i = 0; i < listan.length; i++){
    //soma = soma + lista[i] 
        soma += listan[i] 
        
    } 
   
    var maiorValor = listan.reduce(function(anterior, atual) { 
	return anterior > atual ? anterior : atual; 
    });

    var menorValor = listan.reduce(function(anterior, atual) { 
        return anterior < atual ? anterior : atual; 
        });
    

    msg.innerHTML = `<p>Ao todo, temos ${listan.length} números cadastrados.</p><p>O maior valor informado foi ${maiorValor}.</p><p>O menor valor informado foi ${menorValor}.</p><p>Somando todos os valores, temos ${soma}.</p><p>A média dos valores digitados é ${soma/ listan.length}.</p>`


}

function zerar(){
    window.location.reload()


}