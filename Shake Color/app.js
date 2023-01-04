const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const textColor = document.getElementsByTagName("h1")[0];
let clearClass;
let copyText = document.querySelector(".copy-text");

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

copyText.querySelector("button").addEventListener("click", function () {
  /* Because of some security restrictions you can only execute the Copy command 
  if the user interacted with the page, so you have to add a button and copy 
  the text after the user clicks on the button. */
  let textArea = document.createElement("textarea");

  textArea.value = color.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 1000);
  textArea.remove();
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
