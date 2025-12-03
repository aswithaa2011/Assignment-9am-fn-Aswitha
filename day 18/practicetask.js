//Declare one variable with var, let, and const
// let a=10;
// let b=20;
// let c=30;

// console.log(a,b,c)


//2. Try to redeclare a let variable (shows error)
// let b=30

// console.log(b)

//3. Create a TDZ (Temporal Dead Zone) error on purpose
// console.log(x)

// let x=15;

//  4. Test variable visibility inside and outside a block
// {
// let a="hi"
// const b="hello"
// var c="welcome"

// console.log(a)
// console.log(b)
// console.log(c)
// }
// console.log(a) //error
// console.log(b) //erorr
// console.log(c)  //works

const person={ name:"aswitha",age:23};

person.age=24

console.log(person)

