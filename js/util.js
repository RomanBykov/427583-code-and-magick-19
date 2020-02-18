'use strict';

(function () {
  var MIN_WIZARDS_NUMBER = 4;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    return arr;
  }

  function getRandomArray(arr) {
    shuffle(arr);
    var randomArr = arr.slice(0, getRandomInt(MIN_WIZARDS_NUMBER, arr.length - 1));

    return randomArr;
  }

  function removeElementsFromParrent(parrentElement) {
    while (parrentElement.firstChild) {
      parrentElement.removeChild(parrentElement.firstChild);
    }
  }

  window.util = {
    getRandomInt: getRandomInt,
    getRandomArrayItem: getRandomArrayItem,
    getRandomArray: getRandomArray,
    removeElementsFromParrent: removeElementsFromParrent
  };
})();
