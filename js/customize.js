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

  function changeWizardElementColor(element, colors) {
    function getRandomColor() {
      return colors[window.util.getRandomInt(0, colors.length - 1)];
    }

    if (element.classList.contains('setup-fireball-wrap')) {
      var color = getRandomColor();
      element.style.backgroundColor = color;
      wizardFireball.querySelector('input[name="fireball-color"]').value = color;
    } else {
      element.style.fill = getRandomColor();
    }
  }

  function wizardChangeHandler(evt) {
    var target = evt.target.classList;

    switch (true) {
      case target.contains('wizard-coat'):
        changeWizardElementColor(wizardCoat, coatColors);
        break;
      case target.contains('wizard-eyes'):
        changeWizardElementColor(wizardEyes, eyesColors);
        break;
      case target.contains('setup-fireball'):
        changeWizardElementColor(wizardFireball, fireballColors);
        break;
    }
  }

  function errorSaveHandler(errorMessage) {
    var errorMessageElement = document.createElement('div');
    errorMessageElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; left: 0; right: 0; font-size: 30px;';
    errorMessageElement.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', errorMessageElement);
  }


  function uploadHandler(evt) {
    window.backend.save(new FormData(setupWizardForm), window.modal.closePopup, errorSaveHandler);
    evt.preventDefault();
  }

  window.customize = {
    wizardChangeHandler: wizardChangeHandler,
    uploadHandler: uploadHandler
  };
})();
