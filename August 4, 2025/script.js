const syed = {
  firstName: "Syed",
  lastName: "Muzammil",
  age: 2025 - 2003,
  job: "Developer",
  friends: ["Farman bacha", "Naveed Rehman", "Kashif Afridi", "others"],
};

console.log(syed);

// Using dot Notation to access the objects data
console.log(syed.lastName);
console.log(`Syed ${syed.lastName} is ${syed.age} years old`);

const interestedIn = prompt(
  "What do you want to know about Syed ? Choose between firstName, lastName, age, job and friends"
);

// This will not work as with dot notation we can not add expression
// console.log(syed.interestedIn);

// With using the bracket notation we can access, as it take expressions
// if age is clicked, the age value should go to console and so does for others
// console.log(syed[interestedIn]);

// if the user inputs some other property that does not exist like location than it shows undefined

if (syed[interestedIn]) {
  console.log(syed[interestedIn]);
} else {
  console.log(
    `Wrong Request! Please choose  between firstName, lastName, age, job and friends `
  );
}

// Challenge
// Syed has 4 friends, and his best friend is called Farman Bacha

console.log(
  `${syed.firstName} has ${syed.friends.length} friends, and his best friend is called ${syed.friends[0]}`
);
