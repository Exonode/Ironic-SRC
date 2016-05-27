'use strict';

const makeEmoteMap = require('./makeEmoteMap');
const makeParseMessage = require('./makeParseMessage');

let emotes = makeEmoteMap.unsafePerformIO();

let maxCount = 5;

function demFeels(msg) {
  return makeParseMessage(emotes, maxCount, msg);
}

demFeels.extendEmotes = function(newEmotes) {
  emotes = Object.assign({}, emotes, newEmotes);
};

demFeels.getEmotes = function() {
  return emotes;
};

demFeels.setMaxCount = function(count) {
  maxCount = count;
};

module.exports = demFeels;
