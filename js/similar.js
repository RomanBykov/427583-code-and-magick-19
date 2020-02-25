'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var wizards = [];
  var userCoatColor;
  var userEyesColor;

  window.wizard.eyesChangeHandler = window.debounce(function (color) {
    userEyesColor = color;
    updateWizards();
  });

  window.wizard.coatChangeHandler = window.debounce(function (color) {
    userCoatColor = color;
    updateWizards();
  });

  function compareNames(leftWizard, rightWizard) {
    switch (true) {
      case leftWizard > rightWizard:
        return 1;
      case leftWizard < rightWizard:
        return -1;
      default:
        return 0;
    }
  }

  function getRank(wizard) {
    var rank = 0;
    if (wizard.colorCoat === userCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === userEyesColor) {
      rank += 1;
    }
    return rank;
  }

  function compareWizards(leftWizard, rightWizard) {
    var rankDiff = getRank(rightWizard) - getRank(leftWizard);

    if (rankDiff === 0) {
      rankDiff = compareNames(leftWizard.name, rightWizard.name);
    }

    return rankDiff;
  }

  function updateWizards() {
    var uniqueWizards = wizards.slice();
    uniqueWizards.sort(compareWizards);

    window.render(uniqueWizards);
  }

  function succesLoadHandler(wizardsArr) {
    wizards = wizardsArr;
    updateWizards();
  }

  function initSetup() {
    window.backend.load(succesLoadHandler, window.backend.errorMessageHandler);
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  }

  initSetup();

})();
