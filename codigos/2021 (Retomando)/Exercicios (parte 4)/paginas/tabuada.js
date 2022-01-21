function tabuada(){
    let num = document.querySelector('input#txtn').value;
    let tab = document.querySelector('select#seltab');
    if(num.length == 0){
        window.alert('Por favor, insira um número.')
    } else {
        tab.innerHTML = "";
        let n = Number(num);
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.innerHTML = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);
        }
    }
}