const user = {
    name: "Aswitha",
    email: "aswitha@gmail.com",
    isLoggedIn: false,

    login: function () {
        if (!this.isLoggedIn) {
            this.isLoggedIn = true;
            console.log(this.name + " logged in successfully");
        } else {
            console.log(this.name + " is already logged in");
        }
    },

    logout: function () {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            console.log(this.name + " logged out successfully");
        } else {
            console.log(this.name + " is already logged out");
        }
    }
};

user.login();
user.login();
user.logout();
user.logout();
