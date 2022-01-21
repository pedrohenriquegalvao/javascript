/*function parimp(n) {
    if (n%2 == 0 ) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimp(4) // OU -> console.log(parimp(4))
console.log(res)
*/

/*function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2, 5))
*/

/*let v = function(x) {
    return x*2
}

console.log(v(5))
*/

// 5! = 5 x 4 x 3 x 2 x 1
/*function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
*/


// Recursividade (uma função chama ela mesma)
// Utilizando para fatorial de um numero -> 5! = 5x4x3x2x1 é a mesma coisa que 5! = 5 x 4! 

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) // retorne o número * fatorial desse número - 1
    }
}
console.log(fatorial(5))