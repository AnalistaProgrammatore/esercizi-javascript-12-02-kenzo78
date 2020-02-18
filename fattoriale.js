/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
function fatto(n) {
    if (n < 0) {
        return -1;
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return (n * fatto(n - 1));
    }
}


console.log(fatto(7))
