const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

console.log(ages);

//  min and max values..
let min = ages[0],
    max = ages[ages.length - 1]
console.log(`min: ${min}`);
console.log(`max: ${max}`);

let n = ages.length,
    median = 0;

// median
// n even..
if (n%2 == 0) {
    let i = parseInt(n/2);
    median = (ages[i-1] + ages[i])/2;
} else {
    let i = parseInt(n/2);
    median = ages[i]
}

console.log(median);

// average age..
let sum = 0;
for (x of ages) {
    sum += x;
}

let avg = sum/n
console.log(avg);

//  compare..
console.log( Math.abs(min - avg) == Math.abs(max - avg) );
console.log( Math.abs(min - avg) > Math.abs(max - avg) );
console.log( Math.abs(min - avg) < Math.abs(max - avg) );