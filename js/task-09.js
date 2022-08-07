function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
