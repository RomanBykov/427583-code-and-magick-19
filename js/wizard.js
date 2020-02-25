'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  var wizard = {
    eyesChangeHandler: function () {},
    coatChangeHandler: function () {},
    fireballChangeHandler: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizard.coatChangeHandler(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizard.eyesChangeHandler(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = newColor;
    wizardFireball.querySelector('input[name="fireball-color"]').value = newColor;
    wizard.fireballChangeHandler(newColor);
  });

  window.wizard = wizard;

})();
