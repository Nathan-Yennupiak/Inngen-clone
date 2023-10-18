const Navigation = document.querySelector('.navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = Navigation.getAttribute('data-visible')

    if (visibility === "false") {
        Navigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    }

    else if ( visibility === "true") {
        Navigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

// Error for unfilled Fields
  document.querySelector("form").addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let hasError = false;

    // Hide error messages initially
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    if (nameInput.value.trim() === "") {
      nameError.innerText = "Please enter your name";
      nameError.style.display = "block"; // Display the error message
      hasError = true;
    }

    if (emailInput.value.trim() === "") {
      emailError.innerText = "Please enter your email";
      emailError.style.display = "block"; // Display the error message
      hasError = true;
    }

    if (messageTextarea.value.trim() === "") {
      messageError.innerText = "Please tell us what role(s) you are looking to fill";
      messageError.style.display = "block"; // Display the error message
      hasError = true;
    }

    if (hasError) {
      event.preventDefault(); // Prevent the form from submitting
    }
  });

