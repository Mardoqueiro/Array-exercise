const data = ["Mardoqueiro", 4, 6, 9, 11, "Dimbu"];
console.log(data);
const dataNumbers = Array.from(data).filter(el => typeof el === "number");
console.log(dataNumbers);
console.log(dataNumbers.includes(4));
console.log(dataNumbers.indexOf(4));
console.log(dataNumbers.reduce((sum, num) => sum + num));
console.log("Array.concat() and Array.splice()");
console.log(dataNumbers.slice(1, 4));
