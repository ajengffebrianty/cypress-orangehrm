//createDir.js

var fs = require('fs')

fs.mkdir('cypress/results', (err) => {
	if (err) {
		return console.error(err)
	}
	fs.mkdir('cypress/results', (err) => {
		if (err) {
			return console.error(err)
		}
	})
})