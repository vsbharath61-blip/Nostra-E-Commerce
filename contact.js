var contactForm = document.getElementById("contactForm");
var formResponse = document.getElementById("formResponse");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // stop form reload
    formResponse.textContent = "✅ Your response has been sent!";
    contactForm.reset(); // clear the form fields
  });
var sidenav = document.querySelector(".side-navbar");
function showNavbar() {
  sidenav.style.display = "block";
}

function closeNavbar() {
  sidenav.style.display = "none";
}
