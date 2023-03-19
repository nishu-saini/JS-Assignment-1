function findExe(string) {
    let n = string.length;

    let i = n-1, exe = '';
    while (i >= 0 && string[i] != '.') {
        exe = string[i] + exe;

        i--;
    }

    return exe;
}

// driver code..
var string = prompt('Enter a filename: ');
console.log(findExe(string));