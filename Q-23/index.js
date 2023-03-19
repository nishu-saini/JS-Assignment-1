function isPrime(n) {
    if (n == 2) {
        return 'Prime';
    }

    i = 2;
    while (i*i <= n) {
        if (n%i == 0) {
            return 'Not Prime';
        }

        i++;
    }

    return 'Prime'
}

// driver code..
let n = 23;
console.log(isPrime(n));