'use strict';

(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.util = {
    getRandomInt: getRandomInt,
    getRandomArrayItem: getRandomArrayItem
  };
})();
