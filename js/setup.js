'use strict';

(function () {
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWindow = document.querySelector('.setup');
  var setupWizardForm = setupWindow.querySelector('.setup-wizard-form');
  var setupPlayer = setupWizardForm.querySelector('.setup-player');
  var setupWizard = setupPlayer.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizards = [];
  var userCoatColor;
  var userEyesColor;
  var userFureballColor;

  function changeCoatColor() {
    userCoatColor = window.util.getRandomElement(coatColors);
    wizardCoat.style.fill = userCoatColor;
    updateWizards();
  }

  function changeEyesColor() {
    userEyesColor = window.util.getRandomElement(eyesColors);
    wizardEyes.style.fill = userEyesColor;
    updateWizards();
  }

  function changeFireballColor() {
    userFureballColor = window.util.getRandomElement(fireballColors);
    wizardFireball.style.backgroundColor = userFureballColor;
    wizardFireball.querySelector('input[name="fireball-color"]').value = userFureballColor;
  }

  function wizardChangeHandler(evt) {
    var target = evt.target.classList;

    switch (true) {
      case target.contains('wizard-coat'):
        window.debounce(changeCoatColor);
        break;
      case target.contains('wizard-eyes'):
        window.debounce(changeEyesColor);
        break;
      case target.contains('setup-fireball'):
        window.debounce(changeFireballColor);
        break;
      default:
        updateWizards();
        break;
    }
  }

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
    setupPlayer.addEventListener('click', wizardChangeHandler);
  }

  initSetup();

})();
