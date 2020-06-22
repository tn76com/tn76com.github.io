var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Leadership = require('../models/leadership');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
	.get(function (req, res, next) {
		Leadership.find({}, function (err, leadership) {
			if (err) throw err;
			res.json(leadership);
		});
	})

.post(function (req, res, next) {
	Leadership.create(req.body, function (err, leadership) {
		if (err) throw err;
		console.log('leadership created !');
		var id = leadership._id;
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Added the leadership with id:' + id);
	});
})

.delete(function (req, res, next) {
	leadership.remove({}, function (err, resp) {
		if (err) throw err;
		res.json(resp);
	});
});

leaderRouter.route('/:leaderId')

.get(function (req, res, next) {
	Leadership.findById(req.params.leaderId, function (err, leadership) {
		if (err) throw err;
		res.json(leadership);
	});
})

.put(function (req, res, next) {
	leadership.findByIdAndUpdate(req.params.leaderId, {
		$set: req.body
	}, {
		new: true
	}, function (err, leadership) {
		if (err) throw err;
		res.json(leadership);
	});
})

.delete(function (req, res, next) {
	leadership.findByIdAndRemove(req.params.leaderId, function (err, resp) {
		if (err) throw err;
		res.json(resp);
	});
});


module.exports = leaderRouter
