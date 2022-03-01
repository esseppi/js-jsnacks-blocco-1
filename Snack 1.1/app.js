// ESERCIZIO
let ex = document.querySelector('.esercizio')
let number = []

for (let i = 0; i < 2; i++) {
    let numbers = parseFloat(prompt('Inserisci due valori'))
    number.push(numbers)
}
let max = Math.max.apply(null, number)
ex.append(max)




