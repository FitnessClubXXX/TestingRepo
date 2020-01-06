const Express = require('express');
const app = Express();

app.get('/', (req,res) => {
	console.log('got /');
	res.send('Thanks, this is prototype for fitness club XXX');
});
