let num = document.getElementById('fnum').value;
let lista = document.getElementById('sellista');
let resultado = document.getElementById('res');
let array = [];
function adicionar(){
    if (num.length == 0) {
        window.alert('Por favor, insira um número.');
    } else if (Number(num) < 0 || Number(num) > 100) {
        window.alert('[ERRO] Valor inválido.')
    } else {
        array.push(Number(num));
        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item);
        resultado.innerHTML += array;
        window.alert(array);
    }
    
}

function finalizar(){
    
}