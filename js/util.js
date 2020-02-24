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

  function removeElementsFromParrent(parrentElement) {
    while (parrentElement.firstChild) {
      parrentElement.removeChild(parrentElement.firstChild);
    }
  }

  function getRandomElement(array) {
    return array[getRandomInt(0, array.length - 1)];
  }

  window.util = {
    getRandomInt: getRandomInt,
    getRandomArrayItem: getRandomArrayItem,
    removeElementsFromParrent: removeElementsFromParrent,
    getRandomElement: getRandomElement
  };
})();
