'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var dialogHandle = setupWindow.querySelector('.upload');

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

  dialogHandle.addEventListener('mousedown', dialogMoveHandler);
})();
