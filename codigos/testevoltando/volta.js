function Avançar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc') 
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Insira os dados e tente novamente')
    } else {
        var nome = document.getElementById('txtnome')
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked){
            res.innerHTML = `Olá ${nome.value}, você é um ome de ${idade} anos`
        } else if (fsex[1].checked){
            res.innerHTML = `Olá ${nome.value}, você ser cuié e ter ${idade} anos`
        }
    
    }
    

}
