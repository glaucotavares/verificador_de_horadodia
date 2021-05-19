function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#a2c5b9'
        msg.innerHTML += ' Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#ffdb99'
        msg.innerHTML += ' Boa tarde!'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#213537'
        msg.innerHTML += ' Boa noite!'
    }
}