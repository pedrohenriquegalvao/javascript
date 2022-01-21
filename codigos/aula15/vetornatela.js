let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) { //aqui o valor de pos vai começar em 0 automaticamente, por ser uma nova ferramenta especifica para vetores
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)//vai mostrar o valor que estiver no indice pos (que vai começar em 0 e ir ate o valores.length que é o tamanho do vetor)
}