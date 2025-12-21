class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
    console.log(`Current Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
      console.log(`Current Balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
}
const acc1 = new BankAccount("Aswitha", 5000);

acc1.deposit(2000);
acc1.withdraw(3000);
acc1.withdraw(5000);
