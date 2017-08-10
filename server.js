#!/usr/bin/env node

var app = require('express')()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
	if (!req.body.key) {
		return res.status(500).send("Missing key")
	}
	if (!req.body.function) {
		return res.status(500).send("Missing function")
	}
	if (!req.body.payload) {
		return res.status(500).send("Missing payload")
	}
	if (req.body.key != process.env.ACCESS_KEY) {
		return res.status(500).send("Wrong key")
	}
	var func = req.body.function.split(".")
	var payload = req.body.payload

	try {
		require("./" + func[0])[func[1]](payload, null, function(err, result) {
			if (err) {console.log(`Function ${func[1]} returned error: ${err}`)}
			console.log(`Function ${func[1]} result: ${result}`)
		})
		res.send("OK")
	} catch(e) {
		console.log(`Function ${func[1]} threw exception: `, e)
		res.status(500).send(e + '')
	}
})

var port = process.env.PORT || 3000

app.listen(port, function () {
  	console.log(`Example app listening on port ${port}`)
})
