'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  // var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


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
    errorMessageElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; left: 0; right: 0; font-size: 30px;';
    errorMessageElement.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', errorMessageElement);
  }

  window.backend.load(succesLoadHandler, errorLoadHandler);
})();
