

// // let veges=['carrot ','beetroot' ,{name:'aswitha',age:23},function Sub(a,b) {return a-b},true]


// // console.log(veges[2].age);
// // console.log(veges[3](4,5))




// // veges.push("orange");// add on last
// // veges.unshift("mango");// add on first




// // console.log(veges)

// // veges.shift()

// // console.log(veges)

// // console.log(veges.pop())

// // console.log(veges)

// // for(v of veges){
// //     console.log(v)
// // }

// // for(vege in veges){
// //     console.log(veges[vege]);
    
// // }  not used 


// // for (let i=0;i<=3;i++){
// //     console.log(veges[i])
// // }

// let mat=[[1,2,3],
//          [4,5,6],  
//          [7,8,9]
// ]

// // for(let i=0;i<mat.length;i++){
// //     for(let j=0;j<mat.length;j++){

// //         console.log(mat[i][j]);
        
// //     }
// // }

// console.log(mat[0][2 ]);


// square of numbers



// numbers.forEach((f)=>{
//     console.log(f);
    

// })


const numbers=[1,2,3,5,10]

 numbers.forEach(num=>{
    console.log(num);
    
 })

 const squarednum=numbers.map(num=> num * num)
 console.log(squarednum)


 const Greaterthen50=squarednum.filter(num =>num>50)

 console.log(Greaterthen50)