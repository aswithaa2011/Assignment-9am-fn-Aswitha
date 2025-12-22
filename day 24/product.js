class product{
    constructor(name,price){
        this.name=name
        this.price=price
    }


    discount(){
        this.price=this.price-(this.price*0.2)
    }


}

const p1=new product("laptop",60000)
console.log(p1)

p1.discount()

console.log(p1.price)