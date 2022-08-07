function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }

  boxes.append(...divs);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});
