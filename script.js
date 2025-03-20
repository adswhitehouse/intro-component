// Variables
const nameOrPassword = document.querySelectorAll(".jsNameOrPassword");
const email = document.querySelector(".jsEmail");
const formBtn = document.querySelector(".jsFormBtn");

// Valid email
const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

// When submitting form
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   Remove error states and if first name, last name or password are empty create an error state for the erroneous element/s
  nameOrPassword.forEach((input) => {
    input.classList.remove("error-border");
    input.nextElementSibling.classList.remove("error-visibility");
    input.nextElementSibling.nextElementSibling.classList.remove(
      "error-visibility"
    );
    if (!input.value) {
      input.classList.add("error-border");
      input.nextElementSibling.classList.add("error-visibility");
      input.nextElementSibling.nextElementSibling.classList.add(
        "error-visibility"
      );
    }
  });
  //   Remove error state for email and if email isn't formatted correctly add the error state
  email.classList.remove("error-border");
  email.nextElementSibling.classList.remove("error-visibility");
  email.nextElementSibling.nextElementSibling.classList.remove(
    "error-visibility"
  );
  if (!emailRegex.test(email.value)) {
    email.classList.add("error-border");
    email.nextElementSibling.classList.add("error-visibility");
    email.nextElementSibling.nextElementSibling.classList.add(
      "error-visibility"
    );
  }
});
