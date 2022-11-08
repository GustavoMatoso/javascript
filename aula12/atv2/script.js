var ano = window.document.getElementById('txtano')

var sexo = document.getElementsByName('radsex')

var msg = window.document.querySelector('div#msg')

var imagem = window.document.querySelector('img#imagem')

function verificar(){
    var idade = 2022 - Number(ano.value)
    var genero = ''
    if (sexo[0].checked){
        genero = 'Homem'
    } else if (sexo[1].checked){
        genero = 'Mulher'

    }
    if (idade >= 18 && idade <60){

      msg.innerHTML = `Você é ${genero} e tem ${idade} anos`
      if (genero == 'Homem'){
        imagem.src = "homemjovem.jpg"

      } else if (genero == 'Mulher'){
        imagem.src = "mulherjovem.jpg"
        
    }
    }
    else if (idade <= 17 && idade >=0 ){

        msg.innerHTML = `Você é ${genero} e tem ${idade} anos`
        if (genero == 'Homem'){
            imagem.src = "homemcrianca.jpg"
    
          } else if (genero == 'Mulher'){
            imagem.src = "mulhercrianca.jpg"
            
        }
    }
    else if (idade >= 60 && idade <130){
        msg.innerHTML = `Você é ${genero} e tem ${idade} anos`
        if (genero == 'Homem'){
            imagem.src = "homemidoso.jpg"
    
          } else if (genero == 'Mulher'){
            imagem.src = "mulheridosa.jpg"
            
        }
    }

    else{
        msg.innerHTML = "ano de nascimento inválido"
        imagem.src = "" 
        imagem.alt = ""
    }
      



}