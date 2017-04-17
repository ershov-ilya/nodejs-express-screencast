var express = require('express')
var http = require('http')
var path = require('path')
var config = require('./config')
var errorhandler = require('errorhandler')

var app = express()
//app.set('port', 3000)

http.createServer(app).listen(config.get('port'), function(){
    console.log('Server started at port: '+config.get('port'))
})


// Простейшая маршрутизация
app.use(function(req, res, next){
    if(req.url == '/'){
        res.end("Hello")
    } else {
        next()
    }
})

app.use(function(req, res, next){
    if(req.url == '/test'){
        res.end("test")
    } else {
        next()
    }
})

app.use(function(req, res, next){
    if(req.url == '/error'){
        next(new Error("woops, denied"))
    } else {
        next()
    }
})

app.use(function(req, res){
    res.status(404).send("Page not found")
})

app.use(errorhandler())
/*
// Функция с 4 параметрами - обработчик ошибок
app.use(function onerror(err, req, res, next){
    if(app.get('env') == 'development'){
    } else {
        res.status(500).send("Server error")
    }
})
*/