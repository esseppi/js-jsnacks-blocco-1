// ESERCIZIO 4
let ex = document.querySelector('.esercizio')
let invitati = ['Putin', 'Berlusconi', 'Razzi', 'Conte', 'Draghi']


let client = prompt('Inserisci il tuo nome per partecipare alla festa').toLowerCase()
let accesso = false;
for (let i = 0; i < client.length; i++) {
    const element = invitati[i].toLowerCase();
    if (element == client) {
        accesso = true;
    }
    if (accesso == true) {
        ex.innerHTML = 'Puoi accedere alla festa'     
    }
     else {
        ex.innerHTML = 'Non puoi accedere alla festa'
    } 
};