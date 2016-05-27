'use strict';

const R = require('ramda');

const compose = R.compose;

function IO(wrapper) {
  const unsafePerformIO = wrapper;

  return {
    map: function(f) {
      return IO(compose(f, unsafePerformIO));
    },
    unsafePerformIO: unsafePerformIO
  };
}

module.exports = IO;
