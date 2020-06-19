
const app = require('http').createServer(handler)
const fs = require('fs')
const io = require('socket.io').listen(app)
const fetch = require('node-fetch');
 
app.listen(8088);

function handler(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200);
		res.end(data);
	});
}



io.sockets.on('connection', function(socket) {
	socket.on('flights', function(data) {
		console.log(data)	
		socket.broadcast.emit('flights', data);		
	});

	var count = 0;
	var coords = [51.505, -0.09];

	// setInterval(async () => {
		
	// 	const response = await fetch('https://api.flightstats.com/flex/flightstatus/rest/v2/json/flightsNear/51.505/-0.09/200?appId=a3e62800&appKey=dacf07f407cbfcb481746b24d0b95705&maxFlights=120')
	// 	const json = await response.json()
		

	// 	const output = json.flightPositions.map(p => {
	// 		const pos = p.positions.pop()
	// 		return {
	// 			flightId: p.callsign,
	// 			coords: [pos.lat, pos.lon]
	// 		}
			
	// 	})

	// 	console.log(output)
	// 	socket.broadcast.emit('flights', output)


		// count++;
		// var value = count / 10000;
		// socket.broadcast.emit('flights', [
		// 	{
		// 		id: "fede123",
		// 		coords: [coords[0] + value, coords[1] + value]
		// 	}
		// ]);	
	// }, 60000)
	
});