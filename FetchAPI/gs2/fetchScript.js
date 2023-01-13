document.getElementById("btn").addEventListener("click", makeRequest);

//If any error occurs in the file-URL or Network error
// function makeRequest() {
//   console.log("Button Click");
//   fetch("content.json")
//     .then((res) => {
//       if (!res.ok) {
//         throw res.statusText;
//       }
//       console.log(res);
//       const dt = res.json();
//       console.log(dt);
//       return dt;
//     })
//     .then((data) => {
//       console.log(data);
//       console.log("data-name",data.name);
//       console.log("data-roll",data.roll_no);
//       console.log("data-age",data.age);
//     })
//     .catch((err) => console.log(err));
// }

//Showing data in HTML div
// function makeRequest() {
//   console.log("Button Click");
//   fetch("content.json")
//     .then((res) => {
//       if (!res.ok) {
//         throw res.statusText;
//       }
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       document.getElementById('divdata1').innerText=data.name
//       document.getElementById('divdata2').innerText=data.roll_no
//       document.getElementById('divdata3').innerText=data.age

//     })
//     .catch((err) => console.log(err));
// }

// Async Await || With error handling
// async function makeRequest() {
//   try {
//     console.log("Button CLicked");
//     const res = await fetch("content.json");
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

//With error handling || Error handling || showing in data div section
async function makeRequest() {
  try {
    console.log("Button CLicked");
    const res = await fetch("content.json");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    console.log(res);
    const data = await res.json();
    console.log(data);
    document.getElementById("divdata1").innerText = data.name;
    document.getElementById("divdata2").innerText = data.roll_no;
    document.getElementById("divdata3").innerText = data.age;
  } catch (error) {
    console.log(error);
  }
}

