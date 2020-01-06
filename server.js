const Express = require('express');
const app = Express();
const calculate = require('./lib').calculate;

app.get('/', (req,res) => {
	console.log('got /');
	res.send('Thanks, this is prototype for fitness club XXX');
});

app.get('/calc', (req,res) => {
	res.send(calculate(req.query.a, req.query.b));
});

app.listen(8080,() => {
	console.log('listening');
});

