// const promiseobj1=new Promise((resolve,reject)=>{
      //     const req=true
      //     if(req==true)
      //     {
      //         resolve([1,2,3,4,5])
      //     }
      //     else
      //     {
      //         reject('Request rejected')
      //     }
      // });
      // promiseobj1.then(
      //     (value)=>{
      //         console.log(value);
      //     },
      //     (error)=>{
      //         console.log(error);
      //     }
      // );
      //   const promiseobj1 = new Promise((resolve, reject) => {
      //     const req = true;
      //     if (req == true) {
      //       resolve([1, 2, 3, 4, 5]);
      //     } else {
      //       reject("Request rejected");
      //     }
      //   })
      //     .then((value) => {
      //       console.log(value);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      const promiseobj1 = new Promise((resolve, reject) => {
        const req = 10;
        if (req == 10) {
          resolve(req);
        } else {
          reject("Request rejected");
        }
      })
        .then((value) => {
          console.log(value);
          return value + 10;
        })
        .then((value) => {
          console.log(value);
          return value + 10;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Finally Block");
        });