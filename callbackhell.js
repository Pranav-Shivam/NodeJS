function getName(name, callback) {
    setTimeout(() => {
      console.log("Inside name");
      callback(name);
    }, 2000);
  }
  
  function getHobbies(name, callback) {
    setTimeout(() => {
      console.log("Inside Hobbies");
      callback(["cricket", "coding", "watching movies"]);
    }, 1000);
  }
  
  console.log("Start the test");
  
  const data = getName("Pranav", (data) => {
    console.log(data);
    getHobbies(data, (hoby) => {
      console.log(hoby);
    });
  });
  
  console.log("End");
  