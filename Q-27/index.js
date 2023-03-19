function isPrime(n) {
    if (n == 0 || n == 1) {
        return false;
    }

    if (n == 2) {
        return true;
    }

    i = 2;
    while (i*i <= n) {
        if (n%i == 0) {
            return false;
        }

        i++;
    }

    return true;
}


// driver code...
for (let i=0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is prime!`);
    } else {
        console.log(`${i} is not prime`);
    }
}


