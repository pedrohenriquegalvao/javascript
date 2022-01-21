function contar(){
    let inicio = document.querySelector('input#inicio').value;
    let fim = document.querySelector('input#fim').value;
    let passo = document.querySelector('input#passo').value;
    let resultado = document.querySelector('div#res');

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        resultado.innerHTML = '<p>Impossível contar</p>'
    } else {
        resultado.innerHTML = "<p>Contando: </p>";
        let i = Number(inicio);
        let f = Number(fim);
        let p = Number(passo);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.');
            p = 1;
        }
        if(i > f) {
            //Contagem Regressiva
            for(let c = i; c >= f; c-= p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            //Contagem Crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}

