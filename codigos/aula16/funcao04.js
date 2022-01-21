// 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ //contador começa em n; enquanto o contador for maior que 1; ele perde 1. 
        fat *= c //então enquanto o c for maior que 1, fat vai receber o valor de c*fat (ou fat *= c). Dessa forma criando um cálculo de fatorial como mostrado lá em cima.
    }
    return fat
}

console.log(fatorial(5))
