

// const book={
//     title:"war and peace",
//     year : 1857,

//     greet(){
//         console.log(book);
        
//     }

// }

// book.greet();
// //destructing

// const {title : TITLE,author="Leo tolstoy"}=book;



// console.log(TITLE)
// console.log(author)


//Create a class Mobile with brand, price.

//Add a method discount() that reduces price by 10%.


class Mobile{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;

    }
    discount(){
        this.price=this.price- (this.price* 0.01)
    }

}

const m1=new Mobile("apple",500000)

console.log(m1);

m1.discount()

console.log("After Discount:", m1.price);