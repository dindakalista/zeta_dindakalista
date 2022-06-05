const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  // Your Code Here
  const genap = [];
  const ganjil = [];
  for(let i = 0; i < number.length; i++) {
    if(number[i] %2 == 0) {
      genap.push(number[i])
    } else {
      ganjil.push(number[i])
    }
  }
  console.log(genap);
  console.log(ganjil);
}

console.log(result(number));