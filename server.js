const Express = require('express');
const app = Express();

app.get('/', (req,res) => {
	console.log('got /');
	res.send('Thanks, this is prototype for fitness club XXX');
});

app.get('/calc', (req,res) => {
	res.send(calculate(req.query.a, req.query.b));
});

function calculate(a, b) { 
	return a+b;
}
module.exports = { calculate }
