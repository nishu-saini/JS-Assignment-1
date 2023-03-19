function triangle(n) {
    for (let i=1; i <= n; i++) {
        let s = '';

        for (let j=1; j <= i; j++) {
            s += '*';
        }

        console.log(s);
    }

    return
}

function square(n) {
    let s = '';
    for (let i=1; i <= n; i++) {
        s += '*';
    }

    // print lines..
    for (let i=1; i <= n; i++) {
        console.log(s);
    }

    return
}

function pyramid(n) {

    for (let i=1; i <= n; i++) {
        let spaces = '',
            stars = '';

        // create spaces..
        for (let j=1; j <= (n - i); j++) {
            spaces += " ";
        }

        // create stars..
        for (let j=1; j <= (2*i - 1); j++) {
            stars += "*";
        }

        console.log(spaces + stars);
    }

    return
}

// driver code..
var n = 3;

triangle(n);
console.log('----------------------');
square(n);
console.log('-----------------------');
pyramid(n);