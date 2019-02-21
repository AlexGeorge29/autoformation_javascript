function calculer(nb1, opérateur, nb2) {
  let result = 0
  if (opérateur === "+") {
    result = nb1 + nb2
  } else if (opérateur === "-") {
    result = nb1 - nb2
  } else if (opérateur === "*") {
    result = nb1 * nb2
  } else {
    result = nb1 / nb2
  }
  return result
}

console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity
