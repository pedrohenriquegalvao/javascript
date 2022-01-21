function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //variável recebe o valor do ano atual (full pra pegar com 4 dígitos, por exemplo 2019 e não somente 19)
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex') //aqui são mais de um elemento, então o [] indica qual é qual
       var idade = ano - Number(fano.value)
       var gênero = '' //varíavel que é vazia (mas que vai receber algum valor)
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png') //explicação dessa linha no word
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
        }
       }
       res.style.textAlign = 'center' //centralizando em js (através do DOM)
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }

} 