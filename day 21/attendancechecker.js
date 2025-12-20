

const student =[
    {name:"Aswitha",present:true} ,
        {name:"Pooja",present:false} ,
            {name:"Priya",present:true} ,

                {name:"Moni",present:true}


]

for( let i=0;i<student.length;i++){
    if(student[i].present){
        console.log(student[i].name + " Present");
        
    }
    else{
        console.log(student[i].name +" Absent")
    }
}