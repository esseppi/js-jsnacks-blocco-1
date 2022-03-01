let ex = document.querySelector(".ex")
let nomi = ['Vladimir', 'Silvio', 'Angela', 'Mario', 'Luca'];
let cognomi = ['Putin', 'Berlusconi', 'Merkel', 'Razzi', 'Bonino'];

let nomiArray = [];
let cognomiArray = [];
for (let i = 0; i < 3; i++) {
    let indexRandomNome = Math.floor(Math.random() * nomi.length);
    while (nomiArray.includes(indexRandomNome)) {
        indexRandomNome = Math.floor(Math.random() * nomi.length);
    }
    nomiArray.push(indexRandomNome)
    const nome = nomi[indexRandomNome]

    let indexRandomCognome = Math.floor(Math.random() * cognomi.length);
    while (cognomiArray.includes(indexRandomCognome)) {
        indexRandomNome = Math.floor(Math.random() * cognomi.length);
    }
    const cognome = cognomi[indexRandomCognome]
    console.log(`${nome} ${cognome}`)
}
