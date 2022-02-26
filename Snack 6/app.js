// ESERCIZIO 6
let ex = document.querySelector('.esercizio')
let num = prompt('Text goes here');
let sum = 0
if (num.length > 4 || num.length < 4) {
    alert('Inserisci un numero di quattro cifre esatte')
} else {
    for (let i = 0; i < num.length; i++) {
        const element = parseInt(num[i]);
        sum += element
    }
    ex.append(sum)
}
