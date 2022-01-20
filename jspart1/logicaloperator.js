const a = 11;
/*if (a > 10) {
  if (a % 2 == 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
  console.log("lucky number");
} else {
  console.log("not lucky number");
}*/

const conditionA = a > 10;
const conditionB = a % 2 == 0;
if (conditionA) {
  if (conditionB) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
  console.log("lucky number");
} else {
  console.log("not lucky number");
}

console.log("conditionA&&conditionB", conditionA && conditionB);
if (conditionA && conditionB) {
  console.log("Super Even lucky number");
} else if (conditionA || conditionB) {
  console.log("not bad number");
} else {
  console.log("Super not lucky number");
}

const resultText = a > 10 ? "luckynumber" : "Notluckynumber";
console.log("resultText >>", resultText);
