var controller = require('../controller/api.js');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('/api working');
});

router.get('/players', controller.players);

router.get('/players/:name', controller.playerByName);

router.post('/players', controller.post);

router.delete('/players/:name', controller.removeByName);

router.get('/players/teams/:teams', controller.playerByTeam);

router.get('/allPlayers', controller.allPlayers);

module.exports = router;