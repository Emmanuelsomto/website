// Find the form element using its ID
const form = document.getElementById("submit-form");

//added eventListener here using Gemini AI
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted sucessfully!");
});