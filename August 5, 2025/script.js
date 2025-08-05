// console.log("Repitition 1");
// console.log("Repitition 2");
// console.log("Repitition 3");
// console.log("Repitition 4");
// console.log("Repitition 5");

// For loop will work unless the condition is not true
// for (let rep = 0; rep <= 10; rep++) {
//   console.log(`Repitition ${rep}`);
// }

// Looping the elements of an array

const developerProfile = [
  "Syed",
  "Muzammil",
  2025 - 2003,
  "Developer",
  ["Farman Bacha", "Naveed Rehman", "Kashif Afridi"],
];

const profileDataTypes = []; // Here we will add the types of the above syed array through loop

const repeatDataSyedArray = []; // Here we will push all the data from the syed array to this new array

const formattedProfileData = []; // This will contian all the data fromthe syed array but in chronological order

for (let i = 0; i < developerProfile.length; i++) {
  console.log(developerProfile[i]);

  profileDataTypes.push(typeof developerProfile[i]); // This will keep the types of the syed aray in this new array

  repeatDataSyedArray.push(`${developerProfile[i]} Element : ${i}`); // This will add the data of syed array into this new empty array
  formattedProfileData.push(`Element ${i} : ${developerProfile[i]}`); // With this and the one below we can add the elements in order to the new array
  //   formattedProfileData.push("Element " + i + " : " + syed[i]);
}
console.log(profileDataTypes);
console.log(repeatDataSyedArray);
console.log(formattedProfileData);

// Challenge : Find the ages from birth Year Array and put into a new array using loop

const birthYears = [1994, 2001, 2003, 2031];
const ages = [];
const formattedAges = [];

for (let i = 0; i <= birthYears.length; i++) {
  console.log(birthYears[i]);

  ages.push(2025 - birthYears[i]);

  formattedAges.push(
    `BirthYear ${birthYears[i]} : Age ${2025 - birthYears[i]}`
  );
}

// console.log(birthYears, ages);
console.log(formattedAges);
