'use strict';

(function () {
  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 70;
  var COEFFICIENT = 1.337;

  function getWizardHeight() {
    return COEFFICIENT * wizardWidth;
  }

  function getFireballSpeed(left) {
    return left ? 5 : 2;
  }

  function getWizardX(width) {
    return width / 2;
  }

  function getWizardY(height) {
    return height / 3 * 2;
  }

  window.settings = {
    fireballSize: fireballSize,
    wizardSpeed: wizardSpeed,
    getWizardHeight: getWizardHeight,
    getFireballSpeed: getFireballSpeed,
    getWizardX: getWizardX,
    getWizardY: getWizardY
  };
})();
