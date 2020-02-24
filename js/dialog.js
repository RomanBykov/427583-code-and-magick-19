'use strict';

(function () {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var DEFAULT_COORD = {
    x: '50%',
    y: '80px'
  };
  var setupWindow = document.querySelector('.setup');
  var dialogHandle = setupWindow.querySelector('.upload');
  var setupClose = setupWindow.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupWizardForm = setupWindow.querySelector('.setup-wizard-form');
  var usernameInput = setupWizardForm.querySelector('.setup-user-name');

  function dialogMoveHandler(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    function mouseMoveHandler(moveEvt) {
      moveEvt.preventDefault();

      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
    }

    function mouseUpHandler(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      function clickPreventDefaultHandler(clickEvt) {
        clickEvt.preventDefault();

        dialogHandle.removeEventListener('click', clickPreventDefaultHandler);
      }

      if (isDragged) {
        dialogHandle.addEventListener('click', clickPreventDefaultHandler);
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

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


  function uploadHandler(evt) {
    window.backend.save(new FormData(setupWizardForm), closePopup, window.backend.errorMessageHandler);
    evt.preventDefault();
  }

  dialogHandle.addEventListener('mousedown', dialogMoveHandler);
  setupOpen.addEventListener('click', setupOpenClickHandler);
  setupOpenIcon.addEventListener('keydown', setupOpenKeydownHandler);
  setupWizardForm.addEventListener('submit', uploadHandler);
  usernameInput.addEventListener('invalid', window.validate.invalidFormHandler);

})();
