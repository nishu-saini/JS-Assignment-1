var countries = ['India', 'Australia', 'Newzland', 'England', 'America', 'Canada', 'South Africa', 'China', 'Russia'];

let country = 'Ethiopia';

if (countries.includes(country)) {
    console.log(country.toUpperCase());
} else {
    countries.push(country);
    console.log('Country Added');
}
