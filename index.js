const http = require('https');  // SSL verwenden, aber Render übernimmt das SSL-Handling für dich

const port = process.env.PORT || 3000;  // Port aus der Umgebung von Render oder 3000 für lokale Tests

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

// Server starten (ohne expliziten Hostnamen, Render übernimmt dies)
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
