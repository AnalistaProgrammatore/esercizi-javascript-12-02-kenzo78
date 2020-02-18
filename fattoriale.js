/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
function fatto(n) {
    if (n < 0) {
       return "Per definizione il fattoriale si calcola solo sui numeri Naturali (Interi positivi) ";
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return (n * fatto(n - 1));
    }
}


console.log(fatto(7))
