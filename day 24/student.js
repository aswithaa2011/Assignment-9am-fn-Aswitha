class student{
    constructor(name,grade){
        this.name=name
        this.grade=grade
    }

showDetails(){
        console.log(`Name: ${this.name} Grade: ${this.grade} `);
        
    }

   
}

const s1=new student("Aswitha","A")

const s2=new student("Janaki","B")
const s3=new student("Logesh","C")

s1.showDetails()
s2.showDetails()
s3.showDetails()