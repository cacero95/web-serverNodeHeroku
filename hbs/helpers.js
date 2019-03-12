const hbs = require('hbs');
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((word, index) => {
        palabras[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});