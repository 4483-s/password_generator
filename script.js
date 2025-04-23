const btn = document.querySelector(".btn");
const lowercaseCh = document.querySelector("#lowercase");
const uppercaseCh = document.querySelector("#uppercase");
const numberCh = document.querySelector("#number");
const specialCh = document.querySelector("#special");
const result = document.querySelector(".result");
const length = document.querySelector("#length");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const number = "1234567890";
const specialChar = `!@#$%^&*()_+=-"';:/.,<>?\\|~`;
btn.addEventListener("click", function () {
  generate();
});
function generate() {
  let list = "";
  let generatedResult = "";
  if (lowercaseCh.checked) {
    list += lowercase;
  }
  if (uppercaseCh.checked) {
    list += uppercase;
  }
  if (numberCh.checked) {
    list += number;
  }
  if (specialCh.checked) {
    list += specialChar;
  }
  for (let i = 0; i < length.value; i++) {
    generatedResult += list[Math.floor(Math.random() * list.length)];
  }
  result.textContent = generatedResult;
}
