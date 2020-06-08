const app = require('http').createServer(handler)
const fs = require('fs')
const io = require('socket.io').listen(app)

app.listen(8088);

function handler(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200);
		res.end(data);
	});
}

// io.sockets.on('connection', function(socket) {
// 	socket.on('flights', function(data) {
// 		console.log("data!!")		
// 	});

// 	var count = 0;
// 	var coords = [51.505, -0.09];

// 	setInterval(() => {
// 		count++;
// 		var value = count / 10000;
// 		socket.broadcast.emit('flights', [
// 			{
// 				id: "fede123",
// 				coords: [coords[0] + value, coords[1] + value]
// 			}
// 		]);	
// 	}, 200)
	
// });