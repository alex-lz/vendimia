var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// CORS Allow all
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host     : 'sql10.freemysqlhosting.net',
    user     : 'sql10291670',
    password : '6P5VwRQI65',
    database : 'sql10291670',
    port: 3306
});
  
// connect to database
dbConn.connect(function(error){
    if (error) {throw (error);}

    console.log('Your database connected');
}); 

// Get configuration 
app.get('/config_get', function (req, res) {
    dbConn.query('SELECT * FROM configuracion', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, config: results, message: 'Configuracion.' });
    });
});
// Get clientes 
app.get('/clientes_get', function (req, res) {
    dbConn.query('SELECT * FROM clientes', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, clientes: results, message: 'Clientes.' });
    });
});
// Get Articulos 
app.get('/articulos_get', function (req, res) {
    dbConn.query('SELECT * FROM articulos', function (error, results, fields) {
        if (error) throw error;
        return res.send({ articulos: results });
    });
});

// Get ventas 
app.get('/ventas_get', function (req, res) {
    dbConn.query('SELECT * FROM ventas', function (error, results, fields) {
        if (error) throw error;
        return res.send({ ventas: results });
    });
});

// Get max folio 
app.get('/ventas_folio', function (req, res) {
    dbConn.query('SELECT MAX(folio)  AS folio FROM ventas', function (error, results, fields) {
        if (error) throw error;
        return res.send({ folios: results });
    });
});

//  Update user with id
app.put('/config_put', function (req, res) {
  
    let user_id = req.body.user_id;
    let user = req.body.user;
  
    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }
  
    dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});
 
// Retrieve all users 
app.get('/users', function (req, res) {
    dbConn.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});
 
 
// Retrieve user with id 
app.get('/user/:id', function (req, res) {
  
    let user_id = req.params.id;
  
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
  
    dbConnect.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'users list.' });
    });
  
});
 
 
// Add a new user  
app.post('/user', function (req, res) {
  
    let user = req.body.user;
  
    if (!user) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }
  
    dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});
 
 
//  Update user with id
app.put('/user', function (req, res) {
  
    let user_id = req.body.user_id;
    let user = req.body.user;
  
    if (!user_id || !user) {
        return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
    }
  
    dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});
 
 
//  Delete user
app.delete('/user', function (req, res) {
  
    let user_id = req.body.user_id;
  
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
}); 
 
// set port
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
 
module.exports = app;