
function displayMessage(message, callback) {
    setTimeout(() => {
      document.getElementById('message').textContent = message;
      callback();
    }, 1000);
  }

  function countdown(count, callback) {
    if (count > 0) {
      setTimeout(() => {
        document.getElementById('countdown').textContent = count;
        countdown(count - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }

  countdown(10, function () {
    displayMessage('Happy Independence Day', function () {
      // Additional callback logic can be added here if needed.
      // For this specific task, we'll leave it empty.
    });
  });