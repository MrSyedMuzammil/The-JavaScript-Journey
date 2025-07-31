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
