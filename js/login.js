const btnSubmit = document.getElementById("btn-submit");

//step-1: add click handler with the submit button
btnSubmit.addEventListener("click", () => {
  // step-2: get the email address inside the email input field
  // always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //step-3: get the password

  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  // Danger : DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE

  //   STEP-4 : VERIFY EMAIL AND PASSWORD and check whether valid user or not
  if (email === "sontan@gmail.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("tui password bhujle gesos!! toke ami teijjo putro ghosona korlam");
  }
});
