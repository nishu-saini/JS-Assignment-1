var age = parsInt( prompt("Enter your age:") );

if (age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`wait for ${18-age} years to turn 18`)
}