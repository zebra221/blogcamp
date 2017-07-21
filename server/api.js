var express = require('express');
var api = express.Router();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.sqlite3');

db.serialize(function () {
  db.run("CREATE TABLE IF NOT EXISTS posts (title TEXT, post TEXT, image TEXT, author TEXT);");
});

api.get('/api/image', function (req, res, next) {
  db.all("SELECT rowid AS id, title, post, image, author FROM  posts", function (err, rows) {
    res.json(rows);
  });
});
api.post('/api/image', function (req, res, next) {
  db.run(`INSERT INTO posts VALUES (?,?,?,?);`,
    [req.body.title, req.body.post, req.body.image, req.body.author],
    function () {
      res.json(req.body);
    });
});
api.delete('/api/image', function (req, res, next) {
  db.run("DELETE FROM posts WHERE rowid = ?;", [req.body.id], function() {
    res.json({
      message: "All done"
    });
  });
});

module.exports = api;
