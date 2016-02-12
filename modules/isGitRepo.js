/**
 *    Returns a promise that attempts to read the ./.git/ directory in the folder
 *    @dep    {node}     fs
 *    @return {Promise}  Promise that resolves with true if you are in a git repo
 */
"use strict";
const fs = require("fs");

module.exports = () => {
  return new Promise((res, rej) => {
    fs.readdir(process.cwd()+'/.git/', (e, files) => {
      if (e) rej("Please run git-labelmaker inside a git repository!");
      res(true);
    })
  });
};
