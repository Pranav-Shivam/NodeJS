console.log("Start the ");

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside GET Name");
      resolve(name);
    }, 2000);
  });
}

function getHobbies(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Hobbies");
      resolve(["Cricket", "Coding", "Wasting Time"]);
    }, 2000);
  });
}

//method 1
getName("Pranav")
  .then((nm) => getHobbies(nm))
  .then((hobby) => {
    console.log(hobby);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally Block");
  });

//method 2
// async function showHobby() {
//   try {
//     const nm = await getName("Pranav");
//     const hobby = await getHobbies(nm);
//     console.log(hobby);
//   } catch (error) {
//     console.log("could not fetch hobbies");
//   }
// }
showHobby();
console.log("End the Promise");
