const number = 12000000.11;

// toLocalString
function format(number) {
  return number.toLocaleString();
}


// replace
function format2(number) {
  return number && number.toString().replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}


function format3(number) {
  return number && number.toString().replace(/(\d)(?=(\d{3})+\.)/g, $2 => $2 + ',')
}


console.log(format(number));
console.log(format2(number));
console.log(format3(number));