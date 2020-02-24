'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  window.render = function (wizardsArr) {
    var listFragment = document.createDocumentFragment();
    var wizardsLength = wizardsArr.length >= WIZARDS_NUMBER ? WIZARDS_NUMBER : wizardsArr.length;
    similarWizardsList.innerHTML = '';

    for (var i = 0; i < wizardsLength; i++) {
      listFragment.appendChild(renderWizard(wizardsArr[i]));
    }

    similarWizardsList.appendChild(listFragment);
  };

})();
