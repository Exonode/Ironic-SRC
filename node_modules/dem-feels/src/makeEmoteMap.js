'use strict';

const fs = require('fs');
const path = require('path');
const IO = require('./io');
const R = require('ramda');

const compose = R.compose;
const concat = R.concat;
const head = R.head;
const reduce = R.reduce;
const split = R.split;

// io_readdir :: String -> IO [String]
const io_readdir = function(path) {
  return IO(function() {
    return fs.readdirSync(path);
  });
};

// emotesPath :: String
const emotesPath = path.join(__dirname, '..', 'emotes');

// rawGitBaseUrl :: String
const rawGitBaseUrl = 'https://cdn.rawgit.com/CreaturePhil/dem-feels/master/emotes/';

// filenameToRawGit :: String -> String
const filenameToRawGit = concat(rawGitBaseUrl);

// filenameToName :: String -> String
const filenameToName = compose(head, split('.'));

// toEmoteMap :: [String] -> {String: String}
const toEmoteMap = reduce(function(acc, cur) {
  acc[filenameToName(cur)] = filenameToRawGit(cur);
  return acc;
}, {});

const makeEmoteMap = io_readdir(emotesPath).map(toEmoteMap);

module.exports = makeEmoteMap;
