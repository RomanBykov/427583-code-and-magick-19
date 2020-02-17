'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWizardForm = setupWindow.querySelector('.setup-wizard-form');
  var setupPlayer = setupWizardForm.querySelector('.setup-player');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var usernameInput = setupWizardForm.querySelector('.setup-user-name');

  function initSetup() {
    setupWindow.querySelector('.setup-similar').classList.remove('hidden');
    setupOpen.addEventListener('click', window.modal.setupOpenClickHandler);
    setupOpenIcon.addEventListener('keydown', window.modal.setupOpenKeydownHandler);
    setupPlayer.addEventListener('click', window.customize.wizardChangeHandler);
    usernameInput.addEventListener('invalid', window.validate.invalidFormHandler);
    setupWizardForm.addEventListener('submit', window.customize.uploadHandler);
  }

  initSetup();
})();
