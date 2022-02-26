// ESERCIZIO 5
let allNumbers = []
for (let i = 0; i < 6; i++) {
    allNumbers.push(prompt('Inserisci sei numeri')) 
}

let ex = document.querySelector('.esercizio')
let ex1 = document.querySelector('.esercizio1')
let oddNumbers = []
let evenNumbers = [] 
function letterCheck () {
    return /[a-zA-Z]/.test()
}
function filterNum () {
    for (let i = 0; i < allNumbers.length; i++) {
        const element = allNumbers[i].replaceAll(/\s/g,'');
        if (element == '' || /[a-zA-Z]/.test(element)) {
            console.log('nessun valore inserito, o forse hai scritto delle lettere')
        } else if ( element % 2 !== 0) {
            oddNumbers.push(element)
        } else if (element % 2 == 0) {
            evenNumbers.push(element)
        }
    }

    if (oddNumbers.length > 0) {
        ex.innerHTML =`<h5>Odd numbers</5><br></h5><ul>${oddNumbers.map((item) => `<li>${item}</li>`).join('')}</ul>`;    
    } else if (evenNumbers.length > 0) {
        ex1.innerHTML =`<h5>Even numbers</5><br></h5><ul>${evenNumbers.map((item) => `<li>${item}</li>`).join('')}</ul>`;    
    } 
}
filterNum()
