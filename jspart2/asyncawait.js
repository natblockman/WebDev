//async await รอpromiseใ้หอยู่ในสถานะfullfill
function heavyCalculate(a, b, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

async function main() {
  const result1 = await heavyCalculate(5, 2);
  console.log(result1);
}
main();
