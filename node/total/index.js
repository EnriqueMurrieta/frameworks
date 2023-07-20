// Initializes Total.js framework 4
require('total4');

// Registers a route
ROUTE('GET /', function() {
    // this === Controller
    this.json({ message: 'Hello world' });
});

// Registers a WebSocket route
ROUTE('SOCKET /', function() {

    // this === controller

    this.on('open', function(client) {
        client.send({ message: 'Hello' });
    });

    this.on('message', function(client, message) {
        console.log(message);
    });

});

// Launches a web server in "debug" mode
HTTP('debug');