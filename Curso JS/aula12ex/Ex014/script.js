function carregar(){

    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 4 && hora < 12){
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#3a5d7f'
    } else if (hora > 12 && hora < 18){
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#e29452'
    } else{
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#0a191b' 
        
    }
}
