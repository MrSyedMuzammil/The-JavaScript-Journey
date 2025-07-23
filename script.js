// --- DAY 1 JAVASCRIPT CONCEPTS ---

// CONCEPT 1: SELECTING ELEMENTS
// To make a webpage interactive, JavaScript first needs to find the HTML elements it will work with.
// We use `document.getElementById()` to grab an element by its unique ID.
// We store these elements in variables to easily reuse them. `const` means the variable cannot be reassigned.
const magicButton = document.getElementById("magic-button");
const messageText = document.getElementById("message-text");

// CONCEPT 2: VARIABLES
// Variables are containers for storing data. Here, we store a simple text string.
const newMessage =
  "Wow! You just used JavaScript to change the text on this page. Great job!";

// CONCEPT 3: FUNCTIONS
// A function is a reusable block of code that performs a specific task.
// We define a function called `changeTheMessage` that will contain the steps for our "magic".
function changeTheMessage() {
  // This is the code that runs when the function is called.

  // CONCEPT 4: DOM MANIPULATION
  // "DOM" stands for Document Object Model - it's the structure of the HTML page.
  // We are manipulating it by changing the `textContent` of our paragraph element.
  messageText.textContent = newMessage;

  // Let's also change the button text to give the user feedback.
  magicButton.textContent = "You did it! ✨";
}

// CONCEPT 5: EVENT LISTENERS
// JavaScript can listen for events, like clicks, mouse movements, or key presses.
// We add an "event listener" to our button.
// It listens for a 'click' event. When that happens, it calls our `changeTheMessage` function.
magicButton.addEventListener("click", changeTheMessage);

// And that's it! With these 5 concepts, you've built your first interactive webpage.
// Try clicking the button to see it in action!
