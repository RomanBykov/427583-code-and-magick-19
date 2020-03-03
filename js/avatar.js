'use strict';

(function () {
  var fileChooser = document.querySelector('.upload input[type="file"]');
  var preview = document.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var reader = new FileReader();
    var file = fileChooser.files[0];

    function fileLoadHandler() {
      preview.src = reader.result;
      reader.removeEventListener('load', fileLoadHandler);
    }

    reader.addEventListener('load', fileLoadHandler);

    reader.readAsDataURL(file);
  });

})();
