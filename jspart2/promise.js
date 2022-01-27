//ภาษาjavascriptทำงานแยกกันในแต่ละfunctionได้
/*function log() {
  console.log(1);
}
function verylongtime() {
  setTimeout(function () {
    log();
    finish();
  }, 1000);
  //setTimeout(log, 1000);
}
function finish() {
  console.log(2);
}
verylongtime(finish);*/
//verylongtime();
//console.log(2);

/*
function getA() {
  return "A";
}
const GetA2 = () => {
  return "A";
};
*/
/*
function heavyCalculate(a, b, callback) {
  setTimeout(function () {
    const result = a + b;
    callback(result);
  }, 1000);
}
const result = heavyCalculate(1, 2, function (result) {
  console.log(result);
});
*/
/*
function heavyCalculate(a, b, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}
const result = heavyCalculate(1, 2).then(function (response) {
  heavyCalculate(response, 3).then(function (response2) {
    console.log(response2);
  });
});
//console.log(result);*/
