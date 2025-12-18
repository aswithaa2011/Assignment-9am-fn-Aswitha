const USER_ID = Symbol("userId");

const user = {
  name: "Aswitha",
  age: 22,
  [USER_ID]: "UID-001"
};

console.log(user.name);         
console.log(user[USER_ID]);   
