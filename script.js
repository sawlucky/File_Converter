
var saveButton = document.getElementById('btn');

// Get the save option select element
var saveOptionSelect = document.getElementById('inputarea');

// Add change event listener to the save option select element
saveOptionSelect.addEventListener('change', function() {
  // Get the selected save option
  var saveOption = saveOptionSelect.value;

  // Get the file extension based on the selected save option
  var fileExtension = saveOption.split('.').pop();

  // Update the label of the save button
  saveButton.innerHTML = 'Save As ' + fileExtension.toUpperCase() + ' file';
});

// Add click event listener to the button
saveButton.addEventListener('click', function() {
  // Get the textarea value
  var textareaValue = document.getElementById('textarea').value;

  // Get the selected save option
  var saveOption = document.getElementById('inputarea').value;

  // Get the filename input value
  var filename = document.getElementById('filename').value;

  // Create a new Blob object with the textarea value and selected save option
  var blob = new Blob([textareaValue], { type: saveOption });

  // Create a new anchor element
  var anchor = document.createElement('a');

  // Set the href attribute to the URL of the Blob object
  anchor.href = URL.createObjectURL(blob);

  // Set the download attribute to the filename input value
  anchor.download = filename;

  // Programmatically click the anchor element to trigger the download
  anchor.click();
});
