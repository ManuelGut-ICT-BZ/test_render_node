const http = require('https');

// Wenn der Server für eine Subdomain läuft, sollte der Hostname auf die Subdomain gesetzt werden
// const hostname = 'dummy-nodejs.041er-blj.ch'; // Subdomain eintragen
// const hostname = '127.0.0.1'; // Für lokales Hosting
const port = process.env.PORT || 3000; // Standard-Port für HTTP (für HTTPS wäre es 443, falls SSL konfiguriert ist)

const server = http.createServer((req, res) => {
    // CORS-Header hinzufügen, falls externe Zugriffe erwartet werden
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204; // Preflight-Anfragen
        res.end();
        return;
    }

    // Anfrage-Handling
    if (req.method === 'GET') {
        switch (req.url) {
            case '/':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello World from Node!\n');
                break;
            case '/about':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('This is the About page.\n');
                break;
            case '/contact':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('This is the Contact page.\n');
                break;
            default:
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('404 Not Found\n');
                break;
        }
    } else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed\n');
    }
});

// Server starten (mit Subdomain und Standard-Port 80 für HTTP)
server.listen(port, () => {
    console.log(`Server running`);
});
