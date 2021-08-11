function getGcd(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  if (max % min === 0) {
    return min;
  } else {
    return getGcd(max % min, min);
  }
}

function getLcm(a, b) {
  return a * b / getGcd(a, b);
}

console.log(getLcm(24, 12));
