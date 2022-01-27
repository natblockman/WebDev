const name = "nat";

function calculateCircleArea(r) {
  return Math.PI * r ** 2;
}
function calculateSquareArea(w) {
  return w ** 2;
}
function getName() {
  return name;
}

module.exports = {
  calculateCircleArea,
  calculateSquareArea,
  getName,
};
