function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'manhaPNG.png'
        document.body.style.background = '#576460'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tardePNG.png'
        document.body.style.background = '#b08756'
    } else {
        //Boa noite
        img.src = 'noitePNG.png'
        document.body.style.background = '#393c4b'
    }
    
}
