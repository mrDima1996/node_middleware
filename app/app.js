/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var WebSocket = require('ws')



//index
app.get('*', function(req, res){
    var options = {
        host: 'localhost',
        port: 8080,
        path: '/api/init',
        method: 'GET'
    };

    console.log("Start");
    var x = http.request(options,function(javaResponse){
        console.log("Connected");
        javaResponse.on('data',function(data){
            res.end(data);
        });
    });

    x.end();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//=================================

// const { ScreepsAPI } = require('screeps-api');
// const fs = require('fs');


// All options are optional
 //token: '0eed20cf-7269-4084-8a0b-650efa18afa0',
// const api = new ScreepsAPI({
//   token: '122731f4e5ef71a15d2285258bf1e20be1a2d56d',
//   protocol: 'http',
//   hostname: 'localhost',
//   port: 21025 ,
//   path: '/' // Do no include '/api', it will be added automatically
// });



  // api.auth('mrDima','123',{
  //   protocol: 'http',
  //   hostname: 'localhost',
  //   port: 21025,
  //   path: '/' // Do no include '/api', it will be added automatically
  // }).then(function(data){
    //api.me().then((user)=>console.log(user));

    // api.socket.connect();

    // api.socket.on('connected',(e)=>{
      // Do stuff after conntected
      //console.log(e);
    // })
    // api.socket.on('auth',(event)=>{
      //console.log(event);
      // Do stuff after auth
    // })

// api.socket.subscribe('console', (event)=>{
//   event.data.messages.log // List of console.log output for tick
// })


    // api.socket.subscribe('console')
    // api.socket.on('console',(event)=>{
    //   if (event && event.data && event.data.messages && event.data.messages.log && event.data.messages.log[0] ) {
    //     console.log(event.data.messages.log[0]);
    //   }
    // })
    //
    // api.console('require("someModule").sayHello()');

    /*
    var sources = Game.spawns['Spawn1'].room.find(FIND_SOURCES);
    for (key in sources) {
        console.log(sources[key].pos);
    }
    */

// api.raw.game.roomOverview('W3N4')
// .then(function(data){
//   console.log(data);
// });

  //
  // });

