const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (!email.value || !password.value) {
    alert("Не все поля заполнены");
  } else {
    const data = { email: email.value, password: password.value };
    console.log(data);
    e.currentTarget.reset();
  }
});
