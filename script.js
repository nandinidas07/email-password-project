const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const submitBtn = document.getElementById("submitBtn");

let isEmailValid = false;
let isPasswordValid = false;


emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (email.length > 3 && email.includes("@")) {
    emailMsg.textContent = "All good to go!";
    emailMsg.className = "success";
    isEmailValid = true;
  } else {
    emailMsg.textContent = "Email must be >3 chars & contain @";
    emailMsg.className = "error";
    isEmailValid = false;
  }
});


passwordInput.addEventListener("input", () => {
  const password = passwordInput.value.trim();
  if (password.length > 8) {
    passwordMsg.textContent = "All good to go!";
    passwordMsg.className = "success";
    isPasswordValid = true;
  } else {
    passwordMsg.textContent = "Password must be >8 characters";
    passwordMsg.className = "error";
    isPasswordValid = false;
  }
});

submitBtn.addEventListener("click", () => {
  if (isEmailValid && isPasswordValid) {
    if (confirm("Are you sure you want to sign up?")) {
      alert("Successful signup!");
      emailInput.value = "";
      passwordInput.value = "";
      emailMsg.textContent = "";
      passwordMsg.textContent = "";
    }
  } else {
    alert("Validation failed! Redirecting back to form.");
    location.reload();
  }
});
