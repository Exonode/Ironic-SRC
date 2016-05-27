'use strict';

const R = require('ramda');

const append = R.append;
const compose = R.compose;
const has = R.has;
const join = R.join;
const prop = R.prop;
const reduce = R.reduce;
const replace = R.replace;
const split = R.split;
const tail = R.tail;
const trim = R.trim;

// imgTag :: String
const imgTag = '<img src="{url}" title="{name}" width="50" height="50" />';

// parseEmote :: String -> String -> String
const parseEmote = function(url, name) {
  const template = compose(replace('{name}', name), replace('{url}', url));
  return template(imgTag);
};

// msgToList :: String -> String
const msgToList = compose(split(' '), trim);

// makeParseMessage :: [String] -> Integer -> String -> String
const makeParseMessage = function(emotes, defaultMaxCount, msg) {
  const list = msgToList(msg);
  const initialObj = {list: list, count: 0, output: []};

  // parse :: [String] -> {list: [String], count: Integer, output: [String]}
  const parse = reduce(function(acc, cur) {
    const obj = Object.assign({}, acc, {list: tail(acc.list)});

    if (has(cur, emotes) && acc.count < defaultMaxCount) {
      const emote = parseEmote(prop(cur, emotes), cur);
      return Object.assign({}, obj, {
        count: acc.count + 1,
        output: append(emote, acc.output)
      });
    } else {
      return Object.assign({}, obj, {output: append(cur, acc.output)});
    }
  }, initialObj);

  return compose(join(' '), prop('output'), parse)(list);
};

module.exports = makeParseMessage;
