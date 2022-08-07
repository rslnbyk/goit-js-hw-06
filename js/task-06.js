const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
});
