var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
app.set('port', 3000)

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server started at port: '+app.get('port'))
})

app.use(function(req, res){
    res.end("Hello")
})