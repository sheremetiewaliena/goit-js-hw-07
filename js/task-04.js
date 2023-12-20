const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  const data = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(data);

  formEl.reset();
}
