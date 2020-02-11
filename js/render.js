'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var wizards = [];
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var similarWizardsList = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function generateWizards(quantity) {
    for (var i = 0; i < quantity; i++) {
      wizards.push({
        name: window.util.getRandomArrayItem(names),
        lastname: window.util.getRandomArrayItem(lastnames),
        coatColor: window.util.getRandomArrayItem(coatColors),
        eyesColor: window.util.getRandomArrayItem(eyesColors)
      });
    }
    return wizards;
  }

  function renderWizard(wizard) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  function appendWizardsToPage(wizardsArr) {
    var listFragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsArr.length; i++) {
      listFragment.appendChild(renderWizard(wizardsArr[i]));
    }
    similarWizardsList.appendChild(listFragment);
  }

  generateWizards(WIZARDS_NUMBER);
  appendWizardsToPage(wizards);
})();
