const friends = [
  "Farman Bacha",
  "Naveed Rehman",
  "Kashif Afridi",
  "Subhan",
  "Saadi",
  "Ubaid Wali",
  "Umer",
  "Irfan",
  "Ijaz",
  "ase besa",
];

console.log(friends);
// Array elements start by 0.
console.log(friends[0]); // 0 will print Farman Bacha
console.log(friends[1]);

// Prints the number of elements in an array
console.log(friends.length);

console.log(friends[friends.length - 4]);
console.log(friends[3]);

// Replacing Elements in an array
// It was declared with const but still can change values. Coz only primitive can not be changed.
friends[9] = "New Friend";
console.log(friends);

const firstName = "Syed";
const muzammil = [firstName, "Muzammil", 2025 - 2003, "Developer", friends];

console.log(muzammil);
console.log(muzammil, friends);

// we can not use all array for calculations in once
// const calcAge(years); This is not acceptable.

const calcAge = (birthYear) => 2025 - birthYear;

const years = [1994, 2001, 2003];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
console.log(age1);

// Making a new array and storing ages there

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);

// Add elements to the array
const allFriends = friends.push("Mabby");
console.log(friends); // Mabby added at last

friends.unshift("Mabby"); // This one adds element at 0 i.e the first element
console.log(friends);

// Removing elements
friends.pop(); // Removes the last element
console.log(friends);

const popped = friends.pop();
console.log(popped); // Till here the last two elements are removed

friends.shift(); // This removes the first element from the array
console.log(friends);

//This tells the index of the element in an array
console.log(friends.indexOf("Saadi"));
console.log(friends.indexOf("Subhan"));

friends.push(23);
console.log(friends.includes("Umer"));
console.log(friends.includes("Ijaz"));
console.log(friends.includes("23"));

// Checking through if

if (friends.includes("Umer")) {
  console.log(`You have a friend called Umer`);
}
