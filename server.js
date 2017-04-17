var express = require('express')
var http = require('http')
var path = require('path')

var app = express()
app.set('port', 3000)

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server started at port: '+app.get('port'))
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
    res.send(404, "Page not found")
})

// Функция с 4 параметрами - обработчик ошибок
app.use(function(err, req, res, next){
    res.send(500, "Server error")
})