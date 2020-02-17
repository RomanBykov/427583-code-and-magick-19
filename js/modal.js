'use strict';

(function () {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var DEFAULT_COORD = {
    x: '50%',
    y: '80px'
  };

  var setupWindow = document.querySelector('.setup');
  var setupClose = setupWindow.querySelector('.setup-close');

  function openPopup() {
    setupWindow.style.top = DEFAULT_COORD.y;
    setupWindow.style.left = DEFAULT_COORD.x;

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

  window.modal = {
    setupOpenClickHandler: setupOpenClickHandler,
    setupOpenKeydownHandler: setupOpenKeydownHandler,
    closePopup: closePopup
  };
})();
