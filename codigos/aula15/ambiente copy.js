/*
let valores = [8,2,4,9,7]
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
for (let pos in valores) {
    console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [8,2,4,9,7]
valores.sort()
valores.push(1)
console.log(valores)
console.log(`O comprimento do vetor é ${valores.length}`)
let pos = valores.indexOf(9)
if (pos == -1){
    console.log("O valor não foi encontrado no vetor")
} else {
    console.log(`O valor está na posição ${pos}`)
}