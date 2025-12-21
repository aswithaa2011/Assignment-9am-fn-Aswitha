class user{
    constructor(name,email){
        this.name=name
        this.email=email

       
    }
    login()
{
    if(this.name=="Aswitha" && this.email=="Aswitha@123")
    {console.log("login successful");
    }
    else{
        console.log("Invalid username or password")
    }
}


}

const u1=new user("Aswitha","Aswitha@123")

u1.login();

