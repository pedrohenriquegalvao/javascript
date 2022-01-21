function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){ //se o comprimento do valor de num for 0 (não tiver comprimento)
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' // Essa linha é para que antes de mostrar a tabuada de um numero, o select fique vazio. Caso contrário, se trocasse o numero e rodasse a função dnv iria gerar uma tabuada embaixo da outra.
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option') //para criar elementos em JS é necessario utilizar essa ferramenta (nesse caso, como se trata de um select, ele precisa ter options dentro dele)
            item.text = `${n} x ${c}  = ${n*c}`
            item.value = `tab${c}` //para o JS essa linha nao faz tanto sentido, mas para linguagens como php (server side), para gerenciar os dados é mt importante
            tab.appendChild(item) // para fazer a linha de cima aparecer no select, é necessário adicionar um elemento filho(no caso o próprio item)
        }
    }
   

}