let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { //tá recebendo como parâmetro somente um número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //tá recebendo como parâmetro um número e uma lista 
    if (l.indexOf(Number(n)) != -1) { //se um número não está no vetor e o método indexOf for chamado, ele retornará -1 como resposta
        return true //se o resultado de indexOf for diferente de -1, retorne 'true'
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {//! quer dizer NÃO!!! //2 funções foram chamadas dentro de 1, cada uma delas irá fazer a verificação de uma coisa diferente (1 se é um número e outra se está na lista). (se "é um número" E "está na lista"), retorne tal coisa...
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //quando o usuário adicionar um elemento ele limpa a div#res
   } else { //se não for um número ou não está na lista, retorne tal coisa...
       window.alert('Valor invalido ou já encontrado na lista.')
   }
   num.value = '' //para apagar o número digitado no input pelo usuário após clicar no botão
   num.focus() //para o foco estar no input (o cursor fica piscando)
}

function finalizar () {
    if (valores.length == 0) { //se o vetor não tiver comprimento (estiver vazio) 
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0] //por enquanto tanto o maior quanto o menor número é o primeiro
        let soma = 0
        let media = 0 //tanto a soma como a média começam valendo 0
        for (let pos in valores) { //para cada nova posição em valores
            soma += valores[pos]   //a soma recebe o valor que já tinha + o número adicionado
            if (valores[pos] > maior) //se o número adicionado for maior que o maior valor no vetor,
                maior = valores[pos]  //esse número passa a ser o maior
            if (valores[pos] < menor) //se o número adicionado for menor que o menor valor no vetor,
                menor = valores[pos]  //esse número passa a ser o menor  
        }
        media = soma / tot 
        res.innerHTML = '' //zerar o texto de res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}