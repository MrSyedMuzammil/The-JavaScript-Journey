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

// ARRAY METHODS

const brothers = [
  "Rahmat Said",
  "Muhammad Ismail",
  "Janoo",
  "Lala G",
  "Fazle Subhan",
  "Mahmood",
  "Syed Muzammil",
];

// ARRAY LENGTH / NUMER OF ELEMENTS
console.log(brothers.length);

/*
// Set the length of an Array
// For example if we have to set the length of array to 4, it will include the first four brothers
brothers.length = 4;
console.log(brothers);
brothers.length = 7;
console.log(brothers); // It will not add back the elements we removed before, we can push or unshift them manually.
*/
console.log(brothers);

// ARRAY TO STRING
let myBrothers = brothers.toString();
console.log(myBrothers);

// GETTING SPECIFIC INDEXED ELEMENT FROM AN ARRAY
let mymiddleBrother = brothers.at(3); // or let middleBrother = brothers[3];
console.log(mymiddleBrother);

// ARRAY JOIN ( == toString() but we can use a separator)
brothers.join(", ");
console.log(brothers); // these are usually used for html to show array elements as strings

// CHANGING ELEMENTS FROM A SPECIFIC INDEX
console.log(brothers.indexOf("Janoo"));
brothers[2] = "Sabz Ali";
console.log(brothers);

// CONCATENATION OF ARRAYS
const myTrusty = brothers.concat(friends);
console.log(myTrusty);
// concat() can also concatenate a string or any number of arrays
const specials = myTrusty.concat("Wo", "Wo");
console.log(specials);

// SPLICING ARRAYS (Splicing adds elements to an array)
specials.splice(specials.length - 3, specials.length - 1, "Ye", "Ye"); // array.splice(startIndex, deleteCount, item1, item2, ...)
// If we want just them to be added to specific index, we should keep the deleteCount 0, it will not delete any element
// specials.splice(specials.length - 3, 0, "Ye", "Ye");
console.log(specials);

// JAVASCRIPT ARRAY toSpliced()
/*
  The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
*/

const splicedSpecials = specials.toSpliced(
  specials.length - 1,
  0,
  "Woohoo",
  "Wohoo"
);
console.log(splicedSpecials);
console.log(specials);

// JAVASCRIPT ARRAY slice()
// The slice() method slices out a piece of an array into a new array:
myTrusty.slice(specials.length - 2, specials.length - 1);
console.log(myTrusty);

// slicing the myTrusty array and removing all the friends except the first two and others too
const outsidersTrusty = myTrusty.slice(7); // This will slice out at index i.e 7 brothers at beginning
console.log(outsidersTrusty);
