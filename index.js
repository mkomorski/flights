const app = require('http').createServer(handler)
const fs = require('fs')
const io = require('socket.io').listen(app)

app.listen(8081);

function handler(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on('connection', function(socket) {
	socket.on('data', function(data) {
		console.log("data!!")
		socket.broadcast.emit('data', data);
	});
});