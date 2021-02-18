//comincio inizializzando la variabile del nome
var nome;
//assegno alla variabile nome il valore della risposta al prompt
nome = prompt('Qual è il tuo nome?');
//stampo la risposta nella console
console.log(nome);

//inizializzo la variabile del cognome
var cognome;
//assegno alla variabile del cognome il valore della risposta al prompt
cognome = prompt('E il tuo cognome?');
//stampo la risposta nella console
console.log(cognome);

//inizializzo la variabile del colore
var colore;
//assegno alla variabile del colore il valore della risposta al prompt
colore = prompt('Ora dimmi il tuo colore preferito');
//stampo la risposta nella console
console.log(colore);

//assemblo la password
var password = nome + cognome + colore + 19;

//restituisco la password appena generata sul file html
document.getElementById('my_pw').innerHTML = password;
