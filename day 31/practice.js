// function wait(){
//     return new Promise(()=>{
//         setTimeout((resolve)=>{
//             console.log("hello after 2 sseconds");
            
//         },5000)
//     })
// }

// async function showMessage() {
//        let message=await wait()
       
//        console.log(message)
// }

// showMessage();


// function login(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin") {
//         resolve("Login success");
//       } else {
//         reject("Invalid user");
//       }
//     }, 1000);
//   });
// }

// async function loginstatus() {
//   try {
//     const message = await login("user");
//     console.log(message);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// loginstatus();


localStorage.setItem("username", "Aswitha");

const name = localStorage.getItem("username");
console.log(name);
