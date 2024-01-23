function toggleSection(btn) {
    var content = btn.nextElementSibling; 
  
    // Toggle the display of the content for this specific section
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }

  setTimeout(function() {
    var content = document.getElementById('collapsibleContent');
    content.style.display = 'none'; 
  }, 30000);
  
  // Hide content by default on page load
  document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('collapsibleContent');
    content.style.display = 'none';

  });
  function startCountdown(durationInSeconds) {
    var timer = durationInSeconds;
    var countdownDisplay = document.getElementById('countdown');

    var countdownInterval = setInterval(function () {
      var minutes = parseInt(timer / 60, 10);
      var seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      countdownDisplay.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = 'Countdown expired';
       
      }
    }, 1000);
  }
  //Tesing 