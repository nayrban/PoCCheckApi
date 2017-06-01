'use strict';

var mongoose = require('mongoose'),
  CheckRequest = mongoose.model('CheckRequest');

exports.list_all_CheckRequests = function(req, res) {
  CheckRequest.find({}, function(err, CheckRequest) {
    if (err)
      res.send(err);
    res.json(CheckRequest);
  });
};


exports.create_a_CheckRequest = function(req, res) {
  var new_CheckRequest = new CheckRequest(req.body);
  new_CheckRequest.save(function(err, CheckRequest) {
    if (err)
      res.send(err);
    res.json(CheckRequest);
  });
};

exports.read_a_CheckRequest = function(req, res) {
  CheckRequest.findById(req.params.CheckRequestId, function(err, CheckRequest) {
    if (err)
      res.send(err);
    res.json(CheckRequest);
  });
};

exports.update_a_CheckRequest = function(req, res) {
  CheckRequest.findOneAndUpdate(req.params.CheckRequestId, req.body, {new: true}, function(err, CheckRequest) {
    if (err)
      res.send(err);
    res.json(CheckRequest);
  });
};


exports.delete_a_CheckRequest = function(req, res) {
  CheckRequest.remove({
    _id: req.params.CheckRequestId
  }, function(err, CheckRequest) {
    if (err)
      res.send(err);
    res.json({ message: 'CheckRequest successfully deleted' });
  });
};
