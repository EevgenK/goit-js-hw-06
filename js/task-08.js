const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля!");
  }
  const loginFormValue = { login: email.value, password: password.value };
  console.log(loginFormValue);
  e.currentTarget.reset();
}
