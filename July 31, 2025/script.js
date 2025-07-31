const age = 14;

const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("You are old enough, You can apply for driver's licence.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are young, you need to wait ${yearsLeft} years to apply for driver's license.`
  );
}

// Type Conversion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Syed"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / 2);

// Guessing

let n = "1" + 1;
n = n - 1;
console.log(n);

// In first step n becomes 11, then 11 -1 = 10

// The Ternary Operator instead of if else block

// const age = 18;
age >= 18
  ? console.log("You can have Driver's license")
  : console.log("You can not have driver's license yet");

const car = age >= 18 ? "Real Car" : "Toy Car";
console.log(car);
