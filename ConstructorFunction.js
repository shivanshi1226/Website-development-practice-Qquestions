function BankAccount(accountNumber, name, type, balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.isActive = true;
    this.deposit = function(amount){
      this.balance = balance + amount;
    }
    this.withdraw = function(amount){
      this.balance = balance - amount;
    }
    this.checkBalance = function(){
      console.log(this.balance);
    }
    this.isActive = function(){
      return this.isActive;
    }
  }
  
  var BankAccount1 = new BankAccount(18108716, "Shivanshi", "Saving", 5000);
  BankAccount1.deposit(200);
  BankAccount1.withdraw(100);
  BankAccount1.checkBalance();
  BankAccount1.isActive();
  
  var BankAccount2 = new BankAccount(18108717, "Abhishek", "Saving", 10000);
  BankAccount2.deposit(1000);
  BankAccount2.withdraw(2000);
  BankAccount2.checkBalance();
  BankAccount2.isActive();
  
  var BankAccount3 = new BankAccount(18108717, "Abhishek", "Saving", 10000);
  BankAccount3.deposit(200);
  BankAccount3.withdraw(200);
  BankAccount3.checkBalance();
  BankAccount3.isActive();
  
  function getTotalBalance(){
    var totalBalance = 0;
    for(var i=0;i<arguments.length;i++){
      var acc = arguments[i];
      if(acc.isActive()){
        totalBalance = totalBalance+acc.balance;
      }
    }
    return totalBalance;
  }
  
  var totalBalance = getTotalBalance(BankAccount1, BankAccount2, BankAccount3);
  console.log(totalBalance);