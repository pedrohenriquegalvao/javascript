function contagem(){
    let inicio = document.getElementById('txti')
    let final = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossível contar! Confira e insira os dados novamente.'
    } else {
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passos.value)
        if (p <= 0){
            window.alert('Passo não especificado, considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            // Contagem progressiva
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
