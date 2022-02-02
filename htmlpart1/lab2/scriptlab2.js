function calculateCircleArea(r) {
  console.log(r);
  const result = Math.PI * r ** 2;
  alert(result);
}

function OnYourButtonClick(r) {
  const inputTag = document.getElementById("circle-radius");
  console.log(Number(inputTag.value));
  calculateCircleArea(Number(inputTag.value));
}
function capitlaizeText() {
  const box = document.getElementById("nat-box");
  console.log(box.innerText.toUpperCase());
  box.innerText = box.innerText.toUpperCase();
}
function tolowerText() {
  const box = document.getElementById("nat-box");
  console.log(box.innerText.toLowerCase());
  box.innerText = box.innerText.toLowerCase();
}

document.addEventListener("scroll", function (t, e) {
  console.log(e);
  console.log(t);
});
