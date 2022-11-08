function carregar(){

var msg = window.document.querySelector("div#msg")
var img = window.document.querySelector('img#imagem') 
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`


if (hora >= 0 && hora < 12){
    msg.innerHTML = `Bom dia, agora são ${hora} horas`
    img.src = 'manha.jpg'
    document.body.style.background= 'lightgray'

}
    else if (hora >=12 && hora < 18){
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.src = 'tarde.jpg'
        document.body.style.background= 'gray'
    
}

    
    else{
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.src = 'noite.jpg'
        document.body.style.background= 'black'
    }
    
    


}

