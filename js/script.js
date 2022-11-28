// 1- Chiedere i chilometri da percorrere
let kms = prompt('Inserisci i chilometri da percorrere');

// 2- Chiedere l'età del passeggero
let age = prompt('Inserisci la tua età');

// 3.1- Se il passeggero è minorenne avrà uno sconto del 20%
if(age < 18){
    let price = 0.21 * kms * 0.80
    document.getElementById('ticket-price').innerHTML = price
}


// 3.2- Se il passeggero è over 65 avrà uno sconto del 40%
else if(age > 65){
    let price = 0.21 * kms * 0.60
    document.getElementById('ticket-price').innerHTML = price
}

// 3.3- Prezzo intero
else{
    let price = 0.21 * kms
    document.getElementById('ticket-price').innerHTML = price
}