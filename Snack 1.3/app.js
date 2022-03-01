// ESERCIZIO 3

let ex = document.querySelector('.esercizio')
let number = []
for (let i = 0; i < 10; i++) {
    let putNumber = parseInt(prompt('inserisci 10 numeri'));
    number.push(putNumber)   
}
console.log(number)
let sum = 0
function num() {
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    ex.append(sum)
}
num()