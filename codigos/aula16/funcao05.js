//RECURSIVIDADE
function fatorial(n) {
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) //a função é chamada dentro dela mesma
    }
}

console.log(fatorial(5))



/*

5! = 5 x 4 x 3 x 2 x 1
resumindo:
5! = 5 x 4!            

Então, o fatorial de um número pode ser calculado baseado no fatorial de outro:

n! = n x (n-1)!

Exceto para o fatorial de 1:

1! = 1

*/