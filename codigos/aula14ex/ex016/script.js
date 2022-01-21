function contar(){
    let inicio  = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')  
    let passos = document.querySelector('input#txtp')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length ==  0 || passos.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` //procurar no google = unicode emoji list; a carinha feliz por exemplo é: U+1F600, porém a formatação para javascript substitui o U+ por \u
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
        
    }
} 
    
    
    
    
    /*if (fim == 0 || inicio == null ){ 
        res.innerHTML = 'Impossível contar!'
    } else if (passos == 0){
        alert('JA VOU AJEITAR, PERA AE')
    } else {
        res.innerHTML = inicio + passos
        while (inicio <= fim) {
            let seta = String.fromCodePoint(0x1F449)//EMOJI DE MÃOZINHA https://www.kirupa.com/html5/emoji.htm
            //res.innerHTML += seta
            //res.innerHTML += parseInt(inicio) + parseInt(passos) //parseInt transformou string em number, para somar e nao concatenar
           // inicio++
            //inicio++ 
            //res.innerHTML += inicio
            //res.innerHTML += seta
            //inicio++
                if (inicio > fim) {
                    let bandeira = String.fromCodePoint(0x1F3C1)//EMOJI DE BANDEIRA(mesmo site)
                    res.innerHTML += bandeira
                }
        
        } 
        
    }*/
     


