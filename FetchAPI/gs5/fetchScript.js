document.getElementById("btn").addEventListener("click", makeRequest);


//Promise then || POST Data
function makeRequest(e) {
  e.preventDefault()
  let nm=document.getElementById('name').value
  let jb=document.getElementById('job').value
  console.log("Button Clicked");
  const myInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name:nm,job:jb})
  }
  console.log("Data strigify: "+myInit.body)
  fetch("https://reqres.in/api/users", myInit)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      //console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}


// //Async and AWAit then || POST Data
// async function makeRequest() {
//   try {
//     console.log("Button Clicked")
//     const myInit={
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body:'{"name":"Surbhi Shivam","job":"SDE-pro"}'
//     }
//     const res=await fetch("https://reqres.in/api/users", myInit)
//     if (!res.ok) {
//       throw Error(res.statusText)
//     }
//     const data=await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
