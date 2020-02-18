'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var errorMessageStyle = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; left: 0; right: 0; font-size: 30px;';
  var pageBody = document.querySelector('body');

  function renderWizard(wizard) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  function appendWizardsToPage(wizardsArr) {
    var listFragment = document.createDocumentFragment();
    var shuffledWizards = window.util.getRandomArray(wizardsArr);

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      listFragment.appendChild(renderWizard(shuffledWizards[i]));
    }

    similarWizardsList.appendChild(listFragment);
  }

  function succesLoadHandler(wizardsArr) {
    appendWizardsToPage(wizardsArr);
  }

  function errorLoadHandler(errorMessage) {
    var errorMessageElement = document.createElement('div');
    errorMessageElement.style = errorMessageStyle;
    errorMessageElement.textContent = errorMessage;
    pageBody.insertAdjacentElement('afterbegin', errorMessageElement);
    errorMessageElement.classList.add('error-message');
  }

  window.backend.load(succesLoadHandler, errorLoadHandler);
})();
