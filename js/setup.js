'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var wizards = [];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupWindow = document.querySelector('.setup');
var similarWizardsList = document.querySelector('.setup-similar-list');

var getRandomArrayItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards.push({
      name: getRandomArrayItem(names),
      lastname: getRandomArrayItem(lastnames),
      coatColor: getRandomArrayItem(coatColors),
      eyesColor: getRandomArrayItem(eyesColors)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var appendWizardsToPage = function (wizardsArr) {
  var listFragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsArr.length; i++) {
    listFragment.appendChild(renderWizard(wizardsArr[i]));
  }
  similarWizardsList.appendChild(listFragment);
};

var showSetup = function () {
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');
};

generateWizards(WIZARDS_NUMBER);
appendWizardsToPage(wizards);
showSetup();
