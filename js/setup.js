'use strict';

var WIZARDS_NUMBER = 4;
var ENTER_KEY = 13;
var ESCAPE_KEY = 27;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupWindow = document.querySelector('.setup');
var similarWizardsList = document.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupWizardForm = setupWindow.querySelector('.setup-wizard-form');
var setupPlayer = setupWizardForm.querySelector('.setup-player');
var setupWizard = setupPlayer.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
var usernameInput = setupWizardForm.querySelector('.setup-user-name');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateWizards(quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards.push({
      name: getRandomArrayItem(names),
      lastname: getRandomArrayItem(lastnames),
      coatColor: getRandomArrayItem(coatColors),
      eyesColor: getRandomArrayItem(eyesColors)
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

function initSetup() {
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpenIcon.addEventListener('keydown', setupOpenKeydownHandler);
  setupPlayer.addEventListener('click', wizardChangeHandler);
  usernameInput.addEventListener('invalid', invalidFormHandler);
}

function openPopup() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', escapePressHandler);
  setupClose.addEventListener('click', setupCloseClickHandler);
  setupClose.addEventListener('keydown', setupCloseKeydownHandler);
}

function closePopup() {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', escapePressHandler);
  setupClose.removeEventListener('click', setupCloseClickHandler);
  setupClose.removeEventListener('keydown', setupCloseKeydownHandler);
}

function setupOpenClickHandler() {
  openPopup();
}

function setupCloseClickHandler() {
  closePopup();
}

function setupOpenKeydownHandler(evt) {
  if (evt.keyCode === ENTER_KEY) {
    openPopup();
  }
}

function setupCloseKeydownHandler(evt) {
  if (evt.keyCode === ENTER_KEY) {
    closePopup();
  }
}

function escapePressHandler(evt) {
  var target = evt.target;
  if (evt.keyCode === ESCAPE_KEY && !target.classList.contains('setup-user-name')) {
    closePopup();
  }
}

function changeWizardElementColor(element, colors) {
  function getRandomColor() {
    return colors[getRandomInt(0, colors.length - 1)];
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

function invalidFormHandler(evt) {
  var currentTarget = evt.currentTarget;

  if (currentTarget.classList.contains('setup-user-name')) {
    var target = evt.target;

    switch (true) {
      case target.value.length < MIN_NAME_LENGTH:
        target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
        break;
      case target.value.length > MAX_NAME_LENGTH:
        target.setCustomValidity('Имя должно состоять максимум из ' + MAX_NAME_LENGTH + '-и символов');
        break;

      default:
        target.setCustomValidity('');
    }
  }
}

generateWizards(WIZARDS_NUMBER);
appendWizardsToPage(wizards);
initSetup();
