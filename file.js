const process = require("./process_pak");
const fs = require("fs");
const path = require("path");
const Exception = require("./Exception");

const set_default_root = function() {};
const get_root = function() {
  if (process.get_arch() === "win32") {
    //windows
    return "c:\\";
  } else {
    //linux||os
    return "/";
  }
};
const is_abs = function() {};
const ls = function(path, callback) {
  if (is_dir(path)) {
    fs.readdir(path, function(err, rs) {
      callback(err, rs);
    });
  } else {
    throw new Error("该路径不是目录!");
  }
};
const del = function(path) {};
const mkdir = function(path, name) {};

const is_dir = function(path) {
  return fs.statSync(path).isDirectory();
};
module.exports = {
  get_root,
  ls,
  is_dir
};
