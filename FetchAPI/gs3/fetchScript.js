document.getElementById("btn").addEventListener("click", makeRequest);

//Promise then || Single Data
// function makeRequest() {
//   console.log("Button CLicked");
//   fetch("https://dummyjson.com/products/1")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//Promise then || Multiple Data
// function makeRequest() {
//   console.log("Button CLicked");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach(element => {
//         console.log(element.id)
//         console.log(element.title)
//         console.log(element.body )
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// //Promise then || Multiple Data || Showing in browser
// function makeRequest() {
//   console.log("Button CLicked");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let output = document.getElementById("allpost");
//       data.forEach((element) => {
//         output.innerHTML += `
//         <div class="container mt-5 text-center">
//       <h2 class="text-primary"> ID : ${element.id}</h2>
//       <h2 class="text-success"> TITLE : ${element.title}</h2>
//       <h2 class="text-danger"> BODY : ${element.body}</h2>
//     </div>
//         `;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//Promise then || Single Data || Showing in browser
// function makeRequest() {
//   console.log("Button CLicked");
//   fetch("https://dummyjson.com/products/1")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       document.getElementById("divdata1").innerText = data.title;
//       document.getElementById("divdata2").innerText = data.description;
//       document.getElementById("divdata3").innerText = data.price;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//Async Await with single data
// async function makeRequest() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//    // const res = await fetch("https://dummyjson.com/products/1");
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     console.log(res);
//     const element =await res.json();
//     console.log(element.id);
//     console.log(element.title);
//     console.log(element.body);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Done");
//   }
// }

// //Async Await with single data || in browser
// async function makeRequest() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//    // const res = await fetch("https://dummyjson.com/products/1");
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     console.log(res);
//     const data =await res.json();
//     console.log(data)
//       document.getElementById("divdata1").innerText = data.id;
//       document.getElementById("divdata2").innerText = data.title;
//       document.getElementById("divdata3").innerText = data.body;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Done");
//   }
// }

// //Async Await with multiple data
// async function makeRequest() {
//   try {
//     //const res = await fetch("https://dummyjson.com/products");
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     console.log(res);
//     const data = await res.json();
//     console.log("Data : " + data);
//     data.forEach(element => {
//       console.log("Id : " + element.id);
//     console.log("Title : " + element.title);
//     console.log("Body : " + element.body);
//     });
    
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Done");
//   }
// }

//Asyn Await multiple data in browser 
async function makeRequest() {
  try {
    //const res = await fetch("https://dummyjson.com/products");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.json();
    //console.log("Data : " + data);
    let output=document.getElementById('allpost')
    data.forEach(element => {
      output.innerHTML+= `
              <div class="container mt-5 text-center">
      <h2 class="text-primary"> ID : ${element.id}</h2>
      <h2 class="text-success"> TITLE : ${element.title}</h2>
      <h2 class="text-danger"> BODY : ${element.body}</h2>
    </div>
      `
    });
    
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done");
  }
}

