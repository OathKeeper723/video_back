const express = require("express");
const file = require("./file.js");
const init = require("./init_param.js");

var default_root;
default_root = init.init_default_root();
var app = express();

app.post("/file_tree", function(req, res) {
  var pwd = default_root ? default_root : file.get_root();
  try {
    file.ls(pwd, function(err, list) {
      list;
      res.send(list);
    });
  } catch (err) {
    console.log(err);
    res.send(JSON.stringify(err));
  }
});
console.log("listening on 12200……");
app.listen(12200);
