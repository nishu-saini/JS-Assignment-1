let weight = prompt('Enter your weight in Kg:'),
    height = prompt('Enter your height in meter:'),
    bmi;

bmi = weight/(height*height);

if (bmi >= 30) {
    console.log('Obese!')
} else if (bmi >= 25) {
    console.log('Overweight!')
} else if (bmi >= 18.5) {
    console.log('Normal!')
} else {
    console.log('Underweight!')
}
