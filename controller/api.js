var Player = require('../models/schema.js');


exports.post = function(req, res){
    new Player({name: req.body.name, team: req.body.team, channel: req.body.channel}).save();
    res.send('player created');
}

exports.playerByTeam = function(req,res){
    Player.findOne({team: req.params.teams}, function(err, teams){
        res.send(teams);
    });
}

exports.playerByName = function(req, res){
    Player.findOne({name: req.params.name}, function(err, player){
        res.send(player);
    });
}

exports.allPlayers = function(req, res){
    Player.find({}, function(err, players){
        var userMap = [];

        players.forEach(function(player){
            userMap.push(player.name);
        });

        res.send(userMap);
        console.log(userMap);
    });
}

exports.players = function(req, res){
    Player.find({}, function(err, players){
        res.send(players);
    });
}

exports.removeByName = function (req, res){
    Player.remove({name: req.params.name }, function(err){
        if (err)
            res.send(err)
        res.send(req.params.name + " deleted")
    });
}