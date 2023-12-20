const categoriesRef = document.querySelectorAll(".item");
const h2Ref = document.querySelectorAll("h2");

console.log(`Number of categories: ${categoriesRef.length}`);
categoriesRef.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
