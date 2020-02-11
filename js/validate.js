'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

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

  window.validate = {
    invalidFormHandler: invalidFormHandler
  };
})();
