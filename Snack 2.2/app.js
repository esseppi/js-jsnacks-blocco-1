let ex = document.querySelector(".ex")
let numero = prompt('Inserisci un numero')
console.log(`Numero inserito ${numero}`)
if (numero % 2 == 0) {
    ex.append(numero)
} else {
    let plusone = parseInt(numero) + 1
    ex.append(plusone)
}