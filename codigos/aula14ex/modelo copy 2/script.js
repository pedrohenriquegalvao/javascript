function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab') 
    if (num.value.length == 0) {
        alert('[ERRO]Por favor, insira um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c * n}`
            tab.appendChild(item)
        }
    }
}
