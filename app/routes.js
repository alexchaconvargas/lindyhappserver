var path = require('path');

module.exports = function(app) {
	// api ---------------------------------------------------------------------
    // get all events
    
    var jsonDummy = [
					{ id: 1, name: 'Swing Ballroom' , description: 'aaa', place: 'almo2bar', addr: 'C/ bruniquer 50'},
				  	{ id: 2, name: 'Jam de swingmaniacs', description: 'bbb', place: 'SwingManiacs', addr : 'C/ Esglesia 12'}
				]
    app.get('/api/events', function(req, res) {
    	console.log('recibida peticion eventos');
        res.json(jsonDummy);
    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../public') }); // load the single view file (angular will handle the page changes on the front-end)
    });
};