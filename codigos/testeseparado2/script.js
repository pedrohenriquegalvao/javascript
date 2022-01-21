function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt1')
    var res = document.getElementById('res')
    var comp = document.getElementById('comp')
    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //SE CLICAR EM MASCULINO
    } if (fsex[0].checked){
        gênero = 'Homem'
        if (idade < 10) {
            comp.innerHTML = 'Você ainda é uma criança!'
            img.setAttribute('src', 'foto-criança-m.jpg')
        } else if (idade <= 20) {
            comp.innerHTML = 'Você ainda é um jovem!'   
        } else if (idade < 50){
            comp.innerHTML = 'Você já é um adulto!'
        } else {
            comp.innerHTML = 'Você já é idoso!'
        }      
        // SE CLICAR EM FEMININO     
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade < 10) {
            comp.innerHTML = 'Você ainda é uma criança!'
        } else if (idade <= 20) {
            comp.innerHTML = 'Você ainda é uma jovem!'   
        } else if (idade < 50){
            comp.innerHTML = 'Você já é uma adulta!'
        } else {
            comp.innerHTML = 'Você já é idosa!'
        }       
    }
    res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
    res.appendChild(img)
}