function fatorial(n){
    let valor = 1
    for (let c = n; c > 1; c--){
        valor *= c
    }
    return valor
}

console.log(fatorial(5))