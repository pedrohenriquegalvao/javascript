function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {//00:00 é meia noite
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#F0E97C'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!    
        img.src = 'fototarde.png'
        document.body.style.background = '#FF8C00'
    }  else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1C1C1C'
    }
}