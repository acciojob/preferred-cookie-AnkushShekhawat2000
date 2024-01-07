//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Load user preferences from cookies and apply them
  loadPreferences();

  // Add event listener to the form for saving preferences
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form inputs
    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    // Save preferences in cookies
    setCookie('fontsize', fontSize);
    setCookie('fontcolor', fontColor);

    // Apply the new preferences
    applyPreferences(fontSize, fontColor);

    alert('Preferences saved!');
  });
});

// Function to load preferences from cookies and apply them
function loadPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize && fontColor) {
    applyPreferences(fontSize, fontColor);
  }
}

// Function to apply preferences to the page
function applyPreferences(fontSize, fontColor) {
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
}

// Function to set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}
