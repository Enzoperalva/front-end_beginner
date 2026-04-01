function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0|| Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe_homem.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem_homme.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_homem.jpg')
            } else{
                img.setAttribute('src', 'idoso_homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe_mulher.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem_mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta_mulher.jpg')
            } else{
                img.setAttribute('src', 'idosa_mulher.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 