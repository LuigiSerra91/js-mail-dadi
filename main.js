console.log('ciao');


//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let sever_email = ['luigi@com', 'fabio@net', 'efisio@virgilio', 'bachisio@com' ]

let user_email = prompt('Inserire la propria email')


if  (sever_email.includes(user_email)) {
    console.log('bentornato');
    
}
    
 else {
    console.log('lei non può accedere');
    
}



//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let player = prompt(Math.floor(Math.random() * 10));
let bank = prompt(Math.floor(Math.random() * 10));

 if (player > bank) {
    console.log('il giocatore ha vinto');   
} else if (player < bank) {
    console.log('il giocatore ha perso');
} 

   
    

    
    

    
