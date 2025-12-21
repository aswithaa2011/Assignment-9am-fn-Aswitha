

function greeting(name ="Helo"){

    return `welcome ${name}`
}


console.log(greeting());
console.log(greeting("ASwitha"));



//using arrow function 


const greet=name=>"welcome "+ name

console.log(greet("aswitha"))

// arrow function with return

const greets=name=>{
    return `welcome ${name}`
}

console.log(greets())

console.log(greets("Aswitha"))
