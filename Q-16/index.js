var month = prompt('Enter month:');

if (['September', 'October', 'November'].includes(month)) {
    console.log('Autumn Season');
} else if (['December', 'January', 'February'].includes(month)) {
    console.log('Winter Season');
} else {
    console.log('Summer Season')

}