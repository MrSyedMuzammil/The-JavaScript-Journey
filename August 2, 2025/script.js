/* *    The first function is a logger function
 *    The second function directly logs the juicer without storing inside a variable
 *    The third function stores the juice and logs inside of the function
 *    The fourth function stores the return juice and stores inside a varibale that is logged later.
 */

function logGreeting() {
  console.log("Hello World");
}
logGreeting();

function displayJuiceOrder(mangoCount, strawberryCount) {
  console.log(
    `This juice is made of ${mangoCount} mangoes and ${strawberryCount} strawberries. Please have it 😊`
  );
}

displayJuiceOrder(2, 5);

function logJuiceMessage(mangoCount, strawberryCount) {
  const message = `This juice contains ${mangoCount} mangoes and ${strawberryCount} strwaberries as you requested 😊`;
  console.log(message);
}

logJuiceMessage(2, 5);

function createJuiceMessage(mangoCount, strawberryCount) {
  const juice = `The juice is made with ${mangoCount} mangoes and ${strawberryCount} strawberries`;
  return juice;
}

const juiceMessage = createJuiceMessage(2, 5); // Here we stored the returned value from the function inside a variable
console.log(juiceMessage); // The stored value is logged into the console.

// Function Expression
const calculateAge = function (birthYear) {
  return 2025 - birthYear;
};

// Arrow Function
const ageCalculator = (birthYear) => 2025 - birthYear;
const age = ageCalculator(2005);
console.log(`Your are ${age} years old. Thanks!`);

const retirementCalculator = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 60 - age;

  return `${firstName} retires in ${retirement} years `;
};

console.log(retirementCalculator(2005, "Syed"));
console.log(retirementCalculator(2003, "Naveed Saib"));

// Calling a function inside another

const fruitSlices = (fruit) => fruit * 4;

const finalJuice = (mangoCount, strawberryCount) => {
  const mangoPieces = fruitSlices(mangoCount);
  const strawberryPieces = fruitSlices(strawberryCount);

  const juice = `This juice is made up of ${mangoPieces} pieces of mangoes and ${strawberryPieces} pieces of strawberries`;
  return juice;
};

console.log(finalJuice(2, 3));

const calcAge = (birthYear) => 2025 - birthYear;

const calculatedRetirement = (birthYear, firstName) => {

    const calculatedAge = calcAge(birthYear);
    
    const detailedRetirement
}
