'use strict';
  exports.globalname = 'utils';

  exports.rand = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
  exports.isNumber = function (arg) {
   return Math.floor(arg) === arg;
};