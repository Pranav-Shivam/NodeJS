document.getElementById("btn").addEventListener("click", makeRequest);
// function makeRequest() {
//   console.log("Button click");
//   const fetchPromise = fetch("content.txt");
//   console.log(fetchPromise);
//   fetchPromise
//     .then((res) => {
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       return data.split(" ");
//     })
//     .then((data) => {
//       var c = 0;
//       data.forEach((x) => {
//         if (x != " ") {
//           console.log(x);
//           c++;
//         }
//       });
//       console.log(c);
//     });
// }

//If any error occurs in the file-URL or Network error
// function makeRequest()
// {
//     console.log('Button Click');
//     fetch('context1.txt').then((res)=>{

//         if(!res.ok)
//         {
//             throw(res.statusText);
//         }
//         console.log(res);
//         return res.text();
//     }).then((data)=>{
//         console.log(data);
//     }).catch((err)=>console.log(err))
// }

//Showing data in HTML div
// function makeRequest() {
//   console.log("Button Click");
//   fetch("content.txt")
//     .then((res) => {
//       if (!res.ok) {
//         throw res.statusText;
//       }
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//       document.getElementById('divdata').innerText=data
//     })
//     .catch((err) => console.log(err));
// }

// //Async & await
// async function makeRequest() {
//   try {
//     console.log("Button CLicked");
//     const res = await fetch("content.txt");
//     console.log(res);
//     const data = await res.text();
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

// //With error handling
// async function makeRequest() {
//   try {
//     console.log("Button CLicked");
//     const res = await fetch("content.txt");
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     console.log(res);
//     const data = await res.text();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

//With error handling || Error handling || showing in data div section
async function makeRequest() {
  try {
    console.log("Button CLicked");
    const res = await fetch("content.txt");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.text();
    console.log(data);
    document.getElementById('divdata').innerText=data
  } catch (error) {
    console.log(error);
  }
}
