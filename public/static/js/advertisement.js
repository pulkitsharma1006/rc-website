document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('advertisement_popup');
  var closeBtn = document.querySelector('.pop_cls');
  var registerBtn = document.getElementById('registerBtn');

  // Get today's date and time
  var today = new Date();
  var targetDate = new Date('2024-08-09T12:30:00'); // August 9, 2024, 12:30 PM
  var hasSeenPopup = localStorage.getItem('hasSeenPopup');

  // Show the popup only if today is before August 9, 2024, 12:30 PM, and it hasn't been shown before
  if (today < targetDate && !hasSeenPopup) {
      // Show the popup after 3 seconds
      setTimeout(function() {
          popup.style.display = 'block';
      }, 3000);
  }

  // Close the popup when the close button is clicked
  closeBtn.onclick = function() {
      popup.style.display = 'none';
  }

  // Close the popup when clicking outside of the popup content
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  }

  // Set local storage item and open the link in a new window when the register button is clicked
  registerBtn.onclick = function() {
      localStorage.setItem('hasSeenPopup', 'true'); // Mark that the popup has been seen
      popup.style.display = 'none';
      setTimeout(function() {
          window.open('https://www.linkedin.com/events/cutfuelcostsby20-thesecretweapo7224659409669386240/theater/', '_blank');
      }, 1000); // 1 second delay to ensure the popup is closed before redirecting
  }
});