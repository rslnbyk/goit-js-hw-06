const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
