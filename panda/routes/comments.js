"use strict";

var express = require('express');
var router = express.Router();

router.get('/commentsList', (req, res) => {
  var db = req.db;
  var collection = db.get('commentsList');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

router.post('/addComment', (req, res) => {
  var db = req.db;
  var collection = db.get('commentsList');
  collection.insert(req.body, (err, result) => {
    res.send((err === null) ? { msg: '' } : { msg: err });
  });
});

router.delete('/deleteComment/:id', (req, res) => {
  var db = req.db;
  var collection = db.get('commentsList');
  var commentToDelete = req.params.id;
  collection.remove({ '_id' : commentToDelete }, (err) => {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;