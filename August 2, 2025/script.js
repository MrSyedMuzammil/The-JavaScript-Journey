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
