// Sans fonction Math.min
 function min(x,y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
 }

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9));  // 9
console.log(min(1, 1));   // 1

// Avec Math min
 function min2(x,y) {
  return Math.min(x,y);
 }

console.log(min2(4.5, 5)); // 4.5
console.log(min2(19, 9));  // 9
console.log(min2(1, 1));   // 1
