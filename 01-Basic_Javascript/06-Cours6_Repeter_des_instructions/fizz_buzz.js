// Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

// Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
// Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
// Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
// for (let tour = 1; tour <= nbTours; tour++)
for (let nombre = 1; nombre <= 100; nombre++) {
  if (nombre % 5 === 0 && nombre % 3 === 0) {
    console.log("FizzBuzz");
  } else if (nombre % 5 === 0 && nombre % 3 !== 0) {
    console.log("Buzz");
  } else if (nombre % 3 === 0 ) {
    console.log("Fizz");
  } else {
    console.log(nombre);
  }
}
