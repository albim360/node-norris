// Importo i moduli Node.js 'fs' e 'axios' per poterli utilizzare in questo file.
const fs = require('fs');
const axios = require('axios');

// Creo la funzione per ottenere le battute casuali dall'API
async function norrisJoke() {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    const norrisDb = require('./norrisDb.json');
    norrisDb.jokes.push(response.data.value);
    fs.writeFileSync('./norrisDb.json', JSON.stringify(norrisDb));
    return response.data.value;
}

module.exports = {
    norrisJoke
};