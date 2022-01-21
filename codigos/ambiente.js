/*let num = [8,7,4,2,9]
num.push(1)
num.sort()
console.log(`Esse vetor possui ${num.length} posições`)
for (let pos = 0; pos < num.length;pos++) {
    console.log(`O numero que está na posição ${pos} do vetor é: ${num[pos]}`)
}
*/
/*let valores = [5,3,1,7,9]
for (let pos in valores) {
    console.log(valores[pos])
}
*/
let valores = [8,5,3,1,4]
valores.sort()
let pos = valores.indexOf(2)
console.log(valores)
if (pos == -1){
    console.log("Esse valor não foi encontrado!")
} else {
    console.log(`O valor 4 está na posição ${pos} do vetor!`)
}