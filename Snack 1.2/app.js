// ESERCIZIO1
let firstWord = prompt('Inserisci la prima parola')
let secondWord = prompt('Inserisci la seconda parola')
let ex1 = document.querySelector('.esercizio')

function func() {
    return (firstWord.length == secondWord.length) ? ex1.append(`${firstWord} ${secondWord}`) : (firstWord.length > secondWord.length) ? ex1.append(`${firstWord} ${secondWord}`) : ex1.append(`${firstWord} ${secondWord}`); 
}
func()

