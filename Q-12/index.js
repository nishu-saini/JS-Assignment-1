let now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    date = now.getDate(),
    hours = now.getHours(),
    mins = now.getMinutes();

console.log(`${year}-${month+1}-${date} ${hours}:${mins}`);
console.log(`${date}-${month+1}-${year} ${hours}:${mins}`);
console.log(`${date}/${month+1}/${year} ${hours}:${mins}`);