// Importo il modulo http e dotenv per poterlo utilizzare in questo file.
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
// Importo la funzione per ottenere le battute casuali dall'API.
const { norrisJoke } = require('./norrisJoke');

// Creo il server HTTP
const server = http.createServer(async (req, res) => {
    // Ottengo la battuta casuale dal modulo.
    const joke = await norrisJoke();
    res.writeHead(200, { 'Content-Type': 'text/html charset=utf-8' });;
    res.end(joke);
});

const port = +process.env.PORT || 3001;
server.listen(port, function () {
    console.log("Server in esecuzione su http://localhost:" + port);
});
