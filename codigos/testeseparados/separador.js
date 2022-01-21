function clicarm(){
    var txtn = document.querySelector('input#txt1')
    var nome = txtn.value
    var r = document.querySelector('div#res')
    r.innerHTML = `Olá, ${nome}! Vocé é homem!`
    var img = document.querySelector('img#imagem')
    img.src = 'homem.jpg' 
}
function clicarf(){
    var txtn = document.querySelector('input#txt1')
    var nome = txtn.value
    var r = document.querySelector('div#res')
    r.innerHTML = `Olá, ${nome}! Vocé é mulher!`
    var img = document.querySelector('img#imagem')
    img.src = 'mulher.jpg'
}
