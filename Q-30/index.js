var calc = (x, y, op) => {
    switch (op) {
        case 1:
            return x + y;
        case 2:
            return x - y;
        case 3:
            return x*y;
        case 4:
            if (y != 0)
                return x/y;
            return 'please enter non-zero number';
    }

    return 'please enter a valid operation'
}


// driver code..
var x = parseFloat( prompt('Enter a number: ') ),
    y = parseFloat( prompt('Enter second number: ') );

console.log(
    ' 1 - add\n',
    '2 - subtract\n',
    '3 - multiply\n',
    '4 - divide'
);

var op = parseInt( prompt('Select a number: ') );

console.log(calc(x, y, op));

