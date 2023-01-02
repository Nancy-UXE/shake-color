const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const textColor = document.getElementsByTagName("h1")[0];
let clearClass;

btn.addEventListener("click", function () {
  if (clearClass) {
    clearTimeout(clearClass);
  }

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  textColor.style.backgroundColor = hexColor;
  textColor.classList.add("shake-me");
  clearClass = setTimeout(() => {
    textColor.classList.remove("shake-me");
  }, "500");
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
